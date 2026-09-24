# Uniqueness of Sobolev solutions to min-max variational inequality with obstacle and gradient constraints

This file contains the open problem on Uniqueness of Sobolev solutions to min-max variational inequality with obstacle and gradient constraints.

---

<a id="problem-1"></a>

## 1. Uniqueness of Sobolev solutions to min-max variational inequality with obstacle and gradient constraints

Source paper authors: Andrea Bovo, Tiziano De Angelis, Elena Issoglio

### 1. Problem Background

Fix a finite horizon $T\in(0,\infty)$ and dimension $d\in\mathbb{N}$. Let $b:\mathbb{R}^d\to\mathbb{R}^d$ and $\sigma:\mathbb{R}^d\to\mathbb{R}^{d\times d'}$ be continuously differentiable, locally Lipschitz, with at most linear growth, and let $a(x):=\sigma(x)\sigma(x)^\top$. Assume local ellipticity: for every bounded $B\subset\mathbb{R}^d$ there exists $\theta_B>0$ such that $\langle \zeta, a(x)\zeta\rangle\ge \theta_B\|\zeta\|_d^2$ for all $x\in B$, $\zeta\in\mathbb{R}^d$.

Define the second-order operator acting on sufficiently regular $\varphi$ by
$$

(L\varphi)(x)=\tfrac12\mathrm{tr}\big(a(x)D^2\varphi(x)\big)+\langle b(x),\nabla \varphi(x)\rangle.

$$
Let $r\ge 0$ be a constant. Let $f,g,h:[0,T]\times\mathbb{R}^d\to[0,\infty)$ be continuous, with the regularity and growth conditions ensuring the expressions below are well-defined almost everywhere for Sobolev functions: specifically assume $g$ and $f^2$ are locally $C^{1,2,\alpha}$ and $h$ is locally $C^{0,1,\alpha}$ for some $\alpha\in(0,1)$, and $g(t,x)+h(t,x)$ has at most quadratic growth in $x$. Assume also the compatibility condition
$$

\|\nabla g(t,x)\|_d\le f(t,x),\qquad (t,x)\in[0,T]\times\mathbb{R}^d.

$$

For $p>d+2$, consider functions $u\in W^{1,2,p}_{\mathrm{loc}}([0,T]\times\mathbb{R}^d)$. By Sobolev embedding, such $u$ have a locally H\"older-continuous spatial gradient, so the pointwise constraints $u\ge g$ and $\|\nabla u\|_d\le f$ are meaningful.

Define the (parabolic) min-max variational inequality on $[0,T)\times\mathbb{R}^d$ with terminal condition $u(T,x)=g(T,x)$:
$$

\min\Big\{\,\max\big\{\partial_t u + Lu - r u + h,\; g-u\big\},\; f-\|\nabla u\|_d\,\Big\}=0\quad \text{a.e. on }[0,T)\times\mathbb{R}^d.

$$
A solution is understood in the strong (Sobolev) sense, i.e. the PDE terms hold almost everywhere, with $u$ satisfying the obstacle and gradient constraints and the terminal condition.

### 2. Open Problem

**Question 1.1.** Determine whether the above min-max variational inequality with terminal condition $u(T,x)=g(T,x)$ admits at most one solution $u\in W^{1,2,p}_{\mathrm{loc}}([0,T]\times\mathbb{R}^d)$ (for some/every $p>d+2$) satisfying the quadratic-growth bound $|u(t,x)|\le c(1+\|x\|_d^2)$ for a constant $c>0$.

Equivalently, prove or disprove: if $u_1,u_2\in W^{1,2,p}_{\mathrm{loc}}([0,T]\times\mathbb{R}^d)$ both satisfy
1) $u_i(T,x)=g(T,x)$ for all $x\in\mathbb{R}^d$,
2) $u_i\ge g$ and $\|\nabla u_i\|_d\le f$ pointwise on $[0,T]\times\mathbb{R}^d$,
3) $\min\{\max\{\partial_t u_i + Lu_i - r u_i + h,\; g-u_i\},\; f-\|\nabla u_i\|_d\}=0$ a.e. on $[0,T)\times\mathbb{R}^d$,
4) $|u_i(t,x)|\le c(1+\|x\|_d^2)$,
then $u_1\equiv u_2$ on $[0,T]\times\mathbb{R}^d$.

### 3. Known Results

In the source paper (Bovo–De Angelis–Issoglio, arXiv:2203.06247v3) the value $v$ of a finite-horizon zero-sum singular-controller vs. stopper game on $[0,T]\times\mathbb R^d$ is identified as the maximal strong Sobolev solution $u\in W^{1,2,p}_{\mathrm{loc}}$ ($p>d+2$) of the min–max variational inequality $\min\{\max\{\partial_t u+Lu-ru+h,\ g-u\},\ f-\|\nabla u\|\}=0$ with terminal condition $u(T,\cdot)=g(T,\cdot)$ and quadratic growth. The paper explicitly leaves open whether such a Sobolev solution is unique (Remark 3.5), noting that standard approaches (e.g. those used for singular control without an obstacle, or obstacle problems without gradient constraints) do not directly yield a comparison principle in the presence of both hard constraints and the min–max structure.

Forward-citing work to date provides substantial partial progress but no definitive uniqueness theorem for the original locally elliptic problem on $\mathbb R^d$. Two strands are prominent. First, several papers establish uniqueness/maximality for approximating or regularised problems where uniform ellipticity is restored or the gradient constraint is modified: for example, “Stopper vs. Singular controller games with degenerate diffusions” proves that for each uniformly elliptic perturbation $a_\varepsilon=a+\varepsilon^2I$ there is a (unique/maximal) strong Sobolev solution to the corresponding regularised VI, and then studies the $\varepsilon\downarrow0$ limit, but stops short of proving that the limit satisfies the original VI in strong Sobolev sense or that uniqueness holds in the locally elliptic/degenerate setting. Similarly, “Zero-Sum Stopper Versus Singular-Controller Games with Constrained Control Directions” develops an approximation $\gamma\downarrow0$ for direction-constrained controls, obtaining maximal strong solutions for approximating VIs and convergence of values, but again without a limiting strong-Sobolev VI characterisation or uniqueness.

Second, a set of one-dimensional works on the half-line or time-homogeneous models (“Finite-time horizon, stopper vs. singular-controller games on the half-line”, “On the saddle point of a zero-sum stopper vs. singular-controller game”, and “Global regularity of the value function in a stopper vs. singular-controller game”) provide refined regularity and free-boundary structure (e.g. global $C^1$ regularity, smooth-fit at the control boundary, and probabilistic representations for $v_x$). These results strengthen the analytical toolbox in special 1D settings and show that maximality can coincide with strong regularity and explicit boundary characterisations, but they still do not deliver a general comparison principle for the multi-dimensional Sobolev VI with variable $f(t,x)$ and obstacle $g(t,x)$. Overall, the uniqueness problem remains open; the most promising directions appear to be (i) developing a comparison principle tailored to the coupled obstacle/gradient-constraint min–max operator under quadratic growth on $\mathbb R^d$, or (ii) proving that the maximal Sobolev solution coincides with the game value and is stable under penalisation/regularisation in a way that forces uniqueness (e.g. via monotone approximation and tightness/compactness arguments that rule out multiple strong solutions).

#### 3.1 Upstream solution and partial-progress records

- [Solution #72 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4221167288_p0/solutions/72.pdf)

### 4. Source and Verification

- **Source paper:** Andrea Bovo, Tiziano De Angelis, Elena Issoglio, [*Variational Inequalities on Unbounded Domains for Zero-Sum Singular Controller vs. Stopper Games*](https://doi.org/10.1287/moor.2023.0029), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 7, Section 3 (Remark 3.5).
- **Area:** variational inequalities
- **Keywords:** `variational inequality`, `gradient constraint`, `obstacle problem`, `uniqueness`, `controller-stopper games`, `Sobolev solution`
- **Upstream problem record:** [W4221167288_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4221167288_p0&n=72&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Andrea Bovo, Tiziano De Angelis, Elena Issoglio, [*Variational Inequalities on Unbounded Domains for Zero-Sum Singular Controller vs. Stopper Games*](https://doi.org/10.1287/moor.2023.0029), Mathematics of Operations Research, 2024.
2. [*Stopper vs. Singular controller games with degenerate diffusions*](https://doi.org/10.1007/s00245-024-10199-2).
3. [*Finite-time horizon, stopper vs. singular-controller games on the half-line*](https://doi.org/10.1287/moor.2024.0690).
4. [*Zero-Sum Stopper Versus Singular-Controller Games with Constrained Control Directions*](https://doi.org/10.1137/23M1579558).
5. *On the saddle point of a zero-sum stopper vs. singular-controller game*.
6. *Global regularity of the value function in a stopper vs. singular-controller game*.
