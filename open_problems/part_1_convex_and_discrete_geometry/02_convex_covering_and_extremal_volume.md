# Convex Covering and Extremal Volume Geometry

This file collects open problems in convex covering and extremal volume geometry. The common theme is optimization of volume under geometric constraints: partial covering of a Euclidean ball by planks, and extremal simplex-ball intersections in spaces of constant curvature.

---

<a id="problem-1"></a>

## 1. Planks Covering the Unit Ball

Contributors: Yinyu Ye

### 1. Problem Background
This problem belongs to the study of **plank covering problems** in convex and discrete geometry.

In Euclidean space $\mathbb{E}^d$, a **plank** is the closed region between two parallel hyperplanes, and its width is the distance between these two boundary hyperplanes. The problem asks the following: given a family of planks whose total width is smaller than $2$, what is the maximum volume of the part of the unit ball that can be covered by these planks?

This problem can be viewed as a partial-covering version of the classical Tarski plank problem. The classical Tarski plank problem asks: if a convex body is completely covered by a family of planks, how large must the sum of their widths be? In Bezdek's survey, this maximum partial-covering problem is also formulated as a variant of Tarski's plank problem: given a convex body $C$ of minimal width $w>0$, and a family of planks whose total width is smaller than $w$, how should the planks be arranged so that they cover a subset of $C$ of maximum volume?

For the unit ball $B^d$, the minimal width is $2$. Therefore, the condition that the sum of the widths is smaller than $2$ means precisely that the total width is smaller than the diameter of the unit ball. In this setting, Bezdek formulates the corresponding problem as follows: given positive numbers $w_1,\dots,w_n$ satisfying $w_1+\cdots+w_n<2$, determine when planks of widths $w_1,\dots,w_n$ cover a subset of the unit ball $B^d$ of maximum volume. The expected extremal configuration is that the planks do not overlap and together form one plank concentric with the unit ball.

### 2. Open Problems
**Question 1.1.** Given positive widths $w_1,\ldots,w_n$ with $w_1+\cdots+w_n<2$, what is the maximum volume of the part of the unit ball in $\mathbb{E}^d$ that can be covered by planks of these widths?

### 3. Known Results
#### 3.1 Bang's Plank Theorem, the Classical Solution to Tarski's Plank Problem

**Source:** Bang's plank theorem; also discussed in Bezdek, *Tarski's Plank Problem Revisited*.

Let $C$ be a convex body in $\mathbb{E}^d$, and let $w(C)$ denote its minimal width. Suppose that $C$ is covered by planks $P_1,P_2,\dots,P_n$, that is,

$C\subset P_1\cup P_2\cup\cdots\cup P_n$.

Then

$\sum_{i=1}^n w(P_i)\ge w(C)$,

where $w(P_i)$ denotes the width of the plank $P_i$.

In particular, if $C$ is the unit ball in $\mathbb{E}^d$, then $w(C)=2$. Hence any family of planks that completely covers the unit ball must have total width at least $2$. This explains why, in the present problem, a family of planks with total width smaller than $2$ can only cover the unit ball partially.

#### 3.2 The Case of Two Planks in Arbitrary Dimension

**Source:** Bezdek, *Tarski's Plank Problem Revisited*, Theorem 5.2.

Let $P_1$ and $P_2$ be two planks in $\mathbb{E}^d$, where $d\ge 2$. Suppose that their widths are $w_1$ and $w_2$, respectively, and that

$0<w_1+w_2<2$.

Then $P_1\cup P_2$ covers a subset of the unit ball $B^d$ of maximum volume if and only if $P_1\cup P_2$ itself is a plank of width $w_1+w_2$ whose center of symmetry is the center $o$ of the unit ball.

Thus, for two planks, the optimal configuration is obtained by combining them, without overlap, into a single plank centered at the center of the ball.

#### 3.3 The Complete Three-Dimensional Unit Ball Case

**Source:** Bezdek, *Classical Topics in Discrete Geometry*, Theorem 4.5.2; also appearing as Theorem 5.3 in Bezdek, *Tarski's Plank Problem Revisited*.

Let $w_1,w_2,\dots,w_n$ be positive real numbers satisfying

$w_1+w_2+\cdots+w_n<2$.

Let $P_1,P_2,\dots,P_n$ be planks in $\mathbb{E}^3$ with widths $w_1,w_2,\dots,w_n$, respectively. Then $P_1\cup P_2\cup\cdots\cup P_n$ covers a subset of the three-dimensional unit ball $B^3$ of maximum volume if and only if $P_1\cup P_2\cup\cdots\cup P_n$ itself is a plank of width

$w_1+w_2+\cdots+w_n$

whose center of symmetry is the center $o$ of the unit ball.

This is the three-dimensional case in which the expected extremal configuration is known to be correct.

#### 3.4 The Case of Three Planks in Higher Dimension

**Source:** Bezdek, *Tarski's Plank Problem Revisited*, Corollary 5.4.

Let $P_1,P_2,P_3$ be three planks in $\mathbb{E}^d$, where $d\ge 3$. Suppose that their widths are $w_1,w_2,w_3$, respectively, and that

$0<w_1+w_2+w_3<2$.

Then $P_1\cup P_2\cup P_3$ covers a subset of the unit ball $B^d$ of maximum volume if and only if $P_1\cup P_2\cup P_3$ itself is a plank of width

$w_1+w_2+w_3$

whose center of symmetry is the center $o$ of the unit ball.

### 4. References
1. K. Bezdek, Classical Topics in Discrete Geometry, CMS Books in Mathematics, Springer, New York, 2010.
2. K. Bezdek, Tarski's plank problem revisited, in *Geometry: Intuitive, Discrete, and Convex*, Bolyai Society Mathematical Studies 24, Springer, 2013.

---

<a id="problem-2"></a>

## 2. Extremal Simplex Intersection in Spherical and Hyperbolic Space

Contributors: Yinyu Ye

### 1. Problem Background
In Euclidean space $\mathbb{E}^d$, the maximum volume of the intersection of a fixed ball and a variable simplex of given volume $V$ is attained when the simplex is regular and concentric with the ball. This follows easily by Steiner symmetrization. Apart from the two-dimensional case, it is open whether the same extremal statement remains true in spherical and hyperbolic spaces.

If true, the statement would imply several regularity results and conjectures for spherical and hyperbolic simplices, including the regularity of maximum-volume inscribed simplices and the conjectured regularity of minimum-volume circumscribed simplices.

### 2. Open Problems
**Question 2.1.** Does the Euclidean extremal statement above remain true in spherical and hyperbolic space?

Equivalently, in spherical or hyperbolic space, among all simplices of given volume, is the volume of the intersection with a fixed ball maximized by the regular simplex concentric with the ball?

### 3. Known Results
#### 3.1 Spherical case

**Source:** K. Böröczky, *On an extremum property of the regular simplex in $S^d$* [1].

Let $B$ be a geodesic ball in the spherical space $S^d$. Among all $d$-simplices inscribed in $B$, the simplex of maximum volume is regular.

#### 3.2 Hyperbolic case

**Source:** N. Peyerimhoff, *Simplices of maximal volume or minimal total edge length in hyperbolic space* [2].

Let $B$ be a closed geodesic ball in the hyperbolic space $H^d$. Among all $d$-simplices contained in $B$, the simplex of maximum volume is regular.

### 4. References
1. K. Böröczky, On an extremum property of the regular simplex in $S^d$, Intuitive Geometry (Siófok, 1985), 117-121, Colloq. Math. Soc. János Bolyai, 48, North-Holland, Amsterdam, 1987; MR0910705.
2. N. Peyerimhoff, Simplices of maximal volume or minimal total edge length in hyperbolic space, J. London Math. Soc. (2) 66 (2002), no. 3, 753-768; MR1934304.
