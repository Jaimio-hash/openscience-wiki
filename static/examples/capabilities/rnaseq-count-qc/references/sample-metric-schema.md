# Sample QC schema

Public example: GEO GSE60450, https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450
Original matrix: 27,179 gene rows, 12 sample-count columns, EntrezGeneID and Length metadata.

| Column | Definition |
| --- | --- |
| original_sample_name | Original count-matrix header, unchanged |
| total_raw_counts | Sum of nonnegative integer counts |
| zero_count_genes | Number of genes with count exactly zero |
| detected_genes | Number of genes with count greater than zero |
| median_detected_count | Median over positive counts; missing if none |

For each sample, zero_count_genes + detected_genes must equal the number of gene rows. Missing measurements must not be recoded as zero. Preserve the input checksum and save derived results under new filenames.
