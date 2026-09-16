# GSE60450 walkthrough files

Source: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450
Original supplementary file: GSE60450_Lactation-GenewiseCounts.txt.gz
Decompressed input SHA-256: 128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691

The matrix has 27,179 genes and 12 sample columns, plus EntrezGeneID and Length.
CSV, PNG and report v1 are unchanged outputs from an actual Open-Science v0.26.0 Notebook run on September 9, 2026. Report v2 adds an independently checked numerical-validation note through the app editor. The native Notebook export is unmodified, contains one Python code cell, and references a session-managed input path. Adapt that path before running elsewhere. Python 3.12.13 and matplotlib 3.11.0 were used. No differential-expression or clinical inference is claimed. Environment evidence was partial and no Reviewer audit was present.

## R walkthrough and comparison

The `rnaseq-r-*` CSV, PNG and initial report came from the actual App-managed R 4.4.3 Notebook using base R. The R CSV has twelve rows and six columns. The initial report records the then-unavailable Python artifact; after attaching that CSV through the application, a later R run produced `rnaseq-r-python-comparison.md`: 48 exact metric matches, zero differences. An independent host-side comparison reached the same result. Original files remain unmodified.

`rnaseq-r-sample-qc-v1.ipynb` and its ZIP are the actual unmodified R artifact-version export: two R code cells, R 4.4.3, bounded evidence, partial environment capture and no Reviewer audit. This version snapshot predates the separate comparison and manual follow-up. It does not claim to contain all later session history.

`rnaseq-sample-qc-v1.py` is the original Python captured-producer download. It passed a syntax check; adapt its managed input path and dependencies in a separate copy before outside-app execution. The application's Generate script feature rejected Codex subscription authentication, so this file is not a model-reconstructed script.
