---
title: "对照图表和补充材料核查论文论断"
last_update:
  date: '2026-09-16'
---

# 对照图表和补充材料核查论文论断

<p className="example-label"><strong>案例演示</strong> 催化剂的 98.9% 效率具体指什么</p>

一个醒目的数值，只有在指标和实验条件明确时才有意义。本流程从催化剂论文及其补充材料出发，定位一个论断的证据，保存简短报告，区分原文报告的结果与扩大后的解释。

**交付结果：** 带 PDF 页码和图号的英文“论断、证据、条件、边界”表。这是来源核查，不是独立重做实验。

## 准备原始材料

使用 Yang 等人的 [*A universal ligand mediated method for large scale synthesis of transition metal single atom catalysts*](https://www.nature.com/articles/s41467-019-12510-0)，DOI 为 `10.1038/s41467-019-12510-0`。

1. 从出版方页面下载论文 PDF，再从 **Supplementary information** 下载 **Supplementary Information** PDF，保留为两个文件。
2. 在 Open-Science 项目中打开会话，选择可用模型。
3. 通过 **+ → Attach files** 附加两个 PDF。打开主论文，核对标题和 DOI。本例主论文有 9 页，补充材料有 52 页。

确认发送的请求上方出现**两个文件名**。点击文件名即可预览；在主文和补充材料之间切换，核对引用页码属于哪份文件。

![实际论断核查请求同时附加主文与补充材料](/img/open-science/research-workflows/catalyst-two-inputs.png)

## 提出具体的证据问题

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

出现提示时，检查并允许预期的阅读请求。如果阅读工具提示页码无效或材料无法读取，可以缩小请求范围，或自己打开对应 PDF 页面。检索失败不能证明图表不存在。

## 打开被引用的证据

在 PDF 预览中，通过页码控件打开**第 6 页**，查看 **Figure 6** 和相应结果段落，将图注与正文对照。再打开补充材料的 **47–49 页**，查看 **Figures 51–53**。

![在 Open-Science 中查看原论文 Figure 6 和实验条件](/img/open-science/research-workflows/catalyst-figure6-source.png)

原文报告 Ni-SAC-2.5 在相对于 RHE 的 **−1.2 V** 下，生成 CO 的**法拉第效率为 98.9%**。耐久性实验则使用 **−0.8 V，持续 20 小时**。两组条件应分开说明：后者不能证明峰值选择性电位下的 20 小时耐久性。法拉第效率描述分配给某产物的电荷比例，不等于能量效率，也不等于进料 CO₂ 的转化比例。

补充材料提供了氢气产物、NMR 和放大制备相关图表。能读到图注，不代表可以提取曲线中的所有数值点，报告应保留这一差别。

跳页时先展开 PDF 预览，点击页码计数器，输入完整页码并按 **Enter**，确认计数器已跳到目标页再阅读。补充材料第 47 页是 **Supplementary Figure 51**，纵轴为 **H₂ Faradaic efficiency**，不能把它当成主文的 CO 结果。

![实际打开补充材料第 47/52 页，核对 Supplementary Figure 51](/img/open-science/research-workflows/catalyst-supplement-47.png)

## 检查并保存报告

回答完成后打开 **catalyst-claim-check.md**，检查来源身份、页码、图号和结论措辞。尤其要保留“原文报告的结果”这一含义，避免把文献核查写成已经完成实验复现。

![保存后的论断、证据、条件与边界报告](/img/open-science/research-workflows/catalyst-claim-report.png)

可下载<a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>示例报告</a>参考其结构。将科学结论用于自己的工作前，应核对所引原始证据及出版方更正。如需把图表证据单独提取为文件，参见 [PDF 提取](../guides/previews.md#pdf-extraction)。
