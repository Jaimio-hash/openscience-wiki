---
name: rnaseq-descriptive-qc
description: Validate a raw bulk RNA-seq gene-by-sample count matrix and publish traceable per-sample descriptive QC. Use when checking matrix structure, identifier uniqueness, missingness, nonnegative integer counts, library sizes, zero-count genes, detected genes, median positive counts, and before/after file hashes. Do not use for normalization, differential expression, biological interpretation, or clinical conclusions.
---

# RNA-seq Descriptive QC

Validate one attached raw gene-count matrix without modifying it, then publish a per-sample CSV and a concise Markdown report.

## Inputs and boundaries

- Work only in the current App-managed Python Session Notebook.
- Read an attachment only from its exact managed `inputs/...` Notebook path.
- Preserve the original file and gene identifiers byte-for-byte.
- Treat `EntrezGeneID` as the gene identifier and `Length` as gene metadata by default. If the user supplies different explicit column names, use those instead.
- Exclude identifier and gene-length columns from all sample-count calculations.
- Use existing Python libraries. Prefer the Python standard library (`csv`, `hashlib`, and `statistics`) so the workflow does not depend on optional packages.
- Do not install, remove, or upgrade packages. Do not use network access or remote compute.
- Do not normalize counts, test differential expression, or infer biological or clinical effects.

## Run the validation

1. Compute SHA-256 on the input before reading it.
2. Read the tab-delimited matrix in the Notebook. For a large matrix, stream rows rather than printing or loading the file into chat.
3. Confirm that the identifier and length columns exist, then define every remaining column as a sample column.
4. Record:
   - gene rows, total columns, and sample columns;
   - malformed-width rows;
   - missing values in the full table and sample-count cells;
   - missing and duplicate gene identifiers;
   - missing or nonnumeric length values;
   - nonnumeric, negative, and noninteger sample-count cells.
5. For each sample, calculate:
   - `total_counts`;
   - `zero_count_genes` where count equals zero;
   - `detected_genes` where count is greater than zero;
   - `median_positive_count` across counts greater than zero.
6. Compute SHA-256 again after analysis and require the before/after hashes to match.
7. Mark structural validation as passed only when:
   - required columns are present;
   - at least one sample column exists;
   - row widths are valid;
   - gene identifiers are present and unique;
   - sample-count cells are complete, numeric, nonnegative, and integer-valued;
   - the before/after hashes match.

When the user requests background execution, call the managed Notebook with `background=true`, retain the exact run ID, and rely on automatic completion delivery instead of repeated polling. If an optional library is unavailable and package changes are disallowed, rerun only when justified using the Python standard library.

## Outputs

Write a CSV with exactly these columns:

`sample,total_counts,zero_count_genes,detected_genes,median_positive_count`

Write a concise Markdown report with three clearly separated parts:

1. **Structural QC** — dimensions, excluded metadata columns, identifier uniqueness, missingness, count validity, length validity, input preservation, and both SHA-256 values.
2. **Descriptive interpretation** — the observed library-size range and a statement that library-size differences and sample summaries are descriptive QC only, not differential-expression results.
3. **Provenance and limitations** — dataset/accession when known, exact managed input path, input Version ID when formally accepted by the Notebook, Python libraries used, and the analyses not performed.

Do not imply that a rejected Version ID is formally attached provenance. Record the exact managed input path and matching hashes as fallback provenance and state the limitation.

## Managed publication and verification

- Save generated user-facing files through the supported managed Artifact publication tool.
- For a Notebook-produced file, publish the exact `workingFiles[].relativePath` with the matching producing run ID.
- Small Markdown may be published inline when it was composed outside the Notebook.
- Do not copy completed outputs or rerun a completed computation merely to publish them.
- Verify publication receipts and report the exact artifact filenames. Reopen through an available managed Artifact reader when one exists; otherwise say that filename verification came from publication receipts and provide the managed artifact links.
- End with one compact artifact link per successfully published output.

## Failure handling

- Missing required columns: stop and report the missing names.
- Invalid counts, duplicate identifiers, missing values, malformed rows, or hash mismatch: publish the descriptive results but report that structural validation did not fully pass.
- Missing optional Python package: do not install it when package changes are disallowed; use the standard library.
- Unavailable input Version attachment: do not invent provenance or copy the input; use the exact managed path and hashes and disclose the limitation.
- Artifact publication failure: report that the local file may exist but was not saved as an Artifact; do not present it as downloadable.
