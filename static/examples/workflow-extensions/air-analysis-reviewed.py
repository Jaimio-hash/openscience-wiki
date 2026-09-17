#!/usr/bin/env python3
"""Aggregate hourly Aotizhongxin PM2.5 to daily means using an 18/24 teaching rule."""
import argparse, hashlib, platform
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
REQ={"year","month","day","hour","PM2.5","station"}; STATION="Aotizhongxin"; MIN_HOURS=18
def digest(p):
 h=hashlib.sha256()
 with p.open("rb") as f:
  for b in iter(lambda:f.read(1048576),b""): h.update(b)
 return h.hexdigest()
def load(paths):
 fs=[]; hs=[]
 for p in paths:
  d=pd.read_csv(p,na_values=["NA"],keep_default_na=True); m=REQ-set(d.columns)
  if m: raise ValueError(f"{p}: missing columns {sorted(m)}")
  fs.append(d[list(REQ)].copy()); hs.append((p.name,digest(p)))
 d=pd.concat(fs,ignore_index=True)
 d["timestamp"]=pd.to_datetime(d[["year","month","day","hour"]],errors="raise")
 d["PM2.5"]=pd.to_numeric(d["PM2.5"],errors="coerce")
 return d.sort_values("timestamp",kind="stable").reset_index(drop=True),hs
def validate(d):
 s=sorted(d.station.dropna().astype(str).unique())
 if s!=[STATION]: raise ValueError(f"Expected {STATION}; observed {s}")
 dup=int(d.timestamp.duplicated(keep=False).sum())
 if dup: raise ValueError(f"Duplicate timestamps detected in {dup} rows")
 off=int((d.timestamp.dt.minute.ne(0)|d.timestamp.dt.second.ne(0)).sum())
 if off: raise ValueError(f"{off} timestamps not aligned to hour")
 exp=pd.date_range(d.timestamp.min(),d.timestamp.max(),freq="h")
 return {"station":s[0],"rows":len(d),"start":d.timestamp.min(),"end":d.timestamp.max(),
 "duplicate_rows":dup,"non_hourly_rows":off,
 "missing_hourly_timestamps":len(exp.difference(pd.DatetimeIndex(d.timestamp))),
 "missing_pm25":int(d["PM2.5"].isna().sum())}
def summarize(d):
 d=d.assign(date=d.timestamp.dt.normalize()); g=d.groupby(["date","station"],sort=True,observed=True)
 x=g["PM2.5"].agg(valid_hours="count",raw_mean="mean").reset_index()
 x=x.merge(g.size().rename("hourly_rows").reset_index(),on=["date","station"],validate="one_to_one")
 x["expected_hours"]=24; x["missing_pm25_hours"]=24-x.valid_hours
 x["completeness_pct"]=100*x.valid_hours/24; x["meets_18h_rule"]=x.valid_hours.ge(MIN_HOURS)
 x["pm25_mean_ug_m3"]=x.raw_mean.where(x.meets_18h_rule); x["date"]=x.date.dt.strftime("%Y-%m-%d")
 return x[["date","station","pm25_mean_ug_m3","valid_hours","expected_hours",
 "missing_pm25_hours","completeness_pct","meets_18h_rule","hourly_rows"]]
def plot(x,p):
 dates=pd.to_datetime(x.date); ok=x.meets_18h_rule
 fig,ax=plt.subplots(figsize=(7.2,4.2),constrained_layout=True)
 ax.plot(dates[ok],x.loc[ok,"pm25_mean_ug_m3"],color="#276FBF",lw=1.8,marker="o",ms=5,
 label="Daily mean (at least 18 valid hours)")
 if (~ok).any(): ax.scatter(dates[~ok],np.zeros((~ok).sum()),facecolors="none",
  edgecolors="#D55E00",s=36,label="Mean withheld (fewer than 18 valid hours)")
 ax.set_title("Daily PM2.5 means under the 18-hour teaching rule",loc="left")
 ax.set_xlabel("Date in January 2016"); ax.set_ylabel("PM2.5 (µg/m³)")
 ax.grid(axis="y",color="#D9D9D9",lw=.6); ax.margins(x=.04); ax.set_ylim(bottom=0); ax.legend(frameon=False)
 fig.savefig(p,dpi=300,bbox_inches="tight"); fig.canvas.draw(); r=fig.canvas.get_renderer()
 bad=[]
 for t in fig.findobj(matplotlib.text.Text):
  if t.get_visible() and t.get_text().strip():
   b=t.get_window_extent(r)
   if not(fig.bbox.contains(b.x0,b.y0) and fig.bbox.contains(b.x1,b.y1)): bad.append(t.get_text())
 if bad: raise RuntimeError(f"Text outside canvas: {bad}")
 plt.close(fig)
def write_report(p,hs,c,x,csvp,pngp):
 hashes="\n".join(f"- {n}: SHA-256 {h}" for n,h in hs)
 p.write_text(f"""# Aotizhongxin PM2.5 analysis, {c['start']:%Y-%m-%d} through {c['end']:%Y-%m-%d}

## Scope and provenance

Historical teaching subset of UCI Beijing Multi-Site Air Quality (DOI 10.24432/C5RK5G; CC BY 4.0). Original source: https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data

Only PM2.5 was analyzed. Its source unit is micrograms per cubic metre (µg/m³). Inputs were read unchanged; literal NA values remained missing and were not imputed.

Input hashes:
{hashes}

## Methods

Inputs were combined, timestamps constructed from year/month/day/hour, rows sorted, and duplicate timestamps rejected. A daily mean was emitted only with at least {MIN_HOURS} valid PM2.5 hours out of 24. Completeness equals valid_hours / 24 × 100. This is a teaching completeness rule, not a regulatory AQI rule.

## Checks

- Station: {c['station']} (expected {STATION})
- Range: {c['start']:%Y-%m-%d %H:%M} through {c['end']:%Y-%m-%d %H:%M}
- Hourly rows: {c['rows']}
- Duplicate timestamp rows: {c['duplicate_rows']}
- Non-hour-aligned rows: {c['non_hourly_rows']}
- Missing hourly timestamps within range: {c['missing_hourly_timestamps']}
- Missing PM2.5: {c['missing_pm25']} of {c['rows']} ({100*c['missing_pm25']/c['rows']:.2f}%)
- Daily rows: {len(x)}
- Days meeting rule: {int(x.meets_18h_rule.sum())}
- Days with mean withheld: {int((~x.meets_18h_rule).sum())}

## Outputs

- {csvp.name}: daily PM2.5 means and completeness fields.
- {pngp.name}: daily mean series.
- air-analysis.py: reusable CLI accepting one or more CSV inputs and an output prefix.

## Runtime

- Python: {platform.python_version()}
- pandas: {pd.__version__}
- NumPy: {np.__version__}
- Matplotlib: {matplotlib.__version__}

## Limitations

This seven-day subset is descriptive. Missing values were not filled. No other pollutants, health effects, causes, or regulatory AQI were analyzed.
""",encoding="utf-8")
def main():
 ap=argparse.ArgumentParser(); ap.add_argument("inputs",nargs="+",type=Path)
 ap.add_argument("--output-prefix",required=True,type=Path); ap.add_argument("--report",type=Path)
 a=ap.parse_args(); d,hs=load(a.inputs); c=validate(d); x=summarize(d)
 csvp=a.output_prefix.with_suffix(".csv"); pngp=a.output_prefix.with_suffix(".png")
 mdp=a.report or a.output_prefix.with_name(a.output_prefix.name+"-report.md")
 x.to_csv(csvp,index=False,na_rep="NA",float_format="%.3f"); plot(x,pngp)
 write_report(mdp,hs,c,x,csvp,pngp); print(x.to_string(index=False)); print("CHECKS",c)
if __name__=="__main__": main()
