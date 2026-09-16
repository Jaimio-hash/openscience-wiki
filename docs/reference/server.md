---
title: "Headless service and browser access"
last_update:
  date: '2026-09-14'
---

# Headless service and browser access

The local service provides a headless backend and a localhost browser interface. It is distinct from an SSH Compute host and from Remote.It browser pairing. Choose the authentication and credential-storage settings for the host before connecting a client.

## Target selection and discovery

| Selector | Scope |
| --- | --- |
| `--port PORT` | Override localhost service port; valid integer 1–65535 |
| `--app-path PATH` | Select an installed application executable; use the executable path, not an arbitrary project folder |
| `--config-root PATH` | Development-build config override; packaged startup rejects it |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | Explicit configuration discovery override where supported |
| Automatic discovery | Try development configuration before production, skipping dead/unhealthy candidates |

An explicit configuration location restricts discovery to that directory. Check status for the intended profile before starting or stopping it. If status returns `running:false`, follow the lifecycle commands below; an open desktop window may use another service/profile.

The service state file is `web-service.json`. Authentication failure is not permission to kill its recorded process. The shutdown code preserves live unhealthy records for diagnosis and avoids signalling a PID that may have been reused by another process.

## Initialize and check readiness {/* #readiness */}

Use `open-science init` to prepare the default configuration directory without starting the app. `--profile` aliases `--config-root` only where development-profile overrides are supported; it does not bypass the packaged-build restriction. Debian packages install the CLI alongside the application. See [terminal setup](cli.md#terminal-setup) for Codex preparation and login.

After an intentional `start --no-open`, run `open-science doctor --json`. Inspect overall `ready`, individual checks and suggested next actions; the process exit code alone is not a readiness verdict. Keep the service on its existing authenticated local interface. Starting this headless service does not configure Remote.It or publish a public endpoint.

## Lifecycle commands

| Command | Result | Options and boundary |
| --- | --- | --- |
| `open-science start` | Start the backend and open the browser | Default port 44100 |
| `open-science start --no-open` | Start without opening a browser | Use for an intentional local service session |
| `open-science status --json` | Print machine-readable service state | A missing service returns `{"running":false}` and exit code 1 |
| `open-science url` | Print the authenticated browser URL | Contains local access authority; do not paste into published examples |
| `open-science stop` | Request authenticated graceful shutdown | Does not blindly signal a PID from a stale state file |
| `open-science stop --json` | Report the shutdown outcome | See the result table below |

Among these commands, **status and stop support `--json`; start and url do not**. The local `start --json` check returned `invalid_cli_usage` with exit code 2 before starting anything. For a scripted launch, run `start --no-open`, then `status --json`.

### Shutdown outcomes

| JSON `result` | Meaning |
| --- | --- |
| `already-stopped` | No live service record found |
| `daemon-stopped` | Authenticated standalone daemon exited |
| `web-service-stopped` | Attached web service stopped; desktop application remains running |

A rejected request or missed shutdown deadline returns a failure. Read the error and inspect the actual target state. Do not report a service as stopped merely because the command returned.

## Authentication and browser access

The SDK discovers the local service and reads its local authentication token, sending it in request headers. Ordinary human/JSON/JSONL task output does not print that token. `url` is the intentional exception that produces an authenticated browser entry.

A localhost service is not automatically accessible from another computer. Remote browser access uses its own configured access mode, pairing and trusted-browser lifecycle. SSH Compute instead sends jobs to configured remote execution hosts.

Use [Remote browser access](../guides/remote-access.md) for Remote.It pairing, and [Remote compute](../guides/remote-compute.md) for SSH jobs. Neither flow is configured by changing the local service's documentation URL.

### Credential storage on headless Linux

The default is OS-protected storage. On a Linux headless backend without a usable keyring, choose an explicit alternative:

<p className="example-label"><strong>Example</strong> Start a Linux headless service with file credential storage</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| Choice | Behavior |
| --- | --- |
| Omitted option / --credential-store=os | Require the OS-protected store |
| --credential-store=file | Allow unencrypted Settings-managed secrets on Linux headless only |
| Desktop, macOS or Windows launch | File mode is not supported |
| Already-running backend | Explicit mode selection is rejected; it does not change that process's mode |
| Next startup | Specify the mode again; it is not a saved preference |

File mode uses settings.json and credentials.json under the configuration root, with atomic writes and POSIX mode 0600. The file:v1: value is base64-encoded, **not encrypted**. Anyone who can read it can recover the secret; exclude these files from repositories, images and support reports.

The choice applies to new/updated Settings-managed provider keys, app-managed subscription tokens, GitHub/literature keys and shared MCP/OAuth secrets. Compute passwords/protected Compute data keep their separate OS-storage requirement; external agent-framework login stores follow their own rules. No sandbox is disabled by this option.

Existing encrypted values are not automatically migrated and still require their original OS vault. If unavailable, re-enter the credential through the normal supported form. File refs require explicit file mode to read and are incompatible with older releases. To return a credential to OS storage, restart in OS mode and explicitly replace it while the vault is available.

Use persistent storage when the configuration must survive container replacement. Shutdown retains configuration; replacing a disposable container filesystem can remove it. See the [credential-storage contract](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md).

## Application update behavior

`open-science update` updates the installed application. Update the npm client separately. The command may start a local service when needed and leave that service available afterward.

| `update --json` outcome | Interpretation |
| --- | --- |
| `up-to-date` | No newer applicable version found |
| `install-started` | Updater accepted the installation handoff; final installed version is not verified by that invocation |
| `manual-action-required` | Follow the reported installer path/next step |
| `blocked` | Active research prevents an in-place update; inspect `blockedBy` |

Support requires the service capability `update-cli-v1`. Older installations can require a manual update instead of a guessed remote procedure. Retain the printed outcome and verify the application version after installation.

[Lifecycle and discovery implementation](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs), [configuration discovery](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs). For task flags and exit codes, see [CLI](./cli.md); for programmatic calls, see [Task SDK](./api.md).
