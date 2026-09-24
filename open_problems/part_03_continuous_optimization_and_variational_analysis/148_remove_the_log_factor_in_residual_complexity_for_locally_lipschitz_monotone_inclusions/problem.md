# Remove the log factor in residual complexity for locally Lipschitz monotone inclusions

This file contains the open problem on Remove the log factor in residual complexity for locally Lipschitz monotone inclusions.

---

<a id="problem-1"></a>

## 1. Remove the log factor in residual complexity for locally Lipschitz monotone inclusions

Source paper authors: Zhaosong Lu, Sanyou Mei

### 1. Problem Background

Let $F:\mathbb{R}^n\to\mathbb{R}^n$ be a single-valued monotone operator and let $B:\mathbb{R}^n\rightrightarrows\mathbb{R}^n$ be a maximal monotone (set-valued) operator with nonempty domain $\mathrm{dom}\,B$. Consider the monotone inclusion problem
$$

\text{find }x\in\mathbb{R}^n\text{ such that }0\in (F+B)(x).

$$
Assume a solution exists. For $x\in \mathrm{dom}\,B$, define the residual of $F+B$ at $x$ by
$$

\mathrm{res}_{F+B}(x):=\inf\{\|v\|: v\in (F+B)(x)\}.

$$
A point $x\in \mathrm{dom}\,B$ is an $\varepsilon$-residual solution if $\mathrm{res}_{F+B}(x)\le \varepsilon$.
Assume further that $F$ is locally Lipschitz continuous on $\overline{\mathrm{dom}\,B}$: for every compact $\Omega\subseteq \overline{\mathrm{dom}\,B}$ there exists $L_\Omega>0$ such that $\|F(x)-F(y)\|\le L_\Omega\|x-y\|$ for all $x,y\in\Omega$.
An algorithm is measured in operation complexity by the number of fundamental operations, consisting of evaluations of $F$ and evaluations of the resolvent $(I+\gamma B)^{-1}$ (assumed exactly computable) for $\gamma>0$. Under global Lipschitz continuity of $F$, the optimal complexity for finding an $\varepsilon$-residual solution of a monotone (not strongly monotone) inclusion is $O(\varepsilon^{-1})$ in this operation model.

### 2. Open Problem

**Question 1.1.** Design an algorithm for the above monotone inclusion setting (monotone $F$, maximal monotone $B$, and $F$ locally Lipschitz continuous on $\overline{\mathrm{dom}\,B}$) that finds an $\varepsilon$-residual solution $x\in\mathrm{dom}\,B$ with $\mathrm{res}_{F+B}(x)\le \varepsilon$ using at most $O(\varepsilon^{-1})$ evaluations of $F$ and $(I+\gamma B)^{-1}$, i.e., improve the known $O(\varepsilon^{-1}\log \varepsilon^{-1})$ operation complexity to $O(\varepsilon^{-1})$ in this local-Lipschitz setting.

### 3. Known Results

The open problem posed by Lu and Mei (2024) asks whether one can improve the $O(\varepsilon^{-1}\log(1/\varepsilon))$ operation complexity of their Algorithm 2 (outer regularization + inner primal-dual extrapolation with backtracking) to $O(\varepsilon^{-1})$ for finding an $\varepsilon$-residual solution of $0\in(F+B)(x)$ when $F$ is monotone and only locally Lipschitz on $\overline{\mathrm{dom}\,B}$. Their current logarithmic overhead comes from solving a sequence of strongly monotone regularized subproblems with geometrically changing regularization/accuracy parameters.

Among the forward-citing works provided, the paper "Parameter-free non-ergodic extragradient algorithms for solving monotone variational inequalities" is conceptually related: it develops backtracking/parameter-free extragradient schemes that work under local Lipschitz continuity without requiring a global Lipschitz constant. However, its last-iterate residual rate is $o(1/\sqrt{T})$, corresponding to $T=O(\varepsilon^{-2})$ to reach residual $\le\varepsilon$, and it focuses on VIs of the form $0\in F(z)+N_Z(z)$ rather than general maximal monotone $B$. Thus it does not resolve the $\log(1/\varepsilon)$ factor issue in Lu–Mei’s residual complexity, but it suggests that more refined adaptive/backtracking mechanisms might be useful ingredients.

Given the limited citation set supplied here, there is no evidence that the $O(\varepsilon^{-1}\log(1/\varepsilon))$ bound has been improved to $O(\varepsilon^{-1})$ in the local-Lipschitz setting for general monotone inclusions. The problem therefore appears to remain open, with the main gap being how to avoid multi-stage regularization (or otherwise control local Lipschitz constants) while preserving the $O(1/T)$-type residual decay characteristic of globally Lipschitz monotone operator splitting methods.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #134 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4403279582_p0/partial_progress/134.pdf)

### 4. Source and Verification

- **Source paper:** Zhaosong Lu, Sanyou Mei, [*Primal-Dual Extrapolation Methods for Monotone Inclusions Under Local Lipschitz Continuity*](https://doi.org/10.1287/moor.2024.0407), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 7 (Concluding remarks), page 23
- **Area:** monotone inclusion
- **Keywords:** `monotone inclusions`, `local Lipschitz continuity`, `operator splitting`, `iteration complexity`, `backtracking line search`, `residual certificate`
- **Upstream problem record:** [W4403279582_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4403279582_p0&n=134&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Zhaosong Lu, Sanyou Mei, [*Primal-Dual Extrapolation Methods for Monotone Inclusions Under Local Lipschitz Continuity*](https://doi.org/10.1287/moor.2024.0407), Mathematics of Operations Research, 2024.
2. *Parameter-free non-ergodic extragradient algorithms for solving monotone variational inequalities*.
