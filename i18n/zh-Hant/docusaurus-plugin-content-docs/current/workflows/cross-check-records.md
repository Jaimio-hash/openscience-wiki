---
title: "交叉核對兩個科研資料來源"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 交叉核對兩個科研資料來源 {/* #交叉核对两个科研数据来源 */}

<p className="example-label"><strong>案例演示</strong> NASA GISTEMP 與 HadCRUT 全球年度溫度距平</p>

兩個來源的數值不同，可能首先是定義不同。解釋差異前，先對齊單位、時間範圍和參考期。本例使用兩份真實年度溫度資料，各自以 **1991—2020 年**重新定基準，再比較 **1980—2024 年**，儲存對齊表、雙面板圖、Python 指令碼和方法報告。

## 1. 獲取來原始檔並核對定義 {/* #1-获取来源文件并核对定义 */}

從 [NASA GISTEMP v4](https://data.giss.nasa.gov/gistemp/) 下載全球陸海年度 CSV，從 [HadCRUT5.1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html) 下載 analysis ensemble-mean 年度序列，分別儲存為 `NASA-GISTEMP-v4-original.csv` 和 `HadCRUT5-original.csv`。

| 輸入 | 年度數值 | 原始距平參考期 |
| --- | --- | --- |
| NASA GISTEMP v4 | `J-D` 列，單位 °C | 1951—1980 年 |
| HadCRUT5.1.0.0 | 年度集合均值，單位 °C；保留置信區間列 | 1961—1990 年 |

NASA 檔案在表頭前還有一行說明，用 `***` 表示不可用值，不能將其當成零。本次來源身份與下載連結見<ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">案例來源說明</ExampleDownload>；提供方可能在本次執行後修訂資料。

開啟專案，透過 **+ → Attach files** 附加兩份 CSV。在 **Settings → Runtimes** 中確認 Python 為 **Ready** 且已啟用。本次環境為 Python 3.12.14、NumPy 2.5.3、pandas 2.3.3、Matplotlib 3.11.1、Pillow 12.3.0。

![兩份來源 CSV 已附加到比較任務](/img/open-science/workflow-extensions/temperature-input.png)

## 2. 先要求對齊，再解釋差異 {/* #2-先要求对齐再解释差异 */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

授權前檢查檔案讀取和 Python 程式碼，開啟 **Notebook** 確認計算完成。如果出現錯誤，應先處理並重跑，再解讀報告或圖形。

## 3. 檢查對齊表 {/* #3-检查对齐表 */}

開啟 **temperature-aligned.csv**。本例比較 **45 個共同年份**；兩個來源各自都有參考期所需的 **30 個完整年度點估計**，沒有用零填補年度缺失值。

![儲存後的逐年對齊值和差值](/img/open-science/workflow-extensions/temperature-table.png)

減去的參考均值分別為 NASA **0.61266667 °C**、HadCRUT **0.53799554 °C**。每個資料集減去自己的均值，不是對兩份資料減去同一個數。比較前核對單位、年份與相減方向。

## 4. 檢視圖形和數值差異 {/* #4-查看图形和数值差异 */}

開啟 **temperature-comparison.png**。第一幅保留各自原參考期，第二幅展示以相同時間段重新定基準後的曲線。

![Open-Science 中的原參考期與共同參考期溫度曲線](/img/open-science/workflow-extensions/temperature-plot.png)

| 本例結果，NASA 減 HadCRUT | 數值 |
| --- | --- |
| 平均差 | 0.00514589 °C |
| 均方根差 RMSE | 0.01829900 °C |
| 最大絕對差 | 0.04632368 °C，出現在 2024 年 |

這些數字對應本次下載的檔案。剩餘差異可能來自覆蓋範圍、插補、觀測資料和處理方法。兩個產品共享部分觀測，**不是統計獨立的測量**；本例也不將任一方指定為真值。

## 5. 儲存方法並重跑 {/* #5-保存方法并重跑 */}

開啟 **temperature-crosscheck.md**，核對來源定義、指標與 CSV、程式碼是否一致。表格保留 HadCRUT 原置信區間及其機械平移後的數值，但此次比較**沒有**傳播所估計參考均值的不確定性，也沒有處理兩個來源間的依賴關係。

![儲存後的報告記錄實際指標與解釋邊界](/img/open-science/workflow-extensions/temperature-report.png)

下載<ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">對齊 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">圖形</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Python 指令碼</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">報告</ExampleDownload>。準備好兩份輸入，在具有上述依賴的 Python 環境中執行：

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

本次指令碼還在獨立的本地 Python 程序執行，對齊 CSV 與應用儲存版本逐位元組一致。這驗證的是本次計算，不等於評估了兩個氣候產品的全部方法選擇。
