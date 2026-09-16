---
title: "과학 데이터베이스"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# 과학 데이터베이스 {/* #scientific-databases */}

응용 프로그램 번들 **23 데이터 소스 커넥터**, 플러스 별도의 오프라인 Molecule Connector. 전체 레지스트리에는 Molecule의 두 개의 작업을 포함하여 **239 공구 가동**이 있습니다. 아래 데이터 소스 카탈로그는 237을 포함합니다. 설정에서 관련 Connector을 활성화하면 올바른 식별자 유형과 경계 된 질문을합니다.

<span id="actual-local-queries" />

## Data-source 카탈로그 {/* #data-source-catalog */}

식별자 및 연구 문제로 선택하십시오. 근원 적용은 다릅니다; 정확한 필드에 대한 작업 참조를 참조하십시오.

| 커넥터 | 출처 | 작업 | 이용하기  |
| --- | --- | --- | ---  |
| 화학 · `chemistry` | PubChem, ChEBI, Rhea, 바인딩DB | 12 | PubChem, ChEBI, Rhea 및 BindingDB를 통해 소형 molecule 화학.  |
| 문학 그래프 · `literature` | OpenAlex, arXiv, Crossref, 데이터 시트 | 13 | 논문, 저자, 인용, DOI 업데이트 및 dataset/software 레코드. |
| PubMed · `pubmed` | PubMed, PMC, 유럽 PMC | 7 | NCBI E-utilities, PMC ID 변환기 및 유럽 PMC를 통해 생물 의학 문학 - 검색, 메타 데이터, 관련 기사, 인용 조회, ID 변환, 전체 텍스트 및 저작권.  |
| 유전자 및 종양학 · `genes` | MyGene, UniProt, OLS, QuickGO, 반응기 | 7 | 유전자/단백 정체성 및 투과율 — mygene.info, UniProt, OLS4 ontologies, GO annotations, Reactome pathways.  |
| 게놈 · `genomes` | Ensembl, UCSC, 미국 | 11 | 게놈 주석, 변종, 균질학, 순서 및 브라우저 트랙 - Ensembl REST 및 UCSC 게놈 브라우저.  |
| · · `variants` | gnomAD, 클라리바르, dbSNP | 15 | 인간 유전 변형 - gnomAD 인구 frequencies/constraint, ClinVar 기록 / 연구 (direct NCBI), dbSNP, 구조 및 mitochondrial 변형.  |
| 임상시험 · `clinical-trials` | 임상시험.gov | 6 | ClinicalTrials.gov의 임상 시험 - 검색, 세부 사항, 스폰서, 조사, endpoints 및 자격.  |
| 임상 Genomics · `clinical-genomics` | ClinGen, CIViC, 열린 대상 | 20 | 임상 genomics 지식 기초: ClinGen 치료, CIViC 임상 증거, 그리고 열린 표적 플랫폼.  |
| 구조 및 상호 작용 · `structures` | PDB, AlphaFold, EMDB, 복합 포털, IntAct | 16 | 구조 및 분자 상호 작용 — PDB 구조, AlphaFold 예측, EMDB cryo-EM 항목, Complex Portal complexes, IntAct 상호 작용 네트워크.  |
| ChEMBL · `chembl` | 주 메뉴 | 6 | 생물 활성 화합물, 약물, 표적, 생물 활성성, 그리고 메커니즘을 통해 ChEMBL REST API.  |
| BioRxiv · `biorxiv` | BioRxiv, medRxiv, ROR, medRxiv, medRxiv, medRxiv, ROR, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv, ROR, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv, medRxiv | 7 | bioRxiv/medRxiv preprints — 날짜/category, DOI, 저널-publication 링크, 펀더 목록 및 플랫폼 통계에 의해 검색.  |
| 의약품 규제 · `drug-regulatory` | 오픈FDA | 7 | Drugs@FDA 신청, 상표 및 openFDA를 통해 corpus 통계.  |
| 인간 유전학 · `human-genetics` | GWAS 카탈로그, eQTL 카탈로그, PheWeb | 14 | 인간 유전학 협회 증거 - GWAS 카탈로그, eQTL 카탈로그 및 PheWeb PheWAS 포털 (FinnGen, BioBank Japan).  |
| 표현 · `expression` | GTEx 정보 | 12 | GTEx Portal을 통해 인간의 조직 표현과 eQTLs.  |
| 단백질 Annotation · `protein-annotation` | InterPro, Pfam, 인간 단백질 아틀라스, STRING | 13 | 단백질 도메인 아키텍처, 가족 / 클랜 회원, InterPro / Pfam, Human Protein Atlas 및 STRING을 통해 표식 아틀라스 및 상호 작용 네트워크.  |
| 암 모델 · `cancer-models` | cBio포털 | 6 | 암 genomics 연구는 cBioPortal REST API을 통해 기록합니다.  |
| RNA · `rna` | Rfam 소개 | 9 | 비 코딩 RNA 제품군 데이터 (metadata, 정렬, 모델, 구조) Rfam을 통해.  |
| Omics Archives · `omics-archives` | ArrayExpress, GEO, 메타보라이트, MGnify, PRIDE | 17 | Omics 데이터 아카이브 - 표현 (ArrayExpress, GEO), metabolomics (MetaboLights), metagenomics (MGnify) 및 proteomics (PRIDE).  |
| CellGuide · `cellguide` | CELLxGENE의 장점 | 5 | Cell-type identity, 마커 유전자, 소스 데이터 세트 및 CELLxGENEGuide Cell을 통해 조직.  |
| 규제 · `regulation` | ENCODE, JASPAR, 유니버셜 | 16 | 유전자 조절 기능 genomics - ENCODE 실험 / 생물 샘플 / 파일, JASPAR TF 바인딩 프로파일 및 UniBind ChIP-seq TFBS.  |
| 연구 자료 · `research-resources` | Grants.gov, 항체 레지스트리 | 5 | Funding-opportunity search (Grants.gov) 및 항체 카탈로그 조회 (Antibody Registry).  |
| BioMart · `biomart` | Ensembl 바이오마트 | 8 | Ensembl BioMart 속성 쿼리 및 식별자 번역.  |
| · · `zinc` | 사이트맵 | 5 | ZINC22 purchasable 화학 공간 (CartBlanche22) - ZINC id, SMILES에 의하여 화합물 보기 정확한/similarity 수색, 공급자 부호 해결책, 무작위 표본 추출, 선창을 위한 3D 구조 위치.  |

## 레코드를 검색하고 ID를 확인합니다. {/* #retrieve-a-record-and-verify-its-identity */}

1. **Settings → Connectors**을 열고 필요한 소스를 검색하고 대상 에이전트에 대한 가용성을 확인합니다.
2. 더 자세히 보기 **Tools**, 입력, 예 및 타사 요구 사항을 읽어보십시오.
3. 명시된 쿼리/액세서리 및 결과 제한을 공급합니다. 문학 수집 또는 증거 테이블을 만들 때 정확한 쿼리를 유지합니다.
4. Inspect는 ID 및 소스 필드를 반환합니다. 빈 결과, truncated 배치 및 오류는 다른 결과입니다.
5. 프로젝트/library deliberately에 필요한 레코드를 저장하십시오. 검색 응답은 자동으로 모든 종이가 문학 라이브러리 또는 다운로드 된 전체 텍스트에 추가되지 않습니다.

### 알려진 식별자로 시작 {/* #start-with-one-known-identifier */}

<p className="example-label"><strong>실습 예제</strong> 인간 TP53 유전자 식별자를 해결</p>

**유전자 및 종양학** 및 요청 가능: **범위를 가진 TP53를 해결하기 위하여 query_genes를 이용하십시오 ="symbol", 종 ="human" 및 field="symbol, 이름, entrezgene". 입력 쿼리와 일치하지 않는 레코드를 반환합니다.** 이 예에서, 인간 TP53 레코드는 Entrez Gene **7157** 및 이름 **종양 단백질 p53**를 식별합니다. 맵핑 ID를 사용하기 전에 기록의 `query` 및 `symbol`을 확인하십시오. 기호는 여러 경기를 반환 할 수 있으므로 의도 된 생물과 기록을 확인 할 때까지 모든 결과를 유지하십시오. [Exact 필드](../reference/connector-operations.md#query_genes).

## 쿼리를 선택하고 결과를 검사 {/* #choose-a-query-and-inspect-the-result */}

<p className="example-label"><strong>예시</strong> Bounded 데이터베이스 쿼리 및 응답</p>

테이블은 이러한 예 응답을 기록합니다; 살아있는 쿼리 결과는 다를 수 있습니다.

| Connector / 도구 | 입력 | 현재 위치 |
| --- | --- | --- |
| Omics Archives / geo_get_series | `accessions: ["GSE60450"]` | 12 샘플과 시리즈 / 샘플 메타 데이터; metadata retrieval은 업로드 된 수를 recompute하지 않았습니다. |
| 유전자 / query_genes | TP53; 상징 범위; - 한국어 | Entrez 유전자 ID 7157, 기호 TP53, 이름 종양 단백질 p53. |
| pubMed / search_articles에 대해 | GSE60450, 최대 2 | PMIDs 38059347 및 37306301. 이 쿼리 일치는 자동으로 dataset의 원래 출판물입니다. |
| 화학 / pubchem_search_compounds | aspirin, 최대 1 CID | CID 2244, 공식 C9H8O4 및 분자량 180.16. |
| 문학 / openalex_search_works | `CRISPR base editing`; 2020에서; 열려있는 접근; 최대 2 | OpenAlex ID, 소스 필드 및 완성 플래그와 함께 두 개의 작업 레코드. |

### OpenAlex를 연결하고 인용 링크를 따르십시오 {/* #connect-openalex-and-follow-citation-links */}

1. **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**을 엽니다.
2. API 키를 입력하면 **Validate**을 선택한 다음 유효성 검사가 성공한 후 **Save**를 선택합니다.
3. 작은 `max_records` 한계와 주제에 대한 검색. `n_records_returned` 및 `records_truncated`을 확인하기 전에 결과를 완료합니다.
4. `openalex_get_work`과 반환된 작업 ID를 사용합니다. 사용 `openalex_citations` 종이 인용 그 작업 및 `openalex_references` 작동에 대 한 인용. 이것은 반대 방향입니다.
5. 저자 검색을 위해, 저자 프로필을 검색하기 전에 기관 및 ORCID를 확인합니다. 소스 ID 또는 ISSN를 사용하여 저널 이름을 분리합니다.

필터 및 리턴 필드에 [OpenAlex 가동 모수](../reference/connector-operations.md#openalex_search_works)을 참조하십시오.

### DOI 및 관련 연구 기록 보기 {/* #look-up-a-doi-and-its-related-research-records */}

**문학 그래프** 사용 발행인 메타데이터 및 `crossref_get_updates`의 `crossref_get_work`을 사용하여 증착/재선 관계에 대한 `datacite_search_records`을 사용하여 dataset/software DOIs를 찾을 수 있으며, `datacite_get_record`은 선택한 레코드를 검사합니다. 이 4개의 공공 방법은 OpenAlex 열쇠를 요구하지 않습니다. 다운로드하기 전에 DOI 정체성, 관계 방향 및 재사용 조건을 검증하거나 리소스를 인용합니다. 정확한 필드는 [가동 참고](../reference/connector-operations.md#family-2)에 있습니다.

Rfam 순서는 지금 공식적인 배치 엔드포인트를 사용합니다. 이전 설치가 retired-endpoint 오류를 반환하면 앱을 업데이트하고 의도한 작업을 재개합니다. 끝나는 작업은 안타깝게도 완료된 검색이 아닙니다.

## 반환된 기록, 빈 경기 또는 오류 처리 {/* #handle-a-returned-record-empty-match-or-error */}

결과를 사용하기 전에 반환된 상태를 검사합니다. [가동 참고](../reference/connector-operations.md)을 사용하여 필드와 완성 플래그를 해석합니다.

| 전망 outcome | 다음을 할 것 |
| --- | --- |
| `found: false`, 제로 기록, 빈 investigators 또는 공급자 경기 | 식별자, 생물, 쿼리 범위 및 필터를 확인하십시오. 빈 결과 보존; 검색 결과를 찾을 수 없습니다. |
| `credential_required` OpenAlex에 대한 | 요청된 자격 양식을 열고 구출하기 전에 자신의 키를 바인딩합니다. |
| `contact_email_required` 직접 NCBI 변형 쿼리 | 열기 **Settings → Connectors → Manage credentials → Literature access**, 입력 **Contact email** 선택하기 **Save**. 실패한 쿼리를 복원합니다. NCBI API 열쇠는 선택적입니다. 반환된 식별자, 일치 카운트 및 truncation 플래그를 확인; 빈 결과가 연결 오류에서 구별됩니다. |
| HTTP `410` eQTL에서 | 소스 URL, 작동 및 응답을 유지하고 과학 입력을 변경하기 전에 서비스 가용성을 확인합니다. |
| Connector 요청 후 `30000ms` | 더 작은 요청을 구합니다. 외부 Notebook 타임아웃만 증가하는 것은 Connector의 자신의 마감일을 변경하지 않습니다. |
| Notebook 실행 후 `60000ms` | 실행은 결과없이 종료됩니다. 개별 재량 작업; 모든 업스트림 서비스는 실패하지 않습니다. |
| BioMart HTML 유지 보수 페이지; - 연혁 `Unexpected end of JSON input` | 예상된 구조의 응답은 사용할 수 없습니다. 나중에 다시 시도하고 문제에 대한 응답 유형 / 오류를 유지합니다. |
| ZINC 작업은 시간에 완료하지 않았다 | 반환된 작업/result URL을 보존하고 그 일을 확인; 새로운 작업을 반복적으로 시작하면 그 결과를 복구하지 않습니다. |

보고서의 경우, 작업, 경계 입력, 오류 텍스트 및 타임스탬프를 [문제 해결](../guides/troubleshooting.md)을 통해 첨부합니다. 공유하기 전에 자격 및 개인 데이터를 제거하십시오.

<span id="empty-partial-and-failed-responses" />

## 작업 매개변수 찾기 {/* #find-operation-parameters */}

필요한 필드에 [Connector 가동 참고](../reference/connector-operations.md)을 사용, 허용 값과 정확한 통화. 여기에서 소스를 선택하십시오. 특정 작업을 준비 할 때 참조를 사용합니다.

genome 빌드, 생물, 조직, 단위 및 접근 버전이 반환된 데이터를 유지하십시오. 일반 HTTP 의미 및 복구를 위해 [문제 해결](../guides/troubleshooting.md)을 사용하십시오. 데이터베이스 기록, 예측 및 생성된 요약은 다른 증거 유형입니다; 연구 청구를 사용하기 전에 인용 된 소스를 확인하십시오.


구현 참조 : [커넥터Panel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

카탈로그 소스: [사이트맵](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [레지스트리.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
