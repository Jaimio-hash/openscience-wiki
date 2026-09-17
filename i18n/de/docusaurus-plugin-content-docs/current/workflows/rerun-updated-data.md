---
title: "Führen Sie eine Analyse mit aktualisierten Daten durch"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Führen Sie eine Analyse mit aktualisierten Daten durch {/* #rerun-an-analysis-with-updated-data */}

<p className="example-label"><strong>Praxisbeispiel</strong> Hinzufügen einer zweiten Woche von Peking Luftqualität Beobachtungen</p>

Wenn neue Beobachtungen eintreffen, behalten Sie die Baseline bei und führen Sie die gleiche Methode erneut aus, bevor Sie die Ergebnisse vergleichen. Dieses Beispiel verwendet tatsächliche **Aotizhongxin** stündliche PM2.5 Daten: **Januar 1-7, 2016** zuerst, dann **Januar 8–14**. Die inszenierte ankunft ist eine historische lehrwiederholung, keine live-überwachung.

## 1. Fügen Sie die erste Woche an und definieren Sie die Berechnung {/* #1-attach-the-first-week-and-define-the-calculation */}

Die Eingaben sind chronologische Untergruppen des [UCI Beijing Multi-Site Luftqualitätsdatensatz](https://doi.org/10.24432/C5RK5G), die unter **CC VON 4.0** verteilt sind. Laden Sie <ExampleDownload path="/examples/workflow-extensions/air-week1.csv">Woche 1</ExampleDownload> und <ExampleDownload path="/examples/workflow-extensions/air-week2.csv">Woche 2</ExampleDownload> herunter; Quelle Kredit- und Dateiidentitäten sind in <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">Die Quellenanmerkungen</ExampleDownload>.

Öffnen Sie eine Projektkonversation und fügen Sie **air-week1.csv nur** über **+ → Attach files** an. Wählen Sie ein verfügbares Modell aus und bestätigen Sie, dass Python **Ready** ist und in **Settings → Runtimes** aktiviert ist. Senden:

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![Antrag auf Erstwochenbeilage und Baseline-Berechnung](/img/open-science/workflow-extensions/air-input-v1.png)

Überprüfen Sie die Datei liest und Berechnung vor der Genehmigung. Überprüfen Sie in **Notebook**, ob die Ausführung abgeschlossen ist, und öffnen Sie dann **air-daily-v1.csv**. Die Baseline enthält **168 stündliche Zeilen und 7 tägliche Zeilen**, wobei keine PM2.5-Werte fehlen.

![Die gespeicherte Sieben-Tage-Baseline und Valid-Stunde zählt](/img/open-science/workflow-extensions/air-baseline-table.png)

## 2. Hinzufügen neuer Beobachtungen, ohne die Methode zu ändern {/* #2-add-new-observations-without-changing-the-method */}

Führen Sie das gleiche Gespräch. Fügen Sie **air-week2.csv** an, lassen Sie den ersten Anhang verfügbar und fordern Sie an:

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![Die zweite Woche Datei hinzugefügt, um die bestehende Analyse Konversation](/img/open-science/workflow-extensions/air-update-input.png)

Stellen Sie sicher, dass der Agent das vorhandene Skript ausführt und die gleichen Regeln für den fehlenden Wert und die Vollständigkeit einhält. Das Ändern sowohl der Daten als auch der Methode würde es schwieriger machen zu erklären, warum sich das Ergebnis geändert hat.

## 3. Überprüfen Sie die erweiterten Ergebnisse {/* #3-inspect-the-expanded-results */}

Öffnen Sie **air-daily-v2.png** und **air-daily-v2.csv**. Der kombinierte Eingang enthält **336 stündliche Zeilen**, mit **keine doppelten oder fehlenden Zeitstempel**. Es gibt **eine fehlende PM2.5 Beobachtung**, am Januar 11. Die Tabelle hat **14 Tage**, die alle der 18-gültigen Stundenregel des Beispiels entsprechen.

![Das erweiterte 14-Tage-Ergebnis wird in Open-Science angezeigt](/img/open-science/workflow-extensions/air-update-plot.png)

Der Januar 11 Mittelwert ist **11.652 μg/m3**, berechnet aus **23 gültige Stunden**. Teilen Sie eine fehlende Beobachtung nicht so ein, als wäre sie Null. Eine vollständige Zeitstempelsequenz garantiert nicht, dass alle Messwerte vorliegen.

## 4. Vergleichen Sie mit der Baseline {/* #4-compare-against-the-baseline */}

Öffnen Sie **air-update-check.csv**. Alle **7 geteilte tägliche Reihen** sind in jedem Ausgabefeld identisch; Die einzigen neuen Daten sind Januar 8-14. Der SHA-256 des Originalskripts ist vor und nach dem Update unverändert.

![Der gespeicherte zeilenweise Vergleich mit unveränderten Baseline-Daten](/img/open-science/workflow-extensions/air-update-check.png)

Öffnen Sie **air-update-notes.md**, um Eingabeidentitäten, fehlende Beobachtungen und die beibehaltenen v1-Dateien zu überprüfen. Eine unabhängige Berechnung aller 14 Tagesmittelwerte und der Gültigkeitsdauer hat die gespeicherte Ausgabe auf ihre angezeigte Genauigkeit abgestimmt.

![Die Update-Notizen zeichnen unveränderten Code, beibehaltene Baseline-Dateien und Datenprüfungen auf](/img/open-science/workflow-extensions/air-update-notes.png)

## 5. Überprüfen Sie die Berichtsdaten, bevor Sie sie abgeben {/* #5-check-the-report-dates-before-handing-it-off */}

Prüfen Sie, ob die Berichtsüberschrift dem tatsächlichen Eingabeintervall folgt. Das ursprüngliche Skript behielt einen Titel der ersten Woche in seinem zweiwöchigen Bericht bei; Dieser Darstellungsfehler wurde in **air-analysis-reviewed.py** korrigiert. Lediglich das Heading Template hat sich geändert. Das überprüfte Skript wurde dann unverändert in der Woche 1 und in beiden Wochen ausgeführt, wobei alle vorherigen Dateien erhalten blieben.

![Der korrigierte Bericht benennt nun das volle zweiwöchige Intervall](/img/open-science/workflow-extensions/air-reviewed-report.png)

Die gespeicherten **air-daily-baseline.csv** und **air-daily-updated.csv** entsprechen den ursprünglichen v1/v2 CSVs in jedem Feld. **air-update-verification.md** zeichnet den gleichen überprüften Skript-Hash vor und nach beiden Durchläufen auf und überprüft die beiden Berichtsüberschriften. Dies trennt ein korrigiertes Etikett von einer Änderung der numerischen Methode.

Laden Sie <ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">Python Skript</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">Basiswert CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">Aktualisierte CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">Zeilenvergleich</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">aktualisierter Bericht</ExampleDownload> und <ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">Prüfprotokoll</ExampleDownload> herunter. Verwenden Sie Python mit Pandas, NumPy und Matplotlib, behalten Sie beide Eingaben bei und schreiben Sie in ein neues Präfix:

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

Der Vergleich beschreibt eine Station und zwei historische Wochen. Es handelt sich nicht um eine AQI-Klassifizierung, eine Expositionsbewertung oder den Nachweis eines kausalen Eingriffs. Für eine Änderung der Analysemethode unter Beibehaltung der gleichen Daten, siehe [Vergleichsmethoden](compare-methods.md).
