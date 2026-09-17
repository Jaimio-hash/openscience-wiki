---
title: "Prendre en charge la collection de littérature d'un chercheur"
last_update:
  date: '2026-09-16'
---

# Prendre en charge la collection de littérature d'un chercheur {/* #take-over-a-researchers-literature-collection */}

Ce flux de travail commence par une bibliographie existante. Si vous commencez par un sujet, utilisez le [flux de travail journal-club pour trouver et examiner les documents candidats](journal-club.md) d'abord.

<p className="example-label"><strong>Exemple pratique</strong> Un transfert de stabilité de cellules solaires perovskite</p>

Lorsqu'un collègue vous remet une bibliographie, il faut d'abord établir ce qu'il y a dedans et ce qui a encore besoin de lire. Cet exemple importe des références publiées de 20 sur la stabilité des cellules solaires perovskite, les regroupe dans la bibliothèque et produit un inventaire de transfert avec un plan de lecture.

**Produit livrable :** une collection liée au projet, un 20-row CSV avec des identifiants source et les actions suivantes, et un plan de lecture en anglais. L'échantillon fourni contient des notices de citation, sans PDF; ses étiquettes de sujet sont provisoires.

## Préparer la collecte {/* #prepare-the-collection */}

Téléchargez le <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>Fichier RIS de référence 20</a>. Ses titres, ses auteurs, ses années, ses revues et ses DOI proviennent de disques Crossref. Il s'agit d'une sélection d'enseignement, et non d'une recherche systématique. Pour votre propre transfert, utilisez l'exportation de citation de votre collègue et conservez les PDF originaux à côté.

1. Créer un projet en utilisant [Projets et dossiers sources](../guides/projects.md), puis ouvrir **Library**.
2. Créez une collection nommée **Perovskite Stabilité solaire-cellule**.
3. Choisissez **Add → Import references**, sélectionnez le fichier RIS et examinez l'aperçu des importations. Vérifiez la collecte de destination et la manipulation du duplicata avant de confirmer.
4. Inspecter le résultat de l'importation. Cet exemple a créé des enregistrements **20**, avec **0** réutilisés, ignorés ou échoués.
5. Ouvrez la collection, sélectionnez ses enregistrements et utilisez **Add to project** pour les lier à votre projet.

![Les rapports d'importation complétés 20 ont créé des références](/img/open-science/research-workflows/perovskite-import-complete.webp)

Si votre exportation a des duplicata ou des identifiants incomplets, résolvez ces dossiers avant d'accepter un inventaire final. L'importation de références ne joint pas leur texte intégral. Utilisez le contrôle **Add PDF** de la référence pour les PDF que vous avez déjà, puis comparez le titre PDF et DOI avec son enregistrement. Voir [Bibliothèque et citations](../guides/library.md).

Réouvrez la collection et vérifiez le compte **Références 20** du pied de page. Inspectez la colonne **Pièce jointe** avant de demander une synthèse. Dans cet exemple, il est vide tout au long de l'ouvrage, de sorte que l'étape suivante demande un inventaire bibliographique plutôt que des résultats tirés du texte intégral.

![La collection de vingt références importée avec son état d'attachement réel](/img/open-science/research-workflows/perovskite-collection.webp)

## Demandez une remise utilisable {/* #ask-for-a-usable-handover */}

Ouvrez une conversation dans le projet et sélectionnez un modèle de travail. Nommez explicitement la collection:

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

Pour une plus grande collection, demandez un inventaire avant de demander une synthèse. Les documents PDF manquants, les dossiers ambigus et les documents non lus devraient rester visibles dans le transfert.

## Vérifiez les fichiers enregistrés {/* #check-the-saved-files */}

Une fois la réponse terminée, ouvrez **perovskite-handover.csv** à partir des fichiers générés. Dans cet exemple, la table sauvegardée a **Lignes 20 et colonnes 6**. Tous les DOI 20 correspondent à l'ensemble importé; aucun DOI ou année de publication n'est manquant. Chaque entrée texte complet indique correctement qu'aucun PDF n'est joint.

![L'inventaire de transfert Perovskite de 20-row sauvegardé en Open-Science](/img/open-science/research-workflows/perovskite-handover-table.webp)

Ouvrez **perovskite-handover.md** et vérifiez que la séquence de lecture est utile au chercheur suivant. Il suggère d'abord des documents de stabilité généraux, suivis de mécanismes, d'interventions matérielles et d'approches analytiques. Ce sont des suggestions de lecture basées sur la collection, et non des conclusions vérifiées sur les expériences.

![Le plan de lecture sauvegardé maintient la disponibilité de la source et les actions suivantes visibles](/img/open-science/research-workflows/perovskite-reading-plan.webp)

Utilisez le bouton prévisualiser le fichier pour lire le plan, puis **Download** pour le conserver à côté du CSV. Vérifier que chaque action suivante proposée est réalisable à partir du matériel fourni. Une séquence de lecture suggérée ne prouve pas que les documents ont été lus.

Avant d'utiliser la collection pour comparer les résultats de stabilité, obtenir les textes complets pertinents et enregistrer le protocole de vieillissement, la température, l'éclairage, l'atmosphère et le paramètre. Vérifiez aussi les mises à jour de l'éditeur : le [big-data stability paper](https://www.nature.com/articles/s41467-022-35400-4) a un addenda lié qui appartient à une revue de texte complet.

Télécharger les exemples enregistrés <a href="/docs/examples/research-workflows/perovskite-handover.csv" download>transfert CSV</a> et <a href="/docs/examples/research-workflows/perovskite-handover.md" download>plan de lecture</a> pour comparer leur structure avec votre propre sortie.
