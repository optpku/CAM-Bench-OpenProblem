# Characterize the exact worst-case approximation ratio for i.i.d. k-selection prophet inequalities

This file contains the open problem on Characterize the exact worst-case approximation ratio for i.i.d. k-selection prophet inequalities.

---

<a id="problem-1"></a>

## 1. Characterize the exact worst-case approximation ratio for i.i.d. k-selection prophet inequalities

Source paper authors: Johannes Brustle, Sebastian Perez-Salazar, Víctor Verdugo

### 1. Problem Background

Fix integers $n\ge k\ge 1$. In the i.i.d. $k$-selection prophet inequality problem, a decision-maker observes a sequence of nonnegative random values $X_1,\dots,X_n$ revealed sequentially, where $X_t$ are independent and identically distributed from a known distribution $F$ supported on $\mathbb{R}_+$. After observing $X_t$, the decision-maker must irrevocably either accept it (and then it contributes $X_t$ to the payoff) or reject it. The policy may accept at most $k$ values in total.

Let $\pi$ denote any (possibly randomized) online policy for this problem. Its expected reward is $\mathbb{E}[\sum_{t\in S_\pi} X_t]$, where $S_\pi\subseteq\{1,\dots,n\}$ is the (random) set of accepted indices with $|S_\pi|\le k$.

The offline (prophet) benchmark is the expected sum of the $k$ largest values among $X_1,\dots,X_n$. Writing the order statistics as $X_{(1)}\le \cdots \le X_{(n)}$, the benchmark is
$$

\mathrm{OPT}_{n,k}(F)=\sum_{i=n-k+1}^n \mathbb{E}[X_{(i)}].

$$
The approximation ratio of a policy $\pi$ on distribution $F$ is
$$

\mathrm{AR}_{n,k}(\pi,F)=\frac{\mathbb{E}[\sum_{t\in S_\pi} X_t]}{\mathrm{OPT}_{n,k}(F)}.

$$
Define the optimal worst-case approximation ratio for $(k,n)$ as
$$

\gamma_{n,k}=\sup_{\pi}\;\inf_{F}\; \mathrm{AR}_{n,k}(\pi,F),

$$
where the infimum is over i.i.d. nonnegative distributions $F$ (the paper works with continuous $F$, but the precise regularity is not essential for stating the ratio).

For $k=1$, $\gamma_{n,1}$ has a known tight value in the limit $n\to\infty$, obtained via the Hill--Kertz differential equation; for $k\ge 2$, no comparable closed-form characterization is known. The paper introduces a coupled nonlinear system of differential equations, parameterized by constants $\theta_1,\dots,\theta_k$, whose solvability yields provable lower bounds of the form $\gamma_{n,k}\gtrsim \sum_{j=1}^k \theta_j$ for large $n$, but it does not give an exact analytical formula for $\gamma_{n,k}$ or for its worst-case limit over $n$.

### 2. Open Problem

**Question 1.1.** Determine an analytical (closed-form) characterization of the worst-case optimal approximation ratio $\gamma_{n,k}$ for the i.i.d. $(k,n)$-selection prophet inequality problem, for general $k\ge 2$ (and/or of the worst-case limit $\inf_{n\ge 1}\gamma_{n,k}$), rather than only bounds derived from the nonlinear differential-equation system.

### 3. Known Results

The open problem from Brustle--Perez-Salazar--Verdugo ("Splitting Guarantees for Prophet Inequalities via Nonlinear Systems") asks for an analytic closed-form characterization of the minimax i.i.d. $(k,n)$-selection prophet ratio $\gamma_{n,k}=\sup_\pi\inf_F \mathrm{AR}_{n,k}(\pi,F)$ for $k\ge 2$, analogous to the Hill--Kertz ODE characterization for $k=1$. The source paper itself makes two key structural advances: it gives an exact infinite-dimensional quantile-space LP $[P]_{n,k}$ for $\gamma_{n,k}$ (with the worst-case distribution encoded by a nonincreasing quantile function $h(u)=F^{-1}(1-u)$), and it derives a coupled nonlinear ODE system (involving upper incomplete gamma functions $\Gamma_\ell$) whose solvability at parameters $\theta_1^*,\dots,\theta_k^*$ yields asymptotic lower bounds $\gamma_{n,k}\gtrsim \sum_{j=1}^k \theta_j^*$ for large $n$. Numerically, this gives strong constants (e.g. $\sum_{j=1}^2\theta_j^*\approx 0.829$), but the paper explicitly leaves open whether $\inf_n\gamma_{n,k}=\sum_{j=1}^k\theta_j^*$ or any closed-form expression exists.

Subsequent work provides complementary partial progress toward “exactness,” but not a closed-form minimax constant for general $k\ge 2$. "Tightness without counterexamples: A new approach and new results for prophet inequalities" gives an exact minimax characterization of $\gamma_{k,n}$ for each fixed $(k,n)$ as a semi-infinite LP over quantiles, together with a provably convergent discretization scheme that computes $\gamma_{k,n}$ to arbitrary accuracy; it also recovers the Hill--Kertz characterization when $k=1$. This essentially resolves the *variational* characterization and computation of $\gamma_{n,k}$, but it still does not yield an analytic closed form for $k\ge 2$ or identify the worst-case limiting constant as $n\to\infty$.

Other cited papers obtain analytic formulas in restricted regimes that inform the open problem’s landscape. "Competition Versus Complexity in Multiple-Selection Prophet Inequalities" gives a genuine closed form for the best *single-threshold* policy (and a competition-complexity variant), yielding the explicit ratio $Q_{n,k}(k/n)/k\approx 1-1/\sqrt{2\pi k}$ when $m=n$; this is a lower bound on $\gamma_{n,k}$ but not tight for optimal adaptive policies. "Multiunit IID Prophet Inequalities via Extreme Value Asymptotics" and "Posted Pricing and Competition in Large Markets" use extreme-value asymptotics to derive explicit $n\to\infty$ ratios for fixed $F$ (and often restricted policies), showing how performance depends on tail index and giving large-$k$ expansions such as $1-\Theta((\log k)/k)$ or $1-\Theta(1/\sqrt{k})$ in certain classes; however, these do not perform the full minimax $\inf_F$ over all i.i.d. distributions. Overall, the problem remains open: we now have exact LP characterizations and strong asymptotic lower bounds via nonlinear systems, plus analytic results for restricted policy classes or distribution classes, but no Hill--Kertz-style closed-form solution for the minimax $\gamma_{n,k}$ when $k\ge 2$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #3 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4409528654_p0/partial_progress/3.pdf)

### 4. Source and Verification

- **Source paper:** Johannes Brustle, Sebastian Perez-Salazar, Víctor Verdugo, [*Splitting Guarantees for Prophet Inequalities via Nonlinear Systems*](https://doi.org/10.1287/moor.2024.0413), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 6 (Final Remarks), page 28 (arXiv v2 pagination).
- **Area:** prophet inequalities
- **Keywords:** `prophet inequality`, `optimal stopping`, `k-selection`, `approximation ratio`, `worst-case analysis`, `differential equations`
- **Upstream problem record:** [W4409528654_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4409528654_p0&n=3&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Johannes Brustle, Sebastian Perez-Salazar, Víctor Verdugo, [*Splitting Guarantees for Prophet Inequalities via Nonlinear Systems*](https://doi.org/10.1287/moor.2024.0413), Mathematics of Operations Research, 2025.
2. [*Tightness without counterexamples: A new approach and new results for prophet inequalities*](https://doi.org/10.1287/moor.2023.0221).
3. *Multiunit IID Prophet Inequalities via Extreme Value Asymptotics*.
4. [*The iid prophet inequality with limited flexibility*](https://doi.org/10.1287/moor.2022.0345).
5. *Competition Versus Complexity in Multiple-Selection Prophet Inequalities*.
6. *Posted Pricing and Competition in Large Markets*.
7. *Online Selection with Uncertain Disruption*.
