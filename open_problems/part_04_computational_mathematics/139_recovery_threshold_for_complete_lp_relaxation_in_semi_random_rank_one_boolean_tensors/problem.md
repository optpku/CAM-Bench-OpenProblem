# Recovery threshold for complete LP relaxation in semi-random rank-one Boolean tensors

This file contains the open problem on Recovery threshold for complete LP relaxation in semi-random rank-one Boolean tensors.

---

<a id="problem-1"></a>

## 1. Recovery threshold for complete LP relaxation in semi-random rank-one Boolean tensors

Source paper authors: Alberto Del Pia, Aida Khajavirad

### 1. Problem Background

Let $n,m,l\in\mathbb{Z}_{\ge 1}$ and let $G\in\{0,1\}^{n\times m\times l}$ be an observed binary tensor. A rank-one binary (Boolean) tensor is a tensor of the form
$$
W=x\otimes y\otimes z,\qquad x\in\{0,1\}^n,\ y\in\{0,1\}^m,\ z\in\{0,1\}^l,
$$
with entries $w_{ijk}=x_i y_j z_k$.

Assume a planted (ground-truth) rank-one tensor $\bar W=\bar x\otimes \bar y\otimes \bar z\in\{0,1\}^{n\times m\times l}$. In the fully-random corruption model with parameter $p\in[0,1]$, each entry is independently flipped: $g_{ijk}=\bar w_{ijk}$ with probability $1-p$ and $g_{ijk}=1-\bar w_{ijk}$ with probability $p$. In the associated semi-random corruption model, after the fully-random flips an adversary may apply any sequence of monotone corrections: it may change $g_{ijk}$ from $0$ to $1$ only when $\bar w_{ijk}=1$, and from $1$ to $0$ only when $\bar w_{ijk}=0$.

An optimization problem is said to recover the ground truth if it has a unique optimal solution and that solution corresponds to $\bar W$ (equivalently $(\bar x,\bar y,\bar z)$).

The paper studies linear programming relaxations of rank-one Boolean tensor factorization. The strongest relaxation considered is the $\textit{complete LP}$, which optimizes the standard linearized objective for rank-one BTF using an extended formulation with auxiliary variables representing all bilinear products and constraints capturing the convex hull of the local multilinear relations.

Concretely, define index sets from the observed tensor $G$:
$$
S_0:=\{(i,j,k): g_{ijk}=0\},\qquad S_1:=\{(i,j,k): g_{ijk}=1\}.
$$
Introduce variables $x\in[0,1]^n$, $y\in[0,1]^m$, $z\in[0,1]^l$, and auxiliary variables $w\in[0,1]^{n\times m\times l}$ as well as bilinear auxiliaries $w^1\in[0,1]^{n\times m}$, $w^2\in[0,1]^{n\times l}$, $w^3\in[0,1]^{m\times l}$. The complete LP minimizes
$$
\sum_{(i,j,k)\in S_0} w_{ijk}+\sum_{(i,j,k)\in S_1}(1-w_{ijk}),
$$
subject to a system of linear inequalities (given explicitly in the paper) that enforce a tight convex relaxation of
$w_{ijk}=x_i y_j z_k$ together with $w^1_{ij}=x_i y_j$, $w^2_{ik}=x_i z_k$, $w^3_{jk}=y_j z_k$, in a way implied by level-2 reformulation-linearization but with only $O(nml)$ constraints.

Let the planted factor densities be
$$
r_{\bar x}:=\frac{1}{n}\sum_{i=1}^n \bar x_i,\quad r_{\bar y}:=\frac{1}{m}\sum_{j=1}^m \bar y_j,\quad r_{\bar z}:=\frac{1}{l}\sum_{k=1}^l \bar z_k,\quad r_{\bar W}:=r_{\bar x} r_{\bar y} r_{\bar z}.
$$
The paper establishes high-probability recovery thresholds for weaker LPs (standard LP and flower LP) under the semi-random model, but does not give such a threshold for the complete LP.

### 2. Open Problem

**Question 1.1.** Determine (in the semi-random corruption model for planted rank-one binary tensors) a high-probability recovery guarantee for the complete LP relaxation.

More explicitly: characterize, in terms of the corruption probability $p$ and planted densities $r_{\bar x},r_{\bar y},r_{\bar z}$ (and asymptotic growth of $n,m,l$), conditions under which the complete LP has a unique optimal solution corresponding to the planted tensor $\bar W=\bar x\otimes \bar y\otimes \bar z$ with probability tending to one as $n,m,l\to\infty$.

### 3. Known Results

The open problem from Del Pia–Khajavirad asks for a high-probability exact-recovery threshold for the strongest LP relaxation they propose for rank-one Boolean tensor factorization, the complete LP, under a semi-random monotone corruption model. In the source paper, recovery thresholds are proved for weaker relaxations (standard LP and flower LP) by constructing explicit dual certificates and then showing that the required deterministic inequalities hold with high probability under the random corruption model; robustness (monotone semi-random corrections) is handled via a general monotonicity argument.

Among the forward citations provided here, the only analyzed citing work is "Linear programming and community detection", which studies a different planted model (stochastic block model on graphs) and a different LP (metric polytope relaxation for minimum bisection). It does not resolve the tensor complete-LP threshold, but it reinforces a general methodological paradigm: (i) derive deterministic necessary/sufficient conditions for LP exact recovery via dual optimality and complementary slackness; (ii) translate these into probabilistic recovery/failure regions under a planted random model. Adapting such a program to the complete LP would likely require identifying the right notion of a dual certificate for the extended formulation variables $w,w^1,w^2,w^3$ and proving concentration bounds for the resulting (more intricate) inequalities.

Given the limited forward-citation set supplied, there is no evidence that the complete-LP recovery threshold in the semi-random model has been characterized. Thus, based on the available citation analysis, the problem remains open. Promising directions include extending the source paper’s dual-certificate analysis from flower inequalities to the full set of complete-LP constraints (which already imply flower and running-intersection inequalities), and developing sharp probabilistic bounds that capture the empirical improvement observed for the complete LP in the source paper’s experiments.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #123 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4400454886_p0/partial_progress/123.pdf)

### 4. Source and Verification

- **Source paper:** Alberto Del Pia, Aida Khajavirad, [*Rank-One Boolean Tensor Factorization and the Multilinear Polytope*](https://doi.org/10.1287/moor.2022.0201), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 4, Section 1.4 (Our contribution).
- **Area:** boolean tensor factorization
- **Keywords:** `boolean tensor factorization`, `linear programming relaxation`, `semi-random model`, `recovery guarantee`, `multilinear polytope`, `planted rank-one tensor`
- **Upstream problem record:** [W4400454886_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4400454886_p0&n=123&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Alberto Del Pia, Aida Khajavirad, [*Rank-One Boolean Tensor Factorization and the Multilinear Polytope*](https://doi.org/10.1287/moor.2022.0201), Mathematics of Operations Research, 2024.
2. [*Linear programming and community detection*](https://doi.org/10.1287/moor.2022.1282).
