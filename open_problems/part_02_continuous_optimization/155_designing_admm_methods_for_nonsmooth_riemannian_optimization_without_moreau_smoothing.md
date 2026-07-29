# Designing ADMM methods for nonsmooth Riemannian optimization without Moreau smoothing

This file contains the open problem on Designing ADMM methods for nonsmooth Riemannian optimization without Moreau smoothing.

---

<a id="problem-1"></a>

## 1. Designing ADMM methods for nonsmooth Riemannian optimization without Moreau smoothing

Source paper authors: Jiaxiang Li, Shiqian Ma, Tejes Srivastava

### 1. Problem Background

Let $\mathcal{M}\subseteq \mathbb{R}^n$ be an embedded Riemannian submanifold, and let $A\in \mathbb{R}^{m\times n}$ be a given linear map. Consider the composite constrained optimization problem
$$

\min_{x\in \mathcal{M}}\; F(x) := f(x)+ g(Ax),

$$
where:
1) $f:\mathbb{R}^n\to\mathbb{R}$ is smooth (continuously differentiable) in the ambient Euclidean space (and may be nonconvex).
2) $g:\mathbb{R}^m\to\mathbb{R}\cup\{+\infty\}$ is convex but possibly nonsmooth in the ambient Euclidean space.
A standard variable-splitting reformulation introduces $y\in\mathbb{R}^m$ and imposes the linear constraint $Ax-y=0$:
$$

\min_{x\in \mathcal{M},\; y\in\mathbb{R}^m}\; f(x)+g(y)\quad \text{s.t. } Ax-y=0.

$$
An (Euclidean) augmented Lagrangian for this splitting is
$$

\mathcal{L}_\rho(x,y;\lambda)= f(x)+g(y)+\langle \lambda, Ax-y\rangle+\frac{\rho}{2}\|Ax-y\|^2,

$$
with multiplier $\lambda\in\mathbb{R}^m$ and penalty parameter $\rho>0$.

In the paper, the proposed RADMM replaces $g$ by a smoothed surrogate using the Moreau envelope with parameter $\gamma>0$:
$$

 g_\gamma(z):= \min_{y\in\mathbb{R}^m}\Big\{g(y)+\frac{1}{2\gamma}\|y-z\|^2\Big\},

$$
and then applies an ADMM-like scheme to the smoothed problem. The open question asks for an ADMM design for the original (unsmoothed) problem above, i.e., without introducing $g_\gamma$ (or equivalently without the additional quadratic smoothing term used to obtain a smooth surrogate of $g$).

### 2. Open Problem

**Question 1.1.** Construct and analyze an ADMM-type algorithm that directly solves
$$

\min_{x\in \mathcal{M}}\; f(x)+g(Ax)

$$
(or equivalently its split form $\min\{f(x)+g(y): x\in\mathcal{M},\ Ax-y=0\}$) without replacing $g$ by its Moreau envelope $g_\gamma$ or any other smoothing, and establish rigorous convergence guarantees (for example, convergence to an appropriate first-order stationary notion and/or an iteration-complexity bound).

### 3. Known Results

Li–Ma–Srivastava (2024) introduced RADMM for the split formulation $\min\{f(x)+g(y): x\in\mathcal M,\ Ax-y=0\}$ but crucially relied on Moreau-envelope smoothing $g_\gamma$ to obtain a smooth surrogate and then performed a Riemannian gradient step on the augmented Lagrangian, yielding an $O(\varepsilon^{-4})$ iteration bound for their $\varepsilon$-stationarity notion. The open question in that paper asked whether one can design an ADMM-type method that keeps the original convex nonsmooth $g$ intact (i.e., uses a genuine proximal $y$-update) while still controlling multiplier behavior and tangent-space variation to obtain rigorous convergence guarantees.

This question has been answered affirmatively by the paper "Adaptive Riemannian ADMM for nonsmooth optimization: Optimal complexity without smoothing", which provides an unsmoothed Riemannian ADMM for $\min_{x\in\mathcal M} f(x)+g(Ax)$ (via splitting $Ax=y$) and proves nonasymptotic KKT residual bounds. Its key technical innovation is an adaptive choice of penalty $\rho_k$ and dual stepsize (together with a decaying primal stepsize) that yields control of $\|\lambda^{k+1}-\lambda^k\|$ in terms of primal differences and enables a Lyapunov-type descent argument without appealing to the smoothness of $g_\gamma$. The resulting complexity $O(\varepsilon^{-3})$ to reach an $\varepsilon$-approximate KKT point matches the natural target for first-order methods in this nonconvex–nonsmooth manifold setting and improves over the $O(\varepsilon^{-4})$ rate of the smoothed RADMM analysis.

Subsequent and parallel developments broaden the landscape. "A Single-loop Stochastic Riemannian ADMM for Nonsmooth Optimization" extends the unsmoothed ADMM idea to stochastic objectives $\mathbb E[f(x,\xi)]$, retaining proximal handling of $g$ and achieving $\tilde O(\varepsilon^{-3})$ complexity for $\varepsilon$-KKT points. On the other hand, augmented-Lagrangian and primal–dual alternatives provide complementary theory: "Oracle Complexities of Augmented Lagrangian Methods for Nonsmooth Composite Optimization on a Compact Submanifold" gives sharp oracle complexities for manifold ALM schemes but still introduces a Moreau envelope implicitly by eliminating the split variable, while "A Riemannian alternating descent ascent algorithmic framework for nonconvex-linear minimax problems on Riemannian manifolds" solves the same composite objective through a Fenchel-type minimax formulation with $O(\varepsilon^{-3})$ complexity without smoothing $g$. Together, these works indicate that the main remaining gaps are relaxing compactness/Lipschitz assumptions (e.g., noncompact $\mathcal M$, non-Lipschitz $g$ such as indicators), improving constants and practical adaptivity, and establishing last-iterate guarantees or faster rates under additional geometry (e.g., geodesic convexity, error bounds, or KŁ properties).

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #142 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4405624370_p0/partial_progress/142.pdf)

### 4. Source and Verification

- **Source paper:** Jiaxiang Li, Shiqian Ma, Tejes Srivastava, [*A Riemannian Alternating Direction Method of Multipliers*](https://doi.org/10.1287/moor.2023.0068), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 20, Section 5 (Conclusion)
- **Area:** manifold admm
- **Keywords:** `riemannian optimization`, `admm`, `nonsmooth optimization`, `manifold constraints`, `augmented lagrangian`, `moreau envelope`
- **Upstream problem record:** [W4405624370_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4405624370_p0&n=142&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiaxiang Li, Shiqian Ma, Tejes Srivastava, [*A Riemannian Alternating Direction Method of Multipliers*](https://doi.org/10.1287/moor.2023.0068), Mathematics of Operations Research, 2024.
2. *Adaptive Riemannian ADMM for nonsmooth optimization: Optimal complexity without smoothing*.
3. *A Single-loop Stochastic Riemannian ADMM for Nonsmooth Optimization*.
4. [*Oracle Complexities of Augmented Lagrangian Methods for Nonsmooth Composite Optimization on a Compact Submanifold*](https://doi.org/10.1287/moor.2024.0498).
5. [*A Riemannian alternating descent ascent algorithmic framework for nonconvex-linear minimax problems on Riemannian manifolds*](https://doi.org/10.1287/moor.2025.1055).
6. *A new inexact manifold proximal linear algorithm with adaptive stopping criteria*.
7. [*Non-convex Pose Graph Optimization in SLAM via Proximal Linearized Riemannian ADMM: X. Chen et al.*](https://doi.org/10.1007/s10957-025-02759-5).
