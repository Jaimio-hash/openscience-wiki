---
title: "Recoupez deux sources de données scientifiques"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Recoupez deux sources de données scientifiques {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>Exemple pratique</strong> Anomalies annuelles de la température globale de la NASA GISTEMP et HadCRUT</p>

Deux sources peuvent être en désaccord parce que leurs définitions diffèrent. Avant d'interpréter un écart, aligner les unités, l'intervalle de temps et la période de référence. Cet exemple compare deux ensembles de données de température annuels réels sur **1980–2024**, après avoir rebasé chacun sur **1991–2020**. Il enregistre une table alignée, une figure à deux panneaux, un script Python et un rapport de méthodes.

## 1. Obtenir les fichiers sources et vérifier leurs définitions {/* #1-obtain-the-source-files-and-check-their-definitions */}

Téléchargez la série annuelle terre–océan CSV de [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) et la série annuelle d'ensembles d'analyse moyenne de [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html). Utilisez les noms de fichiers enregistrés `NASA-GISTEMP-v4-original.csv` et `HadCRUT5-original.csv`.

| Entrée | Valeur annuelle | Anomalie initiale |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` colonne, °C | 1951–1980 |
| HadCRUT5.1.0.0 | Moyenne annuelle de l'ensemble, °C; conserver les limites de confiance | 1961–1990 |

Le fichier NASA commence par une ligne descriptive avant son en-tête et utilise `***` pour des valeurs indisponibles. Ne pas interpréter ce marqueur comme zéro. Les identités de source enregistrées et les liens de téléchargement sont en <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">l'exemple des notes sources</ExampleDownload>; Les fichiers du fournisseur peuvent être révisés après cette exécution.

Ouvrez un projet et attachez les deux CSV avec **+ → Attach files**. Dans **Settings → Runtimes**, assurez-vous que Python est **Ready** et activé. Cette exécution a utilisé Python 3.12.14, NumPy 2.5.3, pandas 2.3.3, Matplotlib 3.11.1 et Pillow 12.3.0.

![Les deux sources CSV jointes à la demande de comparaison](/img/open-science/workflow-extensions/temperature-input.webp)

## 2. Demander l'alignement avant interprétation {/* #2-ask-for-alignment-before-interpretation */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

Inspectez le fichier proposé et le code Python avant d'approuver. Ouvrez **Notebook** pour vérifier que le calcul a été effectué. S'il y a une erreur, résolvez-la et recourez avant d'interpréter un rapport ou un chiffre.

## 3. Vérifiez le tableau aligné {/* #3-check-the-aligned-table */}

Ouvrez **temperature-aligned.csv**. La comparaison enregistrée contient **45 années partagées**. Chaque source dispose de toutes les estimations ponctuelles annuelles de **30** requises pour sa moyenne de référence de 1991–2020; aucune valeur annuelle manquante n'a été remplie avec zéro.

![Les valeurs et les différences enregistrées par année](/img/open-science/workflow-extensions/temperature-table.webp)

Les moyennes soustraites sont **0.61266667 °C** pour la NASA et **0.53799554 °C** pour HadCRUT. Soustrayez la moyenne de chaque ensemble de données, pas un seul décalage des deux. Vérifiez l'unité, l'année et la direction de soustraction avant de comparer les différences numériques.

## 4. Lire la figure et la comparaison numérique {/* #4-read-the-figure-and-numerical-comparison */}

Ouvrez **temperature-comparison.png**. Le premier panneau conserve les différentes lignes de base originales; la seconde compare les deux séries après la reconstitution de la période commune.

![Courbes de température de base et de base commune en Open-Science](/img/open-science/workflow-extensions/temperature-plot.webp)

| Résultat enregistré, NASA moins HadCRUT | Valeur |
| --- | --- |
| Différence moyenne | 0.00514589 °C |
| RMSE | 0.01829900 °C |
| Différence absolue maximale | 0.04632368 °C, en 2024 |

Les chiffres sont des résultats pour ces instantanés téléchargés. Les différences restantes peuvent refléter la couverture, le remplissage, les observations de source et les choix de traitement. Les ensembles de données partagent des observations et sont **Mesures non statistiquement indépendantes**. La vérité terrestre n'est pas non plus désignée.

## 5. Enregistrer la méthode et la réexécuter {/* #5-save-the-method-and-rerun-it */}

Ouvrez **temperature-crosscheck.md** et comparez ses définitions de sources et ses métriques avec le CSV et le code. Le tableau conserve les limites de confiance d'origine de HadCRUT et leurs valeurs décalées mécaniquement, mais la comparaison fait que **pas** propage l'incertitude dans la base de référence estimée ou la dépendance entre les sources.

![Le rapport enregistré documente les paramètres et les limites réels](/img/open-science/workflow-extensions/temperature-report.webp)

Téléchargez les <ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">CSV aligné</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">chiffre</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Script Python</ExampleDownload> et <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">rapport</ExampleDownload>. Avec les deux fichiers d'entrée disponibles, recréez dans un environnement Python contenant les bibliothèques listées :

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

Le script enregistré a également été exécuté dans un processus local Python séparé; son CSV aligné correspond exactement à CSV enregistré par l'application. Un contrôle d'accord évalue ce calcul, pas tous les choix méthodologiques dans les produits climatiques.
