---
title: "科学ツール"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 科学ツール {/* #scientific-tools */}

実際の入力と実行環境が明確になった後にのみ、科学的計算を実行します。 方法およびその依存関係に応じて、ローカルNotebook、Connectorまたは外部ランナーを選択します。

## 計算が実行される場所を選択します。 {/* #choose-where-the-calculation-runs */}

| 交通アクセス | 適した仕事 | レディネスチェック |
| --- | --- | --- |
| PythonセッションNotebook | データ解析、数値集計、プロット | Bound Pythonランタイムとインストールパッケージ |
| RセッションNotebook | R解析とパッケージ | R のランタイムをこのセッションに有効化 |
| 作り付け Connector | データベースの検索またはサポートされた決定的な操作 | エージェント、資格情報/ネットワークに必要とされるConnectorが利用可能 |
| リモート・コンピューティング | ホスト固有のソフトウェア、GPUまたはバッチジョブ | 適格に有効なホスト、環境およびスケジューラ |

シェルコマンドは、セッションNotebook実行と交換できません。ランタイム、マウントされたインプット、および実証は異なる可能性があります。 意図したルートを明示的に要求します。

## パッケージと依存関係 {/* #packages-and-dependencies */}

| ステップステップ | 何をすべきか | 成功の結果 |
| --- | --- | --- |
| インスペクト | お問い合わせ `inspect_packages` 意図した言語/ランタイムで | ステータスとバージョンのインストール/終了 |
| インストール | サポートされる使用 `manage_packages` 境界環境の流れ | 「インストール開始」だけでなく、インストーラの出力が完了しました |
| 再起動 | アプリが要求する場合、カーネルを再始動/リバインドする | 次のセルは、更新された環境を使用します |
| 検証 | 同じNotebookのパッケージを輸入して下さい | 実際のバージョンと小規模な作業操作 |

パッケージのインストールが HTTP CONNECT 403 を返す場合、 再試行する前に、影響を受けるパッケージのホスト名と [ネットワーク設定](../guides/network.md) を確認してください。 必要な方法をサポートする場合にのみ、既存のパッケージを使用します。 成功した計算は、失敗したパッケージのインストールが修復されたという意味ではありません。

## ローカルRNA-seq計算を実行し、検証する {/* #execute-and-verify-a-local-rna-seq-calculation */}

<p className="example-label"><strong>実践例</strong> GSE60450行列のサンプルレベルのカウントをチェックする</p>

1. [GSE60450入力](../reference/example-data.md) を添付します。
2. Python または R Notebook のランタイムを選択します。 何もインストールする前にバージョンを調べます。
3. フルマトリックス寸法とカウントインテグレーションチェックを要求します。 サンプル列から`EntrezGeneID`と`Length`を除外します。
4. 全数、ゼロカウント遺伝子、検出遺伝子、および各全サンプルIDの検出遺伝子間でのメディアを計算します。
5. 新しいCSV、チャート、メソッドレポートを保存します。 ソースは変更されず、SHA-256前後を比較します。
6. すべての出力を再開します。 サンプルカウント、ラベル、値のクロスチェック 実際のNotebookコードとログを調べます。

出力識別子とメトリックを [ベースライン例](../reference/example-data.md) と比較します。 未加工入力は変更されません保って下さい。 記述的なカウントは正規化式、差動式または臨床結論を確立しません。

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">R/Python 比較</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Skill 検証</ExampleDownload>.

## CPU上で小さなタンパク質シーケンスを設計する {/* #design-a-small-protein-sequence-on-cpu */}

<p className="example-label"><strong>実践例</strong> 1UBQバックボーンの設計候補のシーケンス</p>

このルートは、ヒトのubiquitin、PDB 1UBQチェーンAで**公式プロテインMPNN CLI**を実行します。 バニラと可溶性のチェックポイントでそれぞれ1つの候補を生成します。 既存のバックボーンに調節された逆折計算です。

### ランナーと重量を準備する {/* #prepare-the-runner-and-weights */}

`venv`とピップ、Git、インターネットアクセス、書き込み可能なフォルダを操作して、サポートされているPythonを使用してください。 以下のコマンドは、macOS/Linux シェルの対象となります。 Windows では、対応する `.venv\Scripts\python.exe` を使用し、シェルの構文を使って `CUDA_VISIBLE_DEVICES` を設定できます。

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

ピン留めされたチェックアウトは`vanilla_model_weights/v_48_020.pt`および`soluble_model_weights/v_48_020.pt`を含んでいます; ファイルが存在することを確認します。 <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ入力</ExampleDownload>を`protein-design`に`1UBQ.pdb`としてダウンロードします。 シーケンス入力を出力フォルダから分離します。

この設定では、外部の仮想環境にパッケージをインストールします。 pip が互換性のない配布を報告しない場合は、再試行する前に、利用可能な PyTorch ホイールでサポートされている Python バージョンを選択します。 レコード`environment.txt`; Python、PyTorch、NumPy の変更は数値出力を変更することがあります。 古い仮想環境がシステム更新後にベースインタプリタが見つからなくなった場合、現在の互換性のあるPythonで再作成します。

### 両方のモデルを実行し、出力を保存します {/* #run-both-models-and-save-their-outputs */}

`protein-design`から実行します。

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

どちらのコマンドもチェーンA、シーケンス1、温度0.1、シード42を使用します。 CUDA デバイスの可視性をクリアすると、このランナーは CPU を使用します。 `outputs/vanilla/seqs/1UBQ.fa`および`outputs/soluble/seqs/1UBQ.fa`を期待して下さい; それらをインポートまたは公開するときに名前を別々に保つ.

Open-Science で実行するには、**Your files → Grant folder…** を使用して準備されたフォルダーを付与し、エージェントが環境の **絶対 Python パス** およびその作業ディレクトリでこれらのコマンドを実行するように要求します。 承認でコマンドとスコープを調べます。 2つのFASTAと比較報告書を公開し、**Files**で3つすべてを再開するように依頼してください。 作業ディレクトリに残っているファイルがまだ出版物を必要としています。

:::caution&#91;Skillパッケージロード&#93; 組み込みモデル Skill がパッケージパス検証に失敗した場合、[トラブルシューティング](../guides/troubleshooting.md) によるエラーを報告します。 上記CLIのルートは別の方法のままです。 CLI の実行成功は、ネイティブ Skill の読み込み作業を確立しません。 :::

### 設計されているシーケンスをチェックする {/* #check-the-designed-sequences */}

![ローカルCPUの実行が完了し、比較レポートを再オープン](/img/open-science/local-todo-batch/42-cpu-model-comparison.png)

この例の保存された出力には、次の結果が含まれています。

| 出力 | 設計された残余 | スコア | ネイティブに対する回復 |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">プロテインMPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">SolubleMPNNのFASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

各FASTAは、最初にネイティブシーケンスを**2つのレコード**に、単一の設計候補を格納します。 独立したチェックは、正式なアミノ酸、レコードごとの76残余、有限スコア、直接補充された回復および変更されていないPDB SHA-256を確認します。 保存されたアーティファクトバイトは、ランナーの出力にマッチしました。 <ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">比較レポート</ExampleDownload> は設定と制限を記録します。 この1つの候補者の比較から得点は、モデルがより良い折りたたみ、容解性または機能をもたらすかを確立しません。

## 失敗段階による診断 {/* #diagnose-by-the-failing-stage */}

| シンプトム | 次の検証 |
| --- | --- |
| 稼働時間なし / R 利用不可 | 通訳者のインストールまたは有効化 [ランタイム](../guides/runtimes.md)それからそれを結合して下さい。 |
| ImportError/ moduleNotFoundError/呼び出されるパッケージ無し | 選択された環境を点検し、管理されたパッケージの取付けを使用します。 |
| 未知の Skill/無効なカーネルヘルパー | 実際の呼び出し可能なNotebookヘルパーからメソッドパッケージを区別します。 |
| 入力バージョンが見つかりません/ファイルが見つかりません | アプリケーションを通して正確な現在の入力を解決して下さい; パスを推測しません。 |
| ネットワーク/HTTP 障害 | ホスト、操作、実際のステータスを保持します。 使用方法 [ネットワーク制御](../guides/network.md) そして、 [エラーガイダンス](../guides/troubleshooting.md). |
| 出力は、作業ディレクトリにのみ存在する | サポートされているアーティファクトのルートで公開し、保存されたバージョンを再オープンします。 |
| 生産者ブロック・部分環境なし | 制限値を保持する。 欠落した証拠を製造しないでください。 |

リモートジョブでは、ホストの信頼性、送信、ステータス、収穫された出力を個別に検査します。 [Direct SSH RNA-seqの例](../guides/remote-compute.md)が完成し、その出力は独立してチェックされていました。 Slurmターミナル監視では、読み取り可能な会計が必要です。 同じ章では、独立したCUDA環境と独立した出力チェックで、検証済みのA100 ProteinMPNNを実行します。 CPU 対応のメソッドは別々に評価可能です。

[背景タスクと結果配信](../guides/notebook.md#background-tasks-and-result-delivery) をフォローして、長時間の作業に対応しました。 納品後、実際の実行と保存した出力を調べます。 環境とパッケージ、環境設定とリモートコンピューティング(SSH)が有効になっていますが、ランタイム、ネットワーク、ホストの要件も適用されます。

実装参照: [ノートパソコン](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts)、[SKILL.mdの特長](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md)、[SKILL.mdの特長](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md)。
