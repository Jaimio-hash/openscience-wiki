---
title: "Servicio sin cabeza y acceso al navegador"
last_update:
  date: '2026-09-14'
---

# Servicio sin cabeza y acceso al navegador {/* #headless-service-and-browser-access */}

El servicio local proporciona un backend sin cabeza y una interfaz del navegador localhost. Es diferente de un host SSH Compute y de la parpadeación del navegador Remote.It. Elija la configuración de autenticación y almacenamiento credencial para el anfitrión antes de conectar un cliente.

## Selección y descubrimiento de objetivos {/* #target-selection-and-discovery */}

| Selector | Ámbito |
| --- | --- |
| `--port PORT` | Superar el puerto de servicio localhost; entero válido 1-65535 |
| `--app-path PATH` | Seleccione un ejecutable de aplicación instalado; utilizar el camino ejecutable, no una carpeta de proyecto arbitraria |
| `--config-root PATH` | Desarrollar la configuración anular; paquete de startup lo rechaza |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | Explicar el descubrimiento de la configuración donde se admite |
| Descubrimiento automático | Pruebe la configuración de desarrollo antes de la producción, saltando candidatos muertos/no saludables |

Un lugar de configuración explícito restringe el descubrimiento a ese directorio. Compruebe el estado del perfil previsto antes de comenzar o detenerlo. Si el estado regresa `running:false`, siga los comandos del ciclo de vida a continuación; una ventana de escritorio abierta puede utilizar otro servicio / archivo.

El archivo del estado de servicio es `web-service.json`. La falta de autenticación no es el permiso para matar su proceso registrado. El código de cierre preserva registros insalubres para el diagnóstico y evita la señalización de un PID que puede haber sido reutilizado por otro proceso.

## Inicializar y comprobar la preparación {/* #readiness */}

Utilice `open-science init` para preparar el directorio de configuración predeterminado sin iniciar la aplicación. `--profile` alias `--config-root` sólo cuando se apoyan las anulaciones de perfil de desarrollo; no evita la restricción de la compilación empaquetada. Los paquetes Debian instalan el CLI junto a la aplicación. Ver [terminal setup](cli.md#terminal-setup) para la preparación y inicio de sesión de Codex.

Después de un `start --no-open` intencional, ejecute `open-science doctor --json`. Inspeccione el `ready` general, los cheques individuales y las siguientes acciones sugeridas; el código de salida del proceso por sí solo no es un veredicto de preparación. Mantenga el servicio en su interfaz local autenticada existente. Iniciar este servicio sin cabeza no configura Remote.It ni publica un endpoint público.

## Comandos de ciclo de vida {/* #lifecycle-commands */}

| Comando | Resultado | Opciones y límites |
| --- | --- | --- |
| `open-science start` | Iniciar el backend y abrir el navegador | Puerto predeterminado 44100 |
| `open-science start --no-open` | Comenzar sin abrir un navegador | Uso para una sesión de servicio local intencional |
| `open-science status --json` | Imprimir estado de servicio legible por máquina | Devuelve un servicio perdido `{"running":false}` y código de salida 1 |
| `open-science url` | Imprima la URL del navegador autenticado | Contiene autoridad local de acceso; no pegar en ejemplos publicados |
| `open-science stop` | Solicitud de apagado elegante autenticado | No señale ciegamente un PID de un archivo de estado de estancamiento |
| `open-science stop --json` | Informe el resultado de la clausura | Véase el cuadro de resultados que figura a continuación |

Entre estos comandos, **status and stop support `--json`; empezar y url no**. El cheque `start --json` local devuelto `invalid_cli_usage` con código de salida 2 antes de comenzar cualquier cosa. Para un lanzamiento con scripts, ejecute `start --no-open`, luego `status --json`.

### Efectos de cierre {/* #shutdown-outcomes */}

| JSON `result` | Significado |
| --- | --- |
| `already-stopped` | No hay registro de servicio en vivo encontrado |
| `daemon-stopped` | Authenticated standalone daemon salió |
| `web-service-stopped` | Se detuvo el servicio web adjunto; La aplicación de escritorio sigue funcionando |

Una solicitud rechazada o el plazo de cierre perdido devuelve un fracaso. Lea el error e inspeccione el estado de destino real. No reporte un servicio como se detuvo simplemente porque el comando regresó.

## Autenticación y acceso al navegador {/* #authentication-and-browser-access */}

El SDK descubre el servicio local y lee su ficha de autenticación local, enviándolo en los encabezados de solicitud. La producción ordinaria de tareas humana/JSON/JSONL no imprime ese token. `url` es la excepción intencional que produce una entrada de navegador autenticado.

Un servicio localhost no es accesible automáticamente desde otro ordenador. El acceso remoto del navegador utiliza su propio modo de acceso configurado, emparejamiento y ciclo de vida de navegador de confianza. SSH Compute envía puestos de trabajo a los anfitriones de ejecución remota configurados.

Utilice [Acceso remoto al navegador](../guides/remote-access.md) para pares Remote.It y [Computación remota](../guides/remote-compute.md) para trabajos SSH. Tampoco se configura el flujo cambiando la URL de la documentación del servicio local.

### Almacenamiento credencial en Linux sin cabeza {/* #credential-storage-on-headless-linux */}

El defecto es almacenamiento protegido por el sistema operativo. En un backend sin cabeza Linux sin un llavero utilizable, elija una alternativa explícita:

<p className="example-label"><strong>Ejemplo</strong> Iniciar un servicio sin cabeza Linux con almacenamiento credencial de archivo</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| Elección | Comportamiento |
| --- | --- |
| Opción omitida / --credential-store=os | Requiere la tienda protegida por el sistema operativo |
| --credential-store=file | Permitir secretos no cifrados gestionados por Ajustes en los sin cabeza Linux sólo |
| lanzamiento de escritorio, macOS o Windows | El modo de archivo no es compatible |
| Retrocede ya. | Se rechaza la selección de modo explícito; no cambia el modo de ese proceso |
| Siguiente startup | Especifique el modo de nuevo; no es una preferencia guardada |

El modo de archivo utiliza la configuración.json y credenciales.json bajo la raíz de configuración, con escrituras atómicas y modo POSIX 0600. El archivo:v1: el valor es de base64 codificado, **no encriptado**. Cualquier persona que pueda leerlo puede recuperar el secreto; excluir estos archivos de repositorios, imágenes e informes de soporte.

La elección se aplica a las claves de proveedores gestionadas por Configuración nuevas o actualizadas, fichas de suscripción administradas por aplicaciones, llaves de GitHub/literatura y secretos compartidos de MCP/OAuth. Computar contraseñas/protegidos Los datos de Compute mantienen su requisito de almacenamiento operativo separado; Tiendas de identificación de agentes externos-framework siguen sus propias reglas. No hay caja de arena desactivada por esta opción.

Los valores encriptados existentes no se migran automáticamente y todavía requieren su bóveda original del sistema operativo. Si no está disponible, vuelva a entrar en la credencial a través de la forma soportada normal. Los archivos ref requieren un modo de archivo explícito para leer y son incompatibles con versiones anteriores. Para devolver una credencial al almacenamiento de OS, reinicie en modo OS y reemplace explícitamente mientras la bóveda está disponible.

Utilice almacenamiento persistente cuando la configuración debe sobrevivir el reemplazo de contenedores. La desconexión mantiene la configuración; reemplazar un sistema de archivos de contenedores desechable puede eliminarlo. Vea el [contrato de almacenamiento de credenciales](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md).

## Comportamiento de actualización de la aplicación {/* #application-update-behavior */}

`open-science update` actualiza la aplicación instalada. Actualizar el cliente npm por separado. El comando puede iniciar un servicio local cuando sea necesario y dejar ese servicio disponible después.

| `update --json` resultados | Interpretación |
| --- | --- |
| `up-to-date` | No nueva versión aplicable encontrada |
| `install-started` | Updater aceptó el desvío de la instalación; la versión instalada final no es verificada por esa invocación |
| `manual-action-required` | Siga la ruta del instalador notificado/siguiente paso |
| `blocked` | La investigación activa impide una actualización en el lugar; inspectiva `blockedBy` |

El soporte requiere la capacidad de servicio `update-cli-v1`. Las instalaciones más antiguas pueden requerir una actualización manual en lugar de un procedimiento remoto adivinado. Retener el resultado impreso y verificar la versión de aplicación después de la instalación.

[Aplicación del ciclo de vida y el descubrimiento](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs), [configuración de descubrimiento](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs). Para banderas de tareas y códigos de salida, véase [CLI](./cli.md); para llamadas programáticas, vea [Task SDK](./api.md).
