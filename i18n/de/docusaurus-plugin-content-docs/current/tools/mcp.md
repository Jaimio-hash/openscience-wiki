---
title: "Konnektoren und MCP"
last_update:
  date: '2026-09-10'
---

# Konnektoren und MCP {/* #connectors-and-mcp */}

Ein Connector stellt Werkzeuge frei, die ein Agent aufrufen kann. Verwenden Sie diese Seite, um den Integrationstyp auszuwählen und die Bereitschaft zu verstehen. Für die Feld-für-Feld-Einrichtung, den Import/Export und das Verbindungsmanagement folgen Sie [Konfigurieren von Konnektoren](../guides/connectors.md).

<span id="inspect-an-existing-connector" />

<span id="connection-and-call-errors" />

## Wählen Sie einen Verbindungstyp {/* #choose-a-connection-type */}

| Typ | Verwenden Sie es, wenn | Anforderungen |
| --- | --- | --- |
| Eingebautes Connector | Die Anwendung stellt bereits die erforderliche Datenquelle oder den erforderlichen Betrieb bereit | Aktivieren Sie es für den beabsichtigten Agenten; Einige Dienste erfordern auch Anmeldeinformationen |
| Lokaler MCP Server | Ein Tool muss auf diesem Computer laufen oder lokal verfügbare Forschungsdaten lesen | Ein installierter Launcher, Server und erlaubte Eingabepfade |
| Remote MCP Server | Ein Dienst stellt seine Tools über einen gehosteten MCP-Endpunkt zur Verfügung | Der tatsächliche MCP-Endpunkt, unterstützter HTTP/SSE-Transport und jede erforderliche Authentifizierung |

**Molecule** bietet lokale Struktur-Rendering; Es ist keine Remote-Datenbank. Wählen Sie eine Quelle in [Wissenschaftliche Datenbanken](databases.md) oder verwenden Sie [Wissenschaftliche Zuschauer](viewers.md), um Molekül- und Sequenzdateien zu inspizieren. Durch die Auswahl eines Docker-Launchers wird keine Container-Engine oder ein Server-Image installiert.

## Unterscheiden Sie die Verbindung von der Verfügbarkeit {/* #distinguish-connection-from-availability */}

Überprüfen Sie diese Phasen in der Reihenfolge. Einen zu bestehen, stellt nicht fest, dass der nächste erfolgreich war.

| Phase | Was zu überprüfen ist | Nächste Maßnahme |
| --- | --- | --- |
| Konfiguration | Korrekter Launcher oder Endpunkt und erforderliche Authentifizierung | Füllen Sie die [Connector Formular](../guides/connectors.md) |
| Anschluss | Der Server reagiert und seine Tools werden entdeckt | Überprüfen Sie das Verbindungsergebnis und die tatsächlichen Fehler |
| Zugriff auf Agenten | Die Ressource ist für Main aktiviert oder dem beabsichtigten Specialist zugewiesen. | Überprüfen Sie die Fähigkeitsbindungen dieses Agenten |
| Vorgang | Das gewählte Tool akzeptiert die Anfrage und gibt die erforderlichen Daten zurück | Verwenden Sie die [Betriebsnummer](../reference/connector-operations.md) für eingebaute Inputs |
| Forschungsergebnisse | Zurückgegebene Identifikatoren, Quelle und Umfang passen zur Aufgabe | Überprüfen Sie die Antwort, bevor Sie sie als Beweismittel verwenden |

Ein aktivierter Switch ist kein erfolgreicher Serviceanruf. Eine Metadatenantwort ist keine heruntergeladene Volltext- oder Zählmatrix. Eine benutzerdefinierte Zeile kann ihren Konfigurationseditor öffnen; Einbaudetails geben die Werkzeugspezifikation an.

## Wählen Sie den nächsten Schritt {/* #choose-the-next-step */}

| Aufgabe | Main Anweisungen |
| --- | --- |
| Hinzufügen/Bearbeiten eines Servers, Importieren mehrerer Server oder Übertragen der Konfiguration | [Konfigurieren von Konnektoren](../guides/connectors.md) |
| API-Schlüssel oder OAuth-Zugangsdaten binden | [Dienstanmeldeinformationen](credentials.md) |
| Implementieren Sie einen kleinen Server und rufen Sie seine Tools auf | [Erstellen eines benutzerdefinierten Tools](custom.md) |
| Suchen Sie nach Datenbankbetriebsfeldern | [Connector Betriebsnummer](../reference/connector-operations.md) |
| Verwalten von Verbindungen aus Skripten | [CLI](../reference/cli.md#manage-connectors-and-credentials) oder [SDK](../reference/api.md#connector-management-methods) |

## Diagnose der fehlgeschlagenen Phase {/* #diagnose-the-failing-stage */}

Bei Verbindungsfehlern ist anzugeben, ob der Launcher, der Transport oder die Authentifizierung fehlgeschlagen sind. Wenn die verbindung erfolgreich ist, aber ein anruf fehlschlägt, überprüfen sie die verfügbarkeit des agenten und die argumente dieses tools, bevor sie die serverkonfiguration ändern. Melden Sie den tatsächlich zurückgegebenen Fehler mit [Fehlerbehebung](../guides/troubleshooting.md).

MCP Discovery wird während der Verbindung durchgeführt. `host.mcp("server", "tools/list", {})` ist kein Anwendungs-Tool-Aufruf und kann **unbekanntes Werkzeug** zurückgeben. Das benutzerdefinierte Beispiel tauchte auch auf einen internen Fehler mit unbekannter Stichprobe als `connector_unavailable`; Diese Reaktion allein unterscheidet eine ungültige Probe nicht von einem Transportfehler.
