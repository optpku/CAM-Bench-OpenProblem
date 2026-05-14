# Monotone Operator Theory and Variational Analysis

This file collects open problems in monotone operator theory and variational analysis. The present problem is foundational for maximal monotone operators in Banach spaces and is closely connected to convex analysis, variational inequalities, monotone inclusions, proximal methods, and splitting algorithms.

---

<a id="problem-1"></a>

## 1. Rockafellar Sum Problem

Contributors: Junyu Zhang

### 1. Problem Background
Let $X$ be a real Banach space and let $A,B:X\rightrightarrows X^*$ be two maximal monotone operators. Their pointwise sum is defined by $(A+B)(x):=Ax+Bx=\{a^*+b^*:a^*\in Ax,\ b^*\in Bx\}.$

The sum $A+B$ is automatically monotone. Rockafellar's sum problem asks whether it remains maximal monotone under the classical interior-point constraint qualification $\mathrm{dom}A\cap \mathrm{int}\mathrm{dom}B\neq\varnothing.$ This question is central in monotone operator theory. The main difficulty in nonreflexive spaces is that duality and separation arguments can naturally produce objects in $X^{**}$ rather than in $X$ itself. Many special cases are known, for example when one operator has full domain, one operator is a subdifferential or normal cone operator in suitable settings, or stronger representability/type assumptions are available.

### 2. Open Problems
**Question 1.1. Rockafellar Sum Problem in General Banach Spaces.** Let $X$ be a real Banach space, and let $A,B:X\rightrightarrows X^*$ be maximal monotone operators satisfying $\mathrm{dom}A\cap \mathrm{int}\mathrm{dom}B\neq\varnothing.$ Is the sum $A+B$ necessarily maximal monotone?

### 3. Known Results
#### 3.1 Rockafellar's sum theorem in reflexive Banach spaces

**Source:** R. T. Rockafellar, *On the maximality of sums of nonlinear monotone operators*, Transactions of the American Mathematical Society, 1969.

Let $X$ be a real reflexive Banach space, and let $A,B:X\rightrightarrows X^*$ be maximal monotone operators. Suppose that $\mathrm{dom}A\cap \mathrm{int}\mathrm{dom}B\neq\varnothing$. Then the pointwise sum $A+B:X\rightrightarrows X^*$, defined by $(A+B)(x)=Ax+Bx$, is maximal monotone.

### 4. References
1. R. T. Rockafellar, **On the maximality of sums of nonlinear monotone operators**, Transactions of the American Mathematical Society, 1969.
2. S. Simons, **Minimax and Monotonicity**, Lecture Notes in Mathematics, Springer, 1998.
3. H. H. Bauschke, X. Wang, and L. Yao, **Recent Progress on Monotone Operator Theory**, 2012.
4. M. D. Voisei, **The sum and chain rules for maximal monotone operators**, related survey articles on maximal monotone sums in nonreflexive Banach spaces.
