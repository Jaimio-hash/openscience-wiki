---
title: "Connectors 与 MCP"
last_update:
  date: '2026-09-10'
---

# Connectors 与 MCP

Connector 向代理提供可调用的工具。本页帮助选择接入类型、判断就绪状态。表单字段、配置导入导出与连接管理统一见[配置 Connectors](../guides/connectors.md)。

<span id="检查已有-connector" />

<span id="连接与调用错误" />

## 选择接入类型

| 类型 | 适用情况 | 所需条件 |
| --- | --- | --- |
| 内置 Connector | 应用已经提供所需的数据源或操作 | 为目标代理启用；部分服务还需要凭据 |
| 本地 MCP 服务 | 工具需要在本机运行或读取本地科研数据 | 已安装的启动器、服务程序与允许访问的输入路径 |
| 远程 MCP 服务 | 服务通过托管 MCP 端点提供工具 | 正确的 MCP 端点、受支持的 HTTP/SSE 传输及必要认证 |

**Molecule** 提供本地结构渲染，不属于远程数据库。选择数据源见[科学数据库](databases.md)，查看分子与序列文件见[科学查看器](viewers.md)。选择 Docker 启动器不会自动安装容器引擎或服务镜像。

## 区分连接状态与使用条件

按下列顺序检查。前一项成功，不代表后一项已经完成。

| 阶段 | 检查内容 | 下一步 |
| --- | --- | --- |
| 配置 | 启动器或端点正确，所需认证齐全 | 完成 [Connector 表单](../guides/connectors.md) |
| 连接 | 服务响应且工具发现成功 | 查看连接结果与实际报错 |
| 代理访问 | 资源已对 Main 启用，或已分配给目标 Specialist | 检查该代理的能力绑定 |
| 操作调用 | 工具接受请求并返回所需数据 | 内置工具输入见[操作参数参考](../reference/connector-operations.md) |
| 研究结果 | 返回标识、来源与范围符合任务 | 将响应作为证据前核对实际内容 |

启用开关不代表服务调用成功。元数据响应不等于全文或计数矩阵已经下载。自定义条目可能打开配置编辑器；内置条目详情提供工具规范。

## 找到对应操作说明

| 任务 | 主要说明页面 |
| --- | --- |
| 添加或编辑服务、导入多个服务、迁移配置 | [配置 Connectors](../guides/connectors.md) |
| 绑定 API 密钥或 OAuth 凭据 | [服务凭据](credentials.md) |
| 实现小型服务并调用其工具 | [创建自定义工具](custom.md) |
| 查找数据库操作字段 | [Connector 操作参数参考](../reference/connector-operations.md) |
| 使用脚本管理连接 | [CLI](../reference/cli.md#管理-connector-与凭据) 或 [SDK](../reference/api.md#connector-管理方法) |

## 定位失败阶段

连接失败时，先判断启动器、传输或认证中的哪一项出错。连接成功但调用失败时，先核对代理可用性和该工具的参数，再考虑修改服务配置。按[故障排查](../guides/troubleshooting.md)保留并反馈实际错误。

应用在连接时完成 MCP 工具发现。`host.mcp("server", "tools/list", {})` 不是应用工具调用，可能返回 **unknown tool**。自定义示例中的未知样本错误也曾被封装为 `connector_unavailable`；仅凭这个响应无法区分样本无效与传输故障。
