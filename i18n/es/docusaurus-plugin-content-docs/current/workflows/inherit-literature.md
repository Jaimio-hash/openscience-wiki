---
title: "Asumir la colección de literatura de un investigador"
last_update:
  date: '2026-09-16'
---

# Asumir la colección de literatura de un investigador {/* #take-over-a-researchers-literature-collection */}

Este flujo de trabajo comienza con una bibliografía existente. Si empiezas con un tema, usa el [period-club workflow to find and review candidate papers](journal-club.md) primero.

<p className="example-label"><strong>Ejemplo práctico</strong> Una mano de estabilidad de células solares perovskite</p>

Cuando un colega le da una bibliografía, primero establezca lo que hay en ella y lo que todavía necesita lectura. Este ejemplo importa 20 publicó referencias sobre la estabilidad de las células solares de perovskite, las agrupa en la Biblioteca y produce un inventario de entrega con un plan de lectura.

**Aplicable:** una colección relacionada con proyectos, un 20-row CSV con identificadores de origen y las próximas acciones, y un plan de lectura en inglés. La muestra suministrada contiene registros de citas, sin archivos PDF adjuntos; sus etiquetas de tema son provisionales.

## Preparar la colección {/* #prepare-the-collection */}

Descargar el <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20-reference RIS file</a>. Sus títulos, autores, años, revistas y DOIs provienen de los registros de Crossref. Esta es una selección de enseñanza, no una búsqueda sistemática. Para su propia entrega, utilice la exportación de citas de su colega y mantenga los PDF originales junto a él.

1. Cree un proyecto usando [Proyectos y carpetas fuente](../guides/projects.md), y luego abra **Library**.
2. Crear una colección llamada **Perovskite Solar-Cell Stability**.
3. Elija **Add → Import references**, seleccione el archivo RIS y revise la vista previa de importación. Compruebe la colección de destino y el manejo duplicado antes de confirmar.
4. Inspeccione el resultado de la importación. Este ejemplo creó los registros **20**, con **0** reutilizados, saltados o fallidos.
5. Abra la colección, seleccione sus registros y use **Add to project** para vincularlos a su proyecto.

![Los informes de importación completados 20 crearon referencias](/img/open-science/research-workflows/perovskite-import-complete.webp)

Si su exportación tiene duplicados o identificadores incompletos, resuelva esos registros antes de aceptar un inventario final. Importar referencias no adjunta su texto completo. Utilice el control **Add PDF** de referencia para PDFs que ya tiene, a continuación, compare el título PDF y DOI con su registro. Ver [Biblioteca y citas](../guides/library.md).

Reabrir la colección y comprobar la cuenta **Referencias 20** de la caldera. Inspeccione la columna **Adjunto** antes de pedir una síntesis. En este ejemplo está vacío en todo, por lo que el siguiente paso solicita un inventario bibliográfico en lugar de los hallazgos de texto completo.

![La colección de veintireferencias importada con su estado de apego real](/img/open-science/research-workflows/perovskite-collection.webp)

## Pida una entrega útil {/* #ask-for-a-usable-handover */}

Abra una conversación en el proyecto y seleccione un modelo de trabajo. Nombre de la colección explícitamente:

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

Para una colección más grande, pida un inventario antes de solicitar una síntesis. Los archivos PDF que faltan, los registros ambiguos y los documentos no leídos deben permanecer visibles en la entrega.

## Compruebe los archivos guardados {/* #check-the-saved-files */}

Después de que la respuesta se complete, abra **perovskite-handover.csv** de los archivos generados. En este ejemplo, la tabla guardada tiene **filas 20 y columnas 6**. Todos los DOIs 20 coinciden con el conjunto importado; no DOI o año de publicación está desaparecido. Cada entrada de texto completo correctamente dice que no se adjunta PDF.

![El inventario de venta de mano de 20-row perovskite en Open-Science](/img/open-science/research-workflows/perovskite-handover-table.webp)

Abra **perovskite-handover.md** y compruebe que la secuencia de lectura es útil para el próximo investigador. En primer lugar, sugiere documentos de estabilidad amplios, seguidos de mecanismos, intervenciones de materiales y enfoques analíticos. Estas son sugerencias de lectura basadas en la colección, no conclusiones verificadas sobre los experimentos.

![El plan de lectura guarda disponibilidad de fuentes y próximas acciones visibles](/img/open-science/research-workflows/perovskite-reading-plan.webp)

Utilice el botón de ampliación de la vista previa del archivo para leer el plan, luego **Download** para retenerlo junto al CSV. Comprueba que cada acción propuesta es factible del material suministrado. Una secuencia de lectura sugerida no es prueba de que los documentos han sido leídos.

Antes de utilizar la colección para comparar los resultados de la estabilidad, obtener los textos completos pertinentes y registrar el protocolo de envejecimiento, la temperatura, la iluminación, la atmósfera y el punto final. Verifique las actualizaciones del editor también: el [papel de estabilidad de datos grandes](https://www.nature.com/articles/s41467-022-35400-4) tiene una adición vinculada que pertenece a una revisión de texto completo.

Descargar el ejemplo <a href="/docs/examples/research-workflows/perovskite-handover.csv" download>entrega CSV</a> y <a href="/docs/examples/research-workflows/perovskite-handover.md" download>plan de lectura</a> para comparar su estructura con su propia salida.
