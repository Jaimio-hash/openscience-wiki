---
title: "새로운 연구 주제에 대한 핵심 읽기 목록 구축"
last_update:
  date: '2026-09-16'
---

# 새로운 연구 주제에 대한 핵심 읽기 목록 구축 {/* #build-a-core-reading-list-for-a-new-research-topic */}

연구 주제로 논문을 찾으려면 [저널 클럽 주제 검색 워크플로](journal-club.md)를 참고하세요. 아래 PRISMA 예시는 이미 알고 있는 DOI 세 개로 시작하여 해당 기록의 확인, 저장, 읽기를 보여 줍니다.

<p className="example-label"><strong>실습 예제</strong> PRISMA 독서 컬렉션 구축</p>

체계적인 검토를 준비하고, 더 넓은 읽기 전에 작은, 현기성 시작 수집을 필요로 합니다. 이 walkthrough는 3개의 출판된 종이에서 PRISMA 보고 지도 팩을 건설하고, 대리인의 발견을 검토하고, 프로젝트에 의하여 받아들여진 기록, 그리고 openly 유효한 PDF를 붙입니다.

**공급 능력:** 연구 프로젝트와 관련된 세 개의 레코드 라이브러리 컬렉션, 한 개의 체크 풀 텍스트 첨부 및 재사용 전에 확인되는 메타 데이터가있는 독서 목록 artifact. 이것은 씨앗 수집, 소진 검색 또는 증거 합성되지 않습니다.

자신의 주제를 위해, 씨앗 종이 및 수집 / 프로젝트 이름을 대체; 각 종이의 실제 메타데이터를 확인하고 전체 텍스트를 확인할 수 있습니다.

## 소스 및 준비 {/* #sources-and-preparation */}

작업 모델 연결 및 영어 응용 프로그램 인터페이스를 사용합니다. 예를 들어 Codex 구독을 사용했습니다. [프로젝트 및 소스 폴더](../guides/projects.md)을 사용하여 **PRISMA - Systematic review reading pack**을 만듭니다.

| 이름 &#42; | DOI | 팩의 역할 |
| --- | --- | --- |
| 페이지 외, 2021, *PRISMA 2020 문 : 체계적인 리뷰보고를위한 업데이트 된 가이드 라인* | `10.1371/journal.pmed.1003583` | 업데이트 된 보고 안내; 제목의 2020은 출판 연도가 아닙니다. |
| Moher 등, 2009, *체계적인 리뷰와 메타 분석에 대한 선호된 보고 항목: PRISMA 성명* | `10.1371/journal.pmed.1000097` | 역사 문. |
| Liberati 외, 2009, *PRISMA 문 ... 설명 및 Elaboration* | `10.1371/journal.pmed.1000100` | 역사 설명; 다른 저자 목록을 가진 별도의 종이. |

출판사 페이지는 bibliographic identities를 설치합니다: [2021 성명](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)· [2009 성명](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000097), 및 [2009 설명](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000100)...

## 1. 경계 후보 목록에 대한 질문 {/* #1-ask-for-a-bounded-candidate-list */}

**Ask anything**에서 식별자, 목적지 및 정지 상태와 요청을 입력하십시오.

```text
Build a core reading list for our systematic-review reporting project.
Look up only these DOIs:
10.1371/journal.pmed.1000097
10.1371/journal.pmed.1000100
10.1371/journal.pmed.1003583
Use the literature library tools to retrieve bibliographic metadata and
stage the records for my Inbox review. Do not accept candidates for me.
Save reading-list.md with each title, authors, year, DOI, source URL and
suggested reading order. Label the 2009 papers as historical. Do not
claim to have read full text unless you actually retrieved it.
```

예정된 모델을 선택하고 **Ask for approval**을 활성화하고 **Send message**을 선택합니다. 당신이 요구한 것을 검사할 필요가 있을 때 공구 활동을 확장하십시오. 실행은 관련 Skill을 읽을 필요가 있을 수 있습니다. 대리인 prose에 있는 Skill 이름은 그것의 지시가 적재된 것을 증명하지 않습니다.

**Save to Literature Inbox?**이 나타나면, 가동을 검토하고 의도한 저장을 허가합니다. 저축 후보자는 도서관에 받아 들일 수 있습니다.

![단계 문학 후보에 대한 권한](/img/open-science/prisma-walkthrough/03-inbox-save-approval.png)

## 2. 접수하기 전에 각 후보자 검토 {/* #2-review-each-candidate-before-accepting */}

**Library → Inbox**을 엽니다. 이 실행 배지를 보여 **3**, 각 행은 제목을 표시, 첫 번째 저자, 출판 년과 **Crossref를 통해 발견**.

![3 개의 실제 PRISMA 종이를 기다리고 검토](/img/open-science/prisma-walkthrough/04-inbox-three-papers.png)

1. 후보 제목을 선택하여 세부 사항을 열 수 있습니다.
2. **Provider**, 그 소스 링크 및 **Identifiers → DOI**을 통해 의도한 종이에 체크하십시오.
3. 저자의 주문, 년 및 출판사 기록 비교. 비슷한 제목은 두 개의 레코드가 동일한 종이임을 설정하지 않습니다.
4. 정체성 일치시 **Accept**을 선택하십시오. 후보자는 Inbox에서 사라지고 라이브러리 레코드가됩니다.
5. 다른 두 가지 반복. 배지는 3에서 2로 1로 변경됩니다. 최종 상태는 **Inbox is clear**이었다.

![후보자의 Crossref 소스 및 정확한 DOI](/img/open-science/prisma-walkthrough/05-inbox-doi-source.png)

| Inbox 통제 | 뚱 베어 | 사용 상황 |
| --- | --- | --- |
| 후보 제목 / **View details** | 공급자 및 식별자 증거를 엽니다. | unfamiliar 또는 ambiguous 종이를 받아들이기 전에. |
| **Accept** | 도서관에 대한 후보를 홍보합니다. | 당신은 그것의 정체성과 relevance를 검사했습니다. |
| **Dismiss** | 대출 검토 큐에서 후보를 제거. | 불확실하거나 수집을 입력하지 않아야합니다. 메타데이터를 복구하지 않습니다. |
| **Search references** | 현재보기를 좁은. | 더 큰 배치에 식별자 또는 제목을 찾습니다. |
| 줄 체크박스 / **Select all** | 사용 가능한 일괄 작업에 대한 후보를 선택합니다. | 예정된 선택을 검사한 후에만; walkthrough는 개별적으로 받아들여집니다. |

## 3. 프로젝트에 유용한 컬렉션 만들기 {/* #3-make-the-collection-useful-to-a-project */}

sidebar **New collection** 컨트롤과 함께 컬렉션 만들기:

- **이름:** `PRISMA reporting - Core reading`.
- **묘사:** 상태 업데이트 및 과거 보고 지도를 포함. 설명은 조직 텍스트, 에이전트 지침이 아닙니다.
- **Create collection** 선택; 이름은 요구됩니다, 그러나 묘사는 선택적입니다. **Cancel** 및 **Close**는 초안을 버려.

![목적별 독서 컬렉션](/img/open-science/prisma-walkthrough/06-create-collection.png)

**All references**에서 `PRISMA`을 검색합니다. 정확히 세 개의 임의의 레코드가 표시되어 체크 박스를 선택하고 **Add to collection → PRISMA reporting - Core reading**을 사용하십시오. 작업은 선택을 취소합니다. 다시 세 개의 레코드를 선택, 다음 **Add to project → PRISMA - Systematic review reading pack**을 사용합니다.

컬렉션을 열고 세 개의 레코드를 확인합니다. 프로젝트와 수집 체크박스 모두 확인하기 위한 참조 세부 사항을 엽니다. 이들은 공유 기록에 대한 링크, bibliography의 3 개의 추가 사본.

![완성 된 3 종이 수집](/img/open-science/prisma-walkthrough/07-core-reading-collection.png)

## 4. 첨부파일 {/* #4-attach-usable-full-text */}

2021 용지를 열고 **Find full-text PDF**을 선택합니다. 이 실행에서 유럽 PMC를 반환합니다. **Add attachment**을 선택하기 전에 **Open source** 검사.

![전체 텍스트 소스를 발견](/img/open-science/prisma-walkthrough/08-full-text-source.png)

소스가 발견되었지만 **Add attachment**은 **PDF could not be added**을 반환했습니다. 로그인 요구 사항, 만료된 링크 및 50 MB 제한을 포함하여 가능한 메시지 목록; 원인을 식별하지 않습니다.

복구하려면, [게시자 기사 페이지](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003583)에서 오픈 가능한 PDF을 다운로드하십시오. 동일한 참고로 돌아와 **Add PDF**을 사용합니다. 다운로드된 파일을 선택한 다음 첨부 파일에서 **프리즘 2020-statement.pdf**을 엽니다. 성공적으로 첨부된 파일은 **모델 번호: 806.1**과 **15 페이지** 미리보기를 보여준다. 기록에 대한 페이지에 제목과 DOI을 확인합니다.

![게시자 PDF 성공적으로 첨부 및 오픈](/img/open-science/prisma-walkthrough/10-publisher-pdf-preview.png)

눈에 띄는 소스 결과는 첨부 된 PDF이 아닙니다. 붙어있는 PDF는 대리인이 그것을 읽는 것을 증명하지 않습니다. **Read with agent**은 이후의 요청을 위한 읽기 컨텍스트를 공급하는 별도의 동작입니다.

<span id="5-audit-the-generated-reading-list" />

## 5. 자주 묻는 질문 {/* #5-check-and-save-the-reading-list */}

**reading-list.md**을 열고 각 제목, 저자 목록, 출판일 및 DOI을 비교하여 출판사 페이지가 위와 비교합니다. 참조로 <a href="/docs/examples/prisma/core-reading-list.md" download>check-list 예제</a>을 사용하십시오. 이 다운로드는 curated 전기입니다; 그것은 응용 프로그램의 이전 저장 된 버전에서 분리됩니다.

1. 업데이트 된 진술을 위해, 출판 연도 **2021**을 제목이 PRISMA 2020라고도합니다.
2. 2009 진술을 위해, 4개의 개인적인 저자 **그리고 PRISMA 그룹**를 유지합니다. 라이브러리 메타데이터의 그룹에 **Name type → Organization**을 사용합니다.
3. 2009 설명의 경우, 자신의 10-author 목록을 유지; 문의 저자를 복사하지 마십시오.
4. 생성된 보고서가 다를 경우, 라이브러리 레코드를 수정한 후, 수정된 레코드를 사용하여 **reading-list.md**의 새로운 관리 버전을 명시적으로 요청합니다.
5. 새로운 파일을 열고 다운로드하기 전에 모든 3 항목과 DOI 링크를 확인합니다. metadata를 읽으면 저장된 보고서를 다시 작성하지 않습니다.

다음과 같은 보정을 요청:

```text
Regenerate reading-list.md from the three accepted records. Preserve their
separate complete author lists, including the organization author The PRISMA
Group for DOI 10.1371/journal.pmed.1000097. Use 2021 as the publication year of
the PRISMA 2020 statement. Keep all DOI and publisher links. Save a new managed
version and reopen it. Describe metadata lookup and available attachments
accurately; do not claim full-text analysis.
```

## 합격 검사 목록 및 범위 {/* #acceptance-checklist-and-scope */}

- 수집 및 프로젝트는 각각 세 개의 의도 된 레코드를 노출합니다.
- 각 DOI는 일치한 종이를 엽니다; 2개의 2009 종이는 다른 저자를 유지합니다.
- 업데이트 된 진술의 출판 년은 2021입니다.
- PDF 미리보기는 2021 레코드를 열고 일치합니다. 실패한 다운로드는 첨부 파일로 계산되지 않습니다.
- Reading-list 텍스트는 metadata lookup, 수동 합격 및 실제 전체 텍스트 판독을 구별합니다.

이 컬렉션은 경계 읽기 작업을 지원합니다. 소진 데이터베이스 검색, 전체 텍스트 합성 및 완료 체계적인 검토는 추가 방법 및 증거를 필요로 합니다.

새로운 독서 세트를 위해, 법인 저자를 위한 [이름 유형 → 조직](../guides/library.md#inspect-and-correct-metadata)를, 그 후에 재생하고 bibliography를 검사하십시오. 상속 PDF 폴더의 경우, [일괄 수입](../guides/library.md#add-or-import-a-record)을 클릭하여 세트를 검토합니다. 라이브러리 레코드를 업데이트하는 것은 저장된 판독 목록 artifact를 자동으로 다시 작성하지 않습니다.
