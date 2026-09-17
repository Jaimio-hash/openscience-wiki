---
title: "第一个项目与结果"
last_update:
  date: '2026-09-10'
---

# 你的第一个项目与结果

<p className="example-label"><strong>案例演示</strong> 阅读样本 QC 表并保存说明</p>

先打开一张小表格，再保存一份说明。本路线使用真实公开基因表达数据计算得到的十二行样本 QC 表，不需要重新分析完整矩阵，也不需要安装绘图库。

<span id="准备输入和环境" />

## 准备模型和示例文件

1. 完成[首次设置](onboarding.md)，确认[模型连接](providers.md)可用。
2. 从[示例数据](../reference/example-data.md#已保存的示例输出)下载**样本 QC CSV**。
3. 保留下载文件不变。这是一张派生汇总表；原始矩阵与计算方法在同一示例页说明。

打开并总结表格需要可用的 Agent 和模型。只有要求重新计算指标时才需要 Python 或 R；相应步骤见[完整数据质量工作流](../workflows/data-quality.md)。

<span id="创建研究项目" />

## 创建项目

在首页选择 **New project**。**Name** 填写 `Gene-count QC review`，**Description** 填写 `Review the public sample-QC table and record its interpretation.`。**Agent Context** 填写 `Preserve the source file. Explain descriptive counts without inferring differential expression.`，然后选择 **Create project**。

确认会话列表上方出现项目名称。这些名称只是示例，你可以改成便于查找自己研究的名称。字段修改和源文件夹设置见[项目](projects.md)。

<span id="上传并提交明确请求" />

## 附加并检查表格

1. 新建会话，选择 **+ → Attach files**，选中下载的 CSV。
2. 等待附件标签出现，然后打开预览。
3. 确认有十二行样本。检查完整样本标识，以及总计数、零计数基因数、检出基因数和正计数中位数等列。
4. 关闭预览返回输入框，保留请求中的附件。

![在应用中打开样本 QC 表](/img/open-science/guides-walkthrough/42-rnaseq-table.webp)

若预览为空或列没有分开，请确认附加的是 CSV，而非下载失败后保存的网页。分隔符与预览控件见[表格](../tools/tables.md)。

<span id="打开并验收输出" />

## 请求保存说明

确认模型后发送：

```text
读取附加的样本 QC CSV，保存一份简短 Markdown 说明，文件名为
sample-qc-overview.md。分为“表格内容”“指标含义”“下一步检查”三节。
指出样本标识列，并结合附加数据解释各项 QC 指标。保持原文件不变。
不要重新计算基因矩阵、安装软件包或推断差异表达。注明这是一份派生的
描述性汇总。如果无法读取文件，请报告错误，不要猜测内容。
保存后提供报告链接。
```

出现审批时，确认操作针对附加输入和指定输出，再批准所需操作；无关请求可以拒绝。等待审批需要你回应；工具调用失败则需要处理错误。[输入框与任务状态](composer.md)说明了这些状态的区别。

<span id="继续或排查" />

## 检查并保留结果

1. 在回答或项目 **Files** 面板中选择 **sample-qc-overview.md**。
2. 确认包含指定的三节，且列含义与 CSV 一致。特别注意：检出基因指计数大于零，正计数中位数不包含零计数。
3. 确认报告说明的是汇总表，没有宣称得到了新的生物学发现。
4. 如需外部副本，下载报告。重命名并置顶会话，便于返回。

保存的报告能够打开，且内容与附加表格一致，即完成本次任务。如果回答只有文字而没有文件，请要求 Agent 将文字保存为指定 Markdown 文件，再打开检查。读取或保存报错时，保留错误信息并按[故障排查](troubleshooting.md)处理。

## 继续分析原始数据

若要复算表格并生成图表，请进入[将原始数据变成可复现分析](../workflows/data-quality.md)。该路线补充原始矩阵、Python 依赖、准确的输出列规范和数值检查。代码与文件证据的查看方式见 [Notebook](notebook.md)。
