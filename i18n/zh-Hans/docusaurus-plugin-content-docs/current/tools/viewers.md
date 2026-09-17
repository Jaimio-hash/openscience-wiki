---
title: "科学查看器"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 科学查看器

从附件、结果卡或 Files 打开文件，应用按扩展名选择渲染器。预览展示已有内容，不执行科学预测，也不能证明结果正确。

## 检查真实 PDB 结构

<p className="example-label"><strong>案例演示</strong> 查看 1UBQ 结构</p>

本例使用原始 [RCSB 1UBQ 泛素结构](https://www.rcsb.org/structure/1UBQ)，可下载 <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb</ExampleDownload>，原生界面显示 **660 atoms**。

1. 打开 PDB 附件，再进入 **Open full screen preview**。
2. 切换 **Cartoon、Stick、Sphere、Surface、Line** 查看不同表示。
3. 按画布提示拖动旋转、滚动缩放、**Shift + 拖动**平移。
4. 按需下载原文件，关闭全屏返回对话。

![实际 1UBQ Cartoon 视图](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.webp)

| 样式 | 重点 |
| --- | --- |
| Cartoon | 聚合物骨架/二级结构；缺少合适聚合物原子的文件可能不可用 |
| Stick | 化学键和局部几何 |
| Sphere | 以原子为中心的球体 |
| Surface | 分子表面 |
| Line | 简化的键线表示 |

表示方式控件改变绘制效果，保留原坐标。检查缺失残基或预测置信度时，应核对结构文件和对应元数据。

## 阅读 FASTA

<p className="example-label"><strong>案例演示</strong> 阅读 P04637 蛋白序列</p>

打开从 [UniProt FASTA 接口](https://rest.uniprot.org/uniprotkb/P04637.fasta)下载的 <ExampleDownload path="/examples/capabilities/P04637.fa">P04637 FASTA</ExampleDownload>，核对 `>` 标题中的编号、物种、基因及后续序列。原生界面保留源文本，不是序列比对或编辑软件。

![实际 UniProt FASTA 源文本预览](/img/open-science/capabilities-walkthrough/31-fasta-preview.webp)

要在对话中使用序列，通过 **+ → Attach files** 附加当前文件，并要求 Agent 读取文件，而不是根据文件名推断。本例 P04637 输入可核对 `P53_HUMAN` 标题、**393 个氨基酸**和起始序列 **MEEPQSDPSV**。需要确认文件身份时，再比较返回的校验值与提供的源文件。

模型请求若返回 **Managed file or its Session is deleted**，在普通消息中重新附加当前文件后重试。仍失败时，保留错误并按[故障排查](../guides/troubleshooting.md)反馈。预览正常不代表模型输入引用仍然有效。

## 查看小分子

<p className="example-label"><strong>案例演示</strong> 从 SMILES 渲染阿司匹林</p>

请求 Molecule Connector 使用 `preview_molecule`，输入 `smiles: "CC(=O)Oc1ccccc1C(=O)O"`、`filename: "aspirin"`。打开生成的 **aspirin.mol** 卡片和全屏。

![内置 OpenChemLib 渲染的阿司匹林](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.webp)

本例返回合法结构、**C9H8O4**、分子量 **180.15852**、**13 个重原子**，保存了 <ExampleDownload path="/examples/capabilities/aspirin.mol">aspirin.mol</ExampleDownload>，并已人工打开检查。这是离线结构渲染，不预测结合亲和力、对接姿势或药效。

## 选择科学格式查看器

| 输入 | 检查内容 |
| --- | --- |
| PDB | 已解析原子、可用表示方式与原始坐标 |
| MOL/SDF/SMILES/RXN | 结构或反应渲染；无效或截断内容可能失败 |
| FASTA 及相关序列文件 | 原始标题、序列标识与范围 |
| H5AD/H5 等分析二进制容器 | 使用兼容分析库；普通文本预览不能解码容器 |

通用工具栏和 PDF、Office、图像、源文本阅读见[预览](../guides/previews.md)。数据解释见[表格](tables.md)，准确扩展名与范围见[文件格式](../reference/formats.md)。

## 预览失败

核对原始文件与渲染器的准确错误。结构缺少合适的聚合物原子时可能不提供 Cartoon，切换表示方式不能补回缺失坐标。尝试外部查看器时保留原始字节。预览成功不代表模型能读取附件，也不代表预测程序已安装。
