---
name: rnaseq-count-qc
description: Validate public bulk RNA-seq raw gene-count matrices and produce traceable sample QC summaries before differential-expression analysis.
---
# RNA-seq count quality check

## Inputs
Use the file attached to the current session. Ask for a source accession or URL when absent. Do not infer sample conditions from shortened column names. Read references/sample-metric-schema.md for the output schema when it is accessible; if a resource cannot be opened, report that limitation and follow the explicit requirements below.

## Procedure
1. Keep the source unchanged. Record its exact managed path, source accession and SHA-256 before and after the calculation.
2. Inspect the delimiter, header and dimensions. Preserve the original sample identifiers. In GSE60450, EntrezGeneID and Length are metadata, not samples.
3. Check duplicate or missing gene identifiers, missing entries, unequal row lengths and negative or non-integer counts. Stop and report affected rows if the count matrix fails these checks; never silently replace missing counts with zero.
4. Use an available Python or R Session Notebook. No new packages are needed for this descriptive check. Compute total_raw_counts, zero_count_genes, detected_genes (count > 0), and median_detected_count for each sample.
5. Save a new CSV and a short methods report through supported artifact operations. Keep the mapping from plot labels to original sample identifiers when creating a chart.
6. Reopen the outputs and check sample count, metric values and unchanged source checksum. Distinguish actual checks from unexecuted suggestions.

## Interpretation
Raw-count QC is descriptive. It does not test differential expression, establish clinical relevance or determine quality thresholds without a stated study design. Report missing annotations and unresolved input access rather than inventing them.
