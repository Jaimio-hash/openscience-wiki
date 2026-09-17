---
title: "Skill 마켓플레이스"
description: "Skill 마켓플레이스에서 연구 방법을 발견, 설치, 업데이트 및 관리합니다."
last_update:
  date: '2026-09-16'
---

# Skill 마켓플레이스 {/* #skill-marketplace */}

**Settings → Skills → Browse Marketplace**을 사용하여 연구 방법을 찾아 설치하고 자신의 저장소를 직접 가져 오기. 설치하기 전에 방법을 검사 할 수 있습니다. 사용 방법 및 사용 가능한 업데이트 적용.

ZIP, 로컬 Skill 또는 특정 GitHub 저장소에 가져 오기 위해 [Skill 수입 및 관리](manage.md)을 사용하십시오. 연구 방법 및 입력의 개요에 대해서는 [Skill 디렉토리](directory.md)을 참조하십시오.

![검색이있는 Skill 마켓 플레이스, 범주 필터 및 설치 버튼](/img/open-science/feature-guides-2026-09/marketplace-browse.webp)

## 적당한 방법을 찾아내십시오 {/* #find-a-suitable-method */}

1. **Marketplace** 및 검색 또는 필터를 범주로 엽니다.
2. Skill의 세부 사항을 열고 목적, 저자, 소스, 라이센스 정보 및 평가 세부 정보를 읽으십시오.
3. 설치하기 전에 프로젝트에 입력, 필요한 도구 및 실행 시간 의존성을 비교하십시오.

카탈로그 서명은 배포 정체성을 확인합니다. 그것은 방법을 설정하지 않습니다 당신의 연구 질문 또는 컴퓨터는 그것의 의존성.

![작성자, 버전, 라이센스 및 설치 작업을 보여주는 Marketplace Skill 세부 사항](/img/open-science/feature-guides-2026-09/marketplace-detail.webp)

## Skill 설치 및 사용 {/* #install-and-use-a-skill */}

1. 선택된 카드에 **Install**을 선택하고 **Installed**을 기다립니다.
2. 설치 Skill을 열고 Main 또는 Specialist의 가용성을 확인합니다.
3. Skill의 요구 사항을 충족하는 입력을 준비한 다음 경계 작업에서 사용하십시오.
4. 생성 된 파일을 열고 귀하의 요청에 대한 결과를 확인합니다. 혼자 설치는 연구가 성공한다는 것을 설치하지 않습니다.

대화에서 Skill을 선택하려면 [Skills 사용](overview.md)을 참조하십시오. [Skills 및 커넥터](../specialists/capabilities.md)을 통해 Specialist의 방법을 구성합니다.

## 여러 Skills 설치 또는 업데이트 {/* #install-or-update-several-skills */}

1. **Batch manage**, **Not installed** 또는 **Updates**를 선택하십시오.
2. 카탈로그를 필터링하고 대상 항목을 선택하십시오. **모든 필터링 결과 선택** 필터의 전체 결과 세트를 선택합니다.
3. **Review selection**을 열고 **Install selected** 또는 **Update selected**를 선택하기 전에 목록을 확인하십시오.
4. 작업을 완료하고 각 결과를 검사합니다. 설치는 순차적으로 실행합니다; Stopping는 현재 품목을 완료할 수 있습니다.
5. 리뷰가 실패하거나 항목을 중지하고 다시 시도하는 것은 필요한 것입니다.

## 업데이트 또는 제거 방법 {/* #update-or-remove-a-method */}

업데이트가 사용할 때, 확인하기 전에 **스킬 업데이트 검토**을 엽니 다. 이전 및 새로운 버전 확인, 영향을받는 전문가, 및 파일 추가, 변경 또는 제거. diff는 선 번호, 빨간 deletions 및 녹색 추가를 보여줍니다. 이진의 경우, 크기 또는 읽을 수 있는 비교, 목록 파일 변경을 사용; unavailable diff는 파일을 변경하지 않습니다.

대화 상자가 로컬 편집을보고 있다면, updating는 그들을 대체합니다. [수출입](manage.md) 당신이 그들을 유지해야하는 경우 먼저. 검토 후 **기존 스킬 업데이트** 만 선택하십시오. 이 Skill 정체성과 Specialist 관계를 보존합니다. **로컬 충돌**의 경우 **설치된 스킬 보기**을 열고 제안할 때 검토 작업을 따르십시오. 차단을 유지하면 로컬 방법을 삭제하는 대신 메시지가 유지됩니다.

설치 Skill의 세부 작업을 사용하여 가용성을 변경하거나 제거하십시오. 변경 후, 의도 된 방법을 Main 또는 Specialist에 사용할 수 확인; 다운로드 된 패키지 및 사용 가능한 방법은 별도의 상태입니다.

## 설치 또는 사용이 실패한 경우 {/* #if-installation-or-use-fails */}

카탈로그 또는 패키지 검증 오류의 경우, 메시지를 유지하고 정상적인 시장 진입을 통해 다시. unverified 다운로드로 패키지를 교체하지 마십시오. Marketplace 브라우징은 공식 배포 서비스를 사용하고 GitHub 로그인이 필요하지 않습니다.

설치가 완료되면 작업이 실행될 수 없으므로 오류에 누락된 의존성 또는 도구를 검사합니다. 소프트웨어 의존성 또는 [Connector 설정](../guides/connectors.md)에 대한 [runtime 설정](../guides/runtimes.md)을 따르십시오. 필요한 서비스를 위해, 그 후에 주어진 입력으로 작업을 재시동하고 저장된 결과를 확인합니다.

## 자신의 Skill을 마켓 플레이스에 제출 {/* #submit-a-skill */}

Marketplace 제출은 GitHub 소스 저장소 및 유지 보수 검토를 사용합니다. **Upload skills**는 로컬 애플리케이션에 메소드를 가져옵니다. **Publish** 개인 Skill 편집기에서 로컬 Skill를 저장합니다. Neither 활동은 대중 시장에서 그것을 나열합니다.

### Skill 준비 {/* #prepare-the-skill */}

1. [Skill 생성 및 테스트](create.md), 스크립트, 참조 및 기타 파일을 포함하여 그것은 필요로한다.
2. GitHub 저장소의 하위 디렉토리에 해당 파일을 업로드 `skills/your-skill-name/`, 와 `SKILL.md` 내부. 필요한 라이센스 통지를 소스로 유지하십시오.
3. 전체 콘텐츠 및 커밋의 전체 SHA를 복사합니다. 제출은 이동 지점이 아닌 고정 개정을 식별해야합니다.

`SKILL.md`는 `name`, `description` 및 `license` 또는 `metadata.license`의 라이센스 선언을 필요로 합니다. 선언 및 포함 된 통지는 당신이 제출하는 실제 콘텐츠를 설명해야합니다.

### 제출 파일 준비 {/* #prepare-the-submission-file */}

공식 [release.config.json 템플릿](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/example/release.config.json)로 시작합니다. 당신의 Skill의 정보로 그 자리 홀더를 대체하십시오:

| (주) | 공급하는 것 |
| --- | --- |
| `id` | 더 낮은 케이스, 안으로 사용되는 hyphenated 이름 `SKILL.md`. |
| `version` | 패키지 버전과 같은 `1.0.0`. |
| `category` | 1 중 `Academic Writing`, `Data Analysis`, `Evidence Insight`, `Protocol Design` 또는 `Other`. |
| `source.repository`, `source.commit`, `source.path` | HTTPS GitHub URL, 전체 40-character 커밋 SHA 및 Skill 디렉토리. |
| `license_files` | 해당 라이선스 파일에 대한 저장소 관련 경로. |

템플릿의 all-zero 커밋은 위주이며 게시 할 수 없습니다. 제출하기 전에 현재 [제출 형식](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/release.config.schema.json)을 확인하십시오.

### 자주 묻는 질문(FAQ) {/* #request-inclusion-and-check-the-published-result */}

마켓 플레이스 저장소의 [관련 기사](https://github.com/aipoch/openscience-skill-marketplace/blob/main/CONTRIBUTING.md)을 따라 Pull 요청을 준비하십시오. 액세스를 작성하지 않은 경우, 포크를 사용합니다. 제출 파일, 소스 위치, 목적 및 로컬 테스트 결과 제공; 페이로드는 소스 저장소에 남아 있습니다. 유지자는 `authoring/submissions/<id>/release.config.json`의 검토 된 구성을 추적 할 수 있습니다; 검토 중의 배치를 확인합니다.

유지자 검토 및 게시 전에 자격이 된 제출을 등록하십시오. 제출된 파일 또는 병합된 풀 요청은 앱에서 Skill을 사용할 수 없습니다. [인증 및 인증](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/README.md) 리뷰 및 출판 단계 설명.

게시 후 **Browse Marketplace → Refresh**로 돌아와 Skill에 대한 검색, 소스 및 버전을 확인하고 설치하십시오. 게시된 Skill을 업데이트할 때 새로운 소스 커밋으로 새 패키지 버전을 제출하십시오. 업스트림 저장소 업데이트에 편집하지 마십시오 자동으로 복사.
