# Compute interim envy-free lotteries maximizing expected average Nash welfare in matching instances

This file contains the open problem on Compute interim envy-free lotteries maximizing expected average Nash welfare in matching instances.

---

<a id="problem-1"></a>

## 1. Compute interim envy-free lotteries maximizing expected average Nash welfare in matching instances

Source paper authors: Ioannis Caragiannis, Panagiotis Kanellopoulos, Maria Kyropoulou

### 1. Problem Background

Consider a matching allocation instance with a set of agents $N$ and a set of indivisible items $I$ such that $|N|=|I|=n$. Each agent $i\in N$ has a nonnegative additive valuation $v_i(S)=\sum_{g\in S} v_i(g)$ over bundles $S\subseteq I$. A (deterministic) matching $\mu$ assigns each agent $i$ exactly one item $\mu(i)\in I$, with each item assigned to exactly one agent.

A lottery $Q$ is a probability distribution over matchings. If a matching $\mu\sim Q$ is drawn, agent $i$ receives the random item $\mu(i)$. The lottery $Q$ is interim envy-free (iEF) if for every ordered pair of agents $i,j\in N$ and every item $g\in I$ that agent $i$ receives with positive probability under $Q$ (i.e., $\Pr_{\mu\sim Q}[\mu(i)=g]>0$),
$$

v_i(g) \ge \mathbb{E}_{\mu\sim Q}\bigl[v_i(\mu(j))\mid \mu(i)=g\bigr].

$$

For a deterministic matching $\mu$, the (average) Nash social welfare is the geometric mean of agents' utilities:
$$

\mathrm{avN}(\mu)=\Bigl(\prod_{i\in N} v_i(\mu(i))\Bigr)^{1/n}.

$$
For a lottery $Q$, the objective of interest is the expected average Nash welfare $\mathbb{E}_{\mu\sim Q}[\mathrm{avN}(\mu)]$.

### 2. Open Problem

**Question 1.1.** Given a matching allocation instance $(N,I,(v_i)_{i\in N})$ with $|N|=|I|$, determine how to compute an interim envy-free lottery $Q$ that maximizes the expected average Nash social welfare
$$

\max_{Q\ \text{iEF}}\ \mathbb{E}_{\mu\sim Q}[\mathrm{avN}(\mu)].

$$
In particular, design an algorithm for this optimization problem (or determine its computational complexity).

### 3. Known Results

The EC’21 paper of Caragiannis, Kanellopoulos, and Kyropoulou introduces interim envy-freeness (iEF) for lotteries over allocations and gives polynomial-time algorithms for matching instances to compute iEF lotteries maximizing expected utilitarian welfare, egalitarian welfare, and expected log-Nash welfare (equivalently, expected $\sum_i \ln v_i(\mu(i))$). Their approach formulates iEF as a linear program over matchings and solves it via the ellipsoid method on the dual, using a separation oracle reducible to a novel combinatorial problem (maximum edge-pair-weighted bipartite perfect matching, 2EBM) solvable in polynomial time via Cruse’s decomposition of centrosymmetric doubly stochastic matrices.

However, the paper explicitly notes that maximizing expected average Nash welfare $\mathbb{E}[\mathrm{avN}(\mu)]$, where $\mathrm{avN}(\mu)=(\prod_i v_i(\mu(i)))^{1/n}$, is not equivalent to maximizing expected log-Nash welfare for lotteries, and leaves the former as an open problem. The only forward citation provided here (“Optimally interpolating between ex-ante fairness and welfare”) offers a generic distribution-mixing framework under total-variation constraints to a fair prior, but does not address iEF feasibility or the nonlinearity of $\mathbb{E}[\mathrm{avN}(\mu)]$ under iEF constraints. Thus, with the current evidence, the computational status of iEF-constrained maximization of expected average Nash welfare in matching instances remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #61 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3133568468_p0/partial_progress/61.pdf)
- [pipeline final 61](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3133568468_p0/partial_progress/pipeline_final_61.pdf)

### 4. Source and Verification

- **Source paper:** Ioannis Caragiannis, Panagiotis Kanellopoulos, Maria Kyropoulou, [*On Interim Envy-Free Allocation Lotteries*](https://doi.org/10.1287/moor.2023.0203), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 19, Section 7 (problems)
- **Area:** fair division lotteries
- **Keywords:** `fair division`, `interim envy-freeness`, `random allocations`, `Nash social welfare`, `average Nash welfare`, `matching instances`
- **Upstream problem record:** [W3133568468_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3133568468_p0&n=61&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ioannis Caragiannis, Panagiotis Kanellopoulos, Maria Kyropoulou, [*On Interim Envy-Free Allocation Lotteries*](https://doi.org/10.1287/moor.2023.0203), Mathematics of Operations Research, 2025.
2. *Optimally interpolating between ex-ante fairness and welfare*.
