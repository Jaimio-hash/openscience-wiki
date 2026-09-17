---
title: 根据反馈修订研究报告
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 根据反馈修订研究报告

<p className="example-label"><strong>案例演示</strong> 按六条编辑意见修订单原子催化简报</p>

修订报告时，应让原始证据、初稿和意见回复相互对应。本例先根据真实催化论文生成英文简报，再保留初稿并修订。六条意见是为本教程编写的练习材料，不是期刊或论文作者的来信。

## 1. 附加论文并生成初稿

打开 [Yang 等，2019](https://doi.org/10.1038/s41467-019-12510-0)，从出版方页面下载正文 PDF 和 Supplementary Information，在项目会话中通过 **+ → Attach files** 附加两份文件。本次文件分别为 **9 页和 52 页**。下文页码均指 PDF 页序，不是期刊印刷页码。

选择可用模型，发送：

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Open-Science 中附加的来源 PDF 与初稿任务](/img/open-science/workflow-extensions/report-input.png)

出现授权时检查并允许相关文件读取。在 **Generated** 或 **Files** 中打开 **catalyst-brief-v1.md**，阅读实际保存的初稿。会话中的回答不能代替对文件内容的检查。

![编辑修订前已保存的第一版简报](/img/open-science/workflow-extensions/report-draft.png)

## 2. 把反馈写成可落实的修改要求

下载<ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">六条编辑意见</ExampleDownload>，附加到同一会话。它们要求：

| 意见 | 修改要求 |
| --- | --- |
| C1 | 执行摘要不超过 120 个英文单词 |
| C2 | 用两行表格区分两个实验工作点 |
| C3 | “未提供”的判断限定在实际检查的证据范围 |
| C4 | 补三项后续验证建议，明确尚未执行 |
| C5 | 写清 Main PDF / Supplementary PDF 页码和图号 |
| C6 | 单独保存 v2 和意见回复，保留 v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

本次实际读取了意见附件，并生成修订稿与逐条回复两类文件。若代理提出了证据无法支持的修改，应指出具体论断及需要核对的原文位置，再继续修订。

## 3. 阅读修订后的证据，不只看回复状态

打开 **catalyst-brief-v2.md**。本例得到 **117 词摘要**、区分两个工作点的两行表格，以及三项明确标为建议的后续验证。

![修订后的摘要与区分选择性和稳定性测试的表格](/img/open-science/workflow-extensions/report-revised.png)

关键区别是：**−1.2 V vs RHE 下 CO 法拉第效率为 98.9%**；另一项测试是在 **−0.8 V vs RHE 下观察 20 小时电流保持情况**。不能合并成“98.9% 持续 20 小时”。正文 PDF 第 6 页 Fig. 6b–d、第 7 页 Fig. 6e 对应这些证据，第 8 页介绍 H 型电解池测量；补充 PDF 第 47—48 页 Figs. 51–52 对应氢气选择性和 NMR 产物检查。

本次代理读到了全文段落和图注，但关联图形元素缓存不可用，无法直接查看对应图像。意见回复保留了这一说明。“电流仅略有下降”来自作者文字，本次没有从曲线提取新的数值。需要直接检查图形时，参见[核对 PDF 论断与图表](pdf-evidence.md)。

## 4. 核对回复并交付各版本

打开 **catalyst-brief-v2-response.md**，逐条找到 C1—C6，返回它指向的修订段落，确认承诺的修改确实存在。仅有“Resolved”标签不能作为完成依据。

![实际保存的回复表将六条意见对应到修订位置](/img/open-science/workflow-extensions/report-response.png)

检查建议仍标为建议，DOI 仍为 **10.1038/s41467-019-12510-0**，且 **catalyst-brief-v1.md** 保留未改。无法取得的证据应继续写在回复中。

下载本次<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 初稿</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 简报</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">逐条回复</ExampleDownload>，与意见文件及出版方链接一起保存。初稿用于比较，不应作为最终审阅后的简报使用。
