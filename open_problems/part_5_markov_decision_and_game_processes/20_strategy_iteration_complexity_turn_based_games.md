# Strategy Iteration Complexity for Deterministic Turn-Based Zero-Sum Games

This file contains the open problem on Strategy Iteration Complexity for Deterministic Turn-Based Zero-Sum Games.

---

<a id="problem-1"></a>

## 1. Strategy Iteration Complexity for Deterministic Turn-Based Zero-Sum Games

Contributors: Yinyu Ye

### 1. Problem Background

A **Markov Game Process (MGP)** extends an MDP to two players: states are partitioned into $I^-$ (minimizer) and $I^+$ (maximizer), and the joint optimization is
$$\min_{x_j\in A_i,\,i\in I^-}\max_{x_j\in A_i,\,i\in I^+} \sum_{j=1}^n c_j x_j \quad \text{s.t.} \quad \sum_{j=1}^n (e_{ij}-\gamma p_{ij})x_j = 1,\quad x_j\ge 0.$$

A **strategy** specifies one action per state for the corresponding player. The **simple strategy-iteration method** is a best-response method: the *leader* performs a local policy-improvement step (analogous to a simplex pivot), and then the *follower* computes a best-response strategy given the leader's current strategy.

A **deterministic turn-based zero-sum game** is an MGP in which all transition probabilities $p_{ij}$ are $0$ or $1$.

For discounted MDPs, Post and Ye proved a strongly polynomial simplex bound for deterministic instances independent of $\gamma$. The analogous question for strategy iteration in deterministic zero-sum MGPs is open.

### 2. Open Problem

**Question 1.1.** Is the simple strategy-iteration method polynomial, or strongly polynomial, for deterministic turn-based two-person zero-sum Markov Game Processes, analogous to the Post–Ye simplex bounds for deterministic MDPs?

### 3. Known Results

#### 3.1 Strategy iteration for discounted turn-based games (fixed discount)

**Source:** T. D. Hansen, P. B. Miltersen, and U. Zwick, *Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor*, Journal of the ACM, 60(1):1–16, 2013.

For discounted turn-based two-person zero-sum Markov games, strategy iteration terminates in $\frac{n}{1-\gamma}\log\!\left(\frac{m}{1-\gamma}\right)$ iterations when the discount factor is fixed. No analogous discount-independent bound exists.

#### 3.2 Strongly polynomial simplex bound for deterministic MDPs

**Source:** I. Post and Y. Ye, *The simplex method is strongly polynomial for deterministic Markov decision processes*, Mathematics of Operations Research, 40(4):859–868, 2015.

For deterministic MDPs (single-player), the simplex method terminates in $O(m^3 n^2 \log^2 m)$ iterations (uniform discount) or $O(m^5 n^3 \log^2 m)$ iterations (non-uniform discount) regardless of the discount factors. The extension of this result to two-player deterministic zero-sum games is open.

### 4. References

1. T. D. Hansen, P. B. Miltersen, and U. Zwick, **Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor**, Journal of the ACM, 60(1):1–16, 2013.
2. I. Post and Y. Ye, **The simplex method is strongly polynomial for deterministic Markov decision processes**, Mathematics of Operations Research, 40(4):859–868, 2015.

---
