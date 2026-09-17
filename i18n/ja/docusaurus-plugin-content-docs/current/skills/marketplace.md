---
title: "Skill マーケットプレイス"
description: "Skill市場からの研究方法を発見、インストール、更新、管理します。"
last_update:
  date: '2026-09-16'
---

# Skill マーケットプレイス {/* #skill-marketplace */}

**Settings → Skills → Browse Marketplace**を使用して、リポジトリを自分で配置し、インポートすることなく、研究方法を見つけてインストールします。 インストールする前に、メソッドを調べて、準備が整ったらどの方法を使って更新を適用するかを選択します。

ZIP、ローカルSkill、または特定のGitHubリポジトリに持ち込むには、[Skill インポートと管理](manage.md)を使用します。 研究方法とその入力の概要については、[Skillディレクトリ](directory.md)を参照してください。

![検索、カテゴリフィルタ、インストールボタン付きSkillマーケットプレイス](/img/open-science/feature-guides-2026-09/marketplace-browse.webp)

## 適切な方法を見つける {/* #find-a-suitable-method */}

1. **Marketplace** を開き、カテゴリ別に検索またはフィルタリングします。
2. Skillの詳細情報を開き、その目的、著者、ソース、ライセンス情報、および任意の評価の詳細をお読みください。
3. インストールする前に、インプット、必要なツール、ランタイムの依存関係をプロジェクトと比較します。

カタログの署名により、配布アイデンティティが確認されます。 方法があなたの研究の質問に適するか、またはあなたのコンピュータにその依存関係があることを確立しません。

![マーケットプレースSkillの詳細は、著者、バージョン、ライセンス、インストールアクションを示します。](/img/open-science/feature-guides-2026-09/marketplace-detail.webp)

## Skillのインストールと使用 {/* #install-and-use-a-skill */}

1. 選択したカードで**Install**を選択し、**Installed**を待ちます。
2. インストールしたSkillを開き、Mainまたは意図したSpecialistの可用性を確認します。
3. Skillの要件を満たす入力を用意し、境界タスクで使用します。
4. 生成されたファイルを開き、リクエストに対して結果を確認します。 インストールだけでは、研究が成功したことは確立しません。

Skillを会話で選択するには、[Skillsの使用](overview.md)を参照してください。 [Skillsおよびコネクター](../specialists/capabilities.md) で Specialist のメソッドを構成します。

## Skillsをインストールまたは更新する {/* #install-or-update-several-skills */}

1. **Batch manage**、**Not installed**、**Updates**を選択します。
2. カタログをフィルタリングし、意図したエントリを選択します。 **フィルタされた結果をすべて選択** は、フィルタのフル結果セットを選択します。
3. **Review selection** を開き、**Install selected** または **Update selected** を選択する前にリストを確認してください。
4. 各結果を終えて点検する作業をお待ちください。 インストールは順次実行されます。 停止すると、現在の項目が終了します。
5. 失敗したか、エントリを中止し、必要なものだけを再試行します。

## 方法の更新または削除 {/* #update-or-remove-a-method */}

アップデートが利用可能になったら、確認する前に**スキルの更新を確認**を開きます。 古いバージョンや新しいバージョン、影響を受けたスペシャリスト、ファイルを追加、変更または削除することを確認します。 線番号、赤色削除、緑の追加を示します。 バイナリ、特大または未読の比較については、リストされたファイルの変更を使用してください。 未使用の diff は、ファイルが変更されていないという意味ではありません。

ダイアログがローカルの編集を報告する場合、更新はそれらを置き換えます。 [コピーをエクスポートする](manage.md) は、それらを保存する必要がある場合最初に最初に。 レビューの後にのみ**既存のスキルを更新**を選択します。 Skill のアイデンティティとその Specialist の関係を保ちます。 **ローカルの競合** では、**インストール済みスキルを表示** を開き、提供されたときにレビューアクションを実行します。 ブロックされたままであれば、ローカルメソッドを削除し、インストールを強制する代わりにメッセージを保存します。

インストールしたSkillの詳細なアクションを使用して、可用性を変更したり、アンインストールしたりします。 変更後、意図したメソッドは、Main または Specialist に使用可能であることを確認します。 ダウンロードしたパッケージと利用可能なメソッドは別々の状態です。

## インストールまたは使用が失敗した場合 {/* #if-installation-or-use-fails */}

カタログやパッケージの検証エラーについては、メッセージを保持し、通常のマーケットプレイスエントリを介して再試行します。 パッケージを統一されたダウンロードと交換しないでください。 Marketplaceブラウジングは公式ディストリビューションサービスを使用しており、GitHubのログインを必要としません。

インストールが完了しますが、タスクが実行できない場合は、エラーに名前付けられた不足している依存性またはツールを調べます。 ソフトウェア依存関係または[Connector セットアップ](../guides/connectors.md)の[ランタイムの設定](../guides/runtimes.md)をフォローして、意図した入力でタスクを再試行し、保存した結果を確認します。

## 自分のSkillをマーケットプレースに提出する {/* #submit-a-skill */}

Marketplace の投稿は GitHub のリポジトリとメンテナーのレビューを使用します。 **Upload skills** はローカルアプリケーションにメソッドをインポートします。 Skillエディタで**Publish**は、ローカルSkillを保存します。 ネザーの行動は、公共の市場でそれをリストします。

### Skillを準備する {/* #prepare-the-skill */}

1. [Skill の作成とテスト](create.md)は、必要なスクリプト、リファレンス、その他のファイルを含みます。
2. これらのファイルを`skills/your-skill-name/`などのGitHubリポジトリのサブディレクトリにアップロードし、`SKILL.md`を内部でアップロードします。 必要なライセンス通知をソースに保管してください。
3. 完全なコンテンツをコミットし、コミットの完全な SHA をコピーします。 投稿は固定リビジョンを識別しなければならず、移動ブランチではありません。

`SKILL.md` は `name`、`description` および `license` または `metadata.license` のライセンス宣言を必要とします。 宣言と記載された通知は、提出する実際のコンテンツを記述する必要があります。

### 提出ファイルの準備 {/* #prepare-the-submission-file */}

[release.config.json テンプレート](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/example/release.config.json) の公式アカウントで起動します。 Skill の情報でプレースホルダーを交換します。

| フィールド | 供給するもの |
| --- | --- |
| `id` | downcase、で使用されるhyphenatedの名前 `SKILL.md`. |
| `version` | パッケージ版など `1.0.0`. |
| `category` | の 1 つ `Academic Writing`, `Data Analysis`, `Evidence Insight`, `Protocol Design` または `Other`. |
| `source.repository`, `source.commit`, `source.path` | HTTPS GitHub URL、40-character の完全なコミット SHA と Skill ディレクトリ。 |
| `license_files` | そのコミットで該当するライセンスファイルへのリポジトリ相対パス。 |

テンプレートのAll-zeroコミットはプレースホルダーであり、公開できません。 提出する前に、現在の[投稿形式](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/release.config.schema.json)を確認してください。

### 公開された結果のインクルージョンとチェックをリクエスト {/* #request-inclusion-and-check-the-published-result */}

マーケットプレースリポジトリの[貢献の指示](https://github.com/aipoch/openscience-skill-marketplace/blob/main/CONTRIBUTING.md)に従って、プルリクエストを準備します。 書き込みアクセスがない場合、フォークを使用してください。 提出ファイル、ソースの場所、目的、およびローカルテスト結果を提供して下さい; ペイロードは、ソースリポジトリに残っています。 メンテナーは、`authoring/submissions/<id>/release.config.json` でレビューされた構成を追跡できます。 レビュー中に配置を確認.

発行前の審査および登録を行います。 提出されたファイルまたはマージされたプルは、アプリ内でSkillが利用できるわけではありません。 [作者ガイド](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/README.md)は、レビューと出版物の段階について説明しています。

出版物の後、**Browse Marketplace → Refresh**に戻り、Skillを検索し、ソースとバージョンを確認し、インストールします。 公開されたSkillを更新するときは、新しいソースコミットで新しいパッケージバージョンを提出してください。 上流リポジトリの更新がインストールされたコピーに自動的に編集を想定しない。
