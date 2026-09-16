---
title: "Organizar con etiquetas"
last_update:
  date: '2026-09-16'
---

# Organizar con etiquetas {/* #organizing-with-tags */}

Etiquetas organizar **Skills, Conectores, Especialistas y Referencias**. No son una etiqueta universal en cada sesión o archivo de disco arbitrario. Utilice **Settings → Tags** para crear etiquetas y navegar por sus recursos asignados.

Después de asignar una etiqueta, abra su detalle y seleccione un recurso listado para volver a ella. La eliminación de la asignación de la etiqueta deja el recurso en su lugar.

## Crear y editar {/* #create-and-edit */}

1. Abrir **New Tag**, introducir un nombre y elegir su icono y color.
2. Seleccione **Create**. Revise la nueva fila y estado de cero recursos.
3. Elija **Edit Tag** para revisitar los valores actuales. **Save** compromete una edición; **Cancel** descarta el borrador.

![Transcripciónomics tag form](/img/open-science/guides-walkthrough/30-tag-create.png)

| Campo/control | Opciones y comportamiento |
| --- | --- |
| Nombre | Necesario; los nombres son únicos independientemente del caso. |
| Icono | Tag, Estrella, Marcador, Flask, Libro, Base de datos, Código o Bot. |
| Color | Gris, Rojo, Naranja, Ámbar, Verde, Azul, Púrpura o Rosa. |
| Crear / Guardar | Crear una nueva etiqueta o guardar la edición de una etiqueta existente; no se pueden presentar nombres vacíos. |
| Cancelar / Volver a las etiquetas | Deja el formulario sin guardar su borrador actual. |

Si el ahorro devuelve **No podía salvar la etiqueta.**, compare el nombre con las etiquetas existentes, incluyendo las diferencias caso-sólo, y reingrese con un nombre único. Ese error es genérico; no establece por sí misma la causa de cada ahorro fallido.

## Asignar y encontrar recursos {/* #assign-and-find-resources */}

Abra el Skill previsto, Connector, Specialist o Referencia y utilice su control de etiquetas para seleccionar la etiqueta. Volver a Ajustes → Tags y seleccionar la fila de la etiqueta. Lea el recuento de recursos, luego use **Filter resources by type** y **Search tagged resources** juntos. El selector de tipo ofrece todos los recursos, Skills, Conectores, Especialistas y Referencias. Despejen la búsqueda y reajusten el tipo si falta un recurso esperado.

En el selector de etiquetas del recurso, escriba en **Buscar etiquetas**, utilice **↑ / ↓** para pasar por los partidos y **Entra** para seleccionar. Si el nombre no existe, elija **Crear “nombre”** para crearlo y asignarlo. Compruebe la etiqueta seleccionada después de guardar.

Un nombre de la etiqueta por sí solo no conecta un servicio, otorga permiso o añade un Skill a un agente. Esos controles siguen siendo vinculantes para los recursos y su capacidad.

<p className="example-label"><strong>Ejemplo práctico</strong> Encontrar Omics Archives a través de una etiqueta de Transcripción</p>

Asignar **Transcripciónomics** a **Archivos de Omics**, luego abrir el detalle de la etiqueta. En este ejemplo, muestra **Recursos 1**; La búsqueda `Omics` mantiene que Connector visible, y la selección abre su detalle. Utilice su propia etiqueta y los nombres de recursos al repetir estos pasos. La eliminación de la asignación deja intacto el recurso.

![Archivo de Omics asignado recurso encontrado a través de su etiqueta](/img/open-science/guides-walkthrough/35-tagged-connector.png)

## Ordene la lista de etiquetas {/* #order-the-tag-list */}

**Favorites** se queda primero. Arrastre **Reorder &#91;nombre&#93;**, o concentre el mango y utilice las teclas de flecha, para mover una etiqueta personalizada. Revise su nueva posición en la lista.

![Ordenación de la etiqueta y vista de los recursos vacíos](/img/open-science/guides-walkthrough/31-tag-reorder.png)

## Quitar una etiqueta {/* #remove-a-tag */}

Seleccione **Delete Tag** e inspeccione **Asignaciones para eliminar**. Eliminar la etiqueta elimina esas asignaciones pero mantiene los recursos. **Cancel** conserva tanto la etiqueta como sus asignaciones.

![Alcance de eliminación, cancelado en este paso](/img/open-science/guides-walkthrough/32-tag-delete-boundary.png)

Si su propósito es sólo eliminar una asignación, haga eso en el recurso en lugar de borrar la etiqueta en todas partes. Use [Biblioteca de referencias](./library.md) para organizar papeles en colecciones; etiquetas y colecciones sirven diferentes propósitos.

Fuentes: [Etiquetas panel](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx), [asignaciones de recursos](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx).
