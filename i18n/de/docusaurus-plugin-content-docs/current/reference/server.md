---
title: "Headless Service und Browserzugriff"
last_update:
  date: '2026-09-14'
---

# Headless Service und Browserzugriff {/* #headless-service-and-browser-access */}

Der lokale Dienst bietet ein Headless-Backend und eine Localhost-Browser-Schnittstelle. Es unterscheidet sich von einem SSH Compute-Host und von der Remote.It-Browserpaarung. Wählen Sie die Authentifizierungs- und Credential-Storage-Einstellungen für den Host aus, bevor Sie einen Client verbinden.

## Zielauswahl und -entdeckung {/* #target-selection-and-discovery */}

| Wähle | Anwendungsbereich |
| --- | --- |
| `--port PORT` | Übersteuern des Localhost-Service-Ports; gültige ganze Zahl 1–65535 |
| `--app-path PATH` | Wählen Sie eine ausführbare installierte Anwendung aus; Verwenden Sie den ausführbaren Pfad, nicht einen beliebigen Projektordner |
| `--config-root PATH` | Config-Override von Entwicklungs-Bauten; verpacktes Startup lehnt es ab |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | Explizite Konfigurationserkennung überschreibt, wo unterstützt |
| Automatische Entdeckung | Probieren Sie die Entwicklungskonfiguration vor der Produktion aus und überspringen Sie tote / ungesunde Kandidaten |

Ein expliziter Konfigurationsspeicherort beschränkt die Erkennung auf dieses Verzeichnis. Überprüfen Sie den Status für das vorgesehene Profil, bevor Sie es starten oder stoppen. Wenn der Status `running:false` zurückgibt, folgen Sie den folgenden Lifecycle-Befehlen: Ein offenes Desktop-Fenster kann einen anderen Dienst / ein anderes Profil verwenden.

Die Dienstzustandsdatei ist `web-service.json`. Der Authentifizierungsfehler ist keine Berechtigung, den aufgezeichneten Prozess zu beenden. Der Shutdown-Code bewahrt ungesunde Live-Datensätze für die Diagnose und vermeidet die Signalisierung einer PID, die möglicherweise durch einen anderen Prozess wiederverwendet wurde.

## Initialisierung und Prüfung der Bereitschaft {/* #readiness */}

Verwenden Sie `open-science init`, um das Standard-Konfigurationsverzeichnis vorzubereiten, ohne die App zu starten. `--profile` Alias `--config-root` nur, wo Entwicklungsprofil-Overrides unterstützt werden; die Packed-Build-Beschränkung nicht umgeht. Debian-Pakete installieren das CLI neben der Anwendung. Siehe [Terminaleinrichtung](cli.md#terminal-setup) für Codex-Vorbereitung und -Login.

Führen Sie nach einem beabsichtigten `start --no-open` `open-science doctor --json` aus. Überprüfen Sie insgesamt `ready`, individuelle Prüfungen und Vorschläge für die nächsten Aktionen; Der Prozess-Exit-Code allein ist kein Bereitschaftsurteil. Behalten Sie den Dienst auf seiner vorhandenen authentifizierten lokalen Schnittstelle. Das Starten dieses Headless-Dienstes konfiguriert Remote.It nicht oder veröffentlicht keinen öffentlichen Endpunkt.

## Lifecycle-Befehle {/* #lifecycle-commands */}

| Befehl | Ergebnis | Optionen und Grenzen |
| --- | --- | --- |
| `open-science start` | Starten Sie das Backend und öffnen Sie den Browser | Standard-Port 44100 |
| `open-science start --no-open` | Starten Sie, ohne einen Browser zu öffnen | Verwendung für eine absichtliche lokale Servicesitzung |
| `open-science status --json` | Druckmaschinenlesbarer Servicezustand | Ein fehlender Service kehrt zurück `{"running":false}` und Ausstiegscode 1 |
| `open-science url` | Drucken Sie die authentifizierte Browser-URL | Enthält die lokale Zugangsbehörde; Nicht in veröffentlichte Beispiele einfügen |
| `open-science stop` | Anfordern authentifizierter Graceful Shutdown | Signalisiert nicht blind eine PID aus einer veralteten Zustandsdatei |
| `open-science stop --json` | Melden Sie das Abschaltungsergebnis | Siehe die Ergebnistabelle unten |

Unter diesen Befehlen ist **Status und Stop Support `--json`; Start und URL nicht**. Der lokale `start --json`-Check hat `invalid_cli_usage` mit dem Ausstiegscode 2 zurückgegeben, bevor er etwas gestartet hat. Führen Sie für einen Skriptstart `start --no-open` und dann `status --json` aus.

### Shutdown Ergebnisse {/* #shutdown-outcomes */}

| JSON `result` | Bedeutung |
| --- | --- |
| `already-stopped` | Kein Live-Service-Rekord gefunden |
| `daemon-stopped` | Authentifizierter Standalone-Daemon beendet |
| `web-service-stopped` | Attached Web-Service gestoppt; Desktop-Applikation läuft weiter |

Eine abgelehnte Anfrage oder verpasste Abschaltungsfrist gibt einen Fehler zurück. Lesen Sie den Fehler und prüfen Sie den tatsächlichen Zielzustand. Melden Sie einen Dienst nicht als angehalten, nur weil der Befehl zurückgegeben wurde.

## Authentifizierung und Browserzugriff {/* #authentication-and-browser-access */}

Der SDK entdeckt den lokalen Dienst und liest sein lokales Authentifizierungstoken und sendet es in Anfrage-Headern. Gewöhnliche menschliche / JSON/JSONL-Task-Ausgabe druckt dieses Token nicht aus. `url` ist die absichtliche Ausnahme, die einen authentifizierten Browsereintrag erzeugt.

Ein localhost-dienst ist nicht automatisch von einem anderen computer aus zugänglich. Der Remote-Browserzugriff verwendet einen eigenen konfigurierten Zugriffsmodus, eine Pairing- und vertrauenswürdige Browser-Lebenszyklus. SSH Compute sendet stattdessen Jobs an konfigurierte Remoteausführungs-Hosts.

Verwenden Sie [Remote-Browserzugriff](../guides/remote-access.md) für Remote.It-Paarung und [Remote Compute](../guides/remote-compute.md) für SSH-Jobs. Kein Flow wird konfiguriert, indem die Dokumentations-URL des lokalen Dienstes geändert wird.

### Credential Storage auf Headless Linux {/* #credential-storage-on-headless-linux */}

Der Standard ist OS-geschützter Speicher. Auf einem Linux Headless Backend ohne verwendbaren Keyring wählen Sie eine explizite Alternative:

<p className="example-label"><strong>Beispiel</strong> Starten Sie einen Linux Headless-Dienst mit Dateinachweisspeicher</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| Wahlmöglichkeit | Verhalten |
| --- | --- |
| Ausgelassene Option / --credential-store=os | Erfordern Sie den OS-geschützten Speicher |
| --credential-store=file | Erlauben Sie unverschlüsselte Einstellungen verwaltete Geheimnisse nur auf Linux headless |
| Desktop, macOS oder Windows Launch | Dateimodus wird nicht unterstützt |
| Bereits laufendes Backend | Ausdrückliche Moduswahl wird abgelehnt; Es ändert nicht den Modus dieses Prozesses |
| Nächstes Startup | Geben Sie den Modus erneut an; Es ist keine gespeicherte Präferenz |

Der Dateimodus verwendet settings.json und credentials.json unter der Konfigurationswurzel, mit atomaren Schreibvorgängen und POSIX-Modus 0600. Der Wert file:v1: ist base64-codiert, **nicht verschlüsselt**. Jeder, der es lesen kann, kann das Geheimnis wiederherstellen; schließen diese Dateien aus Repositories, Bildern und Support-Berichten aus.

Die Auswahl gilt für neue/aktualisierte, von Einstellungen verwaltete Provider-Schlüssel, App-verwaltete Abonnement-Token, GitHub/Literatur-Schlüssel und freigegebene MCP/OAuth-Geheimnisse. Compute-Passwörter/geschützte Compute-Daten behalten ihre separaten OS-Speicheranforderungen bei; externe Agent-Framework-Login-Stores folgen ihren eigenen Regeln. Keine Sandbox wird durch diese Option deaktiviert.

Vorhandene verschlüsselte Werte werden nicht automatisch migriert und erfordern immer noch ihren ursprünglichen OS-Tresor. Wenn nicht verfügbar, geben Sie das Anmeldeformular durch das normal unterstützte Formular erneut ein. Datei-Refs erfordern einen expliziten Dateimodus zum Lesen und sind mit älteren Releases nicht kompatibel. Um einen Berechtigungsnachweis an den OS-Speicher zurückzugeben, starten Sie im OS-Modus neu und ersetzen Sie ihn explizit, während der Tresor verfügbar ist.

Verwenden Sie persistenten Speicher, wenn die Konfiguration den Containerwechsel überleben muss. Shutdown behält die Konfiguration bei; Ersetzen eines Einweg-Container-Dateisystems kann es entfernen. Siehe [Credential-Lagervertrag](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md).

## Anwendungsaktualisierungsverhalten {/* #application-update-behavior */}

`open-science update` aktualisiert die installierte Anwendung. Aktualisieren Sie den npm-Client separat. Der Befehl kann bei Bedarf einen lokalen Dienst starten und diesen Dienst danach verfügbar lassen.

| `update --json` Ergebnis | Auslegung |
| --- | --- |
| `up-to-date` | Keine neuere anwendbare Version gefunden |
| `install-started` | Updater akzeptierte die Installationshandoff; Die installierte Version wird durch diesen Aufruf nicht verifiziert |
| `manual-action-required` | Befolgen Sie den gemeldeten Installerpfad / nächsten Schritt |
| `blocked` | Aktive Forschung verhindert ein Update an Ort und Stelle; Inspektion `blockedBy` |

Der Support erfordert die Servicefähigkeit `update-cli-v1`. Ältere Installationen können eine manuelle Aktualisierung anstelle einer erratenen Remote-Prozedur erfordern. Bewahren Sie das gedruckte Ergebnis auf und überprüfen Sie die Anwendungsversion nach der Installation.

[Implementierung von Lifecycle und Discovery](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs), [Konfigurationserkennung](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs). Task-Flags und Exit-Codes siehe [CLI](./cli.md); für programmatische Aufrufe siehe [Aufgabe SDK](./api.md).
