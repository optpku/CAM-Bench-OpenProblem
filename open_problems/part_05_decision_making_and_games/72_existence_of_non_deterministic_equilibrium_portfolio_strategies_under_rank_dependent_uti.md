# Existence of non-deterministic equilibrium portfolio strategies under rank-dependent utility

This file contains the open problem on Existence of non-deterministic equilibrium portfolio strategies under rank-dependent utility.

---

<a id="problem-1"></a>

## 1. Existence of non-deterministic equilibrium portfolio strategies under rank-dependent utility

Source paper authors: Jiaqin Wei, Jianming Xia, Qian Zhao

### 1. Problem Background

Fix a finite time horizon $T>0$. Let $(\Omega,\mathcal F,\{\mathcal F_t\}_{t\in[0,T]},\mathbb P)$ support a $d$-dimensional Brownian motion $W$. The market has one risk-free asset with constant rate $r$ and $n\le d$ risky assets with constant excess-return vector $\mu\in\mathbb R^n$ and volatility matrix $\sigma\in\mathbb R^{n\times d}$ such that $\sigma\sigma^{\top}$ is positive definite. A (possibly stochastic) trading strategy is an $\mathbb R^n$-valued progressively measurable process $\pi(t)$ with $\int_0^T |\pi(t)^{\top}\mu|\,dt+\int_0^T \|\pi(t)^{\top}\sigma\|^2\,dt<\infty$ a.s., interpreted as the proportions of current wealth invested in the $n$ stocks. The associated self-financing wealth process $X^{\pi}$ with initial wealth $X^{\pi}(t)=x>0$ satisfies
$$

\frac{dX^{\pi}(s)}{X^{\pi}(s)}=\bigl(r+\pi(s)^{\top}\mu\bigr)\,ds+\pi(s)^{\top}\sigma\,dW(s),\qquad s\in[t,T].

$$
The agent has CRRA outcome utility
$$

U(x)=\begin{cases}\frac{1}{\gamma}x^{\gamma},&\gamma\ne 0,\\ \log x,&\gamma=0,\end{cases}\qquad x>0,

$$
for some $\gamma\in\mathbb R$. Preferences are rank-dependent: for each time $t$, terminal wealth $X$ is evaluated by a (possibly time-dependent) probability weighting function $w(t,\cdot):[0,1]\to[0,1]$, strictly increasing with $w(t,0)=0$, $w(t,1)=1$, and sufficiently regular so the rank-dependent utility functional is well-defined. Writing $Q_X^t(p)$ for the conditional quantile of $X$ given $\mathcal F_t$, the time-$t$ rank-dependent utility is
$$

J(t,x;\pi)=\int_0^1 U\bigl(Q_{X^{\pi}(T)}^t(p)\bigr)\,w(t,dp),

$$
where integration is with respect to the Lebesgue--Stieltjes measure induced by $w(t,\cdot)$.

A strict equilibrium strategy (SES) $\pi$ is an admissible strategy such that, for every $t\in[0,T)$ and every bounded $\mathcal F_t$-measurable direction $\kappa\in L^{\infty}(\mathcal F_t;\mathbb R^n)\setminus\{0\}$ for which the spike-perturbed strategy $\pi^{t,\varepsilon,\kappa}$ (equal to $\pi+\kappa$ on $[t,t+\varepsilon)$ and to $\pi$ otherwise) is admissible for small $\varepsilon>0$, one has the strict first-order inequality
$$

\lim_{\varepsilon\downarrow 0}\operatorname{ess\,sup}_{\varepsilon'\in(0,\varepsilon)}\frac{J(t,x;\pi^{t,\varepsilon',\kappa})-J(t,x;\pi)}{\varepsilon'}<0\quad\text{a.s. for all }x>0.

$$
The paper focuses on deterministic SES (DSES), i.e., $\pi(t)$ deterministic, and derives characterizations via singular ODEs for these DSES under various assumptions on $w$.

### 2. Open Problem

**Question 1.1.** Determine whether there exists an SES $\pi$ that is \emph{not} deterministic (i.e., $\pi$ is not a deterministic function of time) for the continuous-time portfolio selection problem with rank-dependent utility $J(t,x;\pi)$ in the above incomplete Brownian market.

Equivalently: establish existence (or nonexistence) of progressively measurable, non-deterministic strategies $\pi$ satisfying the strict equilibrium condition
$$

\lim_{\varepsilon\downarrow 0}\operatorname{ess\,sup}_{\varepsilon'\in(0,\varepsilon)}\frac{J(t,x;\pi^{t,\varepsilon',\kappa})-J(t,x;\pi)}{\varepsilon'}<0\quad\text{a.s. for all }t\in[0,T),\ x>0,\ \kappa\in L^{\infty}(\mathcal F_t;\mathbb R^n)\setminus\{0\}.

$$

### 3. Known Results

The open problem asks whether strict equilibrium strategies for continuous-time portfolio choice under rank-dependent utility (RDU)—defined via conditional quantiles and a probability weighting function—can be genuinely non-deterministic (progressively measurable and not a deterministic function of time) in an incomplete Brownian market with constant coefficients. The source paper (Wei–Xia–Zhao, 2024) develops a detailed theory for deterministic strict equilibrium strategies (DSES): in the time-invariant weighting case, equilibria (when they exist) are essentially unique and characterized by an autonomous singular ODE for the future integrated variance \,$\Pi(t)=\int_t^T\|\pi(s)^\top\sigma\|^2ds$; in the time-varying weighting case (mainly $\gamma\le 0$), non-zero DSES correspond to positive solutions of a nonlinear singular ODE (with possible multiplicity), and the paper provides forward-shooting methods and an “optimal equilibrium” selection criterion among DSES. The authors explicitly note that they do not know whether any non-deterministic equilibrium exists.

Among the provided forward citations, the only analyzed citing work studies a different time-inconsistent preference (random risk aversion aggregated via certainty equivalents) and likewise focuses on deterministic equilibria characterized by an ODE. While it reinforces that spike-variation equilibrium conditions often collapse to low-dimensional ODEs under homotheticity and deterministic coefficients, it does not treat quantile-based RDU functionals nor the key difficulty here: the dependence of $J(t,x;\pi)$ on the conditional law of $X_T^\pi$ given $\mathcal F_t$, which becomes substantially more complex for stochastic $\pi$ in incomplete markets.

Overall, based on the source paper and the limited forward-citation evidence supplied, there is currently no known existence or nonexistence theorem for non-deterministic strict equilibrium strategies under RDU in the stated setting. Progress appears to require new techniques to handle conditional quantiles under progressively measurable controls—potentially via conditional distribution dynamics, mean-field/measure-valued control formulations, or identifying structural conditions under which any SES must collapse to a deterministic feedback (or proving counterexamples by constructing stochastic equilibria).

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #46 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7127637708_p0/partial_progress/46.pdf)

### 4. Source and Verification

- **Source paper:** Jiaqin Wei, Jianming Xia, Qian Zhao, [*Time-Consistent Portfolio Selection for Rank-Dependent Utilities in a Constrained Market*](https://doi.org/10.1287/moor.2024.0720), Mathematics of Operations Research, 2026.
- **Location in paper:** Page 29, Section 5 (Concluding Remarks).
- **Area:** time inconsistent portfolio choice
- **Keywords:** `rank-dependent utility`, `time inconsistency`, `equilibrium strategy`, `incomplete markets`, `stochastic control`, `portfolio selection`
- **Upstream problem record:** [W7127637708_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7127637708_p0&n=46&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiaqin Wei, Jianming Xia, Qian Zhao, [*Time-Consistent Portfolio Selection for Rank-Dependent Utilities in a Constrained Market*](https://doi.org/10.1287/moor.2024.0720), Mathematics of Operations Research, 2026.
2. *Equilibrium Investment with Random Risk Aversion:(Non-) uniqueness, Optimality, and Comparative Statics*.
