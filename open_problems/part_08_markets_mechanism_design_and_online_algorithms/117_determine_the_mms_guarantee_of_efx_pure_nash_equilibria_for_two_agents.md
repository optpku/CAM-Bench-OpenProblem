# Determine the MMS guarantee of EFX pure Nash equilibria for two agents

This file contains the open problem on Determine the MMS guarantee of EFX pure Nash equilibria for two agents.

---

<a id="problem-1"></a>

## 1. Determine the MMS guarantee of EFX pure Nash equilibria for two agents

Source paper authors: Georgios Amanatidis, Georgios Birmpas, Federico Fusco, Philip Lazos, Stefano Leonardi, Rebecca Reiffenhäuser

### 1. Problem Background

Consider a finite set of indivisible goods $M$ and two agents $N=\{1,2\}$. Each agent $i$ has a nonnegative additive valuation $v_i:2^M\to\mathbb{R}_{\ge 0}$, i.e., $v_i(S)=\sum_{g\in S} v_i(g)$ for all $S\subseteq M$.

An allocation is a partition $A=(A_1,A_2)$ of $M$. For $\alpha\in(0,1]$, the allocation is $\alpha$-maximin-share fair ($\alpha$-MMS) for agent $i$ if $v_i(A_i)\ge \alpha\,\mu_i$, where the maximin share is
$$
\mu_i = \mu_i(2,M) := \max_{(P_1,P_2)\in \Pi_2(M)} \min\{v_i(P_1),v_i(P_2)\},
$$
with $\Pi_2(M)$ the set of all 2-way partitions of $M$.

Envy-freeness up to any good (EFX) for two agents means: for each $i\ne j$, for every good $g\in A_j$ with $v_i(g)>0$,
$$
 v_i(A_i) \ge v_i(A_j\setminus\{g\}).
$$

A (deterministic, no-money) allocation mechanism $\mathcal{M}$ maps a bid profile $b=(b_1,b_2)$, where each $b_i\in\mathbb{R}_{\ge 0}^{|M|}$, to an allocation $\mathcal{M}(b)$. Given true valuations $v=(v_1,v_2)$, a bid profile $b$ is a pure Nash equilibrium (PNE) if no agent can increase her true utility $v_i\big(\mathcal{M}(b)_i\big)$ by unilaterally changing her bid vector.

Say that a mechanism $\mathcal{M}$ has EFX PNE on all instances if for every pair $(v_1,v_2)$ it admits at least one PNE, and for every PNE $b$, the induced allocation $\mathcal{M}(b)$ is EFX with respect to the true valuations $(v_1,v_2)$.

### 2. Open Problem

**Question 1.1.** Find the best universal constant $\alpha^*\in[0,1]$ such that the following holds:

For every mechanism $\mathcal{M}$ that, for every additive-valuation instance $(v_1,v_2)$, has at least one pure Nash equilibrium and every pure Nash equilibrium induces an EFX allocation with respect to $(v_1,v_2)$, every such equilibrium allocation $A=\mathcal{M}(b)$ satisfies
$$
 v_i(A_i) \ge \alpha^*\,\mu_i \quad \text{for both } i\in\{1,2\}.
$$

Equivalently, determine the tight worst-case MMS approximation guarantee (as a function-free constant) enjoyed by EFX allocations arising at PNE of mechanisms whose PNE always exist and are always EFX. In particular, decide whether one can always take $\alpha^*=1$ (MMS always), or whether $\alpha^*<1$, and if so, determine the optimal $\alpha^*$ (the paper proves existence of some $\alpha>2/3$).

### 3. Known Results

The open problem asks for the tight universal constant $\alpha^*$ such that, for every two-agent additive instance and every mechanism whose pure Nash equilibria (PNE) always exist and whose every PNE outcome is EFX with respect to the true valuations, every equilibrium allocation is $\alpha^*$-MMS for both agents. In the non-strategic setting, EFX alone only implies $2/3$-MMS and this is tight (Theorem 2.6 in the source paper, via Amanatidis et al. 2018). The source paper shows that imposing the strategic equilibrium requirement strengthens the MMS guarantee beyond what EFX alone provides.

Concretely, the source paper proves three key partial results. First, for the specific Plaut--Roughgarden Mod-Cut&Choose mechanism, PNE always exist and every PNE outcome is MMS (hence EFX for $n=2$) (Theorem 4.3). Second, for the entire class of mechanisms with guaranteed PNE existence and universal EFX-at-PNE, when $|M|=4$ every PNE outcome must be MMS (Theorem 4.5), already separating equilibrium EFX from arbitrary EFX allocations. Third, for general $|M|$, every such mechanism guarantees $\alpha$-MMS at every PNE for some universal constant $\alpha>2/3$ (Theorem 4.7), but the proof is non-quantitative about the best possible $\alpha$ and does not settle whether $\alpha^*=1$.

The forward-citing literature provided here does not resolve the tight value of $\alpha^*$. The two surveys ("Fair division of indivisible goods: Recent progress and open questions" and "Algorithmic fair allocation of indivisible items: A survey and new questions") contextualize the question among EFX/MMS and strategic equilibrium research but do not improve bounds. Related incentive frameworks ("Fair shares: Feasibility, domination, and incentives") and work in different strategic models ("Fair Division with Interdependent Values") indicate alternative ways to obtain MMS-like guarantees under incentives, but they do not address the stringent requirement that every PNE be EFX in the independent additive model. Thus, determining whether $\alpha^*=1$ or finding the optimal $\alpha^*<1$ remains open; promising directions include constructing explicit counterexamples (mechanisms/instances) that force an EFX PNE below MMS, or strengthening the structural arguments in Theorem 4.7 to yield an explicit tight constant.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #99 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4389193896_p0/partial_progress/99.pdf)

### 4. Source and Verification

- **Source paper:** Georgios Amanatidis, Georgios Birmpas, Federico Fusco, Philip Lazos, Stefano Leonardi, Rebecca Reiffenhäuser, [*Allocating Indivisible Goods to Strategic Agents: Pure Nash Equilibria and Fairness*](https://doi.org/10.1287/moor.2022.0058), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 22, Section 5 (Discussion)
- **Area:** fair division
- **Keywords:** `fair division`, `indivisible goods`, `pure nash equilibrium`, `EFX`, `maximin share`, `mechanism design`
- **Upstream problem record:** [W4389193896_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4389193896_p0&n=99&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Georgios Amanatidis, Georgios Birmpas, Federico Fusco, Philip Lazos, Stefano Leonardi, Rebecca Reiffenhäuser, [*Allocating Indivisible Goods to Strategic Agents: Pure Nash Equilibria and Fairness*](https://doi.org/10.1287/moor.2022.0058), Mathematics of Operations Research, 2023.
2. [*Fair division of indivisible goods: Recent progress and open questions*](https://www.sciencedirect.com/science/article/pii/S0004370223000905).
3. [*Algorithmic fair allocation of indivisible items: A survey and new questions*](https://doi.org/10.1145/3572885.3572887).
4. [*Fair shares: Feasibility, domination, and incentives*](https://doi.org/10.1287/moor.2022.0257).
5. *Fair Division with Interdependent Values*.
6. *On Truthful Mechanisms without Pareto-efficiency: Characterizations and Fairness*.
