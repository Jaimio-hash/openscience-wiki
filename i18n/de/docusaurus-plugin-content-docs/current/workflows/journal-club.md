---
title: "Bereiten Sie ein fokussiertes Journal-Club-Lesepaket vor"
last_update:
  date: '2026-09-16'
---

# Bereiten Sie ein fokussiertes Journal-Club-Lesepaket vor {/* #prepare-a-focused-journal-club-reading-pack */}

Beginnen Sie mit einer Forschungsfrage, finden Sie Papiere in Open-Science, speichern Sie ihre Volltexte und verwandeln Sie die gleichen Papiere in ein Diskussionspaket. Für den Suchschritt wird kein heruntergeladenes PDF benötigt. Volltextlesen beginnt erst, nachdem die PDFs gespeichert und geöffnet wurden.

<p className="example-label"><strong>Praxisbeispiel</strong> Finden und lesen Sie fünf Papiere auf Single-Atom-Katalyse</p>

**Frage:** Welche Beweise verbinden isolierte Metallstandorte mit nützlicher katalytischer Leistung? In diesem Beispiel werden 2017-2022-Primärstudien zu Synthese, thermischer Stabilität, Mechanismus und Scale-up durchsucht. Es produziert eine Fünf-Papier-Bibliothekssammlung, ein Volltext-Lesepaket, eine fünfreihige Papierkarte und eine 60-Minuten-Agenda. Die letzten fünf Papiere unten sind die gleichen, die in den gespeicherten Ausgaben verwendet werden.

## Suche nach einem Thema {/* #search-from-a-topic */}

1. Öffnen Sie ein Gespräch in Ihrem Projekt und wählen Sie ein Arbeitsmodell mit Suchwerkzeugen aus. Lassen Sie den Befestigungsbereich leer.
2. Beschreiben Sie die wissenschaftliche Frage, Periode und Papierart. Fragen Sie nach einem Suchprotokoll und Kandidaten für die manuelle Überprüfung.
3. Senden Sie die Anfrage und erweitern Sie die Suchaktivität. Überprüfen Sie die Quelllinks und ob jedes Ergebnis Metadaten, einen Abstract oder Volltext enthält.

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![Das eigentliche Suchprotokoll mit Kandidatenidentitäten und Abrufstatus](/img/open-science/research-workflows/literature-topic-results.webp)

Der <a href="/docs/examples/research-workflows/single-atom-search-log.md" download>Erstes Suchprotokoll</a> zeichnet acht Kandidaten auf, die durch Websuche und Crossref-Metadaten gefunden wurden. Diese waren noch keine heruntergeladenen Papiere. Wenn eine Quelle Anmeldeinformationen benötigt, konfigurieren Sie [Konnektoren](../guides/connectors.md) oder bitten Sie den Agenten, eine verfügbare Quelle zu verwenden, und benennen Sie die Lücke.

## Überprüfen und speichern Sie die Kandidaten {/* #review-and-save-the-candidates */}

Öffnen Sie **Library → Inbox**. Wählen Sie einen Titel aus, um seine DOI, Autoren, Jahr und Herausgeberseite zu vergleichen. Akzeptieren Sie relevante Aufzeichnungen, lassen Sie unentschlossene anhängig und entlassen Sie irrelevante. **Search references** filtert die gespeicherte Bibliothek; Starten Sie die Online-Entdeckung im Gespräch.

Die erste Auswahl umfasste Papiere, deren Volltexte nicht hinzugefügt werden konnten. Um dieses Treffen durchweg lesbare Quellen verwenden zu lassen, behielt das Beispiel Lang bei und suchte nach vier Ersetzungen innerhalb desselben Themas:

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

Überprüfen Sie die <a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>Ersatzauswahlprotokoll</a>, wählen Sie dann die vier beabsichtigten Posteingangszeilen aus und wählen Sie **Accept**. Ein Open-Access-Source-Link muss noch getestet werden, indem sein PDF gespeichert und geöffnet wird.

![Vier Ersatzkandidaten für manuelle Akzeptanz ausgewählt](/img/open-science/research-workflows/journal-open-access-inbox.webp)

Erstellen Sie **Single-Atom Catalysis - Full-Text Journal Club** mit **New collection**. Wählen Sie in **All references** diese vier akzeptierten Datensätze plus Lang und dann **Add to collection** aus. Verwenden Sie **Add to project**, um das Set mit dem Projekt zu verknüpfen, das Ihre Konversation enthält.

| Papier | Fokus | PDF Seiten in diesem Lauf |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | Thermische Stabilität und Methanverbrennung | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Pt/Cu-Legierungen und Propan-Dehydrierung | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | Reversible Atom-Cluster-Änderungen und Reaktionswege | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | Kontinuierliche Vorbereitung und Scale-up | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | Ru-Koordination und reduktive Aminierung | 11 |

## Erhalten Sie den vollständigen Text für die ausgewählten Papiere {/* #obtain-full-text-for-the-selected-papers */}

1. Öffnen Sie eine Referenz und wählen Sie dann **Find full-text PDF**.
2. Überprüfen Sie die zurückgegebene Quelle und wählen Sie **Add attachment**. Warten Sie, bis eine Datei unter **Anhänge** erscheint.
3. Öffne diesen Anhang. Vergleichen Sie den Titel und DOI mit dem Datensatz und überprüfen Sie die Seitenzahl.
4. Wiederholen Sie für alle fünf Referenzen und öffnen Sie dann die Sammlung erneut. Jede Zeile sollte nun ein Attachment-Icon zeigen.

![Volltextquellen für das Lang Paper angeboten](/img/open-science/research-workflows/literature-topic-fulltext.webp)

In diesem Lauf wurde Langs PDF über Europe PMC hinzugefügt. Die anderen vier wurden aus Publisher-Quellen gerettet, die durch Unpaywall entdeckt wurden. Eine alternative Quelle kann erfolgreich sein, wenn eine andere Quelle nicht hinzugefügt werden kann. Wenn nötig, verwenden Sie **Open source**, um eine Kopie zu erhalten, auf die Sie zugreifen können, und fügen Sie sie **Add PDF** bei. Wenn keine lesbare Kopie verfügbar ist, ersetzen Sie die Auswahl oder markieren Sie sie, bevor Sie Volltextbefunde anfordern.

![Ein tatsächlich heruntergeladenes Papier öffnet sich in der englischen PDF-Vorschau](/img/open-science/research-workflows/journal-qi-pdf.webp)

Die endgültige Sammlung enthält fünf gespeicherte PDFs, wobei die Seite **10, 9, 11, 10 und 11** in der Reihenfolge der Tabelle zählt. Ein Attachment-Icon bestätigt eine gespeicherte Datei; Das Öffnen bestätigt, dass es lesbar ist und mit dem Datensatz übereinstimmt.

![Die letzte Fünf-Papier-Sammlung mit einem Anhang auf jeder Aufzeichnung](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## Lesen Sie die Volltexte und generieren Sie die Packung {/* #read-the-full-texts-and-generate-the-pack */}

Zurück zum Gespräch im verlinkten Projekt. Nennen Sie die abgeschlossene Sammlung explizit. Bitten Sie um Beweise aus den gespeicherten PDFs und trennen Sie die Bedingungen der verschiedenen Reaktionen:

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

Erweitern Sie während der Antwort die **Literaturbibliothek**-Leseaktivität, um zu prüfen, welches Papier und welche Passage abgerufen wurden. Dieser Lauf liest alle fünf gespeicherten PDFs. Die Leseaktivität unterscheidet sich von der früheren Metadatensuche. Wenn eine Lektüre fehlschlägt, lösen Sie sie oder halten Sie die Beweise dieses Papiers explizit nicht verfügbar.

Nach Abschluss öffnen Sie **single-atom-fulltext-reading-pack.md** von **Generated**. Überprüfen Sie die Fünf-Papier-Verifizierungstabelle, jeden Befund und seinen Locator, Einschränkungen, Fragen und Tagesordnung. Die Tagesordnung sollte insgesamt 60 Minuten.

![Das gespeicherte Volltextpaket mit den gleichen fünf Papieren und Quellprüfungen](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## Überprüfen Sie die Papierkarte mit den ursprünglichen PDFs {/* #check-the-paper-map-against-the-original-pdfs */}

Öffnen Sie **single-atom-fulltext-paper-map.csv** und verwenden Sie den Expand-Button für eine Vollbildansicht. Dieser Lauf enthält **Zeilen 5 · Spalten 12**. Vergleichen Sie das DOI-Set mit der Sammlung; Ein Pack aus einem anderen Set ist nicht das Ergebnis dieses Workflows. Scrollen Sie horizontal oder laden Sie das CSV herunter, um lange Zellen vollständig zu lesen.

![Die tatsächliche fünfreihige, zwölfspaltige Papierkarte](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

Kehren Sie zu **Library** zurück, öffnen Sie ein zitiertes PDF, klicken Sie auf den Seitenzähler, geben Sie die angeforderte Seite ein und drücken Sie **Enter**. Überprüfen Sie die Abbildung oder Tabelle zusammen mit der Beschriftung und dem umgebenden Text. Zum Beispiel ist He et al.'s Figure 5 auf **PDF Seite 7**; Die Beschreibung der Produktionslinie befindet sich auf Seite 3. Sie unterstützen verschiedene Teile der Zusammenfassung.

![Er et al.'s Figure 5 öffnete sich auf PDF Seite 7 zum Vergleich](/img/open-science/research-workflows/journal-he-figure5.webp)

Fordern Sie eine gespeicherte Revision an, wenn ein Locator oder eine Bedingung falsch ist, und öffnen Sie dann die überarbeitete Datei erneut. Die geprüfte Packung behält auch einen Konflikt bei Sun et al.: Seite 2 und die Abbildung 5 ergeben unterschiedliche Futterzusammensetzungen. Es zeichnet beide Beschreibungen auf, anstatt eine still zu wählen. Dies ist eine nützliche Besprechungsfrage, kein gelöstes experimentelles Detail.

Laden Sie die geprüften <a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>Lesepackung</a> und <a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>Papierkarte</a> herunter. Die gleichen fünf PDFs liegen beiden Dateien zugrunde. Für eine engere Single-Claim-Durchführung fahren Sie mit [Antrags- und Zahlenüberprüfung](pdf-evidence.md) fort.
