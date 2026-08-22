# Design accelerated proximal bundle methods for hybrid convex composite optimization problems

This file contains the open problem on Design accelerated proximal bundle methods for hybrid convex composite optimization problems.

---

<a id="problem-1"></a>

## 1. Design accelerated proximal bundle methods for hybrid convex composite optimization problems

Source paper authors: Jiaming Liang, Renato D. C. Monteiro

### 1. Problem Background

Let $f,h:\mathbb{R}^n\to\mathbb{R}\cup\{+\infty\}$ be proper lower semicontinuous convex functions with $\mathrm{dom}\,h\subseteq \mathrm{dom}\,f$. Consider the hybrid convex composite optimization problem
$$

\phi^*:=\min\{\phi(x):=f(x)+h(x): x\in\mathbb{R}^n\}.

$$
Assume $h$ is $\mu$-convex for some $\mu\ge 0$, meaning that $h(x)-\frac{\mu}{2}\|x\|^2$ is convex. Assume a first-order oracle $f'$ is available with $f'(x)\in \partial f(x)$ for all $x\in\mathrm{dom}\,h$, and there exist parameters $M_f\ge 0$ and $L_f\ge 0$ such that for all $u,v\in\mathrm{dom}\,h$,
$$

\|f'(u)-f'(v)\|\le 2M_f + L_f\|u-v\|.

$$
Let $D$ denote the diameter of $\mathrm{dom}\,h$ when it is finite:
$$

D:=\sup\{\|x-y\|: x,y\in \mathrm{dom}\,h\}<\infty.

$$
An $\bar\varepsilon$-solution is a point $\bar x\in\mathrm{dom}\,h$ with $\phi(\bar x)-\phi^*\le \bar\varepsilon$.

A proximal bundle (PB) method is a first-order method that iteratively solves proximalized subproblems based on a piecewise-linear (bundle) lower model of $f$ plus $h$, typically producing serious/null steps; the paper analyzes a generic PB framework (GPB) and obtains iteration-complexity bounds of order
$$

O\!\left(\min\left\{\frac{(M_f^2+\bar\varepsilon L_f)d_0^2}{\bar\varepsilon^2},\;\left(\frac{M_f^2+\bar\varepsilon L_f}{\mu\bar\varepsilon}+1\right)\log\left(\frac{\mu d_0^2}{\bar\varepsilon}+1\right)\right\}+1\right)

$$
(up to logarithmic factors), where $d_0$ is the distance from the initial point to the solution set.

For the same HCCO class with finite $D$, known lower bounds (cited in the paper) imply that an optimal (accelerated) rate in terms of $(L_f,M_f,D,\bar\varepsilon)$ is
$$

O\!\left( \frac{\sqrt{L_f}\,D}{\sqrt{\bar\varepsilon}} + \frac{M_f^2 D^2}{\bar\varepsilon^2}\right)

$$
(in the sense described in the cited reference).

### 2. Open Problem

**Question 1.1.** Assume $D:=\sup\{\|x-y\|:x,y\in\mathrm{dom}\,h\}<\infty$. Develop a (proximal) bundle-type method for minimizing $\phi(x)=f(x)+h(x)$ under the hybrid subgradient condition $\|f'(u)-f'(v)\|\le 2M_f+L_f\|u-v\|$ whose iteration complexity to obtain an $\bar\varepsilon$-solution matches (up to universal constants and allowable logarithmic factors) the optimal bound
$$

O\!\left( \frac{\sqrt{L_f}\,D}{\sqrt{\bar\varepsilon}} + \frac{M_f^2 D^2}{\bar\varepsilon^2}\right).

$$
Equivalently, design an accelerated variant of the generic proximal bundle framework achieving the above complexity for the HCCO problem class parameterized by $(L_f,M_f,D)$.

### 3. Known Results

In Liang--Monteiro's HCCO model, the oracle condition $\|f'(u)-f'(v)\|\le 2M_f+L_f\|u-v\|$ interpolates between Lipschitz nonsmoothness ($L_f=0$) and smoothness ($M_f=0$). Their GPB framework (with serious/null steps and bundle models $\Gamma\le \phi$) yields a unified complexity of order $O((M_f^2+\bar\varepsilon L_f)d_0^2/\bar\varepsilon^2)$ in the convex case $\mu=0$, and a logarithmic dependence in $1/\bar\varepsilon$ when $\mu>0$. The paper explicitly notes that, when $\mathrm{dom}\,h$ has finite diameter $D$, the optimal worst-case bound should be $O(\sqrt{L_f}D/\sqrt{\bar\varepsilon}+M_f^2D^2/\bar\varepsilon^2)$, matching accelerated composite subgradient methods, and poses the open problem of designing an accelerated bundle-type analogue.

Forward citations show partial progress but no full resolution. The closest acceleration result is "On the Acceleration of Proximal Bundle Methods", which develops accelerated PB variants and proves $\tilde O(\sqrt{L_f}\,\|x_0-x^*\|/\sqrt{\varepsilon})$ iteration complexity (up to $\log(1/\varepsilon)$) in the smooth regime $M_f=0$, aligning with the $\sqrt{L_f}D/\sqrt{\varepsilon}$ term when $D$ controls distances. However, it does not cover the hybrid regime $M_f>0$ nor establish the mixed bound combining $\varepsilon^{-1/2}$ and $\varepsilon^{-2}$ terms for general HCCO with prox-friendly $h$. Other works (e.g., universal/adaptive GPB variants and primal-dual PB analyses) strengthen universality, adaptivity, and primal-dual certification, and sharpen strongly convex rates, but their convex-case dependence on $L_f$ remains non-accelerated (typically $L_f/\varepsilon$ rather than $\sqrt{L_f/\varepsilon}$).

Overall, the evidence suggests the specific open problem remains open: there is not yet a proximal bundle-type method for general convex HCCO with bounded $\mathrm{dom}\,h$ that provably matches $O(\sqrt{L_f}D/\sqrt{\bar\varepsilon}+M_f^2D^2/\bar\varepsilon^2)$ (up to logs). Promising directions indicated by the citations include combining Nesterov-style acceleration of inexact proximal point/bundle subproblem solves with hybrid-model-aware step selection, and leveraging primal-dual viewpoints (e.g., PDCP--conditional-gradient duality) to control null steps without introducing geometry-dependent constants.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #79 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4379383737_p0/partial_progress/79.pdf)

### 4. Source and Verification

- **Source paper:** Jiaming Liang, Renato D. C. Monteiro, [*A Unified Analysis of a Class of Proximal Bundle Methods for Solving Hybrid Convex Composite Optimization Problems*](https://doi.org/10.1287/moor.2023.1372), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 6 (Concluding Remarks), page 21 (paragraph beginning 'First, under the assumption that the diameter D of dom h is finite, ...').
- **Area:** convex composite optimization
- **Keywords:** `proximal bundle methods`, `hybrid convex composite optimization`, `acceleration`, `iteration complexity`, `nonsmooth optimization`, `first-order methods`
- **Upstream problem record:** [W4379383737_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4379383737_p0&n=79&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiaming Liang, Renato D. C. Monteiro, [*A Unified Analysis of a Class of Proximal Bundle Methods for Solving Hybrid Convex Composite Optimization Problems*](https://doi.org/10.1287/moor.2023.1372), Mathematics of Operations Research, 2023.
2. *On the Acceleration of Proximal Bundle Methods*.
3. [*Universal subgradient and proximal bundle methods for convex and strongly convex hybrid composite optimization*](https://doi.org/10.1007/s10957-025-02927-7).
4. *Parameter-free proximal bundle methods with adaptive stepsizes for hybrid convex composite optimization problems*.
5. [*Primal-dual proximal bundle and conditional gradient methods for convex problems: J. Liang*](https://doi.org/10.1007/s10107-025-02307-z).
6. [*Proximal oracles for optimization and sampling*](https://doi.org/10.1007/s10957-026-02937-z).
7. *Primal-dual proximal bundle and conditional gradient methods for convex problems*.
8. *Stochastic Quadratic Dynamic Programming*.
