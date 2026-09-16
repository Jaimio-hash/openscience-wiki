# Theoph descriptive data check

## Scope

Descriptive baseline only. No NCA metrics were calculated. Observed time-zero concentrations were retained unchanged.

## Evidence ledger

| Item | Observed value | Status | Source |
|---|---:|---|---|
| Rows | 132 | file_observed | datasets::Theoph |
| Subjects | 12 | file_observed | datasets::Theoph |
| Observations per subject | 11 | file_observed | datasets::Theoph |
| Missing values (all columns) | 0 | derived | base R is.na check |
| Duplicate Subject-Time records | 0 | derived | duplicated check |
| Exact duplicate rows | 0 | derived | duplicated check |
| Time-zero observations | 12 | derived | Time == 0 |

## Documented variables and units

- Wt: subject weight in kg.
- Dose: oral theophylline dose in mg/kg.
- Time: time since dose in hours.
- conc: theophylline concentration in mg/L.

The units above were read from the installed datasets::Theoph help source.

## Time-zero observations retained unchanged

 Subject Time conc
       1    0 0.74
       2    0 0.00
       3    0 0.00
       4    0 0.00
       5    0 0.00
       6    0 0.00
       7    0 0.15
       8    0 0.00
       9    0 0.00
      10    0 0.24
      11    0 0.00
      12    0 0.00

## QC interpretation

- The expected balanced design was confirmed: 132 rows, 12 subjects, and 11 observations per subject.
- Missingness and duplicate checks were performed without modifying the source observations.
- The exported CSV preserves the observed time-zero concentrations.
- NCA and terminal-phase selection were intentionally not performed.
