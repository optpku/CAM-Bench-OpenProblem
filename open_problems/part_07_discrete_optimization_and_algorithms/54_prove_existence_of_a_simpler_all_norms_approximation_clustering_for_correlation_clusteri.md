# Prove existence of a simpler all-norms approximation clustering for correlation clustering

This file contains the open problem on Prove existence of a simpler all-norms approximation clustering for correlation clustering.

---

<a id="problem-1"></a>

## 1. Prove existence of a simpler all-norms approximation clustering for correlation clustering

Source paper authors: Sami Davies, Benjamin Moseley, Heather Newman

### 1. Problem Background

Let $G=(V,E)$ be an unweighted complete graph on $n=|V|$ vertices whose edges are labeled $+$ (similar) or $-$ (dissimilar). Write $E^+$ and $E^-$ for the sets of positive and negative edges, respectively.

A clustering $\mathcal C$ is a partition of $V$ into clusters. For a vertex $u\in V$, let $\mathcal C(u)$ denote the cluster containing $u$, and let $V\setminus \mathcal C(u)$ be the vertices in other clusters.

An edge $\{u,v\}\in E^+$ is a disagreement under $\mathcal C$ if $u$ and $v$ lie in different clusters; an edge $\{u,v\}\in E^-$ is a disagreement if $u$ and $v$ lie in the same cluster.

Define the disagreement count (disagreement degree) of $u$ under $\mathcal C$ by
$$

 y_{\mathcal C}(u) := |\{v\in V: \{u,v\}\text{ is a disagreement under }\mathcal C\}|,

$$
and the disagreement vector $y_{\mathcal C}\in \mathbb Z_{\ge 0}^n$ by $(y_{\mathcal C}(u))_{u\in V}$.

For $p\in [1,\infty)$, define $\|y_{\mathcal C}\|_p := \big(\sum_{u\in V} y_{\mathcal C}(u)^p\big)^{1/p}$, and $\|y_{\mathcal C}\|_{\infty} := \max_{u\in V} y_{\mathcal C}(u)$.

For each $p\in [1,\infty]$, let
$$

\mathrm{OPT}_p := \min_{\mathcal C\text{ a partition of }V}\ \|y_{\mathcal C}\|_p

$$
denote the optimal $\ell_p$-norm disagreement objective value.

A clustering $\mathcal C$ is said to be a constant-factor approximation simultaneously for all $\ell_p$-objectives (the all-norms objective) if there exists a universal constant $\alpha>0$ such that for every $p\in [1,\infty]$, $\|y_{\mathcal C}\|_p \le \alpha\,\mathrm{OPT}_p$.

### 2. Open Problem

**Question 1.1.** Give a proof, not necessarily algorithmic, that for every unweighted complete signed graph $G=(V,E)$ as above, there exists a clustering $\mathcal C$ and a universal constant $\alpha>0$ (independent of $n$, the instance $G$, and $p$) such that
$$

\|y_{\mathcal C}\|_p \le \alpha\,\mathrm{OPT}_p \qquad \text{for all } p\in [1,\infty].

$$
The goal is to obtain a simpler existential argument for the existence of such a clustering than the paper's algorithmic construction and analysis.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #27 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414091988_p0/partial_progress/27.pdf)

### 4. Source and Verification

- **Source paper:** Sami Davies, Benjamin Moseley, Heather Newman, [*Fast Combinatorial Algorithms for Simultaneously Approximating All ℓ<sub><i>p</i></sub>-Norms in Correlation Clustering*](https://doi.org/10.1287/moor.2024.0567), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 17, Section 5 (Conclusion).
- **Area:** correlation clustering
- **Keywords:** `correlation clustering`, `all-norms objective`, `simultaneous approximation`, `lp norms`, `disagreement vector`
- **Upstream problem record:** [W4414091988_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414091988_p0&n=27&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Sami Davies, Benjamin Moseley, Heather Newman, [*Fast Combinatorial Algorithms for Simultaneously Approximating All ℓ<sub><i>p</i></sub>-Norms in Correlation Clustering*](https://doi.org/10.1287/moor.2024.0567), Mathematics of Operations Research, 2025.
