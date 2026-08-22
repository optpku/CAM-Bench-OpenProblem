# Improve minimax regret dependence on states and horizon in episodic CTMDPs

This file contains the open problem on Improve minimax regret dependence on states and horizon in episodic CTMDPs.

---

<a id="problem-1"></a>

## 1. Improve minimax regret dependence on states and horizon in episodic CTMDPs

Source paper authors: Xuefeng Gao, Xunyu Zhou

### 1. Problem Background

Consider an episodic, finite-horizon continuous-time Markov decision process (CTMDP) with finite state space $\mathcal S$ ($|\mathcal S|=S$), finite action space $\mathcal A$ ($|\mathcal A|=A$), and fixed horizon $[0,H]$. When action $a\in\mathcal A$ is chosen in state $x\in\mathcal S$, the process stays in $x$ for an exponentially distributed holding time with rate $\lambda(x,a)\in[\lambda_{\min},\lambda_{\max}]$, accrues reward at rate $r(x,a)\in[0,1]$ during the holding time, and then jumps to a next state $Y\in\mathcal S$ with probability $p(\cdot\mid x,a)$ (time-homogeneous). The parameters $p$ and $\lambda$ are unknown to the learning agent.

A (deterministic Markov) policy $\pi$ maps a state and remaining time to an action: $\pi:\mathcal S\times[0,H]\to\mathcal A$. Starting from a fixed initial state $x_0$, define the (finite-horizon) value function
$$

V^{\pi}(x,t):=\mathbb E_{\pi}\Big[\int_0^{t} r(X(u),A(u))\,du\,\Big|\,X(0)=x\Big],\qquad (x,t)\in\mathcal S\times[0,H],

$$
and the optimal value $V^*(x,t):=\sup_{\pi} V^{\pi}(x,t)$.

The agent interacts with the same unknown CTMDP over $K$ independent episodes, each of length $H$, restarting from $x_0$ each episode. Let $\pi_k$ be the policy used in episode $k$. The (expected) cumulative regret after $K$ episodes is
$$

\mathrm{Regret}(K):=\mathbb E\Big[\sum_{k=1}^K \big(V^*(x_0,H)-V^{\pi_k}(x_0,H)\big)\Big].

$$
A minimax (worst-case) regret rate studies $\sup_{M\in\mathcal C}\mathrm{Regret}(K)$, where $\mathcal C$ is the class of all such CTMDPs with given $(S,A,H,\lambda_{\min},\lambda_{\max})$ and bounded rewards.

In the referenced work, an upper bound of order $\widetilde O(\sqrt K)$ is proved but with a leading dependence that is worse than the known lower bound in its dependence on $S$, on $H$, and on $\lambda_{\max}$. In particular, their regret upper bound contains an extra factor $\sqrt S$ (relative to discrete-time tight bounds) and a worse dependence on $H$, while their lower bound scales on the order of $H\sqrt{SAK}$ (up to constants and log factors) in a certain parameter regime.

### 2. Open Problem

**Question 1.1.** Determine whether one can design an episodic reinforcement-learning algorithm for the above finite-horizon tabular CTMDP class $\mathcal C$ whose worst-case expected regret $\sup_{M\in\mathcal C}\mathrm{Regret}(K)$ improves the known upper bounds by reducing their dependence on $S$, $H$, and $\lambda_{\max}$, thereby narrowing the gap to the known lower bounds (which already show $\Omega(H\sqrt{SAK})$ scaling in $K$ and $A$ up to log factors).

Equivalently: improve the minimax, instance-independent regret upper bound for episodic finite-horizon tabular CTMDPs beyond the existing $\widetilde O(\sqrt K)$ bound by achieving sharper polynomial dependence on $S$, $H$, and $\lambda_{\max}$ (and ideally matching the lower bound up to logarithmic factors).

### 3. Known Results

The source paper (Gao & Zhou, 2023) establishes the first minimax-style $\widetilde O(\sqrt K)$ regret guarantee for episodic finite-horizon tabular CTMDPs with unknown transition probabilities and holding-time rates, via CT-UCBVI: optimism over confidence sets combined with a continuous-time value-iteration operator $G$ (built from $T^a$ in (6)) and a contraction-based control of planning error. Their analysis highlights continuous-time-specific obstacles absent in discrete time: truncated holding times at the horizon, random and unbounded numbers of jumps per episode (handled via uniformization), and the need to estimate $\lambda(x,a)$ from time-spent statistics rather than counts.

However, the resulting leading dependence on $S$, $H$, and $\lambda_{\max}$ is not tight: the upper bound carries an extra $\sqrt S$ factor (stemming from $\ell_1$ concentration for the $S$-dimensional transition vector) and worse polynomial dependence on $H$ and $\lambda_{\max}$ than the lower bound. The paper’s lower bound construction (tree MDP with Erlang-distributed time-to-depth $d$) yields $\Omega(H\sqrt{SAK})$ in a regime, matching the $\sqrt K$ and $\sqrt{SA}$ scaling but leaving a substantial gap in $S$ and $H$.

The only forward-citing work provided here does not close this gap. Gao & Zhou’s later work on average-reward CTMDPs develops refined continuous-time UCRL-style tools (confidence bounds for exponential holding times, uniformization, and point-process comparisons) but targets instance-dependent $O(\log T)$ regret rather than episodic minimax rates. A separate intensity-control actor–critic paper develops martingale-based continuous-time policy-gradient machinery without regret bounds. Thus, based on the available forward citations, improving minimax episodic CTMDP regret dependence on $S,H,\lambda_{\max}$ remains open; promising directions suggested by the source include importing variance-sensitive (Bernstein) bonuses or value-function-based confidence sets (as in UCBVI-BF/EULER) while coping with random jump counts and horizon truncation.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #144 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4407408247_p0/partial_progress/144.pdf)

### 4. Source and Verification

- **Source paper:** Xuefeng Gao, Xunyu Zhou, [*Square-Root Regret Bounds for Continuous-Time Episodic Markov Decision Processes*](https://doi.org/10.1287/moor.2022.0283), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 14, Section 4 (Main Results), discussion immediately after Theorem 2.
- **Area:** reinforcement learning
- **Keywords:** `continuous-time MDPs`, `episodic reinforcement learning`, `minimax regret`, `regret lower bound`, `value iteration`, `upper confidence bounds`, `finite horizon`
- **Upstream problem record:** [W4407408247_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4407408247_p0&n=144&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Xuefeng Gao, Xunyu Zhou, [*Square-Root Regret Bounds for Continuous-Time Episodic Markov Decision Processes*](https://doi.org/10.1287/moor.2022.0283), Mathematics of Operations Research, 2025.
2. [*Logarithmic regret bounds for continuous-time average-reward Markov decision processes*](https://doi.org/10.1137/23M1584101).
3. *Reinforcement learning for intensity control: An application to choice-based network revenue management*.
