# Prove divergence of last-iterate mixed strategies without monotonicity in 2x2 games

This file contains the open problem on Prove divergence of last-iterate mixed strategies without monotonicity in 2x2 games.

---

<a id="problem-1"></a>

## 1. Prove divergence of last-iterate mixed strategies without monotonicity in 2x2 games

Source paper authors: Vidya Muthukumar, Soham R. Phade, Anant Sahai

### 1. Problem Background

Consider an infinitely repeated two-player $2\times 2$ stage game with action sets $\{0,1\}$ for each player and payoff matrices $G,H\in\mathbb{R}^{2\times 2}$. At each round $t=1,2,\dots$, player 1 chooses a mixed action $P_t\in[0,1]$ (probability of playing action 1) and then realizes a pure action $I_t\in\{0,1\}$ with $\mathbb{P}(I_t=1\mid \mathcal{F}_{t-1})=P_t$; similarly player 2 chooses $Q_t\in[0,1]$ and realizes $J_t\in\{0,1\}$ with $\mathbb{P}(J_t=1\mid \mathcal{F}_{t-1})=Q_t$. Players observe only realized actions (not the opponent's mixtures), so the history up to time $t-1$ is $\mathcal{F}_{t-1}:=\sigma\big((I_s,J_s)_{s=1}^{t-1}\big)$.

Define empirical averages of realized actions by
$$
\widehat P_t:=\frac1t\sum_{s=1}^t I_s,\qquad \widehat Q_t:=\frac1t\sum_{s=1}^t J_s.
$$
A (self-agnostic) repeated-game strategy for player 1 is a sequence of measurable maps $f_t:\{0,1\}^{t-1}\to[0,1]$ so that $P_t=f_t((J_s)_{s=1}^{t-1})$; analogously player 2 uses maps $g_t$ with $Q_t=g_t((I_s)_{s=1}^{t-1})$. A strategy is mean-based if there exist functions (still denoted) $f_t:[0,1]\to[0,1]$ such that $P_t=f_t(\widehat Q_{t-1})$, and similarly $Q_t=g_t(\widehat P_{t-1})$.

Player 1's (external) regret up to time $T$ against an opponent realization sequence $(J_t)_{t=1}^T$ is
$$
\operatorname{Reg}_1(T):=\max_{i\in\{0,1\}}\sum_{t=1}^T G(i,J_t)-\sum_{t=1}^T G(I_t,J_t).
$$
A strategy is uniformly no-regret with rate $(r,c)$ if for all $T$ and all opponent action sequences, $\mathbb{E}[\operatorname{Reg}_1(T)]\le c\,T^{r}$, where expectation is over the player’s internal randomness (and any randomness in the opponent strategy), and the optimal rate is $r=1/2$.

Assume the stage game is competitive in the sense that it has a unique completely mixed Nash equilibrium $(p^*,q^*)\in(0,1)^2$.

### 2. Open Problem

**Question 1.1.** Assume both players use mean-based repeated-game strategies $\{f_t\}_{t\ge1}$ and $\{g_t\}_{t\ge1}$ (not assumed monotone) such that each strategy is uniformly no-regret with regret rate $(1/2,c)$ for some finite $c$. Determine whether it must hold that the last-iterate mixed-strategy process $(P_t,Q_t)\in[0,1]^2$ fails to converge almost surely; i.e., prove or refute that
$$
\mathbb{P}\big(\lim_{t\to\infty}(P_t,Q_t) \text{ exists}\big)=0
$$
or equivalently that $(P_t,Q_t)$ does not converge almost surely (in particular, it cannot converge almost surely to the Nash equilibrium $(p^*,q^*)$).

### 3. Known Results

The source paper (Muthukumar–Phade–Sahai, 2022) proves that in competitive 2×2 games with a unique completely mixed Nash equilibrium $(p^*,q^*)$, last-iterate mixed strategies cannot converge almost surely when both players use strategies that are (i) uniformly no-regret with optimal $O(\sqrt{T})$ rate, (ii) mean-based (depend only on the opponent’s empirical action frequency), and (iii) monotone in that empirical frequency. The core mechanism is a “fluctuation sensitivity” property: any optimal-rate no-regret strategy must react by a constant amount to $\Theta(t^{-1/2})$ deviations in the opponent’s empirical frequency, and such deviations occur infinitely often due to sampling noise even if the opponent plays the equilibrium mixture i.i.d. This yields persistent oscillations of the last iterate.

The open problem asks whether the monotonicity assumption can be removed while retaining the same conclusion (almost-sure nonconvergence of $(P_t,Q_t)$). Among the forward citations provided, the closest partial progress is work on last-iterate convergence under uncoupled bandit feedback in zero-sum games, which establishes sharp lower bounds on achievable last-iterate convergence rates and provides matching algorithms. While it does not prove almost-sure divergence for optimal $\sqrt{T}$-regret mean-based dynamics, it reinforces the broader message that last-iterate behavior is intrinsically difficult under realization-only feedback. A separate line of work on higher-order uncoupled dynamics shows that local stabilization of completely mixed Nash equilibria is possible in continuous time with auxiliary states, indicating that convergence can be achieved in richer dynamical models, but this does not directly translate to the discrete-time, optimal no-regret, mean-based setting.

Overall, based on the limited forward-citation set provided, there is no definitive resolution of the monotonicity-free conjecture. The main gap remains to either (a) extend the fluctuation-sensitivity/oscillation argument to arbitrary (possibly nonmonotone) mean-based mappings $f_t,g_t$ with optimal regret, or (b) construct a counterexample: a pair of nonmonotone mean-based optimal no-regret strategies whose last iterates converge almost surely in some competitive 2×2 game. Promising directions include identifying weaker structural properties implied by optimal regret (e.g., sign changes or bounded variation constraints on $f_t$) that still force oscillations under $\Theta(t^{-1/2})$ empirical fluctuations, or leveraging stabilization ideas that require additional state beyond the empirical mean, thereby clarifying whether mean-basedness itself (rather than monotonicity) is the true obstruction.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #137 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4404109711_p0/partial_progress/137.pdf)

### 4. Source and Verification

- **Source paper:** Vidya Muthukumar, Soham R. Phade, Anant Sahai, [*On the Impossibility of Convergence of Mixed Strategies with Optimal No-Regret Learning*](https://doi.org/10.1287/moor.2022.0016), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 3.5 ("Beyond the monotonicity assumption: A conjecture"), page 24-25; Conjecture 3.12. Also reiterated as a main future-work question in Section 5 (Conclusion), page 29.
- **Area:** no regret learning
- **Keywords:** `no-regret learning`, `last-iterate convergence`, `repeated games`, `mean-based strategies`, `mixed nash equilibrium`, `stochastic feedback`, `2x2 competitive games`
- **Upstream problem record:** [W4404109711_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4404109711_p0&n=137&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Vidya Muthukumar, Soham R. Phade, Anant Sahai, [*On the Impossibility of Convergence of Mixed Strategies with Optimal No-Regret Learning*](https://doi.org/10.1287/moor.2022.0016), Mathematics of Operations Research, 2024.
2. *The harder path: Last iterate convergence for uncoupled learning in zero-sum games with bandit feedback*.
3. *Higher-Order Uncoupled Learning Dynamics and Nash Equilibrium*.
