---
title: "Préparer un pack de lecture ciblé pour le club de journaux"
last_update:
  date: '2026-09-16'
---

# Préparer un pack de lecture ciblé pour le club de journaux {/* #prepare-a-focused-journal-club-reading-pack */}

Commencez par une question de recherche, trouvez des articles dans Open-Science, enregistrez leurs textes complets, et transformez les mêmes articles en un pack de discussion. Aucun PDF téléchargé n'est nécessaire pour l'étape de recherche. La lecture en texte intégral commence seulement après que les PDF ont été enregistrés et ouverts.

<p className="example-label"><strong>Exemple pratique</strong> Trouver et lire cinq documents sur la catalyse d'un seul atome</p>

**Question:** Quelles preuves relient des sites métalliques isolés à des performances catalytiques utiles? Cet exemple recherche les études primaires 2017–2022 portant sur la synthèse, la stabilité thermique, le mécanisme et l'échelle. Il produit une collection de cinq documents, un dossier de lecture en texte intégral, une carte papier de cinq pages et un ordre du jour de 60 minutes. Les cinq derniers documents ci-dessous sont les mêmes que ceux utilisés dans les sorties sauvegardées.

## Recherche à partir d'un sujet {/* #search-from-a-topic */}

1. Ouvrez une conversation dans votre projet et sélectionnez un modèle de travail avec des outils de recherche. Laissez la zone de fixation vide.
2. Décrivez la question scientifique, la période et le type de papier. Demandez un journal de recherche et des candidats pour l'examen manuel.
3. Envoyez la demande et élargissez l'activité de recherche. Vérifiez les liens sources et si chaque résultat contient des métadonnées, un résumé ou un texte complet.

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

![Le journal de recherche réel avec l'identité des candidats et l'état de recherche](/img/open-science/research-workflows/literature-topic-results.webp)

Le <a href="/docs/examples/research-workflows/single-atom-search-log.md" download>journal de recherche initial</a> enregistre huit candidats trouvés au moyen de la recherche sur le Web et des métadonnées Crossref. Ces documents n'étaient pas encore téléchargés. Si une source nécessite des identifiants, configurez [Connecteurs](../guides/connectors.md) ou demandez à l'Agent d'utiliser une source disponible et de nommer l'écart.

## Examiner et sauver les candidats {/* #review-and-save-the-candidates */}

Ouvrez **Library → Inbox**. Sélectionnez un titre pour comparer sa page DOI, les auteurs, l'année et l'éditeur. Accepter les dossiers pertinents, laisser les dossiers non résolus en suspens et rejeter les dossiers non pertinents. **Search references** filtre la bibliothèque enregistrée; commencer la découverte en ligne dans la conversation.

La première sélection comprenait des communications dont le texte intégral ne pouvait pas être ajouté. Pour faire en sorte que cette réunion utilise des sources lisibles tout au long de la séance, l'exemple a retenu Lang et a cherché quatre remplacements dans le même sujet :

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

Passez en revue le <a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>journal de sélection de remplacement</a>, puis sélectionnez les quatre lignes de boîte de réception prévues et choisissez **Accept**. Un lien source ouvert doit encore être testé en enregistrant et en ouvrant son PDF.

![Quatre candidats de remplacement sélectionnés pour une acceptation manuelle](/img/open-science/research-workflows/journal-open-access-inbox.webp)

Créer **Catalyse mono-atome - Club de Journal plein texte** en utilisant **New collection**. Dans **All references**, sélectionnez ces quatre enregistrements acceptés plus Lang, puis choisissez **Add to collection**. Utilisez **Add to project** pour lier l'ensemble au projet contenant votre conversation.

| Papier | Concentrez-vous | Pages PDF dans cette exécution |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | Stabilité thermique et combustion du méthane | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Alliages Pt/Cu et déshydrogénation du propane | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | Changements et voies de réaction réversibles entre les atomes et les groupes | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | Préparation et mise à niveau continues | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | Coordination de la Ru et amination réductrice | 11 |

## Obtenir le texte complet pour les documents sélectionnés {/* #obtain-full-text-for-the-selected-papers */}

1. Ouvrez une référence, puis choisissez **Find full-text PDF**.
2. Vérifiez la source retournée et choisissez **Add attachment**. Attendez qu'un fichier apparaisse sous **Pièces jointes**.
3. Ouvrez cette pièce jointe. Comparez son titre et DOI avec l'enregistrement, et vérifiez le nombre de pages.
4. Répéter pour les cinq références, puis rouvrir la collection. Chaque ligne devrait maintenant afficher une icône de pièce jointe.

![Sources en texte intégral offertes pour le papier Lang](/img/open-science/research-workflows/literature-topic-fulltext.webp)

Dans cette course, le PDF de Lang a été ajouté par l'intermédiaire d'Europe PMC. Les quatre autres ont été sauvés de sources d'éditeurs découvertes par l'intermédiaire de Unpaywall. Une autre source peut réussir lorsqu'une autre source ne peut pas être ajoutée. Si nécessaire, utilisez **Open source** pour obtenir une copie que vous avez le droit d'accéder et de la joindre à **Add PDF**. Si aucune copie lisible n'est disponible, remplacez la sélection ou marquez-la manquante avant de demander des résultats en texte intégral.

![Un papier effectivement téléchargé s'ouvre dans l'aperçu anglais PDF](/img/open-science/research-workflows/journal-qi-pdf.webp)

La collection finale contient cinq PDF enregistrés, avec le nombre de pages **10, 9, 11, 10 et 11** dans l'ordre du tableau. Une icône de pièce jointe confirme un fichier enregistré; l'ouverture confirme qu'elle est lisible et correspond au record.

![La dernière collection de cinq documents avec une pièce jointe sur chaque dossier](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## Lire les textes complets et générer le pack {/* #read-the-full-texts-and-generate-the-pack */}

Retour à la conversation dans le projet lié. Nommez explicitement la collection remplie. Demander des preuves dans ses PDFs sauvegardés et séparer les conditions de différentes réactions:

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

Au cours de la réponse, étendre l'activité de lecture **Bibliothèque de références** pour inspecter quel papier et quel passage ont été récupérés. Cette exécution a lu les cinq PDF enregistrés. L'activité de lecture est distincte de la recherche antérieure sur les métadonnées. Si une lecture échoue, résolvez-la ou gardez les preuves de ce papier explicitement indisponibles.

Après l'achèvement, ouvrez **single-atom-fulltext-reading-pack.md** à partir de **Generated**. Vérifier le tableau de vérification des cinq documents, chaque constatation et son emplacement, ses limites, ses questions et son ordre du jour. L'ordre du jour devrait s'étendre à 60 minutes.

![Le pack plein texte sauvegardé, avec les mêmes cinq papiers et les mêmes vérifications de source](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## Consultez la carte papier en fonction des PDF originaux {/* #check-the-paper-map-against-the-original-pdfs */}

Ouvrez **single-atom-fulltext-paper-map.csv** et utilisez son bouton d'extension pour une vue en plein écran. Cette exécution contient **Lignes 5 · Colonnes 12**. Comparer l'ensemble DOI avec la collection; un pack d'un ensemble différent n'est pas le résultat de ce workflow. Faites défiler horizontalement ou téléchargez le CSV pour lire les cellules longues en entier.

![La véritable carte papier de cinq rangées, douze colonnes](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

Retourner à **Library**, ouvrir un PDF cité, cliquer sur son compteur de page, taper la page demandée et appuyer sur **Entrez**. Vérifiez la figure ou la table avec sa légende et le texte qui l'entoure. Par exemple, la figure 5 de He et al. est sur **PDF page 7**; la description de la ligne de production se trouve à la page 3. Ils appuient différentes parties du résumé.

![Figure 5 ouverte sur PDF page 7 pour comparaison](/img/open-science/research-workflows/journal-he-figure5.webp)

Demandez une révision sauvegardée quand un localisateur ou une condition est incorrecte, puis rouvrez le fichier révisé. Le pack coché conserve également un conflit dans Sun et al. : page 2 et la légende de la figure 5 donne différentes compositions de flux. Il enregistre les deux descriptions au lieu de choisir silencieusement. C'est une question de réunion utile, et non un détail expérimental résolu.

Télécharger les <a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>boîte de lecture</a> et <a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>carte papier</a> vérifiés. Les mêmes cinq fichiers PDF sous-tendent les deux fichiers. Pour un parcours plus étroit à une seule demande, continuez avec [vérification de la réclamation et des chiffres](pdf-evidence.md).
