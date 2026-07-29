# Characterize limiting competitive ratio of p-sample matroid secretary via i.i.d. analogues

This file contains the open problem on Characterize limiting competitive ratio of p-sample matroid secretary via i.i.d. analogues.

---

<a id="problem-1"></a>

## 1. Characterize limiting competitive ratio of p-sample matroid secretary via i.i.d. analogues

Source paper authors: José Correa, Andrés Cristi, Boris Epstein, José A. Soto

### 1. Problem Background

Let $(S,\mathcal I)$ be a matroid (or more generally an independence system) on a finite ground set $S$. In a sampling-based online selection problem parameterized by $p\in[0,1)$, each element $e\in S$ is independently placed into an information set $H$ with probability $p$ and otherwise into an online set $S\setminus H$. An adversary assigns nonnegative weights $Y(e)\ge 0$ to all elements. The algorithm observes the elements in $H$ (and their relative ranking by weight), then the online elements arrive in uniformly random order; upon each arrival, the algorithm must irrevocably decide whether to accept the element, maintaining that the accepted set remains independent in $(S,\mathcal I)$.

Let $S[q]$ denote the random subset obtained by including each element of $S$ independently with probability $q$. The online set has the same distribution as $S[1-p]$. For a fixed weight function $Y$, define
$$
\mathrm{OPT}(\mathcal I,q,Y) := \mathbb E\big[\max\{\sum_{e\in I} Y(e): I\in\mathcal I,\ I\subseteq S[q]\}\big],
$$
where the expectation is over the randomness of $S[q]$.

For a class $\mathcal C$ of independence systems, define $\beta_{\mathcal C}(p)$ as the infimum, over $(S,\mathcal I)\in \mathcal C$, of the best competitive ratio achievable by any online algorithm in the above $p$-sampling model, where competitiveness is measured against $\mathrm{OPT}(\mathcal I,1-p,Y)$.

Let $\mathcal M$ denote the class of all matroids. The matroid secretary conjecture asks whether $\beta_{\mathcal M}(0)>0$, i.e., whether there exists a constant-competitive algorithm for the matroid secretary problem (the case $p=0$). The paper observes that understanding the limit $L:=\lim_{p\to 1} \beta_{\mathcal M}(p)$ and identifying an appropriate full-information/i.i.d.-type analogue whose optimal competitive ratio equals $L$ would have major consequences.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a natural matroid-valued analogue of the single-choice i.i.d. prophet inequality whose optimal competitive ratio equals
$$
L := \lim_{p\to 1} \beta_{\mathcal M}(p),
$$
where $\beta_{\mathcal M}(p)$ is the optimal worst-case competitive ratio for the $p$-sample-driven online selection problem on the class $\mathcal M$ of all matroids (with adversarial nonnegative weights and random arrival order), benchmarked against $\mathrm{OPT}(\mathcal I,1-p,Y)$.

In particular, decide whether one can prove an equality of the form
$$
\lim_{p\to 1}\beta_{\mathcal M}(p) = \rho,
$$
where $\rho$ is the optimal competitive ratio of a specified i.i.d.-type matroid online-selection model with known distributions (or another clearly defined probabilistic matroid model), analogous to how $\lim_{p\to 1}\alpha(p)=\alpha^*$ holds in the rank-1 (single selection) case.

### 3. Known Results

In Correa--Cristi--Epstein--Soto (2021), the rank-1 (single-choice) $p$-sample-driven optimal stopping problem is solved exactly via a limit LP and an optimal-transport structural theorem, yielding an optimal threshold policy and a competitive ratio $\alpha(p)$ that satisfies $\lim_{p\to 1}\alpha(p)=\alpha^*\approx 0.745$, matching the classical i.i.d. prophet inequality constant. In Section 5.3 they pose the matroid generalization: define $\beta_{\mathcal M}(p)$ for the $p$-sample matroid secretary model benchmarked against $\mathrm{OPT}(\mathcal I,1-p,Y)$, and ask whether $L=\lim_{p\to 1}\beta_{\mathcal M}(p)$ equals the optimal competitive ratio of some natural i.i.d./full-information matroid analogue. They observe that proving such an identification with any known constant-competitive matroid prophet/prophet-secretary/random-assignment model would imply $L>0$ and, by monotonicity in $p$, would yield $\beta_{\mathcal M}(0)>0$, resolving the matroid secretary conjecture.

The forward-citing literature provided does not resolve this limiting-characterization question. The closest conceptual progress is the development of bridges between secretary-type random-order models and prophet-type distributional models under matroid constraints. "Secretary Problems, Prophet Inequalities, and Contention Resolution Schemes" shows that constant-competitive matroid secretary is equivalent (up to constants) to the existence of universal random-order contention resolution schemes, reframing the difficulty in terms of online CRS that work for broad (even correlated) priors. On the prophet-from-samples side, "Single-sample prophet inequalities via greedy-ordered selection" gives constant-factor single-sample prophet inequalities for several matroid families (e.g., transversal matroids) and proves that certain strong single-sample prophet guarantees would imply constant-competitive order-oblivious secretary algorithms, suggesting that extending such results to all matroids may be as hard as matroid secretary.

Other cited works contribute tools on the i.i.d./prophet side (posted-price implementations; equivalences between prophet benchmarks) and sharpen rank-1 sampling limits, but none identifies a matroid-valued i.i.d. analogue whose optimal ratio provably equals $\lim_{p\to 1}\beta_{\mathcal M}(p)$. Thus the problem remains open; a promising direction is to formulate an i.i.d.-type matroid model that captures the information revealed by a $p\to 1$ sample (nearly full ordinal information on most elements) and then relate its optimal ratio to universal RO contention resolution or to prophet-secretary/pricing frameworks, while avoiding implications that would immediately settle the matroid secretary conjecture.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #59 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3105682563_p0/partial_progress/59.pdf)

### 4. Source and Verification

- **Source paper:** José Correa, Andrés Cristi, Boris Epstein, José A. Soto, [*Sample-Driven Optimal Stopping: From the Secretary Problem to the i.i.d. Prophet Inequality*](https://doi.org/10.1287/moor.2023.1363), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5.3, pages 23–24 (discussion around the limit as p → 1 and matroid secretary problem consequences)
- **Area:** prophet inequalities
- **Keywords:** `matroid secretary problem`, `sampling model`, `competitive ratio`, `prophet inequalities`, `limit as p approaches one`, `independence systems`
- **Upstream problem record:** [W3105682563_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3105682563_p0&n=59&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. José Correa, Andrés Cristi, Boris Epstein, José A. Soto, [*Sample-Driven Optimal Stopping: From the Secretary Problem to the i.i.d. Prophet Inequality*](https://doi.org/10.1287/moor.2023.1363), Mathematics of Operations Research, 2023.
2. *Secretary Problems, Prophet Inequalities, and Contention Resolution Schemes*.
3. [*Single-sample prophet inequalities via greedy-ordered selection*](https://doi.org/10.1137/1.9781611977073.54).
4. [*Power of posted-price mechanisms for prophet inequalities*](https://doi.org/10.1137/1.9781611977912.163).
5. [*Prophet inequalities via the expected competitive ratio*](https://doi.org/10.1145/3717076).
6. [*Secretary problems: The power of a single sample*](https://doi.org/10.1137/1.9781611977554.ch77).
7. [*Prophet Inequality from Samples: Is the More the Merrier?*](https://doi.org/10.1137/1.9781611978971.76).
8. *How to Sell Online (Fast) via Pricing-Based Algorithms*.
