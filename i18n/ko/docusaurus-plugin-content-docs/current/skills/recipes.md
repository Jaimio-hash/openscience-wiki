---
title: "Skill 레시피"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Skill 레시피 {/* #skill-recipes */}

재료의 시작과 결정에 의해 요리법을 선택하십시오. Skill에서 절차 유지, 프로젝트의 실제 파일, 그리고 결과 대화에서 확인.

| 연구 상황 | 계정 만들기 | Skills 및 도구 | 전달 및 합격 확인 | 노선 및 예약 |
| --- | --- | --- | --- | --- |
| 다운로드한 RNA-seq 카운트 테이블이 분석 준비 여부를 결정합니다. | Raw count matrix 및 소스 액세스 | 주문 rnaseq-count-qc; Python/R Notebook | 구조상 보고, 표본 미터, 본래 식별자 및 unchanged 입력 hash | 로컬 Notebook 예제; 활성화 Python/R |
| 샘플 QC의 두 가지 구현 | Python 및 R CSV 출력 | Notebook; rnaseq-count-qc 요구 사항 | 전체 샘플 ID에 의해 가입하고 모든 미터를 비교; GSE60450 예제 일치 48 값 | 로컬 Notebook 예제; 활성화 Python/R |
| 다른 역할은 그것을 공유하기 전에 결과를 확인합니다. | 완전한 QC 테이블 및 명시된 invariants | RNA-seq QC 검토자 Specialist | 별도의 아동 성적 및 12 샘플 합계; 원본 파일 액세스에서 인라인 증거를 구별합니다. | 인라인 테이블 예; 활성화 Specialist 및 Python |
| 새 질문에 대한 독서 목록을 준비 | 집중된 질문 및 씨앗 DOI/PMID | 문학 검토; 문학/데이터 커넥터 | 검색된 식별자, 포함 합리적 및 해결되지 않은 전체 텍스트 간격 | PRISMA 수집 예; 일 문학 Connector |
| 정의 된 인구에 대한 연구 dossier | 인구, 표시 및 질문 범위 | 표시 도시어; 연구 소스 | 날짜 증거, backd waypoint 파일 및 unsupported 주장 조각 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| exploratory chart를 보고서 숫자로 변환 | 검증된 데이터 및 특정 청구 | 그림 작풍 | 단위, 표본 상표, caption 및 자료 traceability를 가진 재생된 이미지 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| 다중 패널 결과 수치 구축 | Claim 및 immutable 데이터 버전 | 그림 Composer + 그림 작풍 | 패널 개요, 조립 된 이미지 및 리뷰 결과; Main 에이전트에서 실행 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| 그림 데크가 원고를 지원하는지 확인하십시오. | 원고, 캡션, 풀 주문 데크 | 종이 Narrative | 주문된 숫자 인수 및 증거 격차; 새로운 실험을 하지 않음 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| 누락-패키지 오류의 원인 찾기 | 정확한 오류 및 선택된 실행 시간 | 환경 및 패키지 | Installed-version 검사, 가능한 곳에 관리된 설치, 재시작된 수로 수입품 시험 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| 반복 작업을위한 원격 환경을 준비 | 기존 SSH/Slurm 호스트 및 패키지 요구 사항 | Compute Environment Setup + 원격 컴퓨터 | 이름 환경과 조사/실행 증거; 호스트 설정은 user/admin에 의해 소유됩니다. | Direct SSH에 대한 원격 compute 참조; Slurm 계정 필요 |
| 단백질 구조 예측 비교 | 유효한 sequences/complex 정의 | AlphaFold2, Boltz, Chai-1, ESMFold2 또는 OpenFold3 | 구조 플러스 신뢰와 입력 대응; 구성 된 무게 / GPU 필요 | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |
| 고정 된 잔류물과 백본을 재 설계 | PDB, 체인 매핑 및 디자인 제약 | ProteinMPNN / LigandMPNN / 수용성MPNN | Sequence-to-chain 매핑 및 제약 검사; CPU 지원은 방법에 달려 있습니다 | 작은 ProteinMPNN CLI 예제; 다른 방법은 자신의 설정이 필요합니다. |
| 단일 셀 배치 통합 | AnnData, 일괄 라벨 및 원본 수 | scvi-tools 또는 scGPT | 셀/진 식별자에 대해 확인된 모델 출력; 이것은 대량 조사에 직접 적용하지 않습니다. | 적응할 수 있는 방법; 나열된 입력 및 방법별 종속성 준비 |

## 로컬 RNA-seq 레시피를 Reproduce {/* #reproduce-the-local-rna-seq-recipe */}

<p className="example-label"><strong>실습 예제</strong> RNA-seq 조사 QC를 실행하고 검사하십시오</p>

1. 실제 [GSE60450 입력 및 샘플 QC](../reference/example-data.md)을 사용하십시오.
2. [rnaseq-count-qc의](./create.md)을 생성하거나 가져올 수 있습니다.
3. [Skill 인발 예제](./overview.md)을 사용하여 경계 요청을 보냅니다.
4. 생성 된 <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">유효성 검사</ExampleDownload>을 엽니 다. 예상된 27,179 유전자와 12 샘플 열을 비교하여 미리보기의 행 캡과는 달리 관찰된 값으로 비교합니다.
5. 두 번째 의견이 요구되면 [Delegate 및 검증](../specialists/delegate.md)을 사용하며 실제 아동 성적표를 검사합니다.

## 요리법에게 맑은 마무리하십시오. {/* #give-a-recipe-a-clear-finish */}

유용한 요청은 소스, 필수 방법, 출력 파일 및 합격 확인을 이름. 예를 들면:

> 기존 GSE60450 샘플-QC CSV을 사용하여 그림 스타일로 보고서 그림을 만들 수 있습니다. 동반자 테이블에 전체 샘플 ID를 유지, 라벨 원시 계산 단위, 소스를 보존, 새로운 수치를 저장, 모든 라벨을 검사하기 위해 다시 열. 방법을 변경하기 전에 사용할 수없는 의존성을보고하십시오.


구현 참조 : [나.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md의 특징](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md).

지원되는 장시간 일을 위해, [배경 작업 및 결과 납품](../guides/notebook.md#background-tasks-and-result-delivery)를 따르십시오. 납품 후에 실제적인 뛰기 및 저장된 산출을 검열하십시오. 환경 및 패키지, Compute Environment Setup 및 Remote Compute (SSH)가 활성화되었지만, 런타임, 네트워크 및 호스트 요구 사항이 여전히 적용됩니다.
