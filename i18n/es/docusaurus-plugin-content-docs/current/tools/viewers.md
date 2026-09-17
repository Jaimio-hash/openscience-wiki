---
title: "Visores científicos"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Visores científicos {/* #scientific-viewers */}

Abra un archivo de un archivo adjunto, el resultado guardado o Archivos. La extensión determina el renderizador. Una vista previa muestra el contenido suministrado; no ejecuta una predicción científica o establece que el resultado es correcto.

## Inspeccione una estructura PDB real {/* #inspect-a-real-pdb-structure */}

<p className="example-label"><strong>Ejemplo práctico</strong> Inspeccione la estructura 1UBQ</p>

La demostración utiliza el [RCSB 1UBQ ubiquitin structure](https://www.rcsb.org/structure/1UBQ) original, descargado como <ExampleDownload path="/examples/capabilities/1UBQ.pdb">1UBQ.pdb</ExampleDownload>. En este ejemplo, su vista previa nativa muestra **660 átomos**.

1. Abra el PDB subido y seleccione **Open full screen preview**.
2. Cambiar **Cartoon**, **Stick**, **Sphere**, **Surface** y **Line** para inspeccionar diferentes representaciones.
3. Arrastre para girar, desplazarse a zoom, o **Camiseta + arrastrar** para pan, como se indica debajo del lienzo.
4. Descargue el archivo original cuando sea necesario. Cerrar pantalla completa para volver a la conversación.

![La vista real 1UBQ Cartoon](/img/open-science/capabilities-walkthrough/26-pdb-cartoon.webp)

| Estilo | Lo que enfatiza |
| --- | --- |
| Cintas | Representación de columna vertebral polimérica/estructura secundaria. Puede no estar disponible para una estructura sin átomos de polímero adecuados. |
| Varillas | Huesos y geometría local. |
| Esfera | Esferas centradas en el átomo. |
| Superficie | Representación superficial molecular. |
| Línea | Una representación de bonos más ligera. |

Los controles de representación cambian de rendimiento preservando las coordenadas. Compare la estructura suministrada y sus metadatos al comprobar los residuos perdidos o la confianza en la predicción.

## Lea una secuencia de FASTA {/* #read-a-fasta-sequence */}

<p className="example-label"><strong>Ejemplo práctico</strong> Lea la secuencia de proteínas P04637</p>

Open <ExampleDownload path="/examples/capabilities/P04637.fa">P04637 FASTA</ExampleDownload>, descargado desde [Punto final FASTA de UniProt](https://rest.uniprot.org/uniprotkb/P04637.fasta). Inspeccione la adhesión/organismo/gene en el encabezado `>` y la secuencia debajo de ella. El renderizador nativo conserva el texto fuente; no es una secuencia de alineación o aplicación de edición.

![El UniProt FASTA real en la vista previa de la fuente](/img/open-science/capabilities-walkthrough/31-fasta-preview.webp)

Para usar la secuencia en una conversación, adjunta el archivo actual con **+ → Attach files** y pide al agente que lea el archivo en lugar de inferir de su nombre. Para esta entrada P04637, consulte el encabezado `P53_HUMAN`, **Aminoácidos 393** y la secuencia inicial **MEEPQSDPSV**. Compare el chequesum reportado con el archivo que proporcionó cuando importa la identidad.

Si una solicitud de modelo devuelve **El archivo gestionado o su sesión se elimina**, vuelva a conectar el archivo actual en un mensaje y reingreso normal. Si persiste, mantenga el error para [Solución de problemas](../guides/troubleshooting.md). Una vista previa de trabajo no garantiza que la referencia de entrada modelo sea válida.

## Avance una molécula {/* #preview-a-molecule */}

<p className="example-label"><strong>Ejemplo práctico</strong> Render aspirina de SMILES</p>

Pregunte al Molecule Connector para ejecutar `preview_molecule` con `smiles: "CC(=O)Oc1ccccc1C(=O)O"` y `filename: "aspirin"`. Abra la tarjeta **aspirina.mol** generada y la vista previa de pantalla completa.

![Aspirina hecha por el visor OpenChemLib incorporado](/img/open-science/capabilities-walkthrough/16-aspirin-viewer.webp)

En este ejemplo, la llamada devolvió una estructura válida, fórmula **C9H8O4**, peso molecular **180.15852**, y **13 átomos pesados**, y salvó <ExampleDownload path="/examples/capabilities/aspirin.mol">aspirina.mol</ExampleDownload>. El espectador fue abierto y inspeccionado manualmente. Esta es la representación de la estructura fuera de línea; no predice la afinidad vinculante, las poses de atraque o la actividad terapéutica.

## Elija un renderizador científico {/* #choose-a-scientific-renderer */}

| Entrada | Qué inspeccionar |
| --- | --- |
| PDB | átomos pareados, disponibilidad de representación y coordenadas originales |
| MOL/SDF/SMILES/RXN | Rendición de estructuras o reacciones; contenido inválido o truncado puede fallar |
| FASTA y archivos de secuencia relacionados | Cabecera original, identidad de secuencia y extensión |
| contenedores binarios analíticos como H5AD/H5 | Utilice una biblioteca de análisis compatible; texto ordinario no decodifica el contenedor |

Los controles de barras de herramientas compartidos y PDF, Office, image and source-text reading se documentan en [Avances](../guides/previews.md). La interpretación de los datos pertenece a [Cuadros](tables.md); extensiones y límites exactos pertenecen a [Formatos de archivo](../reference/formats.md).

## Efectos de vista previa {/* #preview-failures */}

Compruebe el archivo original y el error exacto del renderizador. Una estructura sin los átomos de polímero adecuados puede no ofrecer vista Cartoon; cambiar la representación no puede restaurar las coordenadas perdidas. Mantener los bytes originales cuando se intenta un visor externo. Una vista previa exitosa no establece que un modelo puede ingerir el apego, o que se instale un programa de predicción.
