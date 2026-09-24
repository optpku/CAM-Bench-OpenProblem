# Nonsmooth BFGS with Armijo--Wolfe Line Search

This file contains the Lewis--Overton open problem on the behavior of full-memory BFGS for nonsmooth optimization.

---

<a id="problem-1"></a>

## 1. Convergence and Rates of Nonsmooth BFGS

Contributors: Yang Liu

### 1. Problem Background

The full-memory BFGS method is designed for smooth optimization, but it is often remarkably effective when applied directly to nonsmooth objectives. At differentiability points, it uses
$$
p_k=-H_k g_k,\qquad x_{k+1}=x_k+\alpha_kp_k,
$$
where $g_k=\nabla f(x_k)$ and $\alpha_k$ satisfies Armijo--Wolfe conditions. With
$$
s_k=x_{k+1}-x_k,\qquad y_k=g_{k+1}-g_k,\qquad
\rho_k=\frac{1}{y_k^\top s_k},
$$
the inverse-Hessian approximation is updated by
$$
H_{k+1}
=(I-\rho_ks_ky_k^\top)H_k(I-\rho_ky_ks_k^\top)
+\rho_ks_ks_k^\top.
$$

Lewis and Overton developed an Armijo--Wolfe line search that remains meaningful along nonsmooth search lines and documented strong practical performance on nonsmooth, possibly nonconvex problems. General theory is difficult because gradients may jump, the secant vector $y_k$ need not approximate a Hessian action, and standard smooth BFGS arguments do not directly imply convergence to a nonsmooth stationary point.

### 2. Open Problems

**Question 1.1. General convergence theory.** Identify a broad, natural class of locally Lipschitz objectives for which full-memory BFGS with the Lewis--Overton Armijo--Wolfe line search is globally convergent. Depending on the function class, an appropriate conclusion could be
$$
f(x_k)\to\inf f,\qquad
\operatorname{dist}(0,\partial f(x_k))\to0,
$$
or the statement that every accumulation point is Clarke stationary.

The result should go substantially beyond functions that are smooth away from an isolated nonsmooth minimizer, such as the Euclidean norm, while making explicit any assumptions needed on differentiability of the iterates, bounded level sets, convexity, tame or semialgebraic structure, and the line-search implementation.

**Question 1.2. Quantitative rate.** On a class where convergence holds, can one establish a nonasymptotic or asymptotic rate for objective error, distance to the solution set, or a nonsmooth stationarity measure? Can the theory explain the empirical advantage of full-memory BFGS over gradient or subgradient methods?

**Question 1.3. Failure boundary.** If no such broad theorem is possible, characterize the mechanisms of failure and construct stable counterexamples under Armijo--Wolfe search. In particular, which geometric properties distinguish successful sharp-minimum examples from polyhedral or nonconvex examples on which BFGS can fail?

### 3. Known Results

1. Lewis and Overton proved termination properties for their nonsmooth Armijo--Wolfe line search and analyzed special Euclidean-norm cases, but did not obtain a general convergence theorem.
2. Exact-line-search BFGS can fail on a simple polyhedral example, while it converges linearly on the two-dimensional Euclidean norm.
3. Guo and Lewis extended Powell-type convergence arguments to certain convex functions that are nonsmooth at isolated minimizers. In particular, BFGS sequences for the Euclidean norm on $\mathbb R^n$ converge to the origin.

### 4. References

1. A. S. Lewis and M. L. Overton, **Nonsmooth Optimization via Quasi-Newton Methods**, *Mathematical Programming*, 141:135--163, 2013.
2. A. S. Lewis and M. L. Overton, **Behavior of BFGS with an Exact Line Search on Nonsmooth Examples**, 2008.
3. J. Guo and A. S. Lewis, **Nonsmooth Variants of Powell's BFGS Convergence Theorem**, *SIAM Journal on Optimization*, 28(2):1301--1311, 2018.
