# Prove generic convergence of stochastic subgradient descent without weak convexity

This file contains the open problem on Prove generic convergence of stochastic subgradient descent without weak convexity.

---

<a id="problem-1"></a>

## 1. Prove generic convergence of stochastic subgradient descent without weak convexity

Source paper authors: Pascal Bianchi, Walid Hachem, Sholom Schechtman

### 1. Problem Background

Let $f:\mathbb{R}^d\to\mathbb{R}$ be a locally Lipschitz function, and let $\partial f(x)$ denote its Clarke subdifferential. Consider stochastic subgradient descent (SGD)
$$

 x_{n+1}=x_n-\gamma_n v_n+\gamma_n\eta_{n+1},\qquad v_n\in \partial f(x_n),

$$
where $(\gamma_n)$ is a deterministic step-size sequence with $\gamma_n\downarrow 0$, $\sum_n\gamma_n=\infty$, and typically $\sum_n\gamma_n^2<\infty$. The noise $(\eta_{n})$ is adapted to a filtration $(\mathcal{F}_n)$, satisfies the martingale difference property $\mathbb{E}[\eta_{n+1}\mid \mathcal{F}_n]=0$, and has bounded conditional moments (e.g., bounded conditional fourth moments).

A point $x^\star$ is Clarke critical if $0\in \partial f(x^\star)$. In the definable (o-minimal) setting, Clarke critical points admit additional geometric structure via stratifications, and one can define an $C^p$ active manifold $M$ around $x^\star$ on which $f$ is smooth and off which the subgradients have norm bounded away from $0$. An $\emph{active strict saddle}$ is a Clarke critical point $x^\star$ lying on such a manifold $M$ for which the Riemannian Hessian of the restriction $f\vert_M$ has a negative curvature direction at $x^\star$. A $\emph{sharply repulsive critical point}$ (as described in the cited manuscript [37] referenced by the paper) is, generically in the non-weakly convex definable case, a Clarke critical point $x^\star$ lying on an active manifold $M$ such that $x^\star$ is a local minimizer of $f\vert_M$ while nearby subgradients point toward $M$ (intuitively attracting iterates toward $M$ rather than repelling them).

For definable weakly convex functions, generic perturbations yield that every Clarke critical point is either a local minimizer or an active strict saddle, and the paper proves SGD avoids active strict saddles under suitable noise conditions, implying generic convergence to local minimizers in that setting.

### 2. Open Problem

**Question 1.1.** Establish, for $f$ definable and locally Lipschitz but $\emph{not assumed weakly convex}$, a generic convergence guarantee for SGD of the form above: namely, prove that under standard Robbins--Monro-type conditions on $(\gamma_n)$ and suitable nondegenerate noise conditions on $(\eta_n)$, the iterates $(x_n)$ converge (when bounded) to a local minimizer of $f$ with probability one.

Equivalently (as suggested by the paper's generic critical-point classification), show that in the non-weakly convex definable setting SGD $\emph{avoids}$ with probability one both:
1) active strict saddles, and
2) sharply repulsive critical points,
so that the only possible limiting Clarke critical points are local minimizers.

### 3. Known Results

The source paper (Bianchi--Hachem--Schechtman, 2024) establishes that for definable weakly convex locally Lipschitz objectives, SGD with Robbins--Monro stepsizes and sufficiently nondegenerate martingale noise avoids convergence to any active strict saddle. The proof hinges on two geometric ingredients around an active manifold $M$: (i) a Verdier-stratification-based strengthened projection formula controlling how Clarke subgradients project onto tangent spaces of adjacent strata, and (ii) an angle (proximal aiming) condition ensuring iterates contract toward $M$. Once iterates are shown to track the projected dynamics $y_n=P_M(x_n)$, the method reduces to a smooth stochastic approximation on $M$ and invokes a Brandi\`ere--Duflo/Pemantle-type trap-avoidance argument in the negative-curvature directions of the Riemannian Hessian of $f|_M$.

Beyond weak convexity, the same paper explains why the generic landscape changes: in addition to local minimizers and active strict saddles, one generically encounters "sharply repulsive critical points" (local minimizers of $f|_M$ for which nearby subgradients point toward $M$), and it explicitly states that generic convergence of SGD to local minimizers remains open in this regime (Section 5.2 and Remark 4). The most directly relevant forward-citing work is the thesis "Saddle Avoidance, Asymptotic Normality, and Exponential Acceleration in Nonsmooth Optimization", which appears to remove weak convexity in the saddle-avoidance part by developing generic regularity conditions for definable/semi-algebraic objectives with active manifolds and proving almost-sure avoidance of active strict saddles for stochastic subgradient-type methods. However, based on the provided citation analysis, it is not confirmed that this thesis fully resolves the additional obstruction posed by sharply repulsive critical points in the non-weakly convex definable setting; it may instead work in a generic Clarke-regular class where such points are excluded or controlled.

Several other forward citations contribute tools toward a full resolution. "On the diameter of subgradient sequences in o-minimal structures" gives deterministic sequential convergence of bounded Clarke-subgradient iterates with $\alpha_k\asymp 1/k$ to a Clarke critical point in the non-weakly-convex definable setting, which could serve as a key compactness/oscillation-control component in a stochastic approximation proof. "Sufficient conditions for instability of the subgradient method with constant step size" provides geometric instability criteria near semi-algebraic critical manifolds, conceptually aligned with sharply repulsive behavior, suggesting a route to show such points are not attractors for (stochastic) subgradient dynamics. Finally, works on stratification-based shadowing/rates and on Lyapunov stability for Euler discretizations of differential inclusions offer complementary frameworks for analyzing attraction/repulsion near strata, potentially enabling a unified argument that stochastic perturbations prevent convergence to both negative-curvature saddles on $M$ and to sharply repulsive Clarke critical points when weak convexity is absent.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #75 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4309864804_p0/partial_progress/75.pdf)

### 4. Source and Verification

- **Source paper:** Pascal Bianchi, Walid Hachem, Sholom Schechtman, [*Stochastic Subgradient Descent Escapes Active Strict Saddles on Weakly Convex Functions*](https://doi.org/10.1287/moor.2021.0194), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5.2 (Further Topics), pages 14–16; see also Remark 4 on pages 16–17.
- **Area:** stochastic subgradient descent
- **Keywords:** `stochastic subgradient descent`, `nonsmooth nonconvex optimization`, `definable functions`, `active strict saddles`, `generic convergence`, `sharp repulsion`
- **Upstream problem record:** [W4309864804_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4309864804_p0&n=75&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Pascal Bianchi, Walid Hachem, Sholom Schechtman, [*Stochastic Subgradient Descent Escapes Active Strict Saddles on Weakly Convex Functions*](https://doi.org/10.1287/moor.2021.0194), Mathematics of Operations Research, 2023.
2. *Saddle Avoidance, Asymptotic Normality, and Exponential Acceleration in Nonsmooth Optimization*.
3. *On the diameter of subgradient sequences in o-minimal structures*.
4. [*Sufficient conditions for instability of the subgradient method with constant step size*](https://doi.org/10.1137/22M1535723).
5. *On convergence rates of subgradient descent on semialgebraic functions*.
6. *Riemannian stochastic optimization methods avoid strict saddle points*.
7. *Lyapunov stability of the Euler method*.
8. *Contributions to non-convex stochastic optimization and reinforcement learning*.
