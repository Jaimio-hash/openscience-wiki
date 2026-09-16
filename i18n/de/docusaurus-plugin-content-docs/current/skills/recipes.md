---
title: "Skill Rezepturen"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Skill Rezepturen {/* #skill-recipes */}

Wählen Sie ein Rezept nach seinem Ausgangsmaterial und der Entscheidung, die Sie treffen müssen. Bewahren Sie die Prozedur im Skill, die tatsächlichen Dateien in einem Projekt und die Ergebnisprüfungen in der Konversation auf.

| Forschungslage | Beginnen Sie mit | Skills und Werkzeuge | Liefer- und Abnahmeprüfung | Route und Voraussetzungen |
| --- | --- | --- | --- | --- |
| Entscheiden Sie, ob eine heruntergeladene RNA-seq-Zähltabelle für die Analyse bereit ist | Raw Count Matrix und Source Accession | Custom rnaseq-count-qc; Python/R Notebook | Strukturbericht, Stichprobenmetriken, Originalkennungen und unveränderter Input-Hash | Lokales Notebook Beispiel; aktiviert Python/R |
| Abgleich zweier Durchführungen der QC-Probe | Python und R CSV Ausgänge | Notebook; rnaseq-count-qc Anforderungen | Verbinden Sie sich mit vollständigen Beispiel-IDs und vergleichen Sie alle Metriken; Das GSE60450-Beispiel entsprach den 48-Werten | Lokales Notebook Beispiel; aktiviert Python/R |
| Lassen Sie eine weitere Rolle ein Ergebnis überprüfen, bevor Sie es teilen | Komplette QC-Tabelle und explizite Invarianten | RNA-seq QC Reviewer Specialist | Separates Kindertranskript und 12-Summen pro Stichprobe; Inline-Beweis vom Original-Dateizugriff unterscheiden | Inline-Table-Beispiel; Specialist und Python aktiviert |
| Erstellen Sie eine Leseliste für eine neue Frage | Eine fokussierte Frage und Seed DOI/PMID | Literaturrecherche; Literatur/Daten Connectors | Abgerufene Identifikatoren, Inklusionsgründe und ungelöste Volltextlücken | PRISMA-Sammlungsbeispiel; Arbeitsliteratur Connector |
| Entwurf eines Forschungsdossiers für eine definierte Population | Population, Indikation und Frageumfang | Angabendossier; Forschungsquellen | Datierte Beweise, wieder aufgenommene Wegpunktdateien und nicht unterstützte Ansprüche gekennzeichnet | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Verwandeln Sie ein Erkundungsdiagramm in eine Berichtszahl | Validierte Daten und ein spezifischer Anspruch | Figurenstil | Wiedereröffnetes Bild mit Einheiten, Musteretiketten, Beschriftung und Datenrückverfolgbarkeit | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Erstellen Sie eine Multi-Panel-Ergebniszahl | Fassungen der Ansprüche und unveränderlichen Daten | Figure Composer + Figure Style | Panel-Umriss, zusammengestelltes Bild und Überprüfungsergebnisse; von Main Agent | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Überprüfen Sie, ob ein Figurendeck ein Manuskript unterstützt | Manuskript, Bildunterschriften, vollbestelltes Deck | Paper Narrative | geordnete Argumentations- und Beweislücken; Keine neuen Experimente | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Finden Sie die Ursache eines Fehlers bei fehlendem Paket | Exakte Fehler und ausgewählte Laufzeit | Umwelt & Pakete | Inspektion der installierten Version, nach Möglichkeit verwaltete Installation, Neustart des Kernel-Importtests | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Bereiten Sie eine entfernte Umgebung für einen wiederholten Job vor | Bestehende SSH/Slurm-Host- und Paketanforderungen | Compute Environment Setup + Remote Compute | Benannte Umgebung und Sonden-/Ausführungsnachweise; Host-Setup gehört dem Benutzer / Administrator | Siehe Remote Compute für Direct SSH; Slurm erfordert Buchhaltung |
| Vergleichen Sie Protein-Struktur-Vorhersagen | Gültige Sequenzen/komplexe Definition | AlphaFold2, Boltz, Chai-1, ESMFold2 oder OpenFold3 | Struktur plus Vertrauens- und Eingabekorrespondenz; Konfigurierte Gewichte/GPU erforderlich | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |
| Neugestaltung eines Rückgrats mit festen Rückständen | PDB, Chain Mapping und Design-Einschränkungen | ProteinMPNN/LigandMPNN/LöslicheMPNN | Sequence-to-Chain-Mapping und Constraint-Checks; CPU-Unterstützung ist abhängig von der Methode | Beispiel: Small ProteinMPNN CLI; Andere Methoden benötigen ein eigenes Setup |
| Einzelzellchargen integrieren | AnnData, Batch Labels und Original Counts | scvi-tools oder scGPT | Modell-Outputs, die mit Zell-/Gen-Identifikatoren überprüft werden; Dies gilt nicht direkt für Massenzählungen | Anpassbare Methode; Bereiten Sie die aufgeführten Eingaben und methodenspezifischen Abhängigkeiten vor |

## Reproduzieren Sie das lokale RNA-seq Rezept {/* #reproduce-the-local-rna-seq-recipe */}

<p className="example-label"><strong>Praxisbeispiel</strong> Führen und inspizieren Sie RNA-seq Count QC</p>

1. Verwenden Sie die tatsächliche [GSE60450-Eingänge und Muster-QC](../reference/example-data.md).
2. Erstellen oder Importieren von [rnaseq-count-qc](./create.md).
3. Senden Sie eine begrenzte Anfrage mit dem [Skill Aufrufbeispiel](./overview.md).
4. Öffnen Sie das generierte <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Validierungsbericht</ExampleDownload>. Vergleichen Sie die erwarteten 27,179-Gene und 12-Probenspalten mit den beobachteten Werten, nicht mit dem Zeilendeckel einer Vorschau.
5. Wenn eine zweite Meinung erforderlich ist, verwenden Sie [Delegieren und Prüfen](../specialists/delegate.md) und prüfen Sie das eigentliche Kindertranskript.

## Geben Sie einem Rezept ein klares Finish {/* #give-a-recipe-a-clear-finish */}

Eine nützliche Anfrage benennt die Quelle, die erforderliche Methode, Ausgabedateien und Akzeptanzprüfungen. Zum Beispiel:

> Verwenden Sie das vorhandene GSE60450 Sample-QC CSV, um eine Berichtsfigur mit Figure Style zu erstellen. Bewahren Sie vollständige Beispiel-IDs in der Begleittabelle auf, beschriften Sie Rohzähleinheiten, bewahren Sie die Quelle auf, speichern Sie eine neue Figur und öffnen Sie sie erneut, um alle Etiketten zu überprüfen. Nicht verfügbare Abhängigkeiten melden, bevor Sie die Methode ändern.


Bezugsnummer der Durchführung: [manifest.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md).

Für unterstützte Langzeitarbeit folgen Sie [Hintergrundaufgaben und Ergebnislieferung](../guides/notebook.md#background-tasks-and-result-delivery). Überprüfen Sie den tatsächlichen Lauf und die gespeicherten Ausgaben nach der Lieferung. Environment & Packages, Compute Environment Setup und Remote Compute (SSH) bleiben aktiviert, aber ihre Laufzeit-, Netzwerk- und Hostanforderungen gelten weiterhin.
