---
title: "Comparer deux méthodes d'analyse sur les mêmes données"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Comparer deux méthodes d'analyse sur les mêmes données {/* #compare-two-analysis-methods-on-the-same-data */}

<p className="example-label"><strong>Exemple pratique</strong> PCA et l'analyse des facteurs exploratoires de la psychiatrie::</p>

La modification des méthodes n'est instructive que lorsque les entrées et le prétraitement sont comparables. Cet exemple applique l'analyse normalisée des composantes principales (APC) et l'analyse des facteurs de probabilité maximale (AF) à cinq facteurs au **mêmes réponses complètes 2,436**. Il compare ce que les méthodes estiment, plutôt que de traiter le plus grand nombre comme la méthode gagnante.

## 1. Préparer l'entrée publique et l'exécution R {/* #1-prepare-the-public-input-and-r-runtime */}

Téléchargez le public [psych::bfi CSV](https://vincentarelbundock.github.io/Rdatasets/csv/psych/bfi.csv), enregistrez-le sous **bfi-original.csv**, et lisez le [documentation des ensembles de données](https://personality-project.org/r/psych/help/bfi.html). Il contient les répondants 2,800, les éléments de personnalité 25 et les colonnes démographiques. L'analyse utilise uniquement A1–A5, C1–C5, E1–E5, N1–N5 et O1–O5; Il ne s'agit pas d'une évaluation psychologique individuelle.

Dans **Settings → Runtimes**, confirmez que R est **Ready** et activé. L'exécution enregistrée a utilisé **R 4.4.3**, avec des fonctions de base/recommandées R et pas d'installation de paquet supplémentaire. Joindre le CSV à une conversation de projet via **+ → Attach files**.

![L'ensemble de données bfi public joint à une comparaison de la même méthode de données](/img/open-science/workflow-extensions/bfi-input.webp)

## 2. Fixer le prétraitement avant d'installer l'une ou l'autre méthode {/* #2-fix-the-preprocessing-before-fitting-either-method */}

```text
Use the attached psych::bfi CSV in the enabled R Notebook.
Analyze only its 25 A/C/E/N/O items, scored 1–6. Validate the range.
Reverse A1, C4, C5, E1, E2, O2 and O5 as 7-x. Use the same complete
cases across all 25 items for both methods; report exclusions.
Run prcomp with centering/scaling and retain five components.
Varimax-rotate eigenvector times sqrt(eigenvalue) loading columns;
label them RotPC1–RotPC5. Report variance from unrotated PC1–PC5.
Run factanal with five factors, varimax and nstart=10; set seed 20260916.
Save bfi-method-comparison.R, bfi-preprocessing.csv, bfi-loadings.csv,
bfi-method-metrics.csv, bfi-method-comparison.png and bfi-method-report.md.
Make the script accept the input CSV as its first argument, record
runtime input identity and R version, execute it and reopen all outputs.
Explain fit, convergence, arbitrary signs/order, ordinal responses
and complete-case limitations. Do not claim that convergence is good fit.
Use English and do not install packages or delegate.
```

Examiner le calcul de R avant de l'approuver. Ouvrez **Notebook** et confirmez l'exécution terminée. La matrice de prétraitement sauvegardée a **Lignes 2,436 × éléments 25**, à l'exclusion de **364 répondants incomplets**. Cette même matrice alimente les deux méthodes; les données démographiques et les identifiants des lignes sont exclus.

Si une méthode utilise silencieusement un ensemble différent de répondants, arrêtez et réconciliez les entrées avant de comparer son résultat.

## 3. Inspecter les résultats numériques {/* #3-inspect-the-numerical-results */}

Ouvrez **bfi-method-metrics.csv** à partir de **Generated** ou **Files**. Le fichier enregistré contient **Lignes métriques 77**, y compris le nombre d'échantillons, l'absence, la variance de PCA, les unicités de FA, l'ajustement, la convergence, les semences et l'identité des entrées.

![Mesure numérique sauvegardée du prétraitement partagé et des deux méthodes](/img/open-science/workflow-extensions/bfi-metrics.webp)

| Composant PCA non rotatif | Montant total des écarts standard expliqués |
| --- | --- |
| PC1 | 20.54% |
| PC2 | 11.01% |
| PC3 | 8.57% |
| PC4 | 7.41% |
| PC5 | 6.19% |
| Cinq premiers combinés | 53.72% |

L'optimiseur FA a convergé, mais la statistique de rapport de probabilité était **1490.587 sur 185 degrés de liberté**, avec **p ≈ 1.218 × 10⁻²⁰²**. Selon les hypothèses du modèle, cela rejette l'ajustement exact de cinq facteurs. La réussite de l'exécution numérique n'établit pas l'ajustement adéquat.

## 4. Comparer les patrons de chargement dans la figure {/* #4-compare-the-loading-patterns-in-the-figure */}

Ouvrez **bfi-method-comparison.png**. Ses trois panneaux montrent une variance de PCA sans rotation, des charges de PCA avec rotation variamax et des charges de FA avec rotation variamax. Les valeurs de charge exactes sont en **bfi-loadings.csv**, avec les méthodes **Lignes 250**: 25 items × 5 dimensions × 2.

![variance de PCA non roquée et les deux matrices de chargement tournantes](/img/open-science/workflow-extensions/bfi-comparison-plot.webp)

Ne correspondez pas mécaniquement à la colonne 1. L'ordre des facteurs/composants et les signes peuvent changer sans changer la solution. Les cartes thermiques utilisent le bleu pour les charges négatives et le rouge pour les charges positives; comparer les modèles d'articles et les valeurs numériques.

la variance totale observée des partitions de l'APC; Les modèles FA partagent la covariance avec des unicités distinctes. Les sommes de FA des charges carrées ne sont pas interchangeables avec la variance de PCA expliquée. Les étiquettes tournantes **RootPC1–RotPC5** sont intentionnellement distinguées des pourcentages de variance **PC1–PC5** non percés.

## 5. Lire les limitations et réexécuter le script sauvegardé {/* #5-read-the-limitations-and-rerun-the-saved-script */}

Ouvrez **bfi-method-report.md**. Vérifier qu'il signale le même échantillon et le même prétraitement, la même graine fixe et la différence entre convergence et ajustement. Ces réponses ordinales 1–6 sont traitées comme approximativement continues; La suppression complète des cas peut biaiser les résultats lorsque la lacune est liée aux réponses ou aux caractéristiques des participants.

![Le rapport final enregistre les limites de prétraitement, de semis, de variance et d'ajustement](/img/open-science/workflow-extensions/bfi-report.webp)

Téléchargez les <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.R">Script R</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-loadings.csv">chargements</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-metrics.csv">métriques</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.png">chiffre</ExampleDownload> et <ExampleDownload path="/examples/workflow-extensions/bfi-method-report.md">rapport</ExampleDownload>. Mettez le script et l'entrée téléchargée dans un nouveau dossier, ouvrez un terminal et lancez :

```bash
Rscript bfi-method-comparison.R bfi-original.csv
```

Le script écrit ses sorties dans le dossier actuel. Le script enregistré a été réexécuté indépendamment avec R 4.4.3 : prétraitement, chargements et CSV métriques correspond exactement aux fichiers enregistrés de l'application. Toutes les cellules de prétraitement et les valeurs propres de PCA ont également été vérifiées séparément. Ces vérifications établissent la reproductibilité de ce calcul; ils ne choisissent pas une méthode universellement supérieure ou ne valident pas un test diagnostique.
