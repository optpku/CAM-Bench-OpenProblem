# Existence of equilibrium with rich firm using control and poor firm using strategy

This file contains the open problem on Existence of equilibrium with rich firm using control and poor firm using strategy.

---

<a id="problem-1"></a>

## 1. Existence of equilibrium with rich firm using control and poor firm using strategy

Source paper authors: Tiziano De Angelis, Fabien Gensbittel, Stéphane Villeneuve

### 1. Problem Background

Consider the two-player continuous-time stochastic game of dividend distribution described as follows.

1) Probability space and noise: Let $(B_t)_{t\ge 0}$ be a standard one-dimensional Brownian motion on a filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge 0},\mathbb P)$.

2) Parameters: drifts $\mu_0>0$ (duopoly) and $\hat\mu>\mu_0$ (monopoly), volatility $\sigma>0$, discount rate $r>0$.

3) Controls (dividends): Each player chooses a cumulative dividend process, modeled as a singular control: a right-continuous, nondecreasing, $(\mathcal F_t)$-adapted process with $L_{0-}=0$ for Player 1 and $D_{0-}=0$ for Player 2. Admissibility requires that jumps cannot exceed current cash reserves.

4) Cash-reserve dynamics (duopoly phase): Starting from initial endowments $(x,y)\in[0,\infty)^2$, the controlled reserves are
$$

X_t = x + \mu_0 t + \sigma B_t - L_t,\qquad Y_t = y + \mu_0 t + \sigma B_t - D_t.

$$
Default times are $\gamma_X=\inf\{t\ge 0: X_t\le 0\}$ and $\gamma_Y=\inf\{t\ge 0: Y_t\le 0\}$.

5) Monopoly continuation value: If one firm defaults first, the survivor becomes a monopolist with drift $\hat\mu$ and continuation value $\hat v$, where for initial reserve $z\ge 0$
$$

\hat v(z) := \sup_{\xi}\,\mathbb E\Big[\int_{[0,\gamma_C]} e^{-rt}\,d\xi_t\Big],\qquad C_t = z + \hat\mu t + \sigma B_t - \xi_t,\ \gamma_C=\inf\{t\ge 0: C_t\le 0\}.

$$

6) Payoffs: For a control pair $(L,D)$, Player 1 and 2 payoffs are
$$

J^1_{x,y}(L,D)=\mathbb E\Big[\int_{[0,\gamma_X\wedge\gamma_Y]} e^{-rt}\,dL_t + \mathbf 1_{\{\gamma_Y<\gamma_X\}}e^{-r\gamma_Y}\,\hat v(X_{\gamma_Y})\Big],

$$
$$

J^2_{x,y}(D,L)=\mathbb E\Big[\int_{[0,\gamma_X\wedge\gamma_Y]} e^{-rt}\,dD_t + \mathbf 1_{\{\gamma_X<\gamma_Y\}}e^{-r\gamma_X}\,\hat v(Y_{\gamma_X})\Big].

$$

7) Strategies: A (pure) feedback strategy for a player is a non-anticipative mapping that assigns a dividend path as a functional of the observed Brownian path and the opponent’s past dividend path. The paper also allows randomised strategies (Aumann-style) by adding an independent randomisation variable $u\in[0,1]$. A strategy profile must be control-inducing (i.e., the induced fixed point defining the pair of controls exists and is unique on every finite horizon).

8) Nash equilibrium: A pair of (possibly randomised) strategies is a Nash equilibrium if neither player can improve their payoff by unilateral deviation within the admissible class of randomised strategies.

The paper constructs equilibria where (in the asymmetric initial-endowment case $y>x$) the poorer firm uses a pure control and the richer firm uses a pure strategy. It explicitly leaves open the existence of equilibria with the roles reversed (richer firm using a control; poorer firm using a strategy).

### 2. Open Problem

**Question 1.1.** Assume asymmetric initial endowments with $y>x\ge 0$. Determine whether there exists a Nash equilibrium (in the sense of admissible randomised strategies described above) for which Player 1 (the poorer firm with initial reserve $x$) uses a strategy (pure or randomised) and Player 2 (the richer firm with initial reserve $y$) uses a control (pure or randomised), i.e., an equilibrium whose action profile is of the form
1) Player 1: $\Xi_1$ is an admissible strategy mapping that may depend on the opponent’s dividend path (and possibly on a randomisation variable), and
2) Player 2: $\Xi_2$ is an admissible control viewed as a strategy that does not depend on the opponent’s dividend path,
with $(\Xi_1,\Xi_2)$ being control-inducing and satisfying the Nash inequalities against all unilateral deviations in the full class of admissible randomised strategies.

If such equilibria exist, characterize conditions/structure ensuring existence (e.g., for all parameter choices and initial states as in the model).

### 3. Known Results

In De Angelis–Gensbittel–Villeneuve (2025), the asymmetric-endowment equilibrium for

a) poorer firm using a pure control (the classical reflection-at-$a_0$ dividend policy $\xi^0$) and

b) richer firm using a pure feedback strategy $\Psi^*$ that depends on the opponent’s dividend path via the induced state $X^*$,

is constructed by solving a coupled free-boundary/variational system in $(x,z)$-coordinates with $z=y-x$. The paper explicitly leaves open the reversed-role configuration: an equilibrium in which the richer firm commits to a control (i.e., a strategy independent of the opponent’s dividend path) while the poorer firm uses a (possibly randomized) strategy reacting to the richer firm’s dividends.

The only forward-citing work provided, “Splitting infinity: a de Finetti game with state-dependent profit rates and singular control for diffusions,” develops verification and construction methods for Markovian Nash equilibria in a different class of de Finetti-type games where both players exert singular control on a single common diffusion. While its techniques (verification for singular-control equilibria, handling reflection/local-time type controls) are conceptually adjacent, it does not engage with the two-dimensional asymmetric dividend-competition structure, the duopoly-to-monopoly switching payoff $\hat v$, or the strategy/control asymmetry central to the open problem.

Given the current forward-citation evidence, there is no published resolution of the role-reversal equilibrium question. Progress likely requires either (i) a new fixed-point/verification framework for equilibria mixing open-loop singular controls with feedback strategies in two-dimensional state spaces with absorption and regime-switching continuation values, or (ii) a counterexample showing nonexistence under the paper’s admissibility/control-inducing requirements. At present, the problem should be regarded as open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #30 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414449781_p0/partial_progress/30.pdf)

### 4. Source and Verification

- **Source paper:** Tiziano De Angelis, Fabien Gensbittel, Stéphane Villeneuve, [*Nash Equilibria for Dividend Distribution with Competition*](https://doi.org/10.1287/moor.2023.0374), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 23, Remark 4.9 (end of Section 4, immediately after Theorem 4.1 proof).
- **Area:** stochastic differential game
- **Keywords:** `stochastic games`, `singular control`, `nash equilibrium`, `feedback strategies`, `dividend distribution`, `free boundary problems`
- **Upstream problem record:** [W4414449781_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414449781_p0&n=30&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Tiziano De Angelis, Fabien Gensbittel, Stéphane Villeneuve, [*Nash Equilibria for Dividend Distribution with Competition*](https://doi.org/10.1287/moor.2023.0374), Mathematics of Operations Research, 2025.
2. *Splitting infinity: a de Finetti game with state-dependent profit rates and singular control for diffusions*.
