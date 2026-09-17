---
title: "태그로 구성"
last_update:
  date: '2026-09-16'
---

# 태그로 구성 {/* #organizing-with-tags */}

태그 **Skills, 커넥터, 전문가 및 참조** 구성. 그들은 모든 세션 또는 임의 디스크 파일에 보편적 인 라벨이 아닙니다. **Settings → Tags**을 사용하여 태그를 만들고 할당 된 리소스를 검색하십시오.

태그를 할당 한 후 세부 사항을 열고 목록 리소스를 선택합니다. 태그 할당을 제거하면 자원 자체를 배치합니다.

## 생성 및 편집 {/* #create-and-edit */}

1. **New Tag**을 열고 이름을 입력하고 아이콘과 색상을 선택합니다.
2. **Create**을 선택합니다. 새로운 행과 제로 자원 상태를 확인합니다.
3. **Edit Tag**을 선택하여 현재 값을 재시동합니다. **Save**는 편집을 커밋합니다; **Cancel**는 초안을 덮습니다.

![Transcriptomics 태그 양식](/img/open-science/guides-walkthrough/30-tag-create.webp)

| 분야/제어 | 옵션 및 행동 |
| --- | --- |
| 이름 | 요구 사항; 이름은 케이스에 상관없이 독특합니다. |
| 아이콘 | 꼬리표, 별, 책갈피, 플라스크, 책, 데이터베이스, 부호 또는 Bot. |
| 색상 | 회색, 빨강, 주황색, 호박색, 녹색, 파란, 자주색 또는 분홍색. |
| 생성 / 저장 | 새 태그를 작성하거나 기존 태그의 편집을 저장하십시오. 빈 이름은 제출할 수 없습니다. |
| 취소 / 태그로 다시 | 현재 초안을 저장하지 않고 양식을 남겨주세요. |

**태그를 저장할 수 없습니다**을 저장하면, 케이스 전용 차이를 포함하여 기존 태그와 이름을 비교하고, 고유 한 이름을 다시 구합니다. 그 오류는 일반적입니다; 그것은 자체가 실패한 모든 원인을 설정하지 않습니다.

## Assign 및 자원을 찾기 {/* #assign-and-find-resources */}

Skill, Connector, Specialist 또는 참조를 열고 태그 컨트롤을 사용하여 태그를 선택합니다. 설정 → 태그로 돌아가고 태그 행을 선택합니다. 리소스 카운트를 읽으면 **Filter resources by type** 및 **Search tagged resources**을 함께 사용하십시오. Type selector는 모든 리소스, Skills, 커넥터, 전문가 및 참조를 제공합니다. 예상된 리소스가 누락된 경우 명확한 검색 및 재설정.

자원의 태그 피커에서 **태그 검색**의 유형은 **↑ / ↓**을 사용하여 경기와 **이름 &#42;**를 선택하여 이동합니다. 이름이 존재하지 않는 경우 **“이름” 만들기**을 선택하고 할당하십시오. 저장 후 선택한 태그를 확인합니다.

태그 이름은 혼자서 서비스를 연결하지 않습니다, 부여 권한을 부여하거나 에이전트에 Skill을 추가. 그 통제는 자원과 그것의 기능 바인딩에 남아 있습니다.

<p className="example-label"><strong>실습 예제</strong> Transcriptomics 태그를 통해 Omics Archives 찾기</p>

**Transcriptomics의 특징**을 **Omics 아카이브**로 할당하면 태그 세부 사항을 엽니다. 이 예에서 **1 자원**을 보여줍니다. `Omics` 검색은 Connector이 눈에 띄는 것을 유지하고 세부 사항을 열 수 있습니다. 이 단계를 반복 할 때 자신의 태그와 리소스 이름을 사용하십시오. 할당 제거는 자원 intact를 나타낸다.

![Assigned Omics Archives는 태그를 통해 찾을 수 있습니다.](/img/open-science/guides-walkthrough/35-tagged-connector.webp)

## 태그 목록 주문 {/* #order-the-tag-list */}

**Favorites**은 첫 번째 체류합니다. Drag **주문 &#91;이름&#93;**, 또는 핸들을 초점하고 화살표 키를 사용하여 사용자 정의 태그를 이동합니다. 목록에서 새로운 위치를 확인하십시오.

![태그 주문 및 빈 자원보기](/img/open-science/guides-walkthrough/31-tag-reorder.webp)

## 태그 제거 {/* #remove-a-tag */}

**Delete Tag**을 선택하고 **제거하기 위한 할당**을 검사합니다. 태그 삭제는 그 할당을 제거하지만 리소스를 유지. **Cancel**은 태그와 그 할당을 모두 유지합니다.

![삭제 범위, 이 walkthrough에서 취소](/img/open-science/guides-walkthrough/32-tag-delete-boundary.webp)

귀하의 목적은 하나의 할당을 제거 할뿐만 아니라 모든 태그를 삭제하는 것보다 리소스에 해당합니다. 수집에 종이를 구성하는 [문헌 라이브러리](./library.md)를 사용하십시오; 태그 및 컬렉션은 다른 용도로 사용됩니다.

출처: [태그 패널](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/TagsPanel.tsx), [회사연혁](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ResourceTagControls.tsx).
