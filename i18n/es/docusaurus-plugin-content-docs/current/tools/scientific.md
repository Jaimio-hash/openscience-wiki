---
title: "Instrumentos científicos"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Instrumentos científicos {/* #scientific-tools */}

Ejecutar un cálculo científico sólo después de que su entorno de entrada y ejecución real sea claro. Elija un Notebook local, un Connector o un corredor externo según el método y sus dependencias.

## Elija dónde se ejecuta el cálculo {/* #choose-where-the-calculation-runs */}

| Ruta | Trabajo adecuado | Comprobación de lectura |
| --- | --- | --- |
| Python Sesión Notebook | Perforación de datos, resúmenes numéricos y trama | Bound Python plazo de ejecución y paquetes instalados |
| R Sesión Notebook | Análisis y paquetes R | Enabled R plazos fijados para este período de sesiones |
| Connector incorporado | Recuperación de bases de datos o operación determinística apoyada | Connector disponible para el agente, credenciales/redes según sea necesario |
| Computación remota | Software específico para el huésped, trabajos de GPU o para lotes | Eligible host, medio ambiente y cronogramador habilitado |

Un comando shell no es intercambiable con una carrera de sesión Notebook: su tiempo de ejecución, entradas montadas y procedencia pueden diferir. Solicitar la ruta prevista explícitamente.

## Paquetes y dependencias {/* #packages-and-dependencies */}

| Paso | Qué hacer | Resultado exitoso |
| --- | --- | --- |
| Inspección | Pedido `inspect_packages` en el idioma previsto/tiempo de ejecución | Puestos y versiones instalados/descargados |
| Instalar | Usar el soporte `manage_packages` flujo para el medio ambiente atado | Salida completa del instalador, no solo “instalación iniciada” |
| Reiniciar | Reiniciar/rebinar el núcleo si la aplicación lo solicita | La siguiente célula utiliza el ambiente actualizado |
| Verificar | Importar el paquete en ese mismo Notebook | Versión real y una pequeña operación de trabajo |

Si la instalación de paquete devuelve HTTP CONNECT 403, compruebe el nombre de host de paquete afectado y [Configuración de red](../guides/network.md) antes de reiniciar. Utilice un paquete existente sólo cuando es compatible con el método que necesita; un cálculo exitoso no significa que se reparó una instalación de paquete fallido.

## Ejecutar y verificar un cálculo RNA-seq local {/* #execute-and-verify-a-local-rna-seq-calculation */}

<p className="example-label"><strong>Ejemplo práctico</strong> Comprobar los recuentos de nivel de muestra en la matriz GSE60450</p>

1. Adjuntar el [Entrada GSE60450](../reference/example-data.md).
2. Seleccione el tiempo de ejecución Python o R Notebook. Inspeccione su versión antes de instalar cualquier cosa.
3. Solicitar la dimensión de la matriz completa y los cheques de la integridad; excluir `EntrezGeneID` y `Length` de las columnas de muestra.
4. Calcular los recuentos totales, los genes de cuenta cero, los genes detectados y la mediana entre los genes detectados para cada ID de muestra completa.
5. Ahorre nuevo informe CSV, gráfico y métodos. Mantenga la fuente sin cambios y compare su SHA-256 antes/después.
6. Reabrir todos los productos. Comprobación cruzada de muestras conteo, etiquetas y valores; inspeccionar el código Notebook real y los registros.

Compare identificadores de salida y métricas con el [ejemplo de referencia](../reference/example-data.md). Mantenga la entrada cruda sin cambios. Los recuentos descriptivos no establecen expresión normalizada, expresión diferencial o conclusión clínica.

<ExampleDownload path="/examples/gse60450/rnaseq-sample-qc.csv">Python QC CSV</ExampleDownload> · <ExampleDownload path="/examples/gse60450/rnaseq-r-python-comparison.md">Comparación de R/Python</ExampleDownload> · <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">Validación Skill</ExampleDownload>.

## Diseñe una pequeña secuencia de proteínas en la CPU {/* #design-a-small-protein-sequence-on-cpu */}

<p className="example-label"><strong>Ejemplo práctico</strong> Secuencias de los candidatos de diseño para la columna vertebral 1UBQ</p>

Esta ruta recorre el **oficial ProteinMPNN CLI** en ubiquitina humana, cadena PDB 1UBQ A. Crea un candidato cada uno con la vainilla y los puntos de control solubles. Es un cálculo inverso condicionado a una columna vertebral existente.

### Preparar el corredor y pesos {/* #prepare-the-runner-and-weights */}

Utilice un Python compatible con `venv` y pip, Git, acceso a Internet y una carpeta de trabajo. Los siguientes comandos son para macOS/Linux shells. En Windows use el `.venv\Scripts\python.exe` correspondiente y establezca `CUDA_VISIBLE_DEVICES` usando la sintaxis de su cáscara.

```bash
mkdir protein-design
cd protein-design
git clone https://github.com/dauparas/ProteinMPNN.git
git -C ProteinMPNN checkout 8907e6671bfbfc92303b5f79c4b5e6ce47cdef57
python3 -m venv .venv
.venv/bin/python -m pip install torch numpy
.venv/bin/python -c "import sys, torch, numpy; print(sys.version); print(torch.__version__, numpy.__version__)"
.venv/bin/python -m pip freeze > environment.txt
```

La salida fija incluye `vanilla_model_weights/v_48_020.pt` y `soluble_model_weights/v_48_020.pt`; confirmar ambos archivos existen. Descargue el <ExampleDownload path="/examples/capabilities/1UBQ.pdb">Entrada 1UBQ</ExampleDownload> en `protein-design` como `1UBQ.pdb`. Mantenga la entrada de secuencia separada de las carpetas de salida.

Esta configuración instala paquetes en un entorno virtual externo. Si pip no reporta una distribución compatible, elija una versión Python compatible con la rueda PyTorch disponible antes de reintentar. Record `environment.txt`; cambiar Python, PyTorch o NumPy puede cambiar la salida numérica. Si un viejo entorno virtual ya no encuentra su intérprete base después de una actualización del sistema, recrearlo con el Python compatible actual.

### Ejecute ambos modelos y guarde sus salidas {/* #run-both-models-and-save-their-outputs */}

Desde `protein-design`, corre:

```bash
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --num_seq_per_target 1 --batch_size 1 --sampling_temp 0.1 --seed 42 \
  --out_folder outputs/vanilla
CUDA_VISIBLE_DEVICES="" .venv/bin/python ProteinMPNN/protein_mpnn_run.py \
  --pdb_path 1UBQ.pdb --pdb_path_chains A --model_name v_48_020 \
  --use_soluble_model --num_seq_per_target 1 --batch_size 1 \
  --sampling_temp 0.1 --seed 42 --out_folder outputs/soluble
```

Ambos comandos utilizan la cadena A, una secuencia, la temperatura 0.1 y la semilla 42. Limpiar la visibilidad del dispositivo CUDA hace que este corredor use CPU. Espera `outputs/vanilla/seqs/1UBQ.fa` y `outputs/soluble/seqs/1UBQ.fa`; Mantener sus nombres separados al importarlos o publicarlos.

Para ejecutar a través de Open-Science, conceda la carpeta preparada usando **Your files → Grant folder…**, luego pida al agente que ejecute estos comandos con el **camino Python absoluto** del entorno y ese directorio de trabajo. Inspeccione el comando y el alcance de la aprobación. Pídale que publique los dos FASTA y un informe de comparación, y luego vuelva a abrir los tres en **Files**. Un archivo dejado sólo en el directorio de trabajo todavía necesita publicación.

:::caución&#91;Skill paquete loading&#93; Si el modelo incorporado Skill falla la validación de la ruta del paquete, reporte ese error a través de [Solución de problemas](../guides/troubleshooting.md). La ruta CLI arriba sigue siendo un método separado; la ejecución CLI exitosa no establece que la carga Skill nativa funciona. :::

### Compruebe las secuencias diseñadas {/* #check-the-designed-sequences */}

![Completo informe de comparación de CPU local y reabierto](/img/open-science/local-todo-batch/42-cpu-model-comparison.png)

Los productos guardados en este ejemplo contenían los siguientes resultados:

| Salida | Residuos diseñados | Puntuación | Recuperación contra nativo |
| --- | --- | --- | --- |
| <ExampleDownload path="/examples/ubiquitin/proteinmpnn_1UBQ.fa">ProteinMPNN FASTA</ExampleDownload> | 76 | 0.7883 | 55.26% |
| <ExampleDownload path="/examples/ubiquitin/solublempnn_1UBQ.fa">SolubleMPNN FASTA</ExampleDownload> | 76 | 0.7900 | 59.21% |

Cada FASTA contiene **dos registros**: la secuencia nativa primero, luego el candidato único diseñado. Comprobaciones independientes confirmadas aminoácidos canónicos, residuos 76 por registro, puntajes finitos, recuperación recomputada directamente y PDB SHA-256. Los bytes de artefactos guardados coincidieron con las salidas del corredor. El <ExampleDownload path="/examples/ubiquitin/1UBQ_mpnn_comparison.md">informe de comparación</ExampleDownload> registra la configuración y las limitaciones. Las puntuaciones de esta comparación de un candidato no establecen qué modelo produce una mejor plegabilidad, solubilidad o función.

## Diagnóstico por la etapa de falla {/* #diagnose-by-the-failing-stage */}

| Síntoma | Siguiente verificación |
| --- | --- |
| No hay tiempo de ejecución / R no disponible | Instalar o habilitar el intérprete a través de [Entornos de ejecución](../guides/runtimes.md), entonces atápalo. |
| ImportError / MóduloNotFoundError / no paquete llamado | Inspeccione el entorno seleccionado y utilice la instalación de paquetes gestionados. |
| Unknown Skill / invalid kernel helper | Destinguir un paquete de método de un ayudante Notebook real. |
| Versión de entrada no disponible / archivo no encontrado | Resolver la entrada actual exacta a través de la aplicación; no adivina un camino. |
| Fallo de la red/HTTP | Mantener el host, el funcionamiento y el estado real; uso [Controles de red](../guides/network.md) y [orientación sobre errores](../guides/troubleshooting.md). |
| La salida existe sólo en un directorio de trabajo | Publique a través de la ruta de artefactos compatibles y reabrir la versión guardada. |
| No hay bloque productor / medio ambiente parcial | Retener la limitación; no fabricar pruebas perdidas. |

Para trabajos remotos, inspeccione la preparación de los anfitriones, la presentación, el estado y la producción cosechada por separado. El [Direct SSH RNA-seq ejemplo](../guides/remote-compute.md) completó y sus salidas fueron verificadas independientemente. El monitoreo de terminales Slurm requiere contabilidad legible. El mismo capítulo documenta ahora un funcionamiento A100 ProteinMPNN verificado con un entorno CUDA aislado y cheques de salida independientes. Los métodos que se pueden utilizar en la CPU siguen siendo evaluables por separado.

Para el trabajo de larga duración, siga [Tareas de antecedentes y ejecución de los resultados](../guides/notebook.md#background-tasks-and-result-delivery). Inspeccione las salidas de funcionamiento y guardadas después de la entrega. Entorno & Paquetes, Configuración de Medio Ambiente Compute y Compute Remoto (SSH) permanecen habilitados, pero sus requisitos de tiempo de funcionamiento, red y host todavía se aplican.

Referencia de implementación: [notebook.ts](https://github.com/aipoch/open-science/blob/v0.26.0/src/shared/notebook.ts), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/env-management/SKILL.md), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/remote-compute-ssh/SKILL.md).
