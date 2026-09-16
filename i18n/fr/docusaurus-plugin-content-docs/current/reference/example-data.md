---
title: "Exemple de données et résultats attendus"
last_update:
  date: '2026-09-10'
---

# Exemple de données et résultats attendus {/* #example-data-and-expected-results */}

Utilisez ces fichiers publics pour reproduire les exemples de documentation. La description de la source, le total de vérification du fichier original et le niveau de référence de l'échantillon-QC sont affichés ici; les guides de fonctionnalités individuelles les relient au lieu de répéter l'historique de l'ensemble de données.

## Contrat de source et d'intrant {/* #source-and-input-contract */}

La [Enregistrement de la série GEO](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450) fournit la `GSE60450_Lactation-GenewiseCounts.txt.gz` originale. Le [flux de travail d'analyse RNA-seq publié](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/) fournit un contexte méthodologique pour cet ensemble de données. Notre exemple s'arrête à la pré-analyse descriptive QC; il ne reproduit pas l'analyse complète de ce papier.

| Biens | Valeur vérifiée |
| --- | --- |
| Fichier décompressé | GSE60450_Lactation-GenewiseCounts.txt |
| Taille | octets 1,340,161 |
| Lignes de gènes | 27,179 |
| Colonnes | Colonnes d'échantillonnage EntrezGeneID, Longueur et 12 |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| Dupliquer les ID du gène / les entrées manquantes du compte / les nombres invalides | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>Télécharger l'entrée décompressée inchangée</a> ou <a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>le fichier d'origine compressé</a>. L'outil de métadonnées Omics Archives de l'application peut renvoyer des URL supplémentaires; il ne télécharge pas les tables de comptage automatiquement. Cette source a été téléchargée séparément et téléchargée par le biais de fichiers Joindre.



## Niveau de référence de l'échantillon-CQ {/* #sample-qc-baseline */}

| Échantillon | Total des chiffres bruts | Les gènes du nombre zéro | Les gènes détectés | Médiane chez les personnes détectées |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

Les étiquettes compactes correspondent aux identifiants complets de l'échantillon dans le CSV. Les quatre mesures numériques ont été vérifiées indépendamment pour cette entrée. Il s'agit de contrôles descriptifs des comptes bruts; ils ne valident pas une conception statistique en aval.

## Sorties d'exemple sauvegardées {/* #saved-example-outputs */}

| Télécharger | Table des matières |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>Qc CSV</a> | Douze rangées, cartographie exacte des colonnes et quatre métriques |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>Figure</a> | Total des échantillons bruts |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>Rapport sur les méthodes</a> | Méthodes, intégrité de la source et contrôle métrique indépendant |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | Native non changée `.ipynb` Exportations |
## Choisissez un autre exemple {/* #choose-another-example */}

| Tâche | Entrée ou référence | Instructions |
| --- | --- | --- |
| Premier résultat enregistré | La ligne de douze QC CSV ci-dessus | [Premier projet](../guides/first-project.md) |
| Recalculer une matrice complète | Matrice originale du nombre de gènes ci-dessus | [Déroulement de la qualité des données](../workflows/data-quality.md) |
| Organiser une collection de littérature | <a href="/docs/examples/prisma/core-reading-list.md" download>Vérification de la liste de lecture de PRISMA</a> avec liens d'éditeur | [Liste de lecture de base](../workflows/core-reading-list.md) |
| Essayez un petit calcul de repli inverse | <a href="/docs/examples/capabilities/1UBQ.pdb" download>ubiquitine humaine 1UBQ</a> | [Outils scientifiques](../tools/scientific.md) |

Le rapport des méthodes et Notebook conservent les chemins de calcul enregistrés et la portée des preuves. Préparez votre propre emplacement d'entrée et les dépendances avant un rediffusion externe.
