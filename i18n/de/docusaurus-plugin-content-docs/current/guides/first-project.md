---
title: "Ihr erstes Projekt und Ergebnis"
last_update:
  date: '2026-09-10'
---

# Ihr erstes Projekt und Ergebnis {/* #your-first-project-and-result */}

<p className="example-label"><strong>Praxisbeispiel</strong> Lesen Sie eine Sample-QC-Tabelle und speichern Sie eine Zusammenfassung</p>

Beginnen Sie mit dem Öffnen eines kleinen Tisches und dem Speichern einer Zusammenfassung. Diese Route verwendet die zwölfreihige Sample-QC-Tabelle, die aus einem echten öffentlichen Genexpressions-Datensatz berechnet wurde. Sie müssen die vollständige Matrixanalyse nicht erneut ausführen oder Plot-Pakete installieren.

<span id="prepare-the-input-and-runtime" />

## Bereiten Sie ein Modell und die Beispieldatei vor {/* #prepare-a-model-and-the-example-file */}

1. Füllen Sie [Ersteinrichtung](onboarding.md) aus und bestätigen Sie Ihren [Modellverbindung](providers.md).
2. Laden Sie das **Probe QC CSV** von [Beispieldaten](../reference/example-data.md#saved-example-outputs) herunter.
3. Halten Sie die heruntergeladene Datei unverändert. Dies ist eine abgeleitete Zusammenfassungstabelle; die Quellmatrix und die Berechnungsmethode werden auf derselben Beispielseite dokumentiert.

Das Öffnen und Zusammenfassen dieser Tabelle erfordert einen Wirkstoff und ein Modell. Python oder R wird nur benötigt, wenn Sie Metriken neu berechnen möchten. Der [Vollständiger Workflow in Datenqualität](../workflows/data-quality.md) deckt diese Route ab.

<span id="create-the-research-project" />

## Erstellen Sie ein Projekt {/* #create-a-project */}

Wählen Sie von zu Hause aus **New project**. Geben Sie `Gene-count QC review` als **Name** und `Review the public sample-QC table and record its interpretation.` als **Description** ein. Geben Sie in **Agent Context** `Preserve the source file. Explain descriptive counts without inferring differential expression.` ein und wählen Sie dann **Create project** aus.

Bestätigen Sie den Projektnamen oberhalb der Sitzungsliste. Dies sind Beispielnamen: Verwenden Sie einen Namen, der Ihnen hilft, später Ihre eigene Untersuchung zu finden. Siehe [Projekte](projects.md), um die Felder zu bearbeiten oder einen Quellordner zu konfigurieren.

<span id="attach-and-submit-a-bounded-request" />

## Befestigen und inspizieren Sie die Tabelle {/* #attach-and-inspect-the-table */}

1. Starten Sie eine neue Konversation, wählen Sie **+ → Attach files** und wählen Sie das heruntergeladene CSV aus.
2. Warten Sie auf den Attachment-Chip und öffnen Sie dann seine Vorschau.
3. Bestätigen Sie zwölf Musterzeilen. Die vollständige Probenkennung und die Spalten sind auf Gesamtzählungen, Nullzählungsgene, nachgewiesene Gene und den positiven Median zu untersuchen.
4. Schließen Sie die Vorschau, um zum Komponisten zurückzukehren. Bewahren Sie die Anlage in der Anforderung auf.

![Muster-QC-Tabelle in der Anwendung geöffnet](/img/open-science/guides-walkthrough/42-rnaseq-table.png)

Wenn die Vorschau leer ist oder die Spalten nicht voneinander getrennt sind, bestätigen Sie, dass Sie die CSV anstelle einer HTML-Download-Seite angehängt haben. Siehe [Tabellen](../tools/tables.md) für Trennzeichen und Vorschau-Steuerelemente.

<span id="open-and-accept-the-outputs" />

## Bitten Sie um eine gespeicherte Zusammenfassung {/* #ask-for-a-saved-summary */}

Überprüfen Sie das ausgewählte Modell und senden Sie:

```text
Read the attached sample-QC CSV. Save a short Markdown report named
sample-qc-overview.md with three sections: Table contents, Metric meanings,
and Next checks. Identify the sample-identifier column and explain each
QC metric using the attached values. Preserve the original file. Do not
recalculate the gene matrix, install packages, or infer differential
expression. State that this is a derived descriptive summary. If the file
cannot be read, report the error instead of guessing its contents.
After saving, provide the report link.
```

Wenn eine Berechtigung angefordert wird, überprüfen Sie, ob sie die angehängte Eingabe und die angeforderte Ausgabe betrifft. Genehmigen Sie den beabsichtigten Betrieb oder verweigern Sie eine nicht zusammenhängende Anfrage. Eine Warteberechtigung ist eine Pause, die Ihre Antwort benötigt; Ein fehlgeschlagener Tool Call benötigt eine Fehlerbehandlung. [Komponist](composer.md) erklärt diese Zustände.

<span id="continue-or-recover" />

## Überprüfen und Behalten des Ergebnisses {/* #check-and-keep-the-result */}

1. Wählen Sie **sample-qc-overview.md** in der Antwort oder im **Files**-Panel des Projekts aus.
2. Bestätigen Sie die drei angeforderten Abschnitte und ob die Spaltenbeschreibungen mit dem CSV übereinstimmen. Insbesondere bedeutet nachgewiesene Gene eine Zählung größer als Null; Der Median mit positiver Zählung schließt Nullzählungen aus.
3. Bestätigen Sie, dass der Bericht eine zusammenfassende Tabelle beschreibt und keinen neuen biologischen Befund beansprucht.
4. Laden Sie den Bericht herunter, wenn Sie eine externe Kopie benötigen. Benennen und pinnen Sie das Gespräch für den Rückzugriff.

Die Aufgabe ist abgeschlossen, wenn der gespeicherte Bericht geöffnet wird und mit der beigefügten Tabelle übereinstimmt. Wenn die Antwort Text, aber keine Datei enthält, bitten Sie den Agenten, diesen Text als benannte Markdown-Datei zu speichern, und öffnen Sie ihn dann. Für einen Lese- oder Speicherfehler behalten Sie die Fehlermeldung bei und folgen Sie [Fehlerbehebung](troubleshooting.md).

## Weiter mit den Originaldaten {/* #continue-with-the-original-data */}

Um die Tabelle zu reproduzieren und einen Plot zu erstellen, folgen Sie [Verwandeln Sie Rohdaten in eine reproduzierbare Analyse](../workflows/data-quality.md). Dieser Workflow fügt die ursprüngliche Matrix, Python-Abhängigkeiten, ein genaues Ausgabeschema und numerische Überprüfungen hinzu. Verwenden Sie [Notebook](notebook.md), um den Code zu überprüfen und Beweise zu hinterlegen.
