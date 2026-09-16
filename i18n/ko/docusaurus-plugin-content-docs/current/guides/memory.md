---
title: "기억과 대화 맥락"
last_update:
  date: '2026-09-10'
---

# 기억과 대화 맥락 {/* #memory-and-conversation-context */}

기억 상점 재사용할 수 있는 주; context window는 특정 모델 요청에 사용할 수 있는 자료입니다. 저장된 참고는 대리인이 그것을 recalled, 그리고 눈에 보이는 오래된 메시지는 다음 요청에 있는 전체 본래 역사 적합이 있다는 것을 증명하지 않습니다.

샘플 수에서 원료 수를 보존하고 유전자 길이를 분리하는 것과 같은 튼튼한 규칙을 위한 종류를 사용하십시오. 새로운 요청에 공급되는 그 협약을 원할 때 메모리 및 범주의 자동 호출.

## 카테고리 및 노트 만들기 {/* #create-a-category-and-note */}

<p className="example-label"><strong>실습 예제</strong> RNA-seq 보고서를 저장하고 회신하십시오</p>

1. **Settings → Memory → New category**을 엽니다.
2. `RNA-seq methods`을 **Name**로 입력합니다. **When should the agent save a note here?**에서 확인된 방법이 이 범주에 속할 때 설명합니다.
3. **Auto-recall**를 정의합니다. 이 예제는 수동으로 유지되는 방법 메모를 떠났습니다.
4. **Create**을 선택하면 **Add**을 선택합니다. 노트를 입력하고 **Save**을 선택합니다.
5. 이 페이지는 자동으로 번역 되었다. 원문 언어: How to check its content and count.

![범주 이름, 지도 및 자동 호출](/img/open-science/guides-walkthrough/17-memory-category.png)

저장된 메모는 읽습니다 : "Keep the original GEO count matrix unchanged. Preserve Entrez Gene IDs as text, 샘플 개수에서 별도의 유전자 길이를 유지하고, 각 파생 된 테이블에 입력 SHA-256을 기록합니다. 이것은 작업 협약이며 분석 결과에 대한 주장이 아닙니다.

![메모리가 꺼져있는 동안 수동으로 저장된 메모](/img/open-science/guides-walkthrough/18-memory-note.png)

| (주) | 효과 및 경계 |
| --- | --- |
| 메모리 스위치 | Enable/disable 대리인 저축 및 recall. Off는 기존 노트를 유지하고 수동 편집을 허용합니다. |
| 범주 행 | 그 범주의 노트와 계산을 표시합니다. 프로젝트 전반에 걸쳐 카테고리 그룹 관련 메모리. |
| 프로젝트 보기 | 프로젝트스코프 노트를 표시; 글로벌 카테고리에서 구별합니다. |
| 새 카테고리 | 64 문자까지 이름, 1,000까지 지도; 최대 10 사용자 정의 카테고리. |
| 추가 / 메모리 노트 | 최대 4,000 문자의 메모를 작성합니다. 빈 텍스트는 사용할 수없는 저장을 유지합니다. |
| 노트 복사 | 텍스트를 복사합니다. |
| 편집 노트 → 저장 / 취소 | Persist는 텍스트를 수정하거나 편집 할 수 있습니다. |
| 범주 행동 → 편집 | 사용자 정의 범주의 이름을 변경, 지도 및 자동 호출. |
| 범주 행동 → 자동 호출 | 이 카테고리를 위한 자동적인 포함을 통제하십시오; 메인 메모리 스위치는 여전히 적용됩니다. |

**About you**은 내장 범주입니다. 정체성은 사용자 정의 범주처럼 편집하거나 제거 할 수 없습니다.

## 대화에서 컨벤션을 저장 {/* #save-a-convention-from-a-conversation */}

1. **Settings → Memory → Memory**을 켜십시오. **RNA-seq methods → Category actions**을 열고 **Auto-recall**을 활성화하십시오.
2. 프로젝트 대화에서, 확인 된 컨벤션을 기억하고 범주 이름을 묻는 에이전트를 요청합니다. 예를 들어: "RNA-seq 방법: GSE60450 descriptive QC의 경우, 검출된 유전자에서 Zero-count 유전자를 별도로 보고합니다. 두 개의 카운트는 각 샘플에 27,179에 합해야합니다. "
3. 승인이 필요할 때 **Save memory** 요청을 검사합니다. **Allow once**을 선택하기 전에 제안된 내용, 범주 및 프로젝트 범위를 확인하십시오. **Deny**을 선택하면 동의한 규칙을 나타내지 않습니다.
4. 카테고리를 엽니다. 참고가 존재한다는 것을 확인하고, 의도한 텍스트를 가지고 있고 의도한 프로젝트 아래에 나타납니다. **auto** 라벨은 에이전트 생성 노트를 식별합니다. 그것은 관행을 확인한 계산을 의미하지 않습니다.

![수동 source-preservation note와 함께 하는 대리인 창조된 보고 규칙](/img/open-science/non-workflow-completion/05-memory-note-category.png)

## 새로운 대화에서 리콜을 확인 {/* #check-recall-in-a-new-conversation */}

**같은 프로젝트의 새로운 대화**을 시작하고, 답을 공급하지 않고 저장된 보고서를 요청하십시오. 주의와 응답을 비교하십시오. 원래의 대화에 대한 질문은 기존의 역사에서 응답 할 수 있습니다.

메인 **Memory** 스위치를 켜고 다른 새로운 대화에서 질문을 반복하십시오. 에이전트가 더 이상 신청 메모리를 통해 메모를받을 수 있는지 확인하십시오. 저장된 메모는 설정에 남아 있습니다. Switching Memory off는 메모를 지우거나 기존 대화에서 이미 존재하는 텍스트를 제거하지 않습니다.

위의 저장은 명시된 "remember" 요청을 따릅니다. 그것은 대리인이 모든 유용한 규칙을 spontaneously 식별할 것이라는 것을 보여주지 않습니다. Context compaction은 메모리 노트를 저장하여 분리됩니다.

## Inspect 대화 상황 {/* #inspect-conversation-context */}

세션에서 **Context 사용** 비율 또는 **Add menu → Context window**을 사용할 수 있습니다. **Current composition**, **History** 및 **Session call summary**를 검사하십시오. 카테고리는 체계 신속한, 공구 및 대리인, 메시지, 연결관 및 MCP, Skills 및 기구 머리 위를 포함할 수 있습니다.

런, 모델, occupancy 및 터미널 상태를 검사하는 역사 지점을 선택하십시오. 지역 견적 및 공급자 승인 측정은 다를 수 있습니다; unavailable 카테고리 세부사항은 0 사용법 아닙니다. 컴팩트 마커는 모든 눈에 보이는 메시지의 새로운 저장된 artifact 또는 deletion이 아닌 컨텍스트 이벤트를 기록합니다. 수동 조밀함 통제는 활동적인 기구에 달려 있습니다.

OpenCode이 컨텍스트 팝업에서 **Compact**을 제공 할 때 **Context compacted**를 선택하고 대기하십시오. 원래 메시지는 요약에서 백엔드가 계속되는 동안 볼 수 있습니다. 계속하기 전에 유지 된 제약을 나열하고 요구 사항을 비교하기 위해 에이전트를 요청하십시오. 다음 작업을 시작하기 전에 모든 누락 또는 잘못된 제약을 재 상태. Compaction는 무손실 유지를 보장하지 않습니다; 공급자 측정은 지역 추정과 다를 수 있습니다.

![Compaction 및 공급자 허가된 컨텍스트 측정 완료](/img/open-science/non-workflow-completion/11-context-compacted.png)

윤곽을 위해, 현재 목표, 받아들여진 결정, 정확한 입력/출력 파일, 검증은 이미 하고 해결한 질문을 던졌습니다. 기억에 의존하지 않고 저장된 증거를 연결하십시오. [세션 및 지점](./sessions.md) 을 사용하여 분기/수출 및 [사용량](./usage.md) 을 위한 cumulative 토큰 볼륨.

## 대상 범위만 삭제 {/* #delete-only-the-intended-scope */}

**Delete note**은 확인 후 하나의 메모를 제거합니다. **Delete category**은 카테고리와 노트를 제거; 영향을받는 수를 검사합니다. **Clear all**은 사용자 정의 카테고리와 노트를 제거하면서 유지. 범위가 더 큰 경우 취소하십시오. 이전 백업은 여전히 삭제 된 메모를 포함 할 수 있습니다.

소스: [메모리 스키마](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/memory.ts), [메모리 패널](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/MemoryPanel.tsx), [컨텍스트 뷰어](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/workspace/ContextWindowDialog.tsx).
