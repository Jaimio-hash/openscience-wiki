---
title: "根據反饋修訂研究報告"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 根據反饋修訂研究報告 {/* #根据反馈修订研究报告 */}

<p className="example-label"><strong>案例演示</strong> 按六條編輯意見修訂單原子催化簡報</p>

修訂報告時，應讓原始證據、初稿和意見回覆相互對應。本例先根據真實催化論文生成英文簡報，再保留初稿並修訂。六條意見是為本教程編寫的練習材料，不是期刊或論文作者的來信。

## 1. 附加論文並生成初稿 {/* #1-附加论文并生成初稿 */}

開啟 [Yang 等，2019](https://doi.org/10.1038/s41467-019-12510-0)，從出版方頁面下載正文 PDF 和 Supplementary Information，在專案會話中透過 **+ → Attach files** 附加兩份檔案。本次檔案分別為 **9 頁和 52 頁**。下文頁碼均指 PDF 頁序，不是期刊印刷頁碼。

選擇可用模型，傳送：

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Open-Science 中附加的來源 PDF 與初稿任務](/img/open-science/workflow-extensions/report-input.webp)

出現授權時檢查並允許相關檔案讀取。在 **Generated** 或 **Files** 中開啟 **catalyst-brief-v1.md**，閱讀實際儲存的初稿。會話中的回答不能代替對檔案內容的檢查。

![編輯修訂前已儲存的第一版簡報](/img/open-science/workflow-extensions/report-draft.webp)

## 2. 把反饋寫成可落實的修改要求 {/* #2-把反馈写成可落实的修改要求 */}

下載<ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">六條編輯意見</ExampleDownload>，附加到同一會話。它們要求：

| 意見 | 修改要求 |
| --- | --- |
| C1 | 執行摘要不超過 120 個英文單詞 |
| C2 | 用兩行表格區分兩個實驗工作點 |
| C3 | “未提供”的判斷限定在實際檢查的證據範圍 |
| C4 | 補三項後續驗證建議，明確尚未執行 |
| C5 | 寫清 Main PDF / Supplementary PDF 頁碼和圖號 |
| C6 | 單獨儲存 v2 和意見回覆，保留 v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

本次實際讀取了意見附件，並生成修訂稿與逐條回覆兩類檔案。若代理提出了證據無法支援的修改，應指出具體論斷及需要核對的原文位置，再繼續修訂。

## 3. 閱讀修訂後的證據，不只看回復狀態 {/* #3-阅读修订后的证据不只看回复状态 */}

開啟 **catalyst-brief-v2.md**。本例得到 **117 詞摘要**、區分兩個工作點的兩行表格，以及三項明確標為建議的後續驗證。

![修訂後的摘要與區分選擇性和穩定性測試的表格](/img/open-science/workflow-extensions/report-revised.webp)

關鍵區別是：**−1.2 V vs RHE 下 CO 法拉第效率為 98.9%**；另一項測試是在 **−0.8 V vs RHE 下觀察 20 小時電流保持情況**。不能合併成“98.9% 持續 20 小時”。正文 PDF 第 6 頁 Fig. 6b–d、第 7 頁 Fig. 6e 對應這些證據，第 8 頁介紹 H 型電解池測量；補充 PDF 第 47—48 頁 Figs. 51–52 對應氫氣選擇性和 NMR 產物檢查。

本次代理讀到了全文段落和圖注，但關聯圖形元素快取不可用，無法直接檢視對應影象。意見回覆保留了這一說明。“電流僅略有下降”來自作者文字，本次沒有從曲線提取新的數值。需要直接檢查圖形時，參見[核對 PDF 論斷與圖表](pdf-evidence.md)。

## 4. 核對回覆並交付各版本 {/* #4-核对回复并交付各版本 */}

開啟 **catalyst-brief-v2-response.md**，逐條找到 C1—C6，返回它指向的修訂段落，確認承諾的修改確實存在。僅有“Resolved”標籤不能作為完成依據。

![實際儲存的回覆表將六條意見對應到修訂位置](/img/open-science/workflow-extensions/report-response.webp)

檢查建議仍標為建議，DOI 仍為 **10.1038/s41467-019-12510-0**，且 **catalyst-brief-v1.md** 保留未改。無法取得的證據應繼續寫在回覆中。

下載本次<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 初稿</ExampleDownload>、<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 簡報</ExampleDownload>和<ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">逐條回覆</ExampleDownload>，與意見檔案及出版方連結一起儲存。初稿用於比較，不應作為最終審閱後的簡報使用。
