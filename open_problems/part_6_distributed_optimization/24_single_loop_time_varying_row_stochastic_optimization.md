# Single-Loop Optimization over Time-Varying Row-Stochastic Digraphs

This file contains the open problem on single-loop decentralized optimization over time-varying row-stochastic directed networks.

---

<a id="problem-1"></a>

## 1. Single-Loop Exact Decentralized Optimization over TVBNs

Contributors: Kun Yuan

### 1. Problem Background

Consider decentralized optimization over $n$ agents:
$$
\min_x f(x)=\frac{1}{n}\sum_{i=1}^n f_i(x),
$$
where every local objective $f_i$ is $L$-smooth and nonconvex. In a time-varying broadcast network (TVBN), an agent need not know its out-degree and can therefore form only row-stochastic mixing matrices. Exact optimization is difficult in this setting because the limiting distribution of a product of time-varying row-stochastic matrices depends on future graph realizations, so the usual stationary bias-correction mechanisms are unavailable.

Liang, Song, and Yuan introduced the first decentralized optimization algorithm that achieves exact convergence using only time-varying row-stochastic matrices. At the lower level, Pull-with-Memory (PULM) alternates row-stochastic mixing and local adjustment to reach average consensus at an exponential rate. At the upper level, PULM-DGD applies decentralized gradient descent on top of PULM and reaches a stationary point of a smooth nonconvex objective at an $O(\log T/T)$ rate, where $T$ is the number of communication rounds.

PULM-DGD has a double-loop structure: the outer loop performs gradient-descent iterations, while every optimization step invokes a multi-step PULM consensus procedure in an inner loop. The task is to determine whether consensus and optimization can instead be integrated into a single iteration loop while retaining exact convergence and the same convergence order.

### 2. Setting and Conventions

- Each $f_i$ is $L$-smooth and nonconvex.
- Agents use deterministic full gradients.
- The directed graph sequence $\{\mathcal G_t\}$ is time-varying, and every agent can construct only time-varying row-stochastic mixing matrices because out-degree information is unavailable.
- The connectivity assumptions must be the standard time-varying assumptions used in arXiv:2512.24483; no stronger time-varying condition should be introduced.
- The base algorithm is not restricted to DGD. Gradient tracking or another more advanced framework may be used to design the single-loop method.

The target stationarity measure is
$$
\frac{1}{T}\sum_{t=0}^{T-1}\left\|\nabla f(\bar x_t)\right\|^2,
$$
and the single-loop convergence rate must be no worse than
$$
O\!\left(\frac{\log T}{T}\right).
$$

### 3. Open Problems

**Question 1.1. Single-loop exact convergence.** Does there exist a single-loop decentralized algorithm that uses only time-varying row-stochastic mixing, converges exactly to a stationary point of the global objective, and satisfies
$$
\frac{1}{T}\sum_{t=0}^{T-1}\left\|\nabla f(\bar x_t)\right\|^2
=O\!\left(\frac{\log T}{T}\right)
$$
under assumptions no stronger than those used for PULM-DGD?

A complete positive result should specify the algorithm, prove exact convergence, and state how the constants in the rate depend on the relevant problem and network parameters.

**Question 1.2. Counterexample and necessity of a double loop.** If the positive result is false, can one construct a counterexample proving that single-loop DGD or single-loop gradient tracking cannot converge at the $O(\log T/T)$ rate under the stated assumptions, thereby showing that a double-loop structure is necessary for these algorithmic frameworks?

### 4. Technical Objectives and Deliverables

1. **Algorithm design and experiments (primary objective).** Design a single-loop method based on DGD, gradient tracking, or another framework. Implement it and use numerical experiments to verify exact convergence over time-varying row-stochastic topologies.
2. **Positive theoretical result (expected outcome).** Prove that the proposed single-loop method converges exactly under time-varying row-stochastic topology at a rate no worse than $O(\log T/T)$. Provide a complete proof and the dependence of all rate constants on the relevant parameters.
3. **Negative result (falsification alternative).** If the positive claim does not hold, construct a counterexample proving that single-loop DGD or single-loop gradient tracking cannot attain the $O(\log T/T)$ rate, and hence that the double-loop structure is necessary within the corresponding algorithmic framework.

### 5. Known Result

L. Liang, Y. Song, and K. Yuan, *Decentralized Optimization over Time-Varying Row-Stochastic Digraphs*, arXiv:2512.24483, 2025, introduced PULM and PULM-DGD. PULM achieves exponentially convergent average consensus using time-varying row-stochastic matrices, and PULM-DGD reaches an $O(\log T/T)$ stationarity rate for smooth nonconvex objectives.

### 6. References

1. L. Liang, Y. Song, and K. Yuan, **Decentralized Optimization over Time-Varying Row-Stochastic Digraphs**, arXiv:2512.24483, 2025.
