#!/usr/bin/env python3
"""Read-only MCP stdio example backed by the real GSE60450 QC CSV.
Usage: python3 qc-mcp-server.py /absolute/path/to/rnaseq-sample-qc.csv
No network calls, credentials or package dependencies. JSON-RPC goes to stdout;
diagnostics go to stderr. This exposes saved descriptive metrics, not raw analysis.
"""
import csv
import json
import sys
from pathlib import Path

CSV_PATH = Path(sys.argv[1]).resolve()
with CSV_PATH.open(newline='', encoding='utf-8') as source:
    ROWS = list(csv.DictReader(source))
FIELDS = ['total_raw_counts', 'zero_count_genes', 'detected_genes_count_gt_0', 'median_count_among_detected_genes']
TOOLS = [
    {'name': 'get_dataset_summary', 'description': 'Inspect the saved GSE60450 sample-QC table, its source and available sample IDs. Does not recompute the original gene-count matrix.', 'inputSchema': {'type': 'object', 'properties': {}, 'additionalProperties': False}},
    {'name': 'get_sample_qc', 'description': 'Return saved descriptive raw-count QC for one exact original sample ID from GSE60450.', 'inputSchema': {'type': 'object', 'properties': {'sample_id': {'type': 'string', 'description': 'Full original_sample_name/original_column_name identifier from get_dataset_summary.'}}, 'required': ['sample_id'], 'additionalProperties': False}}
]

def call_tool(name, args):
    if not isinstance(args, dict):
        raise ValueError('arguments must be an object')
    if name == 'get_dataset_summary':
        if args:
            raise ValueError('get_dataset_summary accepts no arguments')
        return {'accession': 'GSE60450', 'source_url': 'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450', 'input_file': CSV_PATH.name, 'sample_rows': len(ROWS), 'sample_ids': [r['original_column_name'] for r in ROWS], 'scope': 'Saved descriptive QC metrics; no differential-expression analysis.'}
    if name == 'get_sample_qc':
        if set(args) != {'sample_id'} or not isinstance(args['sample_id'], str):
            raise ValueError('provide only a string sample_id')
        for row in ROWS:
            if row['original_column_name'] == args['sample_id']:
                return {'sample_id': args['sample_id'], **{f: float(row[f]) for f in FIELDS}}
        raise ValueError('sample_id is not present in this saved dataset')
    raise ValueError('unknown tool')

for line in sys.stdin:
    try:
        request = json.loads(line)
        if 'id' not in request:
            continue
        method = request.get('method')
        params = request.get('params') or {}
        if method == 'initialize':
            result = {'protocolVersion': params.get('protocolVersion', '2024-11-05'), 'capabilities': {'tools': {}}, 'serverInfo': {'name': 'gse60450-qc-example', 'version': '1.0.0'}}
        elif method == 'ping':
            result = {}
        elif method == 'tools/list':
            result = {'tools': TOOLS}
        elif method == 'tools/call':
            try:
                data = call_tool(params.get('name'), params.get('arguments') or {})
                result = {'content': [{'type': 'text', 'text': json.dumps(data)}], 'isError': False}
            except ValueError as exc:
                result = {'content': [{'type': 'text', 'text': str(exc)}], 'isError': True}
        else:
            print(json.dumps({'jsonrpc': '2.0', 'id': request['id'], 'error': {'code': -32601, 'message': 'Method not found'}}), flush=True)
            continue
        print(json.dumps({'jsonrpc': '2.0', 'id': request['id'], 'result': result}), flush=True)
    except Exception as exc:
        print(str(exc), file=sys.stderr, flush=True)
