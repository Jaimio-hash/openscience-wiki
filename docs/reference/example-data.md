---
title: "Example data and expected results"
last_update:
  date: '2026-09-10'
---

# Example data and expected results

Use these public files to reproduce the documentation examples. The source description, original-file checksum and sample-QC baseline live here; individual feature guides link to them instead of repeating the dataset history.

## Source and input contract

The [GEO series record](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450) supplies the original `GSE60450_Lactation-GenewiseCounts.txt.gz`. The [published RNA-seq analysis workflow](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/) provides methodological context for this dataset. Our example stops at descriptive pre-analysis QC; it does not reproduce that paper's complete analysis.

| Property | Verified value |
| --- | --- |
| Decompressed file | GSE60450_Lactation-GenewiseCounts.txt |
| Size | 1,340,161 bytes |
| Gene rows | 27,179 |
| Columns | EntrezGeneID, Length and 12 sample-count columns |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| Duplicate gene IDs / missing count entries / invalid counts | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>Download the unchanged decompressed input</a> or <a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>the original compressed file</a>. The app's Omics Archives metadata tool can return supplementary URLs; it does not download count tables automatically. This source was downloaded separately and uploaded through Attach files.



## Sample-QC baseline

| Sample | Total raw counts | Zero-count genes | Detected genes | Median among detected |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

The compact labels map to the complete sample identifiers in the CSV. The four numerical metrics were independently checked for this input. These are descriptive raw-count checks; they do not validate a downstream statistical design.

## Saved example outputs

| Download | Contents |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>QC CSV</a> | Twelve rows, exact column mapping and four metrics |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>Figure</a> | Raw sample-count totals |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>Methods report</a> | Methods, source integrity and independent metric check |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | Unchanged native `.ipynb` export |
## Choose another example

| Task | Input or reference | Instructions |
| --- | --- | --- |
| First saved result | The twelve-row QC CSV above | [First project](../guides/first-project.md) |
| Recalculate a full matrix | Original gene-count matrix above | [Data-quality workflow](../workflows/data-quality.md) |
| Organize a literature collection | <a href="/docs/examples/prisma/core-reading-list.md" download>Checked PRISMA reading list</a> with publisher links | [Core reading list](../workflows/core-reading-list.md) |
| Try a small inverse-folding calculation | <a href="/docs/examples/capabilities/1UBQ.pdb" download>Human ubiquitin 1UBQ</a> | [Scientific tools](../tools/scientific.md) |

The methods report and Notebook retain the recorded computation's paths and evidence scope. Prepare your own input location and dependencies before an external rerun.
