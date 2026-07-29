# Order dependence of sequential issue-by-issue voting without LAMO bases

This file contains the open problem on Order dependence of sequential issue-by-issue voting without LAMO bases.

---

<a id="problem-1"></a>

## 1. Order dependence of sequential issue-by-issue voting without LAMO bases

Source paper authors: Alex Gershkov, Benny Moldovanu, Xianwen Shi

### 1. Problem Background

Let $d\ge 2$ and let $(\mathbb{R}^d,\|\cdot\|)$ be a finite-dimensional normed vector space.

1) Voters and preferences. There are $n\ge 3$ voters (with $n$ odd). Voter $i$ has an ideal point (peak) $t_i\in\mathbb{R}^d$. Preferences are induced by the norm distance to the peak: voter $i$ weakly prefers outcome $v$ to $v'$ iff $\|t_i-v\|\le \|t_i-v'\|$.

2) Issues as a basis. Fix an algebraic basis $B=\{x_1,\dots,x_d\}$ of $\mathbb{R}^d$. Any $v\in\mathbb{R}^d$ can be uniquely written $v=\sum_{j=1}^d \alpha_j(v) x_j$; here $\alpha_j(v)\in\mathbb{R}$ is the $j$-th coordinate of $v$ in basis $B$.

3) Sequential issue-by-issue voting. For a permutation $\sigma=(\sigma_1,\dots,\sigma_d)$ of $\{1,\dots,d\}$, consider the sequential procedure that determines the coordinate along $x_{\sigma_1}$ first, then $x_{\sigma_2}$, etc. At stage $k$, voters report a real number for the coordinate along $x_{\sigma_k}$; the stage outcome is the simple majority (one-dimensional) median of reported numbers. Earlier stage outcomes are observed before later-stage reports are chosen. The equilibrium concept is ex-post perfect equilibrium, and the paper focuses on the equilibrium surviving iterative elimination of weakly dominated strategies.

4) Order independence. The family of sequential procedures associated with the fixed basis $B$ is called order independent if, for every profile $(t_1,\dots,t_n)$, the resulting equilibrium outcome in $\mathbb{R}^d$ is the same for all permutations $\sigma$.

5) Birkhoff--James orthogonality and LAMO. For vectors $x,y\in\mathbb{R}^d$, $x$ is Birkhoff--James (BJ) orthogonal to $y$ (written $x\dashv y$) if $\|x+\lambda y\|\ge \|x\|$ for all $\lambda\in\mathbb{R}$. For a basis $B=\{x_1,\dots,x_d\}$, let $X_j$ be the subspace spanned by $B\setminus\{x_j\}$. The basis satisfies left-additive mutual orthogonality (LAMO) if $X_j\dashv x_j$ for every $j$ (equivalently, every linear combination of the other basis vectors is BJ-orthogonal to $x_j$).

### 2. Open Problem

**Question 1.1.** Assume a norm $\|\cdot\|$ on $\mathbb{R}^d$ and a basis $B=\{x_1,\dots,x_d\}$ that does not satisfy LAMO with respect to $\|\cdot\|$ (i.e., for some $j$ there exists $y\in X_j$ and $\lambda\in\mathbb{R}$ such that $\|y+\lambda x_j\|<\|y\|$).

Determine whether it must follow that sequential issue-by-issue voting with respect to $B$ is order dependent, in the sense that there exist (at least) two permutations $\sigma,\pi$ of $\{1,\dots,d\}$ and a profile of peaks $(t_1,\dots,t_n)$ for which the (iteratively undominated) ex-post perfect equilibrium outcomes of the corresponding sequential procedures differ in $\mathbb{R}^d$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #124 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400583084_p0/partial_progress/124.pdf)

### 4. Source and Verification

- **Source paper:** Alex Gershkov, Benny Moldovanu, Xianwen Shi, [*Order Independence in Sequential, Issue-by-Issue Voting*](https://doi.org/10.1287/moor.2022.0342), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 23, Section 5 (end of the proof of Proposition 3, immediately before Proposition 4).
- **Area:** spatial voting
- **Keywords:** `sequential voting`, `order independence`, `normed spaces`, `birkhoff-james orthogonality`, `LAMO bases`, `issue-by-issue median`, `ex-post perfect equilibrium`
- **Upstream problem record:** [W4400583084_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400583084_p0&n=124&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Alex Gershkov, Benny Moldovanu, Xianwen Shi, [*Order Independence in Sequential, Issue-by-Issue Voting*](https://doi.org/10.1287/moor.2022.0342), Mathematics of Operations Research, 2024.
