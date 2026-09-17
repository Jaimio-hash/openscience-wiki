---
title: "Cross-check 2개의 과학적인 자료 근원"
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Cross-check 2개의 과학적인 자료 근원 {/* #cross-check-two-scientific-data-sources */}

<p className="example-label"><strong>실습 예제</strong> NASA GISTEMP 및 HadCRUT 연간 글로벌 온도 분석</p>

두 소스는 정의가 다르기 때문에 방해 할 수 있습니다. 공시를 해석하기 전에, 단위, 시간 간격 및 참고 기간을 맞추십시오. 이 예제는 **1991–2020**에 각각을 재분산 한 후 **1980–2024**에 2 개의 실제 연간 온도 데이터 세트를 비교합니다. 정렬 된 테이블, 두 개의 패널 숫자, Python 스크립트 및 방법 보고서를 저장합니다.

## 1. 소스 파일을 얻고 정의를 확인합니다. {/* #1-obtain-the-source-files-and-check-their-definitions */}

[NASA GISTEMP의 v4](https://data.giss.nasa.gov/gistemp/)에서 연간 토지–바다 CSV 및 [파일 형식: .1.0.0](https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html)의 연례 분석 앙 시리즈를 다운로드하십시오. 저장된 파일명 `NASA-GISTEMP-v4-original.csv` 및 `HadCRUT5-original.csv`을 사용하십시오.

| 입력 | 연간 가치 | 본래 anomaly 지하실 |
| --- | --- | --- |
| NASA GISTEMP의 v4 | `J-D` 열, °C | 1951–1980 |
| 파일 형식: .1.0.0 | 연례 앙상블은, °C를 의미합니다; 신뢰 한계 유지 | 1961–1990 |

NASA 파일은 헤더 전에 설명 선으로 시작하고 사용할 수없는 값에 `***`을 사용합니다. 0으로 마커를 해석하지 마십시오. 기록 된 소스 식별 및 다운로드 링크는 <ExampleDownload path="/examples/workflow-extensions/SOURCE-NOTES.md">예를 들어 소스 노트</ExampleDownload>; 공급자 파일은 이 실행 후에 개정될 수 있습니다.

프로젝트를 열고 **+ → Attach files**과 CSV를 모두 첨부합니다. **Settings → Runtimes**에서 Python은 **Ready**이며 활성화됩니다. 이 사용 Python 3.12.14, NumPy 2.5.3, 팬다 2.3.3, Matplotlib 3.11.1 및 베개 12.3.0.

![비교 요청에 첨부된 두 소스 CSV](/img/open-science/workflow-extensions/temperature-input.webp)

## 2. 해석하기 전에 정렬을 묻는 질문 {/* #2-ask-for-alignment-before-interpretation */}

```text
Read the two attached official annual global temperature CSVs.
Use NASA's J-D annual column and the HadCRUT5 ensemble mean, in Celsius.
Check unique years, missing values, source definitions and original
anomaly baselines. Preserve the HadCRUT confidence-limit columns.
Rebase each source by subtracting its own complete 1991–2020 mean,
then align shared years 1980–2024. Report NASA minus HadCRUT:
mean difference, RMSE, maximum absolute difference and its year.
Save temperature-aligned.csv, temperature-comparison.png,
temperature-crosscheck.py and temperature-crosscheck.md.
Plot original and common-baseline series in separate labelled panels.
The script must accept --nasa, --hadcrut and --outdir arguments.
Execute using a noninteractive plotting backend, reopen the saved files,
and record input hashes and versions. Do not install packages or
claim the sources are independent or either is ground truth. Use English.
```

제안된 파일을 검사하고 승인하기 전에 Python 부호. **Notebook**을 열고 계산이 완료되었는지 확인합니다. 오류가 발생하면 보고서 또는 수치를 해석하기 전에 해결하고 다시 실행하십시오.

## 3. 정렬 된 테이블 확인 {/* #3-check-the-aligned-table */}

**temperature-aligned.csv**을 엽니다. 기록된 비교는 **45 공유 년**를 포함합니다. 각 근원은 모두 있습니다 **30** 연간 점 견적은 그에 대해 요구 1991- - -2020 참고 의미; 누락 된 연간 값은 0으로 채워졌습니다.

![저장된 연도 정렬 값 및 차이](/img/open-science/workflow-extensions/temperature-table.webp)

겨냥된 방법은 NASA와 **크기: 0.53799554**에 대한 **크기: 0.61266667**입니다. 각 dataset의 자신의 의미를 뺍니다, 둘 다에서 단 하나 상쇄 아닙니다. 숫자 차이를 비교하기 전에 단위, 년 및 subtraction 방향을 확인하십시오.

## 4. 그림과 숫자 비교를 읽으십시오 {/* #4-read-the-figure-and-numerical-comparison */}

**temperature-comparison.png**을 엽니다. 첫번째 위원회는 다른 본래 지평을 유지합니다; 두 번째는 일반적인 기간 재분배 후 두 가지 시리즈를 비교합니다.

![Open-Science의 Original-baseline 및 일반베이스 라인 온도 곡선](/img/open-science/workflow-extensions/temperature-plot.webp)

| 기록 된 결과, NASA 광부 HadCRUT | 값 |
| --- | --- |
| 평균 차이 | 크기: 0.00514589 |
| RMSE는 | 크기: 0.01829900 |
| 최대 절대 차이 | 0.04632368 °C, 2024에서 |

이 다운로드된 스냅 샷에 대한 숫자는 결과입니다. Remaining 차이는 적용, 채우기, 소스 관측 및 처리 선택을 반영할 수 있습니다. 데이터셋 공유 관측은 **statistically 독립적 인 측정**입니다. Neither는 지상 진실을 지정합니다.

## 5. 방법을 저장하고 그것을 다시 실행 {/* #5-save-the-method-and-rerun-it */}

**temperature-crosscheck.md**을 열고 CSV 및 코드로 소스 정의와 메트릭스를 비교합니다. 테이블은 원래 HadCRUT 신뢰 한계와 기계화 된 가치를 유지하지만, 비교는 추정된 기본 또는 소스 의존에 **뚱 베어** propagate 불확실성을 사용합니다.

![저장된 보고서 문서는 실제 미터 및 제한](/img/open-science/workflow-extensions/temperature-report.webp)

<ExampleDownload path="/examples/workflow-extensions/temperature-aligned.csv">정렬 CSV</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-comparison.png">....</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.py">Python 스크립트</ExampleDownload> 및 <ExampleDownload path="/examples/workflow-extensions/temperature-crosscheck.md">- 연혁</ExampleDownload> 다운로드 사용할 수있는 두 개의 입력 파일로 나열된 라이브러리를 포함하는 Python 환경에서 재 실행하십시오.

```bash
python temperature-crosscheck.py --nasa NASA-GISTEMP-v4-original.csv --hadcrut HadCRUT5-original.csv --outdir comparison-rerun
```

기록 된 스크립트는 별도의 로컬 Python 프로세스에서 실행되었습니다. CSV은 앱의 저장된 CSV을 정확히 일치했습니다. 계약 확인은이 계산을 평가, 아니 모든 방법론적인 선택에 어떤 기후 제품.
