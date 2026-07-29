# Characterize simultaneous ordered spectral decompositions needed for spectral-function critical cones

This file contains the open problem on Characterize simultaneous ordered spectral decompositions needed for spectral-function critical cones.

---

<a id="problem-1"></a>

## 1. Characterize simultaneous ordered spectral decompositions needed for spectral-function critical cones

Source paper authors: Ashkan Mohammadi, Ebrahim Sarabi

### 1. Problem Background

Let $\mathbb{S}^n$ be the space of real $n\times n$ symmetric matrices. For $X\in\mathbb{S}^n$, let $\lambda(X)\in\mathbb{R}^n$ denote the vector of eigenvalues sorted in nonincreasing order. Write an eigen-decomposition $X=U\,\mathrm{Diag}(\lambda(X))U^\top$ with $U\in O_n$. Let $\mu_1>\cdots>\mu_r$ be the distinct eigenvalues of $X$, and define index blocks
$$
\alpha_m:=\{i\in\{1,\dots,n\}:\lambda_i(X)=\mu_m\},\qquad m=1,\dots,r,
$$
so $\{1,\dots,n\}=\bigcup_{m=1}^r \alpha_m$ is a partition.

A spectral function is a function $g:\mathbb{S}^n\to\overline{\mathbb{R}}$ of the form $g=\theta\circ\lambda$, where $\theta:\mathbb{R}^n\to\overline{\mathbb{R}}$ is symmetric (permutation-invariant). Assume $g$ is convex and lower semicontinuous, and let $Y\in\partial g(X)$ be a (convex-analytic) subgradient. A known characterization (for convex spectral functions) implies there exists an orthogonal matrix $U\in O_n(X)\cap O_n(Y)$ such that
$$
X=U\,\mathrm{Diag}(\lambda(X))U^\top,\qquad Y=U\,\mathrm{Diag}(\lambda(Y))U^\top,\qquad \lambda(Y)\in\partial\theta(\lambda(X)).
$$
For each block $\alpha_m$, define the corresponding principal submatrices
$$
\Lambda(Y)_{\alpha_m\alpha_m}:=\big(\mathrm{Diag}(\lambda(Y))\big)_{\alpha_m\alpha_m}\in\mathbb{S}^{|\alpha_m|},\qquad H_{m}:=U_{\alpha_m}^\top H U_{\alpha_m}\in\mathbb{S}^{|\alpha_m|},
$$
where $H\in\mathbb{S}^n$ is a direction and $U_{\alpha_m}$ denotes the submatrix of $U$ with columns indexed by $\alpha_m$.

Two symmetric matrices $A,B\in\mathbb{S}^k$ are said to have a simultaneous ordered spectral decomposition if there exists $Q\in O_k$ such that $Q^\top A Q$ and $Q^\top B Q$ are both diagonal with diagonal entries sorted in nonincreasing order (equivalently, they are simultaneously diagonalizable in a way compatible with the eigenvalue orderings).

### 2. Open Problem

**Question 1.1.** Give necessary and sufficient conditions (checkable from spectral data and/or algebraic relations) ensuring that, for a given convex spectral function $g=\theta\circ\lambda$, a point $X\in\mathbb{S}^n$, a subgradient $Y\in\partial g(X)$, and a direction $H\in\mathbb{S}^n$, the following property holds:

For every block $m=1,\dots,r$ associated with the distinct eigenvalues of $X$, the pair of matrices $\Lambda(Y)_{\alpha_m\alpha_m}\in\mathbb{S}^{|\alpha_m|}$ and $H_m=U_{\alpha_m}^\top H U_{\alpha_m}\in\mathbb{S}^{|\alpha_m|}$ admits a simultaneous ordered spectral decomposition.

Equivalently, characterize when there exist orthogonal matrices $Q_m\in O_{|\alpha_m|}$ such that both $Q_m^\top \Lambda(Y)_{\alpha_m\alpha_m} Q_m$ and $Q_m^\top H_m Q_m$ are diagonal with their diagonal entries arranged in nonincreasing order.

### 3. Known Results

In Mohammadi–Sarabi (2024), the ordered simultaneous diagonalization condition appears as the key remaining structural ingredient in the critical-cone description for convex spectral functions $g=\theta\circ\lambda$. Specifically, Proposition 5.4 shows that $H\in K_g(X,Y)$ is equivalent to (i) the reduced-space condition $\lambda'(X;H)\in K_\theta(\lambda(X),\lambda(Y))$ and (ii) for each multiplicity block $\alpha_m$ of $X$, the pair $(\Lambda(Y)_{\alpha_m\alpha_m},\,U_{\alpha_m}^\top H U_{\alpha_m})$ admits a simultaneous ordered spectral decomposition. The paper explicitly notes that giving intrinsic, checkable necessary-and-sufficient conditions for this blockwise ordered simultaneous decomposition is open, and it is precisely this gap that the present problem asks to fill.

Forward-citing work largely treats the ordered simultaneous decomposition requirement as a black-box condition embedded in critical-cone or second-order formulas. The paper “Characterizations of tilt-stable local minimizers of a class of matrix optimization problems” uses the same blockwise ordered simultaneous diagonalization condition to characterize critical directions for polyhedral $\theta$, and derives concrete block-structure consequences by refining each $\alpha_m$ according to equal eigenvalues of $Y$ within the block. “Twice Epi-Differentiability of Spectral Functions and its applications” extends the same critical-cone characterization beyond convexity, again with the ordered simultaneous decomposition as the decisive extra condition. In the singular-value analogue, “Twice epi-differentiability of orthogonally invariant matrix functions and application” provides an iff critical-cone characterization featuring blockwise simultaneous ordered spectral decompositions, typically tied to equality cases in Fan/von Neumann trace inequalities; this strongly suggests that the eigenvalue-only case should admit a similarly checkable characterization, but an explicit standalone criterion for the symmetric-eigenvalue blocks is not provided in the forward-citation summaries.

Overall, the state of the art indicates the problem remains open: existing papers identify where the ordered simultaneous decomposition is needed (critical cones, second subderivatives, tilt stability) and sometimes translate it into block-structural consequences once such a decomposition exists, but none supplies a complete intrinsic characterization (purely in terms of spectral data and algebraic relations of $\Lambda(Y)_{\alpha_m\alpha_m}$ and $H_m$) guaranteeing the existence of an ordered common eigenbasis on each $\alpha_m$. Promising directions include exploiting equality characterizations in Fan’s inequality $\langle A,B\rangle\le \langle \lambda(A),\lambda(B)\rangle$ on each block, commutator-based criteria for simultaneous diagonalizability (augmented with order-compatibility constraints when eigenvalues repeat), and refining the block partitions induced by ties in $\lambda(Y)$ to reduce the ordered condition to diagonalizability within smaller invariant subspaces.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #130 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4401514485_p0/partial_progress/130.pdf)

### 4. Source and Verification

- **Source paper:** Ashkan Mohammadi, Ebrahim Sarabi, [*Parabolic Regularity of Spectral Functions*](https://doi.org/10.1287/moor.2023.0010), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 5 (discussion immediately after Proposition 5.4), page 25.
- **Area:** spectral convex analysis
- **Keywords:** `spectral functions`, `critical cone`, `simultaneous diagonalization`, `ordered eigenvalues`, `second-order variational analysis`
- **Upstream problem record:** [W4401514485_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4401514485_p0&n=130&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ashkan Mohammadi, Ebrahim Sarabi, [*Parabolic Regularity of Spectral Functions*](https://doi.org/10.1287/moor.2023.0010), Mathematics of Operations Research, 2024.
2. *Characterizations of tilt-stable local minimizers of a class of matrix optimization problems*.
3. [*Twice epi-differentiability of orthogonally invariant matrix functions and application*](https://doi.org/10.1007/s11228-026-00804-7).
4. *Twice Epi-Differentiability of Spectral Functions and its applications*.
5. [*Smoothness of subgradient mappings and its applications in parametric optimization*](https://doi.org/10.1007/s11228-025-00777-z).
6. [*Twice epi-differentiablity and parabolic regularity of a class of non-amenable functions*](https://doi.org/10.1080/02331934.2024.2406277).
7. *Variational Analysis in Spectral Decomposition Systems*.
