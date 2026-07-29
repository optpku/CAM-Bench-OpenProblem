from __future__ import annotations

import csv
import io
import json
import unittest

from scripts.fetch_open_problems_in_or import (
    INDEX_PATH,
    PROGRESS_PATH,
    ScrapeError,
    dataset_url,
    problem_data_url,
    scrape_problems,
    serialize_records,
)


BASE_URL = "https://example.test/open-problems"


class FetchOpenProblemsTests(unittest.TestCase):
    def test_filters_journal_and_merges_details_in_index_order(self) -> None:
        index = {
            "generated_at_utc": "2026-01-01T00:00:00Z",
            "problems": [
                {
                    "problem_id": "mor_1",
                    "path": "problems/mor_1.json",
                    "number": 7,
                    "title": "First",
                    "source_paper_journal": "Mathematics of Operations Research",
                    "is_open": True,
                },
                {
                    "problem_id": "other_1",
                    "path": "problems/other_1.json",
                    "number": 8,
                    "source_paper_journal": "Another Journal",
                    "is_open": True,
                },
                {
                    "problem_id": "mor_2",
                    "path": "problems/mor_2.json",
                    "number": 9,
                    "title": "Second",
                    "source_paper_journal": "Mathematics of Operations Research",
                    "is_open": True,
                },
            ],
        }
        progress = {
            "problems": {
                "mor_1": {
                    "solutions": [{"label": "Solution 1"}],
                    "partial_progress": [],
                }
            }
        }
        responses = {
            dataset_url(BASE_URL, INDEX_PATH): index,
            dataset_url(BASE_URL, PROGRESS_PATH): progress,
            problem_data_url(BASE_URL, "problems/mor_1.json"): {
                "problem_id": "mor_1",
                "title": "First",
                "problem_definition_latex": "Show A.",
            },
            problem_data_url(BASE_URL, "problems/mor_2.json"): {
                "problem_id": "mor_2",
                "title": "Second",
                "problem_definition_latex": "Show B.",
            },
        }

        records, returned_index = scrape_problems(
            base_url=BASE_URL,
            journal="Mathematics of Operations Research",
            workers=2,
            fetcher=responses.__getitem__,
        )

        self.assertIs(returned_index, index)
        self.assertEqual(
            [record["problem_id"] for record in records],
            ["mor_1", "mor_2"],
        )
        self.assertEqual(records[0]["number"], 7)
        self.assertEqual(
            records[0]["solution_progress"]["solutions"],
            [{"label": "Solution 1"}],
        )
        self.assertEqual(
            records[1]["solution_progress"],
            {"solutions": [], "partial_progress": []},
        )

    def test_rejects_paths_outside_the_site_root(self) -> None:
        with self.assertRaisesRegex(ScrapeError, "unsafe dataset path"):
            dataset_url(BASE_URL, "https://attacker.test/problems.json")
        with self.assertRaisesRegex(ScrapeError, "unsafe dataset path"):
            dataset_url(BASE_URL, "../../problems.json")
        with self.assertRaisesRegex(ScrapeError, "unsafe problem data path"):
            problem_data_url(BASE_URL, "../../../problems.json")

    def test_serializes_json_and_csv(self) -> None:
        records = [
            {
                "problem_id": "p1",
                "title": "A problem",
                "keywords": ["matching", "online"],
                "source_paper_authors": ["Ada", "Emmy"],
                "literature_review": {"synthesis": "Still open."},
                "solution_progress": {
                    "solutions": [],
                    "partial_progress": [{"label": "Attempt"}],
                },
            }
        ]
        json_payload = json.loads(
            serialize_records(
                records,
                output_format="json",
                metadata={"journal": "MOR"},
            )
        )
        self.assertEqual(json_payload["count"], 1)

        csv_rows = list(
            csv.DictReader(
                io.StringIO(
                    serialize_records(records, output_format="csv", metadata={})
                )
            )
        )
        self.assertEqual(csv_rows[0]["keywords"], "matching; online")
        self.assertEqual(csv_rows[0]["partial_progress_count"], "1")


if __name__ == "__main__":
    unittest.main()
