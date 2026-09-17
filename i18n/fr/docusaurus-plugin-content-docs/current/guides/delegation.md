---
title: "Délégation et Side Chat"
last_update:
  date: '2026-09-17'
---

# Délégation et Side Chat {/* #delegation-and-side-chat */}

Utilisez Side Chat pour discuter d'une question à côté de votre tâche actuelle, ou délégation pour donner à un autre agent une tâche distincte. Pour poursuivre une conversation complète dans une direction différente, utilisez un [branche de session](sessions.md).

## Side Chat {/* #side-chat-availability */}

### Quand l’utiliser {/* #when-to-use-it */}

Ouvrir Side Chat pour expliquer un terme dans un résultat d'analyse, comparer deux approches ou discuter de la façon de rédiger un rapport. Après la discussion, envoyez le conseil que vous choisissez à la conversation principale, Main.

### Mode d’emploi {/* #how-to-use-it */}

1. Dans une session existante, ouvrez **More send options → Side chat** à côté du bouton Envoyer. Vous pouvez l'ouvrir avec un Compositeur vide : un nouveau brouillon Side Chat apparaît immédiatement. Écrivez la question là, vérifiez le modèle et l'effort de raisonnement, puis envoyez-la.
2. Lisez la réponse dans son onglet d'aperçu **Side chat** indépendant. Utilisez **Side chat follow up** pour poser plus de questions. Vous pouvez garder plusieurs discussions parallèles sous la même session et basculer entre leurs onglets tout en continuant à utiliser Main.
3. Pour partager des conseils avec Main, demandez explicitement à Side Chat de les relayer. Par exemple : -Envoyez ce conseil à Main : Expliquez la gestion de la valeur manquante dans une partie distincte du rapport.--Vérifiez le message marqué **Side chat** dans Main. Si Main est inactif, envoyez votre prochaine demande pour poursuivre le travail.
4. Utilisez **Cancel Side chat response** pour arrêter la réponse actuelle. Pour conserver la discussion, laissez son onglet ouvert et passez à un autre onglet ou repliez la zone d’aperçu.

Un projet contenant du texte ou des annotations survit à des vues de commutation. Un jet vide intact est jeté quand vous le quittez; l'ouverture d'un projet à elle seule n'envoie pas de demande modèle.

### Déplacer une annotation vers le bon brouillon {/* #move-an-annotation-to-the-right-draft */}

Pour un passage ou une région sélectionné, utilisez l'action **Move to Side chat…** de l'annotation et choisissez une discussion latérale existante ou une nouvelle. Vous pouvez également faire glisser des annotations entre Main et un brouillon Side Chat. Vérifiez la destination et le contenu transféré avant d'envoyer: déplacer une annotation prépare un brouillon; elle ne présente pas de demande.

Les signets privés **For me** sont un outil de lecture différent; Voir [Lecture des signets](bookmarks.md).

### Points à retenir {/* #things-to-know */}

- **Paramètres du modèle :** Un nouveau Side Chat hérite du modèle et de l'effort de raisonnement de la conversation principale actuelle. Vous pouvez les modifier dans Side Chat; la sélection s'applique à son prochain envoi. Les abonnements Codex sont pris en charge. Vérifiez le sélecteur avant d'envoyer.
- **Transmission et actions :** Les réponses ordinaires ne sont pas automatiquement envoyées à Main. Side Chat ne peut pas accorder les permissions de Main; confirmer la livraison avant de demander à Main de prendre des mesures.
- **Fermeture d’un onglet :** Lire **Close Side chat?** avant de confirmer. Fermer l’onglet arrête ce Side Chat et supprime définitivement la conversation enregistrée. Sélectionnez **Cancel** pour le conserver et transférez des conseils utiles vers Main ou un rapport enregistré avant de fermer. Si le nettoyage échoue, l'onglet retourne; Inspecter l'erreur avant de réessayer.
- **Disponibilité :** Depuis v0.30.2, une exécution ou une attente d’approbation dans Main ne bloque pas à elle seule Side Chat. Envoyez d’abord au moins un message dans Main. Une session importée en lecture seule ou une session parente indisponible empêche son ouverture. L’envoi attend aussi l’enregistrement et la restauration de l’historique. Side Chat n’accepte pas les pièces jointes. Suivez le message du bouton ; pour les problèmes de connexion, consultez le [dépannage](troubleshooting.md).

## Délégation de tâches {/* #task-delegation */}

### Quand l’utiliser {/* #when-to-use-it-1 */}

Travail de délégué qui peut être géré indépendamment, comme vérifier les sources de documentation, inspecter un fichier de données ou examiner les résultats de l'analyse, puis laisser l'agent principal combiner les constatations. Pour les assistants réutilisables avec des rôles définis, voir [Délégation de Specialist](../specialists/delegate.md).

### Mode d’emploi {/* #how-to-use-it-1 */}

1. Vérifiez **Delegation** dans **Agent controls** du Compositeur.
2. Dans **Settings → Model → Subagent**, choisissez l'héritage dans le modèle principal ou configurez un modèle séparé compatible et un effort de raisonnement.
3. Décrivez la tâche à déléguer, ses fichiers d'entrée, les résultats attendus et les critères d'acceptation dans votre demande.
4. Suivez le statut de la sous-tâche dans les entrées d'activité et répondez à toute demande de permission.
5. Ouvrez les fichiers retournés ou les liens source pour vérifier le résultat. Pour inspecter les enregistrements d'exécution, sélectionnez le propriétaire correspondant dans le filtre **Agent** de Notebook.

### Points à retenir {/* #things-to-know-1 */}

- Les capacités disponibles dépendent du cadre et de la configuration de l'agent. Après avoir autorisé la délégation, vérifiez les entrées d'activité pour confirmer qu'une sous-tâche a effectivement commencé.
- Les sous-agents ne peuvent pas partager toutes les variables de contexte ou Python de Main. Fournir les fichiers et les instructions nécessaires à la tâche.
- L'approbation du plan de Main n'approuve pas automatiquement chaque action sous-agent. Vérifiez l'action et la portée spécifiques lorsque l'autorisation est demandée.
- Lorsque **Release** est disponible, utilisez-le pour terminer ou libérer la ressource sous-tâche. Les preuves de Main sont conservées.
