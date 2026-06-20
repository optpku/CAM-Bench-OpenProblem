# Points in an $o$-symmetric Convex Body

This file contains the open problem on Points in an $o$-symmetric Convex Body.

---

<a id="problem-1"></a>

## 1. Points in an $o$-symmetric Convex Body

Contributors: Zsolt Langi and Yinyu Ye

### 1. Problem Background

This problem belongs to **Minkowski geometry** and the study of distance configurations in centrally symmetric convex bodies.

Let $C\subset \mathbb{R}^n$ be an $o$-symmetric convex body. Such a body can be used as the unit ball of a norm, denoted by $\|\cdot\|_C$. The problem asks whether, for every $n\ge 3$, every integer $k$ satisfying $n+2\le k\le 2n$, and every $o$-symmetric convex body $C\subset \mathbb{R}^n$, the body $C$ contains $k$ points whose pairwise distances, measured in the norm of $C$, are all at least $\sqrt{2}$. The background comes from spherical code problems. For given integers $n$ and $k$, let $\delta_n(k)$ denote the largest angular distance $\delta$ such that there exist $k$ points on the unit sphere $\mathbb{S}^{n-1}$ with pairwise spherical distances at least $\delta$. For $n+2\le k\le 2n$, the optimal spherical distance is $\delta_n(k)=\frac{\pi}{2}$. Equivalently, in the Euclidean unit ball $B^n$, the largest minimum Euclidean distance among $k$ points is $\sqrt{2}$. Sources: References [1] and [3].

### 2. Open Problems

**Question 1.1.** Let $n \ge 3$. Is it true that for every $k$ satisfying $n+2 \le k \le 2n$ and every $o$-symmetric convex body $C$ in $\mathbb{R}^n$, $C$ contains $k$ points at pairwise distances at least $\sqrt{2}$ measured in the norm of $C$?

### 3. Known Results

#### 3.1 Spherical code result for $n+2\le k\le 2n$

**Source:** J. Aczél, *Solution to Problem 35*, Reference [1]; R. A. Rankin, *The closest packing of spherical caps in $n$ dimensions*, Reference [3].

Let $\delta_n(k)$ denote the largest angular distance $\delta$ such that there exist $k$ points on the unit sphere $\mathbb{S}^{n-1}$ with pairwise spherical distances at least $\delta$. If $n+2\le k\le 2n$, then $\delta_n(k)=\frac{\pi}{2}$. Equivalently, if $n+2\le k\le 2n$, then the largest minimum Euclidean distance among $k$ points in the Euclidean unit ball $B^n$ is $\sqrt{2}$.

#### 3.2 Two-dimensional centrally symmetric convex body result

**Source:** P. G. Doyle, J. C. Lagarias, and D. Randall, *Self-packing of centrally symmetric convex bodies in $\mathbb{R}^2$*, Reference [2].

Let $C\subset \mathbb{R}^2$ be an $o$-symmetric plane convex body, and let $\|\cdot\|_C$ be the norm whose unit ball is $C$. Then $C$ contains four points $p_1,p_2,p_3,p_4$ such that, for every $i\ne j$, $\|p_i-p_j\|_C\ge \sqrt{2}$.

### 4. References

1. J. Aczél, Solution to Problem 35 (Hungarian), Mat. Lapok 3 (1952), 94-95.
2. P. G. Doyle, J. C. Lagarias, D. Randall, Self-packing of centrally symmetric convex bodies in $\mathbb{R}^2$, Discrete Comput. Geom. 8 (1992), 171-189.
3. R. A. Rankin, The closest packing of spherical caps in $n$ dimensions, Proc. Glasgow Math. Assoc. 2 (1955), 139-144.

---
