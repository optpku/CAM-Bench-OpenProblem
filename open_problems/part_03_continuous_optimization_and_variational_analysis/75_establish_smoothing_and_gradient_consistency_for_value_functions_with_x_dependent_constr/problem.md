# Establish smoothing and gradient consistency for value functions with x-dependent constraints

This file contains the open problem on Establish smoothing and gradient consistency for value functions with x-dependent constraints.

---

<a id="problem-1"></a>

## 1. Establish smoothing and gradient consistency for value functions with x-dependent constraints

Source paper authors: Jan Harold Alcantara, Akiko Takeda

### 1. Problem Background

Consider the bilevel optimization problem
$$

\min_{(x,y)\in X\times Y(x)} f(x,y) \quad \text{s.t.}\quad y\in \arg\min_{\bar y\in Y(x)} g(x,\bar y),

$$
where $X\subseteq \mathbb{R}^n$ is a closed convex set, and the lower-level feasible set $Y(x)\subseteq \mathbb{R}^m$ depends on $x$. The functions $f,g$ are (possibly nonsmooth) real-valued functions; the paper’s main body treats the fixed-set case $Y(x)\equiv Y$ and focuses on the lower-level value function
$$

v(x):=\min_{y\in Y} g(x,y)

$$
(or analogously $v(x):=\min_{y\in Y(x)} g(x,y)$ in the $x$-dependent case) and smooth approximation families $\{v_\mu\}_{\mu>0}$ intended to satisfy:
1) (smoothing/approximation) $v_\mu$ is continuously differentiable and $v_\mu(x)\to v(x)$ as $(x,\mu)\to (\bar x,0)$, and
2) (gradient consistency) any cluster point of $\nabla v_\mu(x)$ as $(x,\mu)\to (\bar x,0)$ lies in the Clarke subdifferential $\partial v(\bar x)$.

In the $x$-dependent constraint setting, the relevant lower-level value function becomes
$$

v(x):=\min_{y\in Y(x)} g(x,y),

$$
and one seeks to construct a family $\{v_\mu\}_{\mu>0}$ (potentially based on regularization/penalization of the lower-level problem and/or smoothing of $g$ and of the set-valued mapping $x\mapsto Y(x)$) that is a smoothing family in the above sense and is gradient consistent.

### 2. Open Problem

**Question 1.1.** Determine conditions and a concrete construction under which, for the $x$-dependent lower-level feasible set $Y(x)$, the resulting smooth approximation $\{v_\mu\}_{\mu>0}$ of the value function $v(x)=\min_{y\in Y(x)} g(x,y)$ (obtained for example by a quadratic-regularization combined with penalization approach) is:
$$

\text{(i) a smoothing family: } v_\mu \in C^1 \text{ and } \lim_{(x,\mu)\to(\bar x,0)} v_\mu(x)=v(\bar x),

$$
and
$$

\text{(ii) gradient consistent at each } \bar x: \varnothing\neq \limsup_{(x,\mu)\to(\bar x,0)} \nabla v_\mu(x) \subseteq \partial v(\bar x).

$$
Here $\partial v(\bar x)$ denotes the Clarke subdifferential of $v$ at $\bar x$, and
$$

\limsup_{(x,\mu)\to(\bar x,0)} \nabla v_\mu(x):=\left\{\xi:\exists x_k\to \bar x,\ \mu_k\downarrow 0\ \text{with }\nabla v_{\mu_k}(x_k)\to \xi\right\}.

$$

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #49 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7140189588_p0/partial_progress/49.pdf)

### 4. Source and Verification

- **Source paper:** Jan Harold Alcantara, Akiko Takeda, [*Theoretical Smoothing Frameworks for Nonsmooth Simple Bilevel Problems*](https://doi.org/10.1287/moor.2024.0405), Mathematics of Operations Research, 2026.
- **Location in paper:** Page 30, Section 5 (Concluding Remarks and Future Directions).
- **Area:** bilevel optimization
- **Keywords:** `bilevel optimization`, `value function`, `smoothing methods`, `gradient consistency`, `parametric constraints`, `Clarke subdifferential`
- **Upstream problem record:** [W7140189588_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7140189588_p0&n=49&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jan Harold Alcantara, Akiko Takeda, [*Theoretical Smoothing Frameworks for Nonsmooth Simple Bilevel Problems*](https://doi.org/10.1287/moor.2024.0405), Mathematics of Operations Research, 2026.
