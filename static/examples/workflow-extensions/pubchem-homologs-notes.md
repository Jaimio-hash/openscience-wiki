# PubChem homologs: worked example

## Scope

This example resolves the unambiguous names acetic acid, propanoic acid, butanoic acid, pentanoic acid, hexanoic acid, heptanoic acid, and octanoic acid with the Chemistry/PubChem connector. These are the neutral, straight-chain saturated monocarboxylic acids from C2 through C8. Branched isomers, salts, and conjugate bases are excluded.

## Exact retrieval procedure

1. For each name, call `pubchem_search_compounds` with `namespace: "name"`, `max_cids: 1`, and `with_properties: true`.
2. Preserve every exact lookup input and raw returned search response.
3. Collect the seven resolved CIDs in name order.
4. Call `pubchem_get_compounds` once with those CIDs and `include_synonyms: false`.
5. Preserve the exact batch input and raw returned batch response.
6. Create the CSV from the batch records and add the stable PubChem compound page URL `https://pubchem.ncbi.nlm.nih.gov/compound/{CID}`.

The complete operation log and raw connector responses are in `pubchem-homologs-source.json`.

## Validation results

- Seven output rows: **PASS**
- Seven distinct CIDs: **PASS**
- Carbon counts exactly 2 through 8: **PASS**
- Every formula matches CnH2nO2: **PASS**
- All batch records have formal charge 0: **PASS**
- No batch CIDs were missing: **PASS**
- No duplicate batch CIDs were submitted: **PASS**

The returned names, formulas, neutral charges, and linear SMILES support that the selected records are neutral straight-chain acids rather than branched isomers, salts, or carboxylate conjugate bases.

## Interpretation and limitation

PubChem's molecular formula, molecular weight, SMILES, ConnectivitySMILES, InChIKey, and related fields are database-computed or standardized structure properties. They are not experimental measurements and should not be described as measured values. The molecular-weight values in the CSV are preserved exactly as returned by PubChem.

The CSV preserves both returned structure field names, `SMILES` and `ConnectivitySMILES`. For these achiral homologs, their returned values are identical.
