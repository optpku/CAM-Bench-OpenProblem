# Enumerate minimal balanced collections on n players in cooperative games

This file contains the open problem on Enumerate minimal balanced collections on n players in cooperative games.

---

<a id="problem-1"></a>

## 1. Enumerate minimal balanced collections on n players in cooperative games

Source paper authors: P. García-Segador, Michel Grabisch, Pedro Miranda

### 1. Problem Background

Let $N=\{1,\dots,n\}$. A (transferable-utility) cooperative game is a set function $v:2^N\to\mathbb{R}$ with $v(\emptyset)=0$.

A family $\mathcal{B}\subseteq 2^N\setminus\{\emptyset\}$ of nonempty coalitions is called a balanced collection if there exist strictly positive weights $\lambda_S>0$ for $S\in\mathcal{B}$ such that each player is covered with total weight 1:
$$

\sum_{S\in\mathcal{B}:\ i\in S} \lambda_S = 1,\qquad \forall i\in N.

$$
A balanced collection $\mathcal{B}$ is minimal if it contains no proper subcollection that is balanced. (Equivalently, $\mathcal{B}$ is inclusion-minimal among balanced collections.)

Write $\mathcal{B}^*(n)$ for the set of all minimal balanced collections on $N$ excluding the trivial collection $\{N\}$. It is known that $\mathcal{B}^*(n)$ is finite and that any minimal balanced collection has cardinality at most $n$.

### 2. Open Problem

**Question 1.1.** Given $n\ge 1$, determine (exactly) the set $\mathcal{B}^*(n)$ of all minimal balanced collections on $N=\{1,\dots,n\}$, or at least determine $|\mathcal{B}^*(n)|$ (the number of minimal balanced collections) as an explicit function of $n$.

### 3. Known Results

The paper "On the set of balanced games" (Garcia-Segador–Grabisch–Miranda, 2025) frames minimal balanced collections $\mathcal B^*(n)$ as the combinatorial objects indexing the facet-defining inequalities in the Bondareva–Shapley characterization of balanced games: for each $\mathcal B\in\mathcal B^*(n)$ with unique positive balancing weights $(\lambda_S)_{S\in\mathcal B}$, balancedness is equivalent to $\sum_{S\in\mathcal B}\lambda_S v(S)\le v(N)$. Thus, exact knowledge of $\mathcal B^*(n)$ or even $|\mathcal B^*(n)|$ would yield an explicit facet description of the balanced-games cone $BG(n)$ and its normalized variants $BG_\alpha(n)$, $BG^+(n)$, and would directly support algorithmic tasks such as projection onto these polyhedra.

Among the forward-citing works provided, "On the closest balanced game" gives substantial partial progress on the counting aspect by proving sharp asymptotics for $B_n:=|\mathcal B^*(n)|$. It shows $B_n\sim 2^{n^2-n+1}/n!$ and that asymptotically almost all minimal balanced collections have maximal cardinality $n$. Conceptually, this indicates that the facet structure of $BG(n)$ is overwhelmingly governed (for large $n$) by minimal balanced collections of size $n$, and it links their enumeration to counting certain invertible $0/1$ matrices with positivity properties of the inverse applied to $\mathbf 1$.

However, the original open problem asks for exact enumeration (or a closed-form exact formula for $|\mathcal B^*(n)|$), and no such exact classification or formula is supplied by the available forward citation. Therefore, based on the provided evidence, the problem remains open; the best progress recorded here is asymptotic enumeration and structural concentration on $|\mathcal B|=n$ collections.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #131 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4401542271_p0/partial_progress/131.pdf)

### 4. Source and Verification

- **Source paper:** P. García-Segador, Michel Grabisch, Pedro Miranda, [*On the Set of Balanced Games*](https://doi.org/10.1287/moor.2023.0379), Mathematics of Operations Research, 2024.
- **Location in paper:** Introduction, page 2 (discussion of minimal balanced collections and enumeration); also referenced indirectly in Section 5.5 via the number of facets depending on the number of minimal balanced collections.
- **Area:** cooperative game theory
- **Keywords:** `balanced collections`, `core nonemptiness`, `Bondareva-Shapley theorem`, `polyhedral cones`, `facet enumeration`, `set systems`
- **Upstream problem record:** [W4401542271_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4401542271_p0&n=131&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. P. García-Segador, Michel Grabisch, Pedro Miranda, [*On the Set of Balanced Games*](https://doi.org/10.1287/moor.2023.0379), Mathematics of Operations Research, 2024.
2. *On the closest balanced game*.
