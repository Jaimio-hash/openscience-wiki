---
title: "Beispieldaten und erwartete Ergebnisse"
last_update:
  date: '2026-09-10'
---

# Beispieldaten und erwartete Ergebnisse {/* #example-data-and-expected-results */}

Verwenden Sie diese öffentlichen Dateien, um die Dokumentation Beispiele zu reproduzieren. Die Quellenbeschreibung, Original-Datei-Prüfsumme und Sample-QC-Baseline live hier; einzelne Feature-Guides verlinken mit ihnen, anstatt den Datensatzverlauf zu wiederholen.

## Source-and-Input-Vertrag {/* #source-and-input-contract */}

Der [GEO-Serienrekord](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450) liefert das Original `GSE60450_Lactation-GenewiseCounts.txt.gz`. Der [veröffentlichter RNA-seq Analyse-Workflow](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/) bietet methodischen Kontext für diesen Datensatz. Unser Beispiel stoppt bei der deskriptiven Voranalyse QC; Es reproduziert nicht die vollständige Analyse dieses Papiers.

| Eigentum | Nachgeprüfter Wert |
| --- | --- |
| Dekomprimierte Datei | GSE60450_Lactation-GenewiseCounts.txt |
| Größe | 1,340,161 Bytes |
| Genreihen | 27,179 |
| Säulen | Spalten für EntrezGeneID, Länge und 12 |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| Doppelte Gen-IDs / fehlende Zähleinträge / ungültige Zählungen | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>Laden Sie die unveränderte dekomprimierte Eingabe herunter</a> oder <a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>die ursprüngliche komprimierte Datei</a>. Das Metadaten-Tool Omics Archives der App kann zusätzliche URLs zurückgeben; Zähltabellen werden nicht automatisch heruntergeladen. Diese Quelle wurde separat heruntergeladen und über Attach-Dateien hochgeladen.



## Stichproben-QC-Baseline {/* #sample-qc-baseline */}

| Probe | Rohzähler insgesamt | Nullzählgene | Nachweis von Genen | Median unter den ermittelten Werten |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

Die Compact Labels bilden die vollständigen Sample Identifier im CSV ab. Die vier numerischen Metriken wurden unabhängig für diesen Input überprüft. Dies sind deskriptive Rohzählprüfungen; sie validieren keinen nachgelagerten statistischen Entwurf.

## Gespeicherte Beispielausgaben {/* #saved-example-outputs */}

| Herunterladen | Inhalt |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>QC CSV</a> | Zwölf Zeilen, exaktes Spalten-Mapping und vier Metriken |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>Abbildung</a> | Gesamtanzahl der Rohstichproben |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>Methodenbericht</a> | Methoden, Quellenintegrität und unabhängige metrische Überprüfung |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | Unveränderter nativer `.ipynb` Ausfuhren |
## Wählen Sie ein anderes Beispiel {/* #choose-another-example */}

| Aufgabe | Input oder Referenz | Anweisungen |
| --- | --- | --- |
| Erstes gespeichertes Ergebnis | Der zwölfreihige QC CSV oben | [Erstes Projekt](../guides/first-project.md) |
| Berechnen Sie eine vollständige Matrix | Ursprüngliche Genzählmatrix oben | [Workflow in Datenqualität](../workflows/data-quality.md) |
| Organisieren Sie eine Literatursammlung | <a href="/docs/examples/prisma/core-reading-list.md" download>Geprüfte PRISMA-Leseliste</a> mit Publisher-Links | [Kernleseliste](../workflows/core-reading-list.md) |
| Versuchen Sie eine kleine inverse-folding Berechnung | <a href="/docs/examples/capabilities/1UBQ.pdb" download>Ubiquitin 1UBQ</a> | [Wissenschaftliche Instrumente](../tools/scientific.md) |

Die Methoden melden und Notebook behalten die Pfade und den Beweisumfang der aufgezeichneten Berechnung bei. Bereiten Sie Ihren eigenen Eingabeort und Ihre Abhängigkeiten vor einer externen Wiederholung vor.
