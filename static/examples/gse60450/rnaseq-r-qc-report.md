# GSE60450 R raw-count QC report

- Source: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450
- Managed input: `inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt`
- Runtime: R version 4.4.3 (2025-02-28)
- Libraries: base R only; no additional packages installed
- Interpretation: descriptive raw-count quality control only; not differential expression

## Validation

- Gene rows: 27,179
- Metadata columns preserved: EntrezGeneID and Length
- Sample-count columns: 12
- EntrezGeneID values unique: yes
- Missing count values: none
- Counts nonnegative and integer-valued: yes

## Sample metrics

| Label | Original sample column | Total raw counts | Zero-count genes | Detected genes (>0) | Median among detected genes |
|---|---|---:|---:|---:|---:|
| S01 | `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` | 23227641 | 8664 | 18515 | 237 |
| S02 | `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` | 21777891 | 8792 | 18387 | 223 |
| S03 | `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` | 24100765 | 8646 | 18533 | 213 |
| S04 | `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` | 22665371 | 8706 | 18473 | 194 |
| S05 | `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` | 21529331 | 9082 | 18097 | 188 |
| S06 | `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` | 20015386 | 9169 | 18010 | 190 |
| S07 | `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` | 20392113 | 9247 | 17932 | 257 |
| S08 | `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` | 21708152 | 8828 | 18351 | 252 |
| S09 | `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` | 22241607 | 9803 | 17376 | 191 |
| S10 | `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` | 21988240 | 9904 | 17275 | 176 |
| S11 | `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` | 24723827 | 10478 | 16701 | 138 |
| S12 | `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` | 24657293 | 10434 | 16745 | 135 |

## Comparison with Python QC

The managed artifact catalog lists `rnaseq-sample-qc.csv`, but that artifact was not mounted in the R Notebook and its managed Version ID could not be bound as a Notebook provenance input. Therefore, the requested 48 value-by-value comparisons were not executed, and no match is claimed.

## Label mapping

| Compact label | Exact original sample column |
|---|---|
| S01 | `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` |
| S02 | `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` |
| S03 | `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` |
| S04 | `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` |
| S05 | `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` |
| S06 | `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` |
| S07 | `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` |
| S08 | `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` |
| S09 | `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` |
| S10 | `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` |
| S11 | `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` |
| S12 | `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` |

## Limitations

These checks describe matrix structure and per-sample raw-count distributions only. Library-size differences can reflect sequencing depth and biology. No normalization, modeling, hypothesis testing, differential-expression analysis, statistical-significance claim, or clinical interpretation was performed.
