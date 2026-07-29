# Prove convexity and monotonicity of the optimal robust ratio in acceptance probability

This file contains the open problem on Prove convexity and monotonicity of the optimal robust ratio in acceptance probability.

---

<a id="problem-1"></a>

## 1. Prove convexity and monotonicity of the optimal robust ratio in acceptance probability

Source paper authors: Sebastian Perez-Salazar, Mohit Singh, Alejandro Toriello

### 1. Problem Background

Consider the secretary problem with uncertain acceptance (SP-UA) with a known horizon length $n\in\mathbb{N}$ and acceptance probability $p\in(0,1]$. There are $n$ candidates with distinct absolute ranks $1\prec 2\prec\cdots\prec n$ (rank $1$ is best). Candidates arrive in a uniformly random permutation $\pi=(R_1,\dots,R_n)$ of $[n]=\{1,\dots,n\}$, where $R_t$ is the absolute rank of the $t$-th arrival.

At time $t$, the decision maker observes only the partial rank $r_t\in[t]$ of the current candidate among the first $t$ arrivals. The decision maker chooses either $\text{offer}$ or $\text{pass}$. If $\text{offer}$ is chosen at time $t$, the current candidate accepts independently with probability $p$, in which case the process stops and that candidate is selected; if the offer is rejected (probability $1-p$), the process continues to $t+1$. If $\text{pass}$ is chosen, the process continues to $t+1$. A policy $P$ is any (possibly randomized) Markovian rule mapping $(t,r_t)$ to a distribution over $\{\text{offer},\text{pass}\}$.

For $k\in[n]$, a \"top $k$\" candidate means absolute rank in $[k]$. Define the robust ratio of a policy $P$ at acceptance probability $p$ as
$$

\gamma_P(p)=\min_{k\in[n]}\frac{\Pr(\text{policy }P\text{ selects a top-}k\text{ candidate and the offer is accepted})}{\Pr(\text{at least one of the top-}k\text{ candidates would accept an offer})}.

$$
Since each candidate would accept an offer with probability $p$ independently of everything else, $\Pr(\text{at least one top-}k\text{ candidate accepts})=1-(1-p)^k$. The optimal robust ratio is
$$

\gamma_n^*(p)=\sup_P\gamma_P(p),

$$
and the asymptotic optimal robust ratio is $\gamma_\infty^*(p)=\lim_{n\to\infty}\gamma_n^*(p)$, which exists because $\gamma_n^*(p)$ is nonincreasing in $n$ for fixed $p$.

### 2. Open Problem

**Question 1.1.** Establish (or refute) that the optimal robust ratio $\gamma_n^*(p)$ is a convex and decreasing function of $p\in(0,1]$ (for fixed $n$), and correspondingly that $\gamma_\infty^*(p)$ is convex and decreasing in $p\in(0,1]$.

### 3. Known Results

The open problem from Perez-Salazar, Singh, and Toriello asks for structural properties of the optimal robust ratio $\gamma_n^*(p)$ (and its limit $\gamma_\infty^*(p)$) as a function of the homogeneous acceptance probability $p$: specifically, whether it is decreasing and convex on $(0,1]$. In the source paper, $\gamma_n^*(p)$ is characterized exactly by a linear program derived from an MDP polyhedral description of all Markovian policies, and $\gamma_\infty^*(p)$ is approximated by a continuous LP. The paper proves several sharp bounds and identifies an exact optimal policy for $p\ge p^*\approx 0.594$, where $\gamma_\infty^*(p)=p^{p/(1-p)}$, but it only reports empirical evidence (via solving $(LP)_{n,p}$ numerically) that $\gamma_n^*(p)$ appears convex and decreasing; no proof is given.

Among the forward citations provided, only “Prophets Inequalities with Uncertain Acceptance” is available and it is not directly about the robust-ratio secretary objective. It develops structural reductions for prophet inequalities with uncertain acceptance by absorbing acceptance into realized values $Z_i=X_iA_i$, and it discusses that some uncertain-acceptance performance measures can exhibit non-monotone behavior as acceptance probabilities vary. While this does not resolve convexity/monotonicity of $\gamma_n^*(p)$, it suggests that proving monotonicity may require exploiting the specific normalization by $1-(1-p)^k$ and the LP structure in the secretary setting, rather than relying on generic “more acceptance helps” intuition.

Given the current citation set, there is no known solving paper establishing convexity and monotonicity of $\gamma_n^*(p)$ or $\gamma_\infty^*(p)$. The problem therefore remains open. Promising directions include sensitivity/parametric analysis of $(LP)_{n,p}$ and $(CLP)_p$ with respect to $p$, potentially via dual formulations (where $p$ enters both feasibility and objective normalization) and envelope theorems for piecewise-linear concave value functions; another direction is to attempt to prove monotonicity/convexity first for the continuous relaxation $\gamma_\infty^*(p)$ and then transfer to finite $n$ using the quantitative approximation bound $|\gamma_n^* - \gamma_\infty^*|\le O((\log n)^2/(p\sqrt n))$ from the source paper.

#### 3.1 Upstream solution and partial-progress records

- [Solution #69 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3216294154_p0/solutions/69.pdf)

### 4. Source and Verification

- **Source paper:** Sebastian Perez-Salazar, Mohit Singh, Alejandro Toriello, [*Robust Online Selection with Uncertain Offer Acceptance*](https://doi.org/10.1287/moor.2023.0210), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 9 (Concluding Remarks), page 24, paragraph beginning “We empirically observe …”
- **Area:** secretary problem
- **Keywords:** `secretary problem`, `robust ratio`, `uncertain acceptance`, `convexity`, `monotonicity`, `optimal stopping`
- **Upstream problem record:** [W3216294154_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3216294154_p0&n=69&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Sebastian Perez-Salazar, Mohit Singh, Alejandro Toriello, [*Robust Online Selection with Uncertain Offer Acceptance*](https://doi.org/10.1287/moor.2023.0210), Mathematics of Operations Research, 2024.
2. *Prophets Inequalities with Uncertain Acceptance*.
