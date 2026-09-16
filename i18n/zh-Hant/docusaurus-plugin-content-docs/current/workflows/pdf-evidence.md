---
title: "對照圖表和補充材料核查論文論斷"
last_update:
  date: '2026-09-16'
---

# 對照圖表和補充材料核查論文論斷 {/* #对照图表和补充材料核查论文论断 */}

<p className="example-label"><strong>案例演示</strong> 催化劑的 98.9% 效率具體指什麼</p>

一個醒目的數值，只有在指標和實驗條件明確時才有意義。本流程從催化劑論文及其補充材料出發，定位一個論斷的證據，儲存簡短報告，區分原文報告的結果與擴大後的解釋。

**交付結果：** 帶 PDF 頁碼和圖號的英文“論斷、證據、條件、邊界”表。這是來源核查，不是獨立重做實驗。

## 準備原始材料 {/* #准备原始材料 */}

使用 Yang 等人的 [*A universal ligand mediated method for large scale synthesis of transition metal single atom catalysts*](https://www.nature.com/articles/s41467-019-12510-0)，DOI 為 `10.1038/s41467-019-12510-0`。

1. 從出版方頁面下載論文 PDF，再從 **Supplementary information** 下載 **Supplementary Information** PDF，保留為兩個檔案。
2. 在 Open-Science 專案中開啟會話，選擇可用模型。
3. 透過 **+ → Attach files** 附加兩個 PDF。開啟主論文，核對標題和 DOI。本例主論文有 9 頁，補充材料有 52 頁。

確認傳送的請求上方出現**兩個檔名**。點選檔名即可預覽；在主文和補充材料之間切換，核對引用頁碼屬於哪份檔案。

![實際論斷核查請求同時附加主文與補充材料](/img/open-science/research-workflows/catalyst-two-inputs.png)

## 提出具體的證據問題 {/* #提出具体的证据问题 */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

出現提示時，檢查並允許預期的閱讀請求。如果閱讀工具提示頁碼無效或材料無法讀取，可以縮小請求範圍，或自己開啟對應 PDF 頁面。檢索失敗不能證明圖表不存在。

## 開啟被引用的證據 {/* #打开被引用的证据 */}

在 PDF 預覽中，透過頁碼控制元件開啟**第 6 頁**，檢視 **Figure 6** 和相應結果段落，將圖注與正文對照。再開啟補充材料的 **47–49 頁**，檢視 **Figures 51–53**。

![在 Open-Science 中檢視原論文 Figure 6 和實驗條件](/img/open-science/research-workflows/catalyst-figure6-source.png)

原文報告 Ni-SAC-2.5 在相對於 RHE 的 **−1.2 V** 下，生成 CO 的**法拉第效率為 98.9%**。耐久性實驗則使用 **−0.8 V，持續 20 小時**。兩組條件應分開說明：後者不能證明峰值選擇性電位下的 20 小時耐久性。法拉第效率描述分配給某產物的電荷比例，不等於能量效率，也不等於進料 CO₂ 的轉化比例。

補充材料提供了氫氣產物、NMR 和放大製備相關圖表。能讀到圖注，不代表可以提取曲線中的所有數值點，報告應保留這一差別。

跳頁時先展開 PDF 預覽，點選頁碼計數器，輸入完整頁碼並按 **Enter**，確認計數器已跳到目標頁再閱讀。補充材料第 47 頁是 **Supplementary Figure 51**，縱軸為 **H₂ Faradaic efficiency**，不能把它當成主文的 CO 結果。

![實際開啟補充材料第 47/52 頁，核對 Supplementary Figure 51](/img/open-science/research-workflows/catalyst-supplement-47.png)

## 檢查並儲存報告 {/* #检查并保存报告 */}

回答完成後開啟 **catalyst-claim-check.md**，檢查來源身份、頁碼、圖號和結論措辭。尤其要保留“原文報告的結果”這一含義，避免把文獻核查寫成已經完成實驗復現。

![儲存後的論斷、證據、條件與邊界報告](/img/open-science/research-workflows/catalyst-claim-report.png)

可下載<a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>示例報告</a>參考其結構。將科學結論用於自己的工作前，應核對所引原始證據及出版方更正。如需把圖表證據單獨提取為檔案，參見 [PDF 提取](../guides/previews.md#pdf-extraction)。
