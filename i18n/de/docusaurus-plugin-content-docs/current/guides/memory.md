---
title: "Gedächtnis und Konversationskontext"
last_update:
  date: '2026-09-10'
---

# Gedächtnis und Konversationskontext {/* #memory-and-conversation-context */}

Speichern von wiederverwendbaren Notizen; Das Kontextfenster ist das Material, das einer bestimmten Modellanforderung zur Verfügung steht. Eine gespeicherte Notiz ist kein Beweis dafür, dass ein Agent sie zurückgerufen hat, und eine sichtbare alte Nachricht ist kein Beweis dafür, dass die gesamte ursprüngliche Geschichte in die nächste Anfrage passt.

Verwenden Sie eine Kategorie für dauerhafte Konventionen wie die Erhaltung der Rohzahl und die Trennung der Genlänge von der Probenzahl. Aktivieren Sie den Speicher und den automatischen Rückruf der Kategorie, wenn Sie diese Konventionen für neue Anforderungen bereitstellen möchten.

## Erstellen einer Kategorie und Notiz {/* #create-a-category-and-note */}

<p className="example-label"><strong>Praxisbeispiel</strong> Speichern und Abrufen einer RNA-seq-Berichtskonvention</p>

1. Öffnen Sie **Settings → Memory → New category**.
2. Geben Sie `RNA-seq methods` als **Name** ein. Beschreiben Sie in **When should the agent save a note here?**, wann eine bestätigte Methode in diese Kategorie gehört.
3. Setzen Sie **Auto-recall** absichtlich. Dieses Beispiel ließ es für eine manuell gepflegte Methodenanmerkung aus.
4. Wählen Sie **Create**, dann **Add**. Geben Sie die Notiz ein und wählen Sie **Save**.
5. Lassen Sie die Kategorie und öffnen Sie sie erneut, um ihren Inhalt und ihre Zählung zu überprüfen.

![Kategoriename, Anleitung und Auto-Recall](/img/open-science/guides-walkthrough/17-memory-category.png)

Die gespeicherte Notiz lautet: „Behalten Sie die ursprüngliche GEO-Zählmatrix unverändert. Bewahren Sie Entrez-Gen-IDs als Text auf, halten Sie die Genlänge von der Probenzahl getrennt und notieren Sie die Eingabe SHA-256 mit jeder abgeleiteten Tabelle. „Dies ist eine Arbeitskonvention, keine Behauptung über Analyseergebnisse.

![Manuell gespeicherte Notiz, während der Speicher ausgeschaltet ist](/img/open-science/guides-walkthrough/18-memory-note.png)

| Kontrolle | Wirkung und Grenze |
| --- | --- |
| Speicherschalter | Aktivieren/Deaktivieren von Agentenspeichern und Abrufen. Off hält vorhandene Notizen und ermöglicht manuelle Bearbeitungen. |
| Kategoriereihe | Zeigen Sie die Notizen dieser Kategorie und zählen Sie. Kategorien gruppieren projektübergreifendes Gedächtnis. |
| Projektansicht | Zeigen Sie projektbezogene Notizen; unterscheidet sie von einer globalen Kategorie. |
| Neue Kategorie | Name bis 64-Zeichen, Anleitung bis 1,000; maximale 10 benutzerdefinierte Kategorien. |
| Add / Memory Note | Erstellen Sie eine Notiz mit bis zu 4,000-Zeichen. Leerer Text hält Speichern nicht verfügbar. |
| Erinnerung kopieren | Kopieren Sie den Text. |
| Anmerkung bearbeiten → Speichern / Abbrechen | Beharren Sie auf überarbeitetem Text oder verwerfen Sie diese Bearbeitung. |
| Category Actions → Edit | Ändern Sie den Namen, die Anleitung und den Auto-Recall einer benutzerdefinierten Kategorie. |
| Category Actions → Auto-Recall | automatische Einbeziehung der Steuerung für diese Kategorie; Der Hauptspeicherschalter gilt weiterhin. |

**About you** ist eine eingebaute Kategorie. Seine Identität kann nicht wie eine benutzerdefinierte Kategorie bearbeitet oder entfernt werden.

## Speichern Sie eine Konvention aus einem Gespräch {/* #save-a-convention-from-a-conversation */}

1. Schalten Sie **Settings → Memory → Memory** ein. Öffnen Sie **RNA-seq methods → Category actions** und aktivieren Sie **Auto-recall**.
2. Bitten Sie den Agenten in Ihrem Projektgespräch, sich an eine bestätigte Konvention zu erinnern und die Kategorie zu benennen. Zum Beispiel: "Erinnern Sie sich an RNA-seq-Methoden: Für GSE60450 deskriptive QC, melden Sie Null-Count-Gene getrennt von nachgewiesenen Genen." Die beiden Zählungen müssen sich für jede Probe zu 27,179 addieren.
3. Überprüfen Sie die **Save memory**-Anforderung, wenn eine Genehmigung erforderlich ist. Überprüfen Sie den vorgeschlagenen Inhalt, die Kategorie und den Projektumfang, bevor Sie **Allow once** auswählen. Wählen Sie **Deny**, wenn es keine vereinbarte Konvention darstellt.
4. Öffnen Sie die Kategorie wieder. Überprüfen Sie, ob die Notiz vorhanden ist, den beabsichtigten Text hat und unter dem beabsichtigten Projekt erscheint. Das **auto**-Label identifiziert eine vom Agenten erstellte Notiz; Es bedeutet nicht, dass eine Berechnung die Konvention verifiziert.

![Eine von Agenten erstellte Berichtskonvention neben dem manuellen Quellschutzhinweis](/img/open-science/non-workflow-completion/05-memory-note-category.png)

## Rückruf in einem neuen Gespräch überprüfen {/* #check-recall-in-a-new-conversation */}

Starten Sie ein **Neues Gespräch im selben Projekt** und fragen Sie, welche gespeicherte Berichtskonvention gilt, ohne die Antwort zu liefern. Vergleichen Sie die Antwort mit Ihrer Notiz. Eine Frage im ursprünglichen Gespräch kann aus seiner bestehenden Geschichte beantwortet werden.

Schalten Sie den Hauptschalter **Memory** aus und wiederholen Sie die Frage in einem anderen neuen Gespräch. Überprüfen Sie, ob der Agent die Notiz nicht mehr über den Anwendungsspeicher erhält. Ihre gespeicherten Notizen bleiben in den Einstellungen. Durch das Ausschalten des Speichers wird keine Notiz gelöscht oder Text entfernt, der bereits in einer bestehenden Konversation vorhanden ist.

Das oben genannte Save folgte einer expliziten "Remember" -Anfrage. Es zeigt nicht, dass der Agent spontan jede nützliche Konvention identifizieren wird. Die Kontextverdichtung ist getrennt vom Speichern einer Speichernote.

## Inspizieren Sie den Konversationskontext {/* #inspect-conversation-context */}

Öffnen Sie in einer Sitzung den **Verwendeter Kontext**-Prozentsatz oder **Add menu → Context window**, wenn verfügbar. Untersuchen Sie **Current composition**, **History** und **Session call summary**. Zu den Kategorien können Systemaufforderung, Tools und Agenten, Nachrichten, Connectors und MCP, Skills und Framework-Overhead gehören.

Wählen Sie einen Historienpunkt aus, um den Lauf, das Modell, die Belegung und den Terminalzustand zu überprüfen. Lokale Schätzungen und von Anbietern gemeldete Messungen können sich unterscheiden; Nicht verfügbare Kategoriedetails sind keine Nullnutzung. Ein Verdichtungsmarker zeichnet ein Kontextereignis auf, nicht ein neues gespeichertes Artefakt oder Löschen jeder sichtbaren Nachricht. Manuelle Verdichtungssteuerungen hängen vom aktiven Rahmen ab.

Wenn OpenCode **Compact** im Kontext-Popover bereitstellt, wählen Sie es aus und warten Sie auf **Context compacted**. Originalnachrichten können sichtbar bleiben, während das Backend von einer Zusammenfassung aus fortgesetzt wird. Bevor Sie fortfahren, bitten Sie den Agenten, die beibehaltenen Einschränkungen aufzulisten und sie mit Ihren Anforderungen zu vergleichen. Geben Sie alle fehlenden oder falschen Einschränkungen erneut an, bevor Sie die nächste Operation starten. Die Verdichtung garantiert keine verlustfreie Aufbewahrung; Anbietermessungen können von lokalen Schätzungen abweichen.

![Abgeschlossene Verdichtung und die vom Anbieter gemeldete Kontextmessung](/img/open-science/non-workflow-completion/11-context-compacted.png)

Geben Sie für eine Fortsetzung das aktuelle Ziel, akzeptierte Entscheidungen, genaue Eingabe- / Ausgabedateien, bereits durchgeführte Validierung und ungelöste Fragen an. Verknüpfen Sie die gespeicherten Beweise, anstatt sich auf Memory zu verlassen, um sie zu rekonstruieren. Verwenden Sie [Sitzungen und Verzweigungen](./sessions.md) für Verzweigung / Export und [Verwendung](./usage.md) für kumulatives Token-Volumen.

## Löschen Sie nur den beabsichtigten Anwendungsbereich {/* #delete-only-the-intended-scope */}

**Delete note** entfernt eine Notiz nach der Bestätigung. **Delete category** entfernt die Kategorie und ihre Notizen; die betroffene Zählung zu überprüfen. **Clear all** entfernt benutzerdefinierte Kategorien und Notizen, während Über Sie beibehalten wird. Abbrechen, wenn der Umfang größer ist als beabsichtigt. Ältere Backups können weiterhin gelöschte Notizen enthalten.

Quellen: [Speicherschema](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts), [Speicherpanel](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx), [Kontextbetrachter](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx).
