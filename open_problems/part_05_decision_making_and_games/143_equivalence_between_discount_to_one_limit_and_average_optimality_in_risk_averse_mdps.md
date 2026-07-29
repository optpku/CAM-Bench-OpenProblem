# Equivalence between discount-to-one limit and average optimality in risk-averse MDPs

This file contains the open problem on Equivalence between discount-to-one limit and average optimality in risk-averse MDPs.

---

<a id="problem-1"></a>

## 1. Equivalence between discount-to-one limit and average optimality in risk-averse MDPs

Source paper authors: Ziteng Cheng, Sebastian Jaimungal

### 1. Problem Background

Consider a discrete-time controlled Markov process with state space $X$ and action space $A$, with (possibly randomized) Markov policies $p=(\pi_t)_{t\in\mathbb{N}}$, where each $\pi_t(x)$ is a probability measure on $A$ supported on an admissible set $A_t(x)\subseteq A$. Let $P(t,x,a,\cdot)$ be a transition kernel on $X$, and let $C_t(x,a,x')\in\mathbb{R}$ be a bounded one-step cost.

Fix a discount factor $\gamma\in(0,1)$. A (time- and state-dependent) law-invariant convex risk measure at the distributional level is a functional $\sigma_{t,x}$ mapping the law $\mu$ of a bounded real random variable to a value in $( -\infty,\infty]$, satisfying (i) translation invariance $\sigma_{t,x}(\mu*\delta_c)=\sigma_{t,x}(\mu)+c$, (ii) monotonicity with respect to first-order stochastic dominance, and (iii) convexity with respect to mixtures (as formalized on probability measures). A dynamic risk measure (DRM) $\varsigma^{X,\gamma}_{0,\infty}(C)$ is constructed by nesting/composing the one-step risk mappings $\sigma_{t,X_t}$ applied to regular conditional distributions of future (discounted) cost streams under a controlled process $(X,A)$.

For each $\gamma\in(0,1)$, define the infinite-horizon discounted risk-averse performance criterion (value) under an admissible policy (or controlled process) as $\varsigma^{X,\gamma}_{0,\infty}(C)$. In classical risk-neutral MDPs with finite state/action spaces, the scaled limit $(1-\gamma)\, \mathbb{E}[\sum_{t\ge 0} \gamma^t C_t]$ as $\gamma\uparrow 1$ coincides with the optimal long-run average cost under suitable conditions; the paper highlights that an analogous statement for the present risk-averse DRM framework is not established.

### 2. Open Problem

**Question 1.1.** Establish conditions under which the discount-to-one limit of the discounted infinite-horizon distributional dynamic risk measure recovers an average-optimality criterion. Concretely, analyze whether there is an average-cost (or average-risk) optimality notion $\mathrm{Avg}(C)$ for the risk-averse MDP such that, for appropriate scaling and under suitable assumptions,
$$

\lim_{\gamma\uparrow 1}\, (1-\gamma)\, \inf_{(X,A)\in\Psi}\, \varsigma^{X,\gamma}_{0,\infty}(C)
\quad\text{equals}\quad
\inf_{\text{admissible policies}}\, \mathrm{Avg}(C),

$$
or otherwise characterize the limit $\lim_{\gamma\uparrow 1} \varsigma^{X,\gamma}_{0,\infty}(C)$ (possibly after scaling) and its relationship to an average optimality objective in this risk-averse setting.

### 3. Known Results

The source paper (Cheng–Jaimungal) constructs discounted infinite-horizon distributional DRMs $\varsigma^{X,\gamma}_{0,\infty}(C)$ by nesting state-dependent law-invariant convex risk measures $\sigma_{t,x}$ applied to regular conditional laws of $C_t+\gamma\,\text{future}$. Under weak continuity of the transition kernel and lower semicontinuity/Fatou-type regularity of $\sigma_{t,x}$, it establishes finite- and infinite-horizon DPPs and existence of optimal Markov policies for each fixed $\gamma<1$. It also explicitly highlights that, unlike the risk-neutral case, an Abelian/Tauberian link between the $\gamma\uparrow 1$ discounted problem (possibly scaled by $1-\gamma$) and an average-cost/average-risk criterion is not known in this nonlinear, time-consistent risk setting.

Prior work by Ruszczyński provides the canonical recursive risk-averse dynamic programming framework via risk transition mappings, while Bäuerle–Glauner develop related discounted DPP theory for recursive risk measures and conditions for deterministic optimal actions. These works clarify that time consistency alone yields a Bellman recursion but does not supply the linear structure used in classical proofs of discount-to-average equivalence (e.g., additive Poisson equations and affine contraction arguments). On the average-criterion side, Shen–Stannat–Obermayer treat risk-sensitive Markov control processes including average dynamic risk measures under strong regularity (e.g., strong Feller-type) assumptions, thereby offering candidate definitions of $\mathrm{Avg}(C)$ in a time-consistent risk-averse framework; however, they do not prove that $(1-\gamma)\inf\varsigma^{X,\gamma}_{0,\infty}(C)$ converges to that average criterion as $\gamma\uparrow 1$, nor do they address the distributional/state-dependent $\sigma_{t,x}$ formulation.

Recent forward citations focus on robust/time-consistent recursion and finite-horizon robust RL with nested distortion risks; they provide tools for recursion and worst-case quantile calculations but do not engage with infinite-horizon $\gamma\uparrow 1$ asymptotics. Overall, the discount-to-one versus average-risk equivalence remains open for the distributional DRM setting. Promising directions include: (i) imposing stationarity and ergodicity/unichain conditions plus additional structure on $\sigma$ (e.g., coherent/spectral forms admitting dual representations) to derive an additive eigenvalue problem $h+\lambda=\mathcal{T}h$ for a nonlinear Bellman operator $\mathcal{T}$; (ii) developing nonlinear Tauberian theorems for nested risk operators, possibly via subadditivity/positive homogeneity and span seminorm contractions; and (iii) identifying counterexamples where nonlinearity breaks the Abelian limit, to delineate the sharp assumptions needed.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #127 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400732905_p0/partial_progress/127.pdf)

### 4. Source and Verification

- **Source paper:** Ziteng Cheng, Sebastian Jaimungal, [*Risk-Averse Markov Decision Processes Through a Distributional Lens*](https://doi.org/10.1287/moor.2023.0211), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 14, Remark 2.12 (problem formulation discussion)
- **Area:** risk averse markov decision
- **Keywords:** `risk-averse mdp`, `dynamic risk measures`, `discount factor limit`, `average optimality`, `Blackwell optimality`
- **Upstream problem record:** [W4400732905_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400732905_p0&n=127&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ziteng Cheng, Sebastian Jaimungal, [*Risk-Averse Markov Decision Processes Through a Distributional Lens*](https://doi.org/10.1287/moor.2023.0211), Mathematics of Operations Research, 2024.
2. [*Uncertainty propagation and dynamic robust risk measures*](https://doi.org/10.1287/moor.2023.0267).
3. [*Robust reinforcement learning with dynamic distortion risk measures*](https://doi.org/10.1137/24M1699802).
