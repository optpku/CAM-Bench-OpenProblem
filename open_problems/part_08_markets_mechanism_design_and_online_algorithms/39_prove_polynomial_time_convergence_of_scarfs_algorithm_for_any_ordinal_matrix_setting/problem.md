# Prove polynomial-time convergence of Scarf’s algorithm for any ordinal matrix setting

This file contains the open problem on Prove polynomial-time convergence of Scarf’s algorithm for any ordinal matrix setting.

---

<a id="problem-1"></a>

## 1. Prove polynomial-time convergence of Scarf’s algorithm for any ordinal matrix setting

Source paper authors: Yuri Faenza, Chengyue He, Jay Sethuraman

### 1. Problem Background

Scarf’s algorithm is a pivoting procedure defined for inputs $(A,b,C)$ where $A\in\mathbb{Q}^{n\times(n+m)}_{\ge 0}$ is in standard form $A=(I\mid A')$, $b\in\mathbb{Q}^n_{>0}$, and $C\in\mathbb{Z}^{n\times(n+m)}$ is an ordinal matrix.

A polytope $P\subseteq\mathbb{R}^{n+m}_{\ge 0}$ is given by
$$
P = \{x\in\mathbb{R}^{n+m}_{\ge 0}: Ax=b\},
$$
and is assumed bounded. A set $B\subseteq [n+m]$ of $n$ column indices is a feasible (cardinal) basis if the corresponding submatrix $A_B$ is nonsingular and the basic solution $x$ defined by $x_B=A_B^{-1}b$, $x_{[n+m]\setminus B}=0$, satisfies $x\ge 0$.

Given an ordinal basis $D\subseteq [n+m]$ with $|D|=n$, define its utility vector $u\in\mathbb{Q}^n$ by
$$
u_i = \min_{j\in D} c_{i j},\qquad i\in[n].
$$
The set $D$ is an ordinal basis if for every column $h\notin [n]$ (i.e., among the $m$ non-identity columns), there exists some row $i\in[n]$ such that $u_i\ge c_{i h}$.

A dominating basis is a set $B\subseteq[n+m]$ that is simultaneously a feasible basis for $(A,b)$ and an ordinal basis for $C$. A dominating vertex is the basic feasible solution associated with a dominating basis.

Scarf’s algorithm maintains a pair $(B,D)$ where $B$ is a feasible basis and $D$ is an ordinal basis with $|B\cap D|\ge n-1$. If $B\ne D$, let $j_t\in D\setminus B$ be the unique column in $D$ not in $B$. A cardinal pivot replaces some $j_\ell\in B\cap D$ by $j_t$ to obtain a new feasible basis $B' = B\setminus\{j_\ell\}\cup\{j_t\}$; in degenerate polytopes, multiple choices of $j_\ell$ may be possible. An ordinal pivot then replaces the same leaving column $j_\ell$ by a uniquely determined entering column $j^*\notin D$ to obtain $D' = D\setminus\{j_\ell\}\cup\{j^*\}$, which is again an ordinal basis. The algorithm terminates when $B=D$, yielding a dominating basis.

In the marriage/stable matching specialization, $(A,b)$ describes a bipartite matching polytope (with slack variables as loops), and the paper proves polynomial-time convergence for a particular consistent ordinal matrix $C^*$ (and via certain perturbations).

### 2. Open Problem

**Question 1.1.** Given the bipartite matching polytope $P=\{x\in\mathbb{R}^{n+m}_{\ge 0}:Ax=b\}$ induced by a bipartite graph (as in the stable marriage/matching setting) and an arbitrary ordinal matrix $C\in\mathbb{Z}^{n\times(n+m)}$, determine whether Scarf’s algorithm converges in polynomially many pivoting iterations (as a function of $n+m$) to a dominating basis, possibly under an appropriate rule for resolving degeneracy in the cardinal pivots.

Equivalently, establish (or refute) the existence of a polynomial $p$ such that for every such input $(A,b,C)$ on the bipartite matching polytope, there is an execution of Scarf’s algorithm (respecting the uniquely determined ordinal pivots and some cardinal pivot selection rule when multiple leaving choices exist) that terminates in at most $p(n+m)$ iterations with $B=D$.

### 3. Known Results

The open problem asks whether Scarf’s algorithm admits a polynomial pivot bound on the bipartite matching polytope for an arbitrary ordinal matrix $C$, possibly under a suitable degeneracy rule. The source paper (Faenza–He–Sethuraman, 2023) establishes the first polynomial-time convergence result for Scarf’s algorithm in a significant combinatorial setting, but only for a carefully structured consistent ordinal matrix $C^*$ encoding stable-marriage preferences (and for a standard perturbation that removes degeneracy). Their analysis exploits a detailed characterization of feasible bases of the matching polytope ("forest with single loops"), a structural description of almost-feasible ordinal bases via a unique "separator" man, and a monotone potential $(i,\sum_{w\in W}u_w)$ that increases over iterations under a tailored cardinal pivot rule.

Forward-citation evidence to date does not resolve the arbitrary-$C$ question. The strongest partial progress is the extension to arborescence hypergraphs, where a network-matrix structure enables a pivot rule with at most $|V|$ iterations, indicating that polynomial pivot bounds can hold well beyond bipartite graphs when $C$ has preference-induced structure. Other citing work emphasizes the broader landscape: polynomial-time computation is often achieved by alternative combinatorial or dynamic-programming methods in structured unimodular/normal hypergraphs, while PPAD-hardness results for related core-stability computations reinforce that no general polynomial-time guarantee should be expected for Scarf-style pivoting in full generality. Overall, the problem remains open: existing polynomial bounds rely on strong structure in $C$ (consistency/preference encoding) and/or in the constraint matrix (network/arborescence), and it is unknown whether arbitrary ordinal $C$ on the bipartite matching polytope admits any polynomially bounded execution of Scarf’s algorithm.

#### 3.1 Upstream solution and partial-progress records

- [Solution #10 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4410395976_p0/solutions/10.pdf)

### 4. Source and Verification

- **Source paper:** Yuri Faenza, Chengyue He, Jay Sethuraman, [*Scarf’s Algorithm and Stable Marriages*](https://doi.org/10.1287/moor.2023.0055), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 8 (Conclusions and Future Work), page 35.
- **Area:** stable matching
- **Keywords:** `Scarf's algorithm`, `pivoting algorithms`, `bipartite matching polytope`, `degeneracy`, `polynomial-time convergence`, `ordinal matrices`
- **Upstream problem record:** [W4410395976_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4410395976_p0&n=10&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Yuri Faenza, Chengyue He, Jay Sethuraman, [*Scarf’s Algorithm and Stable Marriages*](https://doi.org/10.1287/moor.2023.0055), Mathematics of Operations Research, 2025.
2. *Scarf's Algorithm on Arborescence Hypergraphs*.
3. *Stable hypergraph matching in unimodular hypergraphs*.
4. *On the Existence and Complexity of Core-Stable Data Exchanges*.
