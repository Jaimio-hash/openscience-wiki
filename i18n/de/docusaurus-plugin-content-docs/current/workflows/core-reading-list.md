---
title: "Erstellen Sie eine Kernleseliste für ein neues Forschungsthema"
last_update:
  date: '2026-09-16'
---

# Erstellen Sie eine Kernleseliste für ein neues Forschungsthema {/* #build-a-core-reading-list-for-a-new-research-topic */}

Um Artikel zu einem Forschungsthema zu finden, folgen Sie dem [Journal-Club-Ablauf für die thematische Suche](journal-club.md). Das folgende PRISMA-Beispiel beginnt mit drei bekannten DOIs und zeigt, wie Sie diese Einträge prüfen, speichern und lesen.

<p className="example-label"><strong>Praxisbeispiel</strong> Erstellen Sie eine PRISMA-Lesesammlung</p>

Sie bereiten eine systematische Überprüfung vor und benötigen eine kleine, vertretbare Anfangssammlung, bevor Sie breit lesen. Diese Lösung erstellt ein PRISMA-Reporting-Guidance-Paket aus drei veröffentlichten Artikeln, überprüft die Entdeckungen des Agenten, verknüpft akzeptierte Datensätze mit einem Projekt und fügt ein offen verfügbares PDF hinzu.

**Lieferbar:** eine Sammlung von Bibliotheken mit drei Datensätzen, die mit dem Forschungsprojekt verbunden ist, eine überprüfte Volltextanhänge und ein Leselisten-Artefakt, dessen Metadaten Sie vor der Wiederverwendung überprüfen. Dies ist eine Seed-Sammlung, keine erschöpfende Suche oder Evidenzsynthese.

Ersetzen Sie für Ihr eigenes Thema die Seed Papers und Sammlungs- / Projektnamen; Überprüfen Sie die tatsächlichen Metadaten jedes Papiers und den verfügbaren Volltext.

## Quellen und Zubereitung {/* #sources-and-preparation */}

Verwenden Sie eine Arbeitsmodellverbindung und eine englische Anwendungsschnittstelle. Das Beispiel verwendete ein Codex-Abonnement. Erstellen Sie **PRISMA - Systematic review reading pack** mit [Projekte und Quellordner](../guides/projects.md).

| Papier | DOI | Rolle in der Packung |
| --- | --- | --- |
| Page et al., 2021, *Die PRISMA 2020-Erklärung: Eine aktualisierte Richtlinie für die Berichterstattung über systematische Überprüfungen* | `10.1371/journal.pmed.1003583` | aktualisierte Leitlinien für die Berichterstattung; Das 2020 des Titels ist nicht das Veröffentlichungsjahr. |
| Moher et al., 2009, *Bevorzugte Berichtselemente für systematische Reviews und Meta-Analysen: Die PRISMA-Erklärung* | `10.1371/journal.pmed.1000097` | Historische Aussage. |
| Liberati et al., 2009, *Die PRISMA Erklärung ... Erklärung und Ausarbeitung* | `10.1371/journal.pmed.1000100` | Historische Erklärung; ein separates Papier mit einer anderen Autorenliste. |

Die Verlagsseiten legen die bibliographischen Identitäten fest: [2021-Erklärung](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583), [2009-Erklärung](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097) und [2009 Erklärung](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100).

## 1. Bitten Sie um eine begrenzte Kandidatenliste {/* #1-ask-for-a-bounded-candidate-list */}

Geben Sie in **Ask anything** eine Anforderung mit Bezeichnern, einem Ziel und einer Stoppbedingung ein:

```text
Build a core reading list for our systematic-review reporting project.
Look up only these DOIs:
10.1371/journal.pmed.1000097
10.1371/journal.pmed.1000100
10.1371/journal.pmed.1003583
Use the literature library tools to retrieve bibliographic metadata and
stage the records for my Inbox review. Do not accept candidates for me.
Save reading-list.md with each title, authors, year, DOI, source URL and
suggested reading order. Label the 2009 papers as historical. Do not
claim to have read full text unless you actually retrieved it.
```

Wählen Sie das beabsichtigte Modell, lassen Sie **Ask for approval** aktiviert und wählen Sie **Send message**. Erweitern Sie die Tool-Aktivität, wenn Sie überprüfen müssen, was angefordert wurde. Der Lauf muss möglicherweise ein relevantes Skill lesen, bevor Sie nach Papieren suchen; Ein Skill-Name in der Agentenprosa beweist nicht, dass seine Anweisungen geladen wurden.

Wenn **Save to Literature Inbox?** erscheint, überprüfen Sie die Operation und autorisieren Sie das beabsichtigte Speichern. Das Speichern von Kandidaten unterscheidet sich von der Annahme in Ihrer Bibliothek.

![Erlaubnis, Literaturkandidaten zu inszenieren](/img/open-science/prisma-walkthrough/03-inbox-save-approval.png)

## 2. Überprüfen Sie jeden Kandidaten vor der Annahme {/* #2-review-each-candidate-before-accepting */}

Öffnen Sie **Library → Inbox**. In diesem Lauf zeigte das Abzeichen **3**, und jede Zeile zeigte einen Titel, erste Autoren, Veröffentlichungsjahr und **Gefunden via crossref**.

![Drei echte PRISMA-Papiere warten auf Überprüfung](/img/open-science/prisma-walkthrough/04-inbox-three-papers.png)

1. Wählen Sie den Kandidatentitel aus, um die Details zu öffnen.
2. Überprüfen Sie **Provider**, seinen Quelllink und **Identifiers → DOI** gegen das beabsichtigte Papier.
3. Vergleichen Sie die Bestellung des Autors, das Jahr und die Veröffentlichung mit dem Publisher-Record. Ähnliche Titel stellen nicht fest, dass zwei Aufzeichnungen dasselbe Papier sind.
4. Wählen Sie **Accept**, wenn die Identität übereinstimmt. Der Kandidat verschwindet aus dem Posteingang und wird zu einem Bibliotheksdatensatz.
5. Wiederholen Sie für die anderen beiden. Das Badge wechselte von 3 zu 2 zu 1; Der Endzustand war **Inbox is clear**.

![Die Crossref-Quelle eines Kandidaten und das genaue DOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.png)

| Posteingangskontrolle | Ergebnis | Einsatzmöglichkeiten |
| --- | --- | --- |
| Titel des Bewerbers / **View details** | Öffnet Anbieter- und Identifikatornachweise. | Bevor Sie ein unbekanntes oder mehrdeutiges Papier annehmen. |
| **Accept** | Befördert den Kandidaten in die Bibliothek. | Sie haben ihre Identität und Relevanz überprüft. |
| **Dismiss** | Entfernt den Kandidaten aus der Warteschlange für die ausstehende Überprüfung. | Es ist irrelevant oder sollte nicht in die Sammlung eingehen; Metadaten werden nicht repariert. |
| **Search references** | Verengt die aktuelle Ansicht. | Suchen Sie einen Bezeichner oder Titel in einem größeren Batch. |
| Zeile Kontrollkästchen / **Select all** | Wählen Sie Kandidaten für verfügbare Batch-Aktionen aus. | Erst nach Überprüfung der beabsichtigten Auswahl; Der Walkthrough wird individuell akzeptiert. |

## 3. Machen Sie die Sammlung nützlich für ein Projekt {/* #3-make-the-collection-useful-to-a-project */}

Erstellen Sie eine Sammlung mit dem **New collection**-Steuerelement der Seitenleiste:

- **Name:** `PRISMA reporting - Core reading`.
- **Beschreibung:** gibt an, dass es aktualisierte und historische Berichtsleitlinien enthält. Die Beschreibung ist Organisationstext, nicht Agent Anweisungen.
- Wählen Sie **Create collection**; Name ist erforderlich, während Beschreibung optional ist. **Cancel** und **Close** verwerfen den Entwurf.

![Eine zweckspezifische Lesesammlung](/img/open-science/prisma-walkthrough/06-create-collection.png)

In **All references** suchen Sie `PRISMA`. Bestätigen Sie, dass genau die drei beabsichtigten Datensätze sichtbar sind, aktivieren Sie deren Kontrollkästchen und verwenden Sie **Add to collection → PRISMA reporting - Core reading**. Die Operation löscht die Auswahl. Wählen Sie die drei Datensätze erneut aus und verwenden Sie dann **Add to project → PRISMA - Systematic review reading pack**.

Öffnen Sie die Sammlung und überprüfen Sie die drei Datensätze. Öffnen Sie ein Referenzdetail, um zu bestätigen, dass sowohl die Checkboxen für das Projekt als auch für die Sammlung ausgewählt sind. Dies sind Links zu freigegebenen Datensätzen, nicht drei zusätzliche Kopien der Bibliographie.

![Die abgeschlossene Drei-Papier-Sammlung](/img/open-science/prisma-walkthrough/07-core-reading-collection.png)

## 4. Nutzbarer Volltext beifügen {/* #4-attach-usable-full-text */}

Öffnen Sie das 2021-Papier und wählen Sie **Find full-text PDF**. Der Lookup hat Europe PMC in diesem Lauf zurückgegeben. Überprüfen Sie **Open source**, bevor Sie **Add attachment** auswählen.

![Eine entdeckte Volltextquelle](/img/open-science/prisma-walkthrough/08-full-text-source.png)

Die Quelle war auffindbar, aber **Add attachment** gab **PDF could not be added** zurück. Die Nachricht listet mögliche Ursachen auf, einschließlich Anmeldeanforderungen, abgelaufene Links und das 50-MB-Limit; Es wird nicht identifiziert, welche Ursache hier aufgetreten ist.

Um wiederherzustellen, laden Sie das offen verfügbare PDF aus dem [Herausgeber Artikelseite](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583) herunter. Kehren Sie zur gleichen Referenz zurück und verwenden Sie **Add PDF**. Wählen Sie die heruntergeladene Datei aus und öffnen Sie dann **Preview prisma-2020-statement.pdf** unter Attachments. Die erfolgreich angehängte Datei zeigte **806.1 KB** und eine **15-Seite**-Vorschau. Überprüfen Sie den Titel und DOI auf Seite eins gegen den Datensatz.

![Publisher PDF erfolgreich angehängt und geöffnet](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.png)

Ein sichtbares Quellergebnis ist kein angehängtes PDF. Ein angehängtes PDF ist kein Beweis dafür, dass der Agent es gelesen hat. **Read with agent** ist eine separate Aktion, die Lesekontext für eine nachfolgende Anforderung liefert.

<span id="5-audit-the-generated-reading-list" />

## 5. Überprüfen und speichern Sie die Leseliste {/* #5-check-and-save-the-reading-list */}

Öffnen Sie **reading-list.md** und vergleichen Sie jeden Titel, jede Autorenliste, jedes Veröffentlichungsdatum und jeden DOI mit den oben genannten Herausgeberseiten. Verwenden Sie den <a href="/docs/examples/prisma/core-reading-list.md" download>Beispiel für geprüfte Leselisten</a> als Referenz. Dieser Download ist eine kuratierte Bibliographie; Es ist getrennt von den früheren gespeicherten Versionen der Anwendung.

1. Für die aktualisierte Erklärung behalten Sie das Veröffentlichungsjahr **2021** bei, obwohl der Titel PRISMA 2020 sagt.
2. Behalten Sie für die 2009-Anweisung die vier einzelnen Autoren **und die PRISMA Group** bei. Verwenden Sie **Name type → Organization** für die Gruppe in Bibliothek Metadaten.
3. Für die 2009-Erklärung, behalten Sie eine eigene Zehn-Autoren-Liste; Kopieren Sie die Autoren der Erklärung nicht.
4. Wenn der generierte Bericht abweicht, korrigieren Sie den Bibliothekseintrag und fordern Sie dann explizit eine neue verwaltete Version von **reading-list.md** an, die diese korrigierten Datensätze verwendet.
5. Öffne die neue Datei erneut und überprüfe alle drei Einträge und ihre DOI-Links, bevor du sie herunterlädst. Durch das Aktualisieren von Metadaten allein wird ein gespeicherter Bericht nicht neu geschrieben.

Beantragen Sie eine Korrektur wie:

```text
Regenerate reading-list.md from the three accepted records. Preserve their
separate complete author lists, including the organization author The PRISMA
Group for DOI 10.1371/journal.pmed.1000097. Use 2021 as the publication year of
the PRISMA 2020 statement. Keep all DOI and publisher links. Save a new managed
version and reopen it. Describe metadata lookup and available attachments
accurately; do not claim full-text analysis.
```

## Akzeptanz-Checkliste und Umfang {/* #acceptance-checklist-and-scope */}

- Die Sammlung und das Projekt zeigen jeweils die drei beabsichtigten Aufzeichnungen.
- Jedes DOI öffnet das passende Papier; Die beiden 2009-Papiere behalten unterschiedliche Autoren.
- Das Veröffentlichungsjahr der aktualisierten Erklärung ist 2021.
- Die PDF-Vorschau wird geöffnet und entspricht dem 2021-Eintrag; fehlgeschlagene Downloads werden nicht als Anhänge gezählt.
- Reading-List-Text unterscheidet Metadaten-Lookup, manuelle Akzeptanz und jede tatsächliche Volltextlesung.

Diese Sammlung unterstützt eine begrenzte Leseaufgabe. Eine umfassende Datenbanksuche, Volltextsynthese und eine abgeschlossene systematische Überprüfung erfordern zusätzliche Methoden und Nachweise.

Verwenden Sie für ein neues Leseset [Name type → Organisation](../guides/library.md#inspect-and-correct-metadata) für Unternehmensautoren, regenerieren und überprüfen Sie dann die Bibliographie. Für einen geerbten PDF-Ordner folgen Sie [Chargeneinfuhr](../guides/library.md#add-or-import-a-record), bevor Sie das Set überprüfen. Das Aktualisieren eines Bibliotheksdatensatzes schreibt das gespeicherte Leselistenartefakt nicht automatisch um.
