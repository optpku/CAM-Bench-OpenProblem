# Designing polynomial-time 1/4-competitive secretary matching algorithm under edge arrivals

This file contains the open problem on Designing polynomial-time 1/4-competitive secretary matching algorithm under edge arrivals.

---

<a id="problem-1"></a>

## 1. Designing polynomial-time 1/4-competitive secretary matching algorithm under edge arrivals

Source paper authors: Tomer Ezra, Michal Feldman, Nick Gravin, Zhihao Gavin Tang

### 1. Problem Background

Consider an undirected weighted graph $G=(V,E)$ with $|E|=m$. Each edge $e\in E$ has an (adversarial) nonnegative weight $w_e\in\mathbb{R}$ that is unknown until the edge arrives online. In the edge-arrival secretary model, the edges $e_1,\dots,e_m$ arrive in a uniformly random order. When edge $e_t=uv$ arrives at time $t$, its weight $w_{e_t}$ is revealed, and the algorithm must immediately and irrevocably decide whether to add $e_t$ to its matching $\mu$, subject to feasibility (both endpoints $u,v$ are currently unmatched).

Let $\mu^*(E)$ denote a maximum-weight matching in $G$ (with respect to $w$), and let $\mathrm{OPT}=w(\mu^*(E))=\sum_{e\in\mu^*(E)} w_e$. An online algorithm $\mathrm{ALG}$ outputs a random matching $\mu$ and achieves competitive ratio $\alpha\in[0,1]$ if for every weighted graph instance $(G,w)$,
$$
\mathbb{E}[w(\mu)] \ge \alpha\, \mathrm{OPT},
$$
where the expectation is over the random arrival order and the algorithm’s internal randomness.

The paper gives an information-theoretic online algorithm for edge arrivals that achieves $\alpha=1/4$, but whose implementation appears to require estimating certain conditional availability probabilities that the authors do not know how to compute in polynomial time.

### 2. Open Problem

**Question 1.1.** Find a polynomial-time online algorithm $\mathrm{ALG}$ for the edge-arrival secretary matching model such that for every weighted graph $(G=(V,E),w)$ with $|E|=m$,
$$
\mathbb{E}[w(\mu)] \ge \tfrac{1}{4}\, w(\mu^*(E)),
$$
where $\mu$ is the matching output by $\mathrm{ALG}$, and the expectation is over the uniformly random arrival order of edges and the randomness of $\mathrm{ALG}$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #139 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4404717018_p0/partial_progress/139.pdf)

### 4. Source and Verification

- **Source paper:** Tomer Ezra, Michal Feldman, Nick Gravin, Zhihao Gavin Tang, [*Tight Bounds for Secretary Matching in General Graphs*](https://doi.org/10.1287/moor.2022.0206), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 6, Section 1.1 (Edge arrival techniques discussion); and reiterated Page 23, Remark after Theorem 5.2.
- **Area:** online matching
- **Keywords:** `secretary problem`, `online matching`, `edge arrivals`, `competitive ratio`, `polynomial-time algorithms`, `random-order model`
- **Upstream problem record:** [W4404717018_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4404717018_p0&n=139&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Tomer Ezra, Michal Feldman, Nick Gravin, Zhihao Gavin Tang, [*Tight Bounds for Secretary Matching in General Graphs*](https://doi.org/10.1287/moor.2022.0206), Mathematics of Operations Research, 2024.
