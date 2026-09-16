---
title: "无界面服务与浏览器访问"
last_update:
  date: '2026-09-14'
---

# 无界面服务与浏览器访问

本地服务提供无界面后端和 localhost 浏览器入口，与 SSH Compute 主机、Remote.It 浏览器配对不同。连接客户端前，应配置主机所需的认证与凭据存储方式。

## 目标和发现规则

| 选择器 | 范围 |
| --- | --- |
| `--port PORT` | localhost 端口，整数 1–65535 |
| `--app-path PATH` | 已安装应用的可执行文件路径，不是任意项目目录 |
| `--config-root PATH` | 开发构建配置覆盖；打包应用启动拒绝此参数 |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | 受支持的显式配置发现目录 |
| 自动发现 | 先开发配置再生产配置，跳过已结束/不健康候选 |

指定配置目录会限制发现范围。启停前先检查目标配置的状态。返回 `running:false` 时，按下方生命周期命令处理；已打开的桌面窗口可能使用其他服务或配置。

状态文件为 `web-service.json`。认证失败不意味着可以终止文件记录的进程。停止逻辑保留活动但不健康的状态供诊断，避免误操作被其他进程复用的 PID。

## 初始化与检查就绪状态 {/* #readiness */}

使用 `open-science init` 准备默认配置目录，不会启动应用。`--profile` 只在支持开发配置覆盖时作为 `--config-root` 的别名，不能绕过打包应用的限制。Debian 安装包随应用安装 CLI。Codex 准备和登录见[终端设置](cli.md#terminal-setup)。

明确需要启动服务时执行 `start --no-open`，之后运行 `open-science doctor --json`。查看整体 `ready`、逐项检查和建议操作，不能只凭退出码判断就绪。继续使用已有的本地认证接口；启动无界面服务不会配置 Remote.It，也不会发布公网入口。

## 服务命令

| 命令 | 结果 | 选项与边界 |
| --- | --- | --- |
| `open-science start` | 启动后端并打开浏览器 | 默认端口 44100 |
| `open-science start --no-open` | 启动但不打开浏览器 | 用于有意开启的本地服务 |
| `open-science status --json` | 输出结构化状态 | 无服务时返回 `{"running":false}`，退出码 1 |
| `open-science url` | 输出带认证的浏览器 URL | 含本地访问凭据，不放进公开示例 |
| `open-science stop` | 请求经过认证的优雅停止 | 不盲目向陈旧状态文件里的 PID 发信号 |
| `open-science stop --json` | 输出停止结果 | 见下表 |

这些命令中，**status 和 stop 支持 `--json`，start 和 url 不支持**。本地 `start --json` 检查在启动前返回 `invalid_cli_usage`、退出码 2。脚本应先运行 `start --no-open`，再运行 `status --json`。

### 停止结果

| JSON `result` | 含义 |
| --- | --- |
| `already-stopped` | 未找到活动服务记录 |
| `daemon-stopped` | 经过认证的独立 daemon 已退出 |
| `web-service-stopped` | 附属 Web 服务停止，桌面应用仍在运行 |

停止请求被拒绝或超过截止时间时返回失败。应检查错误和实际状态，不能仅凭命令返回就声称服务已停止。

## 认证与浏览器访问

SDK 发现本地服务并读取其本地 token，通过请求头发送。普通人类可读输出、JSON、JSONL 不打印 token；`url` 是显式生成带认证浏览器入口的例外。

localhost 服务不会自动让其他电脑访问。远程浏览器功能有独立访问模式、配对和可信浏览器管理；SSH Compute 则向配置过的远程主机提交任务。

Remote.It 配对见[远程浏览器访问](../guides/remote-access.md)，SSH 作业见[远程计算](../guides/remote-compute.md)。按对应功能的设置流程配置连接。

### Linux 无界面服务的凭据存储

默认仍使用操作系统保护存储。Linux headless 后端没有可用密钥环时，可显式选择：

<p className="example-label"><strong>示例</strong> 使用文件凭据存储启动 Linux 无界面服务</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| 选择 | 行为 |
| --- | --- |
| 不传选项 / --credential-store=os | 要求操作系统保护存储 |
| --credential-store=file | 仅 Linux headless 允许未加密的 Settings 凭据文件存储 |
| 桌面端、macOS、Windows | 不支持文件模式 |
| 已有运行中的后端 | 拒绝显式选择模式，不改变已有进程 |
| 下次启动 | 需要再次指定，不是保存的偏好 |

文件模式在配置根目录使用 settings.json 和 credentials.json，通过原子写入及 POSIX 0600 权限保存。file:v1: 值只是 base64 编码，**没有加密**；能读取文件的人可以还原秘密，不应放入仓库、镜像或支持报告。

此选择作用于新建/更新的 Settings Provider 密钥、应用管理的订阅令牌、GitHub/文献密钥、共享 MCP/OAuth 秘密。Compute 密码及受保护 Compute 数据仍有独立的 OS 存储要求，外部 Agent 框架登录存储遵循各自规则。此选项不会关闭沙箱。

已有加密值不会自动迁移，仍需原操作系统密钥库读取。无法读取时，通过正常表单重新填写凭据。文件引用需要显式文件模式才能读取，旧版本不兼容。返回 OS 存储时，应以 OS 模式重启，在密钥库可用时明确替换凭据。

配置需要在更换容器后保留时，使用持久存储。关闭应用会保留配置，但替换临时容器文件系统可能移除配置。参见[凭据存储约定](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md)。

## 应用更新

`open-science update` 更新已安装应用；npm 客户端需单独更新。该命令可能按需启动本地服务，并在完成后保留服务。

| `update --json` outcome | 含义 |
| --- | --- |
| `up-to-date` | 没有适用的新版本 |
| `install-started` | 更新器接收了安装交接，此次调用不能验证最终版本 |
| `manual-action-required` | 按返回的安装文件路径和后续步骤操作 |
| `blocked` | 活动研究阻止原地更新，检查 `blockedBy` |

该流程需要服务支持 `update-cli-v1`。旧安装可能需要手动更新，不能猜测远程过程。保留结果，安装后再次确认应用版本。

[服务实现](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs)、[配置发现](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs)。任务参数和退出码见 [CLI](./cli.md)，编程接口见 [Task SDK](./api.md)。
