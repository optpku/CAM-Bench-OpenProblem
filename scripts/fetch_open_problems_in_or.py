#!/usr/bin/env python3
"""Download open-problem records published by Open Problems in OR.

The website is a static JavaScript application. Its list and detail pages read
JSON files under ``data/llm_math_export/``. This module consumes those files
directly, so it does not need a browser or HTML selectors.
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Iterable, Mapping, Sequence
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urljoin, urlparse
from urllib.request import Request, urlopen


DEFAULT_BASE_URL = "https://pranav-nuti.github.io/open-problems-in-or"
DEFAULT_JOURNAL = "Mathematics of Operations Research"
INDEX_PATH = "data/llm_math_export/index.json"
PROGRESS_PATH = "data/llm_math_export/solution_progress/index.json"
EXPORT_ROOT = "data/llm_math_export/"
USER_AGENT = "open-problems-in-or-scraper/1.0"

JsonObject = dict[str, Any]
FetchJson = Callable[[str], Any]

CSV_FIELDS = (
    "number",
    "problem_id",
    "title",
    "area",
    "keywords",
    "problem_definition_latex",
    "background_latex",
    "open_problem_quote",
    "context",
    "location_in_paper",
    "source_paper_title",
    "source_paper_authors",
    "source_paper_journal",
    "source_paper_publication_year",
    "source_paper_url",
    "counterexample_suitability",
    "alphaevolve_suitability",
    "is_open",
    "unverified",
    "literature_review_synthesis",
    "solution_count",
    "partial_progress_count",
    "website_url",
    "data_url",
)


class ScrapeError(RuntimeError):
    """Raised when the remote dataset is invalid or cannot be downloaded."""


def fetch_json(
    url: str,
    *,
    timeout: float = 30.0,
    retries: int = 3,
    retry_delay: float = 0.5,
) -> Any:
    """Fetch and decode JSON, retrying transient network and server errors."""

    last_error: Exception | None = None
    for attempt in range(retries + 1):
        request = Request(
            url,
            headers={
                "Accept": "application/json",
                "User-Agent": USER_AGENT,
            },
        )
        try:
            with urlopen(request, timeout=timeout) as response:
                charset = response.headers.get_content_charset() or "utf-8"
                return json.loads(response.read().decode(charset))
        except HTTPError as exc:
            last_error = exc
            if exc.code not in {408, 425, 429, 500, 502, 503, 504}:
                break
        except (URLError, TimeoutError, json.JSONDecodeError) as exc:
            last_error = exc

        if attempt < retries:
            time.sleep(retry_delay * (2**attempt))

    raise ScrapeError(f"failed to fetch JSON from {url}: {last_error}") from last_error


def dataset_url(base_url: str, relative_path: str) -> str:
    """Resolve a dataset path while preventing an index from changing origin."""

    normalized_base = base_url.rstrip("/") + "/"
    resolved = urljoin(normalized_base, relative_path)
    base_parts = urlparse(normalized_base)
    resolved_parts = urlparse(resolved)
    if (
        resolved_parts.scheme not in {"http", "https"}
        or resolved_parts.scheme != base_parts.scheme
        or resolved_parts.netloc != base_parts.netloc
        or not resolved_parts.path.startswith(base_parts.path)
    ):
        raise ScrapeError(f"unsafe dataset path: {relative_path!r}")
    return resolved


def problem_data_url(base_url: str, index_relative_path: str) -> str:
    """Resolve a problem path, which is relative to the export index file."""

    relative_path = urljoin(INDEX_PATH, index_relative_path)
    if not relative_path.startswith(EXPORT_ROOT):
        raise ScrapeError(f"unsafe problem data path: {index_relative_path!r}")
    return dataset_url(base_url, relative_path)


def select_problem_summaries(
    index_payload: Mapping[str, Any],
    *,
    journal: str,
    include_closed: bool = False,
    limit: int | None = None,
) -> list[JsonObject]:
    """Validate and filter the public index in website order."""

    problems = index_payload.get("problems")
    if not isinstance(problems, list):
        raise ScrapeError("invalid index: expected a 'problems' array")

    selected: list[JsonObject] = []
    for problem in problems:
        if not isinstance(problem, dict):
            raise ScrapeError("invalid index: every problem must be an object")
        if journal and problem.get("source_paper_journal") != journal:
            continue
        if not include_closed and problem.get("is_open") is False:
            continue
        if not isinstance(problem.get("problem_id"), str):
            raise ScrapeError("invalid index: problem is missing 'problem_id'")
        if not isinstance(problem.get("path"), str):
            raise ScrapeError(
                f"invalid index: problem {problem['problem_id']} is missing 'path'"
            )
        selected.append(problem.copy())
        if limit is not None and len(selected) >= limit:
            break
    return selected


def progress_rows(progress_payload: Mapping[str, Any]) -> Mapping[str, Any]:
    """Return the per-problem solution/progress mapping after validation."""

    problems = progress_payload.get("problems")
    if not isinstance(problems, dict):
        raise ScrapeError("invalid progress index: expected a 'problems' object")
    return problems


def enrich_problem(
    *,
    base_url: str,
    summary: Mapping[str, Any],
    detail: Mapping[str, Any],
    progress: Mapping[str, Any] | None,
) -> JsonObject:
    """Merge detail, index-only fields, progress metadata, and source URLs."""

    problem_id = str(summary["problem_id"])
    if detail.get("problem_id") != problem_id:
        raise ScrapeError(
            f"detail ID mismatch for {problem_id}: {detail.get('problem_id')!r}"
        )

    record = dict(detail)
    for key in (
        "number",
        "is_open",
        "has_literature_review",
        "unverified",
        "quantitative_bounds",
    ):
        if key in summary:
            record[key] = summary[key]

    progress_object = dict(progress) if isinstance(progress, dict) else {}
    progress_object.setdefault("solutions", [])
    progress_object.setdefault("partial_progress", [])
    record["solution_progress"] = progress_object

    detail_url = problem_data_url(base_url, str(summary["path"]))
    query = urlencode(
        {
            "id": problem_id,
            "n": summary.get("number", ""),
            "journal": summary.get("source_paper_journal", ""),
        }
    )
    record["website_url"] = f"{base_url.rstrip('/')}/problem.html?{query}"
    record["data_url"] = detail_url
    return record


def scrape_problems(
    *,
    base_url: str = DEFAULT_BASE_URL,
    journal: str = DEFAULT_JOURNAL,
    include_closed: bool = False,
    limit: int | None = None,
    workers: int = 8,
    fetcher: FetchJson = fetch_json,
) -> tuple[list[JsonObject], Mapping[str, Any]]:
    """Download index, detail, and progress data for one journal."""

    index_url = dataset_url(base_url, INDEX_PATH)
    progress_url = dataset_url(base_url, PROGRESS_PATH)
    index_payload = fetcher(index_url)
    progress_payload = fetcher(progress_url)
    if not isinstance(index_payload, dict):
        raise ScrapeError("invalid index: top-level value must be an object")
    if not isinstance(progress_payload, dict):
        raise ScrapeError("invalid progress index: top-level value must be an object")

    summaries = select_problem_summaries(
        index_payload,
        journal=journal,
        include_closed=include_closed,
        limit=limit,
    )
    progress_by_problem = progress_rows(progress_payload)
    if not summaries:
        return [], index_payload

    results: list[JsonObject | None] = [None] * len(summaries)
    failures: list[str] = []

    def download(position: int, summary: Mapping[str, Any]) -> tuple[int, JsonObject]:
        problem_id = str(summary["problem_id"])
        detail_url = problem_data_url(base_url, str(summary["path"]))
        detail = fetcher(detail_url)
        if not isinstance(detail, dict):
            raise ScrapeError(f"invalid detail for {problem_id}: expected an object")
        return (
            position,
            enrich_problem(
                base_url=base_url,
                summary=summary,
                detail=detail,
                progress=progress_by_problem.get(problem_id),
            ),
        )

    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {
            executor.submit(download, position, summary): str(summary["problem_id"])
            for position, summary in enumerate(summaries)
        }
        for future in as_completed(futures):
            problem_id = futures[future]
            try:
                position, record = future.result()
                results[position] = record
            except Exception as exc:
                failures.append(f"{problem_id}: {exc}")

    if failures:
        failure_text = "\n".join(f"  - {failure}" for failure in sorted(failures))
        raise ScrapeError(
            f"failed to download {len(failures)} problem detail(s):\n{failure_text}"
        )
    return [record for record in results if record is not None], index_payload


def _as_csv_row(record: Mapping[str, Any]) -> JsonObject:
    literature_review = record.get("literature_review")
    progress = record.get("solution_progress")
    solutions = progress.get("solutions", []) if isinstance(progress, dict) else []
    partial = (
        progress.get("partial_progress", []) if isinstance(progress, dict) else []
    )
    row = {key: record.get(key, "") for key in CSV_FIELDS}
    row["keywords"] = "; ".join(map(str, record.get("keywords") or []))
    row["source_paper_authors"] = "; ".join(
        map(str, record.get("source_paper_authors") or [])
    )
    row["literature_review_synthesis"] = (
        literature_review.get("synthesis", "")
        if isinstance(literature_review, dict)
        else ""
    )
    row["solution_count"] = len(solutions) if isinstance(solutions, list) else 0
    row["partial_progress_count"] = len(partial) if isinstance(partial, list) else 0
    return row


def serialize_records(
    records: Sequence[Mapping[str, Any]],
    *,
    output_format: str,
    metadata: Mapping[str, Any],
) -> str:
    """Serialize records to JSON, JSON Lines, or CSV."""

    if output_format == "json":
        payload = dict(metadata)
        payload["count"] = len(records)
        payload["problems"] = list(records)
        return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    if output_format == "jsonl":
        return "".join(
            json.dumps(record, ensure_ascii=False) + "\n" for record in records
        )
    if output_format == "csv":
        output = io.StringIO(newline="")
        writer = csv.DictWriter(output, fieldnames=CSV_FIELDS)
        writer.writeheader()
        writer.writerows(_as_csv_row(record) for record in records)
        return output.getvalue()
    raise ValueError(f"unsupported output format: {output_format}")


def write_text_atomic(path: Path, content: str) -> None:
    """Write UTF-8 text atomically, creating the parent directory if needed."""

    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(f".{path.name}.{os.getpid()}.tmp")
    try:
        temporary.write_text(content, encoding="utf-8")
        os.replace(temporary, path)
    finally:
        if temporary.exists():
            temporary.unlink()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Download open-problem details from the Open Problems in Operations "
            "Research website's public JSON dataset."
        )
    )
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL)
    parser.add_argument(
        "--journal",
        default=DEFAULT_JOURNAL,
        help="exact journal name; pass an empty string to download all journals",
    )
    parser.add_argument(
        "--include-closed",
        action="store_true",
        help="include records explicitly marked is_open=false",
    )
    parser.add_argument(
        "--limit",
        type=int,
        help="download only the first N matching records (useful for a smoke test)",
    )
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--timeout", type=float, default=30.0)
    parser.add_argument("--retries", type=int, default=3)
    parser.add_argument(
        "--format",
        choices=("json", "jsonl", "csv"),
        default="jsonl",
        dest="output_format",
    )
    parser.add_argument(
        "--output",
        default=(
            "datasets/open_problems_in_or/"
            "mathematics_of_operations_research.jsonl"
        ),
        help="output path, or '-' for standard output",
    )
    return parser


def positive_int(value: int | None, name: str) -> None:
    if value is not None and value <= 0:
        raise ScrapeError(f"{name} must be greater than zero")


def main(argv: Iterable[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        positive_int(args.limit, "--limit")
        positive_int(args.workers, "--workers")
        if args.timeout <= 0:
            raise ScrapeError("--timeout must be greater than zero")
        if args.retries < 0:
            raise ScrapeError("--retries cannot be negative")

        def configured_fetcher(url: str) -> Any:
            return fetch_json(url, timeout=args.timeout, retries=args.retries)

        records, index_payload = scrape_problems(
            base_url=args.base_url,
            journal=args.journal,
            include_closed=args.include_closed,
            limit=args.limit,
            workers=args.workers,
            fetcher=configured_fetcher,
        )
        metadata = {
            "source": args.base_url,
            "source_index_generated_at_utc": index_payload.get("generated_at_utc"),
            "scraped_at_utc": datetime.now(timezone.utc).isoformat(),
            "journal": args.journal or None,
        }
        content = serialize_records(
            records,
            output_format=args.output_format,
            metadata=metadata,
        )
        if args.output == "-":
            sys.stdout.write(content)
        else:
            output_path = Path(args.output)
            write_text_atomic(output_path, content)
            print(
                f"Wrote {len(records)} problem(s) to {output_path}",
                file=sys.stderr,
            )
        return 0
    except (ScrapeError, OSError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
