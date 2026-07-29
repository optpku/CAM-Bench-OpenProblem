# Improve Wasserstein convergence rate for vector martingale central limit theorem

This file contains the open problem on Improve Wasserstein convergence rate for vector martingale central limit theorem.

---

<a id="problem-1"></a>

## 1. Improve Wasserstein convergence rate for vector martingale central limit theorem

Source paper authors: R. Srikant

### 1. Problem Background

Let $\{m_k\}_{k\ge 1}$ be a $d$-dimensional martingale difference sequence with respect to a filtration $\{\mathcal F_k\}_{k\ge 0}$, meaning $m_k$ is $\mathcal F_k$-measurable, $\mathbb E\|m_k\|<\infty$, and $\mathbb E[m_k\mid \mathcal F_{k-1}]=0$ for all $k\ge 1$. Define partial sums $S_n=\sum_{k=1}^n m_k$ and the normalized sum $W_n=S_n/\sqrt n$.

Assume there exists $\beta\in(0,1)$ such that $\mathbb E\|m_k\|^{2+\beta}<\infty$ for all $k$, and the conditional covariance matrices $\Sigma_k:=\mathbb E[m_k m_k^\top\mid \mathcal F_{k-1}]$ exist. Let $\Sigma_\infty\succ 0$ be a positive definite matrix intended to represent the limiting (asymptotic) covariance of $W_n$ in a martingale central limit theorem.

Let $Z\sim\mathcal N(0,I_d)$. For random vectors $X,Y\in\mathbb R^d$, the $1$-Wasserstein distance is
$$

 d_W(X,Y)=\sup_{h\in\mathrm{Lip}_1} \mathbb E[h(X)-h(Y)],

$$
where $\mathrm{Lip}_1$ is the set of real-valued functions on $\mathbb R^d$ with Lipschitz constant at most 1 w.r.t. the Euclidean norm.

A non-asymptotic martingale CLT bound in Wasserstein distance can have the form
$$

 d_W\bigl(W_n,\, \Sigma_\infty^{1/2} Z\bigr) \le \text{(explicit bound depending on moments, }\Sigma_k,\Sigma_\infty\text{)}.

$$
In the paper, a general bound is proved that (in typical applications) yields the rate $O(\log n/\sqrt n)$ in $d_W$.

### 2. Open Problem

**Question 1.1.** Find additional, verifiable conditions on the martingale difference sequence $\{m_k\}$ (beyond the finite-$(2+\beta)$ moment and conditional covariance assumptions stated above) under which the Wasserstein error
$$

 d_W\bigl(W_n,\, \Sigma_\infty^{1/2} Z\bigr)

$$
admits an improved rate of convergence $O(1/\sqrt n)$ (i.e., with the $\log n$ factor removed) as $n\to\infty$, while keeping a vector-valued martingale setting and a Gaussian limit with covariance $\Sigma_\infty$.

### 3. Known Results

Srikant’s 2026 paper proves a non-asymptotic vector martingale CLT in 1-Wasserstein distance via a Lindeberg decomposition combined with multivariate Stein regularity estimates (Gallou\"et–Mijoule–Swan; Fang–Shao–Xu). The resulting bound (Theorem 1) has a typical $O((\log n)/\sqrt n)$ rate when one pushes the Hölder parameter $\beta\uparrow 1$ to approach the i.i.d.-optimal $n^{-1/2}$ scaling; the $\log n$ arises from the blow-up of Stein-solution Hölder constants like $(1-\beta)^{-1}$. In the Markov-chain application, Poisson’s equation yields a martingale difference sequence with bounded moments and geometrically decaying covariance mismatch $\|\mathbb E\Sigma_k-\Sigma_\infty\|$, but the same Stein-regularity mechanism still produces $O((\log n)/\sqrt n)$ in Wasserstein-1.

Among forward citations, the most direct evidence that the $\log n$ factor is not intrinsic comes from “Wasserstein-p Central Limit Theorem Rates: From Local Dependence to Markov Chains”, which attains the optimal $O(n^{-1/2})$ Wasserstein-1 rate for additive functionals of geometrically ergodic Markov chains under drift/minorization and $(2+\delta)$-moment domination (with $\delta>1$), and in the homogeneous case transfers this to $\mathcal N(0,\Sigma_\infty)$ when the covariance stabilizes at $O(1/n)$. This suggests that log-free $n^{-1/2}$ rates are achievable in dependent settings when one avoids the particular Stein-equation regularity step that forces $\beta\uparrow 1$, for example via local-dependence/regeneration couplings or alternative Stein couplings tailored to Markov chains.

However, none of the citing works provides a general theorem for arbitrary $d$-dimensional martingale differences $m_k$ in terms of predictable covariances $\Sigma_k=\mathbb E[m_km_k^\top\mid\mathcal F_{k-1}]$ that removes the $\log n$ while keeping only verifiable structural assumptions. Several papers in stochastic approximation and RL (two-time-scale SA, Q-learning, nonlinear SA) explicitly rely on martingale Wasserstein CLTs with $\log n$ losses and identify improved martingale Wasserstein bounds as a key missing ingredient. Overall, the problem remains open at the level of a general vector martingale CLT, though optimal $O(n^{-1/2})$ rates are known in important subclasses (notably geometrically ergodic Markov-chain additive functionals) under stronger dependence/moment and covariance-stabilization conditions.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #32 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414783466_p0/partial_progress/32.pdf)

### 4. Source and Verification

- **Source paper:** R. Srikant, [*Rates of Convergence in the Central Limit Theorem for Markov Chains, with an Application to TD Learning*](https://doi.org/10.1287/moor.2024.0444), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 5 (Conclusions), page 19
- **Area:** martingale central limit theorem
- **Keywords:** `martingale central limit theorem`, `Wasserstein distance`, `Stein's method`, `rate of convergence`, `multivariate normal approximation`, `log factor removal`
- **Upstream problem record:** [W4414783466_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414783466_p0&n=32&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. R. Srikant, [*Rates of Convergence in the Central Limit Theorem for Markov Chains, with an Application to TD Learning*](https://doi.org/10.1287/moor.2024.0444), Mathematics of Operations Research, 2025.
2. *Wasserstein-p Central Limit Theorem Rates: From Local Dependence to Markov Chains*.
3. *Nonasymptotic clt and error bounds for two-time-scale stochastic approximation*.
4. *Finite-Sample Wasserstein Error Bounds and Concentration Inequalities for Nonlinear Stochastic Approximation*.
5. *Quantifying Normality: Convergence Rate to Gaussian Limit for Stochastic Approximation and Unadjusted OU Algorithm*.
6. *Central Limit Theorems for Asynchronous Averaged Q-Learning*.
7. *Gaussian Approximation for Asynchronous Q-learning*.
