---
title: "Recettes Skill"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Recettes Skill {/* #skill-recipes */}

Choisissez une recette par son matériel de départ et la décision que vous devez prendre. Gardez la procédure dans le Skill, les fichiers réels dans un projet, et le résultat vérifie dans la conversation.

| Situation en matière de recherche | Commencez par | Skills et outils | Produit livrable et contrôle d'acceptation | Itinéraire et conditions préalables |
| --- | --- | --- | --- | --- |
| Décider si une table de comptage RNA-seq téléchargée est prête pour l'analyse | Matrice de comptage brut et adhésion à la source | Compte-qc-rnaseq personnalisé; Python/R Notebook | Rapport structurel, mesures de l'échantillon, identifiants d'origine et hash d'entrée inchangé | Exemple local de Notebook; activé Python/R |
| Réconcilier deux implémentations de l'échantillon QC | sorties Python et R CSV | Notebook; rnaseq-count-qc prescriptions | joignez-vous à l'échantillon complet d'identification et comparez toutes les mesures; l'exemple GSE60450 correspond aux valeurs 48 | Exemple local de Notebook; activé Python/R |
| Faire un autre contrôle de rôle un résultat avant de le partager | Compléter le tableau QC et les invariants explicites | RNA-seq QC examinateur Specialist | Transcription séparée de l'enfant et montants de 12 par échantillon; distinguer les preuves en ligne de l'accès au fichier original | exemple de tableau de bord; activé Specialist et Python |
| Préparer une liste de lecture pour une nouvelle question | Une question ciblée et une graine DOI/PMID | Revue de littérature; Littérature/connecteurs de données | Identifications récupérées, justification de l'inclusion et lacunes en texte intégral non résolues | Exemple de collection PRISMA; littérature de travail Connector |
| Élaboration d'un dossier de recherche pour une population définie | Population, indication et portée des questions | Dossier d'indication; sources de recherche | Preuve datée, reprise des dossiers de point de cheminement et revendications non étayées | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Transformer un graphique exploratoire en figure de rapport | Données validées et revendication spécifique | Style de la figure | Image réouverte avec unités, étiquettes d'échantillons, légende et traçabilité des données | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Construisez un chiffre de résultat multi-panneau | Versions de réclamation et de données immuables | Compositeur de figure + Style de figure | Esquisse de la commission, image assemblée et constatations de l'examen; exécuté à partir de Main Agent | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Vérifiez si un jeu de figures supporte un manuscrit | Manuscrit, légendes, pont à commande complète | Exposé des motifs | a) Arguments de chiffres ordonnés et lacunes dans les preuves; nouvelles expériences non fabriquées | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Trouver la cause d'une erreur de paquet manquant | Erreur exacte et temps d'exécution sélectionné | Environnement & Packages | Inspection de la version installée, installation gérée dans la mesure du possible, test d'importation du noyau redémarré | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Préparer un environnement éloigné pour un travail répété | Un hôte et un paquet SSH/Slurm existants | Configuration de l'environnement de calcul + calcul à distance | environnement désigné et preuves de la sonde/de la course; la configuration de l'hôte appartient à l'utilisateur/l'administrateur; | Voir le calcul à distance pour Direct SSH; Slurm nécessite une comptabilité |
| Comparer les prévisions de la structure protéique | Définition des séquences/complexes valides | AlphaFold2, Boltz, Chai-1, ESMFold2 ou OpenFold3 | Structure et correspondance de confiance et d'entrée; poids configurés/GPU requis | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |
| Reconception d'une colonne vertébrale avec des résidus fixes | BAD, cartographie en chaîne et contraintes de conception | ProtéinesMPNN / LigandMPNN / SolubleMPNN | c) Cartographie de séquence à chaîne et contrôles des contraintes; Le support du processeur dépend de la méthode | Exemple de petite protéineMPNN CLI; d'autres méthodes ont besoin de leur propre configuration |
| Intégrer les lots monocellulaires | AnnData, étiquettes de lots et dénombrements originaux | scvi-tools ou scGPT | Les sorties du modèle ont été vérifiées par rapport aux identifiants de cellules ou de gènes; Cela ne s'applique pas directement aux comptes de vrac | Méthode adaptable; préparer les intrants énumérés et les dépendances propres à la méthode; |

## Reproduisez la recette locale RNA-seq {/* #reproduce-the-local-rna-seq-recipe */}

<p className="example-label"><strong>Exemple pratique</strong> Exécuter et inspecter le compte RNA-seq QC</p>

1. Utilisez le [GSE60450 entrées et échantillon QC](../reference/example-data.md) réel.
2. Créer ou importer [Compte-qc](./create.md).
3. Envoyer une requête limitée en utilisant le [Exemple d'invocation Skill](./overview.md).
4. Ouvrez le <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">rapport de validation</ExampleDownload> généré. Comparer les gènes attendus de 27,179 et les colonnes d'échantillonnage de 12 avec les valeurs observées, et non avec le plafond de la ligne d'aperçu.
5. Si une seconde opinion est requise, utilisez [Délégué et vérifier](../specialists/delegate.md) et consultez la transcription de l'enfant.

## Donnez une recette une finition claire {/* #give-a-recipe-a-clear-finish */}

Une requête utile nomme la source, la méthode requise, les fichiers de sortie et les vérifications d'acceptation. Par exemple:

> Utilisez l'échantillon GSE60450 existant-QC CSV pour faire une figure de rapport avec le style de la figure. Conservez toutes les pièces d'identité de l'échantillon dans la table d'accompagnement, étiquetez les unités de comptage brutes, conservez la source, enregistrez une nouvelle figure et rouvrez-la pour inspecter toutes les étiquettes. Signaler toute dépendance non disponible avant de modifier la méthode.


Référence de mise en œuvre: [manifeste.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [COUVERTURE](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md).

Pour les travaux à long terme soutenus, suivez [Tâches de base et réalisation des résultats](../guides/notebook.md#background-tasks-and-result-delivery). Inspecter les sorties réelles et enregistrées après la livraison. Environnement & Packages, Configuration de l'environnement de calcul et calcul à distance (SSH) restent activés, mais leurs exigences d'exécution, de réseau et d'hôte s'appliquent toujours.
