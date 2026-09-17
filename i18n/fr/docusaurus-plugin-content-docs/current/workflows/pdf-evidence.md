---
title: "Vérifiez la réclamation d'un papier en regard de ses chiffres et de son supplément"
last_update:
  date: '2026-09-16'
---

# Vérifiez la réclamation d'un papier en regard de ses chiffres et de son supplément {/* #check-a-papers-claim-against-its-figures-and-supplement */}

<p className="example-label"><strong>Exemple pratique</strong> Que signifie l'efficacité du catalyseur 98.9%?</p>

Un numéro d'ordre n'est utile que lorsque ses conditions métriques et expérimentales sont claires. Ce flux de travail prend un papier catalyseur et son supplément, localise les éléments de preuve pour une réclamation et enregistre un rapport court séparant le résultat rapporté d'interprétations plus larges.

**Produit livrable :** un tableau des revendications/preuves/conditions/limites en anglais avec la page PDF et les références de chiffres. Il s'agit d'une vérification de source, et non d'une réplication expérimentale indépendante.

## Préparer les matériaux d'origine {/* #prepare-the-original-materials */}

Utilisez [*Une méthode universelle médiée par le ligand pour la synthèse à grande échelle des catalyseurs à atome unique de métal de transition*](https://www.nature.com/articles/s41467-019-12510-0) de Yang et al., DOI `10.1038/s41467-019-12510-0`.

1. Télécharger l'article PDF depuis la page de l'éditeur et le **Renseignements supplémentaires** PDF sous **Informations complémentaires**. Gardez-les comme des fichiers séparés.
2. Dans un projet Open-Science, ouvrez une conversation et sélectionnez un modèle de travail.
3. Choisissez **+ → Attach files** et joignez les deux PDF. Ouvrez le PDF principal pour vérifier son titre et DOI. Les fichiers exemples contiennent des pages d'article principal 9 et des pages de supplément 52.

Vérifiez que **les deux noms de fichiers** apparaît au-dessus de la requête envoyée. Cliquer sur un nom de fichier ouvre son aperçu; la commutation entre les deux vous permet de vérifier à quel document une page citée appartient.

![L'article et le supplément sont joints à la demande de vérification des preuves.](/img/open-science/research-workflows/catalyst-two-inputs.webp)

## Poser une question spécifique sur la preuve {/* #ask-a-specific-evidence-question */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

Approuver les demandes de lecture prévues lorsqu'elles sont demandées. Si le lecteur signale une page invalide ou un document illisible, raffinez la demande ou ouvrez la page PDF pertinente vous-même. Ne traitez pas une récupération infructueuse comme une preuve de l'absence d'un chiffre.

## Ouvrir les preuves citées {/* #open-the-cited-evidence */}

Dans l'aperçu PDF, utilisez le contrôle de page pour ouvrir **page 6**, qui contient **Figure 6** et les résultats pertinents. Comparez la légende avec le texte. Ouvrir les pages de supplément **47–49** pour les figures **51–53**.

![Figure 6 de l'article original et conditions expérimentales dans Open-Science](/img/open-science/research-workflows/catalyst-figure6-source.webp)

La source rapporte **98.9% Efficacité Faradaic au CO à −1.2 V versus RHE** pour Ni-SAC-2.5. L'expérience de durabilité utilise **−0.8 V pour 20 heures**. Ces conditions doivent rester distinctes: ces dernières n'établissent pas la durabilité de 20-heure au potentiel de sélectivité maximale. L'efficacité Faradaic décrit la charge attribuée à un produit; il n'est pas le même que l'efficacité énergétique ou la fraction du CO2 entrant converti.

Ce supplément fournit les chiffres du produit hydrogène, de la RMN et de l'échelle. Une légende lisible ne fournit pas nécessairement chaque point numérique dans une trace tracée. Gardez cette distinction dans le rapport.

Pour passer à une page, élargissez l'aperçu PDF, cliquez sur son compteur de page, entrez le numéro complet et appuyez sur **Entrez**. Vérifier le compteur qui en résulte avant de lire. La page supplémentaire 47 contient **Figure supplémentaire 51**, dont l'axe est **H2 Efficacité Faradaique**; il ne doit pas être confondu avec le résultat principal du CO.

![Figure supplémentaire 51 sur la page réelle PDF 47 de 52](/img/open-science/research-workflows/catalyst-supplement-47.webp)

## Vérifiez et enregistrez le rapport {/* #check-and-save-the-report */}

Après la réponse complète, ouvrez **catalyst-claim-check.md**. Vérifiez l'identité de la source, les numéros de page, les étiquettes des figures et le libellé de la conclusion. En particulier, le rapport devrait conserver **résultat communiqué** et éviter de transformer une vérification de la littérature en allégation de reproduction expérimentale.

![Rapport sur la réclamation, la preuve, les conditions et les limites sauvegardées](/img/open-science/research-workflows/catalyst-claim-report.webp)

Téléchargez le <a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>exemple de rapport</a> pour sa structure. Avant d'utiliser une conclusion scientifique dans votre propre travail, inspectez les preuves originales citées et toute correction d'éditeur. Pour extraire des éléments de preuve de figure ou de table dans un fichier distinct, voir [Extraction de PDF](../guides/previews.md#pdf-extraction).
