import csv
import hashlib
import json
from pathlib import Path

source_path = Path("remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv")
source_bytes = source_path.read_bytes()
with source_path.open("r", newline="", encoding="utf-8") as source_file:
    rows = list(csv.DictReader(source_file))

result = {
    "row_count": len(rows),
    "sum_total_counts": sum(int(row["total_counts"]) for row in rows),
    "source_sha256": hashlib.sha256(source_bytes).hexdigest(),
}

Path("GSE60450-portable-check.json").write_text(
    json.dumps(result, indent=2) + "\n",
    encoding="utf-8",
)
