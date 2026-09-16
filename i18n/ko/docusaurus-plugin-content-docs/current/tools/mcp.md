---
title: "커넥터 및 MCP"
last_update:
  date: '2026-09-10'
---

# 커넥터 및 MCP {/* #connectors-and-mcp */}

Connector은 에이전트가 호출 할 수있는 도구를 노출합니다. 이 페이지를 사용하여 통합 유형을 선택하고 readiness를 이해합니다. 필드에 의해 필드 설정, 수입 / 수출 및 연결 관리, [커넥터 구성](../guides/connectors.md)을 따르십시오.

<span id="inspect-an-existing-connector" />

<span id="connection-and-call-errors" />

## 연결 유형 선택 {/* #choose-a-connection-type */}

| 유형 | 그것을 때 사용 | 제품 정보 |
| --- | --- | --- |
| 내장 Connector | 이미 필요한 데이터 소스 또는 운영을 제공합니다. | 의도한 대리인을 위해 그것을 가능하게 하십시오; 몇몇 서비스는 또한 credentials를 요구합니다 |
| 로컬 MCP 서버 | 이 컴퓨터에서 실행하거나 로컬로 사용 가능한 연구 데이터를 읽으십시오. | 설치된 발사기, 서버 및 허용된 입력 경로 |
| 원격 MCP 서버 | 서비스 호스팅 MCP 엔드포인트를 통해 도구를 노출 | 실제 MCP 엔드포인트, 지원된 HTTP/SSE 수송 및 필요한 인증 |

**Molecule**는 국부적으로 구조 연출을 제공합니다; 그것은 원격 데이터베이스가 아닙니다. [과학 데이터베이스](databases.md)의 소스를 선택하거나 [과학 뷰어](viewers.md)을 사용하여 분자 및 시퀀스 파일을 검사합니다. Docker launcher를 선택하면 컨테이너 엔진이나 서버 이미지를 설치하지 않습니다.

## 가용성에서 Distinguish 연결 {/* #distinguish-connection-from-availability */}

이 단계를 순서로 체크하십시오. 다음이 성공한 것을 설정하지 않습니다.

| 기본 정보 | 자주 묻는 질문 | 다음 작업 |
| --- | --- | --- |
| 구성 | 올바른 실행기 또는 endpoint 및 필수 인증 | 더 많은 정보 [Connector 형태](../guides/connectors.md) |
| 관련 링크 | 서버가 응답하고 도구가 발견됩니다. | 연결 결과 및 실제 오류 검사 |
| 에이전트 액세스 | 자원은 Main 또는 의도 된 Specialist에 할당 된 | 에이전트의 기능 바인딩 확인 |
| 작업 | 선택한 도구는 요청을 수락하고 필요한 데이터를 반환합니다. | 사용 방법 [가동 참고](../reference/connector-operations.md) 내장 입력 |
| 연구 결과 | 반환된 식별자, 소스 및 범위는 작업 일치 | 증거로 그것을 사용하기 전에 응답을 검사하십시오 |

사용 가능한 스위치는 성공적인 서비스 호출이 아닙니다. metadata 응답은 전체 텍스트 또는 카운트 매트릭스를 다운로드하지 않습니다. 사용자 정의 행은 구성 편집기를 열 수 있습니다; 내장 세부 사항은 도구 사양을 제공합니다.

## 다음 단계 선택 {/* #choose-the-next-step */}

| 작업 | Main 지침 |
| --- | --- |
| 서버 추가 / 편집, 여러 서버 가져 오기 또는 설정 전송 | [커넥터 구성](../guides/connectors.md) |
| Bind API 열쇠 또는 OAuth 압흔 | [서비스 자격](credentials.md) |
| 작은 서버를 구현하고 도구를 호출 | [사용자 정의 도구 만들기](custom.md) |
| 데이터베이스 작업 필드를 찾습니다 | [Connector 가동 참고](../reference/connector-operations.md) |
| 스크립트에서 연결 관리 | [CLI](../reference/cli.md#manage-connectors-and-credentials) 또는 [SDK](../reference/api.md#connector-management-methods) |

## 실패 단계 진단 {/* #diagnose-the-failing-stage */}

연결 실패를 위해, 발사기, 수송 또는 입증이 실패한지 확인합니다. 연결이 성공하면 호출이 실패하고, 에이전트 가용성을 확인하고 서버 구성을 변경하기 전에 도구의 인수를 확인합니다. [문제 해결](../guides/troubleshooting.md)을 사용하여 실제 반환 오류를 보고합니다.

MCP 발견은 연결 중에 수행됩니다. `host.mcp("server", "tools/list", {})`은 애플리케이션 도구 호출이 아니며 **알 수없는 도구**을 반환 할 수 있습니다. 사용자 정의 예는 또한 내부 알 수없는 샘플 실패를 `connector_unavailable`로 표면; 그 응답은 혼자 운송 실패에서 잘못된 샘플을 구별하지 않습니다.
