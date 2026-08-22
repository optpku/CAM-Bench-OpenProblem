# Open Problems in Mathematics

This is an open problems project. It collects mathematical open problems and organizes them into a browseable set of thematic parts and problem files. The repository currently contains 162 problem write-ups.

The main entry point is the project overview:

**[Open Problems Index](open_problems_index.md)**

## Browser catalog

The `site/` directory contains a static browser for all 162 entries. It supports
search, responsive detail views, and switching between clarity, research area,
problem type, source status, statement conciseness, and literature-visibility
proxy groupings.

Each problem has its Markdown write-up and companion JSON in the same
problem-specific directory under `open_problems/`. The browser loads the
small `site/catalog.json` index first and fetches a problem's JSON only when
that problem is selected. To rebuild these files after editing or adding
problem files:

```bash
python3 site/build_catalog.py
python3 -m http.server 8000
```

Then open <http://localhost:8000/site/>. Serving from the repository root
keeps both `site/catalog.json` and the per-problem files under
`open_problems/` available to the browser. The clarity rubric is documented in
[`site/classification_methodology.md`](site/classification_methodology.md). It
is a transparent text heuristic, separate from the repository's “unverified”
source status, and should not be read as a mathematical correctness judgment.

For one-command startup, run `python3 run_site.py`. It rebuilds the catalog,
chooses a free local port, serves the repository root, and opens the browser at
the correct `/site/` URL. Use `python3 run_site.py --no-browser` when working
on a headless machine.

The browser opens directly to the problem browser. Detail views include a
clickable section outline, copy-link action, and random-problem action.

The left-side “浏览内容” selector also includes a curated library of 22
named conjectures and famous open problems, with domain, status, statement,
relevance to this collection, and external references.
These records are kept separately in `site/named_conjectures.json` and are not counted among
the 162 imported open-problem records.

Statement conciseness uses a corpus-relative complexity score based on
character length, sentence count, formula count, and connective structure;
the 162 statements are split at the 33rd and 67th percentiles into concise,
medium, and complex groups. The score and its basis are shown in each detail
record.

The index is the project overview. It records the table of contents, problem links, problem anchors, and for each problem its contributor, open-problem labels, and brief summary.

## Repository Layout

```text
open_problems/
  part_01_geometry/
    01_antipodal_segments_and_simplices/
      problem.md
      problem.json
    02_points_in_o_symmetric_convex_body/
      problem.md
      problem.json
  part_02_continuous_optimization/
    10_composite_l0_l1_smooth_optimization/
      problem.md
      problem.json
  part_03_combinatorics/
    19_semidefinite_graph_parameters/
      problem.md
      problem.json
  part_04_computational_mathematics/
    21_gaussian_elimination_column_pivoting_error_bounds/
      problem.md
      problem.json
  part_05_decision_making_and_games/
    24_howards_policy_iteration_complexity_deterministic_mdps/
      problem.md
      problem.json
  part_06_distributed_optimization/
    29_single_loop_time_varying_row_stochastic_optimization/
      problem.md
      problem.json
  part_07_discrete_optimization_and_algorithms/
    ...
  part_08_markets_mechanism_design_and_online_algorithms/
    ...
  part_09_stochastic_models_and_applied_probability/
    ...
```

Problems 31--162 follow the same per-problem-directory structure and are placed
in the most relevant thematic part. Each directory contains the Markdown
write-up and its generated JSON record. They were imported from the
[Open Problems in Operations Research](https://pranav-nuti.github.io/open-problems-in-or/)
collection, restricted to source papers in *Mathematics of Operations
Research*. The upstream records are marked as not independently verified as
still open; every imported write-up preserves that warning and links to its
source record.

## Thematic Parts

* **Part 01: Geometry** covers convex-body structure, geometric covering, extremal volume, discrete covering, polyhedral volume, simplices, and triangulations.
* **Part 02: Continuous Optimization** covers centralized first-order complexity, stepsize schedules, monotone operator theory, smooth and nonsmooth quasi-Newton methods, constrained optimization, and neural-network or LLM optimization questions.
* **Part 03: Combinatorics** covers static graph parameters, Euclidean and Gram representations, semidefinite matrix methods, colored convexity, and Tverberg-type combinatorics.
* **Part 04: Computational Mathematics** covers floating-point error analysis, pivoting stability, convex polynomial optimization, semialgebraic certificates, and structured polynomial subproblems from high-order tensor methods.
* **Part 05: Decision-Making and Games** covers algorithmic complexity questions for discounted MDPs and Markov game processes, where decisions affect future states.
* **Part 06: Distributed Optimization** covers optimization algorithms whose central difficulty is communication, mixing, consensus, or gradient tracking over static or time-varying networks.
* **Part 07: Discrete Optimization and Algorithms** covers integer programming, matching, matroid algorithms, scheduling, routing, polyhedra, and approximation algorithms.
* **Part 08: Markets, Mechanism Design, and Online Algorithms** covers fair division, matching markets, auctions, prophet inequalities, secretary problems, online allocation, and social choice.
* **Part 09: Stochastic Models and Applied Probability** covers stochastic approximation, optimal transport, queueing, diffusions, risk measures, large deviations, and optimal stopping.

## Write-Up Structure

Each problem write-up uses the following sections when applicable:

1. **Problem Background**  
   Motivation, historical context, and the place of the problem in the broader literature.

2. **Definitions and Conventions**  
   Precise definitions of non-standard terms appearing in the problem statement, with source citations where appropriate.

3. **Open Problems**  
   The explicit open question, problem, or conjecture, stated as precisely as possible.

4. **Known Results**  
   Theorems and partial results directly relevant to the open problem, including special cases, related bounds, or equivalent reformulations.

5. **References**  
   Full bibliographic entries for works cited in the write-up.
