# Achieve the optimal 1 minus 1 over e competitive ratio in reusable-resource matching

This file contains the open problem on Achieve the optimal 1 minus 1 over e competitive ratio in reusable-resource matching.

---

<a id="problem-1"></a>

## 1. Achieve the optimal 1 minus 1 over e competitive ratio in reusable-resource matching

Source paper authors: Steven Delong, Alireza Farhadi, Rad Niazadeh, Balasubramanian Sivan, Rajan Udwani

### 1. Problem Background

Online bipartite matching with reusable resources (OBMRR) is defined on a bipartite graph $G=(V,U;E)$, where $V$ is a set of offline vertices (reusable resources) and $U$ is a sequence of online vertices (requests) arriving over discrete times $j=1,2,\dots,|U|$ in an oblivious adversarial order. When request $j$ arrives, its incident edges $\{(i,j)\in E: i\in V\}$ are revealed, and an online algorithm must either match $j$ to an available neighbor $i\in V$ or leave $j$ unmatched; decisions are irrevocable.

Reusability is governed by a known deterministic usage duration $d\in\mathbb{N}$: if resource $i$ is matched at time $j$, then $i$ becomes unavailable for the next $d-1$ arrivals and becomes available again at time $j+d$. Equivalently, each resource $i$ can be matched at most once in any window of $d$ consecutive times.

In the vertex-weighted version, each resource $i\in V$ has a nonnegative weight $r_i$. Each time $i$ is matched, the algorithm earns reward $r_i$. The total reward of an algorithm is the sum of rewards over all matches it makes.

Let $\mathrm{ALG}(G,d)$ denote the (expected) total reward obtained by a (possibly randomized) online algorithm on instance $(G,d)$, where the expectation is over the algorithm's internal randomness. Let $\mathrm{OPT}(G,d)$ denote the maximum total reward achievable by an offline algorithm with full knowledge of the entire arrival sequence and graph, subject to the same reusability constraints.

The competitive ratio of an online algorithm is the largest $\Gamma\in[0,1]$ such that for all instances $(G,d)$, $\mathbb{E}[\mathrm{ALG}(G,d)]\ge \Gamma\,\mathrm{OPT}(G,d)$. For the classic non-reusable online bipartite matching (obtained as a special case when $d=|U|$), the optimal competitive ratio is $1-1/e$ for randomized algorithms, and this value also serves as an upper bound for OBMRR because OBMRR generalizes the non-reusable model (for large $d$, it reduces to the classic case).

### 2. Open Problem

**Question 1.1.** Determine whether there exists a randomized online algorithm for vertex-weighted OBMRR with deterministic usage duration $d$ that achieves competitive ratio $\Gamma = 1-1/e$. That is, does there exist an online algorithm such that for every instance $(G=(V,U;E),d,\{r_i\}_{i\in V})$,
$$

\mathbb{E}[\mathrm{ALG}(G,d)] \;\ge\; (1-1/e)\,\mathrm{OPT}(G,d)?

$$
If not, determine the optimal achievable competitive ratio for OBMRR.

### 3. Known Results

In Delong et al.'s OBMRR model, each offline vertex (resource) can be matched at most once in any length-$d$ window, and the objective is vertex-weighted reward $\sum r_i$ over matches. The paper highlights that the natural LP relaxation is not integral (integrality gap at least $7/6$ for $d=3$), so achieving the classic $1-1/e$ ratio for integral algorithms is nontrivial even though the fractional/large-capacity regime admits $1-1/e$ via balance-style methods. Their own contributions (Periodic Reranking at $\approx 0.589$ and an OCR-based primal-dual algorithm at $\approx 0.505$) establish the first guarantees beating the $1/2$ greedy barrier for unit-inventory reusable matching, but still fall short of $1-1/e$.

Forward-citing work has largely reinforced $1-1/e$ as the right asymptotic benchmark while leaving the exact unit-capacity question open. The strongest progress toward $1-1/e$ comes from large-inventory/large-capacity analyses: "Asymptotically optimal competitive ratio for online allocation of reusable resources" proves realization-independent algorithms with competitive ratio $(1-1/e-\delta)$ where $\delta\to 0$ as $c_{\min}\to\infty$, and also shows an asymptotic $1-1/e$ upper bound, establishing optimality in that limit. Related large-inventory robustness results (Batched Inventory Balancing under inventory shocks) similarly obtain ratios converging to $1-1/e$ as initial inventory grows, even with adversarial replenishments.

On the algorithmic-tools side, work on k-rental problems develops lossless dependent online rounding for fixed deterministic durations, suggesting a potential pathway: if one can design a strong fractional OBMRR policy (perhaps via the OBMRR LP or a tighter relaxation) whose marginals satisfy appropriate online-rounding conditions, then one might lift near-$1-1/e$ fractional performance to the integral setting. However, current rounding results either apply to identical-unit feasibility systems (k-rental) or to non-reusable matching (lossless online rounding for classic OBM), and do not yet yield a constant $1-1/e$ guarantee under the bipartite-compatibility plus sliding-window reuse constraints. Overall, the problem of achieving an exact $1-1/e$ competitive ratio for vertex-weighted OBMRR with deterministic duration $d$ and unit inventory remains open; the best known worst-case ratios for integral algorithms in this model remain below $1-1/e$, while $1-1/e$ is achievable only asymptotically in large-capacity regimes.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #93 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4387615605_p0/partial_progress/93.pdf)

### 4. Source and Verification

- **Source paper:** Steven Delong, Alireza Farhadi, Rad Niazadeh, Balasubramanian Sivan, Rajan Udwani, [*Online Bipartite Matching with Reusable Resources*](https://doi.org/10.1287/moor.2022.0242), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 27, Section 5 (Conclusion), paragraph titled “problems”
- **Area:** online matching
- **Keywords:** `online bipartite matching`, `reusable resources`, `competitive ratio`, `randomized algorithms`, `vertex-weighted matching`, `adversarial arrivals`
- **Upstream problem record:** [W4387615605_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4387615605_p0&n=93&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Steven Delong, Alireza Farhadi, Rad Niazadeh, Balasubramanian Sivan, Rajan Udwani, [*Online Bipartite Matching with Reusable Resources*](https://doi.org/10.1287/moor.2022.0242), Mathematics of Operations Research, 2023.
2. [*Asymptotically optimal competitive ratio for online allocation of reusable resources*](https://doi.org/10.1287/opre.2021.0695).
3. *Robustness of online inventory balancing to inventory shocks*.
4. *Leveraging reusability: Improved competitive ratio of greedy for reusable resources*.
5. [*Online Rounding and Pricing Schemes for k-Rental Problems*](https://doi.org/10.1145/3774904.3792368).
6. *Online Rounding Schemes for -Rental Problems*.
7. [*Online matching: A brief survey*](https://doi.org/10.1145/3699824.3699837).
