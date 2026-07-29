# Determine optimal approximation constant for AnyPrice share allocations with additive valuations

This file contains the open problem on Determine optimal approximation constant for AnyPrice share allocations with additive valuations.

---

<a id="problem-1"></a>

## 1. Determine optimal approximation constant for AnyPrice share allocations with additive valuations

Source paper authors: Moshe Babaioff, Tomer Ezra, Uriel Feige

### 1. Problem Background

There are $n$ agents $N=\{1,\dots,n\}$ and a set $M$ of $m$ indivisible goods. Each agent $i$ has an additive valuation $v_i:2^M\to\mathbb{R}_{\ge 0}$ of the form $v_i(S)=\sum_{j\in S} v_i(j)$. Agents have entitlements (budgets) $b_i>0$ with $\sum_{i\in N} b_i = 1$.

For a fixed agent $i$, define the set of nonnegative price vectors with total price 1 as
$$
P=\{(p_1,\dots,p_m)\in\mathbb{R}_{\ge 0}^m: \sum_{j\in M} p_j = 1\}.
$$
The AnyPrice share (APS) of agent $i$ is
$$
\mathrm{APS}_i \;=\; \min_{p\in P}\; \max_{S\subseteq M\, :\, \sum_{j\in S} p_j\le b_i} v_i(S).
$$
(Equivalently, $\mathrm{APS}_i$ is the largest $z$ for which there exists a distribution over bundles $T\subseteq M$ each of value at least $z$, such that each item $j\in M$ appears with total probability at most $b_i$.)

An allocation is a partition $A=(A_1,\dots,A_n)$ of $M$ into disjoint bundles. For $\alpha\in(0,1]$, an $\alpha$-APS allocation is an allocation $A$ such that $v_i(A_i)\ge \alpha\,\mathrm{APS}_i$ for every agent $i\in N$.

For additive valuations and arbitrary entitlements, the paper proves existence and polynomial-time computability of $\alpha$-APS allocations for $\alpha=3/5$ (and stronger entitlement-dependent bounds), and notes that exact $\alpha=1$ is impossible in general when $n\ge 3$, even under equal entitlements.

### 2. Open Problem

**Question 1.1.** Determine the largest constant $\alpha^\star\in(0,1)$ such that, for every instance with additive valuations $(v_1,\dots,v_n)$ and entitlements $(b_1,\dots,b_n)$ with $\sum_i b_i=1$, there exists an allocation $A=(A_1,\dots,A_n)$ satisfying
$$
\forall i\in N:\quad v_i(A_i)\ge \alpha^\star\,\mathrm{APS}_i,
$$
where $\mathrm{APS}_i$ is defined by
$$
\mathrm{APS}_i \;=\; \min_{p\in P}\; \max_{S\subseteq M\, :\, \sum_{j\in S} p_j\le b_i} v_i(S).
$$
Equivalently, determine the optimal worst-case approximation factor for simultaneously guaranteeing each agent a fixed constant fraction of her AnyPrice share (for additive valuations), and provide matching upper and lower bounds (and, if possible, a polynomial-time algorithm achieving $\alpha^\star$).

### 3. Known Results

The AnyPrice Share (APS) benchmark of Babaioff–Ezra–Feige is defined for each agent $i$ with entitlement $b_i$ as $\mathrm{APS}_i=\min_{p\in P}\max\{v_i(S):\sum_{j\in S}p_j\le b_i\}$, equivalently as the largest $z$ for which there exists a distribution over bundles of value at least $z$ where each item appears with total probability at most $b_i$. For additive valuations, the source paper proves a universal constant guarantee: there is always a polynomial-time computable allocation giving every agent at least $3/5$ of her APS (and in fact $\max\{3/5,1/(2-b_i)\}$ depending on entitlement). It also shows exact $\alpha=1$ is impossible for $n\ge 3$ even under equal entitlements, so the central question is to pin down the optimal universal constant $\alpha^\star\in(0,1)$ for additive valuations and arbitrary entitlements.

Subsequent work in the provided forward citations does not close this gap. "Weighted fairness notions for indivisible items revisited" consolidates the state of the art: it reiterates the $3/5$ lower bound and points to an impossibility barrier inherited from maximin-share (MMS) lower bounds, namely that no $\alpha$-APS allocation exists for any $\alpha>39/40$ (via instances where no allocation gives everyone more than $39/40$ of MMS, and $\mathrm{APS}\ge \mathrm{MMS}$). Its main new APS-related contribution is restricted-domain: for binary additive valuations, the weighted egalitarian (WEG) rule is APS-fair (achieves $\alpha=1$ for APS). A separate line, "Almost (Weighted) Proportional Allocations for Indivisible Chores**", studies chores and shows WPROPX implies a factor-2 approximation to a chore-analog of APS; while not directly improving goods-APS constants, it suggests that price-based and proportionality-up-to-one-item techniques can yield APS-type guarantees in other manna models.

Overall, based on the cited literature here, the optimal constant $\alpha^\star$ for additive valuations and arbitrary entitlements remains open: the best universal lower bound is $3/5$ (with better entitlement-dependent guarantees), and the best stated universal upper bound is $39/40$ (inherited from MMS impossibility for equal entitlements, hence applying to APS as well). Narrowing the gap likely requires either (i) new impossibility constructions tailored to APS (not just MMS), or (ii) improved algorithms/rounding arguments that exploit the APS dual (distributional) characterization beyond the current bidding-game analysis.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #62 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3135365769_p0/partial_progress/62.pdf)

### 4. Source and Verification

- **Source paper:** Moshe Babaioff, Tomer Ezra, Uriel Feige, [*Fair-Share Allocations for Agents with Arbitrary Entitlements*](https://doi.org/10.1287/moor.2021.0199), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 5, Introduction (paragraph after Theorem 1.3); reiterated page 5 (after Theorem 1.4) and page 23, Section 6.3 (Open Questions, items 2–3).
- **Area:** fair division
- **Keywords:** `fair division`, `indivisible goods`, `anyprice share`, `approximation ratio`, `additive valuations`, `unequal entitlements`
- **Upstream problem record:** [W3135365769_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3135365769_p0&n=62&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Moshe Babaioff, Tomer Ezra, Uriel Feige, [*Fair-Share Allocations for Agents with Arbitrary Entitlements*](https://doi.org/10.1287/moor.2021.0199), Mathematics of Operations Research, 2023.
2. [*Weighted fairness notions for indivisible items revisited*](https://doi.org/10.1145/3665799).
3. [*Almost (Weighted) Proportional Allocations for Indivisible Chores✱✱*](https://doi.org/10.1145/3485447.3512057).
4. *Fair division of indivisible goods: Recent progress and open questions*.
5. *Fair division of indivisible goods: A survey*.
