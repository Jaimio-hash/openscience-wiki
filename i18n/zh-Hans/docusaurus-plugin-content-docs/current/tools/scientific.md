---
title: "科学工具的执行与验收"
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 科学工具的执行与验收

先明确实际输入和运行环境，再执行计算。本例使用真实 GSE60450 计数及已有包，可在本地复现。

## 选择执行位置

| 路径 | 适用工作 | 就绪检查 |
| --- | --- | --- |
| Python Session Notebook | 数据解析、数值汇总、绘图 | 当前绑定 Python 与已安装包 |
| R Session Notebook | R 分析及包 | 已启用并绑定到会话的 R |
| 内置 Connector | 数据检索或受支持确定性操作 | Agent 可访问，具备凭据/网络 |
| Remote Compute | 主机软件、GPU、批处理 | 已启用主机、环境、调度器 |

Shell 与 Session Notebook 的环境、输入挂载和溯源不同，应明确要求执行路径。

## 包与依赖

| 步骤 | 操作 | 成功标准 |
| --- | --- | --- |
| 检查 | 在正确语言/环境使用 `inspect_packages` | 实际安装状态和版本 |
| 安装 | 使用当前环境支持的 `manage_packages` | 安装完成输出，不只是已开始 |
| 重启 | 应用要求时重启或重新绑定内核 | 下一单元使用更新环境 |
| 验证 | 在同一 Notebook 导入 | 真实版本和小范围操作成功 |

安装软件包返回 HTTP CONNECT 403 时，先检查受影响域名及[网络设置](../guides/network.md)，再重试。只有已有软件包能够完成所需方法时才使用它；计算成功不代表失败的包安装已经修复。

## 运行并核验本地 RNA-seq

<p className="example-label"><strong>案例演示</strong> 检查 GSE60450 矩阵的样本计数</p>

1. 附加 [GSE60450 输入](../reference/example-data.md)。
2. 选择 Python 或 R Notebook，安装前检查版本。
3. 检查完整矩阵维度与计数完整性，将 `EntrezGeneID`、`Length` 从样本列中排除。
4. 按完整样本 ID 计算总计数、零计数基因、检出基因、检出基因中位数。
5. 保存新 CSV、图和方法报告，比较源文件前后 SHA-256。
6. 重开全部输出检查样本数、标签、指标，并阅读 Notebook 代码及日志。

将输出标识与指标和[示例基准](../reference/example-data.md)比较，保留原始输入不变。描述性计数不能证明归一化表达、差异表达或临床结论。

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">R/Python 对照</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Skill 校验</ExampleDownload>。

<span id="在本地-cpu-上设计小型蛋白序列" />

## 在 CPU 上设计一个小型蛋白序列

<p className="example-label"><strong>案例演示</strong> 为 1UBQ 骨架设计候选序列</p>

本路线通过**官方 ProteinMPNN CLI**，以人泛素 PDB 1UBQ 的 A 链为输入，分别使用 vanilla 和 soluble 权重生成一个候选。这是依赖已有骨架的逆折叠计算。

### 准备程序和权重

需要带可用 `venv`、pip 的受支持 Python、Git、网络和可写文件夹。以下为 macOS/Linux shell 命令；Windows 使用相应的 `.venv\Scripts\python.exe`，并按所用 shell 语法设置 `CUDA_VISIBLE_DEVICES`。

```bash
mkdir protein-design
cd protein-design
git clone https://github.com/dauparas/ProteinMPNN.git
git -C ProteinMPNN checkout 8907e6671bfbfc92303b5f79c4b5e6ce47cdef57
python3 -m venv .venv
.venv/bin/python -m pip install torch numpy
.venv/bin/python -c "import sys, torch, numpy; print(sys.version); print(torch.__version__, numpy.__version__)"
.venv/bin/python -m pip freeze > environment.txt
```

固定提交中包含 `vanilla_model_weights/v_48_020.pt` 和 `soluble_model_weights/v_48_020.pt`，请确认两者存在。将 <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ 输入</ExampleDownload> 下载到 `protein-design`，命名为 `1UBQ.pdb`，与输出文件夹分开保留。

这一步在外部虚拟环境中安装依赖。若 pip 提示没有兼容发行包，先选择可用 PyTorch wheel 支持的 Python 版本。保存 `environment.txt`；更换 Python、PyTorch 或 NumPy 可能改变数值结果。系统更新后，旧虚拟环境若找不到原始解释器，应使用当前兼容 Python 重建。

### 运行两个模型并保存结果

在 `protein-design` 中运行：

```bash
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --num_seq_per_target 1 --batch_size 1 --sampling_temp 0.1 --seed 42 \
  --out_folder outputs/vanilla
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --use_soluble_model --num_seq_per_target 1 --batch_size 1 \
  --sampling_temp 0.1 --seed 42 --out_folder outputs/soluble
```

两条命令均使用 A 链、一个候选、温度 0.1、种子 42。清空 CUDA 设备可见性使该程序使用 CPU。预期文件为 `outputs/vanilla/seqs/1UBQ.fa` 和 `outputs/soluble/seqs/1UBQ.fa`；导入或发布时应保留各自模型身份。

在 Open-Science 中执行时，先通过 **Your files → Grant folder…** 授权准备好的文件夹，再要求 Agent 使用该环境的 **Python 绝对路径**和上述工作目录执行。审批时检查命令与范围。要求将两个 FASTA 和比较报告发布为产物，再从 **Files** 打开三个文件。只在工作目录中存在的文件仍需发布。

:::caution[Skill 包加载]
若内置模型 Skill 因包路径验证失败而无法加载，请按[故障排查](../guides/troubleshooting.md)反馈。上述 CLI 是独立路线；CLI 成功不代表原生 Skill 加载已恢复。
:::

### 检查设计序列

![CPU 实际运行结果与重开的对比报告](/img/open-science/local-todo-batch/42-cpu-model-comparison.webp)

本例保存的输出结果如下：

| 输出 | 候选残基数 | 分数 | 相对原生序列的恢复率 |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">ProteinMPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">SolubleMPNN FASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

每个 FASTA 有**两条记录**，第一条是原生序列，第二条才是单个设计候选。独立核对确认每条 76 个标准氨基酸、分数有限、逐位重算恢复率一致、PDB 输入 SHA-256 不变，托管产出与程序输出字节一致。<ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">对比报告</ExampleDownload>保留参数和限制。一次、每模型一个候选的分数不能证明哪个模型的折叠、溶解性或功能更好。

## 按失败阶段排错

| 现象 | 下一步 |
| --- | --- |
| 无运行环境 / R 不可用 | 在[运行环境](../guides/runtimes.md)安装或启用后绑定 |
| ImportError / ModuleNotFoundError / no package called | 核对环境并使用托管包管理 |
| Unknown Skill / 内核辅助函数无效 | 区分方法指令和真正可调用的 Notebook 函数 |
| 输入版本不可用 / 文件不存在 | 通过应用解析当前准确输入，不猜路径 |
| 网络或 HTTP 错误 | 保留主机、操作与状态，参见[网络控制](../guides/network.md)和[错误说明](../guides/troubleshooting.md) |
| 输出只在工作目录 | 使用支持的结果发布，再重开保存版本 |
| 无生产代码 / 环境部分记录 | 保留限制，不编造证据 |

远程任务应分别验证主机、提交、状态和结果收集。[Direct SSH RNA-seq 示例](../guides/remote-compute.md)已完成并独立核对结果。Slurm 终态监控需要可读取的记账查询，[远程计算](../guides/remote-compute.md)还记录了使用独立 CUDA 环境在 A100 上完成的 ProteinMPNN 推理及输出核对。支持 CPU 的方法需单独评估。

实现依据: [notebook.ts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md)。

适用的长时间运行操作见[后台任务与结果送达](../guides/notebook.md)。结果送达后检查实际运行和保存输出。Environment & Packages、Compute Environment Setup、Remote Compute (SSH) 保持启用，但运行时、网络和主机要求仍然有效。
