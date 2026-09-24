# Characterize necessity of the I-property for isolated calmness of KKT mapping

This file contains the open problem on Characterize necessity of the I-property for isolated calmness of KKT mapping.

---

<a id="problem-1"></a>

## 1. Characterize necessity of the I-property for isolated calmness of KKT mapping

Source paper authors: Ruoyu Diao, Yu‐Hong Dai, Liwei Zhang

### 1. Problem Background

Consider a Nash equilibrium problem (NEP) with $N$ players. Player $k$ chooses a strategy $x_k\in\mathbb{R}^{n_k}$ and faces the parameterized optimization problem
$$

\min_{x_k\in\mathbb{R}^{n_k}}\ f_k(x_k,x_{-k};w_k)-\langle v_k,x_k\rangle
\quad\text{s.t.}\quad g^k_i(x_k;w_k)=u^k_i\ (i=1,\dots,s_k),\ \ g^k_j(x_k;w_k)\le u^k_j\ (j=s_k+1,\dots,m_k),

$$
where $x=(x_1,\dots,x_N)\in\mathbb{R}^n$ with $n=\sum_k n_k$, and $x_{-k}$ denotes the strategies of players other than $k$. The perturbation parameter for player $k$ is $p_k=(u^k,v_k,w_k)$, and the full parameter is $p=(p_1,\dots,p_N)$.

Let $\lambda_k\in\mathbb{R}^{m_k}$ be the vector of Lagrange multipliers for player $k$’s constraints, with the convention that multipliers for inequality constraints satisfy $\lambda^k_j\ge 0$ for $j>s_k$. Define the ordinary Lagrangian
$$

L_k(x_k,x_{-k},\lambda_k;w_k)=f_k(x_k,x_{-k};w_k)+\sum_{i=1}^{m_k}\lambda^k_i\, g^k_i(x_k;w_k).

$$
Let $G_k(x_k;w_k)=(g^k_1(x_k;w_k),\dots,g^k_{m_k}(x_k;w_k))$. The (set-valued) KKT solution mapping $S_{\mathrm{KKT}}$ assigns to $p$ the set of KKT pairs $(x,\lambda)$ satisfying the generalized KKT system (first-order stationarity and complementarity/feasibility).

Fix a reference parameter $\bar p$ and a reference KKT point $(\bar x,\bar\lambda)\in S_{\mathrm{KKT}}(\bar p)$. Define, for each player $k$, index sets of inequality constraints (together with all equalities) at $(\bar p,\bar x,\bar\lambda)$:
$$

I^k_1:=\{i\in\{s_k+1,\dots,m_k\}:\ \bar\lambda^k_i>0\ \text{and}\ g^k_i(\bar x_k;\bar w_k)-\bar u^k_i=0\}\cup\{1,\dots,s_k\},

$$
$$

I^k_2:=\{i\in\{s_k+1,\dots,m_k\}:\ \bar\lambda^k_i=0\ \text{and}\ g^k_i(\bar x_k;\bar w_k)-\bar u^k_i=0\},

$$
$$

I^k_3:=\{i\in\{s_k+1,\dots,m_k\}:\ \bar\lambda^k_i=0\ \text{and}\ g^k_i(\bar x_k;\bar w_k)-\bar u^k_i<0\}.

$$
Let $I_1=\bigcup_k I^k_1$, $I_2=\bigcup_k I^k_2$. Define the cone
$$

K(I_1,I_2):=\Big\{y=(y_1,\dots,y_N)\in\mathbb{R}^n:\ \nabla_{x_k} g^k_i(\bar x_k;\bar w_k)^T y_k=0\ \forall i\in I^k_1,\ \nabla_{x_k} g^k_i(\bar x_k;\bar w_k)^T y_k\le 0\ \forall i\in I^k_2\Big\}.

$$
Assume all needed derivatives exist so that the mixed Hessians $\nabla^2_{x_k x_i} L_k(\bar x_k,\bar x_{-k},\bar\lambda_k;\bar w_k)$ are well-defined.

The mapping $S_{\mathrm{KKT}}$ is said to be isolated calm at $\bar p$ for $(\bar x,\bar\lambda)$ if there exist neighborhoods $U$ of $\bar p$, $V$ of $(\bar x,\bar\lambda)$, and $\kappa\ge 0$ such that
$$

S_{\mathrm{KKT}}(p)\cap V\subset \{(\bar x,\bar\lambda)\}+\kappa\|p-\bar p\|B\quad\forall p\in U,

$$
where $B$ is the unit ball.

The paper defines the I-property at $(\bar p,\bar x,\bar\lambda)$ on $K(I_1,I_2)$ as follows:
for any $y\in K(I_1,I_2)$, if for every $k=1,\dots,N$,
$$

\sum_{i=1}^N y_k^T\,\nabla^2_{x_k x_i} L_k(\bar x_k,\bar x_{-k},\bar\lambda_k;\bar w_k)\, y_i=0,

$$
then $y=0$.

### 2. Open Problem

**Question 1.1.** Determine whether the following implication holds for a general Nash equilibrium problem with canonical perturbations:
$$

S_{\mathrm{KKT}}\ \text{is isolated calm at }\bar p\text{ for }(\bar x,\bar\lambda)\ \Longrightarrow\ \text{the I-property holds at }(\bar p,\bar x,\bar\lambda)\text{ on }K(I_1,I_2).

$$
Equivalently, characterize whether isolated calmness of the KKT solution mapping $S_{\mathrm{KKT}}$ at $(\bar p,\bar x,\bar\lambda)$ necessitates the I-property condition stated in the background.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #21 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411959281_p0/solutions/21_W4411959281_p0.pdf)

### 4. Source and Verification

- **Source paper:** Ruoyu Diao, Yu‐Hong Dai, Liwei Zhang, [*Stability for Nash Equilibrium Problems*](https://doi.org/10.1287/moor.2024.0609), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 7 (Conclusions), page 27
- **Area:** variational inequalities
- **Keywords:** `nash equilibrium problems`, `kkt solution mapping`, `isolated calmness`, `variational analysis`, `second-order conditions`, `stability`
- **Upstream problem record:** [W4411959281_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411959281_p0&n=21&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Ruoyu Diao, Yu‐Hong Dai, Liwei Zhang, [*Stability for Nash Equilibrium Problems*](https://doi.org/10.1287/moor.2024.0609), Mathematics of Operations Research, 2025.
