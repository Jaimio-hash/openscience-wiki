---
title: "Configuración y contexto"
last_update:
  date: '2026-09-10'
---

# Configuración y contexto {/* #configuration-and-context */}

Esta referencia separa el contexto del proyecto, los defectos de la nueva sesión y la configuración de una sesión existente. Utilice [Proyectos](../guides/projects.md) o [Configuración del proveedor](../guides/providers.md) para el correspondiente recorrido de interfaz.

## Propiedad contexto y configuración {/* #context-and-configuration-ownership */}

| Valor | Propietario y efecto | No reemplaza |
| --- | --- | --- |
| Proyecto **Name** | Nombre de la pantalla del proyecto, caracteres 200 máximos | Un ID de proyecto único |
| Proyecto **Description** | Descripción de la lista de proyectos, caracteres máximos de 1,000; no incluido en el aviso del agente | Instrucciones del agente |
| Proyecto **Agent Context** | Máximo caracteres 16,000; incluido en sesiones de proyecto nuevas y reanudadas y enviado al proveedor modelo | Credenciales o una solicitud de tarea ejecutada |
| Sesión **Title** | Título de visualización, caracteres máximos 80 | Contexto del proyecto o identificador de una rama |
| Sesión **Description** | Descripción organizacional, caracteres máximos 1,000 | Un nuevo mensaje de usuario |
| Proveedor de modelo | Conexión, cuenta y catálogo modelo configurado | Instalación del marco de agente |
| Framework de agentes | Tiempo de ejecución utilizado para llevar a cabo la tarea | Un intérprete Notebook |
| Hora de ejecución Python/R | Interpreter utilizado para la ejecución de Notebook | Un modelo o su configuración de razonamiento-effort |
| Memoria | Notas almacenadas con su propio alcance y controles de memoria | Historia completa de la conversación |
| Habilidad | Instrucciones de método reutilizable y archivos | Una dependencia ya instalada o una credencial de servicio otorgada |

## Avanzado: Configuración de tareas API {/* #advanced-task-api-configuration */}

### Nuevas sesiones creadas a través de la tarea API {/* #new-sessions-created-through-the-task-api */}

El corredor de tareas resuelve cada campo por separado. La siguiente precedencia se aplica a una sesión **nuevo** Task API, no retroactivamente a todas las conversaciones de escritorio existentes.

| Campo | Resolución, máxima prioridad primero |
| --- | --- |
| Perfil de permisos | Explicit run request → sesión del proyecto predeterminado → aplicación predeterminado → `ask` |
| Revisión automática | Solicitud de explicit → predeterminado del proyecto → `false` |
| Memoria activada | Solicitud de explicit → predeterminado del proyecto → `true` |
| Política de las delegaciones | Solicitud de explicit → predeterminado del proyecto → `allow` |
| Especialista | Solicitud de Explicit → predeterminación del proyecto cuando se establece |
| Proveedor/modelo/reasoning | Explicar el parche de configuración sobre la configuración del proyecto, o la configuración efectiva de la aplicación/providente |
| Selected Compute Hosts | Explicit selected IDs → proyecto seleccionado IDs |

Los hospedadores de computación habilitados también incorporan los identificadores seleccionados durante la preparación de la nueva sesión. Una lista de host habilitados explícitamente vacía aclara la lista habilitada heredada antes de que se incluyan los hosts seleccionados. Para una actualización de configuración existente entre períodos de sesiones, cada ID seleccionado debe estar presente en el conjunto habilitado.

Utilice la referencia [CLI](cli.md) o [Task SDK/API](api.md) para los comandos de lectura/actualización reales. Los incumplimientos de la sesión del proyecto son un contrato de configuración; no asuma el diálogo Nombre/Descripción del proyecto expone todos estos campos.

### Valores de configuración aceptados {/* #accepted-configuration-values */}

| Campo | Valor aceptado |
| --- | --- |
| `agentConfiguration.providerId` | ID del proveedor configurado no vacío |
| `agentConfiguration.model` | Identificación del modelo facultativo; un parche de actualización puede usar `null` para reiniciar el predeterminado del proveedor |
| `agentConfiguration.reasoningEffort` | `default`, `low`, `medium`, `high`, `xhigh`, `max`; la selección real depende del proveedor/modelo |
| `permissionProfile` | `ask`, `auto`, `full` |
| `autoReviewEnabled` | Boolean |
| `memoryEnabled` | Boolean |
| `delegationPolicy` | `allow`, `deny` |
| `specialistId` in project defaults | Identificación no vacía; no un campo en el parche de configuración de sesión ordinaria |
| `computeHosts.enabled`, `.selected` | Arregleses de los IDs de host no vacíos; seleccionado debe ser un subconjunto de habilitado |

Los esquemas rechazan campos desconocidos. La presencia de un modelo mostrado no garantiza que sea seleccionable con el marco actual o con las credenciales. Utilice el catálogo configurado y el resultado de disponibilidad.

### Predeterminados del proveedor y configuraciones no disponibles {/* #provider-defaults-and-unavailable-configurations */}

Para un proveedor de suscripción, dejando el modelo no especificado conserva el predeterminado de la cuenta/CLI. No marca el primer modelo que aparece en el catálogo. Si una configuración de sesión guardada ya no es seleccionable, el solucionador del renderizador puede utilizar la configuración de aplicación seleccionable activa; si ninguno está disponible, reporta indisponible. Inspeccione el modelo seleccionado al reabrir el trabajo antiguo después de cambiar los proveedores.

### Actualización y reanudación de las normas {/* #update-and-resume-rules */}

Lea la configuración actual de una sesión existente antes de editarla. Incluya su **`expectedRevision`**, un entero no negativo, con la actualización. El servidor rechaza una revisión obsoleta como `session_revision_conflict`. También rechaza las actualizaciones mientras la sesión tiene trabajo activo o está fuera del estado del ocio/error.

Un cambio de proveedor requiere un modelo explícito o `model: null` para elegir el defecto del nuevo proveedor. Omitir el modelo mientras el proveedor de cambio no lleva silenciosamente el modelo de un antiguo proveedor a través. Un modelo de reajuste es diferente de una cadena vacía.

Para cambiar de proveedor, modelo, esfuerzo de razonamiento, memoria o alojamientos de computación habilitados antes de reanudar una sesión de tareas API existente, utilice la operación de actualización de configuración de sesión primero. La provisión de estos campos de tiempo de creación en una solicitud de reanudación devuelve `invalid_request`. El directorio de trabajo todavía debe coincidir con el directorio canónico de la sesión.

Las actualizaciones de proyecto por defecto utilizan **`expectedUpdatedAt`**, un número de números enteros positivo del proyecto actual, y un parche. Un campo predeterminado del proyecto `null` elimina esa anulación; Omitir el campo lo conserva. Actualizar predeterminados rige la futura creación de sesión y no reescribir las pruebas de salida existentes.

## Manual de instrucciones y opciones de almacenamiento secreto {/* #host-instructions-and-secret-storage-choices */}

Compute Host instrucciones guardadas y los recursos detectados son separados. Un documento de instrucción guardado vacío es distinto de una sonda de recursos exitosa. El reemplazo asistido por el agente debe utilizar el texto guardado actual como su guardia. Véase [detalles del anfitrión](../guides/remote-compute.md#keep-host-instructions-separate-from-detected-resources); este contrato interno está separado de la tarea pública API.

El almacenamiento de credenciales es una opción de inicio, no una preferencia de proyecto/sesión. Vea [Modo de archivo Linux](server.md#credential-storage-on-headless-linux) para el alcance, OS-store predeterminado y límites de migración. No coloque una bandera credencial en la configuración de sesión JSON.

## Conexiones {/* #related-boundaries */}

Para los alcances de aprobación y el orden de política, utilice [Permisos](permissions.md). Para documentos Skill/Specialist/Connector portátiles, utilice [Formatos de paquete](packages.md). Una exportación de paquetes no es un basurero de configuración de sesión o secretos de cuenta almacenados. Para la diferencia entre una sesión de escritorio y el servicio web local, utilice [Servicio sin cabeza](server.md).

Fuentes: [contrato de acogida](https://github.com/aipoch/open-science/commit/04adfd61), [startup credential mode](https://github.com/aipoch/open-science/commit/3411d23c).

Referencia técnica: [contratos de proyectos](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [configuración esquemas](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [resolución de los organizadores de tareas](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [proveedor de descuento](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
