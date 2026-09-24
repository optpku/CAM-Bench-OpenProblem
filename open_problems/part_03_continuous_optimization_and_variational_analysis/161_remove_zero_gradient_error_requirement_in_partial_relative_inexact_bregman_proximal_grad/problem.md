# Remove zero-gradient error requirement in partial relative inexact Bregman proximal gradient

This file contains the open problem on Remove zero-gradient error requirement in partial relative inexact Bregman proximal gradient.

---

<a id="problem-1"></a>

## 1. Remove zero-gradient error requirement in partial relative inexact Bregman proximal gradient

Source paper authors: Lei Yang, Kim-Chuan Toh

### 1. Problem Background

Let $E$ be a finite-dimensional Euclidean space, $Q\subseteq E$ a closed convex set, and consider the convex composite optimization problem
$$

\min_{x\in Q}\; F(x):=P(x)+f(x),

$$
where $P:E\to(-\infty,+\infty]$ is proper closed convex (possibly nonsmooth) and $f:E\to\mathbb{R}$ is convex and differentiable on $\operatorname{int}Q$.

Let $\phi:E\to(-\infty,+\infty]$ be a proper closed strictly convex Legendre-type kernel with $\operatorname{dom}\phi=Q$, differentiable on $\operatorname{int}Q$. The associated Bregman distance is
$$

D_\phi(x,y):=\phi(x)-\phi(y)-\langle \nabla\phi(y),x-y\rangle.

$$
Assume a (restricted) relative smoothness condition: there exists $L\ge 0$ and a closed convex $X\supseteq \operatorname{dom}P\cap\operatorname{dom}\phi$ such that for all $x\in X\cap\operatorname{int}Q$ and $y\in X\cap Q$,
$$

f(y)\le f(x)+\langle \nabla f(x),y-x\rangle+L D_\phi(y,x).

$$

For a tolerance $\delta\ge 0$, the $\delta$-subdifferential of $P$ at $\bar x\in\operatorname{dom}P$ is
$$

\partial_\delta P(\bar x):=\{d\in E: P(u)\ge P(\bar x)+\langle d,u-\bar x\rangle-\delta\ \forall u\in E\}.

$$

At iterate $x_k\in X\cap\operatorname{int}Q$, the (exact) Bregman proximal-gradient subproblem with parameter $\lambda>0$ is
$$

\min_{x\in Q}\; P(x)+\langle \nabla f(x_k),x-x_k\rangle+\lambda D_\phi(x,x_k).

$$
In the paper's inexact framework, one computes $x_{k+1}\in X\cap\operatorname{int}Q$, $\tilde x_{k+1}\in \operatorname{dom}P\cap Q$, and errors $(\Delta_k,\delta_k)$ satisfying the approximate optimality inclusion
$$

\Delta_k\in \partial_{\delta_k}P(\tilde x_{k+1})+\nabla f(x_k)+\lambda\big(\nabla\phi(x_{k+1})-\nabla\phi(x_k)\big).

$$
A partial relative-type stopping rule (relative error criterion) controls $\delta_k$ and the two-point deviation $D_\phi(\tilde x_{k+1},x_{k+1})$ relative to $D_\phi(\tilde x_{k+1},x_k)$, but (as currently analyzed) imposes $\|\Delta_k\|=0$.

### 2. Open Problem

**Question 1.1.** Determine whether the partial relative-type stopping rule can be generalized to allow nonzero $\Delta_k$ while retaining convergence guarantees for the resulting inexact Bregman proximal gradient method.

Concretely, replace the requirement $\|\Delta_k\|=0$ in the partial relative-type stopping criterion by an admissible condition permitting $\Delta_k\neq 0$ (for example, bounding $\|\Delta_k\|$ in a way that is verifiable during subproblem solves), and establish convergence (e.g., convergence of objective values and/or iterates) under the same overall algorithmic framework.

### 3. Known Results

In Yang–Toh’s iBPGM, the partial relative stopping criterion (ReSC) is designed to make the key descent estimate (Lemma 3.1) collapse to a clean telescoping inequality by eliminating the troublesome term $|\langle \Delta_k,\tilde x_{k+1}-x\rangle|$ in (3.7). This is why the current analysis enforces $\|\Delta_k\|=0$ under (ReSC), while allowing $\Delta_k\neq 0$ only under the absolute criterion (AbSC) with summable tolerances. The open problem asks for a verifiable replacement of $\Delta_k=0$ in (ReSC) that still yields convergence under the same relative-smooth/Bregman geometry.

Among the forward citations, the closest partial progress is the 2025 iBPDCA paper, which explicitly permits $\Delta_k\neq 0$ under relative-type stopping rules that bound a computable combination $\|\Delta_k\|^2+|\langle\Delta_k,x_{k+1}-x_k\rangle|+\delta_k$ by a multiple of a Bregman distance. In the convex composite specialization (no concave part), this essentially provides an inexact Bregman proximal-gradient-type scheme with nonzero residuals and establishes at least subsequential stationarity; however, its strongest whole-sequence convergence requires additional assumptions (e.g., KL and summability of $\|\Delta_k\|$), so it does not fully settle Yang–Toh’s convex convergence guarantees under the original (ReSC) framework.

Several related-tool papers (ripALM and SpinAPG) show, in different geometries, how to control nonzero residuals via relative inequalities (often including cross terms) to preserve Fejér-type descent without requiring exact subproblem solves. The inexact FISTA-like framework with adaptive backtracking similarly demonstrates that a relative error inequality can accommodate nonzero residual vectors while retaining convergence rates, albeit in the Euclidean/Lipschitz setting. Collectively, these works suggest that the right generalization of (ReSC) will likely require a strengthened, computable inequality that couples $\Delta_k$ to the Bregman step (and possibly a cross term $|\langle\Delta_k,\tilde x_{k+1}-x_k\rangle|$) so that the analogue of (3.14) can be recovered. As of the provided forward-citation set, no paper fully resolves the open problem in the precise Yang–Toh setting, so the problem appears to remain open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #148 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4408928070_p0/partial_progress/148.pdf)

### 4. Source and Verification

- **Source paper:** Lei Yang, Kim-Chuan Toh, [*Inexact Bregman Proximal Gradient Method and Its Inertial Variant with Absolute and Partial Relative Stopping Criteria*](https://doi.org/10.1287/moor.2023.0328), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 9, Section 3 (discussion following Algorithm 1, paragraph comparing (AbSC) and (ReSC)).
- **Area:** inexact proximal gradient
- **Keywords:** `bregman proximal gradient`, `relative smoothness`, `inexact methods`, `relative stopping criterion`, `subproblem accuracy`, `first-order methods`
- **Upstream problem record:** [W4408928070_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4408928070_p0&n=148&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Lei Yang, Kim-Chuan Toh, [*Inexact Bregman Proximal Gradient Method and Its Inertial Variant with Absolute and Partial Relative Stopping Criteria*](https://doi.org/10.1287/moor.2023.0328), Mathematics of Operations Research, 2025.
2. [*An inexact Bregman proximal difference-of-convex algorithm with two types of relative stopping criteria*](https://doi.org/10.1007/s10915-025-02904-2).
3. [*Inexact FISTA-like Methods with Adaptive Backtracking*](https://doi.org/10.1007/s10589-025-00752-2).
4. *ripALM: A Relative-Type Inexact Proximal Augmented Lagrangian Method for Linearly Constrained Convex Optimization*.
5. *ripALM: A Relative-Type Inexact Proximal Augmented Lagrangian Method with Applications to Quadratically Regularized Optimal Transport*.
6. *Shadow-point Enhanced Inexact Accelerated Proximal Gradient Method with Preserved Convergence Guarantees*.
