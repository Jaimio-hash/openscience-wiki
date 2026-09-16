---
title: "과학 도구"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 과학 도구 {/* #scientific-tools */}

실제 입력 및 실행 환경 후에만 과학 계산을 실행하는 것은 명확합니다. 로컬 Notebook, Connector 또는 외부 런너를 선택하십시오.

## 계산 실행을 선택 {/* #choose-where-the-calculation-runs */}

| 오시는 길 | 적당한 일 | 자주 묻는 질문 |
| --- | --- | --- |
| Python 세션 Notebook | 데이터 파싱, 수치 요약 및 플로팅 | Bound Python 런타임 및 설치 패키지 |
| R 세션 Notebook | R 분석 및 패키지 | R 실행 시간 이 세션에 바인딩 |
| 내장 Connector | 데이터베이스 retrieval 또는 지원되는 세분화 작업 | 대리인에 유효한 Connector, 필요에 따라 credentials/network |
| 원격 Compute | Host-specific 소프트웨어, GPU 또는 일괄 작업 | 사용 가능한 호스트, 환경 및 스케줄러 |

쉘 명령은 세션 Notebook 실행과 교환할 수 없습니다. 런타임, 마운트 입력 및 검증은 다를 수 있습니다. 지정된 루트를 명시적으로 요청합니다.

## 패키지 및 의존성 {/* #packages-and-dependencies */}

| (주)삼성 | 무엇을 할 것인가? | 성공적인 결과 |
| --- | --- | --- |
| 인증현황 | 자주 묻는 질문 `inspect_packages` 예정된 언어/런타임 | 설치/수정 상태 및 버전 |
| 설치 | 지원되는 사용 `manage_packages` 경계 환경에 대한 흐름 | Completed installer output, 뿐만 아니라 “설치 시작” |
| 다시 시작 | 앱이 요청하면 나머지/rebind 커널 | 다음 셀은 업데이트 환경을 사용합니다. |
| 인증 및 인증 | 같은 Notebook에 패키지를 가져 오기 | 실제 버전과 작은 작업 작업 작업 |

패키지 설치가 HTTP CONNECT 403을 반환하면 영향을받는 패키지 호스트 이름과 [네트워크 설정](../guides/network.md)를 다시 복원하기 전에 확인하십시오. 필요한 방법을 지원할 때 기존 패키지만 사용하십시오. 성공적인 계산은 실패한 패키지 설치가 수리되지 않았습니다.

## 로컬 RNA-seq 계산을 실행하고 검증 {/* #execute-and-verify-a-local-rna-seq-calculation */}

<p className="example-label"><strong>실습 예제</strong> GSE60450 매트릭스에서 샘플 레벨 카운트 확인</p>

1. [GSE60450 입력](../reference/example-data.md)을 첨부합니다.
2. Python 또는 R Notebook 런타임을 선택하십시오. 설치하기 전에 버전을 검사합니다.
3. 풀 매트릭스 치수 및 수 일체 검사에 대 한 요청; 샘플 열에서 `EntrezGeneID` 및 `Length` 제외.
4. 총 수, 제로 카운트 유전자, 검출 된 유전자 및 각 전체 샘플 ID에 대한 유전자 중 미디어를 계산합니다.
5. 새로운 CSV, 차트 및 방법 보고서를 저장하십시오. 소스를 변경하고 SHA-256 이전 / 이후 비교하십시오.
6. 모든 출력을 다시 엽니다. Cross-check 표본 조사, 상표 및 가치; 실제 Notebook 코드와 로그를 검사합니다.

[예를 들어 baseline](../reference/example-data.md)과 출력 식별자 및 메트릭스 비교. 입력을 변경하지 않도록하십시오. Descriptive count는 정상적인 표현, 차분한 표현 또는 임상 결론을 수립하지 않습니다.

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC의 CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">R/Python 비교</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Skill 검증</ExampleDownload>.

## CPU의 작은 단백질 시퀀스 설계 {/* #design-a-small-protein-sequence-on-cpu */}

<p className="example-label"><strong>실습 예제</strong> 1UBQ 백본을 위한 디자인 후보 순서</p>

이 노선은 인간적인 ubiquitin, PDB 1UBQ 사슬 A.에 **공식 ProteinMPNN CLI**를 달립니다. 그것은 바닐라와 수용성 체크 포인트로 각각 하나의 후보를 만듭니다. 기존의 백본에 대한 역대 계산입니다.

### 런너와 무게를 준비 {/* #prepare-the-runner-and-weights */}

`venv` 및 pip, Git, 인터넷 액세스 및 writable 폴더를 사용하여 지원된 Python을 사용하십시오. 뒤에 오는 명령은 macOS/Linux 포탄을 위해 입니다. Windows에서 해당 `.venv\Scripts\python.exe`을 사용하며 쉘의 구문을 사용하여 `CUDA_VISIBLE_DEVICES`를 설정합니다.

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

핀으로 만들어진 체크 아웃에는 `vanilla_model_weights/v_48_020.pt` 및 `soluble_model_weights/v_48_020.pt`이 포함됩니다. 두 파일이 존재하는지 확인합니다. <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ 입력</ExampleDownload>을 `protein-design`로 `1UBQ.pdb`로 다운로드하십시오. 출력 폴더에서 별도의 순서 입력을 유지하십시오.

이 설정은 외부 가상 환경에서 패키지를 설치합니다. pip가 호환되지 않은 배포를 보고하지 않은 경우, retrying 전에 사용 가능한 PyTorch 휠에 의해 지원되는 Python 버전을 선택하십시오. 기록 `environment.txt`; Python, PyTorch 또는 NumPy를 변경하면 수치 출력을 변경할 수 있습니다. 오래된 가상 환경이 더 이상 시스템 업데이트 후 기본 해석기를 찾을 경우, 현재의 호환 Python과 다시 만듭니다.

### 모델을 모두 실행하고 출력을 저장 {/* #run-both-models-and-save-their-outputs */}

`protein-design`에서 실행:

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

둘 다 명령은 사슬 A, 1개의 순서, 온도 0.1 및씨 42를 이용합니다. 명확한 CUDA 장치 시정은 이 주자 사용 CPU를 만듭니다. `outputs/vanilla/seqs/1UBQ.fa` 및 `outputs/soluble/seqs/1UBQ.fa`를 기대하십시오; 수입하거나 게시 할 때 이름을 분리하십시오.

Open-Science을 통해 실행하려면 **Your files → Grant folder…**을 사용하여 준비 된 폴더를 부여 한 다음 환경의 **절대 Python 경로** 및 그 작업 디렉토리와 이러한 명령을 실행하기 위해 에이전트를 요청하십시오. 명령과 스코프를 인증합니다. 2 FASTA 및 비교 보고서를 게시하려면 **Files**에서 모든 3을 다시 열으십시오. 파일은 여전히 작업 디렉토리에서만 출판해야합니다.

:::caution&#91;Skill 패키지 로딩&#93; 내장형 모델 Skill이 패키지 경로 검증을 실패하면 [문제 해결](../guides/troubleshooting.md)를 통해 오류를 보고합니다. 위의 CLI 경로는 별도의 방법으로 유지; 성공적인 CLI 실행은 네이티브 Skill 로딩 작업을 설정하지 않습니다. :::

### 설계한 순서 확인 {/* #check-the-designed-sequences */}

![로컬 CPU 실행 및 재개된 비교 보고서 완료](/img/open-science/local-todo-batch/42-cpu-model-comparison.png)

이 예제에서 저장된 출력은 다음과 같습니다.

| 출력 | 디자인 된 잔류물 | 이름 &#42; | 네이티브에 대하여 |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">단백질MPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">수용성MPNN FASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

각 FASTA에는 **2개의 기록**: 기본 순서가 첫째로, 그 후에 단 하나 디자인한 후보자를 포함합니다. 독립적 인 검사는 Canonical 아미노산, 레코드 당 76 잔류물, finite scores, 직접 recomputed 회복 및 unchanged PDB SHA-256를 확인했습니다. Saved artifact 바이트는 runner 출력을 일치시킵니다. <ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">비교 보고서</ExampleDownload> 레코드 설정 및 제한. 이 one-candidate 비교에서 점수는 모델이 더 나은 폴딩, 가용성 또는 기능을 설정하지 않습니다.

## 실패 단계에 의해 진단 {/* #diagnose-by-the-failing-stage */}

| 관련 기사 | 다음 검증 |
| --- | --- |
| 런타임 없음 / R 사용 불가 | 설치 또는 해석기를 통해 [런타임](../guides/runtimes.md), 그 후에 그것을 묶으십시오. |
| ImportError / ModuleNotFoundError / 패키지가 호출되지 않음 | 선택된 환경을 검사하고 관리된 포장 임명을 사용하십시오. |
| 알 수없는 Skill / 잘못된 커널 헬퍼 | 실제 호출 가능한 Notebook 헬퍼에서 메서드 패키지를 Distinguish. |
| 입력 버전 사용 불가 / 파일 찾을 수 없습니다 | 응용 프로그램을 통해 정확한 전류 입력을 해결; 길을 추측하지 마십시오. |
| 네트워크/HTTP 실패 | 호스트, 작동 및 실제 상태 유지; 제품 정보 [네트워크 제어](../guides/network.md) 그리고, [오류 안내](../guides/troubleshooting.md). |
| 출력은 작업 디렉토리에서만 존재합니다. | 지원된 artifact 노선을 통해 게시하고 저장된 버전을 다시 엽니다. |
| 프로듀서 블록 / 부분 환경 없음 | 제한을 유지; 누락된 증거를 제조하지 마십시오. |

원격 작업을 위해 호스트 읽기, 제출, 상태 및 수확 출력을 별도로 검사합니다. [Direct SSH RNA-seq 예제](../guides/remote-compute.md) 완료 및 출력은 독립적으로 검사되었습니다. Slurm 단말 감시는 읽기 쉬운 회계를 요구합니다. 이제 동일한 장은 격리 된 CUDA 환경 및 독립적 인 출력 체크와 함께 검증 된 A100 ProteinMPNN을 문서화합니다. CPU-capable 방법은 따로따로 평가할 수 있습니다.

지원되는 장시간 일을 위해, [배경 작업 및 결과 납품](../guides/notebook.md#background-tasks-and-result-delivery)를 따르십시오. 납품 후에 실제적인 뛰기 및 저장된 산출을 검열하십시오. 환경 및 패키지, Compute Environment Setup 및 Remote Compute (SSH)가 활성화되었지만, 런타임, 네트워크 및 호스트 요구 사항이 여전히 적용됩니다.

구현 참조 : [노트북.ts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts), [SKILL.md의 특징](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md), [SKILL.md의 특징](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md).
