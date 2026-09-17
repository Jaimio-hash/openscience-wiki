---
title: 交叉核对两个科研数据来源
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 交叉核对两个科研数据来源

<p className="example-label"><strong>案例演示</strong> NASA GISTEMP 与 HadCRUT 全球年度温度距平</p>

两个来源的数值不同，可能首先是定义不同。解释差异前，先对齐单位、时间范围和参考期。本例使用两份真实年度温度数据，各自以 **1991—2020 年**重新定基准，再比较 **1980—2024 年**，保存对齐表、双面板图、Python 脚本和方法报告。

## 1. 获取来源文件并核对定义

从 [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) 下载全球陆海年度 CSV，从 [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html) 下载 analysis ensemble-mean 年度序列，分别保存为 `NASA-GISTEMP-v4-original.csv` 和 `HadCRUT5-original.csv`。

| 输入 | 年度数值 | 原始距平参考期 |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` 列，单位 °C | 1951—1980 年 |
| HadCRUT5.1.0.0 | 年度集合均值，单位 °C；保留置信区间列 | 1961—1990 年 |

NASA 文件在表头前还有一行说明，用 `***` 表示不可用值，不能将其当成零。本次来源身份与下载链接见<ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">案例来源说明</ExampleDownload>；提供方可能在本次运行后修订数据。

打开项目，通过 **+ → Attach files** 附加两份 CSV。在 **Settings → Runtimes** 中确认 Python 为 **Ready** 且已启用。本次环境为 Python 3.12.14、NumPy 2.5.3、pandas 2.3.3、Matplotlib 3.11.1、Pillow 12.3.0。

![两份来源 CSV 已附加到比较任务](/img/open-science/workflow-extensions/temperature-input.png)

## 2. 先要求对齐，再解释差异

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

授权前检查文件读取和 Python 代码，打开 **Notebook** 确认计算完成。如果出现错误，应先处理并重跑，再解读报告或图形。

## 3. 检查对齐表

打开 **temperature-aligned.csv**。本例比较 **45 个共同年份**；两个来源各自都有参考期所需的 **30 个完整年度点估计**，没有用零填补年度缺失值。

![保存后的逐年对齐值和差值](/img/open-science/workflow-extensions/temperature-table.png)

减去的参考均值分别为 NASA **0.61266667 °C**、HadCRUT **0.53799554 °C**。每个数据集减去自己的均值，不是对两份数据减去同一个数。比较前核对单位、年份与相减方向。

## 4. 查看图形和数值差异

打开 **temperature-comparison.png**。第一幅保留各自原参考期，第二幅展示以相同时间段重新定基准后的曲线。

![Open-Science 中的原参考期与共同参考期温度曲线](/img/open-science/workflow-extensions/temperature-plot.png)

| 本例结果，NASA 减 HadCRUT | 数值 |
| --- | --- |
| 平均差 | 0.00514589 °C |
| 均方根差 RMSE | 0.01829900 °C |
| 最大绝对差 | 0.04632368 °C，出现在 2024 年 |

这些数字对应本次下载的文件。剩余差异可能来自覆盖范围、插补、观测资料和处理方法。两个产品共享部分观测，**不是统计独立的测量**；本例也不将任一方指定为真值。

## 5. 保存方法并重跑

打开 **temperature-crosscheck.md**，核对来源定义、指标与 CSV、代码是否一致。表格保留 HadCRUT 原置信区间及其机械平移后的数值，但此次比较**没有**传播所估计参考均值的不确定性，也没有处理两个来源间的依赖关系。

![保存后的报告记录实际指标与解释边界](/img/open-science/workflow-extensions/temperature-report.png)

下载<ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">对齐 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">图形</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Python 脚本</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">报告</ExampleDownload>。准备好两份输入，在具有上述依赖的 Python 环境中运行：

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

本次脚本还在独立的本地 Python 进程执行，对齐 CSV 与应用保存版本逐字节一致。这验证的是本次计算，不等于评估了两个气候产品的全部方法选择。
