# Open Problems in Mathematics

This is an open problems project. It collects mathematical open problems and organizes them into a browseable set of thematic parts and problem files.

The main entry point is the project overview:

**[Open Problems Index](open_problems_index.md)**

The index is the project overview. It records the table of contents, problem links, problem anchors, and for each problem its contributor, open-problem labels, and brief summary.

An additional machine-readable collection is available here:

**[Mathematics of Operations Research import](datasets/open_problems_in_or/README.md)**

This imported snapshot contains 132 records from the Open Problems in
Operations Research website. It is intentionally separate from the
hand-curated problem write-ups below because the upstream entries are marked
as not independently verified as still open.

## Repository Layout

```text
open_problems/
  part_01_geometry/
    01_antipodal_segments_and_simplices.md
    02_points_in_o_symmetric_convex_body.md
    03_faces_of_compact_convex_set.md
    04_planks_covering_unit_ball.md
    05_extremal_simplex_intersection_spherical_hyperbolic.md
    06_covering_unit_cube_by_smaller_cubes.md
    07_boolean_quadric_polytope_volume.md
    08_triangulations_perturbed_grid_squares.md
    09_incenter_euler_line_simplex.md
  part_02_continuous_optimization/
    10_composite_l0_l1_smooth_optimization.md
    11_silver_stepsize_optimality_conjecture.md
    12_rockafellar_sum_problem.md
    13_dfp_quasi_newton_convergence.md
    14_neural_network_and_llm_optimization.md
    15_nonsmooth_bfgs_armijo_wolfe.md
    16_optimality_explicit_superlinear_quasi_newton_rates.md
    17_standard_lbfgs_worst_case_complexity.md
    18_constant_penalty_alm_nonlinear_nonconvex_constraints.md
  part_03_combinatorics/
    19_semidefinite_graph_parameters.md
    20_colored_convexity_tverberg_type_problems.md
  part_04_computational_mathematics/
    21_gaussian_elimination_column_pivoting_error_bounds.md
    22_convex_polynomial_and_semialgebraic_optimization.md
    23_global_solution_arp_polynomial_subproblems.md
  part_05_decision_making_and_games/
    24_howards_policy_iteration_complexity_deterministic_mdps.md
    25_strategy_iteration_complexity_turn_based_games.md
    26_interior_point_discounted_mgps_log_discount.md
    27_strongly_polynomial_general_discounted_mdps.md
    28_polynomial_algorithm_discounted_mdps_variable_discount.md
  part_06_distributed_optimization/
    29_single_loop_time_varying_row_stochastic_optimization.md
    30_linear_speedup_stochastic_push_pull_time_varying_digraphs.md
datasets/
  open_problems_in_or/
    README.md
    mathematics_of_operations_research.jsonl
    mathematics_of_operations_research_index.md
    snapshot.json
scripts/
  fetch_open_problems_in_or.py
  build_open_problems_in_or_index.py
tests/
  test_fetch_open_problems_in_or.py
  test_build_open_problems_in_or_index.py
  test_open_problems_in_or_snapshot.py
```

## Thematic Parts

* **Part 01: Geometry** covers convex-body structure, geometric covering, extremal volume, discrete covering, polyhedral volume, simplices, and triangulations.
* **Part 02: Continuous Optimization** covers centralized first-order complexity, stepsize schedules, monotone operator theory, smooth and nonsmooth quasi-Newton methods, constrained optimization, and neural-network or LLM optimization questions.
* **Part 03: Combinatorics** covers static graph parameters, Euclidean and Gram representations, semidefinite matrix methods, colored convexity, and Tverberg-type combinatorics.
* **Part 04: Computational Mathematics** covers floating-point error analysis, pivoting stability, convex polynomial optimization, semialgebraic certificates, and structured polynomial subproblems from high-order tensor methods.
* **Part 05: Decision-Making and Games** covers algorithmic complexity questions for discounted MDPs and Markov game processes, where decisions affect future states.
* **Part 06: Distributed Optimization** covers optimization algorithms whose central difficulty is communication, mixing, consensus, or gradient tracking over static or time-varying networks.

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

## Imported Data

The [Open Problems in Operations Research
import](datasets/open_problems_in_or/README.md) provides complete JSONL records
and a [browsable generated
catalog](datasets/open_problems_in_or/mathematics_of_operations_research_index.md).
The snapshot records its upstream revision, extraction timestamp, record count,
and checksum in
[`snapshot.json`](datasets/open_problems_in_or/snapshot.json).

To validate the import tooling:

```bash
python3 -m unittest discover -s tests -v
python3 scripts/build_open_problems_in_or_index.py
```
