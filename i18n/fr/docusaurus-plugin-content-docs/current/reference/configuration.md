---
title: "Configuration et contexte"
last_update:
  date: '2026-09-10'
---

# Configuration et contexte {/* #configuration-and-context */}

Cette référence sépare le contexte du projet, les par défaut de nouvelle session et la configuration d'une session existante. Utilisez [Projets](../guides/projects.md) ou [Configuration du fournisseur](../guides/providers.md) pour l'interface correspondante.

## Contexte et propriété de la configuration {/* #context-and-configuration-ownership */}

| Valeur | Propriétaire et effet | Ne remplace pas |
| --- | --- | --- |
| Projet **Name** | Nom d'affichage du projet, requis, maximum de caractères 200 | Un identifiant de projet unique |
| Projet **Description** | Description de la liste des projets, nombre maximal de caractères 1,000; non inclus dans l'invite de l'agent | Instructions de l'agent |
| Projet **Agent Context** | les caractères maximums de 16,000; inclus dans les nouvelles sessions de projet et les reprises de celles-ci et envoyé au fournisseur modèle | Pouvoirs ou demande de tâches exécutée |
| Session **Title** | Afficher le titre, le maximum de caractères 80 | Contexte du projet ou identificateur de branche |
| Session **Description** | Description organisationnelle, maximum de caractères 1,000 | Un nouveau message utilisateur |
| Fournisseur de modèles | Catalogue de connexions, de comptes et de modèles configurés | Installation d'un cadre d'agents |
| Framework d'agents | Temps d'exécution utilisé pour effectuer la tâche | Un interprète Notebook |
| Python/R temps d'exécution | Interprète utilisé pour l'exécution Notebook | Un modèle ou son réglage raisonnement-effort |
| Mémoire | Notes stockées avec leur propre champ d'application et contrôles de rappel | Historique complet de la conversation |
| Compétence | Instructions et fichiers de méthode réutilisables | Un certificat de dépendance ou de service déjà installé |

## Avancé: Configuration de la tâche API {/* #advanced-task-api-configuration */}

### Nouvelles sessions créées par la Tâche API {/* #new-sessions-created-through-the-task-api */}

Le coureur de tâches résout chaque champ séparément. La priorité suivante s'applique à une session **nouveaux** Tâche API, pas rétroactivement à toutes les conversations de bureau existantes.

| Champ | Résolution, priorité absolue |
| --- | --- |
| Profil d'autorisation | Demande explicite d'exécution → par défaut de session de projet → par défaut d'application → `ask` |
| Révision automatique | Demande explicite → par défaut du projet → `false` |
| Mémoire activée | Demande explicite → par défaut du projet → `true` |
| Politique de délégation | Demande explicite → par défaut du projet → `allow` |
| Spécialiste | Requête explicite → par défaut du projet lorsque défini |
| Fournisseur/modèle/raisonnant | patch de configuration explicite sur la configuration du projet, ou la configuration effective de l'application/fournisseur |
| Hôtes de calcul sélectionnés | Expliciter les IDs sélectionnés → les IDs sélectionnés du projet |

Les Hôtes de calcul activés incorporent également les ID sélectionnés lors de la préparation de la nouvelle session. Une liste d'hôtes explicitement vide efface la liste d'hôtes héritée avant que les hôtes sélectionnés ne soient inclus. Pour une mise à jour de configuration de session existante, chaque ID sélectionné doit être présent dans l'ensemble activé.

Utilisez la référence [CLI](cli.md) ou [Tâche SDK/API](api.md) pour les commandes réelles de lecture/mise à jour. Les par défaut de session de projet sont un contrat de configuration; ne pas supposer que la boîte de dialogue Nom/Description du projet expose tous ces champs.

### Valeurs de configuration acceptées {/* #accepted-configuration-values */}

| Champ | Valeur acceptée |
| --- | --- |
| `agentConfiguration.providerId` | ID du fournisseur configuré non vide |
| `agentConfiguration.model` | ID du modèle en option; un patch de mise à jour peut utiliser `null` à réinitialiser au fournisseur par défaut |
| `agentConfiguration.reasoningEffort` | `default`, `low`, `medium`, `high`, `xhigh`, `max`; sélectivité réelle dépend du fournisseur/modèle |
| `permissionProfile` | `ask`, `auto`, `full` |
| `autoReviewEnabled` | Booléen |
| `memoryEnabled` | Booléen |
| `delegationPolicy` | `allow`, `deny` |
| `specialistId` dans les projets par défaut | Identification non vide; pas un champ dans le patch de configuration de session ordinaire |
| `computeHosts.enabled`, `.selected` | les tableaux d'identificateurs d'hôte non vides; sélectionné doit être un sous-ensemble de activé |

Les schémas rejettent les champs inconnus. La présence d'un modèle affiché ne garantit pas qu'il peut être sélectionné avec le cadre ou les identifiants actuels. Utilisez le catalogue configuré et le résultat de disponibilité.

### Par défaut du fournisseur et configurations non disponibles {/* #provider-defaults-and-unavailable-configurations */}

Pour un fournisseur d'abonnement, laisser le modèle non spécifié préserve le compte/CLI par défaut. Il ne pine pas le premier modèle répertorié dans le catalogue. Si une configuration de session sauvegardée n'est plus sélectionnable, le résolveur de rendu peut utiliser la configuration active de l'application sélectionnable; s'il n'y en a pas non plus, il n'est pas disponible. Inspectez le modèle sélectionné lors de la réouverture d'un ancien travail après avoir changé de fournisseur.

### Mettre à jour et reprendre les règles {/* #update-and-resume-rules */}

Lisez la configuration actuelle d'une session existante avant de l'éditer. Inclure son **`expectedRevision`**, un entier non négatif, avec la mise à jour. Le serveur rejette une révision obsolète sous la forme de `session_revision_conflict`. Il rejette également les mises à jour pendant que la session a un travail actif ou est en dehors de l'état d'inactivité/erreur.

Un changement de fournisseur nécessite soit un modèle explicite ou `model: null` pour choisir la valeur par défaut du nouveau fournisseur. L'omission du modèle tout en changeant de fournisseur ne porte pas silencieusement le modèle d'un ancien fournisseur à travers. Une réinitialisation du modèle est différente d'une chaîne vide.

Pour changer de fournisseur, de modèle, d'effort de raisonnement, de mémoire ou d'hôtes de calcul activés avant de reprendre une session Task API existante, utilisez d'abord l'opération de mise à jour de configuration de session. L'approvisionnement de ces champs de création-temps dans une demande de CV renvoie `invalid_request`. Le répertoire de travail doit toujours correspondre au répertoire canonique de la session.

Les mises à jour par défaut de projet utilisent **`expectedUpdatedAt`**, un entier timestamp positif du projet actuel, et un patch. Un champ par défaut de projet `null` supprime ce qui remplace; o l'émission du champ le préserve. La mise à jour des valeurs par défaut régit la création future de la session et ne réécrit pas les données de sortie existantes.

## Instructions de l'hôte et choix de stockage secret {/* #host-instructions-and-secret-storage-choices */}

Les instructions de l'hôte de calcul sauvegardé et les ressources détectées sont séparées. Un document d'instruction enregistré vide est distinct d'une sonde de ressources réussie. Le remplacement assisté par l'agent doit utiliser le texte courant sauvegardé comme garde. Voir [coordonnées de l'hôte](../guides/remote-compute.md#keep-host-instructions-separate-from-detected-resources); ce contrat interne est séparé de la Tâche publique API.

Le stockage Crédentiel est un choix de démarrage, pas une préférence de projet/session. Voir [Mode fichier Linux](server.md#credential-storage-on-headless-linux) pour la portée, OS-store par défaut et les limites de migration. Ne placez pas un drapeau d'identification dans la configuration de session JSON.

## Limites connexes {/* #related-boundaries */}

Pour l'approbation des champs d'application et de l'ordonnance, utilisez [Autorisations](permissions.md). Pour les documents portables Skill/Specialist/Connector, utilisez [Formats de paquets](packages.md). Une exportation de paquets n'est pas un dump de configuration de session ou de secrets de compte stockés. Pour la différence entre une session de bureau et le service web local, utilisez [Service sans tête](server.md).

Sources: [contrat d'accueil](https://github.com/aipoch/open-science/commit/04adfd61), [mode d'identification de démarrage](https://github.com/aipoch/open-science/commit/3411d23c).

Référence technique: [contrats de projet](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [schémas de configuration](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [résolution du pilote de tâche](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [retour du fournisseur](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
