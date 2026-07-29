# Prove covariance inequality between number in service and work in M GI n queues

This file contains the open problem on Prove covariance inequality between number in service and work in M GI n queues.

---

<a id="problem-1"></a>

## 1. Prove covariance inequality between number in service and work in M GI n queues

Source paper authors: Yuan Li, David A. Goldberg

### 1. Problem Background

Consider a first-come-first-served (FCFS) many-server queue with Poisson arrivals and general i.i.d. service times.

1) Model. An M/GI/n queue has:
1) arrivals given by a Poisson process of rate $\lambda>0$;
2) $n\in\mathbb{N}$ identical servers;
3) i.i.d. service times $S$ with $0<E[S]<\infty$ and $E[S^2]<\infty$;
4) FCFS discipline, no abandonments.

Let $\mu_S = 1/E[S]$ denote the service rate of a single server, and define the traffic intensity
$$
\rho := \frac{\lambda}{n\mu_S} = \frac{\lambda E[S]}{n},\qquad 0<\rho<1.
$$
Assume the system is stable and admits a steady state.

2) Steady-state quantities. Let $\mathrm{Num}_{\mathrm{service}}(\infty)$ be the steady-state number of busy servers (number in service). Let $\mathrm{Work}_{\mathrm{service}}(\infty)$ be the steady-state total remaining workload in service, i.e. the sum of the residual service times of all jobs currently in service (with idle servers contributing $0$).

Equivalently, if $R_1(\infty),\dots,R_n(\infty)$ are the (random) residual service times in steady state on each server (with $R_j(\infty)=0$ when server $j$ is idle), then
$$
\mathrm{Num}_{\mathrm{service}}(\infty)=\sum_{j=1}^n \mathbf{1}\{R_j(\infty)>0\},\qquad \mathrm{Work}_{\mathrm{service}}(\infty)=\sum_{j=1}^n R_j(\infty).
$$

3) Covariance interpretation. The inequality
$$
E[\mathrm{Num}_{\mathrm{service}}(\infty)]\,E[\mathrm{Work}_{\mathrm{service}}(\infty)] \le E[\mathrm{Num}_{\mathrm{service}}(\infty)\,\mathrm{Work}_{\mathrm{service}}(\infty)]
$$
is equivalent to $\mathrm{Cov}(\mathrm{Num}_{\mathrm{service}}(\infty),\mathrm{Work}_{\mathrm{service}}(\infty))\ge 0$, i.e. nonnegative correlation between the number of busy servers and the total residual workload in service.

### 2. Open Problem

**Question 1.1.** Establish conditions under which, for an FCFS $\mathrm{M}/\mathrm{GI}/n$ queue with $E[S^2]<\infty$ in steady state,
$$
E[\mathrm{Num}_{\mathrm{service}}(\infty)]\,E[\mathrm{Work}_{\mathrm{service}}(\infty)] \le E[\mathrm{Num}_{\mathrm{service}}(\infty)\,\mathrm{Work}_{\mathrm{service}}(\infty)].
$$
Equivalently, prove that
$$
\mathrm{Cov}(\mathrm{Num}_{\mathrm{service}}(\infty),\mathrm{Work}_{\mathrm{service}}(\infty))\ge 0
$$
for this class of queues (assuming the relevant steady-state distributions exist).

### 3. Known Results

In Li--Goldberg (arXiv:1706.04628v3), the covariance inequality $\mathrm{Cov}(\mathrm{Num}_{\mathrm{service}}(\infty),\mathrm{Work}_{\mathrm{service}}(\infty))\ge 0$ is posed as Conjecture 1 because it would remove the negative correction term in their drift identity (Theorem 9) and yield the clean bound $\mathbb E[L(\infty)]\le \tfrac12\mathbb E[(S\mu_S)^2]\,\rho/(1-\rho)$ for $M/GI/n$. The conjecture concerns the steady-state joint distribution of the vector of residual service times $(R_1(\infty),\dots,R_n(\infty))$, specifically the mixed moment $\mathbb E[\sum_j \mathbf 1\{R_j>0\}\,\sum_j R_j]$, and asks for a positive-association type statement under FCFS with Poisson arrivals and $\mathbb E[S^2]<\infty$.

The limited forward-citation evidence provided does not contain a proof or counterexample. The most relevant forward-citing work, “A new -scaling bound for multiserver queues via a leave-one-out technique,” develops a BAR-based decomposition for steady-state means in $GI/GI/n$ and introduces leave-one-out couplings to control boundary terms that are explicitly interpreted as covariance-like corrections between indicators of boundary events (e.g. emptiness) and residual service quantities. While this does not establish a sign for $\mathrm{Cov}(\mathrm{Num}_{\mathrm{service}},\mathrm{Work}_{\mathrm{service}})$, it suggests a plausible strategy: represent $\mathbb E[\mathrm{Num}_{\mathrm{service}}\,\mathrm{Work}_{\mathrm{service}}]$ via a BAR/Poisson equation and attempt to show that the relevant boundary term is nonnegative (or asymptotically negligible) using conditional independence/monotonicity arguments.

“Novel Lower Bounds on M/G/k Scheduling” is methodologically related through its BAR/drift analysis of workload-type processes and explicit moment calculations in surrogate models, but it does not engage with FCFS many-server residual-service vectors or positive correlation properties. Overall, based on the provided citation set, the conjectured covariance inequality appears to remain open; progress seems to be primarily methodological (BAR decompositions and couplings) rather than a direct resolution. Promising directions include exploiting association/positive dependence results for FCFS queues (e.g. via Palm calculus and monotone couplings) to show that conditioning on more busy servers stochastically increases the residual workload in service, or proving the inequality under additional structural assumptions on $S$ (e.g. decreasing hazard rate, log-convex tails) and then extending by approximation.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #116 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4393423947_p0/partial_progress/116.pdf)

### 4. Source and Verification

- **Source paper:** Yuan Li, David A. Goldberg, [*Simple and Explicit Bounds for Multiserver Queues with 1/1−<i>ρ</i> Scaling*](https://doi.org/10.1287/moor.2022.0131), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 22, Section 3 ("Towards bounds with no large prefactors"), immediately after Theorem 9 (Conjecture 1).
- **Area:** queueing theory
- **Keywords:** `many-server queues`, `M/GI/n queue`, `steady state`, `covariance inequality`, `residual workload`, `association`
- **Upstream problem record:** [W4393423947_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4393423947_p0&n=116&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Yuan Li, David A. Goldberg, [*Simple and Explicit Bounds for Multiserver Queues with 1/1−<i>ρ</i> Scaling*](https://doi.org/10.1287/moor.2022.0131), Mathematics of Operations Research, 2024.
2. *A new -scaling bound for multiserver queues via a leave-one-out technique*.
3. *Novel Lower Bounds on M/G/k Scheduling*.
