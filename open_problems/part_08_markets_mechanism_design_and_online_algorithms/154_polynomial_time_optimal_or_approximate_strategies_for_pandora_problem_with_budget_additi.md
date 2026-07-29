# Polynomial-time optimal or approximate strategies for Pandora problem with budget-additive costs

This file contains the open problem on Polynomial-time optimal or approximate strategies for Pandora problem with budget-additive costs.

---

<a id="problem-1"></a>

## 1. Polynomial-time optimal or approximate strategies for Pandora problem with budget-additive costs

Source paper authors: Ben Berger, Tomer Ezra, Michal Feldman, Federico Fusco

### 1. Problem Background

Pandora's problem has a ground set of boxes $[n]=\{1,\dots,n\}$. Each box $i$ contains an independent nonnegative random value $V_i\sim D_i$ with finite expectation. A (possibly adaptive) strategy $\pi$ sequentially chooses unopened boxes to inspect; inspecting reveals the realized value and contributes to the total inspection cost. After any inspection the strategy may halt and receive reward equal to the maximum realized value among inspected boxes.

A combinatorial inspection cost function is $c:2^{[n]}\to \mathbb{R}_{\ge 0}$, assumed normalized and monotone: $c(\varnothing)=0$ and $c(S)\le c(T)$ for $S\subseteq T$. If the strategy inspects exactly the (random) set $S(\pi)\subseteq [n]$, its expected utility is
$$

 u(\pi)=\mathbb{E}\Big[\max_{i\in S(\pi)} V_i\Big]-\mathbb{E}[c(S(\pi))].

$$

A cost function is budget-additive (a.k.a. capped-additive) if there exist nonnegative weights $(w_i)_{i\in [n]}$ and a budget $B\ge 0$ such that for all $S\subseteq [n]$,
$$

 c(S)=\min\Big\{B,\sum_{i\in S} w_i\Big\}.

$$
This class is monotone and submodular. The computational model considered in the paper represents $c$ via oracle access (cost queries): given $S$, a query returns $c(S)$.

### 2. Open Problem

**Question 1.1.** Design an algorithm that, given oracle access to a budget-additive cost function $c(S)=\min\{B,\sum_{i\in S} w_i\}$ and explicit descriptions of independent value distributions $(D_i)_{i\in[n]}$, computes either:

1) an optimal Pandora strategy $\pi^*\in\arg\max_{\pi} u(\pi)$, or

2) a strategy $\pi$ with provable approximation guarantee for $\max_{\pi} u(\pi)$,

in time polynomial in $n$ (and the input encoding / desired accuracy), using only polynomially many cost queries.

### 3. Known Results

In the source paper (Berger–Ezra–Feldman–Fusco, 2023), Pandora’s problem is extended from additive inspection costs to a general monotone set function $c:2^{[n]}\to\mathbb R_{\ge 0}$. Two key takeaways frame the budget-additive open problem. First, for submodular costs, structural simplicity survives: there exists an optimal strategy with a non-adaptive inspection order (Theorem 4.1), obtained via a reduction to Bernoulli instances and a proof that an optimal policy can be taken to be “impulsive” (open in a fixed order and stop at the first nonzero). Second, computational simplicity fails dramatically in the value-oracle model: even deciding whether $\max_\pi u(\pi)>0$ requires super-polynomially many cost queries (Theorem 5.2), and hence no polynomial-query approximation is possible for general submodular costs.

Budget-additive costs $c(S)=\min\{B,\sum_{i\in S} w_i\}$ form a prominent subclass of submodular functions with additional structure (a single global cap). The cited follow-up/related works largely advance orthogonal directions—correlated values, time/order constraints, and general costly-information acquisition frameworks—typically under additive per-box costs. The most directly relevant progress is indirect: the thesis “Data Driven Search With Costly Information: When to Open Pandora's Box” and “Approximating pandora's box with correlations” develop approximation frameworks and reductions (e.g., to Uniform Decision Tree / Min-Sum Set Cover with Feedback) for correlated Pandora variants, while “Combinatorial selection with costly information” and “Commitment gap via correlation gap” provide composition and ex ante relaxation tools for costly-information MDP models under matroid-type constraints. These techniques suggest possible routes to handle the cap $B$ by converting it into a coupling/feasibility constraint or by designing surrogate-cost indices, but none yields a polynomial-time (or polynomial-query) algorithm for the oracle-given budget-additive set-cost model.

Consequently, the specific question posed in the source paper’s conclusion—whether budget-additive costs admit polynomial-time optimal or approximate strategies with only polynomially many cost queries—appears to remain open based on the provided forward citations. A central remaining gap is to reconcile the strong oracle lower bounds for general submodular costs with the extra parametric structure of budget-additive functions: either by exploiting that structure algorithmically (e.g., learning $w$ and $B$ sufficiently from queries, then optimizing a fixed-order-with-thresholds policy), or by proving matching query lower bounds even for capped-additive costs. Promising directions include: (i) reductions that treat the cap as a knapsack-like resource and apply prophet-inequality/thresholding methods developed for constrained Pandora variants, and (ii) adapting CICS water-filling and ex ante LP approaches to derive efficiently computable indices/thresholds when the only non-additivity is the global cap.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #141 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4405512051_p0/partial_progress/141.pdf)

### 4. Source and Verification

- **Source paper:** Ben Berger, Tomer Ezra, Michal Feldman, Federico Fusco, [*Pandora’s Problem with Combinatorial Cost*](https://doi.org/10.1287/moor.2023.0248), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 6 (Conclusion and Future Directions), page 25.
- **Area:** pandoras box
- **Keywords:** `pandora's problem`, `budget-additive costs`, `submodular costs`, `adaptive search`, `oracle complexity`, `approximation`
- **Upstream problem record:** [W4405512051_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4405512051_p0&n=141&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ben Berger, Tomer Ezra, Michal Feldman, Federico Fusco, [*Pandora’s Problem with Combinatorial Cost*](https://doi.org/10.1287/moor.2023.0248), Mathematics of Operations Research, 2024.
2. [*Data Driven Search With Costly Information: When to Open Pandora's Box*](https://scholar.google.com/scholar?q=Data%20Driven%20Search%20With%20Costly%20Information%3A%20When%20to%20Open%20Pandora%27s%20Box).
3. [*Combinatorial selection with costly information*](https://doi.org/10.1137/1.9781611978971.26).
4. [*Pandora's box problem with time constraints*](https://scholar.google.com/scholar?q=Pandora%27s%20box%20problem%20with%20time%20constraints).
5. [*Commitment gap via correlation gap*](https://scholar.google.com/scholar?q=Commitment%20gap%20via%20correlation%20gap).
6. [*Delegation with costly inspection*](https://doi.org/10.1145/3736252.3742640).
7. [*Optimal 4-Approximation for the Correlated Pandora's Problem*](https://scholar.google.com/scholar?q=Optimal%204-Approximation%20for%20the%20Correlated%20Pandora%27s%20Problem).
8. [*Approximating pandora's box with correlations*](https://arxiv.org/abs/2108.12976).
9. [*Pandora's problem with deadlines*](https://scholar.google.com/scholar?q=Pandora%27s%20problem%20with%20deadlines).
