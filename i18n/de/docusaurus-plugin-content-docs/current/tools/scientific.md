---
title: "Wissenschaftliche Instrumente"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Wissenschaftliche Instrumente {/* #scientific-tools */}

Führen Sie eine wissenschaftliche Berechnung erst dann durch, wenn die tatsächliche Eingabe- und Ausführungsumgebung klar ist. Wählen Sie einen lokalen Notebook, einen Connector oder einen externen Läufer entsprechend der Methode und ihren Abhängigkeiten.

## Wählen Sie, wo die Berechnung läuft {/* #choose-where-the-calculation-runs */}

| Route | Geeignete Arbeiten | Bereitschaftskontrolle |
| --- | --- | --- |
| Python Sitzung Notebook | Datenparsing, numerische Zusammenfassungen und Plots | Gebundene Python-Laufzeit und installierte Pakete |
| R Sitzung Notebook | R Analyse und Pakete | R-Laufzeit, die an diese Sitzung gebunden ist |
| Eingebautes Connector | Datenbankabruf oder unterstützte deterministische Operation | Connector verfügbar für den Agenten, Anmeldeinformationen / Netzwerk nach Bedarf |
| Remote Compute | Hostspezifische Software, GPU oder Batch-Jobs | Förderfähiger Host, Umgebung und Zeitplaner |

Ein Shell-Befehl ist nicht mit einem Session Notebook-Lauf austauschbar: Ihre Laufzeit, Eingänge und Herkunft können sich unterscheiden. Fordern Sie die beabsichtigte Route explizit an.

## Pakete und Abhängigkeiten {/* #packages-and-dependencies */}

| Schritt | Was zu tun ist | Erfolgreiches Ergebnis |
| --- | --- | --- |
| Inspektion | Fragen Sie nach `inspect_packages` in der vorgesehenen Sprache/Laufzeit | Installierter/fehlender Status und Versionen |
| Installieren | Verwenden Sie die unterstützte `manage_packages` Flow für die gebundene Umgebung | Abgeschlossene Installer-Ausgabe, nicht nur „Installation gestartet |
| Neustart | Neustart/Rebind des Kernels, wenn die App ihn anfordert | Die nächste Zelle verwendet die aktualisierte Umgebung |
| Prüfen | Importieren Sie das Paket in demselben Notebook | Aktuelle Version und ein kleiner Arbeitsbetrieb |

Wenn die Paketinstallation HTTP CONNECT 403 zurückgibt, überprüfen Sie den betroffenen Pakethostnamen und [Netzwerkeinstellungen](../guides/network.md), bevor Sie erneut versuchen. Verwenden Sie ein vorhandenes Paket nur, wenn es die von Ihnen benötigte Methode unterstützt; Eine erfolgreiche Berechnung bedeutet nicht, dass eine ausgefallene Paketinstallation repariert wurde.

## Ausführen und Verifizieren einer lokalen RNA-seq-Berechnung {/* #execute-and-verify-a-local-rna-seq-calculation */}

<p className="example-label"><strong>Praxisbeispiel</strong> Überprüfen Sie die Anzahl der Sample-Level in der GSE60450-Matrix</p>

1. Befestigen Sie den [GSE60450-Eingang](../reference/example-data.md).
2. Wählen Sie die Laufzeit von Python oder R Notebook. Überprüfen Sie die Version, bevor Sie etwas installieren.
3. Fragen Sie nach Vollmatrixdimension und Zählintegritätsprüfungen; `EntrezGeneID` und `Length` aus den Probenspalten ausschließen.
4. Für jede vollständige Probenkennung sind die Gesamtzählung, die Nullzählungsgene, die nachgewiesenen Gene und der Median unter den nachgewiesenen Genen zu berechnen.
5. Speichern Sie neue CSV, Diagramm und Methoden Bericht. Halten Sie die Quelle unverändert und vergleichen Sie ihre SHA-256 vorher / nachher.
6. Öffnen Sie alle Outputs wieder. Stichprobenanzahl, Etiketten und Werte gegeneinander prüfen; Inspizieren Sie den aktuellen Notebook-Code und die Protokolle.

Vergleichen Sie Output-Identifier und Metriken mit dem [Beispiel-Baseline](../reference/example-data.md). Halten Sie den Roh-Input unverändert. Deskriptive Zählungen stellen keine normalisierte Expression, differentielle Expression oder eine klinische Schlussfolgerung dar.

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">R/Python Vergleich</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Skill Validierung</ExampleDownload>.

## Entwerfen einer kleinen Proteinsequenz auf CPU {/* #design-a-small-protein-sequence-on-cpu */}

<p className="example-label"><strong>Praxisbeispiel</strong> Design Candidate Sequenzen für das 1UBQ Backbone</p>

Diese Route führt die **offizielles ProteinMPNN CLI** auf menschlichem Ubiquitin, PDB 1UBQ-Kette A. Es erstellt jeweils einen Kandidaten mit der Vanille und löslichen Checkpoints. Es handelt sich um eine umgekehrte Faltungsberechnung, die auf einem bestehenden Rückgrat basiert.

### Bereiten Sie den Läufer und Gewichte {/* #prepare-the-runner-and-weights */}

Verwenden Sie ein unterstütztes Python mit funktionierendem `venv` und Pip, Git, Internetzugang und einem beschreibbaren Ordner. Die folgenden Befehle sind für macOS/Linux Shells. Verwenden Sie auf Windows das entsprechende `.venv\Scripts\python.exe` und setzen Sie `CUDA_VISIBLE_DEVICES` mit der Syntax Ihrer Shell.

```bash
mkdir protein-design
cd protein-design
git clone https://github.com/dauparas/ProteinMPNN.git
git -C ProteinMPNN checkout 8907e6671bfbfc92303b5f79c4b5e6ce47cdef57
python3 -m venv .venv
.venv/bin/python -m pip install torch numpy
.venv/bin/python -c "import sys, torch, numpy; print(sys.version); print(torch.__version__, numpy.__version__)"
.venv/bin/python -m pip freeze > environment.txt
```

Die angeheftete Kasse enthält `vanilla_model_weights/v_48_020.pt` und `soluble_model_weights/v_48_020.pt`; bestätigen, dass beide Dateien vorhanden sind. Laden Sie das <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ-Eingang</ExampleDownload> als `1UBQ.pdb` in `protein-design` herunter. Halten Sie die Sequenzeingabe von den Ausgabeordnern getrennt.

Dieses Setup installiert Pakete in einer externen virtuellen Umgebung. Wenn pip keine kompatible Verteilung meldet, wählen Sie eine Python-Version, die vom verfügbaren PyTorch-Rad unterstützt wird, bevor Sie es erneut versuchen. Datensatz `environment.txt`; Ändern Python, PyTorch oder NumPy kann numerische Ausgabe ändern. Wenn eine alte virtuelle Umgebung nach einem Systemupdate ihren Basis-Interpreter nicht mehr findet, erstellen Sie ihn mit dem aktuellen kompatiblen Python neu.

### Führen Sie beide Modelle aus und speichern Sie ihre Ausgänge {/* #run-both-models-and-save-their-outputs */}

Von `protein-design`, laufen:

```bash
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --num_seq_per_target 1 --batch_size 1 --sampling_temp 0.1 --seed 42 \
  --out_folder outputs/vanilla
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --use_soluble_model --num_seq_per_target 1 --batch_size 1 \
  --sampling_temp 0.1 --seed 42 --out_folder outputs/soluble
```

Beide Befehle verwenden Kette A, eine Sequenz, Temperatur 0.1 und Seed 42. Durch das Löschen der CUDA-Gerätesichtbarkeit wird dieser Läufer CPU verwenden. Erwarten Sie `outputs/vanilla/seqs/1UBQ.fa` und `outputs/soluble/seqs/1UBQ.fa`; ihre Namen beim Importieren oder Veröffentlichen getrennt halten.

Um über Open-Science auszuführen, geben Sie den vorbereiteten Ordner mit **Your files → Grant folder…** und bitten Sie den Agenten, diese Befehle mit dem **absoluter Python-Pfad** der Umgebung und diesem Arbeitsverzeichnis auszuführen. Prüfen Sie den Befehl und den Umfang bei der Genehmigung. Bitten Sie es, die beiden FASTAs und einen Vergleichsbericht zu veröffentlichen, und öffnen Sie dann alle drei in **Files** erneut. Eine Datei, die nur im Arbeitsverzeichnis verbleibt, muss noch veröffentlicht werden.

:::caution&#91;Skill package loading&#93; Wenn das integrierte Modell Skill die Paketpfadvalidierung nicht besteht, melden Sie diesen Fehler über [Fehlerbehebung](../guides/troubleshooting.md). Die oben genannte CLI-Route bleibt eine separate Methode; Eine erfolgreiche CLI-Ausführung stellt nicht sicher, dass das native Skill-Laden funktioniert. :::

### Überprüfen Sie die entworfenen Sequenzen {/* #check-the-designed-sequences */}

![Abgeschlossener lokaler CPU-Lauf und erneut geöffneter Vergleichsbericht](/img/open-science/local-todo-batch/42-cpu-model-comparison.webp)

Die gespeicherten Ausgänge in diesem Beispiel enthielten folgende Ergebnisse:

| Ausgabe | Konzipierte Rückstände | Score | Erholung gegen native |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">ProteinMPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">LöslicheMPNIN-FASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

Jede FASTA enthält **zwei Datensätze**: zuerst die native Sequenz, dann den einzelnen designten Kandidaten. Unabhängige Kontrollen bestätigten kanonische Aminosäuren, 76-Rückstände pro Datensatz, endliche Werte, direkt recomputed Wiederfindung und unveränderte PDB SHA-256. Gespeicherte Artefaktbytes stimmten mit den Runner-Ausgaben überein. Der <ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">Vergleichsbericht</ExampleDownload> zeichnet Einstellungen und Einschränkungen auf. Noten aus diesem Ein-Kandidaten-Vergleich legen nicht fest, welches Modell eine bessere Faltung, Löslichkeit oder Funktion ergibt.

## Diagnose durch das scheiternde Stadium {/* #diagnose-by-the-failing-stage */}

| Symptom | Nächste Prüfung |
| --- | --- |
| Keine Laufzeit / R nicht verfügbar | Installieren oder aktivieren Sie den Dolmetscher durch [Laufzeiten](../guides/runtimes.md)Dann binden Sie es. |
| ImportError / ModuleNotFoundError / kein Paket aufgerufen | Überprüfen Sie die ausgewählte Umgebung und verwenden Sie die verwaltete Paketinstallation. |
| Unbekanntes Skill / ungültiger Kernel-Helfer | Unterscheiden Sie ein Methodenpaket von einem tatsächlichen aufrufbaren Notebook-Helfer. |
| Eingabeversion nicht verfügbar / Datei nicht gefunden | Lösen Sie die genaue aktuelle Eingabe durch die Anwendung; Erraten Sie keinen Weg. |
| Netzwerk-/HTTP-Ausfall | Host, Betrieb und Ist-Status beibehalten; Verwendung [Netzsteuerung](../guides/network.md) und [Fehlerhinweise](../guides/troubleshooting.md). |
| Output existiert nur in einem Arbeitsverzeichnis | Veröffentlichen Sie es über die unterstützte Artefaktroute und öffnen Sie die gespeicherte Version erneut. |
| Kein Producer Block / Partial Environment | die Beschränkung beibehalten; keine fehlenden Beweise anfertigen. |

Bei Remote-Jobs sind die Bereitschaft des Wirts, die Einreichung, der Status und die geerntete Leistung separat zu prüfen. Der [Direct SSH RNA-seq Beispiel](../guides/remote-compute.md) wurde fertiggestellt und seine Ausgänge wurden unabhängig überprüft. Die Überwachung des Slurm-Terminals erfordert eine lesbare Abrechnung. Das gleiche Kapitel dokumentiert nun einen verifizierten A100 ProteinMPNN-Lauf mit einer isolierten CUDA-Umgebung und unabhängigen Output-Checks. CPU-fähige Verfahren bleiben separat bewertbar.

Für unterstützte Langzeitarbeit folgen Sie [Hintergrundaufgaben und Ergebnislieferung](../guides/notebook.md#background-tasks-and-result-delivery). Überprüfen Sie den tatsächlichen Lauf und die gespeicherten Ausgaben nach der Lieferung. Environment & Packages, Compute Environment Setup und Remote Compute (SSH) bleiben aktiviert, aber ihre Laufzeit-, Netzwerk- und Hostanforderungen gelten weiterhin.

Bezugsnummer der Durchführung: [notebook.ts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md).
