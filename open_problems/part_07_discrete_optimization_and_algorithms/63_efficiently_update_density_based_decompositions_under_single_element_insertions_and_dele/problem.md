# Efficiently update density-based decompositions under single-element insertions and deletions

This file contains the open problem on Efficiently update density-based decompositions under single-element insertions and deletions.

---

<a id="problem-1"></a>

## 1. Efficiently update density-based decompositions under single-element insertions and deletions

Source paper authors: Chien-Chung Huang, François Sellier

### 1. Problem Background

Let $M=(V,\mathcal I)$ be a matroid with rank function $\operatorname{rank}_M:2^V\to\mathbb Z_{\ge 0}$. For any nonempty $U\subseteq V$ with $\operatorname{rank}_M(U)>0$, define its density by
$$
\rho_M(U)=\frac{|U|}{\operatorname{rank}_M(U)}.
$$
(With the conventions: $\rho_M(\emptyset)=0$ and $\rho_M(U)=+\infty$ if $U\neq\emptyset$ and $\operatorname{rank}_M(U)=0$.)

For a subset $V'\subseteq V$, let $M|_{V'}$ denote the restriction of $M$ to $V'$. Consider the greedy procedure that, starting from $M|_{V'}$, iteratively selects a densest subset of maximum cardinality and then contracts it, producing a partition (allowing empty parts)
$$
V'=U_1\cup U_2\cup\cdots\cup U_k,
$$
where $k=\operatorname{rank}_M(V)$ and $U_j$ is a maximum-cardinality densest subset in the contracted matroid $(M|_{V'})/(U_1\cup\cdots\cup U_{j-1})$.
This partition is called the density-based decomposition of $V'$ in $M$.

Suppose we maintain such a decomposition while $V'$ is dynamically updated by single-element operations: insertion of an element $u\in V\setminus V'$ (replacing $V'$ by $V'\cup\{u\}$) or deletion of an element $u\in V'$ (replacing $V'$ by $V'\setminus\{u\}$). A naive update recomputes the entire density-based decomposition from scratch after each operation, using (in general) submodular function minimization to find densest sets.

### 2. Open Problem

**Question 1.1.** Design an algorithm that maintains the density-based decomposition $U_1,\dots,U_k$ of $V'$ in a matroid $M$ under a sequence of single-element insertions and deletions to $V'$, and does so more efficiently than recomputing the whole decomposition from scratch after every update.

### 3. Known Results

The density-based decomposition in Huang–Sellier is a greedy rephrasing of the principal sequence/principal partition of a matroid restriction $M|_{V'}$: it repeatedly selects a maximum-cardinality densest set $U_j$ in the current contraction and contracts it, yielding parts $U_1,\dots,U_k$ with strictly decreasing densities. The paper’s key structural contribution toward dynamic maintenance is the pair of modification lemmas (Lemmas 20–21), which show a strong Lipschitz/sensitivity phenomenon under single-element updates of $V'$: insertion makes all associated densities $\tilde\rho_M(v)$ monotone nondecreasing and confines changes to elements whose old density lies in an interval of length 1 around the inserted element’s old density (and symmetrically for deletions). These statements suggest that the decomposition changes “locally in density space,” a property reminiscent of stability results for principal partitions.

Subsequent/related work on submodular water-filling (e.g., in the online submodular assignment problem and online matroid intersection via submodular water-filling) studies essentially the same densest-set contraction chain for polymatroids/submodular functions, providing minimax and submodular-minimization characterizations of the level sets and proving monotonicity/locality properties under changes in weights. While these frameworks do not address fully dynamic insert/delete updates of the ground set $V'$, they offer alternative viewpoints (unique maximal minimizers, market/convex duality) that could be leveraged to design incremental algorithms.

At present, none of the forward-citing analyses provided contains an explicit data structure or algorithm with provably improved update time for maintaining the full decomposition $U_1,\dots,U_k$ under single-element insertions/deletions, beyond recomputation via repeated submodular minimization. Thus the problem remains open. Promising directions include exploiting Lemmas 20–21 to update only a small contiguous block of levels, and specializing to structured matroids (laminar, transversal) where densest-set computations admit faster primitives, potentially enabling polylogarithmic or near-linear-in-affected-region update times.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #37 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4416665164_p0/partial_progress/37_W4416665164_p0.pdf)
- [pipeline final 37](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4416665164_p0/partial_progress/pipeline_final_37.pdf)

### 4. Source and Verification

- **Source paper:** Chien-Chung Huang, François Sellier, [*Robust Sparsification for Matroid Intersection with Applications*](https://doi.org/10.1287/moor.2024.0562), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 6, Introduction (end of the discussion on density-based decomposition and principal partitions).
- **Area:** dynamic matroid decomposition
- **Keywords:** `matroid intersection`, `density-based decomposition`, `principal partitions`, `dynamic algorithms`, `submodular minimization`
- **Upstream problem record:** [W4416665164_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4416665164_p0&n=37&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Chien-Chung Huang, François Sellier, [*Robust Sparsification for Matroid Intersection with Applications*](https://doi.org/10.1287/moor.2024.0562), Mathematics of Operations Research, 2025.
2. [*Sparsification for Graph Matching and Matroid Intersection*](https://arxiv.org/abs/2310.16827).
3. *The online submodular assignment problem*.
4. *Sparsification for graph and matroid optimization problems*.
5. *Online Matroid Intersection: Submodular Water-Filling and Matroidal Welfare Maximization*.
