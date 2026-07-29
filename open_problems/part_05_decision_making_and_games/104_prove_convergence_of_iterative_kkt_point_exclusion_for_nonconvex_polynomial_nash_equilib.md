# Prove convergence of iterative KKT-point exclusion for nonconvex polynomial Nash equilibria

This file contains the open problem on Prove convergence of iterative KKT-point exclusion for nonconvex polynomial Nash equilibria.

---

<a id="problem-1"></a>

## 1. Prove convergence of iterative KKT-point exclusion for nonconvex polynomial Nash equilibria

Source paper authors: Jiawang Nie, Xindong Tang

### 1. Problem Background

Consider a Nash equilibrium problem with $N$ players. Player $i$ chooses a strategy vector $x_i\in\mathbb{R}^{n_i}$ and faces an optimization problem parameterized by the other players' strategies $x_{-i}$:
$$

\min_{x_i\in\mathbb{R}^{n_i}} f_i(x_i,x_{-i}) \quad\text{s.t.}\quad g_{i,j}(x_i)=0\ (j\in E_i),\quad g_{i,j}(x_i)\ge 0\ (j\in I_i),

$$
where $f_i$ is a polynomial in $x=(x_1,\dots,x_N)$ and each constraint polynomial $g_{i,j}$ depends only on $x_i$. The feasible set of player $i$ is
$$

X_i := \{x_i\in\mathbb{R}^{n_i}: g_{i,j}(x_i)=0\ (j\in E_i),\ g_{i,j}(x_i)\ge 0\ (j\in I_i)\},

$$
and the joint feasible set is $X:=X_1\times\cdots\times X_N\subseteq\mathbb{R}^n$, $n:=\sum_i n_i$.

A (pure-strategy) Nash equilibrium is a point $x^*\in X$ such that for every $i$, $x_i^*$ is a global minimizer of player $i$'s problem at $x_{-i}^*$.

Assume each constraint tuple $g_i:=(g_{i,1},\dots,g_{i,m_i})$ is \"nonsingular\" in the sense that a certain associated polynomial matrix has full column rank over $\mathbb{C}^{n_i}$; under this assumption, the Lagrange multipliers for the Karush–Kuhn–Tucker (KKT) conditions can be expressed as polynomial functions $\lambda_{i,j}(x)$. Then every Nash equilibrium satisfies a polynomial system encoding the KKT equalities together with complementarity and sign conditions:
1) stationarity $\nabla_{x_i} f_i(x) - \sum_{j=1}^{m_i} \lambda_{i,j}(x)\nabla_{x_i} g_{i,j}(x_i)=0$,
2) primal feasibility $g_{i,j}(x_i)=0$ for $j\in E_i$, $g_{i,j}(x_i)\ge 0$ for $j\in I_i$,
3) complementarity $\lambda_{i,j}(x) g_{i,j}(x_i)=0$ for $j\in I_i$,
4) dual feasibility $\lambda_{i,j}(x)\ge 0$ for $j\in I_i$.

The paper proposes an iterative algorithm (Algorithm 3.1) that repeatedly solves a polynomial optimization problem over the KKT-feasible set (using a generic strictly convex quadratic objective $[x]_1^\top\Theta [x]_1$ to pick a unique candidate) and then checks whether the candidate is a Nash equilibrium by solving each player's best-response problem. If the candidate $u$ is not an equilibrium, the algorithm adds finitely many additional polynomial inequalities of the form
$$

f_i(v,x_{-i})-f_i(x_i,x_{-i})\ge 0

$$
for selected best-response points $v$ (collected in sets $K_i$) to exclude the found non-equilibrium KKT point(s) and repeats.

### 2. Open Problem

**Question 1.1.** Assume the nonsingularity condition holds so that polynomial Lagrange multiplier expressions $\lambda_{i,j}(x)$ exist, and suppose a Nash equilibrium exists.

Analyze Algorithm 3.1 described above in the case where there are infinitely many KKT points that are not Nash equilibria. Determine whether, under such circumstances, the iterative procedure of repeatedly:
1) solving the current polynomial optimization problem over the KKT-feasible set augmented with the accumulated inequalities indexed by $K_i$,
2) checking the resulting optimizer $u$ for the Nash equilibrium property via each player's global best-response computation,
3) enlarging $K_i$ by adding some best-response optimizer(s) when $u$ fails the Nash equilibrium check,
necessarily converges (in finitely or infinitely many iterations) to a Nash equilibrium.

Equivalently: give conditions under which Algorithm 3.1 is guaranteed to find a Nash equilibrium (or certify nonexistence) even when the set of non-equilibrium KKT points is infinite, or provide an explicit example showing failure of convergence.

### 3. Known Results

In the NEPP framework of Nie–Tang, nonsingularity of each player’s constraint tuple yields polynomial Lagrange-multiplier expressions $\lambda_{i,j}(x)$, so every Nash equilibrium lies in the semialgebraic KKT-feasible set $G$ of (3.7). Algorithm 3.1 then runs a select–verify–cut loop: select a unique KKT point by minimizing a generic strictly convex quadratic $[x]_1^\top\Theta[x]_1$ over the current relaxation (3.10), verify equilibrium by solving each best-response global problem (3.8), and cut off the current non-equilibrium KKT point by adding inequalities $f_i(v,x_{-i})-f_i(x_i,x_{-i})\ge 0$ for best-response witnesses $v\in K_i$. The original paper proves finite termination when $|G\setminus G^*|<\infty$ (Theorem 3.2) and shows that this finiteness holds generically because the complex KKT system is zero-dimensional (Theorem A.1), but explicitly leaves open the nongeneric regime where $G\setminus G^*$ is infinite (Section 6).

Forward-citation work provides partial progress by establishing asymptotic convergence of analogous exclusion loops under additional regularity assumptions. For rational generalized Nash equilibrium problems, the rational analogue proves that if spurious KKT points are infinite, then any accumulation point of the selected iterates is a (generalized) Nash equilibrium provided certain strict-feasibility and continuity hypotheses hold (notably continuity of each player’s value function and uniform continuity of the feasible-extension maps). For polynomial variational inequalities, an essentially identical KKT-exclusion scheme yields that, in the infinite-spurious-KKT regime, any accumulation point is a true VI solution under continuity of an appropriate gap function at the limit and boundedness of selected auxiliary minimizers. These results suggest that unconditional convergence of Algorithm 3.1 is unlikely without extra assumptions; rather, one should expect convergence of accumulation points under continuity/compactness-type conditions ensuring that the separating inequalities do not “chase” a positive-dimensional set of spurious KKT points without approaching $G^*$.

Other related papers mainly reinforce the generic-finiteness escape hatch or provide alternative computational routes. Algebraic-degree results for (generalized) Nash problems quantify generic finiteness of complex Fritz–John/KKT points, while polyhedral homotopy methods exploit this to enumerate all KKT tuples in the zero-dimensional (generic) case and then verify equilibria. SOS-based select–verify–cut methods in structured polynomial game classes (e.g., imperfect-recall games) prove asymptotic exactness of the overall loop, again pointing toward asymptotic (rather than finite) guarantees when the KKT set is not finite. Overall, the specific open question for nonconvex polynomial NEPPs with infinitely many non-equilibrium KKT points remains open: existing progress indicates that convergence can be proved for accumulation points under additional continuity/feasibility assumptions, but no general theorem (or definitive counterexample) is currently established for Algorithm 3.1 in full generality.

#### 3.1 Upstream solution and partial-progress records

- [Solution #84 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4384342505_p0/solutions/84.pdf)

### 4. Source and Verification

- **Source paper:** Jiawang Nie, Xindong Tang, [*Nash Equilibrium Problems of Polynomials*](https://doi.org/10.1287/moor.2022.0334), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 6 (Conclusions and Discussions), page 26 (arXiv v2 pdf pagination), near the end of the section beginning 'There is much interesting future work to do.'
- **Area:** polynomial nash equilibrium
- **Keywords:** `nash equilibrium`, `nonconvex games`, `KKT points`, `moment-sos hierarchy`, `semidefinite relaxation`, `algorithmic convergence`
- **Upstream problem record:** [W4384342505_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4384342505_p0&n=84&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiawang Nie, Xindong Tang, [*Nash Equilibrium Problems of Polynomials*](https://doi.org/10.1287/moor.2022.0334), Mathematics of Operations Research, 2023.
2. [*Rational generalized Nash equilibrium problems*](https://doi.org/10.1137/21M1456285).
3. *Solving polynomial variational inequality problems via Lagrange multiplier expressions and Moment-SOS relaxations*.
4. *Solving Imperfect-Recall Games via Sum-of-Squares Optimization*.
5. [*Algebraic degrees of generalized Nash equilibrium problems*](https://doi.org/10.1007/s11425-023-2305-y).
6. [*On the polyhedral homotopy method for solving generalized Nash equilibrium problems of polynomials*](https://doi.org/10.1007/s10915-023-02138-0).
7. [*Convex generalized Nash equilibrium problems and polynomial optimization*](https://doi.org/10.1007/s10107-021-01739-7).
8. [*Nash Equilibrium Problems of Polynomials*](https://arxiv.org/abs/2006.09490).
