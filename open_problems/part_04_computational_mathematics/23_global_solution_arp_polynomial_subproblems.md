# Global Solution of Polynomial Subproblems in High-Order AR$p$ Methods

This file contains the open problem on exploiting symmetric tensor structure to solve the polynomial subproblems of high-order adaptive regularization methods.

---

<a id="problem-1"></a>

## 1. Structured Global Optimization of AR$p$ Models

Contributors: Yang Liu

### 1. Problem Background

A $p$th-order adaptive regularization method constructs a step $s$ by approximately minimizing
$$
m_{k,p}(s)
=f(x_k)
+\sum_{j=1}^{p}\frac{1}{j!}\nabla^j f(x_k)[s]^j
+\frac{\sigma_k}{p+1}\|s\|^{p+1},
$$
where each derivative $\nabla^j f(x_k)$ is a symmetric $j$th-order tensor and $\sigma_k>0$ is the regularization parameter.

For $p=2$, this is the cubic-regularization subproblem, whose global minimizers admit tractable spectral and secular-equation characterizations. For $p\ge3$, the model is a generally nonconvex polynomial of degree $p+1$. General polynomial global optimization is computationally hard, but AR$p$ models are not arbitrary: their coefficient tensors are supersymmetric derivative tensors and the leading regularizer is an isotropic power of the Euclidean norm.

The central question is how much tractability this special structure creates.

### 2. Open Problems

**Question 1.1. Polynomial-time solvable subclasses.** Identify broad, verifiable classes of Taylor tensors for which a global minimizer of $m_{k,p}$ can be computed in time polynomial in the dimension and input size. The classes should extend substantially beyond diagonal, low-rank, or convexified instances.

**Question 1.2. Exact global-optimality characterization.** Derive necessary and sufficient conditions for global optimality that can be checked efficiently and that exploit supersymmetry and isotropic regularization. Can the global minimizer be characterized through tensor eigenvalues, secular systems, semidefinite or sum-of-squares certificates of bounded size, or another finite-dimensional spectral object?

**Question 1.3. Complexity boundary.** Determine which structural restrictions make the subproblem polynomial-time solvable and which retain NP-hardness. In particular, what is the smallest tensor rank, order, sparsity pattern, or regularization regime at which hardness appears?

**Question 1.4. Sufficient subproblem accuracy for AR$p$.** If exact global minimization is intractable, characterize the weakest efficiently checkable local or approximate condition that preserves the optimal evaluation-complexity guarantees of the outer AR$p$ method.

### 3. Known Results and Recent Progress

Efficient global solution is known for quadratic models with higher-power regularization and for the cubic-regularization subproblem. For the AR$3$ quartic subproblem, recent work by Zhu and Cartis gives global-optimality conditions for quartically regularized cubic Taylor polynomials, with simplifications for low-rank and diagonal tensor structure. Related sum-of-squares results identify additional tractable or certifiable subclasses under sufficiently large regularization.

These developments partially resolve the characterization question for AR$3$, but do not provide a general polynomial-time solution for arbitrary AR$3$ tensors or for $p>3$. The broader tractability and hardness boundary therefore remains open.

### 4. References

1. W. Zhu and C. Cartis, **Quartic Polynomial Sub-problem Solutions in Tensor Methods for Nonconvex Optimization**, NeurIPS Workshop on Higher-Order Optimization for Machine Learning, 2022.
2. W. Zhu and C. Cartis, **Global Optimality Characterizations and Algorithms for Minimizing Quartically-Regularized Third-Order Taylor Polynomials**, arXiv:2504.20259, 2025.
3. W. Zhu and C. Cartis, **Sufficiently Regularized Nonnegative Quartic Polynomials are Sum-of-Squares**, arXiv:2601.20418, 2026.
