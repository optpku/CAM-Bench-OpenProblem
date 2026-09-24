# Clarity scoring methodology

Clarity is a reproducible text heuristic, not a human review or a model-based mathematical assessment. It does not measure correctness, difficulty, importance, or whether a problem remains open. Source verification is separate: 132 imported entries are unverified; 30 entries are curated write-ups.

## Components and levels

| Component | Maximum | Text signals |
| --- | ---: | --- |
| Problem statement | 25 | An extracted problem section and an explicit task or question |
| Objects and assumptions | 20 | Words such as let, assume, given, and define; formula markers |
| Goals and criteria | 25 | Task verbs, equality/inequality notation, complexity notation, and formulas |
| Scope and boundaries | 15 | Quantifiers, dimensions, regularity, finiteness, and asymptotic conditions |
| Focus | 15 | Penalties for multiple subquestions and broad wording |

- **L4, 82–100: Precisely formulated**
- **L3, 67–81: Clearly stated**
- **L2, 50–66: Defined direction**
- **L1, 0–49: Exploratory**

These are heuristic labels; they do not certify complete assumptions or a sound mathematical formulation. Each problem's detail view shows its component scores and additional penalty reasons.

## Exact implementation

See `section()` and `clarity()` in `build_catalog.py`. Extraction starts after the first matching Open Problem(s) or Technical Objectives heading and ends at the **next Markdown heading**, regardless of heading level. It does not automatically include nested subsections or assumptions elsewhere in the document.

The implementation primarily uses English keyword regular expressions and formula-marker counts:

- **Statement:** 25 when both extracted text and an explicit task signal exist; 17 for extracted text alone; otherwise 8.
- **Objects and assumptions:** base 8 with extracted text, otherwise 3; add 2 per object/assumption signal and 6 if at least 3 formula markers are detected. Added points are capped at 12; total at 20.
- **Goals and criteria:** base 7 with an explicit task signal, otherwise 3; add 2 per goal signal and 8 if at least 2 formula markers are detected. Added points are capped at 18; total at 25.
- **Scope:** base 5 with extracted text, otherwise 3; add 1 per scope signal, capped at 10 additional points and 15 total.
- **Focus:** start at 15; subtract 3 for each subquestion after the first and 2 per broad-wording match; minimum 3. Subquestions are counted using numbered “Question” labels, falling back to question marks if none are found.

The thresholds 50, 67, and 82 are implementation choices, not calibrated against a human-rated dataset. Keyword repetition, mathematical markup, and heading structure affect scores. Small score differences should not be interpreted as reliable quality differences. Switching the interface language does not recompute scores.

## Other grouping dimensions

**Statement conciseness** uses the displayed statement's non-whitespace length (55%), sentence count (20%), formula count (15%), and connective structure (10%). The resulting 0–100 complexity scores are split using this collection's 33rd and 67th percentiles into concise, moderate, and complex groups. This is a relative text-structure measure, not mathematical difficulty.

**Literature visibility** uses available source-paper metadata, authors, keywords, known results, reference counts, and DOI/URL occurrences. It is a metadata proxy; no citation-count or external-impact data is available. High/medium/low visibility does not measure fame or research quality.
