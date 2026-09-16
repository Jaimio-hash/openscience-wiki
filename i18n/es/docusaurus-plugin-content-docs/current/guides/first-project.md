---
title: "Su primer proyecto y resultado"
last_update:
  date: '2026-09-10'
---

# Su primer proyecto y resultado {/* #your-first-project-and-result */}

<p className="example-label"><strong>Ejemplo práctico</strong> Lea una tabla de muestras y guarde un resumen</p>

Comience por abrir una pequeña mesa y guardar un resumen. Esta ruta utiliza la tabla muestra-QC de doce hojas calculada a partir de un conjunto de datos público de expresión de genes. Usted no necesita rehacer el análisis de matriz completo o instalar paquetes de trama.

<span id="prepare-the-input-and-runtime" />

## Prepare un modelo y el archivo de ejemplo {/* #prepare-a-model-and-the-example-file */}

1. Complete [configuración por primera vez](onboarding.md) y confirme su [modelo de conexión](providers.md).
2. Descargue el **muestra QC CSV** de [Datos de ejemplo](../reference/example-data.md#saved-example-outputs).
3. Mantenga el archivo descargado sin cambios. Esta es una tabla sumaria derivada; la matriz fuente y método de cálculo se documentan en la misma página de ejemplo.

Abrir y resumir esta tabla requiere un agente activo y un modelo. Python o R es necesario sólo si usted pide recalcular métricas. El [flujo de trabajo completo de calidad de los datos](../workflows/data-quality.md) cubre esa ruta.

<span id="create-the-research-project" />

## Crear un proyecto {/* #create-a-project */}

De casa, elija **New project**. Introduzca `Gene-count QC review` como **Name** y `Review the public sample-QC table and record its interpretation.` como **Description**. En **Agent Context**, introduzca `Preserve the source file. Explain descriptive counts without inferring differential expression.` A continuación, seleccione **Create project**.

Confirme el nombre del proyecto por encima de la lista de sesiones. Estos son nombres de ejemplo: use un nombre que le ayude a encontrar su propia investigación más adelante. Vea [Proyectos](projects.md) para editar los campos o configurar una carpeta de origen.

<span id="attach-and-submit-a-bounded-request" />

## Adjuntar e inspeccionar la tabla {/* #attach-and-inspect-the-table */}

1. Iniciar una nueva conversación, elegir **+ → Attach files**, y seleccionar el CSV.
2. Espera el chip de apego, y luego abre su vista previa.
3. Confirme doce hileras de muestra. Inspeccione el identificador de muestras completas y las columnas para los recuentos totales, genes de cuenta cero, genes detectados y el recuento positivo mediana.
4. Cierra la vista previa para volver al compositor. Mantenga el apego en la solicitud.

![Muestra de la tabla QC abierta en la aplicación](/img/open-science/guides-walkthrough/42-rnaseq-table.png)

Si la vista previa está vacía o las columnas no están separadas, confirme que adjunta la página de descarga CSV en lugar de una página de descarga HTML. Ver [Cuadros](../tools/tables.md) para los controles de delimitador y vista previa.

<span id="open-and-accept-the-outputs" />

## Solicitar un resumen ahorrado {/* #ask-for-a-saved-summary */}

Compruebe el modelo seleccionado y enviar:

```text
Read the attached sample-QC CSV. Save a short Markdown report named
sample-qc-overview.md with three sections: Table contents, Metric meanings,
and Next checks. Identify the sample-identifier column and explain each
QC metric using the attached values. Preserve the original file. Do not
recalculate the gene matrix, install packages, or infer differential
expression. State that this is a derived descriptive summary. If the file
cannot be read, report the error instead of guessing its contents.
After saving, provide the report link.
```

Cuando se solicite el permiso, compruebe que se refiere a la entrada adjunta y a la salida solicitada. Aprobar la operación prevista o negar una solicitud no relacionada. Un permiso de espera es una pausa que necesita su respuesta; una llamada de herramienta fallida necesita el manejo de errores. [Compositor](composer.md) explica esos estados.

<span id="continue-or-recover" />

## Compruebe y mantenga el resultado {/* #check-and-keep-the-result */}

1. Seleccione **sample-qc-overview.md** en la respuesta o el panel **Files** del proyecto.
2. Confirme las tres secciones solicitadas y que las descripciones de las columnas coincidan con el CSV. En particular, los genes detectados significan contar más que cero; la mediana de cuenta positiva excluye cero recuentos.
3. Confirme el informe describe una tabla resumida y no reclama una nueva conclusión biológica.
4. Descargue el informe si necesita una copia externa. Renombrar y conectar la conversación para el acceso de regreso.

La tarea se completa cuando el informe guardado se abre y está de acuerdo con la tabla adjunta. Si la respuesta contiene texto pero no archivo, pídale al agente que guarde ese texto como el archivo marcado, a continuación, abrirlo. Para leer o guardar el error, retén el mensaje de error y sigue [Solución de problemas](troubleshooting.md).

## Continuar con los datos originales {/* #continue-with-the-original-data */}

Para reproducir la tabla y crear una parcela, siga [Convertir datos brutos en un análisis reproducible](../workflows/data-quality.md). Ese flujo de trabajo añade la matriz original, dependencias Python, un esquema de salida exacto y cheques numéricos. Utilice [Notebook](notebook.md) para inspeccionar código y presentar pruebas.
