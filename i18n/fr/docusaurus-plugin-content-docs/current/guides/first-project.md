---
title: "Votre premier projet et résultat"
last_update:
  date: '2026-09-10'
---

# Votre premier projet et résultat {/* #your-first-project-and-result */}

<p className="example-label"><strong>Exemple pratique</strong> Lire un exemple-QC table et enregistrer un résumé</p>

Commencez par ouvrir une petite table et enregistrer un résumé. Cette voie utilise le tableau d'échantillon-QC à douze rangées, calculé à partir d'un ensemble de données réel d'expression génique publique. Vous n'avez pas besoin de réexécuter l'analyse complète de la matrice ou d'installer des paquets de tracé.

<span id="prepare-the-input-and-runtime" />

## Préparer un modèle et le fichier exemple {/* #prepare-a-model-and-the-example-file */}

1. Compléter [première configuration](onboarding.md) et confirmer votre [connexion du modèle](providers.md).
2. Téléchargez le **échantillon QC CSV** depuis [Exemple de données](../reference/example-data.md#saved-example-outputs).
3. Gardez le fichier téléchargé inchangé. Il s ' agit d ' un tableau récapitulatif dérivé; la matrice source et la méthode de calcul sont documentées sur la même page d'exemple.

L'ouverture et le résumé de ce tableau nécessitent un agent actif et un modèle. Python ou R n'est nécessaire que si vous demandez de recalculer les métriques. Le [flux de travail complet de qualité des données](../workflows/data-quality.md) couvre cette route.

<span id="create-the-research-project" />

## Créer un projet {/* #create-a-project */}

À partir de la maison, choisissez **New project**. Saisissez `Gene-count QC review` comme **Name** et `Review the public sample-QC table and record its interpretation.` comme **Description**. Dans **Agent Context**, entrez `Preserve the source file. Explain descriptive counts without inferring differential expression.` puis sélectionnez **Create project**.

Confirmez le nom du projet au-dessus de la liste des sessions. Ce sont des noms d'exemple: utilisez un nom qui vous aide à trouver votre propre enquête plus tard. Voir [Projets](projects.md) pour modifier les champs ou configurer un dossier source.

<span id="attach-and-submit-a-bounded-request" />

## Joindre et inspecter le tableau {/* #attach-and-inspect-the-table */}

1. Démarrer une nouvelle conversation, choisir **+ → Attach files** et sélectionner le CSV téléchargé.
2. Attendez la puce de fixation, puis ouvrez son aperçu.
3. Confirmer douze rangées d'échantillons. Inspectez l'identificateur de l'échantillon complet et les colonnes pour les nombres totaux, les gènes à nombre zéro, les gènes détectés et le nombre médian positif.
4. Fermez l'aperçu pour revenir au compositeur. Conserver la pièce jointe dans la demande.

![Exemple de tableau QC ouvert dans la demande](/img/open-science/guides-walkthrough/42-rnaseq-table.webp)

Si l'aperçu est vide ou si les colonnes ne sont pas séparées, confirmez que vous avez joint la page de téléchargement CSV plutôt qu'une page de téléchargement HTML. Voir [Tableaux](../tools/tables.md) pour les contrôles de délimiteur et d'aperçu.

<span id="open-and-accept-the-outputs" />

## Demander un résumé enregistré {/* #ask-for-a-saved-summary */}

Vérifiez le modèle sélectionné et envoyez :

```text
Read the attached sample-QC CSV. Save a short Markdown report named
sample-qc-overview.md with three sections: Table contents, Metric meanings,
and Next checks. Identify the sample-identifier column and explain each
QC metric using the attached values. Preserve the original file. Do not
recalculate the gene matrix, install packages, or infer differential
expression. State that this is a derived descriptive summary. If the file
cannot be read, report the error instead of guessing its contents.
After saving, provide the report link.
```

Lorsque la permission est demandée, vérifiez qu'elle concerne l'entrée ci-jointe et la sortie demandée. Approuver l'opération envisagée ou rejeter une demande non liée. Une permission d'attente est une pause qui nécessite votre réponse; un appel d'outil échoué nécessite une gestion d'erreur. [Compositeur](composer.md) explique ces états.

<span id="continue-or-recover" />

## Vérifiez et conservez le résultat {/* #check-and-keep-the-result */}

1. Sélectionnez **sample-qc-overview.md** dans la réponse ou le panneau **Files** du projet.
2. Confirmez les trois sections demandées et que les descriptions des colonnes correspondent au CSV. En particulier, les gènes détectés signifient un nombre supérieur à zéro; la médiane du nombre positif exclut les nombres nuls.
3. Confirmer le rapport décrit un tableau sommaire et ne prétend pas qu'il s'agisse d'une nouvelle constatation biologique.
4. Téléchargez le rapport si vous avez besoin d'une copie externe. Renommer et épingler la conversation pour retourner l'accès.

La tâche est terminée lorsque le rapport sauvegardé s'ouvre et est d'accord avec le tableau ci-joint. Si la réponse contient du texte, mais pas de fichier, demandez à l'agent d'enregistrer ce texte en tant que fichier Markdown, puis ouvrez-le. Pour une erreur de lecture ou d'enregistrement, conservez le message d'erreur et suivez [Dépannage](troubleshooting.md).

## Continuer avec les données originales {/* #continue-with-the-original-data */}

Pour reproduire la table et créer un graphique, suivez [Transformer les données brutes en une analyse reproductible](../workflows/data-quality.md). Ce workflow ajoute la matrice originale, les dépendances Python, un schéma de sortie exact et des vérifications numériques. Utilisez [Notebook](notebook.md) pour inspecter le code et déposer des preuves.
