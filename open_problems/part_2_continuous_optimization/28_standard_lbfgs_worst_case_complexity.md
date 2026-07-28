# Worst-Case Theory for Standard L-BFGS

This file contains the open problem on whether the classical limited-memory BFGS method is provably better than gradient descent.

---

<a id="problem-1"></a>

## 1. Condition-Number Improvement for Classical L-BFGS

Contributors: Yang Liu

### 1. Problem Background

L-BFGS replaces the dense BFGS matrix by an implicit inverse-Hessian approximation formed from only the most recent $m$ curvature pairs
$$
(s_i,y_i),\qquad
s_i=x_{i+1}-x_i,\qquad
y_i=\nabla f(x_{i+1})-\nabla f(x_i).
$$
Its two-loop recursion requires $O(md)$ time and memory in dimension $d$, making it one of the most widely used deterministic large-scale optimization methods.

Classical convergence theory establishes global convergence and, under strong convexity, linear convergence under suitable line-search and curvature assumptions. However, standard worst-case bounds do not clearly certify the practical advantage of L-BFGS over gradient descent. In particular, they do not show a strictly better dependence on the condition number
$$
\kappa=\frac{L}{\mu}
$$
for the unmodified, recency-based L-BFGS update.

### 2. Open Problems

**Question 1.1. Strict worst-case improvement over gradient descent.** For $L$-smooth, $\mu$-strongly convex objectives, can one prove that standard L-BFGS with a fixed memory size $m$ has a worst-case iteration bound with strictly better dependence on $\kappa$ than gradient descent?

The result should apply to the classical algorithm that stores the most recent curvature pairs and uses the standard two-loop recursion, rather than replacing the update directions by a greedy basis-selection rule.

**Question 1.2. Necessary structural assumptions.** If no improvement is possible over the full class of smooth strongly convex functions, identify the weakest additional structure under which standard L-BFGS provably improves on gradient descent. Candidate structures include clustered spectra, low effective Hessian rank, slowly varying eigenspaces, or a limited number of distinct eigenvalues.

**Question 1.3. Lower bound and memory tradeoff.** Determine a matching lower bound that depends explicitly on $\kappa$, the memory size $m$, and dimension $d$. Is there a fixed $m$ for which standard L-BFGS has the same worst-case condition-number dependence as gradient descent, despite being much faster on typical instances?

### 3. Known Results and Scope

The 2023 Limited-memory Greedy BFGS (LG-BFGS) method has an explicit nonasymptotic superlinear rate under additional conditions, with a memory-dependent contraction analysis. LG-BFGS uses greedy curvature selection and displacement aggregation, so it does not resolve the worst-case complexity of standard recency-based L-BFGS.

Safeguarded, stochastic, greedy, and other modified L-BFGS variants have separate convergence guarantees. They should be distinguished from the classical deterministic method in any resolution of this problem.

### 4. References

1. D. C. Liu and J. Nocedal, **On the Limited Memory BFGS Method for Large Scale Optimization**, *Mathematical Programming*, 45:503--528, 1989.
2. Z. Gao, A. Mokhtari, and A. Koppel, **Limited-Memory Greedy Quasi-Newton Method with Non-asymptotic Superlinear Convergence Rate**, arXiv:2306.15444, 2023.
