# Well-posedness theory for coupled multidimensional quadratic BSDEs in portfolio equilibria

This file contains the open problem on Well-posedness theory for coupled multidimensional quadratic BSDEs in portfolio equilibria.

---

<a id="problem-1"></a>

## 1. Well-posedness theory for coupled multidimensional quadratic BSDEs in portfolio equilibria

Source paper authors: Zongxia Liang, Jianming Xia, Fengyi Yuan

### 1. Problem Background

Let
$(\Omega,\mathcal F,\mathbb F,\mathbb P)$ be a filtered probability space supporting a Brownian motion $W$ on $[0,T]$, and consider backward stochastic differential equations (BSDEs) for unknown adapted processes $(Y,Z)$, where $Y=(Y^1,\dots,Y^m)$ is $\mathbb R^m$-valued and $Z=(Z^1,\dots,Z^m)$ with $Z^i\in\mathbb R^d$. A (multi-dimensional) quadratic BSDE has the form
$$

Y_t = \xi + \int_t^T f(s,Y_s,Z_s)\,ds - \int_t^T Z_s\,dW_s,

$$
where the generator $f$ has quadratic growth in $Z$, e.g. $|f(s,y,z)|\lesssim 1+|z|^2$. In many applications (including equilibrium characterizations in time-inconsistent portfolio selection with nonlinear law-dependent preferences), one obtains *coupled* systems where components $(Y^i,Z^i)$ interact through cross terms in $Z$, yielding generators that are neither diagonally quadratic nor triangular.

A basic mathematical issue is *well-posedness*: existence and uniqueness of a solution $(Y,Z)$ in a natural solution class such as bounded $Y$ and BMO-integrable $Z$ (i.e., $\int_0^\cdot Z_s\,dW_s$ is a BMO martingale). Current general results for multi-dimensional quadratic BSDEs typically require additional structural assumptions (e.g. diagonally quadratic or triangular generators) or smallness conditions on data.

### 2. Open Problem

**Question 1.1.** Develop general existence and uniqueness results for coupled multi-dimensional quadratic BSDE systems with genuinely coupled (cross-term) quadratic generators, beyond special structures such as diagonally quadratic or triangular forms, in a solution class such as $Y\in L^\infty$ and $Z$ BMO-integrable.

### 3. Known Results

The open problem, as formulated in Liang–Xia–Yuan (2023), asks for a general well-posedness theory (existence and uniqueness, typically in $Y\in L^\infty$ and $Z$ BMO) for genuinely coupled multidimensional quadratic BSDE systems whose generators contain cross-term quadratic interactions in $Z$ and do not fall into diagonally quadratic or triangular classes. In their weighted-utility example, the equilibrium first-order condition leads to a coupled 2D QBSDE system (equations (6.3)–(6.4)) and the authors obtain solvability only by exploiting special linear–quadratic structure plus a smallness condition expressed via $V(\Theta)=\sup_\tau\|\Theta-\mathbb E_\tau[\Theta]\|_\infty$ for $\Theta=\int_0^T|\kappa_s|^2ds$, i.e., $\kappa$ close to deterministic. This highlights that the general coupled case remains outside current theory.

Among the forward citations provided, the most directly aligned is "Equilibrium Portfolio Selection under Utility-Variance Analysis of Log Returns in Incomplete Markets", which produces another explicit genuinely coupled 2D quadratic BSDE system for equilibrium controls and similarly shows that existing multidimensional quadratic BSDE results do not apply in the unconstrained correlated-noise regime. It establishes well-posedness only in regimes where the coupling disappears ($\rho=0$) or where constraints/projected dynamics bring the system into an AB+BF framework covered by existing results (e.g., Xing–Zitkovi\'c-type conditions), and otherwise resorts to perturbative approximate equilibria for small correlation. The other two citations provide methodological or contextual background (deterministic integral-equation characterization; linear/1D BSDE equilibrium conditions) but do not advance the general $L^\infty\times$BMO well-posedness theory for cross-coupled quadratic generators.

Overall, the problem remains open: current progress is application-driven and relies on special structure (pure linear–quadratic forms, measure-change/BMO norm equivalences) and/or smallness assumptions on data, rather than a general existence/uniqueness theorem for fully coupled multidimensional quadratic BSDEs with cross terms. Promising directions suggested by these works include: identifying new structural conditions beyond diagonal/triangular (e.g., monotonicity/convexity in suitable directions, or Lyapunov-function criteria), developing robust a priori BMO estimates stable under coupling, and extending AB/wAB-type frameworks to handle genuine cross-quadratic interactions without smallness constraints.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #18 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411801764_p0/partial_progress/18.pdf)

### 4. Source and Verification

- **Source paper:** Zongxia Liang, Jianming Xia, Fengyi Yuan, [*Dynamic Portfolio Selection for Nonlinear Law-Dependent Preferences*](https://doi.org/10.1287/moor.2023.0345), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 15, Section 6 (Remark 6.2(a))
- **Area:** quadratic bsdes
- **Keywords:** `quadratic BSDE`, `multidimensional BSDE`, `well-posedness`, `BMO martingales`, `coupled systems`, `portfolio equilibrium`
- **Upstream problem record:** [W4411801764_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411801764_p0&n=18&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Zongxia Liang, Jianming Xia, Fengyi Yuan, [*Dynamic Portfolio Selection for Nonlinear Law-Dependent Preferences*](https://doi.org/10.1287/moor.2023.0345), Mathematics of Operations Research, 2025.
2. *Equilibrium Portfolio Selection under Utility-Variance Analysis of Log Returns in Incomplete Markets*.
3. [*An integral equation in portfolio selection with time-inconsistent preferences*](https://doi.org/10.1137/24M170301X).
4. *Time-consistent portfolio selection with strictly monotone mean-variance preference*.
