# Settle complexity of min-cost popular maximum matchings in many-to-one settings

This file contains the open problem on Settle complexity of min-cost popular maximum matchings in many-to-one settings.

---

<a id="problem-1"></a>

## 1. Settle complexity of min-cost popular maximum matchings in many-to-one settings

Source paper authors: Telikepalli Kavitha, Kazuhisa Makino

### 1. Problem Background

Let $G=(R\cup H,E)$ be a bipartite hospitals/residents instance. Each resident $r\in R$ has capacity $1$ and a strict preference order over its neighbors in $H$; each hospital $h\in H$ has an integer capacity $\mathrm{cap}(h)\ge 1$ and a strict preference order over its neighbors in $R$. Preferences may be incomplete, i.e., $E$ need not be complete bipartite.

A (many-to-one) matching is a set $M\subseteq E$ such that $|M(r)|\le 1$ for all $r\in R$ and $|M(h)|\le \mathrm{cap}(h)$ for all $h\in H$, where $M(v)=\{u:(u,v)\in M\}$.

Define the voting-based comparison between matchings $M$ and $N$ as follows.

1) For a resident $r$, let $\mathrm{vote}_r(M,N)\in\{-1,0,1\}$ be $1$ if $r$ prefers its assignment in $M$ to its assignment in $N$, $-1$ if it prefers its assignment in $N$, and $0$ if the assignments are the same. Being unmatched is the worst outcome.

2) For a hospital $h$, to compare two assigned sets $M(h)$ and $N(h)$, remove common residents and compare the symmetric differences $S'=M(h)\setminus N(h)$ and $T'=N(h)\setminus M(h)$ by choosing a bijection $\psi:S'\to T'$ (adding dummy residents if needed to equalize sizes, each dummy ranked below all real residents). The hospital's vote is defined adversarially as the minimum, over bijections $\psi$, of the sum of pairwise votes induced by comparing each $r\in S'$ with $\psi(r)\in T'$:
$$

\mathrm{vote}_h(M,N) := \min_{\psi:S'\to T'} \sum_{r\in S'} \mathrm{vote}_h\bigl(r,\psi(r)\bigr),

$$
where $\mathrm{vote}_h(r,r')=1$ if $h$ prefers $r$ to $r'$, $-1$ if it prefers $r'$ to $r$, and $0$ otherwise.

3) The net margin is
$$

\Delta(M,N):=\sum_{v\in R\cup H} \mathrm{vote}_v(M,N).

$$
A matching $M$ is popular (within a specified feasible family) if $\Delta(M,N)\ge 0$ for all $N$ in that family.

Let $\mathrm{cost}:E\to\mathbb{R}$ be an edge-cost function and $\mathrm{cost}(M)=\sum_{e\in M}\mathrm{cost}(e)$.

A matching $M$ is a maximum matching if it has maximum cardinality among all matchings in $G$. Define a \emph{popular maximum matching} to mean a maximum-cardinality matching $M$ such that $\Delta(M,N)\ge 0$ for every maximum matching $N$ in $G$.

### 2. Open Problem

**Question 1.1.** Given a hospitals/residents instance $G=(R\cup H,E)$ with strict (possibly incomplete) preferences and an edge-cost function $\mathrm{cost}:E\to\mathbb{R}$, determine the computational complexity of computing a minimum-cost popular maximum matching.

Equivalently, decide whether there is a polynomial-time algorithm that outputs
$$

M^*\in\arg\min\{\mathrm{cost}(M): \; M \text{ is a maximum matching in }G \text{ and } \Delta(M,N)\ge 0 \;\forall N\text{ maximum in }G\},

$$
or prove that this optimization problem is NP-hard.

### 3. Known Results

The min-cost popular maximum matching problem in the hospitals/residents (many-to-one) model with strict, possibly incomplete preferences remains open in the sense highlighted by Kavitha and Makino: while min-cost popular matchings with complete preferences are now polynomial-time solvable in many-to-one, the restriction of popularity to the family of maximum-cardinality matchings in the incomplete-preference case does not admit a known polynomial-time algorithm nor a hardness proof.

The closest forward-cited progress in the provided analysis is the work on popular perfect matchings in the many-to-many setting, which develops structural characterizations of popularity via the nonexistence of positive-weight alternating cycles and leverages a reduction to min-cost stable matching in a carefully constructed colorful auxiliary instance. These techniques mirror the cycle/certificate viewpoints used in the many-to-one complete-preference setting and suggest that an eventual resolution for popular maximum matchings may require a refined decomposition of maximum-matchings’ symmetric differences (cycles and alternating paths) together with a way to encode the adversarial hospital vote within an optimization framework.

A key remaining gap is that, unlike the perfect-matching case where cloning/projection arguments can be made surjective (and dual certificates can be strengthened), popular maximum matchings in many-to-one can be strictly richer than those induced by popular maximum matchings in the cloned one-to-one instance. This obstruction blocks straightforward reductions to known polynomial-time algorithms for one-to-one popular maximum matchings, leaving open whether the many-to-one problem is polynomial-time solvable or NP-hard.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #36 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4416664990_p0/partial_progress/36.pdf)

### 4. Source and Verification

- **Source paper:** Telikepalli Kavitha, Kazuhisa Makino, [*Min-Cost Popular Matchings in a Hospitals/Residents Instance with Complete Preferences*](https://doi.org/10.1287/moor.2024.0634), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 4 (Conclusions and problems), page 20
- **Area:** popular matchings
- **Keywords:** `popular matching`, `hospital residents`, `maximum matching`, `computational complexity`, `minimum cost`, `incomplete preferences`
- **Upstream problem record:** [W4416664990_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4416664990_p0&n=36&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Telikepalli Kavitha, Kazuhisa Makino, [*Min-Cost Popular Matchings in a Hospitals/Residents Instance with Complete Preferences*](https://doi.org/10.1287/moor.2024.0634), Mathematics of Operations Research, 2025.
2. [*Perfect matchings and popularity in the many-to-many setting*](https://drops.dagstuhl.de/opus/volltexte/2023/).
