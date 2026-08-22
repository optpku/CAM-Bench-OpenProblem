# Convergence guarantees for numerical algorithms for time-inconsistent equilibrium transport problems

This file contains the open problem on Convergence guarantees for numerical algorithms for time-inconsistent equilibrium transport problems.

---

<a id="problem-1"></a>

## 1. Convergence guarantees for numerical algorithms for time-inconsistent equilibrium transport problems

Source paper authors: Erhan Bayraktar, Bingyan Han

### 1. Problem Background

Fix a finite discrete-time horizon $T\in\mathbb{N}$. Let $\mu$ and $\nu$ be probability measures on path spaces $X_{1:T}=X_1\times\cdots\times X_T$ and $Y_{1:T}=Y_1\times\cdots\times Y_T$, respectively, where each $X_t, Y_t$ is a Polish space (or finite in the fully discrete case). A (bi)causal transport plan $\pi$ is a coupling of $\mu$ and $\nu$ whose conditional kernels are non-anticipative in both directions, and the feasible set is denoted $\Pi_{\mathrm{bc}}(\mu,\nu)$.

A time-inconsistent transport objective is a cost functional $J$ for which the usual dynamic programming principle fails, e.g. due to:
1) non-separable regularization by a general $f$-divergence,
2) nonlinear objectives of the form $G(\int h\,d\pi)$, or
3) state-dependent preferences.

To model consistent behavior under time inconsistency, an equilibrium (subgame-perfect Nash) bicausal transport plan $\pi^*\in\Pi_{\mathrm{bc}}(\mu,\nu)$ is defined via one-step deviations: writing $\pi^*$ by its successive regular conditional kernels, at each time $t\in\{0,\dots,T-1\}$ and for $\pi^*$-a.e. realized history $(x_{1:t},y_{1:t})$, the kernel used at time $t$ minimizes the resulting continuation cost given that future kernels are fixed to those of $\pi^*$.

Numerical computation of such equilibria typically proceeds by iterating some algorithm (e.g. iterative schemes on the extended dynamic programming recursion, fixed-point iterations on best responses, or regularized/parametric approximations), producing a sequence $(\pi^{(n)})_{n\ge 1}$ of candidate bicausal plans (or their kernels/parameters). A convergence guarantee would specify a topology or metric on feasible plans/kernels (e.g. weak convergence or a Wasserstein metric in continuous settings) and a notion of algorithmic iterate convergence to an equilibrium plan (or to an equilibrium value function).

### 2. Open Problem

**Question 1.1.** Design and analyze numerical algorithms that compute an equilibrium transport plan $\pi^*$ for bicausal optimal transport problems with time-inconsistent costs (as defined by the subgame-perfect one-step deviation condition), and prove that the algorithmic iterates $\pi^{(n)}$ converge (in an appropriate topology/metric on transport plans or kernels) to an equilibrium transport $\pi^*$ under verifiable assumptions on $\mu,\nu$ and the objective functional $J$.

### 3. Known Results

The open problem posed in Bayraktar–Han concerns designing numerical schemes for computing subgame-perfect equilibrium bicausal transport plans under time-inconsistent objectives (e.g. nonseparable f-divergence regularization, nonlinear functionals $G(\int h\,d\pi)$, or state-dependent preferences), together with rigorous convergence guarantees of iterates $\pi^{(n)}\to\pi^*$ in a suitable topology (weak/adapted weak/Wasserstein on kernels). The source paper develops existence/uniqueness theory for equilibria via an extended dynamic programming recursion (semi-discrete Markovian case using refined Polish topologies and measurable selection; continuous non-Markovian case via parametric couplings and Berge’s maximum theorem), but explicitly leaves convergence of numerical algorithms open (Remark 2.1).

Among the provided forward citations, the only analyzed citing work is a mean-field equilibrium model for two-sided matching characterized by a coupled HJB–Fokker–Planck system. While it shares the equilibrium-as-fixed-point flavor and uses a fixed-point numerical iteration in experiments, it does not treat bicausal transport on path space nor time-inconsistent transport costs, and it does not provide convergence proofs for numerical iterates. Consequently, it offers at most methodological inspiration (e.g. monotonicity/contractivity conditions for coupled forward–backward systems) rather than progress on convergence guarantees for equilibrium transport algorithms.

Overall, based on the available citation evidence, the convergence-guarantee problem for numerical algorithms computing equilibrium bicausal transport plans with time-inconsistent costs remains open. Promising directions include: (i) identifying settings where the extended DP operator is a contraction in an adapted Wasserstein-type metric, yielding convergence of value iteration; (ii) proving convergence of best-response/fictitious-play style iterations under strict quasiconvexity/monotonicity assumptions akin to those ensuring uniqueness in the parametric case; and (iii) leveraging recent quantitative convergence results for quadratically regularized linear programs to control approximation error when equilibrium problems are solved via regularized surrogates.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #15 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411449955_p0/partial_progress/15.pdf)

### 4. Source and Verification

- **Source paper:** Erhan Bayraktar, Bingyan Han, [*Equilibrium Transport with Time-Inconsistent Costs*](https://doi.org/10.1287/moor.2023.0323), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 2.1.1, Remark 2.1 (page 7 of 56 in the provided parsed text)
- **Area:** bicausal optimal transport
- **Keywords:** `bicausal optimal transport`, `time inconsistency`, `equilibrium transport`, `numerical algorithms`, `convergence analysis`, `f-divergence regularization`
- **Upstream problem record:** [W4411449955_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411449955_p0&n=15&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Erhan Bayraktar, Bingyan Han, [*Equilibrium Transport with Time-Inconsistent Costs*](https://doi.org/10.1287/moor.2023.0323), Mathematics of Operations Research, 2025.
2. *Optimal Matching Strategies in Two-sided Markets: A Mean Field Approach*.
