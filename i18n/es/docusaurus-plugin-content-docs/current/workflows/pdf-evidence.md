---
title: "Revisar la reclamación de un periódico contra sus cifras y suplementos"
last_update:
  date: '2026-09-16'
---

# Revisar la reclamación de un periódico contra sus cifras y suplementos {/* #check-a-papers-claim-against-its-figures-and-supplement */}

<p className="example-label"><strong>Ejemplo práctico</strong> ¿Qué significa la eficiencia del catalizador 98.9%?</p>

Un número de titulares es útil sólo cuando sus condiciones métricas y experimentales son claras. Este flujo de trabajo toma un documento catalizador y su suplemento, localiza las pruebas para una reclamación, y ahorra un breve informe separando el resultado reportado de interpretaciones más amplias.

**Aplicable:** una tabla de reclamaciones/evidencia/condiciones/limitaciones en inglés con la página PDF y referencias de figuras. Este es un cheque de fuente, no una réplica experimental independiente.

## Preparar los materiales originales {/* #prepare-the-original-materials */}

Usa el [*Un método universal mediado de ligando para la síntesis de gran escala de los catalizadores de metal de transición*](https://www.nature.com/articles/s41467-019-12510-0) de Yang et al., DOI `10.1038/s41467-019-12510-0`.

1. Descargar el artículo PDF de la página de la editora y el **Información complementaria** PDF de **Información complementaria**. Mantenlos como archivos separados.
2. En un proyecto Open-Science, abre una conversación y selecciona un modelo de trabajo.
3. Elige **+ → Attach files** y adjunta ambos PDFs. Abra el PDF principal para comprobar su título y DOI. Los archivos de ejemplo contienen las páginas de partículas principales 9 y las páginas de suplemento 52.

Comprueba que **ambos nombres de archivo** aparece por encima de la solicitud enviada. Hacer clic en un nombre de archivo abre su vista previa; cambiar entre los dos permite verificar a qué documento pertenece una página citada.

![Tanto el artículo como el suplemento se adjuntan a la solicitud real de comprobación de pruebas](/img/open-science/research-workflows/catalyst-two-inputs.png)

## Hacer una pregunta de evidencia específica {/* #ask-a-specific-evidence-question */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

Aprobar las solicitudes de lectura previstas cuando se soliciten. Si el lector reporta una página inválida o material no legible, refina la solicitud o abra la página PDF pertinente usted mismo. No trate una recuperación infructuosa como evidencia de que una figura está ausente.

## Abran las pruebas citadas {/* #open-the-cited-evidence */}

En la vista previa PDF, utilice el control de página para abrir **página 6**, que contiene **Gráfico 6** y los resultados relevantes. Compare la capción de la figura con el texto. Páginas de suplementos abiertas **47–49** para Figuras **51–53**.

![Figura 6 del artículo original y condiciones experimentales en Open-Science](/img/open-science/research-workflows/catalyst-figure6-source.png)

La fuente informa **98.9% Eficiencia Faradaic a CO en −1.2 V versus RHE** para Ni-SAC-2.5. El experimento de durabilidad utiliza **−0.8 V para 20 horas**. Estas condiciones deben permanecer separadas: esta última no establece la durabilidad de 20 horas en el potencial de máxima selectividad. La eficiencia faradaica describe la carga asignada a un producto; no es lo mismo que la eficiencia energética o la fracción de CO2 entrante convertido.

El suplemento suministra el hidrógeno-producto, NMR y las cifras de ampliación. Una capción legible no necesariamente proporciona cada punto numérico en un trazado. Mantenga esa distinción en el informe.

Para saltar a una página, expanda la vista previa PDF, haga clic en su contador de página, introduzca el número completo y pulse **Entra**. Verifique el mostrador resultante antes de leer. Página de suplemento 47 contiene **Gráfico suplementario 51**, cuyo eje es **H2 Faradaic efficiency**; no debe confundirse con el resultado principal del CO.

![Figura suplementaria 51 en la página PDF real 47 de 52](/img/open-science/research-workflows/catalyst-supplement-47.png)

## Chequee y guarde el informe {/* #check-and-save-the-report */}

Después de que la respuesta termine, abra **catalyst-claim-check.md**. Compruebe la identidad de origen, números de página, etiquetas de figuras y la redacción de la conclusión. En particular, el informe debe conservar **Resultados notificados** y evitar convertir un cheque de literatura en una reclamación de reproducción experimental.

![Informe de reclamación, pruebas, condiciones y límites salvados](/img/open-science/research-workflows/catalyst-claim-report.png)

Descargue el <a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>informe</a> para su estructura. Antes de utilizar una conclusión científica en su propio trabajo, inspeccione la evidencia original citada y cualquier corrección de editor. Para extraer la figura o la evidencia de tabla a un archivo separado, vea [Extracción PDF](../guides/previews.md#pdf-extraction).
