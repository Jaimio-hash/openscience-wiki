---
title: "Tabellen und Datensätze"
last_update:
  date: '2026-09-14'
---

import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

import ExampleDownload from '@site/src/components/ExampleDownload';

# Tabellen und Datensätze {/* #tables-and-datasets */}

Verwenden Sie die Vorschau, um die Struktur einer Tabelle zu verstehen, und verwenden Sie dann Python oder R, um die gesamte Datei zu validieren und zu transformieren. Gemeinsame Anzeige- und Download-Steuerelemente gehören zu [Öffnen und Vorschauen von Dateien](../guides/previews.md); Renderer-Limits und -Erweiterungen sind in [Dateiformate](../reference/formats.md) aufgeführt.

<span id="inspect-the-real-sample-qc-table" />

<span id="preview-controls-and-limits" />

Verwenden Sie für eine Tabelle, die in eine Literatur PDF eingebettet ist, [PDF-Extraktion](../guides/previews.md#pdf-extraction), öffnen Sie die exportierte Tabelle erneut und überprüfen Sie ihre Kopfzeilen, Werte und Notizen mit der Quelle.

## Identifizieren Sie, was eine Zeile darstellt {/* #identify-what-one-row-represents */}

<p className="example-label"><strong>Praxisbeispiel</strong> Lesen Sie Beispielbezeichner und Metriken in einer QC-Tabelle</p>

1. Öffnen Sie <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Beispiel-QC-Tabelle</ExampleDownload> aus einem gespeicherten Ergebnis, Dateien oder einem Anhang.
2. Lesen Sie die Spaltennamen und entscheiden Sie, ob Zeilen Proben, Gene oder eine andere Einheit darstellen. In dieser Ausgabe ist jede Zeile ein Sample; In ihrer Quellmatrix ist jede Zeile ein Gen.
3. Suchen Sie die vollständige Kennung Spalte. Halten Sie kurze Plotting-Etiketten, die diesen Identifikatoren zugeordnet sind.
4. Lesen Sie den angezeigten Bereich, bevor Sie die Größe des Datensatzes schätzen. Verwenden Sie eine Volldateiberechnung, wenn die Vorschau begrenzt ist.
5. Vergleichen Sie die Abtastwerte mit dem [Gemeinsames QC-Baseline](../reference/example-data.md#sample-qc-baseline).

![Muster-QC-Tabelle mit vollständigen Kennungen und numerischen Spalten](/img/open-science/capabilities-walkthrough/32-csv-preview.webp)

<ToolOperationGroup>
<summary>QC-Tabelle: Spaltenbedeutungen</summary>

| Spalte | Auslegung | Überprüfen Sie, bevor Sie es verwenden |
| --- | --- | --- |
| compact_sample | Kurzfigurenetikett | Behalten Sie seine Zuordnung zum ursprünglichen Bezeichner |
| original_column_name | Kennung der Originalprobe | Fehlende und doppelte Namen prüfen |
| total_raw_counts | Summe der Stichprobenzählungen | Rohzähleinheiten konservieren; Nennen Sie diesen normalisierten Ausdruck nicht |
| zero_count_genes | Anzahl der Gene mit Nullzählungen | Zusammen mit nachgewiesenen Genen müssen alle Input-Genreihen abgedeckt sein |
| detected_genes_count_gt_0 | Anzahl der Gene mit positiver Zählung | Dies ist eine Anzahl von Genen, nicht Ausdrucksgröße |
| median_count_among_detected_genes | Median über positive Zählungen | Anzugeben ist, dass Nullzählgene ausgeschlossen sind. |

</ToolOperationGroup>

<span id="work-with-the-full-dataset" />

## Überprüfen Sie den vollständigen Datensatz {/* #check-the-complete-dataset */}

Separate Identifikatoren und Metadaten aus Messspalten vor der Auswahl numerischer Operationen. Bewahren Sie Gen-IDs als Identifikatoren auf und halten Sie die Genlänge aus den Berechnungen der Stichprobenzählung heraus. Überprüfen Sie fehlende Werte, doppelte Identifikatoren und zulässige Wertebereiche in der vollständigen Eingabe.

Eine sichtbare Zeilenzahl kann nur die Vorschau beschreiben. Lesen Sie die komplette Datei in [Notebook](../guides/notebook.md), um Dimensionen festzulegen. Der CSV Renderer ist schreibgeschützt; Header-Klicks sind kein Ersatz für eine Sortier- oder Filteroperation.

## Speichern Sie Transformationen als neue Ergebnisse {/* #save-transformations-as-new-results */}

Geben Sie den Join-Schlüssel, die Filterregel, die Richtlinie zum Fehlen von Werten und die erwarteten Ausgabespalten in Ihrer Anforderung an. Fordern Sie eine separate abgeleitete Datei an, damit die ursprüngliche Eingabe verfügbar bleibt. Öffne die Ausgabe erneut, vergleiche ihre Zeilenanzahl und Bezeichner mit der Eingabe und inspiziere den ausgeführten Code, bevor du Änderungen interpretierst.

Notebook-Variablen sind temporäre Kernel-Zustände, bis sie gespeichert werden. Eine sichtbare Variable und eine verwaltete Dateiversion haben unterschiedliche Lebenszyklen; Verwenden Sie [Dateien und Versionen](../guides/files.md), um gespeicherte Ergebnisse zu speichern und zu vergleichen.

## Wählen Sie einen Reader für andere Formate {/* #choose-a-reader-for-other-formats */}

Verwenden Sie für `.xls`/`.xlsx` die in [Vorschau](../guides/previews.md) beschriebenen Office-Vorschau- und Arbeitsblattsteuerelemente. Binäre Container wie `.h5ad` oder `.h5` erfordern eine kompatible Analysebibliothek. Eine tab-getrennte `.txt`-Matrix kann sich als Text öffnen. Das Umbenennen einer Erweiterung konvertiert keine Daten oder macht ein nicht unterstütztes Format lesbar.
