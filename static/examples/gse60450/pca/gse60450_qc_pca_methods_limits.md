# GSE60450 sample-QC metric PCA: methods, reliability, results, and limits

## Scope

This exploratory analysis examines descriptive quality-control metric variation across the 12 supplied GSE60450 samples. It is PCA of sample-level QC metrics, not PCA of gene-expression values. It does not test differential expression and does not support clinical or biological group claims.

## Inputs and provenance

- QC input: `inputs/rnaseq-sample-qc-9354e87bca9b.csv`
- QC input SHA-256 before and after execution: `9354e87bca9b9f4e897b87fc7e4b46b7922bef596995ca96c344c172fb2e751b`
- Context-only metadata: `inputs/geo-sample-metadata-acb05db160c6.csv`
- Metadata SHA-256: `acb05db160c6c407659efa1d63ad0108171648682132b933a3fa3d2201d8bab5`
- Packaged Skill: `personal-pca-dimensionality-reduction`
- Genuine packaged entry point: `scripts/main.R`
- Entry-point SHA-256: `4e024d9e3e9daab17498e218f529c61268794c96f99c9c0dacb23c4a637eaf71`
- R 4.6.0; data.table 1.18.4; optparse 1.8.2.

The public inputs were read without modification or download. Extra GEO metadata was read only as sample context and was not supplied as a numeric feature or inferred batch label.

## Prespecified method

Rows were samples identified by `compact_sample`. The three explicitly selected numeric features were:

1. `total_raw_counts`
2. `zero_count_genes`
3. `median_count_among_detected_genes`

`detected_genes_count_gt_0` was excluded because it is the exact complement of `zero_count_genes`. The packaged PCA used `prcomp` semantics with centering and scaling enabled. All three components were retained. No samples or features were filtered: all 12 samples and all three specified features entered the model.

## Results

PC1 explained 72.03% of standardized QC-metric variance, PC2 explained 21.53%, and PC3 explained 6.44%; cumulative variance was 93.56% after PC2 and 100% after PC3.

PC1 loadings were −0.495 for total raw counts, −0.594 for zero-count genes, and +0.633 for median count among detected genes. Accordingly, PC1 summarizes a joint contrast among these standardized QC descriptors; its sign is arbitrary. The largest absolute PC1 scores were observed for MCL1-LE (−2.763), MCL1-LF (−2.751), and MCL1-LA (+1.641). This is descriptive positioning only and is not evidence of a batch, biological condition, or failed sample.

## Reliability audit

Judgment: **trustworthy for the narrowly defined descriptive computation, but inferentially limited**.

Hard checks passed:

- input numeric matrix shape: 12 samples × 3 features;
- score table: 12 samples × 3 component scores plus sample identifier;
- variance table: 3 components;
- all selected inputs, scores, loadings, and variance values were finite;
- all selected features had non-zero variance;
- sample order was preserved;
- all 12 samples were retained;
- explained-variance proportions summed to 1 within tolerance;
- the QC input SHA-256 was unchanged after execution.

The packaged Skill reported successful completion and produced standardized score, loading, variance, and figure outputs.

## Limitations

Only 12 observations and three correlated descriptive metrics were analyzed. PCA is sensitive to feature definition and scaling; these results characterize this supplied QC table only. Component signs are arbitrary. High absolute scores are not automatic outlier or exclusion criteria. Metadata labels were not modeled, so no separation should be attributed to immunophenotype, developmental stage, lane, or batch. No inferential statistics, multiplicity testing, expression normalization, filtering, differential-expression analysis, or biological validation was performed.

## Execution note

The first managed R-kernel attempt failed before R code execution because its binary was blocked by a filesystem permission rule. The permitted external R 4.6.0 runtime was then selected, and the unchanged packaged entry point completed successfully. A later audit-cell column-name error and one parse error were repaired; neither altered the PCA outputs.
