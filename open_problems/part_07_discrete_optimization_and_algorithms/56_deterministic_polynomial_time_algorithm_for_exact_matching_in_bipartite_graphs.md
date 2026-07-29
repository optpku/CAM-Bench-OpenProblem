# Deterministic polynomial-time algorithm for exact matching in bipartite graphs

This file contains the open problem on Deterministic polynomial-time algorithm for exact matching in bipartite graphs.

---

<a id="problem-1"></a>

## 1. Deterministic polynomial-time algorithm for exact matching in bipartite graphs

Source paper authors: Gergely Csáji, Tamás Király, Kenjiro Takazawa, Yu Yokoi

### 1. Problem Background

Let $G=(A,B;E)$ be a bipartite graph in which every edge is colored either red or blue, and let $|A|=|B|$. A matching $M\subseteq E$ is perfect if every vertex in $A\cup B$ is incident to exactly one edge of $M$. For a perfect matching $M$, let $r(M)$ denote the number of red edges in $M$.

The $\textit{exact matching problem}$ asks, given $(G,k)$ with integer $k$, whether there exists a perfect matching $M$ with $r(M)=k$. The paper studies a different class of problems (popular near-maximum-weight matchings) and proves that if one could solve a certain popularity-constrained matching problem deterministically in polynomial time, then one could solve the exact matching problem deterministically in polynomial time. The paper notes that no deterministic polynomial-time algorithm is known for exact matching.

### 2. Open Problem

**Question 1.1.** Design a deterministic polynomial-time algorithm that, given a bipartite graph $G=(A,B;E)$ with red/blue edge colors and an integer $k$, decides whether there exists a perfect matching $M\subseteq E$ such that $r(M)=k$ (i.e., $M$ contains exactly $k$ red edges), and outputs such an $M$ when it exists.

### 3. Known Results

The exact matching problem of Papadimitriou–Yannakakis asks for a perfect matching with exactly $k$ red edges in a red/blue-colored bipartite graph $G=(A,B;E)$. As emphasized in Csáji–Király–Takazawa–Yokoi (2024), this problem remains a central derandomization challenge: randomized polynomial-time algorithms are known (via the isolation lemma/Tutte matrix style techniques), but a deterministic polynomial-time algorithm is still not known in general.

The 2024 paper uses exact matching as a hardness yardstick for “popular near-maximum(-weight)” matching: Theorem 4 shows that a deterministic polynomial-time algorithm for the one-sided popular near-maximum-weight matching problem (even with weights in $\{0,1\}$ and weak orders) would imply a deterministic polynomial-time algorithm for exact matching. Thus, their tractability results for popular maximum-weight/maximum-utility solutions (Theorems 1–3) are complemented by evidence that moving from “optimal” to “near-optimal” popularity constraints runs into the same barrier as exact matching.

Among the forward citations provided, “Max-Utility Matchings with Popularity via Critical Vertices” develops deterministic polynomial-time algorithms and polyhedral formulations for several popularity-with-utility variants (popular critical matchings, popular max-utility matchings). While methodologically adjacent (it also leverages structure of popular matchings and criticality), it does not address the red/blue exact-count constraint and does not yield a deterministic algorithm for exact matching. Consequently, based on the available forward-citation evidence, the exact matching problem remains open, and progress continues to be indirect—either by reductions showing that new deterministic algorithms would derandomize exact matching, or by developing deterministic algorithms for neighboring constrained-popularity problems that carefully avoid exact-count constraints.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #29 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414427837_p0/partial_progress/29.pdf)

### 4. Source and Verification

- **Source paper:** Gergely Csáji, Tamás Király, Kenjiro Takazawa, Yu Yokoi, [*Popular Maximum-Utility Matchings with Matroid Constraints*](https://doi.org/10.1287/moor.2024.0633), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 6 (Introduction, discussion before Theorem 4) and page 22 (Section 5.1, statement of Theorem 4 and surrounding text).
- **Area:** exact matching
- **Keywords:** `exact matching`, `bipartite perfect matching`, `deterministic polynomial time`, `colored edges`, `reductions`
- **Upstream problem record:** [W4414427837_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414427837_p0&n=29&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Gergely Csáji, Tamás Király, Kenjiro Takazawa, Yu Yokoi, [*Popular Maximum-Utility Matchings with Matroid Constraints*](https://doi.org/10.1287/moor.2024.0633), Mathematics of Operations Research, 2025.
2. [*Max-Utility Matchings with Popularity via Critical Vertices*](https://doi.org/10.1007/s00453-025-01347-3).
