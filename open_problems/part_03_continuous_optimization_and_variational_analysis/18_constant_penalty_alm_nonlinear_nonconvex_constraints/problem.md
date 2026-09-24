# Constant-Penalty ALM for Nonlinearly Constrained Nonconvex Optimization

This file contains the open problem on obtaining the best-known first-order complexity for augmented Lagrangian methods with a constant penalty parameter and large dual steps.

---

<a id="problem-1"></a>

## 1. Constant-Penalty ALM with Large Dual Steps

Contributors: Kangkang Deng

### 1. Problem Background

Consider deterministic nonlinear equality-constrained optimization
$$
\min_{x\in X} f(x)
\qquad\text{subject to}\qquad
c(x)=0,
$$
where $f:\mathbb R^d\to\mathbb R$ and $c:\mathbb R^d\to\mathbb R^m$ are smooth and may be nonconvex, and $X$ is a simple closed convex set. The augmented Lagrangian is
$$
\mathcal L_\rho(x,\lambda)
=f(x)+\langle\lambda,c(x)\rangle
+\frac{\rho}{2}\|c(x)\|^2.
$$
A typical ALM alternates an inexact primal minimization of $\mathcal L_\rho$ with a dual update such as
$$
\lambda_{k+1}=\lambda_k+\eta_k c(x_{k+1}).
$$

Historically, a principal advantage of ALM over a pure quadratic penalty method is that it can attain high accuracy without driving the penalty parameter to infinity. Nevertheless, the analyses attaining the best-known first-order complexity for deterministic, nonlinearly constrained nonconvex problems generally use increasing penalties, or penalties chosen as functions of the target accuracy, together with small dual steps.

### 2. Stationarity Criterion

An $\varepsilon$-first-order KKT point is a pair $(\bar x,\bar\lambda)$ satisfying, for example,
$$
\operatorname{dist}\!\left(
0,\nabla f(\bar x)+\nabla c(\bar x)^\top\bar\lambda+N_X(\bar x)
\right)\le\varepsilon,
\qquad
\|c(\bar x)\|\le\varepsilon,
$$
under an appropriate constraint qualification or regularity condition.

### 3. Open Problem

**Question 1.1. Constant-penalty optimal complexity.** Can one design and analyze an augmented Lagrangian method for deterministic, nonlinearly constrained nonconvex problems that simultaneously:

- uses a penalty parameter $\rho=O(1)$ independent of the target accuracy $\varepsilon$;
- permits a nonvanishing, practically large dual stepsize;
- returns an $\varepsilon$-first-order KKT point; and
- attains the best-known first-order oracle complexity
  $$
  \widetilde O(\varepsilon^{-3})?
  $$

The result should specify the constraint regularity assumptions, the accuracy required in primal subproblems, whether a single-loop implementation is possible, and the dependence of the bound on $\rho$, the dual stepsize, smoothness constants, and regularity constants.

**Question 1.2. Necessity or impossibility.** If the target is impossible under standard regularity assumptions, establish a lower bound or counterexample showing why either the penalty must depend on $\varepsilon$, the dual step must shrink, or the complexity must worsen.

### 4. Known Results

1. Xie and Wright analyzed a proximal ALM whose penalty is fixed across outer iterations, but the available guarantee does not simultaneously give an accuracy-independent penalty, large dual steps, and the best-known $\widetilde O(\varepsilon^{-3})$ complexity.
2. Rate-improved inexact ALM analyses obtain $\widetilde O(\varepsilon^{-3})$ complexity under suitable regularity conditions, but use penalty schedules that grow with the target accuracy or iteration.
3. Alacaoglu and Wright obtained single-loop stochastic results for several constraint classes. Their constant-penalty, constant-dual-step result applies to linear constraints; for nonlinear functional constraints, their analysis uses increasing penalties and small dual steps. They explicitly identify the deterministic nonlinear constant-penalty, large-dual-step $\widetilde O(\varepsilon^{-3})$ guarantee as an open question.

### 5. References

1. Y. Xie and S. J. Wright, **Complexity of Proximal Augmented Lagrangian for Nonconvex Optimization with Nonlinear Equality Constraints**, *Journal of Scientific Computing*, 86(3), Article 38, 2021.
2. Z. Li, P.-Y. Chen, S. Liu, S. Lu, and Y. Xu, **Rate-Improved Inexact Augmented Lagrangian Method for Constrained Nonconvex Optimization**, *Proceedings of AISTATS*, PMLR 130:2170--2178, 2021.
3. A. Alacaoglu and S. J. Wright, **Complexity of Single Loop Algorithms for Nonlinear Programming with Stochastic Objective and Constraints**, *Proceedings of AISTATS*, PMLR 238:4627--4635, 2024; arXiv:2311.00678.
