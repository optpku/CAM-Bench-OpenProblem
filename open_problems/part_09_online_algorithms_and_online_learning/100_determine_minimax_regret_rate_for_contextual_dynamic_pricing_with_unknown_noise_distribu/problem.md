# Determine minimax regret rate for contextual dynamic pricing with unknown noise distribution

This file contains the open problem on Determine minimax regret rate for contextual dynamic pricing with unknown noise distribution.

---

<a id="problem-1"></a>

## 1. Determine minimax regret rate for contextual dynamic pricing with unknown noise distribution

Source paper authors: Yiyun Luo, Will Wei Sun, Yufeng Liu

### 1. Problem Background

A seller repeatedly interacts with customers over periods $t=1,\dots,T$. At time $t$, a covariate (context) $x_t\in\mathcal X\subset\mathbb R^{d_0}$ is observed, with $\|x_t\|_\infty\le 1$. The customer's valuation is
$$

v_t = x_t^\top \theta_0 + z_t,

$$
where $\theta_0\in\mathbb R^{d_0}$ is an unknown parameter (often assumed to satisfy $\|\theta_0\|_1\le W$ for a known constant $W$), and $\{z_t\}$ are i.i.d. draws from an unknown distribution with CDF $F$. After the seller posts a price $p_t>0$, the seller observes only the binary purchase indicator
$$

y_t = \mathbf 1\{v_t\ge p_t\}.

$$
The expected revenue from posting price $p$ in context $x$ is
$$

R(p;x) = p\,\mathbb P(v\ge p\mid x)= p\bigl(1-F(p-x^\top\theta_0)\bigr).

$$
Define the context-dependent optimal price
$$

p^*(x)\in \arg\max_{p>0} p\bigl(1-F(p-x^\top\theta_0)\bigr).

$$
The (pseudo-)regret over horizon $T$ for a policy producing prices $p_t$ is
$$

\mathcal R_T = \sum_{t=1}^T \Bigl( p^*(x_t)\bigl(1-F(p^*(x_t)-x_t^\top\theta_0)\bigr) - p_t\bigl(1-F(p_t-x_t^\top\theta_0)\bigr) \Bigr),

$$
and performance is measured by $\mathbb E[\mathcal R_T]$ over the randomness in the data and any policy randomization. The model is "distribution-free" in the sense that $F$ is unknown and not restricted to a known parametric/log-concave family; the paper assumes regularity such as Lipschitz continuity of $F$ in some analyses.

### 2. Open Problem

**Question 1.1.** Characterize the minimax-optimal regret rate in $T$ for contextual dynamic pricing under the linear valuation model $v_t=x_t^\top\theta_0+z_t$ with unknown $\theta_0$ and unknown noise CDF $F$, given only binary purchase feedback $y_t=\mathbf 1\{v_t\ge p_t\}$. In particular, determine whether there exists a policy with expected cumulative regret $\mathbb E[\mathcal R_T]=\tilde O(T^{2/3})$ (up to logarithmic factors), or prove a matching lower bound (up to logs) showing $\inf_{\pi}\sup_{\theta_0,F}\mathbb E_\pi[\mathcal R_T]=\tilde\Omega(T^{2/3})$ (or the correct exponent), over an appropriate class of admissible $F$ consistent with the paper's assumptions.

### 3. Known Results

The source paper (Luo–Sun–Liu, 2023) framed contextual dynamic pricing with linear valuations $v_t=x_t^\top\theta_0+z_t$ and unknown noise CDF $F$ as a distribution-free problem under binary feedback $y_t=\mathbf 1\{v_t\ge p_t\}$. Its DIP policy uses episodic estimation of $\theta_0$ via a classification reduction and then reduces within-episode pricing to a perturbed linear bandit over a discretization of the residual $p-x_t^\top\hat\theta$. Under Lipschitz $F$ and a local quadratic revenue geometry (Assumptions 1–2), DIP yields a leading $\tilde O(T^{2/3})$ term plus an additional term scaling with $\sum_k \ell_k\,\mathbb E\|\hat\theta_{k-1}-\theta_0\|_1$, leaving open whether $\tilde\Theta(T^{2/3})$ is the minimax rate when both $\theta_0$ and $F$ are unknown.

Subsequent work has essentially settled the minimax exponent under the natural “distribution-free but regular” class where $F$ (equivalently demand $1-F$) is Lipschitz. In particular, "Minimax optimality in contextual dynamic pricing with general valuation models" proves a $\tilde O(T^{2/3})$ regret upper bound for broad valuation classes (specializing to $\tilde O(d_0^{1/3}T^{2/3})$ for linear valuations) and pairs it with a matching $\Omega(T^{2/3})$ lower bound (up to logarithmic factors), thereby establishing minimax optimality in $T$ for Lipschitz $F$. Complementarily, "Improved algorithms for contextual dynamic pricing" provides an explicit algorithmic route (VAPE) achieving $\tilde O(d^{2/3}T^{2/3})$ regret under adversarial contexts and Lipschitz $F$, and points to the $\Omega(T^{2/3})$ lower bound (e.g., via Xu–Wang-style constructions) showing the rate is unimprovable in this regime.

On the lower-bound side, "Towards agnostic feature-based dynamic pricing: Linear policies vs linear valuation with unknown noise" supplies a clean $\tilde\Omega(T^{2/3})$ minimax lower bound for the linear-valuation, unknown-noise, binary-feedback model, even under additional benign assumptions, clarifying that the $2/3$ exponent is information-theoretic rather than an artifact of particular algorithms. Other partial-progress papers chart the landscape of assumptions: Explore-then-UCB achieves $\tilde O(T^{2/3})$ only with extra second-order curvature, while smoothness-based semiparametric methods obtain rates depending on differentiability of $F$. Finally, results such as "Optimal Contextual Pricing under Agnostic Non-Lipschitz Demand" indicate that $T^{2/3}$ can remain the right rate even without Lipschitzness when one assumes stochastic, well-conditioned contexts and bounded noise, suggesting robustness of the $2/3$ barrier beyond the original Lipschitz class.

Overall, for the core setting emphasized by the source paper—linear valuations, adversarial contexts, binary feedback, and unknown Lipschitz noise CDF—the minimax regret rate is now characterized (up to logarithmic factors) as $\tilde\Theta(T^{2/3})$, with "Minimax optimality in contextual dynamic pricing with general valuation models" providing the definitive minimax statement.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #77 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4376149422_p0/partial_progress/77.pdf)

### 4. Source and Verification

- **Source paper:** Yiyun Luo, Will Wei Sun, Yufeng Liu, [*Distribution-Free Contextual Dynamic Pricing*](https://doi.org/10.1287/moor.2023.1369), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 4 (Introduction, end of Abstract/Contributions discussion) and page 20 (Remark 2 following Theorem 1 in Section 3).
- **Area:** contextual dynamic pricing
- **Keywords:** `contextual dynamic pricing`, `linear valuation model`, `unknown noise distribution`, `regret minimax lower bound`, `distribution-free learning`, `bandit feedback`
- **Upstream problem record:** [W4376149422_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4376149422_p0&n=77&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Yiyun Luo, Will Wei Sun, Yufeng Liu, [*Distribution-Free Contextual Dynamic Pricing*](https://doi.org/10.1287/moor.2023.1369), Mathematics of Operations Research, 2023.
2. [*Minimax optimality in contextual dynamic pricing with general valuation models*](https://doi.org/10.1287/opre.2025.1779).
3. *Improved algorithms for contextual dynamic pricing*.
4. *Towards agnostic feature-based dynamic pricing: Linear policies vs linear valuation with unknown noise*.
5. *Contextual dynamic pricing with unknown noise: Explore-then-ucb strategy and improved regrets*.
6. *Optimal Contextual Pricing under Agnostic Non-Lipschitz Demand*.
7. [*Policy optimization using semiparametric models for dynamic pricing*](https://doi.org/10.1080/01621459.2022.2128359).
