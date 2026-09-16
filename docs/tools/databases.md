---
title: "Scientific databases"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# Scientific databases

The app bundles **23 data-source Connectors**, plus a separate offline Molecule Connector. The full registry has **239 tool operations** including Molecule's two operations; the data-source catalog below covers 237. Enable the relevant Connector in Settings, then ask a bounded question with the correct identifier type.

<span id="actual-local-queries" />

## Data-source catalog

Choose by identifier and research question. Source coverage differs; consult the operation reference for exact fields.

| Connector | Sources | Operations | Use it for  |
| --- | --- | --- | ---  |
| Chemistry · `chemistry` | PubChem, ChEBI, Rhea, BindingDB | 12 | Small-molecule chemistry via PubChem, ChEBI, Rhea and BindingDB.  |
| Literature Graph · `literature` | OpenAlex, arXiv, Crossref, DataCite | 13 | Papers, authors, citations, DOI updates and dataset/software records. |
| PubMed · `pubmed` | PubMed, PMC, Europe PMC | 7 | Biomedical literature via NCBI E-utilities, the PMC ID Converter and Europe PMC — search, metadata, related articles, citation lookup, ID conversion, full text and copyright.  |
| Genes & Ontologies · `genes` | MyGene, UniProt, OLS, QuickGO, Reactome | 7 | Gene/protein identity and ontology terms — mygene.info, UniProt, OLS4 ontologies, GO annotations, Reactome pathways.  |
| Genomes · `genomes` | Ensembl, UCSC | 11 | Genome annotation, variants, homology, sequence and browser tracks — Ensembl REST and the UCSC Genome Browser.  |
| Variants · `variants` | gnomAD, ClinVar, dbSNP | 15 | Human genetic variants — gnomAD population frequencies/constraint, ClinVar records/search (direct NCBI), dbSNP, structural and mitochondrial variants.  |
| Clinical Trials · `clinical-trials` | ClinicalTrials.gov | 6 | Clinical trials from ClinicalTrials.gov — search, details, sponsors, investigators, endpoints, and eligibility.  |
| Clinical Genomics · `clinical-genomics` | ClinGen, CIViC, Open Targets | 20 | Clinical genomics knowledge bases: ClinGen curations, CIViC clinical evidence, and the Open Targets Platform.  |
| Structures & Interactions · `structures` | PDB, AlphaFold, EMDB, Complex Portal, IntAct | 16 | Structures and molecular interactions — PDB structures, AlphaFold predictions, EMDB cryo-EM entries, Complex Portal complexes, IntAct interaction networks.  |
| ChEMBL · `chembl` | ChEMBL | 6 | Bioactive compounds, drugs, targets, bioactivity, and mechanisms via the ChEMBL REST API.  |
| bioRxiv · `biorxiv` | bioRxiv, medRxiv, ROR | 7 | bioRxiv/medRxiv preprints — search by date/category, metadata by DOI, journal-publication links, funder listings, and platform statistics.  |
| Drug Regulatory · `drug-regulatory` | openFDA | 7 | Drugs@FDA applications, labels, and corpus statistics via openFDA.  |
| Human Genetics · `human-genetics` | GWAS Catalog, eQTL Catalogue, PheWeb | 14 | Human genetic association evidence — GWAS Catalog, eQTL Catalogue, and PheWeb PheWAS portals (FinnGen, BioBank Japan).  |
| Expression · `expression` | GTEx | 12 | Human tissue expression and eQTLs via the GTEx Portal.  |
| Protein Annotation · `protein-annotation` | InterPro, Pfam, Human Protein Atlas, STRING | 13 | Protein domain architecture, family/clan membership, expression atlas and interaction networks via InterPro/Pfam, the Human Protein Atlas and STRING.  |
| Cancer Models · `cancer-models` | cBioPortal | 6 | Cancer genomics study records via the cBioPortal REST API.  |
| RNA · `rna` | Rfam | 9 | Non-coding RNA family data (metadata, alignments, models, structures) via Rfam.  |
| Omics Archives · `omics-archives` | ArrayExpress, GEO, MetaboLights, MGnify, PRIDE | 17 | Omics data archives — expression (ArrayExpress, GEO), metabolomics (MetaboLights), metagenomics (MGnify) and proteomics (PRIDE).  |
| CellGuide · `cellguide` | CELLxGENE | 5 | Cell-type identity, marker genes, source datasets, and tissues via CELLxGENE CellGuide.  |
| Regulation · `regulation` | ENCODE, JASPAR, UniBind | 16 | Gene-regulation functional genomics — ENCODE experiments/biosamples/files, JASPAR TF binding profiles, and UniBind ChIP-seq TFBS.  |
| Research Resources · `research-resources` | Grants.gov, Antibody Registry | 5 | Funding-opportunity search (Grants.gov) and antibody catalog lookups (Antibody Registry).  |
| BioMart · `biomart` | Ensembl BioMart | 8 | Ensembl BioMart attribute queries and identifier translation.  |
| ZINC · `zinc` | ZINC | 5 | ZINC22 purchasable chemical space (CartBlanche22) — compound lookup by ZINC id, SMILES exact/similarity search, supplier-code resolution, random sampling, 3D structure locations for docking.  |

## Retrieve a record and verify its identity

1. Open **Settings → Connectors**, search the required source and confirm availability to the intended agent.
2. Open its detail. Read **Tools**, inputs, example and third-party requirements.
3. Supply an explicit query/accession and result limit. Retain the exact query when creating a literature collection or evidence table.
4. Inspect returned IDs and source fields. An empty result, a truncated batch and an error are different outcomes.
5. Save needed records into the project/library deliberately. A search response does not automatically mean all papers were added to the literature library or full texts downloaded.

### Start with one known identifier

<p className="example-label"><strong>Worked example</strong> Resolve the human TP53 gene identifier</p>

Enable **Genes & Ontologies** and ask: **Use query_genes to resolve TP53 with scopes="symbol", species="human" and fields="symbol,name,entrezgene". Return the input query and any unmatched records.** In this example, the human TP53 record identifies Entrez Gene **7157** and the name **tumor protein p53**. Check the record's `query` and `symbol` before using the mapped ID. A symbol may return several matches, so retain all results until you have confirmed the intended organism and record. [Exact fields](../reference/connector-operations.md#query_genes).

## Choose a query and inspect the result

<p className="example-label"><strong>Example</strong> Bounded database queries and responses</p>

The table records these example responses; live query results may differ.

| Connector / tool | Input | Observed result |
| --- | --- | --- |
| Omics Archives / geo_get_series | `accessions: ["GSE60450"]` | Series/sample metadata with 12 samples; metadata retrieval did not recompute the uploaded counts. |
| Genes / query_genes | TP53; symbol scope; human | Entrez Gene ID 7157, symbol TP53, name tumor protein p53. |
| PubMed / search_articles | GSE60450, maximum 2 | PMIDs 38059347 and 37306301. These are query matches, not automatically the dataset's original publication. |
| Chemistry / pubchem_search_compounds | aspirin, maximum 1 CID | CID 2244, formula C9H8O4 and molecular weight 180.16. |
| Literature / openalex_search_works | `CRISPR base editing`; from 2020; open access; maximum 2 | Two work records with OpenAlex IDs, source fields and completeness flags. |

### Connect OpenAlex and follow citation links

1. Open **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**.
2. Enter your API key, select **Validate**, then **Save** after validation succeeds.
3. Search for a topic with a small `max_records` limit. Check `n_records_returned` and `records_truncated` before describing the result as complete.
4. Use a returned work ID with `openalex_get_work`. Use `openalex_citations` for papers citing that work and `openalex_references` for works it cites. These are opposite directions.
5. For author searches, confirm the institution and ORCID before retrieving an author profile. Use a source ID or ISSN to disambiguate a journal name.

See the [OpenAlex operation parameters](../reference/connector-operations.md#openalex_search_works) for filters and returned fields.

### Look up a DOI and its related research records

Enable **Literature Graph**. Use `crossref_get_work` for publisher metadata and `crossref_get_updates` for deposited correction/retraction relationships. Use `datacite_search_records` to find dataset/software DOIs, then `datacite_get_record` to inspect a selected record. These four public methods do not require the OpenAlex key. Verify DOI identity, relationship direction and reuse terms before downloading or citing a resource. Exact fields are in the [operation reference](../reference/connector-operations.md#family-2).

Rfam sequence search now uses the official batch endpoint. If an older installation returns the retired-endpoint error, update the app and retry the intended operation. A pending job is not a completed search with no hits.

## Handle a returned record, empty match or error

Inspect the returned status before using a result. Use the [operation reference](../reference/connector-operations.md) to interpret fields and completeness flags.

| Observed outcome | What to do next |
| --- | --- |
| `found: false`, zero records, empty investigators or supplier matches | Check identifier, organism, query scope and filters. Preserve the empty result; do not present it as a retrieved record. |
| `credential_required` for OpenAlex | Open the requested credential form and bind your own key before retrying. |
| `contact_email_required` for direct NCBI variant queries | Open **Settings → Connectors → Manage credentials → Literature access**, enter **Contact email** and select **Save**. Retry the failed query. An NCBI API key is optional. Check returned identifiers, match counts and truncation flags; an empty result is distinct from a connection error. |
| HTTP `410` from eQTL | Retain the source URL, operation and response, and check service availability before changing scientific inputs. |
| Connector request timed out after `30000ms` | Retry a smaller request. Increasing only the outer Notebook timeout does not change the Connector's own deadline. |
| Notebook execution timed out after `60000ms` | The execution ended without a result. Retry operations individually; do not infer that every upstream service failed. |
| BioMart HTML maintenance page; PRIDE `Unexpected end of JSON input` | The expected structured response was unavailable. Retry later and keep the response type/error for an issue. |
| ZINC task did not complete in time | Preserve the returned task/result URL and check that job; repeatedly starting new jobs does not recover its result. |

For a report, attach the operation, bounded input, error text and timestamp through [Troubleshooting](../guides/troubleshooting.md). Remove credentials and private data before sharing.

<span id="empty-partial-and-failed-responses" />

## Find operation parameters

Use the [Connector operation reference](../reference/connector-operations.md) for required fields, accepted values and exact calls. Choose a source here first; use the reference when preparing a specific operation.

Keep genome build, organism, tissue, units and accession versions with returned data. For general HTTP meanings and recovery, use [Troubleshooting](../guides/troubleshooting.md). Database records, predictions and generated summaries are different evidence types; check the cited source before using a research claim.


Implementation reference: [ConnectorsPanel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

Catalog source: [catalog.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [registry.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
