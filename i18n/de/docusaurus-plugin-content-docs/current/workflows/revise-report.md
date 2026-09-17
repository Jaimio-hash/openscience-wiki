---
title: "Überarbeiten eines Berichts nach Feedback"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Überarbeiten eines Berichts nach Feedback {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>Praxisbeispiel</strong> Überarbeiten eines Ein-Atom-Katalyse-Briefings gegen sechs redaktionelle Kommentare</p>

Eine nützliche Überarbeitung hält den Quellenbeweis, den Originalentwurf und die Antwort auf Kommentare in Verbindung. Dieses Beispiel erstellt ein englisches Briefing aus einem echten Katalysepapier und überarbeitet es dann, ohne den ersten Entwurf zu überschreiben. Die sechs kommentare sind eine lehrübung, die für diesen walkthrough vorbereitet wurde, nicht die korrespondenz der zeitschrift oder der autoren der zeitung.

## 1. Befestigen Sie das Papier und erstellen Sie einen ersten Entwurf {/* #1-attach-the-paper-and-create-a-first-draft */}

Öffnen Sie [Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0), laden Sie das Haupt-PDF und seine ergänzenden Informationen vom Publisher herunter und fügen Sie beide über **+ → Attach files** in einer Projektkonversation hinzu. Die aufgezeichneten Dateien haben jeweils **9 und 52 PDF Seiten**. Die Seitenzahlen unten beziehen sich auf die PDF-Seite, nicht auf eine gedruckte Zeitschriftenseite.

Wählen Sie ein verfügbares Modell aus und senden Sie dann:

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Die Quell-PDFs und erste Briefing-Anfrage in Open-Science](/img/open-science/workflow-extensions/report-input.webp)

Genehmigen Sie die entsprechende Datei liest, wenn angefordert. Öffnen Sie **catalyst-brief-v1.md** aus **Generated** oder **Files** und lesen Sie den gespeicherten Entwurf. Eine Antwort im Gespräch ist kein Ersatz für die Überprüfung der eigentlichen Datei.

![Der gespeicherte erste Entwurf vor der redaktionellen Überarbeitung](/img/open-science/workflow-extensions/report-draft.webp)

## 2. Machen Sie das Feedback umsetzbar {/* #2-make-the-feedback-actionable */}

Laden Sie <ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">Die sechs redaktionellen Kommentare</ExampleDownload> herunter und fügen Sie es im selben Gespräch an. In den Stellungnahmen wird Folgendes gefordert:

| Anmerkungen | Beantragte Änderung |
| --- | --- |
| C1 | Eine Zusammenfassung von nicht mehr als 120 Wörtern |
| C2 | Eine zweireihige Tabelle, die die beiden Betriebspunkte trennt |
| C3 | Fehlende Ansprüche beschränkt auf die tatsächlich überprüften Beweise |
| C4 | Drei vorgeschlagene Folgekontrollen, eindeutig keine bereits durchgeführten Experimente |
| C5 | Explizite Main PDF / Ergänzende PDF Seite und Figur Locators |
| C6 C6 | Separate v2- und Response-Dateien, Erhaltung von v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

Die eigentliche Revision las die angehängte Kommentardatei und produzierte beide angeforderten Lieferarten. Wenn der Agent nicht unterstützte Änderungen vorschlägt, nennen Sie den Anspruch und die Quellpassage, um sie zu überprüfen, bevor Sie sie akzeptieren.

## 3. Lesen Sie die revidierten Beweise, nicht nur den Antwortstatus {/* #3-read-the-revised-evidence-not-just-the-response-status */}

Öffnen Sie **catalyst-brief-v2.md**. Dieser Lauf ergab einen **117-Wortzusammenfassung**, eine zweireihige Betriebspunkttabelle und drei gekennzeichnete Folgevorschläge.

![Die überarbeitete Zusammenfassung und die Tabelle, in der die Selektivität von der Dauerhaftigkeit getrennt wird](/img/open-science/workflow-extensions/report-revised.webp)

Die Hauptunterscheidung ist **98.9% CO Faradaic Effizienz bei -1.2 V vs RHE** gegenüber einem separaten **20 h Stromhaltetest bei -0.8 V vs RHE**. Kombinieren Sie sie nicht in "98.9% für 20 h." Main PDF p. 6, Fig. 6b–d und p. 7, Fig. 6e die einschlägigen Nachweise zu nennen; p. 8 beschreibt die H-Zell-Messungen. Ergänzende PDF pp. 47–48, Fig. 51–52 betreffen Wasserstoffselektivität und NMR-Produktprüfungen.

In diesem Durchlauf konnte der Agent die Volltextpassagen und Bildunterschriften lesen, aber der verknüpfte Bildelement-Cache war für die direkte Bildinspektion nicht verfügbar. Seine Antwort zeichnet diese Einschränkung auf. Die qualitative aktuelle Abnahme folgt dem Text der Autoren; Es wurde kein neuer Wert aus dem Plot digitalisiert. Folgen Sie [Überprüfen Sie Ansprüche gegen PDF Beweise](pdf-evidence.md), wenn eine direkte Figureninspektion erforderlich ist.

## 4. Überprüfen Sie die Antwort und geben Sie alle drei Versionen ab {/* #4-check-the-response-and-hand-off-all-three-versions */}

Öffnen Sie **catalyst-brief-v2-response.md**. Suchen Sie C1–C6, öffnen Sie jeden benannten überarbeiteten Abschnitt und bestätigen Sie, dass er tatsächlich die versprochene Änderung enthält. Ein "Resolved"-Label allein ist unzureichend.

![Die gespeicherte Antworttabelle bildet alle sechs Kommentare zu überarbeiteten Abschnitten ab](/img/open-science/workflow-extensions/report-response.webp)

Prüfen Sie, ob die Vorschläge als Vorschläge gekennzeichnet bleiben, der DOI bleibt **10.1038/s41467-019-12510-0** und **catalyst-brief-v1.md** existiert unverändert. In der Antwort sollten alle Beweise angegeben werden, die nicht verfügbar sind.

Laden Sie die aufgezeichneten <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 Entwurf</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 Briefing</ExampleDownload> und <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">Antwort auf die Stellungnahmen</ExampleDownload> herunter. Behalten Sie sie mit der Kommentardatei und den Publisher-Links. Der ursprüngliche Entwurf ist zum Vergleich enthalten und sollte nicht als endgültiges, überprüftes Briefing verwendet werden.
