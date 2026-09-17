---
title: "Preparar un paquete de lectura de clubes de revistas enfocados"
last_update:
  date: '2026-09-16'
---

# Preparar un paquete de lectura de clubes de revistas enfocados {/* #prepare-a-focused-journal-club-reading-pack */}

Comience con una pregunta de investigación, encontrar documentos en Open-Science, guardar sus textos completos, y convertir los mismos documentos en un paquete de discusión. No se descarga PDF es necesario para el paso de búsqueda. La lectura de texto completo comienza sólo después de que los PDF se han salvado y abierto.

<p className="example-label"><strong>Ejemplo práctico</strong> Encontrar y leer cinco documentos sobre la catalisis de un solo átomo</p>

**Pregunta:** ¿qué evidencia conecta los sitios de metal aislados a un rendimiento catalítico útil? Este ejemplo busca estudios primarios 2017-2022 que abarcan síntesis, estabilidad térmica, mecanismo y ampliación. Produce una colección de cinco periódicos, un paquete de lectura de texto completo, un mapa de papel de cinco hojas y un programa de 60 minutos. Los cinco documentos finales a continuación son los mismos utilizados en las salidas guardadas.

## Búsqueda de un tema {/* #search-from-a-topic */}

1. Abra una conversación en su proyecto y seleccione un modelo de trabajo con herramientas de búsqueda. Deja el área de apego vacía.
2. Describir la pregunta científica, el período y el tipo de papel. Solicitar un registro de búsqueda y candidatos para revisión manual.
3. Enviar la solicitud y ampliar la actividad de búsqueda. Revise los enlaces fuente y si cada resultado contiene metadatos, un texto abstracto o completo.

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![El registro de búsqueda real con identidades candidatas y estado de recuperación](/img/open-science/research-workflows/literature-topic-results.webp)

El <a href="/docs/examples/research-workflows/single-atom-search-log.md" download>registro inicial</a> registra ocho candidatos encontrados a través de la búsqueda web y metadatos Crossref. Estos documentos aún no se descargaron. Si una fuente requiere credenciales, configure [Conectores](../guides/connectors.md) o pida al agente que use una fuente disponible y nombre la brecha.

## Revisar y salvar a los candidatos {/* #review-and-save-the-candidates */}

Abre **Library → Inbox**. Seleccione un título para comparar su DOI, autores, año y página de editor. Aceptar los registros pertinentes, dejar los pendientes indecisos y desestimar los irrelevantes. **Search references** filtra la Biblioteca guardada; empezar el descubrimiento en línea en la conversación.

La primera selección incluía documentos cuyos textos completos no podían añadirse. Para que esta reunión utilice fuentes legibles en todo el mundo, el ejemplo retenía Lang y buscó cuatro sustituciones dentro del mismo tema:

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

Revise el <a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>selección de registro de sustitución</a>, a continuación, seleccione las cuatro filas de Inbox destinadas y seleccione **Accept**. Un enlace fuente de acceso abierto todavía necesita ser probado al guardar y abrir su PDF.

![Cuatro candidatos seleccionados para la aceptación manual](/img/open-science/research-workflows/journal-open-access-inbox.webp)

Crear **Single-Atom Catalysis - Full-Text Journal Club** usando **New collection**. En **All references**, seleccione estos cuatro registros aceptados más Lang, y luego elija **Add to collection**. Utilice **Add to project** para vincular el conjunto con el proyecto que contiene su conversación.

| Documento | Enfoque | Páginas PDF en esta carrera |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | Estabilidad térmica y combustión de metano | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Aleaciones de Pt/Cu y deshidrogenación de propano | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | Cambios reversibles en el átomo y las vías de reacción | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | Preparación y ampliación continua | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | Coordinación y amnación reductiva de Ru | 11 |

## Obtener texto completo para los documentos seleccionados {/* #obtain-full-text-for-the-selected-papers */}

1. Abra una referencia, luego elija **Find full-text PDF**.
2. Compruebe la fuente devuelta y elegir **Add attachment**. Espera hasta que aparezca un archivo bajo **Archivos adjuntos**.
3. Abre ese apego. Compare su título y DOI con el registro, y compruebe el conteo de la página.
4. Repita por las cinco referencias, luego vuelva a abrir la colección. Cada fila debe ahora mostrar un icono adjunto.

![Fuentes de texto completo ofrecidas para el periódico Lang](/img/open-science/research-workflows/literature-topic-fulltext.webp)

En esta carrera, el PDF de Lang fue añadido a través de Europa PMC. Los otros cuatro fueron salvados de fuentes de editor descubierto a través de Unpaywall. Una fuente alternativa puede tener éxito cuando no se puede agregar otra fuente. Si es necesario, utilice **Open source** para obtener una copia que tiene derecho a acceder y adjuntarla con **Add PDF**. Si no hay copia legible disponible, reemplace la selección o marque que falta antes de solicitar resultados de texto completo.

![Un papel descargado se abre en la vista previa de PDF en inglés](/img/open-science/research-workflows/journal-qi-pdf.webp)

La colección final contiene cinco PDFs guardados, con página cuenta **10, 9, 11, 10 y 11** en el orden de la tabla. Un icono adjunto confirma un archivo guardado; la apertura confirma que es legible y coincide con el registro.

![La colección final de cinco periódicos con un apego en cada registro](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## Lea los textos completos y genere el paquete {/* #read-the-full-texts-and-generate-the-pack */}

Volver a la conversación en el proyecto vinculado. Nombra la colección completa explícitamente. Solicitar evidencia de sus PDFs salvados y separar las condiciones de las diferentes reacciones:

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

Durante la respuesta, expanda la actividad de lectura **Biblioteca de referencias** para inspeccionar qué papel y pasaje fueron recuperados. Esta carrera leyó los cinco PDFs guardados. La actividad de lectura es distinta de la búsqueda de metadatos anteriores. Si una lectura falla, resuelva o mantenga la evidencia de ese papel explícitamente indisponible.

Después de la finalización, abra **single-atom-fulltext-reading-pack.md** desde **Generated**. Compruebe la tabla de verificación de cinco documentos, cada hallazgo y su localizador, limitaciones, preguntas y agenda. La agenda debe totalizar los minutos de 60.

![El paquete de texto completo guardado, con los mismos cinco papeles y cheques de fuente](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## Revise el mapa de papel contra los PDF originales {/* #check-the-paper-map-against-the-original-pdfs */}

Abra **single-atom-fulltext-paper-map.csv** y utilice su botón de ampliación para una vista de pantalla completa. Esta carrera contiene **filas 5 · columnas 12**. Compare el conjunto DOI con la colección; un paquete de un conjunto diferente no es el resultado de este flujo de trabajo. Desplazar horizontalmente o descargar el CSV para leer células largas en su totalidad.

![El mapa real de papel de cinco hojas, doce columnas](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

Volver a **Library**, abrir un PDF, haga clic en su contador de página, escriba la página solicitada y pulse **Entra**. Verifique la figura o tabla junto con su capción y texto circundante. Por ejemplo, la Figura 5 de He et al está en **PDF página 7**; la descripción de la línea de producción está en la página 3. Apoyan diferentes partes del resumen.

![He et al.'s Figure 5 inauguró en PDF página 7 para comparación](/img/open-science/research-workflows/journal-he-figure5.webp)

Pida una revisión guardada cuando un localizador o condición está mal, y luego vuelva a abrir el archivo revisado. El paquete también retiene un conflicto en Sun et al.: página 2 y la capción de la Figura 5 dan diferentes composiciones de alimentación. Registra ambas descripciones en lugar de elegir una en silencio. Esta es una pregunta útil de la reunión, no un detalle experimental resuelto.

Descargue el <a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>paquete de lectura</a> y <a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>mapa de papel</a>. Los mismos cinco PDFs subyacen a ambos archivos. Para un camino más cercano, continúe con [verificación de la reclamación y la figura](pdf-evidence.md).
