---
title: "Check a paper's claim against its figures and supplement"
last_update:
  date: '2026-09-16'
---

# Check a paper's claim against its figures and supplement

<p className="example-label"><strong>Worked example</strong> What does 98.9% catalyst efficiency mean?</p>

A headline number is useful only when its metric and experimental conditions are clear. This workflow takes a catalyst paper and its supplement, locates the evidence for one claim, and saves a short report separating the reported result from broader interpretations.

**Deliverable:** an English claim/evidence/conditions/limits table with PDF page and figure references. This is a source check, not an independent experimental replication.

## Prepare the original materials

Use Yang et al.'s [*A universal ligand mediated method for large scale synthesis of transition metal single atom catalysts*](https://www.nature.com/articles/s41467-019-12510-0), DOI `10.1038/s41467-019-12510-0`.

1. Download the article PDF from the publisher page and the **Supplementary Information** PDF under **Supplementary information**. Keep them as separate files.
2. In an Open-Science project, open a conversation and select a working model.
3. Choose **+ → Attach files** and attach both PDFs. Open the main PDF to check its title and DOI. The example files contain 9 main-article pages and 52 supplement pages.

Check that **both filenames** appear above the sent request. Clicking a filename opens its preview; switching between the two lets you verify which document a cited page belongs to.

![Both the article and supplement are attached to the actual evidence-check request](/img/open-science/research-workflows/catalyst-two-inputs.webp)

## Ask a specific evidence question

```text
Check the claim that the Ni single-atom catalyst achieves 98.9%
CO Faradaic efficiency in the attached paper and supplement.
Save catalyst-claim-check.md with a claim/evidence/conditions/limits
table. Give exact PDF pages and figures. Distinguish Faradaic
efficiency from energy efficiency and CO2 conversion. Compare
the potential used for peak selectivity with the stability experiment.
Check the cited supplementary figures. Mark unreadable or missing
evidence. Use only these attachments, write in English and do not
delegate. This is a source check, not an experimental replication.
```

Approve the intended reading requests when prompted. If the reader reports an invalid page or unreadable material, refine the request or open the relevant PDF page yourself. Do not treat an unsuccessful retrieval as evidence that a figure is absent.

## Open the cited evidence

In the PDF preview, use the page control to open **page 6**, which contains **Figure 6** and the relevant results. Compare the figure caption with the text. Open supplement pages **47–49** for Figures **51–53**.

![The original article's Figure 6 and experimental conditions in Open-Science](/img/open-science/research-workflows/catalyst-figure6-source.webp)

The source reports **98.9% Faradaic efficiency to CO at −1.2 V versus RHE** for Ni-SAC-2.5. The durability experiment uses **−0.8 V for 20 hours**. Those conditions should remain separate: the latter does not establish 20-hour durability at the peak-selectivity potential. Faradaic efficiency describes charge allocated to a product; it is not the same as energy efficiency or the fraction of incoming CO₂ converted.

The supplement supplies the hydrogen-product, NMR and scale-up figures. A readable caption does not necessarily provide every numerical point in a plotted trace. Keep that distinction in the report.

To jump to a page, expand the PDF preview, click its page counter, enter the complete number and press **Enter**. Verify the resulting counter before reading. Supplement page 47 contains **Supplementary Figure 51**, whose axis is **H₂ Faradaic efficiency**; it must not be mistaken for the main CO result.

![Supplementary Figure 51 on actual PDF page 47 of 52](/img/open-science/research-workflows/catalyst-supplement-47.webp)

## Check and save the report

After the answer completes, open **catalyst-claim-check.md**. Check the source identity, page numbers, figure labels and the wording of the conclusion. In particular, the report should retain **reported result** and avoid turning a literature check into a claim of experimental reproduction.

![The saved claim, evidence, conditions and limits report](/img/open-science/research-workflows/catalyst-claim-report.webp)

Download the <a href="/docs/examples/research-workflows/catalyst-claim-check.md" download>example report</a> for its structure. Before using a scientific conclusion in your own work, inspect the cited original evidence and any publisher corrections. For extracting figure or table evidence to a separate file, see [PDF extraction](../guides/previews.md#pdf-extraction).
