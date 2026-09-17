---
title: 在同一数据上比较两种分析方法
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 在同一数据上比较两种分析方法

<p className="example-label"><strong>案例演示</strong> psych::bfi 条目的 PCA 与探索性因子分析</p>

比较方法之前，输入与预处理必须可比。本例在**同一批 2,436 个完整答卷**上运行标准化主成分分析（PCA）和五因子极大似然因子分析（FA），比较各自估计的内容，而不是把数值较大的一方当成更好的方法。

## 1. 准备公开输入和 R 环境

下载公开的 [psych::bfi CSV](https://vincentarelbundock.github.io/Rdatasets/csv/psych/bfi.csv)，保存为 **bfi-original.csv**，阅读[数据说明](https://personality-project.org/r/psych/help/bfi.html)。数据包含 2,800 位受访者、25 个人格条目及人口学字段。分析只使用 A1—A5、C1—C5、E1—E5、N1—N5、O1—O5，不用于个人心理评估。

在 **Settings → Runtimes** 中确认 R 为 **Ready** 且已启用。本次使用 **R 4.4.3** 的基础及推荐函数，没有额外安装包。通过 **+ → Attach files** 将 CSV 附加到项目会话。

![同一数据方法比较任务中附加的公开 bfi 数据](/img/open-science/workflow-extensions/bfi-input.png)

## 2. 拟合前固定预处理规则

```text
Use the attached psych::bfi CSV in the enabled R Notebook.
Analyze only its 25 A/C/E/N/O items, scored 1–6. Validate the range.
Reverse A1, C4, C5, E1, E2, O2 and O5 as 7-x. Use the same complete
cases across all 25 items for both methods; report exclusions.
Run prcomp with centering/scaling and retain five components.
Varimax-rotate eigenvector times sqrt(eigenvalue) loading columns;
label them RotPC1–RotPC5. Report variance from unrotated PC1–PC5.
Run factanal with five factors, varimax and nstart=10; set seed 20260916.
Save bfi-method-comparison.R, bfi-preprocessing.csv, bfi-loadings.csv,
bfi-method-metrics.csv, bfi-method-comparison.png and bfi-method-report.md.
Make the script accept the input CSV as its first argument, record
runtime input identity and R version, execute it and reopen all outputs.
Explain fit, convergence, arbitrary signs/order, ordinal responses
and complete-case limitations. Do not claim that convergence is good fit.
Use English and do not install packages or delegate.
```

检查 R 计算再授权，打开 **Notebook** 确认执行完成。保存的预处理矩阵为 **2,436 行 × 25 项**，排除了 **364 份不完整答卷**。两种方法共用这一矩阵，不纳入人口学字段和行标识。

如果一种方法悄悄使用了不同样本，应先统一输入，再比较结果。

## 3. 查看数值结果

从 **Generated** 或 **Files** 打开 **bfi-method-metrics.csv**。本次文件包含 **77 行指标**，记录样本数、缺失数、PCA 方差、FA 独特性、拟合、收敛、随机种子与输入身份。

![共同预处理与两种拟合方法保存后的数值指标](/img/open-science/workflow-extensions/bfi-metrics.png)

| 未旋转的 PCA 主成分 | 解释的标准化总方差 |
| --- | --- |
| PC1 | 20.54% |
| PC2 | 11.01% |
| PC3 | 8.57% |
| PC4 | 7.41% |
| PC5 | 6.19% |
| 前五个合计 | 53.72% |

FA 优化器收敛，但似然比统计量为 **1490.587，自由度 185**，**p ≈ 1.218 × 10⁻²⁰²**。在模型假设下，这拒绝五因子模型精确拟合。数值计算成功不代表拟合充分。

## 4. 在图中比较载荷模式

打开 **bfi-method-comparison.png**。三个面板分别是未旋转 PCA 方差、varimax 旋转后的 PCA 载荷、varimax FA 载荷。准确载荷保存在 **bfi-loadings.csv**，共 **250 行**：25 项 × 5 个维度 × 2 种方法。

![未旋转 PCA 方差与两组旋转载荷矩阵](/img/open-science/workflow-extensions/bfi-comparison-plot.png)

不要机械地对齐两种方法的“第一列”。维度顺序和整列符号改变，不一定改变解的含义。热图用蓝色表示负载荷、红色表示正载荷，应结合条目模式与具体数值阅读。

PCA 分解观测总方差；FA 建模共同协方差，并单独估计独特性。FA 载荷平方和不能与 PCA 解释方差直接互换。旋转载荷标为 **RotPC1—RotPC5**，与未旋转 **PC1—PC5** 的方差百分比明确区分。

## 5. 阅读边界并重跑脚本

打开 **bfi-method-report.md**，核对样本和预处理是否一致，是否记录固定随机种子，以及收敛和拟合的区别。这里将 1—6 分的有序回答近似当作连续值；如果缺失与回答或受访者特征相关，只保留完整答卷可能带来偏差。

![最终报告记录预处理、随机种子、解释方差与拟合边界](/img/open-science/workflow-extensions/bfi-report.png)

下载 <ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.R">R 脚本</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/bfi-loadings.csv">载荷表</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/bfi-method-metrics.csv">指标表</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/bfi-method-comparison.png">图形</ExampleDownload>与<ExampleDownload path="/examples/workflow-extensions/bfi-method-report.md">报告</ExampleDownload>。将脚本和下载的输入放入新文件夹，在该文件夹打开终端运行：

```bash
Rscript bfi-method-comparison.R bfi-original.csv
```

脚本把输出写入当前目录。本次使用 R 4.4.3 独立重跑后，预处理、载荷和指标 CSV 与应用保存版本完全一致；全部预处理值和 PCA 特征值也经过独立核对。这验证本次计算的可复现性，不代表选出了普遍更优的方法，也不构成诊断工具验证。
