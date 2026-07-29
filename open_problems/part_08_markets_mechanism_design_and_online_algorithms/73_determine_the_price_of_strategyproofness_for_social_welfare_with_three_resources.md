# Determine the price of strategyproofness for social welfare with three resources

This file contains the open problem on Determine the price of strategyproofness for social welfare with three resources.

---

<a id="problem-1"></a>

## 1. Determine the price of strategyproofness for social welfare with three resources

Source paper authors: Xiaohui Bei, Zihao Li, Junjie Luo

### 1. Problem Background

Consider the multi-resource allocation model with a set of agents $N=\{1,2,\dots,n\}$ and a set of divisible resources $R=\{1,2,\dots,m\}$, where each resource has total supply normalized to $1$.

Each agent $i\in N$ has a normalized demand vector $d_i=(d_{i1},\dots,d_{im})\in(0,1]^m$ with $\max_{r\in R} d_{ir}=1$. The dominant resource of agent $i$ is any $r_i^*\in\arg\max_{r\in R} d_{ir}$.

An allocation is a matrix $A=(A_{ir})_{i\in N,r\in R}$ where $A_{ir}\ge 0$ is the fraction of resource $r$ allocated to agent $i$. Feasibility requires $\sum_{i\in N} A_{ir}\le 1$ for all $r\in R$.

Agents have Leontief preferences: the utility of agent $i$ under allocation $A$ is
$$

 u_i(A_i)=\max\{y\ge 0: A_{ir}\ge y\, d_{ir}\ \text{for all } r\in R\},

$$
where $A_i=(A_{i1},\dots,A_{im})$.

A mechanism is a function $f$ mapping every demand profile $(d_1,\dots,d_n)$ to a feasible allocation $f(d_1,\dots,d_n)$.

Define the following properties for a mechanism $f$:

1) Share incentive (SI): for every instance, for all $i$, $u_i(f_i)\ge 1/n$.

2) Envy freeness (EF): for every instance, for all $i,j$, $u_i(f_i)\ge u_i(f_j)$.

3) Pareto optimality (PO): for every instance, there is no feasible allocation $A'$ with $u_i(A'_i)\ge u_i(f_i)$ for all $i$ and $u_{i_0}(A'_{i_0})>u_{i_0}(f_{i_0})$ for some $i_0$.

4) Strategyproofness (SP): for every instance and agent $i$, misreporting $d'_i$ cannot increase $u_i$, i.e., if $I$ is the true profile and $I'$ differs only in agent $i$'s report, then $u_i(f_i(I))\ge u_i(f_i(I'))$.

The utilitarian social welfare of an allocation is $\mathrm{SW}(A)=\sum_{i\in N} u_i(A_i)$.

Given an instance $I=(d_1,\dots,d_n)$, let $\mathrm{OPT}_{\mathrm{fair}}(I)$ denote the maximum social welfare over all feasible allocations that satisfy SI and EF:
$$

\mathrm{OPT}_{\mathrm{fair}}(I)=\max\{\mathrm{SW}(A): A \text{ feasible and satisfies SI and EF}\}.

$$

For a mechanism $f$, its fair-ratio for social welfare is
$$

\mathrm{FR}_{\mathrm{SW}}(f)=\sup_I \frac{\mathrm{OPT}_{\mathrm{fair}}(I)}{\mathrm{SW}(f(I))}.

$$

For a fixed number of resources $m$, the price of strategyproofness (for social welfare) is the best achievable fair-ratio among mechanisms satisfying SI, EF, PO, and SP:
$$

\mathrm{PoSP}_{\mathrm{SW}}(m)=\inf_{f\ \text{satisfies SI,EF,PO,SP}} \mathrm{FR}_{\mathrm{SW}}(f).

$$

The setting of interest here is $m=3$ resources.

### 2. Open Problem

**Question 1.1.** Determine the exact value of $\mathrm{PoSP}_{\mathrm{SW}}(3)$, where
$$

\mathrm{PoSP}_{\mathrm{SW}}(3)=\inf_{f\ \text{satisfies SI,EF,PO,SP}}\ \sup_I \frac{\mathrm{OPT}_{\mathrm{fair}}(I)}{\mathrm{SW}(f(I))}

$$
and $\mathrm{OPT}_{\mathrm{fair}}(I)=\max\{\mathrm{SW}(A): A \text{ feasible and satisfies SI and EF}\}$ for the 3-resource Leontief multi-resource allocation problem described above.

Equivalently, close (or determine) the gap between the known bounds
$$

2 \le \mathrm{PoSP}_{\mathrm{SW}}(3) \le 3.

$$

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #47 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7128591806_p0/solutions/47.pdf)

### 4. Source and Verification

- **Source paper:** Xiaohui Bei, Zihao Li, Junjie Luo, [*Fair and Efficient Multi-resource Allocation for Cloud Computing: Beyond Dominant Resource Fairness*](https://doi.org/10.1287/moor.2024.0714), Mathematics of Operations Research, 2026.
- **Location in paper:** Section 5 (Price of Strategyproofness), page 30 (discussion after Theorem 7) and page 33 (statement preceding Lemma 16).
- **Area:** fair division mechanisms
- **Keywords:** `multi-resource allocation`, `dominant resource fairness`, `strategyproofness`, `envy freeness`, `share incentive`, `Leontief preferences`, `price of anarchy`
- **Upstream problem record:** [W7128591806_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7128591806_p0&n=47&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Xiaohui Bei, Zihao Li, Junjie Luo, [*Fair and Efficient Multi-resource Allocation for Cloud Computing: Beyond Dominant Resource Fairness*](https://doi.org/10.1287/moor.2024.0714), Mathematics of Operations Research, 2026.
