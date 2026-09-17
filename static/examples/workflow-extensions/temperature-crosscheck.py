#!/usr/bin/env python3
import argparse, hashlib, platform
from pathlib import Path
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from PIL import Image

NASA_URL="https://data.giss.nasa.gov/gistemp/"
HAD_URL="https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html"

def sha256(path):
    h=hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda:f.read(1024*1024),b""): h.update(block)
    return h.hexdigest()

def main():
    p=argparse.ArgumentParser(description="Rebase and cross-check NASA GISTEMP v4 and HadCRUT5.1 annual global temperature series.")
    p.add_argument("--nasa",required=True,type=Path)
    p.add_argument("--hadcrut",required=True,type=Path)
    p.add_argument("--outdir",default=Path("."),type=Path)
    args=p.parse_args()
    args.outdir.mkdir(parents=True,exist_ok=True)
    csv_path=args.outdir/"temperature-aligned.csv"
    png_path=args.outdir/"temperature-comparison.png"
    md_path=args.outdir/"temperature-crosscheck.md"

    if args.nasa.read_text(encoding="utf-8-sig").splitlines()[0]!="Land-Ocean: Global Means":
        raise ValueError("Unexpected NASA descriptive line")
    n=pd.read_csv(args.nasa,skiprows=1,na_values=["***"])[["Year","J-D"]].rename(columns={"Year":"year","J-D":"nasa_anomaly_c"})
    h=pd.read_csv(args.hadcrut).rename(columns={"Time":"year","Anomaly (deg C)":"hadcrut_anomaly_c","Lower confidence limit (2.5%)":"hadcrut_lower_95_c","Upper confidence limit (97.5%)":"hadcrut_upper_95_c"})
    if list(h.columns)!=["year","hadcrut_anomaly_c","hadcrut_lower_95_c","hadcrut_upper_95_c"]:
        raise ValueError("Unexpected HadCRUT columns")
    for name,df in (("NASA",n),("HadCRUT",h)):
        df["year"]=pd.to_numeric(df["year"],errors="raise")
        if not np.all(df.year==np.floor(df.year)): raise ValueError(f"{name}: non-integer year")
        df["year"]=df.year.astype(int)
        if not df.year.is_unique or not df.year.is_monotonic_increasing: raise ValueError(f"{name}: invalid year sequence")
    n["nasa_anomaly_c"]=pd.to_numeric(n.nasa_anomaly_c,errors="coerce")
    for c in h.columns[1:]: h[c]=pd.to_numeric(h[c],errors="coerce")
    if not ((h.hadcrut_lower_95_c<=h.hadcrut_anomaly_c)&(h.hadcrut_anomaly_c<=h.hadcrut_upper_95_c)).all():
        raise ValueError("HadCRUT estimate outside confidence limits")
    nb=n.loc[n.year.between(1991,2020),"nasa_anomaly_c"]
    hb=h.loc[h.year.between(1991,2020),"hadcrut_anomaly_c"]
    if not (len(nb)==nb.notna().sum()==30 and len(hb)==hb.notna().sum()==30):
        raise ValueError("Expected 30 complete annual values per source in 1991-2020")
    no,ho=float(nb.mean()),float(hb.mean())
    n["nasa_rebased_c"]=n.nasa_anomaly_c-no
    h["hadcrut_rebased_c"]=h.hadcrut_anomaly_c-ho
    h["hadcrut_lower_rebased_95_c"]=h.hadcrut_lower_95_c-ho
    h["hadcrut_upper_rebased_95_c"]=h.hadcrut_upper_95_c-ho
    a=n.merge(h,on="year",validate="one_to_one").query("1980 <= year <= 2024").copy()
    required=["nasa_anomaly_c","nasa_rebased_c","hadcrut_anomaly_c","hadcrut_lower_95_c","hadcrut_upper_95_c","hadcrut_rebased_c","hadcrut_lower_rebased_95_c","hadcrut_upper_rebased_95_c"]
    if len(a)!=45 or a.year.tolist()!=list(range(1980,2025)) or a[required].isna().any().any():
        raise ValueError("Incomplete or misdated 1980-2024 comparison")
    a["difference_nasa_minus_hadcrut_c"]=a.nasa_rebased_c-a.hadcrut_rebased_c
    cols=["year"]+required+["difference_nasa_minus_hadcrut_c"]
    a[cols].to_csv(csv_path,index=False,float_format="%.8f")
    d=a.difference_nasa_minus_hadcrut_c
    imax=d.abs().idxmax()
    metrics={"nasa_offset_c":no,"hadcrut_offset_c":ho,"matched_years":int(len(a)),"mean_difference_c":float(d.mean()),"rmse_c":float(np.sqrt(np.mean(d*d))),"maximum_absolute_difference_c":float(d.abs().max()),"maximum_absolute_difference_year":int(a.loc[imax,"year"]),"signed_difference_at_maximum_c":float(a.loc[imax,"difference_nasa_minus_hadcrut_c"])}

    plt.rcParams.update({"font.size":9,"axes.titlesize":10,"axes.labelsize":10,"legend.fontsize":8,"xtick.labelsize":8,"ytick.labelsize":8})
    colors={"NASA":"#0072B2","HadCRUT":"#D55E00"}
    fig,axs=plt.subplots(2,1,figsize=(7.4,6.4),sharex=True,layout="constrained")
    axs[0].plot(a.year,a.nasa_anomaly_c,color=colors["NASA"],lw=1.8,marker="o",ms=2.8,label="NASA GISTEMP v4 (1951–1980)")
    axs[0].plot(a.year,a.hadcrut_anomaly_c,color=colors["HadCRUT"],lw=1.8,marker="s",ms=2.6,label="HadCRUT5.1 (1961–1990)")
    axs[0].set_title("Original anomalies use different reference periods",loc="left")
    axs[0].set_ylabel("Temperature anomaly (°C)")
    axs[1].plot(a.year,a.nasa_rebased_c,color=colors["NASA"],lw=1.8,marker="o",ms=2.8,label="NASA GISTEMP v4")
    axs[1].plot(a.year,a.hadcrut_rebased_c,color=colors["HadCRUT"],lw=1.8,marker="s",ms=2.6,label="HadCRUT5.1")
    axs[1].set_title("Shared 1991–2020 baseline shows close year-to-year agreement",loc="left")
    axs[1].set_xlabel("Year"); axs[1].set_ylabel("Rebased anomaly (°C)")
    axs[1].set_xlim(1979.3,2024.7)
    for ax in axs:
        ax.axhline(0,color="#777777",lw=.7,zorder=0)
        ax.legend(frameon=False,ncol=2,loc="upper left")
        ax.margins(y=.10)
        ax.spines[["top","right"]].set_visible(False)
    fig.savefig(png_path,dpi=300,facecolor="white")
    plt.close(fig)
    with Image.open(png_path) as im:
        im.load()
        if im.format!="PNG" or im.width<2000 or im.height<1700: raise ValueError("Unexpected PNG format or dimensions")
        png_size=im.size

    hashes={"NASA-GISTEMP-v4-original.csv":sha256(args.nasa),"HadCRUT5-original.csv":sha256(args.hadcrut)}
    versions={"python":platform.python_version(),"numpy":np.__version__,"pandas":pd.__version__,"matplotlib":matplotlib.__version__,"pillow":Image.__version__}
    report=f"""# Annual global temperature cross-check

## Results

NASA GISTEMP v4 and HadCRUT5.1 were separately rebased to their own 1991–2020 means and compared on shared annual observations from 1980 through 2024.

- NASA offset subtracted: **{no:.8f} °C**
- HadCRUT5.1 offset subtracted: **{ho:.8f} °C**
- Matched-year count: **{len(a)}**
- Mean difference (NASA − HadCRUT5.1): **{d.mean():.8f} °C**
- RMSE: **{np.sqrt(np.mean(d*d)):.8f} °C**
- Maximum absolute difference: **{d.abs().max():.8f} °C** in **{int(a.loc[imax,'year'])}** (signed NASA − HadCRUT5.1: {a.loc[imax,'difference_nasa_minus_hadcrut_c']:.8f} °C)

## Inputs and validation

NASA GISTEMP v4 Land-Ocean Global Means used the J-D annual column, skipped the descriptive first line, treated *** as missing, and uses a 1951–1980 anomaly baseline. Source page: {NASA_URL}

HadCRUT5.1.0.0 used the analysis ensemble-mean annual series with a 1961–1990 anomaly baseline. Its 2.5% and 97.5% confidence-limit columns are retained. Source page: {HAD_URL}

Both inputs are annual series in degrees Celsius. Years were required to be integers, unique, and strictly increasing. Each source had exactly 30 complete annual point estimates in 1991–2020. The 45 aligned comparison years and HadCRUT confidence limits were complete, and every HadCRUT point estimate lay within its stated interval.

Input SHA-256:
- NASA-GISTEMP-v4-original.csv: {hashes['NASA-GISTEMP-v4-original.csv']}
- HadCRUT5-original.csv: {hashes['HadCRUT5-original.csv']}

## Method and limitations

Each source's 1991–2020 arithmetic mean was subtracted from that source. The HadCRUT offset was also subtracted from its confidence limits. Differences are NASA minus HadCRUT5.1.

Different original baselines, units, annual dates, and missing data were checked before methodological interpretation. Remaining differences may reflect coverage, infilling, source observations, homogenization, ensemble construction, rounding, and other methodological choices. These analyses share observations and are not statistically independent measurements; neither is designated ground truth. The plot compares point estimates and is not a full uncertainty analysis. HadCRUT uncertainty is retained in the CSV but is not propagated into comparison metrics or plotted.

## Reproducibility

Command-line script inputs: --nasa, --hadcrut, and optional --outdir.

Python {versions['python']}; NumPy {versions['numpy']}; pandas {versions['pandas']}; Matplotlib {versions['matplotlib']}; Pillow {versions['pillow']}.
"""
    md_path.write_text(report,encoding="utf-8")
    print({"metrics":metrics,"input_hashes":hashes,"versions":versions,"png_size":png_size})

if __name__=="__main__":
    main()
