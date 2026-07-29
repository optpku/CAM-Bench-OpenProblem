# Bound lattice width of lattice-free polytopes using only determinant minor parameter

This file contains the open problem on Bound lattice width of lattice-free polytopes using only determinant minor parameter.

---

<a id="problem-1"></a>

## 1. Bound lattice width of lattice-free polytopes using only determinant minor parameter

Source paper authors: Marcel Celaya, Stefan Kuhlmann, Joseph Paat, Robert Weismantel

### 1. Problem Background

Let $A\in\mathbb{Z}^{m\times n}$ have full column rank and let $b\in\mathbb{Z}^m$. Define the (rational) polyhedron
$$

P(A,b):=\{x\in\mathbb{R}^n: Ax\le b\}.

$$
The polyhedron is called lattice-free if $P(A,b)\cap\mathbb{Z}^n=\emptyset$.

For a nonzero direction $a\in\mathbb{R}^n\setminus\{0\}$, define the width of $P(A,b)$ in direction $a$ by
$$

w_a(P(A,b)):=\max_{x\in P(A,b)} a^\top x-\min_{y\in P(A,b)} a^\top y.

$$
The lattice width is
$$

w(P(A,b)):=\min_{a\in\mathbb{Z}^n\setminus\{0\}} w_a(P(A,b)).

$$

For $k\in\{1,\dots,n\}$ define the maximal absolute $k\times k$ minor of $A$ by
$$

\Delta_k(A):=\max\{ |\det M| : M \text{ is a } k\times k \text{ submatrix of } A\}.

$$
In particular, $\Delta_n(A)$ is the maximum absolute determinant of an $n\times n$ submatrix of $A$ (which is nonzero because $A$ has full column rank $n$).

### 2. Open Problem

**Question 1.1.** Determine whether there exists a function $f:\mathbb{Z}_{\ge 1}\to\mathbb{R}_{\ge 0}$ such that for every dimension $n\ge 2$, every full-column-rank matrix $A\in\mathbb{Z}^{m\times n}$, and every $b\in\mathbb{Z}^m$ for which $P(A,b)$ is a (full-dimensional) lattice-free polyhedron, the lattice width satisfies
$$

w(P(A,b))\le f(\Delta_n(A)).

$$
Equivalently, decide whether the lattice width of lattice-free polytopes can be bounded above by a function depending only on $\Delta_n(A)$ (and not on $n$).

### 3. Known Results

The source paper (Celaya–Kuhlmann–Paat–Weismantel) frames the question of whether the lattice width $w(P(A,b))$ of a full-dimensional lattice-free polyhedron $P(A,b)=\{x:Ax\le b\}$ with integral right-hand side can be bounded by a function of $\Delta_n(A)$ alone, independent of the dimension $n$. Their main flatness advance is Theorem 4, which shows the existence of a facet normal (a row $a$ of $A$) with facet width $w_a(P(A,b)) < \frac{4n+2}{9}\,\Delta_n(A)-1$ under mild nonredundancy assumptions. This is obtained by linking flatness to a proximity parameter $\pi(A)$ and proving refined proximity bounds (Theorem 5) in terms of $\Delta_\alpha(A)$, using Minkowski’s theorem and a planar polygon area lower bound for sets satisfying $\tau Q\subseteq Q^\circ$.

Despite these improvements, the bound still scales linearly with $n$, and the determinant-only (dimension-free) bound remains open in general. The paper identifies regimes where dimension-free behavior does hold: for matrices whose $n\times n$ minors lie in $\{0,\pm k,\pm 2k\}$ one gets facet-width $\le \Delta_n(A)-2$ (Theorem 6), extending earlier results for strictly $\Delta$-modular matrices. It also points to classes such as simplices and special pyramids (via prior work) where width can be controlled by $\Delta_n(A)$.

The forward-citing works provided here are adjacent rather than resolving the width question. They develop determinant-parameterized structure and algorithms for bounded-subdeterminant matrices (e.g., threshold phenomena for $\ell_\infty$-SVP and strongly polynomial algorithms for structured totally $\Delta$-modular IPs), which may offer tools to control geometric complexity (faces, decompositions) in terms of $\Delta$. However, none establishes a bound of the form $w(P(A,b))\le f(\Delta_n(A))$ independent of $n$, so the problem remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #100 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4389224571_p0/partial_progress/100.pdf)

### 4. Source and Verification

- **Source paper:** Marcel Celaya, Stefan Kuhlmann, Joseph Paat, Robert Weismantel, [*Proximity and Flatness Bounds for Linear Integer Optimization*](https://doi.org/10.1287/moor.2022.0335), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 3, Introduction (discussion following Theorem 4)
- **Area:** geometry of numbers
- **Keywords:** `integer optimization`, `lattice-free polyhedra`, `lattice width`, `subdeterminants`, `flatness`, `polyhedral theory`
- **Upstream problem record:** [W4389224571_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4389224571_p0&n=100&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Marcel Celaya, Stefan Kuhlmann, Joseph Paat, Robert Weismantel, [*Proximity and Flatness Bounds for Linear Integer Optimization*](https://doi.org/10.1287/moor.2022.0335), Mathematics of Operations Research, 2023.
2. [*Totally -Modular IPs with Two Non-zeros in Most Rows*](https://doi.org/10.1007/978-3-031-93112-3_26).
3. [*On matrices over a polynomial ring with restricted subdeterminants*](https://doi.org/10.1007/978-3-031-59835-7_4).
4. [*A Threshold Phenomenon for the Shortest Lattice Vector Problem in the Infinity Norm*](https://example.com).
