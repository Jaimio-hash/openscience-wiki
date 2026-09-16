# GSE60450 Skill validation

- Workflow: rnaseq-count-qc Skill
- Managed input: inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt
- Source: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450
- Python: 3.12.13
- SHA-256 before: 128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691
- SHA-256 after: 128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691
- Input unchanged: **yes**

## Actual checks

| Check | Result |
|---|---|
| Gene rows | 27,179 (expected 27,179; PASS) |
| Columns | 14 total: 2 metadata + 12 samples (PASS) |
| Metadata fields | EntrezGeneID and Length preserved as metadata (PASS) |
| Unique gene identifiers | PASS |
| Missing gene identifiers | 0 (PASS) |
| Unequal-width data rows | 0 (PASS) |
| Missing count entries | 0 (PASS) |
| Negative count entries | 0 (PASS) |
| Non-integer count entries | 0 (PASS) |
| Before/after SHA-256 equality | PASS |

## Scope and limitations

This is a bounded structural validation of raw gene counts. It does not normalize expression, test differential expression, establish statistical significance, determine biological quality thresholds, or support clinical interpretation. Sample conditions were not inferred from abbreviated matrix headers.