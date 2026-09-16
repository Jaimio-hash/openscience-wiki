"""Prepare the ten-paper teaching input from Europe PMC, using Python 3.

Run in a local working folder. The script writes into a
mask-trial-sources directory, reuses validated XML downloads on retry,
and refuses to replace an existing combined source pack.
Read each article's access/reuse terms before redistributing its text.
"""

from pathlib import Path
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

SOURCES = [
    ("PMC7553311", "10.1371/journal.pone.0240287"),
    ("PMC9036942", "10.1126/science.abi9069"),
    ("PMC5223715", "10.1136/bmjopen-2016-012330"),
    ("PMC4420971", "10.1136/bmjopen-2014-006577"),
    ("PMC2984432", "10.1371/journal.pone.0013998"),
    ("PMC3266257", "10.1371/journal.pone.0029744"),
    ("PMC3285078", "10.1186/1471-2334-12-26"),
    ("PMC4941587", "10.1111/j.1750-2659.2011.00198.x"),
    ("PMC2662657", "10.3201/eid1502.081167"),
    ("PMC2364646", "10.1371/journal.pone.0002101"),
]


def text(element):
    return " ".join("".join(element.itertext()).split()) if element is not None else ""


def render(element, depth=2):
    """Keep source section/table labels and explicit cell spans."""
    parts = []
    for child in element:
        tag = child.tag.rsplit("}", 1)[-1]
        if tag == "sec":
            parts.extend(render(child, min(depth + 1, 6)))
        elif tag == "title":
            parts.append("#" * depth + " " + text(child))
        elif tag in ("p", "list", "disp-quote", "disp-formula"):
            parts.append(text(child))
        elif tag == "table-wrap":
            parts.append("### " + text(child.find("label")) + " — " + text(child.find("caption")))
            for row in child.findall(".//tr"):
                cells = []
                for cell in row:
                    span = " ".join(f"{key}={cell.get(key)}" for key in ("rowspan", "colspan") if cell.get(key))
                    cells.append(text(cell) + (f" [{span}]" if span else ""))
                parts.append(" | ".join(cells))
            foot = child.find("table-wrap-foot")
            if foot is not None:
                parts.append(text(foot))
        elif tag == "fig":
            parts.append(text(child.find("label")) + " — " + text(child.find("caption")))
        else:
            parts.extend(render(child, depth))
    return parts


def convert(data, pmcid, doi):
    root = ET.fromstring(data)
    meta = root.find(".//article-meta")
    if meta is None or text(meta.find("article-id[@pub-id-type='doi']")).lower() != doi.lower():
        raise ValueError(f"Source identity mismatch: {pmcid}")
    body = root.find(".//body")
    if body is None:
        raise ValueError(f"No full-text body: {pmcid}")
    parts = [
        "# " + text(meta.find("title-group/article-title")),
        f"DOI: {doi}\n\nPMCID: {pmcid}\n\nSource: https://pmc.ncbi.nlm.nih.gov/articles/{pmcid}/",
        "Authors: " + "; ".join(text(n) for n in meta.findall(".//contrib[@contrib-type='author']/name")),
        "Source permissions: " + text(meta.find("permissions")),
        "Text companion extracted from Europe PMC XML. Check original figures and table layout at the source.",
    ]
    for abstract in meta.findall("abstract"):
        parts.append("## Abstract\n\n" + text(abstract))
    parts.extend(render(body))
    return "\n\n".join(parts)


def main():
    folder = Path("mask-trial-sources")
    folder.mkdir(exist_ok=True)
    target = folder / "mask-trials-fulltext.md"
    if target.exists():
        raise SystemExit(f"Existing source pack retained: {target}")
    articles, failures = [], []
    for pmcid, doi in SOURCES:
        url = f"https://www.ebi.ac.uk/europepmc/webservices/rest/{pmcid}/fullTextXML"
        try:
            cached = folder / f"{pmcid}.xml"
            if cached.exists():
                data = cached.read_bytes()
            else:
                request = Request(url, headers={"User-Agent": "OpenScienceWikiResearchExample/1.0"})
                with urlopen(request, timeout=60) as response:
                    data = response.read()
            article = convert(data, pmcid, doi)
            if not cached.exists():
                cached.write_bytes(data)
            articles.append(article)
            print(f"Ready: {pmcid}")
        except Exception as error:
            failures.append(pmcid)
            print(f"Failed: {pmcid}: {error}")
    if failures:
        raise SystemExit("Incomplete source set; no combined pack written. Resolve: " + ", ".join(failures))
    target.write_text("\n\n---\n\n".join(articles) + "\n", encoding="utf-8")
    print(f"Saved {len(articles)} complete sources: {target}")


if __name__ == "__main__":
    main()
