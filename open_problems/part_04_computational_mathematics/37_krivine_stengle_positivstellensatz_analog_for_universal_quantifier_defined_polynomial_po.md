# Krivine-Stengle Positivstellensatz analog for universal-quantifier-defined polynomial positivity sets

This file contains the open problem on Krivine-Stengle Positivstellensatz analog for universal-quantifier-defined polynomial positivity sets.

---

<a id="problem-1"></a>

## 1. Krivine-Stengle Positivstellensatz analog for universal-quantifier-defined polynomial positivity sets

Source paper authors: Xiaomeng Hu, Igor Klep, Jiawang Nie

### 1. Problem Background

Let $x=(x_1,\dots,x_n)$ and $y=(y_1,\dots,y_m)$ be real variables. Let $Q\subseteq\mathbb{R}^m$ be a closed set, and let $g=(g_1,\dots,g_s)$ be polynomials $g_j\in\mathbb{R}[x,y]$. Define the feasible set
$$

K:=\{x\in\mathbb{R}^n: g_1(x,y)\ge 0,\dots,g_s(x,y)\ge 0\ \forall y\in Q\}.

$$
Fix a finite nonnegative Borel measure $\nu$ on $\mathbb{R}^m$ with $\mathrm{supp}(\nu)=Q$ that satisfies the multivariate Carleman condition
$$

\sum_{d=0}^\infty \Big(\int y_j^{2d}\,d\nu(y)\Big)^{-\frac{1}{2d}}=\infty,\qquad j=1,\dots,m.

$$
For $g_0:=1$, define the associated quadratic module (a convex cone in $\mathbb{R}[x]$)
$$

\mathrm{QM}[g,\nu]:=\left\{\sum_{j=0}^s \int \tau_j(x,y)\, g_j(x,y)\, d\nu(y):\ \tau_j\in\Sigma^2[x,y]\right\},

$$
where $\Sigma^2[x,y]$ denotes the cone of sum-of-squares polynomials in $(x,y)$.
A classical (quantifier-free) Krivine--Stengle Positivstellensatz gives algebraic certificates for polynomial inequalities on semialgebraic sets, including non-compact and empty-set certificates, typically using preorderings and denominators.
In the present setting, the constraint description uses a universal quantifier $\forall y\in Q$, and $Q$ may be non-semialgebraic, so $K$ may be non-semialgebraic as well.

### 2. Open Problem

**Question 1.1.** Develop an analogue, for sets $K\subseteq\mathbb{R}^n$ of the form
$$

K=\{x\in\mathbb{R}^n: g_1(x,y)\ge 0,\dots,g_s(x,y)\ge 0\ \forall y\in Q\},

$$
of the Krivine--Stengle Positivstellensatz: namely, give a certificate (in terms of algebraic data derived from $g$, the universal quantifier over $Q$, and possibly an auxiliary measure $\nu$ with $\mathrm{supp}(\nu)=Q$) characterizing when a polynomial $f\in\mathbb{R}[x]$ is nonnegative on $K$, and in particular provide a corresponding algebraic infeasibility certificate characterizing when $K=\emptyset$, without assuming an archimedean (compactness) condition on the underlying positivity cone.

### 3. Known Results

The source paper (Hu–Klep–Nie, 2024) establishes a Putinar/Jacobi-type Positivstellensatz for universally quantified constraint sets $K=\{x: g_j(x,y)\ge0\ \forall y\in Q\}$ using the integral quadratic module $\mathrm{QM}[g,\nu]$ built from SOS multipliers $\tau_j(x,y)$ integrated against a Carleman-determinate measure $\nu$ with $\mathrm{supp}(\nu)=Q$. In the Archimedean case, strict positivity $f>0$ on $K$ implies $f\in \mathrm{QM}[g,\nu]$, and emptiness is characterized by $-1\in \mathrm{QM}[g,\nu]$. In the non-Archimedean case they obtain a perturbation result: $f\ge0$ on $K$ iff for all $\varepsilon>0$ there exists $r$ with $f+\varepsilon\Omega_r\in \mathrm{QM}[g,\nu]$, where $\Omega_r$ is an explicit high-degree positive polynomial.

The open problem asks for a genuine Krivine–Stengle analogue in this quantified setting, i.e., a denominator/preordering-style certificate for nonnegativity and especially an algebraic infeasibility certificate for $K=\emptyset$ without Archimedean assumptions. Among the forward citations provided, the closest partial progress is "Positivstellens\" atze for polynomial matrices with universal quantifiers", which extends the $\mathrm{QM}[\cdot,\nu]$ methodology to polynomial matrix inequalities and proves several non-Archimedean positivity certificates with explicit multipliers/denominators (e.g., $\|x\|^{2N}$, $(e^\top x)^N$, or $\theta^{N_\varepsilon}$) under additional structural hypotheses such as homogeneity or restriction to $\mathbb R_+^n$. The remaining citing works are primarily algorithmic or complexity-oriented: they develop KKT-based or Moment–SOS methods for semi-infinite/robust problems with structured parameter sets (polyhedral or semialgebraic) or provide degree bounds for matrix Putinar-type certificates. None supplies a full Krivine–Stengle-type Positivstellensatz (with denominators and an emptiness certificate) for general universally quantified scalar constraints over possibly non-semialgebraic $Q$.

Thus, based on the provided forward-citation set, the problem remains open. Promising directions suggested by partial results include: (i) importing homogenization/Putinar–Vasilescu and P\'olya-type multiplier techniques to the integral quadratic module $\mathrm{QM}[g,\nu]$; (ii) identifying structural conditions on $g$ and $Q$ under which a denominator certificate $p(x)f\in \mathrm{QM}[g,\nu]$ (or a preordering analogue) holds; and (iii) developing a quantified analogue of Krivine–Stengle infeasibility certificates, potentially via moment-duality and determinacy (Carleman) combined with homogenization for unbounded $K$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #7 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4410155359_p0/partial_progress/7.pdf)

### 4. Source and Verification

- **Source paper:** Xiaomeng Hu, Igor Klep, Jiawang Nie, [*Positivstellensätze and Moment Problems with Universal Quantifiers*](https://doi.org/10.1287/moor.2024.0402), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 7 (Conclusions and Discussions), page 26.
- **Area:** positivstellensatz certificates
- **Keywords:** `positivstellensatz`, `krivine-stengle`, `universal quantifiers`, `preorderings`, `semi-infinite constraints`, `sum of squares`
- **Upstream problem record:** [W4410155359_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4410155359_p0&n=7&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Xiaomeng Hu, Igor Klep, Jiawang Nie, [*Positivstellensätze and Moment Problems with Universal Quantifiers*](https://doi.org/10.1287/moor.2024.0402), Mathematics of Operations Research, 2025.
2. *Positivstellens" atze for polynomial matrices with universal quantifiers*.
3. [*A Global Approach for Generalized Semi-Infinite Programs with Polyhedral Parameter Sets: X. Hu, J. Nie, S. Zhong*](https://doi.org/10.1007/s10957-025-02807-0).
4. *Moment-SOS Relaxation Methods for Generalized Semi-Infinite Programs*.
5. *Lagrange multiplier expressions for matrix polynomial optimization and tight relaxations*.
6. [*On the complexity of matrix Putinar's Positivstellensätz*](https://doi.org/10.1137/24M1675461).
