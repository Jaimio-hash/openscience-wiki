---
title: "配置与上下文"
last_update:
  date: '2026-09-10'
---

# 配置与上下文

本参考区分项目上下文、新会话默认值和已有会话配置。对应界面步骤见[项目](../guides/projects.md)或[模型接入](../guides/providers.md)。

## 上下文和配置归属

| 值 | 归属与作用 | 不能替代 |
| --- | --- | --- |
| 项目 **Name** | 必填显示名，最多 200 字符 | 唯一项目 ID |
| 项目 **Description** | 项目列表说明，最多 1,000 字符，不进入代理提示词 | 代理指令 |
| 项目 **Agent Context** | 最多 16,000 字符，进入新建和恢复的项目会话，发送给模型提供方 | 凭据或实际任务请求 |
| 会话 **Title** | 显示标题，最多 80 字符 | 项目上下文或分支标识 |
| 会话 **Description** | 用于整理的说明，最多 1,000 字符 | 新用户消息 |
| 模型提供方 | 连接、账号和已配置模型目录 | 代理框架安装 |
| 代理框架 | 负责推进任务的运行时 | Notebook 解释器 |
| Python/R 运行时 | Notebook 执行所用解释器 | 模型或推理强度 |
| Memory | 按范围和召回设置保存的笔记 | 完整对话历史 |
| Skill | 可复用方法指令和文件 | 已安装依赖或已授权服务凭据 |

## 高级：Task API 配置

### 通过 Task API 创建新会话

任务执行器逐字段解析配置。下列优先级适用于 **Task API 新会话**，不会追溯应用到所有已有桌面对话。

| 字段 | 从高到低的取值顺序 |
| --- | --- |
| 权限模式 | 请求显式值 → 项目会话默认值 → 应用默认值 → `ask` |
| Auto-review | 请求显式值 → 项目默认值 → `false` |
| 启用 Memory | 请求显式值 → 项目默认值 → `true` |
| 委派策略 | 请求显式值 → 项目默认值 → `allow` |
| Specialist | 请求显式值 → 已设置的项目默认值 |
| 提供方／模型／推理强度 | 将显式配置补丁应用到项目配置，或有效的应用／提供方配置 |
| 选中的 Compute Hosts | 请求显式 ID → 项目选中 ID |

新会话准备阶段会把选中 ID 加入已启用主机集合。显式空的 enabled 列表先清除继承的启用列表，再纳入选中主机。更新已有会话配置时，每个选中 ID 必须包含在已启用集合中。

实际读取和更新命令见 [CLI](cli.md) 或 [Task SDK/API](api.md)。项目会话默认值属于配置接口约定，不代表项目 Name/Description 对话框提供全部这些字段。

### 可接受的配置值

| 字段 | 接受的值 |
| --- | --- |
| `agentConfiguration.providerId` | 非空、已配置的提供方 ID |
| `agentConfiguration.model` | 可选模型 ID；更新补丁可用 `null` 恢复提供方默认 |
| `agentConfiguration.reasoningEffort` | `default`、`low`、`medium`、`high`、`xhigh`、`max`；实际可选值取决于提供方／模型 |
| `permissionProfile` | `ask`、`auto`、`full` |
| `autoReviewEnabled` | 布尔值 |
| `memoryEnabled` | 布尔值 |
| `delegationPolicy` | `allow`、`deny` |
| 项目默认值的 `specialistId` | 非空 ID；普通会话配置补丁没有此字段 |
| `computeHosts.enabled`、`.selected` | 非空主机 ID 数组；selected 必须是 enabled 的子集 |

Schema 会拒绝未知字段。模型出现在列表中，不代表当前框架或凭据可以使用它，应查看已配置目录和可用状态。

### 提供方默认和不可用配置

订阅提供方未指定模型时，保留账号／CLI 管理的默认模型，不会固定为目录中的第一项。如果已保存会话配置不可选，界面解析器可以回退到应用当前可选配置；两者都不可用时报告 unavailable。更换提供方后重新打开旧任务，应检查实际选择的模型。

### 更新和恢复规则

修改已有会话前先读取当前配置。更新时携带 **`expectedRevision`**，它是非负整数。版本过期会得到 `session_revision_conflict`。存在活动任务，或会话不处于 idle/error 状态时，服务也会拒绝配置更新。

切换提供方时必须明确指定模型，或用 `model: null` 选择新提供方默认。只改提供方而省略模型，不会默默继承旧提供方的模型。恢复默认与填写空字符串不同。

恢复已有 Task API 会话前，如果要修改提供方、模型、推理强度、Memory 或启用主机，应先调用会话配置更新。在 resume 请求直接提供这些创建时字段会返回 `invalid_request`。工作目录仍必须与该会话的规范化目录一致。

更新项目默认值使用从当前项目读取的正整数时间戳 **`expectedUpdatedAt`**，并提供 patch。项目默认字段为 `null` 时移除覆盖，省略字段则保留。修改默认值影响后续新会话，不会改写已有产物的证据。

## 主机说明与秘密存储选项

已保存 Compute 主机说明与探测资源分别管理。已保存说明为空与资源探测成功是不同状态。Agent 协助替换说明时，以当前保存文本作为校验条件。见[主机详情](../guides/remote-compute.md)，该内部约定不同于公共 Task API。

凭据存储是启动选项，不是项目/会话偏好。适用范围、默认 OS 存储与迁移限制见 [Linux 文件模式](server.md)，不要把 credential-store 参数写入会话配置 JSON。

## 相关边界

授权范围和策略顺序见[权限](permissions.md)。可移植 Skill、Specialist、Connector 文档见[包格式](packages.md)。包导出不等于会话配置或账号凭据的完整导出。桌面会话与本地 Web 服务的区别见[无界面服务](server.md)。

源码：[主机约定](https://github.com/aipoch/open-science/commit/04adfd61)、[启动凭据模式](https://github.com/aipoch/open-science/commit/3411d23c)。

技术参考：[项目约定](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [配置 Schema](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [任务配置解析](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [提供方回退](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
