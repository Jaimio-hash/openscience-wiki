---
title: "示例数据与预期结果"
last_update:
  date: '2026-09-10'
---

# 示例数据与预期结果

使用这些公开文件复现文档示例。来源说明、原始文件校验值和样本 QC 基准统一保存在本页，各功能章节仅引用其所需输入和验收标准。

## 来源和输入约定

[GEO 系列记录](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450)提供原始 `GSE60450_Lactation-GenewiseCounts.txt.gz`；[已发表 RNA-seq 分析流程](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/)提供该数据的方法背景。本例止于分析前检查，不复现论文全部分析。

| 属性 | 实际核对值 |
| --- | --- |
| 解压文件 | GSE60450_Lactation-GenewiseCounts.txt |
| 大小 | 1,340,161 字节 |
| 基因行 | 27,179 |
| 列 | EntrezGeneID、Length、12 个样本计数列 |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| 重复 ID / 缺失计数 / 无效计数 | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>下载保持原样的解压输入</a>或<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>原压缩文件</a>。Omics Archives 元数据工具可返回补充文件链接，不自动下载矩阵。下载后通过 **Attach files** 上传。



## 样本 QC 基准

| 样本 | 原始总计数 | 零计数基因 | 检出基因 | 检出计数中位数 |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

短标签与完整样本标识的映射保存在 CSV 中。四项数值指标已针对该输入独立核对；它们属于原始计数的描述性检查，不构成后续统计设计的验证。

## 已保存的示例输出

| 下载 | 内容 |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>质控 CSV</a> | 十二行、原列名映射和四项指标 |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>图表</a> | 样本原始计数总量 |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>方法报告</a> | 应用保存的独立复核说明 |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | 未改动的原生导出 |
## 选择其他示例

| 任务 | 输入或参考 | 操作说明 |
| --- | --- | --- |
| 保存第一个结果 | 上方十二行 QC CSV | [首次项目](../guides/first-project.md) |
| 复算完整矩阵 | 上方原始基因计数矩阵 | [数据质量工作流](../workflows/data-quality.md) |
| 整理文献集合 | 含出版社链接的<a href="/docs/examples/prisma/core-reading-list.md" download>PRISMA 阅读清单</a> | [核心阅读清单](../workflows/core-reading-list.md) |
| 小型逆折叠计算 | <a href="/docs/examples/capabilities/1UBQ.pdb" download>人泛素 1UBQ</a> | [科学工具](../tools/scientific.md) |

方法报告和 Notebook 保留了原计算的路径及证据范围。在应用外重跑前，先准备自己的输入位置和依赖。
