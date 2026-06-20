# Strongly Polynomial Algorithm for General Discounted MDPs

This file contains the open problem on Strongly Polynomial Algorithm for General Discounted MDPs.

---

<a id="problem-1"></a>

## 1. Strongly Polynomial Algorithm for General Discounted MDPs

Contributors: Yinyu Ye

### 1. Problem Background

A **strongly polynomial algorithm** for an LP or combinatorial optimization problem is one whose number of arithmetic operations is bounded by a polynomial in the number of variables and constraints alone, with no dependence on the magnitude of the numerical input data. For discounted MDPs, the discount factor $\gamma$ is part of the input. The known strongly polynomial bounds for the simplex and policy-iteration methods (Ye 2011, Hansen–Miltersen–Zwick 2013) require $\gamma$ to be fixed; for deterministic MDPs, Post–Ye 2015 removes the $\gamma$ dependence but only in the deterministic case.

The question is whether a strongly polynomial algorithm exists for general (stochastic) discounted MDPs, regardless of the value of $\gamma$.

### 2. Open Problem

**Question 1.1.** Is there a strongly polynomial-time algorithm for general discounted MDPs, regardless of the value of the discount factor $\gamma$?

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
