# 凸几何：支撑、面结构与距离配置

This file collects three open problems in convex geometry, centered on support hyperplanes, face structure, antipodal configurations, and distance constraints induced by centrally symmetric convex bodies. The problems concern bounds for antipodal families of segments and simplices, large-distance point sets in normed convex bodies, and face-based representations of points in compact convex sets.

---

<a id="problem-1"></a>

## 1. Antipodal Segments and Simplices

Contributors: Yinyu Ye

### 1. Problem Background
This problem concerns a generalization of **antipodal sets** in convex geometry.

The classical objects are finite point sets $X \subset \mathbb{R}^d$. Following Klee's definition, two distinct points $x',x'' \in X$ are called **antipodal** if they lie on two distinct parallel supporting hyperplanes of $\operatorname{conv} X$. If every pair of distinct points in $X$ is antipodal, then $X$ is called an antipodal set.

Danzer and Grünbaum solved a problem of Erdős and Klee by proving that if $X \subset \mathbb{R}^d$ is an antipodal set, then $|X| \le 2^d$. Moreover, this bound is sharp, as it is attained by the vertex set of a $d$-dimensional parallelotope.

The present problem extends this classical theorem from points to higher-dimensional objects. Instead of considering only points, it considers line segments and, more generally, $k$-simplices. Correspondingly, the condition that two points lie on two distinct parallel supporting hyperplanes is generalized to the condition that two $k$-simplices are each entirely contained in two distinct parallel supporting hyperplanes.

### 2. Definitions and Conventions
#### 2.1 $k$-simplex

A **$k$-simplex** in $\mathbb{R}^d$ is the convex hull of $k+1$ affinely independent points. In particular, a $1$-simplex is a line segment.

**Source:** Grünbaum, *Convex Polytopes* [2]; the same terminology is used for $k$-simplices in Makai--Martini [3].

#### 2.2 $k$-antipodal set of $k$-simplices

Let

$$
S^k=\{s_1^k,\dots,s_n^k\}
$$

be a finite set of $k$-simplices in $\mathbb{R}^d$, and let

$$
P=\operatorname{conv}\left(\bigcup_{s\in S^k}s\right).
$$

The set $S^k$ is called **$k$-antipodal** if, for any $i\neq j$, there are different parallel supporting hyperplanes $H'$ and $H''$ of $P$ such that

$$
s_i^k\subset H',
\qquad
s_j^k\subset H''.
$$

**Source:** Makai--Martini [3].

### 3. Open Problems
**Question 1.1.** Suppose $S$ is a set of segments in $\mathbb{R}^d$ such that for every $s', s'' \in S$ with $s' \ne s''$ there are different parallel supporting hyperplanes $H', H''$ of the convex hull $\operatorname{conv}(\bigcup\{s : s \in S\})$, such that $s' \subset H'$ and $s'' \subset H''$. Then is it true that $|S| \le 2^{d-1}$?


**Question 1.2.** More generally, let $S_k$ be a set of $k$-simplices in $\mathbb{R}^d$ satisfying the word-for-word analogue of the property in Question 1.1: for every two distinct simplices in $S_k$, there are different parallel supporting hyperplanes of the convex hull of the union of all simplices, each containing one of the two simplices. For $1 \le k \le d - 2$, is it true that

$$
|S_k| \le 2^{d-k}?
$$

If Question 1.1 is true, it would be sharp: an example would be the set of all edges of a parallelotope, parallel to a given edge.

If Question 1.2 is true, it would also be sharp: an example would be simplices on all $k$-faces of a parallelotope, parallel to a given $k$-face.

### 4. Known Results
#### 4.1 Danzer--Grünbaum Theorem for Antipodal Point Sets

Let $X \subset \mathbb{R}^d$ be a finite point set. Suppose that $X$ is an antipodal set; that is, for every pair of distinct points $x',x'' \in X$, there exist two distinct parallel supporting hyperplanes $H'$ and $H''$ of $\operatorname{conv} X$ such that $x' \in H'$ and $x'' \in H''$.

Then $|X| \le 2^d$.

This bound is sharp, since it is attained by the vertex set of a $d$-dimensional parallelotope.

#### 4.2 The Three-Dimensional Segment Case

Let $S$ be a family of line segments in $\mathbb{R}^3$. Define $P=\operatorname{conv}\left(\bigcup_{s\in S} s\right)$.

Suppose that for every two distinct segments $s',s'' \in S$, there exist two distinct parallel supporting planes $H'$ and $H''$ of $P$ such that $s' \subset H'$ and $s'' \subset H''$.

Then $|S| \le 4$.

This is the case $d=3$ and $k=1$.

#### 4.3 The Boundary Case $k=d-1$

Let $S_{d-1}$ be a family of $(d-1)$-simplices in $\mathbb{R}^d$. Define $P=\operatorname{conv}\left(\bigcup_{s\in S_{d-1}} s\right)$.

Suppose that for every two distinct $(d-1)$-simplices $s',s'' \in S_{d-1}$, there exist two distinct parallel supporting hyperplanes $H'$ and $H''$ of $P$ such that $s' \subset H'$ and $s'' \subset H''$.

Then $|S_{d-1}| \le 2$.

This agrees with the formula $2^{d-(d-1)}=2$.

### 5. References
1. L. Danzer, B. Grünbaum, Über zwei Probleme bezüglich konvexer Körper von P. Erdős und V. L. Klee, Math. Z. 79 (1962), 95-99.
2. B. Grünbaum, Convex polytopes, Wiley-Interscience, London etc., 1967.
3. E. Makai, Jr., H. Martini, On the number of antipodal or strictly antipodal pairs of points in finite subsets of $\mathbb{R}^d$, in: Applied Geom. and Discr. Math., The V. Klee Festschrift (P. Gritzmann, B. Sturmfels, eds.), DIMACS Series in Discr. Math. and Theoretical Computer Sci., Vol. 4, Amer. Math. Soc., Providence, RI, 1991, 457-470.
4. I. Talata, Oral communication.

---

<a id="problem-2"></a>

## 2. Points in an $o$-symmetric Convex Body

Contributors: Yinyu Ye

### 1. Problem Background
This problem belongs to **Minkowski geometry** and the study of distance configurations in centrally symmetric convex bodies.

Let $C\subset \mathbb{R}^n$ be an $o$-symmetric convex body. Such a body can be used as the unit ball of a norm, denoted by $\|\cdot\|_C$. The problem asks whether, for every $n\ge 3$, every integer $k$ satisfying $n+2\le k\le 2n$, and every $o$-symmetric convex body $C\subset \mathbb{R}^n$, the body $C$ contains $k$ points whose pairwise distances, measured in the norm of $C$, are all at least $\sqrt{2}$.

The background comes from spherical code problems. For given integers $n$ and $k$, let $\delta_n(k)$ denote the largest angular distance $\delta$ such that there exist $k$ points on the unit sphere $\mathbb{S}^{n-1}$ with pairwise spherical distances at least $\delta$. For $n+2\le k\le 2n$, the optimal spherical distance is $\delta_n(k)=\frac{\pi}{2}$. Equivalently, in the Euclidean unit ball $B^n$, the largest minimum Euclidean distance among $k$ points is $\sqrt{2}$. Sources: References [1] and [3].

### 2. Open Problems
**Question 2.1.** Let $n \ge 3$. Is it true that for every $k$ satisfying $n+2 \le k \le 2n$ and every $o$-symmetric convex body $C$ in $\mathbb{R}^n$, $C$ contains $k$ points at pairwise distances at least $\sqrt{2}$ measured in the norm of $C$?

### 3. Known Results
#### 3.1 Spherical code result for $n+2\le k\le 2n$

**Source:** J. Aczél, *Solution to Problem 35*, Reference [1]; R. A. Rankin, *The closest packing of spherical caps in $n$ dimensions*, Reference [3].

Let $\delta_n(k)$ denote the largest angular distance $\delta$ such that there exist $k$ points on the unit sphere $\mathbb{S}^{n-1}$ with pairwise spherical distances at least $\delta$. If $n+2\le k\le 2n$, then

$\delta_n(k)=\frac{\pi}{2}$.

Equivalently, if $n+2\le k\le 2n$, then the largest minimum Euclidean distance among $k$ points in the Euclidean unit ball $B^n$ is

$\sqrt{2}$.

#### 3.2 Two-dimensional centrally symmetric convex body result

**Source:** P. G. Doyle, J. C. Lagarias, and D. Randall, *Self-packing of centrally symmetric convex bodies in $\mathbb{R}^2$*, Reference [2].

Let $C\subset \mathbb{R}^2$ be an $o$-symmetric plane convex body, and let $\|\cdot\|_C$ be the norm whose unit ball is $C$. Then $C$ contains four points $p_1,p_2,p_3,p_4$ such that, for every $i\ne j$,

$\|p_i-p_j\|_C\ge \sqrt{2}$.

### 4. References
1. J. Aczél, Solution to Problem 35 (Hungarian), Mat. Lapok 3 (1952), 94-95.
2. P. G. Doyle, J. C. Lagarias, D. Randall, Self-packing of centrally symmetric convex bodies in $\mathbb{R}^2$, Discrete Comput. Geom. 8 (1992), 171-189.
3. R. A. Rankin, The closest packing of spherical caps in $n$ dimensions, Proc. Glasgow Math. Assoc. 2 (1955), 139-144.

---

<a id="problem-3"></a>

## 3. Faces of a Compact Convex Set

Contributors: Yinyu Ye

### 1. Problem Background
This problem asks for a face-decomposition principle for compact convex sets. It is close in spirit to Carathéodory-type theorems, but instead of representing a point by a small number of points, it asks whether the point can be represented using faces whose dimensions are prescribed in advance.

The condition $n_1+\cdots+n_s=n+1$ mirrors the dimension count in Carathéodory's theorem in $\mathbb{R}^n$. The conjecture asks whether this total dimension budget can always be distributed among non-empty faces of the convex set so that every point of the set lies in the convex hull of those faces. The case $s=1$ is immediate, and the case $n_1=\cdots=n_s=1$ is consistent with finite-dimensional Krein--Milman together with Carathéodory's theorem.

### 2. Definitions and Conventions
In this problem, a face of $K$ may be an improper face, so $K$ itself is allowed as a face. This convention is needed for the trivial case $s=1$.

### 3. Open Problems
**Conjecture 3.1.** If $K \subset \mathbb{R}^n$ is a compact convex set and $n_1, \ldots, n_s$ are positive integers with

$$
n_1 + \cdots + n_s = n+1,
$$

then, for every point $z \in K$, do non-empty faces $F_1, \ldots, F_s$ of $K$ exist such that

$$
z \in \operatorname{conv}(F_1 \cup \cdots \cup F_s)
$$

and

$$
\dim F_i \le n_i - 1
\qquad
\text{for all } i = 1, \ldots, s?
$$
