# Prove consecutive-service-rate optimality for sojourn-time partitioning under moment monotonicity

This file contains the open problem on Prove consecutive-service-rate optimality for sojourn-time partitioning under moment monotonicity.

---

<a id="problem-1"></a>

## 1. Prove consecutive-service-rate optimality for sojourn-time partitioning under moment monotonicity

Source paper authors: Shengyu Cao, Simai He, Zizhuo Wang, Yifan Feng

### 1. Problem Background

Consider a multi-type FCFS queueing system with a divisible total service capacity normalized to 1 that can be partitioned into $k\ge 2$ parallel FCFS sub-queues with capacities $\alpha=(\alpha_1,\dots,\alpha_k)$ satisfying $\alpha_j\ge 0$ and $\sum_{j=1}^k \alpha_j=1$. There are $n$ customer types indexed by $i\in\{1,\dots,n\}$. Type $i$ arrivals form a Poisson process of rate $\lambda_i>0$. Under unit capacity, type $i$ has service time random variable $S_i$ with first moment $\mathbb E[S_i]=1/\mu_i$ (so $\mu_i>0$ is the service rate) and second moment $\mathbb E[S_i^2]=\nu_i$. When served at capacity $\alpha_j$, service times scale as $S_i/\alpha_j$. Routing is by type information only: an assignment matrix $X=(x_{ij})\in[0,1]^{n\times k}$ specifies $x_{ij}$ = probability that a type $i$ arrival joins queue $j$, with $\sum_{j=1}^k x_{ij}=1$ for each $i$. For stability/feasibility, each queue $j$ must satisfy the load constraint $\alpha_j>\sum_{i=1}^n \lambda_i x_{ij}/\mu_i$ whenever $\alpha_j>0$.

The performance objective here is the expected total sojourn time (waiting time plus service time), averaged over arrivals. Using the Pollaczek–Khinchine formula for each FCFS sub-queue and the scaling of moments under capacity $\alpha_j$, the expected total sojourn time under $(\alpha,X)$ is
$$

\tilde W(\alpha,X)=\frac{1}{2\sum_{i=1}^n\lambda_i}\sum_{j: \alpha_j>0}\left(\frac{\sum_{i=1}^n \lambda_i x_{ij}\,\nu_i}{\alpha_j^2\left(\alpha_j-\sum_{i=1}^n \lambda_i x_{ij}/\mu_i\right)}\right)\; +\; \frac{1}{\sum_{i=1}^n\lambda_i}\sum_{j: \alpha_j>0}\sum_{i=1}^n \lambda_i x_{ij}\,\frac{1}{\alpha_j\mu_i}.

$$
(Any equivalent expression for expected sojourn time derived from Pollaczek–Khinchine and the model’s scaling is acceptable.)

Assume customer types are indexed so that service rates are strictly decreasing: $\mu_1>\mu_2>\cdots>\mu_n$. Assume also the following monotonicity property of the first two moments (the paper’s moment condition): for any two types with $\mathbb E[S_i]\ge \mathbb E[S_{i'}]$ (equivalently $\mu_i\le \mu_{i'}$),
$$

\frac{\mathbb E[S_i^2]}{\mathbb E[S_i]}\ge \frac{\mathbb E[S_{i'}^2]}{\mathbb E[S_{i'}]}.

$$
This condition informally requires that types with larger mean service time have larger adjusted variability (second moment divided by mean).

### 2. Open Problem

**Question 1.1.** In the joint partition-and-assignment optimization problem
$$

\min_{\alpha,X}\; \tilde W(\alpha,X)\quad\text{s.t.}\quad \alpha_j\ge 0,\ \sum_{j=1}^k \alpha_j=1,\ x_{ij}\in[0,1],\ \sum_{j=1}^k x_{ij}=1\ \forall i,\ \alpha_j>\sum_{i=1}^n \lambda_i x_{ij}/\mu_i\ \forall j\text{ with }\alpha_j>0,

$$
prove (or disprove) that under the moment monotonicity condition $\mathbb E[S_i^2]/\mathbb E[S_i]$ nondecreasing in $\mathbb E[S_i]$ and with $\mu_1>\cdots>\mu_n$, there exists an optimal solution $(\alpha^*,X^*)$ in which customers are assigned to queues in consecutive blocks by service rate, i.e., there exist indices
$$

1=i_0\le i_1\le \cdots\le i_{k-1}\le i_k=n+1

$$
such that for each queue $j\in\{1,\dots,k\}$, $X^*$ assigns every type $i\in\{i_{j-1},\dots,i_j-1\}$ to queue $j$ with probability 1 (and assigns types outside this block to queue $j$ with probability 0).

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

The upstream collection lists no solution or partial-progress record.

### 4. Source and Verification

- **Source paper:** Shengyu Cao, Simai He, Zizhuo Wang, Yifan Feng, [*Optimal Partition for a Multi-Type Queueing System*](https://doi.org/10.1287/moor.2023.0035), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 34, Section 5 (Extension: Analysis of Sojourn Time), near the discussion following Theorem 8; reiterated in Section 6 (Concluding Remarks) on page 35.
- **Area:** queueing optimization
- **Keywords:** `queue partitioning`, `FCFS queues`, `sojourn time minimization`, `capacity allocation`, `routing by types`, `structural optimality`, `moment conditions`
- **Upstream problem record:** [W4226364838_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4226364838_p0&n=74&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Shengyu Cao, Simai He, Zizhuo Wang, Yifan Feng, [*Optimal Partition for a Multi-Type Queueing System*](https://doi.org/10.1287/moor.2023.0035), Mathematics of Operations Research, 2025.
