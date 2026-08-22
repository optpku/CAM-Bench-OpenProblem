# Find stronger closed-form eigenvalue bounds for balanced independent sets in regular bipartite graphs

This file contains the open problem on Find stronger closed-form eigenvalue bounds for balanced independent sets in regular bipartite graphs.

---

<a id="problem-1"></a>

## 1. Find stronger closed-form eigenvalue bounds for balanced independent sets in regular bipartite graphs

Source paper authors: Monique Laurent, Sven Polak, Luis Felipe Vargas

### 1. Problem Background

Let $G=(V_1\cup V_2,E)$ be a bipartite graph. A pair $(A,B)$ with $A\subseteq V_1$ and $B\subseteq V_2$ is a bipartite biindependent pair if there is no edge between $A$ and $B$, i.e., $A\times B\cap E=\emptyset$. Such a pair is balanced if $|A|=|B|$.

Define the balanced independent-set size
$$

\alpha_{\mathrm{bal}}(G):=\max\{\,|A|+|B|:\ (A,B)\text{ is a balanced bipartite biindependent pair in }G\,\}.

$$
Equivalently, $\alpha_{\mathrm{bal}}(G)=2\max\{|A|:(A,B)\text{ balanced biindependent}\}$.

A basic spectral upper bound for certain biindependent-pair parameters is obtained as follows. Suppose $G$ is $r$-regular with $|V_1|=|V_2|=n$, and let $A_G\in\mathbb{R}^{2n\times 2n}$ be the adjacency matrix of $G$. Let $\lambda_2(A_G)$ denote the second largest eigenvalue of $A_G$ (equivalently, the second largest singular value of the $n\times n$ bipartite adjacency block).

The paper defines an eigenvalue-based bound
$$

\mathrm{b}h(G):=\frac{n\,\lambda_2(A_G)}{2\,(r+\lambda_2(A_G))},

$$
obtained by restricting certain semidefinite relaxations to highly symmetric feasible solutions. For bipartite regular graphs one has an inequality of the form
$$

\alpha_{\mathrm{bal}}(G)\le 4\,\mathrm{b}h(G)

$$
whenever the relaxation used indeed upper bounds $\alpha_{\mathrm{bal}}(G)$ (the paper studies several such balanced SDP relaxations and shows that their natural symmetric specializations collapse to $\mathrm{b}h(G)$).

The motivating issue is that $\alpha_{\mathrm{bal}}(G)$ is NP-hard to compute, so efficiently computable closed-form spectral upper bounds (in terms of eigenvalues of standard matrices associated to $G$) are desirable, especially bounds that exploit the balancing constraint $|A|=|B|$ more sharply than existing ones.

### 2. Open Problem

**Question 1.1.** Determine a closed-form eigenvalue-based upper bound on $\alpha_{\mathrm{bal}}(G)$ for $r$-regular bipartite graphs $G=(V_1\cup V_2,E)$ (with $|V_1|=|V_2|=n$) that is provably stronger than the bound obtained from $\mathrm{b}h(G)=\frac{n\lambda_2(A_G)}{2(r+\lambda_2(A_G))}$, i.e., a bound that can be strictly smaller than $4\,\mathrm{b}h(G)$ while remaining valid for all such graphs.

Equivalently, find a tractable (spectral, closed-form) bound that better exploits the balancing requirement $|A|=|B|$ than the existing symmetric eigenvalue bound arising from the paper's balanced semidefinite relaxations, which all reduce (up to scaling) to $\mathrm{b}h(G)$ on regular bipartite graphs.

### 3. Known Results

The original problem asks for a closed-form spectral upper bound on $\alpha_{\mathrm{bal}}(G)$ for $r$-regular bipartite graphs $|V_1|=|V_2|=n$ that improves on the Laurent--Polak--Vargas symmetric specialization $\alpha_{\mathrm{bal}}(G)\le 4\,\mathrm{b}h(G)=\frac{2n\lambda_2}{r+\lambda_2}$. In the source paper, multiple natural balanced SDP relaxations (balanced variants of Lov\'asz-$\vartheta$ and first-level Lasserre relaxations) are introduced, but their symmetric/closed-form reductions on regular bipartite graphs all collapse back to $\mathrm{b}h(G)=\frac{n\lambda_2}{2(r+\lambda_2)}$, indicating that new ideas beyond these symmetric SDP templates are needed to get a strictly stronger universal eigenvalue formula.

Among the forward citations provided, the only citing work is an SDP-based extremal paper on cross-intersecting families. While it does not contribute a new bound for $\alpha_{\mathrm{bal}}$ in regular bipartite graphs, it exemplifies a successful strategy for obtaining sharp results: constructing explicit dual SDP certificates and verifying PSD constraints via association-scheme diagonalization. This suggests a plausible direction for the open problem: identify additional algebraic structure (e.g., distance-regular/association-scheme settings, or refined block-diagonalizations beyond the $\{I,J,A_G\}$-span) where balanced constraints can be enforced in the dual and yield a closed-form expression strictly improving $\mathrm{b}h(G)$. At present, based on the supplied citation set, no paper resolves the requested stronger universal eigenvalue bound, so the problem remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #114 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4392748341_p0/partial_progress/114.pdf)
- [pipeline final 114](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4392748341_p0/partial_progress/pipeline_final_114.pdf)

### 4. Source and Verification

- **Source paper:** Monique Laurent, Sven Polak, Luis Felipe Vargas, [*Semidefinite Approximations for Bicliques and Bi-Independent Pairs*](https://doi.org/10.1287/moor.2023.0046), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 7 (Concluding remarks), page 34.
- **Area:** spectral graph theory
- **Keywords:** `balanced independent set`, `bipartite regular graphs`, `spectral bounds`, `semidefinite programming relaxation`, `lovasz theta number`, `eigenvalues`
- **Upstream problem record:** [W4392748341_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4392748341_p0&n=114&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Monique Laurent, Sven Polak, Luis Felipe Vargas, [*Semidefinite Approximations for Bicliques and Bi-Independent Pairs*](https://doi.org/10.1287/moor.2023.0046), Mathematics of Operations Research, 2024.
2. *A semidefinite programming approach to cross -intersecting families*.
