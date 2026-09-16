# Theoph Specialist worked example

Recorded on 2026-09-16 in Open-Science 0.30.1, with the official Pharmacometrics PK/PD Design Specialist 1.0.0, the explicitly selected pkpd-modeling Skill, Codex subscription / gpt-5.6-sol, and R 4.4.3.

## Inputs and attribution

- `theoph-input.csv`: unmodified observations exported from R `datasets::Theoph`, 132 rows and five columns. Source and variable definitions: https://www.stat.ethz.ch/R-manual/R-devel/library/datasets/html/Theoph.html . The dataset documentation credits Boeckmann, Sheiner and Beal (1994), reporting Robert Upton's study. The R datasets package is distributed with R under GPL-2 or GPL-3.
- `nca-conventions.md`: unchanged reference from `pkpd-modeling/references/nca-conventions.md` in the official Specialist package. The Skill declares the MIT license. Supplied as an explicit conversation attachment because the Notebook sandbox could not read the installation directory. This case uses only the observed-extrema and linear-trapezoidal conventions, not the reference's other analysis routes.

Input CSV SHA-256: `9cb8329d19da78114ff7bebf7c31dd9f247492b5ecbc7c0de274081a30a660c8`.

## Outputs

The CSV, PNG and Markdown baseline files came from the actual app Notebook run. `theoph-nca.R`, `theoph-nca-summary.csv` and `theoph-nca-report.md` came from the subsequent successful R run and were reread before registration as project artifacts.

The 12-row, five-column summary contains subject ID, observed Cmax, earliest observed Tmax, all-linear trapezoidal AUC from time zero to each subject's actual final sample, and final sampling time. All 48 numeric metrics were independently checked in Python against the exported input; maximum absolute difference was below 2e-14. Input bytes were unchanged. Subject 1, 7 and 10's nonzero time-zero concentrations were retained.

To repeat the arithmetic, place the script and input CSV in a separate working directory and run `Rscript theoph-nca.R` there. This writes `theoph-nca-summary.csv`. The script does not regenerate the plot or report. No additional R packages are required.

The shared report retains the app's execution wording and its reference input identifier. It is an example output, not a clinical recommendation or a general validation of all Specialist functionality. Explicit Skill selection and the reference attachment are required for the documented path. Automatic loading and reference-directory access remain separate product issues.
