# Equilibrium-equivalent reduction of zero-sum games to cone-leveled strategy games

This file contains the open problem on Equilibrium-equivalent reduction of zero-sum games to cone-leveled strategy games.

---

<a id="problem-1"></a>

## 1. Equilibrium-equivalent reduction of zero-sum games to cone-leveled strategy games

Source paper authors: Nikos Dimou

### 1. Problem Background

A two-player zero-sum game is a triple $G=(S,T,u)$, where $S\subseteq X$ and $T\subseteq Y$ are the strategy sets of players I and II, and $u:S\times T\to\mathbb{R}$ is the payoff to player I.

In the setting considered here, $X$ and $Y$ are (reflexive) Banach spaces with continuous duals $X^*$ and $Y^*$. A bilinear pairing is denoted by $\langle \cdot,\cdot\rangle$. A (closed convex) cone $C\subseteq X$ has positive dual cone $C^*:=\{w\in X^*: \langle w,x\rangle\ge 0\ \forall x\in C\}$, and similarly for a cone $K\subseteq Y$.

A cone-leveled set is a subset $S\subseteq X$ that can be written as
$$

S=\{x\in C: \langle \alpha,x\rangle\in H\},

$$
for some convex cone $C\subseteq X$, some nonzero functional $\alpha\in X^*$, and some nonempty set $H\subseteq (0,\infty)$ (typically an interval). A basic cone-leveled set is the special case $H=\{p\}$ (a single level). A base of a cone is a basic cone-leveled set $\{x\in C: \langle \alpha,x\rangle=1\}$ with $\alpha\in \mathrm{int}(C^*)$.

Two games $G=(S,T,u)$ and $G'=(S',T',u')$ are equilibrium-equivalent if they have the same set of Nash equilibria after an identification of strategies (e.g., via maps between $S$ and $S'$, $T$ and $T'$) that preserves saddle-point inequalities, so that equilibria and game values correspond under the identification.

The paper establishes that games whose strategy sets are cone-leveled (in particular, bases of convex cones) and whose payoff is bilinear $u(x,y)=\langle y,Ax\rangle$ can be analyzed/solved via associated conic linear programs and duality. This motivates asking which more general games can be reduced, without changing equilibrium structure, to this cone-leveled class.

### 2. Open Problem

**Question 1.1.** Characterize (or give verifiable necessary and sufficient conditions for) when a given two-player zero-sum game $G=(S,T,u)$ is equilibrium-equivalent to a two-player zero-sum game $\widetilde G=(\widetilde S,\widetilde T,\widetilde u)$ with cone-leveled strategy sets $\widetilde S\subseteq \widetilde X$, $\widetilde T\subseteq \widetilde Y$ and bilinear payoff of the form
$$

\widetilde u(\tilde x,\tilde y)=\langle \tilde y, \widetilde A\tilde x\rangle

$$
for some linear operator $\widetilde A$, such that Nash equilibria (saddle points) of $G$ correspond to Nash equilibria of $\widetilde G$ under the equivalence mapping.

### 3. Known Results

Dimou’s framework isolates a broad class of zero-sum games—those with cone-leveled strategy sets and bilinear payoff \,$u(x,y)=\langle y,Ax\rangle$—for which equilibria and values can be computed via associated conic linear programs, and conversely shows an “almost equivalence” between minimax and strong duality in reflexive Banach spaces. The open problem asks for a characterization of when an arbitrary zero-sum game $G=(S,T,u)$ is equilibrium-equivalent (via strategy identifications preserving saddle inequalities) to such a cone-leveled bilinear game $\widetilde G$, thereby enabling conic-programming machinery to solve the original game without changing its equilibrium structure.

The only forward-citing work provided here makes partial progress in a major subclass: semidefinite programming. It constructs, under verifiable constraint qualifications (strong optimality or strict unboundedness), an equilibrium-preserving reduction from an SDP pair to a zero-sum semidefinite game whose strategy sets are density matrices (bases of the PSD cone) and whose payoff is bilinear. This aligns closely with Dimou’s cone-base setting and demonstrates that, at least for SDPs, one can build explicit equivalence mappings that allow recovery of primal/dual solutions or certificates from game equilibria.

However, the general characterization problem remains open: beyond specific conic-programming-derived games (LP/SDP and variants), there is no known necessary-and-sufficient condition describing exactly which general Banach-space games admit an equilibrium-equivalent embedding into the cone-leveled bilinear class. Promising directions suggested by Dimou’s paper include identifying invariants of equilibrium structure preserved under positive-homogeneous rescalings and cone-base normalizations, and developing criteria that recognize when a game’s payoff and feasible strategy geometry can be represented (possibly after lifting) as linear images of cone slices (bases or cone-leveled sets), as in moment/SOS liftings for polynomial games.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #50 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7143448186_p0/partial_progress/50.pdf)

### 4. Source and Verification

- **Source paper:** Nikos Dimou, [*On the Equivalence of Zero-Sum Games and Conic Programs*](https://doi.org/10.1287/moor.2025.0926), Mathematics of Operations Research, 2026.
- **Location in paper:** Section 7 (Future directions), page 34.
- **Area:** zero sum games
- **Keywords:** `zero-sum games`, `Nash equilibrium`, `equilibrium equivalence`, `cone-leveled sets`, `conic programming`, `Banach spaces`
- **Upstream problem record:** [W7143448186_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7143448186_p0&n=50&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Nikos Dimou, [*On the Equivalence of Zero-Sum Games and Conic Programs*](https://doi.org/10.1287/moor.2025.0926), Mathematics of Operations Research, 2026.
2. *On the equivalence of semidefinite programming and zero-sum semidefinite games*.
