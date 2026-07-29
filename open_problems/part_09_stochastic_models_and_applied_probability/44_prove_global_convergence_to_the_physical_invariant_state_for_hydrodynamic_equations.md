# Prove global convergence to the physical invariant state for hydrodynamic equations

This file contains the open problem on Prove global convergence to the physical invariant state for hydrodynamic equations.

---

<a id="problem-1"></a>

## 1. Prove global convergence to the physical invariant state for hydrodynamic equations

Source paper authors: Pooja Agarwal, Kavita Ramanan

### 1. Problem Background

Consider the SQ(d) randomized load-balancing model with a fixed integer choice parameter $d\ge 2$. Jobs arrive to a system of $N$ parallel single-server FCFS queues with total arrival rate $\lambda N$, where $\lambda\in(0,1)$. Each arriving job samples $d$ servers uniformly at random (with replacement) and joins the shortest among the sampled queues (ties broken uniformly). Service times are i.i.d. with cumulative distribution function $G$, density $g$, and finite mean normalized to 1. Let $\bar G(x)=1-G(x)$, let $L:=\sup\{x\ge 0: \bar G(x)>0\}\in(0,\infty]$ be the right endpoint of the support, and let the hazard rate be $h(x)=g(x)/\bar G(x)$ for $x\in[0,L)$.

In the hydrodynamic (mean-field) limit $N\to\infty$, the system state at time $t\ge 0$ is described by a countable collection of finite measures $\nu(t)=(\nu_\ell(t))_{\ell\in\mathbb N}$, where $\nu_\ell(t)$ is a sub-probability measure on $[0,L)$ that places mass at the service ages of jobs that are currently in service at queues of length at least $\ell$. The state space $\mathcal S$ consists of sequences of sub-probability measures $(\mu_\ell)_{\ell\in\mathbb N}$ such that $\langle f,\mu_\ell\rangle\ge \langle f,\mu_{\ell+1}\rangle$ for every nonnegative bounded continuous $f$, where $\langle f,\mu\rangle:=\int f\,d\mu$.

Define for $x\ge y\ge 0$
$$
P_d(x,y):=\frac{x^d-y^d}{x-y}=\sum_{m=0}^{d-1} x^m y^{d-1-m}.
$$
A trajectory $\nu(\cdot)\in C_{\mathcal S}[0,\infty)$ solves the hydrodynamic equations with arrival rate $\lambda$ and initial condition $\nu(0)\in\mathcal S$ if it satisfies the coupled measure-valued integral equations (informally: mass balance plus transport/aging) given in the paper’s Definition 2.1; these involve the cumulative departure processes
$$
D_\ell(t):=\int_0^t \langle h,\nu_\ell(s)\rangle\,ds
$$
and the routing measures $\eta_\ell(t)$ defined from the queue-length tail fractions $\langle 1,\nu_\ell(t)\rangle$ via $P_d$.

An invariant state is a fixed point $\nu^*\in\mathcal S$ such that the constant trajectory $\nu(t)\equiv \nu^*$ solves the hydrodynamic equations. Let $s^*_\ell:=\langle 1,\nu^*_\ell\rangle$ denote the invariant queue-length tail distribution (fraction of queues of length at least $\ell$). A \"physical\" invariant state additionally satisfies $\lim_{\ell\to\infty} s^*_\ell=0$ (equivalently, has finite mean queue length in this tail sense).

For certain parameter regimes (e.g., $d=2$ under the paper’s conditions), the paper establishes existence and/or uniqueness of the physical invariant state $\nu^*$ and provides a characterization of $\nu^*$ via fixed-point relations for associated densities $r_\ell$ and the tail sequence $(s^*_\ell)$.

### 2. Open Problem

**Question 1.1.** Fix $\lambda\in(0,1)$, $d\ge 2$, and a service-time distribution $G$ satisfying the regularity conditions under which the hydrodynamic equations are well-posed and admit a (unique) physical invariant state $\nu^*\in\mathcal S$ with $\lim_{\ell\to\infty} \langle 1,\nu^*_\ell\rangle=0$.

Establish that, for a suitably large class of initial conditions $\nu(0)\in\mathcal S$ (as stated in the paper), the solution $\nu(t)$ to the hydrodynamic equations converges as $t\to\infty$ to $\nu^*$ (in an appropriate topology on $\mathcal S$), i.e.
$$
\nu(t)\xrightarrow[t\to\infty]{}\nu^*.
$$
Equivalently, prove global convergence to equilibrium (asymptotic stability) of the hydrodynamic equations toward the physical invariant state.

### 3. Known Results

The hydrodynamic limit for SQ(d) with general service distribution $G$ yields a countable family of coupled measure-valued transport equations for $\nu_\ell(t)$, with nonlinear boundary terms $\eta_\ell(t)$ determined by the tail fractions $s_\ell(t)=\langle 1,\nu_\ell(t)\rangle$ through $P_d$. Agarwal–Ramanan characterize physical invariant states $\nu^*$ via densities $r_\ell$ satisfying the convolution-type recursion (their (3.3)–(3.4)), and prove uniqueness for $d=2$ (Proposition 4.2). However, they leave open the global convergence problem: showing that for a broad class of initial conditions, the unique solution $\nu(t)$ converges as $t\to\infty$ to the physical invariant state $\nu^*$.

Among forward citations provided, Atar–Kang–Kaspi–Ramanan develop general techniques to prove large-time convergence to equilibrium for a different but structurally related class of nonlinearly coupled measure-valued fluid equations (GI/G/N+G queues). Their approach supplies two potential blueprints for SQ(d): a renewal-equation reformulation enabling asymptotic estimates under monotone (e.g., decreasing) hazard rates, and a Lyapunov/relative-entropy method yielding strong convergence when the hazard rate is bounded away from 0 and $\infty$. While these results do not directly address the SQ(d) coupling through $P_d$ and the infinite-dimensional hierarchy in $\ell$, they suggest that establishing a suitable Lyapunov functional or renewal-type representation adapted to the SQ(d) boundary terms could be a promising route.

At present, with the limited forward-citation set supplied, there is no paper that proves global convergence for the SQ(d) hydrodynamic equations with general $G$. The problem therefore remains open; the main gap is to control the nonlinear, cross-level coupling $\eta_\ell(t)$ and to propagate tail/compactness estimates uniformly in time so as to identify the $\omega$-limit set and rule out non-physical invariant states (e.g., the trivial $s_\ell\equiv 1$ fixed point). Promising directions include constructing a monotone dynamical system comparison for the tail sequence $s_\ell(t)$, developing a contractive metric on $\mathcal S$ compatible with the transport structure, or adapting the relative-entropy Lyapunov strategy to the SQ(d) hierarchy by exploiting the explicit invariant-state densities $r_\ell$ and the hazard-rate structure $h=g/\bar G$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #17 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411787576_p0/partial_progress/17.pdf)

### 4. Source and Verification

- **Source paper:** Pooja Agarwal, Kavita Ramanan, [*Invariant States of Hydrodynamic Limits of Randomized Load-Balancing Networks*](https://doi.org/10.1287/moor.2020.0282), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 1.1 (Introduction), page 3.
- **Area:** mean field queueing
- **Keywords:** `load balancing`, `hydrodynamic limit`, `invariant state`, `mean-field limit`, `measure-valued equations`, `convergence to equilibrium`
- **Upstream problem record:** [W4411787576_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411787576_p0&n=17&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Pooja Agarwal, Kavita Ramanan, [*Invariant States of Hydrodynamic Limits of Randomized Load-Balancing Networks*](https://doi.org/10.1287/moor.2020.0282), Mathematics of Operations Research, 2025.
2. [*Long-time limit of nonlinearly coupled measure-valued equations that model many-server queues with reneging*](https://doi.org/10.1137/21M1433125).
