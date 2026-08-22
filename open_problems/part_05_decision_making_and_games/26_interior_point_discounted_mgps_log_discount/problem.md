# Interior-Point Method for Discounted MGPs with Logarithmic Discount Dependence

This file contains the open problem on Interior-Point Method for Discounted MGPs with Logarithmic Discount Dependence.

---

<a id="problem-1"></a>

## 1. Interior-Point Method for Discounted MGPs with Logarithmic Discount Dependence

Contributors: Yinyu Ye

### 1. Problem Background

For discounted MDPs (single player), Ye gave a combinatorial interior-point method that finds all optimal policies. Each of the at most $n$ elimination steps uses $O\!\left(n^{1/2}(\log\frac{1}{1-\gamma}+\log n)\right)$ predictor-corrector iterations, each requiring $O(n^{2.5})$ arithmetic operations. The overall arithmetic complexity involves a factor of $\log\frac{1}{1-\gamma}$.

For the two-player Markov Game Process, it is natural to ask whether an interior-point method for the *leader* (the minimizer or maximizer) achieves a similar logarithmic dependence on the discount factor.

### 2. Open Problem

**Question 1.1.** Is there a polynomial-time method for discounted Markov Game Processes using an interior-point method by the leader, whose dependence on the discount factor is only logarithmic in $\frac{1}{1-\gamma}$?

### 3. Known Results

#### 3.1 Combinatorial interior-point method for MDP

**Source:** Y. Ye, *A new complexity result on solving the Markov decision problem*, Mathematics of Operations Research, 30(3):733–749, 2005.

There exists a combinatorial interior-point method that identifies and eliminates at least one action in each step. Each elimination step requires $O\!\left(n^{1/2}(\log\frac{1}{1-\gamma}+\log n)\right)$ predictor-corrector iterations, with $O(n^{2.5})$ arithmetic operations per iteration. The total arithmetic complexity over all $O(n^2 m^2)$ steps involves a $\log\frac{1}{1-\gamma}$ factor. No analogous result with logarithmic discount dependence is known for MGPs.

### 4. References

1. Y. Ye, **A new complexity result on solving the Markov decision problem**, Mathematics of Operations Research, 30(3):733–749, 2005.
2. T. D. Hansen, P. B. Miltersen, and U. Zwick, **Strategy iteration is strongly polynomial for 2-player turn-based stochastic games with a constant discount factor**, Journal of the ACM, 60(1):1–16, 2013.

---
