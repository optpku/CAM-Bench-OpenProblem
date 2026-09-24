# Prove NP-hardness of deciding convexity of coordinate projections of rotation matrices

This file contains the open problem on Prove NP-hardness of deciding convexity of coordinate projections of rotation matrices.

---

<a id="problem-1"></a>

## 1. Prove NP-hardness of deciding convexity of coordinate projections of rotation matrices

Source paper authors: Akshay Ramachandran, Kevin Shu, Alex L. Wang

### 1. Problem Background

Let $n\ge 3$. Let $\mathrm{SO}(n)=\{X\in\mathbb{R}^{n\times n}:X^\top X=I,\ \det(X)=1\}$ denote the special orthogonal group (rotation matrices).

For a set of matrix coordinates $S\subseteq [n]\times [n]$ (where $[n]=\{1,\dots,n\}$), define the coordinate projection map $\pi_S:\mathbb{R}^{n\times n}\to\mathbb{R}^{|S|}$ by
$$

\pi_S(X) := (X_{ij})_{(i,j)\in S},

$$
i.e., $\pi_S(X)$ records the entries of $X$ indexed by $S$ (in some fixed order).

Define the decision problem $\mathrm{CONVEX}$: the input is $n$ and a coordinate set $S\subseteq [n]\times[n]$; the output is $\mathrm{TRUE}$ if the image set $\pi_S(\mathrm{SO}(n))\subseteq\mathbb{R}^{|S|}$ is convex, and $\mathrm{FALSE}$ otherwise.

Convexity here is in the usual Euclidean sense: a set $K\subseteq\mathbb{R}^d$ is convex if for all $x,y\in K$ and all $\lambda\in[0,1]$, $\lambda x+(1-\lambda)y\in K$.

### 2. Open Problem

**Question 1.1.** Determine the computational complexity of $\mathrm{CONVEX}$. In particular, prove (or refute) that $\mathrm{CONVEX}$ is NP-hard: given $n$ and $S\subseteq [n]\times[n]$, decide whether $\pi_S(\mathrm{SO}(n))$ is convex.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #122 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400196985_p0/partial_progress/122.pdf)

### 4. Source and Verification

- **Source paper:** Akshay Ramachandran, Kevin Shu, Alex L. Wang, [*Hidden Convexity, Optimization, and Algorithms on Rotation Matrices*](https://doi.org/10.1287/moor.2023.0114), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 29, Section 8 (Summary and open questions), paragraph 'Convex coordinate projections'
- **Area:** computational complexity
- **Keywords:** `special orthogonal group`, `hidden convexity`, `coordinate projection`, `convexity decision problem`, `computational complexity`, `np-hardness`
- **Upstream problem record:** [W4400196985_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400196985_p0&n=122&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Akshay Ramachandran, Kevin Shu, Alex L. Wang, [*Hidden Convexity, Optimization, and Algorithms on Rotation Matrices*](https://doi.org/10.1287/moor.2023.0114), Mathematics of Operations Research, 2024.
