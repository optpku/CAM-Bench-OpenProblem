# Polynomial Algorithm for General Discounted MDPs with Variable Discount Factor

This file contains the open problem on Polynomial Algorithm for General Discounted MDPs with Variable Discount Factor.

---

<a id="problem-1"></a>

## 1. Polynomial Algorithm for General Discounted MDPs with Variable Discount Factor

Contributors: Yinyu Ye

### 1. Problem Background

When the discount factor $\gamma$ is treated as a fixed constant, the simplex and policy-iteration methods are strongly polynomial for discounted MDPs (Ye 2011). However, when $\gamma$ is part of the numerical input (i.e., its encoding length $\log\frac{1}{1-\gamma}$ enters the input size), existing results give bounds that grow as $\frac{1}{1-\gamma}$, which can be exponential in the input size.

A **polynomial-time algorithm** in the standard sense would have complexity bounded by a polynomial in the total input encoding length, including $\log\frac{1}{1-\gamma}$. Interior-point methods applied to the LP formulation achieve this, but only in terms of bit-complexity, not in terms of the number of arithmetic operations on exact data.

The question asks whether there is a combinatorial or structural algorithm (analogous to the simplex or policy iteration framework) that is polynomial-time even when $\gamma$ is part of the numerical input.

### 2. Open Problem

**Question 1.1.** Is there a polynomial-time algorithm for solving general discounted MDPs in which the discount factor $\gamma$ is part of the numerical input?

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
