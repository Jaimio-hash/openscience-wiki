---
title: "Construire une liste de lecture de base pour un nouveau sujet de recherche"
last_update:
  date: '2026-09-16'
---

# Construire une liste de lecture de base pour un nouveau sujet de recherche {/* #build-a-core-reading-list-for-a-new-research-topic */}

Pour découvrir des articles à partir d’un sujet de recherche, suivez le [parcours de recherche thématique du club de lecture](journal-club.md). L’exemple PRISMA ci-dessous part de trois DOI connus et montre comment vérifier, enregistrer et lire ces références.

<p className="example-label"><strong>Exemple pratique</strong> Construire une collection de lecture PRISMA</p>

Vous préparez une revue systématique et avez besoin d'une petite collection de départ défendable avant de lire largement. Ce parcours permet d'élaborer un pack de reporting-guidance PRISMA à partir de trois articles publiés, d'examiner les découvertes de l'agent, de lier les dossiers acceptés à un projet, et de joindre un PDF ouvertement disponible.

**Produit livrable :** une collection de trois registres de bibliothèque associée au projet de recherche, une cochée pièce jointe en texte intégral, et un artefact de liste de lecture dont vous vérifiez les métadonnées avant réutilisation. Il s'agit d'une collection de semences, et non d'une recherche exhaustive ou d'une synthèse de preuves.

Pour votre propre sujet, remplacez les documents de semences et les noms de collection/projet; vérifier chaque document les métadonnées réelles et le texte complet disponible.

## Sources et préparation {/* #sources-and-preparation */}

Utilisez une connexion de modèle de travail et une interface d'application anglaise. L'exemple a utilisé un abonnement Codex. Créer **PRISMA - Systematic review reading pack** en utilisant [Projets et dossiers sources](../guides/projects.md).

| Papier | DOI | Rôle dans le pack |
| --- | --- | --- |
| Page et al., 2021, *L'énoncé PRISMA 2020 : une ligne directrice mise à jour pour les examens systématiques* | `10.1371/journal.pmed.1003583` | b) Mise à jour des directives en matière de rapports; le titre 2020 n'est pas son année de publication. |
| Moher et al., 2009, *Éléments de déclaration préférés pour les examens systématiques et les méta-analyses : l'énoncé PRISMA* | `10.1371/journal.pmed.1000097` | Déclaration historique. |
| Liberati et al., 2009, *L'Énoncé PRISMA ... Explication et élaboration* | `10.1371/journal.pmed.1000100` | Explication historique; un document séparé avec une liste d'auteurs différente. |

Les pages de l'éditeur établissent les identités bibliographiques : [État 2021](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583), [État 2009](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097) et [2009 explication](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100).

## 1. Demander une liste de candidats délimitée {/* #1-ask-for-a-bounded-candidate-list */}

Dans **Ask anything**, saisissez une demande avec des identifiants, une destination et une condition d'arrêt:

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

Choisissez le modèle prévu, laissez **Ask for approval** activé et sélectionnez **Send message**. Élargir l'activité de l'outil lorsque vous devez inspecter ce qui a été demandé. L'exécution peut avoir besoin de lire un Skill pertinent avant de chercher des papiers; un nom Skill dans la prose de l'agent ne prouve pas que ses instructions ont été chargées.

Lorsque **Save to Literature Inbox?** apparaît, examinez l'opération et autorisez l'enregistrement prévu. Sauver des candidats est différent de les accepter dans votre bibliothèque.

![Autorisation de participer à des concours de littérature](/img/open-science/prisma-walkthrough/03-inbox-save-approval.png)

## 2. Examiner chaque candidat avant d'accepter {/* #2-review-each-candidate-before-accepting */}

Ouvrez **Library → Inbox**. Dans cette exécution, le badge a montré **3**, et chaque ligne a affiché un titre, les premiers auteurs, l'année de publication et **Trouvé par Crossref**.

![Trois vraies communications PRISMA en attente d'examen](/img/open-science/prisma-walkthrough/04-inbox-three-papers.png)

1. Sélectionnez le titre du candidat pour ouvrir ses détails.
2. Cochez **Provider**, son lien source, et **Identifiers → DOI** par rapport au papier prévu.
3. Comparez l'ordre de l'auteur, l'année et la publication avec le dossier de l'éditeur. Des titres semblables n'établissent pas que deux documents sont le même papier.
4. Sélectionnez **Accept** lorsque l'identité correspond. Le candidat disparaît de la boîte de réception et devient un dossier de bibliothèque.
5. Répétez pour les deux autres. Le badge est passé de 3 à 2 à 1; l'état final était **Inbox is clear**.

![Source Crossref d'un candidat et exact DOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.png)

| Commande de la boîte de réception | Résultat | Quand l’utiliser |
| --- | --- | --- |
| Titre du candidat / **View details** | Ouvre les preuves du fournisseur et de l'identificateur. | Avant d'accepter un document peu familier ou ambigu. |
| **Accept** | Il encourage le candidat à entrer dans la bibliothèque. | Vous avez vérifié son identité et sa pertinence. |
| **Dismiss** | Retire le candidat de la file d'attente d'examen en attente. | Il n'est pas pertinent ou ne devrait pas entrer dans la collecte; il ne répare pas les métadonnées. |
| **Search references** | Étroite la vue actuelle. | Localiser un identifiant ou un titre dans un lot plus grand. |
| Cochez la case de ligne / **Select all** | Sélectionne les candidats pour les actions de lots disponibles. | Uniquement après vérification de la sélection prévue; la traversée acceptée individuellement. |

## 3. Rendre la collection utile à un projet {/* #3-make-the-collection-useful-to-a-project */}

Créez une collection avec le contrôle de la barre latérale **New collection** :

- **Nom:** `PRISMA reporting - Core reading`.
- **Exposé succinct:** indique qu'il contient des lignes directrices actualisées et historiques en matière de rapports. La description est le texte de l'organisation, et non les instructions de l'agent.
- Sélectionner **Create collection**; Le nom est requis, tandis que la description est facultative. **Cancel** et **Close** rejettent le projet.

![Une collection de lecture spécifique](/img/open-science/prisma-walkthrough/06-create-collection.png)

Dans **All references**, recherchez `PRISMA`. Confirmez exactement les trois enregistrements prévus sont visibles, sélectionnez leurs cases à cocher et utilisez **Add to collection → PRISMA reporting - Core reading**. L'opération efface la sélection. Sélectionnez à nouveau les trois enregistrements, puis utilisez **Add to project → PRISMA - Systematic review reading pack**.

Ouvrez la collection et vérifiez ses trois enregistrements. Ouvrez un détail de référence pour confirmer à la fois le projet et les cases de collecte sont sélectionnées. Il s'agit de liens vers des documents partagés, et non de trois copies supplémentaires de la bibliographie.

![La collection de trois documents achevée](/img/open-science/prisma-walkthrough/07-core-reading-collection.png)

## 4. Joindre le texte complet utilisable {/* #4-attach-usable-full-text */}

Ouvrez le papier 2021 et sélectionnez **Find full-text PDF**. La recherche a rendu l'Europe PMC dans cette course. Inspectez **Open source** avant de sélectionner **Add attachment**.

![Une source de texte intégral découverte](/img/open-science/prisma-walkthrough/08-full-text-source.png)

La source a été découverte, mais **Add attachment** a renvoyé **PDF could not be added**. Le message énumère les causes possibles, y compris les exigences de connexion, les liens expirés et la limite 50 MB; il n'identifie pas la cause qui s'est produite ici.

Pour récupérer, téléchargez le PDF disponible à partir du [page de l'article éditeur](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583). Retour à la même référence et utiliser **Add PDF**. Sélectionnez le fichier téléchargé, puis ouvrez **Aperçu prisma-2020-statement.pdf** sous Pièces jointes. Le fichier attaché avec succès a montré **806.1 KB** et un aperçu **Page 15**. Vérifiez le titre et DOI à la page une en regard de l'enregistrement.

![L'éditeur PDF a attaché et ouvert avec succès](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.png)

Un résultat source visible n'est pas un PDF attaché. Un PDF ci-joint n'est pas une preuve que l'agent l'a lu. **Read with agent** est une action distincte qui fournit le contexte de lecture pour une demande ultérieure.

<span id="5-audit-the-generated-reading-list" />

## 5. Vérifiez et enregistrez la liste de lecture {/* #5-check-and-save-the-reading-list */}

Ouvrez **reading-list.md** et comparez chaque titre, la liste des auteurs, la date de publication et DOI avec les pages de l'éditeur ci-dessus. Utilisez le <a href="/docs/examples/prisma/core-reading-list.md" download>exemple de liste de lecture cochée</a> comme référence. Ce téléchargement est une bibliographie curée; il est séparé des versions sauvegardées antérieures de l'application.

1. Pour la mise à jour de l'énoncé, conserver l'année de publication **2021** même si le titre indique PRISMA 2020.
2. Pour l'instruction 2009, conservez les quatre auteurs individuels **et le groupe PRISMA**. Utilisez **Name type → Organization** pour le groupe dans les métadonnées de la bibliothèque.
3. Pour l'explication 2009, conservez sa propre liste de dix auteurs; ne copiez pas les auteurs de la déclaration.
4. Si le rapport généré diffère, corrigez l'enregistrement de la bibliothèque, puis demandez explicitement une nouvelle version gérée de **reading-list.md** en utilisant ces enregistrements corrigés.
5. Rouvrir le nouveau fichier et vérifier les trois entrées et leurs liens DOI avant de télécharger. La mise à jour des métadonnées à elle seule ne réécrit pas un rapport enregistré.

Demander une correction telle que:

```text
Regenerate reading-list.md from the three accepted records. Preserve their
separate complete author lists, including the organization author The PRISMA
Group for DOI 10.1371/journal.pmed.1000097. Use 2021 as the publication year of
the PRISMA 2020 statement. Keep all DOI and publisher links. Save a new managed
version and reopen it. Describe metadata lookup and available attachments
accurately; do not claim full-text analysis.
```

## Liste de contrôle et portée de l ' acceptation {/* #acceptance-checklist-and-scope */}

- La collection et le projet exposent chacun les trois documents prévus.
- Chaque DOI ouvre le papier correspondant; les deux documents 2009 conservent des auteurs différents.
- L'année de publication de la déclaration mise à jour est 2021.
- L'aperçu PDF ouvre et correspond à l'enregistrement 2021; Les téléchargements échoués ne sont pas comptés comme pièces jointes.
- Le texte de la liste de lecture distingue la recherche de métadonnées, l'acceptation manuelle et toute lecture de texte intégral réelle.

Cette collection soutient une tâche de lecture limitée. Une recherche exhaustive dans les bases de données, une synthèse en texte intégral et un examen systématique achevé nécessitent des méthodes et des preuves supplémentaires.

Pour un nouveau jeu de lecture, utilisez [Type de nom → Organisation](../guides/library.md#inspect-and-correct-metadata) pour les auteurs d'entreprise, puis régénérez et vérifiez la bibliographie. Pour un dossier PDF hérité, suivez [importation par lots](../guides/library.md#add-or-import-a-record) avant d'examiner le jeu. Mettre à jour un enregistrement de bibliothèque ne réécrit pas automatiquement l'artefact de la liste de lecture sauvegardée.
