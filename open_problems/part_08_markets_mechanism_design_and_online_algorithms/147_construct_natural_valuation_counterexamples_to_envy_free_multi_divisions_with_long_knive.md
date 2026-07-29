# Construct natural valuation counterexamples to envy-free multi-divisions with long knives

This file contains the open problem on Construct natural valuation counterexamples to envy-free multi-divisions with long knives.

---

<a id="problem-1"></a>

## 1. Construct natural valuation counterexamples to envy-free multi-divisions with long knives

Source paper authors: Ayumi Igarashi, Frédéric Meunier

### 1. Problem Background

A multi-layered cake consists of $m$ layers, each identified with the unit interval $[0,1]$. A \emph{layered piece} is an $m$-tuple $L=(L_\ell)_{\ell\in[m]}$ where each $L_\ell\subseteq[0,1]$ is a (finite union of) disjoint closed subintervals in layer $\ell$. A \emph{multi-division} into $q$ pieces is a $q$-tuple $A=(A_1,\dots,A_q)$ of layered pieces whose interiors are pairwise disjoint and whose union covers the entire $m$-layered cake.

A layered piece $L$ is \emph{contiguous} if each $L_\ell$ is a single interval. It is \emph{non-overlapping} if for every two distinct layers $\ell\neq \ell'$, the interiors of $L_\ell$ and $L_{\ell'}$ are disjoint as subsets of $[0,1]$ (equivalently, they intersect only on a finite set of points). A multi-division is \emph{feasible} if each $A_j$ is non-overlapping, and it is \emph{contiguous} if each $A_j$ is contiguous.

A common restricted class of feasible contiguous multi-divisions is given by $q-1$ \emph{long knives}: one chooses cut positions $0=t_0\le t_1\le\cdots\le t_{q-1}\le t_q=1$ and cuts \emph{every} layer at these positions, producing $q$ intervals $[t_{r-1},t_r]$ in each layer. A feasible contiguous multi-division using $q-1$ long knives then assigns to each bundle $A_j$ exactly one of these $q$ intervals from each layer, in such a way that within any fixed bundle $A_j$, the chosen intervals from different layers have disjoint interiors in $[0,1]$.

Each agent $i\in[n]$ has a \emph{valuation function} $v_i$ that assigns a real value $v_i(L)$ to every layered piece $L$. (The paper discusses both general choice functions and valuations; here we focus on valuations as the paper’s open question does.) Envy-freeness for a multi-division $A=(A_1,\dots,A_q)$ means there exists a surjective assignment $\pi:[n]\to[q]$ such that every agent weakly prefers her assigned piece to any other, e.g. under valuations $v_i(A_{\pi(i)})\ge \max_{j\in[q]} v_i(A_j)$ for all $i\in[n]$.

### 2. Open Problem

**Question 1.1.** Determine whether there exist \emph{natural} valuation functions $v_1,\dots,v_n$ (in the sense intended by the paper) for which \emph{no} envy-free multi-division exists that is both feasible and contiguous and is obtained using $q-1$ long knives; equivalently, either:

1) construct an explicit instance (specified by $m,n,q$ and valuations $v_i$) with this nonexistence property, or

2) prove that no such counterexample exists for a suitably broad and natural class of valuation functions.

The paper does not formalize what counts as “natural”; the task is to resolve existence of such counterexamples under an appropriate natural valuation-function model.

### 3. Known Results

The source paper proves a strong positive result for the long-knives model under very general (choice-function) preferences: when $q$ is a prime power and $m\le q\le n$, there exists an envy-free feasible contiguous multi-division obtainable with $q-1$ long knives (Theorem 1). The proof encodes long-knife feasible divisions and assignments in the chessboard complex $\Delta_{2q-1,q}$ and applies Volovikov’s equivariant Borsuk–Ulam type theorem, together with Gale’s averaging trick and a flow/rounding lemma, to force a point where the aggregated preference vector hits the barycenter $(1/q,\dots,1/q)$. For $m=2,q=3$ the paper also gives an existence theorem with one short and one long knife under monotone/hungry preferences and an FPTAS for $\varepsilon$-envy-free solutions under monotone Lipschitz valuations.

The open problem highlighted in the concluding remarks concerns the gap between the choice-function impossibility for non–prime-power $q$ and the valuation-function setting: known counterexamples for choice functions (when $q$ is not a prime power) do not automatically yield counterexamples for additive/continuous/Lipschitz valuations. At present, the forward-citation set provided does not contain a paper resolving this gap. Adjacent work on multi-layered cakes establishes proportional (rather than envy-free) feasible contiguous allocations under additive absolutely-continuous valuations, often using cutting primitives beyond long knives (e.g., a pair-of-knives model), suggesting that long-knife restrictions may be the true bottleneck. On the algorithmic side, reductions from approximate envy-free cake cutting with monotone preferences to approximate root-finding for monotone switching functions indicate a possible route to efficient approximation schemes if the multilayer long-knife constraints can be expressed in a suitably monotone fixed-point/root framework.

Overall, with the information available here, the problem remains open: no explicit ‘natural valuation’ counterexample to envy-free long-knife multi-divisions is identified, nor is there a theorem guaranteeing existence for broad valuation classes when $q$ is not a prime power. Promising directions include (i) attempting to adapt non–prime-power obstruction constructions from choice functions to additive absolutely-continuous valuations while preserving feasibility/non-overlap across layers, and (ii) formulating the long-knife envy-free conditions as a continuous (possibly piecewise-linear) equivariant map problem or as a monotone root-finding instance to leverage algorithmic/topological machinery beyond Volovikov’s prime-power regime.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #133 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4402128674_p0/partial_progress/133.pdf)

### 4. Source and Verification

- **Source paper:** Ayumi Igarashi, Frédéric Meunier, [*Envy-Free Division of Multilayered Cakes*](https://doi.org/10.1287/moor.2022.0350), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 25, Section 6 (Concluding remarks), paragraph beginning “Limitation of the approach based on Volovikov’s theorem.”
- **Area:** fair division
- **Keywords:** `fair division`, `envy-free cake cutting`, `multi-layered cake`, `long knives`, `valuation functions`, `topological methods`
- **Upstream problem record:** [W4402128674_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4402128674_p0&n=133&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ayumi Igarashi, Frédéric Meunier, [*Envy-Free Division of Multilayered Cakes*](https://doi.org/10.1287/moor.2022.0350), Mathematics of Operations Research, 2024.
2. *Fair Division of Multi-layered Cakes*.
3. *Computing approximate roots of monotone functions*.
