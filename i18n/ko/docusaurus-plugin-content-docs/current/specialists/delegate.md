---
title: "Delegate 및 확인 작업"
last_update:
  date: "2026-09-11"
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Delegate 및 확인 작업 {/* #delegate-and-verify-work */}

위임은 Main Agent가 대화를 좌표하면서 별도의 어린이 작업을 수행합니다. Specialist을 선택하여 주요 대화에 대해 이야기하고 아이 작업을 위임하는 것은 다른 행동입니다.

## 묶인 handoff 준비 {/* #prepare-a-bounded-handoff */}

| 자주 묻는 질문 | 예시 |
| --- | --- |
| 제품정보 | RNA-seq QC 검토자, 저장된 ID `rna-seq-qc-reviewer` |
| 입력 | GSE60450 샘플-QC CSV, 또는 유효한 현재 immutable 파일 버전을 완료하십시오 |
| 작업 | 12 Non-missing unique 전체 샘플 ID와 per-sample gene-count identity를 확인하십시오 |
| 제품 설명 | 1개의 체크 테이블 플러스 각 표본의 arithmetic 결과 |
| 언어: 영어 | 읽기 전용; 새로운 패키지 없음; 차별화된 해석 |

1. [이름 &#42;](./identity.md)을 생성하고 확인하면 활성화됩니다.
2. 대화의 **Agent controls**에서 **Delegation**을 활성화합니다. 예정된 모델과 작업 증명을 확인합니다.
3. Main Agent를 명시적으로 delegate로 요청하고, 역할을 식별하고 완전한 작업을 제공합니다. 파일 handoff를 사용하는 경우, 앱이 현재 버전을 해결합니다. ID를 발명하거나 버전 참조로 파일 이름을 전달하지 마십시오.
4. 실제 위임 활동과 자녀 상태를 시청하십시오. Main 에이전트의 진행 문장은 어린이 기록이 아닙니다.
5. 아이 칩 / **Subagents** 미리보기를 엽니다. **Subagent Frame**에서 작업을 선택하고 성적표, 공구 결과 및 터미널 상태를 읽습니다.
6. 해당 범위를 검사한 후 부모의 대화에서 자녀의 허가 요청에 응답합니다. 그런 다음 요청 된 합격 검사로 반환 된 결과를 비교합니다.

## handoff 및 반환 결과 확인 {/* #check-the-handoff-and-returned-result */}

### 작은 인라인 테이블을 확인 {/* #verified-example-twelve-sample-invariants */}

<p className="example-label"><strong>실습 예제</strong> 12 샘플 테이블 체크를 Delegate</p>

완전한 <ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">표본 QC CSV</ExampleDownload>을 다운로드하고 헤더를 풀고 요청의 밑에 모든 12 행을 즉시 붙여 넣으십시오. 모든 열을 유지하고 샘플 식별자를 완료하십시오. 예제는 [Specialist 정체](identity.md)에서 생성 된 활성화 된 역할을 사용합니다. Python은 arithmetic에 사용할 수 있어야 합니다. 추가 없음 Skill이 경계 체크에 필요한.

> RNA-seq QC 검토자에 Delegate. 아래의 전체 인라인 CSV만 사용하십시오. Python에서 arithmetic을 실행하고, 12개의 명백한 가득 차있는 표본 식별자를 확인하고, zero_count_genes + detected_genes_count_gt_0 = 27179를 각 행마다 확인합니다. 각 결과를 반환하고이 검사는 요약 데이터를 공급, 고유의 카운트 매트릭스에 독립적 인 액세스하지 않는 상태.

![완료된 Specialist 서브스크는 per-sample 체크로](/img/open-science/capabilities-walkthrough/15-specialist-delegated-result.jpg)

이 예에서, 아이는 Python Notebook을 ran하고 **12 행, 12는 비 계산 식별자, 그리고 12/12는 27,179와 동등한 합계합니다**를 반환합니다. 첫번째 가득 차있는 표본 ID를 위해, `8,664 + 18,515 = 27,179`. 숫자 필드는 완료 및 비 부정적이었다.

이 제공된 요약의 일관성을 확인합니다. 그것은 독립적으로 원래 매트릭스에서 총 / 중간을 재현 할 수 없습니다, 샘플 조건을 검증, 또는 생물학적 품질 임계 값을 설정.

<span id="check-file-handoff-and-a-separate-model" />

### 별도의 모델을 선택하십시오. {/* #choose-a-separate-model */}

Main의 독립적으로 아이 모델을 설정합니다.



위임하기 전에 **Settings → Model → Subagent**의 고정 모델을 선택하십시오. 실제 모델을 확인하기 위해 자녀 기록을 엽니 다. 주요 대화의 모델 라벨은 아이를 식별하지 않습니다. 운동 구성에서, Main 제품 정보 `gpt-5.6-sol` 자녀의 행동 기록 `gpt-5.6-luna`, 둘 다 Codex 구독 인증.

### 자녀에게 파일을 전달 {/* #pass-a-file-to-the-child */}

<p className="example-label"><strong>예시</strong> 아이 작업에 샘플-QC 파일을 손으로</p>

1. 대화의 첨부 메뉴를 통해 소스 파일을 첨부하고 업로드를 기다립니다.
2. Main에게 정확한 업로드 버전을 아이에게 전달하십시오. 이름 필수 체크 및 산출; 파일명 또는 추측된 버전 ID를 대체하지 마십시오.
3. **Subagents**을 열고 아이를 선택합니다. **Notebook**에서 **Agent** 필터에서 아이가 실제 파일 읽기를 검사합니다.
4. 어린이의 행 수, 열 이름 및 체크섬을 소스와 비교하십시오. 저장된 출력을 열고 요청한 계산을 확인합니다.

[공중 표본 미터 CSV](/examples/gse60450/portable-script/remote-rnaseq-qc-f1e10edbdf01-f1e10edbdf01.csv)의 경우 **12 데이터 행**과 **269,027,617**를 `total_counts`의 합계로 기대합니다. 입력 체크섬은 변경되지 않아야 합니다. 이 체크는 공급한 표본 요약을 걱정합니다; 그들은 원래 유전자 카운트 매트릭스를 재 계산하지 않습니다.

| 【특전】 | 필수 증거 |
| --- | --- |
| 버전 허용 | 앱은 현재 immutable upload/artifact 버전의 자체 세션을 해결했습니다. |
| 아이들은 읽을 수 있습니다 | 아이의 도구는 파일 내용을 반환; filename 또는 staged path를 혼자서 충분하다. |
| 자주 묻는 질문 | 아이는 계산과 저장된 결과가 소스에 동의합니다. |

앱이 사용할 수없는 입력을 보고하면 현재 버전을 사용하여 파일과 재시동을 다시 볼 수 있습니다. 어린이가 **`PermissionError: [Errno 1] Operation not permitted`**을 보고하면, 재포장이 읽을 수 없는 경우 정확한 오류와 [견적 요청](../guides/troubleshooting.md)를 유지합니다. 오류를 우회하기 위해 내부 애플리케이션 폴더로 파일을 이동하지 마십시오.

### 자녀에게 Skill을 사용할 수 있습니다. {/* #make-a-skill-available-to-the-child */}

가져 오기 또는 Skill을 먼저 만듭니다. Specialist의 경우, 역할의 [Skills 및 커넥터](capabilities.md)의 밑에 할당하십시오; 그런 다음 방법을 명시적으로 이름을 새 위임 작업을 시작합니다. 아이들에게 그들을 사용하기 전에 설치 된 지침을 읽으십시오.

로드 된 Skill 정체성 및 콘텐츠에 대한 어린이 도구 활동을 검사합니다. 예를 들어, `rnaseq-count-qc`은 원시 유전자 카운트 매트릭스를 요구하고 설명하는 QC를 요구합니다. 12 줄 샘플 요약은 교환 가능한 입력이 아닙니다. 성공적인 패키지는 분석이 실행되지 않습니다. 실행 및 저장된 결과를 별도로 확인합니다.

## 정확하게 실패를 읽으십시오 {/* #read-failures-accurately */}

| 관측 또는 지원 상태 | 평균 및 회복 |
| --- | --- |
| 자주 묻는 질문 | 회신하기 전에 의도한 대화를 위해 그것을 켜십시오. |
| 역할 장애인 / 설정 불완전 | 끝 설정 및 의도 된 저장된 역할을 가능하게합니다. |
| 이 세션에서 사용할 수 없는 입력 | 정확한 현재 artifact 버전 또는 immutable 올려주기 참고를 얻으십시오. 경로, artifact ID 및 버전 ID는 다른 값입니다. |
| 허가를 기다리는 중 | 아이의 보류 가동을 검사하십시오; Main 에이전트는 컴퓨팅보다 오히려 기다리고있을 수 있습니다. |
| 자녀 완료 | 결과 및 도구 증거를 읽으십시오; 완료는 과학적인 정정의 보증이 아닙니다. |
| 취소 / 실패 | 부분 출력 및 실제 오류를 유지합니다. Main 에이전트 교체를 완료한 Specialist 체크로 라벨하지 마십시오. |

인라인 경로는 증거 범위가 명시된 완전한 경계표에만 적합합니다. 그것은 파일 선량에 대한 일반적인 교체가 아닙니다.

구현 참조 : [컴파일러AgentControlsMenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ComposerAgentControlsMenu.tsx), [스페셜리스트Submenu.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/SpecialistSubmenu.tsx).
