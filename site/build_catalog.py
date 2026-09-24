#!/usr/bin/env python3
"""Build the browser catalog from the repository's Markdown problem files.

The classification is deliberately heuristic and transparent: the generated
record contains the component scores and reasons so that a reader can audit
why an item landed in a clarity tier.
"""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROBLEMS = ROOT / "open_problems"
SITE = Path(__file__).resolve().parent
CATALOG_OUT = SITE / "catalog.json"

def load_taxonomy() -> dict[int, dict]:
    """Read the editorial categories and their stable problem IDs."""
    parts = json.loads((SITE / "taxonomy.json").read_text(encoding="utf-8"))["parts"]
    assignments = {}
    keys = set()
    for part in parts:
        if part["key"] in keys:
            raise ValueError(f"Duplicate taxonomy key: {part['key']}")
        keys.add(part["key"])
        for pid in part["problemIds"]:
            if pid in assignments:
                raise ValueError(f"Problem {pid} has multiple primary parts")
            assignments[pid] = part
    return assignments


TAXONOMY = load_taxonomy()


def clean_inline(value: str) -> str:
    value = re.sub(r"!\[([^]]*)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"\[([^]]+)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"[*_`~]", "", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def section(text: str, names: tuple[str, ...]) -> str:
    matches = list(re.finditer(r"^(#{1,6})\s+(.+?)\s*$", text, re.M))
    for index, match in enumerate(matches):
        heading = clean_inline(match.group(2)).lower()
        if any(name in heading for name in names):
            end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
            return text[match.end() : end].strip()
    return ""


def first_paragraph(text: str) -> str:
    for block in re.split(r"\n\s*\n", text):
        candidate = block.strip()
        if not candidate or candidate.startswith(("#", "-", "*", ">", "```")):
            continue
        candidate = clean_inline(candidate)
        if len(candidate) > 35:
            return candidate
    return clean_inline(text)[:300]


def problem_type(title: str, statement: str) -> tuple[str, list[str]]:
    haystack = f"{title} {statement}".lower()
    rules = [
        ("characterization", "刻画 / 等价条件", r"characteri[sz]|equivalence|classif"),
        ("existence", "存在性 / 唯一性", r"existence|existence of|uniqueness|unique|solvab"),
        ("complexity", "复杂度 / 可计算性", r"complexity|np-hard|polynomial time|running time|decidability|tractab"),
        ("convergence", "收敛 / 稳定性", r"convergence|converge|stability|stable|decay|rate"),
        ("bound", "界 / 近似 / 最优常数", r"bound|lower bound|upper bound|approximation|constant|tight|optimal"),
        ("algorithm", "算法 / 机制设计", r"design|algorithm|method|scheme|policy|mechanism|construct"),
        ("proof", "证明或反例", r"prove|proof|show|establish|verify|derive|disprove|counterexample"),
        ("optimization", "优化模型 / 算子", r"optimization|optimisation|gradient|subgradient|proximal|operator"),
    ]
    tags = [label for _, label, pattern in rules if re.search(pattern, haystack)]
    for key, _, pattern in rules:
        if re.search(pattern, haystack):
            return key, tags[:4]
    return "other", ["开放式研究问题"]


def clarity(title: str, text: str, statement: str) -> dict:
    # Components reward a self-contained question and penalize broad, multi-part prompts.
    has_statement = bool(statement)
    question_count = len(re.findall(r"\bQuestion\s+\d+(?:\.\d+)*", statement, re.I))
    if not question_count:
        question_count = len(re.findall(r"\?", statement))
    formula_count = len(re.findall(r"\$[^$]+\$|\\\(|\\\[|\\begin\{", statement))
    explicit = bool(re.search(
        r"\?|determine whether|is it|can one|does there|prove|show|establish|characterize|construct|compute|derive|bound|design|determine|extend|remove|achieve",
        statement,
        re.I,
    ))
    object_signals = len(re.findall(
        r"\b(let|assume|suppose|given|for every|for all|where|denote|define|consider)\b|\b[A-Z][A-Za-z]+(?:\s+[A-Za-z]+){0,2}\s+is\b",
        statement,
        re.I,
    ))
    target_signals = len(re.findall(
        r"\b(prove|show|determine|characterize|compute|construct|design|establish|derive|bound|exist|unique|converge|decide|classify|remove|achieve|extend)\b|=|leq|\\\\le|\\\\Theta|O\(",
        statement,
        re.I,
    ))
    scope_signals = len(re.findall(
        r"\b(for every|for all|there exists|any|finite|countable|bounded|compact|convex|smooth|measurable|independent|asymptotic|dimension|\w+-player|\w+-dimensional)\b|\bepsilon\b|\bn\s*[=<>]|\bT\s*[=<>]",
        statement,
        re.I,
    ))
    broad = len(re.findall(r"\b(general|broad|various|analogous|related|future|open-ended|and/or|or whether|in general)\b", statement, re.I))

    components = {
        "问题陈述": 25 if has_statement and explicit else (17 if has_statement else 8),
        "对象与假设": min(20, (8 if has_statement else 3) + min(12, object_signals * 2 + (6 if formula_count >= 3 else 0))),
        "目标与判据": min(25, (7 if explicit else 3) + min(18, target_signals * 2 + (8 if formula_count >= 2 else 0))),
        "范围与边界": min(15, (3 if not has_statement else 5) + min(10, scope_signals)),
        "单一性": max(3, 15 - max(0, question_count - 1) * 3 - broad * 2),
    }
    score = sum(components.values())
    if score >= 82:
        level = "L4"
        label = "精确定式"
        description = "对象、假设与可判定目标基本齐全，可直接转化为研究任务。"
    elif score >= 67:
        level = "L3"
        label = "清晰可研究"
        description = "核心问题明确，但仍有少量边界、术语或最优性条件需要补齐。"
    elif score >= 50:
        level = "L2"
        label = "方向明确"
        description = "研究方向和目标可辨认，完整形式化前仍需补充关键条件。"
    else:
        level = "L1"
        label = "探索性议题"
        description = "更像研究议程或宽泛问题，尚不能仅凭当前文本判定唯一任务。"
    reasons = [
        f"问题陈述 {components['问题陈述']}/25",
        f"对象与假设 {components['对象与假设']}/20",
        f"目标与判据 {components['目标与判据']}/25",
        f"范围与边界 {components['范围与边界']}/15",
        f"单一性 {components['单一性']}/15",
    ]
    if question_count > 1:
        reasons.append(f"检测到 {question_count} 个子问题，按多目标议题扣分")
    if broad:
        reasons.append("出现宽泛或并列扩展措辞，需人工确认边界")
    return {"score": score, "level": level, "label": label, "description": description, "components": components, "reasons": reasons}


def statement_profile(statement: str, text: str, has_source: bool, has_authors: bool, keywords: str) -> dict:
    """Return transparent, text-derived grouping signals for the statement.

    Familiarity is deliberately named a proxy: this dataset does not contain
    citation counts, so the score uses only visible bibliographic signals.
    """
    normalized = clean_inline(statement)
    length = len(re.sub(r"\s+", "", normalized))
    sentences = max(1, len(re.findall(r"[.!?。！？]", normalized))) if normalized else 0
    formulas = len(re.findall(r"\$[^$]+\$|\\\(|\\\[|\\begin\{", statement))
    connectors = len(re.findall(
        r"\b(and|or|where|given|such that|in particular|however|whether)\b|以及|并且|其中|若|特别是",
        normalized,
        re.I,
    ))
    # Higher scores mean a structurally more complex statement. Categories are
    # assigned against this dataset's own score distribution below.
    complexity_score = round(min(100, (
        min(length / 420, 1) * 55
        + min(sentences / 6, 1) * 20
        + min(formulas / 10, 1) * 15
        + min(connectors / 4, 1) * 10
    )))

    known_results = section(text, ("known results",))
    references = section(text, ("references",))
    reference_count = len(re.findall(r"^\s*\d+\.\s+", references, re.M))
    citation_links = len(re.findall(r"(?:doi\.org|arxiv|https?://)", references, re.I))
    familiarity_score = (
        (2 if has_source else 0)
        + (1 if has_authors else 0)
        + (1 if keywords else 0)
        + min(4, reference_count // 2)
        + min(3, citation_links)
        + (1 if known_results else 0)
    )
    if familiarity_score >= 9:
        familiarity, familiarity_label = "high", "高文献可见度"
    elif familiarity_score >= 6:
        familiarity, familiarity_label = "medium", "中文献可见度"
    else:
        familiarity, familiarity_label = "low", "低文献可见度"
    return {
        "statementLength": length,
        "statementSentences": sentences,
        "statementFormulas": formulas,
        "statementComplexityScore": complexity_score,
        "statementConnectors": connectors,
        "concisenessBasis": f"长度 {length}、句子 {sentences}、公式 {formulas}、连接结构 {connectors}",
        "familiarity": familiarity,
        "familiarityLabel": familiarity_label,
        "familiarityScore": familiarity_score,
        "familiarityBasis": f"来源元数据、参考文献 {reference_count} 条、链接/DOI {citation_links} 个",
    }


def assign_conciseness(records: list[dict]) -> None:
    """Use empirical tertiles so labels compare fairly across this corpus."""
    scores = sorted(record["statementComplexityScore"] for record in records)
    first_cut = scores[max(0, int(len(scores) * 0.33) - 1)]
    second_cut = scores[max(0, int(len(scores) * 0.67) - 1)]
    for record in records:
        score = record["statementComplexityScore"]
        if score <= first_cut:
            record["conciseness"], record["concisenessLabel"] = "short", "简洁"
        elif score <= second_cut:
            record["conciseness"], record["concisenessLabel"] = "medium", "适中"
        else:
            record["conciseness"], record["concisenessLabel"] = "long", "复杂"
        record["concisenessBasis"] += f"；本批次复杂度分位点 {first_cut}/{second_cut}"


def parse(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    title_match = re.search(r"^#\s+(.+?)\s*$", text, re.M)
    title = clean_inline(title_match.group(1)) if title_match else path.stem
    statement = section(text, ("open problem", "open problems", "technical objectives"))
    background = section(text, ("problem background",))
    source_match = re.search(r"\*\*Source paper:\*\*\s*(.+)", text)
    authors_match = re.search(r"Source paper authors:\s*(.+)", text)
    keyword_match = re.search(r"\*\*Keywords:\*\s*`?([^\n]+)", text)
    verification = "待核验" if "Verification status:** Unverified" in text else "专题整理"
    number_match = re.match(r"(\d+)_", path.parent.name)
    pid = int(number_match.group(1)) if number_match else 0
    category = TAXONOMY[pid]
    if path.parent.parent.name != category["key"]:
        raise ValueError(f"Problem {pid} directory does not match its taxonomy part")
    clarity_info = clarity(title, text, statement)
    ptype, tags = problem_type(title, statement)
    display_statement = first_paragraph(statement)
    profile = statement_profile(display_statement, text, bool(source_match), bool(authors_match), keyword_match.group(1) if keyword_match else "")
    json_file = str(path.with_name("problem.json").relative_to(ROOT)).replace("\\", "/")
    return {
        "id": pid,
        "title": title,
        "part": category["label"],
        "partKey": category["key"],
        "file": str(path.relative_to(ROOT)).replace("\\", "/"),
        "jsonFile": json_file,
        "authors": clean_inline(authors_match.group(1)) if authors_match else "",
        "source": clean_inline(source_match.group(1)) if source_match else "",
        "keywords": clean_inline(keyword_match.group(1)) if keyword_match else "",
        "verification": verification,
        "type": ptype,
        "typeLabel": dict((k, label) for k, label, _ in [
            ("characterization", "刻画 / 等价条件", ""), ("existence", "存在性 / 唯一性", ""),
            ("complexity", "复杂度 / 可计算性", ""), ("convergence", "收敛 / 稳定性", ""),
            ("bound", "界 / 近似 / 最优常数", ""), ("algorithm", "算法 / 机制设计", ""),
            ("proof", "证明或反例", ""), ("optimization", "优化模型 / 算子", ""),
        ]).get(ptype, "开放式研究问题"),
        "typeTags": tags,
        "clarity": clarity_info,
        "summary": first_paragraph(background or statement),
        "statement": display_statement,
        **profile,
        "content": text,
    }


def main() -> None:
    paths = sorted(PROBLEMS.rglob("problem.md"), key=lambda p: int(p.parent.name.split("_", 1)[0]))
    records = [parse(p) for p in paths]
    assert [r["id"] for r in records] == list(range(1, 163)), "problem IDs must be exactly 1..162"
    if set(TAXONOMY) != {r["id"] for r in records}:
        raise ValueError("Taxonomy assignments must match the problem collection exactly")
    assign_conciseness(records)
    for path, record in zip(paths, records):
        path.with_name("problem.json").write_text(
            json.dumps(record, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

    # The browser only needs metadata to build the list. Full Markdown content
    # stays in each problem's companion JSON and is fetched on demand.
    catalog = [{key: value for key, value in record.items() if key != "content"} for record in records]
    CATALOG_OUT.write_text(
        json.dumps(catalog, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"wrote {len(records)} problem JSON files and catalog to {CATALOG_OUT}")


if __name__ == "__main__":
    main()
