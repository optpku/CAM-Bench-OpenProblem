# Existence of interior discount factor where decreasing and increasing value trajectories coincide

This file contains the open problem on Existence of interior discount factor where decreasing and increasing value trajectories coincide.

---

<a id="problem-1"></a>

## 1. Existence of interior discount factor where decreasing and increasing value trajectories coincide

Source paper authors: Dimitry Shaiderman

### 1. Problem Background

Let $K=\{1,\dots,k\}$ be a finite state space and let $M$ be an irreducible stochastic matrix on $K$ with unique invariant distribution $\pi_M\in\Delta(K)$. In a Markovian persuasion game, the sender observes the current state $X_n\in K$ of the Markov chain in real time and sends a signal; the receiver chooses an action based on his posterior belief, yielding a stage payoff to the sender. For each discount factor $\delta\in[0,1)$ and prior $q\in\Delta(K)$, let $v_\delta(q)$ denote the sender's optimal expected $(1-\delta)$-normalized $\delta$-discounted payoff.

Let $e_\ell\in\Delta(K)$ denote the Dirac belief on state $\ell\in K$ (i.e., $e_\ell(\ell)=1$). Define two functions of the discount factor $\delta$:
$$

\Phi(\delta):=v_\delta(\pi_M),\qquad \Psi(\delta):=\sum_{\ell\in K} \pi_M(\ell)\, v_\delta(e_\ell).

$$
For irreducible $M$, the paper establishes that $\Phi$ is non-increasing in $\delta$ (when the prior is invariant) and that $\Psi$ is non-decreasing in $\delta$ (as a particular instance of an increasing weighted-average trajectory). Moreover, for each fixed $\delta$, concavity of $v_\delta(\cdot)$ implies $\Phi(\delta)\ge \Psi(\delta)$.

Define
$$

\delta_0:=\inf\{\delta\in[0,1):\Phi(\delta)=\Psi(\delta)\},

$$
with the convention that the set may be empty (equivalently, $\Phi(\delta)>\Psi(\delta)$ for all $\delta\in[0,1)$). The paper notes that if equality holds at some $\delta_0$, then both $\Phi$ and $\Psi$ must be constant on $[\delta_0,1)$; hence the qualitative possibility of an equality point $\delta_0\in(0,1)$ is a distinct regime from equality only at $\delta=1$ (in the limit) or no equality at all.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a Markovian persuasion game with finite state space $K$ and irreducible transition matrix $M$ such that the associated functions
$$

\Phi(\delta)=v_\delta(\pi_M),\qquad \Psi(\delta)=\sum_{\ell\in K} \pi_M(\ell)\, v_\delta(e_\ell)

$$
satisfy
$$

\Phi(\delta)>\Psi(\delta)\ \text{for all }\delta\in[0,\delta_0),\qquad \Phi(\delta)=\Psi(\delta)\ \text{for all }\delta\in[\delta_0,1)

$$
for some \emph{interior} point $\delta_0\in(0,1)$ (equivalently, whether equality can first occur strictly before $\delta=1$).

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #52 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7150839694_p0/solutions/52.pdf)

### 4. Source and Verification

- **Source paper:** Dimitry Shaiderman, [*On the Monotonicity and Rate of Convergence of the Markovian Persuasion Value*](https://doi.org/10.1287/moor.2023.0296), Mathematics of Operations Research, 2026.
- **Location in paper:** Section 3.2.1 ("On the Analytic Behavior of Two Trajectories"), page 12 (PDF pagination shown as 12/51).
- **Area:** dynamic persuasion
- **Keywords:** `dynamic persuasion`, `Markov chain`, `discounted value`, `monotone trajectories`, `concavification`, `invariant distribution`
- **Upstream problem record:** [W7150839694_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7150839694_p0&n=52&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Dimitry Shaiderman, [*On the Monotonicity and Rate of Convergence of the Markovian Persuasion Value*](https://doi.org/10.1287/moor.2023.0296), Mathematics of Operations Research, 2026.
