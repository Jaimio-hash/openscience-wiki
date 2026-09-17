---
title: "Delegar y verificar el trabajo"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Delegar y verificar el trabajo {/* #delegate-and-verify-work */}

La delegación da una tarea infantil separada a un papel mientras que el agente Main coordina la conversación. Seleccionar un Specialist para hablar en la conversación principal y delegar una tarea infantil son acciones diferentes.

## Preparar un desvío atado {/* #prepare-a-bounded-handoff */}

| Información requerida | Ejemplo |
| --- | --- |
| Función | RNA-seq QC Reseñador, ID guardado `rna-seq-qc-reviewer` |
| Entrada | GSE60450 muestra-QC CSV, o una versión de archivo immutable actual válida |
| Tarea | Chequee 12 no perder identificaciones de muestras completas únicas y la identidad de cuenta de genes por muestreo |
| Aplicable | Una tabla de verificación más el resultado aritmético de cada muestra |
| Límites | Solo lectura; no nuevos paquetes; no diferencial-expresión interpretación |

1. Cree/configure el [función](./identity.md) y confirme que está habilitado.
2. En el **Agent controls** de la conversación, active **Delegation**. Confirme el modelo previsto y la autenticación de trabajo.
3. Pídale a Main Agent que delegue explícitamente, identifique el papel y proporcione la tarea completa. Si utiliza el archivo handoff, deje que la aplicación resuelva las versiones actuales; no inventar IDs o pasar nombres de archivo como referencias de la versión.
4. Vigila la actividad de la delegación real y la condición de niño. Una sentencia de progreso de Main Agent no es el registro de niños.
5. Abra el chip infantil / **Subagents** vista previa. Seleccione la tarea en **Subagent Frame** y lea su transcripción, resultados de la herramienta y estado terminal.
6. Responder a cualquier solicitud de permiso de los niños en la conversación de los padres después de inspeccionar su alcance. Luego compare el resultado devuelto con los cheques de aceptación solicitados.

## Compruebe el resultado de la entrega y devuelto {/* #check-the-handoff-and-returned-result */}

### Revise una pequeña tabla en línea {/* #verified-example-twelve-sample-invariants */}

<p className="example-label"><strong>Ejemplo práctico</strong> Delegar un cheque de mesa de doce muestras</p>

Descargue el <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">muestra-QC CSV</ExampleDownload> completo y pega su cabecera y las doce filas inmediatamente debajo de la petición. Mantenga todas las columnas y los identificadores de muestra completos. El ejemplo utiliza el papel habilitado creado en [Identidad Specialist](identity.md); Python debe ser habilitado para su aritmética. No se necesita Skill extra para este cheque atado.

> Delegado a RNA-seq QC Reviewer. Utilice sólo el CSV completo a continuación. Ejecute la aritmética en Python, verifique doce identificadores de muestras completas distintos, y compruebe zero_count_genes + detected_genes_count_gt_0 = 27179 para cada fila. Devuelve cada resultado y declara que este cheques proporcionó datos sumarios, no acceso independiente a la matriz de recuento original.

![La subtarea Specialist completada con cheques por muestreo](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.webp)

En este ejemplo, el niño corrió un Python Notebook y regresó **Renglones 12, identificadores distintos de 12 y sumas 12/12 iguales a 27,179**. Para el primer ID de muestra completa, `8,664 + 18,515 = 27,179`. Los campos numéricos eran completos y no negativos.

Esto verifica la consistencia del sumario suministrado. No puede reproducir independientemente los totales/medios de la matriz original, validar las condiciones de la muestra, o establecer umbrales de calidad biológica.

<span id="check-file-handoff-and-a-separate-model" />

### Elija un modelo separado {/* #choose-a-separate-model */}

Establecer un modelo infantil independientemente de Main.



Elija un modelo fijo bajo **Settings → Model → Subagent** antes de delegar. Abrir el registro del niño para verificar su modelo real; la etiqueta modelo de la conversación principal no identifica al niño. En la configuración ejercida, Main utilizó `gpt-5.6-sol` y el registro de ejecución de niños utilizó `gpt-5.6-luna`, tanto a través de la autenticación de suscripción Codex.

### Pase un archivo al niño {/* #pass-a-file-to-the-child */}

<p className="example-label"><strong>Ejemplo</strong> Entregar un archivo de muestra-QC a una tarea infantil</p>

1. Adjuntar el archivo fuente a través del menú adjunto de la conversación y esperar a que la carga termine.
2. Pídale a Main que pase esa versión cargada exacta al niño. Nombrar los cheques y la salida necesarios; no sustituya un nombre de archivo o una versión adivinada ID para el archivo.
3. Abra **Subagents** y seleccione el niño. En **Notebook**, seleccione ese niño en el filtro **Agent** e inspeccione el archivo real leído.
4. Compare el recuento de filas del niño, los nombres de columna y el checksum con la fuente. Abra su salida guardada y compruebe el cálculo solicitado.

Para el [muestra-métricas públicas CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv), espere **Renglones de datos 12** y **269,027,617** como la suma de `total_counts`. La suma de comprobación de entrada debe permanecer inalterada. Estos cheques se refieren al resumen de la muestra suministrada; no recalculan la matriz original de la cuenta de genes.

| Check | Evidencias necesarias |
| --- | --- |
| Versión aceptada | La aplicación resolvió la actual versión inmutable de carga/artifacto en su propia sesión. |
| El niño puede leer | La herramienta del niño devolvió el contenido del archivo; un nombre de archivo o camino escenificado solo es insuficiente. |
| Cheques ejecutados | El niño corrió el cálculo y su resultado salvado está de acuerdo con la fuente. |

Si la aplicación reporta una entrada indisponible, vuelva a conectar el archivo y vuelva a entrar usando su versión actual. Si el niño informa **`PermissionError: [Errno 1] Operation not permitted`**, retén el error exacto y [reportarlo](../guides/troubleshooting.md) si el reajuste no recupera la lectura. No mueva archivos en carpetas de aplicación interna para evitar el error.

### Haga un Skill disponible para el niño {/* #make-a-skill-available-to-the-child */}

Importar o crear el Skill primero. Para un Specialist, asignarlo bajo el [Skills y conectores](capabilities.md) del papel; luego iniciar una nueva tarea delegada que nombre explícitamente el método. Pídale al niño que lea las instrucciones instaladas antes de utilizarlas.

Inspeccione la actividad de herramienta del niño para la identidad y el contenido cargados de Skill. Por ejemplo, `rnaseq-count-qc` requiere una matriz de cuenta de genes cruda y describe QC descriptivo; un resumen de la muestra de doce hojas no es una entrada intercambiable. Un paquete exitoso leído no significa que el análisis haya funcionado. Compruebe la ejecución y los resultados guardados por separado.

## Lea las fallas con precisión {/* #read-failures-accurately */}

| Estado observado o apoyado | Significado y recuperación |
| --- | --- |
| Delegación privada | Enciende para la conversación prevista antes de volver a intentarlo. |
| Función desactivada / configuración incompleta | Terminar la configuración y habilitar el papel guardado previsto. |
| Entrada no disponible en este período de sesiones | Obtenga la versión exacta del artefacto actual o referencia de subida inmutable. Un camino, identificación de artefactos y ID de versión son valores diferentes. |
| Esperando permiso | Inspeccione la operación pendiente del niño nombrado; El agente Main puede estar esperando en lugar de computar. |
| Niños terminados | Lea el resultado y las pruebas de herramientas; La terminación no es una garantía de corrección científica. |
| Cancelada / fallada | Retener la salida parcial y el error real. No etiquetar un reemplazo del agente Main como un cheque Specialist. |

La ruta en línea es apropiada sólo para una tabla completa y limitada cuyo alcance de prueba se indica; no es un reemplazo general para el linaje de archivos.

Referencia de implementación: [ComposerAgentControlesMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [EspecialistaSubmenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx).
