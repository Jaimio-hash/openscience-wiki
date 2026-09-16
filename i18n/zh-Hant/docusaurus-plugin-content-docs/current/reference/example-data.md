---
title: "示例資料與預期結果"
last_update:
  date: '2026-09-10'
---

# 示例資料與預期結果 {/* #示例数据与预期结果 */}

使用這些公開檔案復現文件示例。來源說明、原始檔案校驗值和樣本 QC 基準統一儲存在本頁，各功能章節僅引用其所需輸入和驗收標準。

## 來源和輸入約定 {/* #来源和输入约定 */}

[GEO 系列記錄](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450)提供原始 `GSE60450_Lactation-GenewiseCounts.txt.gz`；[已發表 RNA-seq 分析流程](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/)提供該資料的方法背景。本例止於分析前檢查，不復現論文全部分析。

| 屬性 | 實際核對值 |
| --- | --- |
| 解壓檔案 | GSE60450_Lactation-GenewiseCounts.txt |
| 大小 | 1,340,161 位元組 |
| 基因行 | 27,179 |
| 列 | EntrezGeneID、Length、12 個樣本計數列 |
| SHA-256 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| 重複 ID / 缺失計數 / 無效計數 | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>下載保持原樣的解壓輸入</a>或<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>原壓縮檔案</a>。Omics Archives 後設資料工具可返回補充檔案連結，不自動下載矩陣。下載後透過 **Attach files** 上傳。



## 樣本 QC 基準 {/* #样本-qc-基准 */}

| 樣本 | 原始總計數 | 零計數基因 | 檢出基因 | 檢出計數中位數 |
| --- | ---: | ---: | ---: | ---: |
| MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA | 20,392,113 | 9247 | 17932 | 257.0 |
| MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE | 24,723,827 | 10478 | 16701 | 138 |
| MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

短標籤與完整樣本標識的對映儲存在 CSV 中。四項數值指標已針對該輸入獨立核對；它們屬於原始計數的描述性檢查，不構成後續統計設計的驗證。

## 已儲存的示例輸出 {/* #已保存的示例输出 */}

| 下載 | 內容 |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>質控 CSV</a> | 十二行、原列名對映和四項指標 |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>圖表</a> | 樣本原始計數總量 |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>方法報告</a> | 應用儲存的獨立複核說明 |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook ZIP</a> | 未改動的原生匯出 |
## 選擇其他示例 {/* #选择其他示例 */}

| 任務 | 輸入或參考 | 操作說明 |
| --- | --- | --- |
| 儲存第一個結果 | 上方十二行 QC CSV | [首次專案](../guides/first-project.md) |
| 復算完整矩陣 | 上方原始基因計數矩陣 | [資料質量工作流](../workflows/data-quality.md) |
| 整理文獻集合 | 含出版社連結的<a href="/docs/examples/prisma/core-reading-list.md" download>PRISMA 閱讀清單</a> | [核心閱讀清單](../workflows/core-reading-list.md) |
| 小型逆折疊計算 | <a href="/docs/examples/capabilities/1UBQ.pdb" download>人泛素 1UBQ</a> | [科學工具](../tools/scientific.md) |

方法報告和 Notebook 保留了原計算的路徑及證據範圍。在應用外重跑前，先準備自己的輸入位置和依賴。
