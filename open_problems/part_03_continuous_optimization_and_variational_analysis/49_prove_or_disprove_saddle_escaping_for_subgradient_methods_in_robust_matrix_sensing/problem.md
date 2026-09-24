# Prove or disprove saddle-escaping for subgradient methods in robust matrix sensing

This file contains the open problem on Prove or disprove saddle-escaping for subgradient methods in robust matrix sensing.

---

<a id="problem-1"></a>

## 1. Prove or disprove saddle-escaping for subgradient methods in robust matrix sensing

Source paper authors: Jianhao Ma, Salar Fattahi

### 1. Problem Background

Let $X_\star\in\mathbb{R}^{d_1\times d_2}$ be a rank-$r$ matrix. Let $\mathcal{A}:\mathbb{R}^{d_1\times d_2}\to\mathbb{R}^m$ be a linear measurement operator with Gaussian sensing matrices $A_1,\dots,A_m\in\mathbb{R}^{d_1\times d_2}$, i.e., entries $(A_i)[\alpha,\beta]\sim\mathcal{N}(0,1)$ i.i.d. Measurements follow an outlier/noise model
$$
y_i = \langle A_i, X_\star\rangle + \epsilon_i,\qquad i=1,\dots,m,
$$
where each measurement is corrupted with probability $p\in[0,1]$; for corrupted indices, $\epsilon_i$ is drawn from some distribution having nontrivial mass away from zero (e.g., there exist $t_0,p_0>0$ such that $\mathbb{P}(|\epsilon_i|\ge t_0)\ge p_0$).

Consider the Burer--Monteiro factorization with search rank $k\ge r$: in the asymmetric case $X=W_1W_2$ with $W_1\in\mathbb{R}^{d_1\times k}$, $W_2\in\mathbb{R}^{k\times d_2}$; in the symmetric PSD case $X=WW^\top$ with $W\in\mathbb{R}^{d\times k}$. The robust $\ell_1$ objective is
$$
f_{\ell_1}(W_1,W_2)=\frac{1}{m}\sum_{i=1}^m \big|y_i-\langle A_i, W_1W_2\rangle\big|\quad\text{(asymmetric)},
$$
with the analogous symmetric form $f_{\ell_1}(W)=\frac{1}{m}\sum_{i=1}^m |y_i-\langle A_i, WW^\top\rangle|$.

A pair $(W_1^\star,W_2^\star)$ is a true solution if $W_1^\star W_2^\star=X_\star$ (and similarly $W^\star W^{\star\top}=X_\star$ in the symmetric case). The paper shows that in a statistically relevant regime (roughly $m\gtrsim \max\{d_1,d_2\}r$ but $m\ll \max\{d_1,d_2\}k$ with $p<1/2$), true solutions can be strict saddle points of the nonsmooth objective: they are (Clarke) critical points yet admit a direction $v$ with quadratic decrease $f(\bar x+\gamma v)-f(\bar x)\le -c\gamma^2$ for small $\gamma$.

Let the (deterministic or stochastic) subgradient method be the iteration
$$
W_{t+1}=W_t-\eta_t g_t,
$$
where $g_t\in \partial f_{\ell_1}(W_t)$ is a (possibly stochastic) subgradient and $(\eta_t)$ is a stepsize schedule (e.g., diminishing). Existing nonsmooth theory guarantees convergence to (approximate) first-order stationary points under conditions, but does not generally ensure escape from strict saddles. Empirically and in related work, subgradient methods with small/random initialization appear to converge to the ground-truth true solution even when it is a strict saddle.

### 2. Open Problem

**Question 1.1.** Determine whether the (deterministic) subgradient method for minimizing the robust low-rank matrix recovery objective $f_{\ell_1}$ can escape strict saddle points corresponding to true solutions, or whether such strict saddle points can be attracting for the dynamics. Concretely, in the robust matrix sensing setting above where a true solution $W_\star$ is a strict saddle point of $f_{\ell_1}$, prove or disprove that subgradient iterates $(W_t)$ (with random or small initialization and a standard stepsize rule, e.g., diminishing stepsizes) almost surely avoid convergence to $W_\star$ (saddle-escaping), or instead can converge to $W_\star$ with positive probability despite the strict-saddle geometry.

### 3. Known Results

In Ma--Fattahi (2025), the robust matrix sensing objective $f_{\ell_1}$ under Gaussian measurements and outlier noise exhibits a striking nonsmooth landscape: in the statistically relevant regime $\max\{d_1,d_2\}r \lesssim m \lesssim \max\{d_1,d_2\}k$ with $p<1/2$, rank-balanced true solutions are Clarke critical yet strict saddles, admitting directions with quadratic decrease $f(W_\star+\gamma v)-f(W_\star)\le -c\gamma^2$. This directly motivates the open dynamical question: can the deterministic subgradient method $W_{t+1}=W_t-\eta_t g_t$, $g_t\in\partial f_{\ell_1}(W_t)$, nevertheless converge to such strict saddles (as observed empirically and in related convergence results), or must it almost surely avoid them as in smooth strict-saddle theory.

Among the forward citations provided, the closest technical parallel is "Certifying optimality in nonconvex robust PCA", which proves an analogous geometric phenomenon for the fully observed robust PCA objective $\|XY^\top-M\|_1$: true solutions are Clarke critical and become strict saddles when overparameterized $(k>r)$, with explicit descent directions tied to $\ker(X_\star)$ and $\ker(Y_\star)$. However, it likewise does not establish (or refute) saddle-escaping for deterministic subgradient dynamics in the strict-saddle regime, reinforcing that the dynamical question remains unresolved even in closely related $\ell_1$ factorizations.

The remaining citations are largely contextual: work on implicit regularization and perturbed gradient methods addresses strict-saddle escape in smooth settings, while matrix-LASSO/RIP results give benign-landscape and convergence guarantees for smooth or proximal algorithms under RIP. None of these directly answer whether nonsmooth strict saddles at the ground truth are attracting or repelling for deterministic subgradient methods. Consequently, based on the supplied forward-citation set, the problem appears to remain open; promising directions include adapting "active strict saddle" frameworks for nonsmooth functions to the specific Clarke geometry at true solutions in robust sensing, or constructing explicit subgradient selections/stepsize schedules that yield attraction to (or avoidance of) these strict saddles.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #22 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4412612512_p0/partial_progress/22.pdf)

### 4. Source and Verification

- **Source paper:** Jianhao Ma, Salar Fattahi, [*Can Learning Be Explained by Local Optimality in Robust Low-Rank Matrix Recovery?*](https://doi.org/10.1287/moor.2023.0371), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 8 (Discussion and Future Directions), page 39 (arXiv PDF numbering)
- **Area:** nonsmooth optimization dynamics
- **Keywords:** `nonsmooth optimization`, `subgradient method`, `strict saddle points`, `robust matrix sensing`, `low-rank recovery`, `saddle escaping`
- **Upstream problem record:** [W4412612512_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4412612512_p0&n=22&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jianhao Ma, Salar Fattahi, [*Can Learning Be Explained by Local Optimality in Robust Low-Rank Matrix Recovery?*](https://doi.org/10.1287/moor.2023.0371), Mathematics of Operations Research, 2025.
2. *Certifying optimality in nonconvex robust PCA*.
3. [*Low solution rank of the matrix LASSO under RIP with consequences for rank-constrained algorithms: AD McRae*](https://doi.org/10.1007/s10107-025-02236-x).
4. *Understanding the Implicit Regularization of Gradient Descent in Over-parameterized Models*.
5. *Landscape and complexity for classes of nonconvex optimization problems*.
