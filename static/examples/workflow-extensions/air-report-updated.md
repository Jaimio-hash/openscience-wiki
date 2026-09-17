# Aotizhongxin PM2.5 analysis, 2016-01-01 through 2016-01-14

## Scope and provenance

Historical teaching subset of UCI Beijing Multi-Site Air Quality (DOI 10.24432/C5RK5G; CC BY 4.0). Original source: https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data

Only PM2.5 was analyzed. Its source unit is micrograms per cubic metre (µg/m³). Inputs were read unchanged; literal NA values remained missing and were not imputed.

Input hashes:
- air-week1-bec2849ebc8a.csv: SHA-256 bec2849ebc8aa85fbe8c8e0ac1e89d2a55149c4d3ac26ddb3fc7c0b6950c06c0
- air-week2-1dce2108d791.csv: SHA-256 1dce2108d791e70d36a6e360e126517b543c2ae02aa526edd664d8ca97a4670e

## Methods

Inputs were combined, timestamps constructed from year/month/day/hour, rows sorted, and duplicate timestamps rejected. A daily mean was emitted only with at least 18 valid PM2.5 hours out of 24. Completeness equals valid_hours / 24 × 100. This is a teaching completeness rule, not a regulatory AQI rule.

## Checks

- Station: Aotizhongxin (expected Aotizhongxin)
- Range: 2016-01-01 00:00 through 2016-01-14 23:00
- Hourly rows: 336
- Duplicate timestamp rows: 0
- Non-hour-aligned rows: 0
- Missing hourly timestamps within range: 0
- Missing PM2.5: 1 of 336 (0.30%)
- Daily rows: 14
- Days meeting rule: 14
- Days with mean withheld: 0

## Outputs

- air-daily-updated.csv: daily PM2.5 means and completeness fields.
- air-daily-updated.png: daily mean series.
- air-analysis.py: reusable CLI accepting one or more CSV inputs and an output prefix.

## Runtime

- Python: 3.12.14
- pandas: 2.3.3
- NumPy: 2.5.3
- Matplotlib: 3.11.1

## Limitations

This seven-day subset is descriptive. Missing values were not filled. No other pollutants, health effects, causes, or regulatory AQI were analyzed.
