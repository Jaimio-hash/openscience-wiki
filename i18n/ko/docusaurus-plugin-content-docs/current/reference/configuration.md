---
title: "구성 및 컨텍스트"
last_update:
  date: '2026-09-10'
---

# 구성 및 컨텍스트 {/* #configuration-and-context */}

이 참조는 프로젝트 컨텍스트, 새로운 세션 기본 및 기존 세션의 구성을 분리합니다. 대응 인터페이스를 위해 [프로젝트](../guides/projects.md) 또는 [공급자 설정](../guides/providers.md)을 사용하십시오.

## Context 및 구성 소유권 {/* #context-and-configuration-ownership */}

| 값 | 소유자 및 효과 | 대체하지 않는 |
| --- | --- | --- |
| 프로젝트 **Name** | 프로젝트 표시 이름, 필수, 최대 200 문자 | 독특한 프로젝트 ID |
| 프로젝트 **Description** | 프로젝트 목록 설명, 최대 1,000 문자; 에이전트 프롬프트에 포함되지 않음 | 에이전트 지침 |
| 프로젝트 **Agent Context** | 최대 16,000 문자; 새로운 프로젝트 세션에 포함 하 고 모델 공급자에 전송 | Credentials 또는 실행된 작업 요청 |
| 세션 **Title** | 표시 제목, 최대 80 문자 | 프로젝트 컨텍스트 또는 지점 식별자 |
| 세션 **Description** | 조직 설명, 최대 1,000 문자 | 새로운 사용자 메시지 |
| 모델 제공업체 | 연결, 계정 및 구성 모델 카탈로그 | Agent-framework 설치 |
| 에이전트 프레임워크 | 작업 수행에 사용되는 Runtime | Notebook 해석기 |
| Python/R 런타임 | Notebook 실행에 사용되는 Interpreter | 모형 또는 그것의 reasoning-effort 조정 |
| 메모리 | 자신의 범위와 리콜 컨트롤을 가진 저장된 노트 | 완전한 대화의 역사 |
| 스킬 | 재사용 가능한 방법 지침 및 파일 | 이미 의존성을 설치하거나 서비스 자격 증명 |

## 고급: 작업 API 구성 {/* #advanced-task-api-configuration */}

### 작업 API을 통해 생성 된 새로운 세션 {/* #new-sessions-created-through-the-task-api */}

작업 런너는 각 필드를 별도로 해결합니다. 다음의 선행은 **새로운 소식** Task API 세션에 적용되며, 기존 데스크탑 대화에 상당히 민감하지 않습니다.

| (주) | 해결책, 가장 높은 우선권 첫번째 |
| --- | --- |
| Permission 프로필 | Explicit run request → 프로젝트 세션 기본값 → 애플리케이션 기본값 → `ask` |
| 자동 검토 | Explicit 요청 → 프로젝트 기본 → `false` |
| 메모리 활성화 | Explicit 요청 → 프로젝트 기본 → `true` |
| 법령 정책 | Explicit 요청 → 프로젝트 기본 → `allow` |
| 스페셜리스트 | Explicit 요청 → 설정할 때 프로젝트 기본값 |
| 공급자/모형/거주 | 프로젝트 구성에 대한 Explicit 구성 패치, 또는 효과적인 app/provider 구성 |
| 선택된 Compute 호스트 | Explicit 선택한 ID → 프로젝트 선택 ID |

Compute Hosts를 사용하면 새로운 세션 준비 중에 선택한 ID를 통합합니다. 명시적으로 빈 활성화 호스트 목록은 선택한 호스트가 포함되기 전에 상속된 활성화 목록을 삭제합니다. 기존 세션 설정 업데이트의 경우, 모든 선택된 ID는 활성화된 설정에서 존재해야 합니다.

실제 읽기/업데이트 명령에 대한 [CLI](cli.md) 또는 [작업 SDK/API](api.md) 참조를 사용하십시오. Project session defaults는 구성 계약입니다. 프로젝트 Name/Description 대화상자가 이러한 필드를 노출하지 마십시오.

### 지정된 구성 값 {/* #accepted-configuration-values */}

| (주) | 지불된 값 |
| --- | --- |
| `agentConfiguration.providerId` | Nonempty 설정된 공급자 ID |
| `agentConfiguration.model` | 선택적인 모형 ID; 업데이트 패치는 사용할 수 있습니다 `null` 공급자 기본값으로 재설정 |
| `agentConfiguration.reasoningEffort` | `default`, `low`, `medium`, `high`, `xhigh`, `max`; 실제적인 선택성은 공급자/모형에 달려 있습니다 |
| `permissionProfile` | `ask`, `auto`, `full` |
| `autoReviewEnabled` | 스낵 바 |
| `memoryEnabled` | 스낵 바 |
| `delegationPolicy` | `allow`, `deny` |
| `specialistId` 프로젝트 기본값 | 비empty ID; 정규 세션 구성 패치의 필드가 아닙니다. |
| `computeHosts.enabled`, `.selected` | 비empty 호스트 ID의 배열; 선택해야 할 하위 설정의 활성화 |

schemas는 알 수없는 필드를 거부합니다. 표시된 모델의 존재는 현재 프레임워크 또는 credentials로 선택할 수 없습니다. 구성된 카탈로그 및 가용성 결과를 사용하십시오.

### 공급자 기본 및 사용 가능한 구성 {/* #provider-defaults-and-unavailable-configurations */}

구독 공급자를 위해, 모델을 지정하지 않은 상태로 유지 계정/CLI 소유 기본. 카탈로그에 나열된 첫 번째 모델을 핀하지 않습니다. 저장된 세션 구성이 더 이상 선택되지 않는 경우, 렌더 해결자는 활성 선택 가능한 앱 구성을 사용할 수 있습니다; 사용할 수 없는 경우, 사용할 수 없습니다. 선택된 모델을 검사하여 변경된 공급자 후에 오래된 일을 재개할 때.

### 업데이트 및 재시작 규칙 {/* #update-and-resume-rules */}

편집하기 전에 기존 세션의 현재 구성을 읽으십시오. **`expectedRevision`**, 업데이트와 비 부정 정수를 포함. 서버는 `session_revision_conflict`로 출력된 개정판을 거부합니다. 또한 세션이 활발한 작업을 하면서 업데이트를 거부하거나 idle/error state 밖에 있습니다.

공급자 변경은 명시된 모델 또는 `model: null`을 사용하여 새로운 공급자의 기본을 선택하십시오. 공급자를 바꾸는 동안 모형을 진동하는 것은 침묵적으로 오래된 공급자의 모형을 전 실행하지 않습니다. 모델 리셋은 빈 문자열과 다릅니다.

공급자를 변경하려면, 모델, 노력, 메모리 또는 기존 작업 API 세션을 재작성하기 전에 Compute Hosts를 활성화하고 세션 구성 업데이트 작업을 먼저 사용합니다. 이력서 요청에서 이러한 생성 시간 필드를 공급 `invalid_request`을 반환합니다. 작업 디렉토리는 세션의 canonical 디렉토리와 일치해야 합니다.

Project-default 업데이트는 **`expectedUpdatedAt`**, 현재 프로젝트에서 긍정적 인 정수 타임스탬프 및 패치를 사용합니다. `null` 프로젝트 기본 필드는 무시할 수 있습니다; 현장 유지. 기본을 업데이트하면 향후 세션 생성을 관리하고 기존의 출력 증거를 다시 작성하지 않습니다.

## 호스트 지침 및 비밀 저장 선택 {/* #host-instructions-and-secret-storage-choices */}

Saved Compute Host 지침 및 감지 된 리소스는 별도입니다. 빈 저장된 명령 문서는 성공적인 자원 조사에서 명백합니다. 에이전트 보조 교체는 현재 저장된 텍스트를 가드로 사용해야합니다. [감사합니다.](../guides/remote-compute.md#keep-host-instructions-separate-from-detected-resources) 참조; 이 내부 계약은 공개 작업 API에서 분리됩니다.

Credential 저장은 프로젝트/제목 선호도가 아닌 시작 선택입니다. 범위에 [Linux 파일 모드](server.md#credential-storage-on-headless-linux), OS-store 기본 및 마이그레이션 제한을 참조하십시오. 세션 구성 JSON의 credential-store 플래그를 배치하지 마십시오.

## 관련 링크 {/* #related-boundaries */}

승인 범위 및 정책 주문의 경우 [권한](permissions.md)을 사용하십시오. 휴대용 Skill/Specialist/Connector 문서를 위해, 사용 [패키지 형식](packages.md). 패키지 수출은 세션 구성 또는 저장된 계정 비밀의 덤프가 아닙니다. 데스크톱 세션과 로컬 웹 서비스 간의 차이를 위해 [Headless 서비스](server.md)을 사용합니다.

출처: [호스트 계약](https://github.com/aipoch/open-science/commit/04adfd61), [시작 자격 모드](https://github.com/aipoch/open-science/commit/3411d23c).

기술 참조 : [프로젝트 계약](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/projects.ts) · [구성 schemas](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-configuration.ts) · [작업-runner 해결책](https://github.com/aipoch/open-science/blob/v0.26.0/src/main/tasks/task-runner.ts) · [공급자 fallback](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/session-agent-configuration.ts).
