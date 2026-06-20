# DFP Quasi-Newton Convergence

This file collects open problems about the convergence theory of the DFP quasi-Newton method under inexact line search.

---

<a id="problem-1"></a>

## 1. DFP Convergence Under Wolfe Line Search

Contributors: Yaxiang Yuan

### 1. Problem Background

Let $f:\mathbb{R}^n\to\mathbb{R}$ be smooth, and define
$$
g_k=\nabla f(x_k),\qquad p_k=-H_k g_k,
$$
where $H_k\succ 0$ is an inverse-Hessian approximation. Given a stepsize $\alpha_k>0$, set
$$
x_{k+1}=x_k+\alpha_k p_k,\qquad s_k=x_{k+1}-x_k,\qquad y_k=g_{k+1}-g_k.
$$
The DFP update is
$$
H_{k+1}
=H_k+\frac{s_k s_k^\top}{s_k^\top y_k}
-\frac{H_k y_k y_k^\top H_k}{y_k^\top H_k y_k}.
$$
If $s_k^\top y_k>0$ and $H_k\succ 0$, then $H_{k+1}\succ 0$.

The exact-line-search theory of DFP is closely related to classical Broyden-class and BFGS theory. The more delicate question is whether the original DFP method remains globally convergent under practical inexact line searches such as Wolfe or Armijo-Wolfe line search.

### 2. Open Problems

**Question 1.1. Weak global convergence of DFP.** Let $f$ be twice continuously differentiable and uniformly strongly convex and smooth:
$$
\mu I\preceq \nabla^2 f(x)\preceq L I
$$
for all $x\in\mathbb{R}^n$, with $0<\mu\le L<\infty$. Consider DFP with arbitrary $x_0$ and arbitrary $H_0\succ 0$. Suppose each $\alpha_k$ satisfies the Wolfe conditions
$$
f(x_k+\alpha_k p_k)\le f(x_k)+c_1\alpha_k g_k^\top p_k,
$$
and
$$
\nabla f(x_k+\alpha_k p_k)^\top p_k\ge c_2 g_k^\top p_k,
$$
where $0<c_1<c_2<1$. Does DFP necessarily satisfy
$$
\nabla f(x_k)\to 0
$$
and hence $x_k\to x^\star$, the unique minimizer of $f$?

**Question 1.2. Global linear and local superlinear convergence.** Under the assumptions of Question 1.1, and additionally assuming Lipschitz continuity of the Hessian,
$$
\|\nabla^2 f(x)-\nabla^2 f(y)\|\le M\|x-y\|,
$$
does DFP with Wolfe or strong Wolfe line search admit a global linear phase and an eventual superlinear phase, namely
$$
f(x_k)-f(x^\star)\le C\rho^k
$$
for some $C>0$ and $\rho\in(0,1)$, followed by
$$
\frac{\|x_{k+1}-x^\star\|}{\|x_k-x^\star\|}\to 0?
$$

**Question 1.3. General convex or nonconvex variants.** If $f$ is convex with bounded level sets, or nonconvex with Lipschitz gradient, can one prove convergence of DFP to an optimum or stationary point under natural line-search safeguards? Alternatively, can one construct counterexamples showing that additional damping or safeguarding is necessary?

### 3. Known Results and Difficulty

For strongly convex quadratic objectives and exact line search, DFP has the classical finite-termination behavior associated with conjugate-gradient and Broyden-class methods. For nonquadratic strongly convex functions with exact line search, the problem is also close to existing BFGS and Broyden-class theory.

The main difficulty is the Wolfe-line-search setting. BFGS has strong global convergence theory under Armijo-Wolfe conditions, but DFP is often excluded from classical restricted-Broyden-class global convergence results because the DFP update does not have the same self-correcting behavior as BFGS. The central issue is to control degeneration of the approximate inverse Hessians $H_k$ strongly enough to preserve descent and convergence.
