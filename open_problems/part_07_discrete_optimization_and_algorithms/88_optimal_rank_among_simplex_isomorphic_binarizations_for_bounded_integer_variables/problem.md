# Optimal rank among simplex-isomorphic binarizations for bounded integer variables

This file contains the open problem on Optimal rank among simplex-isomorphic binarizations for bounded integer variables.

---

<a id="problem-1"></a>

## 1. Optimal rank among simplex-isomorphic binarizations for bounded integer variables

Source paper authors: Manuel Aprile, Michele Conforti, Marco Di Summa

### 1. Problem Background

Let $x$ be an integer variable taking values in $\{0,1,\dots,k\}$. A (polyhedral) binarization of $x$ is a polytope $B\subseteq \mathbb{R}\times[0,1]^d$ in variables $(x,y)$, where $y\in[0,1]^d$ are intended to be binary, such that
$$

\pi_x\bigl(\{(x,y)\in B: y\in\{0,1\}^d\}\bigr)=\{0,1,\dots,k\},

$$
where $\pi_x$ denotes projection onto the $x$-coordinate.
A binarization $B$ is called natural if for every vertex $(\bar x,\bar y)\in V(B)$ one has $\bar x\in\mathbb{Z}$ (equivalently $\pi_x(V(B))=\{0,1,\dots,k\}$).

Given a mixed-integer polytope reformulated with binary variables, one can apply sequential convexification: for a polytope $Q\subseteq[0,1]^h\times\mathbb{R}^{n-h}$ and a binary variable $y_j$, define
$$

Q^{y_j}:=\operatorname{conv}\bigl(\{q\in Q: y_j=0\}\cup\{q\in Q: y_j=1\}\bigr).

$$
Iterating this operation over selected binary variables removes vertices fractional in those variables.

Fix a natural binarization $B\subseteq \mathbb{R}\times[0,1]^d$ of $x$ with range $\{0,1,\dots,d\}$ and view it as part of some binary extended formulation. For $\alpha\in\{0,1,\dots,d-1\}$, consider the integrality-separation property for $x$: no vertex of the current relaxation has $\alpha< x < \alpha+1$. The paper defines a rank parameter $\mathrm{rk}_B(\alpha)$ measuring the minimum number of sequential convexifications on the $d$ binary variables $y_1,\dots,y_d$ needed to enforce this property.

For the unary binarization $B_U(d)$ (a $d$-simplex with $d+1$ vertices) and the full binarization $B_F(d)$ (also a $d$-simplex), the paper derives closed-form expressions showing that $B_U(d)$ has smaller rank than $B_F(d)$ under this criterion.

A binarization is said to be isomorphic to a $d$-simplex if, as a polytope, it is combinatorially equivalent to a simplex (equivalently, it has $d+1$ vertices and complete graph skeleton).

### 2. Open Problem

**Question 1.1.** Among all natural binarizations $B\subseteq \mathbb{R}\times[0,1]^d$ of an integer variable $x\in\{0,1,\dots,d\}$ whose polytope $B$ is isomorphic (combinatorially equivalent) to a $d$-dimensional simplex, determine whether the unary binarization $B_U(d)$ minimizes the rank parameter among this class.

Equivalently: decide whether, for every natural simplex-isomorphic binarization $B$ of $x\in\{0,1,\dots,d\}$ and for every $\alpha\in\{0,1,\dots,d-1\}$, one has
$$

\mathrm{rk}_B(\alpha)\ge \mathrm{rk}_{B_U(d)}(\alpha),

$$
or otherwise provide a counterexample binarization $B$ (simplex-isomorphic and natural) with strictly smaller rank for at least one such $\alpha$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #63 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3170420696_p0/solutions/63.pdf)

### 4. Source and Verification

- **Source paper:** Manuel Aprile, Michele Conforti, Marco Di Summa, [*Binary Extended Formulations and Sequential Convexification*](https://doi.org/10.1287/moor.2021.0129), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5 (Conclusion), page 17.
- **Area:** integer programming formulations
- **Keywords:** `mixed-integer programming`, `extended formulations`, `binarization`, `sequential convexification`, `lift-and-project rank`, `polyhedral combinatorics`
- **Upstream problem record:** [W3170420696_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3170420696_p0&n=63&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Manuel Aprile, Michele Conforti, Marco Di Summa, [*Binary Extended Formulations and Sequential Convexification*](https://doi.org/10.1287/moor.2021.0129), Mathematics of Operations Research, 2023.
