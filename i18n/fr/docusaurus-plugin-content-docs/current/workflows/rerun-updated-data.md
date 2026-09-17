---
title: "Relancer une analyse avec des données actualisées"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Relancer une analyse avec des données actualisées {/* #rerun-an-analysis-with-updated-data */}

<p className="example-label"><strong>Exemple pratique</strong> Ajouter une deuxième semaine d'observations de la qualité de l'air à Pékin</p>

Lorsque de nouvelles observations arrivent, conservez le niveau de référence et revenez à la même méthode avant de comparer les résultats. Cet exemple utilise les données horaires réelles de **Aotizhongxin** PM2.5 : **Janvier 1–7, 2016** d'abord, puis **Janvier 8–14**. L'arrivée par étapes est un replay historique de l'enseignement, pas un suivi en direct.

## 1. Joindre la première semaine et définir le calcul {/* #1-attach-the-first-week-and-define-the-calculation */}

Les entrées sont des sous-ensembles chronologiques du [Ensemble de données UCI Beijing sur la qualité de l'air sur plusieurs sites](https://doi.org/10.24432/C5RK5G), distribués sous **CC PAR 4.0**. Télécharger <ExampleDownload path="/examples/workflow-extensions/air-week1.csv">semaine 1</ExampleDownload> et <ExampleDownload path="/examples/workflow-extensions/air-week2.csv">semaine 2</ExampleDownload>; les identités de crédit source et de fichier sont en <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">les notes sources</ExampleDownload>.

Ouvrez une conversation de projet et attachez **air-semaine1.csv seulement** à **+ → Attach files**. Sélectionnez un modèle disponible et confirmez que Python est **Ready** et activé dans **Settings → Runtimes**. Envoyer :

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![Demande de saisie de première semaine et de calcul de base](/img/open-science/workflow-extensions/air-input-v1.png)

Examinez le dossier et calculez-le avant d'approuver. Dans **Notebook**, vérifiez que l'exécution se termine, puis ouvrez **air-daily-v1.csv**. La base de référence contient **168 lignes horaires et 7 lignes quotidiennes**, sans valeurs PM2.5 manquantes.

![Les valeurs de base de sept jours et les nombres d'heures valides enregistrés](/img/open-science/workflow-extensions/air-baseline-table.png)

## 2. Ajouter de nouvelles observations sans modifier la méthode {/* #2-add-new-observations-without-changing-the-method */}

Gardez la même conversation. Joindre **air-week2.csv**, laisser la première pièce jointe disponible, et demander:

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![Le fichier de la deuxième semaine s'est ajouté à la conversation d'analyse existante](/img/open-science/workflow-extensions/air-update-input.png)

Vérifiez que l'Agent exécute le script existant et conserve les mêmes règles de valeur manquante et d'exhaustivité. Changer les données et les méthodes rendrait plus difficile d'expliquer pourquoi le résultat a changé.

## 3. Inspecter les résultats accrus {/* #3-inspect-the-expanded-results */}

Ouvrir **air-daily-v2.png** et **air-daily-v2.csv**. L'entrée combinée contient **Lignes horaires 336**, avec **pas de duplicata ou d'horodatage manquant**. Il y a **une observation manquante PM2.5**, le janvier 11. La table a **14 jours**, tous conformes à la règle 18-valid-heure de l'exemple.

![Le résultat élargi de quatorze jours affiché dans Open-Science](/img/open-science/workflow-extensions/air-update-plot.png)

La moyenne 11 de janvier est **11.652 μg/m3**, calculée à partir de **23 heures valides**. Ne divisez pas une observation manquante comme si elle était nulle. Une séquence complète d'horodatage ne garantit pas la présence de toutes les valeurs de mesure.

## 4. Comparer par rapport à la valeur de référence {/* #4-compare-against-the-baseline */}

Ouvrez **air-update-check.csv**. Tous les **sept lignes quotidiennes partagées** sont identiques dans chaque champ de sortie; les seules nouvelles dates sont janvier 8–14. Le script original SHA-256 est inchangé avant et après la mise à jour.

![Comparaison ligne par ligne enregistrée avec des dates de référence inchangées](/img/open-science/workflow-extensions/air-update-check.png)

Ouvrez **air-update-notes.md** pour vérifier les identités d'entrée, les observations manquantes et les fichiers v1 conservés. Un calcul indépendant de tous les moyens quotidiens 14 et des nombres d'heures valides a permis de comparer la sortie sauvegardée à sa précision affichée.

![Les notes de mise à jour enregistrent le code inchangé, conservent les fichiers de base et vérifient les données](/img/open-science/workflow-extensions/air-update-notes.png)

## 5. Vérifiez les dates du rapport avant de le remettre {/* #5-check-the-report-dates-before-handing-it-off */}

Vérifiez que le titre du rapport suit l'intervalle d'entrée réel. Le scénario initial a conservé un titre de première semaine dans son rapport de deux semaines; cette erreur de présentation a été corrigée dans **air-analysis-reviewed.py**. Seul le modèle d'en-tête a changé. Le script examiné a ensuite été exécuté sans changement pendant la semaine 1 et les deux semaines, en conservant tous les fichiers précédents.

![Le rapport corrigé énumère maintenant l'intervalle complet de deux semaines](/img/open-science/workflow-extensions/air-reviewed-report.png)

Les **air-daily-baseline.csv** et **air-daily-updated.csv** enregistrés correspondent aux VSV v1/v2 originaux dans chaque champ. **air-update-verification.md** enregistre le même hash de script examiné avant et après les deux exécutions, et vérifie les deux titres de rapport. Ceci sépare une étiquette corrigée d'une modification de la méthode numérique.

Téléchargez les <ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">révision du script Python</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">CSV de référence</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">CSV mis à jour</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">comparaison des lignes</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">rapport actualisé</ExampleDownload> et <ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">Note de vérification</ExampleDownload>. Utilisez Python avec pandas, NumPy et Matplotlib, conservez les deux entrées et écrivez sur un préfixe frais:

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

La comparaison décrit une station et deux semaines historiques. Il ne s'agit pas d'une classification de l'AQA, d'une évaluation de l'exposition ou d'une preuve d'une intervention causale. Pour une modification de la méthode d'analyse tout en conservant les mêmes données, voir [comparer les méthodes](compare-methods.md).
