# Conductivity–temperature figure: methods and provenance

## Source

Al-Fartoos et al. (2024), “A semi-transparent thermoelectric glazing nanogenerator with aluminium doped zinc oxide and copper iodide thin films.” DOI: https://doi.org/10.1038/s44172-024-00291-4

Publisher Source Data workbook: https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs44172-024-00291-4/MediaObjects/44172_2024_291_MOESM4_ESM.xlsx

## Data provenance

The supplied CSV transcribes workbook columns A (temperature, K), D (electrical conductivity, S m^-1), and E (SD). AZO values come from sheet “Supplementary Fig.6a”, rows 3–15; CuI values come from sheet “Supplementary Fig.6b”, rows 3–15. The exported plotted-conductivity.csv preserves source_sheet and source_row for row-level traceability.

Validation confirmed 26 total rows, exactly 13 temperatures for each material, no missing required values, no duplicated material–temperature pairs, and a 275–390 K span for both materials. The temperatures are 275, 280, and 290–390 K in 10 K increments.

## Plotting and uncertainty

Electrical conductivity (S m^-1) was plotted against temperature (K) for aluminium-doped zinc oxide (AZO) and copper iodide (CuI), using distinct colors and markers. Points are publisher-reported means. Error bars reproduce the supplied publisher-reported standard deviations (SD) from five independent measurements per temperature (n = 5). The workbook supplies means and SDs, not individual measurements; no replicates were generated and SD was not recalculated. Error bars are SD, not confidence intervals.

Lines connect adjacent reported temperatures only as visual guides. No model was fitted. The axes preserve the full supplied 275–390 K range, with slight padding so endpoint marks clear the frame.

## Output fields

plotted-conductivity.csv contains material, temperature in K, electrical conductivity in S m^-1, publisher-reported SD in S m^-1, source workbook sheet, and source workbook row.
