# Prove tangential derivative convergence of NSDP central path as barrier vanishes

This file contains the open problem on Prove tangential derivative convergence of NSDP central path as barrier vanishes.

---

<a id="problem-1"></a>

## 1. Prove tangential derivative convergence of NSDP central path as barrier vanishes

Source paper authors: Takayuki Okuno

### 1. Problem Background

Consider the nonlinear semidefinite program (NSDP)
$$

\min_{x\in\mathbb{R}^n} f(x) \quad \text{s.t. } G(x)\in \mathbb{S}^m_+,\; h(x)=0,

$$
where $f:\mathbb{R}^n\to\mathbb{R}$, $G:\mathbb{R}^n\to\mathbb{S}^m$, and $h:\mathbb{R}^n\to\mathbb{R}^s$ are twice continuously differentiable, $\mathbb{S}^m$ is the space of real symmetric $m\times m$ matrices, and $\mathbb{S}^m_+$ (resp. $\mathbb{S}^m_{++}$) denotes the cone of positive semidefinite (resp. definite) matrices.

Let the Lagrangian be
$$

L(x,Y,z):= f(x) - G(x)\bullet Y + h(x)^\top z,

$$
where $Y\in\mathbb{S}^m$ is the dual matrix for the semidefinite constraint, $z\in\mathbb{R}^s$ is the multiplier for $h(x)=0$, and $A\bullet B:=\mathrm{trace}(AB)$.

A (primal-dual) barrier KKT (BKKT) triplet with barrier parameter $\mu>0$ is $w(\mu)=(x(\mu),Y(\mu),z(\mu))\in \mathbb{R}^n\times\mathbb{S}^m_{++}\times\mathbb{R}^s$ satisfying
$$

\nabla_x L(x(\mu),Y(\mu),z(\mu))=0,\qquad h(x(\mu))=0,\qquad G(x(\mu))Y(\mu)=\mu I,

$$
with $G(x(\mu))\in\mathbb{S}^m_{++}$. A central path is a smooth mapping $\mu\mapsto w(\mu)$ of BKKT triplets for sufficiently small $\mu>0$.

Let $x^*$ be a KKT point of the NSDP. Under the paper's standing assumptions (strict complementarity at $x^*$ for some multiplier, an enhanced second-order sufficient condition holding uniformly over the Lagrange multiplier set at $x^*$, and the Mangasarian--Fromovitz constraint qualification at $x^*$), the paper establishes existence of a unique smooth central path $w(\mu)$ for $\mu\in (0,\bar\mu)$ that converges as $\mu\downarrow 0$ to a distinguished KKT triplet $w_a=(x^*,Y_a,z_a)$, where $(Y_a,z_a)$ is the analytic center of the (possibly non-singleton) Lagrange multiplier set at $x^*$.

The paper also defines a vector $\xi^*\in\mathbb{R}^n$ as the unique $\Delta x$-component (when it exists) of solutions $(\Delta x,\Delta Y)$ to a certain linear system obtained by formally differentiating a symmetric form of the BKKT equations at the limit point $w_a$. This vector $\xi^*$ is characterized in the paper and is shown to be the limit of the scaled primal displacement $(x(\mu)-x^*)/\mu$ as $\mu\downarrow 0$. Denote by $\dot x(\mu):=\frac{d}{d\mu}x(\mu)$ the tangential direction (derivative) of the central path in the primal space, defined for $\mu\in(0,\bar\mu)$ by smoothness of $x(\cdot)$.

### 2. Open Problem

**Question 1.1.** Under the assumptions ensuring existence of a unique smooth central path $w(\mu)=(x(\mu),Y(\mu),z(\mu))$ for $\mu\in(0,\bar\mu)$ converging to $w_a=(x^*,Y_a,z_a)$ as $\mu\downarrow 0$, and with $\xi^*\in\mathbb{R}^n$ denoting the vector defined (in the paper) as the unique $\Delta x$-component of the linearized BKKT derivative system at $w_a$, determine whether
$$

\lim_{\mu\to 0^+} \dot x(\mu) = \xi^*

$$
holds, where $\dot x(\mu)=\frac{d}{d\mu}x(\mu)$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #20 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411957271_p0/solutions/20.pdf)

### 4. Source and Verification

- **Source paper:** Takayuki Okuno, [*Analysis of the Primal-Dual Central Path for Nonlinear Semidefinite Optimization Without the Nondegeneracy Condition*](https://doi.org/10.1287/moor.2022.0298), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 4 (Concluding remarks and future work), page 19.
- **Area:** nonlinear semidefinite programming
- **Keywords:** `nonlinear semidefinite programming`, `central path`, `primal-dual interior point methods`, `log-det barrier`, `analytic center`, `tangential direction`, `strict complementarity`
- **Upstream problem record:** [W4411957271_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411957271_p0&n=20&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Takayuki Okuno, [*Analysis of the Primal-Dual Central Path for Nonlinear Semidefinite Optimization Without the Nondegeneracy Condition*](https://doi.org/10.1287/moor.2022.0298), Mathematics of Operations Research, 2025.
