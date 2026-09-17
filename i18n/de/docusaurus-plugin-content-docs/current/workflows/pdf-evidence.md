---
title: "Überprüfen Sie die Behauptung eines Papiers gegen seine Zahlen und Ergänzung"
last_update:
  date: '2026-09-16'
---

# Überprüfen Sie die Behauptung eines Papiers gegen seine Zahlen und Ergänzung {/* #check-a-papers-claim-against-its-figures-and-supplement */}

<p className="example-label"><strong>Praxisbeispiel</strong> Was bedeutet 98.9% Katalysatoreffizienz?</p>

Eine Überschrift ist nur dann nützlich, wenn ihre metrischen und experimentellen Bedingungen klar sind. Dieser Workflow nimmt ein Katalysatorpapier und seine Ergänzung, lokalisiert die Beweise für einen Anspruch und speichert einen kurzen Bericht, der das gemeldete Ergebnis von breiteren Interpretationen trennt.

**Lieferbar:** eine englische Claim/Evidence/Conditions/Limits-Tabelle mit PDF-Seiten- und Abbildungsreferenzen. Dies ist eine Quellenüberprüfung, keine unabhängige experimentelle Replikation.

## Bereiten Sie die Originalmaterialien vor {/* #prepare-the-original-materials */}

Verwenden Sie Yang et al.'s [*Ein universelles Liganden-vermitteltes Verfahren zur großtechnischen Synthese von Übergangsmetall-Einatomkatalysatoren*](https://www.nature.com/articles/s41467-019-12510-0), DOI `10.1038/s41467-019-12510-0`.

1. Laden Sie den Artikel PDF von der Verlagsseite und das **Ergänzende Informationen** PDF unter **Ergänzende Angaben** herunter. Halten Sie sie als separate Dateien.
2. Öffnen Sie in einem Open-Science-Projekt ein Gespräch und wählen Sie ein Arbeitsmodell aus.
3. Wählen Sie **+ → Attach files** und fügen Sie beide PDFs an. Öffnen Sie den Haupt-PDF, um seinen Titel und DOI zu überprüfen. Die Beispieldateien enthalten 9 Hauptartikelseiten und 52 Ergänzungsseiten.

Prüfen Sie, ob **beide Dateinamen** über der gesendeten Anforderung erscheint. Ein Klick auf einen Dateinamen öffnet seine Vorschau; Mit dem Wechsel zwischen den beiden können Sie überprüfen, zu welchem Dokument eine zitierte Seite gehört.

![Sowohl der Artikel als auch die Ergänzung sind der tatsächlichen Evidenz-Check-Anfrage beigefügt](/img/open-science/research-workflows/catalyst-two-inputs.webp)

## Stellen Sie eine spezifische Beweisfrage {/* #ask-a-specific-evidence-question */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

Genehmigen Sie die beabsichtigten Leseanfragen, wenn Sie dazu aufgefordert werden. Wenn der Leser eine ungültige Seite oder unlesbares Material meldet, verfeinern Sie die Anfrage oder öffnen Sie die entsprechende PDF-Seite selbst. Behandeln Sie ein erfolgloses Abrufen nicht als Beweis dafür, dass eine Figur fehlt.

## Öffnen Sie die zitierten Beweise {/* #open-the-cited-evidence */}

Verwenden Sie in der PDF-Vorschau das Seitensteuerelement, um **Seite 6** zu öffnen, das **Abbildung 6** und die relevanten Ergebnisse enthält. Vergleichen Sie die Bildunterschrift mit dem Text. Öffnen Sie die Ergänzungsseiten **47–49** für die Abbildungen **51–53**.

![Abbildung 6 des Originalartikels und experimentelle Bedingungen in Open-Science](/img/open-science/research-workflows/catalyst-figure6-source.webp)

Die Quelle berichtet **98.9% Faradaic-Effizienz zu CO bei -1.2 V gegenüber RHE** für Ni-SAC-2.5. Das Langlebigkeitsexperiment verwendet **0.8 V für 20 Stunden**. Diese Bedingungen sollten getrennt bleiben: Letzteres stellt keine 20-Stunden-Dauerhaltbarkeit bei Spitzenselektivitätspotenzial fest. Faradaic-Effizienz beschreibt die einem Produkt zugewiesene Ladung; Es ist nicht dasselbe wie Energieeffizienz oder der Anteil des umgewandelten ankommenden CO2.

Die Ergänzung liefert die Wasserstoff-Produkt, NMR und Scale-up-Zahlen. Eine lesbare Beschriftung liefert nicht notwendigerweise jeden numerischen Punkt in einer aufgetragenen Spur. Behalten Sie diese Unterscheidung im Bericht bei.

Um zu einer Seite zu springen, erweitern Sie die PDF-Vorschau, klicken Sie auf den Seitenzähler, geben Sie die vollständige Nummer ein und drücken Sie **Enter**. Überprüfen Sie den resultierenden Zähler vor dem Lesen. Ergänzungsseite 47 enthält **Zusätzliche Abbildung 51**, dessen Achse **H2 Farada-Effizienz** ist; Es darf nicht mit dem Hauptergebnis von CO verwechselt werden.

![Ergänzende Abbildung 51 auf der tatsächlichen PDF-Seite 47 von 52](/img/open-science/research-workflows/catalyst-supplement-47.webp)

## Überprüfen und speichern Sie den Bericht {/* #check-and-save-the-report */}

Nachdem die Antwort abgeschlossen ist, öffnen Sie **catalyst-claim-check.md**. Überprüfen Sie die Quellidentität, Seitenzahlen, Zahlenbeschriftungen und den Wortlaut der Schlussfolgerung. Insbesondere sollte der Bericht **gemeldetes Ergebnis** beibehalten und vermeiden, eine Literaturprüfung in einen Anspruch auf experimentelle Reproduktion zu verwandeln.

![Der gespeicherte Anspruch, Beweise, Bedingungen und Grenzen Bericht](/img/open-science/research-workflows/catalyst-claim-report.webp)

Laden Sie das <a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>Beispielbericht</a> für seine Struktur herunter. Bevor Sie eine wissenschaftliche Schlussfolgerung in Ihrer eigenen Arbeit verwenden, prüfen Sie die zitierten Originalbeweise und alle Korrekturen des Herausgebers. Zum Extrahieren von Abbildungs- oder Tabellenbeweisen in eine separate Datei siehe [PDF-Extraktion](../guides/previews.md#pdf-extraction).
