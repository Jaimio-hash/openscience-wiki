---
title: "Skill recipes"
last_update:
  date: '2026-09-10'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Skill recipes

Choose a recipe by its starting material and the decision you need to make. Keep the procedure in the Skill, the actual files in a project, and the result checks in the conversation.

| Research situation | Start with | Skills and tools | Deliverable and acceptance check | Route and prerequisites |
| --- | --- | --- | --- | --- |
| Decide whether a downloaded RNA-seq count table is ready for analysis | Raw count matrix and source accession | Custom rnaseq-count-qc; Python/R Notebook | Structural report, sample metrics, original identifiers and unchanged input hash | Local Notebook example; enabled Python/R |
| Reconcile two implementations of sample QC | Python and R CSV outputs | Notebook; rnaseq-count-qc requirements | Join by full sample IDs and compare all metrics; the GSE60450 example matched 48 values | Local Notebook example; enabled Python/R |
| Have another role check a result before sharing it | Complete QC table and explicit invariants | RNA-seq QC Reviewer Specialist | Separate child transcript and 12 per-sample sums; distinguish inline evidence from original-file access | Inline-table example; enabled Specialist and Python |
| Prepare a reading list for a new question | A focused question and seed DOI/PMID | Literature Review; literature/data Connectors | Retrieved identifiers, inclusion rationale and unresolved full-text gaps | PRISMA collection example; working literature Connector |
| Draft a research dossier for a defined population | Population, indication and question scope | Indication Dossier; research sources | Dated evidence, resumed waypoint files and unsupported claims flagged | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Turn an exploratory chart into a report figure | Validated data and a specific claim | Figure Style | Reopened image with units, sample labels, caption and data traceability | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Build a multi-panel result figure | Claim and immutable data versions | Figure Composer + Figure Style | Panel outline, assembled image and review findings; run from Main Agent | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Check whether a figure deck supports a manuscript | Manuscript, captions, full ordered deck | Paper Narrative | Ordered figure argument and evidence gaps; not fabricated new experiments | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Find the cause of a missing-package error | Exact error and selected runtime | Environment & Packages | Installed-version inspection, managed install where possible, restarted-kernel import test | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Prepare a remote environment for a repeated job | An existing SSH/Slurm host and package requirements | Compute Environment Setup + Remote Compute | Named environment and probe/run evidence; host setup is owned by the user/admin | See Remote compute for Direct SSH; Slurm requires accounting |
| Compare protein-structure predictions | Valid sequences/complex definition | AlphaFold2, Boltz, Chai-1, ESMFold2 or OpenFold3 | Structure plus confidence and input correspondence; configured weights/GPU required | Adaptable method; prepare the listed inputs and method-specific dependencies |
| Redesign a backbone with fixed residues | PDB, chain mapping and design constraints | ProteinMPNN / LigandMPNN / SolubleMPNN | Sequence-to-chain mapping and constraint checks; CPU support depends on the method | Small ProteinMPNN CLI example; other methods need their own setup |
| Integrate single-cell batches | AnnData, batch labels and original counts | scvi-tools or scGPT | Model outputs checked against cell/gene identifiers; this does not apply directly to bulk counts | Adaptable method; prepare the listed inputs and method-specific dependencies |

## Reproduce the local RNA-seq recipe

<p className="example-label"><strong>Worked example</strong> Run and inspect RNA-seq count QC</p>

1. Use the actual [GSE60450 inputs and sample QC](../reference/example-data.md).
2. Create or import [rnaseq-count-qc](./create.md).
3. Send a bounded request using the [Skill invocation example](./overview.md).
4. Open the generated <ExampleDownload path="/examples/capabilities/rnaseq-skill-validation.md">validation report</ExampleDownload>. Compare the expected 27,179 genes and 12 sample columns with the observed values, not with a preview's row cap.
5. If a second opinion is required, use [Delegate and verify](../specialists/delegate.md) and inspect the actual child transcript.

## Give a recipe a clear finish

A useful request names the source, required method, output files and acceptance checks. For example:

> Use the existing GSE60450 sample-QC CSV to make a report figure with Figure Style. Keep full sample IDs in the companion table, label raw count units, preserve the source, save a new figure, and reopen it to inspect all labels. Report any unavailable dependency before changing the method.


Implementation reference: [manifest.json](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/manifest.json), [SKILL.md](https://github.com/aipoch/open-science/blob/v0.26.0/resources/skills/figure-composer/SKILL.md).

For supported long-running work, follow [Background tasks and result delivery](../guides/notebook.md#background-tasks-and-result-delivery). Inspect the actual run and saved outputs after delivery. Environment & Packages, Compute Environment Setup and Remote Compute (SSH) stay enabled, but their runtime, network and host requirements still apply.
