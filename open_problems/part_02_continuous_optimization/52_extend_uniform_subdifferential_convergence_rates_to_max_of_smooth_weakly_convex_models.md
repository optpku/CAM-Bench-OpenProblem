# Extend uniform subdifferential convergence rates to max-of-smooth weakly convex models

This file contains the open problem on Extend uniform subdifferential convergence rates to max-of-smooth weakly convex models.

---

<a id="problem-1"></a>

## 1. Extend uniform subdifferential convergence rates to max-of-smooth weakly convex models

Source paper authors: Feng Ruan

### 1. Problem Background

Let $\Xi$ be a measurable space with probability measure $P$, and let $\xi_1,\dots,\xi_m$ be i.i.d. samples from $P$. Consider a stochastic optimization objective of the form
$$

\phi(x)=\mathbb{E}_{\xi\sim P}[f(x,\xi)]+R(x)+\iota_X(x),\qquad x\in\mathbb{R}^d,

$$
with empirical (sample-average) counterpart
$$

\phi_S(x)=\frac{1}{m}\sum_{i=1}^m f(x,\xi_i)+R(x)+\iota_X(x).

$$
Here $R:\mathbb{R}^d\to\mathbb{R}\cup\{+\infty\}$ is a proper closed convex function, $X\subseteq\mathbb{R}^d$ is nonempty closed convex, and $\iota_X$ is the indicator of $X$. Let $\partial$ denote the Fr\'echet (regular) subdifferential, and let $H(A,B)$ denote the Hausdorff distance between nonempty compact subsets $A,B\subset\mathbb{R}^d$.

A (locally) weakly convex function on an open set $O\subset\mathbb{R}^d$ is a function $g:O\to\mathbb{R}$ such that for each $x\in O$ there exists $\lambda<\infty$ and a neighborhood on which $y\mapsto g(y)+\frac{\lambda}{2}\|y\|^2$ is convex.

The paper establishes, for a specific subclass of stochastic weakly convex objectives called stochastic convex-composite models (with one-dimensional convex outer function), high-probability bounds on
$$

\sup_{x\in X\cap B(x_0;r)} H(\partial\phi(x),\partial\phi_S(x)),

$$
in terms of dimension and a VC-dimension complexity measure of threshold sets induced by the model.

A commonly studied different weakly convex model class is the class of max-of-smooth functions, i.e., objectives representable (at least pointwise) as a maximum over a family of smooth functions; such functions are typically nonsmooth and can be weakly convex under suitable regularity.

### 2. Open Problem

**Question 1.1.** Develop an analogue of the paper's uniform Hausdorff-distance bound for subdifferential mappings,
$$

\sup_{x\in X\cap B(x_0;r)} H(\partial\phi(x),\partial\phi_S(x)),

$$
with explicit (high-probability) convergence rates in $m$, for stochastic weakly convex objectives in the max-of-smooth model class (rather than the stochastic convex-composite class treated in the paper).

### 3. Known Results

Ruan (2025) develops a deterministic reduction (Theorem 1) for locally weakly convex functions on an open set $O$: uniform Hausdorff control of $x\mapsto \partial f(x)$ reduces to uniform control of any subgradient selections $g(x)\in\partial f(x)$. This enables sharp high-probability rates for stochastic convex-composite models $f(x,\xi)=h(c(x;\xi))$ with one-dimensional convex outer $h$, by choosing a selection built from indicator thresholds $\mathbf 1\{c(x,\xi)\ge t\}$ and controlling it via VC dimension of the induced threshold class. The resulting bound (Theorem 5) yields essentially $m^{-1/2}$ rates (up to logs) for $\sup_{x\in X\cap B(x_0;r)} H(\partial\phi(x),\partial\phi_S(x))$ in that model class.

For the max-of-smooth weakly convex class, the lone forward-citing work provided here gives a complementary, negative message: “Failure of uniform laws of large numbers for subdifferentials and beyond” constructs structured max-type objectives (even convex, in $d=2$, with only two smooth pieces combined by $\max\{\cdot,0\}$) where uniform LLNs for subdifferentials fail, and hence uniform Hausdorff convergence $\sup_x H(\partial f(x),\partial f_S(x))\to 0$ cannot hold in full generality. This indicates the open problem remains unsolved as stated: an analogue of Ruan’s uniform rate bound for general max-of-smooth models is impossible without strengthening assumptions.

Promising directions therefore shift from a blanket extension to identifying verifiable additional conditions under which a Ruan-style reduction plus learning-theoretic control can succeed for max-of-smooth models. Natural candidates include: (i) restricting the index set of maximizers to a class with finite complexity (e.g., finite max, parametric families with bounded VC/pseudodimension), (ii) imposing margin or nondegeneracy conditions ensuring stability of the active set $\arg\max$ under sampling, or (iii) weakening the target metric (graphical distance, fixed $\varepsilon$-enlarged subdifferentials, or local-in-probability notions) to bypass the demonstrated obstructions.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #25 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4413635748_p0/partial_progress/25.pdf)

### 4. Source and Verification

- **Source paper:** Feng Ruan, [*On the Uniform Convergence of Subdifferentials in Stochastic Optimization and Learning*](https://doi.org/10.1287/moor.2024.0533), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 24, Section 7 (Discussion), future directions list
- **Area:** stochastic nonsmooth optimization
- **Keywords:** `weakly convex functions`, `subdifferentials`, `uniform convergence`, `hausdorff distance`, `max of smooth`, `sample average approximation`, `finite sample rates`
- **Upstream problem record:** [W4413635748_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4413635748_p0&n=25&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Feng Ruan, [*On the Uniform Convergence of Subdifferentials in Stochastic Optimization and Learning*](https://doi.org/10.1287/moor.2024.0533), Mathematics of Operations Research, 2025.
2. *Failure of uniform laws of large numbers for subdifferentials and beyond*.
