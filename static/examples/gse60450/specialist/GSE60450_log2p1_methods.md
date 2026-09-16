# GSE60450 log2(x+1) exploratory transformation

## Scope

This output is an exploratory element-wise transformation of the public GSE60450 raw gene-count matrix. It is not library-size normalization, TPM/CPM normalization, count-model normalization, batch correction, differential-expression analysis, or a basis for clinical conclusions.

## Provenance

- Managed input: `inputs/GSE60450_Lactation-GenewiseCounts-128d2411f316.txt`
- Source filename: `GSE60450_Lactation-GenewiseCounts.txt`
- Source SHA-256 before and after execution: `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`
- Installed Skill ID: `personal-gene-protein-expression-matrix-normalization`
- Genuine packaged entry point: `scripts/main.R`
- Packaged entry-point SHA-256: `0f4b106e452d11d09e8d840cc30495a4ac9cfca54026dbef8101c271b5d239be`
- Runtime: external R 4.6.0
- Packages: data.table 1.18.4; optparse 1.8.2

The source file remained unchanged.

## Input preparation and method

The tab-delimited source contained 27,179 gene rows and 14 columns: `EntrezGeneID`, `Length`, and exactly 12 sample-count columns. To meet the packaged Skill input contract, a temporary CSV was created with `EntrezGeneID` as the first identifier column and only the 12 sample columns as numeric inputs. `Length` was excluded from transformation.

The genuine packaged R entry point was invoked with:

- method: `log2`
- pseudo-count: `1`
- transformation: `log2(x + 1)`
- seed: 42 (recorded by the package; the transformation is deterministic)
- delimiter: CSV for the temporary Skill-compatible input

After successful execution, the original unmodified `Length` column was restored by preserved row order. The published CSV therefore contains `EntrezGeneID`, unchanged `Length`, and the same 12 sample columns.

## Verification

All gates passed:

- 27,179 input and output gene rows;
- exactly 12 transformed sample columns;
- `EntrezGeneID` values and order preserved;
- `Length` values and order preserved unchanged;
- all transformed values finite;
- complete output matrix agreed with direct `log2(raw_count + 1)` calculations, maximum absolute difference `5.151435e-14`;
- source SHA-256 identical before and after execution.

Selected exact checks:

| EntrezGeneID | Sample | Raw | Expected/observed log2(x+1) |
|---:|---|---:|---:|
| 497097 | MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1 | 438 | 8.778077 |
| 497097 | MCL1-LA_BC2CTUACXX_GATCAG_L001_R1 | 0 | 0 |
| 27395 | MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1 | 489 | 8.936638 |
| 100504472 | MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1 | 0 | 0 |

## Limitations

The transform does not account for library-size differences, composition bias, the mean–variance relationship of counts, or the experimental design. It should be used only for appropriate exploratory display or descriptive analysis. Raw counts must remain the input to any later count-aware statistical model.
