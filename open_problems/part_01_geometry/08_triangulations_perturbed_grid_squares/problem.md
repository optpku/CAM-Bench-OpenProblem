# Triangulations of Perturbed Grid-Squares

This file contains the open problem on Triangulations of Perturbed Grid-Squares.

---

<a id="problem-1"></a>

## 1. Triangulations of Perturbed Grid-Squares

Contributors: Peter Brass and Yinyu Ye

### 1. Problem Background
This problem concerns the combinatorial complexity of triangulations of finite point sets in three-dimensional space.

The background is that triangulations in $\mathbb{R}^3$ behave differently from triangulations in the plane. In two dimensions, all triangulations of a fixed point set have the same number of triangles, determined by the number of points and convex-hull vertices. In three dimensions, however, different triangulations of the same point set may have different numbers of tetrahedra.

The specific question asks for an upper bound on the largest triangulation of a special point set: a small perturbation in $\mathbb{R}^3$ of a $\sqrt n\times \sqrt n$ grid. Here the three-dimensional simplices are tetrahedra. The conjectural upper bound is $O(n^{3/2})$, intermediate between the linear-size triangulations known to exist for arbitrary point sets and the quadratic-size phenomena that can occur for some three-dimensional configurations. A related $O(n^{5/3})$ bound is known for perturbed grid-cubes, but it is not expected to be sharp.

### 2. Open Problems
**Question 1.1.** Is it true that for each set of points in general position that results from an $\sqrt n \times \sqrt n$ grid in three-dimensional space by a small perturbation, every triangulation of the set consists of at most $O(n^{3/2})$ tetrahedra?

### 3. Known Results
#### 3.1 Fixed Size of Planar Point-Set Triangulations

**Source:** Standard planar point-set triangulation formula.

Let $P\subset \mathbb{R}^2$ be a finite point set with $n$ points, not all collinear. Let $h$ be the number of points of $P$ lying on the boundary of $\mathrm{conv}(P)$. Then every triangulation of $P$ has exactly $2n-h-2$ triangles and exactly $3n-h-3$ edges.

#### 3.2 Linear-Size Tetrahedrization in Three Dimensions

**Source:** H. Edelsbrunner, F. P. Preparata, and D. B. West, “Tetrahedrizing Point Sets in Three Dimensions.”

Let $P$ be a set of $n$ points in general position in $\mathbb{R}^3$, where general position means that no four points are coplanar. Then one can construct a tetrahedrization of $P$ in $O(n\log n)$ time consisting of at most $3n-11$ tetrahedra.

#### 3.3 Three-dimensional configurations with triangulations of different sizes

**Source:** D. Avis and H. ElGindy, “Triangulating Point Sets in Space.”

There exist three-dimensional point-set configurations with $2n+1$ points for which the number of tetrahedra in a triangulation may vary between $2n-2$ and $(n-1)^2+1$. Related constructions in the three-dimensional triangulation literature also show that quadratic-size behavior can be forced in suitable settings. This is the phenomenon that makes the perturbed-grid-square upper-bound question nontrivial.

### 4. References
1. H. Edelsbrunner, F. P. Preparata, and D. B. West, Tetrahedrizing point sets in three dimensions, J. Symbolic Comput. 10 (1990), 335-347.
2. D. Avis and H. ElGindy, Triangulating point sets in space, Discrete Comput. Geom. 2 (1987), 99-111.

---
