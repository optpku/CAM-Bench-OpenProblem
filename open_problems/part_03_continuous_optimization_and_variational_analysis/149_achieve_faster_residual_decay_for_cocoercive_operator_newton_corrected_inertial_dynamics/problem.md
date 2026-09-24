# Achieve faster residual decay for cocoercive-operator Newton-corrected inertial dynamics

This file contains the open problem on Achieve faster residual decay for cocoercive-operator Newton-corrected inertial dynamics.

---

<a id="problem-1"></a>

## 1. Achieve faster residual decay for cocoercive-operator Newton-corrected inertial dynamics

Source paper authors: Hédy Attouch, Radu Ioan Boţ, Dang‐Khoa Nguyen

### 1. Problem Background

Let $H$ be a real Hilbert space with inner product $\langle \cdot,\cdot\rangle$ and norm $\|\cdot\|$. Let $M:H\to H$ be a single-valued $\rho$-cocoercive operator for some $\rho>0$, meaning
$$

\langle M(x)-M(y),x-y\rangle \ge \rho\,\|M(x)-M(y)\|^2\quad\forall x,y\in H.

$$
Assume the set of zeros $\mathrm{Zer}
M:=\{x\in H: M(x)=0\}$ is nonempty.

For a trajectory $y:[s_0,\infty)\to H$ with $s_0>0$, define the (formal) time derivative of $M(y(s))$ by the chain rule notation
$$

\frac{d}{ds}(M(y(s)))

$$
(when $M$ is Lipschitz, this can be understood in the a.e. sense along absolutely continuous $y$).

Consider the second-order inertial dynamics with vanishing viscous damping and a Newton-correction term
$$

 y''(s)+\frac{\alpha}{s}y'(s)+c(s)\,\frac{d}{ds}(M(y(s)))+M(y(s))=0,\qquad s\ge s_0,

$$
where $\alpha>1$ and $c(s)>0$ is a prescribed scalar coefficient. Two specific choices discussed are
1) $c(s)=\frac{s}{\alpha+1}$, yielding the system
$$

 y''(s)+\frac{\alpha}{s}y'(s)+\frac{s}{\alpha+1}\,\frac{d}{ds}(M(y(s)))+M(y(s))=0,

$$
for which the paper proves $\|M(y(s))\|=o(1/s)$.
2) $c(s)=\frac{2s}{\alpha+1}$, yielding the closely related system
$$

 y''(s)+\frac{\alpha}{s}y'(s)+\frac{2s}{\alpha+1}\,\frac{d}{ds}(M(y(s)))+M(y(s))=0,

$$
which another work reports satisfies the sharper decay $\|M(y(s))\|=o(1/s^2)$ and $\int_{s_0}^\infty s^3\|M(y(s))\|^2\,ds<\infty$.

### 2. Open Problem

**Question 1.1.** Determine whether the time-scaling and perturbation approach developed for steepest-descent-type systems can be used to obtain the improved convergence rate
$$

\|M(y(s))\|=o\!\left(\frac{1}{s^2}\right)\quad\text{as }s\to\infty

$$
(and/or the corresponding weighted integrability $\int_{s_0}^\infty s^3\|M(y(s))\|^2\,ds<\infty$) for the Newton-corrected cocoercive-operator inertial dynamics
$$

 y''(s)+\frac{\alpha}{s}y'(s)+\frac{s}{\alpha+1}\,\frac{d}{ds}(M(y(s)))+M(y(s))=0,

$$
or for an appropriately modified coefficient $c(s)$ within the same time-scaling/perturbation framework, under the standing assumptions that $M$ is cocoercive and $\mathrm{Zer}\,M\neq\emptyset$.

### 3. Known Results

In Attouch–Boţ–Nguyen’s time-scaling/averaging program, the cocoercive-operator baseline flow $z'(t)+M(z(t))=0$ yields only $\|M(z(t))\|=o(t^{-1/2})$, and after the specific open-loop scaling $\tau(s)=s^2/(2(\alpha+1))$ one obtains the Newton-corrected inertial dynamics
$$
y''(s)+\frac{\alpha}{s}y'(s)+\frac{s}{\alpha+1}\frac{d}{ds}M(y(s))+M(y(s))=0
$$
with $\|M(y(s))\|=o(1/s)$ and $\int s\|M(y(s))\|^2ds<\infty$ (Theorem 12 of the source paper). The paper explicitly notes (Remark 8) that a closely related modification with coefficient $\frac{2s}{\alpha+1}$ in front of $\frac{d}{ds}M(y(s))$ enjoys the sharper $\|M(y(s))\|=o(1/s^2)$ and $\int s^3\|M(y(s))\|^2ds<\infty$ in subsequent work, leaving open whether the original time-scaling/perturbation route can recover this sharper decay for the $\frac{s}{\alpha+1}$-coefficient model or via a nearby choice of $c(s)$.

Among forward citations, the strongest evidence that $o(1/s^2)$ residual decay is achievable within a Newton-corrected operator framework comes from the continuous/discrete Fast OGDA analysis, which studies a more general vanishing-damping Newton-corrected dynamics with a tunable scaling $\beta(t)$ and an additional $V$-term coefficient tied to $\beta$. It proves $\|V(z(t))\|=o(1/(t\beta(t)))$ and $\int t\beta(t)^2\|V(z(t))\|^2dt<\infty$; taking $\beta(t)\asymp t$ yields exactly $\|V(z(t))\|=o(1/t^2)$ and $\int t^3\|V(z(t))\|^2dt<\infty$. This matches the target rate/integrability but for a dynamics that differs from the open-problem equation by the presence of an extra coefficient multiplying $V(z(t))$, so it does not directly settle the $c(s)=s/(\alpha+1)$ case.

Other cited works develop complementary time-rescaling equivalences (Heavy Ball $\leftrightarrow$ Fast OGDA), stochastic time-scaling/averaging transfers, and anchored/Tikhonov regularization equivalences for operator-derivative systems. Collectively they suggest two plausible routes to $o(1/s^2)$: (i) modify the Newton-correction model so that the coefficient in front of $M(y(s))$ is coupled to $c(s)$ (as in Fast OGDA-type templates), enabling Lyapunov cancellations that yield $o(1/(s c(s)))$; or (ii) embed the dynamics into an equivalent first-order anchored flow (possibly with Tikhonov regularization) where sharper residual decay can be proved and then transferred back by time rescaling. At present, none of the forward-citing papers provides a proof of $\|M(y(s))\|=o(1/s^2)$ for the exact equation with $c(s)=s/(\alpha+1)$ under only cocoercivity, so the problem remains open in the stated form.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #135 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4403453300_p0/partial_progress/135.pdf)

### 4. Source and Verification

- **Source paper:** Hédy Attouch, Radu Ioan Boţ, Dang‐Khoa Nguyen, [*Fast Convex Optimization via Time Scale and Averaging of the Steepest Descent*](https://doi.org/10.1287/moor.2023.0186), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 26, Section 5.1 (Remark 8).
- **Area:** inertial monotone operator dynamics
- **Keywords:** `cocoercive operator`, `inertial dynamics`, `newton correction term`, `time scaling`, `convergence rate`, `residual decay`
- **Upstream problem record:** [W4403453300_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4403453300_p0&n=135&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Hédy Attouch, Radu Ioan Boţ, Dang‐Khoa Nguyen, [*Fast Convex Optimization via Time Scale and Averaging of the Steepest Descent*](https://doi.org/10.1287/moor.2023.0186), Mathematics of Operations Research, 2024.
2. [*Fast Optimistic Gradient Descent Ascent (OGDA) method in continuous and discrete time*](https://doi.org/10.1007/s10208-023-09636-5).
3. [*Recovering Nesterov accelerated dynamics from Heavy Ball dynamics via time rescaling*](https://doi.org/10.1137/25M1757903).
4. [*Stochastic inertial dynamics via time scaling and averaging*](https://doi.org/10.1287/stsy.2024.0068).
5. *Tikhonov regularization of monotone operator flows not only ensures strong convergence of the trajectories but also speeds up the vanishing of the residuals*.
6. *Long-Time Analysis of Stochastic Heavy Ball Dynamics for Convex Optimization and Monotone Equations*.
7. *Fast Krasnoselskii-Mann Method with Overrelaxation and Preconditioners*.
