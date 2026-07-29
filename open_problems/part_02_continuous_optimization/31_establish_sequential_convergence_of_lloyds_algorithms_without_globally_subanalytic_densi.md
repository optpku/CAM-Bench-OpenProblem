# Establish sequential convergence of Lloyd’s algorithms without globally subanalytic densities

This file contains the open problem on Establish sequential convergence of Lloyd’s algorithms without globally subanalytic densities.

---

<a id="problem-1"></a>

## 1. Establish sequential convergence of Lloyd’s algorithms without globally subanalytic densities

Source paper authors: Léo Portales, Elsa Cazelles, Edouard Pauwels

### 1. Problem Background

Let $\mu$ be a probability measure on $\mathbb{R}^d$ with compact support $\mathrm{Supp}(\mu)$ and density $f$ with respect to Lebesgue measure (so $d\mu(x)=f(x)\,dx$). Fix $N\in\mathbb{N}^*$ and write $Y=(y_1,\dots,y_N)\in (\mathbb{R}^d)^N$ for the support points of a discrete measure. Let $\Delta_N:=\{\pi\in\mathbb{R}^N_+:\sum_{i=1}^N \pi_i=1\}$ be the probability simplex and let $\delta_y$ denote a Dirac mass at $y\in\mathbb{R}^d$.

For optimal quantization, define the objective
$$

G_N(Y):=\min_{\pi\in\Delta_N}\frac12\,W_2^2\Bigl(\mu,\sum_{i=1}^N \pi_i\,\delta_{y_i}\Bigr)=\frac12\int_{\mathbb{R}^d}\min_{1\le i\le N}\|x-y_i\|^2\,f(x)\,dx,

$$
where $W_2$ is the 2-Wasserstein distance for the squared Euclidean cost. When $Y$ has distinct points, the Voronoi cells are
$$

V_i(Y):=\{x\in\mathbb{R}^d:\ \|x-y_i\|^2<\|x-y_j\|^2\ \forall j\ne i\},\qquad i=1,\dots,N.

$$
The Lloyd update for optimal quantization maps $Y$ to the vector of Voronoi barycenters
$$

T_N(Y):=\Bigl(\frac{\int_{V_i(Y)} x\,d\mu(x)}{\mu(V_i(Y))}\Bigr)_{i=1}^N,

$$
and generates iterates $Y_{n+1}=T_N(Y_n)$ (under suitable conditions ensuring $\mu(V_i(Y_n))>0$).

For uniform quantization, define
$$

F_N(Y):=\frac12\,W_2^2\Bigl(\mu,\frac1N\sum_{i=1}^N \delta_{y_i}\Bigr).

$$
The corresponding Lloyd-type update for uniform quantization can be written (via semi-discrete optimal transport duality) as a Laguerre/power-cell barycentric map $B_N$, producing iterates $Y_{n+1}=B_N(Y_n)$.

Sequential convergence means that the entire iterate sequence $(Y_n)_{n\ge 0}$ converges to a single limit point (equivalently, has a unique accumulation point), typically a critical point of the relevant objective $G_N$ or $F_N$.

The paper proves sequential convergence of these Lloyd iterates under the additional hypothesis that the density $f$ is globally subanalytic (hence definable in an o-minimal structure), which yields the Kurdyka-\L{}ojasiewicz inequality for $G_N$ and $F_N$.

### 2. Open Problem

**Question 1.1.** Determine conditions on the target measure $\mu$ (beyond the globally subanalytic/definability hypotheses on the density $f$) under which the Lloyd iterates $Y_{n+1}=T_N(Y_n)$ for optimal quantization and/or $Y_{n+1}=B_N(Y_n)$ for uniform quantization are guaranteed to converge sequentially (i.e., $Y_n\to Y_\infty$ for some $Y_\infty$) in the semi-discrete setting where $\mu$ is absolutely continuous on $\mathbb{R}^d$.

### 3. Known Results

The 2025 paper of Portales–Cazelles–Pauwels establishes sequential convergence of Lloyd-type fixed-point iterations for both optimal quantization $Y_{n+1}=T_N(Y_n)$ and uniform quantization $Y_{n+1}=B_N(Y_n)$ under the rigidity hypothesis that the target density $f$ is globally subanalytic (hence definable), which implies the Kurdyka–\L{}ojasiewicz (KL) property for the semi-discrete objectives $G_N$ and $F_N$. The proof combines (i) the classical identities $\nabla G_N(Y)=M(V(Y))(Y-T_N(Y))$ and $\nabla F_N(Y)=\tfrac1N(Y-B_N(Y))$, (ii) a strong descent condition along Lloyd iterates, and (iii) KL-based convergence theorems for gradient-like methods.

Beyond this definability framework, the open problem asks for alternative conditions on $\mu$ ensuring sequential convergence. The only forward-citing work provided here ("Weighted quantization using MMD") does not advance this question for $W_2$-quantization; it studies different objectives (MMD) and dynamics, though it reinforces the general strategy of viewing fixed-point quantization schemes as (preconditioned) gradient methods where KL-type inequalities can yield convergence.

Given the current forward-citation evidence supplied, there is no identified solution removing global subanalyticity/definability assumptions. Promising directions suggested by the source paper include: finding other verifiable KL mechanisms for $G_N$ and $F_N$ (e.g., analyticity of parameterized integrals under alternative geometric hypotheses on $\mathrm{Supp}(\mu)$), or proving isolation/stratification properties of critical sets (which would imply convergence once accumulation points are known to be critical).

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #1 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4399151428_p0/partial_progress/1.pdf)

### 4. Source and Verification

- **Source paper:** Léo Portales, Elsa Cazelles, Edouard Pauwels, [*On the Sequential Convergence of Lloyd’s Algorithms*](https://doi.org/10.1287/moor.2024.0550), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 3, Introduction (paragraph ending with 'remains open')
- **Area:** optimal quantization
- **Keywords:** `lloyds algorithm`, `quantization`, `semi-discrete optimal transport`, `sequential convergence`, `kurdyka-lojasiewicz`, `o-minimal structures`
- **Upstream problem record:** [W4399151428_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4399151428_p0&n=1&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Léo Portales, Elsa Cazelles, Edouard Pauwels, [*On the Sequential Convergence of Lloyd’s Algorithms*](https://doi.org/10.1287/moor.2024.0550), Mathematics of Operations Research, 2025.
2. *Weighted quantization using MMD: From mean field to mean shift via gradient flows*.
