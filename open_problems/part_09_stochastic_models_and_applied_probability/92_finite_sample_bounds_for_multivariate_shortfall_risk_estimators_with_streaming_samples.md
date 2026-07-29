# Finite-sample bounds for multivariate shortfall risk estimators with streaming samples

This file contains the open problem on Finite-sample bounds for multivariate shortfall risk estimators with streaming samples.

---

<a id="problem-1"></a>

## 1. Finite-sample bounds for multivariate shortfall risk estimators with streaming samples

Source paper authors: V. S. Hegde, Arvind S. Menon, L. A. Prashanth, Krishna Jagannathan

### 1. Problem Background

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space. Fix an integer dimension $d\ge 2$. Let $X\in L^\infty(\Omega;\mathbb R^d)$ be a bounded $d$-dimensional random vector representing (componentwise) losses or positions.

Let $\ell:\mathbb R^d\to\mathbb R$ be a convex loss/utility-penalty function (sometimes called an aggregation loss), and let $\lambda\in\mathbb R$ be a fixed risk-level parameter (assumed to be in the interior of the range of $\ell$ under the law of the argument in question).

Define the acceptance set
$$

\mathcal A := \bigl\{Y\in L^\infty(\Omega;\mathbb R^d): \ \mathbb E[\,\ell(-Y)\,] \le \lambda\bigr\}.

$$

A multivariate shortfall risk measure (MSRM) is a multivariate analogue of utility-based shortfall risk, defined via the cash-additivity/translation of the acceptance set: for a given position $X$, one seeks a deterministic capital allocation vector $m\in\mathbb R^d$ such that $X+m\in\mathcal A$; one may consider the set of admissible allocations
$$

\mathcal R_\lambda(X) := \{m\in\mathbb R^d : \mathbb E[\ell(-(X+m))]\le \lambda\},

$$
and/or a scalarized risk value derived from $\mathcal R_\lambda(X)$ (the precise scalarization depends on the MSRM definition).

Assume an online/streaming observation model: samples $\{X_i\}_{i\ge 1}$ are revealed one-at-a-time, where $X_i$ are i.i.d. copies of $X$. An estimator for an MSRM is any measurable mapping $\widehat{\mathcal R}_{\lambda,n}$ (or $\widehat m_n$) computed from $X_1,\dots,X_n$. “Finite-sample bounds” refers to non-asymptotic guarantees (e.g., mean-squared error or concentration inequalities) as explicit functions of $n$.

### 2. Open Problem

**Question 1.1.** Develop non-asymptotic (finite-sample) performance guarantees for an online/streaming estimator of a multivariate shortfall risk measure (MSRM) based on i.i.d. samples $X_1,\dots,X_n$ of a bounded random vector $X\in\mathbb R^d$.

Concretely, provide explicit bounds (in $n$) on the estimation error of an MSRM estimator $\widehat{\mathcal R}_{\lambda,n}$ (or an estimated capital allocation $\widehat m_n\in\mathbb R^d$) relative to the target MSRM determined by $\ell$ and $\lambda$, analogous in spirit to finite-sample bounds available for the univariate utility-based shortfall risk estimator.

### 3. Known Results

The source paper (Hegde et al., 2023) develops a stochastic-approximation (SA) root-finding view of univariate utility-based shortfall risk (UBSR), where $\mathrm{SR}_\lambda(X)$ is the unique root of $g(t)=\mathbb E[\ell(-X-t)]-\lambda$. Under boundedness and a monotonicity condition on $g$ (via bounds on $-\ell'$), it proves non-asymptotic mean-squared error rates $\mathbb E[(t_n-\mathrm{SR}_\lambda(X))^2]=O(1/n)$ for stepsize $a_n=c/n$ when the monotonicity parameter is known, and $O(1/n^\alpha)$ for universal stepsizes $a_n=c/n^\alpha$, together with high-probability concentration. It also analyzes biased ratio-form gradient estimators for UBSR optimization, again with explicit finite-sample rates.

Forward-citing work to date does not resolve the multivariate extension requested in the open problem: finite-sample bounds for streaming estimators of multivariate shortfall risk measures (MSRM) defined by $\mathcal R_\lambda(X)=\{m\in\mathbb R^d: \mathbb E[\ell(-(X+m))]\le\lambda\}$ with $d\ge2$ and convex aggregation loss $\ell:\mathbb R^d\to\mathbb R$. The most relevant partial progress remains in the univariate/scalar setting: (i) learning/regression work provides concentration for SAA estimators of scalar shortfall risk under tail/margin conditions; (ii) risk-sensitive RL work provides $O(1/m)$ MSE bounds for shortfall-risk policy-gradient estimators using double sampling; and (iii) optimization papers develop efficient solvers (e.g., ADMM and semismooth Newton projections) for finite-sample SAA programs. These contributions suggest tools—uniform concentration over $m\in\mathbb R^d$, stability of feasible-set estimators, and SA/SGD analyses with biased or ratio estimators—but a complete non-asymptotic streaming theory for MSRM set/allocator estimation appears to remain open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #68 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3214544052_p0/partial_progress/68.pdf)

### 4. Source and Verification

- **Source paper:** V. S. Hegde, Arvind S. Menon, L. A. Prashanth, Krishna Jagannathan, [*Online Estimation and Optimization of Utility-Based Shortfall Risk*](https://doi.org/10.1287/moor.2022.0266), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 33, Section 9 (Concluding Remarks and Future Work).
- **Area:** risk measure estimation
- **Keywords:** `shortfall risk`, `multivariate risk measures`, `stochastic approximation`, `finite-sample bounds`, `streaming estimation`, `concentration inequalities`
- **Upstream problem record:** [W3214544052_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3214544052_p0&n=68&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. V. S. Hegde, Arvind S. Menon, L. A. Prashanth, Krishna Jagannathan, [*Online Estimation and Optimization of Utility-Based Shortfall Risk*](https://doi.org/10.1287/moor.2022.0266), Mathematics of Operations Research, 2024.
2. *Risk-sensitive reinforcement learning using expectiles, shortfall risk and optimized certainty equivalent risk*.
3. *Optimizing Shortfall Risk Metric for Learning Regression Models*.
4. *An Alternating Direction Method of Multipliers for Utility-based Shortfall Risk Portfolio Optimization*.
5. *Some Studies on Stochastic Optimization based Quantitative Risk Management*.
