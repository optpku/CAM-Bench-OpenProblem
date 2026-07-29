# Lower bound on oracle complexity for near-stationary max-structured nonconvex optimization

This file contains the open problem on Lower bound on oracle complexity for near-stationary max-structured nonconvex optimization.

---

<a id="problem-1"></a>

## 1. Lower bound on oracle complexity for near-stationary max-structured nonconvex optimization

Source paper authors: Renbo Zhao

### 1. Problem Background

Let $(X,\|\cdot\|_X)$ and $(Y,\|\cdot\|_Y)$ be finite-dimensional real normed spaces. Let $r:X\to\mathbb{R}\cup\{+\infty\}$ be closed and convex with domain $\mathrm{dom}r\subseteq X$, and write $\mathcal{X}:=\mathrm{dom}r$ (assumed nonempty, closed, convex). Let $\mathcal{Y}\subseteq Y$ be nonempty, closed, convex, and bounded. Let $g:\mathcal{Y}\to\mathbb{R}$ be convex and continuous.

Let $\Phi:\mathcal{X}'\times\mathcal{Y}'\to\mathbb{R}$ be jointly continuous on open sets $\mathcal{X}'\supseteq \mathcal{X}$, $\mathcal{Y}'\supseteq \mathcal{Y}$, with $\Phi(x,\cdot)$ concave on $\mathcal{Y}$ for each $x\in\mathcal{X}$. Assume $\Phi(\cdot,y)$ is Frchet differentiable and has Lipschitz gradient in $x$: there is $L_{xx}<\infty$ such that for all $x,x'\in\mathcal{X}$, $y\in\mathcal{Y}$,
$$
\|\nabla_x\Phi(x,y)-\nabla_x\Phi(x',y)\|_{X^*}\le L_{xx}\|x-x'\|_X.
$$
Assume also a cross-Lipschitz bound: there is $L_{xy}<\infty$ such that for all $x\in\mathcal{X}$, $y,y'\in\mathcal{Y}$,
$$
\|\nabla_x\Phi(x,y)-\nabla_x\Phi(x,y')\|_{X^*}\le L_{xy}\|y-y'\|_Y.
$$
Assume weak convexity in $x$: there exists $\gamma\in(0,L_{xx}]$ such that for all $x,x'\in\mathcal{X}$, $y\in\mathcal{Y}$,
$$
\Phi(x',y)\ge \Phi(x,y)+\langle \nabla_x\Phi(x,y),x'-x\rangle-\tfrac{\gamma}{2}\|x'-x\|_X^2.
$$
Assume $\Phi(x,\cdot)$ is Frchet differentiable with Lipschitz gradient in $y$: there exist $L_{yy}<\infty$ and the same $L_{xy}$ such that for all $x,x'\in\mathcal{X}$, $y,y'\in\mathcal{Y}$,
$$
\|\nabla_y\Phi(x,y)-\nabla_y\Phi(x',y)\|_{Y^*}\le L_{xy}\|x-x'\|_X,\qquad \|\nabla_y\Phi(x,y)-\nabla_y\Phi(x,y')\|_{Y^*}\le L_{yy}\|y-y'\|_Y.
$$

Define the max-structured nonconvex objective
$$
q(x):=f(x)+r(x),\qquad f(x):=\max_{y\in\mathcal{Y}}\ \Phi(x,y)-g(y),\qquad q^*:=\inf_{x\in\mathcal{X}} q(x)>-\infty.
$$

Fix a distance generating function (DGF) $\omega_X:\mathcal{X}\to\mathbb{R}$ that is 1-strongly convex on $\mathcal{X}$ and differentiable on a neighborhood of $\mathcal{X}$, and assume $\nabla \omega_X$ is $\beta_X$-Lipschitz on $\mathcal{X}$ for some $\beta_X\ge1$. Let the induced Bregman divergence be
$$
D_{\omega_X}(x',x):=\omega_X(x')-\omega_X(x)-\langle \nabla\omega_X(x),x'-x\rangle.
$$
For any $\lambda\in(0,\gamma^{-1})$, define the proximal point mapping
$$
\mathrm{prox}(q,x,\lambda):=\arg\min_{x'\in\mathcal{X}}\ q(x')+\lambda^{-1}D_{\omega_X}(x',x).
$$
An $\varepsilon$-near-stationary point is a point $x\in\mathcal{X}$ for which there exists $\lambda\in(0,\gamma^{-1})$ such that
$$
\|\lambda^{-1}(x-\mathrm{prox}(q,x,\lambda))\|_X\le \varepsilon/\beta_X.
$$

The paper studies first-order methods whose cost is measured by the number of evaluations of $\nabla_x\Phi(x,y)$ and $\nabla_y\Phi(x,y)$ (and associated simple Bregman proximal projections for $r$ and $g$), yielding upper bounds on the oracle complexities to obtain an $\varepsilon$-near-stationary point. The open question concerns matching information-theoretic (worst-case) lower bounds as functions of $\varepsilon$ and the parameters $L_{xx},L_{xy},L_{yy},\gamma$.

### 2. Open Problem

**Question 1.1.** Determine a worst-case lower bound (in terms of $\varepsilon$ and the problem parameters $L_{xx},L_{xy},L_{yy},\gamma$, and any necessary dependence on $\beta_X$) on the number of first-order oracle calls required by any algorithm to output an $\varepsilon$-near-stationary point of
$$
\min_{x\in\mathcal{X}}\ q(x)=\max_{y\in\mathcal{Y}}\ \Phi(x,y)-g(y)+r(x),
$$
over the class of instances satisfying the smoothness, cross-Lipschitz, and weak-convexity conditions stated in the background. Here a first-order oracle call reveals $\nabla_x\Phi(x,y)$ and/or $\nabla_y\Phi(x,y)$ at queried $(x,y)\in\mathcal{X}\times\mathcal{Y}$, along with the ability to compute the required Bregman proximal projections for $r$ and $g$.

### 3. Known Results

Zhao’s primal-dual smoothing framework targets $\varepsilon$-near-stationarity for the composite max-structured weakly convex objective $q(x)=\max_{y\in\mathcal Y}\Phi(x,y)-g(y)+r(x)$ under separate smoothness and cross-Lipschitz constants $L_{xx},L_{xy},L_{yy}$, weak convexity $\gamma$, and non-Euclidean (Bregman) geometry controlled by $\beta_X$. The algorithmic side is comparatively well developed: Zhao obtains deterministic oracle upper bounds of order $\tilde O(\varepsilon^{-3})$ (with explicit dependence on $\gamma,L_{xx},L_{xy},L_{yy},\beta_X$) for primal/dual gradient evaluations by reducing each outer proximal step to a strongly convex–concave saddle-point problem and solving it via a non-Hilbertian inexact accelerated proximal-gradient scheme.

On the lower-bound side, the forward-citation set shows only partial progress, primarily in more restrictive minimax subclasses. The most directly relevant is “The complexity of nonconvex-strongly-concave minimax optimization,” which proves worst-case first-order oracle lower bounds for finding $\varepsilon$-stationary points of the primal max function in smooth nonconvex–strongly-concave minimax problems, with complexity $\Omega(\sqrt{\kappa\,\Delta L}\,\varepsilon^{-2})$ for deterministic linear-span methods. This establishes that nontrivial parameter-dependent lower bounds are possible and that condition-number effects can be inherent, but it does not cover Zhao’s bounded-$\mathcal Y$ concave (not strongly concave) setting, composite terms $r,g$, or Bregman-prox near-stationarity.

Other citing works largely advance upper bounds (e.g., single-loop extragradient variants achieving $O(\varepsilon^{-2})$ for certain stationarity notions, and proximal/Catalyst frameworks yielding $\tilde O(\varepsilon^{-3})$ for Moreau-envelope stationarity in nonconvex–concave minimax). These results sharpen the landscape of achievable rates but do not provide matching information-theoretic lower bounds for the full max-structured weakly convex composite class. Consequently, the specific open problem posed by Zhao—deriving worst-case lower bounds with explicit dependence on $\varepsilon$ and $L_{xx},L_{xy},L_{yy},\gamma$ (and possibly $\beta_X$) for the $\varepsilon$-near-stationarity mapping—appears to remain open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #91 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4386547517_p0/partial_progress/91.pdf)

### 4. Source and Verification

- **Source paper:** Renbo Zhao, [*A Primal-Dual Smoothing Framework for Max-Structured Non-Convex Optimization*](https://doi.org/10.1287/moor.2023.1387), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 8 (Conclusion and future work), page 35.
- **Area:** nonconvex minimax optimization
- **Keywords:** `first-order oracle complexity`, `weakly convex optimization`, `saddle-point structure`, `Bregman proximal methods`, `nonconvex nonsmooth optimization`
- **Upstream problem record:** [W4386547517_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4386547517_p0&n=91&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Renbo Zhao, [*A Primal-Dual Smoothing Framework for Max-Structured Non-Convex Optimization*](https://doi.org/10.1287/moor.2023.1387), Mathematics of Operations Research, 2023.
2. *The complexity of nonconvex-strongly-concave minimax optimization*.
3. *A single-loop accelerated extra-gradient difference algorithm with improved complexity bounds for constrained minimax optimization*.
4. *A stochastic smoothing framework for nonconvex-nonconcave min-sum-max problems with applications to wasserstein distributionally robust optimization*.
5. [*Efficient search of first-order nash equilibria in nonconvex-concave smooth min-max problems*](https://doi.org/10.1137/20M1337600).
6. *Near-optimal algorithms for minimax optimization*.
7. *A catalyst framework for minimax optimization*.
