# Compute a competitive equilibrium utility profile for divisible chores with variable size

This file contains the open problem on Compute a competitive equilibrium utility profile for divisible chores with variable size.

---

<a id="problem-1"></a>

## 1. Compute a competitive equilibrium utility profile for divisible chores with variable size

Source paper authors: Simina Brânzei, Fedor Sandomirskiy

### 1. Problem Background

There are $n$ agents and $m$ divisible chores, with one unit of each chore to be allocated. Agent $i\in[n]=\{1,\dots,n\}$ receives a bundle $z_i=(z_{i,1},\dots,z_{i,m})\in\mathbb{R}^m_{\ge 0}$, where $z_{i,j}$ is the fraction of chore $j\in[m]=\{1,\dots,m\}$ assigned to agent $i$. Feasibility requires $\sum_{i=1}^n z_{i,j}=1$ for every chore $j$.

Preferences are additive and strictly negative (chores): values are given by a matrix $v\in\mathbb{R}^{n\times m}_{<0}$, where $v_{i,j}<0$ is agent $i$'s value for performing one unit of chore $j$. The utility of agent $i$ for bundle $z_i$ is
$$
u_i(z_i)=\sum_{j=1}^m v_{i,j} z_{i,j},
$$
and the utility profile of an allocation $z$ is $u(z)=(u_1(z_1),\dots,u_n(z_n))\in\mathbb{R}^n_{<0}$.

Agents have (virtual) strictly negative budgets $b\in\mathbb{R}^n_{<0}$. A price vector is $p\in\mathbb{R}^m_{<0}$, and the price of a bundle $x\in\mathbb{R}^m_{\ge 0}$ is $p(x)=\sum_{j=1}^m p_j x_j$.

A feasible allocation $z$ is a competitive allocation (competitive equilibrium with budgets $b$) if there exists $p\in\mathbb{R}^m_{<0}$ such that each agent $i$ maximizes $u_i(x)$ over all bundles $x\in\mathbb{R}^m_{\ge 0}$ satisfying $p(x)\le b_i$. A competitive utility profile is any $u\in\mathbb{R}^n$ for which there exists a competitive allocation $z$ with $u=u(z)$.

In the paper, when either $n$ or $m$ is fixed, there is a strongly polynomial-time algorithm that enumerates all competitive utility profiles for additive chores; however, the complexity when both $n$ and $m$ are variable is unresolved.

### 2. Open Problem

**Question 1.1.** Design an algorithm that, given arbitrary $n,m$, a valuation matrix $v\in\mathbb{R}^{n\times m}_{<0}$ and budgets $b\in\mathbb{R}^n_{<0}$, computes at least one competitive utility profile $u\in\mathbb{R}^n_{<0}$ (equivalently, one competitive allocation) in time polynomial in $n+m$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #56 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W2953466159_p0/partial_progress/56.pdf)

### 4. Source and Verification

- **Source paper:** Simina Brânzei, Fedor Sandomirskiy, [*Algorithms for Competitive Division of Chores*](https://doi.org/10.1287/moor.2023.1361), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 10, end of Related Work / start of Section 2 (statement just before Section 2), and reiterated in Section 3 (“What if both n and m are large?”), page 19.
- **Area:** competitive equilibrium chores
- **Keywords:** `competitive equilibrium`, `chores`, `fair division`, `Fisher markets`, `additive utilities`, `equilibrium computation`
- **Upstream problem record:** [W2953466159_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W2953466159_p0&n=56&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Simina Brânzei, Fedor Sandomirskiy, [*Algorithms for Competitive Division of Chores*](https://doi.org/10.1287/moor.2023.1361), Mathematics of Operations Research, 2023.
