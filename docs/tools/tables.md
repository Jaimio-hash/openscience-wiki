---
title: "Tables and datasets"
last_update:
  date: '2026-09-14'
---

import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

import ExampleDownload from '@site/src/components/ExampleDownload';

# Tables and datasets

Use the preview to understand a table's structure, then use Python or R to validate and transform the complete file. Common viewing and download controls belong to [Opening and previewing files](../guides/previews.md); renderer bounds and extensions are listed in [File formats](../reference/formats.md).

<span id="inspect-the-real-sample-qc-table" />

<span id="preview-controls-and-limits" />

For a table embedded in a literature PDF, use [PDF extraction](../guides/previews.md#pdf-extraction), then reopen the exported table and check its headers, values and notes against the source.

## Identify what one row represents

<p className="example-label"><strong>Worked example</strong> Read sample identifiers and metrics in a QC table</p>

1. Open <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">the example QC table</ExampleDownload> from a saved result, Files or an attachment.
2. Read the column names and decide whether rows represent samples, genes or another unit. In this output, each row is a sample; in its source matrix, each row is a gene.
3. Locate the full identifier column. Keep short plotting labels mapped to those identifiers.
4. Read the displayed range before estimating dataset size. Use a full-file calculation when the preview is bounded.
5. Compare sample values with the [shared QC baseline](../reference/example-data.md#sample-qc-baseline).

![Sample-QC table with full identifiers and numerical columns](/img/open-science/capabilities-walkthrough/32-csv-preview.webp)

<ToolOperationGroup>
<summary>QC table: column meanings</summary>

| Column | Interpretation | Check before using it |
| --- | --- | --- |
| compact_sample | Short figure label | Retain its mapping to the original identifier |
| original_column_name | Original sample identifier | Check missing and duplicate names |
| total_raw_counts | Sum of sample counts | Preserve raw-count units; do not call this normalized expression |
| zero_count_genes | Number of genes with zero counts | Together with detected genes, must cover all input gene rows |
| detected_genes_count_gt_0 | Number of genes with positive counts | This is a count of genes, not expression magnitude |
| median_count_among_detected_genes | Median over positive counts | State that zero-count genes are excluded |

</ToolOperationGroup>

<span id="work-with-the-full-dataset" />

## Check the complete dataset

Separate identifiers and metadata from measurement columns before selecting numerical operations. Preserve gene IDs as identifiers and keep gene length out of sample-count calculations. Check missing values, duplicate identifiers and allowed value ranges in the complete input.

A visible row count can describe only the preview. Read the complete file in [Notebook](../guides/notebook.md) to establish dimensions. The CSV renderer is read-only; header clicks are not a substitute for a sorting or filtering operation.

## Save transformations as new results

State the join key, filter rule, missing-value policy and expected output columns in your request. Ask for a separate derived file so that the original input remains available. Reopen the output, compare its row count and identifiers with the input, and inspect the executed code before interpreting changes.

Notebook variables are temporary kernel state until saved. A visible variable and a managed file version have different lifecycles; use [Files and versions](../guides/files.md) to retain and compare saved results.

## Choose a reader for other formats

For `.xls`/`.xlsx`, use the Office preview and worksheet controls described in [Previews](../guides/previews.md). Binary containers such as `.h5ad` or `.h5` require a compatible analysis library. A tab-separated `.txt` matrix may open as text. Renaming an extension does not convert data or make an unsupported format readable.
