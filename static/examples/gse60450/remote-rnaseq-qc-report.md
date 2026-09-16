# Remote RNA-seq descriptive QC report

- Source GEO accession: GSE60450
- Input file: GSE60450_Lactation-GenewiseCounts.txt
- Dimensions: 27179 genes x 12 sample-count columns
- Identifier column preserved: EntrezGeneID
- Gene-length column handled separately: Length
- Input SHA-256 before: `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`
- Input SHA-256 after: `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691`
- Exit status: 0
- Sample identifiers:
  - `MCL1-DG_BC2CTUACXX_ACTTGA_L002_R1`
  - `MCL1-DH_BC2CTUACXX_CAGATC_L002_R1`
  - `MCL1-DI_BC2CTUACXX_ACAGTG_L002_R1`
  - `MCL1-DJ_BC2CTUACXX_CGATGT_L002_R1`
  - `MCL1-DK_BC2CTUACXX_TTAGGC_L002_R1`
  - `MCL1-DL_BC2CTUACXX_ATCACG_L002_R1`
  - `MCL1-LA_BC2CTUACXX_GATCAG_L001_R1`
  - `MCL1-LB_BC2CTUACXX_TGACCA_L001_R1`
  - `MCL1-LC_BC2CTUACXX_GCCAAT_L001_R1`
  - `MCL1-LD_BC2CTUACXX_GGCTAC_L001_R1`
  - `MCL1-LE_BC2CTUACXX_TAGCTT_L001_R1`
  - `MCL1-LF_BC2CTUACXX_CTTGTA_L001_R1`

## Method

The tab-delimited matrix was streamed once with Python standard-library csv parsing. For each sample, total counts, zero-count genes, genes with count > 0, and the median among strictly positive raw counts were computed. The input was opened read-only and its SHA-256 was verified before and after processing.

## Limitations

These are descriptive checks on raw counts only. No normalization, library-composition adjustment, batch assessment, differential-expression testing, or biological/clinical inference was performed. The positive-count median excludes zeros and is not a normalized expression measure. Checks do not establish sample identity, experimental validity, or absence of upstream processing errors.
