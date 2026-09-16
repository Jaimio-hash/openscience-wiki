---
title: "Wissenschaftliche Datenbanken"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# Wissenschaftliche Datenbanken {/* #scientific-databases */}

Die App bündelt **23 Datenquelle Konnektoren** sowie ein separates Offline-Molekül Connector. Das vollständige Register verfügt über **239 Werkzeugoperationen**, einschließlich der beiden Operationen von Molecule; Der Datenquellenkatalog unten deckt 237 ab. Aktivieren Sie die entsprechende Connector in den Einstellungen und stellen Sie dann eine begrenzte Frage mit dem richtigen Bezeichnertyp.

<span id="actual-local-queries" />

## Datenquellenkatalog {/* #data-source-catalog */}

Wählen Sie nach Identifikator und Forschungsfrage. Die Quellenabdeckung unterscheidet sich; die Bezugsnummer des Vorhabens für genaue Felder konsultieren.

| Konnektor | Quellen | Vorgänge | Verwenden Sie es für  |
| --- | --- | --- | ---  |
| Chemie · `chemistry` | PubChem, ChEBI, Rhea, BindingDB | 12 | Kleinmolekülchemie über PubChem, ChEBI, Rhea und BindingDB.  |
| Literaturgraph · `literature` | OpenAlex, arXiv, Crossref, DataCite | 13 | Papiere, Autoren, Zitate, DOI-Updates und Datensatz / Software-Datensätze. |
| PubMed · `pubmed` | PubMed, PMC, Europe PMC | 7 | Biomedizinische Literatur über NCBI E-utilities, den PMC ID Converter und Europe PMC — Suche, Metadaten, verwandte Artikel, Zitat-Lookup, ID-Konvertierung, Volltext und Copyright.  |
| Gene & Ontologien · `genes` | MyGene, UniProt, OLS, QuickGO, Reactome | 7 | Gen/Protein-Identität und Ontologie-Begriffe — mygene.info, UniProt, OLS4-Ontologien, GO-Annotationen, Reactome Pathways.  |
| Genome · `genomes` | Ensembl, UCSC | 11 | Genom-Annotation, Varianten, Homologie, Sequenz und Browser-Tracks — Ensembl REST und der UCSC Genome Browser.  |
| Varianten · `variants` | gnomAD, ClinVar, dbSNP | 15 | Humangenetische Varianten — gnomAD-Populationshäufigkeit/-einschränkung, ClinVar-Datensätze/Suche (direkt NCBI), dbSNP, strukturelle und mitochondriale Varianten.  |
| Klinische Studien · `clinical-trials` | ClinicalTrials.gov | 6 | Klinische Studien von ClinicalTrials.gov - Suche, Details, Sponsoren, Ermittler, Endpunkte und Förderfähigkeit.  |
| Klinische Genomik `clinical-genomics` | ClinGen, CIViC, Offene Ziele | 20 | Klinische Genomik-Wissensdatenbanken: ClinGen-Kurationen, klinische CIViC-Evidenz und die Open Targets Platform.  |
| Strukturen und Interaktionen · `structures` | PDB, AlphaFold, EMDB, Complex Portal, IntAct | 16 | Strukturen und molekulare Wechselwirkungen — PDB-Strukturen, AlphaFold-Vorhersagen, EMDB-Kryo-EM-Einträge, komplexe Portalkomplexe, IntAct-Interaktionsnetzwerke.  |
| ChEMBL `chembl` | ChEMBL | 6 | Bioaktive Verbindungen, Medikamente, Targets, Bioaktivität und Mechanismen über das ChEMBL REST API.  |
| bioRxiv · `biorxiv` | bioRxiv, medRxiv, ROR | 7 | bioRxiv/medRxiv Preprints — Suche nach Datum/Kategorie, Metadaten nach DOI, Links zu Zeitschriftenveröffentlichungen, Funder-Listen und Plattformstatistiken.  |
| Drug Regulatory · `drug-regulatory` | openFDA | 7 | Drugs@FDA-Anwendungen, Etiketten und Corpus-Statistiken über openFDA.  |
| Humangenetik · `human-genetics` | GWAS Katalog, eQTL Katalog, PheWeb | 14 | Humangenetische Assoziationsnachweise — GWAS-Katalog, eQTL-Katalog und PheWeb-PheWAS-Portale (FinnGen, BioBank Japan).  |
| Ausdruck · `expression` | GTEX | 12 | Menschliche Gewebeexpression und eQTLs über das GTEx Portal.  |
| Proteinannotation · `protein-annotation` | InterPro, Pfam, Human Protein Atlas, STRING | 13 | Proteindomänenarchitektur, Familien-/Clan-Mitgliedschaft, Expressionsatlas und Interaktionsnetzwerke über InterPro/Pfam, den Human Protein Atlas und STRING.  |
| Krebsmodelle · `cancer-models` | cBioPortal | 6 | Krebsgenomik-Studie Aufzeichnungen über die cBioPortal REST API.  |
| RNA · `rna` | Rfam | 9 | Nicht-kodierende RNA-Familiendaten (Metadaten, Ausrichtungen, Modelle, Strukturen) über Rfam.  |
| Omics-Archive `omics-archives` | ArrayExpress, GEO, MetaboLights, MGnify, PRIDE | 17 | Omics-Datenarchive — Ausdruck (ArrayExpress, GEO), Metabolomik (MetaboLights), Metagenomik (MGnify) und Proteomik (PRIDE).  |
| CellGuide · `cellguide` | CELLxGEN | 5 | Zelltypidentität, Markergene, Quelldatensätze und Gewebe über CELLxGENE CellGuide.  |
| Verordnung · `regulation` | ENCODE, JASPAR, UniBind | 16 | Funktionale Genomik der Genregulation — ENCODE-Experimente/Bioproben/Dateien, JASPAR-TF-Bindungsprofile und UniBind-ChIP-seq-TFBS.  |
| Forschungsressourcen · `research-resources` | Grants.gov, Antikörper-Register | 5 | Funding-Opportunity-Suche (Grants.gov) und Antikörperkatalog-Lookups (Antibody Registry).  |
| BioMart · `biomart` | Ensembl BioMart | 8 | Ensembl BioMart Attributabfragen und Identifier-Übersetzung.  |
| ZINK · `zinc` | ZINK | 5 | ZINC22-Käuflicher chemischer Raum (CartBlanche22) — Stoffsuche nach ZINC-ID, SMILES-Suche mit exakter Ähnlichkeit, Lieferantencode-Auflösung, Stichprobennahme, 3D-Strukturstellen für das Andocken.  |

## Einen Datensatz abrufen und seine Identität überprüfen {/* #retrieve-a-record-and-verify-its-identity */}

1. Öffnen Sie **Settings → Connectors**, suchen Sie die gewünschte Quelle und bestätigen Sie die Verfügbarkeit für den beabsichtigten Agenten.
2. Öffne seine Details. Lesen Sie **Tools**, Eingaben, Beispiel und Anforderungen von Drittanbietern.
3. Geben Sie ein explizites Abfrage-/Zugriffs- und Ergebnislimit an. Behalten Sie die genaue Abfrage bei der Erstellung einer Literatursammlung oder einer Beweistabelle bei.
4. Überprüfen Sie zurückgegebene IDs und Quellfelder. Ein leeres Ergebnis, ein verkürzter Batch und ein Fehler sind unterschiedliche Ergebnisse.
5. Speichern Sie die benötigten Datensätze bewusst in der Projekt-/Bibliothek. Eine Suchantwort bedeutet nicht automatisch, dass alle Papiere in die Literaturbibliothek aufgenommen oder Volltexte heruntergeladen wurden.

### Beginnen Sie mit einem bekannten Identifier {/* #start-with-one-known-identifier */}

<p className="example-label"><strong>Praxisbeispiel</strong> Lösen Sie den menschlichen TP53-Gen-Identifikator</p>

**Gene & Ontologien** aktivieren und fragen: **Verwenden Sie query_genes, um TP53 mit scopes="symbol", species="human" und fields="symbol,name,entrezgene" aufzulösen. Geben Sie die Eingabeabfrage und alle nicht übereinstimmenden Datensätze zurück.** In diesem Beispiel identifiziert der menschliche TP53-Datensatz Entrez Gene **7157** und den Namen **Tumorprotein p53**. Überprüfen Sie die `query` und `symbol` des Datensatzes, bevor Sie die abgebildete ID verwenden. Ein Symbol kann mehrere Übereinstimmungen zurückgeben, also behalten Sie alle Ergebnisse, bis Sie den beabsichtigten Organismus bestätigt und aufgezeichnet haben. [Genaue Felder](../reference/connector-operations.md#query_genes).

## Wählen Sie eine Abfrage und prüfen Sie das Ergebnis {/* #choose-a-query-and-inspect-the-result */}

<p className="example-label"><strong>Beispiel</strong> Gebundene Datenbankanfragen und Antworten</p>

In der Tabelle sind diese Beispielantworten aufgeführt; Live-Abfrage-Ergebnisse können abweichen.

| Connector / Werkzeug | Eingabe | Beobachtetes Ergebnis |
| --- | --- | --- |
| Omics Archives / geo_get_series | `accessions: ["GSE60450"]` | Metadaten für Serien/Stichproben mit 12-Stichproben; Metadaten-Retrieval hat die hochgeladenen Zählungen nicht neu berechnet. |
| Gene / query_genes | TP53; Symbolumfang; Mensch | Entrez Gene ID 7157, Symbol TP53, Name Tumorprotein p53. |
| PubMed / search_articles | GSE60450, maximal 2 | PMIDs 38059347 und 37306301. Dies sind Abfrageübereinstimmungen, nicht automatisch die ursprüngliche Veröffentlichung des Datensatzes. |
| Chemie / pubchem_search_compounds | Aspirin, höchstens 1 CID | CID 2244, Formel C9H8O4 und Molekulargewicht 180.16. |
| Literatur / openalex_search_works | `CRISPR base editing`; aus 2020; Open Access; maximal 2 | Zwei Arbeitsaufzeichnungen mit OpenAlex IDs, Quellfeldern und Vollständigkeitsflags. |

### Verbinden Sie OpenAlex und folgen Sie den Zitierlinks {/* #connect-openalex-and-follow-citation-links */}

1. Öffnen Sie **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**.
2. Geben Sie Ihren API-Schlüssel ein, wählen Sie **Validate**, dann **Save**, nachdem die Validierung erfolgreich ist.
3. Suchen Sie nach einem Thema mit einem kleinen `max_records` Limit. Überprüfen Sie `n_records_returned` und `records_truncated`, bevor Sie das Ergebnis als vollständig beschreiben.
4. Verwenden Sie eine zurückgegebene Arbeits-ID mit `openalex_get_work`. Verwenden Sie `openalex_citations` für Papiere, die diese Arbeit zitieren, und `openalex_references` für Werke, die sie zitiert. Das sind entgegengesetzte Richtungen.
5. Für Autorensuchen bestätigen Sie die Institution und ORCID, bevor Sie ein Autorenprofil abrufen. Verwenden Sie eine Quell-ID oder ISSN, um einen Journalnamen zu disambiguieren.

Siehe [Betriebsparameter von OpenAlex](../reference/connector-operations.md#openalex_search_works) für Filter und zurückgegebene Felder.

### Schauen Sie sich ein DOI und die damit verbundenen Forschungsaufzeichnungen {/* #look-up-a-doi-and-its-related-research-records */}

**Literaturgraphik** aktivieren. Verwenden Sie `crossref_get_work` für Publisher-Metadaten und `crossref_get_updates` für hinterlegte Korrektur-/Retraktionsbeziehungen. Verwenden Sie `datacite_search_records`, um Datensatz- / Software-DOIs zu finden, und dann `datacite_get_record`, um einen ausgewählten Datensatz zu inspizieren. Diese vier öffentlichen Methoden erfordern keinen OpenAlex-Schlüssel. Überprüfen Sie die DOI-Identität, die Beziehungsrichtung und die Wiederverwendung von Begriffen, bevor Sie eine Ressource herunterladen oder zitieren. Genaue Felder befinden sich im [Betriebsnummer](../reference/connector-operations.md#family-2).

Die Rfam-Sequenzsuche verwendet nun den offiziellen Batch-Endpunkt. Wenn eine ältere Installation den ausgedienten Endpunktfehler zurückgibt, aktualisieren Sie die App und wiederholen Sie den beabsichtigten Vorgang. Ein ausstehender Job ist keine abgeschlossene Suche ohne Treffer.

## Behandeln Sie einen zurückgegebenen Datensatz, ein leeres Match oder einen Fehler {/* #handle-a-returned-record-empty-match-or-error */}

Überprüfen Sie den zurückgegebenen Status, bevor Sie ein Ergebnis verwenden. Verwenden Sie [Betriebsnummer](../reference/connector-operations.md), um Felder und Vollständigkeitsflags zu interpretieren.

| Beobachtetes Ergebnis | Was als nächstes zu tun ist |
| --- | --- |
| `found: false`, Nulldatensätze, leere Ermittler oder Lieferantenübereinstimmungen | Prüfen Sie Identifikator, Organismus, Abfrageumfang und Filter. Bewahren Sie das leere Ergebnis; Legen Sie ihn nicht als abgerufenen Datensatz vor. |
| `credential_required` für OpenAlex | Öffnen Sie das angeforderte Anmeldeformular und binden Sie Ihren eigenen Schlüssel, bevor Sie es erneut versuchen. |
| `contact_email_required` für direkte NCBI-Variantenabfragen | Öffnen **Settings → Connectors → Manage credentials → Literature access**, geben Sie **Contact email** und wählen **Save**. Wiederholen Sie die fehlgeschlagene Abfrage. Ein NCBI API-Schlüssel ist optional. Überprüfen Sie zurückgegebene Identifikatoren, Übereinstimmungszahlen und Verkürzungskennzeichen; ein leeres Ergebnis unterscheidet sich von einem Verbindungsfehler. |
| HTTP `410` von eQTL | Bewahren Sie die Quell-URL, den Betrieb und die Antwort auf und überprüfen Sie die Verfügbarkeit des Dienstes, bevor Sie wissenschaftliche Eingaben ändern. |
| Connector-Anfrage nach Ablauf der Zeit `30000ms` | Wiederholen Sie eine kleinere Anfrage. Eine Erhöhung nur des äußeren Notebook-Timeouts ändert nicht die eigene Frist des Connector. |
| Notebook-Ausführung nach Ablauf der Zeit `60000ms` | Die Ausführung endete ohne Ergebnis. Einzelne Wiederholvorgänge; folgern nicht, dass jeder vorgelagerte Dienst fehlgeschlagen ist. |
| BioMart HTML Wartungsseite; PRINZ `Unexpected end of JSON input` | Die erwartete strukturierte Antwort war nicht verfügbar. Versuchen Sie es später und behalten Sie den Antworttyp / Fehler für ein Problem bei. |
| ZINC-Aufgabe nicht rechtzeitig abgeschlossen | Bewahren Sie die zurückgegebene Task / Ergebnis-URL und überprüfen Sie diesen Job; Wiederholtes Starten neuer Jobs gewinnt sein Ergebnis nicht zurück. |

Fügen Sie für einen Bericht die Operation, die begrenzte Eingabe, den Fehlertext und den Zeitstempel über [Fehlerbehebung](../guides/troubleshooting.md) hinzu. Entfernen Sie Anmeldeinformationen und private Daten vor dem Teilen.

<span id="empty-partial-and-failed-responses" />

## Suche nach Betriebsparametern {/* #find-operation-parameters */}

Verwenden Sie den [Connector Betriebsnummer](../reference/connector-operations.md) für erforderliche Felder, akzeptierte Werte und genaue Aufrufe. Wählen Sie hier zuerst eine Quelle; die Referenz bei der Vorbereitung eines bestimmten Vorgangs verwenden.

Halten Sie Genomaufbau, Organismus, Gewebe, Einheiten und Beitrittsversionen mit zurückgegebenen Daten. Für allgemeine HTTP-Bedeutungen und Wiederherstellung verwenden Sie [Fehlerbehebung](../guides/troubleshooting.md). Datenbankeinträge, Vorhersagen und generierte Zusammenfassungen sind unterschiedliche Arten von Beweisen; Überprüfen Sie die zitierte Quelle, bevor Sie einen Forschungsanspruch verwenden.


Bezugsnummer der Durchführung: [SteckverbinderPanel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

Katalogquelle: [catalog.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [registry.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
