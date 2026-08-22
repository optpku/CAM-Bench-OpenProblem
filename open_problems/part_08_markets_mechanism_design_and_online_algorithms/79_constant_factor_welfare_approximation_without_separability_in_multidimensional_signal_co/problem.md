# Constant-factor welfare approximation without separability in multidimensional-signal combinatorial auctions

This file contains the open problem on Constant-factor welfare approximation without separability in multidimensional-signal combinatorial auctions.

---

<a id="problem-1"></a>

## 1. Constant-factor welfare approximation without separability in multidimensional-signal combinatorial auctions

Source paper authors: Alon Eden, Michal Feldman, Amos Fiat, Kira Goldner, Anna R. Karlin

### 1. Problem Background

Consider a combinatorial auction with a set of agents  $ [n]=\{1,\dots,n\}$ and a set of items $ [m]=\{1,\dots,m\}$. An allocation is a partition of items into disjoint bundles $(T_1,\dots,T_n)$ with $T_i\subseteq [m]$ and $T_i\cap T_{i'}=\emptyset$ for $i\neq i'$; agent $i$ receives bundle $T_i$ (possibly $\emptyset$).

Signals are multidimensional over bundles: for every agent $j\in[n]$ and every bundle $T\subseteq [m]$, agent $j$ has a private signal $s_{jT}\in\mathbb{R}_+$. For each bundle $T\subseteq[m]$, let $s_T=(s_{1T},\dots,s_{nT})\in\mathbb{R}_+^n$. The full signal profile is $s=\{s_T\}_{T\subseteq[m]}$.

Valuations are interdependent: for each agent $i\in[n]$ and bundle $T\subseteq[m]$, the value of agent $i$ for receiving bundle $T$ is a known function $v_{iT}(s_T)\in\mathbb{R}_+$ of the entire bundle-specific signal vector $s_T$. Each $v_{iT}$ is assumed (as in the paper’s model) to be weakly increasing in every coordinate of $s_T$ and strictly increasing in the agent’s own signal coordinate $s_{iT}$.

Incentives: a (possibly randomized) direct-revelation mechanism maps reported signals to an allocation and payments. The incentive notion of interest is universal ex post incentive compatibility with ex post individual rationality (universally ex post IC-IR): the mechanism is a distribution over deterministic mechanisms, each of which makes truthful reporting an ex post Nash equilibrium and guarantees nonnegative utility to truthful agents.

Objective: social welfare at signal profile $s$ under allocation $(T_1,\dots,T_n)$ is $\sum_{i=1}^n v_{iT_i}(s_{T_i})$. The optimal welfare is the maximum of this quantity over all feasible allocations.

Valuation structure: the paper focuses on the class of valuations that are submodular over signals (SOS). Informally, for each $v_{iT}$, the marginal increase from raising a single coordinate $s_{jT}$ is weakly larger when the other coordinates of $s_T$ are smaller (a diminishing-returns property on $\mathbb{R}_+^n$). The paper obtains constant-factor welfare approximations in the multidimensional-signal model only under an additional structural assumption called separability, where $v_{iT}(s_T)$ can be decomposed as a sum of a term depending only on other agents’ signals and a term depending only on $i$’s own signal.

The open question is whether such separability is actually required for constant-factor approximation in the multidimensional-signal combinatorial-auction model under SOS valuations.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a universally ex post IC-IR mechanism $\mathcal{M}$ and a universal constant $c\ge 1$ such that, for every instance of a combinatorial auction with multidimensional bundle-specific signals $s=\{s_T\}_{T\subseteq[m]}$ and SOS valuation functions $\{v_{iT}:\mathbb{R}_+^n\to\mathbb{R}_+\}_{i\in[n],\,T\subseteq[m]}$ (with no separability assumption), the expected welfare achieved by $\mathcal{M}$ at every signal profile $s$ is at least $\frac{1}{c}$ times the optimal welfare at $s$.

### 3. Known Results

Eden et al. (2023) introduce SOS (submodular-over-signals) as a substitutes-like condition on interdependent valuations and show that random partitioning of agents into “certain losers” and “potential winners” yields truthful welfare approximation because winners’ allocations are computed using proxy values that ignore other winners’ signals. The key technical step is their Lemma 2: for a d-SOS function $v$, if one zeros out a uniformly random subset of other agents’ signals, the expected remaining value is at least $\frac{1}{d+1}v(s)$. This underpins their constant-factor mechanisms in single-parameter environments and, under an additional separability condition $v_{iT}(s_T)=g_{-i,T}(s_{-i,T})+h_{iT}(s_{iT})$, their RS-VCG mechanism achieving a 4-approximation for combinatorial auctions with multidimensional bundle-specific signals.

Subsequent work has made substantial progress on removing structural assumptions in restricted feasibility environments, but not yet in the full combinatorial-auction model with bundle-specific multidimensional signals. Several papers obtain constant (and sometimes tight) welfare approximations for SOS interdependent valuations in single-item or matroid single-parameter settings, improving constants (e.g., a tight factor 2 for binary signals) and developing new techniques such as candidate filtering and LP-duality “eating” processes. These advances demonstrate that separability is not inherently necessary for constant approximation in single-parameter settings, and they suggest alternative analytic frameworks (e.g., self-bounding/d-critical hierarchies) that might generalize.

However, none of the forward-citing papers provides a universally ex post IC-IR constant-factor welfare approximation for general heterogeneous combinatorial auctions with multidimensional bundle-specific signals $\{s_{jT}\}$ under SOS valuations without separability, nor do they prove an impossibility specific to that auction model. Related negative evidence appears in the public-projects analogue, where universal truthfulness can force $1/m$ approximations even under separable SOS unless exclusion is allowed, hinting that additional structure (beyond SOS) may be required in richer outcome spaces. At present, the separability barrier in Eden et al.’s RS-VCG payments remains the central obstacle: without separability, an agent’s report can affect the externality terms needed for VCG-style truthful payments, and new payment/estimation ideas seem necessary to obtain constant-factor welfare in the multidimensional-signal combinatorial setting.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #54 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W2922533999_p0/partial_progress/54.pdf)

### 4. Source and Verification

- **Source paper:** Alon Eden, Michal Feldman, Amos Fiat, Kira Goldner, Anna R. Karlin, [*Combinatorial Auctions with Interdependent Valuations: SOS to the Rescue*](https://doi.org/10.1287/moor.2023.1371), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 7 (problems), page 16 (in the provided PDF pagination)
- **Area:** mechanism design
- **Keywords:** `interdependent valuations`, `combinatorial auctions`, `welfare approximation`, `ex post incentive compatibility`, `submodular over signals`, `multidimensional signals`, `separability`
- **Upstream problem record:** [W2922533999_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W2922533999_p0&n=54&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Alon Eden, Michal Feldman, Amos Fiat, Kira Goldner, Anna R. Karlin, [*Combinatorial Auctions with Interdependent Valuations: SOS to the Rescue*](https://doi.org/10.1287/moor.2023.1371), Mathematics of Operations Research, 2023.
2. *Constant approximation for private interdependent valuations*.
3. [*Interdependent public projects*](https://doi.org/10.1137/1.9781611977554.ch18).
4. *Price of anarchy of simple auctions with interdependent values*.
5. [*Auctions with interdependence and sos: improved approximation*](https://doi.org/10.1007/978-3-030-85947-3_3).
6. [*Better approximation for interdependent SOS valuations*](https://doi.org/10.1007/978-3-031-22832-2_13).
7. [*Private interdependent valuations: New bounds for single-item auctions and matroids*](https://doi.org/10.1145/3670865.3673581).
