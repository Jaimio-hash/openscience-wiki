---
title: 数据更新后重跑分析
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 数据更新后重跑分析

<p className="example-label"><strong>案例演示</strong> 为北京空气质量分析增加第二周观测</p>

增加观测后，先保留基线，再用同一方法重跑并比较。本例使用真实的**奥体中心 Aotizhongxin** 小时 PM2.5 数据，先分析 **2016 年 1 月 1—7 日**，再加入 **1 月 8—14 日**。分两次提供数据是历史教学演示，不是实时监测。

## 1. 附加第一周并定义计算规则

输入取自 [UCI Beijing Multi-Site Air Quality 数据集](https://doi.org/10.24432/C5RK5G)，按 **CC BY 4.0** 提供。下载<ExampleDownload path="/examples/workflow-extensions/air-week1.csv">第一周</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/air-week2.csv">第二周</ExampleDownload>；来源署名与文件身份见<ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">来源说明</ExampleDownload>。

打开项目会话，通过 **+ → Attach files** 先只附加 **air-week1.csv**。选择可用模型，在 **Settings → Runtimes** 中确认 Python 为 **Ready** 且已启用，发送：

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![第一周附件与基线计算任务](/img/open-science/workflow-extensions/air-input-v1.webp)

检查文件读取和计算内容后授权。在 **Notebook** 中确认执行完成，再打开 **air-daily-v1.csv**。基线包含 **168 行小时数据、7 行日汇总**，PM2.5 没有缺失。

![保存后的七天基线与有效小时数](/img/open-science/workflow-extensions/air-baseline-table.webp)

## 2. 增加观测，保持方法不变

继续同一会话，附加 **air-week2.csv**，保留第一份附件可用，发送：

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![在原分析会话中附加第二周数据](/img/open-science/workflow-extensions/air-update-input.webp)

确认代理运行原脚本，保留同一缺失值与完整性规则。若数据和方法同时改变，就难以判断结果变化来自哪里。

## 3. 检查扩展后的结果

打开 **air-daily-v2.png** 和 **air-daily-v2.csv**。合并输入有 **336 行小时数据**，**没有重复或缺失时间戳**，但 **1 月 11 日有一个 PM2.5 值缺失**。日汇总为 **14 天**，均达到本例设置的至少 18 个有效小时要求。

![Open-Science 中扩展后的十四天结果](/img/open-science/workflow-extensions/air-update-plot.webp)

1 月 11 日均值为 **11.652 µg/m³**，由 **23 个有效小时**计算。不能把缺失值当成零参与分母。时间戳完整也不代表测量值全部存在。

## 4. 与基线逐行比较

打开 **air-update-check.csv**。原来的 **7 个共同日期**在所有输出字段上完全一致，新增的只有 1 月 8—14 日。更新前后原脚本的 SHA-256 一致。

![逐行比较显示基线日期的结果保持不变](/img/open-science/workflow-extensions/air-update-check.webp)

打开 **air-update-notes.md**，核对输入身份、缺失观测和保留的 v1 文件。本次还独立计算了全部 14 天的均值与有效小时数，与保存输出在其显示精度内一致。

![更新说明保留了代码未变、基线文件与数据检查信息](/img/open-science/workflow-extensions/air-update-notes.webp)

## 5. 交付前核对报告日期

检查报告标题是否跟随实际输入范围变化。初始脚本在两周报告中仍保留第一周标题，这个展示错误已在 **air-analysis-reviewed.py** 中修正，只改变标题模板。随后用这一份修订脚本分别运行第一周和两周数据，保留全部旧文件。

![修正后的报告标题显示完整两周日期](/img/open-science/workflow-extensions/air-reviewed-report.webp)

保存的 **air-daily-baseline.csv** 与 **air-daily-updated.csv** 在每个字段上分别与原 v1/v2 CSV 一致。**air-update-verification.md** 记录同一修订脚本在两次运行前后的相同哈希，并核对两个报告标题，区分了标签修正和计算方法变化。

下载<ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">修订后的 Python 脚本</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">基线 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">更新 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">逐行比较</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">更新报告</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">核对记录</ExampleDownload>。使用具有 pandas、NumPy、Matplotlib 的 Python 环境，保留两份输入，并指定新前缀：

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

本例只描述一个站点的两周历史观测，不用于 AQI 分级、暴露评估或干预因果判断。若数据不变、希望改用另一种分析方法，见[比较分析方法](compare-methods.md)。
