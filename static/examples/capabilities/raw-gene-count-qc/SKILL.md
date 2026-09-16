---
name: raw-gene-count-qc
description: Perform reproducible descriptive QC on a raw gene-by-sample count matrix before differential-expression analysis. Use when checking a tab-delimited RNA-seq count matrix for schema integrity, unique gene identifiers, valid raw counts, per-sample library metrics, source-file immutability, and verified CSV/plot/report artifacts.
---

# Raw Gene Count QC

Perform descriptive, pre-analysis quality checks on a raw gene-count matrix without modifying the input or making differential-expression, statistical-significance, biological, or clinical claims.

## Inputs

Require:

- a managed Notebook input path supplied by the application;
- the gene-identifier column name;
- the gene-length or other metadata columns that must not be treated as samples;
- the expected number of sample-count columns, when known;
- the public source URL or other provenance reference;
- requested output filenames.

When an attachment includes both a resource URI and a Notebook path, read only the exact Notebook path. Never copy or rewrite the source file. Preserve gene identifiers as strings even when they contain only digits.

## Environment

Use the Session Notebook. Prefer existing Python standard-library modules such as `csv`, `statistics`, `hashlib`, `collections`, `platform`, and `sys`, plus existing `matplotlib`. Do not install packages unless the user explicitly changes the scope.

For large text matrices, inspect only the header and a few preview rows in conversation. Process the complete file inside the Notebook.

## Procedure

### 1. Establish provenance and immutability

1. Compute SHA-256 from the input bytes before parsing.
2. Record the exact managed input path, source URL, file size, Python version, matplotlib version, and that the standard-library modules share the Python runtime version.
3. Open the input read-only. Never normalize, rewrite, rename, or copy it.

### 2. Separate metadata from counts

1. Parse the tab-delimited header with `csv.reader`.
2. Select metadata columns explicitly by their expected names.
3. Treat only the remaining expected columns as samples.
4. Fail validation if required metadata columns are missing, reordered unexpectedly when order is part of the contract, or the sample-column count differs from the expected count.
5. Preserve every original sample column name exactly.

### 3. Validate every row

For each data row:

- require the same width as the header;
- require a nonempty gene identifier and collect it as an unchanged string;
- validate gene length separately from sample counts; report missing, non-integer, or negative lengths;
- require every sample count to be present, integer-valued, and nonnegative;
- collect file line numbers and column names for failures without printing the full matrix.

After reading all rows, detect duplicated gene identifiers. Report counts of each failure class. Do not silently coerce invalid values or drop malformed rows.

### 4. Compute descriptive sample metrics

For each sample count column, calculate:

- total raw counts;
- number of zero-count genes;
- number of detected genes, defined as count greater than zero;
- median raw count among detected genes only.

If a sample has no detected genes, emit an empty median and flag it in the report.

### 5. Create compact labels and mapping

Derive concise, unique plot labels from the original sample names. If derivation creates duplicates, use deterministic labels such as `S01`, `S02`, and so on.

Include both the compact label and exact original column name in the QC CSV. Include the complete compact-to-original mapping in the report.

### 6. Create outputs

Create:

1. a CSV with one row per sample and columns for compact label, exact original name, total raw counts, zero-count genes, detected genes, and detected-gene median;
2. a matplotlib library-size plot with legible compact sample labels;
3. a Markdown report containing scope, provenance, matrix validation, exact label mapping, output descriptions, versions, and limitations.

The plot title or axis label must state that values are raw total counts, not normalized expression. A footer may reinforce that no normalization or differential-expression analysis was performed.

### 7. Verify source and outputs

1. Recompute input SHA-256 after all analysis and require exact equality with the pre-analysis hash.
2. Reopen the CSV and confirm its row count, field names, compact labels, and original-name mapping.
3. Reopen the PNG and verify its PNG signature, IHDR record, and positive dimensions.
4. Reopen the Markdown report and confirm it contains both hashes, the equality result, source URL, mapping, versions, and limitation language.
5. Stop and report the exact failed check if any assertion fails.

### 8. Save managed artifacts

Save each requested output with the managed artifact tool only after verification succeeds. Pass the producing Notebook run ID for Notebook-owned files.

For small Markdown reports that are not registered as a single-owner Notebook working file, save the verified text inline through the artifact tool. Do not claim an artifact is available until saving succeeds.

## Report language

State that the checks are descriptive and limited to raw-count file structure and simple per-sample distributions. Explicitly note that they do not establish sample identity, remove technical artifacts, assess batch effects, normalize expression, test differential expression, demonstrate statistical significance, or support biological or clinical conclusions.

## Failure handling

- If an application-provided provenance Version ID is unavailable but the exact managed Notebook path is readable, retry once using only that path and retain byte-level provenance with the before/after SHA-256 values.
- Do not retry repeated kernel-process failures.
- Do not mark partial outputs as complete.
- Preserve invalid inputs unchanged and return a compact diagnostic summary instead of attempting downstream inference.

## Completion checklist

- Input hash matches before and after.
- Metadata and sample columns are separated explicitly.
- Expected sample count is confirmed.
- Gene IDs are unchanged and unique.
- Row widths, missingness, lengths, and count domains are validated.
- Four requested metrics exist for every sample.
- Compact labels map exactly to original names in CSV and report.
- Plot clearly says raw counts, not normalized expression.
- CSV, PNG, and report reopen successfully.
- All managed artifacts save successfully.
- Final response contains no differential-expression, significance, biological, or clinical claims.
