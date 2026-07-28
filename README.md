# Open Problems in Mathematics

This is an open problems project. It collects mathematical open problems and organizes them into a browseable set of thematic parts and problem files.

The main entry point is the project overview:

**[Open Problems Index](open_problems_index.md)**

The index is the project overview. It records the table of contents, problem links, problem anchors, and for each problem its contributor, open-problem labels, and brief summary.

## Repository Layout

```text
open_problems/
  part_1_geometry/
    01_antipodal_segments_and_simplices.md
    02_points_in_o_symmetric_convex_body.md
    03_faces_of_compact_convex_set.md
    04_planks_covering_unit_ball.md
    05_extremal_simplex_intersection_spherical_hyperbolic.md
    06_covering_unit_cube_by_smaller_cubes.md
    07_boolean_quadric_polytope_volume.md
    08_triangulations_perturbed_grid_squares.md
    09_incenter_euler_line_simplex.md
  part_2_continuous_optimization/
    10_composite_l0_l1_smooth_optimization.md
    11_silver_stepsize_optimality_conjecture.md
    12_rockafellar_sum_problem.md
    13_dfp_quasi_newton_convergence.md
    14_neural_network_and_llm_optimization.md
    26_nonsmooth_bfgs_armijo_wolfe.md
    27_optimality_explicit_superlinear_quasi_newton_rates.md
    28_standard_lbfgs_worst_case_complexity.md
    30_constant_penalty_alm_nonlinear_nonconvex_constraints.md
  part_3_combinatorics/
    15_semidefinite_graph_parameters.md
    16_colored_convexity_tverberg_type_problems.md
  part_4_computational_mathematics/
    17_gaussian_elimination_column_pivoting_error_bounds.md
    18_convex_polynomial_and_semialgebraic_optimization.md
    29_global_solution_arp_polynomial_subproblems.md
  part_5_decision_making_and_games/
    19_howards_policy_iteration_complexity_deterministic_mdps.md
    20_strategy_iteration_complexity_turn_based_games.md
    21_interior_point_discounted_mgps_log_discount.md
    22_strongly_polynomial_general_discounted_mdps.md
    23_polynomial_algorithm_discounted_mdps_variable_discount.md
  part_6_distributed_optimization/
    24_single_loop_time_varying_row_stochastic_optimization.md
    25_linear_speedup_stochastic_push_pull_time_varying_digraphs.md
```

## Thematic Parts

* **Part 1: Geometry** covers convex-body structure, geometric covering, extremal volume, discrete covering, polyhedral volume, simplices, and triangulations.
* **Part 2: Continuous Optimization** covers centralized first-order complexity, stepsize schedules, monotone operator theory, smooth and nonsmooth quasi-Newton methods, constrained optimization, and neural-network or LLM optimization questions.
* **Part 3: Combinatorics** covers static graph parameters, Euclidean and Gram representations, semidefinite matrix methods, colored convexity, and Tverberg-type combinatorics.
* **Part 4: Computational Mathematics** covers floating-point error analysis, pivoting stability, convex polynomial optimization, semialgebraic certificates, and structured polynomial subproblems from high-order tensor methods.
* **Part 5: Decision-Making and Games** covers algorithmic complexity questions for discounted MDPs and Markov game processes, where decisions affect future states.
* **Part 6: Distributed Optimization** covers optimization algorithms whose central difficulty is communication, mixing, consensus, or gradient tracking over static or time-varying networks.

## Classification Principles

Each problem is assigned according to its main mathematical obstruction, rather than every technique appearing in it:

| Part | Primary organizing question | Boundary with nearby parts |
|---|---|---|
| 1. Geometry | Is the unknown object geometric, convex-body, polyhedral, or simplicial? | Graph-indexed matrix representations belong to Part 3. |
| 2. Continuous Optimization | Is the main issue convergence or oracle complexity of a centralized continuous optimization method or operator? | Communication-limited algorithms belong to Part 6; polynomial input structure belongs to Part 4. |
| 3. Combinatorics | Is the graph or colored combinatorial structure itself the object of study? | Graphs used only as communication networks belong to Part 6. |
| 4. Computational Mathematics | Is the main issue numerical stability or algebraic/polynomial input structure? | General continuous algorithmic convergence belongs to Part 2. |
| 5. Decision-Making and Games | Do actions change future states through an MDP or game process? | Multi-agent communication without state-transition control belongs to Part 6. |
| 6. Distributed Optimization | Is mixing, consensus, tracking, or distributed coordination the main obstruction? | Centralized stochastic optimization belongs to Part 2. |

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
