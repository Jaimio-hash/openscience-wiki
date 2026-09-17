---
title: 准备专题组会资料包
last_update:
  date: '2026-09-16'
---

# 准备专题组会资料包

从研究问题出发，在 Open-Science 中找文献、保存全文，再用同一组论文生成组会资料。检索时不需要预先准备 PDF；保存并打开 PDF 后，才进入全文阅读。

<p className="example-label"><strong>案例演示</strong> 检索并阅读五篇单原子催化论文</p>

**研究问题**：哪些证据能把孤立金属位点与实际催化性能联系起来？本例检索 2017–2022 年的原始研究，覆盖合成、热稳定性、机理和规模放大。最终得到五篇论文的文献库集合、全文阅读资料包、五行论文对照表和 60 分钟议程。下表中的最终五篇与结果文件使用的是同一组论文。

<span id="search-from-a-topic" />

## 从主题开始检索

1. 在项目中打开会话，选择可使用检索工具的模型。此时不用添加附件。
2. 说明研究问题、年份范围和论文类型，要求保存检索记录，并把候选文献留待人工审核。
3. 发送后展开检索活动，查看来源链接，区分元数据、摘要与全文。

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![实际检索记录显示候选论文身份与获取状态](/img/open-science/research-workflows/literature-topic-results.webp)

<a href="/docs/examples/research-workflows/single-atom-search-log.md" download>初次检索记录</a>包含通过网页检索与 Crossref 元数据找到的八篇候选，此时尚未下载全文。如果来源要求凭据，先配置[连接器](../guides/connectors.md)，或要求 Agent 使用可用来源并说明缺口。

<span id="review-and-save-the-candidates" />

## 审核并保存候选文献

打开 **Library → Inbox**，点击标题，核对 DOI、作者、年份和出版方页面。相关文献选择 **Accept**，未决定的保留待审，不相关的选择 **Dismiss**。**Search references** 只筛选已保存的文献库；在线找文献从会话发起。

初选中有几篇未能添加全文。为让整场组会都有可读原文，本例保留 Lang，并在同一方向内补找四篇：

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

查看<a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>补选记录</a>，在 Inbox 中勾选目标四篇，点击 **Accept**。有开放获取链接不等于全文已可用，仍需实际保存并打开 PDF。

![四篇补选论文等待人工接受](/img/open-science/research-workflows/journal-open-access-inbox.webp)

使用 **New collection** 创建 **Single-Atom Catalysis - Full-Text Journal Club**。在 **All references** 中选择新接受的四篇及 Lang，使用 **Add to collection** 加入集合；再用 **Add to project** 将它们关联到会话所在项目。

| 论文 | 阅读重点 | 本次 PDF 页数 |
| --- | --- | ---: |
| [Lang 等，2019](https://doi.org/10.1038/s41467-018-08136-3) | 热稳定性与甲烷燃烧 | 10 |
| [Sun 等，2018](https://doi.org/10.1038/s41467-018-06967-8) | Pt/Cu 合金与丙烷脱氢 | 9 |
| [Ouyang 等，2021](https://doi.org/10.1038/s41467-021-21555-z) | 原子与团簇的可逆变化及反应路径 | 11 |
| [He 等，2022](https://doi.org/10.1038/s41467-022-33442-2) | 连续制备与规模放大 | 10 |
| [Qi 等，2021](https://doi.org/10.1038/s41467-021-23429-w) | Ru 配位与还原胺化 | 11 |

<span id="obtain-full-text-for-the-selected-papers" />

## 为入选论文取得全文

1. 打开文献，选择 **Find full-text PDF**。
2. 检查返回的来源，点击 **Add attachment**，等待文件出现在 **Attachments** 中。
3. 打开附件，核对标题、DOI 与页数。
4. 对五篇逐一操作，再回到集合，确认每行都有附件图标。

![Lang 论文可选的全文来源](/img/open-science/research-workflows/literature-topic-fulltext.webp)

本次 Lang 通过 Europe PMC 添加；其余四篇通过 Unpaywall 找到的出版方来源保存。一个来源添加失败时，可尝试另一个来源。必要时通过 **Open source** 获取有权访问的文件，再用 **Add PDF** 添加。如果没有可读副本，先调整选文或明确标记缺失，再要求提取全文结论。

![实际下载的论文在英文 PDF 预览中打开](/img/open-science/research-workflows/journal-qi-pdf.webp)

最终集合保存了五份 PDF，按上表顺序分别为 **10、9、11、10、11 页**。附件图标表示文件已保存；打开预览才能确认可读、且与文献记录一致。

![最终集合中的五篇论文均有附件](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

<span id="read-the-full-texts-and-generate-the-pack" />

## 阅读全文并生成资料包

回到关联项目中的会话，明确写出已完成的集合名称。要求读取保存的 PDF，并分别保留不同反应的实验条件：

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

回答过程中，展开 **Literature library** 阅读活动，检查读取了哪篇论文、哪些段落。本次实际读取了五篇已保存的 PDF。全文读取与此前的元数据查询是不同步骤；读取失败时，先处理错误，或明确保留该篇证据不可用的状态。

完成后，从 **Generated** 打开 **single-atom-fulltext-reading-pack.md**。检查五篇论文核对表、各篇结论与定位、限制、讨论问题和议程，确认议程合计 60 分钟。

![已保存的全文资料包使用同一组五篇论文，并保留原文核对信息](/img/open-science/research-workflows/journal-fulltext-pack.webp)

<span id="check-the-paper-map-against-the-original-pdfs" />

## 对照原文检查论文表

打开 **single-atom-fulltext-paper-map.csv**，点击展开按钮进入全屏预览。本次为 **5 rows · 12 columns**。核对 DOI 集合与文献库一致；另一组选文的资料包不能作为本次结果。长单元格可横向滚动，或下载 CSV 后完整阅读。

![实际保存的五行、十二列论文对照表](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

回到 **Library**，打开被引用的 PDF，点击页码计数器，输入目标页后按 **Enter**。把图表、图注和附近正文一起检查。例如 He 等论文的 Figure 5 在 **PDF 第 7 页**，生产线描述在第 3 页，支持的是总结中的不同部分。

![打开 He 等论文 PDF 第 7 页核对 Figure 5](/img/open-science/research-workflows/journal-he-figure5.webp)

发现定位或条件有误时，要求保存修订版，再重新打开检查。本次资料包还保留了 Sun 等论文中的一处矛盾：第 2 页与 Figure 5 图注给出的进料组成不同。资料包分别记录两种说法，没有自行统一；这可以作为组会问题，不能当作已解决的实验细节。

下载核对后的<a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>阅读资料包</a>和<a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>论文对照表</a>。两份文件都来自同一组五篇全文。需要进一步核查单条结论时，继续阅读[论断与图表核查](pdf-evidence.md)。
