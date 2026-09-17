---
title: "记忆与对话上下文"
last_update:
  date: '2026-09-10'
---

# 记忆与对话上下文

Memory 保存可复用笔记；上下文窗口是单次模型请求可用的材料。保存笔记不等于模型已召回，能看到旧消息也不等于下一次请求包含全部原始历史。

用分类保存长期适用的约定，例如保留原始计数、区分基因长度与样本计数。希望新请求自动获得这些约定时，开启 Memory 和该分类的 Auto-recall。

## 创建分类和笔记

<p className="example-label"><strong>案例演示</strong> 保存并召回 RNA-seq 报告约定</p>

1. 打开 Settings → Memory → New category。
2. Name 填 RNA-seq methods，在 When should the agent save a note here? 描述收录条件。
3. 明确选择 Auto-recall，本例关闭，作为人工维护的方法笔记。
4. Create 后选 Add，输入笔记并 Save。
5. 返回分类，检查内容与数量。

![分类字段和 Auto-recall](/img/open-science/guides-walkthrough/17-memory-category.webp)

本例笔记要求保留 GEO 原始矩阵、把 Entrez Gene ID 作为文本、区分基因长度和样本计数，并记录 SHA-256。这是工作约定，不是分析结果。

![Memory 关闭时手动保存的笔记](/img/open-science/guides-walkthrough/18-memory-note.webp)

| 控件 | 影响与边界 |
| --- | --- |
| Memory 开关 | 控制 Agent 保存/召回；关闭仍保留笔记并允许人工编辑 |
| 分类行 | 查看分类笔记及数量，分类可跨项目组织 |
| Project 视图 | 查看项目范围笔记，与全局分类区分 |
| New category | 名称最多 64 字符、说明 1,000 字符，最多 10 个自定义分类 |
| Add / Memory note | 笔记最多 4,000 字符，空白时不能保存 |
| Copy note | 复制笔记文本 |
| Edit note → Save / Cancel | 保存修改或放弃当前编辑 |
| Category actions → Edit | 编辑自定义名称、说明和 Auto-recall |
| Auto-recall | 控制该分类自动纳入上下文，但仍受总开关控制 |

**About you** 是内置分类，不能像自定义分类一样修改或删除其身份。

## 从对话保存约定

1. 打开 **Settings → Memory**，开启 **Memory**。在 **RNA-seq methods → Category actions** 中开启 **Auto-recall**。
2. 在项目对话中要求 Agent 记住已确认的约定，并指定分类。例如：“请在 RNA-seq methods 中记住：GSE60450 描述性质控应分别报告零计数基因数和检出基因数，每个样本的两项之和应为 27,179。”
3. 若出现授权请求，检查 **Save memory** 中拟保存的内容、分类和项目范围，再选择 **Allow once**。内容不符合已确认约定时选择 **Deny**。
4. 重新打开分类，检查笔记实际存在、文字正确，并归属预期项目。**auto** 表示由 Agent 创建，不代表应用已通过计算验证这条约定。

![Agent 保存的报告约定与手动维护的来源管理笔记](/img/open-science/non-workflow-completion/05-memory-note-category.webp)

## 在新会话检查召回

在**同一项目中新建会话**，询问已保存的报告约定，不在问题中给出答案，再与笔记比较。在原会话提问时，模型可能直接引用已有历史。

关闭 **Memory** 总开关，再新建一个会话询问相同问题。检查 Agent 是否不再通过应用记忆收到该笔记。Settings 中保存的笔记仍然保留。关闭 Memory 不会删除笔记，也不会清除已有会话里已经出现的文字。

以上保存由明确的“请记住”请求触发，不代表 Agent 会主动识别所有值得保存的约定。上下文压缩与保存记忆笔记是两项独立机制。

## 检查会话上下文

在会话中点击 Context used 百分比，或在可用时打开添加菜单的 Context window。查看 Current composition、History、Session call summary。组成包括系统提示、工具与代理、消息、连接器、Skills 和框架开销。

选择历史点可查看对应轮次、模型、占用和结束状态。本地估算与 Provider 报告可能不同；无分类明细不等于零用量。压缩标记记录上下文事件，不等于新增产物或删除所有可见消息，手动压缩入口取决于当前框架。

使用 OpenCode 时，如果上下文弹层提供 **Compact**，点击后等待 **Context compacted**。原消息可能仍然可见，但后端会从摘要继续。继续执行前，要求 Agent 列出保留的约束，并与原要求逐项核对。如有遗漏或错误，先重新说明，再开始下一步操作。压缩不保证信息无损；Provider 统计也可能与本地估算不同。

![压缩完成及 Provider 报告的上下文占用](/img/open-science/non-workflow-completion/11-context-compacted.webp)

继续任务时写清目标、已接受决策、输入/输出文件、已验证结果和未解决问题，并链接保存的证据。分支与导出见[会话](./sessions.md)，累计用量见[Usage](./usage.md)。

## 删除范围

**Delete note** 确认后删除单条笔记；**Delete category** 删除分类及所含笔记，请检查受影响数量。**Clear all** 清除自定义分类和笔记，保留 About you。范围大于预期时选择取消。旧备份仍可能保留已删除内容。

源码：[Memory 定义](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts)、[页面](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx)、[上下文查看器](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx)。
