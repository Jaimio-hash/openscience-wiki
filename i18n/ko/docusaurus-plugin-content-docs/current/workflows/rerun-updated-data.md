---
title: "업데이트된 데이터와 분석"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 업데이트된 데이터와 분석 {/* #rerun-an-analysis-with-updated-data */}

<p className="example-label"><strong>실습 예제</strong> 베이징 공기 질 관측의 2 주를 추가하십시오</p>

새로운 관찰이 도착하면 기본을 보존하고 결과를 비교하기 전에 동일한 방법을 다시 실행합니다. 이 예제는 실제 **Aotizhongxin, 중국** 시간 PM2.5 데이터를 사용합니다. **1월 1–7, 2016**는 먼저 **1월 8–14**를 사용합니다. 무대 도착은 역사적인 가르침, 라이브 모니터링.

## 1. 첫 주에 첨부하고 계산을 정의 {/* #1-attach-the-first-week-and-define-the-calculation */}

입력은 **4.0에 의하여 CC**의 밑에 배부된 [UCI 베이징 다 위치 공기 질 dataset](https://doi.org/10.24432/C5RK5G)의 연대입니다. <ExampleDownload path="/examples/workflow-extensions/air-week1.csv">주 1</ExampleDownload> 및 <ExampleDownload path="/examples/workflow-extensions/air-week2.csv">주 2</ExampleDownload> 다운로드; 소스 신용 및 파일 식별은 <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">소스 노트</ExampleDownload>에 있습니다.

프로젝트 대화를 열고 **air-week1.csv 전용**을 **+ → Attach files**로 첨부합니다. 유효한 모델을 선택하고 Python는 **Ready**이고 **Settings → Runtimes**에서 활성화합니다. 지불 조건:

```text
Analyze the attached first week of Aotizhongxin hourly PM2.5 data.
Validate station, dates, numeric PM2.5, duplicate and missing timestamps.
Preserve missing observations; never replace them with zero.
Calculate daily means in micrograms per cubic metre and valid-hour
counts. Mark a day complete when at least 18 PM2.5 hours are valid;
this is our teaching convention, not an official air-quality standard.
Save air-analysis.py, air-daily-v1.csv, air-daily-v1.png and
air-report-v1.md. The script must accept one or more CSV paths plus
--output-prefix and --report. Execute it, reopen the files and record
input/script hashes. Stop after this baseline. Use English.
```

![첫째 주 첨부 파일 및 기본 계산 요청](/img/open-science/workflow-extensions/air-input-v1.png)

approving 전에 파일 읽기 및 계산을 검토합니다. **Notebook**에서 실행 완료를 확인한 다음 **air-daily-v1.csv**을 엽니다. 기본 값은 **168 시간당 행 및 7 일일 행**, 누락된 PM2.5 값이 포함되어 있습니다.

![저장된 7 일 기준 및 유효한 시간 조사](/img/open-science/workflow-extensions/air-baseline-table.png)

## 2. 방법을 변경하지 않고 새로운 관찰을 추가 {/* #2-add-new-observations-without-changing-the-method */}

같은 대화를 유지하십시오. **air-week2.csv**을 첨부하고, 첫 번째 첨부 파일을 사용할 수, 요청:

```text
Read the newly attached air-week2.csv together with the original week 1.
Run the saved air-analysis.py unchanged using a new output prefix v2.
Do not overwrite the v1 files or regenerate a different analysis method.
Save air-daily-v2.csv, air-daily-v2.png and air-report-v2.md.
Compare every shared date and output field against air-daily-v1.csv.
Save air-update-check.csv and air-update-notes.md with new dates,
changed original rows, missing values and script/input hashes.
Reopen the saved results. This is a historical replay, not live data.
Use English and do not make health or causal claims.
```

![기존 분석 대화에 추가된 두 번째 주 파일](/img/open-science/workflow-extensions/air-update-input.png)

에이전트가 기존 스크립트를 실행하고 동일한 누락값과 완전성 규칙을 유지하도록 검증합니다. 데이터와 방법을 모두 변경하면 결과가 바뀌는 이유를 설명하는 것이 어렵습니다.

## 3. 확장 된 결과를 검사 {/* #3-inspect-the-expanded-results */}

**air-daily-v2.png** 및 **air-daily-v2.csv**을 엽니다. 결합된 입력은 **중복 또는 누락된 타임스탬프 없음**와 더불어 **336 시간 연속**를, 포함합니다. 1월 11에는 **1개의 누락된 PM2.5 관측**이 있습니다. 테이블에는 **14 일**, 모든 회의가 있습니다. 예의 18-valid-hour 규칙.

![Open-Science에 표시된 확장된 14일 결과](/img/open-science/workflow-extensions/air-update-plot.png)

1 월 11은 **11.652 μg/m3의**이며 **23 유효한 시간**에서 계산됩니다. 0이면 누락된 관측을 분할하지 마십시오. 완전한 타임스탬프 순서는 모든 측정 값이 현재 있다는 것을 보증하지 않습니다.

## 4. Baseline에 대한 비교 {/* #4-compare-against-the-baseline */}

**air-update-check.csv**을 엽니다. 모든 **7 공유 매일 행**는 각 산출 분야의 맞은편에 동일합니다; 새로운 날짜는 1 월 8–14입니다. 원래 스크립트의 SHA-256은 이전 변경되지 않고 업데이트 후입니다.

![지정된 기본 날짜와 비교할 수 있는 행별 비교](/img/open-science/workflow-extensions/air-update-check.png)

입력 식별, 누락된 관측 및 유지 v1 파일을 확인하려면 **air-update-notes.md**을 엽니 다. 모든 14의 독립적 인 계산은 매일 의미와 검증 된 계산은 표시된 정밀도로 저장 된 출력을 일치합니다.

![업데이트 노트는 변경되지 않은 코드를 기록, 유지 기본 파일 및 데이터 체크](/img/open-science/workflow-extensions/air-update-notes.png)

## 5. 보고서 날짜를 확인하기 전에 {/* #5-check-the-report-dates-before-handing-it-off */}

이 보고서는 실제 입력 간격을 따릅니다. 첫 번째 스크립트는 2 주 보고서에 첫 번째 주 타이틀을 유지; **air-analysis-reviewed.py**에서 발표 오류가 수정되었습니다. heading 템플릿만 변경됩니다. 검토 된 스크립트는 주 1 및 주에 변경되지 않았으므로 이전 파일을 보존합니다.

![올바른 보고서는 이제 전체 2 주 간격을 명명합니다.](/img/open-science/workflow-extensions/air-reviewed-report.png)

저장된 **air-daily-baseline.csv** 및 **air-daily-updated.csv**는 각 분야에 있는 본래 v1/v2 CSVs 일치합니다. **air-update-verification.md**은 이전의 동일한 검토 된 스크립트 해시를 기록하고 모두 실행 후, 두 개의 보고서 제목을 확인합니다. 이 분리된 라벨은 숫자의 방법으로 변화합니다.

<ExampleDownload path="/examples/workflow-extensions/air-analysis-reviewed.py">Python 스크립트 검토</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-baseline.csv">기본 CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-daily-updated.csv">CSV 업데이트</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-update-check.csv">행 비교</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/air-report-updated.md">업데이트 된 보고서</ExampleDownload> 및 <ExampleDownload path="/examples/workflow-extensions/air-update-verification.md">인증현황</ExampleDownload> 다운로드 pandas, NumPy 및 Matplotlib와 함께 Python을 사용하여 입력을 유지하고 신선한 접두사로 작성하십시오.

```bash
python air-analysis-reviewed.py air-week1.csv air-week2.csv --output-prefix air-daily-rerun --report air-report-rerun.md
```

비교는 1개의 역 및 2개의 역사적인 주를 설명합니다. AQI 분류, 노출 평가 또는 카우스 개입의 증거는 아닙니다. 동일한 데이터를 유지하면서 분석 방법에 대한 변화는 [방법 비교](compare-methods.md)을 참조하십시오.
