# Convergence of exact Nash equilibria to mean field equilibria in ergodic Markovian games

This file contains the open problem on Convergence of exact Nash equilibria to mean field equilibria in ergodic Markovian games.

---

<a id="problem-1"></a>

## 1. Convergence of exact Nash equilibria to mean field equilibria in ergodic Markovian games

Source paper authors: Asaf Cohen, Ethan Zell

### 1. Problem Background

Consider a symmetric continuous-time $n$-player stochastic game on a finite state space $[d]=\{1,\dots,d\}$. Each player $i\in[n]$ has a controlled jump process $X^{i}_t\in[d]$ with transition rates chosen by a (possibly time-dependent) Markovian strategy. The control of player $i$ at time $t$ is a rate vector $\alpha^i(t,x)=(\alpha^i_y(t,x))_{y\in[d]}$ depending on the current full configuration $x\in[d]^n$, where for $y\neq x_i$ one has $\alpha^i_y(t,x)\in[\underline a,\overline a]$ and $\alpha^i_{x_i}(t,x)=-\sum_{y\neq x_i}\alpha^i_y(t,x)$, so that $\alpha^i(t,x)$ is a valid row of a rate matrix.

Let $f:[d]\times A_{[d]}^d\to\mathbb R$ be a running cost depending on the player’s state and her chosen rate vector, and let $F:[d]\times\mathcal P([d])\to\mathbb R$ be a mean-field interaction cost depending on the player’s state and the empirical distribution of the other players. For a Markovian strategy profile $\alpha=(\alpha^1,\dots,\alpha^n)$, define the empirical distribution of players other than $i$ by
$$
\mu_t^{\alpha,i}:=\frac{1}{n-1}\sum_{j\neq i}\delta_{X_t^{\alpha,j}}\in\mathcal P([d]).
$$
The (ergodic) cost for player $i$ under profile $\alpha$ is
$$
J^{n,i}_0(\alpha):=\limsup_{T\to\infty}\frac{1}{T}\mathbb E\Big[\int_0^T \big(f(X_t^{\alpha,i},\alpha^i(t,X_t^{\alpha})) + F(X_t^{\alpha,i},\mu_t^{\alpha,i})\big)\,dt\Big].
$$
An exact (Markovian) Nash equilibrium for the $n$-player game is a profile $\alpha^{(n)}$ such that for every $i$ and every alternative Markovian strategy $\beta^i$,
$$
J^{n,i}_0(\alpha^{(n)})\le J^{n,i}_0(\alpha^{(n),-i};\beta^i),
$$
where $(\alpha^{(n),-i};\beta^i)$ denotes the profile obtained by replacing player $i$’s strategy with $\beta^i$.

The associated mean field game (MFG) considers a representative player with state $X_t\in[d]$ controlled by rates $\alpha(t,x)$, facing a flow of measures $\mu(t)\in\mathcal P([d])$. Under suitable regularity assumptions, the MFG is characterized by an ergodic master equation for a potential $U_0:[d]\times\mathcal P([d])\to\mathbb R$ and a scalar value $\varrho\in\mathbb R$, of the form
$$
\varrho = H(x,\Delta_x U_0(\cdot,\eta)) + F(x,\eta) + \sum_{y,z\in[d]} \eta_y\, D_\eta^{yz}U_0(x,\eta)\,\gamma^*_z\big(y,\Delta_y U_0(\cdot,\eta)\big),
$$
where $H$ is the Hamiltonian defined by minimizing $f(x,a)+a\cdot p$ over admissible rates, $\gamma^*$ is the minimizing selector (optimal feedback rate), $\Delta_x$ is the finite-difference operator $\Delta_x b=(b_y-b_x)_{y\in[d]}$, and $D_\eta^{yz}$ denotes directional derivatives on the simplex.

In the ergodic Markovian setting (infinite-horizon average cost), a central conceptual question is whether exact Nash equilibria of the finite-$n$ games converge, as $n\to\infty$, to the MFG equilibrium (or to the solution of the master equation / MFG system), in an appropriate sense (e.g., convergence of equilibrium empirical measures and/or value functions).

### 2. Open Problem

**Question 1.1.** Establish a rigorous convergence result for exact Nash equilibria of the finite-state, infinite-horizon ergodic $n$-player game with Markovian (closed-loop) strategies to the corresponding mean field equilibrium as $n\to\infty$.

Concretely, given a sequence of exact Markovian Nash equilibria $\alpha^{(n)}$ for the $n$-player ergodic game, determine conditions under which one can prove that the associated empirical measure process (or its stationary distribution) converges to the MFG equilibrium measure (e.g., the stationary mean field equilibrium $\bar\mu$ or the MFG flow $\mu(t)$), and/or that the equilibrium values $\varrho_n$ converge to the MFG value $\varrho$.

### 3. Known Results

In the finite-state ergodic Markovian setting of Cohen--Zell, the paper itself constructs asymptotic Nash equilibria (of order $C/\sqrt n$) from solutions of the ergodic MFG system and from the ergodic master equation, and proves propagation of chaos for the induced $n$-player dynamics. However, it explicitly leaves open the harder question of whether *exact* Markovian Nash equilibria $\alpha^{(n)}$ of the $n$-player ergodic game must converge, as $n\to\infty$, to the MFG equilibrium (e.g. convergence of invariant empirical measures and values $\varrho_n\to\varrho$).

The most directly relevant forward-citing progress is the development of uniform-in-time quantitative propagation-of-chaos estimates for mean-field interacting jump processes under exponential stability of the limiting nonlinear Kolmogorov equation. Applied to the master-equation-derived feedback controls, these results strengthen the approximation theory by giving $O(1/n)$ weak error bounds uniformly over $t\ge 0$ for test functionals of the empirical measure. This provides a key ingredient one would likely need in any attempt to upgrade approximate equilibria results to statements about exact equilibria, but it does not yet control the selection/structure of exact Nash equilibria.

Other cited work (e.g. turnpike results in LQG $N$-player games) addresses different asymptotic regimes (long horizon rather than many players) and different information structures (open-loop rather than Markovian closed-loop). Overall, the convergence of exact Markovian Nash equilibria to the ergodic MFG equilibrium in finite-state jump games remains open, with the main obstacles tied to feedback effects and potential non-uniqueness/multiple mean-field limits in ergodic closed-loop settings.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #9 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4410233669_p0/partial_progress/9.pdf)

### 4. Source and Verification

- **Source paper:** Asaf Cohen, Ethan Zell, [*Asymptotic Nash Equilibria of Finite-State Ergodic Markovian Mean Field Games*](https://doi.org/10.1287/moor.2024.0478), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 4.1, Remark 4.6 (page 14).
- **Area:** mean field games
- **Keywords:** `mean field games`, `ergodic control`, `Markovian Nash equilibrium`, `master equation`, `finite-state Markov chains`, `mean field limit`
- **Upstream problem record:** [W4410233669_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4410233669_p0&n=9&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Asaf Cohen, Ethan Zell, [*Asymptotic Nash Equilibria of Finite-State Ergodic Markovian Mean Field Games*](https://doi.org/10.1287/moor.2024.0478), Mathematics of Operations Research, 2025.
2. [*Uniform-in-time convergence rates to a nonlinear Markov chain for mean-field interacting jump processes*](https://doi.org/10.1137/25M1737845).
3. *Turnpike properties in linear quadratic Gaussian N-player differential games*.
