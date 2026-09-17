---
title: "종이의 주장을 확인 그것의 그림과 보충"
last_update:
  date: '2026-09-16'
---

# 종이의 주장을 확인 그것의 그림과 보충 {/* #check-a-papers-claim-against-its-figures-and-supplement */}

<p className="example-label"><strong>실습 예제</strong> 98.9% 촉매 효율성은 무엇을 의미합니까?</p>

헤드 라인 번호는 미터 및 실험 조건이 명확할 때만 유용합니다. 이 워크플로우는 촉매 종이와 그 보충을 가지고 있으며, 한 가지 청구에 대한 증거를 찾아서 더 넓은 해석에서 보고된 결과를 분리하는 짧은 보고서를 절약합니다.

**공급 능력**: PDF 페이지와 그림 참조를 가진 영어 주장/evidence/conditions/limits 테이블. 이것은 독립적 인 실험 복제가 아닌 소스 검사입니다.

## 원재료 준비 {/* #prepare-the-original-materials */}

양 외를 사용하십시오. [*전환 금속 단일 원자 촉매의 대규모 종합을위한 보편적 인 ligand mediated 방법*](https://www.nature.com/articles/s41467-019-12510-0), DOI `10.1038/s41467-019-12510-0`.

1. **관련 정보**의 게시자 페이지와 **숙박 약관** PDF에서 기사 PDF 다운로드하십시오. 별도의 파일로 유지하십시오.
2. Open-Science 프로젝트에서 대화를 열고 작업 모델을 선택하십시오.
3. **+ → Attach files**을 선택하고 PDF를 모두 첨부하십시오. 제목과 DOI을 확인하려면 메인 PDF을 엽니 다. 예를 들어, 9 메인매트 페이지와 52 보충 페이지가 포함되어 있습니다.

**두 개의 파일명**이 전송된 요청을 위함으로 나타낸다. filename을 클릭하면 미리보기를 엽니다. 두 개의 사이에 전환하면 인용된 페이지가 속한다는 것을 확인할 수 있습니다.

![기사와 보충제 모두 실제 증거 검사 요청에 첨부됩니다.](/img/open-science/research-workflows/catalyst-two-inputs.webp)

## 특정 증거 질문 {/* #ask-a-specific-evidence-question */}

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

표시된 요청을 표시할 수 있습니다. 독자가 잘못된 페이지 또는 읽을 수없는 자료를 보고하면 요청을 거부하거나 관련 PDF 페이지를 직접 엽니 다. 숫자가 부패 한 증거로 무죄 회귀를 대우하지 마십시오.

## 인용 된 증거를 엽니 다 {/* #open-the-cited-evidence */}

PDF 미리보기에서 **페이지 6**을 열고, **그림 6** 및 관련 결과를 포함하는 페이지 제어를 사용합니다. 텍스트와 그림 캡션 비교. 그림 **51–53**에 대 한 권장 보충 페이지 **47–49**.

![Open-Science의 원본 문서의 그림 6 및 실험 조건](/img/open-science/research-workflows/catalyst-figure6-source.webp)

소스는 Ni-SAC-2.5의 **−1.2 V versus RHE에 CO에 98.9% Faradaic 효율성**을 보여줍니다. 내구성 실험은 **20 시간 동안 −0.8 V**을 사용합니다. 이러한 조건은 분리되어야한다 : 후자는 피크 선택성 잠재력에서 20 시간 내구성을 설정하지 않습니다. Faradaic 효율성은 제품에 할당된 책임을 설명합니다; 그것은 에너지 효율과 동일하지 않습니다 또는 들어오는 CO2 변환의 분수.

보충은 수소 제품, NMR 및 스케일 업 수치를 공급합니다. 읽기 쉬운 캡션은 반드시 모든 숫자를 제공하지 않습니다. 보고서에 대한 구별을 유지하십시오.

페이지로 이동하려면 PDF 미리보기를 확장하고 페이지 카운터를 클릭하고 전체 번호를 입력하고 **Enter**을 누릅니다. 읽기 전에 결과 카운터를 검증합니다. 관련 기사 47 의 특징 **보충 그림 51**, 그의 축선은 입니다 **H2 Faradaic 효율성**; ; ; ; ; ; ; ; ; 주요 CO 결과에 실수가 없습니다.

![관련 자료 51 실제에 PDF ᄋᄋᄋ 47 의 특징 52](/img/open-science/research-workflows/catalyst-supplement-47.webp)

## 자주 묻는 질문 {/* #check-and-save-the-report */}

답변이 완료되면 **catalyst-claim-check.md**을 엽니다. 소스 정체성, 페이지 번호, 그림 라벨 및 결론의 단어를 확인합니다. 특히, 보고서는 **결과 보고**을 유지하고 실험 재생산의 청구로 문학 검사를 피해야합니다.

![저장된 청구, 증거, 조건 및 제한 보고서](/img/open-science/research-workflows/catalyst-claim-report.webp)

<a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>예, 예</a> 다운로드 자신의 일에 과학적인 결론을 사용하기 전에, 인용한 본래 증거 및 어떤 발행인 개정을 검사하십시오. 별도의 파일에 그림이나 테이블 증거를 추출하려면 [PDF 추출](../guides/previews.md#pdf-extraction)을 참조하십시오.
