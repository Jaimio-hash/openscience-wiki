---
title: "接手並整理前人的文獻集合"
last_update:
  date: '2026-09-16'
---

# 接手並整理前人的文獻集合 {/* #接手并整理前人的文献集合 */}

本流程用於整理已有題錄。如果你只有研究主題，先按[組會工作流檢索並審閱候選論文](journal-club.md)。

<p className="example-label"><strong>案例演示</strong> 鈣鈦礦太陽能電池穩定性文獻交接</p>

收到同事交來的文獻清單後，先弄清楚有哪些材料、哪些還沒有讀。本例匯入 20 條關於鈣鈦礦太陽能電池穩定性的已發表文獻，在 Library 中建立集合，並生成帶後續操作的交接清單和閱讀計劃。

**交付結果：** 與專案關聯的文獻集合、保留來源標識和後續操作的 20 行 CSV，以及英文閱讀計劃。示例材料只有引文記錄，尚未附 PDF；主題分類只是初步判斷。

## 準備文獻集合 {/* #准备文献集合 */}

下載 <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20 條文獻的 RIS 檔案</a>。標題、作者、年份、期刊和 DOI 來自 Crossref 記錄。這是教學選集，不是系統檢索結果。實際交接時，使用同事匯出的引文檔案，並保留其原始 PDF。

1. 按[專案與原始檔夾](../guides/projects.md)建立專案，再開啟 **Library**。
2. 建立名為 **Perovskite Solar-Cell Stability** 的集合。
3. 選擇 **Add → Import references**，選中 RIS 檔案，檢查匯入預覽。確認目標集合和重複記錄處理方式後再匯入。
4. 檢視匯入結果。本例新建 **20** 條記錄，複用、跳過、失敗均為 **0**。
5. 開啟集合，選中記錄，透過 **Add to project** 將它們關聯到專案。

![匯入完成，顯示新建 20 條文獻記錄](/img/open-science/research-workflows/perovskite-import-complete.webp)

如果匯出檔案含有重複記錄或缺少標識，應先處理這些記錄，再確認交接清單。匯入引文不會自動附上全文。已有 PDF 可透過文獻詳情中的 **Add PDF** 新增，再核對 PDF 標題和 DOI 是否與記錄一致。參見[文獻庫與引用](../guides/library.md)。

重新開啟集合，檢查底部的 **20 references**。請求綜述前先檢視 **Attachment** 列。本例各行都沒有附件，因此下一步要求整理文獻清單，不提取全文結論。

![匯入後的二十條文獻集合及實際附件狀態](/img/open-science/research-workflows/perovskite-collection.webp)

## 生成可用的交接清單 {/* #生成可用的交接清单 */}

在專案中開啟會話，選擇可用模型，並明確指定集合：

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

集合較大時，先整理清單，再要求綜合分析。缺失的 PDF、身份存疑的記錄和尚未閱讀的論文，都應保留在交接內容中。

## 檢查儲存後的檔案 {/* #检查保存后的文件 */}

回答完成後，從生成檔案中開啟 **perovskite-handover.csv**。本例儲存的表格有 **20 行、6 列**，20 個 DOI 與匯入集合一致，沒有缺失 DOI 或發表年份。全文狀態均如實標為尚未附 PDF。

![在 Open-Science 中開啟儲存後的 20 行文獻交接表](/img/open-science/research-workflows/perovskite-handover-table.webp)

開啟 **perovskite-handover.md**，檢查閱讀順序是否方便接手者使用。示例先安排穩定性概覽，再閱讀機制、材料改進和分析方法。這是根據集合整理的閱讀建議，不是已經核實的實驗結論。

![儲存後的閱讀計劃保留來源可用性和下一步操作](/img/open-science/research-workflows/perovskite-reading-plan.webp)

使用預覽的展開按鈕閱讀計劃，再透過 **Download** 將它與 CSV 一起儲存。檢查後續動作是否能根據現有材料執行；推薦閱讀順序不代表已經讀過論文。

比較穩定性結果之前，應取得對應全文，記錄老化方案、溫度、光照、氣氛和終點指標。還要檢查出版方更新：例如[大資料穩定性論文](https://www.nature.com/articles/s41467-022-35400-4)附有後續補充說明，應一併納入全文閱讀。

可下載本例儲存的<a href="/docs/examples/research-workflows/perovskite-handover.csv" download>交接 CSV</a>和<a href="/docs/examples/research-workflows/perovskite-handover.md" download>閱讀計劃</a>，對照自己的輸出結構。
