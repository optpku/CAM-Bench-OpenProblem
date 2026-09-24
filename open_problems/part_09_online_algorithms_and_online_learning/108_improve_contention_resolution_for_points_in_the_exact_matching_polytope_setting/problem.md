# Improve contention resolution for points in the exact matching polytope setting

This file contains the open problem on Improve contention resolution for points in the exact matching polytope setting.

---

<a id="problem-1"></a>

## 1. Improve contention resolution for points in the exact matching polytope setting

Source paper authors: Tristan Pollner, Mohammad Roghani, Amin Saberi, David Wajc

### 1. Problem Background

Let $G=(V,E)$ be an (undirected) graph. A (fractional) vector $x\in[0,1]^E$ assigns a value $x_e$ to each edge $e\in E$. The (degree-bounded) matching relaxation is
$$
P(G):=\Bigl\{x\in\mathbb{R}_{\ge 0}^E: \sum_{e\ni v} x_e\le 1\ \forall v\in V\Bigr\}.

$$
The (integral) matching polytope $\mathrm{MP}(G)\subseteq\mathbb{R}^E$ is the convex hull of incidence vectors of matchings in $G$. Edmonds' characterization gives
$$
\mathrm{MP}(G)=\Bigl\{x\in P(G): \sum_{e\subseteq S} x_e \le \frac{|S|-1}{2}\ \forall S\subseteq V\ \text{with }|S|\text{ odd}\Bigr\},

$$
where $\sum_{e\subseteq S}$ denotes the sum over edges with both endpoints in $S$ (the odd-set constraints).

A random-order online contention resolution scheme (RO-OCRS) for matchings takes as input a fractional point $x$ (typically in some polytope such as $P(G)$ or $\mathrm{MP}(G)$). Then edges arrive online in a uniformly random order. Each edge $e$ is independently declared active with probability $x_e$. Upon seeing an active edge $e$, the scheme must irrevocably accept it into the output set $I$ or reject it, while maintaining that $I$ is a matching.

A RO-OCRS is called $c$-balanced if for every graph $G$, every feasible input point $x$, and every edge $e\in E$, the output matching $I$ satisfies
$$
\Pr[e\in I]\ge c\,x_e.

$$
Here probability is over the scheme’s internal randomness, the random arrival order, and the independent activations.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a constant $c>0.456$ and a (polynomial-time) RO-OCRS for matchings that is $c$-balanced when the input fractional point $x$ is restricted to lie in the exact matching polytope $\mathrm{MP}(G)$ (i.e., satisfies both degree constraints and Edmonds' odd-set constraints). More generally, determine the best achievable balance factor
$$
c^*:=\sup\{c: \exists\ \text{a (polytime) RO-OCRS that is }c\text{-balanced for all }G\text{ and all }x\in \mathrm{MP}(G)\}.

$$

### 3. Known Results

In Pollner–Roghani–Saberi–Wajc (2022), the state of the art for random-order online contention resolution for matchings under independent edge activations is a $0.45$-balanced RO-OCRS for general graphs and $0.456$-balanced for bipartite graphs, analyzed for inputs $x\in P(G)$ (degree constraints only). The paper explicitly raises the stronger question of whether restricting inputs to the exact matching polytope $\mathrm{MP}(G)$—i.e., additionally enforcing Edmonds’ odd-set constraints—permits a better balance factor, asking in particular whether one can beat $0.456$ in this more structured setting.

The forward-citing literature summarized here does not resolve that question. The most directly relevant progress is indirect: “Towards an Optimal Contention” improves constants for offline CRSs for matchings (exceeding $0.5$ in bipartite graphs and approaching the Karp–Sipser barrier $\approx 0.544$ in a sparse regime for general graphs), but it neither operates online in random order nor leverages odd-set constraints. “Stationary Online Contention Resolution Schemes” develops a principled framework for permutation-invariant (stationary) OCRSs and proves constants $1/3$ (general graphs) and $\approx 0.382$ (bipartite) within that restricted class, suggesting that any improvement beyond $0.456$ will require non-stationary behavior and/or new uses of polyhedral structure.

Several related-tool papers (on online dependent rounding, SOCS, and probe-commit/configuration-LP approaches) demonstrate that stronger per-edge guarantees are achievable in other online matching models by combining richer rounding primitives (negative dependence, type decompositions, configuration LPs) with local contention resolution. However, none of these works provides a random-order edge-arrival OCRS with $\Pr[e\in I]\ge c x_e$ for all $x\in\mathrm{MP}(G)$, nor do they quantify how odd-set constraints might be exploited to surpass the $0.456$ barrier. Thus, based on the provided forward citations, the problem remains open; a promising direction is to design RO-OCRSs whose acceptance/attenuation decisions depend on odd-set structure (e.g., via laminar odd-cut decompositions or blossom-based online certificates) rather than only local degree slack, potentially bridging the gap between online constants ($\approx 0.456$) and offline benchmarks ($>0.5$).

The upstream collection lists no solution or partial-progress record.

### 4. Source and Verification

- **Source paper:** Tristan Pollner, Mohammad Roghani, Amin Saberi, David Wajc, [*Improved Online Contention Resolution for Matchings and Applications to the Gig Economy*](https://doi.org/10.1287/moor.2023.1388), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5 (Discussion), page 20
- **Area:** online matching
- **Keywords:** `contention resolution schemes`, `random-order online algorithms`, `matching polytope`, `Edmonds odd-set constraints`, `correlation gap`
- **Upstream problem record:** [W4385980778_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4385980778_p0&n=88&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Tristan Pollner, Mohammad Roghani, Amin Saberi, David Wajc, [*Improved Online Contention Resolution for Matchings and Applications to the Gig Economy*](https://doi.org/10.1287/moor.2023.1388), Mathematics of Operations Research, 2023.
2. *Towards an Optimal Contention*.
3. [*Online dependent rounding schemes for bipartite matchings, with applications*](https://doi.org/10.1137/1.9781611978322.100).
4. *Stationary Online Contention Resolution Schemes*.
5. [*Prophet matching in the probe-commit model*](https://doi.org/10.4230/LIPIcs.APPROX/RANDOM.2022.46).
6. *Stochastic online correlated selection*.
7. *Approximation Algorithms for Action-Reward Query-Commit Matching*.
8. [*Limitations of stochastic selection problems with pairwise independent priors*](https://doi.org/10.1145/3618260.3649718).
9. [*Online bipartite matching in the probe-commit model*](https://doi.org/10.1007/s10107-024-02184-y).
