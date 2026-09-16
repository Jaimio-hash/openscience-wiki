---
title: "為新課題建立核心閱讀文獻庫"
last_update:
  date: '2026-09-16'
---

# 為新課題建立核心閱讀文獻庫 {/* #为新课题建立核心阅读文献库 */}

如果你只有研究主題，可以先按[組會工作流程](journal-club.md)檢索並篩選候選論文。下方 PRISMA 案例從三個已知 DOI 開始，示範這些記錄的核對、儲存與閱讀。

<p className="example-label"><strong>案例演示</strong> 建立 PRISMA 閱讀文獻集合</p>

你準備開展系統綜述，需要先建立一組身份明確、可以複核的基礎文獻。本例使用三篇真實發表的 PRISMA 論文，完成代理檢索、Inbox 人工稽核、專案與集合關聯，以及開放獲取 PDF 的附加。

**交付物：** 一個關聯研究專案的三篇文獻集合、一份已核對的全文附件，以及使用前需要核驗的閱讀清單檔案。這是種子文獻集合，不是窮盡檢索或完整證據綜合。

處理自己的課題時，請替換種子文獻及集合、專案名稱，並核對各篇文獻的實際資訊和可獲取全文。

## 來源與準備 {/* #来源与准备 */}

準備可用模型連線，並將應用切換為英文。示例使用 Codex 訂閱。按照[專案與來原始檔](../guides/projects.md)建立 **PRISMA - Systematic review reading pack**。

| 文獻 | DOI | 在資料包中的作用 |
| --- | --- | --- |
| Page 等，2021，PRISMA 2020 statement | `10.1371/journal.pmed.1003583` | 更新後的報告規範；標題中的 2020 不是發表年份 |
| Moher 等，2009，PRISMA Statement | `10.1371/journal.pmed.1000097` | 歷史宣告 |
| Liberati 等，2009，Explanation and Elaboration | `10.1371/journal.pmed.1000100` | 歷史解釋說明，與上一條不是同一篇論文，作者列表也不同 |

書目資訊可在出版方核對：[2021 宣告](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)、[2009 宣告](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097)、[2009 解釋說明](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100)。

## 1. 請求範圍明確的候選文獻 {/* #1-请求范围明确的候选文献 */}

在 **Ask anything** 中提供識別符號、儲存位置和停止條件：

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

選擇模型，保留 **Ask for approval**，點選 **Send message**。需要核查具體操作時展開工具活動。代理可能先讀取相關 Skill；回覆中提到 Skill 名稱，不代表它已經成功載入說明。

出現 **Save to Literature Inbox?** 時，檢查操作並批准預期的暫存。允許儲存候選與接受文獻入庫是不同步驟。

![暫存文獻候選時的真實審批](/img/open-science/prisma-walkthrough/03-inbox-save-approval.png)

## 2. 逐條稽核再接受 {/* #2-逐条审核再接受 */}

開啟 **Library → Inbox**。本次徽標顯示 **3**，每條候選顯示標題、首位作者、發表年份以及 **Found via crossref**。

![三篇真實論文在 Inbox 中等待稽核](/img/open-science/prisma-walkthrough/04-inbox-three-papers.png)

1. 點選候選標題開啟詳情。
2. 核對 **Provider**、來源連結與 **Identifiers → DOI**。
3. 將作者順序、年份和期刊與出版方記錄對照；相似標題不能證明兩條記錄屬於同一篇論文。
4. 確認身份符合預期後點選 **Accept**。候選從 Inbox 消失，成為文獻庫記錄。
5. 繼續核對其他兩篇。計數依次從 3 變為 2、1，最後顯示 **Inbox is clear**。

![候選的 Crossref 來源和準確 DOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.png)

| Inbox 控制元件 | 結果 | 使用時機 |
| --- | --- | --- |
| 標題 / **View details** | 開啟提供方和識別符號證據 | 接受陌生或存在歧義的論文前 |
| **Accept** | 將候選正式加入文獻庫 | 已核對身份和相關性 |
| **Dismiss** | 從待審佇列移除候選 | 文獻不相關或不應進入集合；該操作不會修正後設資料 |
| **Search references** | 縮小當前檢視範圍 | 在較大批次中查詢標題或識別符號 |
| 行復選框 / **Select all** | 選擇候選以使用可用批次操作 | 先核對選擇範圍；本次採用逐條接受 |

## 3. 將文獻組織為專案可用的集合 {/* #3-将文献组织为项目可用的集合 */}

點選左側 **New collection**：

- **Name：** `PRISMA reporting - Core reading`。
- **Description：** 說明集合包含更新版及歷史版報告規範。描述用於組織資訊，不作為代理指令。
- 點選 **Create collection**。名稱必填，描述可選；**Cancel** 與 **Close** 放棄草稿。

![為具體研究目的建立閱讀集合](/img/open-science/prisma-walkthrough/06-create-collection.png)

在 **All references** 搜尋 `PRISMA`。確認只顯示目標三篇，勾選後點選 **Add to collection → PRISMA reporting - Core reading**。該操作完成後會清除選擇。再次勾選這三篇，點選 **Add to project → PRISMA - Systematic review reading pack**。

開啟集合檢查三條記錄，再開啟一篇詳情，確認專案和集合核取方塊均已選中。這裡建立的是共享記錄的關聯，不是額外複製三條書目。

![包含三篇真實論文的核心閱讀集合](/img/open-science/prisma-walkthrough/07-core-reading-collection.png)

## 4. 附加可用全文 {/* #4-附加可用全文 */}

開啟 2021 年論文，點選 **Find full-text PDF**。本次查詢返回 Europe PMC。點選 **Add attachment** 前先檢查 **Open source**。

![應用發現的開放全文來源](/img/open-science/prisma-walkthrough/08-full-text-source.png)

雖然來源可被找到，實際新增時卻顯示 **PDF could not be added**。提示列出需登入、連結過期和超過 50 MB 等可能原因，但沒有確定本次具體原因。

恢復方式是從[出版方文章頁面](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)下載開放獲取 PDF，再返回同一文獻點選 **Add PDF**。選擇檔案後，在 Attachments 中開啟 **Preview prisma-2020-statement.pdf**。本次成功附件顯示 **806.1 KB**，預覽為 **15 頁**。核對首頁標題、DOI 是否與記錄一致。

![成功附加並開啟的出版方原始 PDF](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.png)

找到來源不等於已經附加 PDF；附加 PDF 也不等於代理已經閱讀全文。**Read with agent** 是為後續請求提供閱讀上下文的獨立操作。

<span id="5-核验生成的阅读清单" />

## 5. 檢查並儲存閱讀清單 {/* #5-检查并保存阅读清单 */}

開啟 **reading-list.md**，逐條將標題、作者順序、發表日期和 DOI 與上方出版社頁面對照。可參考<a href="/docs/examples/prisma/core-reading-list.md" download>已核對的閱讀清單</a>。該下載是整理後的書目示例，與應用中早期儲存的版本分開保留。

1. 更新宣告的發表年份為 **2021**，不能因標題包含 PRISMA 2020 而改成年份 2020。
2. 2009 宣告應保留四位個人作者**以及 The PRISMA Group**。在文獻庫中將後者設為 **Name type → Organization**。
3. 2009 解釋文章保留自己的十位作者，不能複製宣告文章的作者列表。
4. 若生成報告有誤，先修正文獻記錄，再明確要求根據修正後的記錄儲存 **reading-list.md** 的新受管理版本。
5. 重新開啟新檔案，核對三條書目及 DOI 連結後再下載。僅更新後設資料不會自動改寫已儲存報告。

例如請求：

```text
根据三条已接受的记录重新生成 reading-list.md，分别保留完整作者列表。
DOI 10.1371/journal.pmed.1000097 必须包含机构作者 The PRISMA Group。
PRISMA 2020 声明的发表年份使用 2021。保留全部 DOI 和出版社链接。
保存为新的受管理版本并重新打开。准确区分元数据查找和已附加文件，
不要宣称进行了全文分析。
```

<span id="验收标准与验证范围" />

## 完成前的檢查 {/* #完成前的检查 */}

- 集合和專案均包含預期三篇文獻。
- DOI 分別指向匹配論文，兩篇 2009 文獻保留不同作者列表。
- 更新版宣告的發表年份為 2021。
- PDF 能開啟且匹配 2021 文獻；失敗下載不計入附件。
- 清單區分後設資料檢索、人工接受與實際全文閱讀。

此集合支援範圍明確的閱讀任務。窮盡資料庫檢索、全文綜合和完整系統綜述還需要額外方法與證據。

新建閱讀集合時，透過[後設資料編輯器](../guides/library.md)的 **Name type → Organization** 填寫機構作者，再重新生成並核對書目。接手 PDF 資料夾時，先按同一指南批次匯入，再稽核集合。修正文獻庫記錄不會自動改寫上方已儲存的閱讀清單產物。
