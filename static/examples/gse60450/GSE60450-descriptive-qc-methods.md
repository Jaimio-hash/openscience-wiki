# Methods: GSE60450 descriptive raw-count quality checks

## Data source and analysis scope

A completed descriptive quality-control workflow evaluated the public Gene Expression Omnibus data set GSE60450 using the tab-delimited file `GSE60450_Lactation-GenewiseCounts.txt`. The matrix contained exactly 27,179 gene rows and 12 sample-count columns. The `EntrezGeneID` field was retained as the gene identifier, and the `Length` field was treated separately as gene metadata rather than as a sample-count column. The analysis was restricted to descriptive checks of raw counts.

## File handling and per-sample metrics

The source matrix was opened read-only and streamed once with Python standard-library `csv` parsing. Four metrics were computed independently for each sample. `total_counts` was defined as the sum of raw counts across all 27,179 gene rows. `zero_count_genes` was the number of gene rows with a raw count equal to zero. `detected_genes_count_gt_0` was the number of gene rows with a raw count strictly greater than zero. `median_positive_count` was the median of the strictly positive raw counts and therefore excluded zero-count genes. These calculations were applied to the 12 sample identifiers present in the supplied matrix.

File integrity was checked by calculating the SHA-256 digest before and after processing. Both digests were `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`, consistent with an unchanged input during the completed workflow. The reported process exited with status 0.

## Method limits

No normalization, library-composition adjustment, batch assessment, differential-expression testing, experimental-group comparison, or biological or clinical inference was performed. The median among positive counts is a descriptive raw-count statistic, not a normalized expression measure. These checks do not establish sample identity, experimental validity, or the absence of upstream processing errors. This writing session used the supplied execution report and 12-row QC table; it did not independently reopen or reread the original raw matrix.
