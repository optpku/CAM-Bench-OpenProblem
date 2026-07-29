# Lower bounds on acceleration thresholds for stochastic momentum methods under growth condition

This file contains the open problem on Lower bounds on acceleration thresholds for stochastic momentum methods under growth condition.

---

<a id="problem-1"></a>

## 1. Lower bounds on acceleration thresholds for stochastic momentum methods under growth condition

Source paper authors: You-Lin Chen, Sen Na, Mladen Kolar

### 1. Problem Background

Let $f:\mathbb{R}^d\to\mathbb{R}$ be continuously differentiable, $L$-smooth and $m$-strongly convex (with respect to the Euclidean norm $\|\cdot\|$), with condition number $\kappa:=L/m$, and unique minimizer $x^*\in\arg\min_x f(x)$. A stochastic first-order oracle returns a noisy gradient
$$

 g(x)=\nabla f(x)+\varepsilon(x),

$$
where $\mathbb{E}[\varepsilon(x)\mid x]=0$. The noise is assumed to satisfy the growth condition: there exist constants $\delta\ge 0$ and $\sigma^2\ge 0$ such that for all $x$,
$$

\mathbb{E}\|\varepsilon(x)\|^2 \le \delta\,\|\nabla f(x)\|^2 + \sigma^2.

$$
Consider the following accelerated stochastic gradient-type methods with (constant) algorithm parameters:
1) Nesterov’s accelerated method (NAM), an iteration that uses a momentum parameter and evaluates stochastic gradients at a momentum-extrapolated point.
2) Robust momentum method (RMM), an iteration that updates a momentum variable and a primary iterate using fixed parameters.
3) Implicit accelerated dual averaging (iDAM+), a dual-averaging-based accelerated scheme.
For each method, one is interested in whether it can achieve an accelerated linear bias decay of the form $\exp(-k/c\sqrt{\kappa})$ (or equivalently a per-iteration contraction factor $1-\Theta(1/\sqrt{\kappa})$) under the growth condition when the multiplicative noise level $\delta$ is not small (e.g., $\delta\ge 1$), compared with the non-accelerated $1-\Theta(1/\kappa)$ rate typical of constant-stepsize SGD.

### 2. Open Problem

**Question 1.1.** For NAM, RMM, and iDAM+ under the growth condition, determine (prove) sharp necessary conditions on the multiplicative noise parameter $\delta$ for acceleration over SGD. In particular, establish a lower bound (impossibility result) showing whether there exists a threshold $\delta_0$ such that for some $\delta\ge \delta_0$ and some $(m,L)$-smooth strongly convex objective $f$ together with an oracle satisfying
$\mathbb{E}\|\varepsilon(x)\|^2 \le \delta\,\|\nabla f(x)\|^2 + \sigma^2$,
no choice of constant algorithm parameters for these methods can guarantee an accelerated bias decay rate $\exp(-k/c\sqrt{\kappa})$ (equivalently contraction $1-\Theta(1/\sqrt{\kappa})$) uniformly over all such problem instances.

### 3. Known Results

The source paper (Chen–Na–Kolar, 2023) frames acceleration under the growth condition $\mathbb E\|\varepsilon(x)\|^2\le \delta\|\nabla f(x)\|^2+\sigma^2$ as a bias–variance tradeoff in a unified recursion of the form $\mathbb E V_{k+1}\le (1-c_1(\delta)/\sqrt\kappa)\,\mathbb E V_k + c_2(\delta)\sigma^2$. For constant parameters, it proves *sufficient* $\delta$-regimes for accelerated linear bias decay: NAM and iDAM+ accelerate only for $\delta<1$, RMM for $\delta<1/4$, while DAM+ can be tuned to accelerate for all $\delta\ge 0$. The paper explicitly notes that these $\delta$-restrictions are not known to be necessary and calls for lower-bound/impossibility results.

Among the forward-citing works provided, none resolves the requested sharp necessary conditions. The Markovian-noise paper establishes acceleration and lower bounds in a different model (Markov dependence plus almost-sure strong-growth and batching), while the interpolation/strong-growth estimating-sequences paper is about upper bounds and flags a bug for standard momentum forms. The RAAS work shows acceleration for an adaptive method under bounded-moment oracle assumptions, again not addressing impossibility thresholds for constant-parameter NAM/RMM/iDAM+.

Therefore, based on the supplied forward-citation set, the problem of proving sharp lower bounds on the multiplicative-noise threshold $\delta$ that precludes accelerated bias decay for NAM, RMM, and iDAM+ under the (in-expectation) growth condition remains open. Promising directions suggested by the source paper’s discussion include constructing hard strongly convex instances (e.g., least-squares-type quadratics with large effective $\delta$) and proving that for $\delta$ above a method-dependent constant, the best achievable uniform contraction reverts to $1-\Theta(1/\kappa)$ for any fixed-parameter momentum tuning.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #102 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4389389242_p0/partial_progress/102.pdf)

### 4. Source and Verification

- **Source paper:** You-Lin Chen, Sen Na, Mladen Kolar, [*Convergence Analysis of Accelerated Stochastic Gradient Descent Under the Growth Condition*](https://doi.org/10.1287/moor.2021.0293), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 27, Section 7 (Conclusion)
- **Area:** stochastic convex optimization
- **Keywords:** `stochastic optimization`, `accelerated methods`, `growth condition`, `multiplicative noise`, `lower bounds`, `momentum methods`
- **Upstream problem record:** [W4389389242_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4389389242_p0&n=102&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. You-Lin Chen, Sen Na, Mladen Kolar, [*Convergence Analysis of Accelerated Stochastic Gradient Descent Under the Growth Condition*](https://doi.org/10.1287/moor.2021.0293), Mathematics of Operations Research, 2023.
2. *First order methods with markovian noise: from acceleration to variational inequalities*.
3. *Faster convergence of stochastic accelerated gradient descent under interpolation*.
4. *Robust Accelerated Adaptive Search: High-Probability Complexity Bounds under Bounded-Moment Stochastic Oracles*.
