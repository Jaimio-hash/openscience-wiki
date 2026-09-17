# Annual global temperature cross-check

## Results

NASA GISTEMP v4 and HadCRUT5.1 were separately rebased to their own 1991–2020 means and compared on shared annual observations from 1980 through 2024.

- NASA offset subtracted: **0.61266667 °C**
- HadCRUT5.1 offset subtracted: **0.53799554 °C**
- Matched-year count: **45**
- Mean difference (NASA − HadCRUT5.1): **0.00514589 °C**
- RMSE: **0.01829900 °C**
- Maximum absolute difference: **0.04632368 °C** in **2024** (signed NASA − HadCRUT5.1: 0.04632368 °C)

## Inputs and validation

NASA GISTEMP v4 Land-Ocean Global Means used the J-D annual column, skipped the descriptive first line, treated *** as missing, and uses a 1951–1980 anomaly baseline. Source page: https://data.giss.nasa.gov/gistemp/

HadCRUT5.1.0.0 used the analysis ensemble-mean annual series with a 1961–1990 anomaly baseline. Its 2.5% and 97.5% confidence-limit columns are retained. Source page: https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html

Both inputs are annual series in degrees Celsius. Years were required to be integers, unique, and strictly increasing. Each source had exactly 30 complete annual point estimates in 1991–2020. The 45 aligned comparison years and HadCRUT confidence limits were complete, and every HadCRUT point estimate lay within its stated interval.

Input SHA-256:
- NASA-GISTEMP-v4-original.csv: c9ce0750ca93a8241c42fe86cd5bf54d07b28b21ae650b0ae49a206907018cd9
- HadCRUT5-original.csv: 16633b8d7c4fe6026d53549f509355964ab56ca689a6f007f27d4a5fa87d6ec6

## Method and limitations

Each source's 1991–2020 arithmetic mean was subtracted from that source. The HadCRUT offset was also subtracted from its confidence limits. Differences are NASA minus HadCRUT5.1.

Different original baselines, units, annual dates, and missing data were checked before methodological interpretation. Remaining differences may reflect coverage, infilling, source observations, homogenization, ensemble construction, rounding, and other methodological choices. These analyses share observations and are not statistically independent measurements; neither is designated ground truth. The plot compares point estimates and is not a full uncertainty analysis. HadCRUT uncertainty is retained in the CSV but is not propagated into comparison metrics or plotted.

## Reproducibility

Command-line script inputs: --nasa, --hadcrut, and optional --outdir.

Python 3.12.14; NumPy 2.5.3; pandas 2.3.3; Matplotlib 3.11.1; Pillow 12.3.0.
