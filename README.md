# Open Problems in Mathematics

This project collects open problems in mathematics, with an emphasis on optimization, numerical computation, and operations research. The current collection contains **162 problems across 10 thematic parts**, with problem statements, background, known results, and references.

Start with the **[Open Problems Index](open_problems_index.md)** for the complete list of problems and summaries.

## The Collection

Each problem has a directory under [`open_problems/`](open_problems/), containing a Markdown write-up (`problem.md`) and a companion JSON record (`problem.json`). Some write-ups contain multiple related questions.

The repository also includes a [browser catalog](site/) with Chinese/English interface switching, search, filtering, and per-problem clarity score breakdowns.

## Thematic Parts

The collection is organized into ten research areas.

| Part | Topic | Entries | Scope |
| --- | --- | ---: | --- |
| [01](open_problems/part_01_geometry_and_convex_geometry/) | Geometry and Convex Geometry | 11 | Convex bodies, geometric inequalities, coverings, simplices, triangulations, and discrete geometry. |
| [02](open_problems/part_02_combinatorics_and_graph_theory/) | Combinatorics and Graph Theory | 5 | Graph parameters, extremal and spectral graph theory, combinatorial convexity, and random discrete structures. |
| [03](open_problems/part_03_continuous_optimization_and_variational_analysis/) | Continuous Optimization and Variational Analysis | 38 | First-order and quasi-Newton methods, constrained and polynomial optimization, variational analysis, monotone operators, and stochastic and distributed optimization. |
| [04](open_problems/part_04_discrete_and_combinatorial_optimization/) | Discrete and Combinatorial Optimization | 17 | Integer programming, polyhedra, matching, matroids, scheduling, routing, and approximation algorithms. |
| [05](open_problems/part_05_numerical_analysis_and_algebraic_computation/) | Numerical Analysis and Algebraic Computation | 7 | Numerical linear algebra, rounding error and stability, structured matrix computation, and polynomial and semialgebraic computation. |
| [06](open_problems/part_06_probability_and_stochastic_models/) | Probability and Stochastic Models | 14 | Limit theorems, stochastic processes, diffusions, queueing, risk measures, and stochastic coupling and transport. |
| [07](open_problems/part_07_optimal_control_and_sequential_decision_making/) | Optimal Control and Sequential Decision-Making | 16 | MDPs, dynamic programming, stochastic and robust control, optimal stopping, policy iteration, and learning in controlled systems. |
| [08](open_problems/part_08_game_theory_and_mathematical_economics/) | Game Theory and Mathematical Economics | 38 | Equilibria, static and dynamic games, markets, auctions, mechanism design, fair division, and social choice. |
| [09](open_problems/part_09_online_algorithms_and_online_learning/) | Online Algorithms and Online Learning | 11 | Online selection and allocation, prophet inequalities, secretary problems, competitive analysis, and regret bounds. |
| [10](open_problems/part_10_statistical_learning_and_inference/) | Statistical Learning and Inference | 5 | Statistical estimation, generalization, structured recovery, and guarantees for generative models and sampling. |

The problem directories, thematic index, and browser follow the same ten-part classification. Problem IDs are preserved.

## Problem Write-Ups

Each write-up includes the following information where applicable:

- **Background:** motivation and context in the literature.
- **Definitions and conventions:** notation, assumptions, and terminology.
- **Open problems:** the questions or conjectures under consideration.
- **Known results:** relevant theorems, partial results, and special cases.
- **References:** source papers and related literature.

## Sources and Verification

Problems 31–162 were imported from the [Open Problems in Operations Research](https://pranav-nuti.github.io/open-problems-in-or/) collection, restricted to source papers in *Mathematics of Operations Research*. These entries retain their source attribution, upstream links, and **unverified** status: inclusion does not independently establish that a statement is correct or that the problem remains open.

Individual problem contributors and source-paper authors are credited in the index and write-ups. 

## Contributors

- Wentao Long, Department of Mathematics, Fudan University, China 
- Chenyi Li, School of Mathematical Sciences, Peking University, China 
- Zaiwen Wen, Beijing International Center for Mathematical Research, Peking University, China 

We welcome contributions of new problems, corrections, references, and updates on known results through issues and pull requests. Please include the original source and distinguish established results from conjectures or unverified claims.

