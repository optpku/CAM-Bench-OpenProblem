# Howard's Policy Iteration Complexity for Deterministic MDPs

This file contains the open problem on Howard's Policy Iteration Complexity for Deterministic MDPs.

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
