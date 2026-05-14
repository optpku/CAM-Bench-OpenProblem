# Simplicial and Triangulation Geometry

This file contains open problems on simplicial geometry and triangulations. The first asks for the extremal order of the number of tetrahedra in triangulations of special three-dimensional point sets; the second asks for a geometric characterization of higher-dimensional simplices whose incenter lies on the Euler line.

---

<a id="problem-1"></a>

## 1. Triangulations of Perturbed Grid-Squares

Contributors: Yinyu Ye

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

<a id="problem-2"></a>

## 2. Incenter on the Euler Line of an $n$-Simplex

Contributors: Yinyu Ye

### 1. Problem Background
This problem concerns the extension of the classical Euler-line geometry of triangles to higher-dimensional simplices.

For any triangle $T$ in the Euclidean plane $\mathbb{E}^2$, the circumcenter $C$, centroid $S$, orthocenter $O$, and the center $F$ of the nine-point circle lie on one line, called the Euler line of $T$. It is also known that the incenter $I$ of a triangle lies on the Euler line if and only if the triangle is isosceles, with the Euler line as its axis of symmetry.

For a general $n$-simplex, an orthocenter need not exist. In this problem, the Euler line should be understood as the line determined by the circumcenter and the centroid, when these two points are distinct. The open problem asks for a geometric characterization of those $n$-simplices in $\mathbb{E}^n$, with $n\ge 3$, whose incenter lies on this line.

The known higher-dimensional result mentioned in the text concerns orthocentric simplices. This special class is significant because orthocentric $n$-simplices behave as natural higher-dimensional analogues of triangles in several respects. No analogous characterization is known for general $n$-simplices with $n\ge 3$.

### 2. Open Problems
**Question 2.1.** Characterize geometrically those $n$-simplices in $\mathbb{E}^n$, $n \ge 3$, for which the incenter lies on the Euler line.

### 3. Known Results
#### 3.1 Classical planar triangle result

**Source:** Problem background; Edmonds--Hajja--Martini, *Orthocentric Simplices and Biregularity* [1].

Let $T$ be a triangle in $\mathbb{E}^2$. Let $C$ be its circumcenter, $S$ its centroid, $O$ its orthocenter, and $F$ the center of its nine-point circle. Then $C$, $S$, $O$, and $F$ lie on one line, called the Euler line of $T$. Moreover, if $I$ is the incenter of $T$, then $I$ lies on the Euler line of $T$ if and only if $T$ is isosceles, with the Euler line as its axis of symmetry.

#### 3.2 Orthocentric simplex result

**Source:** A. E. Edmonds, M. Hajja, and H. Martini, *Orthocentric Simplices and Biregularity*, Results in Mathematics 52, 41--50, 2008 [1].

Let $T$ be an $n$-dimensional orthocentric simplex in $\mathbb{E}^n$, with $n\ge 3$. Let $C$ be the circumcenter of $T$, let $S$ be its centroid, and let $I$ be its incenter.

Then $C$, $S$, and $I$ are collinear if and only if $T$ is biregular, meaning that the vertex set of $T$ can be partitioned into two disjoint subsets whose convex hulls are regular simplices and such that all segments joining one subset to the other have the same length.

### 4. References
1. A. E. Edmonds, M. Hajja, H. Martini, Orthocentric simplices and biregularity, Results Math. 52 (2008), 41-50.
