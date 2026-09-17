---
title: "Cuadros y conjuntos de datos"
last_update:
  date: '2026-09-14'
---

import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

import ExampleDownload from '@site/src/components/ExampleDownload';

# Cuadros y conjuntos de datos {/* #tables-and-datasets */}

Utilice la vista previa para entender la estructura de una tabla, luego utilice Python o R para validar y transformar el archivo completo. Los controles comunes de visualización y descarga pertenecen a [Abrir y previsualizar archivos](../guides/previews.md); Los límites y extensiones de renderizado se enumeran en [Formatos de archivo](../reference/formats.md).

<span id="inspect-the-real-sample-qc-table" />

<span id="preview-controls-and-limits" />

Para una tabla incrustada en una literatura PDF, utilice [Extracción PDF](../guides/previews.md#pdf-extraction), luego vuelva a abrir la tabla exportada y compruebe sus encabezados, valores y notas contra la fuente.

## Identificar lo que una fila representa {/* #identify-what-one-row-represents */}

<p className="example-label"><strong>Ejemplo práctico</strong> Lea identificadores de muestra y métricas en una tabla QC</p>

1. Abra <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">el ejemplo de la tabla QC</ExampleDownload> de un resultado guardado, archivos o un adjunto.
2. Lea los nombres de las columnas y decida si las filas representan muestras, genes u otra unidad. En esta salida, cada fila es una muestra; en su matriz fuente, cada fila es un gen.
3. Localice la columna de identificador completo. Mantenga etiquetas de trama cortas mapeadas a esos identificadores.
4. Lea el rango mostrado antes de estimar el tamaño del conjunto de datos. Utilice un cálculo de archivo completo cuando la vista previa está atada.
5. Compare los valores de la muestra con el [base de referencia de QC](../reference/example-data.md#sample-qc-baseline).

![Mesa de muestra-QC con identificadores completos y columnas numéricas](/img/open-science/capabilities-walkthrough/32-csv-preview.webp)

<ToolOperationGroup>
<summary>Tabla QC: significados de columna</summary>

| Columna | Interpretación | Compruebe antes de utilizarlo |
| --- | --- | --- |
| compact_sample | Etiqueta de figura corta | Retener su asignación al identificador original |
| original_column_name | Identificador de muestra original | Compruebe los nombres perdidos y duplicados |
| total_raw_counts | Suma de conteos de muestras | Preserve raw-count units; no llamar a esta expresión normalizada |
| zero_count_genes | Número de genes con cero cuenta | Junto con genes detectados, debe cubrir todas las filas de genes de entrada |
| detected_genes_count_gt_0 | Número de genes con recuentos positivos | Este es un recuento de genes, no de magnitud de expresión |
| median_count_among_detected_genes | Mediana sobre cuentas positivas | Estado que se excluyen los genes de cuenta cero |

</ToolOperationGroup>

<span id="work-with-the-full-dataset" />

## Compruebe el conjunto de datos completo {/* #check-the-complete-dataset */}

Identificadores separados y metadatos de columnas de medición antes de seleccionar operaciones numéricas. Preserve gene IDs as identifiers and keep gene length out of sample-count calculations. Compruebe los valores perdidos, los identificadores duplicados y los rangos de valor permitidos en la entrada completa.

Un recuento de fila visible puede describir sólo la vista previa. Lea el archivo completo en [Notebook](../guides/notebook.md) para establecer dimensiones. El renderizador CSV es sólo de lectura; los clics de encabezado no son un sustituto para una operación de clasificación o filtrado.

## Guardar transformaciones como nuevos resultados {/* #save-transformations-as-new-results */}

Establezca la clave de la unión, regla de filtro, política de valor perdido y columnas de salida esperadas en su solicitud. Pida un archivo derivado separado para que la entrada original permanezca disponible. Reabrir la salida, comparar su recuento de filas e identificadores con la entrada, e inspeccionar el código ejecutado antes de interpretar los cambios.

Las variables Notebook son el estado temporal del núcleo hasta que se guardan. Una variable visible y una versión de archivo gestionada tienen diferentes ciclos de vida; use [Archivos y versiones](../guides/files.md) para retener y comparar resultados guardados.

## Elija un lector para otros formatos {/* #choose-a-reader-for-other-formats */}

Para `.xls`/`.xlsx`, utilice los controles de vista previa y hoja de trabajo de Office descritos en [Avances](../guides/previews.md). Los contenedores binarios como `.h5ad` o `.h5` requieren una biblioteca de análisis compatible. Una matriz `.txt` separada puede abrirse como texto. Renombrar una extensión no convierte datos ni hace un formato no compatible legible.
