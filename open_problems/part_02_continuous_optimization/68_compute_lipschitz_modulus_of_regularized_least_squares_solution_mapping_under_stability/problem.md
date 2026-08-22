# Compute Lipschitz modulus of regularized least-squares solution mapping under stability

This file contains the open problem on Compute Lipschitz modulus of regularized least-squares solution mapping under stability.

---

<a id="problem-1"></a>

## 1. Compute Lipschitz modulus of regularized least-squares solution mapping under stability

Source paper authors: Ying Cui, Tim Hoheisel, Tran T. A. Nghia, Defeng Sun

### 1. Problem Background

Let $X,Y$ be finite-dimensional Euclidean spaces, $A\in \mathcal{L}(X,Y)$ a linear operator with adjoint $A^*$, $b\in Y$, and $\mu>0$. Let $g:X\to \mathbb{R}\cup\{+\infty\}$ be closed, proper, and convex. Consider the regularized least-squares problem
$$

\min_{x\in X}\; F_{A,b,\mu}(x):=\frac{1}{2\mu}\|Ax-b\|^2+g(x),

$$
with solution mapping
$$

S(A,b,\mu):=\operatorname{argmin}_{x\in X} F_{A,b,\mu}(x).

$$
Assume that around a reference parameter triple $(\bar A,\bar b,\bar\mu)$ the mapping $S$ is single-valued and locally Lipschitz, i.e., there exist neighborhoods $\mathcal{U}$ of $(\bar A,\bar b,\bar\mu)$ and a constant $L\ge 0$ such that
$$

\|S(A_1,b_1,\mu_1)-S(A_2,b_2,\mu_2)\|\le L\,\|(A_1,b_1,\mu_1)-(A_2,b_2,\mu_2)\|\quad \forall (A_i,b_i,\mu_i)\in \mathcal{U}.

$$
The infimum of all such $L$ (for a fixed choice of local neighborhoods) is called the (local) Lipschitz modulus of $S$ at $(\bar A,\bar b,\bar\mu)$; informally, it is the smallest constant governing the local Lipschitz bound.

The paper establishes first-order characterizations for when this Lipschitz stability holds, but notes that computing the Lipschitz modulus in general can be approached via coderivatives (which typically require second-order-type variational information about $g$).

### 2. Open Problem

**Question 1.1.** Determine (or provide computable formulas/estimates for) the local Lipschitz modulus of the solution mapping $S$ at a reference triple $(\bar A,\bar b,\bar\mu)$ in the regime where $S$ is single-valued and locally Lipschitz around $(\bar A,\bar b,\bar\mu)$, using an approach that does not rely on involved second-order variational structures of the regularizer $g$ (e.g., avoiding explicit computation of second-order objects such as coderivatives of $\partial g$ that are difficult beyond polyhedral cases).

### 3. Known Results

The 2024 source paper (Cui–Hoheisel–Nghia–Sun) reframes the regularized least-squares KKT system through the Fenchel–Rockafellar dual and applies Robinson strong regularity to obtain a purely first-order characterization of when the solution mapping $S(A,b,\mu)$ is locally single-valued and Lipschitz: under $C^2$-cone reducibility of $g^*$ at $\bar z=-\tfrac{1}{\bar\mu}\bar A^*(\bar A\bar x-\bar b)$, Lipschitz stability is equivalent to the subspace qualification $\ker \bar A\cap \operatorname{par}\partial g^*(\bar z)=\{0\}$. The paper explicitly flags as open the quantitative step of computing the local Lipschitz modulus (the smallest Lipschitz constant) without resorting to coderivatives/second-order variational objects for $g$.

Forward-citing work so far provides partial progress mainly in polyhedral settings. The survey/talk “Stability of nonsmooth optimization problems” retains coderivative-based criteria in general but, for LASSO, derives an explicit computable upper bound on the Lipschitz modulus in terms of singular values of an active submatrix $A_J$ and the scaled residual $A\bar x-\bar b$. “Lipschitz continuity of solution multifunctions of extended regularization problems” gives polyhedral-geometry characterizations (global Lipschitzness in $(\lambda,b)$ for fixed $A$, and local Lipschitzness under an active-set linear independence condition) but does not provide an explicit modulus. “Isolated Calmness in Regularized Convex Optimization” supplies geometric necessary/sufficient conditions for isolated calmness in broader composite least-squares models, which supports existence of some local Lipschitz bound but again stops short of a computable minimal constant.

Overall, the problem of determining the exact local Lipschitz modulus of $S$ at $(\bar A,\bar b,\bar\mu)$ in the general $C^2$-cone reducible-conjugate regime, using only first-order information about $g$, remains open. Current promising directions include: (i) exploiting active-manifold/effective-subspace reductions (as in Newton methods for polyhedral regularizers) to express the modulus via restricted linear systems; and (ii) extending such reductions beyond polyhedral $g$ to broader $C^2$-cone reducible $g^*$ by identifying computable representations of $\operatorname{par}\partial g^*(\bar z)$ and deriving tight norm bounds for the implicit map induced by the dual strong-regularity linearization.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #42 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7118180028_p0/partial_progress/42.pdf)

### 4. Source and Verification

- **Source paper:** Ying Cui, Tim Hoheisel, Tran T. A. Nghia, Defeng Sun, [*Lipschitz Stability of Least-Squares Problems Regularized by Functions with C2-Cone Reducible Conjugates*](https://doi.org/10.1287/moor.2024.0692), Mathematics of Operations Research, 2026.
- **Location in paper:** Page 19 (Conclusion), paragraph beginning 'One of the open questions we plan to investigate in the future...'; also reiterated on page 20.
- **Area:** variational analysis
- **Keywords:** `lipschitz modulus`, `solution mapping`, `regularized least squares`, `sensitivity analysis`, `fenchel conjugate`, `coderivative`
- **Upstream problem record:** [W7118180028_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7118180028_p0&n=42&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ying Cui, Tim Hoheisel, Tran T. A. Nghia, Defeng Sun, [*Lipschitz Stability of Least-Squares Problems Regularized by Functions with C2-Cone Reducible Conjugates*](https://doi.org/10.1287/moor.2024.0692), Mathematics of Operations Research, 2026.
2. *Stability of nonsmooth optimization problems*.
3. *Lipschitz continuity of solution multifunctions of extended regularization problems*.
4. *Isolated Calmness in Regularized Convex Optimization*.
5. *Nonsmooth Newton methods with effective subspaces for polyhedral regularization*.
6. [*Tilt Stability of Ky-Fan -Norm Composite Optimization*](https://doi.org/10.1007/s11228-025-00778-y).
