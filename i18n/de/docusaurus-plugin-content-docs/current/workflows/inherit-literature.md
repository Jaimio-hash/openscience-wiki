---
title: "Übernehmen Sie die Literatursammlung eines Forschers"
last_update:
  date: '2026-09-16'
---

# Übernehmen Sie die Literatursammlung eines Forschers {/* #take-over-a-researchers-literature-collection */}

Dieser Workflow beginnt mit einer vorhandenen Bibliographie. Wenn Sie mit einem Thema beginnen, verwenden Sie zuerst das [Journal-Club-Workflow zum Finden und Überprüfen von Kandidatenpapieren](journal-club.md).

<p className="example-label"><strong>Praxisbeispiel</strong> Perowskit-Solarzellen-Stabilitätsübergabe</p>

Wenn Ihnen ein Kollege eine Bibliographie überreicht, stellen Sie zunächst fest, was darin enthalten ist und was noch gelesen werden muss. Dieses Beispiel importiert 20 veröffentlichte Referenzen zur Perowskit-Solarzellenstabilität, gruppiert sie in Library und erstellt ein Übergabeinventar mit einem Leseplan.

**Lieferbar:** eine projektgebundene Sammlung, eine 20-Zeilen-CSV mit Quellkennungen und nächsten Aktionen sowie einen englischen Leseplan. Das gelieferte Beispiel enthält Zitieraufzeichnungen ohne PDFs; Die Themenlabels sind vorläufig.

## Bereiten Sie die Sammlung {/* #prepare-the-collection */}

Laden Sie das <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20-Referenz-RIS-Datei</a> herunter. Seine Titel, Autoren, Jahre, Zeitschriften und DOIs stammen von Crossref Records. Dies ist eine Lehrauswahl, keine systematische Suche. Verwenden Sie für Ihre eigene Übergabe den Zitatexport Ihres Kollegen und behalten Sie die Original-PDFs neben sich.

1. Erstellen Sie ein Projekt mit [Projekte und Quellordner](../guides/projects.md) und öffnen Sie dann **Library**.
2. Erstellen Sie eine Sammlung mit dem Namen **Perowskit-Solarzellenstabilität**.
3. Wählen Sie **Add → Import references**, wählen Sie die RIS-Datei und überprüfen Sie die Importvorschau. Überprüfen Sie die Zielabholung und die doppelte Handhabung, bevor Sie dies bestätigen.
4. Überprüfen Sie das Importergebnis. In diesem Beispiel wurden **20**-Datensätze erstellt, wobei **0** wiederverwendet, übersprungen oder fehlgeschlagen wurde.
5. Öffnen Sie die Sammlung, wählen Sie die Datensätze aus und verwenden Sie **Add to project**, um sie mit Ihrem Projekt zu verknüpfen.

![Die abgeschlossenen Importberichte 20 erstellten Referenzen](/img/open-science/research-workflows/perovskite-import-complete.webp)

Wenn Ihr Export Duplikate oder unvollständige Identifikatoren aufweist, lösen Sie diese Datensätze auf, bevor Sie ein endgültiges Inventar annehmen. Das Importieren von Referenzen fügt ihren vollständigen Text nicht bei. Verwenden Sie das **Add PDF**-Steuerelement der Referenz für PDFs, die Sie bereits haben, und vergleichen Sie dann den PDF-Titel und den DOI mit dem Datensatz. Siehe [Bibliothek und Zitate](../guides/library.md).

Öffnen Sie die Sammlung erneut und überprüfen Sie die **20 Referenzen**-Zählung der Fußzeile. Überprüfen Sie die **Anhang**-Spalte, bevor Sie eine Synthese anfordern. In diesem Beispiel ist es durchgehend leer, so dass der nächste Schritt ein bibliographisches Inventar anfordert, anstatt Ergebnisse aus dem Volltext.

![Die importierte Zwanzig-Referenz-Kollektion mit ihrem tatsächlichen Anhängezustand](/img/open-science/research-workflows/perovskite-collection.webp)

## Bitten Sie um eine verwendbare Übergabe {/* #ask-for-a-usable-handover */}

Öffnen Sie ein Gespräch im Projekt und wählen Sie ein Arbeitsmodell aus. Nennen Sie die Sammlung explizit:

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

Für eine größere Sammlung fragen Sie nach einem Inventar, bevor Sie eine Synthese anfordern. Fehlende PDFs, mehrdeutige Aufzeichnungen und ungelesene Papiere sollten in der Übergabe sichtbar bleiben.

## Überprüfen Sie die gespeicherten Dateien {/* #check-the-saved-files */}

Nach Abschluss der Antwort öffnen Sie **perovskite-handover.csv** aus den generierten Dateien. In diesem Beispiel hat die gespeicherte Tabelle **20 Zeilen und 6 Spalten**. Alle 20 DOIs entsprechen dem importierten Satz; kein DOI oder Publikationsjahr fehlt. Jeder Volltexteintrag sagt korrekt, dass kein PDF angehängt ist.

![Das gespeicherte 20-Zeilen-Perowskit-Übergabeinventar in Open-Science](/img/open-science/research-workflows/perovskite-handover-table.webp)

Öffnen Sie **perovskite-handover.md** und überprüfen Sie, ob die Lesesequenz für den nächsten Forscher nützlich ist. Es schlägt zunächst umfassende Stabilitätspapiere vor, gefolgt von Mechanismen, Materialinterventionen und analytischen Ansätzen. Dies sind Lesevorschläge, die auf der Sammlung basieren, nicht verifizierte Schlussfolgerungen über die Experimente.

![Der gespeicherte Leseplan hält die Quellenverfügbarkeit und die nächsten Aktionen sichtbar](/img/open-science/research-workflows/perovskite-reading-plan.webp)

Verwenden Sie die Erweiterungsschaltfläche der Dateivorschau, um den Plan zu lesen, und dann **Download**, um ihn neben dem CSV zu behalten. Überprüfen Sie, ob jede vorgeschlagene nächste Aktion aus dem gelieferten Material machbar ist. Eine vorgeschlagene Lesesequenz ist kein Beweis dafür, dass die Papiere gelesen wurden.

Bevor Sie die Sammlung zum Vergleich der Stabilitätsergebnisse verwenden, erhalten Sie die relevanten Volltexte und notieren Sie Alterungsprotokoll, Temperatur, Beleuchtung, Atmosphäre und Endpunkt. Überprüfen Sie auch Publisher-Updates: Der [Big-Data-Stabilitätspapier](https://www.nature.com/articles/s41467-022-35400-4) verfügt über ein verknüpftes Addendum, das in eine Volltextbewertung gehört.

Laden Sie die gespeicherten <a href="/docs/examples/research-workflows/perovskite-handover.csv" download>Übergabe CSV</a> und <a href="/docs/examples/research-workflows/perovskite-handover.md" download>Leseplan</a> des Beispiels herunter, um deren Struktur mit Ihrer eigenen Ausgabe zu vergleichen.
