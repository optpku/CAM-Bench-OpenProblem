from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_open_problems_in_or_index import (
    CatalogError,
    load_records,
    render_catalog,
)


def sample_record(problem_id: str = "p1") -> dict[str, object]:
    return {
        "problem_id": problem_id,
        "number": 4,
        "title": "A | B",
        "area": "online matching",
        "problem_definition_latex": "Determine whether ...",
        "source_paper_journal": "Mathematics of Operations Research",
        "source_paper_title": "Paper title",
        "source_paper_publication_year": 2025,
        "source_paper_url": "https://doi.org/10.example/test",
        "website_url": "https://example.test/problem.html?id=p1",
        "data_url": "https://example.test/problems/p1.json",
        "unverified": True,
        "solution_progress": {
            "solutions": [],
            "partial_progress": [{"label": "Partial progress"}],
        },
    }


class BuildCatalogTests(unittest.TestCase):
    def test_loads_jsonl_and_rejects_duplicate_ids(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "problems.jsonl"
            record = sample_record()
            path.write_text(
                json.dumps(record) + "\n" + json.dumps(record) + "\n",
                encoding="utf-8",
            )
            with self.assertRaisesRegex(CatalogError, "duplicate ID p1"):
                load_records(path)

    def test_renders_grouped_catalog_and_escapes_table_cells(self) -> None:
        rendered = render_catalog([sample_record()])
        self.assertIn("## 2025 (1)", rendered)
        self.assertIn("[A \\| B]", rendered)
        self.assertIn("1 partial", rendered)
        self.assertIn("marked as unverified", rendered)


if __name__ == "__main__":
    unittest.main()
