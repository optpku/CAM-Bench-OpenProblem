# Prove sharp decay rates for nonlinear comparison ODE driven by SDE noise

This file contains the open problem on Prove sharp decay rates for nonlinear comparison ODE driven by SDE noise.

---

<a id="problem-1"></a>

## 1. Prove sharp decay rates for nonlinear comparison ODE driven by SDE noise

Source paper authors: M. Rodrigo, Jalal Fadili, Hédy Attouch

### 1. Problem Background

Let $f:\mathbb{R}^d\to\mathbb{R}$ be convex and continuously differentiable with $L$-Lipschitz gradient, and assume the minimizer set $S=\operatorname{argmin} f\neq\emptyset$. Consider the stochastic differential equation (SDE)
$$

 dX(t)=-\nabla f(X(t))\,dt+\sigma(t,X(t))\,dW(t),\qquad t\ge 0,

$$
where $W$ is an $m$-dimensional Brownian motion and $\sigma:\mathbb{R}_+\times\mathbb{R}^d\to\mathbb{R}^{d\times m}$ is measurable, globally bounded in Frobenius norm, and Lipschitz in $x$ uniformly in $t$. Define the worst-case diffusion magnitude
$$

\sigma_\infty(t):=\sup_{x\in\mathbb{R}^d}\|\sigma(t,x)\|_F.

$$
Assume $\sigma_\infty\in L^2(\mathbb{R}_+)$, so the noise vanishes in a square-integrable way.

Assume further that $f$ satisfies a local error-bound / \L ojasiewicz-type condition near $S$, leading (after localization arguments) to differential inequalities for certain nonnegative quantities $y(t)$ (e.g., $y(t)=\mathbb{E}[f(X(t)) - \min f]$ restricted to high-probability events, or $y(t)=\mathbb{E}[\mathrm{dist}(X(t),S)^2/2]$ similarly restricted).

In the analysis, one is led to study a nonlinear scalar ODE (comparison equation)
$$

 y'(t)=-a\,y(t)^b+p_\delta(t),\qquad t>\hat t_\delta,

$$
with parameters $a>0$, $b>1$, an initial condition $y(\hat t_\delta)=y_0(\hat t_\delta,\delta)>0$, and a nonnegative forcing term $p_\delta(t)$ depending on the noise profile. The forcing term is of the same order as $\sigma_\infty(t)^2$ (more precisely, $p_\delta(t)=O(\sigma_\infty(t)^2)$ in the regime of interest), but it may also depend on $\delta$ and $\hat t_\delta$ through the localization step (Egorov-type arguments).

### 2. Open Problem

**Question 1.1.** Assume $a>0$, $b>1$, and let $p_\delta:[\hat t_\delta,\infty)\to\mathbb{R}_+$ be a measurable function satisfying $p_\delta(t)=O(\sigma_\infty(t)^2)$. Assume also that
$$

\sigma_\infty(t)^2 = O\big((t+1)^{-\frac{b}{b-1}}\big)\qquad (t\to\infty),

$$
with constants independent of $\delta$ and $\hat t_\delta$. Consider the ODE
$$

 y'(t)=-a\,y(t)^b+p_\delta(t),\qquad t>\hat t_\delta,\qquad y(\hat t_\delta)=y_0(\hat t_\delta,\delta)>0.

$$
Establish that the corresponding solution satisfies the decay rate
$$

 y(t)=O\big((t+1)^{-\frac{1}{b-1}}\big)\qquad (t\to\infty).

$$
(Equivalently: prove the stated implication between the forcing decay $p_\delta(t)$ at order $(t+1)^{-b/(b-1)}$ and the solution decay $y(t)$ at order $(t+1)^{-1/(b-1)}$, uniformly with respect to the localization parameters $\delta$ and $\hat t_\delta$ as above.)

### 3. Known Results

In Maul\'en--Fadili--Attouch ("An SDE Perspective on Stochastic Convex Optimization"), the local \L ojasiewicz/error-bound analysis (Theorem 4.5) reduces, after Egorov-type localization on events $\Omega_\delta$ and comparison (Lemma A.2), to bounding solutions of a nonlinear scalar comparison equation $y'(t)=-a y(t)^b+p_\delta(t)$ with $b>1$ and forcing $p_\delta(t)$ of the same order as $\sigma_\infty(t)^2$. The paper formulates Conjecture 4.11: if $\sigma_\infty(t)^2=O((t+1)^{-b/(b-1)})$ (uniformly in the localization parameters) and $p_\delta=O(\sigma_\infty^2)$, then the comparison solution should satisfy the sharp decay $y(t)=O((t+1)^{-1/(b-1)})$. The difficulty is that the localization time $\hat t_\delta$ depends on $\delta$, and the forcing term inherits a nontrivial dependence on $\delta$ through tail integrals such as $\sigma_\infty(t)^2 / \sqrt[2q]{\int_{\hat t_\delta}^t \sigma_\infty(u)^2 du}$, so standard explicit ODE solutions do not directly yield uniform-in-$\delta$ bounds.

Among forward citations, several works develop closely related dissipative-plus-noise differential inequalities and rate balances under error bounds or \L ojasiewicz/KL conditions, but none isolates and proves the conjectured sharp comparison principle in the generality needed here. "Stochastic inertial dynamics via time scaling and averaging" and the two Tikhonov-regularization papers for stochastic (sub)gradient flows in Hilbert spaces obtain explicit polynomial rates by balancing nonlinear dissipation against noise decay $\sigma_\infty^2(t)=O(t^{-\alpha})$, providing techniques for tracking how diffusion tails enter remainders. "Continuous-time Analysis of a Stochastic ADMM Method for Nonconvex Composite Optimization" uses a comparison-lemma mechanism in a KL setting to derive exponential/polynomial rates with residual terms controlled by diffusion-energy tails $U_t$, illustrating how additional assumptions on the forcing (e.g. $\mathbb E[U_t]\le C/(t+1)^a$) lead to explicit decay. Related-tool papers on stochastic heavy-ball dynamics and multiscale stochastic inclusions provide Lyapunov/martingale methods and tail-integral controls for vanishing diffusion, but focus mainly on ergodic or accelerated regimes rather than the sharp non-ergodic polynomial decay in Conjecture 4.11.

Overall, the open problem remains unsolved in the forward-citation set: a sharp, uniform (in $\delta,\hat t_\delta$) comparison-ODE lemma that converts forcing $p_\delta(t)=O((t+1)^{-b/(b-1)})$ into solution decay $y(t)=O((t+1)^{-1/(b-1)})$ would close the gap in the local \L ojasiewicz-rate theory for vanishing-noise SDE optimization. Promising directions suggested by the citing literature include: (i) refining nonlinear Gronwall/Bihari-type inequalities with explicit polynomial weights to handle forcing terms involving tail integrals; (ii) constructing explicit supersolutions of the form $C(t+1)^{-1/(b-1)}$ with carefully chosen $C$ that absorb the $\delta$-dependent prefactors; and (iii) leveraging regular variation/Karamata-type arguments to control expressions like $\sigma_\infty(t)^2 / (\int_{\hat t_\delta}^t \sigma_\infty^2)^{1/(2q)}$ uniformly over $\hat t_\delta$.

#### 3.1 Upstream solution and partial-progress records

- [Solution #143 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4405639491_p0/solutions/143.pdf)

### 4. Source and Verification

- **Source paper:** M. Rodrigo, Jalal Fadili, Hédy Attouch, [*An Stochastic Differential Equation Perspective on Stochastic Convex Optimization*](https://doi.org/10.1287/moor.2022.0162), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 23, Section 4.2 (Remark 4.10 and Conjecture 4.11).
- **Area:** nonlinear differential inequalities
- **Keywords:** `stochastic differential equations`, `lojasiewicz inequality`, `comparison principle`, `nonlinear ode`, `convergence rates`, `noise decay`
- **Upstream problem record:** [W4405639491_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4405639491_p0&n=143&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. M. Rodrigo, Jalal Fadili, Hédy Attouch, [*An Stochastic Differential Equation Perspective on Stochastic Convex Optimization*](https://doi.org/10.1287/moor.2022.0162), Mathematics of Operations Research, 2024.
2. [*Stochastic inertial dynamics via time scaling and averaging*](https://doi.org/10.1287/stsy.2024.0068).
3. *Tikhonov regularization for stochastic non-smooth convex optimization in Hilbert spaces*.
4. [*Stochastic differential inclusions and Tikhonov regularization for stochastic non-smooth convex optimization in Hilbert spaces*](https://doi.org/10.5802/ojmo.44/).
5. *Continuous-time Analysis of a Stochastic ADMM Method for Nonconvex Composite Optimization*.
6. *Long-Time Analysis of Stochastic Heavy Ball Dynamics for Convex Optimization and Monotone Equations*.
7. *Asymptotic behaviour of coupled random dynamical systems with multiscale aspects*.
