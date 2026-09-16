---
title: "Faire une figure traçable avec des barres d'erreur"
last_update:
  date: '2026-09-16'
---

# Faire une figure traçable avec des barres d'erreur {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>Exemple pratique</strong> Température et conductivité électrique</p>

Vous avez besoin d'une figure scientifique dont les points tracés et l'incertitude peuvent être retracés à une table de données. Cet exemple illustre la conductivité électrique de l'oxyde de zinc dopé d'aluminium (AZO) et de l'iodure de cuivre (CuI), en conservant les écarts types signalés par l'éditeur.

**Produit livrable :** un PNG anglais et SVG, le CSV tracé et un fichier de méthodes courtes. L'exemple utilise des données publiées, et non une nouvelle expérience.

## Préparer les données et leur signification {/* #prepare-the-data-and-its-meaning */}

Le [papier source](https://www.nature.com/articles/s44172-024-00291-4) fournit un manuel de données source. L'exemple CSV transcrit les colonnes A, D et E de **Fig.6a supplémentaire** et **Fig.6b supplémentaire**, lignes **3–15** : température, conductivité électrique et SD rapporté. Il contient **Températures 13 par matériau**, couvrant **275–390 K**.

Téléchargez les <a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>CSV préparé</a> et <a href="/docs/examples/research-workflows/conductivity-source.md" download>Notes sources</a>. Le CSV conserve la feuille et la ligne d'origine pour chaque point. L'article décrit le DD à partir de cinq mesures par température; Les mesures de répétition individuelles ne sont pas fournies dans ces colonnes, de sorte que ce workflow ne recalcule pas le SD.

1. Créez un projet avec un modèle de travail et un [Python temps d'exécution](../guides/runtimes.md) activé.
2. Ouvrez une conversation et attachez les deux fichiers en utilisant **+ → Attach files**.
3. Confirmez les colonnes et unités numériques avant de tracer : **K** pour la température et **S m—1** pour la conductivité et son SD.

Cliquez sur le CSV ci-joint pour ouvrir l'aperçu. Il doit montrer **Lignes 26 · Colonnes 6**, y compris le matériau, la température, la conductivité, le SD et la feuille/ligne source. Ouvrir aussi la note source; l'exécution capturée a utilisé le nom de fichier `README.md` pour la note fournie ici comme `conductivity-source.md`.

![Tableau de conductivité joint avec valeurs, unités et lignes sources](/img/open-science/research-workflows/conductivity-input.png)

## Demandez le chiffre et les données qui le sous-tendent {/* #ask-for-the-figure-and-the-data-behind-it */}

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

Examinez tout code ou demande de colis, puis inspectez le résultat réel de Notebook. Un graphique décrit dans la réponse n'est pas encore un chiffre enregistré.

Choisissez **Notebook** dans la conversation. Ouvrez la cellule Python complétée et inspectez sa sortie : lignes totales 26, lignes 13 pour chaque matériau, la plage 275–390 K et la figure tracée. Si la résolution d'entrée échoue, demandez à l'Agent d'utiliser le CSV attaché à cette conversation, puis vérifiez une exécution réussie avant de poursuivre.

![L'exécution réelle Notebook rapporte les vérifications d'entrée et rend le graphique](/img/open-science/research-workflows/conductivity-notebook.png)

## Vérifiez le chiffre et l'exportation {/* #check-the-figure-and-export */}

Ouvrez le PNG généré. Confirmer que les deux matériaux sont distinguables, que les paramètres sont visibles, que l'état des axes et la note d'incertitude indiquent **DD déclaré**. Les lignes ne relient que les mesures; la descente dans la conductivité AZO après 300 K reste visible.

![Prévisualisation réelle de Open-Science de la conductivité et barres d'erreur SD rapportées](/img/open-science/research-workflows/conductivity-figure.png)

Ouvrez **plotted-conductivity.csv** et comparez-le avec l'entrée. Dans cette exécution, tous les **Lignes 26** ont conservé les températures, les valeurs de conductivité, les SD et les identités de feuille de source/ligne. Ouvrez **conductivity-methods.md** pour vérifier la définition de DOI source et d'incertitude.

La zone **Generated** doit contenir quatre fichiers. Ouvrez le fichier de méthodes et utilisez l'icône de téléchargement dans chaque aperçu pour enregistrer la version que vous avez cochée. Si une sortie est manquante, demandez que le fichier spécifique et rouvrez-le; un PNG réussi ne prouve pas que le SVG ou la table de données ont été sauvegardés.

![Les quatre sorties sauvegardées et la note des méthodes rouvertes](/img/open-science/research-workflows/conductivity-methods.png)

Utilisez PNG pour le partage rapide et SVG où l'artwork vectoriel est utile. Les <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG</a>, <a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG</a>, <a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>données tracées</a> et <a href="/docs/examples/research-workflows/conductivity-methods.md" download>méthodes</a> sont disponibles pour comparaison.

Pour vos propres mesures, décidez si les barres d'erreur doivent afficher le SD, l'erreur standard ou un intervalle de confiance avant de demander un tracé. Donnez à l'agent les mesures brutes requises ou l'incertitude déjà calculée, ainsi que sa définition. Gardez l'incertitude manquante explicite.
