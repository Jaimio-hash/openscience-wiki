---
title: "Conectores y MCP"
last_update:
  date: '2026-09-10'
---

# Conectores y MCP {/* #connectors-and-mcp */}

Un Connector expone herramientas que un agente puede llamar. Utilice esta página para elegir el tipo de integración y entender la preparación. Para la configuración de campo por campo, importación/exportación y gestión de conexiones, siga [Configure Connectors](../guides/connectors.md).

<span id="inspect-an-existing-connector" />

<span id="connection-and-call-errors" />

## Elija un tipo de conexión {/* #choose-a-connection-type */}

| Tipo | Utilízalo cuando | Necesidades |
| --- | --- | --- |
| Connector incorporado | La aplicación ya proporciona la fuente o operación de datos requeridas | Habilitarlo para el agente previsto; algunos servicios también requieren credenciales |
| Servidor MCP local | Una herramienta debe ejecutarse en este ordenador o leer datos de investigación disponibles localmente | Un lanzador instalado, servidor y caminos de entrada permitidos |
| Servidor MCP remoto | Un servicio expone sus herramientas a través de un terminal MCP hospedado | El punto final MCP real, soporta el transporte HTTP/SSE y cualquier autentificación necesaria |

**Molecule** proporciona la renderización de la estructura local; no es una base de datos remota. Elija una fuente en [Bases de datos científicos](databases.md), o utilice [Visores científicos](viewers.md) para inspeccionar archivos moleculares y secuencia. La selección de un lanzador Docker no instala un motor contenedor o imagen del servidor.

## Distinguir la conexión de la disponibilidad {/* #distinguish-connection-from-availability */}

Comprueba estas etapas en orden. Pasar uno no establece que el siguiente ha tenido éxito.

| Etapa | Qué hacer para comprobar | Siguiente acción |
| --- | --- | --- |
| Configuración | Lanzamiento correcto o punto final y autenticación necesaria | Completar el [Connector form](../guides/connectors.md) |
| Conexión | El servidor responde y se descubren sus herramientas | Inspeccione el resultado de la conexión y errores reales |
| Acceso del agente | El recurso está habilitado para Main o asignado al Specialist previsto | Comprueba las ligaduras de capacidad de ese agente |
| Operación | La herramienta elegida acepta la solicitud y devuelve los datos necesarios | Usar el [referencia a la operación](../reference/connector-operations.md) para entradas incorporadas |
| Resultado de la investigación | Los identificadores devueltos, fuente y alcance coinciden con la tarea | Inspeccionar la respuesta antes de utilizarla como evidencia |

Un interruptor habilitado no es una llamada de servicio exitosa. Una respuesta de metadatos no es un texto completo descargado o matriz de conteo. Una fila personalizada puede abrir su editor de configuración; Los detalles incorporados proporcionan la especificación de la herramienta.

## Elija el siguiente paso {/* #choose-the-next-step */}

| Tarea | Instrucciones de Main |
| --- | --- |
| Agregar/editar un servidor, importar varios servidores o configuración de transferencia | [Configure Connectors](../guides/connectors.md) |
| Llaves Bind API o credenciales OAuth | [Cátedras de servicio](credentials.md) |
| Implementar un pequeño servidor y llamar sus herramientas | [Crear una herramienta personalizada](custom.md) |
| Busque campos de operación de bases de datos | [Referencia de operación Connector](../reference/connector-operations.md) |
| Gestionar las conexiones de scripts | [CLI](../reference/cli.md#manage-connectors-and-credentials) o [SDK](../reference/api.md#connector-management-methods) |

## Diagnóstico de la etapa de falla {/* #diagnose-the-failing-stage */}

Para fallos de conexión, identifique si el lanzador, el transporte o la autenticación fallaron. Si la conexión tiene éxito pero una llamada falla, comprobar la disponibilidad del agente y los argumentos de esa herramienta antes de cambiar la configuración del servidor. Informe el error real devuelto utilizando [Solución de problemas](../guides/troubleshooting.md).

El descubrimiento MCP se realiza durante la conexión. `host.mcp("server", "tools/list", {})` no es una llamada de herramienta de aplicación y puede devolver **herramienta desconocida**. El ejemplo personalizado también aflojó una falla de muestreo desconocido interno como `connector_unavailable`; que la respuesta por sí sola no distingue una muestra inválida de un fallo de transporte.
