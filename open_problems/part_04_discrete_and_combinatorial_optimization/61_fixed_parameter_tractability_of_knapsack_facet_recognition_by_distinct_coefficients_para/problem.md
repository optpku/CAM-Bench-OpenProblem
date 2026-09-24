# Fixed-parameter tractability of knapsack facet recognition by distinct coefficients parameter

This file contains the open problem on Fixed-parameter tractability of knapsack facet recognition by distinct coefficients parameter.

---

<a id="problem-1"></a>

## 1. Fixed-parameter tractability of knapsack facet recognition by distinct coefficients parameter

Source paper authors: Rui Chen, Haoran Zhu

### 1. Problem Background

Let
$$
Q:=\{x\in\{0,1\}^n: a^\top x\le b\}
$$
be a (0--1) knapsack set with $a\in\mathbb{N}^n$ and $b\in\mathbb{N}$ such that $\max_i a_i\le b$, and let $P:=\mathrm{conv}(Q)$ be the associated knapsack polytope, which is then full-dimensional.

Consider a linear inequality
$$
\alpha^\top x \le \beta
$$
with $(\alpha,\beta)\in\mathbb{Z}^{n+1}_+$ (componentwise nonnegative integers). Let
$$
K := |\alpha|_+ := \bigl|\{\alpha_i : \alpha_i>0,\ i\in[n]\}\bigr|
$$
be the number of distinct positive coefficient values appearing among $\alpha_1,\dots,\alpha_n$.

Define the decision problem $\text{KNAPSACK\_FACETS}$: given $(a,b,\alpha,\beta)$ as above, decide whether $\alpha^\top x\le \beta$ defines a facet of $P$ (i.e., it is valid for $P$ and the face $\{x\in P: \alpha^\top x=\beta\}$ has dimension $\dim(P)-1$).

The paper shows that $\text{KNAPSACK\_FACETS}$ is $\mathrm{D}^p$-complete in general, and gives an XP-time algorithm parameterized by $K$ that runs in time $n^{K+O(1)}$ (assuming unit-cost arithmetic).

### 2. Open Problem

**Question 1.1.** Design an algorithm that, given a knapsack polytope $P=\mathrm{conv}(\{x\in\{0,1\}^n: a^\top x\le b\})$ with $(a,b)\in\mathbb{N}^{n+1}$ and an inequality $\alpha^\top x\le \beta$ with $(\alpha,\beta)\in\mathbb{Z}^{n+1}_+$, decides whether $\alpha^\top x\le \beta$ defines a facet of $P$ in time
$$
f(K)\cdot \mathrm{poly}(n),
$$
where $K=|\alpha|_+$ is the number of distinct positive coefficient values in $\alpha$, and $f$ is a computable function independent of $n$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #34 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4416295153_p0/partial_progress/34.pdf)

### 4. Source and Verification

- **Source paper:** Rui Chen, Haoran Zhu, [*The Complexity of Recognizing Facets for the Knapsack Polytope*](https://doi.org/10.1287/moor.2024.0481), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 16, Section 5 (Concluding Remarks)
- **Area:** knapsack polytope facets
- **Keywords:** `knapsack polytope`, `facet recognition`, `parameterized complexity`, `fixed-parameter tractability`, `Dp-completeness`, `polyhedral combinatorics`
- **Upstream problem record:** [W4416295153_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4416295153_p0&n=34&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Rui Chen, Haoran Zhu, [*The Complexity of Recognizing Facets for the Knapsack Polytope*](https://doi.org/10.1287/moor.2024.0481), Mathematics of Operations Research, 2025.
