# Verify gamma^{-beta} truncation schedule meets summability condition in policy gradient algorithm

This file contains the open problem on Verify gamma^{-beta} truncation schedule meets summability condition in policy gradient algorithm.

---

<a id="problem-1"></a>

## 1. Verify gamma^{-beta} truncation schedule meets summability condition in policy gradient algorithm

Source paper authors: Mehrdad Moharrami, Yashaswini Murthy, Arghyadip Roy, R. Srikant

### 1. Problem Background

Consider a finite-state Markov chain (or finite MDP under a stationary randomized policy) with state space $\mathcal X$ and a designated recurrent regeneration state $x^\ast\in\mathcal X$. A policy is parameterized by $\theta\in\mathbb R^\ell$, inducing an aperiodic irreducible transition kernel $P_\theta$ on $\mathcal X$, and a bounded one-step cost $C_\theta(x)$. Fix a risk factor $\alpha>0$.

The risk-sensitive exponential average cost is
$$
\Lambda_\theta:=\lim_{n\to\infty}\frac1n\log\mathbb E_\theta\Big[\exp\Big(\alpha\sum_{i=0}^{n-1}C_\theta(\Phi_i)\Big)\,\Big|\,\Phi_0=x\Big],
$$
which exists and is independent of the initial state $x\in\mathcal X$ under the stated ergodicity assumptions.

To construct trajectory-based stochastic approximation algorithms, the paper introduces a family of smooth truncations indexed by $M>1$, yielding an approximating objective $\Lambda^{(M)}_\theta$ defined implicitly as the unique $\Lambda$ solving
$$
g^{(M)}(\theta,\Lambda)=\mathbb E_\theta\big[ G^{(M)}(\theta,\Lambda)\,\big|\,\Phi_0=x^\ast\big]=1,
$$
where $G^{(M)}(\theta,\Lambda)$ is a smooth, bounded modification of
$$
H(\theta,\Lambda):=\exp\Big(\sum_{i=0}^{\tau_{x^\ast}-1}(\alpha C_\theta(\Phi_i)-\Lambda)\Big),
$$
with $\tau_{x^\ast}$ the first return time to $x^\ast$. For fixed $M$, the corresponding gradient $\nabla_\theta\Lambda^{(M)}_\theta$ exists and can be estimated from a single regenerative trajectory segment.

To recover stationarity for the original (untruncated) objective $\Lambda_\theta$, the paper considers an increasing truncation sequence $(M_m)_{m\ge 0}$ (possibly depending on the stepsize $\gamma_m$) and a coupled stochastic approximation that updates $\theta_m$ and an auxiliary cost estimate $\widehat\Lambda_m$ at successive regeneration times.

A key technical requirement for varying truncations is the summability condition
$$
\sum_{m=0}^\infty \sup_{\theta\in\mathbb R^\ell}\Big(\Lambda^{(M_{m+1})}_\theta-\Lambda^{(M_m)}_\theta\Big)<\infty,
$$
which ensures the cumulative error caused by changing the truncation level is finite. The paper assumes the existence of some increasing sequence $(N_i)$ satisfying this condition and then sets $M_m$ to be (essentially) $\gamma_m^{-\beta}$ rounded down to the nearest $N_i$, for some $\beta\in(0,1/2)$. In simulations, the authors report that the simple choice $M_m=\gamma_m^{-\beta}$ appears to work.

### 2. Open Problem

**Question 1.1.** Let $(\gamma_m)_{m\ge 0}$ be a stepsize sequence with $\sum_m \gamma_m=\infty$ and $\gamma_m\downarrow 0$, and fix $\beta\in(0,1/2)$. For each $M>1$ and $\theta\in\mathbb R^\ell$, let $\Lambda^{(M)}_\theta$ denote the smooth-truncated approximation of the risk-sensitive cost defined as the unique solution to $g^{(M)}(\theta,\Lambda)=1$.

Show that the truncation schedule
$$
M_m=\gamma_m^{-\beta}
$$
satisfies the varying-truncation summability condition
$$
\sum_{m=0}^\infty \sup_{\theta\in\mathbb R^\ell}\Big(\Lambda^{(M_{m+1})}_\theta-\Lambda^{(M_m)}_\theta\Big)<\infty,
$$
(or, equivalently, verify that $(M_m)$ meets the paper's sufficient conditions for convergence to a stationary point of the untruncated objective when used in the trajectory-based policy-gradient scheme).

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #112 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4392646050_p0/solutions/112.pdf)

### 4. Source and Verification

- **Source paper:** Mehrdad Moharrami, Yashaswini Murthy, Arghyadip Roy, R. Srikant, [*A Policy Gradient Algorithm for the Risk-Sensitive Exponential Cost MDP*](https://doi.org/10.1287/moor.2022.0139), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 12, Section 7 (Conclusion).
- **Area:** risk sensitive mdp
- **Keywords:** `risk-sensitive MDP`, `policy gradient`, `stochastic approximation`, `truncation schedule`, `regenerative simulation`, `convergence conditions`
- **Upstream problem record:** [W4392646050_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4392646050_p0&n=112&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Mehrdad Moharrami, Yashaswini Murthy, Arghyadip Roy, R. Srikant, [*A Policy Gradient Algorithm for the Risk-Sensitive Exponential Cost MDP*](https://doi.org/10.1287/moor.2022.0139), Mathematics of Operations Research, 2024.
