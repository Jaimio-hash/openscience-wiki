---
title: "Catálogo de Skills"
description: "Descubre, instala, actualiza y gestiona métodos de investigación desde el mercado Skill."
last_update:
  date: '2026-09-16'
---

# Catálogo de Skills {/* #skill-marketplace */}

Utilice **Settings → Skills → Browse Marketplace** para encontrar e instalar métodos de investigación sin localizar e importar sus repositorios usted mismo. Puede inspeccionar un método antes de instalarlo, elegir qué métodos utilizar y aplicar actualizaciones cuando esté listo.

Para traer un ZIP, Skill local o un repositorio GitHub específico, use [Importación y gestión de Skill](manage.md). Para una visión general de los métodos de investigación y sus insumos, vea el [directorio Skill](directory.md).

![El mercado Skill con búsqueda, filtros de categoría y botones de instalación](/img/open-science/feature-guides-2026-09/marketplace-browse.webp)

## Encontrar un método adecuado {/* #find-a-suitable-method */}

1. Abrir **Marketplace** y buscar o filtrar por categoría.
2. Abra los detalles de Skill y lea su propósito, autor, fuente, información de licencia y cualquier detalle de evaluación.
3. Compare sus entradas, las herramientas necesarias y las dependencias de tiempo de ejecución con su proyecto antes de instalar.

Una firma de catálogo confirma la identidad de distribución. No establece que un método se adapte a su pregunta de investigación o que su computadora tiene sus dependencias.

![Marketplace Skill detalles mostrando autor, versión, licencia y la acción Install](/img/open-science/feature-guides-2026-09/marketplace-detail.webp)

## Instalar y utilizar un Skill {/* #install-and-use-a-skill */}

1. Seleccione **Install** en la tarjeta elegida y espere a **Installed**.
2. Abra el Skill instalado y confirme su disponibilidad para Main o el Specialist.
3. Prepare una entrada que cumpla con los requisitos del Skill, y luego la use en una tarea atada.
4. Abra los archivos generados y compruebe el resultado contra su solicitud. La instalación por sí sola no establece que una investigación realizada tuvo éxito.

Para seleccionar un Skill en una conversación, consulte [Utilizando Skills](overview.md). Configurar los métodos de Specialist a través de [Skills y conectores](../specialists/capabilities.md).

## Instalar o actualizar varios Skills {/* #install-or-update-several-skills */}

1. Elija **Batch manage**, luego **Not installed** o **Updates**.
2. Filtrar el catálogo y seleccionar las entradas previstas. **Seleccione todos los resultados filtrados** selecciona el conjunto de resultados completos del filtro.
3. Abra **Review selection** y compruebe la lista antes de elegir **Install selected** o **Update selected**.
4. Espere a que las operaciones terminen e inspeccionen cada resultado. La instalación funciona secuencialmente; parar permite que el elemento actual termine.
5. Revisión falló o detuvo entradas y retratar sólo lo que se necesita.

## Actualizar o eliminar un método {/* #update-or-remove-a-method */}

Cuando una actualización está disponible, abra **Revisar la actualización de la habilidad** antes de confirmar. Revise las versiones viejas y nuevas, los Especialistas afectados, y los archivos a añadir, cambiar o eliminar. El diff muestra números de línea, borraciones rojas y adiciones verdes. Para las comparaciones binarias, de tamaño excesivo o no legibles, utilice los cambios de archivo listados; un diff no disponible no significa que los archivos no se cambian.

Si el diálogo reporta ediciones locales, la actualización los reemplaza. [Exportar una copia](manage.md) primero si necesitas mantenerlos. Elija **Actualizar la habilidad existente** sólo después de su revisión; esto preserva la identidad Skill y sus relaciones Specialist. Para **Conflicto local**, abra **Ver la habilidad instalada** y siga la acción de revisión cuando se ofrezca. Si permanece bloqueado, conserva el mensaje en lugar de eliminar el método local para forzar la instalación.

Utilice las acciones de detalles de Skill instaladas para cambiar la disponibilidad o desinstalarla. Después de un cambio, confirme el método previsto está disponible para Main o el Specialist que lo utilizará; un paquete descargado y un método disponible son estados separados.

## Si la instalación o el uso falla {/* #if-installation-or-use-fails */}

Para un error de verificación de catálogos o paquetes, mantenga el mensaje y vuelva a entrar a través de la entrada normal del mercado. No reemplace el paquete con una descarga no verificada. La navegación en el mercado utiliza el servicio de distribución oficial y no requiere un login GitHub.

Si la instalación completa, pero una tarea no puede ejecutarse, inspeccione la dependencia o la herramienta que falta en el error. Siga [configuración de tiempo de ejecución](../guides/runtimes.md) para las dependencias de software o [Connector setup](../guides/connectors.md) para los servicios requeridos, luego vuelva a iniciar la tarea con la entrada prevista y compruebe el resultado guardado.

## Presenta tu propio Skill al mercado {/* #submit-a-skill */}

Las sumisiones de mercado utilizan un repositorio de origen GitHub y una revisión de mantenimiento. **Upload skills** importa un método en su aplicación local; **Publish** en el editor personal Skill ahorra un Skill. Ninguna acción lo enumera en el mercado público.

### Prepare el Skill {/* #prepare-the-skill */}

1. [Crear y probar el Skill](create.md), incluyendo los scripts, referencias y otros archivos que necesita.
2. Cargue esos archivos a un subdirectorio de su repositorio GitHub, como `skills/your-skill-name/`, con `SKILL.md` dentro. Mantenga los avisos de licencia requeridos con la fuente.
3. Comprobar el contenido completo y copiar que comprometer es SHA completa. La presentación debe identificar una revisión fija, no una rama en movimiento.

`SKILL.md` necesita `name`, `description` y una declaración de licencia en `license` o `metadata.license`. La declaración y avisos incluidos deben describir el contenido real que usted está presentando.

### Prepare el archivo de presentación {/* #prepare-the-submission-file */}

Empieza con el [versión.config.json plantilla](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/example/release.config.json) oficial. Reemplazar sus marcadores de posición con la información de su Skill:

| Campo | Qué suministrar |
| --- | --- |
| `id` | La maleta inferior, nombre hipnotizado usado en `SKILL.md`. |
| `version` | Una versión de paquete como `1.0.0`. |
| `category` | Uno de los `Academic Writing`, `Data Analysis`, `Evidence Insight`, `Protocol Design` o `Other`. |
| `source.repository`, `source.commit`, `source.path` | Su URL HTTPS GitHub, completo 40-character commit SHA y Skill directorio. |
| `license_files` | Caminos repositorios relacionados con los archivos de licencia aplicables en ese commit. |

El compromiso de todos los ceros de la plantilla es un marcador de lugar y no se puede publicar. Compruebe el [formato de presentación](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/release.config.schema.json) actual antes de enviar.

### Solicitar inclusión y comprobar el resultado publicado {/* #request-inclusion-and-check-the-published-result */}

Siga el [Instrucciones de contribución](https://github.com/aipoch/openscience-skill-marketplace/blob/main/CONTRIBUTING.md) del repositorio de mercado para preparar una solicitud de tirada. Si no tiene acceso a la escritura, utilice un tenedor. Proporcione el archivo de presentación, la ubicación de la fuente, el propósito y el resultado de la prueba local; la carga útil permanece en su repositorio de origen. Los usuarios pueden rastrear la configuración revisada bajo `authoring/submissions/<id>/release.config.json`; confirmar su colocación durante el examen.

Los usuarios examinan y registran las comunicaciones que reúnen los requisitos antes de su publicación. Un archivo presentado o una solicitud de tirada fusionada no hace que el Skill esté disponible en la aplicación. El [Guía de autor](https://github.com/aipoch/openscience-skill-marketplace/blob/main/authoring/README.md) describe las etapas de revisión y publicación.

Después de la publicación, vuelva a **Browse Marketplace → Refresh**, busque el Skill, compruebe su fuente y versión, e instálelo. Al actualizar un Skill publicado, envíe una nueva versión de paquete con el nuevo commit fuente; no asuma ediciones a la actualización del repositorio upstream copias instaladas automáticamente.
