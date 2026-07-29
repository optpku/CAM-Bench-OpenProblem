# Prove existence of complete EFX allocations for general valuations setting

This file contains the open problem on Prove existence of complete EFX allocations for general valuations setting.

---

<a id="problem-1"></a>

## 1. Prove existence of complete EFX allocations for general valuations setting

Source paper authors: Ryoga Mahara

### 1. Problem Background

Let there be a finite set of indivisible items $M$ and a finite set of agents $N=\{1,\dots,n\}$. Each agent $i\in N$ has a valuation function $v_i:2^M\to \mathbb{R}_{\ge 0}$ satisfying:
1) Normalization: $v_i(\varnothing)=0$.
2) Monotonicity: if $S\subseteq T\subseteq M$, then $v_i(S)\le v_i(T)$.
An allocation is an $n$-tuple $X=(X_1,\dots,X_n)$ of pairwise-disjoint bundles $X_i\subseteq M$. It is complete if $\bigcup_{i\in N} X_i=M$.
For agents $i,j\in N$, agent $i$ \emph{envies} agent $j$ under allocation $X$ if $v_i(X_i) < v_i(X_j)$.
An allocation $X$ is \emph{envy-free up to any item (EFX)} if for every pair $i,j\in N$ and every item $g\in X_j$,
$$

 v_i(X_i) \ge v_i(X_j\setminus\{g\}).

$$
Equivalently, after removing any single item from $j$'s bundle, agent $i$ does not prefer the remainder to her own bundle.
The central general-valuation setting imposes no further structure such as additivity, submodularity, or identical valuations beyond normalization and monotonicity.

### 2. Open Problem

**Question 1.1.** Given any numbers of agents $n\ge 1$, any finite item set $M$, and any collection of normalized, monotone valuation functions $\{v_i:2^M\to\mathbb{R}_{\ge 0}\}_{i\in N}$, determine whether there must exist a complete allocation $X=(X_1,\dots,X_n)$ of $M$ that is EFX, i.e., satisfies
$$

\forall i,j\in N,\ \forall g\in X_j:\quad v_i(X_i) \ge v_i(X_j\setminus\{g\}).

$$
In particular, resolve the existence question for general valuations when all goods must be allocated.

### 3. Known Results

Mahara (2021) framed the central question for general (normalized, monotone) valuations: whether a complete EFX allocation must always exist. Building on the champion-graph framework of Chaudhury–Garg–Mehlhorn and the “EFX with charity” line, Mahara extended several additive-valuation existence results to general valuations via potential-function arguments (lexicographic and a new partition-leximin potential). In particular, Mahara proved complete EFX existence for two-valuation-type profiles and for the small-excess regime $m\le n+3$, and improved bounded-charity guarantees to $|U|\le n-2$ unallocated goods while maintaining that no agent envies the unallocated set.

The universal existence conjecture for complete EFX under general monotone valuations has since been resolved negatively by the paper titled “A Counterexample to EFX; Agents, Items, Monotone Valuations; via SAT-Solving”, which constructs an explicit instance with $n=3$ agents and $m=8$ goods admitting no complete EFX allocation, and further shows broad families of counterexamples for all $n\ge 3$ once $m$ is sufficiently larger than $n$ (even for submodular valuations). This pins down the sharpness of Mahara’s positive results in the small-$m$ regime and clarifies that any general-valuation existence theorem must impose additional structure (on valuations, on item-agent incidence, or by allowing charity/approximation).

Subsequent work has therefore focused on delineating maximal domains where complete EFX remains guaranteed and on principled relaxations. On the positive side, complete EFX is shown to exist for substantial structured subclasses of monotone valuations, notably multigraph/bipartite-multigraph valuation models where each good is relevant to at most two agents, and for leveled valuations where value strictly increases with bundle size. Complementarily, relaxations such as epistemic EFX (EEFX) restore unconditional existence for arbitrary monotone valuations, while other lines (e.g., rainbow-cycle-number methods) yield near-optimal $(1-\varepsilon)$-EFX with bounded charity and additional welfare guarantees. Together, these results map a post-counterexample landscape: exact complete EFX fails in full generality, but remains attainable in rich structured settings and via carefully designed relaxations.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #67 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3186360956_p0/partial_progress/67.pdf)

### 4. Source and Verification

- **Source paper:** Ryoga Mahara, [*Extension of Additive Valuations to General Valuations on the Existence of EFX*](https://doi.org/10.1287/moor.2022.0044), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 2, Introduction (discussion of prior work and open status of EFX existence for general valuations)
- **Area:** fair division
- **Keywords:** `fair division`, `indivisible goods`, `EFX`, `general valuations`, `existence theorem`, `envy-freeness`
- **Upstream problem record:** [W3186360956_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3186360956_p0&n=67&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ryoga Mahara, [*Extension of Additive Valuations to General Valuations on the Existence of EFX*](https://doi.org/10.1287/moor.2022.0044), Mathematics of Operations Research, 2023.
2. *A Counterexample to EFX; Agents, Items, Monotone Valuations; via SAT-Solving*.
3. [*EFX: a simpler approach and an (almost) optimal guarantee via rainbow cycle number*](https://doi.org/10.1287/opre.2023.0433).
4. *EFX allocations and orientations on bipartite multi-graphs: A complete picture*.
5. *On the existence of EFX allocations in multigraphs*.
6. *Fair and truthful allocations under leveled valuations*.
7. *Epistemic EFX allocations exist for monotone valuations*.
