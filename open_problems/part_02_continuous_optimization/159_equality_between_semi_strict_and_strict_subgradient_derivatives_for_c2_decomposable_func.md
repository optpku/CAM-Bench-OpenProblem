# Equality between semi-strict and strict subgradient derivatives for C2-decomposable functions

This file contains the open problem on Equality between semi-strict and strict subgradient derivatives for C2-decomposable functions.

---

<a id="problem-1"></a>

## 1. Equality between semi-strict and strict subgradient derivatives for C2-decomposable functions

Source paper authors: Nguyen T. V. Hang, Ebrahim Sarabi

### 1. Problem Background

Let $Y$ be a finite-dimensional Hilbert space, and let $g:Y\to\overline{\mathbb R}:=[-\infty,\infty]$ be a proper lower-semicontinuous convex function.

For $\bar u\in Y$ with $g(\bar u)<\infty$ and $\bar y\in \partial g(\bar u)$, define:

1) The (limiting/convex) subdifferential $\partial g(\bar u)$.

2) The subderivative (first-order epi-derivative)
$$

 dg(\bar u)(w):=\liminf_{t\downarrow 0,\,w'\to w}\frac{g(\bar u+t w')-g(\bar u)}{t}.

$$

3) The critical cone of $g$ at $\bar u$ for $\bar y$:
$$

 K_g(\bar u,\bar y):=\{w\in Y\mid \langle \bar y,w\rangle = dg(\bar u)(w)\}.

$$

4) The second subderivative of $g$ at $\bar u$ for $\bar y$, defined via second-order difference quotients
$$

\Delta_t^2 g(\bar u,\bar y)(w):=\frac{g(\bar u+t w)-g(\bar u)-t\langle \bar y,w\rangle}{\tfrac12 t^2},\qquad t>0,

$$
$$

 d^2 g(\bar u,\bar y)(w):=\liminf_{t\downarrow 0,\,w'\to w}\Delta_t^2 g(\bar u,\bar y)(w').

$$

5) The graphical derivative $D(\partial g)(\bar u,\bar y)$ of the set-valued mapping $\partial g$ at $(\bar u,\bar y)$, and the tangent cone $T_{\partial g(\bar u)}(\bar y)$ to the (convex) set $\partial g(\bar u)$ at $\bar y$.

6) The semi-strict graphical derivative $D^b(\partial g)(\bar u,\bar y)$ (as defined by the outer limit representation)
$$

 D^b(\partial g)(\bar u,\bar y)(w):=\limsup_{t\downarrow 0,\,w'\to w\,;\,y\to \bar y,\,y\in \partial g(\bar u)}\frac{\partial g(\bar u+t w')-y}{t}.

$$

The paper studies conditions under which one has the identity
$$

 D^b(\partial g)(\bar u,\bar y)(w)=\operatorname{cl}\Big(D(\partial g)(\bar u,\bar y)(w)-K_g(\bar u,\bar y)^*\Big)\quad \text{for all }w\in Y,

$$
where $K_g(\bar u,\bar y)^*$ denotes the polar cone of $K_g(\bar u,\bar y)$.

A key function class in the paper is that of $C^2$-decomposable convex functions. A convex function $g$ is $C^2$-decomposable at $\bar u$ if there exist a neighborhood $O\subset Y$ of $\bar u$, a finite-dimensional Hilbert space $Z$, a $C^2$-smooth mapping $\Xi:O\to Z$ with $\Xi(\bar u)=0$, and a proper lsc sublinear function $\vartheta:Z\to\overline{\mathbb R}$ such that
$$

 g(u)=g(\bar u)+\vartheta(\Xi(u))\quad \text{for all }u\in O.

$$
(Various additional regularity conditions, such as nondegeneracy and dual conditions, are discussed in the paper, but the open question below is about whether the above identity holds in general for $C^2$-decomposable $g$.)

### 2. Open Problem

**Question 1.1.** Determine whether every convex function $g:Y\to\overline{\mathbb R}$ that is $C^2$-decomposable at $\bar u\in Y$ satisfies, for each $\bar y\in \partial g(\bar u)$, the identity
$$

 D^b(\partial g)(\bar u,\bar y)(w)=\operatorname{cl}\Big(D(\partial g)(\bar u,\bar y)(w)-K_g(\bar u,\bar y)^*\Big)\quad \text{for all }w\in Y.

$$
Equivalently: characterize whether the semi-strict graphical derivative of the subgradient mapping $\partial g$ can always be expressed as the (closure of the) Minkowski difference between the graphical derivative $D(\partial g)(\bar u,\bar y)$ and the polar cone $K_g(\bar u,\bar y)^*$ when $g$ is $C^2$-decomposable.

### 3. Known Results

The open problem from Hang--Sarabi asks whether every convex function $g$ that is $C^2$-decomposable at $\bar u$ satisfies the identity $D^b(\partial g)(\bar u,\bar y)(w)=\operatorname{cl}(D(\partial g)(\bar u,\bar y)(w)-K_g(\bar u,\bar y)^*)$ for all $w$ and all $\bar y\in\partial g(\bar u)$. In the source paper this equality is proved for important subclasses (e.g., CPLQ functions and several cone/indicator examples) and is shown to propagate through a chain rule (Proposition 3.5) provided the outer sublinear function $\vartheta$ satisfies the equality and a nondegeneracy condition holds. However, the authors explicitly note that whether (3.14) holds for general $C^2$-decomposable functions remains open.

The only forward-citing work provided here, "Smoothness of subgradient mappings and its applications in parametric optimization", makes substantial partial progress by developing strict proto-differentiability and strict twice epi-differentiability for reliably $C^2$-decomposable functions. Its relative-interior characterization (strict proto-differentiability near $(\bar u,\bar y)$ iff $\bar y\in\operatorname{ri}\,\partial g(\bar u)$, under reliable decomposability and nondegeneracy) suggests that the semi-strict derivative $D^b$ may coincide with the usual graphical derivative $D$ on a large set of multipliers, which is closely aligned with the desired formula expressing $D^b$ via $D$ and the polar of the critical cone. The paper also provides a chain rule for second subderivatives in the reliably $C^2$-decomposable setting, paralleling the calculus used in the source paper.

At present, based on the provided citation data, the general equality for all convex $C^2$-decomposable $g$ (without extra assumptions such as reliability/nondegeneracy and/or $\bar y\in\operatorname{ri}\,\partial g(\bar u)$) remains open. Promising directions include: (i) proving the identity under the relative-interior condition on $\bar y$ (or identifying boundary-multiplier counterexamples), and (ii) extending the chain-rule approach by reducing the question to the outer sublinear $\vartheta$ and understanding when (3.12) holds for general sublinear functions beyond polyhedral/conic cases.

#### 3.1 Upstream solution and partial-progress records

- [Solution #146 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4408446556_p0/solutions/146.pdf)

### 4. Source and Verification

- **Source paper:** Nguyen T. V. Hang, Ebrahim Sarabi, [*Convergence of Augmented Lagrangian Methods for Composite Optimization Problems*](https://doi.org/10.1287/moor.2023.0324), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 18, end of Section 3 (immediately after Theorem 3.9).
- **Area:** variational analysis
- **Keywords:** `augmented Lagrangian`, `C2-decomposable functions`, `subgradient mapping`, `graphical derivative`, `critical cone`, `metric subregularity`
- **Upstream problem record:** [W4408446556_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4408446556_p0&n=146&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Nguyen T. V. Hang, Ebrahim Sarabi, [*Convergence of Augmented Lagrangian Methods for Composite Optimization Problems*](https://doi.org/10.1287/moor.2023.0324), Mathematics of Operations Research, 2025.
2. [*Smoothness of subgradient mappings and its applications in parametric optimization*](https://doi.org/10.1007/s11228-025-00777-z).
