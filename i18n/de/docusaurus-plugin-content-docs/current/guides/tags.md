---
title: "Organisieren mit Tags"
last_update:
  date: '2026-09-16'
---

# Organisieren mit Tags {/* #organizing-with-tags */}

Tags organisieren **Skills, Konnektoren, Spezialisten und Referenzen**. Sie sind kein universelles Label für jede Sitzung oder beliebige Festplattendatei. Verwenden Sie **Settings → Tags**, um Tags zu erstellen und die zugewiesenen Ressourcen zu durchsuchen.

Nachdem Sie ein Tag zugewiesen haben, öffnen Sie dessen Detail und wählen Sie eine aufgelistete Ressource aus, um zu ihr zurückzukehren. Das Entfernen der Tag-Zuweisung lässt die Ressource selbst an Ort und Stelle.

## Erstellen und Bearbeiten {/* #create-and-edit */}

1. Öffnen Sie **New Tag**, geben Sie einen Namen ein und wählen Sie dessen Icon und Farbe.
2. Wählen Sie **Create**. Überprüfen Sie die neue Zeile und den Null-Ressourcenzustand.
3. Wählen Sie **Edit Tag**, um die aktuellen Werte erneut zu überprüfen. **Save** verpflichtet eine Bearbeitung; **Cancel** verwirft den Entwurf.

![Transcriptomics-Tag-Formular](/img/open-science/guides-walkthrough/30-tag-create.png)

| Feld/Steuerung | Optionen und Verhalten |
| --- | --- |
| Name | erforderlich; Namen sind unabhängig vom Fall einzigartig. |
| Symbol | Tag, Stern, Lesezeichen, Flask, Buch, Datenbank, Code oder Bot. |
| Farbe | Grau, Rot, Orange, Bernstein, Grün, Blau, Purpur oder Pink. |
| Erstellen / Speichern | Erstellen eines neuen Tags oder Speichern der Bearbeitung eines vorhandenen Tags; leere Namen können nicht eingereicht werden. |
| Cancel / Zurück zu den Tags | Verlassen Sie das Formular, ohne den aktuellen Entwurf zu speichern. |

Wenn das Speichern **Konnte Tag nicht retten** zurückgibt, vergleichen Sie den Namen mit vorhandenen Tags, einschließlich Case-Only-Unterschieden, und versuchen Sie es erneut mit einem eindeutigen Namen. Dieser Fehler ist generisch; Es ist nicht von selbst die Ursache für jeden gescheiterten speichern.

## Zuweisen und Finden von Ressourcen {/* #assign-and-find-resources */}

Öffnen Sie die beabsichtigte Skill, Connector, Specialist oder Referenz und verwenden Sie das Tag-Steuerelement, um das Tag auszuwählen. Kehren Sie zu Einstellungen → Tags zurück und wählen Sie die Tag-Reihe aus. Lesen Sie die Ressourcenzählung und verwenden Sie dann **Filter resources by type** und **Search tagged resources** zusammen. Der Typ-Selektor bietet Alle Ressourcen, Skills, Konnektoren, Spezialisten und Referenzen. Deaktivieren Sie die Suche und setzen Sie den Typ zurück, wenn eine erwartete Ressource fehlt.

Geben Sie im Tag-Picker der Ressource **Tags durchsuchen** ein, verwenden Sie **↑ / ↓**, um durch Übereinstimmungen zu gehen, und **Enter**, um auszuwählen. Wenn der Name nicht existiert, wählen Sie **„Name erstellen**, um ihn zu erstellen und zuzuweisen. Überprüfen Sie das ausgewählte Tag nach dem Speichern.

Ein Tag-Name allein verbindet keinen Dienst, erteilt keine Berechtigung oder fügt einem Agenten ein Skill hinzu. Diese Kontrollen bleiben auf der Ressource und ihre Fähigkeit Bindungen.

<p className="example-label"><strong>Praxisbeispiel</strong> Suchen Sie Omics Archives durch ein Transcriptomics-Tag</p>

Weisen Sie **Transkriptomik** **Omics-Archive** zu und öffnen Sie dann das Tag-Detail. In diesem Beispiel zeigt es **1 Ressource**; Durch die Suche nach `Omics` bleibt das Connector sichtbar, und die Auswahl öffnet seine Details. Verwenden Sie Ihre eigenen Tag- und Ressourcennamen, wenn Sie diese Schritte wiederholen. Das Entfernen der Zuweisung lässt die Ressource intakt.

![Zugeordnete Omics Archives-Ressource durch ihren Tag gefunden](/img/open-science/guides-walkthrough/35-tagged-connector.png)

## Bestellen Sie die Tagliste {/* #order-the-tag-list */}

**Favorites** bleibt zuerst. Ziehen Sie **Reorder &#91;name&#93;** oder fokussieren Sie den Griff und verwenden Sie die Pfeiltasten, um ein benutzerdefiniertes Tag zu verschieben. Überprüfen Sie seine neue Position in der Liste.

![Tag-Ordering und leere Ressourcenansicht](/img/open-science/guides-walkthrough/31-tag-reorder.png)

## Entfernen eines Tags {/* #remove-a-tag */}

Wählen Sie **Delete Tag** und inspizieren Sie **Zu entfernende Aufgaben**. Das Löschen des Tags entfernt diese Zuweisungen, behält aber die Ressourcen. **Cancel** behält sowohl das Tag als auch seine Zuweisungen.

![Löschumfang, abgebrochen in diesem Walkthrough](/img/open-science/guides-walkthrough/32-tag-delete-boundary.png)

Wenn Ihr Zweck nur darin besteht, eine Zuweisung zu entfernen, tun Sie dies in der Ressource, anstatt das Tag überall zu löschen. Verwenden Sie [Literaturbibliothek](./library.md) zum Organisieren von Papieren in Sammlungen; Tags und Sammlungen dienen unterschiedlichen Zwecken.

Quellen: [Tags Panel](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx), [Ressourcenzuweisungen](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx).
