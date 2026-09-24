# Determine complexity of minimizing sum of boundary cut sizes in hypergraph k-partitions

This file contains the open problem on Determine complexity of minimizing sum of boundary cut sizes in hypergraph k-partitions.

---

<a id="problem-1"></a>

## 1. Determine complexity of minimizing sum of boundary cut sizes in hypergraph k-partitions

Source paper authors: Calvin Beideman, Karthekeyan Chandrasekaran, Weihang Wang

### 1. Problem Background

Let $G=(V,E)$ be a (multi-)hypergraph with vertex set $V$ of size $n$ and hyperedge set $E$. Each hyperedge $e\in E$ is a subset of $V$. (The paper primarily discusses the unweighted case, i.e., each hyperedge has unit cost; the objective below is stated for this setting.)

For a nonempty proper subset $U\subset V$, define the cut-set
$$
\delta(U):=\{e\in E: e\cap U\neq\emptyset \text{ and } e\cap (V\setminus U)\neq\emptyset\},
$$
and its cut value $d(U):=|\delta(U)|$.

A $k$-partition of $V$ is an ordered tuple $(V_1,\dots,V_k)$ of pairwise disjoint nonempty subsets whose union is $V$.

For a $k$-partition $(V_1,\dots,V_k)$, the paper considers various objectives based on the boundary sizes $|\delta(V_i)|$. In particular, the variant highlighted in the conclusion asks to minimize the sum of boundary cut values
$$
\sum_{i=1}^k |\delta(V_i)| = \sum_{i=1}^k d(V_i).
$$

### 2. Open Problem

**Question 1.1.** Given a hypergraph $G=(V,E)$ and a fixed integer $k\ge 5$, determine the computational complexity of the optimization problem
$$
\min\left\{\sum_{i=1}^k |\delta(V_i)| : (V_1,\dots,V_k) \text{ is a } k\text{-partition of } V\right\}.
$$
In particular, decide whether this problem admits a polynomial-time algorithm for fixed $k\ge 5$ (or whether it is NP-hard) in the unweighted hypergraph setting.

### 3. Known Results

The objective in the open problem is the minsum boundary variant of hypergraph $k$-partitioning: minimize $\sum_{i=1}^k d(V_i)$ where $d(U)=|\delta(U)|$ is the (unweighted) hypergraph cut function. In the notation of the source paper, this is distinct from Hypergraph-$k$-Cut (which minimizes $|\delta(V_1,\dots,V_k)|$ counting each crossing hyperedge once) and from Minmax-Hypergraph-$k$-Partition (which minimizes $\max_i d(V_i)$). The source paper develops powerful terminal-cut structural theorems (notably Theorem 1.4) enabling deterministic enumeration for Hypergraph-$k$-Cut and Minmax-Hypergraph-$k$-Partition for fixed $k$, but it explicitly notes that analogous structure fails for the minsum boundary objective and leaves its complexity for $k\ge 5$ open.

Subsequent work on submodular partitioning has made partial progress on the minsum side. The strongest direct advance toward the stated objective is the polynomial-time algorithm for minimum 4-partition of a general submodular function, which implies a polynomial-time algorithm for minimum 5-partition when the function is symmetric submodular; since hypergraph cut functions are symmetric submodular, this yields a polynomial-time algorithm for the hypergraph minsum boundary objective at $k=5$. However, no general polynomial-time algorithm is known for fixed $k\ge 6$, and no NP-hardness is established for fixed $k\ge 5$ in the unweighted hypergraph setting.

On the minmax and standard $k$-cut sides, polynomial-time solvability for fixed $k$ is now well developed: minmax symmetric-submodular partitioning admits an $n^{O(k^2)}$-time algorithm, and hypergraph minimum $k$-cut admits deterministic enumeration algorithms for fixed $k$. These results supply techniques (terminal-cut enumeration, contraction/uncrossing structure) that may inform future attacks on the minsum boundary objective, but current literature still treats the fixed-$k$ minsum symmetric-submodular/hypergraph partition problem beyond $k=5$ as open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #103 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4389673940_p0/partial_progress/103.pdf)

### 4. Source and Verification

- **Source paper:** Calvin Beideman, Karthekeyan Chandrasekaran, Weihang Wang, [*Counting and Enumerating Optimum Cut Sets for Hypergraph <i>k</i>-Partitioning Problems for Fixed <i>k</i>*](https://doi.org/10.1287/moor.2022.0259), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 24, Section 7 (Conclusion)
- **Area:** hypergraph k partitioning
- **Keywords:** `hypergraph partitioning`, `k-partition`, `submodular partitioning`, `computational complexity`, `cut function`, `polynomial-time algorithm`
- **Upstream problem record:** [W4389673940_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4389673940_p0&n=103&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Calvin Beideman, Karthekeyan Chandrasekaran, Weihang Wang, [*Counting and Enumerating Optimum Cut Sets for Hypergraph <i>k</i>-Partitioning Problems for Fixed <i>k</i>*](https://doi.org/10.1287/moor.2022.0259), Mathematics of Operations Research, 2023.
2. [*Min–max partitioning of hypergraphs and symmetric submodular functions*](https://doi.org/10.1007/s00493-023-00021-y).
3. [*A polynomial time algorithm for finding a minimum 4-partition of a submodular function*](https://doi.org/10.1007/s10107-023-02029-0).
4. [*Minimum Cut and Minimum k-Cut in Hypergraphs via Branching Contractions*](https://doi.org/10.1145/3570162).
5. [*Deterministic enumeration of all minimum cut-sets and k-cut-sets in hypergraphs for fixed k*](https://doi.org/10.1007/s10107-023-02013-8).
6. [*Algorithms for new objectives in graph partitioning and generalizations*](https://arxiv.org/search/?query=Algorithms+for+new+objectives+in+graph+partitioning+and+generalizations).
