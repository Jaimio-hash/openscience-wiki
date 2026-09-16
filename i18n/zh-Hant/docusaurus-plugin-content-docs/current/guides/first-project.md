---
title: "第一個專案與結果"
last_update:
  date: '2026-09-10'
---

# 你的第一個專案與結果 {/* #你的第一个项目与结果 */}

<p className="example-label"><strong>案例演示</strong> 閱讀樣本 QC 表並儲存說明</p>

先開啟一張小表格，再儲存一份說明。本路線使用真實公開基因表達資料計算得到的十二行樣本 QC 表，不需要重新分析完整矩陣，也不需要安裝繪相簿。

<span id="准备输入和环境" />

## 準備模型和示例檔案 {/* #准备模型和示例文件 */}

1. 完成[首次設定](onboarding.md)，確認[模型連線](providers.md)可用。
2. 從[示例資料](../reference/example-data.md#已保存的示例输出)下載**樣本 QC CSV**。
3. 保留下載檔案不變。這是一張派生彙總表；原始矩陣與計算方法在同一示例頁說明。

開啟並總結表格需要可用的 Agent 和模型。只有要求重新計算指標時才需要 Python 或 R；相應步驟見[完整資料質量工作流](../workflows/data-quality.md)。

<span id="创建研究项目" />

## 建立專案 {/* #创建项目 */}

在首頁選擇 **New project**。**Name** 填寫 `Gene-count QC review`，**Description** 填寫 `Review the public sample-QC table and record its interpretation.`。**Agent Context** 填寫 `Preserve the source file. Explain descriptive counts without inferring differential expression.`，然後選擇 **Create project**。

確認會話列表上方出現專案名稱。這些名稱只是示例，你可以改成便於查詢自己研究的名稱。欄位修改和原始檔夾設定見[專案](projects.md)。

<span id="上传并提交明确请求" />

## 附加並檢查表格 {/* #附加并检查表格 */}

1. 新建會話，選擇 **+ → Attach files**，選中下載的 CSV。
2. 等待附件標籤出現，然後開啟預覽。
3. 確認有十二行樣本。檢查完整樣本標識，以及總計數、零計數基因數、檢出基因數和正計數中位數等列。
4. 關閉預覽返回輸入框，保留請求中的附件。

![在應用中開啟樣本 QC 表](/img/open-science/guides-walkthrough/42-rnaseq-table.png)

若預覽為空或列沒有分開，請確認附加的是 CSV，而非下載失敗後儲存的網頁。分隔符與預覽控制元件見[表格](../tools/tables.md)。

<span id="打开并验收输出" />

## 請求儲存說明 {/* #请求保存说明 */}

確認模型後傳送：

```text
读取附加的样本 QC CSV，保存一份简短 Markdown 说明，文件名为
sample-qc-overview.md。分为“表格内容”“指标含义”“下一步检查”三节。
指出样本标识列，并结合附加数据解释各项 QC 指标。保持原文件不变。
不要重新计算基因矩阵、安装软件包或推断差异表达。注明这是一份派生的
描述性汇总。如果无法读取文件，请报告错误，不要猜测内容。
保存后提供报告链接。
```

出現審批時，確認操作針對附加輸入和指定輸出，再批准所需操作；無關請求可以拒絕。等待審批需要你回應；工具呼叫失敗則需要處理錯誤。[輸入框與任務狀態](composer.md)說明了這些狀態的區別。

<span id="继续或排查" />

## 檢查並保留結果 {/* #检查并保留结果 */}

1. 在回答或專案 **Files** 面板中選擇 **sample-qc-overview.md**。
2. 確認包含指定的三節，且列含義與 CSV 一致。特別注意：檢出基因指計數大於零，正計數中位數不包含零計數。
3. 確認報告說明的是彙總表，沒有宣稱得到了新的生物學發現。
4. 如需外部副本，下載報告。重新命名並置頂會話，便於返回。

儲存的報告能夠開啟，且內容與附加表格一致，即完成本次任務。如果回答只有文字而沒有檔案，請要求 Agent 將文字儲存為指定 Markdown 檔案，再開啟檢查。讀取或儲存報錯時，保留錯誤資訊並按[故障排查](troubleshooting.md)處理。

## 繼續分析原始資料 {/* #继续分析原始数据 */}

若要復算表格並生成圖表，請進入[將原始資料變成可復現分析](../workflows/data-quality.md)。該路線補充原始矩陣、Python 依賴、準確的輸出列規範和數值檢查。程式碼與檔案證據的檢視方式見 [Notebook](notebook.md)。
