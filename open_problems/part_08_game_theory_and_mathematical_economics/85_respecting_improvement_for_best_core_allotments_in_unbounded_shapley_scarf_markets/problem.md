# Respecting improvement for best core allotments in unbounded Shapley-Scarf markets

This file contains the open problem on Respecting improvement for best core allotments in unbounded Shapley-Scarf markets.

---

<a id="problem-1"></a>

## 1. Respecting improvement for best core allotments in unbounded Shapley-Scarf markets

Source paper authors: Péter Bíró, Flip Klijn, Xenia Klimentova, Ana Viana

### 1. Problem Background

A (Shapley--Scarf) housing market consists of a finite set of agents/objects $N=\{1,\dots,n\}$. Agent $i\in N$ is initially endowed with object $e_i=i$ and has complete and transitive (weak) preferences $R_i$ over $N$. Write $P_i$ for the strict part and $I_i$ for indifference.

An allocation is a permutation $x=(x_i)_{i\in N}\in N^N$ such that each agent receives exactly one object and each object is assigned to exactly one agent. An allocation $x$ is individually rational if $x_i R_i i$ for all $i$.

A nonempty coalition $S\subseteq N$ blocks an allocation $x$ if there exists an allocation $z$ using only objects of $S$ (i.e., $\{z_i:i\in S\}=S$) such that $z_i P_i x_i$ for all $i\in S$. The (weak) core $C(R)$ is the set of allocations that are not blocked by any coalition.

An "improvement for agent $i$" is a change of preferences from $R$ to $\widetilde R$ such that: (1) $\widetilde R_i=R_i$; (2) for each other agent $j\neq i$, object $i$ can only move weakly up in $j$'s ranking among acceptable objects (relative orderings among objects $\neq i$ are unchanged).

For a set of allocations $X$ and agent $i$, define the set of objects $X_i:=\{x_i: x\in X\}$. Define $\mathrm{best}_i(X)$ as an $R_i$-maximal element of $X_i$ (i.e., an agent $i$'s most preferred allotment attainable within $X$; if there are ties, $\mathrm{best}_i(X)$ may be non-unique).

The paper proves that the unique competitive/strong-core allocation respects improvement under strict preferences, and gives related setwise results for competitive allocations under weak preferences, but leaves open a question for the (weak) core under unbounded exchanges.

### 2. Open Problem

**Question 1.1.** Given a housing market $(N,R)$ with unbounded exchange cycles and its core $C(R)$, and an agent $i\in N$, consider a preference change to $(N,\widetilde R)$ where $\widetilde R$ is an improvement for $i$ with respect to $R$.

Determine whether the following property holds: for every choice of $x\in C(R)$ with $x_i\in \mathrm{best}_i(C(R))$ and every choice of $\widetilde x\in C(\widetilde R)$ with $\widetilde x_i\in \mathrm{best}_i(C(\widetilde R))$, one has
$$

\widetilde x_i\; R_i\; x_i.

$$
Equivalently, decide whether agent $i$'s most preferred allotment among core allocations can ever become strictly worse after $i$'s object becomes (weakly) more desirable to other agents (with $i$'s own preferences fixed).

### 3. Known Results

Biró–Klijn–Klimentova–Viana (2021) introduced “respecting improvement” for Shapley–Scarf housing markets and proved it for the unique competitive/strong-core allocation under strict preferences (via TTC), and obtained setwise monotonicity for competitive allocations under weak preferences. They also showed that once exchanges are bounded (e.g., cycle length $\le 3$), even strict-preference cores can fail to respect improvement for an agent’s best attainable allotment, leaving open the unbounded-cycle question for the (weak) core: can $\mathrm{best}_i(C(R))$ become worse after a $p$-improvement (others rank $i$’s endowment weakly higher, $R_i$ fixed)?

This open problem has been solved affirmatively by Schlotter–Biró–Fleiner in “The core of housing markets from an agent's perspective: Is it worth sprucing up your home?”. Their Theorem 2 gives a strong monotonicity: starting from any core allocation $X\in C(H)$, after a $p$-improvement $H'$ there exists $X'\in C(H')$ with $X'(p)=X(p)$ or $X'(p)\,P_p\,X(p)$. Taking $X$ to be a $p$-best core allocation in $H$ implies that $p$’s best attainable core object in $H'$ is weakly better, yielding the exact quantified statement posed in the source paper: for any $x\in C(R)$ with $x_i\in \mathrm{best}_i(C(R))$ and any $\widetilde x\in C(\widetilde R)$ with $\widetilde x_i\in \mathrm{best}_i(C(\widetilde R))$, one has $\widetilde x_i\,R_i\,x_i$. The result holds in full generality of unbounded exchange cycles and is constructive (linear time).

Related subsequent work develops broader “respecting improvement” frameworks for mechanisms (single-valued rules) and for stronger stability notions (e.g., strong core under partial orders), but these do not substitute for the above core-correspondence comparative statics. A remaining direction, suggested already by Biró et al. (2021), is to understand analogous RI-best statements in other stability models (e.g., stable roommates) and to delineate precisely which bounded-exchange restrictions reintroduce failures of monotonicity, as seen in their bounded-cycle counterexamples.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #60 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3126339575_p0/partial_progress/60.pdf)

### 4. Source and Verification

- **Source paper:** Péter Bíró, Flip Klijn, Xenia Klimentova, Ana Viana, [*Shapley–Scarf Housing Markets: Respecting Improvement, Integer Programming, and Kidney Exchange*](https://doi.org/10.1287/moor.2022.0092), Mathematics of Operations Research, 2023.
- **Location in paper:** Conclusion, page 34, Section 6
- **Area:** housing market core
- **Keywords:** `housing markets`, `core stability`, `top trading cycles`, `comparative statics`, `respecting improvement`, `indivisible goods`
- **Upstream problem record:** [W3126339575_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3126339575_p0&n=60&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Péter Bíró, Flip Klijn, Xenia Klimentova, Ana Viana, [*Shapley–Scarf Housing Markets: Respecting Improvement, Integer Programming, and Kidney Exchange*](https://doi.org/10.1287/moor.2022.0092), Mathematics of Operations Research, 2023.
2. [*The core of housing markets from an agent's perspective: Is it worth sprucing up your home?*](https://doi.org/10.1287/moor.2023.0092).
3. [*The core of housing markets from an agent's perspective: Is it worth sprucing up your home?*](https://doi.org/10.1007/978-3-030-94676-0_14).
4. [*Respecting improvement in markets with indivisible goods*](https://doi.org/10.1287/mnsc.2025.00052).
5. *The strong core of housing markets with partial order preferences*.
6. [*Novel integer programming models for the stable kidney exchange problem*](https://arxiv.org/abs/2012.04918).
