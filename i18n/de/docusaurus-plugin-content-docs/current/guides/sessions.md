---
title: "Sitzungen und Verzweigungen"
last_update:
  date: '2026-09-16'
---

# Sitzungen und Verzweigungen {/* #sessions-and-branches */}

Ein Projekt gruppiert verwandte Quellen und Arbeiten. Eine Sitzung ist ein Gespräch in ihm. Verwenden Sie eine neue Sitzung für eine separate Frage und eine Verzweigung, wenn die neue Frage einen ausgewählten Konversationsverlauf beibehalten soll. Weder ist ein ersatz für die Überprüfung, welche dateien und ausführungsaufzeichnungen die neue konversation tatsächlich zugreifen kann.

## Erstellen, Namen und Rückkehr zu einer Sitzung {/* #create-name-and-return-to-a-session */}

Öffnen Sie das Projekt, wählen Sie **New** unter Sessions, geben Sie eine Anfrage ein und senden Sie sie. Überprüfen Sie zuerst den Projektnamen: Eine neue Sitzung gehört zu diesem Projekt. Wählen Sie eine Sitzungszeile, um zu ihr zurückzukehren; Lesen Sie seinen Status, bevor Sie annehmen, dass die Aufgabe beendet ist.

<p className="example-label"><strong>Beispiel</strong> Nennen Sie eine RNA-seq-Qualitätskontrollsitzung</p>

Für den abgeschlossenen GSE60450-Lauf haben wir **Edit…** verwendet, um diese Informationen zu speichern:

| Feld | Beispielwert | Zwänge |
| --- | --- | --- |
| Titel | `RNA-seq count matrix - validation and sample QC` | Bis zu 80-Zeichen; Der Editor zeigt die Zählung |
| Beschreibung | `Validate the public GSE60450 matrix and retain descriptive QC outputs with source integrity checks.` | Bis zu 1,000-Zeichen |
| Speichern | Beharren Sie auf den Veränderungen | Überprüfen Sie den Sidebar-Titel nach dem Schließen |
| Stornieren / Schließen | Verlassen Sie den Entwurf ohne Anwendung | Dies storniert den Forschungslauf nicht |

![Sitzungstitel und Beschreibungseditor](/img/open-science/guides-walkthrough/40-session-edit.png)

Wählen Sie **Pin** aus dem Zeilenmenü, um die Sitzung in der Angehefteten Gruppe beizubehalten. **Unpin** gibt es in die normale Liste zurück. Pinning organisiert den Zugriff; Es hält einen Kernel nicht am Leben oder schützt eine Sitzung vor dem Löschen.

Bewegen Sie den Mauszeiger über eine Sitzung, um die Nummer sowie den Titel und das Projekt zu überprüfen. Die Zahl hilft, ähnlich benannte Gespräche zu unterscheiden; Bestätigen Sie die ausgewählte Zeile, bevor Sie sie bearbeiten oder löschen.

## Speichern Sie ein Lese-Lesezeichen {/* #save-a-reading-bookmark */}

Verwenden Sie [Privatlesebuchzeichen](bookmarks.md), um eine Passage oder PDF-Region mit einer Notiz zu speichern, und kehren Sie dann in dieser Sitzung von **Bookmarks** zu ihr zurück. Das Speichern eines Lesezeichens sendet die Passage nicht an den Agenten.

## Lesen Sie das Sitzungsmenü richtig {/* #read-the-session-menu-correctly */}

![Aktionen, die zur RNA-seq-Sitzung gehören](/img/open-science/guides-walkthrough/41-session-actions.png)

| Aktion | Ergebnis | Überprüfung |
| --- | --- | --- |
| Bearbeiten… | Ändern Sie den Titel / die Beschreibung | Korrekte Zeile und gespeichertes Etikett |
| Alle Artefakte herunterladen | Öffnen Sie einen Artefaktauswahl-/Download-Fluss | Die gespeicherten Dateien dieser Sitzung und die angeforderte Auswahl |
| Notebook ansehen | Öffnen Sie die Ausführungsansicht der Sitzung | Eigentümer, Sprache und tatsächliche Runs |
| Konversation exportieren… | Exportieren Sie die Konversation durch das angebotene Format/Optionen | Transkriptexport unterscheidet sich von einem Artefakt/Notebook-Bundle |
| Archiv | Verstecken Sie die Sitzung vor der aktiven Navigation | Es bleibt wiederherstellbar in Einstellungen → Archiviert |
| Löschen | Eine permanente Löschungsbestätigung öffnen | Lesen Sie genau, welche Daten betroffen sind; Cancel bewahrt es |



## Verzweigen nach einem abgeschlossenen Ergebnis {/* #branch-after-a-completed-result */}

<p className="example-label"><strong>Praxisbeispiel</strong> Verzweigen einer abgeschlossenen QC-Sitzung für die Beispielannotation</p>

Angenommen, Sie möchten die nachgelagerte Beispielannotation besprechen, während Sie die fertige QC-Konversation mit Rohzählern intakt halten.

1. Öffnen Sie die ausgefüllte Antwort in der ursprünglichen Sitzung.
2. Wählen Sie **Branch in new session** unter dieser Antwort.
3. Bestätigen Sie, dass eine neue Sitzungszeile erscheint. Es kann zunächst den ursprünglichen Titel teilen.
4. Benennen Sie es in `GSE60450 - follow-up interpretation` mit **Edit…** um.
5. Überprüfen Sie das geerbte Transkript, bevor Sie die nächste Anfrage einreichen. Verweisen Sie auf die ursprünglichen Projektartefakte explizit, wo nötig.

![Ein unabhängig benannter Zweig neben dem gepinnten Original](/img/open-science/guides-walkthrough/57-session-branch.png)

Ein Branch behält den ausgewählten Konversationsverlauf bei, erstellt jedoch nicht den ursprünglichen Live-Kernel. Für eine kopierte Aktivität mit der Bezeichnung **code shown** oder einen blockierten historischen Link öffnen Sie das Original-Artefakt aus dem Dateien-Panel des Projekts und überprüfen Sie die Produktionssitzung.

Die Verfügbarkeit der Zweigstellen hängt von der Nachricht und dem Rahmenzustand ab. [Side Chat](delegation.md#side-chat-availability) ist separat. Eine neue Nebendiskussion erbt das aktuelle Modell und die Argumentationsbemühungen dieses Gesprächs; Sie können ein anderes modell für den nächsten send auswählen.

## Eine frühere Nachricht überarbeiten {/* #revise-an-earlier-message */}

**Edit message** erstellt auf einer früheren Benutzeranfrage eine Nachrichtenrevision, anstatt den gesamten Verlauf zu löschen. Lesen Sie den überarbeiteten Text und die Anhänge vor dem Einreichen. Verwenden Sie **Vorherige/Nächste Meldung Revision**, wo verfügbar, um Alternativen zu prüfen. Der später sichtbare Kontext hängt vom gewählten Pfad ab; Eine alte Antwort sollte nicht als Antwort auf eine neu bearbeitete Anfrage behandelt werden.

<p className="example-label"><strong>Praxisbeispiel</strong> Überarbeiten einer Anforderung für QC-Metrikdefinitionen</p>

Wählen Sie für dieses QC-Beispiel **Edit message** für die abgeschlossene Frage, ersetzen Sie die Ein-Satz-Anfrage durch vier Definitionen und wählen Sie **Send**. Revisionskontrollen sind nicht verfügbar, während die neue Antwort ausgeführt wird. Sobald es fertig ist, kehrt **Previous message revision** mit der ursprünglichen Frage und Antwort zu `1/2` zurück; **Next message revision** kehrt zur überarbeiteten Antwort zurück. Eine weitere Korrektur der genauen CSV-Feldnamen ergab `3/3`. In dieser Codex-Abonnementsitzung blieben die beiden Berichte, die vor der überarbeiteten Nachricht gespeichert wurden, verfügbar und ihre heruntergeladenen Bytes blieben unverändert.

Der gleiche Revisionspfad wurde auch mit OpenCode und einem lokalen Modell ausgeübt: Die überarbeitete Anforderung erzeugte den neuen Satz, Früher stellte die ursprüngliche Antwort wieder her und Nächste stellte die überarbeitete Antwort wieder her. Dieses reine Verbindungsbeispiel stellt nicht fest, dass der Werkzeugzustand oder externe Nebenwirkungen umgekehrt sind.

![Steuerelemente für den Wechsel von Revisionen historischer Nachrichten](/img/open-science/local-todo-batch/18-message-revision.png)

**Cancel** verlässt, ohne die Bearbeitung einzureichen. **Send** fordert eine neue Antwort an; Überprüfen Sie es, bevor Sie fortfahren. Verwenden Sie ein Follow-up, um die nächste Aktion oder einen Branch für eine separat benannte Untersuchung zu korrigieren.

## Forschungspakete {/* #research-packages */}

Um konversationszweige, dateien und beweise zusammen zu übergeben, verwenden sie einen [.science Forschungspaket](research-packages.md). Der Leitfaden umfasst Exportoptionen, Import und Inspektion, Read-Only-Sitzungen und Transfer Recovery.

## Exportieren von Gesprächen und Forschungsdateien {/* #export-conversations-and-research-files */}

Wählen Sie **Export → Export conversation…** aus dem Menü der Sitzungszeile, um eine Forschungsdiskussion zu teilen. Verwenden Sie zuerst **Edit…**, um der Sitzung einen prägnanten Titel zu geben: Der PDF-Export verwendet diesen Titel, und ein langer automatischer Titel kann einen Großteil der ersten Seite verbrauchen.

| Kontrolle | Aktion und Ergebnis |
| --- | --- |
| Format → PDF / Markdown | PDF zum Lesen und Drucken; Markdown für weitere Bearbeitung |
| Gesamte Konversation | Exportieren Sie den aktuellen Conversation Branch |
| Ausgewählt | Kontrollkästchen anzeigen, zunächst leer; Der Zähler folgt Ihrer Auswahl |
| Alles auswählen | Wählen Sie jede aufgelistete Runde aus |
| Export PDF / Export Markdown | Öffnen Sie den Systemspeicherdialog; nicht verfügbar, wenn keine Runden ausgewählt sind |
| Abbrechen | Schließen, ohne einen Export zu erstellen |

<p className="example-label"><strong>Praxisbeispiel</strong> Exportieren Sie nur die endgültige GSE60450 QC-Definitionsdrehung</p>

![Auswahl der endgültigen QC-Definitionen für den PDF-Export](/img/open-science/local-todo-batch/20-selected-conversation-export.png)

In **GSE60450 — Methods and claim audit** erzeugte das Auswählen des letzten Zuges ein einseitiges PDF, das nur diese Anforderung und ihre vier metrischen Definitionen enthielt. Frühere Diskussionen fehlten. Das gesamte Gespräch PDF wurde ebenfalls wieder geöffnet und überprüft. Der frühere Markdown-Export mit ausgewähltem Turn begann mit dem ausgewählten Follow-up. Eine Runde kann mehrere Hilfsnachrichten enthalten, so dass die Auswahl einer Runde nicht genau zwei Nachrichten exportieren muss.

Conversation Export ersetzt nicht den Download von Forschungsdateien. Ergebnislinks können sich auf interne Anwendungsaufzeichnungen beziehen, die ein Empfänger nicht öffnen kann. Laden Sie CSV, Zahlen oder Berichte separat herunter, wenn diese Dateien Teil der Übergabe sind.

### Sitzungsartefakte herunterladen {/* #download-session-artifacts */}

Wählen Sie **Download all artifacts**, wählen Sie die Dateien aus, wählen Sie **Download N Artefakte** und wählen Sie einen Zielordner aus. Dieser Eintrag speichert separate Dateien. Die beiden heruntergeladenen Methoden und Claim-Audit-Markdown-Dateien wurden wieder geöffnet und ihre gespeicherten Artefakte Byte für Byte abgeglichen.

![Auswählen der beiden gespeicherten Berichte in der Sitzung](/img/open-science/local-todo-batch/21-session-artifact-selection.png)

### Download eines Projektdatei-Bundles {/* #download-a-project-file-bundle */}

Öffnen Sie oben links das Menü Projektname → **Download artifacts…**. Dateien werden unter **Generated** und **Uploads** gruppiert. Alle sind zunächst ausgewählt; Verwenden Sie **Uncheck all**, wählen Sie die zu übergebenden Dateien aus und speichern Sie den ZIP.

![Auswählen von Berichten, der QC-Tabelle und der ursprünglichen Anzahleingabe aus dem Projekt](/img/open-science/local-todo-batch/22-project-artifact-selection.png)

Wählen Sie **Cancel** im Systemspeicherdialog, um dieses Speichern aufzugeben; Ihre Dateiauswahl bleibt verfügbar. Sobald das schreiben beginnt, deaktiviert die app die stornierung und das schließen. Warten Sie auf das Ergebnis; Das Abbrechen des Zieldialogs unterscheidet sich vom Stoppen eines laufenden Schreibens.

Wenn nur einige Dateien heruntergeladen wurden, stellen Sie den Zugriff auf die nicht verfügbaren Quelldateien wieder her, wählen Sie dann die vollständige beabsichtigte Übergabe aus und laden Sie sie erneut herunter. Das Speichern auf den gleichen ZIP-Namen ersetzt das vorherige Archiv. Durch Auswählen von nur fehlgeschlagenen Dateien wird ein neues Paket erstellt, das nur diese Dateien enthält; Sie werden nicht an den früheren ZIP angehängt.

Öffnen Sie den heruntergeladenen ZIP und vergleichen Sie Dateizahlen, Namen und Inhalte unter `generated/` und `uploads/` mit Ihrer Auswahl, bevor Sie sie teilen. Dieses Bundle ist kein Backup des vollständigen Projekts, des Konversationsverlaufs, des Notebook-Kernels oder der Laufzeit.

## Archivieren und Wiederherstellen eines fertigen Branchs {/* #archive-and-restore-a-finished-branch */}

Wählen Sie **Archive** auf dem beabsichtigten Branch und öffnen Sie dann **Settings → Archived → Sessions**. Überprüfen Sie die Projekt- und Archivzeit, bevor Sie **Restore** auswählen. Bestätigen Sie, dass der Branch zur aktiven Navigation zurückkehrt und seine gespeicherten Inhalte geöffnet werden; Das ursprüngliche Gespräch ist getrennt.

Verwenden Sie für ein archiviertes Projekt den **Manage**-Eintrag und prüfen Sie die Sitzungen des Projekts. Siehe [Lagerung und archivierte Arbeiten](storage.md) für den Unterschied zwischen Archivierung, Wiederherstellung, Löschung und Speicherverlagerung. Das Verschwinden einer Sitzung aus der aktiven Liste ist kein Beweis dafür, dass der Speicherplatz zurückgewonnen wurde.

Quellen: [Session Editor](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/EditSessionDialog.tsx), [Implementierung von Arbeitsbereichen](https://github.com/aipoch/open-science/tree/v0.26.0/src/renderer/src/pages/workspace).
