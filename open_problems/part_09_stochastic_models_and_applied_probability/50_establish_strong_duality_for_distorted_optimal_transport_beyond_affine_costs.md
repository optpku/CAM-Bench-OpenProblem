# Establish strong duality for distorted optimal transport beyond affine costs

This file contains the open problem on Establish strong duality for distorted optimal transport beyond affine costs.

---

<a id="problem-1"></a>

## 1. Establish strong duality for distorted optimal transport beyond affine costs

Source paper authors: Haiyan Liu, Bin Wang, Ruodu Wang, Sheng Chao Zhuang

### 1. Problem Background

Let $(\Omega,\mathcal A,\mathbb P)$ be an atomless probability space and let $\mathcal X$ denote the set of bounded real-valued random variables on it.

A distortion function is an increasing function $h:[0,1]\to[0,1]$ with $h(0)=0$ and $h(1)=1$. The associated distorted expectation $\mathbb E_h:\mathcal X\to\mathbb R$ is defined by the Choquet integral
$$

\mathbb E_h[Z]=\int_0^{\infty} h(\mathbb P(Z>x))\,dx+\int_{-\infty}^0\big(h(\mathbb P(Z>x))-1\big)\,dx,

$$
whenever $Z\in\mathcal X$.

For probability measures $\mu,\nu$ on $\mathbb R$, consider random variables $X\sim\mu$ and $Y\sim\nu$. A (Kantorovich) transport plan is the joint law of $(X,Y)$ with these marginals. Given a measurable cost $c:\mathbb R^2\to\mathbb R$, the distorted optimal transport problem is
$$

\inf\{\mathbb E_h[c(X,Y)]: X\sim\mu,\ Y\sim\nu\}.

$$

Define the set of admissible dual potentials
$$

\mathcal S_c:=\{(\varphi,\psi): \varphi(x)+\psi(y)\le c(x,y)\ \text{for all }x,y\in\mathbb R\},

$$
where $\varphi,\psi:\mathbb R\to\mathbb R$ are measurable. Let $X_\mu\sim\mu$ and $X_\nu\sim\nu$ denote generic random variables with the given marginals.

For general (nonlinear) expectations one always has a weak-duality-type inequality under suitable super-linearity assumptions; for $\mathbb E_h$ the paper proves strong duality only in the special case when $c$ is affine, i.e., $c(x,y)=\alpha+\beta x+\gamma y$.

### 2. Open Problem

**Question 1.1.** Determine conditions on the distortion function $h$ and the cost function $c$ under which the following strong duality identity holds for all probability measures $\mu,\nu$ on $\mathbb R$:
$$

\inf_{X\sim\mu,\,Y\sim\nu}\ \mathbb E_h[c(X,Y)]
\;=\;
\sup_{(\varphi,\psi)\in\mathcal S_c}\Big\{\mathbb E_h[\varphi(X_\mu)]+\mathbb E_h[\psi(X_\nu)]\Big\}.

$$
In particular, decide whether this equality can hold beyond the affine-cost case established in the paper (and, if so, characterize such broader classes of $c$ and/or $h$).

### 3. Known Results

The source paper introduces distorted optimal transport on $\mathbb R$ with objective $\mathbb E_h[c(X,Y)]$, where $\mathbb E_h$ is a Choquet (distorted) expectation. It establishes weak duality for super-linear expectations and proves strong duality only for affine costs, emphasizing that nonlinearity of $\mathbb E_h$ breaks the usual separability and makes the standard Kantorovich dual $\sup_{\varphi+\psi\le c}(\mathbb E_h[\varphi(X)]+\mathbb E_h[\psi(Y)])$ hard to justify beyond trivial cases.

Among the limited forward-citation evidence provided, the only citing work develops a different nonlinear OT variant (quadratic-form OT) under linear expectation. Its relevance is mainly methodological: it notes that a specific quadratic-form OT objective can be rewritten as a distorted OT objective for a particular distortion, hinting that some nonlinear OT problems may admit distortion representations. However, it does not develop a duality theory for distorted expectations nor provide conditions on $h$ and $c$ ensuring strong duality.

Given the current citation set, there is no known resolution of strong duality beyond affine costs. Promising directions suggested by the source paper’s techniques include exploiting robust representations of $\mathbb E_h$ (as inf/sup of linear expectations when $h$ is convex/concave) to derive min–max formulations, and identifying cost classes for which the Choquet integral interacts well with $c$-transforms (e.g. monotone sub/supermodular costs on $\mathbb R$, or costs inducing comonotone additivity). Establishing strong duality likely requires additional structural assumptions ensuring an interchange of $\inf$ over couplings and $\sup$ over representing measures/potentials, or a modified dual problem adapted to the non-additivity of $\mathbb E_h$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #23 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4412630514_p0/partial_progress/23.pdf)

### 4. Source and Verification

- **Source paper:** Haiyan Liu, Bin Wang, Ruodu Wang, Sheng Chao Zhuang, [*Distorted Optimal Transport*](https://doi.org/10.1287/moor.2024.0591), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 9 (Concluding remarks), page 33 (PDF page 33/37), second open-question paragraph.
- **Area:** distorted optimal transport
- **Keywords:** `optimal transport`, `duality`, `distorted expectation`, `Choquet integral`, `risk measures`, `Kantorovich problem`
- **Upstream problem record:** [W4412630514_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4412630514_p0&n=23&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Haiyan Liu, Bin Wang, Ruodu Wang, Sheng Chao Zhuang, [*Distorted Optimal Transport*](https://doi.org/10.1287/moor.2024.0591), Mathematics of Operations Research, 2025.
2. [*Quadratic-form optimal transport: R. Wang, Z. Zhang*](https://doi.org/10.1007/s10107-025-02282-5).
