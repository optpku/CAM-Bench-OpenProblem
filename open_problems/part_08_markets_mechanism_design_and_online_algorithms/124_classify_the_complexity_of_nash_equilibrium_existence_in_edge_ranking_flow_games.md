# Classify the complexity of Nash equilibrium existence in edge-ranking flow games

This file contains the open problem on Classify the complexity of Nash equilibrium existence in edge-ranking flow games.

---

<a id="problem-1"></a>

## 1. Classify the complexity of Nash equilibrium existence in edge-ranking flow games

Source paper authors: Nils Bertschinger, Martin Hoefer, Daniel Schmand

### 1. Problem Background

A flow allocation game is specified by a directed graph $G=(V,E)$, node supplies $(b_v)_{v\in V}$ with $b_v\ge 0$, and edge capacities $(c_e)_{e\in E}$ with $c_e\ge 0$. Each node $v\in V$ is a strategic player.

In an edge-ranking strategy, each player $v$ chooses a strict total order (a permutation) $\pi_v$ of its outgoing edges $E^+(v)=\{(v,w)\in E\}$. Given a profile $\pi=(\pi_v)_{v\in V}$, a feasible flow is a vector $f=(f_e)_{e\in E}$ with $0\le f_e\le c_e$ such that for every node $v$, if its total available supply is
$$

F_v \,=\, b_v + \sum_{e\in E^-(v)} f_e,

$$
then $v$ sends flow along outgoing edges greedily according to $\pi_v$: it fully saturates the highest-ranked outgoing edge until either that edge hits capacity or $v$ runs out of supply, then proceeds to the next edge, etc. (Equivalently, $f$ is a fixed point of the induced greedy allocation mapping.)

Among (possibly multiple) feasible flows for a given profile $\pi$, the model selects the clearing state $\hat f(\pi)$, defined as the coordinate-wise maximum feasible flow (the supremum in the lattice of feasible flows for monotone strategies). The utility of player $v$ under $\pi$ is the total outgoing flow in the clearing state:
$$

u_v(\pi) \,=\, \sum_{e\in E^+(v)} \hat f_e(\pi).

$$

A pure Nash equilibrium is a profile $\pi$ such that for every player $v$ and every alternative permutation $\pi'_v$,
$$

u_v(\pi) \ge \nu_v(\pi'_v,\pi_{-v}).

$$

The decision problem of interest is: given $(G,(b_v),(c_e))$, does there exist a pure Nash equilibrium in edge-ranking strategies? Complexity is measured in the usual Turing model with $b_v,c_e$ given in binary.

### 2. Open Problem

**Question 1.1.** Determine the exact complexity class of the following decision problem.

Input: an edge-ranking flow allocation game $\Gamma=(G,(b_v)_{v\in V},(c_e)_{e\in E})$.

Question: does there exist a pure Nash equilibrium profile $\pi=(\pi_v)_{v\in V}$ of edge-ranking strategies (permutations of $E^+(v)$) with utilities $u_v(\pi)=\sum_{e\in E^+(v)}\hat f_e(\pi)$ defined by the clearing state $\hat f(\pi)$?

In particular, decide whether this Nash-existence problem lies in $\mathrm{NP}$, whether it is $\Sigma_2^p$-complete, or otherwise characterize its precise complexity.

### 3. Known Results

In Flow Allocation Games (Bertschinger–Hoefer–Schmand), edge-ranking strategies (permutations of outgoing edges) induce a monotone allocation map whose feasible flows form a complete lattice; the model selects the clearing state $\hat f(\pi)$, the coordinate-wise maximum fixed point. Section 5 of the source paper shows that, unlike unit-ranking strategies, edge-ranking games can lack pure Nash equilibria and that deciding existence of a pure Nash equilibrium (and strong equilibrium) is strongly NP-hard (Theorem 20). However, the paper explicitly leaves open the *exact* complexity classification: Remark 21 notes that NP-membership is unclear because verifying best responses can be NP-hard, while membership in $\Sigma_2^p$ is straightforward.

The forward-citing literature provided does not resolve this gap for the edge-ranking permutation game. Instead, it supplies supporting evidence from closely related clearing-based strategic models in financial networks. In particular, works on strategic debt forgiveness (edge removals) and strategic prepayments establish NP-hardness of pure-strategy Nash equilibrium existence under default costs in proportional-clearing (Rogers–Veraart/Eisenberg–Noe) settings. These results suggest that equilibrium-existence hardness is robust across clearing mechanisms and strategic action spaces, and they offer reduction templates (e.g., from PARTITION) and structural nonexistence/existence phenomena that may be adaptable to the edge-ranking setting.

On the algorithmic side, Computing Tarski Fixed Points in Financial Networks provides strongly polynomial algorithms for computing minimal/maximal clearing fixed points for broad monotone piecewise-linear payment rules, explicitly including edge-ranking. Such results strengthen the toolbox for any attempt to place Nash-existence in NP (via polynomial-time evaluation of $\hat f(\pi)$ and utilities) or to sharpen upper bounds. Additional related-tool papers on claims trading and debt swapping develop complexity and structural techniques in the same edge-ranking/maximal-clearing framework, but do not address equilibrium existence. Overall, the exact placement of edge-ranking Nash-existence between NP and $\Sigma_2^p$ (or higher) remains open in the provided citation set.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #107 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4391111008_p0/partial_progress/107.pdf)

### 4. Source and Verification

- **Source paper:** Nils Bertschinger, Martin Hoefer, Daniel Schmand, [*Flow Allocation Games*](https://doi.org/10.1287/moor.2022.0355), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 5.1, Remark 21 (page 38 in the provided text pagination)
- **Area:** algorithmic game theory
- **Keywords:** `flow allocation games`, `edge-ranking strategies`, `pure Nash equilibrium`, `complexity theory`, `polynomial hierarchy`, `Sigma2p completeness`
- **Upstream problem record:** [W4391111008_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4391111008_p0&n=107&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Nils Bertschinger, Martin Hoefer, Daniel Schmand, [*Flow Allocation Games*](https://doi.org/10.1287/moor.2022.0355), Mathematics of Operations Research, 2024.
2. *Optimal Bailouts and Strategic Debt Forgiveness in Financial Networks*.
3. *Optimal bailouts and strategic debt forgiveness in financial networks*.
4. *A strategic analysis of prepayments in financial credit networks*.
5. *Computing Tarski Fixed Points in Financial Networks*.
6. [*Algorithms for claims trading*](https://doi.org/10.1145/3801151).
7. *Dynamic Debt Swapping in Financial Networks*.
