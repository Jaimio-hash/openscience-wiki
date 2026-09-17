---
title: "Contexto de memoria y conversación"
last_update:
  date: '2026-09-10'
---

# Contexto de memoria y conversación {/* #memory-and-conversation-context */}

Almacenes de memoria notas reutilizables; la ventana contextual es el material disponible para una solicitud modelo particular. Una nota guardada no es prueba de que un agente lo recordó, y un viejo mensaje visible no es prueba de que toda la historia original encaja en la siguiente petición.

Utilice una categoría para convenciones duraderas, como preservar las cuentas crudas y separar la longitud de los genes de los recuentos de muestras. Permitir la memoria y el auto-reconocimiento de la categoría cuando desea que esas convenciones se suministren a nuevas solicitudes.

## Crear una categoría y una nota {/* #create-a-category-and-note */}

<p className="example-label"><strong>Ejemplo práctico</strong> Guardar y recordar un convenio de presentación de informes RNA-seq</p>

1. Abre **Settings → Memory → New category**.
2. Ingrese `RNA-seq methods` como **Name**. En **When should the agent save a note here?**, describir cuando un método confirmado pertenece a esta categoría.
3. Ponga a **Auto-recall** deliberadamente. Este ejemplo lo dejó apagado para una nota de método manualmente mantenida.
4. Seleccione **Create**, luego **Add**. Introduzca la nota y seleccione **Save**.
5. Dejar y reabrir la categoría para verificar su contenido y contar.

![Nombre de la categoría, guía y auto-recall](/img/open-science/guides-walkthrough/17-memory-category.webp)

La nota guardada dice: “Mantenga la matriz original de cuenta GEO sin cambios. Preserve Entrez Gene IDs como texto, mantenga la longitud del gen separada de los recuentos de muestras, y registre la entrada SHA-256 con cada tabla derivada.” Esta es una convención de trabajo, no una reclamación sobre los resultados de análisis.

![Nota guardada manualmente mientras la memoria está apagada](/img/open-science/guides-walkthrough/18-memory-note.webp)

| Control | Efectos y límites |
| --- | --- |
| Interruptor de memoria | Activar/desactivar el ahorro de agente y recordar. Off mantiene las notas existentes y permite la edición manual. |
| Categoría de filas | Muestra las notas y la cuenta de esa categoría. Categorías grupo de memoria relacionada a través de proyectos. |
| Vista del proyecto | Mostrar las notas del proyecto; distinguirlo de una categoría global. |
| Nueva categoría | Nombre hasta caracteres 64, guía hasta 1,000; máximas categorías personalizadas 10. |
| Añadir / Nota de memoria | Cree una nota de hasta caracteres 4,000. El texto vacío mantiene a salvo indisponible. |
| Copiar nota | Copia su texto. |
| Edición de la nota → Guardar / Cancelar | Persiste texto revisado o descarte esa edición. |
| Actividades de la categoría → Editar | Cambiar el nombre, la guía y el nombre de una categoría personalizada. |
| Acciones de la categoría → Auto-recall | Control de la inclusión automática para esta categoría; el interruptor principal de memoria todavía se aplica. |

**About you** es una categoría incorporada. Su identidad no puede ser editada o eliminada como una categoría personalizada.

## Guardar una convención de una conversación {/* #save-a-convention-from-a-conversation */}

1. Enciende **Settings → Memory → Memory**. Abra **RNA-seq methods → Category actions** y active **Auto-recall**.
2. En su conversación de proyecto, pida al agente que recuerde una convención confirmada y nombre la categoría. Por ejemplo: “Recuerde en los métodos RNA-seq: para el QC descriptivo GSE60450, reporte genes de cuenta cero separados de los genes detectados; los dos recuentos deben resumir a 27,179 para cada muestra.”
3. Inspeccione la solicitud **Save memory** cuando se requiera la aprobación. Compruebe el contenido propuesto, categoría y alcance del proyecto antes de seleccionar **Allow once**. Elija **Deny** si no representa una convención acordada.
4. Abre la categoría. Comprueba que la nota existe, tiene el texto previsto y aparece en el proyecto previsto. La etiqueta **auto** identifica una nota creada por un agente; no significa que un cálculo verifique la convención.

![Un convenio de presentación de informes creado por agentes junto con la nota manual de conservación de fuentes](/img/open-science/non-workflow-completion/05-memory-note-category.webp)

## Revisar el recuerdo en una nueva conversación {/* #check-recall-in-a-new-conversation */}

Iniciar un **nueva conversación en el mismo proyecto** y preguntar qué convención de presentación de informes guardada se aplica, sin proporcionar la respuesta. Compare la respuesta con su nota. Una pregunta en la conversación original puede ser contestada desde su historia actual.

Apaga el **Memory** principal y repite la pregunta en otra nueva conversación. Compruebe que el agente ya no recibe la nota a través de la memoria de la aplicación. Sus notas guardadas permanecen en Ajustes. Cambiar la memoria no borra una nota o eliminar el texto ya presente en una conversación existente.

El ahorro anterior siguió una solicitud explícita de “recuerde”. No demuestra que el agente identificará espontáneamente cada convención útil. La compactación contexto se separa de guardar una nota de memoria.

## Inspección del contexto de conversación {/* #inspect-conversation-context */}

En una sesión, abra el porcentaje **Contexto utilizado** o **Add menu → Context window** cuando esté disponible. Inspeccione **Current composition**, **History** y **Session call summary**. Las categorías pueden incluir el impulso del sistema, Herramientas y agentes, Mensajes, Conectores y MCP, Skills y el sobrecabezamiento del marco.

Seleccione un punto de historia para inspeccionar su estado de funcionamiento, modelo, ocupación y terminal. Las estimaciones locales y las mediciones notificadas por los proveedores pueden diferir; El detalle de la categoría no disponible no es el uso cero. Un marcador de compactación registra un evento contextual, no un nuevo artefacto guardado o eliminación de cada mensaje visible. Los controles de compactación manual dependen del marco activo.

Cuando OpenCode proporciona **Compact** en el contexto popover, seleccione y espere a **Context compacted**. Los mensajes originales pueden permanecer visibles mientras el backend continúa desde un resumen. Antes de continuar, pida al agente que lista las restricciones retenidas y las compare con sus requisitos. Reestablezca cualquier limitación faltante o incorrecta antes de comenzar la próxima operación. La compactación no garantiza la retención sin pérdidas; Las mediciones de proveedores pueden diferir de las estimaciones locales.

![compactación completa y medición del contexto reportada por el proveedor](/img/open-science/non-workflow-completion/11-context-compacted.webp)

Para una continuación, indicar el objetivo actual, las decisiones aceptadas, los archivos exactos de entrada/salida, la validación ya hecha y preguntas sin resolver. Vincular la evidencia guardada en lugar de confiar en la memoria para reconstruirla. Utilice [Períodos de sesiones y ramas](./sessions.md) para ramificación/exportación y [Uso](./usage.md) para el volumen de token acumulativo.

## Suprímase únicamente el alcance previsto {/* #delete-only-the-intended-scope */}

**Delete note** elimina una nota después de la confirmación. **Delete category** elimina la categoría y sus notas; inspeccionar la cuenta afectada. **Clear all** elimina categorías y notas personalizadas mientras retiene Sobre usted. Cancelar cuando el alcance es más grande de lo previsto. Las copias de seguridad más antiguas todavía pueden contener notas eliminadas.

Fuentes: [Memoria schema](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts), [Panel de memoria](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx), [context viewer](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx).
