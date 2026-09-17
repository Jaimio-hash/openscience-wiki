---
title: "Compare dos métodos de análisis en los mismos datos"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Compare dos métodos de análisis en los mismos datos {/* #compare-two-analysis-methods-on-the-same-data */}

<p className="example-label"><strong>Ejemplo práctico</strong> PCA y análisis de factores exploratorios de la psique:</p>

El cambio de métodos es informativo sólo cuando los insumos y el preprocesamiento son comparables. Este ejemplo aplica análisis de componentes principales estandarizados (PCA) y análisis de factores de probabilidad máxima de cinco factores (FA) al **mismas respuestas completas 2,436**. Se compara lo que los métodos estiman, en lugar de tratar el mayor número como el método ganador.

## 1. Preparar la entrada pública y el tiempo de ejecución R {/* #1-prepare-the-public-input-and-r-runtime */}

Descargue el [psych::bfi CSV](https://vincentarelbundock.github.io/Rdatasets/csv/psych/bfi.csv) público, ahorrelo como **bfi-original.csv**, y lea el [Documentación de los conjuntos de datos](https://personality-project.org/r/psych/help/bfi.html). Contiene artículos de personalidad 2,800, elementos de personalidad 25 y columnas demográficas. El análisis solo utiliza A1–A5, C1–C5, E1–E5, N1–N5 y O1–O5; no es una evaluación psicológica individual.

En **Settings → Runtimes**, confirme R es **Ready** y está habilitado. El funcionamiento registrado utilizó **R 4.4.3**, con funciones de base/recomendada R y sin instalación de paquete adicional. Adjuntar el CSV a una conversación de proyecto a través de **+ → Attach files**.

![El conjunto de datos de bfi público adjunta a una comparación de método de datos iguales](/img/open-science/workflow-extensions/bfi-input.webp)

## 2. Arregla el preprocesamiento antes de ajustar el método {/* #2-fix-the-preprocessing-before-fitting-either-method */}

```text
Use the attached psych::bfi CSV in the enabled R Notebook.
Analyze only its 25 A/C/E/N/O items, scored 1–6. Validate the range.
Reverse A1, C4, C5, E1, E2, O2 and O5 as 7-x. Use the same complete
cases across all 25 items for both methods; report exclusions.
Run prcomp with centering/scaling and retain five components.
Varimax-rotate eigenvector times sqrt(eigenvalue) loading columns;
label them RotPC1–RotPC5. Report variance from unrotated PC1–PC5.
Run factanal with five factors, varimax and nstart=10; set seed 20260916.
Save bfi-method-comparison.R, bfi-preprocessing.csv, bfi-loadings.csv,
bfi-method-metrics.csv, bfi-method-comparison.png and bfi-method-report.md.
Make the script accept the input CSV as its first argument, record
runtime input identity and R version, execute it and reopen all outputs.
Explain fit, convergence, arbitrary signs/order, ordinal responses
and complete-case limitations. Do not claim that convergence is good fit.
Use English and do not install packages or delegate.
```

Revise el cálculo R antes de aprobarlo. Abra **Notebook** y confirme la ejecución completada. La matriz de preprocesamiento guardada tiene **2,436 rows × 25 items**, excluyendo **364 encuestados incompletos**. Esta misma matriz alimenta ambos métodos; demográficos y identificadores de fila están excluidos.

Si un método usa silenciosamente un conjunto diferente de encuestados, detenga y reconcilie los insumos antes de comparar su resultado.

## 3. Inspeccionar los resultados numéricos {/* #3-inspect-the-numerical-results */}

Open **bfi-method-metrics.csv** de **Generated** o **Files**. El archivo grabado contiene **Renglones métricos 77**, incluyendo los recuentos de muestra, falta, varianza PCA, singularidades FA, ajuste, convergencia, semilla e identidad de entrada.

![Metrices numéricas guardadas del preprocesamiento compartido y ambos métodos ajustados](/img/open-science/workflow-extensions/bfi-metrics.webp)

| Componente de PCA no rotado | Variación normalizada total explicada |
| --- | --- |
| PC1 | 20.54% |
| PC2 | 11.01% |
| PC3 | 8.57% |
| PC4 | 7.41% |
| PC5 | 6.19% |
| Primero cinco combinados | 53.72% |

El optimizador de FA converge, pero la estadística de probabilidad-ratio era **1490.587 en 185 grados de libertad**, con **p ≈ 1.218 × 10⁻²⁰²**. Bajo los supuestos modelo, esto rechaza exactamente cinco factores. La exitosa ejecución numérica no establece un ajuste adecuado.

## 4. Compare los patrones de carga en la figura {/* #4-compare-the-loading-patterns-in-the-figure */}

Abre **bfi-method-comparison.png**. Sus tres paneles muestran varianza PCA no rotada, cargas PCA varimax rotadas y cargas de varimax FA. Los valores de carga exactos están en **bfi-loadings.csv**, con **Renglones 250**: 25 items × 5 dimensions × Métodos 2.

![Variación PCA no rotada y las dos matrices de carga rotadas](/img/open-science/workflow-extensions/bfi-comparison-plot.webp)

No coincida mecánicamente con “column 1” a través de los métodos. El orden y los signos de factor/componente pueden cambiar sin cambiar la solución. Los mapas de calor usan azul para cargas negativas y rojas; comparar patrones de elementos y valores numéricos.

Dispositivos PCA total de la varianza observada; Modelos FA compartieron covariancia con singularidades separadas. Las sumas FA de las cargas cuadradas no son intercambiables con PCA varianza explicada. Las etiquetas rotativas **RotPC1–RotPC5** se distinguen intencionadamente de los porcentajes de varianza **PC1–PC5** no rotados.

## 5. Lea las limitaciones y vuelva a ejecutar el script guardado {/* #5-read-the-limitations-and-rerun-the-saved-script */}

Abre **bfi-method-report.md**. Comprueba que reporta la misma muestra y preprocesamiento, la semilla fija y la diferencia entre convergencia y ajuste. Estas respuestas ordinal 1-6 se tratan como aproximadamente continuas; la eliminación completa de casos puede sesgar los resultados cuando la falta se relaciona con las respuestas o características de los participantes.

![El informe final registra preprocesamiento, semilla, variabilidad y limitaciones de ajuste](/img/open-science/workflow-extensions/bfi-report.webp)

Descargue el <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.R">R script</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-loadings.csv">cargas</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-metrics.csv">métricas</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.png">gráfico</ExampleDownload> y <ExampleDownload path="/examples/workflow-extensions/bfi-method-report.md">informe</ExampleDownload>. Ponga el script y descarga la entrada en una carpeta fresca, abra un terminal allí y ejecute:

```bash
Rscript bfi-method-comparison.R bfi-original.csv
```

El script escribe sus salidas en la carpeta actual. El script grabado fue repetido independientemente con R 4.4.3: preprocesamiento, cargas y CSVs métricas coincidieron con los archivos guardados de la aplicación exactamente. Todas las células preprocesadoras y los eigenvalues PCA también se revisaron por separado. Estos cheques establecen la reproducibilidad de este cálculo; no eligen un método universalmente superior o validan una prueba de diagnóstico.
