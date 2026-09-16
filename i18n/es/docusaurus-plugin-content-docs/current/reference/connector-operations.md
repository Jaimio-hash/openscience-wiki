---
title: "Referencia de operación Connector"
toc_max_heading_level: 2
last_update:
  date: '2026-09-14'
---

import ExampleDownload from '@site/src/components/ExampleDownload';
import ToolOperationGroup from '@site/src/components/ToolOperationGroup';

# Referencia de operación Connector {/* #connector-operation-reference */}

Busque nombres de operación exactos, campos obligatorios, predeterminados y llamadas de ejemplo. Para elegir una fuente de datos, comience con el [catálogo de bases de datos](../tools/databases.md). Ampliar la familia Connector que usted tiene la intención de llamar; disponibilidad y credenciales deben configurarse por separado.

## Donde el ejemplo llama a correr {/* #where-the-example-calls-run */}

El objeto `host` es suministrado por el entorno de ejecución de agente de Open-Science. El JavaScript a continuación es un **fragmento de llamada del lado del agente**, no un programa independiente Node.js y no un método en el cliente de la tarea pública SDK. Pídale al agente que cargue las instrucciones Connector pertinentes y utilice la operación de emparejamiento. Un marco puede exponer un puente Python en lugar de esta forma JavaScript.

En primer lugar, active el Connector en [Ajustes → Conectores](../guides/connectors.md), configure cualquier [credenciales necesarias](../tools/credentials.md), y conceda acceso al Specialist seleccionado si es aplicable. La llamada sigue la política de permiso de la conversación. Las integraciones de Public Node.js pueden gestionar la configuración de Connector con el [Task SDK](api.md), pero no pueden obtener este `host` importando a ese cliente.

### Lea un resultado antes de las llamadas en cadena {/* #read-a-result-before-chaining-calls */}

<p className="example-label"><strong>Ejemplo</strong> Pass devolvió ID de PubMed a una búsqueda de metadatos</p>

Por ejemplo, pregunte: **Use PubMed para buscar la guía de presentación de informes PRISMA; devolver el número total del partido y cinco PMIDs.** La operación `search_articles` devuelve un total y una página de identificadores. Alimenta a los que regresaron PMIDs a `get_article_metadata` para obtener títulos, autores y enlaces DOI. Una página vacía, un resultado truncado y un error de autenticación necesitan un manejo diferente.

| Información devuelta | Úsalo para |
| --- | --- |
| Conteo total de coincidencias y filas devueltas | Destinguir una pequeña página del conjunto de resultados completos |
| `truncated`, `records_truncated` o banderas de integridad específicas para la familia | Decidir si hacer página, estrechar la consulta o recuperar el resto |
| `not_found`, `missing`, `not_processed` | Identificar los insumos no resueltos y reingresar sólo los elementos apropiados |
| DOI, adhesión, URL fuente y lanzamiento/construido | Retener la identidad y la fuente necesarias para las consultas posteriores |
| Estado de texto completo o nota de licencia | Decide si se recuperó el texto y se puede reutilizar |

Los nombres de campo de retorno difieren por operación. Las descripciones y esquemas descargables a continuación especifican cada contrato; la tabla no es una respuesta universal JSON. Utilice la lista de la familia de la mano derecha para saltar, y luego ampliar los parámetros de esa familia. La búsqueda de un nombre de operación también abre su grupo que contiene.

## Contribuciones de las operaciones {/* #operation-inputs */}

Ampliar un Connector a la vez. Los campos obligatorios están marcados con **necesarios**; límites/defaults que se muestran aquí provienen del esquema de aplicación. Consulte el <ExampleDownload path="/examples/capabilities/connector-catalog-v0.29.0.json">registro completo descargable</ExampleDownload> para los esquemas JSON anidados, descripciones de rendimiento completo y ejemplos de llamadas de agentes. No pase un `id` genérico cuando una herramienta espera `accessions`, `cids`, `rs_id` u otro campo específico del espacio de nombres.


## Química {/* #family-1 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `pubchem_search_compounds` {/* #pubchem_search_compounds */}

Resolver un identificador químico (nombre, SMILES, InChIKey, o CID) a PubChem CIDs, opcionalmente con propiedades computadas centrales para los éxitos superiores.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `namespace` | cuerda. | facultativa; predeterminado: "name"; enum: &#91;"name", "smiles", "inchikey", "cid"&#93; |
| `max_cids` | entero | facultativa; predeterminado: 25; mínimo: 1; máximo: 100 |
| `with_properties` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("chemistry", "pubchem_search_compounds", {"query": "aspirin", "max_cids": 25})
```

### `pubchem_get_compounds` {/* #pubchem_get_compounds */}

Registros completos de propiedad computarizada para un lote de PubChem CIDs, con listas opcionales de sinónimos tapados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cids` | array de entero | **necesarios**; minItems: 1; maxItems: 50 |
| `include_synonyms` | boolean | facultativa; default: false |
| `max_synonyms` | entero | facultativa; predeterminado: 30 |

```javascript
const result = await host.mcp("chemistry", "pubchem_get_compounds", {"cids": [2244, 2519], "include_synonyms": false})
```

### `pubchem_similarity_search` {/* #pubchem_similarity_search */}

2D Tanimoto similarity search over all of PubChem for a query SMILES (synchronous fastsimilarity_2d route, no job polling).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `smiles` | cuerda. | **necesarios** |
| `threshold` | entero | facultativa; predeterminado: 90; mínimo: 1; máximo: 100 |
| `max_records` | entero | facultativa; predeterminado: 50; mínimo: 1; máximo: 200 |
| `with_properties` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("chemistry", "pubchem_similarity_search", {"smiles": "CC(=O)OC1=CC=CC=C1C(=O)O", "threshold": 90})
```

### `pubchem_get_bioassay_summary` {/* #pubchem_get_bioassay_summary */}

Resumen de la actividad de bioassayo para un compuesto PubChem - que los ensayos lo probaron, contra qué objetivos, con qué resultado y potencia.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cid` | entero | **necesarios** |
| `active_only` | boolean | facultativa; default: false |
| `max_rows` | entero | facultativa; predeterminado: 100; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chemistry", "pubchem_get_bioassay_summary", {"cid": 2244, "active_only": true})
```

### `pubchem_get_safety` {/* #pubchem_get_safety */}

Clasificación de seguridad GHS para un compuesto PubChem (PUG-View 'GHS Classification' epígrafe), agregados entre las fuentes de presentación de informes.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cid` | entero | **necesarios** |

```javascript
const result = await host.mcp("chemistry", "pubchem_get_safety", {"cid": 702})
```

### `chebi_search` {/* #chebi_search */}

Búsqueda de texto completo sobre entidades ChEBI (nombres, sinónimos, fórmulas, InChIKeys).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `term` | cuerda. | **necesarios** |
| `max_results` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 100 |
| `page` | entero | facultativa; predeterminado: 1; mínimo: 1 |

```javascript
const result = await host.mcp("chemistry", "chebi_search", {"term": "caffeine", "max_results": 20})
```

### `chebi_get_entity` {/* #chebi_get_entity */}

Registro completo de la entidad ChEBI: nombres, estructura, datos químicos, roles y referencias cruzadas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chebi_id` | cuerda. | **necesarios** |
| `max_synonyms` | entero | facultativa; predeterminado: 30 |
| `max_xrefs` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("chemistry", "chebi_get_entity", {"chebi_id": "CHEBI:27732"})
```

### `chebi_get_ontology` {/* #chebi_get_ontology */}

Relaciones ontológicas de una entidad ChEBI — lo que ES (extrocedente: es un / tiene papel / ácido conjugado...) y lo que apunta a AT it (incoming: children/derivatives).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chebi_id` | cuerda. | **necesarios** |
| `relation_type` | cuerda. | opcional |
| `max_relations` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("chemistry", "chebi_get_ontology", {"chebi_id": "CHEBI:27732", "relation_type": "has role"})
```

### `rhea_search_reactions` {/* #rhea_search_reactions */}

Buscar Reacciones maestras de Ñandú por texto de ecuación, participante ChEBI id, o número EC (tipo de consulta auto-detectado).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `limit` | entero | facultativa; predeterminado: 50; mínimo: 1; máximo: 500 |

```javascript
const result = await host.mcp("chemistry", "rhea_search_reactions", {"query": "caffeine", "limit": 50})
```

### `rhea_get_reaction` {/* #rhea_get_reaction */}

Registro completo para una reacción de Ñandú: ecuación, participantes con ids ChEBI y estoichiometría, enlaces EC, dirección familiar y literatura.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `rhea_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("chemistry", "rhea_get_reaction", {"rhea_id": "10280"})
```

### `bindingdb_ligands_by_target` {/* #bindingdb_ligands_by_target */}

Afinidades de unión aseguradas (Ki/Kd/IC50/EC50) de todos los ligandos BindingDB contra un objetivo de proteínas, por adhesión UniProt.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `uniprot` | cuerda. | **necesarios** |
| `affinity_cutoff_nm` | Número | facultativa; predeterminado: 10000 |
| `max_rows` | entero | facultativa; predeterminado: 100; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chemistry", "bindingdb_ligands_by_target", {"uniprot": "P00533", "affinity_cutoff_nm": 100})
```

### `bindingdb_targets_by_compound` {/* #bindingdb_targets_by_compound */}

Metas de proteína con afinidades medidas para compuestos 2D-similar a una consulta SMILES — " ¿Qué se une esta molécula (o sus análogos cercanos)?".

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `smiles` | cuerda. | **necesarios** |
| `similarity` | Número | facultativa; predeterminado: 0.85; mínimo: 0.5; máximo: 1 |
| `max_rows` | entero | facultativa; predeterminado: 100; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chemistry", "bindingdb_targets_by_compound", {"smiles": "CC(=O)OC1=CC=CC=C1C(=O)O", "similarity": 0.85})
```

</ToolOperationGroup>

## Gráfico de literatura {/* #family-2 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `openalex_search_works` {/* #openalex_search_works */}

Buscar OpenAlex obras académicas (todas las disciplinas, ~250M registros) con filtros de año/tipo/OA/venue. Args: consulta (texto libre sobre título+abstract+fulltext; opcional si se establece un filtro), year_from, year_to (años inclusivos), work_type (artículo/review/preprint/book-chapter/dataset/disertation), open_access_only, lugar (S-id, openalex.org URL, ISSN, o un nombre claro resuelto a las fuentes principales a las que se ha llegado — en venue_resolved; pasar una identificación exacta para saltar la resolución), ordenar (relanzamiento por defecto / cited_by_count / publication_date), max_records (predeterminado 50, techo duro 500; páginas de 200), include_abstracts (reconstruido del índice invertido, pero SOLAMENTE para las licencias verificadas-abiertas - cc-by/cc-by-sa/cc0/public-domain; otros obtienen abstract=null + abstract_policy nota + abstract_license; añade vracs). Devuelve &#123;query, filtros, de tipo, api_total, n_records_returned, records_truncated, records&#125;; cada registro es la forma de trabajo magra (openalex_id, doi, pmid, title, publication_year/date, type, language, is_retracted, autores&#91;...&#93;, source&#123;...&#125;, biblio, cited_by_count, fwci, referenced_works_count, open_access&#123;...&#125;, best_oa_pdf_url, primary_topic, palabras clave).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |
| `year_from` | entero | opcional |
| `year_to` | entero | opcional |
| `work_type` | cuerda. | opcional |
| `open_access_only` | boolean | opcional |
| `venue` | cuerda. | opcional |
| `sort` | cuerda. | facultativa; predeterminado: "relevance"; enum: &#91;"relevance", "cited_by_count", "publication_date"&#93; |
| `max_records` | entero | facultativa; predeterminado: 50 |
| `include_abstracts` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("literature", "openalex_search_works", {"query": "CRISPR base editing", "year_from": 2020, "open_access_only": true, "sort": "cited_by_count", "max_records": 25})
```

### `openalex_get_work` {/* #openalex_get_work */}

Obtenga un trabajo de OpenAlex en su totalidad — metadatos, abstractos (reconstruidos del índice invertido, con licencia como en openalex_search_works), ubicaciones de OA, referenced_works (salientes W-ids — hidratados con openalex_references) y counts_by_year. Args: work_id (W-id, openalex.org URL, DOI, o doi.org URL). Las revisiones DOI resuelven mediante el filtro reclamante; cuando varias obras comparten un DOI el más recitado es seleccionado y doi_claimants + doi_resolution_note están incluidos. No se fundan para los IDs/DOIs desconocidos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `work_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("literature", "openalex_get_work", {"work_id": "W2741809807"})
```

### `openalex_citations` {/* #openalex_citations */}

La lista funciona que CITE un trabajo dado (recibiendo citas) a través de OpenAlex's gráfico de citación. Args: work_id (W-id/URL/DOI — DOIs cost one extra resolution request), sort (cited_by_count default / publication_date / relevance), max_records (default 50, techo 500), include_abstracts. Devuelve &#123;work_id, api_total (el verdadero recuento de citas), n_records_returned, records_truncated, records&#125; (Registros de trabajo).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `work_id` | cuerda. | **necesarios** |
| `sort` | cuerda. | facultativa; predeterminado: "cited_by_count"; enum: &#91;"cited_by_count", "publication_date", "relevance"&#93; |
| `max_records` | entero | facultativa; predeterminado: 50 |
| `include_abstracts` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("literature", "openalex_citations", {"work_id": "W2741809807", "sort": "cited_by_count", "max_records": 50})
```

### `openalex_references` {/* #openalex_references */}

Enumerar las obras de un determinado trabajo CITES (referencias salientes), hidratado a metadatos completos en orden de lista de referencia. Args: work_id (W-id/URL/DOI), max_records (predeterminado 100, techo 500; hidratación batido 50/request). Retorno &#123;work_id, n_referencias, n_records_returned, records_truncated, references_not_hydrated (IDs OpenAlex no tiene registro para — nunca cayó en silencio), reference_ids (ALL W-ids salientes), records&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `work_id` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("literature", "openalex_references", {"work_id": "W2741809807", "max_records": 100})
```

### `openalex_search_authors` {/* #openalex_search_authors */}

Buscar Perfiles de autor OpenAlex por nombre. Args: consulta (pantallas con el nombre de la pantalla + alternativas; esperar homónimos — check affiliations/topics/ORCID), max_records (predeterminado 25, techo 500). Returns &#123;query, api_total, n_records_returned, records_truncated, records&#125;; cada registro &#123;author_id, nombre, orcid, works_count, cited_by_count, h_index, i10_index, afiliaciones&#91;&#123;institution, years&#125;&#93;, last_known_institutions, top_topics&#125;. Use author_id con openalex_get_author.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("literature", "openalex_search_authors", {"query": "Jennifer Doudna", "max_records": 25})
```

### `openalex_get_author` {/* #openalex_get_author */}

Traiga un perfil de autor OpenAlex más sus obras de primera clase. Args: author_id (A-id, openalex.org URL, o ORCID; CAVEAT: OpenAlex's El puntero ORCID puede resolver a un duplicado escaso — prefiera el A-id de openalex_search_authors), works_sample (predeterminado 10, max 200; 0 salta la solicitud extra). Devuelve el registro del autor más counts_by_year, top_works_total (conteo total de obras) y top_works (informes de trabajo por citas).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `author_id` | cuerda. | **necesarios** |
| `works_sample` | entero | facultativa; predeterminado: 10 |

```javascript
const result = await host.mcp("literature", "openalex_get_author", {"author_id": "A5023888391", "works_sample": 10})
```

### `openalex_venue_info` {/* #openalex_venue_info */}

Busque revistas/repositorios ('sources') en OpenAlex — estado de OA, listado DOAJ, APC, métricas de citación. Args: local (exacto S-id, openalex.org URL, o ISSN para un solo registro; cualquier otra cosa es una búsqueda de nombre), max_records (predeterminado 10, techo 500; nombre-búsqueda solamente). Devoluciones: exacta -> un registro de origen + counts_by_year; nombre búsqueda -> &#123;query, api_total, n_records_returned, records_truncated, records&#125;. Fuente: &#123;source_id, display_name, tipo, issn_l, issn, host_organization, country_code, homepage_url, is_oa, is_in_doaj, is_core, apc_usd, works_count, cited_by_count, h_index, two_year_mean_citedness, first/last_publication_year, top_topics&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `venue` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 10 |

```javascript
const result = await host.mcp("literature", "openalex_venue_info", {"venue": "Nature", "max_records": 10})
```

### `arxiv_search` {/* #arxiv_search */}

Preimpresos de búsqueda arXiv (física, matemáticas, CS, estadísticas, q-bio, ...) a través del Atom API oficial. Args: query (arXiv query string; términos simples buscar todos los campos, campo prefijos ti:/au:/abs: y booleanos y/OR/ANDNOT trabajo; opcional si se establece la categoría o un rango de fecha), categoría (código ARXiv AND-ed, por ejemplo. q-bio.GN, cs.LG, stat.ML), date_from / date_to (fecha de admisión YYY-MM-DD, inclusive), comenzar (con compensación de paging basado en 0; el API pasa ~3s entre las solicitudes — página cortés), max_results (predeterminado 25, max 100 por llamada), sort_by (predeterminado de la relación / presentadoFecha / últimoUpdatedDate), sort_order (descendiente por defecto / ascendente). Devuelve &#123;search_query (la consulta exacta enviada), api_total (conteo total de partidos de ZXiv's), start_index, n_records_returned, records_truncated, sort_by, sort_order, records&#125;; cada registro &#123;arxiv_id, versión, id_versioned, título, abstract, autores, publicado, actualizado, primary_category, categorías, doi, journal_ref, comentario, abs_url, pdf_url&#125;. doi/journal_ref sólo aparece después de la publicación de la revista. Las consultas malformadas generan un error (arXiv's HTTP-200 se detecta un alimento de error, nunca devuelto como datos).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |
| `category` | cuerda. | opcional |
| `date_from` | cuerda. | opcional |
| `date_to` | cuerda. | opcional |
| `start` | entero | facultativa; predeterminado: 0 |
| `max_results` | entero | facultativa; predeterminado: 25 |
| `sort_by` | cuerda. | facultativa; predeterminado: "relevance"; enum: &#91;"relevance", "submittedDate", "lastUpdatedDate"&#93; |
| `sort_order` | cuerda. | facultativa; predeterminado: "descending"; enum: &#91;"descending", "ascending"&#93; |

```javascript
const result = await host.mcp("literature", "arxiv_search", {"query": "ti:transformer", "category": "cs.LG", "max_results": 10})
```

### `arxiv_get_papers` {/* #arxiv_get_papers */}

Metadatos de papel arXiv de lote (incl. abstracts) por ID — una solicitud de hasta 100. Args: arxiv_ids (hasta 100 IDs en cualquier forma común — 2103.14030, versionado 2103.14030v2, antiguo estilo q-bio/0601001, arXiv: prefijo, o URL abs/pdf; IDs no versionados se resuelven a la última versión). Devuelve &#123;n_requested, n_found, duplicates (inputs that resolved to an already-returned paper), not_found (unknown AND malformed IDs — arXiv silently salta desconocidos y rechaza lotes enteros sobre los malformados; esta herramienta no hace ninguno), records&#125; — registros en el pedido solicitado, la misma forma que los registros arxiv_search. Los papeles retirados todavía devuelven metadatos (ver comentario para notas de retiro).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `arxiv_ids` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("literature", "arxiv_get_papers", {"arxiv_ids": ["2103.14030", "1706.03762v5"]})
```

### `crossref_get_work` {/* #crossref_get_work */}

Recuperar metadatos descriptos por el editor para un Crossref DOI. Un DOI desnudo, doi: prefijo o doi.org URL se acepta. No se requiere llave API. Si el DOI pertenece a otra agencia de registro, utilice el servicio de coincidencia; a Crossref 404 no prueba que el DOI sea inválido. Compruebe el DOI devuelto, título y source_url.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `doi` | cuerda. | **necesarios**; minLength: 1; maxLength: 2048 |

```javascript
const result = await host.mcp("literature", "crossref_get_work", {"doi": "10.1038/nature12968"})
```


### `crossref_get_updates` {/* #crossref_get_updates */}

Leer corrección depositada, retracción y otras relaciones de actualización. updated_by apunta a notificaciones que actualizan este trabajo; update_to apunta a las obras actualizadas por este DOI. Dirección de relación preservar y etiquetas de origen. Los arrays vacíos no establecen confiabilidad o prueban que no existe retracción.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `doi` | cuerda. | **necesarios**; minLength: 1; maxLength: 2048 |

```javascript
const result = await host.mcp("literature", "crossref_get_updates", {"doi": "10.1038/nature12968"})
```


### `datacite_search_records` {/* #datacite_search_records */}

Buscar datos públicos DataCite dataset/software DOI metadatos. Consulta de suministros, related_doi o ambos; query utiliza la sintaxis de la consulta DataCite. Mantenga los mismos filtros y page_size cuando siga next_page. La recuperación de número de página se limita a los primeros registros 10,000: estrechar la consulta si es necesario. Compruebe related_identifiers, derechos y URL de aterrizaje; metadatos no garantiza datos descargables o el permiso de reutilización.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | facultativa; minLength: 1; maxLength: 2000 |
| `related_doi` | cuerda. | facultativa; minLength: 1; maxLength: 2048 |
| `resource_type` | cuerda. | facultativa; predeterminado: "dataset"; enum: &#91;"dataset", "software"&#93; |
| `page_size` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 100 |
| `page` | entero | facultativa; predeterminado: 1; mínimo: 1; máximo: 10000 |

```javascript
const result = await host.mcp("literature", "datacite_search_records", {"query": "climate", "resource_type": "dataset", "page_size": 5})
```


### `datacite_get_record` {/* #datacite_get_record */}

Recuperar un registro de DataCite DOI público, incluyendo títulos, creadores, tipo de recurso, derechos, identificadores relacionados y versión disponible. Acepta un DOI desnudo, doi: prefijo o doi.org URL. Revise el identificador y la dirección de relación antes de usar un conjunto de datos o un paquete de software conectado.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `doi` | cuerda. | **necesarios**; minLength: 1; maxLength: 2048 |

```javascript
const result = await host.mcp("literature", "datacite_get_record", {"doi": "10.14454/qdd3-ps68"})
```

</ToolOperationGroup>

## PubMed {/* #family-3 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `search_articles` {/* #search_articles */}

Búsqueda PubMed (biomedical & literatura de ciencias de la vida a través de la investigación NCBI) para artículos que coincidan con una consulta. Devuelve la cuenta total del partido más una página de PMIDs. Admite etiquetas de campo PubMed (&#91;Title&#93;, &#91;Author&#93;, &#91;Journal&#93;, &#91;MeSH Terms&#93;, ...), operadores booleanos, filtración de fecha y ordenar. PubMed no indexa la física / CS / matemáticas / papeles de química pura.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `max_results` | entero | facultativa; predeterminado: 20 |
| `retstart` | entero | facultativa; predeterminado: 0 |
| `sort` | cuerda. | facultativa; enum: &#91;"relevance", "pub_date", "author", "journal_name", "title"&#93; |
| `date_from` | cuerda. | opcional |
| `date_to` | cuerda. | opcional |
| `datetype` | cuerda. | facultativa; predeterminado: "pdat"; enum: &#91;"pdat", "edat", "mdat"&#93; |

```javascript
const result = await host.mcp("pubmed", "search_articles", {"query": "CRISPR gene editing", "max_results": 10})
```

### `get_article_metadata` {/* #get_article_metadata */}

Recuperar metadatos detallados de PubMed por PMID (bulk, via efetch): identificadores (pmid/pmc/doi), título, abstracto, revista, autores con afiliaciones, fecha de publicación, términos de MeSH, tipos de artículo, idioma y citación. En cada uso, cite PubMed e incluya los DOIs (identifiers.doi) de artículo devuelto como enlaces.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pmids` | &#91;'string', 'array'&#93; | **necesarios** |

```javascript
const result = await host.mcp("pubmed", "get_article_metadata", {"pmids": ["35486828", "33264437"]})
```

### `find_related_articles` {/* #find_related_articles */}

Encuentre contenido relacionado PubMed para una o más fuente PMIDs vía NCBI elink. `pubmed_pubmed` (predeterminado) devuelve artículos similares clasificados por semejanza de títulos/abstracts/MeSH (no citas de NOT); `pubmed_pmc` devuelve los enlaces de PMC de texto completo; `pubmed_gene`/`pubmed_protein`/`pubmed_nucleotide` devuelve registros de secuencia/gene vinculados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pmids` | &#91;'string', 'array'&#93; | **necesarios** |
| `link_type` | cuerda. | facultativa; predeterminado: "pubmed_pubmed"; enum: &#91;"pubmed_pubmed", "pubmed_pmc", "pubmed_nucleotide", "pubmed_protein", "pubmed_gene"&#93; |
| `max_results` | entero | opcional |

```javascript
const result = await host.mcp("pubmed", "find_related_articles", {"pmids": ["35486828"], "link_type": "pubmed_pubmed"})
```

### `lookup_article_by_citation` {/* #lookup_article_by_citation */}

Resolver citas bibliográficas a PMIDs a través de Ecitmatch NCBI. Cada cita suministra algunos de &#123;journal, año, volumen, first_page, autor, key&#125;; proporcionar 2-3+ campos para el ajuste confiable. Use cuando tenga una lista de referencia y necesite PMIDs.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `citations` | array de objeto | **necesarios** |

```javascript
const result = await host.mcp("pubmed", "lookup_article_by_citation", {"citations": [{"journal": "Science", "year": 1987, "volume": "235", "first_page": "182", "author": "Palmenberg AC"}]})
```

### `convert_article_ids` {/* #convert_article_ids */}

Convertir entre PMID, PMCID y DOI a través del convertidor NCBI/PMC ID. ids de entrada homogénea por llamada (configurar `id_type` para que coincida). Comúnmente utilizado para comprobar si un PMID tiene un PMCID (es decir, texto completo en PMC) antes de llamar a get_full_text_article.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `ids` | &#91;'string', 'array'&#93; | **necesarios** |
| `id_type` | cuerda. | facultativa; predeterminado: "pmid"; enum: &#91;"pmid", "pmcid", "doi"&#93; |

```javascript
const result = await host.mcp("pubmed", "convert_article_ids", {"ids": ["PMC9046468"], "id_type": "pmcid"})
```

### `get_full_text_article` {/* #get_full_text_article */}

Recuperar texto completo de acceso abierto de PubMed Central a través de Europa PMC por PMC id ("PMC12345" o " 12345"). Devuelve texto de sección estructurado más la licencia; cuando el texto completo no está disponible, la razón se reporta explícitamente (fulltext_status). Sólo los artículos de OA-subset tienen un texto completo retrávido. En todos los usos, cite PubMed e incluya el artículo devuelto DOIs como enlaces.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pmc_ids` | &#91;'string', 'array'&#93; | **necesarios** |

```javascript
const result = await host.mcp("pubmed", "get_full_text_article", {"pmc_ids": ["PMC9046468"]})
```

### `get_copyright_status` {/* #get_copyright_status */}

Informe de copyright y estado de licencia por PMID combinando PubMed CopyrightInformation, el convertidor de identificación PMC (PMID -> PMCID/DOI), y el PMC &lt;permissions> bloque (tipo de licencia, URL de licencia ALI, declaración de copyright/año). Use to check open-access reuse rights before reproducing content.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pmids` | &#91;'string', 'array'&#93; | **necesarios** |

```javascript
const result = await host.mcp("pubmed", "get_copyright_status", {"pmids": ["35891187", "34375400"]})
```

</ToolOperationGroup>

## Genes & Ontologies {/* #family-4 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `query_genes` {/* #query_genes */}

Resolver identificadores/symbols de genes a través de mygene.info (batched, up to 1000 términos/request). Utilice esto para mapear símbolos de genes a Ensembl gene IDs, IDs de Entrez, nombres y cualquier otro campo mygene.info — o el revés (conectar `scopes` al espacio de nombres de sus términos de entrada, por ejemplo. "entrezgene", "ensembl.gene", "symbol,alias"). Args: términos (títulos de consulta, por ejemplo. &#91;"TP53","BRCA1"&#93;; no se admiten los términos que contengan comas); alcances (espacios de nombres de identificadores separados por el sistema para que coincidan con los términos contra); campos (campos de mygene separados para el consumo, o "all"); especie (nombre común "human"/"mouse" o NCBI taxid). Devoluciones &#123;n_input, n_records, not_found, records&#125;. Un término que coincide con varios genes produce varios registros (cada uno lleva su `query`). Los registros se ordenan deterministamente (orden de entrada, luego _id).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `terms` | array de cadena | **necesarios** |
| `scopes` | cuerda. | opcional |
| `fields` | cuerda. | facultativa; default: "symbol,name,taxid,entrezgene,ensembl.gene" |
| `species` | cuerda. | opcional |

```javascript
const result = await host.mcp("genes", "query_genes", {"terms": ["TP53", "BRCA1"], "scopes": "symbol,alias", "fields": "symbol,name,entrezgene,ensembl.gene", "species": "human"})
```

### `list_ontologies` {/* #list_ontologies */}

Lista de ontologías en el Servicio de Vigilancia de Ontología EBI (OLS4). Con `ontology_ids` (por ejemplo. &#91;"efo","cl","chebi","go","mondo"&#93;): embrague registros de metadatos estructurados para sólo esas ontologías; IDs desconocidas se reportan en `not_found`. Sin: el catálogo completo OLS4 (~250 ontologies, paginado completamente y contado-verificado). Devoluciones: &#123;registros:&#91;&#123;ontology_id, título, versión, estado, num_terms, ...&#125;&#93;, not_found:&#91;...&#93;&#125; para una lista de identificación, o &#123;records:&#91;...&#93;, total_elements, complete&#125; para el catálogo completo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `ontology_ids` | array de cadena | opcional |

```javascript
const result = await host.mcp("genes", "list_ontologies", {"ontology_ids": ["efo", "go", "mondo"]})
```

### `search_ontology_terms` {/* #search_ontology_terms */}

Buscar términos de ontología por etiqueta/sinónimo a través de una o más ontologías OLS4. Usos típicos: encontrar un ID de EFO para un nombre de enfermedad (ontologías=&#91;"efo"&#93;), términos de ontología celular para un tipo de célula (&#91;"cl"&#93;), términos de ChEBI para un químico (&#91;"chebi"&#93;), términos de GO por nombre (&#91;"go"&#93;) — o buscar todas las ontologías a la vez. Args: consulta (marca de plazo, sinónimo o identificador); ontologías (identes menores para restringir a; Ninguna búsqueda de toda ontología); exacta (total partido de la cadena); include_obsolete (default False); max_results (tratado por la relevancia de la OLS). Devuelve &#123;query, total_found, n_retorno, truncado, términos:&#91;&#123;curie, iri, label, short_form, ontología, descripción, tipo, is_defining_ontology&#125;&#93;&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `ontologies` | array de cadena | opcional |
| `exact` | boolean | facultativa; default: false |
| `include_obsolete` | boolean | facultativa; default: false |
| `max_results` | entero | facultativa; predeterminado: 20 |

```javascript
const result = await host.mcp("genes", "search_ontology_terms", {"query": "asthma", "ontologies": ["efo"], "max_results": 20})
```

### `get_ontology_term` {/* #get_ontology_term */}

Traiga un término de ontología 's detalles, o su conjunto completo de plazos relacionados. Con `relation=None`: registro a largo plazo (marca, sinónimos, descripción, bandera obsoleta, padres directos). Con una relación: el conjunto completo de términos relacionados, por ejemplo. relación="hierarchicalChildren" para niños directos incl. part_of etc., "descendants"/"hierarchicalDescendants" para todo el subárbol, "ancestors"/"hierarchicalAncestors", "parents", "children". La recuperación se cuenta con el total de API's. Args: ontología (bajo, por ejemplo. "efo","go","cl","chebi"); term_id (CURIE "EFO:0000305"/"GO:0006281" o IRI completo); (Ninguno o uno de los enumerados); include_parents (incluye referencias directas de los padres cuando la relación es Ninguno). Devoluciones: relación=None &#123;curie, iri, label, ontology, short_form, sinónimos, descripción, is_obsolete, has_children, parents&#125;; &#123;root, relación, total_elements, term_count, términos:&#91;...&#93;&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `ontology` | cuerda. | **necesarios** |
| `term_id` | cuerda. | **necesarios** |
| `relation` | cuerda. | facultativa; enum: &#91;"padres", "niños", "antepasados", "descendientes descendientes", "jerárquicaParents", "jerárquica", "jerárquica", "jerárquicaDescendants"&#93; |
| `include_parents` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("genes", "get_ontology_term", {"ontology": "go", "term_id": "GO:0006281", "relation": "children"})
```

### `get_go_annotations` {/* #get_go_annotations */}

Retrieve GO anotaciones para un producto de genes UniProt de QuickGO (completo, contado-verificado). Args: uniprot_accession (p. ej. "P04637", prefijo opcional); (omit para todos los aspectos, o uno de biological_process/molecular_function/cellular_component); (None/all, a preset "experimental_manual"=manually-assigned experimental evidence, "automatic_iea"=electronic/IEA, or an explicit ECO code like "ECO:0000314"; Los códigos de evidencia GO de tres letras como IDA/IEA NO son aceptados — QuickGO ignora silenciosamente la voz, filtro debe usar códigos ECO); taxon_id (impuesto NCBI opcional, por ejemplo. 9606); include_term_names (hidrar cada registro con el nombre del término GO/aspect/obsolete a través de una búsqueda de ontología batido); max_records (capítulo en los registros; conjunto completo todavía recuperado y resumido; `truncated` marca la tapa). Devoluciones &#123;gene_product, total_annotations, n_records, completos, truncados, distinct_go_ids (entre TODAS las anotaciones), registros:&#91;&#123;go_id, go_aspect, calificador, go_evidence, eco_id, referencia, assigned_by, fecha, ...&#125;&#93;&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `uniprot_accession` | cuerda. | **necesarios** |
| `aspect` | cuerda. | facultativa; enum: &#91;"biological_process", "molecular_function", "cellular_component"&#93; |
| `evidence` | cuerda. | opcional |
| `taxon_id` | entero | opcional |
| `include_term_names` | boolean | facultativa; default: false |
| `max_records` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("genes", "get_go_annotations", {"uniprot_accession": "P04637", "aspect": "molecular_function", "evidence": "experimental_manual"})
```

### `get_uniprot_entries` {/* #get_uniprot_entries */}

Traiga registros UniProtKB para una lista de adhesiones (recuperaciones OR cortadas, no por adhesión). Tres modos: `fields` dado → la recuperación tabular de token-lean de sólo esos campos UniProt (por ejemplo. &#91;"accession","id","protein_name","gene_names","organism_name","length","sequence"&#93;); `format` es ignorado. formato="fasta" → secuencias de FASTA por adhesión. formato="txt" → texto completo de UniProt de archivo plano (anotación completa); puede ser muy grande - preferir `fields`). Args: accessions (e.g. &#91;"P04637","P38398"&#93;); formato ("fasta"/"txt", ignorado cuando se dio `fields`); campos (optional UniProt REST nombres de campo para modo tabular). Devoluciones: campo modo &#123;accessions, campos, n_records, registros:&#91;&#123;&lt;column>:value&#125;&#93;&#125;; fasta/txt modo &#123;accessions, formato, n_found, desaparecidos, registros:&#123;accession:text&#125;&#125; — `missing` lista adhesiones UniProt no devolvió ningún registro.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |
| `format` | cuerda. | facultativa; enum: &#91;"fasta", "txt"&#93; |
| `fields` | array de cadena | opcional |

```javascript
const result = await host.mcp("genes", "get_uniprot_entries", {"accessions": ["P04637", "P38398"], "fields": ["accession", "id", "protein_name", "gene_names", "organism_name", "length"]})
```

### `map_reactome_pathways` {/* #map_reactome_pathways */}

Mapa de símbolos gen o adhesiones UniProt a las vías Reactome (AnalysisService token workflow). Args: identificadores (símbolos de género si id_type="symbol", UniProt adhesiones si "uniprot"; no duplicados); id_type ("symbol"/"uniprot"); especie (predeterminado "Homo sapiens"); recurso (AnálisisServicio vista de la molécula de fuente "TOTAL" por defecto; "UNIPROT" - restringir las cartografías a nivel de proteínas; include_disease (por defecto de servicio True); compacto (True → por identificador caminos de bajo nivel sólo &#123;stId, nombre,species&#125; + versión de la versión de la versión de la versión de reanimación; Falso → resultado determinista completo: conjuntos de ruta completa por identificador con estadísticas de entidad/reacción (p-valores, FDR, encontrado/total) y resumen de lotes incl. identifiers_not_found). Devoluciones: &#123;tool compacto, reactome_version, id_type, especie, n_input, genes:&#123;identifier:&#123;found, n_lowlevel_pathways, pathways&#125;&#125;&#125;; completa agrega estadísticas por vía informática y batch_summary.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `identifiers` | array de cadena | **necesarios** |
| `id_type` | cuerda. | **necesarios**; enum: &#91;"symbol", "uniprot"&#93; |
| `species` | cuerda. | facultativa; predeterminado: "Homo sapiens" |
| `resource` | cuerda. | facultativa; default: "TOTAL" |
| `include_disease` | boolean | facultativa; default: true |
| `compact` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("genes", "map_reactome_pathways", {"identifiers": ["TP53", "EGFR", "BRCA1"], "id_type": "symbol"})
```

</ToolOperationGroup>

## Genomes {/* #family-5 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `ensembl_lookup` {/* #ensembl_lookup */}

Busque un gen Ensembl/transcript/proteína por ID estable o un gen por símbolo; devuelve el registro de anotación central (ubicación, biotipo, transcripción canónica, descripción). Args: consulta (Ensembl stable ID ENSG.../ENST.../ENSP..., versión aceptada; o un símbolo de gen/alias como BRAF — verdaderos ID estables &#91;ENS + código de especies opcional + letra de características + >=6-digit block, o LRG_N&#93; ruta hacia el punto final del ID; todo lo demás, incl. símbolos que comienzan con "ENS" como ENSA, hasta el punto final del símbolo); especie (nombre de especie ensemblar para las búsquedas de símbolos, homo_sapiens predeterminado; ignorándose para los IDs estables); amplíe (incluya el árbol de características del niño - un gene's transcripciones/exones/traducción; predeterminado). Devuelve &#123;found, query, species, record&#125;; el registro es nulo cuando nada coincide, si no el dictamen de búsqueda de arriba — para un gen &#123;id, display_name, descripción, biotipo, object_type, seq_region_name, inicio, final, hilo, assembly_name, canonical_transcript, versión, ...&#125; con coordenadas inclusivas basadas en 1.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `species` | cuerda. | facultativa; por defecto: "homo_sapiens" |
| `expand` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("genomes", "ensembl_lookup", {"query": "BRAF"})
```

### `ensembl_xrefs` {/* #ensembl_xrefs */}

Referencias transversales externas de un ID estable ensembl —el puente de los IDs ensembl gene/transcript a HGNC, NCBI (EntrezGene), UniProt, OMIM, RefSeq, Expression Atlas y otros. Args: stable_id (ENSG.../ENST..., versionado aceptado); external_db (filtro de nombre de base de datos de corriente avanzada opcional, por ejemplo. HGNC, EntrezGene, Uniprot_gn, MIM_GENE, RefSeq_mRNA; omit para todos). Devoluciones &#123;stable_id, external_db, n_xrefs, xrefs&#125; — la lista COMPLETE (nunca truncada), clasificada por (dbname, primary_id); cada fila &#123;dbname, db_display_name, primary_id, display_id, descripción, sinónimos, info_type&#125;. IDs desconocidas devuelven n_xrefs:0.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `stable_id` | cuerda. | **necesarios** |
| `external_db` | cuerda. | opcional |

```javascript
const result = await host.mcp("genomes", "ensembl_xrefs", {"stable_id": "ENSG00000157764", "external_db": "HGNC"})
```

### `ensembl_vep_variant` {/* #ensembl_vep_variant */}

Predecir las consecuencias de la variante con Ensembl VEP — la mayoría del resumen de la lista de consecuencias (a menudo enorme) por transcript. Pase EITHER variant_id O region+allele. Args: variant_id (dbSNP rsID rs7412, COSMIC COSV..., o HGMD ID); región (GRCh38 1 basado en cromo inclusivo:start-end, por ejemplo. 7:140753336-140753336; SNV start==end; inicio de inserción=end+1; sufijo de hilo explícito:1/:-1 aceptado); alelo (variante alelo en el hilo delantero para la ruta región, por ejemplo. T o - para su supresión); especies (predeterminado homo_sapiens); max_consequences (cap on returned per-transcript rows, default 25; cuenta completa en n_transcript_consequences, las filas guardadas son las más severas HIGH>MODERATE>LOW>MODIFIER; transcript_consequences_truncated marca la tapa). Devoluciones &#123;consulta, n_results, resultados:&#91;&#123;entrada, assembly_name, seq_region_name, start, end, strand, allele_string, most_severe_consequence, genes: &#91;&#123;gene_id, gene_symbol, worst_impact, n_transcripts&#125;#, n_transcript_consequences, transcript_consequences_truncated, transcript_consequences:&#91;...&#93;, n_regulatory_feature_consequences, n_motif_feature_consequences, colocated_variants:&#91;...&#93;&#125;&#93;&#125;. Los rsIDs desconocidos levantan con el mensaje de arriba.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `variant_id` | cuerda. | opcional |
| `region` | cuerda. | opcional |
| `allele` | cuerda. | opcional |
| `species` | cuerda. | facultativa; por defecto: "homo_sapiens" |
| `max_consequences` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("genomes", "ensembl_vep_variant", {"variant_id": "rs7412", "max_consequences": 25})
```

### `ensembl_homology` {/* #ensembl_homology */}

Ortodologías o paralogues de un gen de Ensembl Compara (condenadas filas — no alineaciones/secuencias). Args: gene_symbol (resolvado a un ID estable en `species` primero; pasar exactamente uno de gene_symbol/gene_id); gene_id (ENSG...); homology_type (orthologues default/paralogues/projections); target_species (restricto a una especie); target_taxon (NCBI taxon subtree, por ejemplo. Primados 9443; combinable con target_species, OR semantics); especie (especies de origen, homo_sapiens predeterminado); max_homologies (caída de la tapa de la médula predeterminada 200; n_total lleva el recuento completo, homologies_truncated marca la tapa). Devoluciones &#123;gene_id, gene_symbol, especie, homology_type, target_species, target_taxon, n_total, homologies_truncated, homologies&#125;; filas clasificadas por (species,id) &#123;type, especie, id, protein_id, taxonomy_level, method_link_type&#125;. Quirk: la ruta /homology/symbol se detiene — esta herramienta siempre resuelve símbolos y consultas por ID estable.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |
| `homology_type` | cuerda. | facultativa; predeterminado: "orthologues"; enum: &#91;"orthologues", "paralogues", "projections"&#93; |
| `target_species` | cuerda. | opcional |
| `target_taxon` | entero | opcional |
| `species` | cuerda. | facultativa; por defecto: "homo_sapiens" |
| `max_homologies` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("genomes", "ensembl_homology", {"gene_symbol": "BRAF", "target_species": "mus_musculus"})
```

### `ensembl_sequence` {/* #ensembl_sequence */}

Secuencia de captura de Ensembl — por ID estable (gene/transcript/proteína) o por región genómica. Pase EITHER stable_id O región. Args: stable_id (ENSG.../ENST.../ENSP..., versionado aceptado); región (1-based inclusive cromo:start..end or chrom:start-end, GRCh38 for human, max 10Mb); especies (para la ruta de la región, homo_sapiens predeterminado; ignorándose para los IDs estables); seq_type (Ruta I: por defecto genómico/cdna/cds/proteína — proteína sólo para ENST/ENSP; ignoró las regiones que siempre devuelven la genómica; max_bytes (payload guard default 400000 — secuencias más grandes han omitido `seq`; longitud/sha256/metadatos devueltos siempre; volver a llamar con max_bytes más grande para texto completo). Retorno &#123;found, query, seq_type, id, descripción, molécula, longitud, sha256, seq&#125; — longitud en la unidad implícita por molécula (bases para dna, residuos para proteínas); seq sustituido por seq_omitted cuando capped; encontrado:falso con campos nulos para identificaciones estables desconocidas; Las regiones malformadas/superdimensionadas se elevan con el mensaje de arriba.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `stable_id` | cuerda. | opcional |
| `region` | cuerda. | opcional |
| `species` | cuerda. | facultativa; por defecto: "homo_sapiens" |
| `seq_type` | cuerda. | facultativa; predeterminado: "genomic"; enum: &#91;"genomic", "cdna", "cds", "protein"&#93; |
| `max_bytes` | entero | facultativa; predeterminado: 400000 |

```javascript
const result = await host.mcp("genomes", "ensembl_sequence", {"stable_id": "ENSP00000288602", "seq_type": "protein"})
```

### `ensembl_overlap_region` {/* #ensembl_overlap_region */}

Lista Las características de conjunto superponen una región genómica — genes, transcripciones, características regulatorias (enhancers/promoters), repeticiones, variantes, bandas de karyotype. Args: region (1-based inclusive chrom:start-end GRCh38, por ejemplo. 7:140719327-140925199; arriba rechaza los lapsos > 5Mb - división más grande); (por defecto/transcript/exon/cds/regulatory/motif/repeat/variation/structural_variation/band/simple/misc); especies (predeterminado homo_sapiens); max_features (caída de la tapa de la médula predeterminada 500; n_total lleva el recuento completo de solapamiento, features_truncated marca la tapa). Retorno &#123;region, especie, característica, n_total, features_truncated, características&#125; ordenados por (start,id). La forma de fila varía — genes &#123;id, external_name, biotipo, descripción, inicio, final, cadena, canonical_transcript, ...&#125;; regulación &#123;id, descripción, inicio, final, extended_start/end, ...&#125;. Las regiones vacías regresan n_total:0.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `region` | cuerda. | **necesarios** |
| `feature` | cuerda. | facultativa; predeterminado: "gene"; &#91;Enum&#93;"gene", "transcripción", "exon", "cds", "reglamentación reglamentaria", "motivo", "repetición", "Variación", "structural_variation", "banda", "simple", "misc"&#93; |
| `species` | cuerda. | facultativa; por defecto: "homo_sapiens" |
| `max_features` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("genomes", "ensembl_overlap_region", {"region": "7:140719327-140925199", "feature": "gene"})
```

### `ucsc_list_tracks` {/* #ucsc_list_tracks */}

Listar las pistas de datos disponibles en un montaje de UCSC Genome Browser (sólo las pistas de hoja - las que se pueden consultar), opcionalmente filtrado. Args: genoma (hg38 default/hg19/mm39/danRer11/... ~220 assemblies); filter_text (por ejemplo, subestring insensible en caso de nombre/short/long label. phyloP, TFBS, ClinVar; omitir para listar todo - hg38 tiene ~24k hojas, casi siempre quieres un filtro); max_tracks (caída de la tapa de la médula predeterminada 200; n_total lleva el recuento completo del partido, tracks_truncated marca la tapa). Devuelve &#123;genome, filter_text, n_total, tracks_truncated, tracks&#125; ordenados por nombre de la pista; cada fila &#123;track, short_label, long_label, tipo, grupo, parent&#125;. Use `track` con ucsc_track_data. Quirk: primera llamada por genoma descarga el listado completo de ~17MB y lo engancha para el proceso.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `genome` | cuerda. | facultativa; default: "hg38" |
| `filter_text` | cuerda. | opcional |
| `max_tracks` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("genomes", "ucsc_list_tracks", {"genome": "hg38", "filter_text": "phyloP", "max_tracks": 50})
```

### `ucsc_track_data` {/* #ucsc_track_data */}

Obtenga filas crudas de cualquier UCSC Genome Browser track en una región — la escotilla de escape genérica detrás de ucsc_conservation / ucsc_tfbs_clusters ( pistas de género, ClinVar, GWAS catálogo, islas CpG, repeticiones, ...). Args: Track (name from ucsc_list_tracks, e.g. knownGene, cpgIslandExt, clinvarMain); cromo (prefijado por el cromo, chr7/chrX — UCSC requiere el prefijo); inicio (con base en 0 medio abierto; un inicio basado en Ensembl 1 es start-1 aquí); final (exclusivo); genoma (por defecto hg38); max_rows (API maxItemsOutput, predeterminado 1000; truncado refleja el API's propio maxItemsLimit flag). Retorno &#123;genome, pista, cromo, inicio, final, track_type, items_returned, truncado, hileras&#125; — filas en forma de corriente (BED-como &#123;chrom, chromStart, chromEnd, nombre, puntuación, ...&#125;; wiggle &#123;start, end, value&#125;). Aumentan las pistas desconocidas. Quirk: para algunas pistas enormes las tapas API salen y puntos en los datosDownloadUrl — se hace eco cuando está presente.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `track` | cuerda. | **necesarios** |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `end` | entero | **necesarios** |
| `genome` | cuerda. | facultativa; default: "hg38" |
| `max_rows` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("genomes", "ucsc_track_data", {"track": "cpgIslandExt", "chrom": "chr7", "start": 140700000, "end": 140800000, "genome": "hg38"})
```

### `ucsc_conservation` {/* #ucsc_conservation */}

Resumen de conservación evolutivo para una región de las pistas de UCSC phyloP / phastCons (puntos de base sobre alineamientos multiespecie). Args: cromado (prefijo de chr); inicio (con base en 0 medio abierto); final (exclusivo); lapso en el 100000 bp - división más grande); genoma (por defecto hg38); vía (filoP100way por defecto); positivo=conservado, negativo=rápido-evolución; alternativas hg38 phastCons100way, phyloP30way, phastCons30way, phyloP447way, phyloP470way; hg19 phyloP100wayAll/phastCons100way); include_values (también retorno por base &#123;start,end,value&#125; las filas capped en max_values, values_truncated marca la tapa; falsedad por defecto = sumario solamente); max_values (por defecto de la tapa de la base 2000). Retorno &#123;genome, pista, cromo, inicio, final, span_bp, n_bases_covered, coverage_fraction, media, min, max&#125; (+valores, values_truncated cuando se solicita). Estatas ponderadas por cada lapso base de hilera's, cortadas a la ventana; bases descubiertas inferiores coverage_fraction, no cero-señadas. Aumentan las vías no puntuadas; también se eleva una lista de filas con tregua.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `end` | entero | **necesarios** |
| `genome` | cuerda. | facultativa; default: "hg38" |
| `track` | cuerda. | facultativa; predeterminado: "phyloP100way" |
| `include_values` | boolean | facultativa; default: false |
| `max_values` | entero | facultativa; predeterminado: 2000 |

```javascript
const result = await host.mcp("genomes", "ucsc_conservation", {"chrom": "chr7", "start": 140753330, "end": 140753380, "track": "phyloP100way"})
```

### `ucsc_tfbs_clusters` {/* #ucsc_tfbs_clusters */}

Grupos de sitios vinculantes de factor de transcripción ENCODE que superponen una región (grupos máximos de CHIP-seq en cientos de tipos de celdas) - que TFs se unen donde. Args: cromado (prefijo de chr); inicio (con base en 0 medio abierto); final (exclusivo); genome (hg38 default track encRegTfbsClustered ENCODE 3, or hg19 wgEncodeRegTfbsClusteredV3; - otras asambleas; max_rows (API maxItemsOutput default 1000; truncado refleja maxItemsLimit). Retorno &#123;genome, pista, cromo, inicio, final, items_returned, truncado, n_factores, factores, clusters&#125; — clusters ordenados por (chromStart,name) &#123;name (Firma de la FTF, por ejemplo. CTCF), cromo, cromoStart, cromoEnd, puntaje (0-1000), sourceCount (experimentos de apoyo)&#125;; factores es la lista de TF distinta. Score>=~600 y alta fuenteCount ~ robusto vinculante.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `end` | entero | **necesarios** |
| `genome` | cuerda. | facultativa; default: "hg38" |
| `max_rows` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("genomes", "ucsc_tfbs_clusters", {"chrom": "chr7", "start": 140699000, "end": 140760000, "genome": "hg38"})
```

### `ucsc_chrom_sizes` {/* #ucsc_chrom_sizes */}

Nombres cromosomas/contig y tamaños de una asamblea UCSC — para validar coordenadas y regiones iterantes. Args: genome (default hg38); filter_text (subestring insensible en el nombre, por ejemplo. chr1; omit for all - hg38 tiene secuencias 711, principalmente alt/random/unplaced; los cromosomas primarios son los primeros); max_chroms (caída de la tapa de la médula predeterminada 100; n_total lleva el recuento completo post-filtro, chroms_truncated marca la tapa). Retorno &#123;genome, filter_text, chrom_count (en todo el cuerpo desde el API), n_total, chroms_truncated, cromosomas:&#91;&#123;name, size_bp&#125;&#93;&#125; ordenados por tamaño descendiendo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `genome` | cuerda. | facultativa; default: "hg38" |
| `filter_text` | cuerda. | opcional |
| `max_chroms` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("genomes", "ucsc_chrom_sizes", {"genome": "hg38", "filter_text": "chr1", "max_chroms": 25})
```

</ToolOperationGroup>

## Variantes {/* #family-6 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `get_variant` {/* #get_variant */}

Busque una variante corta de gnomAD por ID y devuelva sus frecuencias de población. `variant_id` es `chrom-pos-ref-alt` en el dataset's de referencia (GRCh38 para r3/r4, GRCh37 para r2.1/ExAC), por ejemplo. `19-44908822-C-T` (APOE rs7412); use `search_variants` para resolver un RsID primero.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `variant_id` | cuerda. | **necesarios** |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_r4"; &#91;Enum&#93;"gnomad_r4", "gnomad_r4_non_ukb", "gnomad_r3", "gnomad_r3_controls_and_biobanks", "gnomad_r3_non_cancer", "gnomad_r3_non_neuro", "gnomad_r3_non_topmed", "gnomad_r3_non_v2", "gnomad_r2_1", "gnomad_r2_1_controls", "gnomad_r2_1_non_cancer", "gnomad_r2_1_non_neuro", "gnomad_r2_1_non_topmed", "exac"&#93; |

```javascript
const result = await host.mcp("variants", "get_variant", {"variant_id": "19-44908822-C-T", "dataset": "gnomad_r4"})
```

### `search_variants` {/* #search_variants */}

GnomAD de búsqueda para IDs variantes que coincidan con una cadena de consulta (un rsID como `rs7412`, una ID de variante o un prefijo). Utilice esto para resolver los RsIDs a los IDs `chrom-pos-ref-alt` para `get_variant`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_r4"; &#91;Enum&#93;"gnomad_r4", "gnomad_r4_non_ukb", "gnomad_r3", "gnomad_r3_controls_and_biobanks", "gnomad_r3_non_cancer", "gnomad_r3_non_neuro", "gnomad_r3_non_topmed", "gnomad_r3_non_v2", "gnomad_r2_1", "gnomad_r2_1_controls", "gnomad_r2_1_non_cancer", "gnomad_r2_1_non_neuro", "gnomad_r2_1_non_topmed", "exac"&#93; |

```javascript
const result = await host.mcp("variants", "search_variants", {"query": "rs7412", "dataset": "gnomad_r4"})
```

### `gene_variants` {/* #gene_variants */}

Lista TODAS las variantes cortas de gnomAD en un gen (lista completa) pueden ser miles de filas para genes grandes. Pase exactamente uno de `gene_symbol` (símbolo HGNC, por ejemplo. `APOE`) o `gene_id` (Ensembl gene ID, por ejemplo. `ENSG00000130203`).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_r4"; &#91;Enum&#93;"gnomad_r4", "gnomad_r4_non_ukb", "gnomad_r3", "gnomad_r3_controls_and_biobanks", "gnomad_r3_non_cancer", "gnomad_r3_non_neuro", "gnomad_r3_non_topmed", "gnomad_r3_non_v2", "gnomad_r2_1", "gnomad_r2_1_controls", "gnomad_r2_1_non_cancer", "gnomad_r2_1_non_neuro", "gnomad_r2_1_non_topmed", "exac"&#93; |

```javascript
const result = await host.mcp("variants", "gene_variants", {"gene_symbol": "APOE", "dataset": "gnomad_r4"})
```

### `gene_constraint` {/* #gene_constraint */}

gnomAD gene limitt metrics: pLI, observado/expected LoF-missense-synonymous cuenta con oe ratios + 90% CI bounds, y por clase z-scores. Usar para juzgar un gen's intolerance to loss-of-function >= 0.9 o oe_lof_upper (LOEUF) &lt; 0.6 ~ LoF-intolerant). Pase exactamente uno de `gene_symbol` (por ejemplo. `TP53`) o `gene_id`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |

```javascript
const result = await host.mcp("variants", "gene_constraint", {"gene_symbol": "TP53"})
```

### `region_variants` {/* #region_variants */}

Lista TODAS las variantes cortas de gnomAD en una región genómica (max 1 Mb) dividieron regiones más grandes en ventanas consecutivas. `chrom` es un nombre cromosoma sin prefijo `chr` (`1`-`22`, `X`, `Y`); `start`/`stop` son 1 integrados y `stop - start` debe ser &lt;= 1,000,000. El conjunto de datos determina la construcción de referencia de las coordenadas (GRCh38 para r3/r4).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `stop` | entero | **necesarios** |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_r4"; &#91;Enum&#93;"gnomad_r4", "gnomad_r4_non_ukb", "gnomad_r3", "gnomad_r3_controls_and_biobanks", "gnomad_r3_non_cancer", "gnomad_r3_non_neuro", "gnomad_r3_non_topmed", "gnomad_r3_non_v2", "gnomad_r2_1", "gnomad_r2_1_controls", "gnomad_r2_1_non_cancer", "gnomad_r2_1_non_neuro", "gnomad_r2_1_non_topmed", "exac"&#93; |

```javascript
const result = await host.mcp("variants", "region_variants", {"chrom": "1", "start": 55039475, "stop": 55064852, "dataset": "gnomad_r4"})
```

### `liftover_variant` {/* #liftover_variant */}

Mapa una variante ID entre las obras de referencia (GRCh37 &lt;-> GRCh38) utilizando la mesa de elevación gnomAD's. `variant_id` es `chrom-pos-ref-alt` en `source_build`. La ruta es direccional: un GRCh38 ID aprobado con `source_build=GRCh37` devuelve cero resultados, no un error.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `variant_id` | cuerda. | **necesarios** |
| `source_build` | cuerda. | facultativa; predeterminado: "GRCh37"; enum: &#91;"GRCh37", "GRCh38"&#93; |

```javascript
const result = await host.mcp("variants", "liftover_variant", {"variant_id": "1-55516888-G-GA", "source_build": "GRCh37"})
```

### `clinvar_variants` {/* #clinvar_variants */}

Lista ClinVar variantes en un gen como reflejado por gnomAD, con significado clínico, estado de revisión y estrellas de oro. Los pines de salida gnomAD's instantánea ClinVar vía `clinvar_release_date`. Pase exactamente uno de `gene_symbol` (por ejemplo. `BRCA1`) o `gene_id`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |

```javascript
const result = await host.mcp("variants", "clinvar_variants", {"gene_symbol": "BRCA1"})
```

### `structural_variants` {/* #structural_variants */}

Lista de variantes estructurales gnomAD (deleciones, duplicaciones, inserciones, inversiones, CNVs...) superponen un gen. Pase exactamente uno de `gene_symbol` (por ejemplo. `TP53`) o `gene_id`. `dataset` es un pin SV — `gnomad_sv_r4` (por defecto, GRCh38) o `gnomad_sv_r2_1` (GRCh37); Las identificaciones de SV son específicas para la liberación.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_sv_r4"; enum: &#91;"gnomad_sv_r4", "gnomad_sv_r2_1"&#93; |

```javascript
const result = await host.mcp("variants", "structural_variants", {"gene_symbol": "TP53", "dataset": "gnomad_sv_r4"})
```

### `get_structural_variant` {/* #get_structural_variant */}

Busque una variante estructural de gnomAD por su ID SV específico de liberación (por ejemplo. `DEL_CHR17_599B1512` en gnomad_sv_r4). Los IDs NO llevan a través de las versiones — `dataset` (`gnomad_sv_r4` predeterminado, o `gnomad_sv_r2_1`) debe coincidir con la liberación de la ID vino.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `sv_id` | cuerda. | **necesarios** |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_sv_r4"; enum: &#91;"gnomad_sv_r4", "gnomad_sv_r2_1"&#93; |

```javascript
const result = await host.mcp("variants", "get_structural_variant", {"sv_id": "DEL_CHR17_A5250EA9", "dataset": "gnomad_sv_r4"})
```

### `mitochondrial_variants` {/* #mitochondrial_variants */}

Lista de las variantes mitocondriales gnomAD con recuentos heteroplasmáticos (`ac_het`, `ac_hom`, `max_heteroplasmy`) para un gen mitocondrial O una ventana de coordenadas chrM. Pase un gen (`gene_symbol` como `MT-TL1`, o `gene_id`) O una región (`region_start` + `region_stop`), no ambos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | opcional |
| `gene_id` | cuerda. | opcional |
| `region_start` | entero | opcional |
| `region_stop` | entero | opcional |
| `dataset` | cuerda. | facultativa; predeterminado: "gnomad_r4"; &#91;Enum&#93;"gnomad_r4", "gnomad_r4_non_ukb", "gnomad_r3", "gnomad_r3_controls_and_biobanks", "gnomad_r3_non_cancer", "gnomad_r3_non_neuro", "gnomad_r3_non_topmed", "gnomad_r3_non_v2", "gnomad_r2_1", "gnomad_r2_1_controls", "gnomad_r2_1_non_cancer", "gnomad_r2_1_non_neuro", "gnomad_r2_1_non_topmed", "exac"&#93; |

```javascript
const result = await host.mcp("variants", "mitochondrial_variants", {"gene_symbol": "MT-TL1", "dataset": "gnomad_r4"})
```

### `clinvar_search` {/* #clinvar_search */}

Buscar ClinVar directamente (en vivo NCBI, no gnomAD's instantánea) y volver a coincidir con los registros de variaciones con significado clínico, estado de revisión y estrellas de oro. Requiere un correo electrónico de contacto ([Ajustes → Credenciales → Acceso a la literatura → Contacto email](../tools/credentials.md)) por NCBI E-utilities política de uso. Args: consulta (una consulta ClinVar Entrez – texto libre como "TP53 R175H" o una cadena HGVS funciona, y los términos de campo componen con AND/OR/NOT, por ejemplo. BRCA1&#91;gene&#93;, patógeno&#91;CLIN_SIG&#93;, síndrome de "Lynch"&#91;dis&#93;, single_nucleotide_variant&#91;Tipo de variación&#93;; un rsID también funciona, pero clinvar_variant_by_rsid devuelve los registros más completos), max_records (página 1-200, por defecto 50). El partido TOTAL siempre se reporta; cuando total > max_records la lista es un prefijo tapado (ClinVar relevancia/recurso de la tendencia) y truncado es cierto. NCBI E-utilities intermitentemente devuelve HTTP 500 bajo carga — reingresar una vez unos segundos más tarde si esa superficie.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("variants", "clinvar_search", {"query": "BRCA1 pathogenic[CLIN_SIG]", "max_records": 50})
```

### `clinvar_get_records` {/* #clinvar_get_records */}

Obtenga registros completos de ClinVar para un lote de adhesiones VCV/RCV o ID de variación desnuda. Requiere un correo electrónico de contacto ([Ajustes → Credenciales → Acceso a la literatura → Contacto email](../tools/credentials.md)) por NCBI E-utilities política de uso. Args: adhesiones (hasta los identificadores 50, formas mixtas aceptadas — VCV000045122 (versión VCV000045122.3 ok; resuelto localmente, libre), RCV000019428 (cada RCV cuesta una investigación extra), o un ID de variación ClinVar (45122). rsIDs son rechazados — use clinvar_variant_by_rsid. Un RCV (un par de condiciones variantes) se resuelve a su registro de variación VCV padre. Nunca silenciosamente deja caer una entrada.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | &#91;'string', 'array'&#93; | **necesarios** |

```javascript
const result = await host.mcp("variants", "clinvar_get_records", {"accessions": ["VCV000045122", "RCV000019428", "45123"]})
```

### `clinvar_variant_by_rsid` {/* #clinvar_variant_by_rsid */}

Todos los registros de variaciones de ClinVar que hacen referencia a un dbSNP rsID, con clasificaciones completas (un rsID puede mapear a varios VCVs, uno por alelo alternativo, por ejemplo. rs121913529 cubre KRAS G12D/G12V/G12A). Requiere un correo electrónico de contacto ([Ajustes → Credenciales → Acceso a la literatura → Contacto email](../tools/credentials.md)) por NCBI E-utilities política de uso. Args: rsid (dbSNP reference SNP ID, por ejemplo. rs7412; case-insensible, debe coincidir con rs&lt;digits>), max_records (cap 1-200, por defecto 50). total siempre lleva el verdadero recuento de partido y banderas truncadas un listado de capped; total == 0 significa que ClinVar no tiene registro para el rsID.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `rsid` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("variants", "clinvar_variant_by_rsid", {"rsid": "rs121913529", "max_records": 50})
```

### `dbsnp_get_rsids` {/* #dbsnp_get_rsids */}

Registros Canónicos dbSNP RefSNP para un lote de rsIDs: GRCh38+GRCh37 colocaciones, alelos, contexto genético, frecuencias de alelo per-estudio, y referencias cruzadas ClinVar. Requiere un correo electrónico de contacto ([Ajustes → Credenciales → Acceso a la literatura → Contacto email](../tools/credentials.md)) por NCBI E-utilities usage policy; sin uno la herramienta devuelve &#123;error: 'contact_email_required', message&#125;. Args: rsids (hasta 20 rs&lt;digits>, caso-insensible) — cada uno cuesta una solicitud de servicios de varianza NCBI, por lo que los lotes grandes toman ~1 s por rsID. Devuelve &#123;n_requested, records, not_found (rs numbers dbSNP does't know), not_processed (rsIDs saltados cuando el presupuesto de la pared se agotó — re-request just those)&#125;. Cada registro: &#123;rsid, status, create_date, last_update_date, last_update_build_id, n_citations, citations_pmids (capped at 20; citations_truncated marca la tapa), variant_type, mane_select_ids, colocaciones, aleles&#125;. estado de 'live', 'merged' (la grabación en su lugar lleva merged_into — re-query those rsIDs) o 'no_data' (retirada o no apoyada). colocaciones dan coordenadas cromosómicas basadas en 1 con ref/altes por montaje (GRCh38 primero, is_primary verdadero). Cada entrada alt-allele: &#123;alelo, ref, spdi (0- interbase con base), hgvs, frecuencias: &#91;&#123;estudio, study_version, allele_count, total_count, af&#125;&#93; (ALFA, 1000Genomes, TOPMED, gnomAD ...), clinvar:&#123;rcv_accession, clinical_significances, review_status, last_evaluated_date, disease_names&#125;&#91; &#93;, genes: &#91;&#123;símbolo, gene_id, nombre, orientación, consecuencias (según términos de la OS), mane_select- Sí.&#123;transcript_hgvs, protein_spdi&#125;&#93;&#125;&#93;&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `rsids` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("variants", "dbsnp_get_rsids", {"rsids": ["rs7412", "rs429358"]})
```

### `dbsnp_search_by_region` {/* #dbsnp_search_by_region */}

Lista dbSNP rsIDs en una ventana genómica (indice de posición de la investigación db=snp - NCBI Variation Services no tiene punto final de la región). Requiere un correo electrónico de contacto ([Ajustes → Credenciales → Acceso a la literatura → Contacto email](../tools/credentials.md)) por NCBI E-utilities usage policy; sin uno la herramienta devuelve &#123;error: 'contact_email_required', message&#125;. Args: cromo (1-22, X, Y o MT; 'chr' prefijo tolerado), inicio (inclusivo basado en 1), parada (inclusiva; el lapso en 1 Mb: dividir las regiones más grandes en ventanas consecutivas; regiones densas tienen muchos miles de rsIDs por kb, así que mantenga las ventanas pequeñas o levanten max_rsids), montaje (que índice posicional — 'GRCh38' default -> &#91;CPOS&#93;, o 'GRCh37' -> &#91;CPOS_GRCH37&#93;; coordenadas deben estar en el montaje elegido), max_rsids (listing cap 1-1000, predeterminado 200). Devuelve &#123;chrom, start, stop, assembly, term (la exacta consulta Entrez utilizada), total (el cuenta de API's), n_retorno, truncado, rsids&#125;. truncado es cierto cuando total > n_retorno - la lista es entonces un prefijo en el orden predeterminado de Entrez (número de rs descendente), nunca una truncación silenciosa. Alimentar rsIDs (&lt;= 20 a la vez) a dbsnp_get_rsids para registros completos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `stop` | entero | **necesarios** |
| `assembly` | cuerda. | facultativa; predeterminado: "GRCh38"; enum: &#91;"GRCh38", "GRCh37"&#93; |
| `max_rsids` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("variants", "dbsnp_search_by_region", {"chrom": "19", "start": 44905000, "stop": 44910000, "assembly": "GRCh38"})
```

</ToolOperationGroup>

## Estudios clínicos {/* #family-7 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `search_trials` {/* #search_trials */}

Búsqueda de PREMIOS sobre ClinicalTrials.gov. Filtro por condición, intervención, patrocinador, ubicación, estado (por ejemplo. &#91;"RECRUITING"&#93;), fase (&#91;"PHASE1".."PHASE4"&#93;) y study_type. condición/intervención/patrocinador/ubicación acepta sintaxis de la consulta Essie (boolean AND/OR/NOT, " frases citadas", agrupación, sinónimos automáticos). Página con page_token; set count_total para el conteo total del partido. advanced_query fusiona una expresión de Essie cruda en filtro.avanzado.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `condition` | cuerda. | opcional |
| `intervention` | cuerda. | opcional |
| `sponsor` | cuerda. | opcional |
| `location` | cuerda. | opcional |
| `status` | array de cadena | opcional |
| `phase` | array de cadena | opcional |
| `study_type` | cuerda. | facultativa; enum: &#91;"INTERVENTIONAL", "OBSERVATIONAL", "EXPANDED_ACCESS"&#93; |
| `advanced_query` | cuerda. | opcional |
| `page_size` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 1000 |
| `page_token` | cuerda. | opcional |
| `count_total` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("clinical-trials", "search_trials", {"condition": "lung cancer", "status": ["RECRUITING"], "phase": ["PHASE3"], "count_total": true, "page_size": 10})
```

### `get_trial_details` {/* #get_trial_details */}

Obtenga detalles completos para un ensayo por NCT id (formato "NCT" + dígitos 8; un número es prefijado, insensible en caso). Devuelve criterios de elegibilidad completos, diseño de estudio, primario/secundario/otros puntos finales, todos los lugares, patrocinador y colaboradores, fechas, inscripción y un enlace de resultados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `nct_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-trials", "get_trial_details", {"nct_id": "NCT03661411"})
```

### `search_by_sponsor` {/* #search_by_sponsor */}

Buscar juicios patrocinados por una empresa u organización (concuerda con el nombre parcial, por ejemplo. "Pfizer" partidos "Pfizer Inc"). Opcionalmente estrecha por condición, fase y estado. Establecer count_total para el número total de ensayos por el patrocinador. Página con page_token.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `sponsor_name` | cuerda. | **necesarios** |
| `condition` | cuerda. | opcional |
| `phase` | array de cadena | opcional |
| `status` | array de cadena | opcional |
| `page_size` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 1000 |
| `page_token` | cuerda. | opcional |
| `count_total` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("clinical-trials", "search_by_sponsor", {"sponsor_name": "Pfizer", "phase": ["PHASE3"], "count_total": true})
```

### `search_investigators` {/* #search_investigators */}

Encontrar investigadores principales y sitios de investigación por condición, institución, ubicación o investigator_name. Filtros de instituciones en la instalación del sitio y tiene precedencia sobre la ubicación; investigator_name busca en generalNombre oficial y responsableInvestigatorFullName. Devuelve los contactos del sitio (nombres, roles, afiliaciones, instalaciones, ciudades) con sus ids de ensayo de NCT. page_size supera cuántos ensayos se escanean.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `condition` | cuerda. | opcional |
| `institution` | cuerda. | opcional |
| `location` | cuerda. | opcional |
| `investigator_name` | cuerda. | opcional |
| `status` | array de cadena | opcional |
| `page_size` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("clinical-trials", "search_investigators", {"condition": "Alzheimer", "institution": "Mayo Clinic", "page_size": 20})
```

### `analyze_endpoints` {/* #analyze_endpoints */}

Analizar las medidas primarias/secundarias/otros resultados (puntos finales). Proporcionar SOLO nct_id (modo single-trial) O afección (modo agregado entre los ensayos); si ambos se dan, nct_id tiene precedencia. El modo Aggregate puede ser reducido por fase y start_date_after (YYYY-MM-DD) y escanea hasta ensayos page_size. Devuelve las listas de puntos finales más los nombres de medida más comunes en los ensayos analizados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `nct_id` | cuerda. | opcional |
| `condition` | cuerda. | opcional |
| `phase` | array de cadena | opcional |
| `start_date_after` | cuerda. | opcional |
| `page_size` | entero | facultativa; predeterminado: 50; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("clinical-trials", "analyze_endpoints", {"nct_id": "NCT03661411"})
```

### `search_by_eligibility` {/* #search_by_eligibility */}

Concordancia entre el paciente y el juicio. DEFALITOS PARA RECIBAR juicios a menos que se establezca el estado. min_age/max_age son la edad de PATIENT' (" 65 Años", " 6 Meses") y pruebas de partido cuya ventana de edad admite al paciente; el sexo coincide con los juicios que aceptan ese sexo o todos los participantes; eligibility_keywords busca el texto de los criterios de inclusión/exclusión (por ejemplo. "HbA1c > 8", "BRCA mutation", "ECOG 0-1"). Al menos una de las condiciones, eligibility_keywords, min_age, max_age o sexo es necesario. Página con page_token.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `condition` | cuerda. | opcional |
| `eligibility_keywords` | cuerda. | opcional |
| `min_age` | cuerda. | opcional |
| `max_age` | cuerda. | opcional |
| `sex` | cuerda. | facultativa; enum: &#91;"ALL", "MALE", "FEMALE"&#93; |
| `status` | array de cadena | opcional |
| `page_size` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 1000 |
| `page_token` | cuerda. | opcional |

```javascript
const result = await host.mcp("clinical-trials", "search_by_eligibility", {"condition": "diabetes", "min_age": "65 Years", "sex": "FEMALE"})
```

</ToolOperationGroup>

## Genómica clínica {/* #family-8 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `clingen_gene_validity` {/* #clingen_gene_validity */}

Comisariaciones de validez de la enfermedad de ClinGen (cuán fuerte es la evidencia de que la variación en un gen causa una enfermedad: Relación de enfermedad definida/trong/Moderado/Limited/Disputed/Refuted/No Known Disease Relationship). Omit gene para enumerar todas las curaciones 3,600+.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "clingen_gene_validity", {"gene": "BRCA2"})
```

### `clingen_dosage_sensitivity` {/* #clingen_dosage_sensitivity */}

Comisariaciones de sensibilidad de dosificación ClinGen: afirmaciones de haploinsufficiencia y triplosensibilidad para genes (y opcionalmente ISCA genomic/CNV). Un símbolo de gen o un filtro de identificación de la región ISCA exactamente; Omitir para la mesa completa.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | opcional |
| `include_regions` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("clinical-genomics", "clingen_dosage_sensitivity", {"gene": "TP53"})
```

### `clingen_actionability` {/* #clingen_actionability */}

Comisariaciones ClinGen de accionamiento clínico: para trastornos asociados con un gen, ya sea la intervención temprana en portadores pre-sintomáticos es accionable (intervención/salida pares con severidad, probabilidad, eficacia, puntajes del componente de naturaleza de intervención y la puntuación total). El filtro genético coincide con cualquier miembro de temas de varios genes.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | opcional |
| `context` | cuerda. | facultativa; predeterminado: "both"; enum: &#91;"adult", "pediatric", "both"&#93; |

```javascript
const result = await host.mcp("clinical-genomics", "clingen_actionability", {"gene": "BRCA1", "context": "adult"})
```

### `clingen_variant_classifications` {/* #clingen_variant_classifications */}

ClinGen Evidence Repository (ERepo) expert-panel variante pathogenicity Ratings (VCEP interpretations under ACMG criteria). Proporcione EXACTAMENTE UNO de gen (símbolo HGNC), caid (ClinGen canonical allele id, por ejemplo. CA114360), o hgvs (por ejemplo, NM_000277.2:c.1222C>T). Retrieval completo (matchLimit=none).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | opcional |
| `caid` | cuerda. | opcional |
| `hgvs` | cuerda. | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "clingen_variant_classifications", {"gene": "BRCA1"})
```

### `civic_search_genes` {/* #civic_search_genes */}

Encontrar los registros genéticos de CIViC por símbolo de Entrez exacto (por ejemplo. "BRAF"). Completamente paginado, contado-verificado. Utilice el gen CIViC devuelto con civic_gene_variants.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `entrez_symbol` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_genes", {"entrez_symbol": "BRAF"})
```

### `civic_gene_variants` {/* #civic_gene_variants */}

Todas las variantes de un gen CIViC (por gen id CIViC), completamente paginado, completa incluso para genes con cientos de variantes. Clasificado por variante id.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_id` | entero | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_gene_variants", {"gene_id": 5})
```

### `civic_get_variant` {/* #civic_get_variant */}

Una variante de CIViC por su variante id de CIViC (alias, tipos de variantes, ligaduras de función/gene, coordenadas para variantes de genes). Devoluciones encontradas=falsas si no existen.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `variant_id` | entero | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_get_variant", {"variant_id": 12})
```

### `civic_search_variants` {/* #civic_search_variants */}

Buscar variantes de CIViC por subestring nombre (por ejemplo. "V600"), opcionalmente accedido a un gen CIViC id. Fully paginated; ordenados por la variante id.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `name` | cuerda. | **necesarios** |
| `gene_id` | entero | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_variants", {"name": "V600", "gene_id": 5})
```

### `civic_get_evidence_item` {/* #civic_get_evidence_item */}

Un elemento de evidencia CIViC por id: significación clínica de un perfil molecular en un contexto de enfermedad/terapia (nivel de incidencia A-E, tipo, dirección, significado, calificación, enfermedad, terapias, fuente). Devoluciones encontradas=falsas si no existen.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `evidence_id` | entero | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_get_evidence_item", {"evidence_id": 1409})
```

### `civic_search_evidence` {/* #civic_search_evidence */}

Buscar elementos de prueba CIViC por cualquier combinación de filtros; completamente paginado, contado-verificado, clasificado por evidencia ascendente id. Los filtros de enum toman valores de grafQL de CIViC verbatim (evidence_level "A".."E"; evidence_type PREDICTIVE habitPROGNOSTICODIAGNOSTICO:PREDISPOSING sometidaONCOGENIC,FUNCTIONAL; evidence_direction SUPPORTS habitDOES_NOT_SUPPORT; status ACCEPTED foreverSUBMITTED permanecerREJECTED foreverALL). Proporcionar al menos un filtro — ningún filtro recorre todo el cuerpo de 10k+.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `disease_name` | cuerda. | opcional |
| `therapy_name` | cuerda. | opcional |
| `evidence_level` | cuerda. | opcional |
| `evidence_type` | cuerda. | opcional |
| `evidence_direction` | cuerda. | opcional |
| `significance` | cuerda. | opcional |
| `variant_origin` | cuerda. | opcional |
| `evidence_rating` | entero | opcional |
| `status` | cuerda. | opcional |
| `molecular_profile_name` | cuerda. | opcional |
| `molecular_profile_id` | entero | opcional |
| `variant_id` | entero | opcional |
| `disease_id` | entero | opcional |
| `therapy_id` | entero | opcional |
| `phenotype_id` | entero | opcional |
| `source_id` | entero | opcional |
| `assertion_id` | entero | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_evidence", {"disease_name": "melanoma", "evidence_level": "A"})
```

### `civic_get_assertion` {/* #civic_get_assertion */}

Una afirmación del CIViC por id: una reclamación sumaria comprobada por expertos (AMP/ASCO/CAP tier, ACMG/ClinGen codes, banderas de pruebas compañeras de la FDA) agregando evidencia para un perfil molecular en un contexto de enfermedad/terapia. Devoluciones encontradas=falsas si no existen.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `assertion_id` | entero | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_get_assertion", {"assertion_id": 7})
```

### `civic_search_assertions` {/* #civic_search_assertions */}

Buscar afirmaciones de CIViC por cualquier combinación de filtros; completamente paginado, contado-verificado, ordenados por aserción ascendente id. assertion_type PREDICTIVE habitPROGNOSTICODIAGNOSTICO:PREDISPOSING sometidaONCOGENIC; assertion_direction SUPPORTS habitDOES_NOT_SUPPORT; amp_level, por ejemplo. TIER_I_LEVEL_A; status ACCEPTED foreverSUBMITTED permanecerREJECTED foreverALL. No hay filtros que pasen por el cuerpo completo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `disease_name` | cuerda. | opcional |
| `therapy_name` | cuerda. | opcional |
| `assertion_type` | cuerda. | opcional |
| `assertion_direction` | cuerda. | opcional |
| `significance` | cuerda. | opcional |
| `amp_level` | cuerda. | opcional |
| `status` | cuerda. | opcional |
| `molecular_profile_name` | cuerda. | opcional |
| `molecular_profile_id` | entero | opcional |
| `variant_id` | entero | opcional |
| `variant_name` | cuerda. | opcional |
| `disease_id` | entero | opcional |
| `therapy_id` | entero | opcional |
| `phenotype_id` | entero | opcional |
| `evidence_id` | entero | opcional |
| `summary` | cuerda. | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_assertions", {"disease_name": "melanoma"})
```

### `civic_get_molecular_profile` {/* #civic_get_molecular_profile */}

Un perfil molecular CIViC por id (combinación variable que evidencia/aserciones se adjuntan a), incl. nombre, puntuación y variantes de componentes. Devoluciones encontradas=falsas si no existen.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mp_id` | entero | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_get_molecular_profile", {"mp_id": 12})
```

### `civic_search_molecular_profiles` {/* #civic_search_molecular_profiles */}

Buscar perfiles moleculares CIViC por subestring de nombre (por ejemplo. "BRAF V600E"). Fully paginated; ordenados por id.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `name` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_molecular_profiles", {"name": "BRAF V600E"})
```

### `civic_search_diseases` {/* #civic_search_diseases */}

Buscar registros de enfermedad de CIViC por subestring de nombre (por ejemplo. "melanoma"). Devuelve DOIDs + nombres de pantalla; completamente paginado; ordenados por id.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `name` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_diseases", {"name": "melanoma"})
```

### `civic_search_therapies` {/* #civic_search_therapies */}

Buscar registros de terapia CIViC por subestring de nombre (por ejemplo. "vemurafenib"). Devoluciones de los ids NCIt + nombres; completamente paginado; ordenados por id.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `name` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "civic_search_therapies", {"name": "vemurafenib"})
```

### `open_targets_graphql` {/* #open_targets_graphql */}

Ejecute una consulta arbitraria de GraphQL contra la Plataforma Open Targets API (objetivos, enfermedades, drogas, puntuaciones de asociación de destino-disease, evidencia, viabilidad, seguridad, medicamentos conocidos). Las consultas de introspección trabajan para el descubrimiento del esquema. Note knownDrugs was renamed to drugAndClinicalCandidates upstream.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `variables` | objeto | opcional |

```javascript
const result = await host.mcp("clinical-genomics", "open_targets_graphql", {"query": "query($id: String!){ target(ensemblId: $id){ approvedSymbol associatedDiseases{ count } } }", "variables": {"id": "ENSG00000157764"}})
```

### `open_targets_disease_drugs` {/* #open_targets_disease_drugs */}

Medicamentos conocidos/investigativos para una enfermedad ( Plataforma de objetivos abiertos) — envuelve la enfermedad.drugAndClinicalCandidates. efo_id es una enfermedad ontología id (EFO/MONDO/etc., por ejemplo. "MONDO_0004992").

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `efo_id` | cuerda. | **necesarios** |
| `size` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("clinical-genomics", "open_targets_disease_drugs", {"efo_id": "MONDO_0004992", "size": 25})
```

### `open_targets_disease_targets` {/* #open_targets_disease_targets */}

Principales objetivos asociados para una enfermedad, clasificados por Open Targets puntuación general de asociación — envuelve Disease.associatedTargets. efo_id es una enfermedad ontología id (EFO/MONDO/etc.).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `efo_id` | cuerda. | **necesarios** |
| `size` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("clinical-genomics", "open_targets_disease_targets", {"efo_id": "MONDO_0004992", "size": 25})
```

### `open_targets_drug` {/* #open_targets_drug */}

Detalles de fármacos por ChEMBL id (Open Targets Platform) — nombre, tipo, estadio clínico máximo y mecanismos de acción (target + tipo de acción). chembl_id, por ejemplo. "CHEMBL1201583".

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `chembl_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("clinical-genomics", "open_targets_drug", {"chembl_id": "CHEMBL1201583"})
```

</ToolOperationGroup>

## Estructuras & Interacciones {/* #family-9 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `emdb_get_entries` {/* #emdb_get_entries */}

Obtenga registros de metadatos estructurados para las entradas de mapas 3D de EMDB cryo-EM. Acepta adhesiones como 'EMD-1234', 'emd-1234' o ' 1234'. Cada registro lleva título, método de determinación de la estructura (singleParticle / helical / tomography / subtomogramAveraging / electronCrystallography), resolución en Angstrom (null para entradas sin resolución reportada, por ejemplo. tomogramas crudos) y el método de resolución, fechas de deposición/release, nombres de muestra y macromolécula/supramolécula, IDs de modelo PDB (lista vacía cuando no hay modelo), cita primaria (period, año, primer autor, DOI, PMID), dimensiones de mapa y tamaño de voxel, y estado. Las entradas obsoletas reportan las adhesiones is_obsolete=true más superseded_by. Las adhesiones desconocidas vuelven como &#123;"emdb_id", "error": "not_found"&#125; - nunca se cayó en silencio. - Metadatos únicamente; los volúmenes de mapa nunca se descargan.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `emdb_ids` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("structures", "emdb_get_entries", {"emdb_ids": ["EMD-11638", "emd-3061", "1234"]})
```

### `emdb_search_entries` {/* #emdb_search_entries */}

Buscar EMDB con una consulta de estilo Solr; retrieval completo de filas compactas. Ejemplos de consulta: 'title:"apoferritin" Y resolución:&#91;0 TO 1.5&#93;', 'structure_determination_method:"singleParticle"', 'current_status:"REL" Y release_date:&#91;2024-01-01T00:00:00Z A &#42;&#93;'. Args: query (Solr query string); max_rows (capítulo de flecha, 1000) predeterminado. Devuelve num_found_released (el API's cuenta de entrada libre de la ruta faceta - verdad terrestre), rows_retrieved, rows_by_status (REL vs OBS - la ruta de búsqueda devuelve entradas obsoletas también pero no se cuentan como liberados), released_complete (verdadera si cada partido liberado fue recuperado; falsos medios max_rows truncó el barrido o los conteos discrepan), y registros: filas compactas por entrada (emdb_id, título, resolución, structure_determination_method, current_status, release_date, fitted_pdbs) ordenados por adhesión EMD.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `max_rows` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("structures", "emdb_search_entries", {"query": "title:\"apoferritin\" AND resolution:[0 TO 1.5]", "max_rows": 500})
```

### `emdb_get_entry_section` {/* #emdb_get_entry_section */}

Obtenga una sección de metadatos detallados para las entradas de EMDB. Secciones: 'publications' — cita primaria con lista completa de autores ordenados, citas auxiliares, referencias externas (PMID/DOI/ISSN/CSD); 'map' — archivo, formato, tipo de datos, dimensiones, espaciamiento voxel, origen, orden del eje, celda, estadísticas de voxel, niveles de contorno, simetría; 'sample' — registros per-macromoléculas (tipo, peso molecular, copias, número EC, organismo fuente + NCBI taxid, secuencia de refs) y registros per-supramoléculas; 'imaging' — microscopio, voltaje, fuente de electrones, detector, dosis, modos de imagen, rango de desfocus, aumento, Cs, criogen, rejilla/buffer/vitrification conditions (un registro por sesión de microscopía — las entradas pueden llevar varios). Args: emdb_ids (lista de adhesión, cualquiera de EMD-1234/emd-1234/1234); sección (una de las publicaciones/mapa/sample/imaging). Se informa de adhesiones desconocidas con "error": "not_found". Use emdb_get_entries primero cuando sólo necesite el registro de encabezado.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `emdb_ids` | array de cadena | **necesarios** |
| `section` | cuerda. | **necesarios**; enum: &#91;"publications", "map", "sample", "imaging"&#93; |

```javascript
const result = await host.mcp("structures", "emdb_get_entry_section", {"emdb_ids": ["EMD-11638"], "section": "imaging"})
```

### `emdb_get_validation` {/* #emdb_get_validation */}

Obtenga métricas numéricas de validación-análisis para entradas de EMDB. Por entrada (desde la ruta EMDB /análisis): Q-score, inclusión de átomos, niveles de contorno recomendados/predecidos/rawmap, volúmenes de modelo/masca, relación modelo-mapa, métricas de superficie, donde el oleoducto de validación los ha computado. available_blocks lista cada bloque el servicio de validación devuelto; escasas cargas de pago (tomogramas, entradas libres de modelos o históricas) producen nulas explícitas. Las entradas sin informe de análisis de validación has_validation_analysis=false — nunca se dejaron en silencio.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `emdb_ids` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("structures", "emdb_get_validation", {"emdb_ids": ["EMD-11638", "EMD-3061"]})
```

### `complexportal_get_complexes` {/* #complexportal_get_complexes */}

Trae registros Complejo Comisario comisariados por la adhesión CPX. Cada registro: complejo AC, recomendado/sistemáticos nombres + sinónimos, especies y taxis, lista de participantes con stoichiometría (mínimo copias), rol biológico e tipo de interacción, evidencia Código ECO, Anotaciones GO y referencias cruzadas — la descripción manualmente curada de un complejo macromolecular estable. Los registros vuelven en orden de entrada; Las adhesiones desconocidas se enumeran en `not_found` en lugar de retirarse en silencio. Para la interacción binaria *pruebas* (que se une a quién en qué experimento) utilizar las herramientas intact_&#42;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `complex_acs` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("structures", "complexportal_get_complexes", {"complex_acs": ["CPX-2158", "CPX-2419"]})
```

### `complexportal_search_by_participant` {/* #complexportal_search_by_participant */}

Buscar Portal Complejo para complejos que contienen una molécula. `accession` es un participante en la adhesión — UniProt (por ejemplo. 'P04637'), ChEBI o RNAcentral. Con participants_only=true (default) la búsqueda está clasificada en campo (pxref:&lt;accession>) por lo que sólo se devuelven complejos que realmente contienen la molécula como participante curado; con falso la simple adhesión es igualado como texto libre también (descripciones, nombres), que sobre-reporta pero puede captar menciones. Todas las páginas de resultados se recuperan y el recuento de filas se verifica contra el total de servicio reportado (total_reported == total_retrieved, o la llamada falla en voz alta). Los éxitos son registros compactos (complex_ac, nombre, especie, interactors) ordenados por la adhesión compleja; buscar detalles completos con complexportal_get_complexes.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |
| `participants_only` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("structures", "complexportal_search_by_participant", {"accession": "P69905", "participants_only": true})
```

### `intact_fetch_interactions` {/* #intact_fetch_interactions */}

Recuperar TODAS las interacciones binarias de IntAct que coincidan con una consulta, MI-score filtrado. `query` es una adhesión UniProt (por ejemplo, 'P04637'), símbolo de gen, texto libre, o cualquier consulta de IntAct Solr. Retrieval es un barrido con paginas completas verificado contra el total reportado por el servidor (n_records == total_elements, o la llamada FAILS LOUDLY — truncation silenciosa es imposible). min_mi_score/max_mi_score filtro lado del servidor en la cuenta de confianza IntAct MI (0.45 es un piso común de confianza media); Filtros interactor_species por nombre de especie o taxid (por ejemplo. &#91;"Homo sapiens"&#93; o &#91;" 9606"&#93;). Los registros son delgados y estructurados: par de interactores (IntAct ACs, identificadores de bases de datos, nombres de moléculas, especie/taxids), tipo de interacción, método de detección (+MI id), roles experimentales, organismo anfitrión, puntuación MI, PubMed id, primer autor, base de datos fuente — ordenados por la puntuación DESCENDING MI. Listas de salida en la mayoría de los registros max_records_returned (records_truncated=true cuando el barrido completo verificado era mayor; n_records siempre reporta el verdadero total). Grandes consultas (por ejemplo. Las interacciones CFTR ~10k) tardan un tiempo, estrechas con min_mi_score o especies cuando sea posible.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `min_mi_score` | Número | facultativa; predeterminado: 0 |
| `max_mi_score` | Número | facultativa; predeterminado: 1 |
| `interactor_species` | array de cadena | opcional |
| `max_records_returned` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("structures", "intact_fetch_interactions", {"query": "P04637", "min_mi_score": 0.45, "interactor_species": ["Homo sapiens"], "max_records_returned": 200})
```

### `intact_get_interactor` {/* #intact_get_interactor */}

Resolver una molécula a su registro de interacción de IntAct(s). `query` es una adhesión UniProt, símbolo de gen o Interaccionador IntAct AC (por ejemplo. 'EBI-7090529'). Devuelve TODOS los registros de interacción coincidentes con un n_matches explícito: una adhesión UniProt puede resolver a la proteína canónica más los interactores de cadena/isoform, y esta herramienta nunca elige silenciosamente uno. Cada registro: interactor_ac, preferred_identifier, nombre, especie, taxid, interactor_type, y el interaction_count visto por IntAct (útil para dimensionar un barrido intact_fetch_interactions).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("structures", "intact_get_interactor", {"query": "P04637"})
```

### `intact_get_interaction_details` {/* #intact_get_interaction_details */}

Detalles completos curados para la interacción de UNA IntAct AC (por ejemplo. 'EBI-15635490'). Devuelve tipo de interacción, organismo anfitrión, método de detección, publicación, referencias cruzadas, anotaciones, parámetros cinéticos/afinidad y confianzas, más registros por participante (identificador, especie, papel biológico y experimental, métodos de detección de participantes) a menos que include_participants=falso. Obtenga la interacción de ACs de los registros intact_fetch_interactions (el campo interaction_ac). Los ACs desconocidos regresan &#123; interaction_ac, error: 'not_found' &#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `interaction_ac` | cuerda. | **necesarios** |
| `include_participants` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("structures", "intact_get_interaction_details", {"interaction_ac": "EBI-15635490", "include_participants": true})
```

### `intact_build_network` {/* #intact_build_network */}

Construir una red de interacción IntAct-1 en profundidad alrededor de las proteínas de semillas. `seed_accessions` son adhesiones UniProt. Paso 1: un barrido de interacción completo con el contador MI-score lleno por semilla. Paso 2: los socios de cada filo de semilla más las semillas forman el conjunto de nodos. Paso 3: los bordes socio-partner son sólo descubiertas por preguntar a los socios mismos, por lo que hasta los socios max_interactors_expanded se preguntan (la mayoría de los conectados primero, los lazos por identificador) y los bordes con BOTH endpoints dentro del conjunto de nodos se mantienen. El bloque de expansión reporta exactamente qué socios fueron / no se expandieron (expansion.complete=false significa que pueden existir más bordes socio-partner). Salida: nodos, bordes (con puntaje MI, método de detección, PubMed id), estadísticas de barrido por semilla. Mantenga las semillas pocas y min_mi_score >= 0.45 — cada expansión es un barrido completo con paginas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `seed_accessions` | array de cadena | **necesarios** |
| `min_mi_score` | Número | facultativa; predeterminado: 0.45 |
| `max_interactors_expanded` | entero | facultativa; predeterminado: 25 |
| `interactor_species` | array de cadena | opcional |

```javascript
const result = await host.mcp("structures", "intact_build_network", {"seed_accessions": ["P04637", "Q00987"], "min_mi_score": 0.45, "max_interactors_expanded": 25})
```

### `pdb_search_structures` {/* #pdb_search_structures */}

Buscar entradas de RCSB PDB por filtros de atributo; en la página, tapado + marcado. Todos los filtros Y juntos; al menos uno es requerido. `text` es una consulta de relevancia de texto completo ('p53 dominio de unión de ADN'); `organism` es un nombre de línea de organización fuente exacta ('Homo sapiens' — partidos en cualquier nivel de linaje, por lo que 'Eukaryota' - También funciona; `taxonomy_id` un taxi NCBI (9606); `uniprot_accession` encuentra entradas cuyas entidades de polímeros mapean a ese UniProt ('P04637' -> cada estructura p53); `experimental_method` es el vocabulario PDB ('X-RAY DIFFRACTION', 'ELECTRON MICROSCOPY', 'SOLUTION NMR', ... — error de valores desconocidos, insensible en caso de la lista completa); `max_resolution_angstrom` mantiene entradas en o por debajo de esa resolución; `ligand_comp_id` requiere un componente de no polímero consolidado por id de química ('ZN', 'ATP', 'HEM'). include_computed_models=true añade modelos de estructura computarizada (por ejemplo. AlphaFold) a los resultados experimentales por defecto. Devuelve total_count (el API's cuenta con el total del partido — verdad terrestre), n_retrieved, truncated (true iff total_count > n_retrieved; max_rows, 1..1000, retrieval de gorras), y registros &#91;&#123;pdb_id, score&#125;&#93; en orden de relevancia. Identificadores solamente — cadena a pdb_get_structures para metadatos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `text` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `taxonomy_id` | entero | opcional |
| `uniprot_accession` | cuerda. | opcional |
| `experimental_method` | cuerda. | opcional |
| `max_resolution_angstrom` | Número | opcional |
| `ligand_comp_id` | cuerda. | opcional |
| `include_computed_models` | boolean | facultativa; default: false |
| `max_rows` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("structures", "pdb_search_structures", {"uniprot_accession": "P04637", "experimental_method": "X-RAY DIFFRACTION", "max_rows": 50})
```

### `pdb_get_structures` {/* #pdb_get_structures */}

Ingrese resúmenes de nivel de entrada para entradas de PDB (batch, max 25 ids). Acepta los ids de 4-character PDB en cualquier caso (' 1tup' == ' 1TUP'; duplicados son des duplicados). Cada registro: título, métodos experimentales, resolución en Angstrom (null para métodos sin uno, por ejemplo. NMR), metodología de determinación (experimental vs computacional), fecha y estado de depósito/release/revision, peso molecular (kDa), conteos de montaje y entidad (proteína/DNA/RNA polímero + no polímero), ids de ligand química-comp, listas de id de entidad polímero/no polímero (inputaciones para pdb_get_entities / pdb_get_ligands), y la cita primaria (título, revista, año, autores, PubMed id, DOI). Los ids desconocidos regresan como &#123;"pdb_id", "error": "not_found"&#125; - nunca se cayó en silencio. - Metadatos únicamente; los archivos de coordenadas nunca se descargan.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pdb_ids` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("structures", "pdb_get_structures", {"pdb_ids": ["1TUP", "1tup", "6XYZ"]})
```

### `pdb_get_entities` {/* #pdb_get_entities */}

Detalles de la entidad polímero para una entrada de PDB, incl. Cartografías UniProt. Con entity_ids=null cada entidad polímero de la entrada es capturada, capped en 25 con truncated=true y n_polymer_entities reportando la entrada's cuenta verdadera (grandes asambleas como ribosomas llevan 50+ — obtener la lista completa de id de pdb_get_structures' polymer_entity_ids y página con subconjuntos explícitos como &#91;" 26", " 27"&#93;); con un subconjunto entity_ids explícito, el total de entrada no se recoge, por lo que n_polymer_entities es null; una lista entity_ids explícita más grande que los errores 25. Cada registro: descripción, tipo polímero (Proteína / ADN / ARN), longitud de secuencia, cuenta de mutación, copias depositadas, ids de cadena (asym + autor), organismos de origen con taxis, adhesiones UniProt con cobertura de secuencia por unidad (SIFTS) y regiones alineadas UniProt (coordinas de referencia-seq de laentidad). Los ids de entidad desconocida se enumeran en not_found; una entrada desconocida errores id. include_sequences=true añade la secuencia canónica de una sola carta por entidad; si las secuencias combinadas superan el max_bytes (predeterminado 400000) se omiten y sequences_omitted explica por qué — los metadatos siempre sobreviven.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pdb_id` | cuerda. | **necesarios** |
| `entity_ids` | array de cadena | opcional |
| `include_sequences` | boolean | facultativa; default: false |
| `max_bytes` | entero | facultativa; predeterminado: 400000 |

```javascript
const result = await host.mcp("structures", "pdb_get_entities", {"pdb_id": "1TUP", "include_sequences": true})
```

### `pdb_get_ligands` {/* #pdb_get_ligands */}

Libra ligandos (compuestos no polímeros) de una entrada de PDB, con química. Camina la entrada's entidades no polímeros y resuelve cada componente químico: por ligand — entidad id, chem-comp id ('ZN', 'ATP'), descripción, cuenta de copia depositada, ids de cadena de autor y un bloque chem_comp (nombre, fórmula, peso de fórmula, carga formal, tipo de componente, InChIKey, estéreo SMILES). Las aguas no son entidades no polímeros en el modelo de datos del PDB y nunca aparecen. Las entradas sin ligandos retornan ligandos: &#91;&#93;. n_nopolymer_entities es la entrada's cuenta verdadera; truncated=true cuando supera max_ligands (convocado a 1..25, que ata el presupuesto de solicitud) — nunca se redujo en silencio. Entidades/componentes de los datos API ya no sirve son reportados en línea con "error": "not_found" (Resultados parciales, no una llamada abortada). Errores de entrada id desconocidos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pdb_id` | cuerda. | **necesarios** |
| `max_ligands` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("structures", "pdb_get_ligands", {"pdb_id": "1TUP"})
```

### `alphafold_get_prediction` {/* #alphafold_get_prediction */}

AlphaFold DB metadatos de estructura predicha para una adhesión UniProt. Devuelve has_model, n_models y registros por modelo. Una única adhesión puede llevar varios modelos (canónico + isoformas como 'P04637-9', y proveedores comunitarios más allá de la tubería de Google DeepMind monomer — provider_id / tool_used identificarlos). Cada modelo: entrada id, Anotación UniProt (id, descripción, gen, organismo, taxid, banderas revisadas), coordenadas de secuencia y longitud, pLDDT global (global_plddt, 0-100) más la fracción de residuos por contenedor de confianza pLDDT (very_low &lt; 50, bajo 50-70, confiado 70-90, very_high > 90), información de la versión modelo y fecha de creación, y descarga URLs (coordenadas de cif/bcif/pdb, PAE JSON + imagen, pLDDT per-residue JSONMSA, AlphaMissense CSV donde esté disponible) — URLs solamente, las cargas de pago nunca se descargan; Tráelos si es necesario. Las accesiones sin una predicción devuelven has_model=falso (no un error); Los identificadores malformados devuelven un campo `error` explícito. include_sequence=true añade la secuencia del modelo (proteína de una sola carta).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `uniprot_accession` | cuerda. | **necesarios** |
| `include_sequence` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("structures", "alphafold_get_prediction", {"uniprot_accession": "P04637"})
```

### `alphafold_check_coverage` {/* #alphafold_check_coverage */}

Batch AlphaFold Control de cobertura de DB (accesiones UniProt únicas de 40). Las entradas y los duplicados se despojan antes de que se aplique la tapa del lote, y se revelan: n_requested == n_unique + n_blank_skipped + n_duplicate_skipped siempre se reconcilia. Un registro compacto por adhesión única, en orden de entrada: has_model, n_models, y el modelo primario (primero listado)'s model_entity_id, latest_version, global_plddt y sequence_length. Adhesiones sin informe de predicción has_model=false; Los malformados llevan un campo `error` explícito — nunca se dejaron en silencio. Usar para recortar qué proteínas de un conjunto tienen estructuras predecibles utilizables antes de extraer registros completos con alphafold_get_prediction.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `uniprot_accessions` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("structures", "alphafold_check_coverage", {"uniprot_accessions": ["P04637", "P38398", "Q9Y6K9"]})
```

</ToolOperationGroup>

## ChEMBL {/* #family-10 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `compound_search` {/* #compound_search */}

Buscar compuestos químicos ChEMBL por nombre (por defecto), ChEMBL id o estructura molecular. Por nombre: caso-insensible juego de subestring sinónimo (caídas de vuelta a un partido de nombre preferido). Por chembl_id: búsqueda de registro directo. Por sonrisas: búsqueda de la similitud de Tanimoto cuando se establece similarity_threshold, de lo contrario una búsqueda de subestructura (los paseos de construcción son capped y revelan walk_truncated/upstream_total). Filtros max_phase opcionales por etapa clínica. Pase por lo menos uno de nombre, chembl_id, o sonríe. Use drug_search en lugar de buscar por indicación terapéutica.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `name` | cuerda. | opcional |
| `chembl_id` | cuerda. | opcional |
| `smiles` | cuerda. | opcional |
| `similarity_threshold` | entero | facultativa; mínimo: 70; máximo: 100 |
| `max_phase` | entero | facultativa; enum: &#91;0, 1, 2, 3, 4&#93; |
| `limit` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chembl", "compound_search", {"name": "aspirin", "limit": 5})
```

### `drug_search` {/* #drug_search */}

Buscar medicamentos aprobados y candidatos clínicos por indicación terapéutica ( termino EFO, partido parcial). Se une a las filas drug_indication a las moléculas madre distintas, luego a los registros de moléculas y advertencias de retiro/caja negra. only_approved restringe a la fase 4. Los post-filters opcionales molecule_chembl_id, drug_name (subestring de nombre preferido), y max_phase (>=) estrechan el conjunto unido. Utilice compound_search para buscar nombre/id/estructura.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `indication` | cuerda. | **necesarios** |
| `drug_name` | cuerda. | opcional |
| `molecule_chembl_id` | cuerda. | opcional |
| `max_phase` | entero | facultativa; enum: &#91;0, 1, 2, 3, 4&#93; |
| `only_approved` | boolean | facultativa; default: false |
| `limit` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chembl", "drug_search", {"indication": "hypertension", "only_approved": true, "limit": 10})
```

### `get_admet` {/* #get_admet */}

Retrieve ChEMBL calcula propiedades moleculares para la evaluación de la semejanza de drogas / ADMET de una molécula (ALogP, peso molecular, PSA, HBA/HBD, enlaces rotativos, anillos aromáticos, átomos pesados, violaciones del estado de 5, paso del Estado de 3, QED, fórmula molecular). Estos son computados de la estructura, no de las mediciones experimentales.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `molecule_chembl_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("chembl", "get_admet", {"molecule_chembl_id": "CHEMBL25"})
```

### `get_bioactivity` {/* #get_bioactivity */}

Recuperar las mediciones de bioactividad ChEMBL (IC50, Ki, Kd, EC50, ...) para interacciones de compuesto-objetivo. Filtro por molecule_chembl_id y/o target_chembl_id, activity_type (standard_type), un suelo pChEMBL (min_pchembl), un rango standard_value (min_value/max_value), y unidad (standard_units). Devuelve una página ordenada por activity_id con un resumen más importante.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `molecule_chembl_id` | cuerda. | opcional |
| `target_chembl_id` | cuerda. | opcional |
| `activity_type` | cuerda. | facultativa; enum: &#91;"IC50", "EC50", "Ki", "Kd", "AC50", "GI50", "ED50", "Potency"&#93; |
| `min_pchembl` | Número | facultativa; mínimo: 0; máximo: 14 |
| `min_value` | Número | opcional |
| `max_value` | Número | opcional |
| `unit` | cuerda. | facultativa; enum: &#91;"nM", "uM", "mM", "pM", "M"&#93; |
| `limit` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chembl", "get_bioactivity", {"molecule_chembl_id": "CHEMBL25", "activity_type": "IC50", "limit": 10})
```

### `get_mechanism` {/* #get_mechanism */}

Recuperar los registros del mecanismo de acción de ChEMBL para medicamentos aprobados y candidatos clínicos. Filtro por molecule_chembl_id, target_chembl_id, y/o action_type. Cuando una molécula id no produce nada, se retriese contra la molécula padre para que los ids de forma sal resuelvan. Devuelve una página ordenada por mec_id con un resumen tipo acción.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `molecule_chembl_id` | cuerda. | opcional |
| `target_chembl_id` | cuerda. | opcional |
| `action_type` | cuerda. | facultativa; enum: &#91;"INHIBITOR", "AGONIST", "ANTAGONISTA", "BLOCKER", "MODULATOR", "OPENER", "ACTIVAR", "POSITIVE ALLOSTERIC MODULATOR", "NEGATIVE ALLOSTERIC MODULATOR", "PARTIAL AGONIST", "INVERSE AGONIST"&#93; |
| `limit` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chembl", "get_mechanism", {"molecule_chembl_id": "CHEMBL25"})
```

### `target_search` {/* #target_search */}

Buscar objetivos biológicos ChEMBL (proteínas, complejos, familias, organismos). Filtro por target_chembl_id, gene_symbol (exacto componente-synonym match), target_name (preferido nombre subestring), organismo (substring), y/o target_type. Cada resultado lleva sus componentes con adhesiones UniProt, un gene_symbol y listas de referencias cruzadas atadas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `target_name` | cuerda. | opcional |
| `gene_symbol` | cuerda. | opcional |
| `target_chembl_id` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `target_type` | cuerda. | facultativa; &#91;Enum&#93;"SINGLE PROTEIN", "PROTEIN COMPLEX", "PROTEIN FAMILY", "ORGANISM", "TISSUE", "CELL-LINE", "NUCLEIC-ACID", "SUBCELLULAR"&#93; |
| `limit` | entero | facultativa; predeterminado: 20; mínimo: 1; máximo: 1000 |

```javascript
const result = await host.mcp("chembl", "target_search", {"gene_symbol": "EGFR", "organism": "Homo sapiens", "limit": 5})
```

</ToolOperationGroup>

## biorxiv {/* #family-11 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `get_categories` {/* #get_categories */}

Listar todas las categorías de asignaturas de biorxiv 27 y sus slugs compatibles con API (por ejemplo. "cancer biology" -> "cancer_biology"). Utilice antes de search_preprints para descubrir valores de categoría válidos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("biorxiv", "get_categories", {})
```

### `search_preprints` {/* #search_preprints */}

Buscar preimpresión bioRxiv/medRxiv por fecha y (opcionalmente) categoría. Use exactamente ONE método de búsqueda: date_from+date_to, recent_days (últimos días N), o recent_count (N más reciente dentro de una ventana 90-día); con ninguno, los últimos días de 60. No hay búsqueda de palabras clave/texto. paginas de cursor. Devuelve DOI, título, autores, fecha, categoría, versión, y una vista previa abstracta 200-char.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `server` | cuerda. | facultativa; predeterminado: "biorxiv"; enum: &#91;"biorxiv", "medrxiv"&#93; |
| `category` | cuerda. | facultativa; &#91;Enum&#93;"comportamiento animal y cognición", "bioquímica", "biomotora", "bioinformática", "biofísica", "biología del cáncer", "biología celular", "ensayos clínicos", "biología del desarrollo", "ecología", "epidemiología", "biología evolucionaria", "genética", "genómica", "inmunología", "microbiología", "Biología molecular", "neurociencia", "paleontología", "patología", "farmacología y toxicología", "fisiología", "planta biología", "la comunicación científica y la educación", "biología sintética", "sistemas de biología", "zoología"&#93; |
| `date_from` | cuerda. | opcional |
| `date_to` | cuerda. | opcional |
| `recent_days` | entero | facultativa; mínimo: 1 |
| `recent_count` | entero | facultativa; mínimo: 1 |
| `limit` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 100 |
| `cursor` | entero | facultativa; predeterminado: 0; mínimo: 0 |

```javascript
const result = await host.mcp("biorxiv", "search_preprints", {"recent_days": 30, "category": "neuroscience", "limit": 20})
```

### `get_preprint` {/* #get_preprint */}

Obtenga metadatos completos para un preimpresión por DOI (bare " 10.1101/..." o una URL [https://doi.org/](https://doi.org/) completa). Usa la última versión. Título, autores, autor correspondiente + institución, resumen completo, categoría, licencia, versión, JATS XML, financiación, revista publicada DOI (si está vinculada), PDF y URLs web, y cuenta de versión. Las huellas no son revisadas por pares.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `doi` | cuerda. | opcional |
| `server` | cuerda. | facultativa; predeterminado: "biorxiv"; enum: &#91;"biorxiv", "medrxiv"&#93; |

```javascript
const result = await host.mcp("biorxiv", "get_preprint", {"doi": "10.1101/339747"})
```

### `search_published_preprints` {/* #search_published_preprints */}

Buscar preimpresiones que fueron publicadas posteriormente en revistas revisadas por pares (preprint -> enlaces de artículos de revistas). Mismo ONE-OF métodos de búsqueda como search_preprints (date_from+date_to / recent_days / recent_count). include_details=false devuelve un resumen compacto. editor filtros por revista DOI prefix (por ejemplo. "10.1038" para la Naturaleza) a través de la ruta bioRxiv-only /publisher.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `server` | cuerda. | facultativa; predeterminado: "biorxiv"; enum: &#91;"biorxiv", "medrxiv"&#93; |
| `publisher` | cuerda. | opcional |
| `include_details` | boolean | facultativa; default: true |
| `date_from` | cuerda. | opcional |
| `date_to` | cuerda. | opcional |
| `recent_days` | entero | facultativa; mínimo: 1 |
| `recent_count` | entero | facultativa; mínimo: 1 |
| `limit` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 100 |
| `cursor` | entero | facultativa; predeterminado: 0; mínimo: 0 |

```javascript
const result = await host.mcp("biorxiv", "search_published_preprints", {"publisher": "10.1038", "date_from": "2024-01-01", "date_to": "2024-01-05", "limit": 10})
```

### `search_by_funder` {/* #search_by_funder */}

Busque preimpresión reconociendo un financiador, identificado por ROR id (9-char, por ejemplo. " 021nxhr62" para el NIH; una URL completa [https://ror.org/](https://ror.org/) también se acepta). Requiere una date_from explícita + date_to; metadatos financiadores comienza 2025-04-10. Filtro de categoría opcional. paginas de cursor. La misma forma compacta de resultado que search_preprints.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `funder_ror_id` | cuerda. | opcional |
| `date_from` | cuerda. | opcional |
| `date_to` | cuerda. | opcional |
| `server` | cuerda. | facultativa; predeterminado: "biorxiv"; enum: &#91;"biorxiv", "medrxiv"&#93; |
| `category` | cuerda. | facultativa; &#91;Enum&#93;"comportamiento animal y cognición", "bioquímica", "biomotora", "bioinformática", "biofísica", "biología del cáncer", "biología celular", "ensayos clínicos", "biología del desarrollo", "ecología", "epidemiología", "biología evolucionaria", "genética", "genómica", "inmunología", "microbiología", "Biología molecular", "neurociencia", "paleontología", "patología", "farmacología y toxicología", "fisiología", "planta biología", "la comunicación científica y la educación", "biología sintética", "sistemas de biología", "zoología"&#93; |
| `limit` | entero | facultativa; predeterminado: 10; mínimo: 1; máximo: 100 |
| `cursor` | entero | facultativa; predeterminado: 0; mínimo: 0 |

```javascript
const result = await host.mcp("biorxiv", "search_by_funder", {"funder_ror_id": "021nxhr62", "date_from": "2025-04-10", "date_to": "2025-05-10", "limit": 10})
```

### `get_content_statistics` {/* #get_content_statistics */}

bioRxiv estadística de la presentación sobre toda la historia — nuevos vs revisó los recuentos de papel por período, con totales acumulativos en funcionamiento. intervalo es "monthly" (por defecto) o "yearly".

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `interval` | cuerda. | facultativa; predeterminado: "monthly"; enum: &#91;"monthly", "yearly"&#93; |

```javascript
const result = await host.mcp("biorxiv", "get_content_statistics", {"interval": "yearly"})
```

### `get_usage_statistics` {/* #get_usage_statistics */}

bioRxiv uso/informática estadística sobre toda la historia — opiniones abstractas, vistas de texto completo, y descargas PDF por período, con totales acumulados en ejecución. intervalo es "monthly" (por defecto) o "yearly".

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `interval` | cuerda. | facultativa; predeterminado: "monthly"; enum: &#91;"monthly", "yearly"&#93; |

```javascript
const result = await host.mcp("biorxiv", "get_usage_statistics", {"interval": "yearly"})
```

</ToolOperationGroup>

## Fiscalización de drogas {/* #family-12 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `search_drug_applications` {/* #search_drug_applications */}

Busque las aplicaciones de Drugs@FDA (NDA/ANDA/BLA) por cualquier combinación de filtros de frases exactas (marca, genérico, active_ingredient, patrocinador, marketing_status, dosage_form, ruta, pharm_class). query genérico y pharm_class el bloque de openfda armonizado (absentimiento en aplicaciones antiguas, tan silenciosamente saltado allí). Una búsqueda amplia devuelve el primer max_records con el verdadero total y truncado=true; a página más allá de ~26,000 records, narrow with submission_date_from/to.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `brand` | cuerda. | opcional |
| `generic` | cuerda. | opcional |
| `active_ingredient` | cuerda. | opcional |
| `sponsor` | cuerda. | opcional |
| `marketing_status` | cuerda. | facultativa; enum: &#91;"Prescription", "Over-the-counter", "Discontinued", "None (Aprobación Tentativa)"&#93; |
| `dosage_form` | cuerda. | opcional |
| `route` | cuerda. | opcional |
| `pharm_class` | cuerda. | opcional |
| `pharm_class_type` | cuerda. | facultativa; enum: &#91;"epc", "moa", "cs", "pe"&#93; |
| `search_type` | cuerda. | facultativa; predeterminado: "and"; enum: &#91;"and", "or"&#93; |
| `submission_date_from` | cuerda. | opcional |
| `submission_date_to` | cuerda. | opcional |
| `raw_search` | cuerda. | opcional |
| `max_records` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("drug-regulatory", "search_drug_applications", {"generic": "ATORVASTATIN CALCIUM", "marketing_status": "Prescription", "max_records": 25})
```

### `get_drug_application` {/* #get_drug_application */}

Traiga una solicitud de medicamentos@FDA por su número (por ejemplo: "NDA020702", "ANDA076543", "BLA125514"). Devuelve el registro completo —patrocinador, productos (marca, ingredientes activos + fortalezas, forma de dosificación, ruta, estado de marketing, código TE), historia de las presentaciones completas, y campos de openfda armonizados cuando está presente.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `application_number` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("drug-regulatory", "get_drug_application", {"application_number": "NDA020702"})
```

### `count_drug_applications` {/* #count_drug_applications */}

El cubo Aggregate Drugs@FDA cuenta sobre un campo, opcionalmente reducido por los mismos filtros que search_drug_applications. count_field acepta nombres amistosos (sponsor_name, application_number, dosage_form, ruta, marketing_status, te_code, pharm_class_epc/moa/cs/pe) o una ruta de campo de openFDA cruda (apéndice .exactate para campos analizados).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `count_field` | cuerda. | **necesarios** |
| `brand` | cuerda. | opcional |
| `generic` | cuerda. | opcional |
| `active_ingredient` | cuerda. | opcional |
| `sponsor` | cuerda. | opcional |
| `marketing_status` | cuerda. | opcional |
| `dosage_form` | cuerda. | opcional |
| `route` | cuerda. | opcional |
| `pharm_class` | cuerda. | opcional |
| `pharm_class_type` | cuerda. | facultativa; enum: &#91;"epc", "moa", "cs", "pe"&#93; |
| `search_type` | cuerda. | facultativa; predeterminado: "and"; enum: &#91;"and", "or"&#93; |
| `submission_date_from` | cuerda. | opcional |
| `submission_date_to` | cuerda. | opcional |
| `raw_search` | cuerda. | opcional |
| `max_buckets` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("drug-regulatory", "count_drug_applications", {"count_field": "marketing_status"})
```

### `get_drug_statistics` {/* #get_drug_statistics */}

Estadísticas de Corpus-level Drugs@FDA en una sola llamada — aplicaciones totales, división de marketing-status, formas de dosis y rutas (con cargos distintos), y patrocinadores principales por cuenta de aplicaciones.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("drug-regulatory", "get_drug_statistics", {})
```

### `list_pharmacologic_classes` {/* #list_pharmacologic_classes */}

Aumentar las clases farmacológicas con los recuentos de sus aplicaciones, contados sobre el openfda armonizado.pharm_class_&lt;type> bloque. Los condes reflejan únicamente las aplicaciones que llevan ese bloque.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `class_type` | cuerda. | facultativa; predeterminado: "epc"; enum: &#91;"epc", "moa", "cs", "pe"&#93; |
| `max_buckets` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("drug-regulatory", "list_pharmacologic_classes", {"class_type": "epc", "max_buckets": 50})
```

### `get_generic_equivalents` {/* #get_generic_equivalents */}

Encontrar equivalentes genéricos de un medicamento de marca: resolver la marca a sus aplicaciones de referencia, extraer el conjunto exacto de nombres activos-ingredientes, luego devolver cada aplicación de Drugs@FDA con un producto cuyo conjunto activo-ingrediente coincide (incluyendo los códigos TE y el estado de marketing).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `brand` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("drug-regulatory", "get_generic_equivalents", {"brand": "Lipitor"})
```

### `search_drug_labels` {/* #search_drug_labels */}

Recuperar etiquetas de productos de la FDA (SPL) por ingrediente/nombre/rute con extracción de sección específica. Filtros (active_ingredient, generic_name, brand_name, ruta, product_type) alcanzaron el bloque de etiquetas de openfda; se establece exactamente a la consulta de las variantes no analizadas.exacto. Pase secciones para extraer secciones de etiquetas de openFDA crudas en lugar del registro estructurado predeterminado. raw_search es mutuamente excluyente con los filtros mapeados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `active_ingredient` | cuerda. | opcional |
| `generic_name` | cuerda. | opcional |
| `brand_name` | cuerda. | opcional |
| `route` | cuerda. | opcional |
| `product_type` | cuerda. | facultativa; enum: &#91;"HUMAN PRESCRIPTION DRUG", "HUMAN OTC DRUG"&#93; |
| `exact` | boolean | facultativa; default: false |
| `raw_search` | cuerda. | opcional |
| `sections` | array de cadena | opcional |
| `max_records` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("drug-regulatory", "search_drug_labels", {"brand_name": "Tylenol", "max_records": 5})
```

</ToolOperationGroup>

## Genética Humana {/* #family-13 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `gwas_associations_for_variant` {/* #gwas_associations_for_variant */}

GWAS Catalog associations reported for one variety (rsID), most significant first. Args: rs_id (dbSNP rsID, por ejemplo. rs7412 APOE o rs699 AGT; debe ser el catálogo's actual rsID — IDs fusionados/retirados pueden devolver cero filas en lugar de un error); max_records (capítulo de salida 500 predeterminado; las variantes de rasgo pueden llevar a las asociaciones 1000+; filas son surtidos por p-valor ascendente, por lo que un resultado capped es el prefijo de alta señal. Retorno &#123;rs_id, api_total, devuelto, truncado, asociaciones&#125;. api_total es el catálogo's propio total; banderas truncadas una embrague capped. Cada fila de asociación: &#123;association_id, p_value, pvalue_mantissa, pvalue_exponent, pvalue_description, or_value, beta, ci_lower, ci_upper, rango, risk_frequency, snp_effect_alleles, rs_ids, ubicaciones, mapped_genes, efo_traits- &#91;&#123;efo_id, efo_trait&#125;&#93;, bg_efo_traits, reported_trait, multi_snp_haplotype, snp_interaction, study_accession_id, pubmed_id, first_author&#125;. or_value y beta son mutuamente excluyentes por fila (binario vs cuantitativo); p_valor de 0.0 significa p &lt; ~1e-308 (use mantissa/exponent).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `rs_id` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "gwas_associations_for_variant", {"rs_id": "rs7412", "max_records": 100})
```

### `gwas_associations_for_gene` {/* #gwas_associations_for_gene */}

GWAS Catálogo asociaciones cuyas variantes son MAPPED a un gen (catalog's Ensembl pipeline mapping, no autor-reportado), el primero más significativo. Args: gene_symbol (símbolo HGNC, partido exacto, por ejemplo. PCSK9, APOE; caso sensible al fondo - pasar la maleta canónica superior; las variantes intergénicas mapa a los genes flanqueados, por lo que las filas pueden sentarse fuera del cuerpo gen); max_records (cap default 500; filas servidor surtido por p-valor ascendente). Retorno &#123;gene_symbol, api_total, devuelto, truncado, asociaciones&#125; con la misma forma de fila que gwas_associations_for_variant. Un símbolo inexistente devuelve api_total=0, no un error.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "gwas_associations_for_gene", {"gene_symbol": "PCSK9", "max_records": 100})
```

### `gwas_associations_for_trait` {/* #gwas_associations_for_trait */}

GWAS Catálogo asociaciones anotadas a un rasgo EFO, el primero más significativo. Args: efo_id (un término de la ontología de forma corta como se utiliza en el catálogo, por ejemplo. MONDO_0005010, EFO_0004340, HP_0003124; el catálogo migraba muchos EFOs históricos a MONDO/HP - resolver los ids actuales con gwas_search_traits primero; pasar exactamente uno de efo_id/efo_trait); efo_trait (exacto rasgo alternativo LABEL); max_records (cap default 500; filas p-valor ascendente). Devoluciones &#123;efo_id vidasefo_trait, api_total, retornados, truncados, asociaciones&#125; con la misma forma de fila que gwas_associations_for_variant. Un id/label desconocido devuelve api_total=0, no un error.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `efo_id` | cuerda. | opcional |
| `efo_trait` | cuerda. | opcional |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "gwas_associations_for_trait", {"efo_id": "MONDO_0005010", "max_records": 100})
```

### `gwas_search_traits` {/* #gwas_search_traits */}

Buscar GWAS Catálogo EFO características anotaciones por etiqueta subestring - el punto de entrada para resolver una enfermedad/notipo nombre a los ids ontología que gwas_associations_for_trait / gwas_search_studies tomar. Args: consulta (subestring insensible de la etiqueta de rasgo, por ejemplo. "coronary" coincide con el trastorno coronario MONDO_0005010, etc.; el catálogo mezcla EFO, MONDO, HP y OBA ids — don't asumir un prefijo EFO_); max_records (cap default 500). Vuelta &#123;query, api_total, regresó, truncado, efo_traits&#125;; cada fila &#123;efo_id, efo_trait, uri&#125; ordenados por etiqueta. Cuenta-verificado contra el catálogo's propio total cuando no capped.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "gwas_search_traits", {"query": "coronary", "max_records": 50})
```

### `gwas_search_studies` {/* #gwas_search_studies */}

Buscar GWAS Catálogo estudios por anotación o publicación de rasgos. Args: efo_id (forma corta de la ontología, por ejemplo. MONDO_0005010, resolver por gwas_search_traits; los filtros se combinan Y — generalmente pasan uno); efo_trait (exacto de la etiqueta de rasgo alternativo); pubmed_id (PubMed ID of the study's publication, e.g. 38714703); max_records (cap default 500). Vuelta &#123;filters, api_total, regresó, truncado, estudios&#125;; cada fila de estudio &#123;accession_id, disease_trait, efo_traits, bg_efo_traits, pubmed_id, initial_sample_size, replication_sample_size, discovery_ancestry, replication_ancestry, genotyping_technologies, plataformas, cohorte, full_summary_stats_available, imputed, gxe, gxg&#125;. Cuenta-verificado contra el total del catálogo cuando no capped. Al menos se requiere un filtro (el catálogo no filtrado es ~90k estudios).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `efo_id` | cuerda. | opcional |
| `efo_trait` | cuerda. | opcional |
| `pubmed_id` | cuerda. | opcional |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "gwas_search_studies", {"efo_id": "MONDO_0005010", "max_records": 50})
```

### `gwas_get_study` {/* #gwas_get_study */}

Traiga un estudio del catálogo GWAS por su adhesión al GCST. Args: accession_id (reunión de estudios, por ejemplo. GCST90841394; listado en cada fila de asociación como study_accession_id y en resultados de búsqueda de estudio). Retorno &#123;found, accession_id, estudio&#125; donde el estudio es la misma forma de fila que gwas_search_studies (null cuando se desconoce la adhesión).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("human-genetics", "gwas_get_study", {"accession_id": "GCST90841394"})
```

### `gwas_get_variant` {/* #gwas_get_variant */}

Tráigase un registro de variantes del catálogo de GWAS (posición, genes mapeados, consecuencia) por rsID — más ligero que tirar de sus asociaciones. Args: rs_id (dbSNP rsID, por ejemplo. rs7412). Devoluciones &#123;found, rs_id, variante&#125;; la variante es &#123;rs_id, fusionado, functional_class, most_severe_consequence, alelos (por ejemplo. "C/T (en adelante)"), mapped_genes, localizaciones:&#91;&#123;chromosome, position, region&#125;&#93;, last_update_date&#125; — posiciones GRCh38 — o null cuando el rsID no está en el catálogo. merged=1 significa que el rsID fue fusionado en otro registro de arriba.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `rs_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("human-genetics", "gwas_get_variant", {"rs_id": "rs7412"})
```

### `eqtl_list_datasets` {/* #eqtl_list_datasets */}

Lista eQTL Catálogo conjuntos de datos (un conjunto de datos = un estudio x tejido/celular tipo x método de cuantificación). Args: study_label (nombre de estudio exacto, por ejemplo. GTEx, Alasoo_2018, BLUEPRINT); tissue_label (exacto tejido/marca tipo celular, por ejemplo. hepática, macrófago, LCL — minúscula en el catálogo); quant_method (ge=gene expression, exon, tx, txrev, microarray, leafcutter, aptamer=plasma protein; para los eQTLs convencionales de nivel genético utilizan ge); max_records (cap default 1000; el catálogo completo sin filtrar es conjuntos de datos ~760). Devuelve &#123;filters, devueltos, truncados, datasets&#125; ordenados por número de dataset_id; cada &#123;dataset_id (QTD...), study_id (QTS...), study_label, sample_group, tissue_id, tissue_label, condition_label, quant_method, sample_size&#125;. El API no publica ningún recuento total; truncated=false demuestra que el listado está completo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `study_label` | cuerda. | opcional |
| `tissue_label` | cuerda. | opcional |
| `quant_method` | cuerda. | opcional |
| `max_records` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("human-genetics", "eqtl_list_datasets", {"study_label": "Alasoo_2018", "quant_method": "ge"})
```

### `eqtl_associations` {/* #eqtl_associations */}

Líneas de asociación Molecular-QTL de un conjunto de datos eQTL Catalogue, filtrados por gen, variante o región. Args: dataset_id (Acceso al QTD desde eqtl_list_datasets, por ejemplo. QTD000266); gene_id (inversionado ensembl gene ID, por ejemplo. ENSG00000130203 APOE; al menos uno de los gene_id/rsid/variant/pos es necesario); rsid (dbSNP rsID); variante (eQTL Catálogo de cadenas de cadenas chr19_44908822_C_T, cap. prefijo subrayado GRCh38); pos (cromosoma de ventana genómica:start-end GRCh38 no chr prefix, por ejemplo. 19:44900000-44920000); nlog10p_min (planta de significación: sólo filas con -log10(p) >= esto, aplicadas en aguas arriba); max_records (capítulo predeterminado 1000 = una página). Retorno &#123;dataset_id, filtros, devueltos, truncados, asociaciones&#125;; cada fila &#123;molecular_trait_id, gene_id, variante, rsid, cromosoma, posición, ref, alt, tipo, beta, se, pvalue, nlog10p, maf, ac, an, r2, median_tpm&#125;. Las filas cubren SOLAMENTE la ventana de cis el conjunto de datos probado (±1 Mb de cada gen); vacío significa "not probado / no presente". No se publica un recuento total: truncated=false demuestra el agotamiento, truncated=true significa que la gorra fue golpeada.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `dataset_id` | cuerda. | **necesarios** |
| `gene_id` | cuerda. | opcional |
| `rsid` | cuerda. | opcional |
| `variant` | cuerda. | opcional |
| `pos` | cuerda. | opcional |
| `nlog10p_min` | Número | opcional |
| `max_records` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("human-genetics", "eqtl_associations", {"dataset_id": "QTD000266", "gene_id": "ENSG00000130203", "nlog10p_min": 2})
```

### `phewas_instances` {/* #phewas_instances */}

Enumerar los portales PheWeb PheWAS públicos que este servidor puede consultar, con genoma de construcción y registro de capacidades. Devoluciones &#123;instances:&#123;key:&#123;label, base_url, genome_build, capabilities, notes&#125;&#125;&#125;. capacidades nombre los puntos finales cada instancia expone: variante (phewas_variant), gen (phewas_finngen_gene), fenotipos (phewas_list_phenotypes), autocompleto (phewas_search_phenotypes). NOTA de la división de la construcción: FinnGen R12 variante IDs son GRCh38; BioBank Japón (pheweb.jp) es GRCh37/hg19 — coordenadas de remontaje antes del cruce.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("human-genetics", "phewas_instances", {})
```

### `phewas_variant` {/* #phewas_variant */}

PheWAS para una variante: sus estadísticas de asociación contra cada fenotipo en un portal biobanco PheWeb, el primero más significativo. Args: instance (finngen FinnGen R12 GRCh38, or bbj BioBank Japan GRCh37; coords variantes DEBE estar en la instancia's construir); variante (crom-pos-ref-alt, :/_ separadores y prefijo de chr tolerado, por ejemplo. 19-44908822-C-T APOE rs7412 GRCh38/finngen o 1-55505647-G-T PCSK9 rs11591147 GRCh37/bbj); max_phenos (cap default 200; FinnGen regresa ~2470 filas; ordenados por p-valor ascendiendo antes de capping). Vuelta &#123;instance, genome_build, variante, variant_meta, total, devuelto, truncado, fenotipos&#125;; variant_meta &#123;chrom, pos, ref, alt, rsids, nearest_genes, gnomad (FinnGen only)&#125;. Cada fila de fenotipo &#123;phenocode, phenostring, category, pval, mlogp, beta, sebeta, af intimidadmaf, maf_case, maf_control, n_cases, n_controls, n_samples&#125; (campos inéditos nulos; Las filas BBJ tienen af, las filas FinnGen tienen maf triplets + mlogp). Las variantes desconocidas plantean un error no encontrado.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `instance` | cuerda. | **necesarios**; enum: &#91;"finngen", "bbj"&#93; |
| `variant` | cuerda. | **necesarios** |
| `max_phenos` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("human-genetics", "phewas_variant", {"instance": "finngen", "variant": "19-44908822-C-T", "max_phenos": 50})
```

### `phewas_finngen_gene` {/* #phewas_finngen_gene */}

PheWAS de nivel genético de FinnGen R12: para cada endpoint de enfermedad, la variante mejor asociada en la región del gen, la primera más significativa. Args: gene_symbol (símbolo HGNC, por ejemplo. PCSK9, APOE; símbolos desconocidos plantean un error no encontrado); max_phenos (cap default 200; FinnGen tiene ~Puntos finales 2470, una fila cada uno; ordenados por p-valor ascendiendo antes de capping). Devoluciones &#123;instance:"finngen", genome_build:"GRCh38", gene_symbol, total, devuelto, truncado, fenotipos&#125;; cada fila es la forma de fila phewas_variant más variante:&#123;chrom, pos, ref, alt, varid, rsids&#125; — la variante superior para ese punto final en esta región de gene's (región != cuerpo gen; PheWeb pads gene boundaries). La mayoría de las filas son resultados nulos (pval~1) — la variante de BEST per-endpoint sigue siendo reportada; Filtro por pval usted mismo para éxitos significativos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | **necesarios** |
| `max_phenos` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("human-genetics", "phewas_finngen_gene", {"gene_symbol": "PCSK9", "max_phenos": 50})
```

### `phewas_list_phenotypes` {/* #phewas_list_phenotypes */}

Fenotipo completo (punto final de la enfermedad) de una instancia PheWeb, con casos/control cuenta. Args: instance (currently only finngen exposes this endpoint; BBJ no utiliza allí phewas_search_phenotypes; max_records (capítulo predeterminado 3000 > FinnGen's ~2470 endpoints, por lo que el valor predeterminado devuelve el catálogo completo). Devuelve &#123;instance, total, returned, truncated, fenotypes&#125; ordenados por fenocode; cada fila &#123;phenocode (por ejemplo. "T2D"), phenostring, category, num_cases, num_controls, num_gw_significant (count of genome-wide-significant loci for that endpoint)&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `instance` | cuerda. | facultativa; predeterminado: "finngen"; enum: &#91;"finngen"&#93; |
| `max_records` | entero | facultativa; predeterminado: 3000 |

```javascript
const result = await host.mcp("human-genetics", "phewas_list_phenotypes", {"instance": "finngen", "max_records": 3000})
```

### `phewas_search_phenotypes` {/* #phewas_search_phenotypes */}

Busque un ejemplo PheWeb's fenotipos (y entidades) por nombre, el punto de entrada para resolver un nombre de enfermedad a un fenocode. Args: consulta (query de fenotipo de texto libre, por ejemplo. "diabetes", "asthma"; coincide con los nombres/códigos de fenotipo; algunos casos también coinciden con los nombres de los genes y los rsID; instancia (finngen default or bbj - ambos exponen autocompleto); max_records (cap default 500; Las respuestas autocompletas son listas cortas, rara vez capped). Devuelve &#123;instance, query, total, returned, truncated, match&#125;; cada partido &#123;display, fenocode, url&#125;. Use el fenocode con filas phewas_list_phenotypes o el sitio web de instancia; Las cadenas de visualización BBJ incrustan el código entre paréntesis.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `instance` | cuerda. | facultativa; predeterminado: "finngen"; enum: &#91;"finngen", "bbj"&#93; |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("human-genetics", "phewas_search_phenotypes", {"query": "diabetes", "instance": "finngen"})
```

</ToolOperationGroup>

## Expresión {/* #family-14 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `gtex_tissue_sites` {/* #gtex_tissue_sites */}

Listar todos los sitios de tejidos con metadatos para una liberación GTEx enfilada (54 en gtex_v8): cuenta de muestras, cuenta de eGene/sGene, códigos de color y ids de ontología UBERON.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_tissue_sites", {"dataset_id": "gtex_v8"})
```

### `gtex_dataset_info` {/* #gtex_dataset_info */}

Enumerar todos los datos de GTEx con metadatos: datasetId, GENCODE version, genome build, dbSNP build, and sample/subject/tissue counts.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `dataset_id` | cuerda. | opcional |
| `organization_name` | cuerda. | opcional |

```javascript
const result = await host.mcp("expression", "gtex_dataset_info", {})
```

### `gtex_sample_info` {/* #gtex_sample_info */}

Metadatos de muestra y donantes para una versión GTEx enfilada, opcionalmente filtrada por tissue_site_detail_id, data_type (por ejemplo. RNASEQ, WGS), o subject_id. Pagina y cuenta-verificado; una llamada sin filtrar coincide con decenas de miles de muestras, así que filtrar o establecer max_samples.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `tissue_site_detail_id` | cuerda. | opcional |
| `data_type` | cuerda. | opcional |
| `subject_id` | cuerda. | opcional |
| `max_samples` | entero | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_sample_info", {"tissue_site_detail_id": "Liver", "data_type": "RNASEQ", "max_samples": 100})
```

### `gtex_resolve_genes` {/* #gtex_resolve_genes */}

Resolver símbolos de genes o ids de ensembl no versionados a ids GENCODE versionados para una liberación encendida, por ejemplo. GAPDH -> ENSG00000111640.14. Alimenta a los ids a la expresión / herramientas de eQTL.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `genes` | array de cadena | **necesarios** | 7 / 0 / 0 |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_resolve_genes", {"genes": ["GAPDH", "BRCA2"]})
```

### `gtex_median_expression` {/* #gtex_median_expression */}

Expresión mediana del gen (TPM) para uno o más GENCODE VERSIONADOS ids a través de los tejidos (tejidos omitidos para todos). Pagina y cuenta-verificado sobre (geno, tejido) filas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gencode_ids` | array de cadena | **necesarios** |
| `tissue_site_detail_ids` | array de cadena | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_median_expression", {"gencode_ids": ["ENSG00000111640.14"]})
```

### `gtex_expression_summary` {/* #gtex_expression_summary */}

Summarizar la expresión de un gen a través de TODOS los tejidos clasificados por TPM mediana descendente. Acepta un símbolo o Ensembl id y auto-resolves a un GENCODE versionado id primero.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | **necesarios** |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_expression_summary", {"gene": "GAPDH"})
```

### `gtex_gene_expression` {/* #gtex_gene_expression */}

Expresión a nivel de muestra (no agregado) arrays TPM para un id GENCODE VERSIONED, por tejido (tejidos omitidos para todos). Devuelve la matriz de TPM por muestreo completo y n_samples para cada tejido.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gencode_id` | cuerda. | **necesarios** |
| `tissue_site_detail_ids` | array de cadena | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_gene_expression", {"gencode_id": "ENSG00000111640.14", "tissue_site_detail_ids": ["Whole_Blood"]})
```

### `gtex_top_expressed_genes` {/* #gtex_top_expressed_genes */}

Los genes de Top-n por mediana TPM en un tejido, utilizando la clasificación API-side. filter_mt_gene (default true) deja caer genes mitocondriales del ranking.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `tissue_site_detail_id` | cuerda. | **necesarios** |
| `n` | entero | facultativa; predeterminado: 100 |
| `filter_mt_gene` | boolean | facultativa; default: true |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_top_expressed_genes", {"tissue_site_detail_id": "Whole_Blood", "n": 20})
```

### `gtex_eqtl_genes` {/* #gtex_eqtl_genes */}

Todos los eGenes (genes con ≥1 cis-eQTL significativo) para un tejido. Camina página por página y cuenta-verificado (por ejemplo. Pancreas gtex_v8 = 9,660). max_genes caps cuántas filas se devuelven.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `tissue_site_detail_id` | cuerda. | **necesarios** |
| `max_genes` | entero | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_eqtl_genes", {"tissue_site_detail_id": "Pancreas", "max_genes": 100})
```

### `gtex_single_tissue_eqtls` {/* #gtex_single_tissue_eqtls */}

Asociaciones de cis-eQTL significativas para un gen y/o una variante (precomputada). Proporcionar gencode_id y/o variant_id; tissue_site_detail_id opcionalmente se estrecha. Paged and count-verified.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gencode_id` | cuerda. | opcional |
| `variant_id` | cuerda. | opcional |
| `tissue_site_detail_id` | cuerda. | opcional |
| `max_results` | entero | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_single_tissue_eqtls", {"gencode_id": "ENSG00000111640.14"})
```

### `gtex_multi_tissue_eqtls` {/* #gtex_multi_tissue_eqtls */}

Metaanálisis de cis-eQTL (METASOFT) para un id GENCODE VERSIONADO. variant_id opcionalmente se estrecha a una variante. Devuelve filas por-variantes con m-valores per-tissue, NES, p-valores, y SEs.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gencode_id` | cuerda. | **necesarios** |
| `variant_id` | cuerda. | opcional |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_multi_tissue_eqtls", {"gencode_id": "ENSG00000111640.14"})
```

### `gtex_calculate_eqtl` {/* #gtex_calculate_eqtl */}

Calcular un eQTL en la mosca para cualquier par de genes variables en un tejido, incluyendo pares no significativos. Devuelve el valor p, NES, t-statistic, MAF y los arrays de genotipo/expresión por muestreo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gencode_id` | cuerda. | **necesarios** |
| `variant_id` | cuerda. | **necesarios** |
| `tissue_site_detail_id` | cuerda. | **necesarios** |
| `dataset_id` | cuerda. | facultativa; por defecto: "gtex_v8" |

```javascript
const result = await host.mcp("expression", "gtex_calculate_eqtl", {"gencode_id": "ENSG00000111640.14", "variant_id": "chr12_6452899_G_A_b38", "tissue_site_detail_id": "Whole_Blood"})
```

</ToolOperationGroup>

## Anotación de proteínas {/* #family-15 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `get_domain_architecture` {/* #get_domain_architecture */}

Completa arquitectura de dominio InterPro para una o más proteínas UniProt (todas las entradas iguales, firmas miembro-DB, coordenadas de fragmentos), con paginación verificada contra el conteo API.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("protein-annotation", "get_domain_architecture", {"accessions": ["P04637"]})
```

### `search_interpro_entries` {/* #search_interpro_entries */}

Búsqueda de palabras clave sobre las entradas InterPro o base de datos de miembros (Pfam, SMART, PROSITE, PANTHER, CDD), paseo completo del cursor verificado contra el conteo API.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |
| `entry_type` | cuerda. | opcional |
| `source_db` | cuerda. | facultativa; default: "interpro" |
| `go_term` | cuerda. | opcional |

```javascript
const result = await host.mcp("protein-annotation", "search_interpro_entries", {"query": "kinase", "source_db": "pfam"})
```

### `get_interpro_entry` {/* #get_interpro_entry */}

Registro de detalle para una entrada InterPro (IPRxxxxxxxx) o familia Pfam (PFxxxxxxx) — ruta elegida por prefijo de adhesión.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("protein-annotation", "get_interpro_entry", {"accession": "IPR000719"})
```

### `search_pfam_clans` {/* #search_pfam_clans */}

Búsqueda de palabras clave sobre los clanes de Pfam (InterPro sets, adhesiones CLxxxxx).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |

```javascript
const result = await host.mcp("protein-annotation", "search_pfam_clans", {"query": "kinase"})
```

### `get_pfam_clan` {/* #get_pfam_clan */}

Pfam clan detalle incluyendo la lista completa de miembros-familia clasificada.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `clan_accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("protein-annotation", "get_pfam_clan", {"clan_accession": "CL0016"})
```

### `get_pfam_family_proteins` {/* #get_pfam_family_proteins */}

Proteínas miembros de una familia Pfam (conteo completo o cuenta solamente). Use count_only para familias muy grandes.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pfam_accession` | cuerda. | **necesarios** |
| `reviewed_only` | boolean | facultativa; default: false |
| `tax_id` | entero | opcional |
| `count_only` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("protein-annotation", "get_pfam_family_proteins", {"pfam_accession": "PF00069", "count_only": true})
```

### `get_pfam_family_proteomes` {/* #get_pfam_family_proteomes */}

Proteomas que contienen miembros de una familia Pfam. count_only predetermina la verdad — la paginación del cursor de proteome aguas arriba es defectuosa para paseos profundos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `pfam_accession` | cuerda. | **necesarios** |
| `count_only` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("protein-annotation", "get_pfam_family_proteomes", {"pfam_accession": "PF00069"})
```

### `get_protein_atlas_gene` {/* #get_protein_atlas_gene */}

Human Protein Atlas per-gene record (release 25.x): tissue/subcellular/pathology/blood/brain expression and antibody info. Acepta un ID de gen Ensembl o un símbolo de gen.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene` | cuerda. | **necesarios** |
| `full` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("protein-annotation", "get_protein_atlas_gene", {"gene": "TP53"})
```

### `search_protein_atlas` {/* #search_protein_atlas */}

Búsqueda masiva seleccionada por columna sobre el Atlas de Proteína Humana (search_download).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `columns` | cuerda. | facultativa; predeterminado: "g,gs,eg,gd,up,chr,chrp,scl" |

```javascript
const result = await host.mcp("protein-annotation", "search_protein_atlas", {"query": "kinase"})
```

### `map_string_ids` {/* #map_string_ids */}

Mapa de símbolos/alias a identificadores de proteínas de STRING (v12.0). Cada símbolo de entrada se mapea o se enumera en sin editar — los dos particiones de la entrada.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `symbols` | array de cadena | **necesarios** |
| `species` | entero | facultativa; predeterminado: 9606 |

```javascript
const result = await host.mcp("protein-annotation", "map_string_ids", {"symbols": ["TP53", "BRCA1", "EGFR"]})
```

### `get_string_network` {/* #get_string_network */}

Red de interacción de proteína-proteína para una lista de genes (v12.0) en un umbral de confianza. Mapas símbolos primero (no incluido reportado), luego recupera nodos, bordes, sumario y procedencia.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `symbols` | array de cadena | **necesarios** |
| `species` | entero | facultativa; predeterminado: 9606 |
| `required_score` | entero | facultativa; predeterminado: 700 |

```javascript
const result = await host.mcp("protein-annotation", "get_string_network", {"symbols": ["TP53", "BRCA1", "EGFR"], "required_score": 700})
```

### `get_string_similarity_scores` {/* #get_string_similarity_scores */}

Smith-Waterman protein similarity bitscores entre un conjunto de genes (STRING /homology). Pasaje: los pares ausentes de los datos de STRING' no están listados (absence significa no semejanza registrada, no cero).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `symbols` | array de cadena | **necesarios** |
| `species` | entero | facultativa; predeterminado: 9606 |

```javascript
const result = await host.mcp("protein-annotation", "get_string_similarity_scores", {"symbols": ["TP53", "MDM2", "MDM4"]})
```

### `get_string_best_similarity_hits` {/* #get_string_best_similarity_hits */}

La mejor homología golpeada por proteína de entrada en una especie objetivo (STRING /homology_best). target_species=null pide el mejor golpe en todas las especies.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `symbols` | array de cadena | **necesarios** |
| `species` | entero | facultativa; predeterminado: 9606 |
| `target_species` | entero | opcional |

```javascript
const result = await host.mcp("protein-annotation", "get_string_best_similarity_hits", {"symbols": ["TP53"], "target_species": 10090})
```

</ToolOperationGroup>

## Modelos de cáncer {/* #family-16 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `cbioportal_list_studies` {/* #cbioportal_list_studies */}

List cBioPortal cancer studies, opcionalmente filtrado por una palabra clave de texto libre (nombre/descripción/tipo de cáncer) y/o un id de tipo de cáncer exacto; devuelve el estudio id, nombre, tipo de cáncer, genoma de referencia, citación y los recuentos de muestras de tipo per-data.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `keyword` | cuerda. | opcional |
| `cancer_type_id` | cuerda. | opcional |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_list_studies", {"keyword": "glioma"})
```

### `cbioportal_get_study` {/* #cbioportal_get_study */}

Obtenga un estudio de cáncer de cBioPortal por id: metadatos, conteos de muestras de tipo data, verdaderos conteos de muestras/pacientes (de las colecciones de estudio, no del campo de visualización), y sus perfiles moleculares.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `study_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_get_study", {"study_id": "msk_impact_2017"})
```

### `cbioportal_mutations_in_gene` {/* #cbioportal_mutations_in_gene */}

Todas las mutaciones de un gen (símbolo de la OVH) en un estudio cBioPortal, con agregados de recurrencia: mutaciones totales, conteo de muestreo mutado, distribuciones tipo mutación y cambio de proteínas, y los cambios de proteína más recurrentes.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | **necesarios** |
| `study_id` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_mutations_in_gene", {"gene_symbol": "IDH1", "study_id": "difg_msk_2023"})
```

### `cbioportal_mutation_frequency` {/* #cbioportal_mutation_frequency */}

Frecuencia de mutación de un gen a través de varios estudios cBioPortal (1–12): fracción de muestreo mutado de la cohorte secuenciada por estudio, clasificada en primer lugar más frecuente.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | **necesarios** |
| `study_ids` | array de cadena | **necesarios**; minItems: 1; maxItems: 12 |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_mutation_frequency", {"gene_symbol": "KRAS", "study_ids": ["msk_impact_2017", "difg_msk_2023"]})
```

### `cbioportal_cna_in_gene` {/* #cbioportal_cna_in_gene */}

Discreta las alteraciones del número de copia de un gen en un estudio cBioPortal, filtrado por tipo de evento (deleción profunda / amplificación por defecto), con la distribución completa de alteración por muestreo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `gene_symbol` | cuerda. | **necesarios** |
| `study_id` | cuerda. | **necesarios** |
| `event_type` | cuerda. | facultativa; predeterminado: "HOMDEL_AND_AMP"; enum: &#91;"HOMDEL_AND_AMP", "HOMDEL", "AMP", "GAIN", "HETLOSS", "DIPLOID", "ALL"&#93; |
| `max_records` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_cna_in_gene", {"gene_symbol": "CDKN2A", "study_id": "msk_impact_2017"})
```

### `cbioportal_clinical_attributes` {/* #cbioportal_clinical_attributes */}

Atributos clínicos definidos en un estudio cBioPortal (campos de pacientes y niveles de muestra), destacando los puntos finales de supervivencia y si existen datos de supervivencia general.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `study_id` | cuerda. | **necesarios** |
| `max_records` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("cancer-models", "cbioportal_clinical_attributes", {"study_id": "brca_tcga_pan_can_atlas_2018"})
```

</ToolOperationGroup>

## ARN {/* #family-17 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `get_family` {/* #get_family */}

Los metadatos de familia Rfam para una adhesión (RF00005) o id familiar (tRNA) - ambos resuelven. Grabación aplanada más el JSON completo en "raw".

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "get_family", {"family": "RF00005"})
```

### `get_seed_alignment` {/* #get_seed_alignment */}

Alineación de semillas de una familia Rfam en Estocolmo (por defecto, con línea de estructura secundaria de consenso) o FASTA acoplado.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |
| `fmt` | cuerda. | facultativa; predeterminado: "stockholm"; enum: &#91;"stockholm", "fasta"&#93; |
| `max_bytes` | entero | facultativa; predeterminado: 400000 |

```javascript
const result = await host.mcp("rna", "get_seed_alignment", {"family": "RF00162", "fmt": "stockholm"})
```

### `get_covariance_model` {/* #get_covariance_model */}

Modelo de covariancia infernal (archón MC) de una familia Rfam, utilizable directamente con cmsearch/cmscan, además de campos de cabecera pareados.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |
| `max_bytes` | entero | facultativa; predeterminado: 400000 |

```javascript
const result = await host.mcp("rna", "get_covariance_model", {"family": "RF00162"})
```

### `get_tree` {/* #get_tree */}

Árbol filogenético de una familia Rfam (NHX/Newick text).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "get_tree", {"family": "RF00162"})
```

### `get_sequence_regions` {/* #get_sequence_regions */}

Todos los éxitos de registro completo de una familia Rfam a través de bases de datos de secuencias ( TSV arreglado). Chequee num_full vía get_family primero — rfam.org 403s esta ruta para familias muy grandes (por ejemplo. RF00005).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "get_sequence_regions", {"family": "RF00162"})
```

### `get_structure_mapping` {/* #get_structure_mapping */}

Cartografías de la estructura del PDB de una familia Rfam, determinísticamente clasificadas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "get_structure_mapping", {"family": "RF00162"})
```

### `accession_to_id` {/* #accession_to_id */}

Convertir una adhesión Rfam a su id familiar (por ejemplo, RF00005 -> "tRNA").

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "accession_to_id", {"accession": "RF00005"})
```

### `id_to_accession` {/* #id_to_accession */}

Convertir una familia Rfam id en su adhesión (por ejemplo, "tRNA" -> RF00005).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `family_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("rna", "id_to_accession", {"family_id": "tRNA"})
```

### `search_sequence` {/* #search_sequence */}

Busque una secuencia de ARN a través del punto final oficial de lote Rfam. Mantener la identidad laboral devuelta mientras espera; una respuesta inacabada no es un resultado cero-hit. Inspeccione los fósforos completados e información de origen. Después de una respuesta fallida, diagnosticar o reanudar el trabajo existente en lugar de presentarlo repetidamente.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `sequence` | cuerda. | **necesarios** |
| `max_wait_s` | Número | facultativa; predeterminado: 300 |
| `poll_interval_s` | Número | facultativa; predeterminado: 5 |

```javascript
const result = await host.mcp("rna", "search_sequence", {"sequence": "GGUUCCGGGAAGGCAGCAGGUGGAAACCUGCCA"})
```

</ToolOperationGroup>

## Archivos de Omics {/* #family-18 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `arrayexpress_search_experiments` {/* #arrayexpress_search_experiments */}

Buscar ArrayExpress funcional-genomics experiments (BioStudies) con total, totalRetrieval de Hists-verified; Filtros (queria, organismo, study_type, tecnología, rango de fecha de lanzamiento, facetas extra) se combinan con AND.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `study_type` | cuerda. | opcional |
| `technology` | cuerda. | opcional |
| `released_after` | cuerda. | opcional |
| `released_before` | cuerda. | opcional |
| `extra_facets` | objeto | opcional |
| `max_records` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("omics-archives", "arrayexpress_search_experiments", {"organism": "Homo sapiens", "study_type": "ChIP-seq", "max_records": 50})
```

### `arrayexpress_get_experiment` {/* #arrayexpress_get_experiment */}

Trate de un experimento ArrayExpress (BioStudies) como un registro analista aplanado — tipo de estudio, organismos, conteos de ensayo/sample, diseños/factores, autores, publicaciones, protocolos, diseños de arrays y resumen de archivos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "arrayexpress_get_experiment", {"accession": "E-MTAB-5061"})
```

### `arrayexpress_get_experiment_files` {/* #arrayexpress_get_experiment_files */}

Listar todos los archivos de un experimento ArrayExpress (nombre, tamaño, tipo, formato, descripción) con URLs de descarga, más el recuento de archivos /info endpoint llevado junto para la comparación.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "arrayexpress_get_experiment_files", {"accession": "E-MTAB-5061"})
```

### `arrayexpress_get_experiment_samples` {/* #arrayexpress_get_experiment_samples */}

Busque filas de anotación SDRF por muestreo para un experimento de ArrayExpress (MAGE-TAB headers verbatim, repite #2/#3) sufixiado. Experimentos sin retorno SDRF &#123;"error":"no_sdrf"&#125;.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |
| `max_rows_returned` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("omics-archives", "arrayexpress_get_experiment_samples", {"accession": "E-MTAB-5061", "max_rows_returned": 200})
```

### `geo_search_series` {/* #geo_search_series */}

Buscar NCBI GEO DataSets (db=gds) y registros de nivel de serie de retorno (docs esummarios entrimados). `term` es la sintaxis completa de E-utilities; añadir gse&#91;ETYP&#93; para restringir a la serie.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `term` | cuerda. | **necesarios** |
| `retmax` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("omics-archives", "geo_search_series", {"term": "asthma AND gse[ETYP]", "retmax": 20})
```

### `geo_get_series` {/* #geo_get_series */}

Obtenga metadatos estructurados para la serie GEO (Accesiones GSE) con muestras incluidas: título de serie/sumario/diseño, plataformas, muestras con características e información de biblioteca, y URLs de archivo complementario. Las tablas de datos nunca se descargan.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "geo_get_series", {"accessions": ["GSE131907"]})
```

### `metabolights_list_studies` {/* #metabolights_list_studies */}

Listar todos los públicos MetaboLights estudio adhesión (numerically ordenados) con los API's propio cuenta reportado. No hay búsqueda del estudio lado del servidor — filtrar a los candidatos seleccionados por título/descriptor en su lugar.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("omics-archives", "metabolights_list_studies", {})
```

### `metabolights_get_studies` {/* #metabolights_get_studies */}

Obtenga metadatos estructurados para los estudios de MetaboLights (MTBLSxxxx) de la carga útil de ISA perseguida: título, estado, años, organismos, ensayos, factores, descriptores, conteo de muestras, protocolos; opcional por mesa de muestreo. Las adhesiones no conocidas/privadas van en not_found.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |
| `include_samples` | boolean | facultativa; default: false |
| `max_sample_rows_returned` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("omics-archives", "metabolights_get_studies", {"accessions": ["MTBLS1"], "include_samples": false})
```

### `metabolights_get_study_files` {/* #metabolights_get_study_files */}

Completo inventario de archivos para un estudio público de MetaboLights — la carpeta de estudio de nivel superior (ISA-Tab, MAF, entradas de carpetas) y, por defecto, la carpeta de datos FILES recursivo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |
| `include_data_files` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("omics-archives", "metabolights_get_study_files", {"accession": "MTBLS1"})
```

### `metabolights_search_data_files` {/* #metabolights_search_data_files */}

Búsqueda de brillo sobre un estudio de MetaboLights's carpeta de datos brutos (Árbol FILES). `pattern` es un glob de nombre de archivo (por ejemplo. '*.mzML', '*.raw'); omitirlo para listar cada archivo de datos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |
| `pattern` | cuerda. | opcional |

```javascript
const result = await host.mcp("omics-archives", "metabolights_search_data_files", {"accession": "MTBLS1", "pattern": "*.zip"})
```

### `mgnify_search_studies` {/* #mgnify_search_studies */}

Buscar MGnify metagenomics studies by free text OR biome lineage (provide justamente uno). Lista completa está paginado a la terminación y conteo-verificado contra el API.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | opcional |
| `biome_lineage` | cuerda. | opcional |

```javascript
const result = await host.mcp("omics-archives", "mgnify_search_studies", {"query": "coral"})
```

### `mgnify_get_studies` {/* #mgnify_get_studies */}

Obtenga registros estructurados para los estudios MGnify ( adhesiones de MGYS). Con include_analyses, cada estudio también lleva su lista completa de análisis más descomposición por tubería/por experiencia. Faltan adhesiones desconocidas.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |
| `include_analyses` | boolean | facultativa; default: false |

```javascript
const result = await host.mcp("omics-archives", "mgnify_get_studies", {"accessions": ["MGYS00000410"], "include_analyses": false})
```

### `mgnify_get_study_analyses` {/* #mgnify_get_study_analyses */}

Lista TODOS los análisis de un estudio MGnify (paginación completa y verificada) — un registro por análisis de MGYA con la versión de oleoducto, tipo de experimento, estado, y accesiones de ejecución/asambly/sample.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "mgnify_get_study_analyses", {"accession": "MGYS00000410"})
```

### `pride_search_projects` {/* #pride_search_projects */}

Buscar proyectos de proteomics del archivo PRIDE (completo, retroceso verificado por api_total); filtros (palabra, organismo, instrumento, enfermedad, extra_filters) se combinan con AND. Clasificado por la adhesión ASC — un paseo atado es un prefijo estable.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `keyword` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `instrument` | cuerda. | opcional |
| `disease` | cuerda. | opcional |
| `extra_filters` | objeto | opcional |
| `max_records_returned` | entero | facultativa; predeterminado: 50 |

```javascript
const result = await host.mcp("omics-archives", "pride_search_projects", {"keyword": "phosphoproteome", "organism": "Homo sapiens (human)", "max_records_returned": 50})
```

### `pride_get_projects` {/* #pride_get_projects */}

Obtenga metadatos completos para los proyectos de PRIDE mediante la adhesión (por ejemplo, PXD010154) — la misma forma de registro normalizada que pride_search_projects, por lo que los dos son directamente comparables. Las adhesiones desconocidas van en not_found.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accessions` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "pride_get_projects", {"accessions": ["PXD010154"]})
```

### `pride_search_project_proteins` {/* #pride_search_project_proteins */}

Listar filas de evidencia de proteínas para un proyecto de afinidad-proteomics PRIDE (páginado al agotamiento). NOTA: sólo se sirven proyectos afinidad-proteomicos aquí; para proyectos clásicos MS (PXD) usan pride_find_projects_for_protein en su lugar.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `project_accession` | cuerda. | **necesarios** |
| `keyword` | cuerda. | opcional |

```javascript
const result = await host.mcp("omics-archives", "pride_search_project_proteins", {"project_accession": "PXD010154"})
```

### `pride_find_projects_for_protein` {/* #pride_find_projects_for_protein */}

Buscar proyectos de PRIDE que contengan una proteína (dirección de arquivo MS). `protein_accession` es una adhesión UniProt (por ejemplo, P04637). Alimentar las adhesiones de los proyectos devueltos a pride_get_projects para metadatos completos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `protein_accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("omics-archives", "pride_find_projects_for_protein", {"protein_accession": "P04637"})
```

</ToolOperationGroup>

## CellGuide {/* #family-19 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `get_cell_type_info` {/* #get_cell_type_info */}

CellGuide (CELLxGENE) información de tipo celular por Cell Ontology id o nombre: nombre, sinónimos, descripción de ontología y descripción curada/GPT.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cell_type` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("cellguide", "get_cell_type_info", {"cell_type": "acinar cell"})
```

### `search_cell_types` {/* #search_cell_types */}

Buscar CellGuide tipos de celdas por texto libre sobre nombre y sinónimos (el CDN no tiene punto final de búsqueda, por lo que celltype_metadata.json es filtrado lado cliente).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `limit` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("cellguide", "search_cell_types", {"query": "T cell", "limit": 25})
```

### `get_marker_genes` {/* #get_marker_genes */}

Los genes de marcadores CellGuide para un tipo de célula (id o nombre): computacional (data-derived, marcado) o canónico (literatura-curada).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cell_type` | cuerda. | **necesarios** |
| `marker_type` | cuerda. | facultativa; predeterminado: "computational"; enum: &#91;"computational", "canonical"&#93; |
| `limit` | entero | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("cellguide", "get_marker_genes", {"cell_type": "CL:0000084", "marker_type": "computational", "limit": 25})
```

### `get_source_data` {/* #get_source_data */}

CellGuide datasets de origen y publicaciones que contribuyen a un tipo de célula (id o nombre): nombre de colección/url, publicación, y los tejidos/diseas/organismos cada cubierta.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cell_type` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("cellguide", "get_source_data", {"cell_type": "CL:0000622"})
```

### `get_cell_tissues` {/* #get_cell_tissues */}

Tejidos anatómicos donde se observa un tipo de célula (id o nombre) agregado (deduplicado) a través de las colecciones de fuentes de CellGuide.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `cell_type` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("cellguide", "get_cell_tissues", {"cell_type": "T cell"})
```

</ToolOperationGroup>

## Reglamento {/* #family-20 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `encode_search_experiments` {/* #encode_search_experiments */}

Búsqueda ENCODE experimentos funcional-genomics (ChIP-seq, ATAC-seq, ...). Filtros: assay_title (por ejemplo. "TF ChIP-seq"), objetivo (etiqueta de proteínas, por ejemplo. "CTCF"), organismo (nombre científico), estado (predeterminado "released"), date_released_before ( fecha de ISO — una ventana cerrada), más filtros de campo de portal arbitrarios a través de extra_filters. El conjunto de resultados completos se llama y cuenta-verificado; `accessions` lista cada partido, en la mayoría de los resúmenes de fila max_rows son devueltos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `assay_title` | cuerda. | opcional |
| `target` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `status` | cuerda. | facultativa; default: "released" |
| `date_released_before` | cuerda. | opcional |
| `extra_filters` | objeto | opcional |
| `max_rows` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("regulation", "encode_search_experiments", {"target": "CTCF", "assay_title": "TF ChIP-seq", "max_rows": 50})
```

### `encode_search_biosamples` {/* #encode_search_biosamples */}

Buscar biosamplos ENCODE (líneas de células, tejidos, células primarias). Filtros: term_name ( termino de ontología, por ejemplo. "K562"), clasificación ("cell line", "tissue", ...), organismo (nombre científico), estado (predeterminado "released"), date_created_before (fecha de ISO), más filtros de campo portal arbitrarios a través de extra_filters. Completo, contado-verificado: `accessions` es la lista completa del partido, en la mayoría de los resúmenes de fila max_rows son devueltos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `term_name` | cuerda. | opcional |
| `classification` | cuerda. | opcional |
| `organism` | cuerda. | opcional |
| `status` | cuerda. | facultativa; default: "released" |
| `date_created_before` | cuerda. | opcional |
| `extra_filters` | objeto | opcional |
| `max_rows` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("regulation", "encode_search_biosamples", {"term_name": "K562", "classification": "cell line", "max_rows": 25})
```

### `encode_list_files` {/* #encode_list_files */}

Listar archivos de datos ENCODE por formato / ensayo / biosample. Filtros: file_format ("fastq", "bam", "bigWig", "bed", ...), assay_term_name (el término ontológico, por ejemplo. "ChIP-seq" — NO la pantalla assay_title como "TF ChIP-seq", que no coincide con nada; pase títulos a través de extra_filters=&#123;"assay_title": ...&#125;), biosample_term_name (por ejemplo. "K562"), status (default "released"), date_created_before, más filtros de campo de portal arbitrarios a través de extra_filters. Las consultas de archivos coinciden con millones de filas sin filtrar — siempre combinan varios filtros. Completa + cont-verificado; en la mayoría de los resúmenes de fila max_rows devueltos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `file_format` | cuerda. | opcional |
| `assay_term_name` | cuerda. | opcional |
| `biosample_term_name` | cuerda. | opcional |
| `status` | cuerda. | facultativa; default: "released" |
| `date_created_before` | cuerda. | opcional |
| `extra_filters` | objeto | opcional |
| `max_rows` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("regulation", "encode_list_files", {"file_format": "bed", "assay_term_name": "ChIP-seq", "biosample_term_name": "K562", "extra_filters": {"output_type": "peaks", "assembly": "GRCh38"}, "max_rows": 50})
```

### `encode_get_experiment` {/* #encode_get_experiment */}

Obtenga un experimento ENCODE mediante la adhesión (por ejemplo, "ENCSR000AKP"). Devuelve un registro de campo estable: ensayo, objetivo, biosample ontology + resumen, descripción, laboratorio, proyecto de premio, fechas de lanzamiento/submisión, asambleas, repeticiones, tipo de reproducción, dbxrefs, DOI y uuid. Se excluyen los campos de portales volátiles (auditos, análisis, estado interno).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "encode_get_experiment", {"accession": "ENCSR000AKP"})
```

### `encode_get_file` {/* #encode_get_file */}

Obtenga un archivo ENCODE por adhesión (por ejemplo, "ENCFF002JUR"). Devuelve un registro de campo estable: formato, tipo de salida/categoría, ensayo, montaje, conjunto de datos de padres, réplicas biológicas, tamaño de archivo, md5sums, tipo de ejecución, longitud de lectura, laboratorio, fecha de creación, descarga href y uuid.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "encode_get_file", {"accession": "ENCFF002JUR"})
```

### `encode_get_biosample` {/* #encode_get_biosample */}

Obtenga un biosamplo ENCODE por adhesión (por ejemplo, "ENCBS013JZP"). Devuelve un registro de campo estable: término ontología + clasificación, organismo, resumen/descripción, fuente, donante, tratamientos, modificaciones genéticas, etapa de vida, edad, sexo, laboratorio, fecha de creación, estado y uuid.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `accession` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "encode_get_biosample", {"accession": "ENCBS013JZP"})
```

### `jaspar_get_matrix` {/* #jaspar_get_matrix */}

Obtenga un perfil de unión JASPAR TF por matriz VERSIONED id (por ejemplo. "MA0002.2"). Devuelve el registro completo: matriz de frecuencia de posición (pfm), nombre TF/clase/familia, especie, tipo de datos, referencias de literatura (pubmed/medline), secuencia URL del logotipo. Requiere un id versionado ("MA0002.2", no "MA0002") — use jaspar_matrix_versions para enumerar versiones. Las matrices modificadas son inmutables, por lo que los resultados son reproducibles.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `matrix_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "jaspar_get_matrix", {"matrix_id": "MA0002.2"})
```

### `jaspar_matrix_versions` {/* #jaspar_matrix_versions */}

Listar todas las versiones de una matriz base JASPAR id (por ejemplo. "MA0002"). Devuelve todas las versiones publicadas con su matrix_id, nombre, colección y URL — cuenta-verificado. Usar para fijar una versión exacta antes de jaspar_get_matrix, o para rastrear cómo un perfil cambió a través de versiones. Se acepta y reduce a su base un id ("MA0002.2").

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `base_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "jaspar_matrix_versions", {"base_id": "MA0002"})
```

### `jaspar_list_matrices` {/* #jaspar_list_matrices */}

Búsqueda/lista JASPAR Perfiles de unión TF (el catálogo completo de perfil). Filtros (todos opcionales): colección ("CORE", "UNVALIDATED"), tax_group ("vertebrados", "plants", ...), tax_id (impuestonomía id, por ejemplo. 9606 para el ser humano: así es como se filtra por las especies; enumerar ids con jaspar_list_species), nombre (exacto nombre TF, por ejemplo. "FOXA1"), búsqueda (texto libre), versión="latest" (restricto a las últimas versiones solamente). El catálogo completo filtrado es paginado y contador; en la mayoría de las filas sumarias max_rows se devuelven.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `collection` | cuerda. | opcional |
| `tax_group` | cuerda. | opcional |
| `tax_id` | entero | opcional |
| `name` | cuerda. | opcional |
| `search` | cuerda. | opcional |
| `version` | cuerda. | opcional |
| `max_rows` | entero | facultativa; predeterminado: 1000 |

```javascript
const result = await host.mcp("regulation", "jaspar_list_matrices", {"tax_id": 9606, "collection": "CORE", "version": "latest", "max_rows": 200})
```

### `jaspar_list_species` {/* #jaspar_list_species */}

Listar todas las especies con perfiles JASPAR (NCBI tax_id + nombre); cuenta-verificado lista completa. Utilice los valores de tax_id para filtrar jaspar_list_matrices (por ejemplo. 9606 = Homo sapiens, 10090 = Mus musculus).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("regulation", "jaspar_list_species", {})
```

### `jaspar_list_taxa` {/* #jaspar_list_taxa */}

Listar todos los grupos taxonómicos JASPAR (vertebrados, plantas, hongos, insectos, ...); cuenta-verificado lista completa. Utilice los nombres de los grupos como el filtro tax_group de jaspar_list_matrices.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("regulation", "jaspar_list_taxa", {})
```

### `jaspar_list_collections` {/* #jaspar_list_collections */}

Listar todas las colecciones JASPAR (CORE, UNVALIDATED, ...); cuenta-verificado lista completa. Utilice los nombres de la colección como el filtro de la colección de jaspar_list_matrices (CORE = perfiles curados, no redundantes).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("regulation", "jaspar_list_collections", {})
```

### `jaspar_list_releases` {/* #jaspar_list_releases */}

List all JASPAR database releases (year, release number, active flag); cuenta-verificado lista completa. Grabar la versión activa al seleccionar motivos para la reproducibilidad, o comprobar la historia de la liberación antes de comparar los resultados en las versiones JASPAR.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("regulation", "jaspar_list_releases", {})
```

### `unibind_search_tfbs` {/* #unibind_search_tfbs */}

Buscar conjuntos de datos UniBind ChIP-seq con predicciones de TFBS de alta confianza (unibind.uio.no, 2021 versión; interacciones TF-DNA directas de conjuntos de datos ~10k a través de especies 9). Cada conjunto de datos es uno (experimento, tipo celular, TF) triple. Filtros (todos opcionales, y combinados, exactos a menos que se note): tf_name (símbolo de género, por ejemplo. "CTCF"), cell_line (verbose UniBind title - preferir `search` para fuzzy matching), especie (nombre científico), colección ("Robust" = mejor modelo / alta confianza, o "Permisive"), jaspar_id (versión, por ejemplo. "MA0139.1"), búsqueda (texto libre). `total` es la cuenta exacta API's; en la mayoría de las filas max_rows se devuelven (un prefijo estable).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `tf_name` | cuerda. | opcional |
| `cell_line` | cuerda. | opcional |
| `species` | cuerda. | opcional |
| `collection` | cuerda. | facultativa; enum: &#91;"Robust", "Permisive"&#93; |
| `jaspar_id` | cuerda. | opcional |
| `search` | cuerda. | opcional |
| `max_rows` | entero | facultativa; predeterminado: 200 |

```javascript
const result = await host.mcp("regulation", "unibind_search_tfbs", {"tf_name": "CTCF", "collection": "Robust", "max_rows": 50})
```

### `unibind_get_dataset` {/* #unibind_get_dataset */}

Obtenga un conjunto de datos UniBind's detalle: TFBS cuenta por modelo + URLs de archivo. tf_id es la clave de conjunto de datos "&lt;identifier>.&lt;cell_line>.&lt;TF>" como devuelto por unibind_search_tfbs (por ejemplo, "ENCSR000AUE.A549_lung_carcinoma.CTCF"). Devuelve el nombre TF, identificadores de origen (ENCODE/GEO/GTRD), líneas celulares, condiciones biológicas, ids de matriz JASPAR, cuenta de pico ChIP-seq, y una fila por modelo de predicción TFBS (DAMO/PWM/...) con total_tfbs, puntuación/desviamiento umbrales, valor de p ajustado CentriMo y URL de descarga directa BED/FASTA — use esas URLs (no un MCP llamada) para recuperar la lista completa del sitio.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `tf_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("regulation", "unibind_get_dataset", {"tf_id": "ENCSR000AUE.A549_lung_carcinoma.CTCF"})
```

### `unibind_tfbs_in_region` {/* #unibind_tfbs_in_region */}

Los sitios de unión TF superponen una región genómica (UniBind 2021 mapas), servidos a través del hub UCSCApi contra los centros de pista pública registrados de UniBind's (UniBind's propio REST API no tiene punto final de la región). Las coordenadas son media-abierto basado en 0. genoma: UCSC assembly — Robust hub: hg38, mm10, ce11, dm6, danRer11, sacCer3, rn6, araTha1; El permisivo añade la cuchara (no hg19 — ascensor primero). cromo: con "chr" prefijo. start/end: intervalo, end-start &lt;= 1,000,000 bp. HONEST-CAP: en la mayoría de los productos 20,000 se escanean por llamada; region_scan_complete=falso significa que la región tiene más sitios que escaneados (cerrar la ventana) y, con el set tf_name, los partidos pueden estar desaparecidos. n_matching cuenta los sitios escaneados que pasan el filtro; devuelto / truncado describir la tapa max_sites.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `genome` | cuerda. | **necesarios** |
| `chrom` | cuerda. | **necesarios** |
| `start` | entero | **necesarios** |
| `end` | entero | **necesarios** |
| `tf_name` | cuerda. | opcional |
| `collection` | cuerda. | facultativa; predeterminado: "Robust"; enum: &#91;"Robust", "Permisive"&#93; |
| `max_sites` | entero | facultativa; predeterminado: 2000 |

```javascript
const result = await host.mcp("regulation", "unibind_tfbs_in_region", {"genome": "hg38", "chrom": "chr1", "start": 1000000, "end": 1010000, "collection": "Robust"})
```

</ToolOperationGroup>

## Recursos de investigación {/* #family-21 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `search_grants` {/* #search_grants */}

Search Grants.gov oportunidades de financiación a través de la búsqueda2 API (completo, retrieval de cuenta-verificado). Se requiere por lo menos un criterio (palabra clave, opportunity_number, aln/CFDA, agencias, eligibilities, funding_categories, o funding_instruments). opportunity_statuses predeterminado a &#91;"forecasted","posted"&#93; (accesos actuales); añadir "closed"/"archived" para los históricos. agencias toma códigos como &#91;"HHS-NIH11"&#93; (NIH), &#91;"HHS-FDA"&#93;, &#91;"NSF"&#93;. Establecer count_only para el conteo de éxito + facetas; max_records caps devuelto los registros (la caminata todavía recupera el conjunto completo y las banderas truncadas).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `keyword` | cuerda. | opcional |
| `opportunity_number` | cuerda. | opcional |
| `aln` | cuerda. | opcional |
| `agencies` | array de cadena | opcional |
| `opportunity_statuses` | array de cadena | opcional |
| `eligibilities` | array de cadena | opcional |
| `funding_categories` | array de cadena | opcional |
| `funding_instruments` | array de cadena | opcional |
| `count_only` | boolean | facultativa; default: false |
| `max_records` | entero | facultativa; predeterminado: 100 |
| `include_facets` | boolean | facultativa; default: true |

```javascript
const result = await host.mcp("research-resources", "search_grants", {"keyword": "cancer", "agencies": ["HHS-NIH11"], "max_records": 25})
```

### `search_antibodies` {/* #search_antibodies */}

Búsqueda de texto completo del Registro Anticuerpo (antibodyregistry.org, ~3.2M records). Token-based matching against antibody name/target/catalog text ("TP53" "p53" son diferentes consultas). Con la página omitida, todas las páginas se caminan hasta max_records o la tapa de profundidad anónima (más allá de la compensación 500 necesitan autenticación aguas arriba, insignia como anonymous_limit_hit — nunca se cayó silenciosamente). Pase una página basada en 1 para una recuperación de una página (página&#42;page_size debe permanecer &lt;= 500).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `query` | cuerda. | **necesarios** |
| `page` | entero | opcional |
| `page_size` | entero | facultativa; predeterminado: 100 |
| `max_records` | entero | facultativa; predeterminado: 500 |

```javascript
const result = await host.mcp("research-resources", "search_antibodies", {"query": "CD4", "max_records": 100})
```

### `get_antibody` {/* #get_antibody */}

Obtenga registros de detalles del Registro Anticuerpo(s) para una adhesión al Anticuerpo / RRID. Acepta un número de llanura (" 3643095"), "AB_3643095", o "RRID:AB_3643095". La ruta ascendente es valorada por listas (una adhesión puede mapear varios registros curados, por ejemplo. duplicados multi-vendor). Un id inexistente produce record_count 0, no un error.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `antibody_id` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("research-resources", "get_antibody", {"antibody_id": "RRID:AB_3643095"})
```

### `find_antibodies_by_catalog` {/* #find_antibodies_by_catalog */}

Encontrar anticuerpos por número de catálogo de proveedores (exacto, caso-insensible). Se implementó como una búsqueda de texto completo más el lado del cliente exactamente igualando en el número de catálogo (o sus alternativas enumeradas), porque la ruta de la columna-filtro río arriba devuelve HTTP 500 para cada clave. Pase un nombre de vendedor opcional (exacto, insensible en caso) para reducir aún más los partidos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `catalog_number` | cuerda. | **necesarios** |
| `vendor` | cuerda. | opcional |
| `page_size` | entero | facultativa; predeterminado: 100 |

```javascript
const result = await host.mcp("research-resources", "find_antibodies_by_catalog", {"catalog_number": "ab32572"})
```

### `get_antibody_registry_stats` {/* #get_antibody_registry_stats */}

Estadísticas del Registro del Anticuerpo: cuenta total de anticuerpos y fecha de última actualización. Devuelve la carga útil de arriba /api/datainfo.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("research-resources", "get_antibody_registry_stats", {})
```

</ToolOperationGroup>

## BioMart {/* #family-22 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `list_marts` {/* #list_marts */}

Lista disponible Ensembl BioMart marts (databases). BioMart organiza datos como MART -> DATASET -> ATTRIBUTES/FILTERS; un nombre de marta alimenta list_datasets.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| — | objeto | No hay campos; pasar un objeto vacío. |

```javascript
const result = await host.mcp("biomart", "list_marts", {})
```

### `list_datasets` {/* #list_datasets */}

Lista los conjuntos de datos disponibles en una marta determinada (por ejemplo. hsapiens_gene_ensembl para genes humanos). Un nombre de conjunto de datos alimenta las herramientas de atributo/filtro/query.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("biomart", "list_datasets", {"mart": "ENSEMBL_MART_ENSEMBL"})
```

### `list_common_attributes` {/* #list_common_attributes */}

Lista los atributos comúnmente utilizados para un conjunto de datos (un subconjunto de alta señal curado). Utilice esto antes de list_all_attributes para seleccionar atributos para get_data. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("biomart", "list_common_attributes", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl"})
```

### `list_all_attributes` {/* #list_all_attributes */}

Lista todos los atributos disponibles para un conjunto de datos, menos homologs y sondas de microarray (que son voluminosas y raramente necesarias). Puede ser grande; Prefiera list_common_attributes primero. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("biomart", "list_all_attributes", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl"})
```

### `list_filters` {/* #list_filters */}

Lista los filtros disponibles para un conjunto de datos. Los filtros estrechan una consulta get_data (por ejemplo. chromosome_name, biotipo) y se transmiten a get_data como un dict de filtros. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("biomart", "list_filters", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl"})
```

### `get_data` {/* #get_data */}

Ejecutar una consulta BioMart: recuperar los atributos solicitados para un conjunto de datos, opcionalmente reducido por filtros. Esta es la principal herramienta de recuperación de datos. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |
| `attributes` | array de cadena | **necesarios** |
| `filters` | objeto | opcional |

```javascript
const result = await host.mcp("biomart", "get_data", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl", "attributes": ["ensembl_gene_id", "external_gene_name", "chromosome_name"], "filters": {"chromosome_name": "Y", "biotype": "protein_coding"}})
```

### `get_translation` {/* #get_translation */}

Traducir un identificador único de un tipo de atributo a otro (por ejemplo,. un símbolo HGNC a un ID gen Ensembl) dentro de un conjunto de datos. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |
| `from_attr` | cuerda. | **necesarios** |
| `to_attr` | cuerda. | **necesarios** |
| `target` | cuerda. | **necesarios** |

```javascript
const result = await host.mcp("biomart", "get_translation", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl", "from_attr": "hgnc_symbol", "to_attr": "ensembl_gene_id", "target": "TP53"})
```

### `batch_translate` {/* #batch_translate */}

Traducir muchos identificadores de un tipo de atributo a otro en una sola consulta — más eficiente que las llamadas repetidas get_translation. `mart` es aceptado para la paridad de firma pero ignorado; las llaves de la consulta de `dataset`.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `mart` | cuerda. | **necesarios** |
| `dataset` | cuerda. | **necesarios** |
| `from_attr` | cuerda. | **necesarios** |
| `to_attr` | cuerda. | **necesarios** |
| `targets` | array de cadena | **necesarios** |

```javascript
const result = await host.mcp("biomart", "batch_translate", {"mart": "ENSEMBL_MART_ENSEMBL", "dataset": "hsapiens_gene_ensembl", "from_attr": "hgnc_symbol", "to_attr": "ensembl_gene_id", "targets": ["TP53", "BRCA1", "BRCA2"]})
```

</ToolOperationGroup>

## ZINC {/* #family-23 */}

<ToolOperationGroup>
<summary>Mostrar operaciones y parámetros</summary>

### `zinc_search_by_id` {/* #zinc_search_by_id */}

Busque compuestos de compra en ZINC22/ZINC20 por identificador ZINC — respuestas "qué es este compuesto y quién lo vende". Batched: pasar a los ids 100 en una llamada en lugar de muchas llamadas de un solo id. Async upstream (submit + poll); puede tomar hasta timeout_s segundos.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `zinc_ids` | &#91;'string', 'array'&#93; | **necesarios** |
| `max_results` | entero | facultativa; predeterminado: 50 |
| `timeout_s` | Número | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("zinc", "zinc_search_by_id", {"zinc_ids": ["ZINC000000000012"]})
```

### `zinc_search_by_smiles` {/* #zinc_search_by_smiles */}

Buscar ZINC22's espacio químico depurable por estructura — respuestas " lo que los compuestos de compra parecen este SMILES". Esta es la herramienta de captura exacta y la herramienta de descubrimiento analógico (similaridad): CartBlanche22 expone un punto final de búsqueda de estructura cuyo parámetro `dist` abarca exactamente a través de diversos, por lo que no hay deliberadamente ninguna herramienta de búsqueda de similitud separada. La consulta ZINC más lenta — aumentar `dist` gradualmente en lugar de comenzar suelto.

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `smiles` | cuerda. | **necesarios** |
| `dist` | entero | facultativa; predeterminado: 0 |
| `adist` | entero | opcional |
| `max_results` | entero | facultativa; predeterminado: 50 |
| `timeout_s` | Número | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("zinc", "zinc_search_by_smiles", {"smiles": "CC(=O)Oc1ccccc1C(=O)O", "dist": 2})
```

### `zinc_search_by_supplier` {/* #zinc_search_by_supplier */}

Resolver números de catálogo de proveedores a compuestos ZINC — respuestas "que sustancia ZINC es este código de proveedor, y lo que's su estructura". Batched: hasta códigos de proveedor 100 por llamada. Async upstream (submit + poll).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `supplier_codes` | &#91;'string', 'array'&#93; | **necesarios** |
| `max_results` | entero | facultativa; predeterminado: 50 |
| `timeout_s` | Número | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("zinc", "zinc_search_by_supplier", {"supplier_codes": ["MCULE-2311834287"]})
```

### `zinc_random_sample` {/* #zinc_random_sample */}

Dibujar una muestra aleatoria de compuestos purificables de ZINC22 — para la construcción de cubiertas de detección, bases de datos de propiedades o conjuntos de decoy. `count` doble como esta herramienta's `max_results`; El re-calado dibuja una muestra fresca. Async upstream (submit + poll).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `count` | entero | facultativa; predeterminado: 50 |
| `subset` | cuerda. | opcional |
| `timeout_s` | Número | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("zinc", "zinc_random_sample", {"count": 25, "subset": "lead-like"})
```

### `zinc_get_3d` {/* #zinc_get_3d */}

Localice estructuras 3D listas para compuestos ZINC. ZINC22 naves conformadores 3D pregenerados (DOCK .db2.gz, .mol2.gz, .sdf.gz) en su repositorio de archivos, organizado por tranche — esta herramienta resuelve cada id a su tranche y devuelve las ubicaciones de repositorio para descargar para prep de acoplamiento (DOCK6, AutoDock Vina, etc.). Max 50 ids por llamada (3D retrieval es un trabajo por compuesto). Async upstream (submit + poll).

| Campo | Tipo | Requisitos y limitaciones |
| --- | --- | --- |
| `zinc_ids` | &#91;'string', 'array'&#93; | **necesarios** |
| `timeout_s` | Número | facultativa; predeterminado: 25 |

```javascript
const result = await host.mcp("zinc", "zinc_get_3d", {"zinc_ids": ["ZINC000000000012"]})
```

</ToolOperationGroup>


## Registros de respuesta por ejemplo {/* #example-response-records */}

El <ExampleDownload path="/examples/capabilities/public-database-query-receipts.json">ejemplo de los registros de respuesta</ExampleDownload> incluye entradas exactas, extractos de respuesta capped y resultados de per-operación. Distinguir un registro devuelto, un partido vacío y una solicitud fallida. Los resultados pueden ser metadatos, esquemas o identificadores; verifique los campos fuente y las banderas de integridad antes de utilizarlos en su investigación.
