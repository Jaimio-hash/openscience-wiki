---
title: "Recetas Skill"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Recetas Skill {/* #skill-recipes */}

Elija una receta por su material inicial y la decisión que necesita tomar. Mantenga el procedimiento en el Skill, los archivos reales en un proyecto, y el resultado verifica en la conversación.

| Situación de la investigación | Empieza con | Skills y herramientas | Cheque de entrega y aceptación | Ruta y requisitos |
| --- | --- | --- | --- | --- |
| Decide si una tabla de cuenta RNA-seq descargada está lista para el análisis | Matriz de conteo bruto y adhesión a la fuente | Custom rnaseq-count-qc; Python/R Notebook | Informe estructural, métricas de muestra, identificadores originales y hash de entrada sin cambios | Ejemplo Notebook local; Python/R |
| Reconcile dos implementaciones de la muestra QC | Python y R CSV salidas | Notebook; Necesidades rnaseq-count-qc | Únete a ID de muestra completa y compare todas las métricas; el ejemplo GSE60450 coincide con los valores 48 | Ejemplo Notebook local; Python/R |
| Tener otro papel comprobar un resultado antes de compartirlo | Mesa completa de QC e invariantes explícitos | RNA-seq QC Revisor Specialist | Trascripción separada de los niños y sumas 12 por muestreo; distinguir las pruebas en línea del acceso a los archivos originales | Ejemplo inline-table; Specialist y Python |
| Preparar una lista de lectura para una nueva pregunta | Una pregunta enfocada y semilla DOI/PMID | Revisión de la literatura; Literatura/conectores de datos | Retrieved identifiers, inclusion rationale and unresolved fulltext gaps | Ejemplo de colección PRISMA; literatura de trabajo Connector |
| Borrar un expediente de investigación para una población definida | Población, indicación y alcance de preguntas | Indication Dossier; fuentes de investigación | Fecha de presentación de pruebas, reanudación de los archivos de waypoint y reclamaciones sin apoyo insignias | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Convertir un gráfico exploratorio en una figura de informe | Datos validados y una reclamación específica | Estilo de la figura | Imagen reabierta con unidades, etiquetas de muestra, capción y trazabilidad de datos | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Construir una figura de resultado multipanel | Reclamaciones y versiones de datos inmutables | Composer de Figura + Estilo de Figura | b) Esbozo de panel, conclusiones de imagen y examen ensambladas; huye de Main Agente | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Compruebe si una cubierta de figuras es compatible con un manuscrito | Manuscrito, capciones, cubierta completa ordenada | Paper Narrative | b) El argumento de la figura ordenada y las lagunas de la prueba; no fabricaron nuevos experimentos | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Encuentra la causa de un error de paquete perdido | Ejecutar error y tiempo de ejecución seleccionado | Medio ambiente & Paquetes | Inspección de conversión instalada, instalación gestionada, cuando sea posible, prueba de importación de canal reiniciado | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Preparar un entorno remoto para un trabajo repetido | Requisitos de host y paquete SSH/Slurm existentes | Compute Environment Setup + Compute remoto | Nombre del entorno y de la sonda o pruebas de funcionamiento; host setup es propiedad del usuario/admin | Véase Compute remoto para Direct SSH; Slurm requiere contabilidad |
| Compara las predicciones de la proteína-estructura | Secuencias válidas/definición compleja | AlphaFold2, Boltz, Chai-1, ESMFold2 o OpenFold3 | Estructura más confianza y correspondencia de entrada; pesos configurados/GPU requerido | Método adaptable; preparar los insumos y las dependencias específicas de cada método |
| Rediseñar una columna vertebral con residuos fijos | PDB, mapeo de cadenas y limitaciones de diseño | ProteinMPNN / LigandMPNN / SolubleMPNN | Controles de secuencia a cadena y restricciones; El soporte de CPU depende del método | Ejemplo de ProteinMPNN CLI pequeño; otros métodos necesitan su propia configuración |
| Integrar los lotes de una sola célula | AnnData, etiquetas de lote y conteos originales | scvi-tools or scGPT | Las salidas de modelo se comprobaron contra identificadores de células/génitas; esto no se aplica directamente a los recuentos de vracs | Método adaptable; preparar los insumos y las dependencias específicas de cada método |

## Reproduce la receta local RNA-seq {/* #reproduce-the-local-rna-seq-recipe */}

<p className="example-label"><strong>Ejemplo práctico</strong> Correr e inspeccionar RNA-seq cuenta QC</p>

1. Usa el [Entradas GSE60450 y muestra QC](../reference/example-data.md) real.
2. Crear o importar [rnaseq-count-qc](./create.md).
3. Envíe una solicitud con el [Ejemplo de invocación Skill](./overview.md).
4. Abra el <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Informe de validación</ExampleDownload> generado. Compare los genes 27,179 esperados y las columnas de muestra 12 con los valores observados, no con una tapa de fila de previsualización.
5. Si se requiere una segunda opinión, utilice [Delegado y verificado](../specialists/delegate.md) e inspeccione la transcripción real del niño.

## Dar una receta un acabado claro {/* #give-a-recipe-a-clear-finish */}

Una solicitud útil indica la fuente, el método requerido, los archivos de salida y los cheques de aceptación. Por ejemplo:

> Utilice la muestra GSE60450 existente-QC CSV para hacer una figura de informe con el estilo de la figura. Mantenga IDs de muestra completas en la tabla de acompañantes, etiqueta unidades de cuenta cruda, preservar la fuente, guardar una nueva figura, y reabrir para inspeccionar todas las etiquetas. Informar cualquier dependencia no disponible antes de cambiar el método.


Referencia de implementación: [manifest.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md).

Para el trabajo de larga duración, siga [Tareas de antecedentes y ejecución de los resultados](../guides/notebook.md#background-tasks-and-result-delivery). Inspeccione las salidas de funcionamiento y guardadas después de la entrega. Entorno & Paquetes, Configuración de Medio Ambiente Compute y Compute Remoto (SSH) permanecen habilitados, pero sus requisitos de tiempo de funcionamiento, red y host todavía se aplican.
