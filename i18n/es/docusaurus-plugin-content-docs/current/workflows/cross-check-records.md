---
title: "Comprobar dos fuentes de datos científicos"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Comprobar dos fuentes de datos científicos {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>Ejemplo práctico</strong> GISTEMP de la NASA y las anomalías anuales de la temperatura global HadCRUT</p>

Dos fuentes pueden estar en desacuerdo porque sus definiciones difieren. Antes de interpretar una discrepancia, alinear las unidades, intervalo de tiempo y período de referencia. Este ejemplo compara dos conjuntos de datos de temperatura anual reales sobre **1980–2024**, después de rebasar cada uno a **1991–2020**. Guarda una tabla alineada, una figura de dos paneles, un script Python y un informe de métodos.

## 1. Obtenga los archivos fuente y compruebe sus definiciones {/* #1-obtain-the-source-files-and-check-their-definitions */}

Descargue el CSV anual de [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) y la serie anual de análisis ensemble-mean de [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html). Utilice los nombres de archivo guardados `NASA-GISTEMP-v4-original.csv` y `HadCRUT5-original.csv`.

| Entrada | Valor anual | Base de referencia para la anomalía original |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` columna, °C | 1951–1980 |
| HadCRUT5.1.0.0 | Conjunto anual significa, °C; mantener los límites de confianza | 1961–1990 |

El archivo de la NASA comienza con una línea descriptiva antes de su encabezado y utiliza `***` para valores no disponibles. No interprete ese marcador como cero. Las identidades de origen registradas y los enlaces de descarga están en <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">las notas de la fuente de ejemplo</ExampleDownload>; Los archivos del proveedor pueden ser revisados después de esta ejecución.

Abra un proyecto y adjunte ambos CSVs con **+ → Attach files**. En **Settings → Runtimes**, asegúrese de que Python es **Ready** y está habilitado. Esta carrera utilizó Python 3.12.14, NumPy 2.5.3, pandas 2.3.3, Matplotlib 3.11.1 y Pillow 12.3.0.

![Los dos CSV fuente adjunta a la solicitud de comparación](/img/open-science/workflow-extensions/temperature-input.png)

## 2. Solicitar alineación antes de la interpretación {/* #2-ask-for-alignment-before-interpretation */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

Inspeccione el archivo propuesto leer y código Python antes de aprobar. Abra **Notebook** para comprobar que el cálculo se completó. Si hay un error, resuelva y vuelva a correr antes de interpretar un informe o una figura.

## 3. Compruebe la tabla alineada {/* #3-check-the-aligned-table */}

Abre **temperature-aligned.csv**. La comparación registrada contiene **45 años compartidos**. Cada fuente tiene todas las estimaciones anuales de puntos **30** necesarias para su referencia 1991–2020; no faltaba un valor anual lleno de cero.

![Los valores y diferencias anuales mejorados](/img/open-science/workflow-extensions/temperature-table.png)

Los medios subcontratados son **0.61266667 °C** para la NASA y **0.53799554 °C** para HadCRUT. Retraer el propio medio de cada conjunto de datos, no un solo offset de ambos. Compruebe la unidad, año y dirección de resta antes de comparar las diferencias numéricas.

## 4. Lea la figura y la comparación numérica {/* #4-read-the-figure-and-numerical-comparison */}

Abre **temperature-comparison.png**. El primer panel conserva las diferentes bases de referencia originales; el segundo compara las dos series después de la rebasamiento de los períodos comunes.

![Curvas de temperatura de base original y de base común en Open-Science](/img/open-science/workflow-extensions/temperature-plot.png)

| Resultado registrado, NASA menos HadCRUT | Valor |
| --- | --- |
| Significa diferencia | 0.00514589 °C |
| RMSE | 0.01829900 °C |
| Máxima diferencia absoluta | 0.04632368 °C, en 2024 |

Las cifras son resultados para estas instantáneas descargadas. Las diferencias restantes pueden reflejar la cobertura, el infilling, las observaciones de origen y las opciones de procesamiento. Los conjuntos de datos comparten observaciones y son **no mediciones estadísticamente independientes**. Tampoco se designa la verdad terrestre.

## 5. Guardar el método y rehacerlo {/* #5-save-the-method-and-rerun-it */}

Abra **temperature-crosscheck.md** y compare sus definiciones de origen y métricas con el CSV y el código. La tabla conserva los límites de confianza originales de HadCRUT y sus valores mecánicamente cambiados, pero la comparación hace que **no** difunda la incertidumbre en la base de referencia estimada o dependencia entre los recursos.

![El informe guardado documenta las métricas y limitaciones reales](/img/open-science/workflow-extensions/temperature-report.png)

Descargue el <ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">CSV alineado</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">gráfico</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Python script</ExampleDownload> y <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">informe</ExampleDownload>. Con los dos archivos de entrada disponibles, repetir en un entorno Python que contiene las bibliotecas listadas:

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

El script grabado también se ejecutó en un proceso Python local separado; su CSV alineado coincide con el CSV de la aplicación guardado exactamente. Un cheque de acuerdo evalúa esta computación, no todas las opciones metodológicas en el producto climático.
