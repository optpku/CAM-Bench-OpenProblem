# Characterize when constant expected unvisited vertices requires duration at least hitting time

This file contains the open problem on Characterize when constant expected unvisited vertices requires duration at least hitting time.

---

<a id="problem-1"></a>

## 1. Characterize when constant expected unvisited vertices requires duration at least hitting time

Source paper authors: Shuji Kijima, Nobutaka Shimizu, Takeharu Shiraga

### 1. Problem Background

Consider a growing graph process in discrete time in which, for each integer
$i\ge 1$, there is a connected simple undirected graph $G^{(i)}=(V^{(i)},E^{(i)})$ with $V^{(i)}=\{v_1,\dots,v_i\}$ and $G^{(i+1)}$ is obtained from $G^{(i)}$ by adding one new vertex $v_{i+1}$ and connecting it to at least one existing vertex (so $V^{(i)}\subseteq V^{(i+1)}$).

Let $d:\mathbb{N}\to\mathbb{N}$ be a duration (growth-rate) function: the system stays on $G^{(i)}$ for exactly $d(i)$ consecutive random-walk steps before the next vertex is added. Define the change times $T_1:=0$ and $T_{i}:=\sum_{j=1}^{i-1} d(j)$ for $i\ge 2$, so that the vertex set size equals $i$ during times $t\in[T_i,T_{i+1})$.

A random walk on this growing graph is specified by transition matrices $P^{(i)}\in[0,1]^{V^{(i)}\times V^{(i)}}$, where during the period when the current graph is $G^{(i)}$, the walker evolves as the time-homogeneous Markov chain with transition matrix $P^{(i)}$. Assume each $P^{(i)}$ is irreducible (so the walk on $G^{(i)}$ is well-defined) and define its hitting time
$$

 t_{\mathrm{hit}}(i) \, := \, \max_{u,v\in V^{(i)}} \mathbb{E}\big[\min\{t\ge 0: X_0=u,\ X_t=v\}\big],

$$
where $(X_t)_{t\ge 0}$ denotes a Markov chain with transition matrix $P^{(i)}$.

Let $(Z_t)_{t\ge 0}$ denote the overall walk on the growing graph (so $Z_t\in V_t$, and in fact $Z_t\in V_{t-1}$ for $t\ge 1$). Define the number of unvisited vertices just before the $(n+1)$-st vertex is added by
$$

U(n) \, := \, \left|\, V^{(n)} \setminus \bigcup_{t=0}^{T_{n+1}} \{Z_t\}\,\right|,

$$
and write $\mathbb{E}[U(n)]$ for its expectation under the law of the walk determined by $(d,(G^{(i)}),(P^{(i)}))$.

### 2. Open Problem

**Question 1.1.** Determine whether the following implication holds uniformly over all random walks on growing graphs as defined above:

If $\mathbb{E}[U(n)] = O(1)$ as $n\to\infty$, must it be the case that
$$

 d(i) = \Omega\big(t_{\mathrm{hit}}(i)\big) \quad \text{as } i\to\infty?

$$
Equivalently, decide whether there exists a family $(d,(G^{(i)}),(P^{(i)}))$ such that $\mathbb{E}[U(n)]$ stays bounded while $d(i)/t_{\mathrm{hit}}(i)\to 0$, or prove that no such family exists.

### 3. Known Results

In the RWoGG model of Kijima–Shimizu–Shiraga (arXiv:2008.10837), the central sufficient condition for bounded expected unvisited vertices is Theorem 1.2: if there exists $C>1$ with $d(i)\ge C\,t_{\mathrm{hit}}(i)$ for all large $i$, then $\mathbb E[U(n)]=O(1)$, and if $d(i)/t_{\mathrm{hit}}(i)\to\infty$ then $\mathbb E[U(n)]\to 0$. The paper also shows that for specific families (complete graphs and paths/Metropolis walks) the scale $d(i)\asymp t_{\mathrm{hit}}(i)$ is essentially tight for achieving $\mathbb E[U(n)]=O(1)$, but it leaves open whether such a lower bound must hold uniformly over all growing-graph processes.

Forward-citing work so far does not resolve this necessity question. The most conceptually adjacent tool is the theory of reversible time-inhomogeneous chains on a fixed vertex set with common stationary distribution, where one can bound the probability of avoiding a vertex over $T$ steps by $\exp(-T/t_{\mathrm{HIT}})$ and obtain cover-time bounds in terms of worst static hitting time; however, the fixed-vertex-set and common-$\pi$ assumptions do not directly apply to vertex growth. Other forward citations develop coupling/monotonicity frameworks (LHaGG/weakly-LHaGG, pausing couplings) and sharp recurrence/transience thresholds for RWoGG on growing trees, hypercubes, and increasing-dimension grids; these results indicate that some global properties (recurrence to a root/origin) can occur with $d(i)$ far smaller than typical cover times, but they do not control the number of distinct vertices visited.

At present, the implication $\mathbb E[U(n)]=O(1)\Rightarrow d(i)=\Omega(t_{\mathrm{hit}}(i))$ remains open. Promising directions include: (i) attempting to adapt dynamic-graph hitting-time avoidance bounds to the growing-vertex setting by proving that each round begins sufficiently close to stationarity (or by controlling the $\ell_2(\pi)$ distance as in the original paper’s Theorem 3.6 machinery), and (ii) searching for counterexamples where new vertices attach in a way that makes them easy to hit quickly even though worst-case $t_{\mathrm{hit}}(i)$ is large (e.g., graphs with a small “gateway” set that the walk visits frequently, while worst-case pairs are separated by bottlenecks).

#### 3.1 Upstream solution and partial-progress records

- [Solution #58 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3080982993_p0/solutions/58.pdf)

### 4. Source and Verification

- **Source paper:** Shuji Kijima, Nobutaka Shimizu, Takeharu Shiraga, [*How Many Vertices Does a Random Walk Miss in a Network with a Moderately Increasing Number of Vertices?*](https://doi.org/10.1287/moor.2023.0060), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 5 (end of Section 1.2, discussion after Theorem 1.3) and Page 23, Section 5 Concluding Remarks.
- **Area:** random walks on growinggraphs
- **Keywords:** `random walks`, `dynamic graphs`, `hitting time`, `cover time`, `growing networks`, `unvisited vertices`
- **Upstream problem record:** [W3080982993_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3080982993_p0&n=58&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Shuji Kijima, Nobutaka Shimizu, Takeharu Shiraga, [*How Many Vertices Does a Random Walk Miss in a Network with a Moderately Increasing Number of Vertices?*](https://doi.org/10.1287/moor.2023.0060), Mathematics of Operations Research, 2025.
2. [*Reversible random walks on dynamic graphs*](https://doi.org/10.1002/rsa.21164).
3. *An analysis of the recurrence/transience of random walks on growing trees and hypercubes*.
4. [*The Recurrence/Transience of Random Walks on a Bounded Grid in an Increasing Dimension*](https://doi.org/10.4230/LIPIcs.AofA.2024.22).
5. *動的グラフ上のランダムウォーク*.
