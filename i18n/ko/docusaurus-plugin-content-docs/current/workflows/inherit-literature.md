---
title: "연구자의 문학 컬렉션을 통해"
last_update:
  date: '2026-09-16'
---

# 연구자의 문학 컬렉션을 통해 {/* #take-over-a-researchers-literature-collection */}

이 워크플로우는 기존 bibliography로 시작합니다. 주제로 시작하는 경우 [저널 클럽 워크플로우를 찾아서 후보 논문을 검토하십시오.](journal-club.md)을 먼저 사용하십시오.

<p className="example-label"><strong>실습 예제</strong> perovskite 태양 세포 안정성 handover</p>

동료가 당신에게 전기를 손을 잡을 때, 먼저 그것에 무엇이고 아직도 독서를 필요로하는 것을 설치하십시오. 이 예제는 20은 perovskite 태양 셀 안정성에 대한 참조를 출판했으며 Library에서 그룹을 만들고 독서 계획을 가진 핸드 오버 재고를 생산합니다.

**공급 능력**:는 소스 식별자 및 다음 작업과 함께 20-row CSV의 프로젝트 연결 컬렉션, 영어 판독 계획입니다. 공급된 표본은 인용 기록, 붙어 있던 PDFs 없이 포함합니다; 그것의 주제 상표는 규정입니다.

## 자주 묻는 질문 {/* #prepare-the-collection */}

다운로드 <a href="/docs/examples/research-workflows/perovskite-stability.ris" download>20-reference RIS 파일</a>. 그 타이틀, 저자, 년, 저널 및 DOIs는 Crossref 레코드에서 왔습니다. 이것은 체계적인 수색이 아닌 가르침 선택입니다. 자신의 손전등의 경우, 동료의 인용 수출을 사용 하 여 원래 PDF를 따라 유지.

1. [프로젝트 및 소스 폴더](../guides/projects.md)을 사용하여 프로젝트를 작성한 다음 **Library**을 엽니다.
2. **Perovskite 태양 셀 안정성**라는 컬렉션을 만듭니다.
3. **Add → Import references**을 선택하고 RIS 파일을 선택하고 가져 오기 미리보기를 검토하십시오. 확인하기 전에 대상 수집 및 복제 처리 확인.
4. 수입 결과를 검사합니다. 이 예제는 **20** 레코드를 생성, **0** 재사용, 건너 뛰거나 실패 기록.
5. 컬렉션을 열고, 레코드를 선택하고 **Add to project**을 사용하여 프로젝트에 연결하십시오.

![완료된 수입은 20에 의하여 창조된 참고를 보고합니다](/img/open-science/research-workflows/perovskite-import-complete.webp)

수출이 중복되거나 불완전 식별자가 있다면, 최종 재고를 수용하기 전에 해당 레코드를 해결하십시오. 수입 참조는 전체 텍스트를 첨부하지 않습니다. 이미 가지고있는 PDF에 대한 참조의 **Add PDF** 제어를 사용하여 PDF 제목과 DOI 레코드를 비교하십시오. [도서관 및 인용](../guides/library.md) 참조.

수집을 열고 Footer의 **20 참조** 카운트를 확인하십시오. 합성을 요구하기 전에 **첨부파일** 열을 검사합니다. 이 예제에서는 전체 텍스트에서 발견하는 것보다, 다음 단계는 bibliographic 재고를 요청합니다.

![실제 첨부 파일 상태를 가진 수입된 20가지 설정 컬렉션](/img/open-science/research-workflows/perovskite-collection.webp)

## 자주 묻는 질문 {/* #ask-for-a-usable-handover */}

프로젝트에서 대화를 열고 작업 모델을 선택하십시오. 명시적으로 수집된 이름:

```text
Prepare an English handover inventory for the Library collection named
Perovskite Solar-Cell Stability. Inspect all 20 records and their actual
attachment state. Save perovskite-handover.csv with title, DOI, year,
provisional topic based on title, full-text status and next action.
Save perovskite-handover.md with a short reading plan.
Do not infer study results from titles or claim to have read unavailable
PDFs. Do not search for additional papers or delegate.
Finish after saving the files; I will open them to check the results.
```

더 큰 컬렉션을 위해 합성을 요청하기 전에 재고를 요청하십시오. PDF, 주변 기록 및 읽지 않은 종이를 미스링하는 것은 handover에서 눈에 띄게 유지해야합니다.

## 저장된 파일 확인 {/* #check-the-saved-files */}

응답이 완료되면 생성된 파일에서 **perovskite-handover.csv**을 엽니다. 이 예에서 저장된 테이블에는 **20 행 및 6 열**이 있습니다. 모든 20 DOIs는 수입한 세트 일치합니다; DOI 또는 출판 연도가 누락되지 않습니다. 모든 전체 텍스트 항목은 PDF이 첨부되지 않습니다.

![견적 요청 20-row perovskite handover 재고 있음 Open-Science](/img/open-science/research-workflows/perovskite-handover-table.webp)

**perovskite-handover.md**을 열고 다음 연구자에 대한 판독 시퀀스가 유용합니다. 그것은 구조체, 재료 개입 및 분석 접근법에 따라, 먼저 넓은 안정성 종이를 건의합니다. 이 컬렉션을 기반으로 한 제안은 실험에 대해 결론을 확인하지 않습니다.

![저장된 판독 계획은 소스 가용성 및 다음 작업을 볼 수 있습니다.](/img/open-science/research-workflows/perovskite-reading-plan.webp)

파일 미리보기의 확장 버튼을 사용하여 계획을 읽을 수 있으며 **Download**은 CSV과 함께 유지하십시오. 모든 제안 된 다음 행동은 공급 된 자료에서 feasible이다. 건의된 독서 순서는 종이가 읽은 것을 증명하지 않습니다.

수집을 사용하여 안정성 결과를 비교하기 전에 관련 전체 텍스트를 얻고 연령 프로토콜, 온도, 조명, 대기 및 엔드 포인트를 기록하십시오. 게시자 업데이트도 확인: [큰 자료 안정성 종이](https://www.nature.com/articles/s41467-022-35400-4)은 전체 텍스트 검토에 속하는 링크 addendum이 있습니다.

예를 들어 저장된 <a href="/docs/examples/research-workflows/perovskite-handover.csv" download>핸드오버 CSV</a> 및 <a href="/docs/examples/research-workflows/perovskite-handover.md" download>독서 계획</a>을 다운로드하여 자신의 출력으로 구조를 비교합니다.
