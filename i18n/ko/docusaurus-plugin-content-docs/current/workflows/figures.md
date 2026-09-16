---
title: "오류 막대로 추적 가능한 인물을 만드십시오."
last_update:
  date: '2026-09-16'
---

# 오류 막대로 추적 가능한 인물을 만드십시오. {/* #make-a-traceable-figure-with-error-bars */}

<p className="example-label"><strong>실습 예제</strong> 온도와 전기 전도도</p>

점과 불확실한 점이 데이터 테이블에 다시 추적 할 수있는 과학적인 인물이 필요합니다. 이 예제는 알루미늄 도핑 된 아연 산화물 (AZO) 및 구리 양극 (CuI)에 대한 전기 전도성을 플로팅하여 출판사의보고 표준 편차를 유지합니다.

**공급 능력**: 영어 PNG 및 SVG, 플로팅 된 CSV 및 짧은 방법 파일. 예제는 새로 실시 된 실험이 아닌 게시 된 데이터를 사용합니다.

## 데이터와 그 의미를 준비하십시오. {/* #prepare-the-data-and-its-meaning */}

[공급 업체](https://www.nature.com/articles/s44172-024-00291-4)은 소스 데이터 워크북을 제공합니다. 예, CSV transcribes 열 A, D 및 E에서 **보충 Fig.6a** 으로 **보충 Fig.6b**, 행 **3–15**: 온도, 전기 전도성 및 SD보고. 그것은 **물자 당 13 온도**, 덮음 **275–390 K**를 포함합니다.

<a href="/docs/examples/research-workflows/conductivity-temperature.csv" download>준비 CSV</a> 및 <a href="/docs/examples/research-workflows/conductivity-source.md" download>소스 노트</a> 다운로드. CSV은 모든 지점의 오리지널 시트와 행을 유지합니다. 종이는 온도 당 5개의 측정에서 SD를 설명합니다; 개별 복제 측정은 이러한 열에서 공급되지 않습니다. 이 작업 흐름은 SD를 재구성하지 않습니다.

1. 작업 모델과 활성화된 [Python 실행 시간](../guides/runtimes.md) 프로젝트 만들기.
2. 대화를 열고 **+ → Attach files**을 사용하여 파일을 첨부합니다.
3. 음량 열 및 단위를 확인하기 전에 플로팅 : 온도 및 **사이트맵**의 **₢ 킹** 및 전도도 및 SD의 경우.

첨부된 CSV을 클릭하여 미리보기를 엽니다. 그것은 물자, 온도, 전도도, SD 및 근원 장/광도를 포함하여 **26 행 · 6 열**를, 보여줄 것입니다. 소스 노트를 열기; 캡처 된 실행은 `conductivity-source.md`로 제공되는 노트에 대한 파일 이름 `README.md`을 사용했습니다.

![값, 단위 및 소스 행이있는 부착 된 전도성 테이블](/img/open-science/research-workflows/conductivity-input.png)

## 그림과 뒤에 자료에 대한 질문 {/* #ask-for-the-figure-and-the-data-behind-it */}

```text
Use the attached conductivity CSV and source notes to create a figure
in the Notebook. Plot electrical conductivity (S m^-1) against
temperature (K) for AZO and CuI. Use distinct markers and error bars
equal to the supplied publisher-reported SD.
Check 26 rows, 13 temperatures per material, and the 275–390 K range.
Do not invent replicates or label SD as a confidence interval.
Connect points only as guides; do not fit a model.
Save conductivity-temperature.png, conductivity-temperature.svg,
plotted-conductivity.csv and conductivity-methods.md.
Keep all labels and notes in English. Execute the code and save files.
```

코드 또는 패키지 요청을 검토 한 다음 실제 Notebook 결과를 검사합니다. 답변에 설명 된 차트는 아직 저장되지 않았습니다.

대화에서 **Notebook**을 선택하십시오. 완료된 Python 세포를 열고 그것의 산출을 검열하십시오: 26 총 줄, 각 물자를 위한 13 줄, 275–390 K 범위 및 도형된 숫자. 입력 해상도가 실패하면 에이전트가 사용해야합니다. CSV 이 대화에 첨부된 다음 계속하기 전에 성공적인 실행을 확인합니다.

![실제 Notebook 실행은 입력 체크를보고 플로우를 렌더링](/img/open-science/research-workflows/conductivity-notebook.png)

## 그림과 수출을 확인 {/* #check-the-figure-and-export */}

생성 된 PNG를 엽니 다. 두 재료가 구별 될 수 있음을 확인, 엔드 포인트가 눈에 보이는, 축 상태 단위 및 불확실주의는 **SD를 보고하십시오** 말한다. 라인은 측정만 연결한다; 300 K가 눈에 띄는 후에 AZO 전도도에 있는 복각.

![전도성 도형의 실제 Open-Science 미리보기 및 SD 오류 표시](/img/open-science/research-workflows/conductivity-figure.png)

**plotted-conductivity.csv**을 열고 입력으로 비교하십시오. 이 모든 **26 행**은 온도, 전도성 값, SD 및 소스 시트 / 로우 식별을 보존했습니다. 소스 DOI 및 uncertainty 정의를 확인하려면 **conductivity-methods.md**을 엽니 다.

**Generated** 영역은 4개의 파일을 포함해야 합니다. 메소드 파일을 열고 각 미리보기의 다운로드 아이콘을 사용하여 확인된 버전을 저장할 수 있습니다. 1개의 산출이 누락되면, 특정한 파일 및 그것을 다시 열거하십시오; 성공적인 PNG는 SVG 또는 데이터 테이블이 저장되지 않습니다.

![4개의 저장된 산출 및 재개된 방법 주](/img/open-science/research-workflows/conductivity-methods.png)

빠른 공유 및 SVG에 대한 PNG를 사용하여 벡터 아트웍이 유용하다. 이 실행의 <a href="/docs/examples/research-workflows/conductivity-temperature.png" download>PNG 이미지</a>, <a href="/docs/examples/research-workflows/conductivity-temperature.svg" download>SVG 소개</a>, <a href="/docs/examples/research-workflows/plotted-conductivity.csv" download>관련 자료</a> 및 <a href="/docs/examples/research-workflows/conductivity-methods.md" download>이란?</a>는 비교를 위해 유효합니다.

자신의 측정값으로 그래프를 만들 때는 오차 막대가 SD, 표준오차, 신뢰구간 중 무엇을 나타낼지 먼저 정하세요. 필요한 원시 측정값 또는 이미 계산된 불확실성 값과 그 정의를 에이전트에 제공하세요. 불확실성 정보가 없으면 이를 명시하세요.
