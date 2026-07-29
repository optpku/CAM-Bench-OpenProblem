# Label-setting criteria for stochastic shortest path games with two players

This file contains the open problem on Label-setting criteria for stochastic shortest path games with two players.

---

<a id="problem-1"></a>

## 1. Label-setting criteria for stochastic shortest path games with two players

Source paper authors: Mallory E. Gaspard, Alexander Vladimirsky

### 1. Problem Background

Consider a finite stochastic shortest path (SSP) game on a finite state set $X=\{x_1,\dots,x_n,t\}$, with absorbing target state $t$. At each nonterminal state $x\in X\setminus\{t\}$, two antagonistic players (say, Min and Max) choose actions $a\in A(x)$ and $b\in B(x)$ (action sets may depend on $x$). The one-step cost is $C(x,a,b)\ge 0$ and the next state is drawn according to transition probabilities $p(x,a,b,\cdot)$ on $X$, with $p(t,\cdot,\cdot,t)=1$ and zero terminal cost. The objective is to minimize (for Min) and maximize (for Max) the expected total cost accumulated until hitting $t$.

Let $U(x)$ denote the value of the zero-sum game (when it exists), i.e., the expected total cost under optimal play from state $x$. The value function is characterized (under standard assumptions ensuring well-posedness) by a dynamic programming (Shapley) optimality equation of the form
$$

U(t)=0,\qquad
U(x)=\min_{a\in A(x)}\max_{b\in B(x)}\Bigl(C(x,a,b)+\sum_{y\in X} p(x,a,b,y)\,U(y)\Bigr),\quad x\neq t.

$$
A label-setting method is a non-iterative algorithmic scheme in which states become permanently labeled (their values are finalized) in an order intended to respect a causality/monotonicity relation, generalizing Dijkstra/Dial-type methods for shortest paths. Applicability typically requires a monotone-causality property guaranteeing that $U(x)$ depends only on already-finalized smaller values $U(y)$ along transitions relevant under optimal play.

### 2. Open Problem

**Question 1.1.** Derive verifiable sufficient conditions (stated a priori in terms of local game data such as $C(x,a,b)$ and $p(x,a,b,\cdot)$) that guarantee the applicability and correctness of a label-setting (Dijkstra-like and/or Dial-like) method for computing the value function $U$ of a stochastic shortest path game in which the transition distribution at each stage depends on the actions of two antagonistic players.

### 3. Known Results

The open problem asks for a priori verifiable local conditions on two-player SSP game data $(C,p)$ that guarantee monotone-causality and hence correctness of Dijkstra/Dial-type label-setting methods for the min–max Shapley equation. The source paper develops such explicit conditions for a single-player subclass (OSSPs), using convexification/pruning of actions and inequalities comparing stochastic actions to deterministic ones (via oblique projections) to ensure that optimal transitions strictly decrease the value $U$ (or decrease by at least $\delta$). Extending this to antagonistic two-player choices is nontrivial because the relevant operator is $\min_a\max_b$ and the set of successor distributions depends on both players.

Only one forward-citing work was provided. It does not solve the two-player label-setting question; instead it targets non-causal monotone discretizations of anisotropic eikonal equations and proves quasi-linear complexity for a narrow-band iterative method under an $\alpha$-acuteness condition after a Kru\v{z}kov transform. While not directly applicable to SSP games, it suggests a complementary direction: when causality/label-setting cannot be guaranteed, seek transforms and contraction/comparison principles that enable fast iterative or narrow-band solvers. At present, based on the supplied citation set, the two-player label-setting criteria problem remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #16 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411674410_p0/partial_progress/16.pdf)

### 4. Source and Verification

- **Source paper:** Mallory E. Gaspard, Alexander Vladimirsky, [*Monotone Causality in Opportunistically Stochastic Shortest Path Problems*](https://doi.org/10.1287/moor.2023.0362), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 6 (Conclusions), page 33.
- **Area:** stochastic shortest path games
- **Keywords:** `stochastic shortest path`, `zero-sum games`, `label-setting algorithms`, `dijkstra-like methods`, `monotone causality`, `dynamic programming`
- **Upstream problem record:** [W4411674410_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411674410_p0&n=16&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Mallory E. Gaspard, Alexander Vladimirsky, [*Monotone Causality in Opportunistically Stochastic Shortest Path Problems*](https://doi.org/10.1287/moor.2023.0362), Mathematics of Operations Research, 2025.
2. *Solving non-causal schemes for anisotropic eikonal equations, with quasi-linear complexity*.
