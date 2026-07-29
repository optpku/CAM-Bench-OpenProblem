# Extend exchangeable joint-mix optimality for uncertain subsets under general convex costs

This file contains the open problem on Extend exchangeable joint-mix optimality for uncertain subsets under general convex costs.

---

<a id="problem-1"></a>

## 1. Extend exchangeable joint-mix optimality for uncertain subsets under general convex costs

Source paper authors: Takaaki Koike, Liyuan Lin, Ruodu Wang

### 1. Problem Background

Let $n\ge 2$ and let $[n]=\{1,\dots,n\}$. Let $F$ be a univariate probability distribution on $\mathbb{R}$ with finite second moment, and consider random vectors $X=(X_1,\dots,X_n)$ such that $X_i\sim F$ for all $i\in[n]$ (identical marginals).

For a subset $K\subseteq[n]$, define the partial sum $S_K(X)=\sum_{i\in K} X_i$, with the convention $S_\varnothing(X)=0$. Let $f:\mathbb{R}\to\mathbb{R}$ be a convex measurable function such that the relevant expectations are finite.

Let $2^{[n]}$ denote the power set of $[n]$. For a probability measure $\mu$ on $2^{[n]}$, define the uncertainty-averaged cost functional
$$

C_f^\mu(X):=\sum_{K\subseteq[n]} \mathbb{E}\bigl[f(S_K(X))\bigr]\,\mu(K).

$$
Let $\mathcal{M}$ be a nonempty set of probability measures on $2^{[n]}$ (an "uncertainty set"). Call $\mathcal{M}$ symmetric if for every $\mu\in\mathcal{M}$ and every permutation $\pi$ of $[n]$, the permuted measure $\mu^\pi$ defined by $\mu^\pi(K)=\mu(\pi(K))$ also lies in $\mathcal{M}$, where $\pi(K)=\{\pi(i): i\in K\}$.

The robust multi-marginal transport problem under subset uncertainty is
$$

\inf\Bigl\{\sup_{\mu\in\mathcal{M}} C_f^\mu(X):\ X_i\sim F\ \text{for all } i\in[n]\Bigr\}.

$$
A random vector $X$ is exchangeable if $(X_1,\dots,X_n)$ is distributionally invariant under permutations of coordinates. A joint mix is a vector with $\sum_{i=1}^n X_i=c$ almost surely for some constant $c$ (for identical marginals this is tied to complete mixability of $F$).

### 2. Open Problem

**Question 1.1.** Assume $F$ is $n$-completely mixable (so that at least one joint mix with marginals $F$ exists) and assume $\mathcal{M}$ is symmetric.

Determine whether, for every convex measurable $f:\mathbb{R}\to\mathbb{R}$ (with finite expectations), there exists an exchangeable joint mix $X$ with marginals $F$ that attains the optimum of the robust problem
$$

\inf\Bigl\{\sup_{\mu\in\mathcal{M}} \sum_{K\subseteq[n]} \mathbb{E}\bigl[f(S_K(X))\bigr]\,\mu(K):\ X_i\sim F\ \text{for all } i\in[n]\Bigr\}.

$$
Equivalently: characterize conditions under which some exchangeable joint mix solves the above robust optimization for general convex $f$.

### 3. Known Results

The open question posed by Koike, Lin, and Wang asks whether, under symmetric subset uncertainty $\mathcal M$ and assuming $F$ is $n$-completely mixable, one can always find an exchangeable joint mix that solves the robust multi-marginal transport problem $\inf_X \sup_{\mu\in\mathcal M} \sum_{K\subseteq[n]} \mathbb E[f(S_K(X))]\,\mu(K)$ for every convex measurable $f$. The source paper proves this robust optimality for the quadratic cost $f(x)=x^2$ (Theorem 4) and gives a strong uniqueness statement for max-over-subsets formulations (Theorem 5), showing that the optimizer must be an exchangeable negatively correlated joint mix with equicorrelation matrix $P_n^*$ in the homogeneous case. However, the extension to general convex $f$ remains open and is explicitly listed as Open Question 4 in the paper.

Among the forward citations provided, "Extended Convolution Bounds on the Fr\'{e}chet Problem: Robust Risk Aggregation and Risk Sharing" develops sharp bounds for robust aggregation of RVaR/quantile-type functionals over Fr\'{e}chet classes, which is adjacent in spirit to dependence-robust optimization. Nevertheless, it does not treat subset-indexed partial sums $S_K$, nor the maxmin formulation over an uncertainty set $\mathcal M\subset \mathcal P(2^{[n]})$, and it does not establish joint-mix or exchangeability optimality for general convex costs. At present, based on the supplied citation set, there is no paper resolving the general-convex-cost robust subset-uncertainty problem; progress appears limited to the quadratic-cost case and related dependence-extremal tools.

#### 3.1 Upstream solution and partial-progress records

- [Solution #108 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4391315199_p0/solutions/108.pdf)

### 4. Source and Verification

- **Source paper:** Takaaki Koike, Liyuan Lin, Ruodu Wang, [*Joint Mixability and Notions of Negative Dependence*](https://doi.org/10.1287/moor.2022.0121), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 6 (Conclusion), page 19 (in the provided parsed text; labeled page 19/32).
- **Area:** robust optimal transport
- **Keywords:** `joint mixability`, `negative dependence`, `multi-marginal optimal transport`, `robust optimization`, `convex cost`, `exchangeability`
- **Upstream problem record:** [W4391315199_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4391315199_p0&n=108&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Takaaki Koike, Liyuan Lin, Ruodu Wang, [*Joint Mixability and Notions of Negative Dependence*](https://doi.org/10.1287/moor.2022.0121), Mathematics of Operations Research, 2024.
2. *Extended Convolution Bounds on the Fr\'{e} chet Problem: Robust Risk Aggregation and Risk Sharing*.
