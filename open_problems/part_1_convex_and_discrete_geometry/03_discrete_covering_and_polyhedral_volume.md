# Discrete Covering and Polyhedral Volume

This file collects open problems where discrete geometric covering and polyhedral-combinatorial volume are the central objects. The unit-cube covering problem belongs to geometric covering with finitely many congruence-type constraints, while the Boolean Quadric Polytope problem belongs to polyhedral combinatorics and combinatorial optimization.

---

<a id="problem-1"></a>

## 1. Covering a Unit Cube by Smaller Cubes

Contributors: Yinyu Ye

### 1. Problem Background
This problem asks how efficiently a unit cube in $\mathbb{R}^n$ can be covered by cubes whose edge lengths are all strictly smaller than $1$.

If the smaller cubes are required to be parallel, or more generally homothetic, to the unit cube, then $2^n$ such cubes are necessary and sufficient. The open problem allows arbitrary orientations, so rotations may reduce the number of cubes needed. This makes the problem a genuinely geometric covering question rather than only a coordinatewise subdivision problem.

### 2. Open Problems
**Question 1.1.** What is the minimum number $q(n)$ of cubes in $\mathbb{R}^n$ of edge length smaller than $1$ whose union contains a unit cube?

### 3. Known Results
#### 3.1 Two-dimensional case

For $n=2$, the minimum number $q(2)$ of squares in $\mathbb{R}^2$ of edge length smaller than $1$ whose union contains a unit square is

$q(2)=3$.

#### 3.2 General upper bound

For every $n$, the minimum number $q(n)$ of cubes in $\mathbb{R}^n$ of edge length smaller than $1$ whose union contains a unit cube satisfies

$q(n)\le n+1$.

---

<a id="problem-2"></a>

## 2. Volume of the Boolean Quadric Polytope

Contributors: Yinyu Ye

### 1. Problem Background
The Boolean Quadric Polytope arises from the linearization of unconstrained quadratic $0$-$1$ optimization problems. Given binary variables $x_i\in\{0,1\}$, one introduces variables $y_{ij}$ to represent the quadratic products $x_i x_j$. The Boolean Quadric Polytope is the convex hull of all $0/1$ points satisfying these product equations.

For $n\ge 2$, let $N=\{1,2,\ldots,n\}$ and let

$d=\frac{n(n+1)}{2}$.

The polytope $P_n\subset \mathbb{R}^d$ is defined as the convex hull of the $0/1$ solutions to

$x_i x_j=y_{ij}$

for all $i<j$ in $N$. The open problem asks for a formula, or good bounds, for the $d$-dimensional volume of $P_n$.

A natural starting point is a linear relaxation $Q_n$ containing $P_n$. Ko, Lee, and Steingrímsson computed the exact $d$-dimensional volume of this relaxation, which gives an upper bound on the volume of $P_n$. The goal is to improve this upper bound significantly and/or to obtain a non-trivial lower bound.

### 2. Open Problems
**Question 2.1.** For $n \ge 2$, the Boolean Quadric Polytope $P_n$ is the convex hull in dimension

$$
d=\frac{n(n+1)}{2}
$$

of the $0/1$ solutions to

$$
x_i x_j=y_{ij}
$$

for all $i<j$ in

$$
N:=\{1,2,\ldots,n\}.
$$

Give a formula or good bounds for the $d$-dimensional volume of $P_n$.

### 3. Known Results
#### 3.1 Volume formula for the relaxed Boolean-quadric polytope

**Source:** Chun-Wa Ko, Jon Lee, and Einar Steingrímsson, *The volume of relaxed Boolean-quadric and cut polytopes*, Discrete Mathematics 163(1--3), 293--298, 1997.

Let $n\ge 2$, let $N=\{1,2,\ldots,n\}$, and let

$d=\frac{n(n+1)}{2}$.

Let $Q_n\subset \mathbb{R}^d$ be the solution set of the linear inequalities

$y_{ij}\ge 0$,

$y_{ij}\le x_i$,

$y_{ij}\le x_j$,

$x_i+x_j\le 1+y_{ij}$,

for all $i<j$ in $N$.

For $n\ge 2$, these inequalities imply $0\le x_i\le 1$ for every $i\in N$.

Then the $d$-dimensional volume of $Q_n$ is

$\operatorname{vol}_d(Q_n)=\frac{2^{2n-d}n!}{(2n)!}$.

Since $P_n\subseteq Q_n$, it follows that

$\operatorname{vol}_d(P_n)\le \frac{2^{2n-d}n!}{(2n)!}$.

### 4. References
1. Chun-Wa Ko, Jon Lee, and Einar Steingrímsson. The volume of relaxed Boolean-quadric and cut polytopes. Discrete Mathematics, 163(1-3):293-298, 1997.
