---
title: "예제 데이터 및 예상 결과"
last_update:
  date: '2026-09-10'
---

# 예제 데이터 및 예상 결과 {/* #example-data-and-expected-results */}

문서 예제를 재현하기 위해 이러한 공공 파일을 사용합니다. 소스 설명, 원본 파일 체크섬 및 샘플-QC 기본 라이브 여기에; dataset 역사를 반복하는 대신 그들에 개인 기능 가이드 링크.

## 소스 및 입력 계약 {/* #source-and-input-contract */}

[GEO 시리즈 기록](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE60450)은 원래 `GSE60450_Lactation-GenewiseCounts.txt.gz`을 공급합니다. [RNA-seq 분석 워크플로우 게시](https://pmc.ncbi.nlm.nih.gov/articles/PMC4934518/)은 이 데이터셋에 대한 방법론적 맥락을 제공합니다. 우리의 예는 descriptive pre-analysis QC에 멈추습니다; 그것은 종이의 완전한 분석을 재현하지 않습니다.

| 회사 정보 | 인증된 값 |
| --- | --- |
| Decompressed 파일 | GSE60450_자산-GenewiseCounts.txt |
| 크기 | 1,340,161 바이트 |
| Gene 행 | 27,179 |
| 제품정보 | EntrezGeneID, 길이 및 12 샘플 카운트 열 |
| SHA-256의 경우 | `128d2411f3169de0cac9963c30152bb5c9a3083ac80fd25651b97cf4b7304691` |
| 중복 유전자 ID / 누락 된 수 항목 / 잘못된 수 | 0 / 0 / 0 |

<a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt" download>unchanged decompressed 입력을 다운로드</a> 또는 <a href="/docs/examples/gse60450/GSE60450_Lactation-GenewiseCounts.txt.gz" download>원래 압축 파일</a>. 앱의 Omics Archives 메타데이터 도구는 보충 URL을 반환 할 수 있습니다; 그것은 자동으로 카운트 테이블을 다운로드하지 않습니다. 이 소스는 별도로 다운로드하고 첨부 파일을 통해 업로드되었습니다.



## 표본 QC 기준 {/* #sample-qc-baseline */}

| 제품 설명 | 총 원수 | Zero-count 유전자 | 검출된 유전자 | 검색 중 Median |
| --- | ---: | ---: | ---: | ---: |
| 모델: MCL1-DG | 23,227,641 | 8664 | 18515 | 237 |
| 모델: MCL1-DH | 21,777,891 | 8792 | 18387 | 223 |
| 모형: MCL1-DI | 24,100,765 | 8646 | 18533 | 213 |
| 모델: MCL1-DJ | 22,665,371 | 8706 | 18473 | 194 |
| 모델: MCL1-DK | 21,529,331 | 9082 | 18097 | 188 |
| 모델: MCL1-DL | 20,015,386 | 9169 | 18010 | 190.0 |
| MCL1-LA의 특징 | 20,392,113 | 9247 | 17932 | 257.0 |
| 모델 번호: MCL1-LB | 21,708,152 | 8828 | 18351 | 252 |
| 모형: MCL1-LC | 22,241,607 | 9803 | 17376 | 191.0 |
| 모형: MCL1-LD | 21,988,240 | 9904 | 17275 | 176 |
| MCL1-LE의 특징 | 24,723,827 | 10478 | 16701 | 138 |
| 모델 번호: MCL1-LF | 24,657,293 | 10434 | 16745 | 135 |

CSV의 완벽한 샘플 식별자에 대한 컴팩트 라벨지도. 4개의 숫자 미터는 자주적으로 이 입력을 위해 검사되었습니다. 이것은 원시적 인 검사입니다; 그들은 다운스트림 통계적 디자인을 유효하지 않습니다.

## 저장된 예 출력 {/* #saved-example-outputs */}

| 다운로드 | 이름 &#42; |
| --- | --- |
| <a href="/docs/examples/gse60450/rnaseq-sample-qc.csv" download>모델 번호: CSV</a> | 열 매핑, 정확한 열 매핑 및 4 미터 |
| <a href="/docs/examples/gse60450/rnaseq-library-sizes.png" download>그림</a> | 익지않는 표본 표 합계 |
| <a href="/docs/examples/gse60450/rnaseq-qc-report-v2.md" download>방법 보고서</a> | 방법, 소스 무결성 및 독립적 인 미터 검사 |
| <a href="/docs/examples/gse60450/rnaseq-notebook.zip" download>Notebook 지퍼</a> | Unchanged 기본 `.ipynb` 회사연혁 |
## 다른 예제를 선택하십시오. {/* #choose-another-example */}

| 작업 | 입력 또는 참고 | 지침 |
| --- | --- | --- |
| 첫 번째 저장된 결과 | 위 12 줄 QC CSV | [첫 번째 프로젝트](../guides/first-project.md) |
| 전체 matrix를 Recalculate | Original gene-count matrix 위 | [Data-quality 워크플로우](../workflows/data-quality.md) |
| 문학 수집 구성 | <a href="/docs/examples/prisma/core-reading-list.md" download>PRISMA 읽기 목록 확인</a> 출판사 링크 | [핵심 읽기 명부](../workflows/core-reading-list.md) |
| 작은 역대 계산을 시도 | <a href="/docs/examples/capabilities/1UBQ.pdb" download>인간적인 ubiquitin 1UBQ</a> | [과학 도구](../tools/scientific.md) |

방법 보고서 및 Notebook은 기록 된 계산의 경로와 증거 범위를 유지합니다. 외부 rerun의 앞에 당신의 자신의 입력 위치 및 종속을 준비하십시오.
