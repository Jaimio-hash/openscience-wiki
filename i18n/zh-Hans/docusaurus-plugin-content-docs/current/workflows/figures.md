---
title: "制作带误差棒、可追溯数据的科研图"
last_update:
  date: '2026-09-16'
---

# 制作带误差棒、可追溯数据的科研图

<p className="example-label"><strong>案例演示</strong> 温度与电导率</p>

需要一张能够追溯到数据表的科研图，每个点和误差范围都有来源。本例绘制铝掺杂氧化锌（AZO）和碘化亚铜（CuI）的电导率，保留出版方给出的标准差。

**交付结果：** 英文 PNG 和 SVG、实际绘图 CSV，以及简短的方法说明。本例使用已发表数据，不是新开展的实验。

## 准备数据并明确含义

[原论文](https://www.nature.com/articles/s44172-024-00291-4)提供了 Source Data 工作簿。示例 CSV 转录 **Supplementary Fig.6a** 和 **Supplementary Fig.6b** 的 **3–15 行**，分别取 A、D、E 列中的温度、电导率及报告的 SD。每种材料有 **13 个温度点**，范围为 **275–390 K**。

下载<a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>整理后的 CSV</a>和<a href="/docs/examples/research-workflows/conductivity-source.md" download>来源说明</a>。CSV 为每个点保留了原始工作表和行号。论文说明 SD 来自每个温度点的五次测量；这些列没有提供逐次测量值，因此本流程不重新计算 SD。

1. 创建项目，准备可用模型并启用 [Python 运行时](../guides/runtimes.md)。
2. 打开会话，通过 **+ → Attach files** 附加两个文件。
3. 绘图前确认数值列和单位：温度为 **K**，电导率及其 SD 为 **S m⁻¹**。

点击附加的 CSV 打开预览，应为 **26 rows · 6 columns**，包含材料、温度、电导率、SD 和来源工作表/行号。也打开来源说明；截图中的实操使用文件名 `README.md`，本文提供的同一说明命名为 `conductivity-source.md`。

![附加的电导率数据表保留数值、单位及来源行](/img/open-science/research-workflows/conductivity-input.png)

## 同时要求图表和绘图数据

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

检查代码或依赖安装请求，再查看 Notebook 的实际结果。回答中描述了图表，并不代表已经保存了图片文件。

在会话中点击 **Notebook**，打开已完成的 Python 单元，检查输出：共 26 行、每种材料 13 行、温度范围 275–390 K，以及实际生成的图。如果输入解析失败，要求 Agent 使用本会话附加的 CSV，确认成功执行后再继续。

![Notebook 实际执行后显示输入检查结果和图表](/img/open-science/research-workflows/conductivity-notebook.png)

## 检查图表并导出

打开生成的 PNG，确认两种材料容易区分，首尾数据点可见，坐标轴注明单位，不确定性标注为 **reported SD**。连线只连接观测值，AZO 在 300 K 后的电导率下降仍应保留。

![在 Open-Science 中实际预览电导率图和原文报告的 SD 误差棒](/img/open-science/research-workflows/conductivity-figure.png)

打开 **plotted-conductivity.csv** 与输入对照。本次运行的 **26 行**温度、电导率、SD，以及来源工作表和行号均保持一致。再打开 **conductivity-methods.md**，核对来源 DOI 和误差定义。

**Generated** 区应有四份文件。打开方法说明，并通过各文件预览中的下载图标保存核对后的版本。缺少文件时，明确要求补存该文件并重新打开；PNG 成功不代表 SVG 和数据表也已保存。

![四份已保存结果与重新打开的方法说明](/img/open-science/research-workflows/conductivity-methods.png)

快速分享可使用 PNG，需要矢量图时使用 SVG。可下载本次运行的 <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG</a>、<a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG</a>、<a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>绘图数据</a>和<a href="/docs/examples/research-workflows/conductivity-methods.md" download>方法说明</a>进行对照。

处理自己的测量数据时，先决定误差棒表示标准差、标准误还是置信区间，再要求绘图。提供所需的原始测量值，或已经算好的不确定性及其定义；缺失的不确定性应如实保留。
