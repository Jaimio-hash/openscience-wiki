---
title: "피드백 후 보고서를 공개"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 피드백 후 보고서를 공개 {/* #revise-a-report-after-feedback */}

<p className="example-label"><strong>실습 예제</strong> 6개의 편집 의견에 대한 단결 촉매 촉매 촉매 촉매 간결</p>

유용한 개정은 소스 증거, 원본 초안 및 의견에 대한 응답을 연결. 이 예제는 실제 캐비테이션 용지에서 영어 브리핑을 작성하고 첫 번째 초안을 과잉하지 않고 수정합니다. 6개의 의견은 이 연습을 위해 준비된 가르침 운동입니다, 저널 또는 논문의 저자와 일치하지 않습니다.

## 1. 종이를 부착하고 첫 번째 초안을 만듭니다. {/* #1-attach-the-paper-and-create-a-first-draft */}

[Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0)을 열고, 메인 PDF 및 출판사의 보충 정보를 다운로드하고 프로젝트 대화에서 **+ → Attach files**를 통해 두십시오. 기록된 파일은 각각 **9 및 52 PDF 페이지**이 있습니다. 아래 페이지 번호는 PDF 페이지, 인쇄 된 저널 페이지가 아닙니다.

유효한 모형을 선정하십시오, 그 후에 보내십시오:

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![Open-Science의 소스 PDF 및 초기 간략한 요청](/img/open-science/workflow-extensions/report-input.webp)

요청시 관련 파일이 읽을 수 있습니다. **Generated** 또는 **Files**에서 **catalyst-brief-v1.md**을 열고 저장된 초안을 읽으십시오. 대화에 대한 답변은 실제 파일 검사에 대한 대용품이 아닙니다.

![편집 개정 전에 저장 된 첫 번째 초안](/img/open-science/workflow-extensions/report-draft.webp)

## 2. 관련 기사 {/* #2-make-the-feedback-actionable */}

<ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">6개의 편집 의견</ExampleDownload> 다운로드와 같은 대화에 첨부합니다. 댓글은 다음과 같습니다 :

| 이름 &#42; | 주문 변경 |
| --- | --- |
| C1의 | 120 단어 이상의 임원 요약 |
| C2의 | 두 개의 운영점을 분리하는 두 개의 줄 테이블 |
| C3의 | Absence는 실제로 검사 한 증거로 제한됩니다. |
| C4의 | 세 개의 제안 된 후속 검사, 분명히 이미 수행되지 않은 실험 |
| C5의 | Explicit Main PDF / 보충 PDF 페이지 및 그림 위치 |
| C6의 | 별도의 v2 및 응답 파일, 보존 v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

실제 개정은 첨부된 코멘트 파일을 읽고 모두 요청한 종류의 전달할 수 있습니다. 에이전트가 지원되지 않은 변경을 제안하는 경우, 청구 및 소스 패스를 이름으로 받아 들일 수 있습니다.

## 3. 개정된 증거를 읽으십시오, 다만 응답 상태 {/* #3-read-the-revised-evidence-not-just-the-response-status */}

**catalyst-brief-v2.md**을 엽니다. 이 실행은 **117-word 요약**, 두 줄 운영 지점 테이블 및 세 개의 라벨링 후속 제안을 생산합니다.

![수정된 요약과 내구성에서 선택성을 분리하는 테이블](/img/open-science/workflow-extensions/report-revised.webp)

열쇠 구별은 **−1.2 V 대 RHE에 98.9% CO Faradaic 효율성**는 분리되는 **20 h 현재 보유 테스트 −0.8 V vs RHE**를 versus입니다. 20 h의 "98.9%"로 결합하지 마십시오. Main PDF p. 6, 그림. 6b–d, 그리고 p. 7, 그림. 6e는, 관련 증거를 확인합니다; ₢ 킹 8은 H-cell 측정을 설명합니다. 보충 PDF PP. 47–48, 그림. 51–52, 관심사 수소 선택성 및 NMR 제품 체크.

이 실행에서 에이전트는 전체 텍스트 패스와 그림 캡션을 읽을 수 있지만 링크 된 그림 요소 캐시는 직접 이미지 검사에 사용할 수 없습니다. 그것의 응답은 제한합니다. qualitative 현재 감소는 저자의 원본을 따릅니다; 새로운 값이 플로트에서 디지털화되지 않았습니다. 직접적인 그림 검사가 필요할 때 [PDF 증거에 대한 청구](pdf-evidence.md)를 따르십시오.

## 4. 응답을 확인하고 모든 세 가지 버전에서 손 {/* #4-check-the-response-and-hand-off-all-three-versions */}

**catalyst-brief-v2-response.md**을 엽니다. C1–C6를 찾아, 각 이름을 변경된 섹션을 열고, 실제로 약속된 변경을 포함합니다. “Resolved” 상표는 혼자 충분합니다.

![저장된 응답 표는 개정된 단면도에 6개의 코멘트를 맵니다](/img/open-science/workflow-extensions/report-response.webp)

제안이 제안으로 라벨을 유지한다는 것을 확인, DOI은 **10.1038 / s41467-019-12510-0** 남아, **catalyst-brief-v1.md**는 여전히 변경되지 않습니다. 응답은 사용할 수없는 증거를 주어야한다.

기록 된 <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 초안</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 브리핑</ExampleDownload> 및 <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">댓글에 응답</ExampleDownload> 다운로드. 댓글 파일 및 게시자 링크로 유지하십시오. 원본 초안은 비교를 위해 포함되고 최종 검토 된 간략으로 사용되어야합니다.
