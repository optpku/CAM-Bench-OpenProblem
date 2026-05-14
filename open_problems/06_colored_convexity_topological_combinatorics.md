# 彩色凸性与拓扑组合几何

This file discusses one open conjecture at the intersection of colored convexity and topological combinatorics. The conjecture can be viewed as a multicolored strengthening of Bárány's colored Carathéodory theorem and is closely related to extending colored Tverberg-type results beyond the prime case.

---

<a id="problem-1"></a>

## 1. A Multicolored Carathéodory Conjecture

Contributors: Yinyu Ye

### 1. Problem Background
This problem is a multicolored variant of Bárány’s colored Carathéodory theorem. The classical colored Carathéodory theorem says that if $X_1,\ldots,X_{d+1}\subset \mathbb{R}^d$ are point sets such that $0\in \operatorname{conv}(X_i)$ for every $i$, then one can choose one point from each $X_i$ whose convex hull still contains $0$.

In the present conjecture, the sets are arranged as columns $\{P_{1j},\ldots,P_{rj}\}$ in $\mathbb{R}^N$, with $0\in \operatorname{conv}\{P_{1j},\ldots,P_{rj}\}$ for each $j=1,\ldots,N+1$. One wants to choose one point from each column so that the chosen points still contain $0$ in their convex hull, but with an additional “rainbow” restriction coming from a partition $C_1\uplus\cdots\uplus C_m$ of the column indices: two indices in the same color class must be assigned different row labels.

The motivation is its relation to colored Tverberg theorems. If true, the conjecture would imply the colored Tverberg theorem of Blagojević, Matschke, and Ziegler beyond the prime case, including non-prime values of $r$. Hence the conjecture is particularly interesting when $r$ is not prime and $r-1$ divides $N$; the first such case is $r=4$ and $N=9$, corresponding to the smallest non-prime case $r=4$ and $d=2$ in the related colored Tverberg setting.

### 2. Open Problems
**Conjecture 1.1 (A Multicolored Carathéodory Conjecture).** Let $r \ge 2$ be an integer, and let $N$ be sufficiently large depending on $r$, say $N \ge N_0(r)$. Suppose we are given $r(N + 1)$ points $P_{ij}$ in $\mathbb{R}^N$ that are indexed by $1 \le i \le r$ and $1 \le j \le N + 1$. Assume that

$$
0 \in \operatorname{conv}\{P_{1j}, \ldots, P_{rj}\}
$$

for all $1 \le j \le N + 1$. Assume further that the index set $\{1,2,\ldots,N+1\}$ is partitioned as $C_1 \uplus \ldots \uplus C_m$ such that all color classes are small: $|C_k| \le r-1$ for all $1 \le k \le m$.

Then do there exist $k_1, \ldots, k_{N+1} \in \{1,\ldots,r\}$ such that

$$
0 \in \operatorname{conv}\{P_{k_1,1}, \ldots, P_{k_{N+1},N+1}\}
$$

and for any two distinct $a,b$ in the same color class $C_k$ we have $k_a \ne k_b$?

### 3. Known Results
#### 3.1 Bárány’s colored Carathéodory theorem

**Source:** I. Bárány, colored Carathéodory theorem; stated for example in Bárány, *Quadratically many colorful simplices* [1].

Let $X_1,X_2,\ldots,X_{d+1}$ be subsets of $\mathbb{R}^d$. Suppose that

$0\in \operatorname{conv}(X_i)$

for every $i=1,\ldots,d+1$. Then there exist points $x_i\in X_i$, one from each set, such that

$0\in \operatorname{conv}\{x_1,x_2,\ldots,x_{d+1}\}$.

#### 3.2 Prime case of the Blagojević--Matschke--Ziegler colored Tverberg theorem

**Source:** P. V. M. Blagojević, B. Matschke, and G. M. Ziegler, *Optimal bounds for the colored Tverberg problem* [2].

The following known form is stated for prime $r$. Let $r\ge 2$ be prime, let $d\ge 1$, and set

$N=(r-1)(d+1)$.

Let $\Delta_N$ be an $N$-dimensional simplex whose vertex set is partitioned into color classes

$C=C_0\uplus C_1\uplus\cdots\uplus C_m$

such that

$|C_i|\le r-1$

for every $i$. Then, for every continuous map

$f:\Delta_N\to \mathbb{R}^d$,

there exist $r$ pairwise disjoint faces

$F_1,\ldots,F_r$

of $\Delta_N$ such that each face is rainbow, namely

$|F_j\cap C_i|\le 1$

for every $j=1,\ldots,r$ and every color class $C_i$, and such that

$f(F_1)\cap f(F_2)\cap\cdots\cap f(F_r)\ne\varnothing$.

### 4. References
1. I. Bárány, Quadratically many colorful simplices, SIAM J. Discrete Math. 24 (2010), 191-198.
2. P. V. M. Blagojević, B. Matschke, and G. M. Ziegler, Optimal bounds for the colored Tverberg problem, J. Eur. Math. Soc. 17 (2015), 739-754.
