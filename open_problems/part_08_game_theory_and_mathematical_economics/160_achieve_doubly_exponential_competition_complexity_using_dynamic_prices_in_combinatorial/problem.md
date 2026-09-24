# Achieve doubly-exponential competition complexity using dynamic prices in combinatorial auctions

This file contains the open problem on Achieve doubly-exponential competition complexity using dynamic prices in combinatorial auctions.

---

<a id="problem-1"></a>

## 1. Achieve doubly-exponential competition complexity using dynamic prices in combinatorial auctions

Source paper authors: Johannes Brustle, José Correa, Paul Dütting, Tomer Ezra, Michal Feldman, Víctor Verdugo

### 1. Problem Background

Consider a combinatorial auction with a finite set of items \,$M$ and \,$n$ agents arriving online in a known order \,$1,2,\dots,n$. Each agent \,$i\in[n]$ has a valuation function \,$v_i:2^M\to\mathbb{R}_{\ge 0}$, drawn independently from a known distribution \,$F_i$ over a class of valuations (e.g., XOS or submodular). An online posted-pricing policy posts item prices and agents purchase bundles that maximize their quasilinear utility.

A (possibly adaptive) pricing policy specifies, before each agent arrives, a nonnegative price \,$p_{i,j}\ge 0$ for each currently unsold item \,$j\in M$. Upon arrival, agent \,$i$ observes current prices and chooses a bundle \,$T_i\subseteq M_i$ of currently available items \,$M_i\subseteq M$ that maximizes
$$

T_i \in \arg\max_{T\subseteq M_i}\bigl(v_i(T)-\sum_{j\in T} p_{i,j}\bigr).

$$
Ties may be broken arbitrarily. Items purchased are removed from availability.

We consider a resource-augmentation (repetition) model with \,$k$ independent copies (“blocks”) of buyers. In block \,$b\in[k]$, there is one copy of each agent type \,$i\in[n]$ with valuation \,$v_i^{(b)}\sim F_i$ independently across \,$i$ and \,$b$. The pricing policy observes the sequence of arriving buyers across all \,$nk$ arrivals and may update prices after each purchase (dynamic prices). Let \,$\mathrm{SW}_k$ denote the social welfare achieved by the policy on the \,$k$-block instance:
$$

\mathrm{SW}_k = \sum_{b=1}^k\sum_{i=1}^n v_i^{(b)}\bigl(T_i^{(b)}\bigr).

$$
On a single block (one copy of each agent), define the offline optimal welfare
$$

\mathrm{OPT}_1(v)=\max_{(S_1,\dots,S_n)\in\mathcal{P}(M)}\sum_{i=1}^n v_i(S_i),

$$
where \,$\mathcal{P}(M)$ is the set of partitions of \,$M$ into \,$n$ (possibly empty) bundles.

For \,$\varepsilon\in(0,1)$, the $(1-\varepsilon)$-competition complexity of a class of pricing policies is the smallest \,$k$ such that for every such product distribution \,$F=F_1\times\cdots\times F_n$, there exists a policy in the class whose expected welfare on \,$k$ blocks is at least \,$(1-\varepsilon)$ times the expected offline optimum on one block:
$$

\mathbb{E}_{v\sim F^k}[\mathrm{SW}_k]\;\ge\;(1-\varepsilon)\,\mathbb{E}_{v\sim F}[\mathrm{OPT}_1(v)].

$$

### 2. Open Problem

**Question 1.1.** Determine whether, for submodular or XOS combinatorial auctions with independent (product) valuation distributions \,$F=\times_{i=1}^n F_i$, there exists a class of fully dynamic posted-pricing policies whose $(1-\varepsilon)$-competition complexity scales as
$$

\Theta(\log\log(1/\varepsilon))

$$
(i.e., the number of blocks \,$k$ needed to guarantee
$\mathbb{E}_{v\sim F^k}[\mathrm{SW}_k]\ge (1-\varepsilon)\,\mathbb{E}_{v\sim F}[\mathrm{OPT}_1(v)]$
can be taken proportional to \,$\log\log(1/\varepsilon)$).

### 3. Known Results

The source paper introduces competition complexity as a resource-augmentation lens for online allocation and pricing, and explicitly raises the combinatorial-auction analogue of the doubly-exponential convergence phenomenon known for single-item prophet inequalities. In XOS/submodular combinatorial auctions with product distributions, it proves that block-consistent posted prices (prices fixed within each block but allowed to change between blocks) achieve welfare at least $(1-2^{-k})\,\mathbb{E}[\mathrm{OPT}_1]$, yielding $(1-\varepsilon)$-competition complexity $O(\log(1/\varepsilon))$. It also shows that fully static prices require $k=O(1/\varepsilon)$ blocks to reach $(1-\varepsilon)$ of $\mathbb{E}[\mathrm{OPT}_1]$. The open question is whether allowing fully dynamic prices (updating after each buyer) can improve this to $k=\Theta(\log\log(1/\varepsilon))$, matching the single-item block-threshold phenomenon.

The two forward-citing works provided do not resolve the combinatorial-auction question. They study prophet-inequality variants (correlations; multiple-selection) and develop techniques—especially doubly-exponentially decreasing quantile thresholds and quantile-space duality—that may be useful ingredients in a future dynamic-pricing construction. At present, there is no cited paper establishing $\Theta(\log\log(1/\varepsilon))$ competition complexity for dynamic posted prices in XOS/submodular combinatorial auctions under product distributions, so the problem remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #147 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4408830023_p0/partial_progress/147.pdf)

### 4. Source and Verification

- **Source paper:** Johannes Brustle, José Correa, Paul Dütting, Tomer Ezra, Michal Feldman, Víctor Verdugo, [*The Competition Complexity of Prophet Inequalities*](https://doi.org/10.1287/moor.2024.0684), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 5, Section 1.5 (Extensions)
- **Area:** online posted pricing
- **Keywords:** `competition complexity`, `prophet inequalities`, `combinatorial auctions`, `dynamic posted pricing`, `XOS valuations`, `submodular valuations`
- **Upstream problem record:** [W4408830023_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4408830023_p0&n=147&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Johannes Brustle, José Correa, Paul Dütting, Tomer Ezra, Michal Feldman, Víctor Verdugo, [*The Competition Complexity of Prophet Inequalities*](https://doi.org/10.1287/moor.2024.0684), Mathematics of Operations Research, 2025.
2. [*The competition complexity of prophet inequalities with correlations*](https://doi.org/10.1145/3736252.3742521).
3. *Competition Versus Complexity in Multiple-Selection Prophet Inequalities*.
