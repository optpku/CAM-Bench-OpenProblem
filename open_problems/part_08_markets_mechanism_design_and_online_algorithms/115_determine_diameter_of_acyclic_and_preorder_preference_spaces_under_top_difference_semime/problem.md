# Determine diameter of acyclic and preorder preference spaces under top-difference semimetric

This file contains the open problem on Determine diameter of acyclic and preorder preference spaces under top-difference semimetric.

---

<a id="problem-1"></a>

## 1. Determine diameter of acyclic and preorder preference spaces under top-difference semimetric

Source paper authors: Hiroki Nishimura, Efe A. Ok

### 1. Problem Background

Let $X$ be a finite set of alternatives with $|X|=n\ge 2$. An (acyclic) preference relation in the paper is modeled as an \emph{acyclic order} $\%$ on $X$, i.e., a reflexive binary relation whose strict (asymmetric) part $\succ$ contains no directed cycle: there do not exist pairwise distinct $z_1,\dots,z_k\in X$ with $z_1\succ z_2\succ\cdots\succ z_k\succ z_1$.

For any binary relation $R$ on $X$ and any nonempty subset $S\subseteq X$, the set of $R$-maximal elements of $S$ is
$$
M(S,R):=\{x\in S: \text{there is no }y\in S\text{ with }y\,R^{>}\,x\},
$$
where $R^{>}$ denotes the asymmetric part of $R$. For acyclic orders $\%$, every nonempty finite $S$ has $M(S,\%)\neq\varnothing$.

Define the \emph{top-difference semimetric} $D$ on the set $A(X)$ of all acyclic orders on $X$ by
$$
D(\%,\mathcal{D}) := \sum_{S\subseteq X} \bigl| M(S,\%)\,\triangle\, M(S,\mathcal{D})\bigr|,
$$
where $\triangle$ is symmetric difference and $|\cdot|$ is cardinality. (Singleton and empty $S$ contribute $0$, but the definition sums over all $S\subseteq X$.)

For any subset $\mathcal{C}\subseteq A(X)$, its diameter with respect to $D$ is
$$
\operatorname{diam}_D(\mathcal{C}) := \max\{ D(\%,\mathcal{D}) : \%,\mathcal{D}\in \mathcal{C}\},
$$
which is well-defined since $\mathcal{C}$ is finite when $X$ is finite.

Let $P(X)\subseteq A(X)$ denote the set of all preorders on $X$ (reflexive and transitive relations).

### 2. Open Problem

**Question 1.1.** Compute (or give an exact closed-form expression for)
$$
\operatorname{diam}_D(A(X))\quad\text{and/or}\quad \operatorname{diam}_D(P(X))
$$
as functions of $n=|X|$, where $D$ is the top-difference semimetric
$$
D(\%,\mathcal{D}) := \sum_{S\subseteq X} \bigl| M(S,\%)\,\triangle\, M(S,\mathcal{D})\bigr|
$$
on acyclic orders $\%,\mathcal{D}\in A(X)$, and $P(X)$ denotes the class of preorders on $X$.

### 3. Known Results

In Nishimura–Ok (2022), the top-difference semimetric $D(\%,\mathcal D)=\sum_{S\subseteq X}|M(S,\%)\triangle M(S,\mathcal D)|$ is introduced on the space $A(X)$ of acyclic orders, motivated by comparing induced choice correspondences menu-by-menu. The paper provides axiomatic characterizations for $D$ and its weighted variants $D_\mu$, and derives alternative formulas (notably a polynomial-time computable expression) that avoid summing over all $2^n$ subsets directly. In terms of global geometry, it computes the diameter exactly for complete preferences (total preorders) $P_{\mathrm{total}}(X)$: $\operatorname{diam}_D(P_{\mathrm{total}}(X)) = n2^{n-1}+2-2^{\lfloor n/2\rfloor}-2^{\lceil n/2\rceil}$, and also notes $\operatorname{diam}_D(L(X))=2(2^n-n-1)$ for linear orders.

The open problem is to determine $\operatorname{diam}_D(P(X))$ and/or $\operatorname{diam}_D(A(X))$ as functions of $n$. The source paper establishes only the lower bound $\operatorname{diam}_D(A(X))\ge \operatorname{diam}_D(P(X))\ge \operatorname{diam}_D(P_{\mathrm{total}}(X))$ and explicitly states that it is unknown whether either inequality is an equality. Among the (few) forward citations provided here, one paper develops a weighted top-difference framework but restricts attention to linear orders, offering reformulations and axioms that could be useful for diameter computations on $S_n$ yet does not address $A(X)$ or $P(X)$. Another citing paper is only tangential, referencing the metric viewpoint without contributing to diameter calculations.

At present, based on the available forward-citation evidence, the diameter of $(A(X),D)$ and $(P(X),D)$ remains open beyond the known exact formulas for $L(X)$ and $P_{\mathrm{total}}(X)$. Promising directions include constructing extremal pairs of acyclic orders/preorders that maximize menu-wise maximal-set disagreement, and leveraging the polynomial-time reformulation of $D$ (in terms of principal ideals and overlap parameters) to turn the diameter problem into a combinatorial optimization over DAGs or transitive relations.

#### 3.1 Upstream solution and partial-progress records

- [Solution #97 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4388047886_p0/solutions/97.pdf)

### 4. Source and Verification

- **Source paper:** Hiroki Nishimura, Efe A. Ok, [*A Class of Dissimilarity Semimetrics for Preference Relations*](https://doi.org/10.1287/moor.2022.0351), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 4, page 25 (end of Section 4, after Table 1)
- **Area:** social choice theory
- **Keywords:** `preference relations`, `acyclic orders`, `preorders`, `metric diameter`, `finite metric spaces`, `choice correspondences`
- **Upstream problem record:** [W4388047886_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4388047886_p0&n=97&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Hiroki Nishimura, Efe A. Ok, [*A Class of Dissimilarity Semimetrics for Preference Relations*](https://doi.org/10.1287/moor.2022.0351), Mathematics of Operations Research, 2023.
2. *On the Weighted Top-Difference Distance: Axioms, Aggregation, and Approximation*.
3. *Semantics meets attractiveness: Choice by salience*.
