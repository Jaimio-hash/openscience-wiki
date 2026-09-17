---
title: "Contexte de mémoire et de conversation"
last_update:
  date: '2026-09-10'
---

# Contexte de mémoire et de conversation {/* #memory-and-conversation-context */}

La mémoire stocke des notes réutilisables; la fenêtre contextuelle est le matériel disponible pour une demande de modèle particulière. Une note sauvegardée n'est pas une preuve qu'un agent l'a rappelée, et un ancien message visible n'est pas une preuve que l'historique original entier correspond à la demande suivante.

Utilisez une catégorie pour les conventions durables comme la conservation des comptes bruts et la séparation de la longueur des gènes des comptes d'échantillons. Activer la mémoire et la catégorie de rappel automatique lorsque vous voulez que ces conventions soient fournies à de nouvelles requêtes.

## Créer une catégorie et une note {/* #create-a-category-and-note */}

<p className="example-label"><strong>Exemple pratique</strong> Enregistrer et rappeler une convention de déclaration RNA-seq</p>

1. Ouvrez **Settings → Memory → New category**.
2. Entrez `RNA-seq methods` comme **Name**. Dans **When should the agent save a note here?**, décrire quand une méthode confirmée appartient à cette catégorie.
3. Réglez **Auto-recall** délibérément. Cet exemple l'a oublié pour une note de méthode maintenue manuellement.
4. Sélectionnez **Create**, puis **Add**. Entrez la note et sélectionnez **Save**.
5. Laissez et rouvrez la catégorie pour vérifier son contenu et compter.

![Nom de la catégorie, guide et rappel automatique](/img/open-science/guides-walkthrough/17-memory-category.webp)

La note sauvegardée se lit comme suit : « Gardez la matrice de calcul GEO originale inchangée. Préserver les ID Gene d'Entrez comme texte, séparer la longueur des gènes des nombres d'échantillons, et enregistrer l'entrée SHA-256 avec chaque table dérivée.

![Note enregistrée manuellement pendant que la mémoire est désactivée](/img/open-science/guides-walkthrough/18-memory-note.webp)

| Contrôle | Effet et limite |
| --- | --- |
| Commutateur de mémoire | Activer/désactiver l'enregistrement et le rappel de l'agent. Off conserve les notes existantes et permet des modifications manuelles. |
| Catégorie ligne | Montrez les notes de cette catégorie et comptez. Catégories de mémoire liée au groupe à travers les projets. |
| Vue du projet | Afficher les notes projetées; la distinguer d'une catégorie mondiale. |
| Nouvelle catégorie | Nommez jusqu'à 64 caractères, guidance jusqu'à 1,000; Catégories personnalisées 10 maximum. |
| Ajouter / Note mémoire | Créez une note allant jusqu'à 4,000 caractères. Le texte vide conserve Save indisponible. |
| Copier la note | Reçu son texte. |
| Modifier la note → Enregistrer / Annuler | Persistez le texte révisé ou jetez-le. |
| Actions de catégorie → Modifier | Changez le nom d'une catégorie personnalisée, les conseils et les rappels automatiques. |
| Actions de catégorie → Rappel automatique | Contrôler l'inclusion automatique pour cette catégorie; l'interrupteur de mémoire principal s'applique toujours. |

**About you** est une catégorie intégrée. Son identité ne peut pas être éditée ou supprimée comme une catégorie personnalisée.

## Sauvegarder une convention d'une conversation {/* #save-a-convention-from-a-conversation */}

1. Allumez **Settings → Memory → Memory**. Ouvrez **RNA-seq methods → Category actions** et activez **Auto-recall**.
2. Dans votre conversation sur le projet, demandez à l'agent de se souvenir d'une convention confirmée et de nommer la catégorie. Par exemple : -Rappelez-vous des méthodes RNA-seq : pour le Qc descriptif GSE60450, rapportez les gènes à nombre zéro séparément des gènes détectés ; les deux nombres doivent se chiffrer à 27,179 pour chaque échantillon.
3. Inspecter la demande **Save memory** lorsque l'approbation est requise. Vérifiez le contenu, la catégorie et la portée du projet proposés avant de sélectionner **Allow once**. Choisissez **Deny** s'il ne représente pas une convention convenue.
4. Rouvrir la catégorie. Vérifiez que la note existe, a le texte prévu et apparaît dans le projet prévu. L'étiquette **auto** identifie une note créée par un agent; il ne s'agit pas d'un calcul vérifié par la convention.

![Une convention de déclaration créée par l'agent à côté de la note de conservation de source manuelle](/img/open-science/non-workflow-completion/05-memory-note-category.webp)

## Vérifiez le rappel dans une nouvelle conversation {/* #check-recall-in-a-new-conversation */}

Démarrer un **nouvelle conversation dans le même projet** et demander quelle convention de reporting sauvegardée s'applique, sans fournir la réponse. Comparez la réponse avec votre note. Une question dans la conversation originale peut être répondue à partir de son histoire existante.

Éteignez le bouton principal **Memory** et répétez la question dans une autre nouvelle conversation. Vérifiez que l'agent ne reçoit plus la note par la mémoire de l'application. Vos notes sauvegardées restent dans Paramètres. Désactiver la mémoire n'efface pas une note ou ne supprime pas le texte déjà présent dans une conversation existante.

L'enregistrement ci-dessus a suivi une demande explicite de rappel. Il ne démontre pas que l'agent identifiera spontanément chaque convention utile. Le compactage de contexte est séparé de l'enregistrement d'une note mémoire.

## Inspecter le contexte de la conversation {/* #inspect-conversation-context */}

Dans une session, ouvrez le pourcentage **Contexte utilisé** ou **Add menu → Context window** lorsque disponible. Inspecter **Current composition**, **History** et **Session call summary**. Les catégories peuvent inclure l'invite système, les outils et les agents, les messages, les connecteurs et MCP, Skills et les frais généraux du cadre.

Sélectionnez un point d'historique pour inspecter son fonctionnement, son modèle, son occupation et son état terminal. Les estimations locales et les mesures déclarées par les fournisseurs peuvent différer; les détails de catégorie non disponibles ne sont pas une utilisation nulle. Un marqueur de compactage enregistre un événement contextuel, pas un nouvel artefact sauvegardé ou la suppression de chaque message visible. Les contrôles de compactage manuel dépendent du cadre actif.

Lorsque OpenCode fournit **Compact** dans le popover contextuel, sélectionnez-le et attendez **Context compacted**. Les messages originaux peuvent rester visibles pendant que le moteur continue à partir d'un résumé. Avant de continuer, demandez à l'agent d'énumérer les contraintes retenues et de les comparer avec vos exigences. Rétablir les contraintes manquantes ou incorrectes avant de commencer la prochaine opération. Le compactage ne garantit pas une rétention sans perte; Les mesures effectuées par les fournisseurs peuvent différer des estimations locales.

![Compactage terminé et mesure du contexte déclaré par le fournisseur](/img/open-science/non-workflow-completion/11-context-compacted.webp)

Pour une suite, indiquez l'objectif actuel, les décisions acceptées, les fichiers d'entrée/sortie exacts, la validation déjà faite et les questions non résolues. Liez les preuves enregistrées plutôt que de compter sur Mémoire pour les reconstruire. Utilisez [Sessions et sections](./sessions.md) pour les ramifications/exportations et [Utilisation](./usage.md) pour le volume cumulatif des jetons.

## Supprimer uniquement le champ d'application prévu {/* #delete-only-the-intended-scope */}

**Delete note** supprime une note après confirmation. **Delete category** supprime la catégorie et ses notes; Inspecter le compte touché. **Clear all** supprime les catégories et les notes personnalisées tout en conservant A propos de vous. Annuler lorsque la portée est plus grande que prévu. Les sauvegardes plus anciennes peuvent toujours contenir des notes supprimées.

Sources: [Schéma de mémoire](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts), [Panneau de mémoire](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx), [visionneur de contexte](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx).
