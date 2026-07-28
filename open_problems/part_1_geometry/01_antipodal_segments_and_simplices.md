# Antipodal Segments and Simplices

This file contains the open problem on Antipodal Segments and Simplices.

---

<a id="problem-1"></a>

## 1. Antipodal Segments and Simplices

Contributors: Imre Bárány, Yinyu Ye, Endre Makai, Jr., Horst Martini, and Valeriu Soltan

### 1. Problem Background

This problem concerns a generalization of **antipodal sets** in convex geometry.

The classical objects are finite point sets $X \subset \mathbb{R}^d$. Following Klee's definition, two distinct points $x',x'' \in X$ are called **antipodal** if they lie on two distinct parallel supporting hyperplanes of $\mathrm{conv} X$. If every pair of distinct points in $X$ is antipodal, then $X$ is called an antipodal set.

Danzer and Grünbaum solved a problem of Erdős and Klee by proving that if $X \subset \mathbb{R}^d$ is an antipodal set, then $|X| \le 2^d$. Moreover, this bound is sharp, as it is attained by the vertex set of a $d$-dimensional parallelotope.

The present problem extends this classical theorem from points to higher-dimensional objects. Instead of considering only points, it considers line segments and, more generally, $k$-simplices. Correspondingly, the condition that two points lie on two distinct parallel supporting hyperplanes is generalized to the condition that two $k$-simplices are each entirely contained in two distinct parallel supporting hyperplanes.

### 2. Definitions and Conventions

#### 2.1 $k$-simplex

A **$k$-simplex** in $\mathbb{R}^d$ is the convex hull of $k+1$ affinely independent points. In particular, a $1$-simplex is a line segment.

**Source:** Grünbaum, *Convex Polytopes* [2]; the same terminology is used for $k$-simplices in Makai--Martini [3].

#### 2.2 $k$-antipodal set of $k$-simplices

Let $S^k=\{s_1^k,\dots,s_n^k\}$ be a finite set of $k$-simplices in $\mathbb{R}^d$, and let $P=\mathrm{conv}(\bigcup_{s\in S^k}s).$ The set $S^k$ is called **$k$-antipodal** if, for any $i\neq j$, there are different parallel supporting hyperplanes $H'$ and $H''$ of $P$ such that $s_i^k\subset H'$ and $s_j^k\subset H''$.

**Source:** Makai--Martini [3].

### 3. Open Problems

**Question 1.1.** Suppose $S$ is a set of segments in $\mathbb{R}^d$ such that for every $s', s'' \in S$ with $s' \ne s''$ there are different parallel supporting hyperplanes $H', H''$ of the convex hull $\mathrm{conv}(\bigcup\{s : s \in S\})$, such that $s' \subset H'$ and $s'' \subset H''$. Then is it true that $|S| \le 2^{d-1}$?

**Question 1.2.** More generally, let $S_k$ be a set of $k$-simplices in $\mathbb{R}^d$ satisfying the word-for-word analogue of the property in Question 1.1: for every two distinct simplices in $S_k$, there are different parallel supporting hyperplanes of the convex hull of the union of all simplices, each containing one of the two simplices. For $1 \le k \le d - 2$, is it true that $|S_k| \le 2^{d-k}?$ If Question 1.1 is true, it would be sharp: an example would be the set of all edges of a parallelotope, parallel to a given edge.

If Question 1.2 is true, it would also be sharp: an example would be simplices on all $k$-faces of a parallelotope, parallel to a given $k$-face.

### 4. Known Results

#### 4.1 Danzer--Grünbaum Theorem for Antipodal Point Sets

Let $X \subset \mathbb{R}^d$ be a finite point set. Suppose that $X$ is an antipodal set; that is, for every pair of distinct points $x',x'' \in X$, there exist two distinct parallel supporting hyperplanes $H'$ and $H''$ of $\mathrm{conv} X$ such that $x' \in H'$ and $x'' \in H''$. Then $|X| \le 2^d$. This bound is sharp, since it is attained by the vertex set of a $d$-dimensional parallelotope.

#### 4.2 The Three-Dimensional Segment Case

Let $S$ be a family of line segments in $\mathbb{R}^3$. Define $P=\mathrm{conv}(\bigcup_{s\in S} s)$. Suppose that for every two distinct segments $s',s'' \in S$, there exist two distinct parallel supporting planes $H'$ and $H''$ of $P$ such that $s' \subset H'$ and $s'' \subset H''$. Then $|S| \le 4$. This is the case $d=3$ and $k=1$.

#### 4.3 The Boundary Case $k=d-1$

Let $S_{d-1}$ be a family of $(d-1)$-simplices in $\mathbb{R}^d$. Define $P=\mathrm{conv}(\bigcup_{s\in S_{d-1}} s)$. Suppose that for every two distinct $(d-1)$-simplices $s',s'' \in S_{d-1}$, there exist two distinct parallel supporting hyperplanes $H'$ and $H''$ of $P$ such that $s' \subset H'$ and $s'' \subset H''$. Then $|S_{d-1}| \le 2$. This agrees with the formula $2^{d-(d-1)}=2$.

### 5. References

1. L. Danzer, B. Grünbaum, Über zwei Probleme bezüglich konvexer Körper von P. Erdős und V. L. Klee, Math. Z. 79 (1962), 95-99.
2. B. Grünbaum, Convex polytopes, Wiley-Interscience, London etc., 1967.
3. E. Makai, Jr., H. Martini, On the number of antipodal or strictly antipodal pairs of points in finite subsets of $\mathbb{R}^d$, in: Applied Geom. and Discr. Math., The V. Klee Festschrift (P. Gritzmann, B. Sturmfels, eds.), DIMACS Series in Discr. Math. and Theoretical Computer Sci., Vol. 4, Amer. Math. Soc., Providence, RI, 1991, 457-470.
4. I. Talata, Oral communication.

---
