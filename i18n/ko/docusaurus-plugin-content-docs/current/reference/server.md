---
title: "서비스 및 브라우저 액세스"
last_update:
  date: '2026-09-14'
---

# 서비스 및 브라우저 액세스 {/* #headless-service-and-browser-access */}

로컬 서비스는 headless backend와 localhost 브라우저 인터페이스를 제공합니다. SSH Compute 호스트와 Remote.It 브라우저 페어링과 구별됩니다. 클라이언트를 연결하기 전에 호스트에 대한 인증 및 자격 증명 설정을 선택하십시오.

## 대상 선택 및 발견 {/* #target-selection-and-discovery */}

| 옵션 정보 | 관련 상품 |
| --- | --- |
| `--port PORT` | override localhost 서비스 포트; 유효한 정수 1–65535 |
| `--app-path PATH` | 설치된 응용 프로그램 실행을 선택; 실행 가능한 경로, 중재 프로젝트 폴더가 아닌 |
| `--config-root PATH` | 개발 빌드 구성 override; 패키지 시작은 그것을 거부 |
| `OPEN_SCIENCE_CONFIG_ROOT` / `OPEN_SCIENCE_STORAGE_ROOT` | Explicit 구성 discovery override 여기서 지원되는 |
| 자동 발견 | 생산의 앞에 발달 윤곽을 시도하고, dead/unhealthy 후보자를 건너 뛰기 |

명시된 구성 위치는 그 디렉토리에 대한 발견을 제한합니다. 시작하거나 중지하기 전에 의도 된 프로필에 대한 상태를 확인합니다. 상태가 `running:false`을 반환하면 아래 Lifecycle 명령을 따르십시오. 오픈 데스크톱 창은 다른 서비스/프로필을 사용할 수 있습니다.

서비스 상태 파일은 `web-service.json`입니다. 인증 실패는 기록 된 프로세스를 죽이는 권한이 없습니다. 폐쇄 부호는 진단을 위한 살아있는 비 건강 레코드를 보존하고 다른 과정에 의해 재사용될지도 모르다 PID를 신호하는 것을 피합니다.

## 초기화 및 체크 readiness {/* #readiness */}

`open-science init`을 사용하여 앱을 시작하지 않고 기본 구성 디렉토리를 준비하십시오. `--profile` aliases `--config-root`는 개발 프로파일 override가 지원되는 유일한; 그것은 패키지 - 빌드 제한을 우회하지 않습니다. 데비안 패키지는 응용 프로그램에 따라 CLI을 설치합니다. Codex 준비 및 로그인에 대한 [터미널 설정](cli.md#terminal-setup) 참조.

의도적인 `start --no-open` 후, `open-science doctor --json`을 실행합니다. 전반적인 `ready`, 개인적인 검사 및 제안된 다음 활동을 검열하십시오; 프로세스 종료 코드는 혼자 읽을 수 없습니다. 기존의 정통 로컬 인터페이스에서 서비스를 유지하십시오. 이 헤드리스 서비스를 시작하려면 Remote.It을 구성하거나 공개 엔드포인트를 게시하지 않습니다.

## Lifecycle 명령 {/* #lifecycle-commands */}

| 명령 | 결과 | 옵션 및 경계 |
| --- | --- | --- |
| `open-science start` | 백엔드를 시작하고 브라우저를 엽니다. | 기본 포트 44100 |
| `open-science start --no-open` | 브라우저를 열지 않고 시작 | 의도적인 현지 서비스 세션 사용 |
| `open-science status --json` | 인쇄 기계 읽기 쉬운 서비스 국가 | 누락된 서비스 반환 `{"running":false}` 및 종료 코드 1 |
| `open-science url` | 인증된 브라우저 URL을 인쇄 | 지역 접근 권한을 포함합니다; 출판된 예시로 붙여넣지 마십시오. |
| `open-science stop` | 인증된 우아한 폐쇄 | stale state 파일에서 PID를 장님으로 신호하지 않습니다. |
| `open-science stop --json` | 종료 결과를 보고 | 아래 결과 표 참조 |

이 명령 중, **상태 및 중지 지원 `--json`; 시작 및 URL은하지 않습니다**. 로컬 `start --json` 체크는 `invalid_cli_usage`을 종료 코드 2로 반환합니다. 스크립트 실행을 위해, `start --no-open`을 실행, 다음 `status --json`.

### 폐쇄 outcomes {/* #shutdown-outcomes */}

| JSON `result` | 이름 &#42; |
| --- | --- |
| `already-stopped` | 라이브 서비스 기록이 없습니다 |
| `daemon-stopped` | Authenticated 독립 데몬 종료 |
| `web-service-stopped` | 웹 서비스 중지; 데스크톱 응용 프로그램은 실행 남아 |

거절된 요청 또는 놓인 종료 마감 기한은 실패를 반환합니다. 오류를 읽고 실제 대상 상태를 검사합니다. 명령이 반환되기 때문에 중지된대로 서비스를 보고하지 마십시오.

## 인증 및 브라우저 접근 {/* #authentication-and-browser-access */}

SDK은 로컬 서비스를 발견하고 로컬 인증 토큰을 읽고 요청 헤더에 전송합니다. 정규 인간/JSON/JSONL 작업 출력은 그 토큰을 인쇄하지 않습니다. `url`은 정통 브라우저 항목을 생산하는 의도적 예외입니다.

localhost 서비스는 다른 컴퓨터에서 자동으로 액세스 할 수 없습니다. 원격 브라우저 액세스는 자체 설정된 액세스 모드, 페어링 및 신뢰할 수 있는 브라우져 수명주기를 사용합니다. SSH Compute 대신 원격 실행 호스트를 구성하기 위해 작업을 보냅니다.

Remote.It 쌍용 [원격 브라우저 액세스](../guides/remote-access.md), SSH 작업용 [먼 compute](../guides/remote-compute.md)를 사용하십시오. Neither Flow는 로컬 서비스 문서 URL을 변경하여 구성됩니다.

### 헤드리스 Linux에 대한 Credential 저장 {/* #credential-storage-on-headless-linux */}

기본값은 OS-protected 저장입니다. Linux 헤드리스 백엔드에서 사용 가능한 키링없이, 명시적인 대안을 선택하십시오.

<p className="example-label"><strong>예시</strong> 파일 credential 저장을 가진 Linux headless 서비스 시작</p>

~~~bash
open-science start --credential-store=file --no-open
~~~

| 제품 정보 | 뚱 베어 |
| --- | --- |
| Omitted 옵션 / --credential-store=os | OS-protected 상점을 요구하십시오 |
| --credential-store=파일 | Linux 헤드리스에서만 설정 관리된 비밀을 암호화할 수 있음 |
| 데스크탑, macOS 또는 Windows 출시 | 파일 모드는 지원되지 않습니다. |
| Already-running 백엔드 | Explicit 형태 선택은 거절됩니다; 프로세스의 모드를 변경하지 않습니다. |
| 다음 시작 | 형태를 다시 지정하십시오; 그것은 저장 된 선호도 없습니다 |

파일 모드는 구성 루트에서 settings.json 및 credentials.json을 사용하여 원자 쓰기 및 POSIX 모드 0600을 작성합니다. 파일:v1: 값은 base64-encoded, **암호화되지 않음**입니다. 그것을 읽을 수있는 사람은 비밀을 복구 할 수 있습니다; 저장소, 이미지 및 지원 보고서에서 이러한 파일을 제외합니다.

선택은 새로운/업데이트 관리된 공급자 열쇠, 앱 관리된 구독 토큰, GitHub/literature 열쇠 및 공유된 MCP/OAuth 비밀에 적용합니다. Compute passwords/protected Compute 자료는 그들의 분리된 OS 저장 필요조건을 지킵니다; 외부 에이전트 프레임 워크 로그인 매장은 자신의 규칙을 따릅니다. sandbox는이 옵션에 의해 비활성화되지 않습니다.

암호화 된 값은 자동으로 마이그레이션되지 않으며 여전히 원래 OS vault가 필요합니다. 사용할 수없는 경우, 정상적인 지원 양식을 통해 자격 증명을 다시 입력합니다. File ref는 명시된 파일 모드를 사용하여 이전 릴리스와 호환됩니다. OS 스토리지에 대한 자격 증명을 반환하려면 OS 모드에서 다시 시작하고 vault가 사용할 수 있는 동안 명시적으로 교체하십시오.

구성이 컨테이너 교체를 살아야 할 때 persistent 저장을 사용하십시오. Shutdown는 윤곽을 유지합니다; 처분할 수 있는 콘테이너 filesystem를 대체해서 그것을 제거할 수 있습니다. [credential 저장 계약](https://github.com/aipoch/open-science/blob/v0.27.0/packages/open-science/CLI.md) 참조.

## 앱 업데이트 행동 {/* #application-update-behavior */}

`open-science update`은 설치된 응용 프로그램을 업데이트합니다. npm 클라이언트를 별도로 업데이트하십시오. 명령은 필요한 경우 로컬 서비스를 시작하고 그 서비스를 사용할 수 있습니다.

| `update --json` 회사 정보 | 회사연혁 |
| --- | --- |
| `up-to-date` | 새로운 적용 가능한 버전이 없습니다. |
| `install-started` | Updater는 임명 handoff를 받아들여집니다; 최종 설치된 버전은 그 invocation에 의해 확인되지 않습니다. |
| `manual-action-required` | 보고된 설치자 경로/다음 단계 따르십시오 |
| `blocked` | Active 연구는 in-place 갱신을 방지합니다; 관련 상품 `blockedBy` |

지원은 서비스 기능 `update-cli-v1`를 요구합니다. 더 오래된 임명은 추측한 먼 절차 대신 수동 갱신을 요구할 수 있습니다. 인쇄 된 결과를 유지하고 설치 후 응용 프로그램을 확인합니다.

[Lifecycle 및 discovery 구현](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/cli.mjs), [구성 discovery](https://github.com/aipoch/open-science/blob/v0.26.0/packages/open-science/config-root.mjs). 작업 플래그 및 종료 코드의 경우 [CLI](./cli.md)을 참조하십시오. 프로그래밍 통화의 경우 [작업 SDK](./api.md)을 참조하십시오.
