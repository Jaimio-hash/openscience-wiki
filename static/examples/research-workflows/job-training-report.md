# NSW Job-Training Experimental Sample: OLS Analysis

## Data and specification

The input contains **445 observations and 20 columns**. The source dictionary describes train as assignment to job training and reports that training status was randomly assigned. The variables re74, re75, and re78 are real earnings measured in 1974, 1975, and 1978, respectively, in **thousands of dollars**. The source dictionary does not specify a price-base year.

Two ordinary least squares models were estimated:

1. Unadjusted: re78 ~ train
2. Adjusted: re78 ~ train + age + educ + black + hisp + married + nodegree + re74 + re75

HC1 heteroskedasticity-robust standard errors and two-sided 95% confidence intervals are reported. Zero earnings were retained. mostrn (months in training) and mosinex were not included; in particular, the post-assignment training-duration measure mostrn is not an appropriate baseline adjustment variable.

## Data checks

- Rows: **445** (expected: 445)
- Treatment group (train = 1): **185**
- Control group (train = 0): **260**
- Rows with duplicated ID values (rownames, counting all members of duplicate sets): **0**
- Distinct duplicated ID values: **0**
- Missing values in analysis variables: **0**
- Missing values anywhere in the dataset: **0**
- Zero earnings retained: re74 **326**, re75 **289**, re78 **137**

No variables contain missing values.

## Regression results

The re78 outcome and regression coefficients are in thousands of dollars, with earnings measured in 1978. For a continuous regressor, its coefficient is the change in 1978 earnings per one-unit increase in that regressor. The source dictionary does not specify the price-base year.

| Model | Training coefficient | HC1 robust SE | 95% CI | p-value | N |
|---|---:|---:|---:|---:|---:|
| Unadjusted | 1.794 | 0.671 | [0.480, 3.109] | 0.0075 | 445 |
| Adjusted | 1.676 | 0.677 | [0.350, 3.003] | 0.0132 | 445 |

The complete coefficient tables for both models are in job-training-regression.csv.

## Bounded interpretation

In the unadjusted experimental comparison, assignment to training is associated with **1.794 thousand dollars** higher 1978 earnings (95% CI **0.480 to 3.109**). With the prespecified baseline demographic and earnings covariates, the estimated difference is **1.676 thousand dollars** (95% CI **0.350 to 3.003**).

Because treatment was randomly assigned, the unadjusted coefficient is the primary intention-to-treat estimate for this experimental sample. Covariate adjustment can improve precision and addresses chance baseline imbalance but is not required for identification under valid randomization. The estimates apply to this study sample and outcome year; they do not by themselves establish effects in other populations, years, or policy settings. HC1 inference addresses heteroskedasticity but not attrition, noncompliance, spillovers, measurement error, or failures of the original randomization and follow-up process.

## Source identity

R.J. LaLonde (1986), “Evaluating the Econometric Evaluations of Training Programs with Experimental Data,” *American Economic Review* 76, 604–620. The wooldridge R package documentation identifies this as the source of jtrain2. DOI: **not provided in the supplied source dictionary**.

Source dictionary: https://search.r-project.org/CRAN/refmans/wooldridge/html/jtrain2.html
