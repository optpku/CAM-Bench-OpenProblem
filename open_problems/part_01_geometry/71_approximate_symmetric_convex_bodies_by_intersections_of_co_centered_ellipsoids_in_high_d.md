# Approximate symmetric convex bodies by intersections of co-centered ellipsoids in high dimensions

This file contains the open problem on Approximate symmetric convex bodies by intersections of co-centered ellipsoids in high dimensions.

---

<a id="problem-1"></a>

## 1. Approximate symmetric convex bodies by intersections of co-centered ellipsoids in high dimensions

Source paper authors: Amir Ali Ahmadi, Abraar Chaudhry, Cemil Dibek

### 1. Problem Background

Let $C\subset \mathbb{R}^n$ be a symmetric convex body, i.e., a compact convex set with nonempty interior such that $x\in C\Rightarrow -x\in C$. An ellipsoid (centered at the origin) is a set of the form
$$
E(Q):=\{x\in\mathbb{R}^n: x^TQx\le 1\},
$$
where $Q\in \mathbb{S}^n_{++}$ is symmetric positive definite. (Equivalently, an ellipsoid is the unit ball of a quadratic norm.)

For an integer $m\ge 1$, an intersection of $m$ co-centered ellipsoids means a set of the form
$$
\bigcap_{i=1}^m E(Q_i)=\{x\in\mathbb{R}^n: x^TQ_i x\le 1\ \text{for all } i=1,\dots,m\},
$$
with all ellipsoids centered at the origin.

Given two symmetric convex bodies $K,L\subset \mathbb{R}^n$, a standard multiplicative (sandwich) approximation notion is: $K$ $\varepsilon$-approximates $L$ if
$$
K\subseteq L\subseteq (1+\varepsilon)K,
$$
where $(1+\varepsilon)K:=\{(1+\varepsilon)x: x\in K\}$ is a uniform radial scaling.

The paper introduces generalized ellipsoids (GEs) and shows (i) any intersection of $m$ co-centered ellipsoids can be represented exactly as a generalized ellipsoid of degree $d\le 2m-3$, and (ii) every symmetric convex body can be approximated by a GE with a quantitative degree bound obtained via known results on polytopic approximation. The question below asks directly about approximation by intersections of ellipsoids, which would in turn sharpen the degree-vs-accuracy bounds for GE approximation.

### 2. Open Problem

**Question 1.1.** For fixed dimension $n$ and approximation parameter $\varepsilon>0$, determine (or tightly bound) the smallest integer $m=m(n,\varepsilon)$ such that for every symmetric convex body $C\subset \mathbb{R}^n$ there exist positive definite matrices $Q_1,\dots,Q_m\in\mathbb{S}^n_{++}$ with
$$
\bigcap_{i=1}^m \{x\in\mathbb{R}^n: x^TQ_i x\le 1\}\ \subseteq\ C\ \subseteq\ (1+\varepsilon)\,\bigcap_{i=1}^m \{x\in\mathbb{R}^n: x^TQ_i x\le 1\}.

$$
Equivalently, characterize the best possible approximation quality achievable by intersections of $m$ co-centered ellipsoids as a function of $m$ and $n$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #45 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7126221168_p0/partial_progress/45.pdf)

### 4. Source and Verification

- **Source paper:** Amir Ali Ahmadi, Abraar Chaudhry, Cemil Dibek, [*Generalized Ellipsoids*](https://doi.org/10.1287/moor.2024.0643), Mathematics of Operations Research, 2026.
- **Location in paper:** Section 7 (Future Research Directions), page 31 (PDF pagination in the provided text)
- **Area:** convex body approximation
- **Keywords:** `convex geometry`, `symmetric convex bodies`, `ellipsoid intersections`, `geometric approximation`, `John ellipsoid`, `semidefinite representations`
- **Upstream problem record:** [W7126221168_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7126221168_p0&n=45&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Amir Ali Ahmadi, Abraar Chaudhry, Cemil Dibek, [*Generalized Ellipsoids*](https://doi.org/10.1287/moor.2024.0643), Mathematics of Operations Research, 2026.
