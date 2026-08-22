# Prove consistency and rates for smoothness-minimizing estimator under variance target

This file contains the open problem on Prove consistency and rates for smoothness-minimizing estimator under variance target.

---

<a id="problem-1"></a>

## 1. Prove consistency and rates for smoothness-minimizing estimator under variance target

Source paper authors: Eunji Lim

### 1. Problem Background

Let $d\ge 1$ and $[a,b]^d\subset \mathbb{R}^d$ be a compact hyperrectangle. Let $m\in\mathbb{N}$ satisfy $2m>d$. Let $\alpha=(\alpha_1,\dots,\alpha_d)\in\mathbb{Z}_+^d$ be a multi-index with order $|\alpha|=\sum_{j=1}^d \alpha_j$, and let $D^\alpha$ denote the (weak) partial derivative operator.

Let $\mathcal{F}_m$ be the space of generalized functions (Schwartz distributions) on $\mathbb{R}^d$ whose weak partial derivatives of order $m$ are square-integrable, i.e.
$$
\mathcal{F}_m:=\Bigl\{f:\mathbb{R}^d\to\mathbb{R}: \int_{\mathbb{R}^d} (D^\alpha f(x))^2\,dx<\infty\ \text{for all }\alpha\text{ with }|\alpha|=m\Bigr\}.
$$
Define the smoothness (roughness) functional
$$
J(f):=\sum_{|\alpha|=m}\int_{\mathbb{R}^d} (D^\alpha f(x))^2\,dx,
$$
and the empirical squared error for data $(X_i,Y_i)_{i=1}^n$ by
$$
E_n(f):=\frac{1}{n}\sum_{i=1}^n (Y_i-f(X_i))^2.
$$
Assume observations satisfy the regression model $Y_i=f^*(X_i)+\varepsilon_i$, where $(X_i,\varepsilon_i)$ are i.i.d., $X_i\in[a,b]^d$ has a positive continuous density on $[a,b]^d$, $\mathbb{E}[\varepsilon_i\mid X_i]=0$, and $\mathbb{E}[\varepsilon_i^2\mid X_i]=\sigma^2<\infty$. Let $f^*\in\mathcal{F}_m$.

Consider the smoothness-minimizing estimator $\hat g_n$ defined (for a given tolerance $S_n\ge 0$) as any solution of
$$
\min_{f\in\mathcal{F}_m} J(f)\quad\text{subject to}\quad E_n(f)\le S_n.
$$
This is Problem (B) in the paper. The paper notes that if an additional inequality holds,
$$
\frac{1}{n}\sum_{i=1}^n (\hat g_n(X_i)-f^*(X_i))^2\le \frac{2}{n}\sum_{i=1}^n \varepsilon_i(\hat g_n(X_i)-f^*(X_i)),
$$
then the same optimal rate as for the constrained least-squares estimator $\hat f_n$ would follow. The dependence of such an inequality on the choice of $S_n$ is not established in the paper.

### 2. Open Problem

**Question 1.1.** Determine verifiable conditions on the error-tolerance sequence $(S_n)_{n\ge 1}$ (e.g., conditions expressed directly in terms of $S_n$ and the data-generating model parameters such as $\sigma^2$) under which the estimator $\hat g_n$ solving
$$
\min_{f\in\mathcal{F}_m} J(f)\quad\text{subject to}\quad E_n(f)\le S_n
$$
(i) is consistent for $f^*$ and its weak partial derivatives of orders $|\alpha|=1,\dots,m-1$, and (ii) admits a convergence rate characterization (in particular, a rate comparable to the optimal $n^{-m/(2m+d)}$ rate achieved for the analogous smoothness-constrained least-squares estimator) in terms of $n$, $m$, $d$, and the behavior of $S_n$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #117 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4396581165_p0/partial_progress/117.pdf)

### 4. Source and Verification

- **Source paper:** Eunji Lim, [*Estimating a Function and Its Derivatives Under a Smoothness Condition*](https://doi.org/10.1287/moor.2020.0161), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 7.3 (page 15 of 27 in the provided text) and Remark 4 (page 10 of 27)
- **Area:** smoothing splines
- **Keywords:** `nonparametric regression`, `sobolev spaces`, `smoothing splines`, `derivative estimation`, `convergence rate`, `constrained optimization`
- **Upstream problem record:** [W4396581165_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4396581165_p0&n=117&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Eunji Lim, [*Estimating a Function and Its Derivatives Under a Smoothness Condition*](https://doi.org/10.1287/moor.2020.0161), Mathematics of Operations Research, 2024.
