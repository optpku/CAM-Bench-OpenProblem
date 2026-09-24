# Resolve smoothed complexity of pure Nash equilibria in unrestricted congestion games

This file contains the open problem on Resolve smoothed complexity of pure Nash equilibria in unrestricted congestion games.

---

<a id="problem-1"></a>

## 1. Resolve smoothed complexity of pure Nash equilibria in unrestricted congestion games

Source paper authors: Yiannis Giannakopoulos, Alexander Grosz, Themistoklis Melissourgos

### 1. Problem Background

A congestion game consists of a finite set of players $N=[n]$ and resources $R$. Each player $i\in N$ has a strategy set $\Sigma_i\subseteq 2^R$. Each resource $r\in R$ has a latency function $\kappa_r:[n]\to\mathbb{R}_{\ge 0}$. For a pure strategy profile $\boldsymbol\sigma=(\sigma_1,\dots,\sigma_n)\in \Sigma:=\Sigma_1\times\cdots\times\Sigma_n$, the load on resource $r$ is $\ell_r(\boldsymbol\sigma):=|\{i\in N: r\in\sigma_i\}|$. Player $i$'s cost is $C_i(\boldsymbol\sigma):=\sum_{r\in\sigma_i}\kappa_r(\ell_r(\boldsymbol\sigma))$.

A pure Nash equilibrium (PNE) is a profile $\boldsymbol\sigma^*\in\Sigma$ such that for every player $i\in N$ and every deviation $\sigma_i'\in\Sigma_i$, $C_i(\boldsymbol\sigma^*)\le C_i(\sigma_i',\boldsymbol\sigma^*_{-i})$. Congestion games are exact potential games with Rosenthal potential
$$
\Phi(\boldsymbol\sigma)=\sum_{r\in R}\sum_{\ell=1}^{\ell_r(\boldsymbol\sigma)}\kappa_r(\ell),
$$
which strictly decreases along any better-response move.

In smoothed analysis for congestion games, the numerical parameters of the latency functions are independently perturbed from continuous distributions with densities bounded above by a parameter $\phi$. The paper considers several standard representations:
1) General latencies: each value $\kappa_r(\ell)$ is independently drawn from a distribution on $[0,1]$ with density in $[0,\phi]$.
2) Polynomial latencies of degree at most $d$: each coefficient $\alpha_{r,j}$ in $\kappa_r(\ell)=\sum_{j=0}^{d_r}\alpha_{r,j}\ell^j$ is independently drawn from a distribution on $[0,1]$ with density in $[0,\phi]$.
3) Step-function latencies with at most $d$ breakpoints: each jump size parameter $\alpha_{r,j}$ is independently drawn from a distribution on $[0,1]$ with density in $[0,\phi]$, while breakpoints are adversarially fixed.

A standard algorithmic process to find a PNE is better-response dynamics: starting from an arbitrary profile, repeatedly choose some player with an improving deviation and update her strategy (according to any pivoting rule). The running time is the number of improving moves until reaching a PNE. Smoothed complexity asks for bounds on the expected number of improving moves (and thus expected running time, since each move is efficiently computable under the representation).

### 2. Open Problem

**Question 1.1.** Determine whether, for (not necessarily restrained/compact) congestion games under the smoothed perturbation models above (general, polynomial, or step-function latencies with independent noise of density bounded by $\phi$), the expected number of iterations of better-response dynamics needed to reach a pure Nash equilibrium is bounded by a polynomial in the input size and $\phi$; if not, characterize the correct smoothed complexity (e.g., give superpolynomial lower bounds or identify the precise structural conditions separating polynomial from superpolynomial smoothed running time).

### 3. Known Results

The source paper (Giannakopoulos--Grosz--Melissourgos, 2025) develops a general black-box theorem (via $(\lambda,\beta,\mu)$-separability) that yields polynomial expected convergence of exact local search under $\phi$-smooth independent perturbations, and it instantiates this for exact PNE computation in congestion games only under structural restrictions (notably $B$-restrained games and certain compact network congestion games). The open problem asks whether such polynomial smoothed convergence extends to unrestricted congestion games under the same perturbation models (general explicit latencies, bounded-degree polynomials, and step functions with perturbed jump sizes).

Forward-citation evidence currently provides strong progress only for approximate equilibria: Giannakopoulos (EC 2024) proves a smoothed FPTAS in which $(1+\varepsilon)$-improving dynamics reach a $(1+\varepsilon)$-approximate PNE in expected strongly polynomially many steps, with bounds polynomial in $\phi$, the input size, and $1/\varepsilon$, and covering precisely the three latency representations considered in the open problem. However, the dependence on $1/\varepsilon$ leaves open the exact case $\varepsilon=0$, where arbitrarily small potential drops could in principle lead to superpolynomial paths.

A separate line of work on smoothed local search lower bounds (e.g., superpolynomial smoothed complexity for 3-FLIP Max-Cut) indicates that even under i.i.d. continuous perturbations, improvement dynamics for some PLS problems can admit superpolynomial-length improving sequences. While not directly transferable to Rosenthal-potential better responses in congestion games, it motivates investigating whether unrestricted congestion games admit analogous constructions, or whether additional structure (like bounded $B$ in the source paper) is necessary and essentially tight for polynomial smoothed convergence of exact better-response dynamics.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #28 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414408152_p0/partial_progress/28.pdf)
- [pipeline final 28](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414408152_p0/partial_progress/pipeline_final_28.pdf)

### 4. Source and Verification

- **Source paper:** Yiannis Giannakopoulos, Alexander Grosz, Themistoklis Melissourgos, [*On the Smoothed Complexity of Combinatorial Local Search*](https://doi.org/10.1287/moor.2024.0610), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 6 (Conclusion and problems), page 33.
- **Area:** smoothed complexity congestion games
- **Keywords:** `smoothed analysis`, `congestion games`, `pure nash equilibrium`, `better-response dynamics`, `PLS`, `local search`
- **Upstream problem record:** [W4414408152_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414408152_p0&n=28&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Yiannis Giannakopoulos, Alexander Grosz, Themistoklis Melissourgos, [*On the Smoothed Complexity of Combinatorial Local Search*](https://doi.org/10.1287/moor.2024.0610), Mathematics of Operations Research, 2025.
2. [*A smoothed FPTAS for equilibria in congestion games*](https://doi.org/10.1145/3670865.3673615).
3. *Superpolynomial smoothed complexity of 3-FLIP in Local Max-Cut*.
