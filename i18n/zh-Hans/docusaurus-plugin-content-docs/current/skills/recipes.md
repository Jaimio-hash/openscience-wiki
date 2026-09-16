---
title: "Skill 场景配方"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Skill 场景配方

从已有材料和需要做出的判断选择配方。方法保存在 Skill，真实文件保存在项目，验收要求放在对话中。

| 研究场景 | 起点 | Skill 与工具 | 交付物及验收 | 路线与前置条件 |
| --- | --- | --- | --- | --- |
| 判断下载的 RNA-seq 计数表是否可进入分析 | 原始计数与来源编号 | rnaseq-count-qc、Python/R Notebook | 结构报告、样本指标、完整 ID 与未变输入哈希 | 本地 Notebook 示例；需启用 Python/R |
| 核对两种语言实现的 QC 是否一致 | Python 与 R 的 CSV | Notebook 与 QC 规则 | 按完整 ID 比较；GSE60450 已核对 48 个指标值 | 本地 Notebook 示例；需启用 Python/R |
| 分享前请另一个角色检查结果 | 完整 QC 表与明确约束 | RNA-seq QC Reviewer | 独立子任务记录与 12 个样本求和；注明内联输入或原文件访问 | 内联表格示例；需启用 Specialist 和 Python |
| 为新课题准备阅读清单 | 具体问题和种子 DOI/PMID | Literature Review 与数据库工具 | 真实检索 ID、纳入理由与全文缺口 | PRISMA 集合示例；需可用文献 Connector |
| 为定义明确的患者群体整理研究报告 | 群体、适应证、范围 | Indication Dossier 与研究来源 | 带日期的证据、阶段文件与未支持的主张 | 可选方法；需准备列出的输入及该方法依赖 |
| 将探索图整理为报告用图 | 已验证数据与具体主张 | Figure Style | 重开检查单位、标签、图注和数据来源 | 可选方法；需准备列出的输入及该方法依赖 |
| 组织一张多面板结果图 | 主张及不可变数据版本 | Figure Composer + Figure Style | 面板规划、合成图与复核；从 Main Agent 运行 | 可选方法；需准备列出的输入及该方法依赖 |
| 检查整套图能否支撑论文 | 稿件、图注与完整图组 | Paper Narrative | 图组论证顺序与证据缺口，不虚构实验 | 可选方法；需准备列出的输入及该方法依赖 |
| 解决 Notebook 缺包 | 准确错误与所选环境 | Environment & Packages | 版本检查、可行时托管安装及重启导入验证 | 可选方法；需准备列出的输入及该方法依赖 |
| 为重复远程任务准备环境 | 现有 SSH/Slurm 主机与包需求 | Compute Environment Setup + Remote Compute | 命名环境与验证记录，主机环境由用户/管理员维护 | Direct SSH 见远程计算；Slurm 需记账能力 |
| 比较蛋白结构预测 | 合法序列或复合物定义 | AlphaFold2、Boltz、Chai-1、ESMFold2、OpenFold3 | 结构、置信度、输入对应；需准备权重和 GPU | 可选方法；需准备列出的输入及该方法依赖 |
| 保留固定残基重设计骨架 | PDB、链映射与约束 | ProteinMPNN / LigandMPNN / SolubleMPNN | 序列与链对应、约束检查；按方法支持 CPU | 小型 ProteinMPNN CLI 示例；其他方法需单独准备 |
| 整合单细胞批次 | AnnData、批次标签和原始计数 | scvi-tools 或 scGPT | 核对细胞/基因 ID 与模型结果；不直接用于 bulk 计数 | 可选方法；需准备列出的输入及该方法依赖 |

## 复现本地 RNA-seq 配方

<p className="example-label"><strong>案例演示</strong> 执行并检查 RNA-seq 原始计数 QC</p>

1. 使用真实 [GSE60450 输入及 QC 表](../reference/example-data.md)。
2. 创建或导入 [rnaseq-count-qc](./create.md)。
3. 使用[调用示例](./overview.md)发出范围明确的请求。
4. 打开实际<ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">校验报告</ExampleDownload>，核对 27,179 个基因与 12 个样本；不要把预览行上限当成完整维度。
5. 需要另一角色检查时，按[委派与验证](../specialists/delegate.md)操作并阅读真实子任务记录。

## 明确完成条件

请求应包含来源、方法、输出文件和检查方式，例如：

> Use the existing GSE60450 sample-QC CSV to make a report figure with Figure Style. Keep full sample IDs in the companion table, label raw count units, preserve the source, save a new figure, and reopen it to inspect all labels. Report any unavailable dependency before changing the method.

按表中的前置条件选择配方，并在保存后检查交付物。方法指引本身不会安装外部软件、取得服务凭据或完成科学验证。

实现依据: [manifest.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md)。

适用的长时间运行操作见[后台任务与结果送达](../guides/notebook.md)。结果送达后检查实际运行和保存输出。Environment & Packages、Compute Environment Setup、Remote Compute (SSH) 保持启用，但运行时、网络和主机要求仍然有效。
