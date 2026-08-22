# Faces of a Compact Convex Set

This file contains the open problem on Faces of a Compact Convex Set.

---

<a id="problem-1"></a>

## 1. Faces of a Compact Convex Set

Contributors: Valeriu Soltan and Yinyu Ye

### 1. Problem Background

This problem asks for a face-decomposition principle for compact convex sets. It is close in spirit to Carathéodory-type theorems, but instead of representing a point by a small number of points, it asks whether the point can be represented using faces whose dimensions are prescribed in advance.

The condition $n_1+\cdots+n_s=n+1$ mirrors the dimension count in Carathéodory's theorem in $\mathbb{R}^n$. The conjecture asks whether this total dimension budget can always be distributed among non-empty faces of the convex set so that every point of the set lies in the convex hull of those faces. The case $s=1$ is immediate, and the case $n_1=\cdots=n_s=1$ is consistent with finite-dimensional Krein--Milman together with Carathéodory's theorem.

### 2. Definitions and Conventions

In this problem, a face of $K$ may be an improper face, so $K$ itself is allowed as a face. This convention is needed for the trivial case $s=1$.

### 3. Open Problems

**Conjecture 1.1.** If $K \subset \mathbb{R}^n$ is a compact convex set and $n_1, \ldots, n_s$ are positive integers with $n_1 + \cdots + n_s = n+1,$ then, for every point $z \in K$, there exist non-empty faces $F_1, \ldots, F_s$ of $K$ such that $z \in \mathrm{conv}(F_1 \cup \cdots \cup F_s)$ and $\dim F_i \le n_i - 1$ for all $i = 1, \ldots, s$.

### 4. Known Results

For convex polytopes $K$, the conjecture is known to hold.
