---
title: "Haga una figura trazable con barras de error"
last_update:
  date: '2026-09-16'
---

# Haga una figura trazable con barras de error {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>Ejemplo práctico</strong> Temperatura y conductividad eléctrica</p>

Necesitas una figura científica cuyos puntos trazados e incertidumbre pueden ser rastreados de nuevo a una tabla de datos. Este ejemplo traza conductividad eléctrica para el óxido de zinc dopado de aluminio (AZO) y el iodide de cobre (CuI), manteniendo las desviaciones estándar reportadas por el fabricante.

**Aplicable:** un PNG Inglés y SVG, el CSV trazado y un archivo de métodos cortos. El ejemplo utiliza datos publicados, no un experimento recién realizado.

## Preparar los datos y su significado {/* #prepare-the-data-and-its-meaning */}

El [documento fuente](https://www.nature.com/articles/s44172-024-00291-4) proporciona un manual de datos fuente. El ejemplo CSV transcribe columnas A, D y E de **Fig.6a** y **Fig.6b**, filas **3–15**: temperatura, conductividad eléctrica y SD reportado. Contiene **Temperaturas 13 por material**, cubriendo **275–390 K**.

Descargue el <a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>CSV preparado</a> y <a href="/docs/examples/research-workflows/conductivity-source.md" download>Notas de fuentes</a>. El CSV conserva la hoja y fila original por cada punto. El documento describe el SD de cinco mediciones por temperatura; Las mediciones individuales de réplica no se suministran en estas columnas, por lo que este flujo de trabajo no recalcula SD.

1. Cree un proyecto con un modelo de trabajo y un [Hora de correr Python](../guides/runtimes.md) habilitado.
2. Abra una conversación y adjunte ambos archivos usando **+ → Attach files**.
3. Confirme las columnas y unidades numéricas antes de trazar: **K** para temperatura y **S m-1** para conductividad y su SD.

Haga clic en el CSV adjunto para abrir la vista previa. Debe mostrar **filas 26 · columnas 6**, incluyendo material, temperatura, conductividad, SD y hoja de origen/row. Abrir la nota fuente también; la ejecución capturada usó el nombre de archivo `README.md` para la nota suministrada aquí como `conductivity-source.md`.

![La tabla de conductividad adjunta con valores, unidades y filas de origen](/img/open-science/research-workflows/conductivity-input.png)

## Solicitar la figura y los datos detrás de ella {/* #ask-for-the-figure-and-the-data-behind-it */}

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

Revise cualquier solicitud de código o paquete, y luego inspeccione el resultado Notebook real. Un gráfico descrito en la respuesta aún no es una figura guardada.

Elija **Notebook** en la conversación. Abra la celda Python completa e inspeccione su salida: filas totales 26, filas 13 para cada material, la gama 275-390 K y la figura trazada. Si la resolución de entrada falla, haga que el agente use el CSV conectado a esta conversación, a continuación, verifique una ejecución exitosa antes de continuar.

![La ejecución Notebook real reporta los cheques de entrada y hace la trama](/img/open-science/research-workflows/conductivity-notebook.png)

## Compruebe la cifra y la exportación {/* #check-the-figure-and-export */}

Abre el PNG generado. Confirme que ambos materiales son distinguibles, los puntos finales son visibles, las unidades del estado de los ejes y la nota de incertidumbre dice **reportada SD**. Las líneas sólo conectan las mediciones; el dip en la conductividad AZO después de 300 K sigue siendo visible.

![Actual Open-Science previsualización de la trama de conductividad y reportó barras de error SD](/img/open-science/research-workflows/conductivity-figure.png)

Abrir **plotted-conductivity.csv** y compararlo con la entrada. En este sentido, todos los **Renglones 26** conservaban las temperaturas, los valores de conductividad, los SDs y las identidades de hoja de origen/row. Abra **conductivity-methods.md** para comprobar la fuente DOI y la definición de incertidumbre.

El área **Generated** debe contener cuatro archivos. Abra el archivo de métodos y utilice el icono de descarga en cada previsualización para guardar la versión que comprobó. Si falta una salida, solicite ese archivo específico y vuelva a abrirlo; un PNG exitoso no prueba que el SVG o la tabla de datos fue guardada.

![Las cuatro salidas guardadas y la nota de los métodos reabiertos](/img/open-science/research-workflows/conductivity-methods.png)

Utilice PNG para compartir rápidamente y SVG donde el arte vectorial es útil. Esta carrera es <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG</a>, <a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG</a>, <a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>Datos trazados</a> y <a href="/docs/examples/research-workflows/conductivity-methods.md" download>métodos</a> están disponibles para la comparación.

Para sus propias mediciones, decida si las barras de errores deben mostrar SD, error estándar o intervalo de confianza antes de pedir una trama. Dar al agente las medidas primas requeridas o la incertidumbre ya calculada, junto con su definición. Mantenga la incertidumbre perdida explícita.
