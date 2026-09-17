---
title: "資料更新後重跑分析"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 資料更新後重跑分析 {/* #数据更新后重跑分析 */}

<p className="example-label"><strong>案例演示</strong> 為北京空氣質量分析增加第二週觀測</p>

增加觀測後，先保留基線，再用同一方法重跑並比較。本例使用真實的**奧體中心 Aotizhongxin** 小時 PM2.5 資料，先分析 **2016 年 1 月 1—7 日**，再加入 **1 月 8—14 日**。分兩次提供資料是歷史教學演示，不是實時監測。

## 1. 附加第一週並定義計算規則 {/* #1-附加第一周并定义计算规则 */}

輸入取自 [UCI Beijing Multi-Site Air Quality 資料集](https://doi.org/10.24432/C5RK5G)，按 **CC BY 4.0** 提供。下載<ExampleDownload path="/examples/workflow-extensions/air-week1.csv">第一週</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/air-week2.csv">第二週</ExampleDownload>；來源署名與檔案身份見<ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">來源說明</ExampleDownload>。

開啟專案會話，透過 **+ → Attach files** 先只附加 **air-week1.csv**。選擇可用模型，在 **Settings → Runtimes** 中確認 Python 為 **Ready** 且已啟用，傳送：

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![第一週附件與基線計算任務](/img/open-science/workflow-extensions/air-input-v1.png)

檢查檔案讀取和計算內容後授權。在 **Notebook** 中確認執行完成，再開啟 **air-daily-v1.csv**。基線包含 **168 行小時資料、7 行日彙總**，PM2.5 沒有缺失。

![儲存後的七天基線與有效小時數](/img/open-science/workflow-extensions/air-baseline-table.png)

## 2. 增加觀測，保持方法不變 {/* #2-增加观测保持方法不变 */}

繼續同一會話，附加 **air-week2.csv**，保留第一份附件可用，傳送：

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![在原分析會話中附加第二週資料](/img/open-science/workflow-extensions/air-update-input.png)

確認代理執行原指令碼，保留同一缺失值與完整性規則。若資料和方法同時改變，就難以判斷結果變化來自哪裡。

## 3. 檢查擴充套件後的結果 {/* #3-检查扩展后的结果 */}

開啟 **air-daily-v2.png** 和 **air-daily-v2.csv**。合併輸入有 **336 行小時資料**，**沒有重複或缺失時間戳**，但 **1 月 11 日有一個 PM2.5 值缺失**。日彙總為 **14 天**，均達到本例設定的至少 18 個有效小時要求。

![Open-Science 中擴充套件後的十四天結果](/img/open-science/workflow-extensions/air-update-plot.png)

1 月 11 日均值為 **11.652 µg/m³**，由 **23 個有效小時**計算。不能把缺失值當成零參與分母。時間戳完整也不代表測量值全部存在。

## 4. 與基線逐行比較 {/* #4-与基线逐行比较 */}

開啟 **air-update-check.csv**。原來的 **7 個共同日期**在所有輸出欄位上完全一致，新增的只有 1 月 8—14 日。更新前後原指令碼的 SHA-256 一致。

![逐行比較顯示基線日期的結果保持不變](/img/open-science/workflow-extensions/air-update-check.png)

開啟 **air-update-notes.md**，核對輸入身份、缺失觀測和保留的 v1 檔案。本次還獨立計算了全部 14 天的均值與有效小時數，與儲存輸出在其顯示精度內一致。

![更新說明保留了程式碼未變、基線檔案與資料檢查資訊](/img/open-science/workflow-extensions/air-update-notes.png)

## 5. 交付前核對報告日期 {/* #5-交付前核对报告日期 */}

檢查報告標題是否跟隨實際輸入範圍變化。初始指令碼在兩週報告中仍保留第一週標題，這個展示錯誤已在 **air-analysis-reviewed.py** 中修正，只改變標題模板。隨後用這一份修訂指令碼分別執行第一週和兩週資料，保留全部舊檔案。

![修正後的報告標題顯示完整兩週日期](/img/open-science/workflow-extensions/air-reviewed-report.png)

儲存的 **air-daily-baseline.csv** 與 **air-daily-updated.csv** 在每個欄位上分別與原 v1/v2 CSV 一致。**air-update-verification.md** 記錄同一修訂指令碼在兩次執行前後的相同雜湊，並核對兩個報告標題，區分了標籤修正和計算方法變化。

下載<ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">修訂後的 Python 指令碼</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">基線 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">更新 CSV</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">逐行比較</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">更新報告</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">核對記錄</ExampleDownload>。使用具有 pandas、NumPy、Matplotlib 的 Python 環境，保留兩份輸入，並指定新字首：

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

本例只描述一個站點的兩週歷史觀測，不用於 AQI 分級、暴露評估或干預因果判斷。若資料不變、希望改用另一種分析方法，見[比較分析方法](compare-methods.md)。
