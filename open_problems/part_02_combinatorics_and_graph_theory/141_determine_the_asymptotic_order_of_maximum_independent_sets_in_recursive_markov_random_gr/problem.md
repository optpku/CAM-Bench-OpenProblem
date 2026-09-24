# Determine the asymptotic order of maximum independent sets in recursive Markov random graphs

This file contains the open problem on Determine the asymptotic order of maximum independent sets in recursive Markov random graphs.

---

<a id="problem-1"></a>

## 1. Determine the asymptotic order of maximum independent sets in recursive Markov random graphs

Source paper authors: Akshay Gupte, Yiran Zhu

### 1. Problem Background

Fix parameters $p\in(0,1]$ and $r\in(0,1)$, and write $\gamma:=1-r\in(0,1)$. Define the random graph $G^r_{n,p}$ on vertex set $\{v_1,\dots,v_n\}$ by the following recursive Markov edge-generation rule.

1) For each $i\in\{2,\dots,n\}$, the edge $(v_1,v_i)$ is present with probability $p$.

2) For each fixed $i\in\{3,\dots,n\}$, the edges $(v_j,v_i)$ for $j=2,3,\dots,i-1$ are generated sequentially as a (non-homogeneous) Markov chain along increasing $j$: conditional on the previous edge $(v_{j-1},v_i)$,
$$

\mathbb P\big((v_j,v_i)\in E\mid (v_{j-1},v_i)\notin E\big)=\mathbb P\big((v_{j-1},v_i)\in E\big),

$$
$$

\mathbb P\big((v_j,v_i)\in E\mid (v_{j-1},v_i)\in E\big)=r\,\mathbb P\big((v_{j-1},v_i)\in E\big).

$$
Equivalently, if $X^i_j\in\{0,1\}$ indicates whether $(v_j,v_i)$ is an edge, and $p^i_j:=\mathbb P(X^i_j=1)$, then $p^i_1=p$ and for $2\le j\le i-1$,
$$

 p^i_j = p^i_{j-1}\big(1-\gamma p^i_{j-1}\big).

$$

Let $\alpha(G)$ denote the stability number (maximum cardinality of an independent set) of a graph $G$. The asymptotic regime is $n\to\infty$; “with high probability (w.h.p.)” means with probability tending to 1 as $n\to\infty$.

### 2. Open Problem

**Question 1.1.** Find an explicit function $f(n)$ such that
$$

 f(n)=\Omega\!\left(\frac{n}{\log n}\right),\qquad f(n)=o(n),

$$
and
$$

\alpha\big(G^r_{n,p}\big)=\Theta\big(f(n)\big)\quad\text{w.h.p. as }n\to\infty.

$$
(Here $p\in(0,1]$ and $r\in(0,1)$ are fixed constants and $G^r_{n,p}$ is as defined above.)

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #125 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400583097_p0/solutions/125.pdf)

### 4. Source and Verification

- **Source paper:** Akshay Gupte, Yiran Zhu, [*Large Independent Sets in Recursive Markov Random Graphs*](https://doi.org/10.1287/moor.2022.0215), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 2.2 Discussion, page 7
- **Area:** random graphs
- **Keywords:** `random graphs`, `independent set`, `Markov dependence`, `asymptotic order`, `phase transition`
- **Upstream problem record:** [W4400583097_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400583097_p0&n=125&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Akshay Gupte, Yiran Zhu, [*Large Independent Sets in Recursive Markov Random Graphs*](https://doi.org/10.1287/moor.2022.0215), Mathematics of Operations Research, 2024.
