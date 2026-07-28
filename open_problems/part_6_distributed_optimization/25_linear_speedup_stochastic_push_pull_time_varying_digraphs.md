# Linear Speedup of Stochastic Push-Pull over Time-Varying Digraphs

This file contains the open problem on linear speedup for stochastic Push-Pull methods over time-varying directed networks.

---

<a id="problem-1"></a>

## 1. Stochastic Push-Pull with Time-Varying Directed Communication

Contributors: Kun Yuan

### 1. Problem Background

Consider decentralized stochastic optimization
$$
\min_x f(x)=\frac{1}{n}\sum_{i=1}^n f_i(x),
\qquad
f_i(x)=\mathbb E_{\xi_i}[F_i(x;\xi_i)].
$$
Push-Pull, also called the AB method, combines row-stochastic mixing for the primal variables with column-stochastic mixing for gradient tracking. This avoids the need for doubly stochastic weights and is particularly suited to directed networks.

The deterministic theory covers time-varying directed graphs: Push-DIGing and time-varying AB/Push-Pull methods obtain geometric convergence for smooth strongly convex objectives under appropriate connectivity conditions. Accelerated variants are also available. Separately, stochastic Push-Pull has been shown to achieve linear speedup over static strongly connected digraphs.

Thus, convergence results are available for deterministic problems over static or time-varying topologies and for stochastic problems over static topologies. The missing case is linear speedup for stochastic optimization over time-varying directed graphs. This task aims to fill that gap.

### 2. Setting and Target Rate

- Each $f_i$ is $L$-smooth and nonconvex.
- The stochastic gradients are unbiased and have bounded variance:
  $$
  \mathbb E\!\left[\nabla F_i(x;\xi_i)\right]=\nabla f_i(x),
  \qquad
  \mathbb E\!\left\|\nabla F_i(x;\xi_i)-\nabla f_i(x)\right\|^2\le \sigma^2.
  $$
- Communication takes place over a time-varying directed graph sequence $\{\mathcal G_t\}$.
- Agents use time-varying row-stochastic matrices $R_t$ and column-stochastic matrices $C_t$.
- Connectivity must follow the standard assumptions in the cited time-varying Push-Pull literature, such as strong connectivity at every time or its relaxation to $B$-strong/joint connectivity. No stronger time-varying condition should be introduced.

The desired guarantee is
$$
\frac{1}{T}\sum_{t=0}^{T-1}
\mathbb E\left\|\nabla f(\bar x_t)\right\|^2
\le
O\!\left(\frac{\sigma}{\sqrt{nT}}\right)
+\text{higher-order transient terms in } \frac{1}{T}.
$$
The leading term implies $T=O(1/(n\varepsilon^2))$ iterations to reach an $\varepsilon$-stationary point, matching an $n$-fold improvement over single-node SGD.

### 3. Open Problems

**Question 1.1. Linear speedup under time variation.** Under standard time-varying directed-connectivity assumptions, does stochastic Push-Pull achieve an $O(\sigma/\sqrt{nT})$ leading stationarity rate for smooth nonconvex objectives?

A complete positive result should give a full chain of lemmas and explicitly state how the constants depend on the number of agents $n$, noise level $\sigma$, network time variation, and transient time.

**Question 1.2. Counterexample if linear speedup fails.** If the guarantee in Question 1.1 cannot be established, can one construct a family of time-varying directed graphs and objective functions proving that linear speedup fails under the standard assumptions, through rate deterioration or disappearance of the speedup?

### 4. Technical Objectives and Deliverables

The required output is a paper-level complete proof together with numerical experiments, with one of the following two theoretical conclusions:

1. **Positive result (expected outcome).** Prove that stochastic Push-Pull over time-varying directed graphs achieves the $O(1/\sqrt{nT})$ linear-speedup guarantee. Provide the complete lemma chain and make explicit the dependence of the constants on $n$, $\sigma$, network time variation, and transient time.
2. **Negative result (falsification alternative).** Construct a family of time-varying directed graphs and objective functions proving that, under the standard time-varying assumptions, linear speedup does not hold because the rate deteriorates or the speedup disappears.

**Numerical experiments.** Use both synthetic nonconvex problems and real tasks, such as nonconvex-regularized logistic regression or shallow neural networks. Verify the $n$-fold speedup, study how transient time varies with the degree of network time variation, and compare against stochastic Push-Pull on static graphs (arXiv:2506.18075) and deterministic Push-Pull on time-varying graphs (OMS 2025).

### 5. Known Results

1. Push-DIGing combines push-sum with gradient tracking and converges geometrically for strongly convex objectives over time-varying directed graphs.
2. Time-varying AB/Push-Pull methods using row- and column-stochastic matrices converge linearly for smooth strongly convex objectives. Later analysis gives explicit one-step contraction factors and stepsize bounds in terms of graph properties.
3. Accelerated AB/Push-Pull variants improve rates for deterministic optimization over time-varying directed networks.
4. Liang, Luo, and Yuan proved linear speedup for stochastic Push-Pull over arbitrary static strongly connected digraphs. Extending this result to time-varying digraphs remains open.

### 6. References

1. A. Nedić, A. Olshevsky, and W. Shi, **Achieving Geometric Convergence for Distributed Optimization over Time-Varying Graphs**, arXiv:1607.03218, 2016.
2. F. Saadatniaki, R. Xin, and U. A. Khan, **Decentralized Optimization over Time-Varying Directed Graphs with Row and Column-Stochastic Matrices**, *IEEE Transactions on Automatic Control*, 65(11):4769--4780, 2020.
3. A. Nedić, D. T. A. Nguyen, and D. T. Nguyen, **AB/Push-Pull Method for Distributed Optimization in Time-Varying Directed Networks**, *Optimization Methods and Software*, 40(5):1044--1071, 2025; arXiv:2209.06974.
4. D. T. A. Nguyen, D. T. Nguyen, and A. Nedić, **Accelerated AB/Push-Pull Methods for Distributed Optimization over Time-Varying Directed Networks**, *IEEE Transactions on Control of Network Systems*, 11(3):1395--1407, 2024.
5. L. Liang, G. Luo, and K. Yuan, **On the Linear Speedup of the Push-Pull Method for Decentralized Optimization over Digraphs**, arXiv:2506.18075, 2025.
