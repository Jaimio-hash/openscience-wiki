---
title: "Service sans tête et accès au navigateur"
last_update:
  date: '2026-09-14'
---

# Service sans tête et accès au navigateur {/* #headless-service-and-browser-access */}

Le service local fournit un moteur sans tête et une interface de navigateur local hôte. Il est distinct d'un hôte SSH Compute et de l'appariement du navigateur Remote.It. Choisissez les paramètres d'authentification et de stockage des justificatifs pour l'hôte avant de connecter un client.

## Sélection des cibles et découverte {/* #target-selection-and-discovery */}

| Sélecteur | Portée |
| --- | --- |
| `--port PORT` | Surpasser le port de service local d'hôte; entier valide 1–65535 |
| `--app-path PATH` | Sélectionnez une application exécutable installée; utiliser le chemin exécutable, pas un dossier de projet arbitraire |
| `--config-root PATH` | le dépassement de la configuration de développement-construction; le démarrage emballé le rejette |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | Dépassement explicite de la découverte de configuration où pris en charge |
| Découverte automatique | Essayez la configuration de développement avant la production, en sautant les candidats morts ou malsains |

Un emplacement de configuration explicite limite la découverte à ce répertoire. Vérifier l'état du profil prévu avant de le démarrer ou de l'arrêter. Si l'état renvoie `running:false`, suivez les commandes du cycle de vie ci-dessous; une fenêtre de bureau ouverte peut utiliser un autre service/profil.

Le fichier de l'état de service est `web-service.json`. L'échec de l'authentification n'est pas la permission de tuer son processus enregistré. Le code d'arrêt préserve les dossiers insalubres vivants pour le diagnostic et évite de signaler un ID qui peut avoir été réutilisé par un autre processus.

## Initialiser et vérifier la préparation {/* #readiness */}

Utilisez `open-science init` pour préparer le répertoire de configuration par défaut sans démarrer l'application. `--profile` alias `--config-root` uniquement lorsque les dépassements de profil de développement sont supportés; il ne contourne pas la restriction relative à la construction emballée. Les paquets Debian installent le CLI à côté de l'application. Voir [configuration du terminal](cli.md#terminal-setup) pour la préparation et la connexion Codex.

Après un `start --no-open` intentionnel, lancez `open-science doctor --json`. Inspecter globalement `ready`, vérifier les données individuelles et proposer des mesures à prendre; le code de sortie du processus à lui seul n'est pas un verdict de préparation. Gardez le service sur son interface locale existante authentifiée. Démarrer ce service sans tête ne configure pas Remote.It ou ne publie pas un paramètre public.

## Commandes du cycle de vie {/* #lifecycle-commands */}

| Commande | Résultat | Options et limites |
| --- | --- | --- |
| `open-science start` | Démarrez le moteur et ouvrez le navigateur | Port par défaut 44100 |
| `open-science start --no-open` | Démarrer sans ouvrir un navigateur | Utilisation pour une session de service local intentionnel |
| `open-science status --json` | État de service lisible par machine d'impression | Un service manquant revient `{"running":false}` et du code de sortie 1 |
| `open-science url` | Imprimer l'URL du navigateur authentifié | Contient une autorité locale d'accès; ne pas coller dans des exemples publiés |
| `open-science stop` | Demande authentifiée de fermeture gracieuse | Ne signale pas aveuglément un PID à partir d'un fichier d'état statique |
| `open-science stop --json` | Signaler le résultat de l'arrêt | Voir le tableau des résultats ci-dessous. |

Parmi ces commandes, **statut et arrêt du soutien `--json`; début et url ne**. La vérification locale `start --json` a renvoyé `invalid_cli_usage` avec le code de sortie 2 avant de commencer quoi que ce soit. Pour un lancement scripté, lancez `start --no-open`, puis `status --json`.

### Résultats de l'arrêt {/* #shutdown-outcomes */}

| JSON `result` | Signification |
| --- | --- |
| `already-stopped` | Aucun dossier de service en direct trouvé |
| `daemon-stopped` | Démon autonome authentifié sorti |
| `web-service-stopped` | Le service Web joint a cessé; l'application de bureau reste en cours d'exécution |

Une demande rejetée ou une date limite d'arrêt manquée renvoie un échec. Lisez l'erreur et inspectez l'état réel de la cible. Ne déclarez pas un service comme étant arrêté simplement parce que la commande est retournée.

## Authentification et accès au navigateur {/* #authentication-and-browser-access */}

Le SDK découvre le service local et lit son jeton d'authentification locale, l'envoyant dans les en-têtes de requête. La sortie de tâche ordinaire human/JSON/JSONL n'affiche pas ce jeton. `url` est l'exception intentionnelle qui produit une entrée de navigateur authentifiée.

Un service local hôte n'est pas automatiquement accessible à partir d'un autre ordinateur. L'accès au navigateur à distance utilise son propre mode d'accès configuré, l'appariement et le cycle de vie du navigateur fiable. SSH Compute envoie plutôt des tâches aux hôtes d'exécution distants configurés.

Utilisez [Accès au navigateur à distance](../guides/remote-access.md) pour l'appariement Remote.It et [Calcul à distance](../guides/remote-compute.md) pour les emplois SSH. Aucun des flux n'est configuré en modifiant l'URL de documentation du service local.

### Stockage des titres de créance sur Linux sans tête {/* #credential-storage-on-headless-linux */}

La valeur par défaut est le stockage protégé par OS. Sur un moteur sans tête Linux sans clé utilisable, choisissez une alternative explicite :

<p className="example-label"><strong>Exemple</strong> Démarrer un service sans tête Linux avec stockage des justificatifs de fichiers</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| Choix | Comportement |
| --- | --- |
| Option oubliée / --credential-store=os | Nécessite le magasin protégé par OS |
| --credential-store=fichier | Autoriser les secrets de configuration non chiffrés sur Linux headless seulement |
| Lancement de bureau, macOS ou Windows | Le mode fichier n'est pas pris en charge |
| Déjà lancé le moteur | La sélection du mode explicite est rejetée; il ne change pas le mode de ce processus |
| Prochain démarrage | Précisez à nouveau le mode; ce n'est pas une préférence sauvée |

Le mode fichier utilise settings.json et identity.json sous la racine de configuration, avec des écritures atomiques et le mode POSIX 0600. La valeur du fichier:v1: est encodée en base64, **non chiffrés**. Quiconque peut le lire peut récupérer le secret; exclure ces fichiers des dépôts, des images et des rapports de support.

Le choix s'applique aux nouvelles clés de fournisseur gérées par les paramètres, aux jetons d'abonnement gérés par l'application, aux clés GitHub/litérature et aux secrets partagés MCP/OAuth. Calculer les mots de passe/protégées Les données de calcul conservent leur exigence de stockage OS séparé; les magasins de connexion à cadre d'agent externe suivent leurs propres règles. Aucun bac à sable n'est désactivé par cette option.

Les valeurs cryptées existantes ne sont pas automatiquement migrées et nécessitent toujours leur voûte OS d'origine. S'il n'est pas disponible, entrer de nouveau le titre de compétence par le biais de la forme supportée normale. Les références de fichiers nécessitent un mode de fichier explicite à lire et sont incompatibles avec les anciennes versions. Pour retourner un titre de compétence au stockage OS, redémarrez en mode OS et remplacez-le explicitement pendant que le coffre est disponible.

Utiliser un stockage persistant lorsque la configuration doit survivre au remplacement du contenant. L'arrêt conserve la configuration; Le remplacement d'un système de fichiers conteneur jetable peut l'enlever. Voir le [contrat d'entreposage des titres de créance](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md).

## Comportement de mise à jour de l'application {/* #application-update-behavior */}

`open-science update` met à jour l'application installée. Mettre à jour le client npm séparément. La commande peut commencer un service local au besoin et laisser ce service disponible ultérieurement.

| `update --json` Résultat | Interprétation |
| --- | --- |
| `up-to-date` | Aucune nouvelle version applicable trouvée |
| `install-started` | Updater a accepté le retrait de l'installation; la version finale installée n'est pas vérifiée par cette invocation |
| `manual-action-required` | Suivre le chemin d'installation/étape suivante |
| `blocked` | La recherche active empêche une mise à jour en place; inspecter `blockedBy` |

Le support nécessite la capacité de service `update-cli-v1`. Les installations plus anciennes peuvent nécessiter une mise à jour manuelle au lieu d'une procédure distante devinée. Conserver le résultat imprimé et vérifier la version de l'application après l'installation.

[Mise en œuvre du cycle de vie et des découvertes](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs), [découverte de configuration](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs). Pour les drapeaux des tâches et les codes de sortie, voir [CLI](./cli.md); pour les appels programmatiques, voir [Tâche SDK](./api.md).
