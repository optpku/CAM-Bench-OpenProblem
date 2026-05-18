# Algorithmic Markov Decision and Game Processes

This file collects open problems in the algorithmic theory of Markov Decision Processes (MDPs) and Markov Game Processes (MGPs). The central themes are the worst-case complexity of policy iteration and strategy iteration methods, and the existence of polynomial or strongly polynomial algorithms for discounted MDPs and MGPs.

---

<a id="problem-1"></a>

## 1. Howard's Policy Iteration Complexity for Deterministic MDPs

Contributors: Yinyu Ye

### 1. Problem Background

A discounted MDP is given by a finite state set $S=\{1,\dots,m\}$, action sets $A_i$ for each state $i$, one-step costs $c_j$, transition probabilities $p_{ij}$, and a discount factor $0<\gamma<1$. The MDP can be written as a linear program:
$$\min_x \sum_{j=1}^n c_j x_j \quad \text{s.t.} \quad \sum_{j=1}^n (e_{ij}-\gamma p_{ij})x_j = 1,\ i=1,\dots,m,\quad x_j\ge 0,$$
where $|A|=n$ and $e_{ij}=1$ if $j\in A_i$, else $0$.

A **policy** $\pi:S\to A$ chooses one action per state. **Howard's policy-iteration method** alternates between:

1. *Policy evaluation:* solve $y_i^{\pi^k}=c_{\pi^k(i)}+\gamma p_{\pi^k(i)}^T y^{\pi^k}$ for all $i$;
2. *Policy improvement:* set $\pi^{k+1}(i)\in\arg\min_{j\in A_i}\{c_j+\gamma p_j^T y^{\pi^k}\}$ for all $i$ simultaneously.

A **deterministic MDP** is one in which every transition probability $p_{ij}$ is either $0$ or $1$.

For deterministic MDPs with a uniform discount factor, Post and Ye showed that the **simplex method** terminates in $O(m^3 n^2 \log^2 m)$ iterations regardless of $\gamma$. However, no analogous strongly polynomial bound is known for Howard's policy-iteration method.

### 2. Open Problem

**Question 1.1.** Is Howard's policy-iteration method strongly polynomial for deterministic discounted MDPs?

That is, does the number of policy-improvement steps of Howard's method, applied to a deterministic discounted MDP, admit a bound that is polynomial in $m$ and $n$ but independent of the discount factor $\gamma$ and the numerical data?

### 3. Known Results

#### 3.1 Simplex and policy iteration for discounted MDPs (fixed discount)

**Source:** Y. Ye, *The simplex and policy-iteration methods are strongly polynomial for the Markov decision problem with a fixed discount rate*, Mathematics of Operations Research, 36(4):593–603, 2011.

For discounted MDPs with a fixed discount factor, both the classical simplex method with Dantzig's pivoting rule and Howard's policy-iteration method terminate in at most
$$\frac{m(n-m)}{1-\gamma}\log\!\left(\frac{m^2}{1-\gamma}\right)$$
iterations, with $O(mn)$ operations per iteration. For a fixed $\gamma$, this is a strongly polynomial bound.

#### 3.2 Improved policy-iteration bound (fixed discount)

**Source:** T. D. Hansen, P. B. Miltersen, and U. Zwick, *Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor*, Journal of the ACM, 60(1):1–16, 2013.

The policy-iteration method terminates in at most $\frac{n}{1-\gamma}\log\!\left(\frac{m}{1-\gamma}\right)$ iterations, with $O(m^2 n)$ operations per iteration.

#### 3.3 Simplex bound for deterministic MDPs (discount-factor independent)

**Source:** I. Post and Y. Ye, *The simplex method is strongly polynomial for deterministic Markov decision processes*, Mathematics of Operations Research, 40(4):859–868, 2015.

For deterministic MDPs with a uniform discount factor, the simplex method terminates in $O(m^3 n^2 \log^2 m)$ iterations regardless of the discount factor. For non-uniform discount factors, the bound is $O(m^5 n^3 \log^2 m)$. No analogous result is known for the policy-iteration method.

### 4. References

1. Y. Ye, **The simplex and policy-iteration methods are strongly polynomial for the Markov decision problem with a fixed discount rate**, Mathematics of Operations Research, 36(4):593–603, 2011.
2. T. D. Hansen, P. B. Miltersen, and U. Zwick, **Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor**, Journal of the ACM, 60(1):1–16, 2013.
3. I. Post and Y. Ye, **The simplex method is strongly polynomial for deterministic Markov decision processes**, Mathematics of Operations Research, 40(4):859–868, 2015.

---

<a id="problem-2"></a>

## 2. Strategy Iteration Complexity for Deterministic Turn-Based Zero-Sum Games

Contributors: Yinyu Ye

### 1. Problem Background

A **Markov Game Process (MGP)** extends an MDP to two players: states are partitioned into $I^-$ (minimizer) and $I^+$ (maximizer), and the joint optimization is
$$\min_{x_j\in A_i,\,i\in I^-}\max_{x_j\in A_i,\,i\in I^+} \sum_{j=1}^n c_j x_j \quad \text{s.t.} \quad \sum_{j=1}^n (e_{ij}-\gamma p_{ij})x_j = 1,\quad x_j\ge 0.$$

A **strategy** specifies one action per state for the corresponding player. The **simple strategy-iteration method** is a best-response method: the *leader* performs a local policy-improvement step (analogous to a simplex pivot), and then the *follower* computes a best-response strategy given the leader's current strategy.

A **deterministic turn-based zero-sum game** is an MGP in which all transition probabilities $p_{ij}$ are $0$ or $1$.

For discounted MDPs, Post and Ye proved a strongly polynomial simplex bound for deterministic instances independent of $\gamma$. The analogous question for strategy iteration in deterministic zero-sum MGPs is open.

### 2. Open Problem

**Question 2.1.** Is the simple strategy-iteration method polynomial, or strongly polynomial, for deterministic turn-based two-person zero-sum Markov Game Processes, analogous to the Post–Ye simplex bounds for deterministic MDPs?

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

<a id="problem-3"></a>

## 3. Interior-Point Method for Discounted MGPs with Logarithmic Discount Dependence

Contributors: Yinyu Ye

### 1. Problem Background

For discounted MDPs (single player), Ye gave a combinatorial interior-point method that finds all optimal policies. Each of the at most $n$ elimination steps uses $O\!\left(n^{1/2}(\log\frac{1}{1-\gamma}+\log n)\right)$ predictor-corrector iterations, each requiring $O(n^{2.5})$ arithmetic operations. The overall arithmetic complexity involves a factor of $\log\frac{1}{1-\gamma}$.

For the two-player Markov Game Process, it is natural to ask whether an interior-point method for the *leader* (the minimizer or maximizer) achieves a similar logarithmic dependence on the discount factor.

### 2. Open Problem

**Question 3.1.** Is there a polynomial-time method for discounted Markov Game Processes using an interior-point method by the leader, whose dependence on the discount factor is only logarithmic in $\frac{1}{1-\gamma}$?

### 3. Known Results

#### 3.1 Combinatorial interior-point method for MDP

**Source:** Y. Ye, *A new complexity result on solving the Markov decision problem*, Mathematics of Operations Research, 30(3):733–749, 2005.

There exists a combinatorial interior-point method that identifies and eliminates at least one action in each step. Each elimination step requires $O\!\left(n^{1/2}(\log\frac{1}{1-\gamma}+\log n)\right)$ predictor-corrector iterations, with $O(n^{2.5})$ arithmetic operations per iteration. The total arithmetic complexity over all $O(n^2 m^2)$ steps involves a $\log\frac{1}{1-\gamma}$ factor. No analogous result with logarithmic discount dependence is known for MGPs.

### 4. References

1. Y. Ye, **A new complexity result on solving the Markov decision problem**, Mathematics of Operations Research, 30(3):733–749, 2005.
2. T. D. Hansen, P. B. Miltersen, and U. Zwick, **Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor**, Journal of the ACM, 60(1):1–16, 2013.

---

<a id="problem-4"></a>

## 4. Strongly Polynomial Algorithm for General Discounted MDPs

Contributors: Yinyu Ye

### 1. Problem Background

A **strongly polynomial algorithm** for an LP or combinatorial optimization problem is one whose number of arithmetic operations is bounded by a polynomial in the number of variables and constraints alone, with no dependence on the magnitude of the numerical input data. For discounted MDPs, the discount factor $\gamma$ is part of the input. The known strongly polynomial bounds for the simplex and policy-iteration methods (Ye 2011, Hansen–Miltersen–Zwick 2013) require $\gamma$ to be fixed; for deterministic MDPs, Post–Ye 2015 removes the $\gamma$ dependence but only in the deterministic case.

The question is whether a strongly polynomial algorithm exists for general (stochastic) discounted MDPs, regardless of the value of $\gamma$.

### 2. Open Problem

**Question 4.1.** Is there a strongly polynomial-time algorithm for general discounted MDPs, regardless of the value of the discount factor $\gamma$?

### 3. Known Results

#### 3.1 Strongly polynomial bounds for fixed discount factor

**Source:** Y. Ye, *The simplex and policy-iteration methods are strongly polynomial for the Markov decision problem with a fixed discount rate*, Mathematics of Operations Research, 36(4):593–603, 2011; T. D. Hansen, P. B. Miltersen, and U. Zwick, Journal of the ACM, 60(1):1–16, 2013.

For fixed $\gamma$, the simplex and policy-iteration methods are strongly polynomial: termination in $\frac{m(n-m)}{1-\gamma}\log\!\left(\frac{m^2}{1-\gamma}\right)$ or $\frac{n}{1-\gamma}\log\!\left(\frac{m}{1-\gamma}\right)$ iterations. These bounds depend on $\gamma$ and are not strongly polynomial when $\gamma$ is part of the input.

#### 3.2 Strongly polynomial result for deterministic MDPs

**Source:** I. Post and Y. Ye, *The simplex method is strongly polynomial for deterministic Markov decision processes*, Mathematics of Operations Research, 40(4):859–868, 2015.

For deterministic MDPs, the simplex terminates in $O(m^3 n^2 \log^2 m)$ steps, independent of $\gamma$. This does not extend to general stochastic MDPs.

#### 3.3 Interior-point polynomial-time algorithms

Since the MDP can be written as a linear program, it can be solved in polynomial time by interior-point methods (Khachiyan 1979 and subsequent work), but the complexity depends on the input encoding length, which includes $\log\frac{1}{1-\gamma}$ and other numerical parameters.

### 4. References

1. Y. Ye, **The simplex and policy-iteration methods are strongly polynomial for the Markov decision problem with a fixed discount rate**, Mathematics of Operations Research, 36(4):593–603, 2011.
2. I. Post and Y. Ye, **The simplex method is strongly polynomial for deterministic Markov decision processes**, Mathematics of Operations Research, 40(4):859–868, 2015.
3. L. G. Khachiyan, **A polynomial algorithm in linear programming**, Soviet Mathematics Doklady, 20:191–194, 1979.

---

<a id="problem-5"></a>

## 5. Polynomial Algorithm for General Discounted MDPs with Variable Discount Factor

Contributors: Yinyu Ye

### 1. Problem Background

When the discount factor $\gamma$ is treated as a fixed constant, the simplex and policy-iteration methods are strongly polynomial for discounted MDPs (Ye 2011). However, when $\gamma$ is part of the numerical input (i.e., its encoding length $\log\frac{1}{1-\gamma}$ enters the input size), existing results give bounds that grow as $\frac{1}{1-\gamma}$, which can be exponential in the input size.

A **polynomial-time algorithm** in the standard sense would have complexity bounded by a polynomial in the total input encoding length, including $\log\frac{1}{1-\gamma}$. Interior-point methods applied to the LP formulation achieve this, but only in terms of bit-complexity, not in terms of the number of arithmetic operations on exact data.

The question asks whether there is a combinatorial or structural algorithm (analogous to the simplex or policy iteration framework) that is polynomial-time even when $\gamma$ is part of the numerical input.

### 2. Open Problem

**Question 5.1.** Is there a polynomial-time algorithm for solving general discounted MDPs in which the discount factor $\gamma$ is part of the numerical input?

That is, does there exist an algorithm whose number of iterations (or arithmetic operations on exact data) is polynomial in $m$, $n$, and $\log\frac{1}{1-\gamma}$?

### 3. Known Results

#### 3.1 Interior-point polynomial-time bound (input-length sense)

The MDP LP can be solved in polynomial time (in the bit-complexity sense) by the ellipsoid method (Khachiyan 1979) or interior-point methods, since it is a linear program of size polynomial in $m$, $n$, and the bit-lengths of the input data.

#### 3.2 Sample value-iteration complexity

**Source:** A. Sidford, M. Wang, X. Wu, L. F. Yang, and Y. Ye, *Near-optimal time and sample complexities for solving Markov decision processes with a generative model*, NeurIPS 2018.

When transition probabilities $p_j$ are known, an $\epsilon$-optimal policy can be computed in time $O\!\left((mn+\frac{n}{(1-\gamma)^3})\log\frac{1}{\epsilon}\log\frac{1}{\delta}\right)$. In the sampling setting, $O\!\left(\frac{n}{(1-\gamma)^4\epsilon^2}\log\frac{1}{\delta}\right)$ samples suffice, while the known lower bound is $\Omega\!\left(\frac{n}{(1-\gamma)^3\epsilon^2}\right)$.

#### 3.3 Strongly polynomial for fixed discount factor

**Source:** Y. Ye, Mathematics of Operations Research, 36(4):593–603, 2011.

For fixed $\gamma$, the simplex and policy-iteration methods are strongly polynomial; when $\gamma\to 1$, the iteration count grows as $\Theta(\frac{1}{1-\gamma})$, which is not polynomial in $\log\frac{1}{1-\gamma}$.

### 4. References

1. L. G. Khachiyan, **A polynomial algorithm in linear programming**, Soviet Mathematics Doklady, 20:191–194, 1979.
2. Y. Ye, **The simplex and policy-iteration methods are strongly polynomial for the Markov decision problem with a fixed discount rate**, Mathematics of Operations Research, 36(4):593–603, 2011.
3. A. Sidford, M. Wang, X. Wu, L. F. Yang, and Y. Ye, **Near-optimal time and sample complexities for solving Markov decision processes with a generative model**, NeurIPS 2018.
