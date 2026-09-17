---
title: "Construir una lista de lectura básica para un nuevo tema de investigación"
last_update:
  date: '2026-09-16'
---

# Construir una lista de lectura básica para un nuevo tema de investigación {/* #build-a-core-reading-list-for-a-new-research-topic */}

Para descubrir artículos a partir de un tema de investigación, siga el [flujo de búsqueda temática del club de lectura](journal-club.md). El ejemplo PRISMA que aparece a continuación parte de tres DOI conocidos y muestra cómo comprobar, guardar y leer esos registros.

<p className="example-label"><strong>Ejemplo práctico</strong> Construir una colección de lectura PRISMA</p>

Usted está preparando una revisión sistemática y necesita una colección de inicio pequeña y defensible antes de leer ampliamente. Este recorrido construye un paquete de guía de presentación de informes PRISMA de tres documentos publicados, revisa los descubrimientos del agente, vincula los registros aceptados a un proyecto, y adjunta un PDF.

**Aplicable:** una colección de bibliotecas de tres discos asociada con el proyecto de investigación, un accesorio de texto completo comprobado y un artefacto de lista de lectura cuyos metadatos verifique antes de reutilizar. Esta es una colección de semillas, no una exhaustiva búsqueda o síntesis de pruebas.

Para su propio tema, sustitúyase los papeles de semilla y los nombres de colección/proyectos; comprueba los metadatos reales de cada papel y el texto completo disponible.

## Fuentes y preparación {/* #sources-and-preparation */}

Utilice una conexión de modelo de trabajo y una interfaz de aplicación en inglés. El ejemplo utilizó una suscripción Codex. Crear **PRISMA - Systematic review reading pack** usando [Proyectos y carpetas fuente](../guides/projects.md).

| Documento | DOI | Papel en el paquete |
| --- | --- | --- |
| Page et al., 2021, *La declaración PRISMA 2020: Una directriz actualizada para la presentación de exámenes sistemáticos* | `10.1371/journal.pmed.1003583` | Orientación actualizada sobre la presentación de informes; el título 2020 no es su año de publicación. |
| Moher y otros, 2009, *Temas de presentación de informes preferidos para las revisiones sistemáticas y las Metanálisis: Declaración de PRISMA* | `10.1371/journal.pmed.1000097` | Declaración histórica. |
| Liberati y otros, 2009, *La declaración PRISMA ... Explicación y elaboración* | `10.1371/journal.pmed.1000100` | Explicación histórica; un documento separado con una lista de autor diferente. |

Las páginas de la editorial establecen las identidades bibliográficas: [Declaración de 2021](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583), [Declaración de 2009](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097), y [2009 explicación](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100).

## 1. Solicitar una lista de candidatos atado {/* #1-ask-for-a-bounded-candidate-list */}

En **Ask anything**, introduzca una solicitud con identificadores, un destino y una condición de parada:

```text
Build a core reading list for our systematic-review reporting project.
Look up only these DOIs:
10.1371/journal.pmed.1000097
10.1371/journal.pmed.1000100
10.1371/journal.pmed.1003583
Use the literature library tools to retrieve bibliographic metadata and
stage the records for my Inbox review. Do not accept candidates for me.
Save reading-list.md with each title, authors, year, DOI, source URL and
suggested reading order. Label the 2009 papers as historical. Do not
claim to have read full text unless you actually retrieved it.
```

Elija el modelo deseado, deje **Ask for approval** habilitado, y seleccione **Send message**. Ampliar la actividad de la herramienta cuando necesita inspeccionar lo que se solicitó. La carrera puede necesitar leer un Skill relevante antes de buscar documentos; un nombre Skill en prose agente no prueba que sus instrucciones fueron cargadas.

Cuando aparezca **Save to Literature Inbox?**, revise la operación y autorice el ahorro previsto. Saving candidates es distinto de aceptarlos en tu biblioteca.

![Permiso a los candidatos a la literatura escénica](/img/open-science/prisma-walkthrough/03-inbox-save-approval.webp)

## 2. Revise cada candidato antes de aceptar {/* #2-review-each-candidate-before-accepting */}

Abre **Library → Inbox**. En esta carrera la placa mostró **3**, y cada fila mostró un título, primeros autores, año de publicación y **encontrado a través de crossref**.

![Tres documentos PRISMA reales en espera de revisión](/img/open-science/prisma-walkthrough/04-inbox-three-papers.webp)

1. Seleccione el título de candidato para abrir sus detalles.
2. Chequee **Provider**, su enlace fuente, y **Identifiers → DOI** contra el papel deseado.
3. Compare el orden, el año y la publicación del autor con el registro del editor. Títulos similares no establecen que dos registros son el mismo documento.
4. Seleccione **Accept** cuando la identidad coincida. El candidato desaparece de Inbox y se convierte en un registro de la biblioteca.
5. Repita por los otros dos. La placa cambió de 3 a 2 a 1; el estado final era **Inbox is clear**.

![Fuente Crossref de un candidato y DOI exacto](/img/open-science/prisma-walkthrough/05-inbox-doi-source.webp)

| Control de caja | Resultado | Cuándo usarlo |
| --- | --- | --- |
| Título del candidato / **View details** | Abre el proveedor y evidencia identificativa. | Antes de aceptar un papel desconocido o ambiguo. |
| **Accept** | Promueve al candidato a la biblioteca. | Has comprobado su identidad y relevancia. |
| **Dismiss** | Elimina al candidato de la cola de revisión pendiente. | Es irrelevante o no debe entrar en la colección; no repara metadatos. |
| **Search references** | Reduce la vista actual. | Localice un identificador o título en un lote más grande. |
| Lista de comprobación de filas / **Select all** | Selecciona candidatos para acciones de lotes disponibles. | Sólo después de comprobar la selección prevista; el camino aceptado individualmente. |

## 3. Hacer que la colección sea útil para un proyecto {/* #3-make-the-collection-useful-to-a-project */}

Crear una colección con el control de **New collection** lateral:

- **Nombre:** `PRISMA reporting - Core reading`.
- **Descripción:** declara que contiene información actualizada e histórica. La descripción es texto organizativo, no instrucciones de agente.
- Seleccione **Create collection**; El nombre es necesario, mientras que la descripción es opcional. **Cancel** y **Close** descartan el borrador.

![A purpose-specific reading collection](/img/open-science/prisma-walkthrough/06-create-collection.webp)

En **All references**, busque `PRISMA`. Confirme exactamente los tres registros previstos son visibles, seleccione sus casillas de verificación y use **Add to collection → PRISMA reporting - Core reading**. La operación aclara la selección. Seleccione los tres registros de nuevo, luego utilice **Add to project → PRISMA - Systematic review reading pack**.

Abra la colección y compruebe sus tres registros. Abra un detalle de referencia para confirmar tanto el proyecto como las casillas de verificación de la colección son seleccionadas. Estos son enlaces a registros compartidos, no tres copias adicionales de la bibliografía.

![La colección completa de tres documentos](/img/open-science/prisma-walkthrough/07-core-reading-collection.webp)

## 4. Adjuntar texto completo usable {/* #4-attach-usable-full-text */}

Abra el papel 2021 y seleccione **Find full-text PDF**. La búsqueda devolvió a Europa PMC en esta carrera. Inspeccione **Open source** antes de seleccionar **Add attachment**.

![Una fuente de texto completo descubierto](/img/open-science/prisma-walkthrough/08-full-text-source.webp)

La fuente fue descubierta, pero **Add attachment** regresó **PDF could not be added**. El mensaje enumera posibles causas, incluidos los requisitos de inscripción, los enlaces vencidos y el límite de MB 50; no identifica qué causa ocurrió aquí.

Para recuperar, descargar el PDF de la [editor artículo página](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583). Volver a la misma referencia y utilizar **Add PDF**. Seleccione el archivo descargado, y luego abra **Avance prisma-2020-statement.pdf** bajo los adjuntos. El archivo adjunto mostró **806.1 KB** y una vista previa **15-page**. Compruebe el título y DOI en la página uno contra el registro.

![Publisher PDF con éxito conectado y abierto](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.webp)

Un resultado de fuente visible no es un PDF adjunto. Un PDF adjunto no es prueba de que el agente lo leyó. **Read with agent** es una acción separada que proporciona contexto de lectura para una solicitud posterior.

<span id="5-audit-the-generated-reading-list" />

## 5. Compruebe y guardar la lista de lectura {/* #5-check-and-save-the-reading-list */}

Abrir **reading-list.md** y comparar cada título, lista de autores, fecha de publicación y DOI con las páginas de la editorial anterior. Utilice el <a href="/docs/examples/prisma/core-reading-list.md" download>ejemplo de lista de lectura comprobada</a> como referencia. Esta descarga es una bibliografía curada; está separado de las versiones guardadas anteriores de la aplicación.

1. Para la declaración actualizada, retén el año de publicación **2021** aunque el título diga PRISMA 2020.
2. Para la declaración 2009, retenga los cuatro autores individuales **y el Grupo PRISMA**. Utilice **Name type → Organization** para el grupo en metadatos de la Biblioteca.
3. Para la explicación 2009, mantenga su propia lista de diez autores; no copiar los autores de la declaración.
4. Si el informe generado difiere, corrija el registro de la Biblioteca, luego solicite explícitamente una nueva versión gestionada de **reading-list.md** utilizando los registros corregidos.
5. Reabrir el nuevo archivo y comprobar las tres entradas y sus enlaces DOI antes de descargar. La actualización de metadatos por sí sola no reescribirá un informe salvado.

Solicitar una corrección como:

```text
Regenerate reading-list.md from the three accepted records. Preserve their
separate complete author lists, including the organization author The PRISMA
Group for DOI 10.1371/journal.pmed.1000097. Use 2021 as the publication year of
the PRISMA 2020 statement. Keep all DOI and publisher links. Save a new managed
version and reopen it. Describe metadata lookup and available attachments
accurately; do not claim full-text analysis.
```

## Lista de verificación y alcance de la aceptación {/* #acceptance-checklist-and-scope */}

- La colección y el proyecto cada uno exponen los tres registros previstos.
- Cada DOI abre el papel que coincide; los dos documentos 2009 conservan diferentes autores.
- El año de publicación de la declaración actualizada es 2021.
- La vista previa PDF abre y coincide con el registro 2021; las descargas fallidas no se cuentan como adjuntos.
- El texto de la lista de lectura distingue la búsqueda de metadatos, la aceptación manual y cualquier lectura real de texto completo.

Esta colección es compatible con una tarea de lectura atada. Una búsqueda exhaustiva de bases de datos, una síntesis de texto completo y una revisión sistemática completa requieren métodos y pruebas adicionales.

Para un nuevo conjunto de lectura, utilice [Tipo de nombre → Organización](../guides/library.md#inspect-and-correct-metadata) para autores corporativos, luego regenerar y comprobar la bibliografía. Para una carpeta PDF heredada, siga [importación por lotes](../guides/library.md#add-or-import-a-record) antes de revisar el conjunto. Actualizar un registro de la Biblioteca no reescribirá automáticamente el artefacto guardado de la lista de lectura.
