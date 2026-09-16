import csv
import hashlib
import json
import os
import platform
import statistics
import struct
import sys
from collections import Counter

import matplotlib
import matplotlib.pyplot as plt

input_path = "inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt"
source_url = "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450"
csv_path = "rnaseq-sample-qc.csv"
png_path = "rnaseq-library-sizes.png"
report_path = "rnaseq-qc-report.md"

def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as fh:
        for block in iter(lambda: fh.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()

sha_before = sha256_file(input_path)
input_bytes = os.path.getsize(input_path)

with open(input_path, "r", encoding="utf-8", newline="") as fh:
    reader = csv.reader(fh, delimiter="\t")
    header = next(reader)
    expected_width = len(header)
    rows = list(reader)

metadata_columns = header[:2]
sample_columns = header[2:]
compact_labels = [name.split("_", 1)[0] for name in sample_columns]
if len(set(compact_labels)) != len(compact_labels):
    compact_labels = [f"S{i+1:02d}" for i in range(len(sample_columns))]

row_width_failures = []
missing_entries = []
invalid_gene_ids = []
invalid_lengths = []
invalid_counts = []
gene_ids = []
sample_values = [[] for _ in sample_columns]

for file_line, row in enumerate(rows, start=2):
    if len(row) != expected_width:
        row_width_failures.append((file_line, len(row)))
        continue
    gene_id, length_text = row[0], row[1]
    gene_ids.append(gene_id)
    if gene_id == "":
        missing_entries.append((file_line, "EntrezGeneID"))
    elif not gene_id.isdigit():
        invalid_gene_ids.append((file_line, gene_id))
    if length_text == "":
        missing_entries.append((file_line, "Length"))
    else:
        try:
            length_value = int(length_text)
            if length_value < 0:
                invalid_lengths.append((file_line, length_text))
        except ValueError:
            invalid_lengths.append((file_line, length_text))
    for j, value in enumerate(row[2:]):
        if value == "":
            missing_entries.append((file_line, sample_columns[j]))
            continue
        try:
            count = int(value)
            if count < 0:
                invalid_counts.append((file_line, sample_columns[j], value))
            sample_values[j].append(count)
        except ValueError:
            invalid_counts.append((file_line, sample_columns[j], value))

duplicates = sorted(gid for gid, n in Counter(gene_ids).items() if n > 1)
metrics = []
for compact, original, values in zip(compact_labels, sample_columns, sample_values):
    detected = [x for x in values if x > 0]
    metrics.append({
        "compact_sample": compact,
        "original_column_name": original,
        "total_raw_counts": sum(values),
        "zero_count_genes": sum(x == 0 for x in values),
        "detected_genes_count_gt_0": len(detected),
        "median_count_among_detected_genes": statistics.median(detected) if detected else ""
    })

with open(csv_path, "w", encoding="utf-8", newline="") as fh:
    fieldnames = ["compact_sample", "original_column_name", "total_raw_counts",
                  "zero_count_genes", "detected_genes_count_gt_0",
                  "median_count_among_detected_genes"]
    writer = csv.DictWriter(fh, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(metrics)

fig, ax = plt.subplots(figsize=(11, 6.5))
totals = [m["total_raw_counts"] for m in metrics]
bars = ax.bar(compact_labels, totals, color="#4472A8")
ax.set_title("GSE60450 sample library sizes")
ax.set_xlabel("Compact sample label")
ax.set_ylabel("Raw total counts (not normalized expression)")
ax.tick_params(axis="x", rotation=45)
ax.grid(axis="y", linestyle=":", alpha=0.45)
ax.ticklabel_format(axis="y", style="sci", scilimits=(0, 0))
for bar, total in zip(bars, totals):
    ax.annotate(f"{total/1e6:.1f}M", (bar.get_x() + bar.get_width()/2, bar.get_height()),
                xytext=(0, 3), textcoords="offset points", ha="center", va="bottom", fontsize=8)
fig.text(0.5, 0.01, "Values are raw count totals; no normalization or differential-expression analysis was performed.",
         ha="center", fontsize=9)
fig.tight_layout(rect=(0, 0.04, 1, 1))
fig.savefig(png_path, dpi=180, bbox_inches="tight")
plt.close(fig)

python_version = platform.python_version()
python_build = sys.version.replace("\n", " ")
matplotlib_version = matplotlib.__version__
mapping_lines = "\n".join(f"- \`{c}\` → \`{o}\`" for c, o in zip(compact_labels, sample_columns))
validation_pass = (
    metadata_columns == ["EntrezGeneID", "Length"] and
    len(sample_columns) == 12 and not row_width_failures and
    not missing_entries and not invalid_gene_ids and not invalid_lengths and
    not invalid_counts and not duplicates
)

report = f"""# GSE60450 raw count matrix QC

## Scope

This is a descriptive quality check of the public GEO GSE60450 gene-count matrix before any differential-expression analysis. The input was kept unchanged; \`EntrezGeneID\` and \`Length\` were treated as metadata and excluded from the 12 sample count columns.

## Provenance

- Source: {source_url}
- Managed input: \`{input_path}\`
- Input size: {input_bytes:,} bytes
- SHA-256 before analysis: \`{sha_before}\`
- SHA-256 after analysis: PENDING_POST_ANALYSIS_HASH
- Hashes identical: PENDING_HASH_COMPARISON
- Python: \`{python_version}\` (full build: \`{python_build}\`)
- matplotlib: \`{matplotlib_version}\`
- \`csv\`, \`statistics\`, and \`hashlib\`: Python {python_version} standard library

## Matrix validation

- Data rows (genes): {len(rows):,}
- Columns: {expected_width} total = 2 metadata + {len(sample_columns)} sample-count columns
- Metadata columns exactly \`EntrezGeneID\`, \`Length\`: {metadata_columns == ["EntrezGeneID", "Length"]}
- Unique Entrez Gene IDs: {not duplicates} ({len(duplicates)} duplicated IDs)
- Consistent row widths: {not row_width_failures} ({len(row_width_failures)} failures)
- Missing entries: {len(missing_entries)}
- Invalid Entrez Gene IDs: {len(invalid_gene_ids)}
- Invalid or negative Length values: {len(invalid_lengths)}
- Non-integer or negative sample counts: {len(invalid_counts)}
- Overall requested validation passed: {validation_pass}

## Sample-label mapping

{mapping_lines}

## Descriptive metrics

The accompanying CSV reports, for every sample, raw total counts, zero-count genes, detected genes (count > 0), and the median raw count among detected genes. The accompanying plot shows raw library-size totals and not normalized expression.

## Limitations

These checks assess file structure and simple distributions of raw counts only. They do not evaluate sample identity, sequencing artifacts, batch effects, normalization, biological replication, or model assumptions, and they do not support claims about differential expression, statistical significance, or clinical relevance.
"""

with open(report_path, "w", encoding="utf-8") as fh:
    fh.write(report)

sha_after = sha256_file(input_path)
hashes_identical = sha_before == sha_after
with open(report_path, "r", encoding="utf-8") as fh:
    report_text = fh.read()
report_text = report_text.replace("PENDING_POST_ANALYSIS_HASH", sha_after)
report_text = report_text.replace("PENDING_HASH_COMPARISON", str(hashes_identical))
with open(report_path, "w", encoding="utf-8") as fh:
    fh.write(report_text)

with open(csv_path, "r", encoding="utf-8", newline="") as fh:
    csv_rows = list(csv.DictReader(fh))
csv_verified = (
    len(csv_rows) == 12 and
    [r["compact_sample"] for r in csv_rows] == compact_labels and
    [r["original_column_name"] for r in csv_rows] == sample_columns
)
with open(png_path, "rb") as fh:
    png_header = fh.read(24)
png_verified = (
    png_header[:8] == b"\x89PNG\r\n\x1a\n" and
    png_header[12:16] == b"IHDR" and
    struct.unpack(">II", png_header[16:24])[0] > 0 and
    struct.unpack(">II", png_header[16:24])[1] > 0
)
with open(report_path, "r", encoding="utf-8") as fh:
    reopened_report = fh.read()
report_verified = all(token in reopened_report for token in [
    sha_before, sha_after, "Hashes identical: True", source_url,
    "do not support claims about differential expression"
])
assert hashes_identical, "Input SHA-256 changed during analysis"
assert validation_pass, "One or more requested matrix validation checks failed"
assert csv_verified and png_verified and report_verified, "Output reopen verification failed"

summary = {
    "sha256_before": sha_before,
    "sha256_after": sha_after,
    "hashes_identical": hashes_identical,
    "data_rows": len(rows),
    "total_columns": expected_width,
    "sample_columns": len(sample_columns),
    "validation_pass": validation_pass,
    "csv_verified": csv_verified,
    "png_verified": png_verified,
    "report_verified": report_verified,
    "python_version": python_version,
    "matplotlib_version": matplotlib_version,
    "metrics": metrics,
}
print(json.dumps(summary, indent=2))