# Establish a central limit theorem for stochastic mirror descent risk budgeting portfolios

This file contains the open problem on Establish a central limit theorem for stochastic mirror descent risk budgeting portfolios.

---

<a id="problem-1"></a>

## 1. Establish a central limit theorem for stochastic mirror descent risk budgeting portfolios

Source paper authors: M. Iglesias, Adil Rengim Cetingoz, Noufel Frikha

### 1. Problem Background

Let $d\in\mathbb{N}$ be the number of assets and $X$ an $\mathbb{R}^d$-valued random vector of asset returns on a probability space $(\Omega,\mathcal{F},\mathbb{P})$. For portfolio weights $u\in\Delta_d:=\{u\in\mathbb{R}^d_+:\sum_{i=1}^d u_i=1\}$, the portfolio loss is $-\langle u,X\rangle$.

Fix a risk-budget vector $b\in\Delta^{>0}_d:=\{b\in(0,\infty)^d:\sum_{i=1}^d b_i=1\}$. Let $\rho$ be an RB-compatible risk measure (positive homogeneous and subadditive) such that the map
$$
r_\rho(y):=\rho(-\langle y,X\rangle),\qquad y\in\mathbb{R}^d_+
$$
is continuous on $\mathbb{R}^d_+$ and continuously differentiable on $(0,\infty)^d$. Let $g:\mathbb{R}_+\to\mathbb{R}$ be continuously differentiable, convex, and increasing, and define the strictly convex objective
$$
\Gamma_g(y):= g(r_\rho(y)) - \sum_{i=1}^d b_i\log y_i,\qquad y\in(0,\infty)^d.
$$
Let $y^\star\in(0,\infty)^d$ denote the unique minimizer of $\Gamma_g$, and $u^\star:=y^\star/\|y^\star\|_1$ the corresponding (unique) risk budgeting portfolio.

Assume a stochastic representation of $g\circ r_\rho$: there exists a convex loss function $L:\mathbb{R}^2\to\mathbb{R}$ such that for all $y\in(0,\infty)^d$,
$$
g(r_\rho(y)) = \min_{\xi\in\mathbb{R}} \mathbb{E}[L(\xi,-\langle y,X\rangle)] = \mathbb{E}[L(\xi^\star(y),-\langle y,X\rangle)],
$$
where $\xi^\star(y)$ is uniquely defined. Define the joint variable $z=(\xi,y)\in\mathbb{R}\times(0,\infty)^d$, and the population objective
$$
h(z):=\mathbb{E}[H(z,X)],\qquad H(z,X):=L(\xi,-\langle y,X\rangle) - \sum_{i=1}^d b_i\log y_i.
$$
Let $z^\star=(\xi^\star,y^\star)$ be the unique minimizer of $h$.

Because $\nabla_y H$ is singular as some $y_i\downarrow 0$, the paper introduces a tamed factor $\kappa(y):= (\min_{1\le i\le d} y_i)\wedge 1$. Using i.i.d. samples $(X_k)_{k\ge 1}$, a stochastic mirror descent (SMD) recursion is defined for a chosen radius $m>0$ (assumed $m\ge \|y^\star\|_1$) and step sizes $(\gamma_k)$:
1) $\xi_{k+1} = \xi_k - \gamma_{k+1}\,\partial_\xi H(z_k,X_{k+1})$.
2) $y_{k+1} = P^{m}_{y_k}\bigl(\gamma_{k+1}\,\kappa(y_k)\,\nabla_y H(z_k,X_{k+1})\bigr)$,
where $P^{m}_{y}(v)$ is the negative-entropy mirror (KL) proximal map onto $(0,\infty)^d\cap\{\|y\|_1\le m\}$ (explicitly $y\mapsto y\odot e^{-v}$ followed by $\ell_1$-rescaling if needed).
The paper proves almost sure convergence $z_k\to z^\star$ and provides an almost sure non-asymptotic bound for the weighted averaged iterates $\bar z_n := (\sum_{k=1}^n \gamma_k z_{k-1})/(\sum_{k=1}^n \gamma_k)$.

### 2. Open Problem

**Question 1.1.** Under suitable regularity and moment assumptions ensuring the SMD recursion $(z_k)_{k\ge 0}$ is well-defined and converges to $z^\star$, derive an asymptotic distributional error characterization for the stochastic mirror descent risk-budgeting estimator.

Concretely, establish a central limit theorem (CLT) for an appropriately normalized error of either the raw iterates $z_n$ or the averaged iterates $\bar z_n$, i.e. prove convergence in distribution of the form
$$
a_n\,(\bar z_n - z^\star) \;\Rightarrow\; \mathcal{N}(0,\Sigma),
$$
for a deterministic scaling $a_n\to\infty$ and a covariance matrix $\Sigma$, and characterize $a_n$ and $\Sigma$ in terms of the model primitives $(L,X,b,g,\rho)$ and the mirror map/taming mechanism $(\kappa, P_y^m)$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #2 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4404530034_p0/partial_progress/2.pdf)

### 4. Source and Verification

- **Source paper:** M. Iglesias, Adil Rengim Cetingoz, Noufel Frikha, [*Mirror Descent Algorithms for Risk Budgeting Portfolios*](https://doi.org/10.1287/moor.2024.0847), Mathematics of Operations Research, 2026.
- **Location in paper:** Conclusion (page 25 of 34)
- **Area:** stochastic approximation
- **Keywords:** `risk budgeting`, `stochastic mirror descent`, `central limit theorem`, `asymptotic normality`, `Bregman divergence`, `tamed gradients`
- **Upstream problem record:** [W4404530034_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4404530034_p0&n=2&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. M. Iglesias, Adil Rengim Cetingoz, Noufel Frikha, [*Mirror Descent Algorithms for Risk Budgeting Portfolios*](https://doi.org/10.1287/moor.2024.0847), Mathematics of Operations Research, 2026.
