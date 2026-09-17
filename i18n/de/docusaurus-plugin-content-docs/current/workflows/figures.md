---
title: "Machen Sie eine rückverfolgbare Figur mit Fehlerbalken"
last_update:
  date: '2026-09-16'
---

# Machen Sie eine rückverfolgbare Figur mit Fehlerbalken {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>Praxisbeispiel</strong> Temperatur und elektrische Leitfähigkeit</p>

Sie benötigen eine wissenschaftliche Figur, deren aufgetragene Punkte und Unsicherheiten auf eine Datentabelle zurückgeführt werden können. In diesem Beispiel wird die elektrische Leitfähigkeit für Aluminium-dotiertes Zinkoxid (AZO) und Kupferiodid (CuI) dargestellt, wobei die vom Herausgeber gemeldeten Standardabweichungen beibehalten werden.

**Lieferbar:** eine englische PNG und SVG, die aufgetragene CSV und eine kurze Methodendatei. Das Beispiel verwendet veröffentlichte Daten, kein neu durchgeführtes Experiment.

## Bereiten Sie die Daten und ihre Bedeutung vor {/* #prepare-the-data-and-its-meaning */}

Die [Ausgangspapier](https://www.nature.com/articles/s44172-024-00291-4) bietet eine Source Data Arbeitsmappe. Das Beispiel CSV transkribiert die Spalten A, D und E aus **Ergänzende Abb.6a** und **Ergänzende Abb.6b**, Zeilen **3–15**: Temperatur, elektrische Leitfähigkeit und berichtete SD. Es enthält **13 Temperaturen pro Material**, das **275–390 K** abdeckt.

Laden Sie <a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>zubereitet CSV</a> und <a href="/docs/examples/research-workflows/conductivity-source.md" download>Quelle:</a> herunter. Der CSV behält das Originalblatt und die Zeile für jeden Punkt bei. Das Papier beschreibt SD aus fünf Messungen pro Temperatur; In diesen Spalten werden keine einzelnen Replikationsmessungen geliefert, so dass dieser Workflow SD nicht neu berechnet.

1. Erstellen Sie ein Projekt mit einem Arbeitsmodell und einem aktivierten [Python Laufzeit](../guides/runtimes.md).
2. Öffnen Sie eine Konversation und fügen Sie beide Dateien mit **+ → Attach files** an.
3. Bestätigen Sie die numerischen Spalten und Einheiten, bevor Sie zeichnen: **K** für die Temperatur und **S m-1** für die Leitfähigkeit und seine SD.

Klicken Sie auf das angehängte CSV, um die Vorschau zu öffnen. Es sollte **Zeilen 26 · Spalten 6** zeigen, einschließlich Material, Temperatur, Leitfähigkeit, SD und Quellblatt / Zeile. Öffnen Sie auch die Quellnotiz; Der erfasste Durchlauf verwendete den Dateinamen `README.md` für die hier als `conductivity-source.md` gelieferte Note.

![Die beigefügte Leitfähigkeitstabelle mit Werten, Einheiten und Quellzeilen](/img/open-science/research-workflows/conductivity-input.webp)

## Fragen Sie nach der Zahl und den Daten dahinter {/* #ask-for-the-figure-and-the-data-behind-it */}

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

Überprüfen Sie eine Code- oder Paketanforderung und prüfen Sie dann das tatsächliche Notebook-Ergebnis. Ein in der Antwort beschriebenes Diagramm ist noch keine gespeicherte Zahl.

Wählen Sie **Notebook** in der Konversation. Öffnen Sie die fertige Python-Zelle und prüfen Sie ihre Ausgabe: 26 Gesamtzeilen, 13 Zeilen für jedes Material, den 275–390 K Bereich und die aufgetragene Figur. Wenn die Eingabeauflösung fehlschlägt, lassen Sie den Agenten das CSV verwenden, das dieser Konversation beigefügt ist, und überprüfen Sie dann die erfolgreiche Ausführung, bevor Sie fortfahren.

![Die tatsächliche Notebook-Ausführung meldet die Eingabeprüfungen und macht den Plot](/img/open-science/research-workflows/conductivity-notebook.webp)

## Überprüfen Sie die Zahl und exportieren {/* #check-the-figure-and-export */}

Öffnen Sie den erzeugten PNG. Bestätigen Sie, dass beide Materialien unterscheidbar sind, die Endpunkte sichtbar sind, die Achsen Einheiten angeben und die Unsicherheitsnote **gemeldete SD** sagt. Die Leitungen verbinden nur Messungen; der Einbruch der AZO-Leitfähigkeit nach 300 K bleibt sichtbar.

![Aktuelle Open-Science-Vorschau des Leitfähigkeitsdiagramms und gemeldete SD-Fehlerbalken](/img/open-science/research-workflows/conductivity-figure.webp)

Öffnen Sie **plotted-conductivity.csv** und vergleichen Sie es mit dem Eingang. In diesem Lauf bewahrte alle **26-Zeilen** die Temperaturen, Leitfähigkeitswerte, SDs und Quellenblatt-/Zeilenidentitäten. Öffnen Sie **conductivity-methods.md**, um die Quelle DOI und die Unsicherheitsdefinition zu überprüfen.

Der **Generated**-Bereich sollte vier Dateien enthalten. Öffnen Sie die Methodendatei und verwenden Sie das Download-Symbol in jeder Vorschau, um die von Ihnen überprüfte Version zu speichern. Wenn eine Ausgabe fehlt, fordern Sie diese bestimmte Datei an und öffnen Sie sie erneut; ein erfolgreicher PNG beweist nicht, dass die SVG oder Datentabelle gespeichert wurde.

![Die vier gespeicherten Ausgänge und die wieder geöffneten Methoden beachten](/img/open-science/research-workflows/conductivity-methods.webp)

Verwenden Sie PNG für schnelles Teilen und SVG, wo Vektor-Artwork nützlich ist. <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG</a>, <a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG</a>, <a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>Aufgezeichnete Daten</a> und <a href="/docs/examples/research-workflows/conductivity-methods.md" download>Methoden</a> stehen zum Vergleich zur Verfügung.

Entscheiden Sie für Ihre eigenen Messungen, ob Fehlerbalken SD, Standardfehler oder ein Konfidenzintervall anzeigen sollen, bevor Sie nach einem Plot fragen. Geben Sie dem Agenten die erforderlichen Rohmessungen oder bereits berechnete Unsicherheit zusammen mit seiner Definition. Vermeiden Sie die Unsicherheit explizit.
