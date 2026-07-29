# Decidability of feasible-set membership for robust-to-linear-dynamics linear programs

This file contains the open problem on Decidability of feasible-set membership for robust-to-linear-dynamics linear programs.

---

<a id="problem-1"></a>

## 1. Decidability of feasible-set membership for robust-to-linear-dynamics linear programs

Source paper authors: Amir Ali Ahmadi, Oktay Günlük

### 1. Problem Background

Consider discrete-time linear dynamics on $\mathbb{R}^n$ given by $x_{k+1}=Gx_k$, where $G\in\mathbb{Q}^{n\times n}$ is a rational matrix. Let the constraint set be a (rational) polyhedron $P=\{x\in\mathbb{R}^n: Ax\le b\}$, with $A\in\mathbb{Q}^{m\times n$, $b\in\mathbb{Q}^m$, and inequalities interpreted componentwise.

Define the set of $P$-invariant initial conditions under $G$ by
$$

S := \bigcap_{k=0}^{\infty}\{x\in\mathbb{R}^n : G^k x \in P\}
   = \bigcap_{k=0}^{\infty}\{x\in\mathbb{R}^n : A G^k x \le b\}.

$$
Equivalently, $x\in S$ if and only if the entire forward orbit $\{G^k x\}_{k\ge 0}$ stays in $P$.

The associated decision problem (membership problem) takes as input $(A,b,G,z)$ with $z\in\mathbb{Q}^n$ and asks whether $z\in S$. This is the feasibility question underlying robust-to-linear-dynamics linear programs (R-LD-LPs), i.e., linear programs with the additional constraint that iterates under $G$ remain in $P$ forever.

### 2. Open Problem

**Question 1.1.** Given rational data $A\in\mathbb{Q}^{m\times n}$, $b\in\mathbb{Q}^m$, $G\in\mathbb{Q}^{n\times n}$, and $z\in\mathbb{Q}^n$, decide whether
$$

z \in S := \bigcap_{k=0}^{\infty}\{x\in\mathbb{R}^n : A G^k x \le b\}.

$$
Equivalently, decide whether $AG^k z\le b$ holds for all integers $k\ge 0$.

### 3. Known Results

In the notation of Ahmadi–Günlük’s robust-to-dynamics optimization framework, the membership question asks whether a rational query point $z$ satisfies the semi-infinite family of linear inequalities $AG^k z\le b$ for all $k\ge 0$, i.e., whether $z\in S:=\bigcap_{k\ge0}G^{-k}P$. The source paper establishes that this feasible set $S$ is closed, convex, and invariant, but can be non-polyhedral even for rational data (e.g., irrational rotations yielding a disk), and that membership is NP-hard (Theorem 2.1). It also identifies three “barriers” to finite convergence of the natural outer approximations $S_r:=\bigcap_{k=0}^r G^{-k}P$: $\rho(G)\ge 1$, unbounded $P$, or $0\in\partial P$. When these are removed (Schur stability, bounded $P$, and $0\in\operatorname{int}P$), the paper gives a pseudo-polynomial bound on a finite $r$ with $S=S_r$ and develops SDP-based inner approximations aligned with the objective.

The forward-citing literature included here does not resolve the general decidability question for arbitrary rational $G$ (notably in the marginally stable/unstable regimes that the source paper flags as delicate and related to Skolem/Pisot-type problems). Instead, it advances algorithmic understanding in restricted settings and via certification/approximation. Work on maximal invariant set computation under Schur stability and compact constraints provides finite-termination criteria (often LMI/S-procedure based) that, in the stable regime, effectively yield decision procedures for membership by computing $O_\infty$ exactly. In parallel, the “safe learning” line of work develops exact conic reformulations for finite-horizon safety ($T=1,2$) and, for $T=\infty$, emphasizes hardness and turns to SOS/SDP inner approximations under stability assumptions—conceptually mirroring the inner-approximation agenda of Ahmadi–Günlük but without addressing exact infinite-horizon membership.

Overall, the state of the art supports: (i) efficient exact membership/feasibility checks in important stable/compact regimes where $S$ becomes polyhedral after finitely many steps or can be captured by invariant-set computations, and (ii) increasingly powerful convex-optimization-based certificates (ellipsoids, intersections of ellipsoids, piecewise semi-ellipsoids, support-function conditions) that can certify $z\in S$ (sufficient conditions) or produce tight inner/outer approximations. The main gap remains the general decidability of exact membership for rational $G,P,z$ in higher dimensions without stability/interiority/boundedness assumptions; this is precisely where connections to deep open problems on linear recurrence positivity/Skolem-type questions suggest that new ideas from logic/number theory and linear dynamical systems will be needed.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #53 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W2800787305_p0/partial_progress/53.pdf)

### 4. Source and Verification

- **Source paper:** Amir Ali Ahmadi, Oktay Günlük, [*Robust-to-Dynamics Optimization*](https://doi.org/10.1287/moor.2023.0116), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 4 (Future directions and a broader agenda), page 34
- **Area:** invariant set verification
- **Keywords:** `linear dynamical systems`, `polyhedral invariance`, `decidability`, `orbit problems`, `Skolem-Pisot problem`, `semi-infinite constraints`
- **Upstream problem record:** [W2800787305_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W2800787305_p0&n=53&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Amir Ali Ahmadi, Oktay Günlük, [*Robust-to-Dynamics Optimization*](https://doi.org/10.1287/moor.2023.0116), Mathematics of Operations Research, 2024.
2. *Computation of the maximal invariant set of discrete-time linear systems subject to a class of non-convex constraints*.
3. [*Safely learning dynamical systems*](https://doi.org/10.1007/s10208-025-09689-8).
4. *Safely learning dynamical systems from short trajectories*.
5. *Piecewise semi-ellipsoidal control invariant sets*.
6. *Geometric control of hybrid systems*.
7. *On the convergence of the backward reachable sets of robust controlled invariant sets for discrete-time linear systems*.
