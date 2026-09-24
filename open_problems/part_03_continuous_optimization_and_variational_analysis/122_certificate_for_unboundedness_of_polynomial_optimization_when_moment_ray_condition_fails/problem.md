# Certificate for unboundedness of polynomial optimization when moment-ray condition fails

This file contains the open problem on Certificate for unboundedness of polynomial optimization when moment-ray condition fails.

---

<a id="problem-1"></a>

## 1. Certificate for unboundedness of polynomial optimization when moment-ray condition fails

Source paper authors: Jiawang Nie, Zi Yang

### 1. Problem Background

Let $K\subseteq \mathbb{R}^n$ be a basic closed semialgebraic set
$$

K:=\{x\in\mathbb{R}^n: c_i(x)=0\ (i\in E),\ c_j(x)\ge 0\ (j\in I)\},

$$
where $E,I$ are finite index sets and each $c_i,c_j\in\mathbb{R}[x]$ is a polynomial. Let $g\in\mathbb{R}[x]$ be a polynomial of degree $d$, and consider the polynomial optimization problem
$$

\inf\{g(x): x\in K\}.

$$
Write $\tilde x:=(x_0,x)\in\mathbb{R}^{n+1}$. The homogenization of a polynomial $p\in\mathbb{R}[x]$ of degree $\deg(p)$ is
$\tilde p(\tilde x):=x_0^{\deg(p)}p(x/x_0)$, and its highest-degree homogeneous part is $p_{\mathrm{hom}}(x):=\tilde p(0,x)$.
Define the compact “homogenized” feasible set
$$

\tilde K:=\{\tilde x:\ \tilde c_i(\tilde x)=0\ (i\in E),\ \tilde c_j(\tilde x)\ge 0\ (j\in I),\ \|\tilde x\|_2^2=1,\ x_0\ge 0\},

$$
and the “horizon” (the section $x_0=0$)
$$

K^{\circ}:=\{x\in\mathbb{R}^n: c_{i,\mathrm{hom}}(x)=0\ (i\in E),\ c_{j,\mathrm{hom}}(x)\ge 0\ (j\in I),\ \|x\|_2^2=1\}.

$$
A (truncated) moment sequence $z$ of degree $d$ supported on $K^{\circ}$ is an element of the moment cone $R_d(K^{\circ})$, i.e., there exists a Borel measure $\mu$ supported on $K^{\circ}$ such that $z_\alpha=\int x^\alpha\,d\mu$ for all $|\alpha|\le d$. For a polynomial $p\in\mathbb{R}[x]_d$, the pairing is $\langle p,z\rangle:=\sum_{|\alpha|\le d} p_\alpha z_\alpha$.
The paper discusses a sufficient “decreasing-ray” moment certificate for unboundedness: feasibility of a linear moment system of the form
$$

\langle g_{\mathrm{hom}}, z\rangle=-1,\quad z\in R_d(K^{\circ}).

$$
(Equivalently, the existence of a ray in an appropriate dual moment program.) This condition is sufficient for $\inf_{x\in K} g(x)=-\infty$, but the paper exhibits examples where $\inf_{x\in K} g(x)=-\infty$ while this moment system is infeasible.

### 2. Open Problem

**Question 1.1.** Given polynomials $g\in\mathbb{R}[x]$ and $c_i,c_j\in\mathbb{R}[x]$ defining $K\subseteq\mathbb{R}^n$ as above, design a computationally convenient certificate (a verifiable condition) that implies
$$

\inf\{g(x):x\in K\}=-\infty,

$$
in the regime where the moment-ray condition
$$

\langle g_{\mathrm{hom}}, z\rangle=-1,\quad z\in R_d(K^{\circ})

$$
is infeasible.

Equivalently: characterize or certify unboundedness of $\inf_{x\in K} g(x)$ by an efficiently checkable condition that applies even when no feasible $z\in R_d(K^{\circ})$ satisfies $\langle g_{\mathrm{hom}}, z\rangle=-1$.

### 3. Known Results

The source paper (Nie–Yang, 2023) proposes a sufficient unboundedness certificate for $\inf_{x\in K} g(x)=-\infty$ based on homogenization and a decreasing-ray condition on the horizon section $K^\circ$: feasibility of $\langle g_{\mathrm{hom}},z\rangle=-1$ with $z\in R_d(K^\circ)$. Appendix A shows how this arises as a decreasing ray of the dual of a homogenized conic program and how it can be searched for via a hierarchy of SDP relaxations over moment/localizing matrices on the compact set $K^\circ$. However, the paper also gives explicit examples where $\inf_K g=-\infty$ while the horizon moment-ray system is infeasible (e.g., when $g_{\mathrm{hom}}\ge 0$ on $K^\circ$ but lower-degree terms drive $g\to-\infty$ along feasible rays), motivating the open problem.

Among the forward citations provided, none resolves this gap by giving an SDP-style alternative certificate that remains valid when the horizon moment-ray condition fails. The closest conceptual alternative is the tangency/optimality-at-infinity approach of “Optimality Conditions at Infinity in Semialgebraic Vector Optimization”, which characterizes boundedness from below via finitely many asymptotic limits $\lambda_k$ along components of a tangency variety defined by conditions of the form $0\in \nabla g(x)+N(x;K)+\mu x$. This suggests a different computational route: certify $\inf_K g=-\infty$ by exhibiting a tangency-at-infinity branch along which $g\to-\infty$, potentially reducible to solving polynomial systems/critical point methods at infinity. The other citations contribute tools for handling noncompactness in SOS hierarchies or alternative liftings (e.g., adding redundant constraints like $c-f$ to enforce bounded sublevel sets, or recession-cone-based tensor/copolytope duality), but they do not provide a general, efficiently checkable unboundedness certificate beyond the horizon moment-ray feasibility.

Overall, the problem remains open: current moment/SOS certificates based purely on $g_{\mathrm{hom}}$ over $K^\circ$ are not necessary for unboundedness, and forward-citing work has not yet produced a replacement certificate with comparable computational convenience. Promising directions include (a) certificates that incorporate lower-degree terms through multi-scale homogenization or weighted projective compactifications, and (b) tangency-variety/critical-at-infinity characterizations translated into polynomial-algebraic conditions amenable to SDP or Gröbner/critical-point computation.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #104 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4390588799_p0/partial_progress/104.pdf)

### 4. Source and Verification

- **Source paper:** Jiawang Nie, Zi Yang, [*The Multi-Objective Polynomial Optimization*](https://doi.org/10.1287/moor.2023.0200), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 7 (Conclusions and discussions), page 24 (Question 7.1); see also Appendix A discussion around pages 28–29.
- **Area:** polynomial optimization
- **Keywords:** `polynomial optimization`, `unboundedness detection`, `moment sos relaxations`, `homogenization`, `Positivstellensatz certificates`, `semialgebraic sets`
- **Upstream problem record:** [W4390588799_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4390588799_p0&n=104&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jiawang Nie, Zi Yang, [*The Multi-Objective Polynomial Optimization*](https://doi.org/10.1287/moor.2023.0200), Mathematics of Operations Research, 2024.
2. [*Optimality Conditions at Infinity in Semialgebraic Vector Optimization*](https://doi.org/10.1287/moor.2024.0607).
3. [*Convergences of Lasserre hierarchy of an SDP relaxation for robust non-convex polynomial optimization*](https://doi.org/10.1080/02331934.2025.2588427).
4. [*Merit function as a tool for vector polynomial optimization over an LMI constraint*](https://doi.org/10.1007/s11117-025-01160-w).
5. [*Moment and polynomial optimization*](https://doi.org/10.1137/1.9781611977608.bm).
