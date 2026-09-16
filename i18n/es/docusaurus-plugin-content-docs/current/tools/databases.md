---
title: "Bases de datos científicos"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';


# Bases de datos científicos {/* #scientific-databases */}

Los paquetes de la aplicación **23 data-source Connectors**, además de un Molecule Connector. El registro completo tiene **Operaciones de herramienta 239** incluyendo las dos operaciones de Molecule; el catálogo fuente de datos a continuación cubre 237. Habilitar el Connector relevante en Ajustes, luego hacer una pregunta atada con el tipo de identificador correcto.

<span id="actual-local-queries" />

## Catálogo de fuente de datos {/* #data-source-catalog */}

Elija por identificador y pregunta de investigación. La cobertura de la fuente difiere; consultar la referencia de operación para campos exactos.

| Conector | Fuentes | Operaciones | Úsalo para  |
| --- | --- | --- | ---  |
| Química · `chemistry` | PubChem, ChEBI, Rhea, BindingDB | 12 | Química de moléculas pequeñas a través de PubChem, ChEBI, Rhea y BindingDB.  |
| Gráfico de literatura · `literature` | OpenAlex, arXiv, Crossref, DataCite | 13 | Documentos, autores, citas, actualizaciones de DOI y registros de dataset/software. |
| PubMed · `pubmed` | PubMed, PMC, Europa PMC | 7 | Bibliografía biomédica a través de NCBI E-utilities, el convertidor de identificación PMC y Europa PMC — búsqueda, metadatos, artículos relacionados, búsqueda de citas, conversión de ID, texto completo y copyright.  |
| Genes & Ontologies · `genes` | MyGene, UniProt, OLS, QuickGO, Reactome | 7 | Gene/proteína de identidad y términos de ontología — mygene.info, UniProt, OLS4 ontologies, GO annotations, Reactome pathways.  |
| Genomes · `genomes` | Ensembl, UCSC | 11 | Anotación genómica, variantes, homología, secuencia y rutas del navegador — Ensembl REST y el navegador UCSC Genome.  |
| Variantes · `variants` | gnomAD, ClinVar, dbSNP | 15 | Variaciones genéticas humanas — frecuencias de población de gnomAD/constricción, registros de ClinVar/búsqueda (NCBI directa), dbSNP, variantes estructurales y mitocondriales.  |
| Pruebas clínicas · `clinical-trials` | ClinicalTrials.gov | 6 | Ensayos clínicos de ClinicalTrials.gov — búsqueda, detalles, patrocinadores, investigadores, puntos finales y elegibilidad.  |
| Genómica clínica · `clinical-genomics` | ClinGen, CIViC, Open Targets | 20 | Bases de conocimiento de la genómica clínica: curaciones de ClinGen, evidencia clínica CIViC y Plataforma de objetivos abiertos.  |
| Estructuras & Interacciones · `structures` | PDB, AlphaFold, EMDB, Portal Complejo, IntAct | 16 | Estructuras e interacciones moleculares — estructuras PDB, predicciones AlphaFold, entradas EMDB cryo-EM, complejos complejos Portales Complejos, redes de interacción IntAct.  |
| ChEMBL · `chembl` | ChEMBL | 6 | Compuestos bioactivos, fármacos, objetivos, bioactividad y mecanismos a través del ChEMBL REST API.  |
| biorxiv · `biorxiv` | bioRxiv, medRxiv, ROR | 7 | preimpresión bioRxiv/medRxiv — búsqueda por fecha/categoría, metadatos por DOI, enlaces de publicación de revistas, listados de fondos y estadísticas de plataforma.  |
| Regulación de drogas · `drug-regulatory` | openFDA | 7 | Aplicaciones, etiquetas y estadísticas de corpus a través de openFDA.  |
| Genética humana · `human-genetics` | GWAS Catalog, eQTL Catalogue, PheWeb | 14 | Pruebas de asociación genética humana — GWAS Catalog, eQTL Catalogue, y portales PheWeb PheWAS (FinnGen, BioBank Japan).  |
| Expresión · `expression` | GTEx | 12 | Expresión de tejido humano y eQTLs a través del Portal GTEx.  |
| Anotación de proteínas · `protein-annotation` | InterPro, Pfam, Human Protein Atlas, STRING | 13 | Arquitectura de dominio Protein, membresía familiar/clan, atlas de expresión y redes de interacción a través de InterPro/Pfam, el Atlas de Proteína Humana y STRING.  |
| Modelos de cáncer · `cancer-models` | cBioPortal | 6 | Registros de estudio de genómica del cáncer a través del cBioPortal REST API.  |
| ARN · `rna` | Rfam | 9 | Datos familiares de ARN no codificación (metadatos, alineamientos, modelos, estructuras) a través de Rfam.  |
| Archivos de Omics · `omics-archives` | ArrayExpress, GEO, MetaboLights, MGnify, PRIDE | 17 | Archivos de datos Omics — expresión (ArrayExpress, GEO), metabolomics (MetaboLights), metagenomics (MGnify) y proteomics (PRIDE).  |
| CellGuide · `cellguide` | CELLxGENE | 5 | Identidad de tipo celular, genes marcadores, conjuntos de datos fuente y tejidos a través de CELLxGENE CellGuide.  |
| Regulación · `regulation` | ENCODE, JASPAR, UniBind | 16 | Genética-regulación de la genómica funcional — experimentos ENCODE/biosamples/files, perfiles de unión JASPAR TF y TFBS UniBind ChIP-seq.  |
| Recursos de investigación · `research-resources` | Grants.gov, Antibody Registry | 5 | Búsqueda de financiación-oportunidad (Grants.gov) y búsquedas de catálogo de anticuerpos (Registro Anticuerpo).  |
| BioMart · `biomart` | Ensembl BioMart | 8 | Ensembl BioMart atributo consultas y traducción de identificador.  |
| ZINC · `zinc` | ZINC | 5 | ZINC22 espacio químico depurable (CartBlanche22) — búsqueda compuesta por ZINC id, búsqueda exacta/similaridad de SMILES, resolución de código de proveedor, muestreo aleatorio, ubicaciones de estructura 3D para acoplamiento.  |

## Recuperar un registro y verificar su identidad {/* #retrieve-a-record-and-verify-its-identity */}

1. Abra **Settings → Connectors**, busque la fuente requerida y confirme la disponibilidad al agente indicado.
2. Abre su detalle. Lea **Tools**, entradas, ejemplo y requisitos de terceros.
3. Proporcione una consulta/accesión explícita y un límite de resultados. Retener la consulta exacta cuando se crea una colección de literatura o una tabla de pruebas.
4. Inspeccione los IDs devueltos y los campos de origen. Un resultado vacío, un lote truncado y un error son resultados diferentes.
5. Guardar los registros necesarios en el proyecto / biblioteca deliberadamente. Una respuesta de búsqueda no significa automáticamente que todos los documentos fueron agregados a la biblioteca de literatura o los textos completos descargados.

### Empieza con un identificador conocido {/* #start-with-one-known-identifier */}

<p className="example-label"><strong>Ejemplo práctico</strong> Resolver el identificador humano del gen TP53</p>

Habilitar **Genes & Ontologies** y preguntar: **Utilice query_genes para resolver TP53 con alcances="symbol", especie="human" y campos="symbol,name,entrezgene". Devuelve la consulta de entrada y cualquier registro sin igual.** En este ejemplo, el registro humano TP53 identifica Entrez Gene **7157** y el nombre **proteína tumoral p53**. Verifique el `query` y `symbol` del registro antes de usar el ID de mapeado. Un símbolo puede devolver varios partidos, así que reten todos los resultados hasta que haya confirmado el organismo y registro previstos. [Campos de acción](../reference/connector-operations.md#query_genes).

## Elige una consulta e inspecciona el resultado {/* #choose-a-query-and-inspect-the-result */}

<p className="example-label"><strong>Ejemplo</strong> Consultas y respuestas de la base de datos</p>

En el cuadro se registran estas respuestas de ejemplo; los resultados de las consultas en vivo pueden diferir.

| Connector / herramienta | Entrada | Resultado observado |
| --- | --- | --- |
| Archivos de Omics / geo_get_series | `accessions: ["GSE60450"]` | Metadatos de serie/sample con muestras 12; la recuperación de metadatos no recompute los conteos cargados. |
| Genes / query_genes | TP53; alcance del símbolo; humanos | Entrez Gene ID 7157, símbolo TP53, nombre proteína tumoral p53. |
| PubMed / search_articles | GSE60450, máximo 2 | PMIDs 38059347 y 37306301. Estos son coincidencias de consulta, no automáticamente la publicación original del conjunto de datos. |
| Química / pubchem_search_compounds | aspirina, máximo 1 CID | CID 2244, fórmula C9H8O4 y peso molecular 180.16. |
| Literatura / openalex_search_works | `CRISPR base editing`; de 2020; acceso abierto; máximo 2 | Dos registros de trabajo con OpenAlex IDs, campos fuente y banderas de integridad. |

### Conecta OpenAlex y sigue enlaces de citación {/* #connect-openalex-and-follow-citation-links */}

1. Abre **Settings → Connectors → Literature Graph → Manage credentials → OpenAlex**.
2. Introduzca su tecla API, seleccione **Validate**, luego **Save** después de que la validación tenga éxito.
3. Busque un tema con un pequeño límite `max_records`. Compruebe `n_records_returned` y `records_truncated` antes de describir el resultado como completo.
4. Utilice un ID de trabajo devuelto con `openalex_get_work`. Utilice `openalex_citations` para papeles citando ese trabajo y `openalex_references` para trabajos que cita. Estas son direcciones opuestas.
5. Para los registros del autor, confirme la institución y el ORCID antes de recuperar un perfil del autor. Use un ID de origen o ISSN para desambiguar un nombre de revista.

Vea el [Parámetros de operación OpenAlex](../reference/connector-operations.md#openalex_search_works) para filtros y campos devueltos.

### Busque un DOI y sus registros de investigación relacionados {/* #look-up-a-doi-and-its-related-research-records */}

Activar **Gráfico de literatura**. Utilice `crossref_get_work` para metadatos de editor y `crossref_get_updates` para las relaciones de corrección/retracción depositadas. Utilice `datacite_search_records` para encontrar DOIs de dataset/software, luego `datacite_get_record` para inspeccionar un registro seleccionado. Estos cuatro métodos públicos no requieren la clave OpenAlex. Verificar la identidad DOI, dirección de relación y reutilizar los términos antes de descargar o citar un recurso. Los campos exactos están en el [referencia a la operación](../reference/connector-operations.md#family-2).

Rfam secuencia de búsqueda ahora utiliza el punto final oficial de lote. Si una instalación anterior devuelve el error de punto de retiro, actualice la aplicación y reingrese la operación prevista. Un trabajo pendiente no es una búsqueda completa sin éxitos.

## Maneja un registro devuelto, coincidencia o error vacío {/* #handle-a-returned-record-empty-match-or-error */}

Inspeccione el estado devuelto antes de usar un resultado. Utilice el [referencia a la operación](../reference/connector-operations.md) para interpretar campos y banderas de integridad.

| Resultado observado | Qué hacer después |
| --- | --- |
| `found: false`, cero registros, investigadores vacíos o cerillas de proveedores | Chequee identificador, organismo, alcance de consulta y filtros. Preserve el resultado vacío; no lo presente como un registro recuperado. |
| `credential_required` para OpenAlex | Abra la forma credencial solicitada y ate su propia llave antes de reintentar. |
| `contact_email_required` para consultas directas de la variante NCBI | Abrir **Settings → Connectors → Manage credentials → Literature access**, entrar **Contact email** y seleccionar **Save**. Retratar la consulta fallida. Una llave NCBI API es opcional. Comprobación de identificadores devueltos, cuentas de partido y banderas de truncación; un resultado vacío es distinto de un error de conexión. |
| HTTP `410` de eQTL | Retener la URL fuente, operación y respuesta, y comprobar la disponibilidad del servicio antes de cambiar los insumos científicos. |
| solicitud Connector programado después `30000ms` | Retrocede una petición más pequeña. Aumentar sólo el tiempo exterior Notebook no cambia la fecha límite del Connector. |
| La ejecución de Notebook terminó después `60000ms` | La ejecución terminó sin un resultado. - Operaciones de reingreso individual; no infiere que todo servicio de corriente no haya fracasado. |
| Página de mantenimiento de BioMart HTML; PRIDE `Unexpected end of JSON input` | La respuesta estructurada prevista no estaba disponible. Regrese más tarde y mantenga el tipo de respuesta/error para un problema. |
| La tarea de ZINC no terminó a tiempo | Preserve la URL de la tarea/resultada devuelta y verifique ese trabajo; El comienzo repetidamente de nuevos empleos no recupera su resultado. |

Para un informe, adjunte la operación, entrada atada, texto de error y timetamp a través de [Solución de problemas](../guides/troubleshooting.md). Retire las credenciales y los datos privados antes de compartir.

<span id="empty-partial-and-failed-responses" />

## Encontrar parámetros de operación {/* #find-operation-parameters */}

Utilice el [Referencia de operación Connector](../reference/connector-operations.md) para campos requeridos, valores aceptados y llamadas exactas. Elige una fuente aquí primero; utilizar la referencia al preparar una operación específica.

Mantenga las versiones de genoma, organismo, tejido, unidades y adhesión con datos devueltos. Para significados HTTP generales y recuperación, utilice [Solución de problemas](../guides/troubleshooting.md). Los registros de bases de datos, las predicciones y los resúmenes generados son diferentes tipos de pruebas; comprueba la fuente citada antes de usar una reclamación de investigación.


Referencia de implementación: [ConectoresPanel.tsx](https://github.com/aipoch/open-science/blob/v0.26.0/src/renderer/src/pages/settings/ConnectorsPanel.tsx).

Fuente de catálogo: [catálogo.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/catalog.ts), [registro.ts](https://github.com/aipoch/open-science/blob/v0.27.0/src/main/connectors/registry.ts).
