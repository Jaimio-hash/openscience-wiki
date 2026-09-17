# NCA methods reference for the Theoph example

Reviewed Wiki adaptation, 2026-09-16. Based on the MIT-licensed `pkpd-modeling/references/nca-conventions.md` supplied with Pharmacometrics PK/PD Design Specialist 1.0.0, with corrections to integration and terminal-window selection. This is not an unchanged package file or a validation of the Specialist's other calculations.

## Scope of this example

Use the observed maximum concentration for Cmax and its earliest observed time for Tmax. Retain measured time-zero concentrations. Calculate AUC from observed time zero to each subject's actual last sample with the all-linear rule:

```text
AUC_segment = (C1 + C2) * (t2 - t1) / 2
AUC0-last = sum(AUC_segment)
```

Report the observation window and units. Here these are hours, mg/L and mg*h/L. Subjects have different last sampling times. The example does not select a terminal window or calculate lambda_z, half-life, AUC to infinity, clearance or dosing recommendations.

## Integration rules are explicit method choices

For strictly positive, unequal endpoints, the logarithmic segment area is

```text
k = ln(C1 / C2) / (t2 - t1)
AUC_log = (C1 - C2) / k
```

This expression is defined for both increasing and decreasing concentrations: k is negative for an increase. Equal endpoints make the expression 0/0, but its limit is `C1 * (t2 - t1)`. Nonpositive endpoints cannot enter the logarithm.

Phoenix distinguishes these choices:

| Method | AUC rule |
| --- | --- |
| Linear Trapezoidal Linear Interpolation | Linear on each interval; the documented Phoenix default |
| Linear Up Log Down | Linear on increasing intervals, logarithmic on decreasing intervals |
| Linear Log Trapezoidal | Linear through the first Cmax, logarithmic after it |

Phoenix falls back to linear calculation for equal or nonpositive adjacent concentrations in the methods that otherwise use logarithms. Do not confuse the last two methods or call either a universal NCA default. See [Certara's calculation options](https://onlinehelp.certara.com/phoenix/8.3/topics/Options_tab1.htm).

For a truly exponential declining segment, linear interpolation lies above the curve and gives a larger area than logarithmic integration. That comparison does not establish which approximation is appropriate for a noisy observed profile.

## Terminal-window selection is outside this worked example

R-squared does not have a guaranteed monotonic relationship with the number of observations when the fitted window changes. The familiar monotonic property concerns adding predictors while retaining the same observations, not adding time points.

For a simple regression with an intercept and one slope:

```text
adjusted_R_squared = 1 - (1 - R_squared) * (n - 1) / (n - 2)
lambda_z = -slope of ln(concentration) against time
```

Phoenix Best Fit evaluates eligible terminal windows with at least three positive concentrations and a negative fitted slope. It selects the largest adjusted R-squared, preferring more points when a candidate is within 0.0001 of that maximum. The tolerance is not a requirement that every longer window improve the score by more than 0.0001.

Automatic selection excludes observations before Cmax or before the end of infusion; Cmax itself is excluded for non-bolus models. IV bolus and explicitly specified time ranges have different eligibility rules, so exclusion of every point at or before Tmax is not universal. Check the model and selected range in [Certara's Lambda Z method](https://onlinehelp.certara.com/phoenix/8.3/topics/Lambda_Z_or_Slope_Estimation_settings.htm).

Inspect the concentration-time plot, selected points and fitted slope. A large adjusted R-squared alone does not establish that the terminal elimination phase was sampled. Predefine and report acceptance criteria, rather than presenting a particular R-squared, span or extrapolated-area threshold as a universal regulatory requirement.

## Missing values and reporting

Record the assay limit and the treatment of below-quantification values before analysis. A zero cannot be log-transformed; substituting zero or half the quantification limit changes the data and can affect the result. The supplied Theoph input has no missing concentration values, and this example makes no such substitution.

Preserve the input, script, output table and stated integration rule together. The downloadable Theoph summary remains an observed-data calculation, not a clinical interpretation or a complete pharmacokinetic assessment.
