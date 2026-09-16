---
title: "Wissenschaftliche Zuschauer"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Wissenschaftliche Zuschauer {/* #scientific-viewers */}

Öffnen Sie eine Datei aus einem Anhang, einem gespeicherten Ergebnis oder Dateien. Die Erweiterung bestimmt den Renderer. Eine Vorschau zeigt den gelieferten Inhalt an; es führt keine wissenschaftliche Vorhersage durch oder stellt fest, dass das Ergebnis korrekt ist.

## Überprüfen Sie eine echte PDB-Struktur {/* #inspect-a-real-pdb-structure */}

<p className="example-label"><strong>Praxisbeispiel</strong> Überprüfen Sie die 1UBQ-Struktur</p>

Die Demonstration verwendet das Original [RCSB 1UBQ Ubiquitin-Struktur](https://www.rcsb.org/structure/1UBQ), das als <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb</ExampleDownload> heruntergeladen wurde. In diesem Beispiel zeigt die native Vorschau **660-Atome** an.

1. Öffnen Sie die hochgeladene PDB und wählen Sie dann **Open full screen preview**.
2. Schalten Sie **Cartoon**, **Stick**, **Sphere**, **Surface** und **Line**, um verschiedene Darstellungen zu inspizieren.
3. Ziehen Sie zum Drehen, scrollen Sie zum Zoom oder **Shift + Drag** zum Schwenken, wie unter der Leinwand angegeben.
4. Laden Sie die Originaldatei bei Bedarf herunter. Schließen Sie den Vollbildschirm, um zur Konversation zurückzukehren.

![Die aktuelle 1UBQ Cartoon Ansicht](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.jpg)

| Stil | Was es betont |
| --- | --- |
| Karikatur | Darstellung von Polymerrückgrat/Sekundärstruktur. Es kann für eine Struktur ohne geeignete Polymeratome nicht verfügbar sein. |
| Stäbchen | Bindungen und lokale Geometrie. |
| Kugel | Atomzentrierte Sphären. |
| Oberfläche | Molekulare Oberflächendarstellung. |
| Linie | Eine leichtere Bond Darstellung. |

Representation steuert das Rendering bei Beibehaltung der Koordinaten. Vergleichen Sie die gelieferte Struktur und ihre Metadaten, wenn Sie fehlende Rückstände oder das Vorhersagevertrauen überprüfen.

## Lesen Sie eine FASTA-Sequenz {/* #read-a-fasta-sequence */}

<p className="example-label"><strong>Praxisbeispiel</strong> Lesen Sie die P04637-Proteinsequenz</p>

Öffnen Sie <ExampleDownload path="/examples/capabilities/P04637.fa">P04637 FASTA</ExampleDownload>, heruntergeladen von [FASTA-Endpunkt von UniProt](https://rest.uniprot.org/uniprotkb/P04637.fasta). Inspizieren Sie den Beitritt/Organismus/Gen im `>`-Header und die Sequenz darunter. Der native Renderer bewahrt den Quelltext; Es handelt sich nicht um eine Sequenz-Alignment- oder Editing-Anwendung.

![Die eigentliche UniProt FASTA in der Quellvorschau](/img/open-science/capabilities-walkthrough/31-fasta-preview.jpg)

Um die Sequenz in einer Konversation zu verwenden, fügen Sie die aktuelle Datei mit **+ → Attach files** an und bitten Sie den Agenten, die Datei zu lesen, anstatt aus ihrem Namen zu schließen. Überprüfen Sie für diese P04637-Eingabe den `P53_HUMAN`-Header, **393 Aminosäuren** und die Anfangssequenz **MEEPQSDPSV**. Vergleichen Sie die gemeldete Prüfsumme mit der von Ihnen gelieferten Datei, wenn Identität von Bedeutung ist.

Wenn eine Modellanforderung **Verwaltete Datei oder deren Sitzung wird gelöscht** zurückgibt, fügen Sie die aktuelle Datei in einer normalen Nachricht erneut an und versuchen Sie es erneut. Wenn es weiterhin besteht, behalten Sie den Fehler für [Fehlerbehebung](../guides/troubleshooting.md). Eine Arbeitsvorschau garantiert nicht, dass die Modell-Eingabe-Referenz noch gültig ist.

## Vorschau eines Moleküls {/* #preview-a-molecule */}

<p className="example-label"><strong>Praxisbeispiel</strong> Aspirin von Smiles absetzen</p>

Bitten Sie das Molekül Connector, `preview_molecule` mit `smiles: "CC(=O)Oc1ccccc1C(=O)O"` und `filename: "aspirin"` auszuführen. Öffnen Sie die generierte **Aspirin.mol**-Karte und Vollbildvorschau.

![Aspirin gerendert vom eingebauten OpenChemLib Viewer](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.jpg)

In diesem Beispiel gab der Aufruf eine gültige Struktur zurück, Formel **C9H8O4**, Molekulargewicht **180.15852** und **13 schwere Atome** und speicherte <ExampleDownload path="/examples/capabilities/aspirin.mol">Aspirin.mol</ExampleDownload>. Der Betrachter wurde manuell geöffnet und inspiziert. Dies ist Offline-Struktur-Rendering; Es sagt keine Bindungsaffinität, Andockposen oder therapeutische Aktivität voraus.

## Wählen Sie einen wissenschaftlichen Renderer {/* #choose-a-scientific-renderer */}

| Eingabe | Was zu inspizieren |
| --- | --- |
| PDB | Parsed Atome, Repräsentation Verfügbarkeit und Original Koordinaten |
| MOL/SDF/LÄMMEL/RXN | Struktur- oder Reaktionswiedergabe; ungültiger oder verkürzter Inhalt kann fehlschlagen |
| FASTA- und zugehörige Sequenzdateien | Original-Header, Sequenzidentität und Umfang |
| Analytische Binärcontainer wie H5AD/H5 | Verwenden einer kompatiblen Analysebibliothek; Normale Textvorschau dekodiert den Container nicht |

Gemeinsame Symbolleistensteuerungen und PDF, Office, Bild- und Quelltextlesen werden in [Vorschau](../guides/previews.md) dokumentiert. Dateninterpretation gehört zu [Tabellen](tables.md); Genaue Erweiterungen und Grenzen gehören zu [Dateiformate](../reference/formats.md).

## Fehler in der Vorschau {/* #preview-failures */}

Überprüfen Sie die Originaldatei und den genauen Fehler des Renderers. Eine Struktur ohne geeignete Polymeratome bietet möglicherweise keine Cartoon-Ansicht; Eine veränderte Darstellung kann fehlende Koordinaten nicht wiederherstellen. Behalten Sie die Originalbytes beim Ausprobieren eines externen Viewers bei. Eine erfolgreiche Vorschau stellt nicht fest, dass ein Modell den Anhang aufnehmen kann oder dass ein Vorhersageprogramm installiert ist.
