# Open Problems in Operations Research import

This directory contains a machine-readable snapshot of the
`Mathematics of Operations Research` records published by
[Open Problems in Operations Research](https://pranav-nuti.github.io/open-problems-in-or/).
It is kept separate from the repository's hand-curated `open_problems/`
collection so that provenance and verification status remain explicit.

## Contents

- [`mathematics_of_operations_research.jsonl`](mathematics_of_operations_research.jsonl):
  132 complete records, one UTF-8 JSON object per line.
- [`mathematics_of_operations_research_index.md`](mathematics_of_operations_research_index.md):
  generated human-readable catalog grouped by source-paper publication year.
- [`snapshot.json`](snapshot.json): source revision, timestamps, record count,
  and SHA-256 checksum.

Each JSONL record includes the problem statement and background in LaTeX,
source-paper metadata, the upstream quotation and paper location, literature
review data, verification metadata, suitability annotations, progress links,
and the upstream website and JSON URLs.

## Verification status

All 132 records in this snapshot are marked `unverified` by the upstream
dataset. The upstream disclaimer says that entries were extracted from source
papers and passed an automated fidelity audit, but were not independently
verified as still open. Inclusion here is not an endorsement that a problem is
correctly stated or currently unresolved.

The `solution_progress` field is also time-sensitive. A new upstream solution,
correction, or status change will not appear until the snapshot is refreshed.

## Refreshing the snapshot

Run these commands from the repository root:

```bash
python3 scripts/fetch_open_problems_in_or.py
python3 scripts/build_open_problems_in_or_index.py
python3 -m unittest discover -s tests -v
```

After refreshing, update `snapshot.json` with the new source metadata, count,
and checksum:

```bash
sha256sum datasets/open_problems_in_or/mathematics_of_operations_research.jsonl
```

The fetcher uses only the Python standard library. It reads the public JSON
index directly and does not require browser automation or HTML parsing.

## Attribution and reuse

The source website is maintained by Eric Fithian, Rad Niazadeh, and Pranav
Nuti. Preserve the upstream URLs and attribution when using this snapshot.

At the time recorded in `snapshot.json`, the upstream repository did not
publish a `LICENSE` file specifying redistribution terms. Repository
maintainers should confirm the applicable reuse terms before a public release
that redistributes the full snapshot.
