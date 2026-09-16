# Minimal CPU inverse-folding comparison: human ubiquitin (PDB 1UBQ, chain A)

## Run configuration

- Official ProteinMPNN checkout commit: `8907e6671bfbfc92303b5f79c4b5e6ce47cdef57`
- Models: vanilla `v_48_020` and soluble `v_48_020`
- Device: CPU only
- Designed chain: A
- Candidates per model: 1
- Sampling temperature: 0.1
- Seed: 42
- Input PDB SHA-256 before and after: `d4a6812d8951cf6594e6a0763f089e35f5a80b62acb3c117b2c5565228a7b161` (unchanged)

## Results

| Model | Candidate length | Candidate score | Global score | Recovery vs native |
|---|---:|---:|---:|---:|
| ProteinMPNN vanilla | 76 | 0.7883 | 0.7883 | 0.5526 |
| SolubleMPNN | 76 | 0.7900 | 0.7900 | 0.5921 |

Each FASTA keeps the native 1UBQ chain-A sequence as the first record and the single designed candidate as the second record.

## Independent validation

Both native and designed records are 76 residues long and contain only the 20 canonical amino-acid letters. Recovery was recomputed directly position by position and agrees with each FASTA header. Header scores are finite, and every numeric value in the saved model score arrays (`score`, `global_score`) is finite.

## Interpretation

These are computational inverse-folding candidates conditioned on the 1UBQ backbone. They are not experimentally validated proteins. Similar scores in this one-sample run do not establish superior folding, stability, solubility, expression, or biological function; those claims require structural prediction and experimental testing.
