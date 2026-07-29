# Degree bound for Lasserre relaxation under regular sequence assumptions without infinity condition

This file contains the open problem on Degree bound for Lasserre relaxation under regular sequence assumptions without infinity condition.

---

<a id="problem-1"></a>

## 1. Degree bound for Lasserre relaxation under regular sequence assumptions without infinity condition

Source paper authors: Zheng Hua, Zheng Qu

### 1. Problem Background

Consider a polynomial optimization problem in $n$ real variables
$$

\min_{x\in\mathbb R^n} f(x)\quad\text{s.t.}\quad g_1(x)=\cdots=g_k(x)=0,\; h_1(x)\ge 0,\dots,h_m(x)\ge 0,

$$
where $f,g_1,\dots,g_k,h_1,\dots,h_m\in\mathbb R[x_1,\dots,x_n]$. Assume the complex variety of equality constraints is finite:
$$

V_{\mathbb C}(g_1,\dots,g_k):=\{z\in\mathbb C^n: g_1(z)=\cdots=g_k(z)=0\}

$$
is nonempty and consists of finitely many points, and the feasible set is nonempty with optimal value $f^*$.

For an integer $d\ge 0$, define the truncated ideal and truncated quadratic module
$$

I(g_1,\dots,g_k)_d:=\Big\{\sum_{i=1}^k \lambda_i g_i : \lambda_i\in\mathbb R[x],\;\deg(\lambda_i g_i)\le d\Big\},

$$
$$

QM(1,h_1,\dots,h_m)_d:=\Big\{\sum_{j=0}^m \sigma_j h_j : \sigma_j\in\Sigma[x],\;\deg(\sigma_j h_j)\le d\Big\},\quad h_0\equiv 1,

$$
where $\Sigma[x]$ is the cone of sums-of-squares polynomials.

Lasserre’s SOS relaxation of order $d$ is exact (and attains) if
$$

 f-f^*\in I(g_1,\dots,g_k)_{2d}+QM(1,h_1,\dots,h_m)_{2d}.

$$

For each $i\in\{1,\dots,n\}$, let $g_i^\infty$ denote the highest-degree homogeneous part of $g_i$ (equivalently, the dehomogenization at $x_0=0$ of the homogenization of $g_i$). The paper imposes a strong geometric condition (no solutions at infinity) that implies that the homogenizations $\bar g_1,\dots,\bar g_n\in\mathbb R[x_0,\dots,x_n]$ form a regular sequence and, crucially, that $g_1,\dots,g_n$ form an $H$-basis of $\langle g_1,\dots,g_n\rangle$, enabling an explicit degree bound.

A weaker algebraic condition mentioned in the paper is that $\bar g_1,\dots,\bar g_n$ form a regular sequence in $\mathbb R[x_0,\dots,x_n]$. This can hold even when $g_1^\infty,\dots,g_n^\infty$ have finitely many common complex zeros (i.e., solutions at infinity exist), and in that case the $H$-basis property may fail.

### 2. Open Problem

**Question 1.1.** Assume $k\ge n$ and $V_{\mathbb C}(g_1,\dots,g_k)$ is finite. Suppose the homogenizations $\bar g_1,\dots,\bar g_n\in\mathbb R[x_0,\dots,x_n]$ form a regular sequence (but do not assume the stronger condition that $g_1^\infty(z)=\cdots=g_n^\infty(z)=0$ has no solution in $\mathbb C^n\setminus\{0\}$).

Determine an explicit bound $d$ (as a function of the degrees of $f,g_1,\dots,g_k,h_1,\dots,h_m$, and possibly other algebraic invariants naturally implied by the regular-sequence hypothesis) such that exactness at order $d$ holds, i.e.
$$

 f-f^*\in I(g_1,\dots,g_k)_{2d}+QM(1,h_1,\dots,h_m)_{2d},

$$
under the same type of nonsingularity/rank assumptions at minimizers used in the paper to ensure membership at some finite order.

Equivalently, establish effective degree bounds for exactness of Lasserre’s hierarchy when only the regular-sequence condition on $\bar g_1,\dots,\bar g_n$ is assumed, despite possible failure of the $H$-basis property.

### 3. Known Results

Hua–Qu (2025) obtain an explicit order bound for exactness of Lasserre’s hierarchy in the zero-dimensional (finite complex variety) setting by imposing a geometric “no solutions at infinity” condition on $g_1^\infty,\dots,g_n^\infty$. This condition implies that the homogenizations $\bar g_1,\dots,\bar g_n$ form a regular sequence and, crucially, that $g_1,\dots,g_n$ form an $H$-basis, letting one control truncation degrees in ideal representations and hence bound the relaxation order $d$ purely in terms of input degrees.

The open problem asks for comparable explicit bounds when one assumes only that $\bar g_1,\dots,\bar g_n$ is a regular sequence, allowing solutions at infinity and potential failure of the $H$-basis property. The only forward-citing work provided, “An effective positivstellensatz over the rational numbers for finite semialgebraic sets,” gives explicit degree bounds for SOS/Positivstellensatz certificates on finite semialgebraic sets, but its bounds require that the equality generators form a graded basis (a degree-compatibility condition closely aligned with having an $H$-basis). It therefore does not yet bridge the gap from regular-sequence-only hypotheses to effective truncation bounds.

At present, the main gap is to replace the $H$-basis/graded-basis input by invariants implied by regular sequences with possible roots at infinity, e.g., Castelnuovo–Mumford regularity of the homogenized ideal, degrees of a border basis, or bounds derived from syzygies of a complete intersection with embedded components at infinity. Promising directions include deriving degree-controlled normal form reductions modulo $\langle g_1,\dots,g_n\rangle$ using regularity and saturation with respect to $x_0$, and translating those into explicit truncation bounds for $I(g)_{2d}$ in the SOS certificate for $f-f^*$.

#### 3.1 Upstream solution and partial-progress records

- [Solution #19 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411879499_p0/solutions/19.pdf)

### 4. Source and Verification

- **Source paper:** Zheng Hua, Zheng Qu, [*Exactness and Effective Degree Bound of Lasserre’s Relaxation for Polynomial Optimization over Finite Variety*](https://doi.org/10.1287/moor.2024.0483), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 8 (Conclusion and perspectives), page 21 (in the provided text, the paragraph beginning 'However, Assumption 1 is stronger ...')
- **Area:** polynomial optimization
- **Keywords:** `Lasserre hierarchy`, `sum of squares`, `effective degree bounds`, `regular sequence`, `H-basis`, `finite variety`, `moment-SOS relaxations`
- **Upstream problem record:** [W4411879499_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411879499_p0&n=19&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Zheng Hua, Zheng Qu, [*Exactness and Effective Degree Bound of Lasserre’s Relaxation for Polynomial Optimization over Finite Variety*](https://doi.org/10.1287/moor.2024.0483), Mathematics of Operations Research, 2025.
2. *An effective positivstellensatz over the rational numbers for finite semialgebraic sets*.
