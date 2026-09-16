# Theoph bounded NCA report

## Scope

Mode: execute. This is a descriptive calculation through each subject actual last observation. AUC infinity, lambda-z, half-life, clearance, dosing advice, and clinical conclusions were not calculated.

## Evidence ledger

| Item | Value | Unit | Status | Source |
|---|---|---|---|---|
| Input | theoph-input.csv | — | file_observed | Unchanged prior export of datasets::Theoph |
| Input MD5 | ceeddd6eee58a177bed5a1a4d136ec7c | — | derived | Base-R md5sum before and after |
| Rows | 132 | observations | file_observed | Input CSV |
| Subjects | 12 | subjects | derived | Input CSV |
| Records per subject | 11 | observations/subject | derived | Input CSV |

## Method and dimensional check

Cmax is the highest observed concentration. Tmax is the earliest observed time attaining Cmax. Both are observed and not interpolated.

The prespecified all-linear trapezoidal rule was AUC_segment = (C_i + C_(i+1))/2 * (t_(i+1)-t_i). AUC0-last is the sum from observed time zero through actual last time.

Units: (mg/L)*h = mg*h/L. Independently, 1 mg/L = 1000 ng/mL and 1 mg*h/L = 1000 ng*h/mL.

## Results

| Subject | Cmax (mg/L) | Earliest Tmax (h) | AUC0-last (mg*h/L) | Last time (h) |
|---:|---:|---:|---:|---:|
| 1 | 10.50 | 1.12 | 148.923050 | 24.37 |
| 2 | 8.33 | 1.92 | 91.526800 | 24.30 |
| 3 | 8.20 | 1.02 | 99.286500 | 24.17 |
| 4 | 8.60 | 1.07 | 106.796300 | 24.65 |
| 5 | 11.40 | 1.00 | 121.294400 | 24.35 |
| 6 | 6.44 | 1.15 | 73.775550 | 23.85 |
| 7 | 7.09 | 3.48 | 90.753400 | 24.22 |
| 8 | 7.56 | 2.02 | 88.559950 | 24.12 |
| 9 | 9.03 | 0.63 | 86.326150 | 24.43 |
| 10 | 10.21 | 3.55 | 138.368100 | 23.70 |
| 11 | 8.00 | 0.98 | 80.093600 | 24.08 |
| 12 | 9.75 | 3.52 | 119.977500 | 24.15 |

## Checks

- Standalone script and independent Notebook calculation: exact agreement within tolerance 1e-12 (TRUE).
- Input hash before and after: ceeddd6eee58a177bed5a1a4d136ec7c; unchanged.
- Retained nonzero time-zero observations: Subject 1 = 0.74 mg/L; Subject 7 = 0.15 mg/L; Subject 10 = 0.24 mg/L.
- No missing required values or duplicate Subject-Time pairs; within-subject times were strictly increasing after sorting.
- Actual observation windows vary: Subject 1: 0-24.37 h; Subject 2: 0-24.30 h; Subject 3: 0-24.17 h; Subject 4: 0-24.65 h; Subject 5: 0-24.35 h; Subject 6: 0-23.85 h; Subject 7: 0-24.22 h; Subject 8: 0-24.12 h; Subject 9: 0-24.43 h; Subject 10: 0-23.70 h; Subject 11: 0-24.08 h; Subject 12: 0-24.15 h.

## Limits and uncertainty

The all-linear rule can overestimate area on a convex declining curve relative to log-down integration, particularly across sparse late intervals.

Because actual last times vary, these AUC0-last values do not share identical integration windows and should not be compared as though they do.

No extrapolated exposure or clinical inference is included.

## Reproducibility manifest

- R: R version 4.4.3 (2025-02-28)
- Base R only; deterministic arithmetic; no random seed applicable.
- Input: theoph-input.csv
- Script: theoph-nca.R
- Output: theoph-nca-summary.csv
- Report: theoph-nca-report.md
- Supporting reference: attached official nca-conventions.md (session input version 184c02bc-6728-41a5-b859-0c29fbc1b763).

## Handoff

Completed the requested bounded descriptive NCA. No requested branch remains blocked; all further PK inference is intentionally out of scope.
