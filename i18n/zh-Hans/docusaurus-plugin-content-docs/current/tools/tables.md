---
title: "表格与数据集"
last_update:
  date: '2026-09-14'
---

import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

import ExampleDownload from '@site/src/components/ExampleDownload';

# 表格与数据集

先用预览理解表结构，再通过 Python 或 R 验证和转换完整文件。通用查看与下载控件见[打开与预览文件](../guides/previews.md)，渲染范围与扩展名见[文件格式](../reference/formats.md)。

<span id="检查真实样本-qc-表" />

<span id="控件与显示限制" />

<span id="处理完整数据" />

文献 PDF 中的表格可通过 [PDF 提取](../guides/previews.md#pdf-extraction)取得，再重新打开导出的表格，对照原文检查表头、数值和备注。

## 确认每一行代表什么

<p className="example-label"><strong>案例演示</strong> 阅读 QC 表中的样本标识和指标</p>

1. 从已保存结果、Files 或附件打开<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">示例 QC 表</ExampleDownload>。
2. 阅读列名，判断每行代表样本、基因还是其他单位。这个结果表每行是一个样本；其源矩阵每行是一个基因。
3. 找到完整标识列，保留图表短标签与完整标识之间的映射。
4. 判断数据量前先读显示范围；预览有截断时，通过完整文件计算确认维度。
5. 将样本数值与[公共 QC 基准](../reference/example-data.md#样本-qc-基准)比较。

![包含完整标识与数值列的样本 QC 表](/img/open-science/capabilities-walkthrough/32-csv-preview.webp)

<ToolOperationGroup>
<summary>QC 表格：各列含义</summary>

| 列 | 含义 | 使用前检查 |
| --- | --- | --- |
| compact_sample | 图中使用的短标签 | 保留到原始标识的映射 |
| original_column_name | 原始样本标识 | 检查缺失与重复名称 |
| total_raw_counts | 样本计数总和 | 保留原始计数单位，不称为归一化表达 |
| zero_count_genes | 计数为零的基因数 | 与检测到的基因数之和应覆盖全部输入基因行 |
| detected_genes_count_gt_0 | 计数大于零的基因数 | 是基因数量，不是表达强度 |
| median_count_among_detected_genes | 正计数的中位数 | 明确排除了零计数基因 |

</ToolOperationGroup>

## 检查完整数据集

选择数值操作前，先区分标识、元数据和测量列。基因 ID 应保留为标识，基因长度不能混入样本计数计算。在完整输入中检查缺失值、重复标识和允许的取值范围。

可见行数可能只描述预览。在 [Notebook](../guides/notebook.md) 读取完整文件来确认维度。CSV 渲染器是只读表格，点击表头不能替代排序或筛选操作。

## 将转换保存为新结果

在请求中写明连接键、筛选规则、缺失值策略与输出列。要求另存派生文件，保留原始输入。重新打开结果，对照输入检查行数与标识，再查看实际执行代码后解释变化。

Notebook 变量在保存前属于临时内核状态，与托管文件版本的生命周期不同。保存和比较结果见[文件与版本](../guides/files.md)。

## 为其他格式选择读取方式

`.xls`/`.xlsx` 的 Office 预览和工作表操作见[预览文件](../guides/previews.md)。`.h5ad`、`.h5` 等二进制容器需要兼容的分析库。制表符分隔的 `.txt` 矩阵可能显示为文本。修改扩展名不会转换数据，也不会让不支持的格式自动可读。
