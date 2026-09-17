---
title: Prepare a focused journal-club reading pack
last_update:
  date: '2026-09-16'
---

# Prepare a focused journal-club reading pack

Start with a research question, find papers in Open-Science, save their full texts, and turn the same papers into a discussion pack. No downloaded PDF is needed for the search step. Full-text reading begins only after the PDFs have been saved and opened.

<p className="example-label"><strong>Worked example</strong> Find and read five papers on single-atom catalysis</p>

**Question:** what evidence connects isolated metal sites to useful catalytic performance? This example searches 2017–2022 primary studies covering synthesis, thermal stability, mechanism and scale-up. It produces a five-paper Library collection, a full-text reading pack, a five-row paper map and a 60-minute agenda. The final five papers below are the same ones used in the saved outputs.

## Search from a topic

1. Open a conversation in your project and select a working model with search tools. Leave the attachment area empty.
2. Describe the scientific question, period and paper type. Ask for a search log and candidates for manual review.
3. Send the request and expand the search activity. Check the source links and whether each result contains metadata, an abstract or full text.

```text
Find papers for a 60-minute journal club on single-atom catalysis.
Our question is: what evidence connects isolated metal sites to useful
catalytic performance?
Search online for eight distinct primary research papers from 2017–2022,
covering synthesis, thermal stability, reaction mechanism and scale-up.
Do not use existing project files or the Library as a substitute for search.
For each candidate give title, authors, year, journal, DOI, original source
URL, why it fits, and whether you retrieved metadata, abstract or full text.
Save single-atom-search-log.md with actual queries, sources and search date.
Stage verified candidates in Literature Inbox for my review; do not accept
them automatically. Stop before downloading PDFs. Keep everything in English.
```

![The actual search log with candidate identities and retrieval status](/img/open-science/research-workflows/literature-topic-results.webp)

The <a href="/docs/examples/research-workflows/single-atom-search-log.md" download>initial search log</a> records eight candidates found through web search and Crossref metadata. These were not yet downloaded papers. If a source requires credentials, configure [Connectors](../guides/connectors.md) or ask the Agent to use an available source and name the gap.

## Review and save the candidates

Open **Library → Inbox**. Select a title to compare its DOI, authors, year and publisher page. Accept relevant records, leave undecided ones pending, and dismiss irrelevant ones. **Search references** filters the saved Library; start online discovery in the conversation.

The first selection included papers whose full texts could not be added. To make this meeting use readable sources throughout, the example retained Lang and searched for four replacements within the same topic:

```text
Revise our selection within single-atom catalysis. Keep Lang 2019 and
find four additional primary studies from 2017–2022 with openly accessible
full text, retaining coverage of synthesis, thermal stability, mechanism
and scale-up. Verify each title, DOI, year and source URL.
Save single-atom-open-access-selection.md. Stage the new records in Inbox
for my review; do not accept them or download PDFs automatically.
Keep the old collection unchanged. Keep everything in English.
```

Review the <a href="/docs/examples/research-workflows/single-atom-open-access-selection.md" download>replacement selection log</a>, then select the four intended Inbox rows and choose **Accept**. An open-access source link still needs to be tested by saving and opening its PDF.

![Four replacement candidates selected for manual acceptance](/img/open-science/research-workflows/journal-open-access-inbox.webp)

Create **Single-Atom Catalysis - Full-Text Journal Club** using **New collection**. In **All references**, select these four accepted records plus Lang, then choose **Add to collection**. Use **Add to project** to link the set to the project containing your conversation.

| Paper | Focus | PDF pages in this run |
| --- | --- | ---: |
| [Lang et al., 2019](https://doi.org/10.1038/s41467-018-08136-3) | Thermal stability and methane combustion | 10 |
| [Sun et al., 2018](https://doi.org/10.1038/s41467-018-06967-8) | Pt/Cu alloys and propane dehydrogenation | 9 |
| [Ouyang et al., 2021](https://doi.org/10.1038/s41467-021-21555-z) | Reversible atom–cluster changes and reaction pathways | 11 |
| [He et al., 2022](https://doi.org/10.1038/s41467-022-33442-2) | Continuous preparation and scale-up | 10 |
| [Qi et al., 2021](https://doi.org/10.1038/s41467-021-23429-w) | Ru coordination and reductive amination | 11 |

## Obtain full text for the selected papers

1. Open a reference, then choose **Find full-text PDF**.
2. Check the returned source and choose **Add attachment**. Wait until a file appears under **Attachments**.
3. Open that attachment. Compare its title and DOI with the record, and check the page count.
4. Repeat for all five references, then reopen the collection. Each row should now show an attachment icon.

![Full-text sources offered for the Lang paper](/img/open-science/research-workflows/literature-topic-fulltext.webp)

In this run, Lang's PDF was added through Europe PMC. The other four were saved from publisher sources discovered through Unpaywall. An alternative source can succeed when another source cannot be added. If necessary, use **Open source** to obtain a copy you are entitled to access and attach it with **Add PDF**. If no readable copy is available, replace the selection or mark it missing before requesting full-text findings.

![An actually downloaded paper opens in the English PDF preview](/img/open-science/research-workflows/journal-qi-pdf.webp)

The final collection contains five saved PDFs, with page counts **10, 9, 11, 10 and 11** in the table's order. An attachment icon confirms a saved file; opening it confirms that it is readable and matches the record.

![The final five-paper collection with an attachment on every record](/img/open-science/research-workflows/journal-five-fulltexts.webp)

<span id="draft-the-reading-plan-then-deepen-it-with-full-text" />

## Read the full texts and generate the pack

Return to the conversation in the linked project. Name the completed collection explicitly. Ask for evidence from its saved PDFs and separate the conditions of different reactions:

```text
Use the Library collection "Single-Atom Catalysis - Full-Text Journal Club"
to prepare a 60-minute journal club. Read the saved PDFs for Lang 2019,
Sun 2018, Ouyang 2021, He 2022 and Qi 2021 using the application tools.
Verify each PDF title, DOI and page count. Do not substitute abstracts
or older reading packs for these full texts.
Save single-atom-fulltext-reading-pack.md and single-atom-fulltext-paper-map.csv.
For each paper include its question, catalyst/reaction, a supported finding
with PDF page and figure/table locator, experimental conditions, a limitation
and two discussion questions. Explain how the five papers connect and
include a 60-minute agenda. Keep metrics from different reactions separate.
Mark missing or unreadable evidence. Save the actual files in English;
do not delegate. I will open the results and check the original pages.
```

During the response, expand the **Literature library** reading activity to inspect which paper and passage were retrieved. This run read all five saved PDFs. Reading activity is distinct from the earlier metadata lookup. If a read fails, resolve it or keep that paper's evidence explicitly unavailable.

After completion, open **single-atom-fulltext-reading-pack.md** from **Generated**. Check the five-paper verification table, each finding and its locator, limitations, questions and agenda. The agenda should total 60 minutes.

![The saved full-text pack, with the same five papers and source checks](/img/open-science/research-workflows/journal-fulltext-pack.webp)

## Check the paper map against the original PDFs

Open **single-atom-fulltext-paper-map.csv** and use its expand button for a full-screen view. This run contains **5 rows · 12 columns**. Compare the DOI set with the collection; a pack from a different set is not this workflow's result. Scroll horizontally or download the CSV to read long cells in full.

![The actual five-row, twelve-column paper map](/img/open-science/research-workflows/journal-fulltext-paper-map.webp)

Return to **Library**, open a cited PDF, click its page counter, type the requested page and press **Enter**. Check the figure or table together with its caption and surrounding text. For example, He et al.'s Figure 5 is on **PDF page 7**; the production-line description is on page 3. They support different parts of the summary.

![He et al.'s Figure 5 opened on PDF page 7 for comparison](/img/open-science/research-workflows/journal-he-figure5.webp)

Ask for a saved revision when a locator or condition is wrong, then reopen the revised file. The checked pack also retains a conflict in Sun et al.: page 2 and the Figure 5 caption give different feed compositions. It records both descriptions instead of choosing one silently. This is a useful meeting question, not a resolved experimental detail.

Download the checked <a href="/docs/examples/research-workflows/single-atom-fulltext-reading-pack.md" download>reading pack</a> and <a href="/docs/examples/research-workflows/single-atom-fulltext-paper-map.csv" download>paper map</a>. The same five PDFs underlie both files. For a closer single-claim walkthrough, continue with [claim and figure verification](pdf-evidence.md).
