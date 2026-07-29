# Polynomial bound on degenerate simplex pivots for 0/1 polytope linear programs

This file contains the open problem on Polynomial bound on degenerate simplex pivots for 0/1 polytope linear programs.

---

<a id="problem-1"></a>

## 1. Polynomial bound on degenerate simplex pivots for 0/1 polytope linear programs

Source paper authors: Alexander E. Black, Jesús A. De Loera, Sean Kafer, Laura Sanità

### 1. Problem Background

Consider a linear program over a fixed feasible region that is a 0/1 polytope:
$$

\max\{c^\top x : x \in P\},\qquad P=\{x\in\mathbb{R}^n: Ax=b,\; Dx\le d\},

$$
where all extreme points (vertices) of $P$ have coordinates in $\{0,1\}$, and the input data $A,b,D,d,c$ are integral.

To run the Simplex method, one may convert the LP to standard equality form by introducing slack variables (without requiring those slack variables to be 0/1 at vertices):
$$

\max\{(c')^\top x' : A' x' = b',\; x'\ge 0\},

$$
with $A'\in\mathbb{Z}^{m'\times n'}$, $b'\in\mathbb{Z}^{m'}$, $c'\in\mathbb{Z}^{n'}$. A feasible basis $B\subseteq [n']$ of size $m'$ determines a basic feasible solution (BFS) $x'$. A simplex pivot exchanges one entering nonbasic variable with one leaving basic variable, producing a new basis (and a new BFS).

A pivot is called non-degenerate if it changes the current vertex (equivalently, the step length in the pivot direction is positive), and degenerate if the basis changes but the BFS remains at the same vertex (step length zero). Degeneracy can cause cycling or long sequences of degenerate pivots (stalling).

The paper introduces specific pivot rules for 0/1-LPs (variants of steepest-edge and shadow rules) and proves polynomial bounds on the number of non-degenerate pivots; however, the number of degenerate pivots (basis exchanges that do not move to a different vertex) may still be large and is not bounded in their analysis.

### 2. Open Problem

**Question 1.1.** For at least one of the pivot rules introduced for 0/1-LPs (e.g., the paper's modified steepest-edge or modified shadow pivot rules), determine whether there exists a polynomial upper bound (in the input size, or at least in $n,m'$) on the total number of degenerate pivots (degenerate basis exchanges) that the Simplex method can perform when solving
$$

\max\{c^\top x : x \in P\},\qquad P\text{ a 0/1 polytope as above}.

$$
Equivalently, bound by a polynomial the number of iterations in which the basis changes but the current BFS (and hence the current vertex of $P$) does not change, when the Simplex method is run with one of these pivot rules on arbitrary 0/1-LPs.

### 3. Known Results

Black–De Loera–Kafer–Sanità (2021) introduce pivot rules tailored to 0/1 polytopes—True Steepest-Edge and two Shadow variants (Slim/Ordered)—and prove strongly polynomial bounds on the number of non-degenerate pivots: steepest-edge paths are strongly polynomial (via circuit-augmentation results), Slim Shadow uses at most $n$ non-degenerate pivots, and Ordered Shadow uses at most the dimension $d$. Their analysis explicitly avoids perturbations because 0/1 polytopes are typically highly degenerate, and they isolate degeneracy as the remaining obstacle: a simplex implementation may still perform many degenerate basis exchanges while staying at the same vertex of the original polytope.

The most directly relevant forward-citing progress is the work “On the number of degenerate simplex pivots” and its journal version “On the number of degenerate simplex pivots: K. Kukharenko and L. Sanità”. These papers do not analyze the specific 0/1-polytope pivot rules of Black–De Loera–Kafer–Sanità, nor do they bound the total number of degenerate pivots over an entire run. Instead, they design an anti-stalling pivot rule for general standard-form LPs that guarantees at any non-optimal BFS the number of consecutive degenerate pivots is at most $n-m-1$ (or $\min\{n-m-1,m-1\}$ under stronger directional information). This shows that degeneracy can be controlled locally (stalling cannot persist too long) even without 0/1 structure, but it leaves open whether the original True Steepest-Edge / Slim Shadow / Ordered Shadow pivot rules admit polynomial bounds on total degenerate pivots on arbitrary 0/1-LPs.

Related work on smoothed analysis (e.g., “Optimal smoothed analysis of the simplex method”) largely sidesteps degeneracy by random perturbations that make degenerate pivots occur with probability 0, and work on monotone path polytopes (e.g., “Monotone Paths on Polytopes: Combinatorics and Optimization”) clarifies the combinatorics of coherent (typically nondegenerate) shadow paths. Neither yields worst-case polynomial bounds on degenerate basis exchanges in the deterministic 0/1 setting. Consequently, the specific open question posed as Question 2 in the 0/1-polytope simplex paper remains open: proving a polynomial upper bound on the total number of degenerate pivots for their pivot rules, or constructing superpolynomial lower bounds, remains a key gap.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #71 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3217714619_p0/partial_progress/71.pdf)

### 4. Source and Verification

- **Source paper:** Alexander E. Black, Jesús A. De Loera, Sean Kafer, Laura Sanità, [*On the Simplex Method for 0/1-Polytopes*](https://doi.org/10.1287/moor.2021.0345), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 28, Section 4 (Conclusions, Connections, and Comparisons)
- **Area:** simplex pivot rules
- **Keywords:** `simplex method`, `pivot rules`, `degeneracy`, `0/1 polytopes`, `degenerate pivots`, `linear programming`
- **Upstream problem record:** [W3217714619_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3217714619_p0&n=71&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Alexander E. Black, Jesús A. De Loera, Sean Kafer, Laura Sanità, [*On the Simplex Method for 0/1-Polytopes*](https://doi.org/10.1287/moor.2021.0345), Mathematics of Operations Research, 2024.
2. [*On the number of degenerate simplex pivots*](https://doi.org/10.1007/978-3-031-59835-7_19).
3. [*On the number of degenerate simplex pivots: K. Kukharenko and L. Sanità*](https://doi.org/10.1007/s10107-026-02349-x).
4. *Optimal smoothed analysis of the simplex method*.
5. *Monotone Paths on Polytopes: Combinatorics and Optimization*.
