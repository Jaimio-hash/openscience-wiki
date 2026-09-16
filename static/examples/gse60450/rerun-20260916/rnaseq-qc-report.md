# Descriptive RNA-seq sample QC: GSE60450

## Input identity and preservation

- Input notebook path: \`inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt\`
- SHA-256 before analysis: \`128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691\`
- SHA-256 after analysis: \`128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691\`
- Hashes identical: **True**
- The input was opened read-only for streaming analysis and was not rewritten.

## Matrix dimensions

- Gene rows: **27179**
- Annotation columns: **2** (\`EntrezGeneID\`, \`Length\`)
- Sample columns: **12**
- Total columns: **14**
- Matrix shape excluding header: **27179 × 14**
- Raw count submatrix: **27179 genes × 12 samples**

## Validity checks

- Header width: **14 columns (2 annotation + 12 sample columns)** — PASS
- Sample-column count: **12** — PASS
- Data-row widths: **0 malformed rows** — PASS
- Missing entries: **0 rows with missing fields** — PASS
- Unique EntrezGeneID values: **0 duplicates** — PASS
- EntrezGeneID integer syntax: **0 invalid values** — PASS
- Length nonnegative-integer syntax: **0 invalid values** — PASS
- Sample counts nonnegative integers: **0 invalid values** — PASS
- Plot text within rendered canvas: **True** — PASS

## Exact sample-label mapping

- \`MCL1-DG\` → \`MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1\`
- \`MCL1-DH\` → \`MCL1-DH_BC2CTUACXX_CAGATC_L002_R1\`
- \`MCL1-DI\` → \`MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1\`
- \`MCL1-DJ\` → \`MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1\`
- \`MCL1-DK\` → \`MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1\`
- \`MCL1-DL\` → \`MCL1-DL_BC2CTUACXX_ATCACG_L002_R1\`
- \`MCL1-LA\` → \`MCL1-LA_BC2CTUACXX_GATCAG_L001_R1\`
- \`MCL1-LB\` → \`MCL1-LB_BC2CTUACXX_TGACCA_L001_R1\`
- \`MCL1-LC\` → \`MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1\`
- \`MCL1-LD\` → \`MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1\`
- \`MCL1-LE\` → \`MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1\`
- \`MCL1-LF\` → \`MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1\`

## Methods

The tab-delimited matrix was streamed with Python's standard-library \`csv\` reader. \`EntrezGeneID\` and \`Length\` were annotation columns and excluded from sample summaries. Rows were checked against header width; empty fields were counted as missing; gene identifiers were checked for uniqueness and integer syntax; Length and sample counts were parsed as integers and checked for nonnegativity.

For each sample, total raw counts are the sum over genes; zero-count genes have count 0; detected genes have count > 0; and the detected-gene median is Python \`statistics.median\` over strictly positive counts. The plot uses a linear raw-count axis. No normalization, transformation, filtering, inference, or differential-expression analysis was performed.

## Runtime versions

- Python: \`3.12.14\`
- Python implementation: \`CPython\`
- matplotlib: \`3.11.1\`
- csv, statistics, hashlib: Python standard library bundled with this runtime

## Limitations

- Structural integrity and basic count plausibility do not verify biological sample identity, contamination, alignment quality, annotation correctness, or experimental metadata.
- Library-size differences may reflect depth, RNA composition, or technical/biological effects and alone do not establish sample quality.
- The median is conditional on count > 0, not a median over all genes.
- This is descriptive raw-count QC, not normalization or differential expression.
