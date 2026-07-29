# Bound the integrality gap of time-indexed LP for bipartite AND/OR scheduling

This file contains the open problem on Bound the integrality gap of time-indexed LP for bipartite AND/OR scheduling.

---

<a id="problem-1"></a>

## 1. Bound the integrality gap of time-indexed LP for bipartite AND/OR scheduling

Source paper authors: Felix Happach, Andreas S. Schulz

### 1. Problem Background

Consider the single-machine scheduling problem with AND/OR precedence constraints. There is a set of jobs partitioned as $N=A\uplus B$. Each job $j\in N$ has a processing time $p_j\ge 0$ and a weight $w_j\ge 0$. A schedule is a non-preemptive ordering of the jobs on one machine with no overlap; $C_j$ denotes the completion time of job $j$. AND-precedence constraints are given by a directed arc set $E_{\wedge}\subseteq (A\times A)\cup (B\times B)$; an arc $(i,j)\in E_{\wedge}$ requires that $i$ completes before $j$ starts. OR-precedence constraints are given by an arc set $E_{\vee}\subseteq A\times B$. For each $b\in B$, its set of OR-predecessors is $P(b):=\{a\in A:(a,b)\in E_{\vee}\}$; feasibility requires that each $b\in B$ with $P(b)\neq\emptyset$ starts only after at least one job in $P(b)$ has completed. Let $\Delta:=\max_{b\in B}|P(b)|$.

A standard approach uses a time-indexed linear programming relaxation over a discrete time horizon $T:=\sum_{j\in N} p_j$ (for instance in the unit-processing-time case $p_j\in\{0,1\}$, one has $T\le n$). Introduce variables $x_{jt}$ indicating (fractionally) that job $j$ completes at integer time $t\in\{1,\dots,T\}$. The relaxation includes: (i) assignment constraints $\sum_{t=1}^T x_{jt}=1$ for all $j$; (ii) single-machine capacity constraints ensuring at most one unit-processing job executes at any time; (iii) AND-precedence constraints coupling cumulative completions so that successors cannot complete too early; and (iv) OR-precedence constraints coupling cumulative completions so that a job $b\in B$ cannot complete by time $t+p_b$ unless at least one predecessor $a\in P(b)$ has completed by time $t$. The LP objective is the fractional lower bound $\min \sum_{j\in N} w_j\sum_{t=1}^T t\,x_{jt}$, corresponding to $\sum_j w_j C_j$ in integer schedules.

The paper analyzes rounding algorithms based on random $\alpha$-points for this relaxation and notes that the tightness of these analyses (equivalently, the true worst-case integrality gap of the underlying time-indexed formulation for this AND/OR structure) is not established.

### 2. Open Problem

**Question 1.1.** Determine the best (smallest) constant $g\ge 1$ such that, for every instance of $1\mid ao\text{-}prec=A\uplus B\mid \sum_{j\in N} w_j C_j$ and for the corresponding time-indexed linear programming relaxation described above, the ratio
$$

\frac{\text{optimal objective value of an optimal integer schedule}}{\text{optimal objective value of the time-indexed LP relaxation}}

$$
is at most $g$. Equivalently, bound the integrality gap of the time-indexed LP relaxation for this problem class (as a function of parameters such as $\Delta$, or by a universal constant if possible), and in particular decide whether the approximation-factor analyses obtained via random $\alpha$-point rounding are tight in the worst case.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #78 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4377821221_p0/solutions/78.pdf)

### 4. Source and Verification

- **Source paper:** Felix Happach, Andreas S. Schulz, [*Approximation Algorithms and Linear Programming Relaxations for Scheduling Problems Related to Min-Sum Set Cover*](https://doi.org/10.1287/moor.2023.1368), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 7 (Conclusion), page 22 (arXiv v1 pagination)
- **Area:** scheduling with precedence constraints
- **Keywords:** `single-machine scheduling`, `OR-precedence constraints`, `time-indexed LP`, `integrality gap`, `alpha-point rounding`, `min-sum objectives`
- **Upstream problem record:** [W4377821221_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4377821221_p0&n=78&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Felix Happach, Andreas S. Schulz, [*Approximation Algorithms and Linear Programming Relaxations for Scheduling Problems Related to Min-Sum Set Cover*](https://doi.org/10.1287/moor.2023.1368), Mathematics of Operations Research, 2023.
