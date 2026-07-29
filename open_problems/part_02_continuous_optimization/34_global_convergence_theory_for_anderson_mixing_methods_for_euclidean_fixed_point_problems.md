# Global convergence theory for Anderson mixing methods for Euclidean fixed-point problems

This file contains the open problem on Global convergence theory for Anderson mixing methods for Euclidean fixed-point problems.

---

<a id="problem-1"></a>

## 1. Global convergence theory for Anderson mixing methods for Euclidean fixed-point problems

Source paper authors: Zanyu Li, Chenglong Bao

### 1. Problem Background

Let $g:\mathbb{R}^n\to\mathbb{R}^n$ be a (possibly nonlinear) mapping and consider the fixed-point problem
$$

\text{find }x^\star\in\mathbb{R}^n\text{ such that }g(x^\star)=x^\star.

$$
Define the residual $r(x):=g(x)-x$. A basic fixed-point iteration is $x_{k+1}=g(x_k)$.

Given a memory parameter $m\in\mathbb{N}$, Anderson mixing (also called Anderson acceleration) constructs iterates $x_k$ by combining current and past residual information. In a common form (depth $m$), define differences $\Delta x_j := x_{j+1}-x_j$ and $\Delta r_j := r(x_{j+1})-r(x_j)$. Form matrices
$$

X_k := [\Delta x_{k-m},\ldots,\Delta x_{k-1}]\in\mathbb{R}^{n\times m},\qquad
R_k := [\Delta r_{k-m},\ldots,\Delta r_{k-1}]\in\mathbb{R}^{n\times m}.

$$
Compute coefficients $\Gamma_k\in\mathbb{R}^m$ as a least-squares solution
$$

\Gamma_k \in \arg\min_{\Gamma\in\mathbb{R}^m}\ \|r(x_k)-R_k\Gamma\|_2,

$$
and then update, for some mixing parameter $\beta_k>0$,
$$

\bar x_k := x_k - X_k\Gamma_k,\qquad \bar r_k := r(x_k)-R_k\Gamma_k,\qquad
x_{k+1} := \bar x_k + \beta_k \bar r_k.

$$
(Equivalent one-step forms exist, but the above captures the standard Anderson mixing scheme.)

An algorithm is said to be globally convergent (for a specified class of maps $g$, possibly under additional conditions and parameter choices) if, for any initial point $x_0$ (or at least for all $x_0$ in a specified region), the generated sequence $\{x_k\}$ is well-defined and converges to a fixed point $x^\star$ (or has a subsequence converging to a fixed point), typically without requiring the initial point to be sufficiently close to $x^\star$.

### 2. Open Problem

**Question 1.1.** Develop a general global convergence theory for Anderson mixing applied to fixed-point problems $g(x)=x$ in $\mathbb{R}^n$: identify verifiable assumptions on $g$ and parameter choices $(m,\{\beta_k\})$ under which, for arbitrary initial point $x_0\in\mathbb{R}^n$, the Anderson mixing iterates $\{x_k\}$ are guaranteed to converge (or at least have a subsequence converging) to a fixed point $x^\star$ of $g$.

### 3. Known Results

The open problem asks for a general global convergence theory for Euclidean Anderson mixing (Anderson acceleration) for fixed-point problems from arbitrary initial points. The provided forward-citation evidence contains only one partially relevant work, which studies a Riemannian analogue on the Bures–Wasserstein manifold of Gaussian measures. That work establishes local linear convergence under assumptions closely paralleling the classical Euclidean local theory: a (local) contraction of the fixed-point map and an a priori uniform bound on the Anderson coefficients, plus geometric regularity and boundedness of vector transport.

In particular, the cited paper reinforces that current convergence theory for Anderson mixing remains predominantly local and hinges on conditions that are difficult to verify or enforce globally (notably boundedness of the least-squares coefficients and staying within a region where the map is contractive and smooth). It does not provide a Euclidean global convergence result, nor a general mechanism ensuring convergence from arbitrary initial points. Consequently, based on the supplied citation set, the Euclidean global convergence theory remains open; promising directions include adding globalization safeguards (regularization, damping, line search, trust-region-like acceptance) that can guarantee descent or residual decrease while retaining the acceleration effect locally, and developing coefficient-control conditions that are verifiable from iterates.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #4 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4409800077_p0/partial_progress/4.pdf)

### 4. Source and Verification

- **Source paper:** Zanyu Li, Chenglong Bao, [*Riemannian Anderson Mixing Methods for Minimizing <i>C</i><sup>2</sup> Functions on Riemannian Manifolds*](https://doi.org/10.1287/moor.2023.0284), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 4 (Regularied RAM and Global Convergence Analysis), page 10; also reiterated in Section 5.1 (Details Concerning Numerical Implementations), page 14.
- **Area:** anderson acceleration
- **Keywords:** `Anderson mixing`, `Anderson acceleration`, `fixed-point iteration`, `global convergence`, `nonlinear equations`
- **Upstream problem record:** [W4409800077_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4409800077_p0&n=4&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Zanyu Li, Chenglong Bao, [*Riemannian Anderson Mixing Methods for Minimizing <i>C</i><sup>2</sup> Functions on Riemannian Manifolds*](https://doi.org/10.1287/moor.2023.0284), Mathematics of Operations Research, 2025.
2. *Anderson Mixing in Bures Wasserstein Space of Gaussian Measures*.
