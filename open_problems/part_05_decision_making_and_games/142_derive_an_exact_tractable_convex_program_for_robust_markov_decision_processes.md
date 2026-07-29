# Derive an exact tractable convex program for robust Markov decision processes

This file contains the open problem on Derive an exact tractable convex program for robust Markov decision processes.

---

<a id="problem-1"></a>

## 1. Derive an exact tractable convex program for robust Markov decision processes

Source paper authors: Julien Grand-Clément, Marek Petrik

### 1. Problem Background

A discounted robust Markov decision process (RMDP) is specified by finite sets of states $S$ and actions $A$, nonnegative rewards $r_{sa}\in\mathbb{R}_+$ for $(s,a)\in S\times A$, a discount factor $\gamma\in(0,1)$, an initial distribution $\alpha\in\Delta(S)$, and an uncertainty set $\mathcal{U}\subseteq (\Delta(S))^{S\times A}$ of plausible transition kernels $P=(P_{sas'})$. A stationary policy is $\pi\in\Pi:=(\Delta(A))^S$. For a fixed transition kernel $P$, the discounted return of $\pi$ is
$$

R(\pi,P)=\mathbb{E}_{\pi,P}\Big[\sum_{t=0}^\infty \gamma^t\, r_{S_tA_t}\ \Big|\ S_0\sim\alpha\Big].

$$
The RMDP objective is the max–min problem
$$

\max_{\pi\in\Pi}\ \min_{P\in\mathcal{U}}\ R(\pi,P).

$$
A common tractable structure is rectangularity of $\mathcal{U}$. Under sa-rectangularity one has $\mathcal{U}=\prod_{(s,a)\in S\times A} \mathcal{U}_{sa}$ with $\mathcal{U}_{sa}\subseteq\Delta(S)$ convex and compact, and the robust Bellman operator $T:\mathbb{R}^S\to\mathbb{R}^S$ is
$$

T(v)_s = \max_{a\in A}\ \min_{p\in\mathcal{U}_{sa}}\Big\{ r_{sa}+\gamma\, p^\top v\Big\},\qquad s\in S.

$$
The fixed point $v^\star$ of $T$ yields an optimal robust value function and an optimal stationary policy. Unlike the nominal MDP case (where a linear program exists), the maps $v\mapsto T(v)_s$ need not be convex or concave, so the feasible sets $\{v\in\mathbb{R}^S: v\ge T(v)\}$ or $\{v\in\mathbb{R}^S: v\le T(v)\}$ are not known to admit a straightforward convex description in general.

### 2. Open Problem

**Question 1.1.** Find conditions and a polynomial-size convex optimization formulation (e.g., conic, geometric, or other convex program) whose optimal solutions encode an optimal robust stationary policy and the optimal robust value function for the discounted RMDP
$$

\max_{\pi\in\Pi}\ \min_{P\in\mathcal{U}}\ R(\pi,P),

$$
under classical rectangular uncertainty (in particular sa-rectangular or s-rectangular $\mathcal{U}$), without introducing an approximation scheme based on regularization (i.e., an exact convex reformulation of the original RMDP rather than a sequence of convex programs converging to it).

### 3. Known Results

The source paper (Grand-Cl\'ement–Petrik, 2023) frames a central gap between the nominal discounted MDP case—where the Bellman inequalities $v\ge T_P(v)$ yield a polynomial-size LP—and the discounted robust case under classical rectangular uncertainty, where the robust Bellman operator $T(v)_s=\max_a\min_{p\in\mathcal U_{sa}}\{r_{sa}+\gamma p^\top v\}$ is generally neither convex nor concave in $v$. The paper’s main contribution is therefore approximate: it adds entropic regularization in the maximization over actions and applies an exponential change of variables to obtain a polynomial-size convex (often conic) program whose solutions converge to the robust optimum as the regularization parameter tends to 0. The open problem asks whether one can remove this regularization/limit and obtain an exact polynomial-size convex formulation for the original max–min RMDP.

Among forward citations, no work is identified as giving such an exact convex reformulation in full generality. The closest structural progress is "Tractable robust Markov decision processes", which sharpens the landscape of when Bellman fixed-point dynamic programming is valid: for compact convex uncertainty sets, s-rectangularity and sa-rectangularity are essentially the only models that are tractable for all rewards/policies. This supports focusing on rectangular sets but does not by itself yield an explicit conic/LP description of $\{v: v\ge T(v)\}$ or a single convex program encoding $v^\star$ and an optimal robust policy.

Several papers provide partial tools rather than a full convexification. Data-driven distance-based ambiguity-set work (and related $\kappa$-rectangular modeling) emphasizes that for many practically used $\mathcal U_{sa}$ (e.g., norm or divergence balls), the inner minimization $\min_{p\in\mathcal U_{sa}} p^\top v$ is a convex optimization problem with tractable duals, suggesting that if one could decouple the outer $\max_a$ and the dependence of $p$ on $v$ in a convex way, a conic epigraph might be possible in special cases. Conic-duality approaches in robust constrained MDPs show that even when the inner adversary problem is SOCP-representable, coupling it with policy choice typically introduces bilinearities, pinpointing a key obstruction to a global convex program. Algorithmic works (policy gradients; IWOCS) exploit rectangularity and saddle-point structure for computation but do not provide exact polynomial-size convex formulations. Overall, based on these forward citations, the exact convex-program reformulation for discounted rectangular RMDPs without regularization remains open; promising directions include identifying uncertainty-set classes where $v\mapsto \min_{p\in\mathcal U_{sa}} p^\top v$ admits a conic epigraph that interacts benignly with the $\max_a$ (e.g., via extended formulations), or proving impossibility/size lower bounds for general rectangular sets.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #126 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400685310_p0/partial_progress/126.pdf)

### 4. Source and Verification

- **Source paper:** Julien Grand-Clément, Marek Petrik, [*On the Convex Formulations of Robust Markov Decision Processes*](https://doi.org/10.1287/moor.2022.0284), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 1 (Introduction), page 2; reiterated in Section 7 (Conclusion), page 22.
- **Area:** robust markov decision processes
- **Keywords:** `robust MDPs`, `convex formulation`, `conic optimization`, `rectangular uncertainty`, `Bellman operator`, `exact reformulation`
- **Upstream problem record:** [W4400685310_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400685310_p0&n=126&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Julien Grand-Clément, Marek Petrik, [*On the Convex Formulations of Robust Markov Decision Processes*](https://doi.org/10.1287/moor.2022.0284), Mathematics of Operations Research, 2024.
2. *Tractable robust Markov decision processes*.
3. *Dynamic Programming for Epistemic Uncertainty in Markov Decision Processes*.
4. [*Robust markov decision processes with data-driven, distance-based ambiguity sets*](https://doi.org/10.1137/21M1423841).
5. [*A Family of -Rectangular Robust MDPs: Relative Conservativeness, Asymptotic Analyses, and Finite-Sample Properties*](https://doi.org/10.1137/23M1559920).
6. *Transition Uncertainties in Constrained Markov Decision Models: A Robust Optimization Approach*.
7. [*Policy Gradient Algorithms for Robust MDP with Nonrectangular Uncertainty Sets*](https://doi.org/10.1137/24M1631250).
8. *Soft robust mdps and risk-sensitive mdps: Equivalence, policy gradient, and sample complexity*.
9. *Revisiting the static model in robust reinforcement learning*.
