# Largest achievable domination factor for feasible self-maximizing polynomial-time shares under additivity

This file contains the open problem on Largest achievable domination factor for feasible self-maximizing polynomial-time shares under additivity.

---

<a id="problem-1"></a>

## 1. Largest achievable domination factor for feasible self-maximizing polynomial-time shares under additivity

Source paper authors: Moshe Babaioff, Uriel Feige

### 1. Problem Background

Consider fair division of a finite set of indivisible goods $M$ among $n\ge 2$ equally entitled agents, with no monetary transfers. Each agent has an additive valuation $v:2^M\to \mathbb{R}_{\ge 0}$, meaning there are item values $v(j)\ge 0$ for $j\in M$ and $v(S)=\sum_{j\in S} v(j)$ for all $S\subseteq M$. An allocation is a partition $A=(A_1,\dots,A_n)$ of $M$ into $n$ (possibly empty) disjoint bundles.

A (fairness) share is a function $s$ mapping a valuation $v$ and an agent count $n$ to a nonnegative value $s(v,n)$. A share $s$ is feasible (for additive valuations) if for every instance $(v_1,\dots,v_n)$ of additive valuations there exists an allocation $A$ such that $v_i(A_i)\ge s(v_i,n)$ for all agents $i$.

Given a share $s$, define its (worst acceptable-bundle) guarantee $\hat s(v,n)$ as the minimum value (under $v$) among bundles whose value is at least $s(v,n)$:
$$
\hat s(v,n)=\min\{v(S): S\subseteq M,\ v(S)\ge s(v,n)\}.
$$
For a true valuation $v$ and a reported valuation $v'$, define the implied guarantee
$$
\hat s_v(v') = \min\{v(S): S\subseteq M,\ v'(S)\ge s(v',n)\}.
$$
The share $s$ is self-maximizing if truthful reporting maximizes the implied guarantee for every additive $v$: $\hat s_v(v)\ge \hat s_v(v')$ for all reports $v'$.

The maximin share (MMS) for additive $v$ and $n$ agents is
$$
\mathrm{MMS}_n(v)=\max_{(B_1,\dots,B_n)\text{ partition of }M}\ \min_{j\in[n]} v(B_j).
$$
A share $s$ is $\rho$-dominating (for a fixed $n$, or uniformly over $n$) if it guarantees at least a $\rho$ fraction of the MMS pointwise:
$$
 s(v,n)\ \ge\ \rho\,\mathrm{MMS}_n(v)\qquad \text{for all additive } v.
$$
(Equivalently, it $\rho$-dominates every feasible share, since $\mathrm{MMS}$ dominates all feasible shares when defined on a fixed $(M,n)$.)

Computability requirement: $s$ is polynomial-time computable if, given additive item values (or value-query access), one can compute $s(v,n)$ in time polynomial in $|M|$ (and the input encoding).

### 2. Open Problem

**Question 1.1.** Determine
$$
\rho^* = \sup\Big\{\rho\in[0,1]: \exists\ \text{a share } s \text{ for additive valuations such that}\Big\}

$$
subject to all of the following holding (uniformly for all $n\ge 2$):

1) (Feasibility) For every $n\ge 2$ and every additive instance $(v_1,\dots,v_n)$, there exists an allocation $A$ with $v_i(A_i)\ge s(v_i,n)$ for all $i$.

2) (Self-maximizing) For every $n\ge 2$, every additive true valuation $v$, and every additive report $v'$, $\hat s_v(v)\ge \hat s_v(v')$.

3) (Polynomial-time computable) For every $n\ge 2$ and additive $v$, the value $s(v,n)$ can be computed in polynomial time.

4) ($\rho$-domination of MMS) For every $n\ge 2$ and additive $v$, $s(v,n)\ge \rho\,\mathrm{MMS}_n(v)$.

Equivalently, compute the maximal approximation factor $\rho^*$ achievable by feasible, self-maximizing, polynomial-time computable shares relative to $\mathrm{MMS}_n$ for additive valuations.

### 3. Known Results

The Babaioff--Feige open problem asks for the largest uniform $\rho^*$ such that there exists a share function $s(v,n)$ for additive valuations that is simultaneously feasible (there is always an allocation meeting all agents' shares), self-maximizing in the implied-guarantee sense $\hat s_v(v)\ge \hat s_v(v')$, polynomial-time computable, and pointwise $\rho$-dominating the maximin share $\mathrm{MMS}_n$. In the source paper, Babaioff and Feige introduce the share/contract viewpoint, prove that exact SM-domination is impossible for any class containing additive valuations (via picking-order shares and MMS infeasibility), and then give explicit positive constructions: ordinal maximin shares (self-maximizing by design) and the nested shares $\mathrm{NS}_{n,3}$, which are feasible, polynomial-time computable, and guarantee $\frac{2n}{3n-1}$-MMS for all $n$, improving to $4/5$-MMS for $n\le 4$; for $n=2$ they give a PTAS achieving $(1-\varepsilon)$-MMS.

Subsequent work in the forward-citation set does not determine $\rho^*$ in this exact framework. Several papers explore adjacent notions of feasible shares: quantile shares and thinned quantile shares establish constant-quantile feasibility (even universal feasibility for all monotone valuations after thinning), and these benchmarks are also (informally) self-maximizing and efficiently approximable by sampling. However, these works do not provide pointwise lower bounds of the form $s(v,n)\ge \rho\,\mathrm{MMS}_n(v)$ for all additive $v$, so they do not improve the best known $\rho$ under the MMS-domination requirement.

On the incentives side, work on truthful(-in-expectation) mechanisms and on characterizations of deterministic truthful mechanisms highlights strong constraints when one insists on dominant-strategy truthfulness of allocation rules; these results yield poor MMS approximations for broad classes of truthful mechanisms. While conceptually related, they do not translate directly to the implied-guarantee self-maximization condition for shares. Overall, the state of the art remains that constant $\rho$ is achievable (at least $\approx 2/3$ uniformly in $n$ via nested shares, and $4/5$ for $n\le 4$), but the optimal uniform $\rho^*$ for feasible, self-maximizing, polynomial-time shares that dominate $\mathrm{MMS}_n$ for additive valuations remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #128 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4401117667_p0/partial_progress/128.pdf)

### 4. Source and Verification

- **Source paper:** Moshe Babaioff, Uriel Feige, [*Fair Shares: Feasibility, Domination, and Incentives*](https://doi.org/10.1287/moor.2022.0257), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 7, Section 1.2 (Our Results), end of paragraph discussing [GT20] and Theorem 3; reiterated Page 26, Section 7 (Discussion), final paragraph.
- **Area:** fair division
- **Keywords:** `fair division`, `indivisible goods`, `maximin share`, `truthful reporting`, `self-maximizing shares`, `approximation ratio`, `polynomial time`
- **Upstream problem record:** [W4401117667_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4401117667_p0&n=128&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Moshe Babaioff, Uriel Feige, [*Fair Shares: Feasibility, Domination, and Incentives*](https://doi.org/10.1287/moor.2022.0257), Mathematics of Operations Research, 2024.
2. [*Fair division via quantile shares*](https://doi.org/10.1145/3618260.3649728).
3. *Thinned Quantile Shares are Universally Feasible*.
4. *Truthful-in-Expectation Mechanisms for MMS Approximation*.
5. *Near-Optimal Best-of-Both-Worlds Fairness for Few Agents*.
6. *On Truthful Mechanisms without Pareto-efficiency: Characterizations and Fairness*.
