# Determine the asymptotically tight rainbow cycle number in bounded-partite digraphs

This file contains the open problem on Determine the asymptotically tight rainbow cycle number in bounded-partite digraphs.

---

<a id="problem-1"></a>

## 1. Determine the asymptotically tight rainbow cycle number in bounded-partite digraphs

Source paper authors: Bhaskar Ray Chaudhury, Jugal Garg, Kurt Mehlhorn, Ruta Mehta, Pranabendu Misra

### 1. Problem Background

Fix an integer $d\ge 1$. A directed $k$-partite graph is a digraph $G=(V,E)$ whose vertex set is partitioned into $k$ (nonempty) parts $V_1,\dots,V_k$, and edges may go between any ordered pair of vertices (including across parts), with no restriction on directions.

Consider directed $k$-partite graphs $G=(\bigcup_{i=1}^k V_i,E)$ satisfying the following properties:

1) (Bounded part size) $|V_i|\le d$ for all $i\in\{1,\dots,k\}$.

2) (Pairwise in-neighborhood condition) For any two distinct parts $V_i$ and $V_j$, every vertex $v\in V_i$ has an incoming edge from some vertex in $V_j$, and every vertex $w\in V_j$ has an incoming edge from some vertex in $V_i$. Equivalently, for all distinct $i\neq j$ and every $v\in V_i$, there exists $u\in V_j$ with $(u,v)\in E$.

3) (No rainbow cycle) There is no directed cycle $C$ in $G$ that intersects each part at most once, i.e., $|C\cap V_i|\le 1$ for every $i\in\{1,\dots,k\}$.

Define the rainbow cycle number $R(d)$ to be the largest integer $k$ for which there exists a directed $k$-partite graph satisfying properties 1)–3) above.

### 2. Open Problem

**Question 1.1.** Determine asymptotically tight upper bounds on $R(d)$ as a function of $d$. In particular, decide whether $R(d)=O(d)$ holds (equivalently, whether there exists a constant $C$ such that $R(d)\le C d$ for all $d\ge 1$).

### 3. Known Results

The rainbow cycle number $R(d)$, introduced by Chaudhury–Garg–Mehlhorn–Mehta–Misra, asks for the largest number of parts $k$ in a directed $k$-partite graph with part sizes $\le d$ such that (i) for every two distinct parts $V_i,V_j$, each vertex in $V_i$ has an in-neighbor in $V_j$ (and vice versa), yet (ii) there is no directed cycle that uses at most one vertex from each part (a “rainbow” directed cycle). The source paper proves the first general polynomial upper bound $R(d)\le d^4+d$ via a two-stage construction: first building a cycle that may revisit one special part $\widetilde V_\ell$, then “bypassing” repeated visits using carefully chosen intermediate parts to obtain a simple rainbow cycle. It also gives a linear lower bound $R(d)\ge d$, leaving a wide gap and explicitly conjecturing $R(d)=O(d)$.

Subsequent work cited in the source paper improves the upper bound by refining the bypass construction. In particular, “EFX: A simpler approach and an (almost) optimal guarantee via rainbow cycle number” exploits the observation (also noted in the MOR acknowledgments) that it suffices to prepare bypass parts only for consecutive pairs $(V_i,V_{i+1})$ along the eventual cycle, leading to an improved bound $R(d)=O(d^3)$. Related cycle/fixed-point techniques in “Fixed-point cycles and approximate EFX allocations” are also referenced as contributing to improved rainbow-cycle-number-driven guarantees. However, none of the available citing works (including the fair-division paper “Almost Envy-Free Allocation,” which only cites $R(d)$ as background) resolves the main asymptotic question: whether $R(d)$ is linear in $d$, or more generally what the tight growth rate is.

At present, the best documented general bounds remain polynomially separated, with $d\le R(d)\le O(d^3)$ (improving the original $O(d^4)$ bound) and the central conjecture $R(d)=O(d)$ still open. Promising directions include sharpening the bypass/representative-set method to reduce the number of auxiliary parts needed, and exploring extremal digraph tools tailored to the strong pairwise in-neighborhood condition (a dense, multipartite analogue of minimum in-degree conditions) to force a transversal directed cycle.

The upstream collection lists no solution or partial-progress record.

### 4. Source and Verification

- **Source paper:** Bhaskar Ray Chaudhury, Jugal Garg, Kurt Mehlhorn, Ruta Mehta, Pranabendu Misra, [*Improving Envy Freeness up to Any Good Guarantees Through Rainbow Cycle Number*](https://doi.org/10.1287/moor.2021.0252), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 5, end of Section 1.2 (immediately after the discussion of \(R(2)\le 2\)); reiterated on page 16 right after Theorem 6 in Section 5.
- **Area:** extremal digraph theory
- **Keywords:** `fair division`, `envy freeness up to any good`, `extremal digraph theory`, `multipartite digraphs`, `rainbow cycles`, `Ramsey-type bounds`
- **Upstream problem record:** [W4388912937_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4388912937_p0&n=98&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Bhaskar Ray Chaudhury, Jugal Garg, Kurt Mehlhorn, Ruta Mehta, Pranabendu Misra, [*Improving Envy Freeness up to Any Good Guarantees Through Rainbow Cycle Number*](https://doi.org/10.1287/moor.2021.0252), Mathematics of Operations Research, 2023.
2. *Almost Envy-Free Allocation*.
