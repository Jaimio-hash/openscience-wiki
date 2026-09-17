---
title: "Realizar un análisis con datos actualizados"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Realizar un análisis con datos actualizados {/* #rerun-an-analysis-with-updated-data */}

<p className="example-label"><strong>Ejemplo práctico</strong> Añada una segunda semana de observaciones de calidad del aire de Beijing</p>

Cuando lleguen nuevas observaciones, mantengan la base de referencia y vuelvan a ejecutar el mismo método antes de comparar los resultados. Este ejemplo utiliza el uso real **Aotizhongxin** PM2.5 datos: **Enero 1-7, 2016** primero, entonces **Enero 8-14**. La llegada escenificada es una repetición histórica de la enseñanza, no monitorización en vivo.

## 1. Adjuntar la primera semana y definir el cálculo {/* #1-attach-the-first-week-and-define-the-calculation */}

Las entradas son subconjuntos cronológicos del [UCI Beijing Multi-Site Air Quality Dataset](https://doi.org/10.24432/C5RK5G), distribuidos bajo **CC BY 4.0**. Descargar <ExampleDownload path="/examples/workflow-extensions/air-week1.csv">semana 1</ExampleDownload> y <ExampleDownload path="/examples/workflow-extensions/air-week2.csv">semana 2</ExampleDownload>; fuente de crédito e identidades de archivo están en <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">las notas de la fuente</ExampleDownload>.

Abra una conversación de proyecto y conecte **aire-semana1.csv sólo** a través de **+ → Attach files**. Seleccione un modelo disponible y confirme Python es **Ready** y está habilitado en **Settings → Runtimes**. Enviar:

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![Solicitud de fijación de datos y cálculo de base de la primera semana](/img/open-science/workflow-extensions/air-input-v1.webp)

Revise el archivo lee y computación antes de aprobar. En **Notebook**, compruebe que la ejecución termina, y luego abra **air-daily-v1.csv**. La base de referencia contiene **filas horarias 168 y filas diarias 7**, sin valores PM2.5 desaparecidos.

![Los recuentos de siete días de base y de hora válida](/img/open-science/workflow-extensions/air-baseline-table.webp)

## 2. Agregar nuevas observaciones sin cambiar el método {/* #2-add-new-observations-without-changing-the-method */}

Mantenga la misma conversación. Adjuntar **air-week2.csv**, dejar el primer accesorio disponible, y solicitar:

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![El archivo de segunda semana añadido a la conversación de análisis existente](/img/open-science/workflow-extensions/air-update-input.webp)

Verifique que el Agente ejecute el script existente y mantenga las mismas reglas de valor y exhaustividad que faltan. Cambiar tanto los datos como el método haría más difícil explicar por qué el resultado cambió.

## 3. Inspección de los resultados ampliados {/* #3-inspect-the-expanded-results */}

Abrir **air-daily-v2.png** y **air-daily-v2.csv**. La entrada combinada contiene **336 filas horarias**, con **no duplicado o falta de horarios**. Hay **una observación faltante PM2.5**, en enero 11. La mesa tiene **Días 14**, todos cumpliendo con la regla 18-válido-hora del ejemplo.

![El resultado ampliado de catorce días se muestra en Open-Science](/img/open-science/workflow-extensions/air-update-plot.webp)

La media de enero 11 es **11.652 μg/m3**, calculada a partir de **23 horas válidas**. No dividir una observación perdida en como si fuera cero. Una secuencia de tiempo completo no garantiza que todos los valores de medición estén presentes.

## 4. Comparación con la base de referencia {/* #4-compare-against-the-baseline */}

Abre **air-update-check.csv**. Todos los **siete filas diarias compartidas** son idénticos en cada campo de salida; las únicas fechas nuevas son Enero 8-14. El script original SHA-256 no se cambia antes y después de la actualización.

![Comparación de filas por fila con fechas de referencia inalteradas](/img/open-science/workflow-extensions/air-update-check.webp)

Abrir **air-update-notes.md** para comprobar las identidades de entrada, las observaciones perdidas y los archivos V1 retenidos. Un cálculo independiente de todos los medios diarios de 14 y los conteos de horas válidas coincidió con la salida guardada a su precisión mostrada.

![Las notas de actualización registran código no modificado, mantienen archivos de referencia y cheques de datos](/img/open-science/workflow-extensions/air-update-notes.webp)

## 5. Compruebe las fechas del informe antes de entregarlo {/* #5-check-the-report-dates-before-handing-it-off */}

Compruebe que la partida del informe sigue el intervalo de entrada real. El guión inicial retuvo un título de primera semana en su informe de dos semanas; que error de presentación fue corregido en **air-analysis-reviewed.py**. Sólo la plantilla de encabezado cambió. El script revisado se ejecutó sin cambios en la semana 1 y en ambas semanas, preservando todos los archivos anteriores.

![El informe corregido ahora nombra el intervalo completo de dos semanas](/img/open-science/workflow-extensions/air-reviewed-report.webp)

Los **air-daily-baseline.csv** y **air-daily-updated.csv** salvados coinciden con los CSVs v1/v2 originales en cada campo. **air-update-verification.md** registra el mismo hash de script revisado antes y después de ambas carreras, y comprueba los dos encabezados de informe. Esto separa una etiqueta corregida de un cambio en el método numérico.

Descargue el <ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">revisado Python script</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">base CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">actualizado CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">comparación de filas</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">informe actualizado</ExampleDownload> y <ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">Nota de verificación</ExampleDownload>. Utilice Python con pandas, NumPy y Matplotlib, retenga ambas entradas y escriba a un prefijo fresco:

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

La comparación describe una estación y dos semanas históricas. No es una clasificación AQI, una evaluación de la exposición o evidencia de una intervención causal. Para un cambio en el método de análisis al tiempo que conserva los mismos datos, vea [comparar métodos](compare-methods.md).
