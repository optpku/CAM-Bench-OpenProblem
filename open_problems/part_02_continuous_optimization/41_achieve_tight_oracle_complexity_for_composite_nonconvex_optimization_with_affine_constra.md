# Achieve tight oracle complexity for composite nonconvex optimization with affine constraints

This file contains the open problem on Achieve tight oracle complexity for composite nonconvex optimization with affine constraints.

---

<a id="problem-1"></a>

## 1. Achieve tight oracle complexity for composite nonconvex optimization with affine constraints

Source paper authors: Wei Liu, Qihang Lin, Yangyang Xu

### 1. Problem Background

Consider the affinely constrained composite optimization problem
$$

\min_{x\in\mathbb{R}^d} F_0(x):= f_0(x)+g(x)\quad\text{s.t.}\quad Ax+b=0.

$$
Here $A\in\mathbb{R}^{n\times d}$, $b\in\mathbb{R}^n$. The smooth term $f_0:\mathbb{R}^d\to\mathbb{R}$ has $L_f$-Lipschitz gradient:
$$

\|\nabla f_0(x)-\nabla f_0(x')\|\le L_f\|x-x'\|,\quad \forall x,x'.

$$
The regularizer $g:\mathbb{R}^d\to\mathbb{R}\cup\{+\infty\}$ is proper, lower semicontinuous, convex, and may be nonsmooth. In the problem class of interest, $g$ has the compositional form
$$

 g(x)=\bar g(\bar A x+\bar b),

$$
with $\bar A\in\mathbb{R}^{\bar n\times d}$, $\bar b\in\mathbb{R}^{\bar n}$, and $\bar g:\mathbb{R}^{\bar n}\to\mathbb{R}\cup\{+\infty\}$ proper l.s.c. convex, with $\mathrm{relint}(\mathrm{dom}(\bar g))\neq\emptyset$ and $\mathrm{dom}(\bar g)$ not a singleton.

An $\varepsilon$-stationary point (for $\varepsilon\ge 0$) is defined via existence of a multiplier $\gamma\in\mathbb{R}^n$ such that
$$

\max\Big\{\mathrm{dist}\big(0,\nabla f_0(x)+A^\top\gamma+\partial g(x)\big),\ \|Ax+b\|\Big\}\le \varepsilon,

$$
where $\partial g(x)$ is the convex subdifferential and $\mathrm{dist}(0,S):=\inf_{s\in S}\|s\|$.

A first-order method (FOM) measures cost by oracle calls. In Algorithm Class 1, at query $(x,z,\eta)$ an oracle returns
$\nabla f_0(x), Ax, A^\top z, \mathrm{prox}_{\eta g}(x)$, where
$$

\mathrm{prox}_{\eta g}(x):=\arg\min_{x'}\Big\{g(x')+\tfrac{1}{2\eta}\|x'-x\|^2\Big\}.

$$
The paper proves a lower bound for Algorithm Class 1: there exist instances requiring $\Omega\big(\kappa([\bar A;A])\,L_f\,\Delta F_0\,\varepsilon^{-2}\big)$ oracle calls, where $[\bar A;A]$ denotes row-stacking and
$$

\kappa([\bar A;A]) := \sqrt{\frac{\lambda_{\max}([\bar A;A][\bar A;A]^\top)}{\lambda_{\min}^+([\bar A;A][\bar A;A]^\top)}}

$$
(with $\lambda_{\min}^+$ the smallest positive eigenvalue), and $\Delta F_0 := F_0(x^{(0)})-\inf_x F_0(x)$.

An upper bound matching this (up to logarithmic factors) is known for a different oracle/model (Algorithm Class 2 / a splitting reformulation), but for Algorithm Class 1 the paper does not provide a matching algorithmic upper bound and explicitly leaves tightness unresolved.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a first-order method in Algorithm Class 1 (i.e., using oracle access to $\nabla f_0(x)$, $Ax$, $A^\top z$, and $\mathrm{prox}_{\eta g}(x)$) that, for every instance in the stated class, outputs a point $x\in\mathbb{R}^d$ satisfying
$$

\max\Big\{\mathrm{dist}\big(0,\nabla f_0(x)+A^\top\gamma+\partial g(x)\big),\ \|Ax+b\|\Big\}\le \varepsilon

$$
for some $\gamma\in\mathbb{R}^n$, using at most $\tilde O\big(\kappa([\bar A;A])\,L_f\,\Delta F_0\,\varepsilon^{-2}\big)$ oracle calls (i.e., matching the proved lower bound $\Omega\big(\kappa([\bar A;A])\,L_f\,\Delta F_0\,\varepsilon^{-2}\big)$ up to logarithmic factors).

### 3. Known Results

The Liu--Lin--Xu paper (arXiv:2502.17770v2; extended arXiv:2307.07605) establishes a lower oracle-complexity bound for Algorithm Class 1 (ORACLE1 access to $\nabla f_0(x)$, $Ax$, $A^\top z$, and $\mathrm{prox}_{\eta g}(x)$) on Problem Class 1: there exist instances requiring $\Omega(\kappa([\bar A;A])\,L_f\,\Delta F_0\,\varepsilon^{-2})$ oracle calls to reach an $\varepsilon$-stationary point. The hard instance is built by splitting a tridiagonal Toeplitz constraint operator $H$ into two parts: one part remains as explicit affine constraints $Ax=0$, while the other is encoded into a nonsmooth term $g(x)=\beta\sum_{i\in\mathcal M}\|x_i-x_{i+1}\|_1$. This construction forces a slow expansion of support in the iterates (a “zero-respecting” phenomenon), yielding the $\kappa([\bar A;A])$ dependence and showing that nonsmooth regularization can make the affinely constrained problem strictly harder than the smooth case even when $\mathrm{prox}_{\eta g}$ is available.

Among the limited forward-citation evidence provided here, two augmented-Lagrangian-type works offer only partial progress toward the open tightness question for Algorithm Class 1. The linearized augmented Lagrangian method paper proves $O(\varepsilon^{-2})$ complexity for smooth nonconvex equality-constrained problems and, in the affine case, obtains a condition-number dependence $\kappa_A^2$ (with $\kappa_A=\|A\|/\sigma_{\min}(A)$), explicitly suggesting that acceleration/extrapolation might reduce this to $\kappa_A$. The proximal augmented Lagrangian method paper establishes finite $\varepsilon$-KKT termination for problems with proximable terms and nonlinear constraints but does not provide worst-case oracle complexity estimates comparable to $\tilde O(\kappa([\bar A;A])L_f\Delta F_0\varepsilon^{-2})$.

As of the provided citation set, no paper resolves whether an Algorithm Class 1 method can match the Liu--Lin--Xu lower bound up to logarithmic factors for all instances in Problem Class 1. The best-known near-optimality result in the Liu--Lin--Xu line is for Algorithm Class 2 (splitting reformulation with ORACLE2), where an inexact proximal-gradient-type method achieves $\tilde O(\kappa([\bar A;A])L_f\Delta F_0\varepsilon^{-2})$ under additional assumptions (e.g., full row rank of $[\bar A;A]$ and Lipschitz $\bar g$). Bridging the gap for Algorithm Class 1 likely requires new acceleration mechanisms that exploit $\mathrm{prox}_{\eta g}$ while controlling feasibility $\|Ax+b\|$ without incurring extra $\kappa$ factors, or alternatively a refined lower bound showing that ORACLE1 intrinsically cannot attain the $\kappa([\bar A;A])$ scaling in the worst case.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #14 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411234993_p0/partial_progress/14.pdf)

### 4. Source and Verification

- **Source paper:** Wei Liu, Qihang Lin, Yangyang Xu, [*Lower Complexity Bounds of First-Order Methods for Affinely Constrained Composite Nonconvex Problems*](https://doi.org/10.1287/moor.2023.0377), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 4 (Conclusion and Open Questions), page 25.
- **Area:** first order convex optimization
- **Keywords:** `first-order methods`, `oracle complexity`, `affine constraints`, `composite nonconvex optimization`, `proximal operator`, `lower complexity bounds`
- **Upstream problem record:** [W4411234993_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411234993_p0&n=14&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Wei Liu, Qihang Lin, Yangyang Xu, [*Lower Complexity Bounds of First-Order Methods for Affinely Constrained Composite Nonconvex Problems*](https://doi.org/10.1287/moor.2023.0377), Mathematics of Operations Research, 2025.
2. *Complexity of a linearized augmented Lagrangian method for nonconvex minimization with nonlinear equality constraints*.
3. *A proximal augmented Lagrangian method for nonconvex optimization with equality and inequality constraints*.
