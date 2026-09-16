---
title: "接手并整理前人的文献集合"
last_update:
  date: '2026-09-16'
---

# 接手并整理前人的文献集合

本流程用于整理已有题录。如果你只有研究主题，先按[组会工作流检索并审阅候选论文](journal-club.md)。

<p className="example-label"><strong>案例演示</strong> 钙钛矿太阳能电池稳定性文献交接</p>

收到同事交来的文献清单后，先弄清楚有哪些材料、哪些还没有读。本例导入 20 条关于钙钛矿太阳能电池稳定性的已发表文献，在 Library 中建立集合，并生成带后续操作的交接清单和阅读计划。

**交付结果：** 与项目关联的文献集合、保留来源标识和后续操作的 20 行 CSV，以及英文阅读计划。示例材料只有引文记录，尚未附 PDF；主题分类只是初步判断。

## 准备文献集合

下载 <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20 条文献的 RIS 文件</a>。标题、作者、年份、期刊和 DOI 来自 Crossref 记录。这是教学选集，不是系统检索结果。实际交接时，使用同事导出的引文文件，并保留其原始 PDF。

1. 按[项目与源文件夹](../guides/projects.md)创建项目，再打开 **Library**。
2. 创建名为 **Perovskite Solar-Cell Stability** 的集合。
3. 选择 **Add → Import references**，选中 RIS 文件，检查导入预览。确认目标集合和重复记录处理方式后再导入。
4. 查看导入结果。本例新建 **20** 条记录，复用、跳过、失败均为 **0**。
5. 打开集合，选中记录，通过 **Add to project** 将它们关联到项目。

![导入完成，显示新建 20 条文献记录](/img/open-science/research-workflows/perovskite-import-complete.png)

如果导出文件含有重复记录或缺少标识，应先处理这些记录，再确认交接清单。导入引文不会自动附上全文。已有 PDF 可通过文献详情中的 **Add PDF** 添加，再核对 PDF 标题和 DOI 是否与记录一致。参见[文献库与引用](../guides/library.md)。

重新打开集合，检查底部的 **20 references**。请求综述前先查看 **Attachment** 列。本例各行都没有附件，因此下一步要求整理文献清单，不提取全文结论。

![导入后的二十条文献集合及实际附件状态](/img/open-science/research-workflows/perovskite-collection.png)

## 生成可用的交接清单

在项目中打开会话，选择可用模型，并明确指定集合：

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

集合较大时，先整理清单，再要求综合分析。缺失的 PDF、身份存疑的记录和尚未阅读的论文，都应保留在交接内容中。

## 检查保存后的文件

回答完成后，从生成文件中打开 **perovskite-handover.csv**。本例保存的表格有 **20 行、6 列**，20 个 DOI 与导入集合一致，没有缺失 DOI 或发表年份。全文状态均如实标为尚未附 PDF。

![在 Open-Science 中打开保存后的 20 行文献交接表](/img/open-science/research-workflows/perovskite-handover-table.png)

打开 **perovskite-handover.md**，检查阅读顺序是否方便接手者使用。示例先安排稳定性概览，再阅读机制、材料改进和分析方法。这是根据集合整理的阅读建议，不是已经核实的实验结论。

![保存后的阅读计划保留来源可用性和下一步操作](/img/open-science/research-workflows/perovskite-reading-plan.png)

使用预览的展开按钮阅读计划，再通过 **Download** 将它与 CSV 一起保存。检查后续动作是否能根据现有材料执行；推荐阅读顺序不代表已经读过论文。

比较稳定性结果之前，应取得对应全文，记录老化方案、温度、光照、气氛和终点指标。还要检查出版方更新：例如[大数据稳定性论文](https://www.nature.com/articles/s41467-022-35400-4)附有后续补充说明，应一并纳入全文阅读。

可下载本例保存的<a href="/docs/examples/research-workflows/perovskite-handover.csv" download>交接 CSV</a>和<a href="/docs/examples/research-workflows/perovskite-handover.md" download>阅读计划</a>，对照自己的输出结构。
