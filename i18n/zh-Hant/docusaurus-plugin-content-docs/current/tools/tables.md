---
title: "表格與資料集"
last_update:
  date: '2026-09-14'
---

import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

import ExampleDownload from '@site/src/components/ExampleDownload';

# 表格與資料集 {/* #表格与数据集 */}

先用預覽理解表結構，再透過 Python 或 R 驗證和轉換完整檔案。通用檢視與下載控制元件見[開啟與預覽檔案](../guides/previews.md)，渲染範圍與副檔名見[檔案格式](../reference/formats.md)。

<span id="检查真实样本-qc-表" />

<span id="控件与显示限制" />

<span id="处理完整数据" />

文獻 PDF 中的表格可透過 [PDF 提取](../guides/previews.md#pdf-extraction)取得，再重新開啟匯出的表格，對照原文檢查表頭、數值和備註。

## 確認每一行代表什麼 {/* #确认每一行代表什么 */}

<p className="example-label"><strong>案例演示</strong> 閱讀 QC 表中的樣本標識和指標</p>

1. 從已儲存結果、Files 或附件開啟<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">示例 QC 表</ExampleDownload>。
2. 閱讀列名，判斷每行代表樣本、基因還是其他單位。這個結果表每行是一個樣本；其源矩陣每行是一個基因。
3. 找到完整標識列，保留圖表短標籤與完整標識之間的對映。
4. 判斷資料量前先讀顯示範圍；預覽有截斷時，透過完整檔案計算確認維度。
5. 將樣本數值與[公共 QC 基準](../reference/example-data.md#样本-qc-基准)比較。

![包含完整標識與數值列的樣本 QC 表](/img/open-science/capabilities-walkthrough/32-csv-preview.webp)

<ToolOperationGroup>
<summary>QC 表格：各列含義</summary>

| 列 | 含義 | 使用前檢查 |
| --- | --- | --- |
| compact_sample | 圖中使用的短標籤 | 保留到原始標識的對映 |
| original_column_name | 原始樣本標識 | 檢查缺失與重複名稱 |
| total_raw_counts | 樣本計數總和 | 保留原始計數單位，不稱為歸一化表達 |
| zero_count_genes | 計數為零的基因數 | 與檢測到的基因數之和應覆蓋全部輸入基因行 |
| detected_genes_count_gt_0 | 計數大於零的基因數 | 是基因數量，不是表達強度 |
| median_count_among_detected_genes | 正計數的中位數 | 明確排除了零計數基因 |

</ToolOperationGroup>

## 檢查完整資料集 {/* #检查完整数据集 */}

選擇數值操作前，先區分標識、後設資料和測量列。基因 ID 應保留為標識，基因長度不能混入樣本計數計算。在完整輸入中檢查缺失值、重複標識和允許的取值範圍。

可見行數可能只描述預覽。在 [Notebook](../guides/notebook.md) 讀取完整檔案來確認維度。CSV 渲染器是隻讀表格，點選表頭不能替代排序或篩選操作。

## 將轉換儲存為新結果 {/* #将转换保存为新结果 */}

在請求中寫明連線鍵、篩選規則、缺失值策略與輸出列。要求另存派生檔案，保留原始輸入。重新開啟結果，對照輸入檢查行數與標識，再檢視實際執行程式碼後解釋變化。

Notebook 變數在儲存前屬於臨時核心狀態，與託管檔案版本的生命週期不同。儲存和比較結果見[檔案與版本](../guides/files.md)。

## 為其他格式選擇讀取方式 {/* #为其他格式选择读取方式 */}

`.xls`/`.xlsx` 的 Office 預覽和工作表操作見[預覽檔案](../guides/previews.md)。`.h5ad`、`.h5` 等二進位制容器需要相容的分析庫。製表符分隔的 `.txt` 矩陣可能顯示為文字。修改副檔名不會轉換資料，也不會讓不支援的格式自動可讀。
