---
title: "科學檢視器"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 科學檢視器 {/* #科学查看器 */}

從附件、結果卡或 Files 開啟檔案，應用按副檔名選擇渲染器。預覽展示已有內容，不執行科學預測，也不能證明結果正確。

## 檢查真實 PDB 結構 {/* #检查真实-pdb-结构 */}

<p className="example-label"><strong>案例演示</strong> 檢視 1UBQ 結構</p>

本例使用原始 [RCSB 1UBQ 泛素結構](https://www.rcsb.org/structure/1UBQ)，可下載 <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb</ExampleDownload>，原生介面顯示 **660 atoms**。

1. 開啟 PDB 附件，再進入 **Open full screen preview**。
2. 切換 **Cartoon、Stick、Sphere、Surface、Line** 檢視不同表示。
3. 按畫布提示拖動旋轉、滾動縮放、**Shift + 拖動**平移。
4. 按需下載原檔案，關閉全屏返回對話。

![實際 1UBQ Cartoon 檢視](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.jpg)

| 樣式 | 重點 |
| --- | --- |
| Cartoon | 聚合物骨架/二級結構；缺少合適聚合物原子的檔案可能不可用 |
| Stick | 化學鍵和區域性幾何 |
| Sphere | 以原子為中心的球體 |
| Surface | 分子表面 |
| Line | 簡化的鍵線表示 |

表示方式控制元件改變繪製效果，保留原座標。檢查缺失殘基或預測置信度時，應核對結構檔案和對應後設資料。

## 閱讀 FASTA {/* #阅读-fasta */}

<p className="example-label"><strong>案例演示</strong> 閱讀 P04637 蛋白序列</p>

開啟從 [UniProt FASTA 介面](https://rest.uniprot.org/uniprotkb/P04637.fasta)下載的 <ExampleDownload path="/examples/capabilities/P04637.fa">P04637 FASTA</ExampleDownload>，核對 `>` 標題中的編號、物種、基因及後續序列。原生介面保留源文字，不是序列比對或編輯軟體。

![實際 UniProt FASTA 源文字預覽](/img/open-science/capabilities-walkthrough/31-fasta-preview.jpg)

要在對話中使用序列，透過 **+ → Attach files** 附加當前檔案，並要求 Agent 讀取檔案，而不是根據檔名推斷。本例 P04637 輸入可核對 `P53_HUMAN` 標題、**393 個氨基酸**和起始序列 **MEEPQSDPSV**。需要確認檔案身份時，再比較返回的校驗值與提供的原始檔。

模型請求若返回 **Managed file or its Session is deleted**，在普通訊息中重新附加當前檔案後重試。仍失敗時，保留錯誤並按[故障排查](../guides/troubleshooting.md)反饋。預覽正常不代表模型輸入引用仍然有效。

## 檢視小分子 {/* #查看小分子 */}

<p className="example-label"><strong>案例演示</strong> 從 SMILES 渲染阿司匹林</p>

請求 Molecule Connector 使用 `preview_molecule`，輸入 `smiles: "CC(=O)Oc1ccccc1C(=O)O"`、`filename: "aspirin"`。開啟生成的 **aspirin.mol** 卡片和全屏。

![內建 OpenChemLib 渲染的阿司匹林](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.jpg)

本例返回合法結構、**C9H8O4**、分子量 **180.15852**、**13 個重原子**，儲存了 <ExampleDownload path="/examples/capabilities/aspirin.mol">aspirin.mol</ExampleDownload>，並已人工開啟檢查。這是離線結構渲染，不預測結合親和力、對接姿勢或藥效。

## 選擇科學格式檢視器 {/* #选择科学格式查看器 */}

| 輸入 | 檢查內容 |
| --- | --- |
| PDB | 已解析原子、可用表示方式與原始座標 |
| MOL/SDF/SMILES/RXN | 結構或反應渲染；無效或截斷內容可能失敗 |
| FASTA 及相關序列檔案 | 原始標題、序列標識與範圍 |
| H5AD/H5 等分析二進位制容器 | 使用相容分析庫；普通文字預覽不能解碼容器 |

通用工具欄和 PDF、Office、影象、源文字閱讀見[預覽](../guides/previews.md)。資料解釋見[表格](tables.md)，準確副檔名與範圍見[檔案格式](../reference/formats.md)。

## 預覽失敗 {/* #预览失败 */}

核對原始檔案與渲染器的準確錯誤。結構缺少合適的聚合物原子時可能不提供 Cartoon，切換表示方式不能補回缺失座標。嘗試外部檢視器時保留原始位元組。預覽成功不代表模型能讀取附件，也不代表預測程式已安裝。
