# Determine the exact master route ratio for a priori TSP with depot

This file contains the open problem on Determine the exact master route ratio for a priori TSP with depot.

---

<a id="problem-1"></a>

## 1. Determine the exact master route ratio for a priori TSP with depot

Source paper authors: Jannis Blauth, Meike Neuwohner, Luise Puhlmann, Jens Vygen

### 1. Problem Background

Let $(V,c)$ be a finite metric space (triangle inequality, symmetry, and $c(v,v)=0$) whose points $V$ are called customers. Each customer $v\in V$ is active independently with probability $p(v)\in(0,1]$. A distinguished customer $d\in V$ is a depot with $p(d)=1$.

An \emph{a priori TSP tour} is a cyclic ordering (TSP tour) $T$ visiting all vertices in $V$, chosen before seeing which customers are active. Given a realized active set $A\subseteq V$, the realized tour cost is the length of the tour obtained by \emph{skipping} inactive vertices in the order prescribed by $T$; denote this realized cost by $c(T[A])$. The objective value of $T$ is $\mathbb{E}[c(T[A])]$ where the expectation is over the independent activations.

For a nonempty subset $S\subseteq V$ with $d\in S$, a \emph{master route solution} based on $S$ consists of:
1) a TSP tour on $S$ of length $\mathrm{OPT}_{\mathrm{tsp}}(S,c)$, and
2) for each $v\in V\setminus S$, two parallel edges connecting $v$ to a nearest point in $S$, where $c(v,S):=\min\{c(v,s): s\in S\}$.

Under the standard analysis for master route solutions, the expected cost of the master route solution based on $S$ is
$$
\mathrm{MR}(S) := \mathbb{E}\Big[\mathbf{1}_{\{|A|\ge 2\}}\Big(\mathrm{OPT}_{\mathrm{tsp}}(S,c) + 2\sum_{v\in A} c(v,S)\Big)\Big],
$$
where $A$ is the random active set, and the indicator accounts for the convention that if fewer than two customers are active then one may shortcut to cost $0$.

Let $\mathrm{OPT}$ denote the minimum possible expected cost $\min_T \mathbb{E}[c(T[A])]$ over all a priori tours $T$ for $(V,c,p)$.

The \emph{master route ratio} (with depot) is the worst-case ratio between the best master route solution and the optimal a priori tour, i.e.
$$
\rho^* := \sup_{(V,c,p)\,\text{with depot }d} \ \frac{\min\{\mathrm{MR}(S): \varnothing\ne S\subseteq V\}}{\mathrm{OPT}},
$$
with the convention $0/0:=1$ when needed.

### 2. Open Problem

**Question 1.1.** Determine the exact value of the master route ratio $\rho^*$, i.e., compute
$$
\rho^* := \sup_{(V,c,p)\,\text{with depot }d} \ \frac{\min\{\mathrm{MR}(S): \varnothing\ne S\subseteq V\}}{\mathrm{OPT}}
$$
for the a priori TSP with independent activations and a depot $d$ satisfying $p(d)=1$. In particular, decide whether
$$
\rho^* = \frac{1}{1-e^{-1/2}}.
$$

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #138 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4404566852_p0/solutions/138.pdf)

### 4. Source and Verification

- **Source paper:** Jannis Blauth, Meike Neuwohner, Luise Puhlmann, Jens Vygen, [*Improved Guarantees for the A Priori TSP*](https://doi.org/10.1287/moor.2023.0322), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 5, Section 1.2 (after Theorem 6); reiterated in Page 38, Section 9 (Discussion).
- **Area:** stochastic tsp
- **Keywords:** `a priori tsp`, `stochastic optimization`, `master route solutions`, `worst-case ratio`, `metric tsp`, `random activations`
- **Upstream problem record:** [W4404566852_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4404566852_p0&n=138&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jannis Blauth, Meike Neuwohner, Luise Puhlmann, Jens Vygen, [*Improved Guarantees for the A Priori TSP*](https://doi.org/10.1287/moor.2023.0322), Mathematics of Operations Research, 2024.
