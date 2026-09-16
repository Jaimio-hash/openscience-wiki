---
title: "製作帶誤差棒、可追溯資料的科研圖"
last_update:
  date: '2026-09-16'
---

# 製作帶誤差棒、可追溯資料的科研圖 {/* #制作带误差棒可追溯数据的科研图 */}

<p className="example-label"><strong>案例演示</strong> 溫度與電導率</p>

需要一張能夠追溯到資料表的科研圖，每個點和誤差範圍都有來源。本例繪製鋁摻雜氧化鋅（AZO）和碘化亞銅（CuI）的電導率，保留出版方給出的標準差。

**交付結果：** 英文 PNG 和 SVG、實際繪圖 CSV，以及簡短的方法說明。本例使用已發表資料，不是新開展的實驗。

## 準備資料並明確含義 {/* #准备数据并明确含义 */}

[原論文](https://www.nature.com/articles/s44172-024-00291-4)提供了 Source Data 工作簿。示例 CSV 轉錄 **Supplementary Fig.6a** 和 **Supplementary Fig.6b** 的 **3–15 行**，分別取 A、D、E 列中的溫度、電導率及報告的 SD。每種材料有 **13 個溫度點**，範圍為 **275–390 K**。

下載<a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>整理後的 CSV</a>和<a href="/docs/examples/research-workflows/conductivity-source.md" download>來源說明</a>。CSV 為每個點保留了原始工作表和行號。論文說明 SD 來自每個溫度點的五次測量；這些列沒有提供逐次測量值，因此本流程不重新計算 SD。

1. 建立專案，準備可用模型並啟用 [Python 執行時](../guides/runtimes.md)。
2. 開啟會話，透過 **+ → Attach files** 附加兩個檔案。
3. 繪圖前確認數值列和單位：溫度為 **K**，電導率及其 SD 為 **S m⁻¹**。

點選附加的 CSV 開啟預覽，應為 **26 rows · 6 columns**，包含材料、溫度、電導率、SD 和來源工作表/行號。也開啟來源說明；截圖中的實操使用檔名 `README.md`，本文提供的同一說明命名為 `conductivity-source.md`。

![附加的電導率資料表保留數值、單位及來源行](/img/open-science/research-workflows/conductivity-input.png)

## 同時要求圖表和繪圖資料 {/* #同时要求图表和绘图数据 */}

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

檢查程式碼或依賴安裝請求，再檢視 Notebook 的實際結果。回答中描述了圖表，並不代表已經儲存了圖片檔案。

在會話中點選 **Notebook**，開啟已完成的 Python 單元，檢查輸出：共 26 行、每種材料 13 行、溫度範圍 275–390 K，以及實際生成的圖。如果輸入解析失敗，要求 Agent 使用本會話附加的 CSV，確認成功執行後再繼續。

![Notebook 實際執行後顯示輸入檢查結果和圖表](/img/open-science/research-workflows/conductivity-notebook.png)

## 檢查圖表並匯出 {/* #检查图表并导出 */}

開啟生成的 PNG，確認兩種材料容易區分，首尾資料點可見，座標軸註明單位，不確定性標註為 **reported SD**。連線只連線觀測值，AZO 在 300 K 後的電導率下降仍應保留。

![在 Open-Science 中實際預覽電導率圖和原文報告的 SD 誤差棒](/img/open-science/research-workflows/conductivity-figure.png)

開啟 **plotted-conductivity.csv** 與輸入對照。本次執行的 **26 行**溫度、電導率、SD，以及來源工作表和行號均保持一致。再開啟 **conductivity-methods.md**，核對來源 DOI 和誤差定義。

**Generated** 區應有四份檔案。開啟方法說明，並透過各檔案預覽中的下載圖示儲存核對後的版本。缺少檔案時，明確要求補存該檔案並重新開啟；PNG 成功不代表 SVG 和資料表也已儲存。

![四份已儲存結果與重新開啟的方法說明](/img/open-science/research-workflows/conductivity-methods.png)

快速分享可使用 PNG，需要向量圖時使用 SVG。可下載本次執行的 <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG</a>、<a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG</a>、<a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>繪圖資料</a>和<a href="/docs/examples/research-workflows/conductivity-methods.md" download>方法說明</a>進行對照。

處理自己的測量資料時，先決定誤差棒表示標準差、標準誤還是置信區間，再要求繪圖。提供所需的原始測量值，或已經算好的不確定性及其定義；缺失的不確定性應如實保留。
