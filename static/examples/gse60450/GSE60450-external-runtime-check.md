# GSE60450 external runtime check

## Actual bound runtimes

- **Python executable:** `/private/tmp/aipoch-wiki-external-python-copied/bin/python`
- **Python version:** 3.13.12
- **R home:** `/opt/homebrew/Cellar/r/4.6.0/lib/R`
- **R version:** 4.6.0 (2026-04-24)
- Notebook results displayed `default-python` and `default-r` environment labels, but direct interpreter introspection confirmed the user-owned external runtimes above. No runtime switch or managed fallback was used.

## Descriptive QC CSV

Permitted input path: `inputs/remote-rnaseq-qc-f1e10edbdf01.csv`

- **Rows:** 12
- **Sum of `total_counts`:** 269,027,617
- **Median definition:** `median_positive_count` is the median of strictly positive (>0) per-gene raw counts within each sample; zero-count genes are excluded.
- Python and R returned the same row count and total.
- The raw GSE60450 count matrix was not reread. No differential-expression or clinical conclusions were inferred.

## Python package checks

### Denied attempt while installation permission was off

The initial supported `manage_packages` attempt was denied. Its target receipt identified:

- Selection: `explicit-binding`
- Runtime source: `external`
- Runtime ID: `/private/tmp/aipoch-wiki-external-python-copied/bin/python`
- Result: not authorized because **Allow package install** was off
- No package change or restart occurred.

### Permitted pip attempt after installation permission was enabled

Exactly one supported retry used `manage_packages(language="python", packages=["packaging"], usePip=true)`.

- Selection: `explicit-binding`
- Runtime source: `external`
- Runtime ID: `/private/tmp/aipoch-wiki-external-python-copied/bin/python`
- Method: `pip`
- Fallback used: false
- Result: failed — `pip install failed.`
- Restart requested: false
- Actual import check: failed — `ModuleNotFoundError: No module named 'packaging'`

No shell installer was used, and nothing was installed into R.

## Provenance and limitations

The unresolved optional input Version ID was omitted rather than replaced or invented. Notebook executions completed using the permitted input path, but file-evidence persistence was unavailable.

Preserved evidence labels:

- File-evidence `state`: `unavailable`
- Reason code: `evidence-persistence-failed`
- File reads: `unavailable`
- External paths: `unavailable`
- The receipts also reported that file reads and external paths were not observed.

Consequently, the descriptive results are completed Notebook outputs, but source-file evidence was not durably captured by the application.
