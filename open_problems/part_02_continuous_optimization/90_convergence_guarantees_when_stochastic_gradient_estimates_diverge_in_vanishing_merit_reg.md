# Convergence guarantees when stochastic gradient estimates diverge in vanishing-merit regime

This file contains the open problem on Convergence guarantees when stochastic gradient estimates diverge in vanishing-merit regime.

---

<a id="problem-1"></a>

## 1. Convergence guarantees when stochastic gradient estimates diverge in vanishing-merit regime

Source paper authors: Albert S. Berahas, Frank E. Curtis, Michael O’Neill, Daniel P. Robinson

### 1. Problem Background

Consider the stochastic equality-constrained optimization problem
$$

\min_{x\in \mathbb{R}^n} f(x) \quad \text{s.t.}\quad c(x)=0,

$$
where $f(x)=\mathbb{E}[F(x,\iota)]$ for a random variable $\iota$ and smooth functions $f:\mathbb{R}^n\to\mathbb{R}$, $c:\mathbb{R}^n\to\mathbb{R}^m$. Let $J(x):=\nabla c(x)^T\in\mathbb{R}^{m\times n}$ be the constraint Jacobian.

Define the constraint-violation measure
$$

\varphi(x):=\|c(x)\|_2.

$$
(Equivalently, one may consider $\|c(x)\|_2^2$; stationarity conditions scale accordingly.) A point $x$ is stationary for $\varphi$ if either $c(x)=0$ or $c(x)\neq 0$ and
$$

\nabla \varphi(x)= J(x)^T\frac{c(x)}{\|c(x)\|_2}=0.

$$

An iterative stochastic SQP-type method generates iterates $\{x_k\}_{k\ge 0}$ and uses stochastic gradient estimates $g_k$ for $\nabla f(x_k)$, e.g., unbiased with finite second moment,
$$

\mathbb{E}_k[g_k]=\nabla f(x_k),\qquad \mathbb{E}_k[\|g_k-\nabla f(x_k)\|_2^2]\le M,

$$
where $\mathbb{E}_k[\cdot]$ is conditional expectation given the algorithm has reached $x_k$.

The method employs an exact-penalty merit function
$$

\phi(x,\tau)= \tau f(x)+\|c(x)\|_2,

$$
with an adaptively updated merit parameter $\tau_k\ge 0$. One regime of interest is when $\tau_k\to 0$ (the algorithm places vanishing weight on the objective term). In analyses where $\tau_k\to 0$, a key additional assumption that enables convergence is that the stochastic gradient errors remain uniformly bounded along the run, i.e., $\sup_k \|g_k-\nabla f(x_k)\|_2<\infty$.

Define the problematic event
$$

E_{\tau,\mathrm{zero,bad}}:=\{\tau_k\to 0\ \text{and}\ \sup_{k\ge 0}\|g_k-\nabla f(x_k)\|_2=\infty\},

$$
i.e., the merit parameter vanishes while a subsequence of stochastic gradient estimates diverges away from the true gradients.

### 2. Open Problem

**Question 1.1.** Develop convergence guarantees for stochastic SQP-type methods for equality-constrained problems in the event
$$

E_{\tau,\mathrm{zero,bad}}:=\{\tau_k\to 0\ \text{and}\ \sup_{k\ge 0}\|g_k-\nabla f(x_k)\|_2=\infty\}.

$$
In particular, establish conditions under which one can still guarantee that the iterates satisfy an asymptotic stationarity property for the constraint-violation measure $\varphi(x)=\|c(x)\|_2$ (e.g., $\liminf_{k\to\infty}\|J(x_k)^T c(x_k)\|_2=0$, or another appropriate stationarity measure), despite the divergence of the stochastic gradient estimation errors while $\tau_k\to 0$.

### 3. Known Results

In Berahas--Curtis--O’Neill--Robinson’s stochastic SQP framework for equality constraints with potentially rank-deficient Jacobians, the exact-penalty merit $\phi(x,\tau)=\tau f(x)+\|c(x)\|_2$ is paired with a normal/tangential step decomposition. Their convergence theory splits into regimes depending on the merit parameter sequence $\{\tau_k\}$: when $\tau_k$ stabilizes at a small positive value, one can obtain expected stationarity for the original constrained problem; when $\tau_k\to 0$, the algorithm is meant to transition to minimizing the feasibility measure $\varphi(x)=\|c(x)\|_2$, and they prove $\liminf_k\|J(x_k)^T c(x_k)\|=0$ under an additional assumption that stochastic gradient errors remain bounded. The open gap is precisely the adverse event $E_{\tau,\mathrm{zero,bad}}$ where $\tau_k\to 0$ while $\sup_k\|g_k-\nabla f(x_k)\|=\infty$, which disrupts the intended decoupling between feasibility progress (normal step) and objective information (tangential step).

Forward work closest to the vanishing-merit setting is the “Optimistic noise-aware sequential quadratic programming…” paper, which proves liminf infeasible-stationarity bounds for $\|J(x_k)^T c(x_k)\|$ in the $\tau_k\to 0$ regime even with rank-deficient Jacobians, but only under uniformly bounded noise assumptions, so it still excludes $E_{\tau,\mathrm{zero,bad}}$. Several stochastic SQP/trust-region lines of work (e.g., “Fully stochastic trust-region SQP…”, “High probability complexity bounds… with heavy-tailed noise”, and “A Trust-Region Interior-Point Stochastic SQP Method”) relax almost-sure boundedness by using probabilistic accuracy events tied to a shrinking trust-region radius; these frameworks can accommodate realized runs with $\sup_k\|g_k-\nabla f(x_k)\|=\infty$ while still proving almost-sure or high-probability KKT-type stationarity, but they do not analyze the exact-penalty vanishing-$\tau_k$ mechanism nor directly target stationarity of $\varphi(x)=\|c(x)\|$ conditioned on the bad event.

Overall, the problem remains open: existing analyses either (i) rule out $\tau_k\to 0$ by proving merit-parameter stabilization under bounded errors, (ii) analyze $\tau_k\to 0$ but require uniform boundedness of gradient/Jacobian noise, or (iii) allow heavy-tailed/unbounded errors via probabilistic accuracy conditions but do not couple this with a vanishing-objective-weight exact-penalty regime. A promising direction is to blend the Berahas et al. normal/tangential decomposition and feasibility-stationarity target $\liminf\|J^T c\|=0$ with probabilistic-oracle or robust-estimation machinery (e.g., truncation, median-of-means, or accuracy-forcing) that ensures sufficiently many iterations have controlled tangential noise even if $\sup_k\|g_k-\nabla f(x_k)\|=\infty$, thereby recovering a supermartingale-type descent for $\|c(x)\|$ on a subsequence without assuming uniform boundedness.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #65 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3176856692_p0/partial_progress/65.pdf)

### 4. Source and Verification

- **Source paper:** Albert S. Berahas, Frank E. Curtis, Michael O’Neill, Daniel P. Robinson, [*A Stochastic Sequential Quadratic Optimization Algorithm for Nonlinear-Equality-Constrained Optimization with Rank-Deficient Jacobians*](https://doi.org/10.1287/moor.2021.0154), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 4.4 (Complementary Events), page 25.
- **Area:** stochastic constrained optimization
- **Keywords:** `stochastic SQP`, `equality constraints`, `rank-deficient Jacobians`, `merit parameter`, `constraint violation stationarity`, `unbounded gradient noise`
- **Upstream problem record:** [W3176856692_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3176856692_p0&n=65&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Albert S. Berahas, Frank E. Curtis, Michael O’Neill, Daniel P. Robinson, [*A Stochastic Sequential Quadratic Optimization Algorithm for Nonlinear-Equality-Constrained Optimization with Rank-Deficient Jacobians*](https://doi.org/10.1287/moor.2021.0154), Mathematics of Operations Research, 2023.
2. *Optimistic noise-aware sequential quadratic programming for equality constrained optimization with rank-deficient jacobians*.
3. *Inexact sequential quadratic optimization for minimizing a stochastic objective function subject to deterministic nonlinear equality constraints*.
4. [*High probability complexity bounds of trust-region stochastic sequential quadratic programming with heavy-tailed noise*](https://doi.org/10.1007/s10107-026-02357-x).
5. *A Trust-Region Interior-Point Stochastic Sequential Quadratic Programming Method*.
6. [*Fully stochastic trust-region sequential quadratic programming for equality-constrained optimization problems*](https://doi.org/10.1137/22M1537862).
7. *A sequential quadratic programming method for optimization with stochastic objective functions, deterministic inequality constraints and robust subproblems*.
