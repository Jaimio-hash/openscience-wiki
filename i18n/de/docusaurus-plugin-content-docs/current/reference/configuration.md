---
title: "Konfiguration und Kontext"
last_update:
  date: '2026-09-10'
---

# Konfiguration und Kontext {/* #configuration-and-context */}

Diese Referenz trennt Projektkontext, New-Session-Standards und die Konfiguration einer bestehenden Sitzung. Verwenden Sie [Projekte](../guides/projects.md) oder [Provider-Einrichtung](../guides/providers.md) für die entsprechende Benutzeroberfläche.

## Kontext- und Konfigurationsbesitz {/* #context-and-configuration-ownership */}

| Wert | Eigentümer und Wirkung | nicht ersetzt |
| --- | --- | --- |
| Projekt **Name** | Projektanzeigename, erforderlich, maximale 200-Zeichen | Eine einzigartige Projekt-ID |
| Projekt **Description** | Beschreibung der Projektliste, maximale 1,000-Zeichen; nicht in der Agent-Eingabeaufforderung enthalten | Agent Anweisungen |
| Projekt **Agent Context** | Maximale 16,000-Zeichen; in neue und wieder aufgenommene Projektsitzungen aufgenommen und an den Modellanbieter gesendet | Credentials oder eine ausgeführte Task Request |
| Sitzung **Title** | Anzeigetitel, maximale 80-Zeichen | Projektkontext oder Zweigstellenkennung |
| Sitzung **Description** | Organisationsbeschreibung, maximale 1,000-Zeichen | Eine neue User Message |
| Modellanbieter | Verbindung, Konto und konfigurierter Modellkatalog | Einrichtung des Agentenrahmens |
| Agenten-Framework | Laufzeit zur Ausführung der Aufgabe | Notebook-Interpreter |
| Python/R Laufzeit | Interpreter für Notebook Ausführung | Ein Modell oder seine Argumentation-Aufwand-Einstellung |
| Erinnerungen | Gespeicherte Notizen mit eigenem Umfang und Rückrufkontrollen | Komplette Konversationsgeschichte |
| Fähigkeit | Wiederverwendbare Methodenanweisungen und Dateien | Eine bereits installierte Abhängigkeit oder gewährte Service Credential |

## Erweitert: Task API Konfiguration {/* #advanced-task-api-configuration */}

### Neue Sitzungen, die durch die Aufgabe API erstellt wurden {/* #new-sessions-created-through-the-task-api */}

Der Task Runner löst jedes Feld separat auf. Die folgende Priorität gilt für eine **neu** Task API-Sitzung, nicht rückwirkend für alle vorhandenen Desktop-Konversationen.

| Feld | Resolution, höchste Priorität zuerst |
| --- | --- |
| Genehmigungsprofil | Explizite Run Request → Project Session Defaults → Application Default → `ask` |
| Auto-Review | Explizite Anfrage → Projektstandard → `false` |
| Speicher aktiviert | Explizite Anfrage → Projektstandard → `true` |
| Delegationspolitik | Explizite Anfrage → Projektstandard → `allow` |
| Spezialist | Explizite Anfrage → Projektstandard beim Set |
| Anbieter/Modell/Gründung | Expliziter Konfigurationspatch über der Projektkonfiguration oder die effektive App / Provider-Konfiguration |
| Ausgewählte Compute Hosts | Explizite ausgewählte IDs → Projekt ausgewählte IDs |

Enabled Compute Hosts enthalten auch die ausgewählten IDs während der Neusitzungsvorbereitung. Eine explizit leere Enabled-Host-Liste löscht die geerbte Enabled-Liste, bevor ausgewählte Hosts enthalten sind. Für ein Update der Konfiguration einer bestehenden Sitzung muss jede ausgewählte ID im aktivierten Set vorhanden sein.

Verwenden Sie die [CLI](cli.md)- oder [Aufgabe SDK/API](api.md)-Referenz für die tatsächlichen Lese- / Aktualisierungsbefehle. Project Session Defaults sind ein Konfigurationsvertrag; Gehen Sie nicht davon aus, dass der Dialog Projekt Name/Beschreibung alle diese Felder ausstellt.

### Akzeptierte Konfigurationswerte {/* #accepted-configuration-values */}

| Feld | Angenommener Wert |
| --- | --- |
| `agentConfiguration.providerId` | Nicht leer konfigurierte Provider-ID |
| `agentConfiguration.model` | Fakultative Modellkennung; Ein Update-Patch kann verwendet werden `null` Zurücksetzen auf Provider Default |
| `agentConfiguration.reasoningEffort` | `default`, `low`, `medium`, `high`, `xhigh`, `max`; Ist die Auswahlmöglichkeit abhängig vom Anbieter/Modell |
| `permissionProfile` | `ask`, `auto`, `full` |
| `autoReviewEnabled` | Boolean |
| `memoryEnabled` | Boolean |
| `delegationPolicy` | `allow`, `deny` |
| `specialistId` bei Projektausfällen | Nicht-Leere-ID; kein Feld im gewöhnlichen Sitzungskonfigurationspatch |
| `computeHosts.enabled`, `.selected` | Arrays von nicht leeren Host-IDs; Ausgewählt muss eine Teilmenge von aktiviert sein |

Die Schemata lehnen unbekannte Felder ab. Die Anwesenheit eines angezeigten Modells garantiert nicht, dass es mit dem aktuellen Framework oder den aktuellen Anmeldeinformationen auswählbar ist. Verwenden Sie den konfigurierten Katalog und das Verfügbarkeitsergebnis.

### Provider-Standards und nicht verfügbare Konfigurationen {/* #provider-defaults-and-unavailable-configurations */}

Für einen Abonnementanbieter bleibt das Modell unbestimmt und behält den Konto- / CLI-eigenen Standard. Es wird nicht das erste im Katalog aufgeführte Modell angeheftet. Wenn eine gespeicherte Sitzungskonfiguration nicht mehr wählbar ist, kann der Renderer-Resolver die aktive wählbare App-Konfiguration verwenden; Wenn keines von beiden verfügbar ist, wird nicht verfügbar gemeldet. Überprüfen Sie das ausgewählte Modell beim Wiedereröffnen alter Arbeiten nach einem Anbieterwechsel.

### Aktualisierung und Wiederaufnahme der Regeln {/* #update-and-resume-rules */}

Lesen Sie die aktuelle Konfiguration einer vorhandenen Sitzung, bevor Sie sie bearbeiten. Fügen Sie seine **`expectedRevision`**, eine nicht negative Ganzzahl, mit dem Update hinzu. Der Server lehnt eine veraltete Revision als `session_revision_conflict` ab. Es lehnt auch Updates ab, während die Sitzung aktiv ist oder sich außerhalb des Idle-/Fehlerzustands befindet.

Für einen Anbieterwechsel ist entweder ein explizites Modell oder `model: null` erforderlich, um den Standard des neuen Anbieters auszuwählen. Das Weglassen des Modells beim Wechsel des Anbieters führt nicht stillschweigend das Modell eines alten Anbieters über. Ein Modell-Reset unterscheidet sich von einem leeren String.

Um Provider, Modell, Argumentationsaufwand, Speicher oder aktivierte Compute Hosts vor dem Wiederansetzen einer bestehenden Task API-Sitzung zu ändern, verwenden Sie zuerst den Vorgang zur Aktualisierung der Sitzungskonfiguration. Wenn Sie diese Erstellungszeitfelder in einer Lebenslaufanforderung angeben, wird `invalid_request` zurückgegeben. Das Arbeitsverzeichnis muss immer noch mit dem kanonischen Verzeichnis der Sitzung übereinstimmen.

Project-Default-Updates verwenden **`expectedUpdatedAt`**, einen positiven Ganzzahl-Zeitstempel aus dem aktuellen Projekt und einen Patch. Ein `null`-Projekt-Standardfeld entfernt diesen Override; Das Feld wegzulassen, bewahrt es. Das Aktualisieren von Standardeinstellungen regelt die zukünftige Sitzungserstellung und schreibt keine vorhandenen Ausgabenachweise neu.

## Host-Anweisungen und geheime Speicheroptionen {/* #host-instructions-and-secret-storage-choices */}

Gespeicherte Compute-Host-Anweisungen und erkannte Ressourcen sind getrennt. Ein leeres gespeichertes Anweisungsdokument unterscheidet sich von einer erfolgreichen Ressourcensonde. Agent-unterstützter Ersatz muss den aktuell gespeicherten Text als Schutz verwenden. Siehe [Angaben zum Gastgeber](../guides/remote-compute.md#keep-host-instructions-separate-from-detected-resources); Dieser interne Vertrag ist getrennt von der öffentlichen Aufgabe API.

Credential Storage ist eine Startup-Wahl, keine Projekt- / Sitzungspräferenz. Siehe [Linux Dateimodus](server.md#credential-storage-on-headless-linux) für Umfang, OS-Store-Standard und Migrationsgrenzen. Platzieren Sie kein Credential-Store-Flag in der Sitzungskonfiguration JSON.

## Verbundene Grenzen {/* #related-boundaries */}

Für Genehmigungsbereiche und Richtlinienreihenfolge verwenden Sie [Berechtigungen](permissions.md). Verwenden Sie für tragbare Skill/Specialist/Connector-Dokumente [Paketformate](packages.md). Ein Paketexport ist kein Dump der Sitzungskonfiguration oder gespeicherter Kontogeheimnisse. Für den Unterschied zwischen einer Desktop-Sitzung und dem lokalen Webdienst verwenden Sie [Kopfloser Dienst](server.md).

Quellen: [Basisvertrag](https://github.com/aipoch/open-science/commit/04adfd61), [Start-up-Anmeldemodus](https://github.com/aipoch/open-science/commit/3411d23c).

Technische Referenz: [Projektaufträge](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [Konfigurationsschemata](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [Task-Runner-Lösung](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [Anbieter-Fallback](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
