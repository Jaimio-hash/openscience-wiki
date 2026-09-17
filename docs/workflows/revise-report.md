---
title: Revise a report after feedback
last_update:
  date: '2026-09-16'
---

import ExampleDownload from '@site/src/components/ExampleDownload';

# Revise a report after feedback

<p className="example-label"><strong>Worked example</strong> Revise a single-atom catalysis briefing against six editorial comments</p>

A useful revision keeps the source evidence, original draft and response to comments connected. This example creates an English briefing from a real catalysis paper, then revises it without overwriting the first draft. The six comments are a teaching exercise prepared for this walkthrough, not correspondence from the journal or the paper's authors.

## 1. Attach the paper and create a first draft

Open [Yang et al., 2019](https://doi.org/10.1038/s41467-019-12510-0), download the main PDF and its Supplementary Information from the publisher, and attach both through **+ → Attach files** in a project conversation. The recorded files have **9 and 52 PDF pages**, respectively. Page numbers below refer to the PDF page, not a printed journal page.

Select an available model, then send:

```text
Read the attached main paper and supplementary PDF about Ni-SAC-2.5.
Write an English research briefing as catalyst-brief-v1.md.
Explain the CO2-to-CO performance, distinguish Faradaic efficiency,
energy efficiency and CO2 conversion, and separate peak selectivity
from durability measured at another potential. Cite the DOI and exact
main/supplement PDF pages and figures. State which evidence was actually
read and flag unavailable figure inspection. Do not invent measurements.
Save and reopen the draft. Do not overwrite it in later revisions.
```

![The source PDFs and initial briefing request in Open-Science](/img/open-science/workflow-extensions/report-input.png)

Approve the relevant file reads when requested. Open **catalyst-brief-v1.md** from **Generated** or **Files** and read the saved draft. An answer in the conversation is not a substitute for inspecting the actual file.

![The saved first draft before editorial revision](/img/open-science/workflow-extensions/report-draft.png)

## 2. Make the feedback actionable

Download <ExampleDownload path="/examples/workflow-extensions/report-review-comments.md">the six editorial comments</ExampleDownload> and attach it in the same conversation. The comments ask for:

| Comment | Requested change |
| --- | --- |
| C1 | An executive summary of no more than 120 words |
| C2 | A two-row table separating the two operating points |
| C3 | Absence claims limited to the evidence actually inspected |
| C4 | Three proposed follow-up checks, clearly not experiments already performed |
| C5 | Explicit Main PDF / Supplementary PDF page and figure locators |
| C6 | Separate v2 and response files, preserving v1 |

```text
Apply the attached report-review-comments.md to catalyst-brief-v1.md.
Preserve the original. Save catalyst-brief-v2.md and
catalyst-brief-v2-response.md. Map C1–C6 to exact revised sections,
state anything not resolved, and verify the summary word count.
Keep every scientific claim tied to the supplied source evidence.
Do not turn proposed follow-up work into completed results.
Reopen both saved files and check them against the comments. Use English.
```

The actual revision read the attached comment file and produced both requested kinds of deliverable. If the Agent proposes unsupported changes, name the claim and the source passage to check before accepting them.

## 3. Read the revised evidence, not just the response status

Open **catalyst-brief-v2.md**. This run produced a **117-word summary**, a two-row operating-point table and three labelled follow-up proposals.

![The revised summary and the table separating selectivity from durability](/img/open-science/workflow-extensions/report-revised.png)

The key distinction is **98.9% CO Faradaic efficiency at −1.2 V vs RHE** versus a separate **20 h current-retention test at −0.8 V vs RHE**. Do not combine them into “98.9% for 20 h.” Main PDF p. 6, Fig. 6b–d, and p. 7, Fig. 6e, identify the relevant evidence; p. 8 describes the H-cell measurements. Supplementary PDF pp. 47–48, Figs. 51–52, concern hydrogen selectivity and NMR product checks.

In this run, the Agent could read the full-text passages and figure captions, but the linked figure-element cache was unavailable for direct image inspection. Its response records that limitation. The qualitative current decrease follows the authors' text; no new value was digitized from the plot. Follow [check claims against PDF evidence](pdf-evidence.md) when direct figure inspection is needed.

## 4. Check the response and hand off all three versions

Open **catalyst-brief-v2-response.md**. Locate C1–C6, open each named revised section and confirm that it actually contains the promised change. A “Resolved” label alone is insufficient.

![The saved response table maps all six comments to revised sections](/img/open-science/workflow-extensions/report-response.png)

Check that the proposals remain labelled as proposals, the DOI remains **10.1038/s41467-019-12510-0**, and **catalyst-brief-v1.md** still exists unchanged. The response should state any evidence that remains unavailable.

Download the recorded <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v1.md">v1 draft</ExampleDownload>, <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2.md">v2 briefing</ExampleDownload> and <ExampleDownload path="/examples/workflow-extensions/catalyst-brief-v2-response.md">response to comments</ExampleDownload>. Keep them with the comment file and publisher links. The original draft is included for comparison and should not be used as the final reviewed briefing.
