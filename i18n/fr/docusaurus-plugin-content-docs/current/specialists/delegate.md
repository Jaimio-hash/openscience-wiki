---
title: "Déléguer et vérifier le travail"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Déléguer et vérifier le travail {/* #delegate-and-verify-work */}

La délégation donne une tâche enfant séparée à un rôle tandis que Main Agent coordonne la conversation. La sélection d'un Specialist pour parler dans la conversation principale et la délégation d'une tâche enfant sont des actions différentes.

## Préparer une remise limitée {/* #prepare-a-bounded-handoff */}

| Informations requises | Exemple |
| --- | --- |
| Rôle | RNA-seq QC Reviewer, ID enregistré `rna-seq-qc-reviewer` |
| Entrée | Compléter GSE60450 sample-QC CSV ou une version de fichier immuable valide |
| Tâche | Vérifiez les identifiants d'échantillon complets uniques 12 non manquants et l'identité du nombre de gènes par échantillon |
| Produits livrables | Un tableau de contrôle plus le résultat arithmétique de chaque échantillon |
| Limites | En lecture seule; pas de nouveaux paquets; pas d'interprétation différentielle-expression |

1. Créer/configurer le [rôle](./identity.md) et le confirmer est activé.
2. Dans la conversation **Agent controls**, activez **Delegation**. Confirmer le modèle prévu et l'authentification de travail.
3. Demandez à Main Agent de déléguer explicitement, d'identifier le rôle et de fournir la tâche complète. Si vous utilisez le fichier handoff, laissez l'application résoudre les versions actuelles; ne pas inventer d'IDs ou passer des noms de fichiers comme références de version.
4. Regardez l'activité de délégation et la situation de l'enfant. Une phrase de progrès de Main Agent n'est pas le dossier de l'enfant.
5. Ouvrez l'aperçu de la puce enfant / **Subagents**. Sélectionnez la tâche dans **Subagent Frame** et lisez sa transcription, les résultats de l'outil et l'état du terminal.
6. Répondre à toute demande d'autorisation d'enfant dans la conversation parentale après avoir inspecté sa portée. Ensuite, comparez le résultat retourné avec les vérifications d'acceptation demandées.

## Vérifiez la remise et le résultat retourné {/* #check-the-handoff-and-returned-result */}

### Vérifiez une petite table en ligne {/* #verified-example-twelve-sample-invariants */}

<p className="example-label"><strong>Exemple pratique</strong> Déléguer une vérification de table de douze exemples</p>

Téléchargez le <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">échantillon-QC CSV</ExampleDownload> complet et collez son en-tête et les douze lignes immédiatement sous la requête. Conservez toutes les colonnes et les identificateurs d'échantillon complets. L'exemple utilise le rôle activé créé dans [Identité Specialist](identity.md); Python doit être activé pour son arithmétique. Aucun Skill supplémentaire n'est nécessaire pour ce contrôle limité.

> Délégué à RNA-seq QC examinateur. N'utilisez que la ligne complète CSV ci-dessous. Exécutez l'arithmétique en Python, vérifiez douze identifiants d'échantillon complets distincts et vérifiez zero_count_genes + detected_genes_count_gt_0 = 27179 pour chaque ligne. Retournez chaque résultat et indiquez que ces vérifications ont fourni des données sommaires, et non un accès indépendant à la matrice de comptage originale.

![La sous-tâche Specialist complétée avec des vérifications par échantillon](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.webp)

Dans cet exemple, l'enfant a lancé un Python Notebook et a retourné **12 lignes, 12 identifiants distincts non manquants, et 12/12 sommes égales à 27,179**. Pour le premier ID de l'échantillon complet, `8,664 + 18,515 = 27,179`. Les champs numériques étaient complets et non négatifs.

Ceci vérifie la cohérence du résumé fourni. Elle ne peut pas reproduire indépendamment les totaux/médecins à partir de la matrice originale, valider les conditions d'échantillonnage ou établir des seuils de qualité biologique.

<span id="check-file-handoff-and-a-separate-model" />

### Choisir un modèle séparé {/* #choose-a-separate-model */}

Définir un modèle pour enfant indépendamment de Main.



Choisissez un modèle fixe sous **Settings → Model → Subagent** avant de déléguer. Ouvrir le registre de l ' enfant pour vérifier son modèle réel; l'étiquette modèle de la conversation principale n'identifie pas l'enfant. Dans la configuration exercée, Main a utilisé `gpt-5.6-sol` et l'enregistrement d'exécution d'enfant a utilisé `gpt-5.6-luna`, à la fois par l'authentification d'abonnement Codex.

### Passer un fichier à l'enfant {/* #pass-a-file-to-the-child */}

<p className="example-label"><strong>Exemple</strong> Maintenez un exemple de fichier QC à une tâche enfant</p>

1. Joindre le fichier source dans le menu des pièces jointes de la conversation et attendre que le téléchargement soit terminé.
2. Demandez à Main de transmettre cette version téléchargée exacte à l'enfant. Nommez les contrôles et les résultats requis; ne remplacez pas un nom de fichier ou un ID de version deviné pour le fichier.
3. Ouvrez **Subagents** et sélectionnez l'enfant. Dans **Notebook**, sélectionnez cet enfant dans le filtre **Agent** et vérifiez la lecture du fichier réel.
4. Comparer le nombre de rangées de l'enfant, les noms de colonnes et le somme de contrôle avec la source. Ouvrez sa sortie sauvegardée et vérifiez le calcul demandé.

Pour le [métriques de l'échantillon public CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv), attendez **Lignes de données 12** et **269,027,617** comme la somme de `total_counts`. La somme des contrôles d'entrée doit rester inchangée. Ces contrôles concernent le résumé de l'échantillon fourni; ils ne recalculent pas la matrice originale du nombre de gènes.

| Vérifier | Preuves requises |
| --- | --- |
| Version acceptée | L'application a résolu la version de téléchargement/artefact immuable en cours dans sa propre session. |
| L'enfant peut lire | l'outil de l'enfant a retourné le contenu du fichier; un nom de fichier ou un chemin mis en scène seul est insuffisant. |
| Vérifications effectuées | L'enfant a effectué le calcul et son résultat enregistré est d'accord avec la source. |

Si l'application signale une entrée non disponible, réaccrochez le fichier et réessayez en utilisant sa version actuelle. Si l'enfant signale **`PermissionError: [Errno 1] Operation not permitted`**, conservez l'erreur exacte et [le rapporter](../guides/troubleshooting.md) si la réattachement ne récupère pas la lecture. Ne déplacez pas les fichiers dans les dossiers d'applications internes pour contourner l'erreur.

### Faire un Skill à la disposition de l'enfant {/* #make-a-skill-available-to-the-child */}

Importer ou créer le Skill d'abord. Pour un Specialist, assignez-le sous [Skills et connecteurs](capabilities.md) du rôle; puis commencer une nouvelle tâche déléguée qui nomme explicitement la méthode. Demandez à l'enfant de lire les instructions installées avant de les utiliser.

Inspecter l'activité de l'outil de l'enfant pour l'identité et le contenu de Skill chargé. Par exemple, `rnaseq-count-qc` nécessite une matrice de nombre de gènes bruts et décrit le QC descriptif; un résumé d'échantillon de douze rangées n'est pas une entrée interchangeable. Une lecture réussie d'un paquet ne signifie pas que l'analyse a été effectuée. Vérifiez l'exécution et les résultats enregistrés séparément.

## Lire les échecs avec précision {/* #read-failures-accurately */}

| État observé ou soutenu | Signification et récupération |
| --- | --- |
| Délégation hors | Allumez-le pour la conversation prévue avant de réessayer. |
| Rôle désactivé / configuration incomplète | Terminer la configuration et activer le rôle sauvegardé prévu. |
| Entrée non disponible lors de cette session | Obtenez la version actuelle exacte de l'artefact ou une référence immuable de version de téléchargement. Un chemin, un ID artefact et un ID de version sont des valeurs différentes. |
| En attente d'autorisation | Inspecter l'opération en attente de l'enfant désigné; Main Agent peut attendre plutôt que de calculer. |
| Enfant achevé | Lire le résultat et les preuves de l'outil; l'achèvement n'est pas une garantie d'exactitude scientifique. |
| Annulé / échoué | Conserver la sortie partielle et l'erreur réelle. N'étiquetez pas le remplacement d'un agent Main comme une vérification Specialist complétée. |

Le tracé en ligne n'est approprié que pour un tableau complet et limité dont la portée des preuves est indiquée; il n'est pas un remplacement général pour la lignée de fichiers.

Référence de mise en œuvre: [CompositeurAgentContrôlesMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [SpécialisteSubmenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx).
