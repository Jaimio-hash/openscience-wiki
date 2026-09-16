---
title: "Connectors and MCP"
last_update:
  date: '2026-09-10'
---

# Connectors and MCP

A Connector exposes tools that an agent can call. Use this page to choose the integration type and understand readiness. For field-by-field setup, import/export and connection management, follow [Configure Connectors](../guides/connectors.md).

<span id="inspect-an-existing-connector" />

<span id="connection-and-call-errors" />

## Choose a connection type

| Type | Use it when | Requirements |
| --- | --- | --- |
| Built-in Connector | The application already provides the required data source or operation | Enable it for the intended agent; some services also require credentials |
| Local MCP server | A tool must run on this computer or read locally available research data | An installed launcher, server and permitted input paths |
| Remote MCP server | A service exposes its tools through a hosted MCP endpoint | The actual MCP endpoint, supported HTTP/SSE transport and any required authentication |

**Molecule** provides local structure rendering; it is not a remote database. Choose a source in [Scientific databases](databases.md), or use [Scientific viewers](viewers.md) to inspect molecular and sequence files. Selecting a Docker launcher does not install a container engine or server image.

## Distinguish connection from availability

Check these stages in order. Passing one does not establish that the next has succeeded.

| Stage | What to check | Next action |
| --- | --- | --- |
| Configuration | Correct launcher or endpoint and required authentication | Complete the [Connector form](../guides/connectors.md) |
| Connection | The server responds and its tools are discovered | Inspect the connection result and actual errors |
| Agent access | The resource is enabled for Main or assigned to the intended Specialist | Check that agent's capability bindings |
| Operation | The chosen tool accepts the request and returns the required data | Use the [operation reference](../reference/connector-operations.md) for built-in inputs |
| Research result | Returned identifiers, source and scope match the task | Inspect the response before using it as evidence |

An enabled switch is not a successful service call. A metadata response is not a downloaded full text or count matrix. A custom row may open its configuration editor; built-in details provide the tool specification.

## Choose the next step

| Task | Main instructions |
| --- | --- |
| Add/edit a server, import several servers or transfer configuration | [Configure Connectors](../guides/connectors.md) |
| Bind API keys or OAuth credentials | [Service credentials](credentials.md) |
| Implement a small server and call its tools | [Create a custom tool](custom.md) |
| Look up database operation fields | [Connector operation reference](../reference/connector-operations.md) |
| Manage connections from scripts | [CLI](../reference/cli.md#manage-connectors-and-credentials) or [SDK](../reference/api.md#connector-management-methods) |

## Diagnose the failing stage

For connection failures, identify whether the launcher, transport or authentication failed. If connection succeeds but a call fails, check agent availability and that tool's arguments before changing the server configuration. Report the actual returned error using [Troubleshooting](../guides/troubleshooting.md).

MCP discovery is performed during connection. `host.mcp("server", "tools/list", {})` is not an application tool call and can return **unknown tool**. The custom example also surfaced an internal unknown-sample failure as `connector_unavailable`; that response alone does not distinguish an invalid sample from a transport failure.
