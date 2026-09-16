---
title: "Configuration and context"
last_update:
  date: '2026-09-10'
---

# Configuration and context

This reference separates project context, new-session defaults and the configuration of an existing session. Use [Projects](../guides/projects.md) or [Provider setup](../guides/providers.md) for the corresponding interface walkthrough.

## Context and configuration ownership

| Value | Owner and effect | Does not replace |
| --- | --- | --- |
| Project **Name** | Project display name, required, maximum 200 characters | A unique project ID |
| Project **Description** | Project-list description, maximum 1,000 characters; not included in the agent prompt | Agent instructions |
| Project **Agent Context** | Maximum 16,000 characters; included in new and resumed project sessions and sent to the model provider | Credentials or an executed task request |
| Session **Title** | Display title, maximum 80 characters | Project context or a branch identifier |
| Session **Description** | Organizational description, maximum 1,000 characters | A new user message |
| Model provider | Connection, account and configured model catalog | Agent-framework installation |
| Agent framework | Runtime used to conduct the task | A Notebook interpreter |
| Python/R runtime | Interpreter used for Notebook execution | A model or its reasoning-effort setting |
| Memory | Stored notes with their own scope and recall controls | Complete conversation history |
| Skill | Reusable method instructions and files | An already installed dependency or granted service credential |

## Advanced: Task API configuration

### New sessions created through the Task API

The task runner resolves each field separately. The following precedence applies to a **new** Task API session, not retroactively to all existing desktop conversations.

| Field | Resolution, highest priority first |
| --- | --- |
| Permission profile | Explicit run request → project session defaults → application default → `ask` |
| Auto-review | Explicit request → project default → `false` |
| Memory enabled | Explicit request → project default → `true` |
| Delegation policy | Explicit request → project default → `allow` |
| Specialist | Explicit request → project default when set |
| Provider/model/reasoning | Explicit configuration patch over project configuration, or the effective app/provider configuration |
| Selected Compute Hosts | Explicit selected IDs → project selected IDs |

Enabled Compute Hosts also incorporate the selected IDs during new-session preparation. An explicitly empty enabled-host list clears the inherited enabled list before selected hosts are included. For an existing-session configuration update, every selected ID must be present in the enabled set.

Use the [CLI](cli.md) or [Task SDK/API](api.md) reference for the actual read/update commands. Project session defaults are a configuration contract; do not assume the project Name/Description dialog exposes all these fields.

### Accepted configuration values

| Field | Accepted value |
| --- | --- |
| `agentConfiguration.providerId` | Nonempty configured provider ID |
| `agentConfiguration.model` | Optional model ID; an update patch may use `null` to reset to provider default |
| `agentConfiguration.reasoningEffort` | `default`, `low`, `medium`, `high`, `xhigh`, `max`; actual selectability depends on the provider/model |
| `permissionProfile` | `ask`, `auto`, `full` |
| `autoReviewEnabled` | Boolean |
| `memoryEnabled` | Boolean |
| `delegationPolicy` | `allow`, `deny` |
| `specialistId` in project defaults | Nonempty ID; not a field in the ordinary session configuration patch |
| `computeHosts.enabled`, `.selected` | Arrays of nonempty host IDs; selected must be a subset of enabled |

The schemas reject unknown fields. A displayed model's presence does not guarantee it is selectable with the current framework or credentials. Use the configured catalog and availability result.

### Provider defaults and unavailable configurations

For a subscription provider, leaving the model unspecified preserves the account/CLI-owned default. It does not pin the first model listed in the catalog. If a saved session configuration is no longer selectable, the renderer resolver can use the active selectable app configuration; if neither is available, it reports unavailable. Inspect the selected model when reopening old work after changing providers.

### Update and resume rules

Read an existing session's current configuration before editing it. Include its **`expectedRevision`**, a nonnegative integer, with the update. The server rejects an outdated revision as `session_revision_conflict`. It also rejects updates while the session has active work or is outside idle/error state.

A provider change requires either an explicit model or `model: null` to choose the new provider's default. Omitting the model while changing provider does not silently carry an old provider's model across. A model reset is different from an empty string.

To change provider, model, reasoning effort, Memory or enabled Compute Hosts before resuming an existing Task API session, use the session configuration update operation first. Supplying these creation-time fields in a resume request returns `invalid_request`. The working directory must still match the session's canonical directory.

Project-default updates use **`expectedUpdatedAt`**, a positive integer timestamp from the current project, and a patch. A `null` project-default field removes that override; omitting the field preserves it. Updating defaults governs future session creation and does not rewrite existing output evidence.

## Host instructions and secret-storage choices

Saved Compute Host instructions and detected resources are separate. An empty saved instruction document is distinct from a successful resource probe. Agent-assisted replacement must use the current saved text as its guard. See [host details](../guides/remote-compute.md#keep-host-instructions-separate-from-detected-resources); this internal contract is separate from the public Task API.

Credential storage is a startup choice, not a project/session preference. See [Linux file mode](server.md#credential-storage-on-headless-linux) for scope, OS-store default and migration limits. Do not place a credential-store flag in session configuration JSON.

## Related boundaries

For approval scopes and policy order, use [Permissions](permissions.md). For portable Skill/Specialist/Connector documents, use [Package formats](packages.md). A package export is not a dump of session configuration or stored account secrets. For the difference between a desktop session and the local web service, use [Headless service](server.md).

Sources: [host contract](https://github.com/aipoch/open-science/commit/04adfd61), [startup credential mode](https://github.com/aipoch/open-science/commit/3411d23c).

Technical reference: [project contracts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [configuration schemas](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [task-runner resolution](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [provider fallback](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
