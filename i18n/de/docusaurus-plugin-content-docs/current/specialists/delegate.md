---
title: "Delegieren und Verifizieren von Arbeiten"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Delegieren und Verifizieren von Arbeiten {/* #delegate-and-verify-work */}

Die Delegation gibt einer Rolle eine separate Kinderaufgabe, während der Main Agent die Konversation koordiniert. Das Auswählen eines Specialist, um im Hauptgespräch zu sprechen, und das Delegieren einer Kindaufgabe sind verschiedene Aktionen.

## Bereiten Sie eine begrenzte Handoff {/* #prepare-a-bounded-handoff */}

| Erforderliche Informationen | Beispiel |
| --- | --- |
| Rolle | RNA-seq QC Reviewer, gespeicherte ID `rna-seq-qc-reviewer` |
| Eingabe | Vollständige GSE60450 Sample-QC CSV oder gültige aktuelle unveränderliche Dateiversion |
| Aufgabe | 12 nicht fehlende eindeutige vollständige Proben-IDs und die Identität der Genzahl pro Stichprobe |
| Lieferbar | Eine Kontrolltabelle plus das arithmetische Ergebnis jeder Probe |
| Grenzen | nur lesbar; keine neuen Verpackungen; keine Differentialausdruckinterpretation |

1. Erstellen/Konfigurieren des [Rolle](./identity.md) und bestätigen, dass es aktiviert ist.
2. Aktivieren Sie im **Agent controls** des Gesprächs **Delegation**. Bestätigen Sie das beabsichtigte Modell und die funktionierende Authentifizierung.
3. Bitten Sie Main Agent, explizit zu delegieren, die Rolle zu identifizieren und die gesamte Aufgabe bereitzustellen. Wenn Sie die Dateihandoff verwenden, lassen Sie die App aktuelle Versionen auflösen; keine IDs erfinden oder Dateinamen als Versionsreferenzen übergeben.
4. Beobachten Sie die tatsächliche Delegationsaktivität und den Kinderstatus. Ein Fortschrittssatz von Main Agent ist nicht der Kinderrekord.
5. Öffnen Sie den Child Chip / **Subagents** Preview. Wählen Sie die Aufgabe in **Subagent Frame** aus und lesen Sie deren Transkript, Werkzeugergebnisse und Terminalstatus.
6. Reagieren sie auf jede kindererlaubnisanfrage in der elternkonversation, nachdem sie ihren umfang überprüft haben. Vergleichen Sie dann das zurückgegebene Ergebnis mit den angeforderten Akzeptanzprüfungen.

## Überprüfen Sie das Handoff und das zurückgegebene Ergebnis {/* #check-the-handoff-and-returned-result */}

### Überprüfen einer kleinen Inline-Tabelle {/* #verified-example-twelve-sample-invariants */}

<p className="example-label"><strong>Praxisbeispiel</strong> Delegieren einer zwölf-Stichproben-Tabellenprüfung</p>

Laden Sie den kompletten <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Probe-QC CSV</ExampleDownload> herunter und fügen Sie den Header und alle zwölf Zeilen unmittelbar unter der Anforderung ein. Bewahren Sie alle Spalten und vollständigen Stichprobenkennungen auf. Das Beispiel verwendet die aktivierte Rolle, die in [Specialist Identität](identity.md) erstellt wurde; Python muss für seine Arithmetik aktiviert sein. Für diese begrenzte Überprüfung wird kein zusätzliches Skill benötigt.

> Delegierter zum RNA-seq QC Reviewer. Verwenden Sie nur die komplette inline CSV unten. Führen Sie die Arithmetik in Python aus, überprüfen Sie zwölf verschiedene vollständige Sample-Identifikatoren und überprüfen Sie zero_count_genes + detected_genes_count_gt_0 = 27179 für jede Zeile. Geben Sie jedes Ergebnis zurück und geben Sie an, dass diese Überprüfungen Zusammenfassungsdaten geliefert haben, nicht den unabhängigen Zugriff auf die ursprüngliche Zählmatrix.

![Die abgeschlossene Specialist-Subtask mit Stichprobenprüfungen](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.jpg)

In diesem Beispiel lief das Kind ein Python Notebook und gab **12 Zeilen, 12 eindeutige nicht fehlende Identifikatoren und 12/12 Summen gleich 27,179** zurück. Für die erste vollständige Muster-ID, `8,664 + 18,515 = 27,179`. Numerische Felder waren vollständig und nicht negativ.

Dadurch wird die Konsistenz der gelieferten Zusammenfassung überprüft. Es kann keine Summen/Mediane aus der ursprünglichen Matrix unabhängig reproduzieren, Probenbedingungen validieren oder biologische Qualitätsschwellenwerte festlegen.

<span id="check-file-handoff-and-a-separate-model" />

### Wählen Sie ein separates Modell {/* #choose-a-separate-model */}

Legen Sie ein Kindmodell unabhängig von Main fest.



Wählen Sie ein festes Modell unter **Settings → Model → Subagent**, bevor Sie delegieren. Öffnen Sie die Kinderaufzeichnung, um ihr tatsächliches Modell zu überprüfen; Das modelllabel des hauptgesprächs identifiziert das kind nicht. In der ausgeübten Konfiguration verwendete Main `gpt-5.6-sol` und der Child-Execution-Record `gpt-5.6-luna`, beide über die Codex-Authentifizierung.

### Übergeben Sie eine Datei an das Kind {/* #pass-a-file-to-the-child */}

<p className="example-label"><strong>Beispiel</strong> Geben Sie eine Sample-QC-Datei an eine Child-Task</p>

1. Fügen sie die quelldatei durch das anhangmenü der konversation an und warten sie, bis der upload abgeschlossen ist.
2. Bitten Sie Main, diese genaue hochgeladene Version an das Kind weiterzugeben. Name der erforderlichen Kontrollen und Ergebnisse; Ersetzen Sie keinen Dateinamen oder eine erratene Versions-ID für die Datei.
3. Öffnen Sie **Subagents** und wählen Sie das Kind aus. Wählen Sie in **Notebook** dieses Kind im **Agent**-Filter aus und prüfen Sie die tatsächlich gelesene Datei.
4. Vergleichen Sie die Zeilenzahl des Kindes, die Spaltennamen und die Prüfsumme mit der Quelle. Öffnen Sie die gespeicherte Ausgabe und überprüfen Sie die angeforderte Berechnung.

Für den [öffentliche Stichprobenmetriken CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv) erwarten Sie **12 Datenzeilen** und **269,027,617** als Summe von `total_counts`. Die Eingabeprüfsumme muss unverändert bleiben. Diese Kontrollen betreffen die vorgelegte Stichprobenzusammenfassung; Sie berechnen die ursprüngliche Genzählmatrix nicht neu.

| Überprüfung | Erforderliche Nachweise |
| --- | --- |
| Version akzeptiert | Die App löste die aktuelle unveränderliche Upload-/Artefaktversion in ihrer eigenen Sitzung auf. |
| Kind kann lesen | Das Tool des Kindes hat den Dateiinhalt zurückgegeben; Ein Dateiname oder ein inszenierter Pfad allein ist unzureichend. |
| Durchgeführte Kontrollen | Das Kind führte die Berechnung durch und das gespeicherte Ergebnis stimmt mit der Quelle überein. |

Wenn die App eine nicht verfügbare Eingabe meldet, fügen Sie die Datei erneut an und versuchen Sie es mit der aktuellen Version. Wenn das Kind **`PermissionError: [Errno 1] Operation not permitted`** meldet, behalten Sie den genauen Fehler bei und [Melden Sie es](../guides/troubleshooting.md), wenn das Wiederanbringen das Lesen nicht wiederherstellt. Verschieben Sie keine Dateien in interne Anwendungsordner, um den Fehler zu umgehen.

### Machen Sie ein Skill für das Kind verfügbar {/* #make-a-skill-available-to-the-child */}

Importieren oder erstellen Sie zuerst den Skill. Für ein Specialist, weisen Sie es unter der Rolle [Skills und Connectors](capabilities.md); Starten Sie dann eine neue delegierte Aufgabe, die die Methode explizit benennt. Bitten Sie das Kind, die installierten Anweisungen zu lesen, bevor Sie sie verwenden.

Überprüfen Sie die Werkzeugaktivität des Kindes auf die geladene Skill-Identität und den Inhalt. `rnaseq-count-qc` benötigt beispielsweise eine rohe Gen-Count-Matrix und beschreibt deskriptive QC; eine zwölfreihige Stichprobenzusammenfassung ist keine austauschbare Eingabe. Ein erfolgreiches Paketlesen bedeutet nicht, dass die Analyse gelaufen ist. Überprüfen Sie die Ausführung und die gespeicherten Ergebnisse separat.

## Fehler richtig lesen {/* #read-failures-accurately */}

| Beobachteter oder unterstützter Staat | Bedeutung und Wiederherstellung |
| --- | --- |
| Delegierung aus | Schalten sie es für das beabsichtigte gespräch ein, bevor sie es erneut versuchen. |
| Rolle deaktiviert / Setup unvollständig | Beenden Sie die Einrichtung und aktivieren Sie die vorgesehene gespeicherte Rolle. |
| Input nicht verfügbar in dieser Sitzung | Besorgen Sie sich die genaue aktuelle Artefaktversion oder die unveränderbare Upload-Versionsreferenz. Ein Pfad, Artefakt-ID und Versions-ID sind unterschiedliche Werte. |
| Warten auf Erlaubnis | Inspizieren Sie die anstehende Operation des benannten Kindes; Main Agent wartet möglicherweise eher als Computer. |
| Vervollständigtes Kind | Lesen Sie das Ergebnis und den Tool-Beweis; Die Fertigstellung ist keine Garantie für wissenschaftliche Korrektheit. |
| Storniert/fehlgeschlagen | Behalten Sie die Teilausgabe und den tatsächlichen Fehler bei. Beschriften Sie einen Main Agent-Ersatz nicht als abgeschlossenen Specialist-Check. |

Die Inline-Strecke ist nur für eine vollständige, begrenzte Tabelle geeignet, deren Nachweisumfang angegeben ist; Es ist kein allgemeiner Ersatz für die Dateilinie.

Bezugsnummer der Durchführung: [ComposerAgentControlsMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [SpecialistSubmenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx).
