---
title: "Revise un informe después de la retroalimentación"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Revise un informe después de la retroalimentación {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>Ejemplo práctico</strong> Revise a single-atom catalysis briefing against six editorial comments</p>

Una revisión útil mantiene la evidencia fuente, el borrador original y la respuesta a los comentarios conectados. Este ejemplo crea una información en inglés de un documento de catalisis real, y luego lo revisa sin sobreescribir el primer borrador. Los seis comentarios son un ejercicio de enseñanza preparado para este recorrido, no la correspondencia de la revista o los autores del periódico.

## 1. Adjuntar el papel y crear un primer borrador {/* #1-attach-the-paper-and-create-a-first-draft */}

Abrir [Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0), descargar el PDF principal y su Información Suplementaria del editor, y adjuntar ambos a través de **+ → Attach files** en una conversación de proyecto. Los archivos registrados tienen **9 y 52 PDF páginas**, respectivamente. Los números de página a continuación se refieren a la página PDF, no a una página de diario impreso.

Seleccione un modelo disponible, luego envíe:

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![El PDF fuente y la solicitud de información inicial en Open-Science](/img/open-science/workflow-extensions/report-input.webp)

Aprobar el archivo correspondiente se lee cuando se solicita. Abra **catalyst-brief-v1.md** de **Generated** o **Files** y lea el borrador guardado. Una respuesta en la conversación no es un sustituto para inspeccionar el archivo real.

![El primer borrador guardado antes de la revisión editorial](/img/open-science/workflow-extensions/report-draft.webp)

## 2. Hacer que la retroalimentación sea viable {/* #2-make-the-feedback-actionable */}

Descargar <ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">los seis comentarios editoriales</ExampleDownload> y adjuntarlo en la misma conversación. Los comentarios piden:

| Comentario | Cambio solicitado |
| --- | --- |
| C1 | Un resumen ejecutivo de no más que 120 palabras |
| C2 | Una tabla de dos filas que separa los dos puntos operativos |
| C3 | Absence claims limited to the evidence actually inspected |
| C4 | Tres cheques de seguimiento propuestos, claramente no experimentos ya realizados |
| C5 | Explicit Main PDF / Página PDF suplementaria y localización de figuras |
| C6 | Separar v2 y archivos de respuesta, preservando v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

La revisión real leyó el archivo de comentarios adjunto y produjo ambos tipos de entrega solicitados. Si el Agente propone cambios sin soporte, nombre la reclamación y el pasaje fuente para comprobar antes de aceptarlos.

## 3. Lea las pruebas revisadas, no sólo el estado de respuesta {/* #3-read-the-revised-evidence-not-just-the-response-status */}

Abre **catalyst-brief-v2.md**. Esta ejecución produjo un **Resumen de la palabra 117**, una mesa de dos filas y tres propuestas de seguimiento etiquetadas.

![El resumen revisado y la tabla que separa la selectividad de la durabilidad](/img/open-science/workflow-extensions/report-revised.webp)

La distinción clave es **98.9% CO Eficiencia Faradaic −1.2 V vs RHE** contra un **20 h prueba de retención actual en −0.8 V vs RHE**. No los combine en “98.9% para 20 h.” Main PDF p. 6, Fig. 6b-d, y p. 7, Fig. 6e, identifique las pruebas pertinentes; p. 8 describe las mediciones de H-cell. Suplementario PDF pp. 47-48, Figs. 51–52, se refiere a la selectividad de hidrógeno y los controles de productos NMR.

En este sentido, el Agente podría leer los pasajes de texto completo y las capciones de figuras, pero el caché de elemento figura vinculado no estaba disponible para la inspección directa de imagen. Su respuesta registra esa limitación. La disminución cualitativa de la corriente sigue el texto de los autores; no se digitalizó ningún nuevo valor de la parcela. Siga [reclamaciones de verificación contra la prueba PDF](pdf-evidence.md) cuando se necesita la inspección de la figura directa.

## 4. Revise la respuesta y deje las tres versiones {/* #4-check-the-response-and-hand-off-all-three-versions */}

Abre **catalyst-brief-v2-response.md**. Localice C1–C6, abra cada sección revisada llamada y confirme que realmente contiene el cambio prometido. Una etiqueta “Resolveda” por sí sola es insuficiente.

![El cuadro de respuesta guarda los seis comentarios a las secciones revisadas](/img/open-science/workflow-extensions/report-response.webp)

Compruebe que las propuestas siguen etiquetadas como propuestas, el DOI sigue siendo **10.1038/s41467-019-12510-0**, y **catalyst-brief-v1.md** todavía existe sin cambios. La respuesta debe indicar cualquier evidencia que no esté disponible.

Descargar el <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 proyecto</ExampleDownload> grabado, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 sesión informativa</ExampleDownload> y <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">respuesta a las observaciones</ExampleDownload>. Manténgalos con el archivo de comentarios y los enlaces de fabricante. El proyecto original se incluye para la comparación y no debe utilizarse como la reunión de información final revisada.
