# Design learning guarantees that improve liquid welfare in sequential budgeted auctions

This file contains the open problem on Design learning guarantees that improve liquid welfare in sequential budgeted auctions.

---

<a id="problem-1"></a>

## 1. Design learning guarantees that improve liquid welfare in sequential budgeted auctions

Source paper authors: Giannis Fikioris, Éva Tardos

### 1. Problem Background

Consider a sequential auction with one item per round over rounds $t\in[T]=\{1,\dots,T\}$ and players $i\in[n]$. Player $i$ has a hard budget $B_i>0$ and per-round value $v_{it}\in[0,1]$ for winning the round-$t$ item. (In the additive-valuation model, the value of a set of won rounds $S\subseteq[T]$ is $\sum_{t\in S} v_{it}$.) In each round players submit bids; in a first-price auction the highest bidder wins and pays her bid. Let $V_i$ and $P_i$ denote player $i$'s total realized value and payment over all rounds, and let the (budgeted quasilinear) utility be $U_i = V_i-P_i$ if $P_i\le B_i$ and $-\infty$ otherwise.

The system performance metric is liquid welfare. Player $i$'s liquid welfare contribution is
$$
\mathrm{LW}_i := \min\{B_i, V_i\},\qquad \mathrm{LW}:=\sum_{i=1}^n \mathrm{LW}_i.
$$
Let $\mathrm{LW}^*$ denote the maximum liquid welfare over all feasible allocations of items across rounds.

Players are assumed to be learning (not necessarily converging to equilibrium). A baseline behavioral benchmark studied in the paper is comparison to the best fixed multiplicative shading multiplier $\lambda\in[0,1]$ applied to values each round, subject to not exceeding the remaining budget. More generally, one can consider richer benchmark classes mapping values to bids; e.g., a (scalar) bidding rule $f:[0,1]\to[0,1]$ that is Lipschitz continuous (with some Lipschitz constant $L$) and induces bids $b_{it}=f(v_{it})$ each round, again subject to the remaining budget. One can also distinguish adversarially chosen value sequences $(v_{it})$ versus values drawn i.i.d. from a distribution (stochastic model).

### 2. Open Problem

**Question 1.1.** Determine whether there exist stronger, still natural learning-style performance guarantees on bidders' utilities that imply strictly better worst-case approximation of optimal liquid welfare $\mathrm{LW}^*$ in sequential budgeted first-price auctions than the bounds obtained under comparison to the best fixed shading multiplier.

In particular, analyze the liquid-welfare price of anarchy achievable when each player attains a small competitive ratio (or no-regret) with respect to richer benchmark classes such as:
1) the best Lipschitz continuous bidding function $f:[0,1]\to[0,1]$ mapping values to bids, and/or
2) the best fixed shading multiplier when the values $(v_{it})$ are sampled from a distribution rather than chosen adversarially.

The goal is to characterize the best provable factor $\alpha$ (as a function of the learning guarantee parameters) such that $\mathrm{LW} \ge \mathrm{LW}^*/\alpha$ (up to lower-order additive terms, if unavoidable) under these stronger learning assumptions.

### 3. Known Results

The source paper (Fikioris--Tardos) establishes that in sequential budgeted first-price auctions, a per-bidder learning guarantee relative to the best fixed shading multiplier $\lambda\in[0,1]$ implies a liquid-welfare approximation $\mathrm{LW} \ge \mathrm{LW}^*/\alpha$ with $\alpha=\gamma+\tfrac12+O(1/\gamma)$ (additive valuations), and nearly matching lower bounds $\Omega(\max\{\gamma,2\})$. The open direction is whether strengthening the behavioral benchmark (e.g., to Lipschitz value-to-bid maps) and/or assuming stochastic i.i.d. values can strictly improve worst-case liquid-welfare guarantees, especially in the $\gamma\approx 1$ regime where the paper’s bounds leave a gap between $2$ and $\approx 2.41$.

Forward citations provide partial progress along two axes. On the stochastic side, "Budget pacing in repeated auctions: Regret and efficiency without convergence" proves that gradient-based pacing under i.i.d. value profiles guarantees expected liquid welfare at least half of the optimal ex ante liquid welfare (up to $\tilde O(n\sqrt{T})$ additive loss) without requiring convergence, matching the familiar factor-2 barrier in expectation. On the richer-benchmark learning side, "No-regret algorithms in non-truthful auctions with budget and roi constraints" shows that in i.i.d. environments one can in fact achieve no-regret (full information) against the best $L$-Lipschitz bidding function, substantially strengthening what is algorithmically feasible beyond fixed multipliers; however, it does not connect such guarantees to market-level liquid welfare when all bidders learn.

Several related works reinforce both possibilities and barriers: equilibrium-based analyses in autobidding models with budgets show factor-2-type liquid-welfare guarantees under additional assumptions (e.g., $v\le B$) or under pacing-equilibrium abstractions, while other results show large inefficiency is possible in deterministic first-price mechanisms absent such assumptions, and computational hardness suggests that selecting outcomes beating factor $2-\epsilon$ can be intractable in related settings. Overall, the open problem remains unresolved: existing stochastic-learning results achieve $1/2$-optimal expected liquid welfare under pacing, and richer benchmark regret is achievable for single bidders, but a general theorem translating Lipschitz-benchmark no-regret (or i.i.d.-value assumptions) into strictly better worst-case liquid-welfare approximation for sequential budgeted first-price auctions has not yet been established.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #120 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4396905249_p0/partial_progress/120.pdf)

### 4. Source and Verification

- **Source paper:** Giannis Fikioris, Éva Tardos, [*Liquid Welfare Guarantees for No-Regret Learning in Sequential Budgeted Auctions*](https://doi.org/10.1287/moor.2023.0274), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 18, Section 8 (Conclusion)
- **Area:** learning in auctions
- **Keywords:** `sequential auctions`, `liquid welfare`, `budgets`, `first-price auctions`, `no-regret learning`, `competitive ratio`, `price of anarchy`, `Lipschitz bidding rules`
- **Upstream problem record:** [W4396905249_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4396905249_p0&n=120&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Giannis Fikioris, Éva Tardos, [*Liquid Welfare Guarantees for No-Regret Learning in Sequential Budgeted Auctions*](https://doi.org/10.1287/moor.2023.0274), Mathematics of Operations Research, 2024.
2. [*Budget pacing in repeated auctions: Regret and efficiency without convergence*](https://doi.org/10.48550/arXiv.2205.08674).
3. [*No-regret algorithms in non-truthful auctions with budget and roi constraints*](https://doi.org/10.1145/3696410.3714881).
4. [*Efficiency of non-truthful auctions in auto-bidding with budget constraints*](https://doi.org/10.1145/3589334.3645636).
5. [*A field guide for pacing budget and ROS constraints*](https://arxiv.org/).
6. [*Robust Temporal Guarantees in Budgeted Sequential Auctions*](https://arxiv.org/).
7. [*Tight Inapproximability for Welfare-Maximizing Autobidding Equilibria*](https://arxiv.org/).
