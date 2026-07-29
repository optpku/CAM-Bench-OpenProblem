from __future__ import annotations

import hashlib
import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATASET_DIR = ROOT / "datasets" / "open_problems_in_or"
JSONL_PATH = DATASET_DIR / "mathematics_of_operations_research.jsonl"
CATALOG_PATH = DATASET_DIR / "mathematics_of_operations_research_index.md"
SNAPSHOT_PATH = DATASET_DIR / "snapshot.json"


class OpenProblemsSnapshotTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.snapshot = json.loads(SNAPSHOT_PATH.read_text(encoding="utf-8"))
        cls.records = [
            json.loads(line)
            for line in JSONL_PATH.read_text(encoding="utf-8").splitlines()
            if line.strip()
        ]

    def test_snapshot_count_ids_and_journal(self) -> None:
        self.assertEqual(len(self.records), self.snapshot["record_count"])
        self.assertEqual(
            len({record["problem_id"] for record in self.records}),
            len(self.records),
        )
        self.assertEqual(
            {record["source_paper_journal"] for record in self.records},
            {self.snapshot["journal"]},
        )

    def test_snapshot_status_flags(self) -> None:
        self.assertTrue(all(record["is_open"] for record in self.records))
        self.assertTrue(all(record["unverified"] for record in self.records))
        self.assertTrue(
            all(record.get("problem_definition_latex") for record in self.records)
        )

    def test_snapshot_checksum(self) -> None:
        checksum = hashlib.sha256(JSONL_PATH.read_bytes()).hexdigest()
        self.assertEqual(checksum, self.snapshot["jsonl_sha256"])

    def test_catalog_contains_every_problem(self) -> None:
        catalog = CATALOG_PATH.read_text(encoding="utf-8")
        for record in self.records:
            self.assertIn(f"`{record['problem_id']}`", catalog)


if __name__ == "__main__":
    unittest.main()
