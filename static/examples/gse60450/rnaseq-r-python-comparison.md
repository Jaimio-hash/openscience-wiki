# R–Python sample-QC comparison

- Python input: `inputs/rnaseq-sample-qc-9354e87bca9b.csv`
- R input: `rnaseq-r-sample-qc.csv`
- Join key: full original sample identifier
- Numeric comparisons performed: 48
- Exact matches: 48
- Differences: 0
- Overall result: **all 48 numeric values match exactly**

## Equivalent metric mapping

| Python column | R column |
|---|---|
| `total_raw_counts` | `total_raw_counts` |
| `zero_count_genes` | `zero_count_genes` |
| `detected_genes_count_gt_0` | `detected_genes` |
| `median_count_among_detected_genes` | `median_detected_count` |

## Comparison details

| Original sample identifier | Python metric | Python value | R value | Result |
|---|---|---:|---:|---|
| `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` | `total_raw_counts` | 23227641 | 23227641 | MATCH |
| `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` | `total_raw_counts` | 21777891 | 21777891 | MATCH |
| `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` | `total_raw_counts` | 24100765 | 24100765 | MATCH |
| `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` | `total_raw_counts` | 22665371 | 22665371 | MATCH |
| `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` | `total_raw_counts` | 21529331 | 21529331 | MATCH |
| `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` | `total_raw_counts` | 20015386 | 20015386 | MATCH |
| `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` | `total_raw_counts` | 20392113 | 20392113 | MATCH |
| `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` | `total_raw_counts` | 21708152 | 21708152 | MATCH |
| `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` | `total_raw_counts` | 22241607 | 22241607 | MATCH |
| `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` | `total_raw_counts` | 21988240 | 21988240 | MATCH |
| `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` | `total_raw_counts` | 24723827 | 24723827 | MATCH |
| `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` | `total_raw_counts` | 24657293 | 24657293 | MATCH |
| `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` | `zero_count_genes` | 8664 | 8664 | MATCH |
| `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` | `zero_count_genes` | 8792 | 8792 | MATCH |
| `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` | `zero_count_genes` | 8646 | 8646 | MATCH |
| `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` | `zero_count_genes` | 8706 | 8706 | MATCH |
| `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` | `zero_count_genes` | 9082 | 9082 | MATCH |
| `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` | `zero_count_genes` | 9169 | 9169 | MATCH |
| `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` | `zero_count_genes` | 9247 | 9247 | MATCH |
| `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` | `zero_count_genes` | 8828 | 8828 | MATCH |
| `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` | `zero_count_genes` | 9803 | 9803 | MATCH |
| `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` | `zero_count_genes` | 9904 | 9904 | MATCH |
| `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` | `zero_count_genes` | 10478 | 10478 | MATCH |
| `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` | `zero_count_genes` | 10434 | 10434 | MATCH |
| `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` | `detected_genes_count_gt_0` | 18515 | 18515 | MATCH |
| `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` | `detected_genes_count_gt_0` | 18387 | 18387 | MATCH |
| `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` | `detected_genes_count_gt_0` | 18533 | 18533 | MATCH |
| `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` | `detected_genes_count_gt_0` | 18473 | 18473 | MATCH |
| `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` | `detected_genes_count_gt_0` | 18097 | 18097 | MATCH |
| `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` | `detected_genes_count_gt_0` | 18010 | 18010 | MATCH |
| `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` | `detected_genes_count_gt_0` | 17932 | 17932 | MATCH |
| `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` | `detected_genes_count_gt_0` | 18351 | 18351 | MATCH |
| `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` | `detected_genes_count_gt_0` | 17376 | 17376 | MATCH |
| `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` | `detected_genes_count_gt_0` | 17275 | 17275 | MATCH |
| `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` | `detected_genes_count_gt_0` | 16701 | 16701 | MATCH |
| `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` | `detected_genes_count_gt_0` | 16745 | 16745 | MATCH |
| `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1` | `median_count_among_detected_genes` | 237 | 237 | MATCH |
| `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1` | `median_count_among_detected_genes` | 223 | 223 | MATCH |
| `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1` | `median_count_among_detected_genes` | 213 | 213 | MATCH |
| `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1` | `median_count_among_detected_genes` | 194 | 194 | MATCH |
| `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1` | `median_count_among_detected_genes` | 188 | 188 | MATCH |
| `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1` | `median_count_among_detected_genes` | 190 | 190 | MATCH |
| `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1` | `median_count_among_detected_genes` | 257 | 257 | MATCH |
| `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1` | `median_count_among_detected_genes` | 252 | 252 | MATCH |
| `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1` | `median_count_among_detected_genes` | 191 | 191 | MATCH |
| `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1` | `median_count_among_detected_genes` | 176 | 176 | MATCH |
| `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1` | `median_count_among_detected_genes` | 138 | 138 | MATCH |
| `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1` | `median_count_among_detected_genes` | 135 | 135 | MATCH |

## Scope

This comparison verifies descriptive raw-count QC metrics only. It is not differential-expression analysis and makes no statistical-significance or clinical claim.
