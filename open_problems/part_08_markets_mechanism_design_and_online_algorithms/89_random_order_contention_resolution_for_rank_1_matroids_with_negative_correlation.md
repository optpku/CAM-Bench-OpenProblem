# Random-order contention resolution for rank-1 matroids with negative correlation

This file contains the open problem on Random-order contention resolution for rank-1 matroids with negative correlation.

---

<a id="problem-1"></a>

## 1. Random-order contention resolution for rank-1 matroids with negative correlation

Source paper authors: Brian Brubach, Nathaniel Grammel, Will Ma, Aravind Srinivasan

### 1. Problem Background

A rank-1 matroid can be represented by a ground set of elements (here, edges) $E$ with the feasibility constraint that at most one element may be selected. Equivalently, in a star graph with center vertex $v$, the feasible matchings choose at most one edge incident to $v$.

An ordered (or random-order) contention resolution scheme (CRS) for this rank-1 constraint operates as follows. Each element $e\in E$ has an initially unknown activeness indicator $Z_e\in\{0,1\}$. The algorithm observes elements one-by-one in some order; when an element $e$ is revealed to be active ($Z_e=1$) and no previously accepted element has been chosen, the algorithm may either accept $e$ (and then must reject all later elements) or irrevocably discard $e$.

A random-order CRS means the observation order is a uniformly random permutation of $E$.

Let $z_e := \Pr[Z_e=1]$ denote the marginal activeness probability of element $e$. The rank-1 feasibility region corresponding to these marginals is $\sum_{e\in E} z_e \le 1$ (and $0\le z_e\le 1$).

A CRS is called $c$-selectable if for every instance and every element $e$, the ex ante probability that the algorithm accepts $e$ is at least $c\, z_e$.

In the setting of this paper, the activeness indicators $(Z_e)_{e\in E}$ need not be independent; they satisfy a (pairwise-to-setwise) negative correlation property: for every subset $S\subseteq E$ and $b\in\{0,1\}$,
$$
\Pr\big[\bigwedge_{e\in S}(Z_e=b)\big] \le \prod_{e\in S} \Pr[Z_e=b].
$$
In particular, the case $b=0$ asserts that joint inactivity events are no more likely than under independence.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a $(1-1/e)$-selectable random-order contention resolution scheme for a rank-1 matroid when the activeness indicators $(Z_e)_{e\in E}$ satisfy the negative correlation property
$$
\Pr\big[\bigwedge_{e\in S}(Z_e=b)\big] \le \prod_{e\in S} \Pr[Z_e=b]\quad \forall S\subseteq E,\ b\in\{0,1\},
$$
with given marginals $z_e=\Pr[Z_e=1]$ obeying $\sum_{e\in E} z_e \le 1$. That is, decide whether one can guarantee for all such instances that each element $e$ is accepted with probability at least $(1-1/e) z_e$ when elements are revealed in a uniformly random order and decisions are irrevocable.

### 3. Known Results

The source paper (Brubach–Grammel–Ma–Srinivasan) isolates a sharp gap between ordered and random-order contention resolution for the rank-1 (star) constraint when the activeness indicators $(Z_e)$ are not independent but satisfy the strong setwise negative-correlation property $\Pr[\wedge_{e\in S}(Z_e=b)]\le\prod_{e\in S}\Pr[Z_e=b]$ for $b\in\{0,1\}$. In their unit-patience bipartite matching application, dependent rounding (GKPS) produces exactly this kind of negative correlation among the $Z_e$ incident to a vertex. They prove that if the algorithm may choose the processing order (e.g., sort by weights), then the expected value on a star is minimized by the independent case, yielding a $(1-1/e)$-balanced ordered CRS under negative correlation. However, they explicitly leave open whether the same $(1-1/e)$ factor is achievable when the order is a uniformly random permutation.

Subsequent and related works largely continue to use $(1-1/e)$-selectable rank-1 random-order CRSs as a black box in the independent-activation model (e.g., in probe-commit/probing variants of online stochastic matching), without extending the analysis to negatively correlated $Z$. At the same time, work on alternative negative-dependence models for online contention resolution (e.g., random-element/batch models in revenue management) shows that negative dependence can fundamentally change achievable selectability constants, suggesting that the open problem may require either new robust analyses (showing independence is worst-case under the stated negative correlation) or explicit counterexamples tailored to random order.

A different line on two-stage stochastic matching develops star contention resolution under negative dependence (negative cylinder dependence/negative association) but typically under additional structure on marginals or without the random-order requirement. Overall, as of the cited forward literature, there is no paper establishing a $(1-1/e)$-selectable random-order CRS for rank-1 matroids under the full strong negative-correlation property for arbitrary marginals with $\sum_e z_e\le 1$; the best-known $(1-1/e)$ guarantee under negative correlation remains in the ordered (chosen-order) model, while random-order $(1-1/e)$ is only proved under independence.

#### 3.1 Upstream solution and partial-progress records

- [Solution #64 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3171990983_p0/solutions/64.pdf)

### 4. Source and Verification

- **Source paper:** Brian Brubach, Nathaniel Grammel, Will Ma, Aravind Srinivasan, [*Improved Guarantees for Offline Stochastic Matching via New Ordered Contention Resolution Schemes*](https://doi.org/10.1287/moor.2022.0256), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 6, end of Subsection 1.2 ("Reinterpretation as contention resolution under negative correlation")
- **Area:** contention resolution schemes
- **Keywords:** `contention resolution schemes`, `rank-1 matroid`, `random-order model`, `negative correlation`, `prophet inequalities`, `stochastic matching`
- **Upstream problem record:** [W3171990983_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3171990983_p0&n=64&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Brian Brubach, Nathaniel Grammel, Will Ma, Aravind Srinivasan, [*Improved Guarantees for Offline Stochastic Matching via New Ordered Contention Resolution Schemes*](https://doi.org/10.1287/moor.2022.0256), Mathematics of Operations Research, 2024.
2. [*Improved guarantees for offline stochastic matching via new ordered contention resolution schemes*](https://doi.org/10.1287/moor.2022.0256).
3. *Online contention resolution schemes for network revenue management and combinatorial auctions*.
4. [*Optimal Rounding for Two-Stage Bipartite Matching*](https://doi.org/10.1137/1.9781611978971.209).
5. [*Prophet matching meets probing with commitment*](https://arxiv.org/abs/2102.04325).
6. *Approximation Algorithms for Action-Reward Query-Commit Matching*.
7. *An Improved Mechanism for Pricing Ride-Hailing Fares*.
8. [*Online bipartite matching in the probe-commit model*](https://doi.org/10.1007/s10107-024-02184-y).
