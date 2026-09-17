---
title: "準備專題組會資料包"
last_update:
  date: '2026-09-16'
---

# 準備專題組會資料包 {/* #准备专题组会资料包 */}

從研究問題出發，在 Open-Science 中找文獻、儲存全文，再用同一組論文生成組會資料。檢索時不需要預先準備 PDF；儲存並開啟 PDF 後，才進入全文閱讀。

<p className="example-label"><strong>案例演示</strong> 檢索並閱讀五篇單原子催化論文</p>

&#42;&#42;研究問題：&#42;&#42;哪些證據能把孤立金屬位點與實際催化效能聯絡起來？本例檢索 2017–2022 年的原始研究，覆蓋合成、熱穩定性、機理和規模放大。最終得到五篇論文的文獻庫集合、全文閱讀資料包、五行論文對照表和 60 分鐘議程。下表中的最終五篇與結果檔案使用的是同一組論文。

<span id="search-from-a-topic" />

## 從主題開始檢索 {/* #从主题开始检索 */}

1. 在專案中開啟會話，選擇可使用檢索工具的模型。此時不用新增附件。
2. 說明研究問題、年份範圍和論文型別，要求儲存檢索記錄，並把候選文獻留待人工稽核。
3. 傳送後展開檢索活動，檢視來源連結，區分後設資料、摘要與全文。

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

![實際檢索記錄顯示候選論文身份與獲取狀態](/img/open-science/research-workflows/literature-topic-results.webp)

<a href="/docs/examples/research-workflows/single-atom-search-log.md" download>初次檢索記錄</a>包含透過網頁檢索與 Crossref 後設資料找到的八篇候選，此時尚未下載全文。如果來源要求憑據，先配置[聯結器](../guides/connectors.md)，或要求 Agent 使用可用來源並說明缺口。

<span id="review-and-save-the-candidates" />

## 稽核並儲存候選文獻 {/* #审核并保存候选文献 */}

開啟 **Library → Inbox**，點選標題，核對 DOI、作者、年份和出版方頁面。相關文獻選擇 **Accept**，未決定的保留待審，不相關的選擇 **Dismiss**。**Search references** 只篩選已儲存的文獻庫；線上找文獻從會話發起。

初選中有幾篇未能新增全文。為讓整場組會都有可讀原文，本例保留 Lang，並在同一方向內補找四篇：

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

檢視<a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>補選記錄</a>，在 Inbox 中勾選目標四篇，點選 **Accept**。有開放獲取連結不等於全文已可用，仍需實際儲存並開啟 PDF。

![四篇補選論文等待人工接受](/img/open-science/research-workflows/journal-open-access-inbox.webp)

使用 **New collection** 建立 **Single-Atom Catalysis - Full-Text Journal Club**。在 **All references** 中選擇新接受的四篇及 Lang，使用 **Add to collection** 加入集合；再用 **Add to project** 將它們關聯到會話所在專案。

| 論文 | 閱讀重點 | 本次 PDF 頁數 |
| --- | --- | ---: |
| [Lang 等，2019](https://doi.org/10.1038/s41467-018-08136-3) | 熱穩定性與甲烷燃燒 | 10 |
| [Sun 等，2018](https://doi.org/10.1038/s41467-018-06967-8) | Pt/Cu 合金與丙烷脫氫 | 9 |
| [Ouyang 等，2021](https://doi.org/10.1038/s41467-021-21555-z) | 原子與團簇的可逆變化及反應路徑 | 11 |
| [He 等，2022](https://doi.org/10.1038/s41467-022-33442-2) | 連續製備與規模放大 | 10 |
| [Qi 等，2021](https://doi.org/10.1038/s41467-021-23429-w) | Ru 配位與還原胺化 | 11 |

<span id="obtain-full-text-for-the-selected-papers" />

## 為入選論文取得全文 {/* #为入选论文取得全文 */}

1. 開啟文獻，選擇 **Find full-text PDF**。
2. 檢查返回的來源，點選 **Add attachment**，等待檔案出現在 **Attachments** 中。
3. 開啟附件，核對標題、DOI 與頁數。
4. 對五篇逐一操作，再回到集合，確認每行都有附件圖示。

![Lang 論文可選的全文來源](/img/open-science/research-workflows/literature-topic-fulltext.webp)

本次 Lang 透過 Europe PMC 新增；其餘四篇透過 Unpaywall 找到的出版方來源儲存。一個來源新增失敗時，可嘗試另一個來源。必要時透過 **Open source** 獲取有權訪問的檔案，再用 **Add PDF** 新增。如果沒有可讀副本，先調整選文或明確標記缺失，再要求提取全文結論。

![實際下載的論文在英文 PDF 預覽中開啟](/img/open-science/research-workflows/journal-qi-pdf.webp)

最終集合儲存了五份 PDF，按上表順序分別為 **10、9、11、10、11 頁**。附件圖示表示檔案已儲存；開啟預覽才能確認可讀、且與文獻記錄一致。

![最終集合中的五篇論文均有附件](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

<span id="read-the-full-texts-and-generate-the-pack" />

## 閱讀全文並生成資料包 {/* #阅读全文并生成资料包 */}

回到關聯專案中的會話，明確寫出已完成的集合名稱。要求讀取儲存的 PDF，並分別保留不同反應的實驗條件：

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

回答過程中，展開 **Literature library** 閱讀活動，檢查讀取了哪篇論文、哪些段落。本次實際讀取了五篇已儲存的 PDF。全文讀取與此前的後設資料查詢是不同步驟；讀取失敗時，先處理錯誤，或明確保留該篇證據不可用的狀態。

完成後，從 **Generated** 開啟 **single-atom-fulltext-reading-pack.md**。檢查五篇論文核對表、各篇結論與定位、限制、討論問題和議程，確認議程合計 60 分鐘。

![已儲存的全文資料包使用同一組五篇論文，並保留原文核對資訊](/img/open-science/research-workflows/journal-fulltext-pack.webp)

<span id="check-the-paper-map-against-the-original-pdfs" />

## 對照原文檢查論文表 {/* #对照原文检查论文表 */}

開啟 **single-atom-fulltext-paper-map.csv**，點選展開按鈕進入全屏預覽。本次為 **5 rows · 12 columns**。核對 DOI 集合與文獻庫一致；另一組選文的資料包不能作為本次結果。長單元格可橫向滾動，或下載 CSV 後完整閱讀。

![實際儲存的五行、十二列論文對照表](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

回到 **Library**，開啟被引用的 PDF，點選頁碼計數器，輸入目標頁後按 **Enter**。把圖表、圖注和附近正文一起檢查。例如 He 等論文的 Figure 5 在 **PDF 第 7 頁**，生產線描述在第 3 頁，支援的是總結中的不同部分。

![開啟 He 等論文 PDF 第 7 頁核對 Figure 5](/img/open-science/research-workflows/journal-he-figure5.webp)

發現定位或條件有誤時，要求儲存修訂版，再重新開啟檢查。本次資料包還保留了 Sun 等論文中的一處矛盾：第 2 頁與 Figure 5 圖注給出的進料組成不同。資料包分別記錄兩種說法，沒有自行統一；這可以作為組會問題，不能當作已解決的實驗細節。

下載核對後的<a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>閱讀資料包</a>和<a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>論文對照表</a>。兩份檔案都來自同一組五篇全文。需要進一步核查單條結論時，繼續閱讀[論斷與圖表核查](pdf-evidence.md)。
