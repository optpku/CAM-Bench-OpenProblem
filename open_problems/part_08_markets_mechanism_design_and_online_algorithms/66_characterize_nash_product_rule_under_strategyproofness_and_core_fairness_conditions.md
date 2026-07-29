# Characterize Nash product rule under strategyproofness and core fairness conditions

This file contains the open problem on Characterize Nash product rule under strategyproofness and core fairness conditions.

---

<a id="problem-1"></a>

## 1. Characterize Nash product rule under strategyproofness and core fairness conditions

Source paper authors: Felix Brandt, Matthias Greger, Erel Segal-Halevi, Warut Suksompong

### 1. Problem Background

Let there be a set of agents $N=[n]$ and alternatives $M=[m]$. Outcomes are distributions $q\in\Delta^m:=\{q\in\mathbb{R}^m_{\ge 0}:\sum_{j\in M} q_j=1\}$.

Each agent $i\in N$ has a unique ideal distribution (peak) $p_i\in\Delta^m$ and evaluates an outcome $q$ using Leontief utility
$$

 u_i(q)=\min_{j\in M_i}\frac{q_j}{p_{i,j}},\qquad M_i:=\{j\in M: p_{i,j}>0\}.

$$
An aggregation mechanism is a function $f:(\Delta^m)^n\to\Delta^m$ mapping the profile of peaks $P=(p_1,\dots,p_n)$ to an outcome $f(P)$.

Continuity of $f$ means: for every $P$ and $\varepsilon>0$ there exists $\delta>0$ such that $\|P-P'\|_1<\delta$ implies $\|f(P)-f(P')\|_1<\varepsilon$, where $\|\cdot\|_1$ denotes the $\ell_1$ norm on the finite-dimensional vector space.

Strategyproofness means that no single agent can benefit by misreporting her peak, holding others fixed, where preferences are induced by $u_i$ with true peak $p_i$. Group-strategyproofness is the analogous condition for coalitions.

Core-fair-share (a core-based fairness notion) for an outcome $q$ at profile $P$ means there is no coalition $N'\subseteq N$ and distribution $q'\in\Delta^m$ such that for every $q''\in\Delta^m$, every agent $i\in N'$ strictly prefers $(|N'|/n)q' + (1-|N'|/n)q''$ to $q$ (preferences again induced by $u_i$). A mechanism satisfies core fair share if $f(P)$ has no blocking coalition for every $P$.

The Nash product rule (Nash welfare maximizer) for Leontief utilities is
$$

\mathrm{NASH}(P)\in\arg\max_{q\in\Delta^m}\prod_{i\in N} u_i(q),

$$
which is known (in the paper) to be single-valued for these utilities.

### 2. Open Problem

**Question 1.1.** Determine whether the following implication holds for Leontief utilities on $\Delta^m$:

If a mechanism $f:(\Delta^m)^n\to\Delta^m$ is continuous, satisfies strategyproofness (for the Leontief-induced preferences), and satisfies core fair share, must it coincide with the Nash product rule $\mathrm{NASH}$ on all profiles $P\in(\Delta^m)^n$, i.e., must $f(P)=\mathrm{NASH}(P)$ for every $P$?

Equivalently, is group-strategyproofness dispensable in the characterization stating that $\mathrm{NASH}$ is the unique continuous mechanism satisfying group-strategyproofness and core fair share?

### 3. Known Results

In Brandt, Greger, Segal-Halevi, and Suksompong (2025), the Nash product rule $\mathrm{NASH}$ for Leontief utilities on the simplex $\Delta^m$ is shown to satisfy continuity, group-strategyproofness, and a core-based fairness notion (core fair share). Moreover, their Theorem 3 provides a sharp characterization: $\mathrm{NASH}$ is the unique continuous mechanism satisfying group-strategyproofness and core fair share. The open problem asks whether group-strategyproofness is actually necessary in this characterization, i.e., whether continuity + (individual) strategyproofness + core fair share already force $\mathrm{NASH}$.

The paper itself indicates that the proof of Theorem 3 uses group-strategyproofness only at a specific step (Lemma 9), suggesting the axiom might be weakenable, but it remains unresolved for plain Leontief utilities. A closely related positive result is established for the refined Leximin-Leontief preference extension: Theorem 4 shows that for Leximin-Leontief preferences, continuity + strategyproofness + core fair share do characterize $\mathrm{NASH}$. This strengthens the plausibility that the Leontief case might also admit such a weakening, but the refinement changes the incentive constraints, so it does not settle the original question.

The only forward-citing item provided here is a general survey on divisible voting, which (based on the limited information available) does not contribute a proof or counterexample. Thus, with the current citation set, the problem remains open: no known paper among the provided forward citations resolves whether individual strategyproofness suffices for the Leontief-utility characterization under core fair share and continuity.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #40 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4417437095_p0/partial_progress/40.pdf)

### 4. Source and Verification

- **Source paper:** Felix Brandt, Matthias Greger, Erel Segal-Halevi, Warut Suksompong, [*Optimal Budget Aggregation with Star-Shaped Preference Domains*](https://doi.org/10.1287/moor.2024.0723), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 17, Section 6.2 (Characterization) and Page 19, Section 8 (Conclusion)
- **Area:** mechanism design
- **Keywords:** `participatory budgeting`, `Leontief utilities`, `Nash welfare`, `strategyproofness`, `group-strategyproofness`, `core fair share`, `axiomatic characterization`
- **Upstream problem record:** [W4417437095_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4417437095_p0&n=40&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Felix Brandt, Matthias Greger, Erel Segal-Halevi, Warut Suksompong, [*Optimal Budget Aggregation with Star-Shaped Preference Domains*](https://doi.org/10.1287/moor.2024.0723), Mathematics of Operations Research, 2025.
2. *Voting in Divisible Settings: A Survey*.
