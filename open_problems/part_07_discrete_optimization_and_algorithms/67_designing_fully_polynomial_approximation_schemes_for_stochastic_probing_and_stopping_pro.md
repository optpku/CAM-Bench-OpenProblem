# Designing fully polynomial approximation schemes for stochastic probing and stopping problems

This file contains the open problem on Designing fully polynomial approximation schemes for stochastic probing and stopping problems.

---

<a id="problem-1"></a>

## 1. Designing fully polynomial approximation schemes for stochastic probing and stopping problems

Source paper authors: Danny Segev, Sahil Singla

### 1. Problem Background

This paper studies several stochastic combinatorial optimization problems defined on independent nonnegative random variables $X_1,\dots,X_n$ whose distributions are known.

An algorithmic approximation scheme for a maximization problem with optimal value $\mathrm{OPT}$ is:
1) An EPTAS: for every $\epsilon>0$, it outputs a solution of value at least $(1-\epsilon)\mathrm{OPT}$ in time $t(\epsilon)\cdot \mathrm{poly}(|I|)$, where $t$ depends only on $\epsilon$ and $|I|$ is the input length.
2) An FPTAS: for every $\epsilon>0$, it outputs a solution of value at least $(1-\epsilon)\mathrm{OPT}$ (sometimes written $(1+\epsilon)$-approximation depending on minimization/maximization convention) in time $\mathrm{poly}(n,1/\epsilon)$.

The paper provides EPTASes for several stochastic problems (e.g., Free-Order Prophets, non-adaptive and adaptive ProbeMax, and Pandora's Box with Commitment) via reductions to a multi-dimensional Santa Claus feasibility problem. It is noted that an FPTAS for the paper's multi-dimensional Santa Claus subroutine is impossible in general because the problem captures strongly NP-hard instances (via 3-Partition) even for a constant number of machines, so any FPTAS for the stochastic problems (if possible) would require different techniques than those used here.

### 2. Open Problem

**Question 1.1.** Determine whether one or more of the stochastic combinatorial optimization problems studied in the paper admit a fully polynomial time approximation scheme.

Concretely: for a given problem instance on $n$ random variables and accuracy parameter $\epsilon>0$, design an algorithm that runs in time $\mathrm{poly}(n,1/\epsilon)$ and outputs a solution whose expected objective value is at least $(1-\epsilon)$ times the optimal expected objective value for that instance.

### 3. Known Results

Segev–Singla (2025) give EPTASes for several stochastic probing and selection-stopping problems (Free-Order Prophets, Pandora’s Box with Commitment, non-adaptive and adaptive ProbeMax) by reducing them to a constant-machine, constant-dimension Multi-Dimensional Santa Claus feasibility problem and then applying an EPTAS for that subroutine. Their paper explicitly notes that an FPTAS for the Santa Claus subroutine is impossible in general (via strong NP-hardness from 3-Partition), so any FPTAS for the stochastic problems would require techniques that avoid this reduction or exploit additional structure in the stochastic objectives.

The only forward-citing work provided here, "Approximation Schemes for Sequential Hiring Problems", makes partial progress in the broader direction of approximation schemes for stochastic dynamic decision problems by proving a PTAS based on structural simplifications (block-responsive policies) and dynamic programming. However, its dependence on $1/\epsilon$ is super-polynomial, so it does not resolve whether any of the Segev–Singla problems admit an FPTAS. At present, based on the supplied citation data, the FPTAS question remains open; promising directions include identifying special cases where the stochastic objectives admit pseudo-polynomial dynamic programs (enabling scaling-based FPTASes) or proving hardness of FPTAS for specific stochastic probing/stopping problems under standard complexity assumptions.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #41 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7114802374_p0/partial_progress/41.pdf)

### 4. Source and Verification

- **Source paper:** Danny Segev, Sahil Singla, [*Efficient Approximation Schemes for Stochastic Probing and Selection-Stopping Problems*](https://doi.org/10.1287/moor.2023.0242), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 7 (Future Directions), page 34.
- **Area:** stochastic combinatorial optimization
- **Keywords:** `FPTAS`, `stochastic optimization`, `probing problems`, `optimal stopping`, `EPTAS`, `complexity`
- **Upstream problem record:** [W7114802374_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7114802374_p0&n=41&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Danny Segev, Sahil Singla, [*Efficient Approximation Schemes for Stochastic Probing and Selection-Stopping Problems*](https://doi.org/10.1287/moor.2023.0242), Mathematics of Operations Research, 2025.
2. *Approximation Schemes for Sequential Hiring Problems*.
