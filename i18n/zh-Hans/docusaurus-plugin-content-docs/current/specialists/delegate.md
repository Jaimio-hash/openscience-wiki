---
title: "委派任务与验证结果"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 委派任务与验证结果

委派是把任务交给单独的子任务，由 Main Agent 协调对话。在主会话中选择 Specialist 发言，与真正产生子任务，是两种不同操作。

## 准备明确的交接

| 信息 | 本例 |
| --- | --- |
| 角色 | RNA-seq QC Reviewer，保存 ID `rna-seq-qc-reviewer` |
| 输入 | 完整 GSE60450 样本 QC CSV，或当前有效不可变文件版本 |
| 任务 | 检查 12 个完整、非空且唯一的样本 ID，以及每个样本的计数约束 |
| 输出 | 检查表及每个样本的算式 |
| 范围 | 只读、不安装新包、不做差异表达解释 |

1. [创建并配置角色](./identity.md)，确认启用。
2. 在当前对话 **Agent controls** 开启 **Delegation**，核对模型和认证可用。
3. 明确要求 Main Agent 委派，说明角色和完整任务。交接文件时由应用解析当前版本，不猜 ID，不把文件名当版本引用。
4. 查看真实委派活动及子任务状态；Main Agent 的进度描述不能代替子任务记录。
5. 点击子任务入口打开 **Subagents**，在 **Subagent Frame** 选择任务，读取对话、工具结果及最终状态。
6. 子任务请求权限时，在父对话检查请求范围并响应；完成后逐项验收。

## 核对交接和返回结果

### 核对直接提供的小表格 {/* #实操十二个样本约束 */}

<p className="example-label"><strong>案例演示</strong> 委派十二个样本的表格核对</p>

下载完整的 <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">样本 QC CSV</ExampleDownload>，将表头和十二行数据全部粘贴到下方请求后，保留所有列与完整样本标识。本例使用[创建角色](identity.md)中的已启用角色，并要求 Python 可用以执行算术检查。此项小范围检查不需要额外 Skill。

> Delegate to RNA-seq QC Reviewer. Use only the complete inline CSV below. Execute the arithmetic in Python, verify twelve distinct full sample identifiers, and check zero_count_genes + detected_genes_count_gt_0 = 27179 for every row. Return each result and state that this checks supplied summary data, not independent access to the original count matrix.

![完成的 Specialist 子任务及逐样本检查](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.jpg)

本例结果：子任务实际运行 Python Notebook，得到 **12 行、12 个唯一且非空的完整 ID，12/12 个求和均为 27,179**。首个样本为 `8,664 + 18,515 = 27,179`，数值字段完整且非负。

这些结果只验证汇总表内部一致性，不能独立重算原始矩阵的总量/中位数、确认样本条件或建立生物学质量阈值。

<span id="核对文件交接与独立模型" />

### 选择独立模型

在 **Settings → Model → Subagent** 选择固定模型后，再启动委派。打开子任务记录核对实际模型；不要用主会话的模型标签判断子任务。独立模型示例中，Main 使用 `gpt-5.6-sol`，子任务记录显示 `gpt-5.6-luna`，两者均通过 Codex 订阅运行。

### 把文件交给子任务

<p className="example-label"><strong>示例</strong> 把样本 QC 文件交给子任务</p>

1. 通过会话附件菜单添加源文件，等待上传完成。
2. 要求 Main 把这个准确的上传版本交给子任务，说明检查项与输出要求；不要用文件名或猜测的版本 ID 代替文件。
3. 打开 **Subagents** 并选择子任务。在 **Notebook** 的 **Agent** 筛选中选择该子任务，查看实际文件读取。
4. 将子任务返回的行数、列名和校验和与源文件比较，再打开保存的输出核对计算。

对于[公开样本指标 CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv)，预期是 **12 行数据**，`total_counts` 总和为 **269,027,617**，输入校验和保持不变。这些检查针对提供的样本汇总表，不会重新计算原始基因计数矩阵。

| 检查 | 应看到什么 |
| --- | --- |
| 版本已接受 | 应用在所属会话中解析了当前不可变上传/产物版本 |
| 子任务能读取 | 子任务工具返回文件内容；仅出现文件名或暂存路径不够 |
| 检查已执行 | 子任务运行了计算，保存的结果与源文件一致 |

出现输入不可用错误时，重新附加文件并使用当前版本重试。若子任务返回 **`PermissionError: [Errno 1] Operation not permitted`**，保留准确错误；重新附加后仍无法读取时，按[故障排查](../guides/troubleshooting.md)反馈。不要把文件移入应用内部文件夹来绕过错误。

### 让子任务使用 Skill

先导入或创建 Skill。使用 Specialist 时，在角色的 [Skills 与 Connectors](capabilities.md) 中分配方法，然后启动新的委派任务，明确指定方法名称，并要求子任务先读取已安装的指令。

查看子任务工具活动中的 Skill 标识与读取内容。例如，`rnaseq-count-qc` 要求原始基因计数矩阵，用于描述性质控；十二行样本汇总表不能替代该输入。成功读取安装包不代表已执行分析，还需单独检查运行与保存结果。

## 正确理解失败状态

| 状态 | 含义和处理 |
| --- | --- |
| Delegation 关闭 | 在目标会话开启后重试 |
| 角色禁用 / 设置未完成 | 完成本地设置并启用准确角色 |
| Input unavailable in this Session | 获取当前准确 artifact version 或不可变 upload-version；路径、artifact ID、version ID 不同 |
| Waiting for permission | 检查对应子任务的操作；父任务可能是在等待而非计算 |
| Child completed | 读取输出和工具证据；完成不保证科学正确性 |
| Cancelled / failed | 保留部分结果与真实错误，不能把 Main Agent 替代回答写成委派成功 |

完整小表可以采用内联交接，但必须注明证据范围，不能把它当成通用的文件溯源替代方案。

实现依据: [ComposerAgentControlsMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [SpecialistSubmenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx)。
