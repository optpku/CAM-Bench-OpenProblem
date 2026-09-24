# Characterize inf-convolution of multiple Lambda value-at-risk plus risk measures setting

This file contains the open problem on Characterize inf-convolution of multiple Lambda value-at-risk plus risk measures setting.

---

<a id="problem-1"></a>

## 1. Characterize inf-convolution of multiple Lambda value-at-risk plus risk measures setting

Source paper authors: Peng Liu

### 1. Problem Background

Let $(\Omega,\mathcal F,\mathbb P)$ be an atomless probability space and let $\mathcal X$ be a linear space of real-valued random variables (losses) with $L^\infty\subseteq \mathcal X\subseteq L^1$. For $X\in\mathcal X$, write $F_X$ for its distribution function and $F_X^{-1}(p)=\inf\{x\in\mathbb R: F_X(x)\ge p\}$ for its left-quantile, $p\in(0,1]$. An $n$-allocation of an aggregate loss $X$ is an $n$-tuple $(X_1,\dots,X_n)\in\mathcal X^n$ with $\sum_{i=1}^n X_i=X$ almost surely.

A (not necessarily cash-additive) risk measure is a map $\rho:\mathcal X\to(-\infty,\infty]$. Given risk measures $\rho_1,\dots,\rho_n$, their inf-convolution is
$$
\big(\square_{i=1}^n \rho_i\big)(X)=\inf\Big\{\sum_{i=1}^n \rho_i(X_i): (X_1,\dots,X_n)\in\mathcal X^n,\ \sum_{i=1}^n X_i=X\Big\}.
$$

Fix a right-continuous function $\Lambda:\mathbb R\to[0,1]$ that is not identically equal to $1$. Define the Lambda value-at-risk plus functional by
$$
\Lambda\mathrm{VaR}^+(X)=\sup\{x\in\mathbb R: F_X(x)< 1-\Lambda(x)\},
$$
with the conventions $\sup\emptyset=-\infty$ and $\inf\emptyset=\infty$ (when needed). For multiple agents, allow $\Lambda_i$ and corresponding $\Lambda_i\mathrm{VaR}^+$, $i=1,\dots,n$.

The paper studies risk sharing via inf-convolution for $\Lambda\mathrm{VaR}$ and for $\Lambda\mathrm{VaR}^+$ combined with another risk measure under additional structure, but explicitly states that the case of inf-convolving multiple $\Lambda\mathrm{VaR}^+$ remains open.

### 2. Open Problem

**Question 1.1.** Given $n\ge 2$ right-continuous functions $\Lambda_i:\mathbb R\to[0,1]$ (not identically $1$) and the associated risk measures $\rho_i=\Lambda_i\mathrm{VaR}^+$ on $\mathcal X$, determine (i) an explicit or tractable characterization of the inf-convolution
$$
\big(\square_{i=1}^n \Lambda_i\mathrm{VaR}^+\big)(X)=\inf\Big\{\sum_{i=1}^n \Lambda_i\mathrm{VaR}^+(X_i): (X_1,\dots,X_n)\in\mathcal X^n,\ \sum_{i=1}^n X_i=X\Big\}
$$
and (ii) the structure (and existence conditions) of optimal allocations $(X_1,\dots,X_n)$ attaining the infimum, as functions of $X$ and $(\Lambda_1,\dots,\Lambda_n)$.

### 3. Known Results

In Liu (2023), the inf-convolution problem for multiple agents is solved in considerable generality for $\Lambda\mathrm{VaR}$ (the inf-quantile definition): when the $\Lambda_i$ are monotone in the same direction and mild boundary/attainability conditions hold, $\square_{i=1}^n \Lambda_i\mathrm{VaR}$ admits an explicit characterization as $\inf_{x_{n-1}} \Lambda^{x_{n-1}}\mathrm{VaR}(X)$, and in favorable cases collapses to a single $\Lambda^*\mathrm{VaR}(X)$ where $\Lambda^*(x)=\sup_{\sum y_i=x}(\sum_i \Lambda_i(y_i))\wedge 1$. Optimal allocations can be constructed by partitioning the probability space according to the uniform transform $U_X$ and assigning tail events to agents, closely paralleling classical VaR risk sharing.

For the plus-variant $\Lambda\mathrm{VaR}^+$, Liu (2023) shows that even the two-agent inf-convolution is substantially harder because $\Lambda\mathrm{VaR}^+$ interacts with dependence/robust aggregation effects; the paper therefore treats $\Lambda\mathrm{VaR}^+\square \rho$ only when $\rho$ is SSD-consistent, yielding an optimization over $(x,y)$ and an optimal allocation of the form $X_1^*=F^{-1}_{x^*,y^*}(U_X)$, $X_2^*=X-X_1^*$, which is generally neither comonotone nor a simple tail-event split. Subsequent work on Lambda-VaR under ambiguity and optimal risk sharing for lambda value-at-risk provides strong partial progress in the multi-agent direction, but for $\Lambda\mathrm{VaR}$ (and capacity/robust extensions) rather than $\Lambda\mathrm{VaR}^+$: these papers establish closure under inf-convolution and give explicit event/capacity characterizations and tail-splitting optimal allocations when $\Lambda_i$ are monotone.

At present, there is no paper in the provided forward-citation set that gives a tractable explicit characterization of $\square_{i=1}^n \Lambda_i\mathrm{VaR}^+$ for general $n\ge 3$ under a probability measure, nor a general structural theorem for existence and form of optimal allocations. Related advances on nonconvex quantile-based risk sharing (e.g., averaged-quantile inf-convolutions) and on robust $\Lambda$-quantiles via extremal distributions suggest that progress will likely require combining (i) tail-splitting/partition constructions with (ii) robust aggregation or extremal-coupling arguments to handle the dependence uncertainty intrinsic to $\Lambda\mathrm{VaR}^+$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #111 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4391994328_p0/partial_progress/111.pdf)

### 4. Source and Verification

- **Source paper:** Peng Liu, [*Risk Sharing with Lambda Value at Risk*](https://doi.org/10.1287/moor.2023.0246), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 1 Introduction (page 3) and Section 6 Conclusion (page 17).
- **Area:** risk sharing
- **Keywords:** `lambda value at risk`, `inf-convolution`, `risk sharing`, `optimal allocation`, `robust risk aggregation`, `dependence uncertainty`
- **Upstream problem record:** [W4391994328_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4391994328_p0&n=111&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Peng Liu, [*Risk Sharing with Lambda Value at Risk*](https://doi.org/10.1287/moor.2023.0246), Mathematics of Operations Research, 2024.
2. *Optimal risk sharing for lambda value-at-risk*.
3. *Lambda Value-at-Risk under ambiguity and risk sharing*.
4. *Risk sharing with Lambda value at risk under heterogeneous beliefs*.
5. *Extended Convolution Bounds on the Fr\'{e} chet Problem: Robust Risk Aggregation and Risk Sharing*.
6. *Robust Lambda-quantiles and extreme probabilities*.
