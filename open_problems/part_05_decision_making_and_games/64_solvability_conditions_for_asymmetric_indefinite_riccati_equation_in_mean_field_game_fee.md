# Solvability conditions for asymmetric indefinite Riccati equation in mean-field game feedback

This file contains the open problem on Solvability conditions for asymmetric indefinite Riccati equation in mean-field game feedback.

---

<a id="problem-1"></a>

## 1. Solvability conditions for asymmetric indefinite Riccati equation in mean-field game feedback

Source paper authors: Tian Chen, Tianyang Nie, Zhen Wu

### 1. Problem Background

Consider a continuous-time linear-quadratic (LQ) mean-field game with common noise and partial observation, in which the decentralized optimal control is expressed in linear state-feedback form once certain matrix-valued Riccati equations are solvable.

Let the state dimension be
$n$ and the control dimension be $m$. Let $A_t,\bar A_t,D_t,\bar D_t\in\mathbb{R}^{n\times n}$, $B_t,\bar B_t,F_t,\bar F_t\in\mathbb{R}^{n\times m}$, $Q_t\in\mathbb{S}^n$, $R_t\in\mathbb{S}^m$, $S_t\in\mathbb{R}^{n\times m}$, and $L_T\in\mathbb{S}^n$ be given deterministic coefficient functions/matrices on $[0,T]$ (bounded/measurable as needed so the equations below are well-defined). The scalar constants $\alpha_1,\alpha_3,\beta_1$ (and other constants appearing in the model) are given.

In the paper’s feedback derivation, two Riccati-type ordinary differential equations appear. One is a (symmetric) stochastic-LQ Riccati equation for a symmetric matrix $\Pi_t\in\mathbb{S}^n$. The other is a generally \emph{asymmetric} (not necessarily symmetric) Riccati equation for a matrix $\Sigma_t\in\mathbb{R}^{n\times n}$ of the form
$$

\dot\Sigma_t + \Sigma_t(A_t+\bar A_t) + A_t^\top \Sigma_t + D_t^\top \Sigma_t(D_t+\bar D_t)
- \Sigma_{e,t} R_{e,t}^{-1} \bar\Sigma_t^\top + (1-\alpha_1)Q_t = 0,
\qquad \Sigma_T = (1-\alpha_3)L_T.

$$
Here the auxiliary matrices $R_{e,t}\in\mathbb{R}^{m\times m}$, $\Sigma_{e,t}\in\mathbb{R}^{n\times m}$, and $\bar\Sigma_t\in\mathbb{R}^{n\times m}$ are (as defined in the paper) affine functions of $R_t,S_t,F_t,\bar F_t,B_t,\bar B_t$ and $\Sigma_t$; in particular $R_{e,t}$ depends on $\Sigma_t$ and must be (uniformly) invertible for the equation to make sense.

This Riccati equation is called in the paper an “asymmetric indefinite equation with complex structure,” reflecting that neither $Q_t$ nor $R_t$ is assumed positive semidefinite/definite, and $\Sigma_t$ is not restricted to be symmetric.

### 2. Open Problem

**Question 1.1.** Determine general verifiable conditions on the coefficient data $A_t,\bar A_t,D_t,\bar D_t,B_t,\bar B_t,F_t,\bar F_t,Q_t,R_t,S_t,L_T$ and constants $\alpha_1,\alpha_3,\beta_1$ that guarantee existence and uniqueness of a (sufficiently regular) solution $\Sigma:[0,T]\to\mathbb{R}^{n\times n}$ to the (generally asymmetric) indefinite Riccati equation
$$

\dot\Sigma_t + \Sigma_t(A_t+\bar A_t) + A_t^\top \Sigma_t + D_t^\top \Sigma_t(D_t+\bar D_t)
- \Sigma_{e,t} R_{e,t}^{-1} \bar\Sigma_t^\top + (1-\alpha_1)Q_t = 0,
\qquad \Sigma_T = (1-\alpha_3)L_T,

$$
in a way that ensures $R_{e,t}$ is (uniformly) invertible on $[0,T]$ (so that $R_{e,t}^{-1}$ is well-defined) and the resulting feedback representation for decentralized strategies is well-posed.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #38 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4417166251_p0/partial_progress/38.pdf)

### 4. Source and Verification

- **Source paper:** Tian Chen, Tianyang Nie, Zhen Wu, [*Indefinite Linear-Quadratic Partially Observed Mean-Field Game*](https://doi.org/10.1287/moor.2024.0748), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 14, Remark 4.13(ii) (following Theorem 4.12, Section 4.3 "Feedback representation").
- **Area:** indefinite riccati equations
- **Keywords:** `indefinite riccati equation`, `mean-field game`, `linear-quadratic control`, `partial observation`, `common noise`, `feedback equilibrium`
- **Upstream problem record:** [W4417166251_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4417166251_p0&n=38&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Tian Chen, Tianyang Nie, Zhen Wu, [*Indefinite Linear-Quadratic Partially Observed Mean-Field Game*](https://doi.org/10.1287/moor.2024.0748), Mathematics of Operations Research, 2025.
