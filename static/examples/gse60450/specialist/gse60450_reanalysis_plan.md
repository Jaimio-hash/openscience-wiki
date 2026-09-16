# Proposed public-data reanalysis plan: GSE60450

## Status and claim boundary

This remains an exploratory protocol, not a completed factorial study and not evidence of field-wide novelty. It proposes a transparent reanalysis of public mouse mammary epithelial RNA-seq counts across immunophenotypes and developmental stages.

Completed supporting work includes descriptive sample QC, PCA of three sample-level QC metrics, and a packaged element-wise `log2(x+1)` transformation of all 27,179 genes and 12 sample columns. The latter is suitable for exploratory visualization only and is not count-model normalization.

A separate packaged DESeq2 run examined a restricted basal 2-day-lactation versus basal-virgin 2-versus-2 contrast. Although DESeq2 produced partial tabular output, the end-to-end package failed during heatmap clustering because of non-finite clustering input. That restricted run is therefore inconclusive and does not complete or replace the factorial analysis proposed here.

## Research question

How do transcriptional profiles of sorted mouse mammary epithelial immunophenotypes vary across virgin, late-pregnancy, and lactation stages in GSE60450, after accounting for the factorial design and preserving the original Entrez Gene identifiers?

## Primary route

Use the original integer count matrix with a prespecified factorial model containing immunophenotype, developmental stage, and their interaction, subject to final verification of sample-to-column mapping and replicate structure.

The leading primary route is a count-aware generalized linear model using edgeR quasi-likelihood. A voom/limma analysis with the same design and contrasts is a prespecified sensitivity route. The completed `log2(x+1)` matrix must not be used as the input to these count-aware inferential models.

## Inputs and governance

- Preserve the original complete count file, its 27,179 Entrez Gene rows, and all 12 sample columns.
- Keep `Length` as annotation rather than treating it as a sample or expression feature.
- Preserve the original Entrez Gene identifiers and row order.
- Verify the GEO sample mapping before modeling.
- Treat the existing QC/PCA results as descriptive; do not exclude samples solely from PCA position.
- Treat the completed `log2(x+1)` matrix as an exploratory display matrix only.
- Treat the failed packaged 2-versus-2 DESeq2 output as a diagnostic partial result, not confirmatory evidence or the primary factorial analysis.

## Endpoints

Primary exploratory estimand: the immunophenotype-by-developmental-stage interaction for each gene, with effect estimates, uncertainty, and false-discovery-rate control.

Secondary exploratory estimands:

- developmental-stage contrasts within each immunophenotype;
- immunophenotype contrasts within each developmental stage;
- expression-scale PCA or MDS after a method-appropriate transformation;
- mean–variance and dispersion diagnostics;
- sensitivity to influential samples and analytic method.

No clinical endpoint is defined.

## Analysis sequence

1. Validate dimensions, nonnegative integer counts, missingness, unique Entrez identifiers, unchanged source hash, gene-length separation, and sample-metadata alignment.
2. Record library sizes and descriptive QC without data-dependent exclusions.
3. Define the complete factorial design and confirm model rank, estimability, group sizes, and residual degrees of freedom.
4. Filter low-expression genes using a prespecified rule that respects the factorial groups; retain an audit table containing every included and excluded Entrez identifier.
5. Estimate library normalization factors and dispersions without transforming `Length`.
6. Fit the primary edgeR quasi-likelihood model and evaluate prespecified interaction and simple-effect contrasts.
7. Apply Benjamini–Hochberg false-discovery-rate control within each prespecified contrast family.
8. Run voom/limma using the same samples, design, and contrasts as a sensitivity analysis; compare effect direction, rank stability, and uncertainty rather than significance overlap alone.
9. Inspect mean–variance behavior, dispersion estimates, model diagnostics, and sample influence. Any sample exclusion must be a separately labeled sensitivity analysis.
10. Interpret only effects supported by adequate diagnostics and transparent uncertainty. Single-cell mammary studies may provide contextual comparison but are not direct validation of the bulk experiment.

## Lessons from the restricted packaged DESeq2 run

The four-sample basal contrast confirmed that the selected raw columns can enter DESeq2 and that the intended direction can be encoded as lactation Case versus virgin Control. However, its package exported only complete rows after `na.omit()` and then failed in heatmap clustering with:

`NA/NaN/Inf in foreign function call (arg 10)`

Before any factorial execution, visualization inputs must therefore be checked for constant or non-finite rows after transformation and scaling. Visualization failure must not be conflated with successful completion of the inferential workflow.

## Validation ladder

- Tier 1 — integrity: source hash, schema, Entrez-ID preservation, sample mapping, group counts, design rank, and contrast tests.
- Tier 2 — model diagnostics: library normalization, dispersion and mean–variance checks, residual diagnostics, and finite-value checks for every visualization matrix.
- Tier 3 — influence: leave-one-sample-out summaries and explicit sensitivity analyses for any influential sample.
- Tier 4 — method sensitivity: edgeR quasi-likelihood versus voom/limma under the same design.
- Tier 5 — contextual comparison: qualitative comparison with public single-cell mammary atlases, clearly labeled cross-platform context rather than replication.
- Tier 6 — external validation: an independent comparable bulk cohort, if one can be identified and its design is sufficiently aligned.

## Feasibility and bounded gap

The original count matrix and completed `log2(x+1)` exploratory matrix are now available. The remaining work is technically feasible if the 12-sample metadata support a full-rank factorial design.

The defensible gap is narrow: a reproducible, interaction-aware reanalysis with explicit integrity, model, influence, visualization, and method-sensitivity checks. The bounded evidence set cannot establish a field-wide novelty claim.

## Stopping rules

Stop or downgrade the analysis if:

- the sample mapping or factorial design cannot be verified;
- the design or requested contrasts are non-estimable;
- model diagnostics indicate that the small replicate structure cannot support stable inference;
- non-finite values remain in a planned output after documented preprocessing;
- no comparable external dataset can be validated.

Exploratory findings must not be converted into confirmatory, mechanistic, or clinical claims.
