# Deciding existence of equilibria in Fisher markets with earning and utility limits

This file contains the open problem on Deciding existence of equilibria in Fisher markets with earning and utility limits.

---

<a id="problem-1"></a>

## 1. Deciding existence of equilibria in Fisher markets with earning and utility limits

Source paper authors: Jugal Garg, Martin Hoefer, Kurt Mehlhorn

### 1. Problem Background

A (linear) Fisher market with satiation consists of:
1) A set of buyers $B$ and a set of divisible goods $G$, each good $j\in G$ having unit supply.
2) For each buyer $i\in B$: a budget $m_i\ge 0$, a utility cap $c_i>0$, and per-unit values $u_{ij}\ge 0$ for goods $j\in G$.
3) For each good $j\in G$: an earning (income) cap $d_j>0$.

An allocation is a matrix $x=(x_{ij})_{i\in B, j\in G}$ with $x_{ij}\in[0,1]$ and $\sum_{i\in B} x_{ij}=x_j\le 1$ for each good $j$. Buyer $i$'s budget-additive utility is
$$

U_i(x_i)=\min\Bigl(c_i,\;\sum_{j\in G} u_{ij}x_{ij}\Bigr),\qquad x_i=(x_{ij})_{j\in G}.

$$
Let $p=(p_j)_{j\in G}$ be nonnegative prices. Given prices $p$, define buyer $i$'s maximum bang-per-buck (MBB) ratio as
$$

\alpha_i=\max_{j\in G: p_j>0}\frac{u_{ij}}{p_j},

$$
(with the convention that goods with $p_j=0$ are treated separately). A bundle is MBB (also called thrifty) for buyer $i$ if it assigns positive amount only to goods attaining the maximum ratio $u_{ij}/p_j=\alpha_i$.

A demand bundle for buyer $i$ at prices $p$ is any $x_i$ that maximizes $U_i(x_i)$ subject to the budget constraint $\sum_j p_j x_{ij}\le m_i$. A demand bundle is called modest if it does not overshoot the cap, i.e., $\sum_j u_{ij}x_{ij}\le c_i$ (equivalently, if capped then it hits $c_i$ exactly).

For each good $j$, a seller chooses an effective supply $e_j\le 1$ to maximize revenue up to its earning cap, i.e., earns $\min(d_j, p_j e_j)$. A modest supply at prices $p$ is
$$

e_j=\min\Bigl(1,\frac{d_j}{p_j}\Bigr)

$$
(with $e_j=1$ if $p_j=0$ by continuity).

A thrifty and modest equilibrium is a pair $(x,p)$ such that:
1) $p_j\ge 0$ for all $j$.
2) Each buyer $i$ receives a thrifty (MBB) and modest demand bundle at prices $p$.
3) Each good $j$ uses a modest supply $e_j$ and is not overallocated: $x_j\le e_j$.
4) Walras' law holds: $p_j(e_j-x_j)=0$ for all $j$ (so if a good is not fully sold under its modest supply, its price is zero).

The computational decision problem asks, given integer input data $(u_{ij},m_i,c_i,d_j)$, whether at least one thrifty and modest equilibrium exists.

### 2. Open Problem

**Question 1.1.** Given a Fisher market instance specified by $B,G$ and nonnegative parameters $(u_{ij})$, $(m_i)$, $(c_i)$, and $(d_j)$, determine whether there exists a thrifty and modest equilibrium $(x,p)$ satisfying:
$$

\text{(i) } p\ge 0;\qquad \text{(ii) each }x_i\text{ is an MBB and modest demand bundle at }p;\qquad \text{(iii) }x_j\le \min\Bigl(1,\frac{d_j}{p_j}\Bigr);\qquad \text{(iv) } p_j\Bigl(\min\Bigl(1,\frac{d_j}{p_j}\Bigr)-x_j\Bigr)=0\ \forall j.

$$
Equivalently, decide the existence (and, if desired, compute one) of such an equilibrium for markets with both earning caps $(d_j)$ and utility caps $(c_i)$.

### 3. Known Results

The open problem from Garg–Hoefer–Mehlhorn asks for a decision procedure for existence of a thrifty and modest equilibrium in linear Fisher markets with both buyer utility caps $c_i$ (budget-additive satiation) and seller earning caps $d_j$. The source paper establishes that equilibrium existence is not guaranteed in general, and identifies the money-clearing condition $\sum_{i\in \hat B} m_i \le \sum_{j\in N(\hat B)} d_j$ as a sufficient (but not necessary) condition for existence. It further shows nonconvexity of the equilibrium set, provides an FPTAS for approximate equilibria in money-clearing markets via perturbation and a descending-price method, and places exact equilibrium computation (under money clearing) in $\mathrm{PPAD}\cap\mathrm{PLS}$, with polynomial-time solvability when the number of buyers or goods is constant.

Among the forward citations provided, the thesis “Nash Welfare, Valuated Matroids, and Gross Substitues” contributes related algorithmic tools (auction algorithms for approximate equilibria under weak gross substitutes and spending-restricted variants, including capped utilities in budget-SPLC form). However, it does not resolve the core existence/decidability question for the combined earning+utility cap Fisher model with the specific thrifty/modest equilibrium notion. Consequently, based on the available citation set, the decision problem remains open beyond the sufficient money-clearing regime, and no complete characterization or hardness result is identified here.

Promising directions suggested by the source paper’s techniques include: (i) seeking a necessary-and-sufficient combinatorial condition generalizing money clearing to incorporate utility caps, (ii) proving hardness (e.g., NP-hardness) of existence when money clearing fails, potentially via reductions that exploit nonconvexity and zero-price components, and (iii) leveraging the LCP/Lemke framework to derive certificates of nonexistence or to separate equilibrium from spurious LCP solutions without assuming money clearing.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #57 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W2965273013_p0/partial_progress/57.pdf)

### 4. Source and Verification

- **Source paper:** Jugal Garg, Martin Hoefer, Kurt Mehlhorn, [*Satiation in Fisher Markets and Approximation of Nash Social Welfare*](https://doi.org/10.1287/moor.2019.0129), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5 (Future Directions), page 32.
- **Area:** fisher market equilibrium
- **Keywords:** `Fisher markets`, `market equilibrium`, `earning caps`, `utility caps`, `existence complexity`, `NP-hardness`, `polynomial characterization`
- **Upstream problem record:** [W2965273013_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W2965273013_p0&n=57&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Jugal Garg, Martin Hoefer, Kurt Mehlhorn, [*Satiation in Fisher Markets and Approximation of Nash Social Welfare*](https://doi.org/10.1287/moor.2019.0129), Mathematics of Operations Research, 2023.
2. *Nash Welfare, Valuated Matroids, and Gross Substitues*.
