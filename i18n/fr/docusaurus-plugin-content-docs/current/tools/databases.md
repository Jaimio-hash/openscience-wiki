---
title: "Bases de données scientifiques"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# Bases de données scientifiques {/* #scientific-databases */}

L'application regroupe **Connecteurs source de données 23**, plus un Molecule Connector séparé hors ligne. Le registre complet a **Opérations de l'outil 239** y compris les deux opérations de Molecule; le catalogue source de données ci-dessous couvre 237. Activez le Connector pertinent dans Paramètres, puis posez une question limitée avec le type d'identificateur correct.

<span id="actual-local-queries" />

## Catalogue source de données {/* #data-source-catalog */}

Choisissez par identifiant et question de recherche. La couverture par les sources diffère; consulter la référence de l'opération pour les champs exacts.

| Connecteur | Sources | Opérations | Utilisez-le pour  |
| --- | --- | --- | ---  |
| Chimie · `chemistry` | PubChem, Chebi, Rhea, RelidingDB | 12 | Chimie des petites molécules via PubChem, ChEBI, Rhea et BindingDB.  |
| Graphique Littérature · `literature` | OpenAlex, arXiv, Crossref, DataCite | 13 | Papiers, auteurs, citations, mises à jour DOI et enregistrements dataset/software. |
| PubMed · `pubmed` | PubMed, PMC, Europe PMC | 7 | Littérature biomédicale par l'intermédiaire de l'E-utilities NCBI, du PMC ID Converter et d'Europe PMC — recherche, métadonnées, articles connexes, recherche de citation, conversion d'ID, texte intégral et copyright.  |
| Genes & Ontologies · `genes` | MyGene, UniProt, OLS, QuickGO, Reactome | 7 | L'identité des gènes/protéines et les termes ontologiques — mygene.info, UniProt, OLS4 ontologies, annotations GO, voies de réactome.  |
| Génomes · `genomes` | Ensembl, UCSC | 11 | Annotation de génome, variantes, homologie, séquence et pistes de navigateur — Ensembl REST et le navigateur de génome UCSC.  |
| Variantes · `variants` | gnomAD, ClinVar, dbSNP | 15 | Variantes génétiques humaines — fréquences/contraintes des populations de gnomAD, enregistrements/recherche ClinVar (PNEI directe), dbSNP, variantes structurales et mitochondriales.  |
| Essais cliniques · `clinical-trials` | Essais cliniques.gov | 6 | Essais cliniques de ClinicalTrials.gov — recherche, détails, commanditaires, chercheurs, critères et admissibilité.  |
| Génomique clinique · `clinical-genomics` | ClinGen, CIViC, Objectifs ouverts | 20 | Bases de connaissances en génomique clinique : ClinGenations, preuves cliniques du CIVIC et plate-forme Open Targets.  |
| Structures et interactions · `structures` | PDB, AlphaFold, EMDB, Portail complexe, IntAct | 16 | Structures et interactions moléculaires — Structures PDB, prédictions AlphaFold, entrées EMDB cryo-EM, complexes de portails complexes, réseaux d'interactions IntAct.  |
| ChEMBL · `chembl` | CEMBL | 6 | Composés bioactifs, médicaments, cibles, bioactivité et mécanismes via le ChEMBL REST API.  |
| Produit intérieur brut `biorxiv` | Les résultats de l'analyse de la bioRxiv, medRxiv, ROR | 7 | préimpressions bioRxiv/medRxiv — recherche par date/catégorie, métadonnées par DOI, liens de publication de revues, listes de bailleurs de fonds et statistiques des plates-formes.  |
| Réglementation des médicaments · `drug-regulatory` | ouvertFDA | 7 | Drugs@FDA applications, étiquettes et statistiques de corpus via openFDA.  |
| Génétique humaine · `human-genetics` | Catalogue GWAS, Catalogue eQTL, PheWeb | 14 | Données probantes sur les associations génétiques humaines — Catalogue GWAS, catalogue eQTL et portails PheWeb PheWAS (FinnGen, BioBank Japan).  |
| Expression · `expression` | GTEx | 12 | Expression des tissus humains et eQTLs via le portail GTEx.  |
| Annotation protéique · `protein-annotation` | InterPro, Pfam, Atlas des protéines humaines, STRING | 13 | Architecture du domaine protéique, appartenance à la famille/clan, atlas d'expression et réseaux d'interaction via InterPro/Pfam, l'Atlas des protéines humaines et STRING.  |
| Modèles de cancer · `cancer-models` | cBioPortal | 6 | L'étude de génomique du cancer enregistre par l'intermédiaire de cBioPortal REST API.  |
| RNA · `rna` | Rfam | 9 | Données sur les familles d'ARN non codantes (métadonnées, alignements, modèles, structures) via Rfam.  |
| Archives Omics · `omics-archives` | ArrayExpress, GEO, MetaboLights, MGnify, PRIDE | 17 | Archives de données Omics — expression (ArrayExpress, GEO), métabolomique (MetaboLights), métagénomique (MGnify) et protéomique (PRIDE).  |
| Guide des cellules · `cellguide` | CELLxGENE | 5 | Identité de type cellulaire, gènes marqueurs, ensembles de données source et tissus via CELLxGENE CellGuide.  |
| Règlement `regulation` | ENCODE, JASPAR, UniBind | 16 | Génomique fonctionnelle de régulation génétique — expériences ENCODE/biosamples/files, profils de liaison JASPAR TF et UniBind ChIP-seq TFBS.  |
| Ressources de recherche · `research-resources` | Grants.gov, Registre des anticorps | 5 | Recherche de financement-opportunité (Grants.gov) et recherche de catalogue d'anticorps (Registre des anticorps).  |
| BioMart · `biomart` | Ensembler BioMart | 8 | Ensembl BioMart requêtes d'attributs et traduction d'identificateurs.  |
| ZINC · `zinc` | ZINC | 5 | ZINC22 espace chimique purchasable (CartBlanche22) — recherche composée par ZINC id, recherche exacte/similaire de SMILES, résolution de code fournisseur, échantillonnage aléatoire, emplacements de structure 3D pour l'arrimage.  |

## Récupérer un document et vérifier son identité {/* #retrieve-a-record-and-verify-its-identity */}

1. Ouvrez **Settings → Connectors**, recherchez la source requise et confirmez la disponibilité de l'agent prévu.
2. Ouvrez ses détails. Lire **Tools**, entrées, exemple et exigences de tiers.
3. Fournir une requête/adhésion explicite et une limite de résultat. Conserver la question exacte lors de la création d'une collection de littérature ou d'un tableau de preuves.
4. Inspecter les identifiants retournés et les champs sources. Un résultat vide, un lot tronqué et une erreur sont des résultats différents.
5. Enregistrer les documents nécessaires dans le projet/bibliothèque délibérément. Une réponse à la recherche ne signifie pas automatiquement que tous les documents ont été ajoutés à la bibliothèque de littérature ou que des textes complets ont été téléchargés.

### Commencez par un identificateur connu {/* #start-with-one-known-identifier */}

<p className="example-label"><strong>Exemple pratique</strong> Résoudre l'identificateur du gène humain TP53</p>

Activez **Genes & Ontologies** et demandez : **Utilisez query_genes pour résoudre TP53 avec des scopes, symbols, species, symbols humains et champs,nom,entrezgene". Retourne la requête d'entrée et les enregistrements non appariés.** Dans cet exemple, l'enregistrement TP53 humain identifie Entrez Gene **7157** et le nom **protéine tumorale p53**. Vérifiez les `query` et `symbol` de l'enregistrement avant d'utiliser l'ID mappé. Un symbole peut renvoyer plusieurs allumettes, ainsi conserver tous les résultats jusqu'à ce que vous ayez confirmé l'organisme prévu et enregistrer. [Champs exacts](../reference/connector-operations.md#query_genes).

## Choisir une requête et inspecter le résultat {/* #choose-a-query-and-inspect-the-result */}

<p className="example-label"><strong>Exemple</strong> Enquêtes et réponses sur les bases de données Bounded</p>

Le tableau enregistre ces exemples de réponses; Les résultats de la requête en direct peuvent différer.

| Connector / outil | Entrée | Résultat observé |
| --- | --- | --- |
| Archives d'Omics / geo_get_series | `accessions: ["GSE60450"]` | des métadonnées de séries/échantillons avec des échantillons 12; La récupération des métadonnées n'a pas recalculé les chiffres téléchargés. |
| Genes / query_genes | TP53; la portée des symboles; humains | Entrez Gene ID 7157, symbole TP53, nom protéine tumorale p53. |
| PubMed / search_articles | GSE60450, maximum 2 | PMIDs 38059347 et 37306301. Ce sont des correspondances de requête, pas automatiquement la publication originale de l'ensemble de données. |
| Chimie / pubchem_search_compounds | Aspirine, CID maximal de 1 | CID 2244, formule C9H8O4 et poids moléculaire 180.16. |
| Littérature / openalex_search_works | `CRISPR base editing`; à partir de 2020; accès libre; 2 maximum | Deux notices de travail avec des identifiants OpenAlex, des champs sources et des drapeaux d'exhaustivité. |

### Connectez OpenAlex et suivez les liens de citation {/* #connect-openalex-and-follow-citation-links */}

1. Ouvrez **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**.
2. Saisissez votre clé API, sélectionnez **Validate**, puis **Save** après validation.
3. Rechercher un sujet avec une petite limite `max_records`. Vérifiez `n_records_returned` et `records_truncated` avant de décrire le résultat comme terminé.
4. Utilisez un ID de travail retourné avec `openalex_get_work`. Utilisez `openalex_citations` pour les papiers citant ce travail et `openalex_references` pour les œuvres qu'il cite. Ce sont des directions opposées.
5. Pour les recherches d'auteur, confirmez l'établissement et l'ORCID avant de récupérer un profil d'auteur. Utilisez un identifiant source ou ISSN pour désambiguer un nom de journal.

Voir le [Paramètres d'exploitation OpenAlex](../reference/connector-operations.md#openalex_search_works) pour les filtres et les champs retournés.

### Rechercher un DOI et ses dossiers de recherche connexes {/* #look-up-a-doi-and-its-related-research-records */}

Activez **Graphique de littérature**. Utilisez `crossref_get_work` pour les métadonnées de l'éditeur et `crossref_get_updates` pour les relations de correction/rétractation déposées. Utilisez `datacite_search_records` pour trouver les DOI dataset/software, puis `datacite_get_record` pour inspecter un enregistrement sélectionné. Ces quatre méthodes publiques ne nécessitent pas la clé OpenAlex. Vérifier l'identité DOI, la direction de la relation et les termes de réutilisation avant de télécharger ou de citer une ressource. Les champs exacts sont dans le [Référence de l'opération](../reference/connector-operations.md#family-2).

La recherche de séquence Rfam utilise maintenant le paramètre de lot officiel. Si une installation plus ancienne retourne l'erreur retraitée, mettez à jour l'application et réessayez l'opération prévue. Un travail en attente n'est pas une recherche complète sans succès.

## Gérer un enregistrement retourné, une correspondance vide ou une erreur {/* #handle-a-returned-record-empty-match-or-error */}

Inspectez l'état retourné avant d'utiliser un résultat. Utilisez le [Référence de l'opération](../reference/connector-operations.md) pour interpréter les champs et les drapeaux d'exhaustivité.

| Résultat observé | Que faire ensuite |
| --- | --- |
| `found: false`, zéro enregistrement, enquêteurs vides ou correspondances avec les fournisseurs | Vérifiez l'identificateur, l'organisme, le champ de requête et les filtres. Préserver le résultat vide; ne le présente pas comme un enregistrement récupéré. |
| `credential_required` pour OpenAlex | Ouvrez le formulaire d'attestation demandé et liez votre propre clé avant de réessayer. |
| `contact_email_required` pour les requêtes de variantes directes de la BCNI | Ouvert **Settings → Connectors → Manage credentials → Literature access**, entrez **Contact email** et sélectionner **Save**. Réessayez la requête ratée. Une clé NPCI API est optionnelle. Vérifiez les identifiants retournés, les numéros de correspondance et les drapeaux de troncation; un résultat vide est distinct d'une erreur de connexion. |
| HTTP `410` d ' eQTL | Conserver l'URL source, le fonctionnement et la réponse, et vérifier la disponibilité du service avant de modifier les entrées scientifiques. |
| Demande Connector timed out après `30000ms` | Réessayez une demande plus petite. Augmenter seulement le délai de sortie externe de Notebook ne modifie pas la date limite de Connector. |
| L'exécution de Notebook a été programmée après `60000ms` | L'exécution s'est terminée sans résultat. - Réessayer les opérations individuellement; ne pas déduire que chaque service en amont a échoué. |
| page de maintenance de BioMart HTML; PRIDE `Unexpected end of JSON input` | La réponse structurée attendue n'était pas disponible. Réessayez plus tard et gardez le type de réponse/erreur pour un problème. |
| La tâche ZINC n'a pas été achevée à temps | Préserver l'URL de la tâche/du résultat retourné et vérifier cette tâche; à plusieurs reprises, la création de nouveaux emplois ne récupère pas son résultat. |

Pour un rapport, joignez l'opération, entrée limitée, texte d'erreur et timestamp par [Dépannage](../guides/troubleshooting.md). Supprimer les identifiants et les données privées avant de partager.

<span id="empty-partial-and-failed-responses" />

## Rechercher les paramètres d'exploitation {/* #find-operation-parameters */}

Utilisez le [Référence de fonctionnement Connector](../reference/connector-operations.md) pour les champs requis, les valeurs acceptées et les appels exacts. Choisissez une source ici d'abord; utiliser la référence lors de la préparation d'une opération spécifique.

Conservez la constitution du génome, l'organisme, les tissus, les unités et les versions d'adhésion avec les données retournées. Pour les significations et la récupération générales de HTTP, utilisez [Dépannage](../guides/troubleshooting.md). Les enregistrements de bases de données, les prévisions et les résumés générés sont différents types de données probantes; vérifier la source citée avant d'utiliser une demande de recherche.


Référence de mise en œuvre: [ConnecteursPanel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

Source du catalogue: [catalogue.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [registre.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
