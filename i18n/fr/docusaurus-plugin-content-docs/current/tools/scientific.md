---
title: "Outils scientifiques"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Outils scientifiques {/* #scientific-tools */}

N'effectuez un calcul scientifique qu'après que son environnement d'entrée et d'exécution réel soit clair. Choisissez un Notebook local, un Connector ou un coureur externe selon la méthode et ses dépendances.

## Choisissez où le calcul est effectué {/* #choose-where-the-calculation-runs */}

| Itinéraire | Travaux appropriés | Vérification de l'état de préparation |
| --- | --- | --- |
| Python Session Notebook | Analyse des données, synthèses numériques et tracés | Paquets d'exécution et d'installation Bound Python |
| R Session Notebook | Analyse et paquets R | Activer l'exécution R liée à cette session |
| Connector intégré | Récupération de bases de données ou fonctionnement déterministe soutenu | Connector disponible pour l'agent, identifiants/réseau au besoin |
| Calcul à distance | Logiciels spécifiques à l'hôte, GPU ou travaux par lots | Hôte, environnement et planificateur éligibles |

Une commande shell n'est pas interchangeable avec une exécution Session Notebook : leur durée d'exécution, leurs entrées montées et leur provenance peuvent différer. Demander explicitement l'itinéraire prévu.

## Paquets et dépendances {/* #packages-and-dependencies */}

| Étape | Que faire | Résultat obtenu |
| --- | --- | --- |
| Inspecter | Demande `inspect_packages` dans la langue/l'heure prévue | Statut et versions installés/manquants |
| Installer | Utiliser la prise en charge `manage_packages` flux pour l'environnement lié | Sortie de l'installateur terminée, non seulement l'installation a commencé. |
| Redémarrer | Redémarrer/rebinder le noyau si l'application le demande | La cellule suivante utilise l'environnement actualisé |
| Vérifier | Importer le paquet dans le même Notebook | Version réelle et une petite opération de travail |

Si l'installation du paquet retourne HTTP CONNECT 403, vérifiez le nom d'hôte du paquet concerné et [Paramètres réseau](../guides/network.md) avant de réessayer. Utilisez un paquet existant seulement lorsqu'il supporte la méthode dont vous avez besoin; un calcul réussi ne signifie pas qu'une installation de colis a été réparée.

## Exécuter et vérifier un calcul local RNA-seq {/* #execute-and-verify-a-local-rna-seq-calculation */}

<p className="example-label"><strong>Exemple pratique</strong> Vérifier les nombres de niveaux d'échantillon dans la matrice GSE60450</p>

1. Joindre le [Entrée GSE60450](../reference/example-data.md).
2. Sélectionnez l'exécution Python ou R Notebook. Inspectez sa version avant d'installer quoi que ce soit.
3. Demander la dimension de la matrice complète et les contrôles d'intégrité du compte; exclure `EntrezGeneID` et `Length` des colonnes de l'échantillon.
4. Calculer les nombres totaux, les gènes nuls, les gènes détectés et la médiane parmi les gènes détectés pour chaque ID d'échantillon complet.
5. Enregistrer le nouveau rapport CSV, graphique et méthodes. Conserver la source inchangée et comparer son SHA-256 avant/après.
6. Rouvrir toutes les sorties. vérifier le nombre d'échantillons, les étiquettes et les valeurs; Inspecter le code et les journaux Notebook.

Comparer les identifiants de sortie et les métriques avec le [exemple de référence](../reference/example-data.md). Conserver l'entrée brute inchangée. Les dénombrements descriptifs n'établissent pas d'expression normalisée, d'expression différentielle ou de conclusion clinique.

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">Comparaison R/Python</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Validation Skill</ExampleDownload>.

## Concevoir une petite séquence de protéines sur CPU {/* #design-a-small-protein-sequence-on-cpu */}

<p className="example-label"><strong>Exemple pratique</strong> Concevoir des séquences de candidats pour l'épine dorsale 1UBQ</p>

Cette route suit le **Protéines officiellesMPNN CLI** sur l'ubiquitine humaine, PDB 1UBQ chaîne A. Il crée un candidat chacun avec la vanille et des points de contrôle solubles. Il s'agit d'un calcul de repli inverse conditionné sur une colonne vertébrale existante.

### Préparer le coureur et les poids {/* #prepare-the-runner-and-weights */}

Utilisez un Python pris en charge avec `venv` et pip, Git, accès Internet et un dossier en écriture. Les commandes suivantes sont pour les shells macOS/Linux. Sur Windows, utilisez le `.venv\Scripts\python.exe` correspondant et définissez `CUDA_VISIBLE_DEVICES` en utilisant la syntaxe de votre shell.

```bash
mkdir protein-design
cd protein-design
git clone https://github.com/dauparas/ProteinMPNN.git
git -C ProteinMPNN checkout 8907e6671bfbfc92303b5f79c4b5e6ce47cdef57
python3 -m venv .venv
.venv/bin/python -m pip install torch numpy
.venv/bin/python -c "import sys, torch, numpy; print(sys.version); print(torch.__version__, numpy.__version__)"
.venv/bin/python -m pip freeze > environment.txt
```

La commande par sondage comprend `vanilla_model_weights/v_48_020.pt` et `soluble_model_weights/v_48_020.pt`; confirmer l'existence des deux fichiers. Télécharger le <ExampleDownload path="/examples/capabilities/1UBQ.pdb">Entrée 1UBQ</ExampleDownload> dans `protein-design` sous `1UBQ.pdb`. Gardez l'entrée de séquence séparée des dossiers de sortie.

Cette configuration installe des paquets dans un environnement virtuel externe. Si pip ne signale aucune distribution compatible, choisissez une version Python prise en charge par la roue PyTorch disponible avant de réessayer. Enregistrer `environment.txt`; changer Python, PyTorch ou NumPy peut changer la sortie numérique. Si un ancien environnement virtuel ne trouve plus son interpréteur de base après une mise à jour du système, recréez-le avec le Python actuellement compatible.

### Exécutez les deux modèles et enregistrez leurs sorties {/* #run-both-models-and-save-their-outputs */}

À partir de `protein-design`, lancez :

```bash
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --num_seq_per_target 1 --batch_size 1 --sampling_temp 0.1 --seed 42 \
  --out_folder outputs/vanilla
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --use_soluble_model --num_seq_per_target 1 --batch_size 1 \
  --sampling_temp 0.1 --seed 42 --out_folder outputs/soluble
```

Les deux commandes utilisent la chaîne A, une séquence, la température 0.1 et la semence 42. Effacer la visibilité de l'appareil CUDA permet à ce coureur d'utiliser CPU. S'attendre à `outputs/vanilla/seqs/1UBQ.fa` et `outputs/soluble/seqs/1UBQ.fa`; garder leurs noms séparés lors de leur importation ou de leur publication.

Pour exécuter via Open-Science, donnez le dossier préparé en utilisant **Your files → Grant folder…**, puis demandez à l'agent d'exécuter ces commandes avec le **chemin Python absolu** de l'environnement et ce répertoire de travail. Inspectez le commandement et la portée au moment de l'approbation. Demandez-lui de publier les deux FASTA et un rapport de comparaison, puis rouvrez les trois dans **Files**. Un fichier laissé seulement dans le répertoire de travail a encore besoin de publication.

:::caution&#91;Chargement du paquet Skill&#93; Si le modèle intégré Skill échoue la validation du chemin du paquet, signalez cette erreur par [Dépannage](../guides/troubleshooting.md). La route CLI ci-dessus reste une méthode séparée; L'exécution réussie de CLI n'établit pas que le chargement natif de Skill fonctionne. :::

### Vérifiez les séquences conçues {/* #check-the-designed-sequences */}

![Réalisation du rapport de comparaison du CPU local et réouverture](/img/open-science/local-todo-batch/42-cpu-model-comparison.png)

Les sorties enregistrées dans cet exemple contenaient les résultats suivants :

| Sortie | Résidus conçus | Score | Récupération contre les natifs |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">ProtéinesMPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">SolubleMPNN FASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

Chaque FASTA contient **deux enregistrements** : la séquence native d'abord, puis le seul candidat conçu. Contrôles indépendants confirmés acides aminés canoniques, résidus 76 par enregistrement, scores finis, récupération directement recalculée et PDB SHA-256 inchangé. Les octets d'artefact sauvegardés correspondaient aux sorties du coureur. Le <ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">rapport de comparaison</ExampleDownload> enregistre les paramètres et les limitations. Les résultats de cette comparaison à un candidat ne permettent pas d'établir quel modèle produit un meilleur pliage, une meilleure solubilité ou une meilleure fonction.

## Diagnostic par l'étape défaillante {/* #diagnose-by-the-failing-stage */}

| Symptôme | Prochaine vérification |
| --- | --- |
| Pas d'exécution / R non disponible | Installer ou activer l'interprète [Environnements d'exécution](../guides/runtimes.md), alors liez-la. |
| ImporterError / ModuleNotFoundError / aucun paquet appelé | Inspectez l'environnement sélectionné et utilisez l'installation de paquets gérés. |
| Unknown Skill / helper du noyau invalide | Distinguer un paquet de méthode à partir d'un helper Notebook callable réel. |
| Version d'entrée non disponible / fichier introuvable | Résoudre l'entrée actuelle exacte par l'application; ne devinez pas un chemin. |
| Défaut de réseau/HTTP | Garder l'hôte, le fonctionnement et le statut réel; Utilisation [contrôle du réseau](../guides/network.md) et [guide d'erreur](../guides/troubleshooting.md). |
| La sortie n'existe que dans un répertoire de travail | Publiez-le par l'intermédiaire de l'artefact pris en charge et rouvrez la version sauvegardée. |
| Pas de bloc producteur / environnement partiel | Conserver la limitation; ne fabriquent pas de preuves manquantes. |

Pour les emplois à distance, inspecter séparément l'état de préparation, la soumission, l'état et la production récoltée. Le [Exemple Direct SSH RNA-seq](../guides/remote-compute.md) a été achevé et ses sorties ont été vérifiées de façon indépendante. La surveillance des terminaux Slurm nécessite une comptabilité lisible. Le même chapitre documente maintenant un A100 ProteinMPNN vérifié avec un environnement CUDA isolé et des contrôles de sortie indépendants. Les méthodes compatibles avec le CPU restent évaluables séparément.

Pour les travaux à long terme soutenus, suivez [Tâches de base et réalisation des résultats](../guides/notebook.md#background-tasks-and-result-delivery). Inspecter les sorties réelles et enregistrées après la livraison. Environnement & Packages, Configuration de l'environnement de calcul et calcul à distance (SSH) restent activés, mais leurs exigences d'exécution, de réseau et d'hôte s'appliquent toujours.

Référence de mise en œuvre: [cahiers.ts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts), [COUVERTURE](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md), [COUVERTURE](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md).
