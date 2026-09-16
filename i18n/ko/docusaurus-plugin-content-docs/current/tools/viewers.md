---
title: "과학 뷰어"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# 과학 뷰어 {/* #scientific-viewers */}

첨부 파일, 저장된 결과 또는 파일에서 파일을 엽니 다. 확장자는 렌더링자를 결정한다. 미리보기는 공급 된 콘텐츠를 보여줍니다; 과학적 예측을 실행하지 않거나 결과가 정확하다는 것을 설정한다.

## 실제 PDB 구조 검사 {/* #inspect-a-real-pdb-structure */}

<p className="example-label"><strong>실습 예제</strong> 1UBQ 구조 검사</p>

데모는 <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb의 특징</ExampleDownload>로 다운로드 된 원래 [RCSB 1UBQ 우비 구조](https://www.rcsb.org/structure/1UBQ)을 사용합니다. 이 예에서 네이티브 미리보기는 **660 원자**을 표시합니다.

1. 업로드 PDB를 열고 **Open full screen preview**을 선택합니다.
2. **Cartoon**, **Stick**, **Sphere**, **Surface** 및 **Line**를 전환하여 다른 표현을 검사합니다.
3. 캔버스 아래에 표시된 것처럼, 회전, 스크롤, 또는 **Shift + 드래그** 팬에 드래그.
4. 필요한 경우 원본 파일을 다운로드합니다. 대화로 돌아 가기 위해 전체 화면을 닫습니다.

![실제 1UBQ 만화보기](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.jpg)

| (주) | 무엇을 강조 |
| --- | --- |
| 만화 | 폴리머 백본 / 두 번째 구조 표현. 그것은 적당한 중합체 원자 없이 구조를 위해 사용할 수 없습니다. |
| 스틱 | 채권 및 지역 기하학. |
| 구체 | 원자 중심 영역. |
| 표면 | 분자 표면 표현. |
| 라인 | 더 가벼운 채권 표현. |

Representation controls 변경 렌더링 동안 보존 좌표. 공급된 구조와 메타데이터를 비교하여 누락된 잔류물 또는 예측 신뢰를 확인할 수 있습니다.

## FASTA 시퀀스 읽기 {/* #read-a-fasta-sequence */}

<p className="example-label"><strong>실습 예제</strong> P04637 단백질 시퀀스 읽기</p>

<ExampleDownload path="/examples/capabilities/P04637.fa">P04637 패션</ExampleDownload>, [UniProt의 FASTA 엔드포인트](https://rest.uniprot.org/uniprotkb/P04637.fasta)에서 다운로드. `>` 헤더의 accession/organism/gene를 검사하고 아래 순서. 네이티브 렌더는 소스 텍스트를 보존합니다; 순서 정렬 또는 편집 응용 프로그램이 아닙니다.

![소스 미리보기의 실제 UniProt FASTA](/img/open-science/capabilities-walkthrough/31-fasta-preview.jpg)

대화의 순서를 사용하려면 **+ → Attach files**과 현재 파일을 첨부하고 그 이름에서 infer 보다는 오히려 파일을 읽는 대리인을 요구하십시오. 이 P04637 입력을 위해, `P53_HUMAN` 우두머리, **393 아미노산** 및 처음 순서 **MEEPQSDPSV의 특징**를 검사하십시오. ID가 필요할 때 공급된 파일로 보고된 체크섬을 비교합니다.

모델 요청이 **관리 파일 또는 세션은 삭제됩니다.**을 반환하면 정상 메시지 및 재스트에 현재 파일을 다시 배치합니다. 그것이 지속되면 [문제 해결](../guides/troubleshooting.md)의 오류를 유지하십시오. 작업 미리보기는 모델 입력 참조가 여전히 유효하다는 것을 보장하지 않습니다.

## 분자를 미리보기 {/* #preview-a-molecule */}

<p className="example-label"><strong>실습 예제</strong> SMILES에서 aspirin 렌더링</p>

`smiles: "CC(=O)Oc1ccccc1C(=O)O"` 및 `filename: "aspirin"`를 사용하여 `preview_molecule`을 실행하는 Molecule Connector에 문의하십시오. 생성 된 **아스피린. 몰** 카드 및 풀 스크린 미리보기를 엽니 다.

![Aspirin는 내장 OpenChemLib 뷰어에 의해 렌더링](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.jpg)

이 예에서, 통화는 유효 구조, 공식 **C9H8O4의 특징**, 분자 무게 **180.15852** 및 **13 무거운 원자** 및 저장 <ExampleDownload path="/examples/capabilities/aspirin.mol">아스피린. 몰</ExampleDownload>를 반환. 뷰어는 수동 열리고 검사되었습니다. 이것은 오프라인 구조 연출입니다; 그것은 바인딩 친화성, 도킹 포즈 또는 치료 활동을 예측하지 않습니다.

## 과학적인 연출자를 선택하십시오 {/* #choose-a-scientific-renderer */}

| 입력 | 검사하는 방법 |
| --- | --- |
| PDB를 | Parsed 원자, 표현 가용성 및 원래 좌표 |
| MOL/SDF/SMILES/RXN | 구조 또는 반응 연출; 잘못된 또는 truncated 내용이 실패 할 수 있습니다 |
| FASTA 및 관련 순서 파일 | Original header, 순서 정체성 및 범위 |
| H5AD/H5와 같은 분석적인 이진 콘테이너 | 호환 분석 라이브러리를 사용하십시오. 일반 텍스트 미리보기는 컨테이너를 디코딩하지 않습니다. |

공유 도구 모음 제어 및 PDF, 사무실, 이미지 및 소스 텍스트 읽기는 [뉴스 레터](../guides/previews.md)에서 문서화됩니다. 데이터 해석은 [사이트맵](tables.md)에 속합니다; 정확한 확장 및 경계는 [파일 형식](../reference/formats.md)에 속합니다.

## 미리보기 실패 {/* #preview-failures */}

원본 파일과 렌더링자의 정확한 오류를 확인합니다. 적당한 중합체 원자 없이 구조는 만화 보기를 제안하지 않을지도 모릅니다; 변경된 표현은 누락된 좌표를 복원할 수 없습니다. 외부 뷰어를 시도 할 때 원래 바이트를 유지하십시오. 성공적인 미리보기는 모델이 첨부 파일을 혼잡하거나 예측 프로그램이 설치 될 수 있다는 것을 설정하지 않습니다.
