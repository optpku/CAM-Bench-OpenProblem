# Determine tight PTAS running times for q-norm load balancing with intermediate machines

This file contains the open problem on Determine tight PTAS running times for q-norm load balancing with intermediate machines.

---

<a id="problem-1"></a>

## 1. Determine tight PTAS running times for q-norm load balancing with intermediate machines

Source paper authors: Lin Chen, Liangde Tao, José Verschae

### 1. Problem Background

We consider scheduling on $m$ identical parallel machines with $n$ jobs, each job $j$ having processing time $p_j>0$. A schedule is an assignment of jobs to machines. For a schedule, let the load on machine $i$ be
$$
C_i=\sum_{j\to i} p_j.
$$
Fix a constant $q>1$. The optimization objective is the $q$-power sum (equivalently the $\ell_q$-norm) of loads:
$$
\min \sum_{i=1}^m C_i^q \qquad \text{(equivalently minimize }(\sum_{i=1}^m C_i^q)^{1/q}\text{).}
$$
This problem is denoted $P\|\|\sum_i C_i^q$ in three-field scheduling notation.

An algorithm is a PTAS if for every $\varepsilon>0$ it outputs a schedule of objective value at most $(1+\varepsilon)$ times optimal in time $T(n,m,\varepsilon)$ that is polynomial in $n$ for each fixed $\varepsilon$.

We are interested in the fine-grained dependence of the best possible PTAS running time on $\varepsilon$ and on $m$ when $m$ grows as a power of $1/\varepsilon$. In particular, let
$$
m = \Theta\bigl((1/\varepsilon)^\theta\bigr)
$$
for a fixed exponent $\theta\in(1/2,1].
$$
The paper establishes (under ETH) a nearly tight running time $2^{\tilde O(\sqrt{1/\varepsilon})}+n^{O(1)}$ for the regime $m=\Theta(\sqrt{1/\varepsilon})$, and shows that for sufficiently large $m$ (e.g. $m=\Omega((1/\varepsilon)\log^2(1/\varepsilon))$) there are algorithms with running time polynomial in $1/\varepsilon$; it also gives a PTAS with running time $(1/\varepsilon)^{O(m)}+n^{O(1)}$ for $m=O(\sqrt{1/\varepsilon})$. The remaining regime $m=\Theta((1/\varepsilon)^\theta)$ for $\theta\in(1/2,1]$ is left unresolved.

### 2. Open Problem

**Question 1.1.** For the scheduling problem $P\|\|\sum_{i=1}^m C_i^q$ with fixed constant $q>1$, determine the tight asymptotic running time (as a function of $\varepsilon$ and $n$) of the fastest PTAS in the parameter regime
$$
m = \Theta\bigl((1/\varepsilon)^\theta\bigr)\quad\text{for a fixed }\theta\in(1/2,1].
$$
In particular, either:
1) prove a matching (ETH-based) lower bound on the PTAS running time in this regime (a subexponential lower bound in $1/\varepsilon$), or
2) design a PTAS whose running time improves over the known bounds in this regime,
so as to characterize the optimal dependence on $1/\varepsilon$ for these values of $m$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #26 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4413848299_p0/partial_progress/26.pdf)
- [pipeline final 26](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4413848299_p0/partial_progress/pipeline_final_26.pdf)

### 4. Source and Verification

- **Source paper:** Lin Chen, Liangde Tao, José Verschae, [*Tight Running Times for Minimum ℓ<sub><i>q</i></sub>-Norm Load Balancing: Beyond Exponential Dependencies on 1/ϵ*](https://doi.org/10.1287/moor.2023.0231), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 2, Introduction (Contribution Overview); also Page 46, Conclusion (Section H).
- **Area:** parallel machine scheduling
- **Keywords:** `scheduling`, `ptas`, `load balancing`, `ellq norm`, `fine-grained complexity`, `ETH lower bounds`
- **Upstream problem record:** [W4413848299_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4413848299_p0&n=26&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Lin Chen, Liangde Tao, José Verschae, [*Tight Running Times for Minimum ℓ<sub><i>q</i></sub>-Norm Load Balancing: Beyond Exponential Dependencies on 1/ϵ*](https://doi.org/10.1287/moor.2023.0231), Mathematics of Operations Research, 2025.
