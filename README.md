# Open Problems in Mathematics

## About This Project

This repository collects open problems in mathematics. The project is organized as a browseable set of domain parts and chapter files, following the same broad navigation idea as the Stacks Project table of contents: high-level parts group related areas, and each chapter contains one thematic cluster of open problems.

The full browse page is:

**[Open Problems Index](open_problems_index.md)**

## Organization

```text
open_problems/
  part_1_convex_and_discrete_geometry/
    01_convex_geometry_support_faces_distance.md
    02_convex_covering_and_extremal_volume.md
    03_discrete_covering_and_polyhedral_volume.md
    04_simplicial_and_triangulation_geometry.md
  part_2_optimization_and_variational_analysis/
    05_first_order_convex_optimization_complexity.md
    06_monotone_operator_theory.md
  part_3_graphs_and_semidefinite_geometry/
    07_semidefinite_graph_parameters.md
  part_4_topological_and_combinatorial_convexity/
    08_colored_convexity_tverberg_type_problems.md
```

## Parts

* **Part 1: Convex, Discrete, and Polyhedral Geometry** covers convex-body structure, geometric covering, extremal volume, discrete covering, polyhedral volume, simplices, and triangulations.
* **Part 2: Optimization and Variational Analysis** separates first-order convex optimization complexity from monotone operator theory and variational analysis.
* **Part 3: Graphs and Semidefinite Geometry** covers graph parameters, Euclidean and Gram representations, and positive semidefinite matrix methods.
* **Part 4: Topological and Combinatorial Convexity** covers colored convexity, Carathéodory-type conjectures, Tverberg-type problems, and related topological combinatorics.

## Classification Notes

The classification is by primary mathematical content rather than by superficial shared vocabulary. For example, the Boolean Quadric Polytope problem is grouped with polyhedral volume and combinatorial optimization, not with smooth extremal-volume geometry. Rockafellar's sum problem is separated from first-order algorithmic complexity because its primary home is maximal monotone operator theory. The graph-parameter problem is placed under semidefinite graph geometry because the core comparison involves Euclidean dimension, Gram dimension, and positive semidefinite corank.

## Problem Template

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

## Linking Rules

Each problem heading is preceded by a stable HTML anchor such as:

```html
<a id="problem-1"></a>
```

Links from the root index should include the complete relative path from the repository root, for example:

```md
[Antipodal Segments and Simplices](open_problems/part_1_convex_and_discrete_geometry/01_convex_geometry_support_faces_distance.md#problem-1)
```

This path format works on GitHub and keeps links stable even when the index is opened from the repository root.
