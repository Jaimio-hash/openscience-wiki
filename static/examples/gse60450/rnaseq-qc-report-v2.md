# GSE60450 raw count matrix QC

## Scope

This is a descriptive quality check of the public GEO GSE60450 gene-count matrix before any differential-expression analysis. The input was kept unchanged; `EntrezGeneID` and `Length` were treated as metadata and excluded from the 12 sample count columns.

## Provenance

- Source: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450
- Managed input: `inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt`
- Input size: 1,340,161 bytes
- SHA-256 before analysis: `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`
- SHA-256 after analysis: `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`
- Hashes identical: True
- Python: `3.12.13`
- matplotlib: `3.11.0`
- `csv`, `statistics`, and `hashlib`: Python 3.12.13 standard library

## Matrix validation

- Data rows (genes): 27,179
- Columns: 14 total = 2 metadata + 12 sample-count columns
- Metadata columns exactly `EntrezGeneID`, `Length`: True
- Unique Entrez Gene IDs: True (0 duplicated IDs)
- Consistent row widths: True (0 failures)
- Missing entries: 0
- Invalid Entrez Gene IDs: 0
- Invalid or negative Length values: 0
- Non-integer or negative sample counts: 0
- Overall requested validation passed: True
- All three local outputs were reopened and validated before managed-artifact saving.

## Sample-label mapping

- `MCL1-DG` → `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1`
- `MCL1-DH` → `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1`
- `MCL1-DI` → `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1`
- `MCL1-DJ` → `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1`
- `MCL1-DK` → `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1`
- `MCL1-DL` → `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1`
- `MCL1-LA` → `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1`
- `MCL1-LB` → `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1`
- `MCL1-LC` → `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1`
- `MCL1-LD` → `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1`
- `MCL1-LE` → `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1`
- `MCL1-LF` → `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1`

## Descriptive metrics

The accompanying CSV reports, for every sample, raw total counts, zero-count genes, detected genes (count > 0), and the median raw count among detected genes. The accompanying plot shows raw library-size totals and not normalized expression.

## Limitations

These checks assess file structure and simple distributions of raw counts only. They do not evaluate sample identity, sequencing artifacts, batch effects, normalization, biological replication, or model assumptions, and they do not support claims about differential expression, statistical significance, or clinical relevance.


## Independent check

All 48 per-sample metric values were independently recalculated from the unchanged source matrix and matched this output on September 9, 2026. This check does not assess differential expression.
