# Characterize and compute limits of operator Sinkhorn algorithm for nonscalable operators

This file contains the open problem on Characterize and compute limits of operator Sinkhorn algorithm for nonscalable operators.

---

<a id="problem-1"></a>

## 1. Characterize and compute limits of operator Sinkhorn algorithm for nonscalable operators

Source paper authors: Koyo Hayashi, Hiroshi Hirai, K. Sakabe

### 1. Problem Background

Let $\Phi$ be a completely positive linear operator acting on complex matrices (equivalently, a linear map $\Phi: \mathbb{C}^{n\times n}\to\mathbb{C}^{n\times n}$ that maps positive semidefinite matrices to positive semidefinite matrices). Operator scaling asks for invertible matrices $L,R$ such that the scaled operator $X\mapsto L\,\Phi(RXR^*)\,L^*$ satisfies prescribed left and right marginals (the operator analogue of making a nonnegative matrix doubly stochastic). The operator Sinkhorn algorithm (also called the Gurvits algorithm) is an iterative normalization procedure that alternately rescales the operator to correct its left and right marginals, generalizing the classical Sinkhorn algorithm for matrix scaling.

In the nonscalable case (i.e., when no choice of $L,R$ can make $\Phi$ doubly stochastic, even approximately), an analogue of a Hall-type certificate exists: a nontrivial subspace $W\subsetneq \mathbb{C}^n$ that is "shrunk" by $\Phi$ (often called a shrunk subspace). Existence of such a shrunk subspace certifies nonscalability, in the same way that a Hall blocker certifies absence of a perfect matching for bipartite graphs.

The cited paper discusses extending matrix-scaling-based certificate-finding results to operator scaling, and notes that doing so may require understanding the limiting behavior (or limit objects/accumulation structure) of the operator Sinkhorn iterates in the nonscalable case.

### 2. Open Problem

**Question 1.1.** Determine (i.e., characterize and provide a method to compute) the limits or accumulation-point structure of the iterates produced by the operator Sinkhorn algorithm when applied to a completely positive operator $\Phi$ that is not (approximately) scalable to doubly stochastic form.

### 3. Known Results

In the matrix case, Hayashi–Hirai–Sakabe analyze nonscalable Sinkhorn iterates by reinterpreting the algorithm as alternating minimization for KL-divergence between the row- and column-marginal affine slices. When the target marginals are infeasible, the iterates converge to an oscillating pair $(M^*,N^*)$ minimizing the KL objective, and the limit marginals $p^*=N^*\mathbf 1$ admit an explicit block-constant form governed by a refined Dulmage–Mendelsohn (DM) decomposition / principal partition of a polymatroid. This yields a concrete “limit object” (a canonical flag/partition) from which Hall blockers can be read off by sorting the limiting marginals.

For operator scaling, the forward-citation literature provides substantial partial progress toward an analogous description, but not a complete characterization of the accumulation set of the standard operator Sinkhorn (Gurvits) iteration in the nonscalable regime. The paper “Gradient descent for unbounded convex functions on Hadamard manifolds and its applications to scaling problems” develops a general recession-function theory for geodesically convex objectives on Hadamard manifolds and applies it to the operator-scaling Kempf–Ness potential. In the nonscalable case, it proves that gradient flow/descent diverges but converges in cone topology to a unique boundary direction characterized by a generalized DM-flag and the minimum-norm point of the moment polytope; this direction canonically encodes shrunk-subspace certificates. Complementarily, “A scaling characterization of nc-rank via unbounded gradient flow” gives a duality between minimal achievable scaling residuals and the recession function $f^\infty$, identifying $f^\infty$ with a Lovász-extension-type formula over flags/subspaces, again linking limit directions at infinity to shrunk subspaces.

On the algorithmic side, “Shrunk subspaces via operator Sinkhorn iteration” shows that one can deterministically compute the (unique) minimum shrunk subspace in polynomial time using a Sinkhorn-style iteration for a modified (majorization/perturbed) capacity, together with rounding from approximate independent sets. This effectively computes a canonical certificate associated with nonscalability, but it bypasses a full dynamical description of the original operator Sinkhorn iterates’ accumulation points. Overall, the problem of characterizing and computing the actual limit/accumulation structure of the unmodified operator Sinkhorn algorithm for nonscalable completely positive operators appears to remain open; the most promising direction is to transfer the recession-function/DM-flag machinery from continuous-time gradient flows to the discrete alternating-normalization dynamics, aiming for an operator analogue of the matrix-case oscillatory limit pair and its block-triangular structure.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #95 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4387738269_p0/partial_progress/95.pdf)

### 4. Source and Verification

- **Source paper:** Koyo Hayashi, Hiroshi Hirai, K. Sakabe, [*Finding Hall Blockers by Matrix Scaling*](https://doi.org/10.1287/moor.2022.0198), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 3, Introduction (discussion of operator scaling extension and problem raised in prior work)
- **Area:** operator scaling
- **Keywords:** `operator scaling`, `operator Sinkhorn algorithm`, `completely positive operators`, `nonscalable case`, `limits of iterates`, `shrunk subspaces`, `certificates of nonscalability`
- **Upstream problem record:** [W4387738269_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4387738269_p0&n=95&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Koyo Hayashi, Hiroshi Hirai, K. Sakabe, [*Finding Hall Blockers by Matrix Scaling*](https://doi.org/10.1287/moor.2022.0198), Mathematics of Operations Research, 2023.
2. [*Gradient descent for unbounded convex functions on Hadamard manifolds and its applications to scaling problems*](https://doi.org/10.1287/moor.2025.0939).
3. [*Shrunk subspaces via operator Sinkhorn iteration*](https://doi.org/10.1137/1.9781611977554.ch62).
4. *A scaling characterization of nc-rank via unbounded gradient flow*.
5. *行列スケーリングから非正曲率空間上の測地的凸最適化へ*.
