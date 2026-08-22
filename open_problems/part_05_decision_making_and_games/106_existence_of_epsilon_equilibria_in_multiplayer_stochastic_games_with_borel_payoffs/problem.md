# Existence of epsilon-equilibria in multiplayer stochastic games with Borel payoffs

This file contains the open problem on Existence of epsilon-equilibria in multiplayer stochastic games with Borel payoffs.

---

<a id="problem-1"></a>

## 1. Existence of epsilon-equilibria in multiplayer stochastic games with Borel payoffs

Source paper authors: János Flesch, Eilon Solan

### 1. Problem Background

A (multiplayer) stochastic game is a tuple $\Gamma=(I,S,(A_i)_{i\in I},p,(f_i)_{i\in I})$ where:
1) $I$ is a finite nonempty set of players.
2) $S$ is a finite or countably infinite set of states.
3) For each $i\in I$, $A_i$ is a finite nonempty action set; write $A:=\prod_{i\in I} A_i$.
4) $p:S\times A\to \Delta(S)$ is a transition kernel; when the current state is $s\in S$ and action profile $a\in A$ is played, the next state $s'\in S$ is drawn according to $p(\cdot\mid s,a)$.
5) A run (infinite play) is an infinite sequence $r=(s_1,a_1,s_2,a_2,\dots)\in (S\times A)^\infty$ consistent with $p$; let $R$ denote the set of all runs. Each $f_i:R\to\mathbb{R}$ is bounded and Borel-measurable (with respect to the product topology on $(S\times A)^\infty$ and the induced Borel $\sigma$-algebra on $R$).

A (behavior) strategy for player $i$ is a mapping $\sigma_i:H\to\Delta(A_i)$, where $H$ is the set of all finite histories $(s_1,a_1,\dots,s_n)$ consistent with $p$. A strategy profile is $\sigma=(\sigma_i)_{i\in I}$. For each initial state $s\in S$ and strategy profile $\sigma$, the induced probability measure on runs is denoted $\mathbb{P}_{s,\sigma}$ and expectation $\mathbb{E}_{s,\sigma}$.

For $\varepsilon\ge 0$, a strategy profile $\sigma^*$ is an $\varepsilon$-equilibrium (Nash equilibrium with additive $\varepsilon$-slack) if for every initial state $s\in S$, every player $i\in I$, and every alternative strategy $\sigma_i$,
$$
\mathbb{E}_{s,\sigma^*}[f_i]\ge \mathbb{E}_{s,(\sigma_i,\sigma^*_{-i})}[f_i]-\varepsilon.
$$
Equivalently, no player can improve expected payoff by more than $\varepsilon$ via a unilateral deviation, from any specified initial state.

### 2. Open Problem

**Question 1.1.** Determine whether the following statement holds:

For every stochastic game $\Gamma=(I,S,(A_i)_{i\in I},p,(f_i)_{i\in I})$ with finite action sets $(A_i)_{i\in I}$, finite or countably infinite state space $S$, and bounded Borel-measurable payoff functions $(f_i)_{i\in I}$, and for every $\varepsilon>0$, there exists a strategy profile $\sigma^*$ that is an $\varepsilon$-equilibrium for every initial state $s\in S$; that is,
$$
\forall s\in S,\ \forall i\in I,\ \forall \sigma_i,\quad \mathbb{E}_{s,\sigma^*}[f_i]\ge \mathbb{E}_{s,(\sigma_i,\sigma^*_{-i})}[f_i]-\varepsilon.
$$

### 3. Known Results

The open problem in Flesch--Solan (2024) asks whether every multiplayer stochastic game with finite actions, finite or countable state space, and bounded Borel payoff functions admits an $\varepsilon$-equilibrium that works for every initial state. The paper itself highlights that while Martin/Maitra--Sudderth style “Martin functions” can be generalized to the multiplayer setting, the resulting existence theorems stop short of full Nash existence: they yield (i) subgame $\varepsilon$-maxmin strategies for each player, (ii) minmax $\varepsilon$-acceptable profiles (individual rationality in every subgame), (iii) extensive-form correlated $\varepsilon$-equilibria, and (iv) existence of an $\varepsilon$-equilibrium in some subgame (an $\varepsilon$-solvable subgame), but not an $\varepsilon$-equilibrium simultaneously for all initial states.

Forward-citing work provides partial progress in restricted models. “Equilibrium in two-player stochastic games with shift-invariant payoffs” extends the Martin-function approach to obtain $\varepsilon$-equilibria for all initial states in two-player finite-state games under the additional structural assumption of shift-invariant (prefix-independent) Borel payoffs, adapting Vieille-style reductions and using determinacy and deviation-detection ideas. On the multiplayer side, “Regularity of the minmax value and equilibria in multiplayer Blackwell games” develops regularity/approximation results for minmax values with Borel (or upper semi-analytic) payoffs and proves $\varepsilon$-equilibrium existence in multiplayer Blackwell games under strong hypotheses such as history-independent minmax values; these results suggest that controlling the history dependence of $v_i(h)$ is a key obstruction.

Several papers contribute tools rather than full existence theorems. “Identifying the deviator” supplies a general Borel-measurable deviation-identification mechanism that underpins detection-and-punishment constructions, which are needed in Flesch--Solan’s $\varepsilon$-solvable subgame result and in related equilibrium proofs for tail/shift-invariant objectives. Classical determinacy results (“Borel games” and determinacy for constrained Blackwell games) remain foundational for the zero-sum components and approximation arguments but do not by themselves resolve multiplayer Nash existence with Nature. Overall, the general statement remains open; current techniques either require two players, additional payoff structure (tail/shift invariance), or extra regularity assumptions ensuring stable minmax behavior across subgames.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #86 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4385873460_p0/partial_progress/86.pdf)

### 4. Source and Verification

- **Source paper:** János Flesch, Eilon Solan, [*Stochastic Games with General Payoff Functions*](https://doi.org/10.1287/moor.2023.1385), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 2, Introduction (end of item [4] discussion)
- **Area:** stochastic games
- **Keywords:** `stochastic games`, `borel measurable payoffs`, `epsilon equilibrium`, `nash equilibrium`, `countable state space`, `existence theorem`
- **Upstream problem record:** [W4385873460_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4385873460_p0&n=86&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. János Flesch, Eilon Solan, [*Stochastic Games with General Payoff Functions*](https://doi.org/10.1287/moor.2023.1385), Mathematics of Operations Research, 2023.
2. *Equilibrium in two-player stochastic games with shift-invariant payoffs*.
3. [*Regularity of the minmax value and equilibria in multiplayer Blackwell games*](https://doi.org/10.1007/s11856-024-2679-9).
4. [*Identifying the deviator*](https://doi.org/10.1214/24-AAP2077.short).
5. *Borel games*.
6. *The Determinacy of Blackwell Games with a Constraint Function*.
