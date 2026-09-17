---
title: "为新课题建立核心阅读文献库"
last_update:
  date: '2026-09-16'
---

# 为新课题建立核心阅读文献库

如果你只有研究主题，可以先按[组会工作流](journal-club.md)检索并筛选候选论文。下方 PRISMA 案例从三个已知 DOI 开始，演示这些记录的核对、保存与阅读。

<p className="example-label"><strong>案例演示</strong> 建立 PRISMA 阅读文献集合</p>

你准备开展系统综述，需要先建立一组身份明确、可以复核的基础文献。本例使用三篇真实发表的 PRISMA 论文，完成代理检索、Inbox 人工审核、项目与集合关联，以及开放获取 PDF 的附加。

**交付物：** 一个关联研究项目的三篇文献集合、一份已核对的全文附件，以及使用前需要核验的阅读清单文件。这是种子文献集合，不是穷尽检索或完整证据综合。

处理自己的课题时，请替换种子文献及集合、项目名称，并核对各篇文献的实际信息和可获取全文。

## 来源与准备

准备可用模型连接，并将应用切换为英文。示例使用 Codex 订阅。按照[项目与来源文件](../guides/projects.md)建立 **PRISMA - Systematic review reading pack**。

| 文献 | DOI | 在资料包中的作用 |
| --- | --- | --- |
| Page 等，2021，PRISMA 2020 statement | `10.1371/journal.pmed.1003583` | 更新后的报告规范；标题中的 2020 不是发表年份 |
| Moher 等，2009，PRISMA Statement | `10.1371/journal.pmed.1000097` | 历史声明 |
| Liberati 等，2009，Explanation and Elaboration | `10.1371/journal.pmed.1000100` | 历史解释说明，与上一条不是同一篇论文，作者列表也不同 |

书目信息可在出版方核对：[2021 声明](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)、[2009 声明](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097)、[2009 解释说明](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100)。

## 1. 请求范围明确的候选文献

在 **Ask anything** 中提供标识符、保存位置和停止条件：

```text
Build a core reading list for our systematic-review reporting project.
Look up only these DOIs:
10.1371/journal.pmed.1000097
10.1371/journal.pmed.1000100
10.1371/journal.pmed.1003583
Use the literature library tools to retrieve bibliographic metadata and
stage the records for my Inbox review. Do not accept candidates for me.
Save reading-list.md with each title, authors, year, DOI, source URL and
suggested reading order. Label the 2009 papers as historical. Do not
claim to have read full text unless you actually retrieved it.
```

选择模型，保留 **Ask for approval**，点击 **Send message**。需要核查具体操作时展开工具活动。代理可能先读取相关 Skill；回复中提到 Skill 名称，不代表它已经成功加载说明。

出现 **Save to Literature Inbox?** 时，检查操作并批准预期的暂存。允许保存候选与接受文献入库是不同步骤。

![暂存文献候选时的真实审批](/img/open-science/prisma-walkthrough/03-inbox-save-approval.webp)

## 2. 逐条审核再接受

打开 **Library → Inbox**。本次徽标显示 **3**，每条候选显示标题、首位作者、发表年份以及 **Found via crossref**。

![三篇真实论文在 Inbox 中等待审核](/img/open-science/prisma-walkthrough/04-inbox-three-papers.webp)

1. 点击候选标题打开详情。
2. 核对 **Provider**、来源链接与 **Identifiers → DOI**。
3. 将作者顺序、年份和期刊与出版方记录对照；相似标题不能证明两条记录属于同一篇论文。
4. 确认身份符合预期后点击 **Accept**。候选从 Inbox 消失，成为文献库记录。
5. 继续核对其他两篇。计数依次从 3 变为 2、1，最后显示 **Inbox is clear**。

![候选的 Crossref 来源和准确 DOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.webp)

| Inbox 控件 | 结果 | 使用时机 |
| --- | --- | --- |
| 标题 / **View details** | 打开提供方和标识符证据 | 接受陌生或存在歧义的论文前 |
| **Accept** | 将候选正式加入文献库 | 已核对身份和相关性 |
| **Dismiss** | 从待审队列移除候选 | 文献不相关或不应进入集合；该操作不会修正元数据 |
| **Search references** | 缩小当前视图范围 | 在较大批次中查找标题或标识符 |
| 行复选框 / **Select all** | 选择候选以使用可用批量操作 | 先核对选择范围；本次采用逐条接受 |

## 3. 将文献组织为项目可用的集合

点击左侧 **New collection**：

- **Name：** `PRISMA reporting - Core reading`。
- **Description：** 说明集合包含更新版及历史版报告规范。描述用于组织信息，不作为代理指令。
- 点击 **Create collection**。名称必填，描述可选；**Cancel** 与 **Close** 放弃草稿。

![为具体研究目的创建阅读集合](/img/open-science/prisma-walkthrough/06-create-collection.webp)

在 **All references** 搜索 `PRISMA`。确认只显示目标三篇，勾选后点击 **Add to collection → PRISMA reporting - Core reading**。该操作完成后会清除选择。再次勾选这三篇，点击 **Add to project → PRISMA - Systematic review reading pack**。

打开集合检查三条记录，再打开一篇详情，确认项目和集合复选框均已选中。这里建立的是共享记录的关联，不是额外复制三条书目。

![包含三篇真实论文的核心阅读集合](/img/open-science/prisma-walkthrough/07-core-reading-collection.webp)

## 4. 附加可用全文

打开 2021 年论文，点击 **Find full-text PDF**。本次查找返回 Europe PMC。点击 **Add attachment** 前先检查 **Open source**。

![应用发现的开放全文来源](/img/open-science/prisma-walkthrough/08-full-text-source.webp)

虽然来源可被找到，实际添加时却显示 **PDF could not be added**。提示列出需登录、链接过期和超过 50 MB 等可能原因，但没有确定本次具体原因。

恢复方式是从[出版方文章页面](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)下载开放获取 PDF，再返回同一文献点击 **Add PDF**。选择文件后，在 Attachments 中打开 **Preview prisma-2020-statement.pdf**。本次成功附件显示 **806.1 KB**，预览为 **15 页**。核对首页标题、DOI 是否与记录一致。

![成功附加并打开的出版方原始 PDF](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.webp)

找到来源不等于已经附加 PDF；附加 PDF 也不等于代理已经阅读全文。**Read with agent** 是为后续请求提供阅读上下文的独立操作。

<span id="5-核验生成的阅读清单" />

## 5. 检查并保存阅读清单

打开 **reading-list.md**，逐条将标题、作者顺序、发表日期和 DOI 与上方出版社页面对照。可参考<a href="/docs/examples/prisma/core-reading-list.md" download>已核对的阅读清单</a>。该下载是整理后的书目示例，与应用中早期保存的版本分开保留。

1. 更新声明的发表年份为 **2021**，不能因标题包含 PRISMA 2020 而改成年份 2020。
2. 2009 声明应保留四位个人作者**以及 The PRISMA Group**。在文献库中将后者设为 **Name type → Organization**。
3. 2009 解释文章保留自己的十位作者，不能复制声明文章的作者列表。
4. 若生成报告有误，先修正文献记录，再明确要求根据修正后的记录保存 **reading-list.md** 的新受管理版本。
5. 重新打开新文件，核对三条书目及 DOI 链接后再下载。仅更新元数据不会自动改写已保存报告。

例如请求：

```text
根据三条已接受的记录重新生成 reading-list.md，分别保留完整作者列表。
DOI 10.1371/journal.pmed.1000097 必须包含机构作者 The PRISMA Group。
PRISMA 2020 声明的发表年份使用 2021。保留全部 DOI 和出版社链接。
保存为新的受管理版本并重新打开。准确区分元数据查找和已附加文件，
不要宣称进行了全文分析。
```

<span id="验收标准与验证范围" />

## 完成前的检查

- 集合和项目均包含预期三篇文献。
- DOI 分别指向匹配论文，两篇 2009 文献保留不同作者列表。
- 更新版声明的发表年份为 2021。
- PDF 能打开且匹配 2021 文献；失败下载不计入附件。
- 清单区分元数据检索、人工接受与实际全文阅读。

此集合支持范围明确的阅读任务。穷尽数据库检索、全文综合和完整系统综述还需要额外方法与证据。

新建阅读集合时，通过[元数据编辑器](../guides/library.md)的 **Name type → Organization** 填写机构作者，再重新生成并核对书目。接手 PDF 文件夹时，先按同一指南批量导入，再审核集合。修正文献库记录不会自动改写上方已保存的阅读清单产物。
