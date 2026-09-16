---
title: "Organisation avec tags"
last_update:
  date: '2026-09-16'
---

# Organisation avec tags {/* #organizing-with-tags */}

Les étiquettes organisent **Skills, Connecteurs, Spécialistes et Références**. Ils ne sont pas une étiquette universelle sur chaque session ou fichier disque arbitraire. Utilisez **Settings → Tags** pour créer des balises et parcourir les ressources qui leur sont attribuées.

Après l'attribution d'une balise, ouvrez son détail et sélectionnez une ressource répertoriée pour la retourner. L'élimination de l'attribution des étiquettes laisse la ressource elle-même en place.

## Créer et modifier {/* #create-and-edit */}

1. Ouvrez **New Tag**, entrez un nom et choisissez son icône et sa couleur.
2. Sélectionnez **Create**. Vérifiez la nouvelle ligne et l'état de la ressource zéro.
3. Choisissez **Edit Tag** pour revoir les valeurs actuelles. **Save** commet une modification; **Cancel** rejette le projet.

![Transcriptomics tag formulaire](/img/open-science/guides-walkthrough/30-tag-create.png)

| Champ/contrôle | Options et comportement |
| --- | --- |
| Nom | Requis; les noms sont uniques, quel que soit le cas. |
| Icône | Étiquette, Étoile, Signet, Flask, Livre, Base de données, Code ou Bot. |
| Couleur | Gris, Rouge, Orange, Ambre, Vert, Bleu, Violet ou Rose. |
| Créer / Enregistrer | Créer une nouvelle balise ou enregistrer l'édition d'une balise existante; les noms vides ne peuvent pas être soumis. |
| Annuler / Revenir aux balises | Laissez le formulaire sans enregistrer son projet actuel. |

Si l'enregistrement renvoie **Impossible d'enregistrer Tag**, comparez le nom avec les balises existantes, y compris les différences de cas seulement, et reessayez avec un nom unique. Cette erreur est générique; il n'établit pas par lui-même la cause de chaque échec sauf.

## Affecter et trouver des ressources {/* #assign-and-find-resources */}

Ouvrez le Skill, Connector, Specialist ou Reference et utilisez son contrôle d'étiquette pour sélectionner l'étiquette. Retourner à Paramètres → Mots-clés et sélectionnez la ligne d'étiquettes. Lisez le nombre de ressources, puis utilisez **Filter resources by type** et **Search tagged resources** ensemble. Le sélecteur de type offre toutes les ressources, Skills, connecteurs, spécialistes et références. Effacer la recherche et réinitialiser le type si une ressource attendue est manquante.

Dans le sélecteur d'étiquettes de la ressource, tapez **Rechercher des balises**, utilisez **↑ / ↓** pour passer à travers les matches et **Entrez** pour sélectionner. Si le nom n'existe pas, choisissez **Créer un nom** pour le créer et l'assigner. Vérifiez la balise sélectionnée après l'enregistrement.

Un nom de balise seul ne connecte pas un service, n'accorde pas la permission ou n'ajoute pas de Skill à un Agent. Ces contrôles demeurent sur la ressource et ses liens de capacité.

<p className="example-label"><strong>Exemple pratique</strong> Trouvez les archives d'Omics via une étiquette Transcriptomics</p>

Assignez **Transcriptomique** à **Archives Omics**, puis ouvrez le détail de la balise. Dans cet exemple, il montre **Ressources de 1**; recherche `Omics` garde que Connector visible, et la sélection il ouvre ses détails. Utilisez vos propres noms d'étiquette et de ressource lors de la répétition de ces étapes. L'élimination de l'affectation laisse la ressource intacte.

![Ressources des archives d'Omics assignées trouvées par son étiquette](/img/open-science/guides-walkthrough/35-tagged-connector.png)

## Commandez la liste des étiquettes {/* #order-the-tag-list */}

**Favorites** reste en premier. Faites glisser **Récommander &#91;nom&#93;**, ou concentrez la poignée et utilisez les touches fléchées, pour déplacer une balise personnalisée. Vérifiez sa nouvelle position dans la liste.

![Commande d'étiquettes et vue vide des ressources](/img/open-science/guides-walkthrough/31-tag-reorder.png)

## Supprimer une balise {/* #remove-a-tag */}

Sélectionnez **Delete Tag** et inspectez **Attributions à supprimer**. Supprimer la balise supprime ces affectations mais garde les ressources. **Cancel** conserve à la fois la balise et ses attributions.

![Suppression du champ d'application, annulée dans ce passage](/img/open-science/guides-walkthrough/32-tag-delete-boundary.png)

Si votre but est seulement de supprimer une tâche, faites-le sur la ressource plutôt que de supprimer la balise partout. Utiliser [Bibliothèque de références](./library.md) pour organiser les documents en collections; les étiquettes et les collections servent à des fins différentes.

Sources: [Panneau d'étiquettes](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx), [des ressources affectées](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx).
