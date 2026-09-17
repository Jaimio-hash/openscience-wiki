# Sources and recorded inputs

These files support the eight workflow examples recorded in Open-Science 0.30.1 on September 16, 2026. They are teaching examples based on real public records and observations. Database counts and provider files may change.

## Literature searches

- Mindfulness search: PubMed, 2019–2025, JAMA Psychiatry and Behaviour Research and Therapy. The CSV preserves 62 PMIDs and source links; the reviewed screening is 20 included, 37 excluded and 5 uncertain. No full text was assessed and full abstracts are not redistributed.
- Solid-state electrolyte interfaces: two OpenAlex queries, 2020–2025, relevance sort, 12 candidates per query. Eight retained per batch, 15 unique normalized DOIs. RIS exports preserve the overlap so Library can reuse it. Candidate decisions and identifiers are supplied without full abstracts.
- Freshwater microplastic transport: OpenAlex baseline 2020–2022 and update 2023–2025, 12 candidates per window. Seven retained per window, no overlapping DOI, 14 references after import. `freshwater-update-review.csv` is a publication copy of the app's audit with the abstract and abstract-license columns omitted. All other fields are unchanged. No full-text appraisal is claimed.

## PubChem

The CSV and structured source JSON contain actual Chemistry/PubChem responses for neutral straight-chain saturated monocarboxylic acids C2–C8. CID links identify the original PubChem records. Molecular weights and structures are database properties, not experimental results from this tutorial.

## Catalysis report

Yang et al. (2019), Nature Communications 10, 4585. DOI: https://doi.org/10.1038/s41467-019-12510-0. Obtain the main paper and Supplementary Information from that publisher page. The original PDFs are not redistributed here. The editorial comments are a teaching exercise, and the briefing/response files are generated worked-example outputs. The v1 draft is retained for comparison; use v2 as the reviewed briefing. The Agent read full-text passages and captions, but direct figure-element image inspection was unavailable and remains identified in its response.

## Annual temperature series

- NASA GISS GISTEMP v4 Land-Ocean Temperature Index, annual J-D column. Source: https://data.giss.nasa.gov/gistemp/ . Download: https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv . Save as `NASA-GISTEMP-v4-original.csv`.
- HadCRUT5.1.0.0 annual analysis ensemble mean. Source: https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html . Download: https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/analysis/diagnostics/HadCRUT.5.1.0.0.analysis.summary_series.global.annual.csv . Save as `HadCRUT5-original.csv`.
- Credit: NASA Goddard Institute for Space Studies; Met Office Hadley Centre and Climatic Research Unit, University of East Anglia. HadCRUT data are provided under the Open Government Licence v3.0: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/ . Dataset methods: Morice et al. (2021), https://doi.org/10.1029/2019JD032361 . This tutorial's aligned CSV and figures are derived outputs, with the reference-period transformation described in the report; no endorsement is implied.

Recorded SHA-256 identities:

```text
NASA-GISTEMP-v4-original.csv
c9ce0750ca93a8241c42fe86cd5bf54d07b28b21ae650b0ae49a206907018cd9
HadCRUT5-original.csv
16633b8d7c4fe6026d53549f509355964ab56ca689a6f007f27d4a5fa87d6ec6
```

## Air-quality observations

Chen, S. (2017), Beijing Multi-Site Air Quality [Dataset], UCI Machine Learning Repository: https://doi.org/10.24432/C5RK5G . Source license: Creative Commons Attribution 4.0, https://creativecommons.org/licenses/by/4.0/ . The supplied week files are chronological subsets of the Aotizhongxin station CSV, retaining all source columns and original missing values. The change is row selection: January 1–7 and January 8–14, 2016. The split models staged data arrival; these are not current observations.

```text
air-week1.csv
bec2849ebc8aa85fbe8c8e0ac1e89d2a55149c4d3ac26ddb3fc7c0b6950c06c0
air-week2.csv
1dce2108d791e70d36a6e360e126517b543c2ae02aa526edd664d8ca97a4670e
```

## Personality-item example

Public psych::bfi data, documented by William Revelle / the personality-project: https://personality-project.org/r/psych/help/bfi.html . CSV distribution via Vincent Arel-Bundock's Rdatasets mirror: https://vincentarelbundock.github.io/Rdatasets/csv/psych/bfi.csv . Download directly and save as `bfi-original.csv`. The original respondent-level CSV and preprocessed response matrix are not redistributed in this Wiki. Aggregate loadings, metrics, figure and reproducible R script are supplied.

```text
bfi-original.csv
68ae71a96c2157b0c49b8d8f8ccaee1292f5e92adce9a3f202fdc7efac883dc9
```

The report records the identity of the original downloaded snapshot and a runtime MD5 for the actual input. A new download may differ; check its identity rather than copying the old SHA-256 claim to a new dataset. PCA/FA are descriptive method examples, not diagnostic tools.
