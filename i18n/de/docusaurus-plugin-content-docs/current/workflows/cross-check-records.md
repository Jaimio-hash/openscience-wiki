---
title: "Gegenüberstellung von zwei wissenschaftlichen Datenquellen"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Gegenüberstellung von zwei wissenschaftlichen Datenquellen {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>Praxisbeispiel</strong> NASA GISTEMP und HadCRUT jährliche globale Temperaturanomalien</p>

Zwei Quellen können nicht zustimmen, weil ihre Definitionen sich unterscheiden. Vor der Interpretation einer Diskrepanz sind die Einheiten, das Zeitintervall und der Bezugszeitraum anzugleichen. In diesem Beispiel werden zwei reale jährliche Temperaturdatensätze über **1980–2024** verglichen, nachdem jeder auf **1991–2020** neu basiert wurde. Es speichert eine ausgerichtete Tabelle, eine Zwei-Panel-Figur, ein Python-Skript und einen Methodenbericht.

## 1. Erhalten Sie die Quelldateien und überprüfen Sie deren Definitionen {/* #1-obtain-the-source-files-and-check-their-definitions */}

Laden Sie die jährliche Land-Ozean-CSV aus [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) und die jährliche Analyse-Ensemble-Mean-Serie aus [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html) herunter. Verwenden Sie die gespeicherten Dateinamen `NASA-GISTEMP-v4-original.csv` und `HadCRUT5-original.csv`.

| Eingabe | Jährlicher Wert | Ursprüngliche Anomalie Baseline |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` Säule, °C | 1951–1980 |
| HadCRUT5.1.0.0 | Jährlicher Ensemble-Mittelwert, °C; Konfidenzgrenzen beibehalten | 1961–1990 |

Die NASA-Datei beginnt mit einer beschreibenden Zeile vor dem Header und verwendet `***` für nicht verfügbare Werte. Interpretieren Sie diesen Marker nicht als Null. Die aufgezeichneten Quellidentitäten und Download-Links befinden sich in <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">Die Beispielquellenanmerkungen</ExampleDownload>; Provider-Dateien können nach diesem Lauf überarbeitet werden.

Öffnen Sie ein Projekt und verbinden Sie beide CSVs mit **+ → Attach files**. Stellen Sie in **Settings → Runtimes** sicher, dass Python **Ready** ist und aktiviert ist. Dieser Lauf verwendete Python 3.12.14, NumPy 2.5.3, Pandas 2.3.3, Matplotlib 3.11.1 und Pillow 12.3.0.

![Die beiden Quellen-CSVs, die der Vergleichsanfrage beigefügt sind](/img/open-science/workflow-extensions/temperature-input.webp)

## 2. Bitten Sie um Abstimmung vor der Interpretation {/* #2-ask-for-alignment-before-interpretation */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

Überprüfen Sie die vorgeschlagenen Datei liest und Python-Code vor der Genehmigung. Öffnen Sie **Notebook**, um zu überprüfen, ob die Berechnung abgeschlossen ist. Wenn es einen Fehler gibt, beheben Sie ihn und führen Sie ihn erneut aus, bevor Sie einen Bericht oder eine Figur interpretieren.

## 3. Überprüfen Sie die ausgerichtete Tabelle {/* #3-check-the-aligned-table */}

Öffnen Sie **temperature-aligned.csv**. Der aufgezeichnete Vergleich enthält **45 geteilte Jahre**. Jede Quelle verfügt über alle **30** jährlichen Punktschätzungen, die für ihren 1991-2020-Bezugsmittelwert erforderlich sind; kein fehlender Jahreswert wurde mit Null gefüllt.

![Die eingesparten jahresbereinigten Werte und Unterschiede](/img/open-science/workflow-extensions/temperature-table.webp)

Die subtrahierten Mittel sind **0.61266667 °C** für NASA und **0.53799554 °C** für HadCRUT. Subtrahieren Sie den eigenen Mittelwert jedes Datensatzes, nicht einen einzigen Offset von beiden. Überprüfen Sie die Einheit, das Jahr und die Subtraktionsrichtung, bevor Sie numerische Unterschiede vergleichen.

## 4. Lesen Sie die Figur und den numerischen Vergleich {/* #4-read-the-figure-and-numerical-comparison */}

Öffnen Sie **temperature-comparison.png**. Das erste Panel behält die unterschiedlichen ursprünglichen Basislinien bei; Die zweite vergleicht die beiden Reihen nach der gemeinsamen Periode Rebasing.

![Original-Basis- und Common-Basis-Temperaturkurven in Open-Science](/img/open-science/workflow-extensions/temperature-plot.webp)

| Aufgezeichnetes Ergebnis, NASA minus HadCRUT | Wert |
| --- | --- |
| Mittlere Differenz | 0.00514589 °C |
| RMSE | 0.01829900 °C |
| Maximale absolute Differenz | 0.04632368 °C, in 2024 |

Die Zahlen sind Ergebnisse für diese heruntergeladenen Snapshots. Verbleibende Unterschiede können Abdeckung, Füllung, Quellenbeobachtungen und Verarbeitungsoptionen widerspiegeln. Die Datensätze teilen Beobachtungen und sind **Nicht statistisch unabhängige Messungen**. Weder wird als Bodenwahrheit bezeichnet.

## 5. Speichern Sie die Methode und wiederholen Sie sie {/* #5-save-the-method-and-rerun-it */}

Öffnen Sie **temperature-crosscheck.md** und vergleichen Sie seine Quelldefinitionen und Metriken mit dem CSV und dem Code. Die Tabelle behält die ursprünglichen HadCRUT-Konfidenzgrenzen und ihre mechanisch verschobenen Werte bei, aber der Vergleich verbreitet **nicht** Unsicherheit in der geschätzten Baseline- oder Zwischenquellenabhängigkeit.

![Der gespeicherte Bericht dokumentiert die tatsächlichen Metriken und Einschränkungen](/img/open-science/workflow-extensions/temperature-report.webp)

Laden Sie <ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">ausgerichtet CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">Abbildung</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Python Skript</ExampleDownload> und <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">Bericht</ExampleDownload> herunter. Mit den beiden verfügbaren Eingabedateien können Sie in einer Python-Umgebung mit den aufgeführten Bibliotheken erneut ausführen:

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

Das aufgezeichnete Skript wurde auch in einem separaten lokalen Python-Prozess ausgeführt; Das ausgerichtete CSV passte genau zum gespeicherten CSV der App. Eine Vereinbarungsprüfung bewertet diese Berechnung, nicht jede methodische Wahl in beiden Klimaprodukten.
