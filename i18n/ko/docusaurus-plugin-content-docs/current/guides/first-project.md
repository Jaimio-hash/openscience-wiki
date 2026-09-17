---
title: "첫 번째 프로젝트 및 결과"
last_update:
  date: '2026-09-10'
---

# 첫 번째 프로젝트 및 결과 {/* #your-first-project-and-result */}

<p className="example-label"><strong>실습 예제</strong> 샘플-QC 테이블을 읽고 요약 저장</p>

작은 테이블을 열고 요약을 저장하여 시작하십시오. 이 루트는 실제 공개 유전자 압축 데이터셋에서 계산된 12 줄 샘플-QC 테이블을 사용합니다. 전체 matrix 분석을 다시 실행하거나 플로팅 패키지를 설치 할 필요가 없습니다.

<span id="prepare-the-input-and-runtime" />

## 모델과 예제 파일을 준비 {/* #prepare-a-model-and-the-example-file */}

1. [첫째 시간 설정](onboarding.md)을 완료하고 [모델 연결](providers.md)을 확인합니다.
2. [예시자료](../reference/example-data.md#saved-example-outputs)에서 **표본 QC CSV** 다운로드.
3. 다운로드되지 않은 파일을 유지하십시오. 이것은 파생된 요약 테이블입니다; source matrix 및 계산 방법은 같은 예 페이지에서 문서화됩니다.

이 테이블을 열고 요약하면 활성 에이전트와 모델이 필요합니다. Python 또는 R은 메트릭을 재 계산하는 경우에만 필요합니다. [전체 데이터 품질 워크플로우](../workflows/data-quality.md)은 경로가 포함되어 있습니다.

<span id="create-the-research-project" />

## 프로젝트 만들기 {/* #create-a-project */}

가정에서, **New project**를 선택하십시오. **Name**과 `Review the public sample-QC table and record its interpretation.`로 `Gene-count QC review`을 **Description**로 입력합니다. **Agent Context**에서 `Preserve the source file. Explain descriptive counts without inferring differential expression.`을 입력한 다음 **Create project**를 선택합니다.

세션 리스트 위의 프로젝트 이름을 확인합니다. 이 예제 이름은 : 나중에 자신의 조사를 발견하는 데 도움이되는 이름을 사용합니다. 필드를 편집하거나 소스 폴더를 구성하려면 [프로젝트](projects.md)을 참조하십시오.

<span id="attach-and-submit-a-bounded-request" />

## 첨부 및 테이블 검사 {/* #attach-and-inspect-the-table */}

1. 새로운 대화를 시작, **+ → Attach files**을 선택하고 다운로드 CSV을 선택합니다.
2. 첨부 파일 칩을 기다리면 미리보기를 엽니다.
3. 12개의 견본 줄을 확인하십시오. 전체 샘플 식별자 및 총 카운트의 열을 검사, 제로 카운트 유전자, 검출 된 유전자 및 미디어 긍정 조사.
4. 작곡가로 돌아가는 미리보기를 닫습니다. 요청에 첨부 파일을 유지하십시오.

![표본 QC 테이블은 신청에서 열립니다](/img/open-science/guides-walkthrough/42-rnaseq-table.webp)

미리보기가 비어 있거나 열이 분리되지 않은 경우 CSV 대신 HTML 다운로드 페이지에 첨부하십시오. delimiter 및 미리보기 컨트롤에 대한 [사이트맵](../tools/tables.md) 참조.

<span id="open-and-accept-the-outputs" />

## 자주 묻는 질문 {/* #ask-for-a-saved-summary */}

선택된 모델을 확인하고 보낼 수 있습니다:

```text
Read the attached sample-QC CSV. Save a short Markdown report named
sample-qc-overview.md with three sections: Table contents, Metric meanings,
and Next checks. Identify the sample-identifier column and explain each
QC metric using the attached values. Preserve the original file. Do not
recalculate the gene matrix, install packages, or infer differential
expression. State that this is a derived descriptive summary. If the file
cannot be read, report the error instead of guessing its contents.
After saving, provide the report link.
```

권한이 요청되면 첨부된 입력 및 요청된 출력에 대해 확인합니다. 예정된 작업 또는 관련 요청을 거부합니다. 대기 허가는 귀하의 응답을 필요로하는 일시 중지입니다. 실패한 도구 호출은 오류 처리가 필요합니다. [채용 정보](composer.md)은 그 상태를 설명합니다.

<span id="continue-or-recover" />

## 결과 확인 및 유지 {/* #check-and-keep-the-result */}

1. 응답 또는 프로젝트의 **Files** 패널에서 **sample-qc-overview.md**을 선택하십시오.
2. 3개의 요청한 단면도를 확인하고 열 묘사는 CSV에 일치합니다. 특히, 검출 된 유전자는 0보다 더 큰 것을 의미합니다. 긍정적 인 계정 median은 0 개를 제외합니다.
3. 보고서는 요약표를 설명하고 새로운 생물학적 발견을 주장하지 않습니다.
4. 외부 복사가 필요한 경우 보고서를 다운로드하십시오. Rename 및 반환 액세스에 대한 대화를 핀.

저장된 보고서가 열릴 때 작업이 완료되고 첨부 된 테이블에 동의합니다. 답이 텍스트를 포함하지만 파일이 없다면, Markdown 파일로 그 텍스트를 저장하기 위해 에이전트를 요청, 다음 그것을 엽니 다. 읽기 또는 오류를 저장하려면 오류 메시지를 유지하고 [문제 해결](troubleshooting.md)을 따르십시오.

## 원본 데이터로 계속 {/* #continue-with-the-original-data */}

테이블을 재현하고 플롯을 만들려면 [raw data를 reproducible 분석으로 전환](../workflows/data-quality.md)을 따르십시오. 그 워크플로는 원본 매트릭스, Python 의존성, 정확한 출력 스키마 및 수치 검사를 추가합니다. [Notebook](notebook.md)을 사용하여 코드 및 파일 증거를 검사합니다.
