# Constant-factor multiplicative violation for cut-constrained spanning trees in laminar families

This file contains the open problem on Constant-factor multiplicative violation for cut-constrained spanning trees in laminar families.

---

<a id="problem-1"></a>

## 1. Constant-factor multiplicative violation for cut-constrained spanning trees in laminar families

Source paper authors: Martin Nägele, Rico Zenklusen

### 1. Problem Background

Let $G=(V,E)$ be an undirected graph with nonnegative edge costs $c:E\to\mathbb{R}_{\ge 0}$. For a nonempty proper vertex subset $S\subset V$, let $\delta(S)\subseteq E$ denote the cut-set, i.e., edges with exactly one endpoint in $S$. A family $\mathcal{L}\subseteq 2^V\setminus\{\emptyset,V\}$ is laminar if for any $A,B\in\mathcal{L}$, either $A\subseteq B$, $B\subseteq A$, or $A\cap B=\emptyset$. Consider spanning-tree feasibility: a spanning tree is a set $T\subseteq E$ with $|T|=|V|-1$ that connects all vertices.

In a laminarly cut-constrained spanning tree problem, one is given upper bounds $b_S\in\mathbb{Z}_{\ge 0}$ for each $S\in\mathcal{L}$, and seeks a spanning tree of minimum cost subject to $|T\cap \delta(S)|\le b_S$ for all $S\in\mathcal{L}$. In the special case where $\mathcal{L}$ is a chain $\emptyset\subsetneq S_1\subsetneq S_2\subsetneq\cdots\subsetneq S_k\subsetneq V$, this becomes the (upper-bounded) minimum chain-constrained spanning tree problem.

A common approximation notion allows multiplicative violation of the cut constraints: for $\beta\ge 1$, the spanning tree $T$ is said to have $\beta$-multiplicative violation if $|T\cap \delta(S)|\le \beta\, b_S$ for all $S\in\mathcal{L}$. (Cost may be compared to the optimum cost among spanning trees satisfying all constraints exactly.)

### 2. Open Problem

**Question 1.1.** Determine whether there exists a constant $\beta=O(1)$ and a polynomial-time algorithm that, for every instance $(G=(V,E),c,\mathcal{L},(b_S)_{S\in\mathcal{L}})$ with laminar $\mathcal{L}$, outputs a spanning tree $T\subseteq E$ such that
$$
|T\cap \delta(S)|\le \beta\, b_S \quad\text{for all } S\in\mathcal{L},
$$
while having cost
$$
c(T)\le c(\mathrm{OPT}),
$$
where $\mathrm{OPT}$ denotes a minimum-cost spanning tree satisfying $|\mathrm{OPT}\cap \delta(S)|\le b_S$ for all $S\in\mathcal{L}$.

### 3. Known Results

In Nägele--Zenklusen’s framework, the laminar cut-constrained spanning tree problem (upper bounds $|T\cap\delta(S)|\le b_S$ for $S\in\mathcal L$) is highlighted as a canonical setting where iterative relaxation yields near-optimal additive violations but leaves open whether one can obtain $O(1)$-multiplicative violations while preserving optimal cost $c(T)\le c(\mathrm{OPT})$. Their paper achieves a quasi-polynomial-time $(1,1+\varepsilon)$ guarantee for chain constraints and extends to laminar families of bounded width, but the running time is quasi-polynomial in general and does not settle the fully polynomial-time, general-laminar question.

Subsequent work has made substantial progress on the multiplicative-violation side for general laminar families via “laminar thin tree” techniques. In particular, "Thin trees for laminar families" and Klein’s dissertation chapter on laminar crossing spanning trees provide constant-factor bicriteria approximations: they output a spanning tree with $|T\cap\delta(S)|\le \beta b_S$ for a constant $\beta$, but at the price of a constant-factor increase in cost (e.g. $c(T)\le O(1)\,c(\mathrm{OPT})$). These results can be viewed as achieving constant thinness with respect to an explicitly given laminar family, aligning with the thin-tree motivations discussed by Nägele--Zenklusen.

However, the open problem’s stricter requirement $c(T)\le c(\mathrm{OPT})$ (no cost blow-up) remains unmet by the cited forward work: existing constant-$\beta$ guarantees appear to require relaxing the objective, while exact-cost guarantees are currently known mainly for additive-violation regimes (iterative relaxation) or for restricted laminar structure (chains / bounded width with quasi-polynomial dependence). A promising direction suggested by the trajectory is to combine laminar-aligned rounding/iterative relaxation (to control $|T\cap\delta(S)|$) with objective-preserving “alteration” or exchange-based local improvement steps (as in Nägele--Zenklusen) to try to remove the constant cost factor, but no such full resolution is present in the provided citation set.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #94 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4387617469_p0/partial_progress/94.pdf)

### 4. Source and Verification

- **Source paper:** Martin Nägele, Rico Zenklusen, [*A New Dynamic Programming Approach for Spanning Trees with Chain Constraints and Beyond*](https://doi.org/10.1287/moor.2023.0012), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 3, Introduction (discussion of prior work on laminar cut constraints following results of Bansal et al. and Olver–Zenklusen).
- **Area:** degree constrained spanning trees
- **Keywords:** `spanning trees`, `laminar cut constraints`, `chain constraints`, `bicriteria approximation`, `multiplicative violation`, `network design`
- **Upstream problem record:** [W4387617469_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4387617469_p0&n=94&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Martin Nägele, Rico Zenklusen, [*A New Dynamic Programming Approach for Spanning Trees with Chain Constraints and Beyond*](https://doi.org/10.1287/moor.2023.0012), Mathematics of Operations Research, 2023.
2. *Thin trees for laminar families*.
3. *Finding Structure in Entropy: Improved Approximation Algorithms for TSP and other Graph Problems*.
4. [*Reducing path TSP to TSP*](https://doi.org/10.1145/3357713.3384256).
