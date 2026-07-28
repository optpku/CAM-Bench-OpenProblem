# Gaussian Elimination with Column Pivoting

This file contains an open problem on rigorous error bounds for Gaussian elimination with column pivoting.

---

<a id="problem-1"></a>

## 1. Error Bound for Gaussian Elimination with Column Pivoting

Contributors: Yaxiang Yuan

### 1. Problem Background

Gaussian elimination with pivoting is one of the central algorithms of numerical linear algebra. Classical backward-error theory is well developed for partial pivoting, complete pivoting, and related variants, but different pivoting rules can lead to substantially different element-growth behavior and stability guarantees.

This problem asks for a rigorous error analysis of Gaussian elimination with column pivoting. In broad terms, the goal is to understand whether the pivoting rule admits a useful a priori growth-factor bound, backward-error bound, or forward-error bound comparable to the standard guarantees known for better-understood pivoting strategies.

### 2. Open Problems

**Question 1.1. Error bound for column-pivot Gaussian elimination.** Give a sharp or useful error bound for Gaussian elimination with column pivoting. More precisely, for a nonsingular matrix $A\in\mathbb{R}^{n\times n}$ and a computed solution $\widehat{x}$ to $Ax=b$ obtained by Gaussian elimination with column pivoting in floating-point arithmetic, prove a bound of the form
$$
\frac{\|x-\widehat{x}\|}{\|x\|}
\le
\Phi(n,A)\,u + O(u^2),
$$
or an equivalent backward-error statement
$$
(A+\Delta A)\widehat{x}=b,\qquad
\frac{\|\Delta A\|}{\|A\|}\le \Psi(n,A)\,u+O(u^2),
$$
where $u$ is the unit roundoff and $\Phi,\Psi$ are explicit quantities controlled by a provable growth-factor estimate for the column-pivoting rule.

**Question 1.2. Growth factor.** Determine whether Gaussian elimination with column pivoting has a polynomial worst-case growth-factor bound, or construct explicit matrix families showing that any such bound must be large.

**Question 1.3. Structural stability classes.** Identify natural matrix classes for which column pivoting is provably stable, for example diagonally dominant matrices, totally positive matrices, positive definite matrices after suitable symmetrization, or matrices satisfying coherence or leverage-score conditions.

### 3. Desired Outcome

A satisfactory solution would state the pivoting rule precisely, prove a backward- or forward-error theorem in a standard floating-point model, and either bound the associated growth factor or show that the rule can fail through an explicit counterexample family.
