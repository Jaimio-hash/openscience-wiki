---
title: "Vérificateurs scientifiques"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Vérificateurs scientifiques {/* #scientific-viewers */}

Ouvrir un fichier à partir d'une pièce jointe, d'un résultat enregistré ou de Fichiers. L'extension détermine le rendu. Un aperçu montre le contenu fourni; il n'exécute pas de prédiction scientifique ou n'établit pas que le résultat est correct.

## Inspecter une véritable structure de l'APB {/* #inspect-a-real-pdb-structure */}

<p className="example-label"><strong>Exemple pratique</strong> Inspecter la structure du 1UBQ</p>

La démonstration utilise la [Structure du RCSB 1UBQ ubiquitine](https://www.rcsb.org/structure/1UBQ) originale, téléchargée sous la forme de <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb</ExampleDownload>. Dans cet exemple, son aperçu natif a affiché **atomes de 660**.

1. Ouvrez le PDB téléchargé, puis sélectionnez **Open full screen preview**.
2. Interruptez **Cartoon**, **Stick**, **Sphere**, **Surface** et **Line** pour inspecter différentes représentations.
3. Faites glisser pour tourner, faites défiler pour zoomer, ou **Maj + traînée** pour lancer, comme indiqué sous la toile.
4. Téléchargez le fichier original au besoin. Fermez l'écran complet pour revenir à la conversation.

![La vue réelle 1UBQ Cartoon](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.webp)

| Style | Ce qu'il souligne |
| --- | --- |
| Ruban | Représentation de l'épine dorsale et de la structure secondaire des polymères. Il peut ne pas être disponible pour une structure sans atomes de polymères appropriés. |
| Bâton | Obligations et géométrie locale. |
| Sphère | Des sphères centrées sur l'atome. |
| Surface | Représentation moléculaire de la surface. |
| Ligne | Une représentation d'obligations plus légère. |

La représentation contrôle le rendu des changements tout en préservant les coordonnées. Comparer la structure fournie et ses métadonnées lors de la vérification des résidus manquants ou de la confiance dans les prévisions.

## Lire une séquence FASTA {/* #read-a-fasta-sequence */}

<p className="example-label"><strong>Exemple pratique</strong> Lire la séquence de protéines P04637</p>

Ouvrez <ExampleDownload path="/examples/capabilities/P04637.fa">P04637 FASTA</ExampleDownload>, téléchargé depuis [Le paramètre FASTA d'UniProt](https://rest.uniprot.org/uniprotkb/P04637.fasta). Inspectez l'adhésion/organisme/genre dans l'en-tête `>` et la séquence ci-dessous. Le rendu natif conserve le texte source; il ne s'agit pas d'une application d'alignement ou d'édition de séquences.

![L'UniProt FASTA réel dans l'aperçu source](/img/open-science/capabilities-walkthrough/31-fasta-preview.webp)

Pour utiliser la séquence dans une conversation, joignez le fichier actuel avec **+ → Attach files** et demandez à l'agent de lire le fichier plutôt que de déduire de son nom. Pour cette entrée P04637, vérifiez l'en-tête `P53_HUMAN`, **Acides aminés 393** et la séquence initiale **MEEPQSDPSV**. Comparez la somme de contrôle déclarée avec le fichier que vous avez fourni lorsque l'identité compte.

Si une requête modèle renvoie **Le fichier géré ou sa session est supprimé**, rebranchez le fichier courant dans un message normal et réessayez. Si elle persiste, conservez l'erreur pour [Dépannage](../guides/troubleshooting.md). Un aperçu de travail ne garantit pas la validité de la référence model-input.

## Aperçu d'une molécule {/* #preview-a-molecule */}

<p className="example-label"><strong>Exemple pratique</strong> Aspirine sensible de SMILES</p>

Demandez au Molecule Connector d'exécuter `preview_molecule` avec `smiles: "CC(=O)Oc1ccccc1C(=O)O"` et `filename: "aspirin"`. Ouvrez la carte **aspirine.mol** générée et l'aperçu plein écran.

![Aspirin rendu par le visionneur OpenChemLib intégré](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.webp)

Dans cet exemple, l'appel a retourné une structure valide, la formule **C9H8O4**, le poids moléculaire **180.15852** et **13 atomes lourds**, et a enregistré <ExampleDownload path="/examples/capabilities/aspirin.mol">aspirine.mol</ExampleDownload>. Le spectateur a été ouvert et inspecté manuellement. c'est le rendu de structure hors ligne; il ne prédit pas l'affinité de liaison, les poses d'amarrage ou l'activité thérapeutique.

## Choisir un rendu scientifique {/* #choose-a-scientific-renderer */}

| Entrée | Quoi inspecter? |
| --- | --- |
| APB | atomes parsés, disponibilité de la représentation et coordonnées originales |
| MOL/SDF/SMILES/RXN | la structure ou le rendu des réactions; un contenu invalide ou tronqué peut échouer |
| FASTA et les fichiers de séquences connexes | En-tête original, identité de la séquence et étendue |
| Contenants binaires analytiques tels que H5AD/H5 | Utiliser une bibliothèque d'analyse compatible; l'aperçu du texte ordinaire ne décode pas le conteneur |

Les contrôles partagés de la barre d'outils et la lecture de PDF, Office, image et texte source sont documentés dans [Aperçus](../guides/previews.md). L'interprétation des données appartient à [Tableaux](tables.md); les extensions et limites exactes appartiennent à [Formats de fichiers](../reference/formats.md).

## Erreurs d'aperçu {/* #preview-failures */}

Vérifiez le fichier original et l'erreur exacte du rendeur. Une structure sans atomes de polymères appropriés ne peut offrir une vue cartoon; changement de représentation ne peut pas restaurer les coordonnées manquantes. Gardez les octets originaux lors de l'essai d'un visionneur externe. Un aperçu réussi n'établit pas qu'un modèle peut ingérer la pièce jointe, ou qu'un programme de prédiction est installé.
