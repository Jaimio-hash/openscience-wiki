# PCA and exploratory factor analysis of the psych::bfi items

## Data and reproducibility

- Input: inputs/bfi-original-68ae71a96c21.csv
- Runtime input MD5: 75ccf450c00da05ddcf8ee21f1023cba
- Download identity SHA-256 (independently verified for the supplied source CSV): 68ae71a96c2157b0c49b8d8f8ccaee1292f5e92adce9a3f202fdc7efac883dc9
- Fixed random seed before factanal: 20260916
- R version: R version 4.4.3 (2025-02-28)
- Input rows: 2800; complete cases across the 25 items: 2436; excluded incomplete rows: 364.
- Item-level missing counts: A1=16, A2=27, A3=26, A4=19, A5=16, C1=21, C2=24, C3=20, C4=26, C5=16, E1=23, E2=16, E3=25, E4=9, E5=21, N1=22, N2=21, N3=11, N4=36, N5=29, O1=22, O2=0, O3=28, O4=14, O5=20.
- Analysis columns: A1-A5, C1-C5, E1-E5, N1-N5, and O1-O5 only. Row identifiers and demographics were not analyzed.
- Reverse scoring used 7 - x for A1, C4, C5, E1, E2, O2, and O5 before either method.

## PCA results

PCA used standardized variables. Percentages labeled PC1-PC5 are calculated from the unrotated eigenvalues. The first five eigenvector × square-root-eigenvalue loading columns were then rotated with orthogonal varimax and labeled RotPC1-RotPC5. Rotation redistributes variance among these loading columns but does not change their combined explained variance.

- PC1: 20.54% (cumulative 20.54%)
- PC2: 11.01% (cumulative 31.54%)
- PC3: 8.57% (cumulative 40.12%)
- PC4: 7.41% (cumulative 47.52%)
- PC5: 6.19% (cumulative 53.72%)

Together, the five retained components explain 53.72% of total standardized item variance.

## Maximum-likelihood factor analysis results

The five-factor model used maximum-likelihood factanal with orthogonal varimax rotation on the same complete cases.

- Likelihood-ratio statistic: 1490.587 on 185 df; p = 1.218e-202.
- Numerical convergence only means the optimizer returned a solution; it does not establish adequate model fit. The very small likelihood-ratio p-value rejects exact five-factor model fit under the maximum-likelihood assumptions.
- Optimizer status: TRUE; warnings: none.
- Item uniquenesses: A1=0.830, A2=0.576, A3=0.466, A4=0.691, A5=0.512, C1=0.660, C2=0.569, C3=0.677, C4=0.510, C5=0.557, E1=0.634, E2=0.454, E3=0.558, E4=0.468, E5=0.592, N1=0.271, N2=0.337, N3=0.478, N4=0.507, N5=0.664, O1=0.675, O2=0.744, O3=0.518, O4=0.752, O5=0.726.

Uniquenesses estimate item-specific plus error variance outside the five common factors. FA sums of squared loadings are not PCA variance explained: common-factor analysis models shared covariance, whereas PCA components partition total observed variance.

## Interpretation and limitations

PCA gives weighted composites summarizing total standardized variance. Maximum-likelihood factor analysis posits latent common factors accounting for covariance. Similar loading patterns can support a shared descriptive interpretation, but do not make the methods equivalent.

Dimension order and signs are arbitrary after extraction and rotation: a whole component or factor may be multiplied by -1 without changing the solution, and columns can be permuted. Compare loading patterns, not signs or column numbers mechanically.

The 1-6 responses are ordinal. Pearson correlations, standardized PCA, and normal-theory ML factor analysis treat them as approximately continuous; this pragmatic approximation may differ from ordinal-threshold and polychoric-correlation analyses. Complete-case analysis discards respondents missing any item and can be biased if missingness relates to responses or participant characteristics. This worked example is not a diagnostic instrument or a basis for individual psychological assessment.

## Output guide

- bfi-preprocessing.csv: complete-case, reverse-scored 25-item matrix.
- bfi-loadings.csv: tidy rotated loadings for PCA and factor analysis.
- bfi-method-metrics.csv: sample sizes, missingness, unrotated PCA variance quantities, FA uniquenesses and fit/convergence metadata, seed, R version, and runtime input MD5.
- bfi-method-comparison.png: PCA variance and side-by-side loading heatmaps.
