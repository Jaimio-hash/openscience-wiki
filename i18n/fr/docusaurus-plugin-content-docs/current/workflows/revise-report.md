---
title: "Réviser un rapport après les commentaires"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Réviser un rapport après les commentaires {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>Exemple pratique</strong> Réviser une séance d'information sur la catalyse d'un seul atom en fonction de six commentaires rédactionnels</p>

Une révision utile permet de conserver les preuves de la source, l'ébauche originale et la réponse aux commentaires. Cet exemple crée un briefing en anglais à partir d'un vrai document de catalyse, puis le révise sans écraser la première ébauche. Les six commentaires sont un exercice d'enseignement préparé pour ce passage, et non la correspondance de la revue ou des auteurs du papier.

## 1. Joindre le document et rédiger un premier projet {/* #1-attach-the-paper-and-create-a-first-draft */}

Ouvrez [Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0), téléchargez le PDF principal et ses Informations supplémentaires de l'éditeur, et joignez les deux à **+ → Attach files** dans une conversation de projet. Les fichiers enregistrés ont **9 et 52 Pages PDF**, respectivement. Les numéros de page ci-dessous renvoient à la page PDF, et non à une page de journal imprimée.

Sélectionnez un modèle disponible, puis envoyez :

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

![Les PDF source et la demande initiale de briefing en Open-Science](/img/open-science/workflow-extensions/report-input.png)

Approuver le fichier pertinent sur demande. Ouvrez **catalyst-brief-v1.md** depuis **Generated** ou **Files** et lisez le brouillon enregistré. Une réponse dans la conversation n'est pas un substitut à l'inspection du fichier réel.

![Le premier projet sauvegardé avant la révision rédactionnelle](/img/open-science/workflow-extensions/report-draft.png)

## 2. Faire en sorte que la rétroaction puisse donner lieu à une action {/* #2-make-the-feedback-actionable */}

Téléchargez <ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">les six observations rédactionnelles</ExampleDownload> et joignez-le dans la même conversation. Les commentaires demandent:

| Commentaire | Changement demandé |
| --- | --- |
| C1 | Un résumé de pas plus de 120 mots |
| C2 | Une table à deux rangées séparant les deux points de fonctionnement |
| C3 | Demandes d ' indemnisation en cas d ' absence d ' une personne se limitant aux éléments de preuve effectivement inspectés |
| C4 | Trois contrôles de suivi proposés, clairement pas des expériences déjà réalisées |
| C5 | Explicite Main PDF / Pages supplémentaires PDF et localisateurs de figures |
| C6 | Séparer les fichiers v2 et les fichiers de réponse, en préservant v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

La révision réelle lisait le fichier de commentaires ci-joint et produisait les deux types de produits livrables demandés. Si l'Agent propose des modifications non étayées, nommez la revendication et le passage source pour vérifier avant de les accepter.

## 3. Lisez les preuves révisées, et pas seulement l'état de la réponse {/* #3-read-the-revised-evidence-not-just-the-response-status */}

Ouvrez **catalyst-brief-v2.md**. Cette opération a produit un **Sommaire des mots 117**, une table de deux lignes et trois propositions de suivi étiquetées.

![Le résumé révisé et le tableau qui sépare la sélectivité de la durabilité](/img/open-science/workflow-extensions/report-revised.png)

La distinction clé est **98.9% CO Efficacité Faradaic à −1.2 V vs RHE** par rapport à un **Essai de rétention de courant de 20 h à −0.8 V vs RHE** séparé. Ne les combinez pas en98.9% pour 20 Voir aussi le paragraphe 3 de l'annexe I. Main PDF Voir également l'arrêt de la Cour de justice dans l'affaire C-41/94, point 3 de l'arrêt du Tribunal de première instance, précité, point 3 de l'arrêt du Tribunal de première instance, précité. 6, Fig. 6b–d, et p. 7, Fig. 6e, identifier les éléments de preuve pertinents; Voir également l'arrêt de la Cour de justice dans l'affaire C-41/94, point 3 de l'arrêt du Tribunal de première instance, précité, point 3 de l'arrêt du Tribunal de première instance, précité, point 3 de l'arrêt du Tribunal de première instance, précité, point 3 de l'arrêt du Tribunal de première instance, précité, point 3 de l'arrêt du Tribunal de première instance, précité. 8 décrit les mesures des cellules H. Supplémentaire PDF pp. 47–48, Fig. 51–52, concernent la sélectivité de l'hydrogène et les contrôles des produits RMN.

Dans cette exécution, l'Agent pouvait lire les passages en texte intégral et les légendes des figures, mais le cache de figure-élément lié n'était pas disponible pour une inspection directe de l'image. Sa réponse enregistre cette limitation. La diminution qualitative actuelle suit le texte des auteurs; Aucune nouvelle valeur n'a été numérisée à partir de l'intrigue. Suivez [vérifier les demandes d'indemnisation contre les preuves PDF](pdf-evidence.md) lorsque vous avez besoin d'une inspection directe des figures.

## 4. Vérifiez la réponse et retirez les trois versions {/* #4-check-the-response-and-hand-off-all-three-versions */}

Ouvrez **catalyst-brief-v2-response.md**. Localiser C1–C6, ouvrir chaque section modifiée nommée et confirmer qu'elle contient réellement le changement promis. Un seul label "Résolu" est insuffisant.

![Le tableau des réponses enregistrées permet de cartographier les six commentaires dans les sections révisées.](/img/open-science/workflow-extensions/report-response.png)

Vérifier que les propositions restent étiquetées comme des propositions, que le DOI reste **10.1038/s41467-019-12510-0**, et que le **catalyst-brief-v1.md** demeure inchangé. La réponse doit indiquer toute preuve qui n'est pas disponible.

Téléchargez les enregistrements <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 projet</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">Réunion d'information v2</ExampleDownload> et <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">réponse aux observations</ExampleDownload>. Gardez-les avec le fichier de commentaires et les liens de l'éditeur. L'ébauche originale est incluse aux fins de comparaison et ne devrait pas être utilisée comme séance d'information finale.
