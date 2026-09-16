---
title: "Connecteurs et MCP"
last_update:
  date: '2026-09-10'
---

# Connecteurs et MCP {/* #connectors-and-mcp */}

Un Connector expose les outils qu'un agent peut appeler. Utilisez cette page pour choisir le type d'intégration et comprendre l'état de préparation. Pour la configuration champ par champ, l'importation/exportation et la gestion de la connexion, suivez [Configurer les connecteurs](../guides/connectors.md).

<span id="inspect-an-existing-connector" />

<span id="connection-and-call-errors" />

## Choisissez un type de connexion {/* #choose-a-connection-type */}

| Type | Utilisez-le quand | Besoins |
| --- | --- | --- |
| Connector intégré | L'application fournit déjà la source de données ou l'exploitation requise | Activez-le pour l'agent visé; certains services nécessitent également des pouvoirs |
| Serveur local MCP | Un outil doit fonctionner sur cet ordinateur ou lire les données de recherche disponibles localement | Un lanceur, un serveur et des chemins d'entrée autorisés |
| Serveur à distance MCP | Un service expose ses outils à travers un terminal MCP hébergé | Le paramètre MCP réel, supporté le transport HTTP/SSE et toute authentification requise |

**Molecule** fournit un rendu de la structure locale; Ce n'est pas une base de données distante. Choisissez une source dans [Bases de données scientifiques](databases.md) ou utilisez [Vérificateurs scientifiques](viewers.md) pour inspecter les fichiers moléculaires et séquentiels. Sélectionner un lanceur Docker n'installe pas de moteur de conteneur ou d'image de serveur.

## Une connexion distincte de la disponibilité {/* #distinguish-connection-from-availability */}

Vérifiez ces étapes dans l'ordre. Passer n'établit pas que l'autre a réussi.

| Étape | Quoi vérifier | Action suivante |
| --- | --- | --- |
| Configuration | Le lanceur ou le paramètre correct et l'authentification requise | Remplir la [Formulaire Connector](../guides/connectors.md) |
| Connexion | Le serveur répond et ses outils sont découverts | Inspecter le résultat de la connexion et les erreurs réelles |
| Accès aux agents | La ressource est activée pour Main ou assignée à la Specialist prévue | Vérifier les liaisons de capacité de cet agent |
| Fonctionnement | L'outil choisi accepte la demande et retourne les données requises | Utiliser la [Référence de l'opération](../reference/connector-operations.md) pour les entrées intégrées |
| Résultats de la recherche | Les identifiants retournés, la source et la portée correspondent à la tâche | Inspecter la réponse avant de l'utiliser comme preuve |

Un commutateur activé n'est pas un appel de service réussi. Une réponse aux métadonnées n'est pas un texte complet téléchargé ou une matrice de comptage. Une ligne personnalisée peut ouvrir son éditeur de configuration; les détails intégrés fournissent les spécifications de l'outil.

## Choisissez l'étape suivante {/* #choose-the-next-step */}

| Tâche | Instructions Main |
| --- | --- |
| Ajouter/modifier un serveur, importer plusieurs serveurs ou transférer la configuration | [Configurer les connecteurs](../guides/connectors.md) |
| Bind API touches ou identifiants OAuth | [Pouvoirs de service](credentials.md) |
| Implémenter un petit serveur et appeler ses outils | [Créer un outil personnalisé](custom.md) |
| Rechercher les champs d'exploitation de la base de données | [Référence de fonctionnement Connector](../reference/connector-operations.md) |
| Gérer les connexions à partir de scripts | [CLI](../reference/cli.md#manage-connectors-and-credentials) ou [SDK](../reference/api.md#connector-management-methods) |

## Diagnostiquer l'étape défaillante {/* #diagnose-the-failing-stage */}

Pour les défaillances de connexion, identifiez si le lanceur, le transport ou l'authentification ont échoué. Si la connexion réussit mais qu'un appel échoue, vérifiez la disponibilité de l'agent et les arguments de cet outil avant de modifier la configuration du serveur. Signalez l'erreur retournée en utilisant [Dépannage](../guides/troubleshooting.md).

La découverte de MCP est effectuée pendant la connexion. `host.mcp("server", "tools/list", {})` n'est pas un appel d'outil d'application et peut renvoyer **outil inconnu**. L'exemple personnalisé a également fait apparaître une défaillance interne de l'échantillon inconnu comme `connector_unavailable`; Cette réponse ne distingue pas un échantillon invalide d'une défaillance du transport.
