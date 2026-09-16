---
title: "Datos de ejemplo y resultados esperados"
last_update:
  date: '2026-09-10'
---

# Datos de ejemplo y resultados esperados {/* #example-data-and-expected-results */}

Utilice estos archivos públicos para reproducir los ejemplos de documentación. La descripción de la fuente, el archivo original y la base de referencia de muestreo-QC viven aquí; guías de características individuales se unen a ellos en lugar de repetir la historia de conjunto de datos.

## Contrato de fuentes e insumos {/* #source-and-input-contract */}

El [GEO serie récord](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450) suministra el `GSE60450_Lactation-GenewiseCounts.txt.gz`. El [publicado RNA-seq análisis flujo de trabajo](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/) proporciona un contexto metodológico para este conjunto de datos. Nuestro ejemplo se detiene en el QC preanálisis descriptivo; no reproduce el análisis completo de ese papel.

| Propiedad | Valor verificado |
| --- | --- |
| Archivo descomprimido | GSE60450_Lactation-GenewiseCounts.txt |
| Tamaño | bytes 1,340,161 |
| filas de genes | 27,179 |
| Columnas | EntrezGeneID, Longitud y columnas de cuenta de muestra 12 |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| IDs de genes duplicados / entradas de cuenta perdidas / cuenta inválida | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>Descarga la entrada descomprimida sin cambios</a> o <a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>el archivo comprimido original</a>. La herramienta de metadatos Omics Archives de la aplicación puede devolver URLs suplementarias; no descarga tablas de cuenta automáticamente. Esta fuente fue descargada por separado y subida a través de archivos Attach.



## Base de referencia de muestreo-QC {/* #sample-qc-baseline */}

| Muestra | Conteos brutos totales | Génes de cuenta cero | genes detectados | Mediana entre detectada |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

Las etiquetas compactas mapean a los identificadores de muestra completos en el CSV. Las cuatro métricas numéricas fueron revisadas independientemente para esta entrada. Estos son cheques descriptivos de venta libre; no validan un diseño estadístico aguas abajo.

## Productos de ejemplo guardados {/* #saved-example-outputs */}

| Descargar | Índice |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>QC CSV</a> | Doce filas, cartografía exacta de columna y cuatro métricas |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>Figura</a> | Totales de la cuenta de muestra cruda |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>Informe sobre los métodos</a> | Métodos, integridad de la fuente y control métrico independiente |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | Inalterable nativo `.ipynb` Exportación |
## Elija otro ejemplo {/* #choose-another-example */}

| Tarea | Entrada o referencia | Instrucciones |
| --- | --- | --- |
| Primer resultado ahorrado | El QC de doce brazos CSV de arriba | [Primer proyecto](../guides/first-project.md) |
| Recalcular una matriz completa | Matriz original de la cuenta de genes arriba | [Flujo de trabajo de calidad de los datos](../workflows/data-quality.md) |
| Organizar una colección de literatura | <a href="/docs/examples/prisma/core-reading-list.md" download>Lista de lectura PRISMA verificada</a> con enlaces de editor | [Lista básica de lectura](../workflows/core-reading-list.md) |
| Pruebe un pequeño cálculo del andar inverso | <a href="/docs/examples/capabilities/1UBQ.pdb" download>ubiquitina humana 1UBQ</a> | [Instrumentos científicos](../tools/scientific.md) |

Los métodos reportan y Notebook conservan las trayectorias y el alcance de evidencia de la computación registrada. Prepare su propia ubicación de entrada y dependencias antes de una repetición externa.
