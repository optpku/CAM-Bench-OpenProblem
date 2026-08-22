# Dynamic regret bounds for distributionally robust stochastic model predictive control policies

This file contains the open problem on Dynamic regret bounds for distributionally robust stochastic model predictive control policies.

---

<a id="problem-1"></a>

## 1. Dynamic regret bounds for distributionally robust stochastic model predictive control policies

Source paper authors: Sungho Shin, Sen Na, Mihai Anitescu

### 1. Problem Background

Consider the finite-horizon stochastic control problem over stages $t=0,1,\dots,T$ with random disturbances $\xi:=\{\xi_t\}_{t=0}^T$. The system evolves according to linear dynamics with additive and multiplicative uncertainty
$$

 x_t = A(\xi_t)x_{t-1}+B(\xi_t)u_{t-1}+d(\xi_t),

$$
and incurs a (possibly random) quadratic stage cost
$$

\ell(x_t,u_t;\xi_t)=\tfrac12\begin{bmatrix}x_t\\u_t\end{bmatrix}^\top
\begin{bmatrix}Q(\xi_t)&0\\0&R(\xi_t)\end{bmatrix}
\begin{bmatrix}x_t\\u_t\end{bmatrix}-
\begin{bmatrix}q(\xi_t)\\r(\xi_t)\end{bmatrix}^\top\begin{bmatrix}x_t\\u_t\end{bmatrix}.

$$
A (nonanticipative) control policy chooses $u_t$ after observing the history $\xi_{0:t}$. Let $J^\star(\xi_0;w_{-1})$ denote the optimal expected total cost over $t=0,\dots,T$ under the true distribution of $\xi$, given initial augmented state-control $w_{-1}=(x_{-1},u_{-1})$ and initial uncertainty $\xi_0$.

Stochastic model predictive control (SMPC) with prediction horizon $W$ constructs a closed-loop policy by repeatedly solving, at each stage $\tau$, a truncated-horizon stochastic optimal control problem over the next $W$ stages using a (nominal) conditional distribution of future disturbances given $\xi_{0:\tau}$, then applying only the first control action and re-optimizing at the next stage. Let $J^{(W)}(\xi_0;w_{-1})$ denote the expected total cost incurred by the resulting SMPC closed-loop policy.

The dynamic regret of the SMPC policy is
$$

\mathrm{Regret}(W):=J^{(W)}(\xi_0;w_{-1})-J^\star(\xi_0;w_{-1}).

$$
In the paper's main results, dynamic regret bounds are proved under the assumption that the distribution of $\xi$ is exactly known (and, for the main analysis, has finite support so that a scenario tree representation is available).

In practice the true distribution of $\xi$ may be unknown. A distributionally robust variant of SMPC would design the truncated problems using a nominal distribution $\widehat{\mathbb P}$ but aim to guarantee performance under an unknown true distribution $\mathbb P$ belonging to some ambiguity set $\mathcal P$ (for example, a Wasserstein ball around $\widehat{\mathbb P}$). Let $J_{\mathbb P}^\star$ and $J_{\mathbb P}^{(W)}$ denote the optimal and SMPC expected costs when expectations are taken under $\mathbb P$.

### 2. Open Problem

**Question 1.1.** Develop a dynamic regret analysis for SMPC when the disturbance distribution is not known exactly, i.e., obtain bounds (or rates) on
$$

J_{\mathbb P}^{(W)}(\xi_0;w_{-1})-J_{\mathbb P}^\star(\xi_0;w_{-1})

$$
under inexact knowledge of the distribution of $\xi$ (for instance, in a distributionally robust setting where $\mathbb P$ is only known to belong to an ambiguity set $\mathcal P$).

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #44 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7125931785_p0/partial_progress/44.pdf)

### 4. Source and Verification

- **Source paper:** Sungho Shin, Sen Na, Mihai Anitescu, [*Near-Optimal Performance of Stochastic Model Predictive Control*](https://doi.org/10.1287/moor.2023.0159), Mathematics of Operations Research, 2026.
- **Location in paper:** Page 7, Remark 5; and page 13, Section 4 (Conclusions and Future Work), third bullet.
- **Area:** distributionally robust mpc
- **Keywords:** `stochastic model predictive control`, `dynamic regret`, `distributional robustness`, `wasserstein distance`, `stochastic control`, `multistage stochastic programming`
- **Upstream problem record:** [W7125931785_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7125931785_p0&n=44&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Sungho Shin, Sen Na, Mihai Anitescu, [*Near-Optimal Performance of Stochastic Model Predictive Control*](https://doi.org/10.1287/moor.2023.0159), Mathematics of Operations Research, 2026.
