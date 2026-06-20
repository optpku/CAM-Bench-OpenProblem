# Open Problems in Mathematics

This is an open problems project. It collects mathematical open problems and organizes them into a browseable set of thematic parts and chapter files.

The main entry point is the project overview:

**[Open Problems Index](open_problems_index.md)**

The index is the project overview. It records the table of contents, chapter links, problem anchors, and for each problem its contributor, open-problem labels, and brief summary.

## Repository Layout

```text
open_problems/
  part_1_convex_and_discrete_geometry/
    01_antipodal_segments_and_simplices.md
    02_points_in_o_symmetric_convex_body.md
    03_faces_of_compact_convex_set.md
    04_planks_covering_unit_ball.md
    05_extremal_simplex_intersection_spherical_hyperbolic.md
    06_covering_unit_cube_by_smaller_cubes.md
    07_boolean_quadric_polytope_volume.md
    08_triangulations_perturbed_grid_squares.md
    09_incenter_euler_line_simplex.md
  part_2_optimization_algorithms_and_variational_analysis/
    10_composite_l0_l1_smooth_optimization.md
    11_silver_stepsize_optimality_conjecture.md
    12_rockafellar_sum_problem.md
    13_dfp_quasi_newton_convergence.md
    14_neural_network_and_llm_optimization.md
  part_3_graphs_semidefinite_and_topological_combinatorics/
    15_semidefinite_graph_parameters.md
    16_colored_convexity_tverberg_type_problems.md
  part_4_numerical_linear_algebra_and_algebraic_optimization/
    17_gaussian_elimination_column_pivoting_error_bounds.md
    18_convex_polynomial_and_semialgebraic_optimization.md
  part_5_markov_decision_and_game_processes/
    19_howards_policy_iteration_complexity_deterministic_mdps.md
    20_strategy_iteration_complexity_turn_based_games.md
    21_interior_point_discounted_mgps_log_discount.md
    22_strongly_polynomial_general_discounted_mdps.md
    23_polynomial_algorithm_discounted_mdps_variable_discount.md
```

## Thematic Parts

* **Part 1: Convex, Discrete, and Polyhedral Geometry** covers convex-body structure, geometric covering, extremal volume, discrete covering, polyhedral volume, simplices, and triangulations.
* **Part 2: Optimization Algorithms and Variational Analysis** covers first-order complexity, stepsize schedules, monotone operator theory, quasi-Newton convergence, and neural-network or LLM optimization questions.
* **Part 3: Graphs, Semidefinite Geometry, and Topological Combinatorics** covers graph parameters, Euclidean and Gram representations, semidefinite matrix methods, colored convexity, and Tverberg-type combinatorics.
* **Part 4: Numerical Linear Algebra and Algebraic Optimization** covers floating-point error analysis, pivoting stability, convex polynomial optimization, and semialgebraic certificates.
* **Part 5: Markov Decision and Game Processes** covers algorithmic complexity questions for discounted MDPs and Markov game processes.

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
