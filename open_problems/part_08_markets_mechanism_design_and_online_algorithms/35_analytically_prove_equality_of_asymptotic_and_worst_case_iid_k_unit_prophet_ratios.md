# Analytically prove equality of asymptotic and worst-case IID k-unit prophet ratios

This file contains the open problem on Analytically prove equality of asymptotic and worst-case IID k-unit prophet ratios.

---

<a id="problem-1"></a>

## 1. Analytically prove equality of asymptotic and worst-case IID k-unit prophet ratios

Source paper authors: Jiashuo Jiang, Will Ma, Jiawei Zhang

### 1. Problem Background

Consider the IID multi-unit prophet inequality with a uniform matroid (capacity) constraint. There are integers $k\ge 2$ (number of selection slots) and $n\ge 1$ (number of sequentially arriving agents). Each arriving agent $i\in\{1,\dots,n\}$ reveals a nonnegative random value $R_i$ upon arrival; the $R_i$ are independent and identically distributed (IID) according to a known distribution. An online policy must irrevocably accept or reject each agent upon arrival, may accept at most $k$ agents in total, and aims to maximize expected total accepted value $\mathbb{E}[\sum_{i\in S} R_i]$, where $|S|\le k$ is the (random) accepted set.

Let $\mathrm{DP}(I)$ denote the expected value of an optimal adaptive online policy (equivalently, the optimal dynamic program) on instance $I$. Let $\mathrm{Proph}(I)$ denote the prophet benchmark, defined as the expected sum of the $k$ largest realized values among $R_1,\dots,R_n$, i.e.
$$
\mathrm{Proph}(I)=\mathbb{E}\Big[\max_{S\subseteq \{1,\dots,n\},\ |S|\le k}\ \sum_{i\in S} R_i\Big].
$$
For fixed $k$ and $n$, define the tight IID prophet-inequality guarantee
$$
\gamma_{k,n} := \inf_{I\in \mathcal{I}^{\mathrm{IID}}_{k,n}} \frac{\mathrm{DP}(I)}{\mathrm{Proph}(I)},
$$
where $\mathcal{I}^{\mathrm{IID}}_{k,n}$ denotes the class of all IID instances with $k$ slots and $n$ agents (over all nonnegative value distributions).

Two natural aggregations over $n$ are:
1) the asymptotic-in-$n$ limit $\lim_{n\to\infty} \gamma_{k,n}$ (when it exists), and
2) the worst case over all horizons $\inf_{n\ge 1} \gamma_{k,n}$.

For $k=1$, classical work characterizes $\gamma_{1,n}$ and shows the worst case occurs as $n\to\infty$. For $k>1$, the paper reports numerical evidence about the relationship between $\lim_{n\to\infty}\gamma_{k,n}$ and $\inf_{n\ge 1}\gamma_{k,n}$, but does not give an analytic proof for all $k>1$.

### 2. Open Problem

**Question 1.1.** For each integer $k>1$, establish analytically that
$$
\lim_{n\to\infty} \gamma_{k,n} = \inf_{n\ge 1} \gamma_{k,n},
$$
where $\gamma_{k,n} := \inf_{I\in \mathcal{I}^{\mathrm{IID}}_{k,n}} \mathrm{DP}(I)/\mathrm{Proph}(I)$ is the tight performance guarantee of the optimal adaptive online policy relative to the prophet benchmark over IID instances with $k$ slots and $n$ agents.

### 3. Known Results

In the notation of Jiang–Ma–Zhang (2025), the IID capacity-$k$ tight ratio $\gamma_{k,n}=\inf_{I\in\mathcal I^{\mathrm{IID}}_{k,n}} \mathrm{DP}(I)/\mathrm{Proph}(I)$ admits an exact minimax reformulation as a semi-infinite “type coverage” LP (their $\mathrm{iidLP}^{\mathrm{DP/Proph}}_{k,n}$), obtained by dualizing an inner LP over value gaps $\Delta_j$ after fixing the quantile-type distribution. This framework yields numerical evidence (e.g. Table 1 for small $k$) and motivates the open question whether the horizon-worst case $\inf_{n\ge 1}\gamma_{k,n}$ is attained asymptotically, i.e. equals $\lim_{n\to\infty}\gamma_{k,n}$, for every fixed $k>1$.

The strongest forward progress is the nonlinear-systems approach of “Splitting guarantees for prophet inequalities via nonlinear systems”, which (i) gives an infinite-dimensional LP $[P]_{n,k}$ that exactly characterizes $\gamma_{k,n}$ for each finite $n,k$, and (ii) derives a coupled ODE system producing explicit asymptotic lower bounds of the form $\gamma_{k,n}\ge (1-O(k\log^2 n/n))\sum_{j=1}^k\theta_j^\star$ for all sufficiently large $n$. This substantially advances analytic control of the $n\to\infty$ regime, but it does not establish any horizon monotonicity or an identity between $\inf_n\gamma_{k,n}$ and the asymptotic constant; indeed it leaves open whether $\inf_n\gamma_{k,n}=\sum_{j=1}^k\theta_j^\star$.

Related works provide partial templates and tools rather than a solution. “Prophet Inequalities: Competing with the Top $\ell$ Items is Easy” proves a clean horizon-monotonicity phenomenon $CR_\ell(2n)\le CR_\ell(n)$ in a $k=1$ setting (with a different benchmark), suggesting that proving a suitable monotonicity/subadditivity property in $n$ could be the key missing step for $k>1$. Several papers on static pricing/thresholds and OCRS (e.g. “Static pricing for multi-unit prophet inequalities” and “Tight Guarantees for Multi-unit Prophet Inequalities and Online Stochastic Knapsack*”) rigorously identify Poisson or infinitesimal-splitting limits as worst cases in their respective models, reinforcing the conjecture that the minimax over horizons should be governed by an asymptotic (often Poisson-like) limit. However, none currently bridge these Poisson-limit extremality principles to the full-information optimal DP vs prophet benchmark in the IID $k$-unit setting, so the equality $\lim_{n\to\infty}\gamma_{k,n}=\inf_{n\ge1}\gamma_{k,n}$ remains open for $k>1$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #5 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4409922425_p0/partial_progress/5.pdf)

### 4. Source and Verification

- **Source paper:** Jiashuo Jiang, Will Ma, Jiawei Zhang, [*Tightness Without Counterexamples: A New Approach and New Results for Prophet Inequalities*](https://doi.org/10.1287/moor.2023.0221), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 6, Introduction, item 2 under “1.2. New Results”.
- **Area:** prophet inequalities
- **Keywords:** `iid prophet inequality`, `multi-unit selection`, `k-uniform matroid`, `tight guarantee`, `asymptotic horizon`, `worst-case horizon`
- **Upstream problem record:** [W4409922425_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4409922425_p0&n=5&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiashuo Jiang, Will Ma, Jiawei Zhang, [*Tightness Without Counterexamples: A New Approach and New Results for Prophet Inequalities*](https://doi.org/10.1287/moor.2023.0221), Mathematics of Operations Research, 2025.
2. [*Splitting guarantees for prophet inequalities via nonlinear systems*](https://doi.org/10.1287/moor.2024.0413).
3. [*Prophet Inequalities: Competing with the Top ℓ Items is Easy*](https://doi.org/10.1137/1.9781611978322.38).
4. *Posted Pricing and Competition in Large Markets*.
5. *Competition Versus Complexity in Multiple-Selection Prophet Inequalities*.
6. [*Static pricing for multi-unit prophet inequalities*](https://doi.org/10.1287/opre.2023.0031).
7. [*Tight Guarantees for Multi-unit Prophet Inequalities and Online Stochastic Knapsack∗*](https://doi.org/10.1137/1.9781611977073.51).
8. [*The iid prophet inequality with limited flexibility*](https://doi.org/10.1287/moor.2022.0345).
