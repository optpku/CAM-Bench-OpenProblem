# Classify stable serial knockout competitions up to equivalence for larger powers of two

This file contains the open problem on Classify stable serial knockout competitions up to equivalence for larger powers of two.

---

<a id="problem-1"></a>

## 1. Classify stable serial knockout competitions up to equivalence for larger powers of two

Source paper authors: Roel Lambers, Rudi Pendavingh, Frits Spieksma

### 1. Problem Background

Fix an integer $k\ge 2$ and let $n=2^k$. A (balanced) single-elimination knockout tournament on a player set $P$ with $|P|=n$ is a rooted binary tree with $n$ leaves labeled bijectively by the players; the tournament has $k$ rounds, and players $x,x'\in P$ are said to be able to meet in round $i\in\{1,\dots,k\}$ if, given the fixed bracket, there is a possible sequence of earlier match outcomes under which they face each other in round $i$. Formally, for a knockout tournament $T$ on $P$, define $v_T(x,x')=i$ if $x$ and $x'$ can meet in round $i$ in $T$.

A serial knockout competition (SKC) on $P$ is a set $\mathcal{T}$ of $n-1$ knockout tournaments on the same player set $P$. For each round $i$, the SKC $\mathcal{T}$ is called stable in round $i$ if there exists a constant $c_i$ such that for every distinct pair $x\ne x'$ in $P$,
$$

\#\{T\in\mathcal{T}: v_T(x,x')=i\}=c_i.

$$
It is stable if it is stable in all rounds $i=1,\dots,k$. For an SKC with $|\mathcal{T}|=n-1$, counting implies $c_i=2^{i-1}$.

Two knockout tournaments $T,T'$ on player sets $P,P'$ are considered identical if $v_T(p,q)=v_{T'}(p,q)$ for all pairs $p,q$ in the common player set; and two SKCs $\mathcal{T}$ on $P$ and $\mathcal{T}'$ on $P'$ are called equivalent if there exists a bijection $s:P\to P'$ such that $\mathcal{T}'=\{T(s): T\in \mathcal{T}\}$, where $T(s)$ is obtained from $T$ by relabeling each player $p\in P$ as $s(p)$. The paper constructs, for every $n=2^k$, a stable SKC via algebraic structure on $\mathrm{GF}(2^k)$.

### 2. Open Problem

**Question 1.1.** For $n=2^k>8$, determine whether every stable serial knockout competition $\mathcal{T}$ on $n$ players is equivalent (via relabeling of players) to the algebraic stable SKC constructed using $\mathrm{GF}(2^k)$; equivalently, decide whether there exist stable SKCs on $n$ players that are inequivalent to that construction (in particular, for $n=16$).

### 3. Known Results

The defining constraint for a stable SKC on $n=2^k$ players is that for each round $i\in\{1,\dots,k\}$ and each unordered pair $\{x,x'\}$, the number of brackets $T$ in the family $\mathcal T$ with $v_T(x,x')=i$ is constant (necessarily $c_i=2^{i-1}$ when $|\mathcal T|=n-1$). Lambers–Pendavingh–Spieksma construct such families for all $2^k$ using algebra over $\mathrm{GF}(2^k)$, and they prove uniqueness up to relabeling only in the smallest nontrivial case $n=8$ (via the Fano plane). The open problem asks whether this algebraic construction is essentially the only one for $n>8$, e.g. $n=16$, or whether inequivalent stable SKCs exist.

Among the forward citations provided, the only citing work is an operations-research survey that briefly summarizes the existence result and its Galois-field connection but does not contribute new structural, classification, or nonisomorphism results for stable SKCs. Consequently, based on the available forward-citation evidence, the classification/uniqueness question for $n=2^k>8$ remains open. Promising directions suggested by the original paper’s viewpoint include translating stability into incidence/association-scheme language on pairs of players (where $v_T$ induces a hierarchy of partitions by “round of possible meeting”), analyzing automorphism groups of the $\mathrm{GF}(2^k)$-constructed SKC, and searching for alternative constructions via difference sets, orthogonal arrays, or other finite-geometry designs that could yield inequivalent SKCs for $n=16$ or prove rigidity.

#### 3.1 Upstream solution and partial-progress records

- [Solution #121 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4399497388_p0/solutions/121.pdf)

### 4. Source and Verification

- **Source paper:** Roel Lambers, Rudi Pendavingh, Frits Spieksma, [*How to Design a Stable Serial Knockout Competition*](https://doi.org/10.1287/moor.2022.0352), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 13, end of Section 5.2 (after Theorem 3) and reiterated in Section 7 (Discussion), page 14.
- **Area:** tournament design
- **Keywords:** `tournament design`, `serial knockout competition`, `stability`, `finite fields`, `combinatorial designs`, `equivalence classes`
- **Upstream problem record:** [W4399497388_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4399497388_p0&n=121&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Roel Lambers, Rudi Pendavingh, Frits Spieksma, [*How to Design a Stable Serial Knockout Competition*](https://doi.org/10.1287/moor.2022.0352), Mathematics of Operations Research, 2024.
2. *Tournament design: A review from an operational research perspective*.
