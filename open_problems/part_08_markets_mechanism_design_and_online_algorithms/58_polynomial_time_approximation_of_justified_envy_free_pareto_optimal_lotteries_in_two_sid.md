# Polynomial-time approximation of justified envy-free Pareto-optimal lotteries in two-sided markets

This file contains the open problem on Polynomial-time approximation of justified envy-free Pareto-optimal lotteries in two-sided markets.

---

<a id="problem-1"></a>

## 1. Polynomial-time approximation of justified envy-free Pareto-optimal lotteries in two-sided markets

Source paper authors: Thorben Tröbst, Vijay V. Vazirani

### 1. Problem Background

Consider a bipartite two-sided cardinal-utility matching market with two sets of agents $A$ and $B$, with $|A|=|B|=n$. Each $i\in A$ has nonnegative rational utilities $u_{ij}$ for being matched to $j\in B$, and each $j\in B$ has nonnegative rational utilities $w_{ji}$ for being matched to $i\in A$.

A (fractional) allocation is a matrix $x=(x_{ij})_{i\in A, j\in B}$ with $x_{ij}\ge 0$ satisfying the fractional perfect matching constraints
$$

\sum_{j\in B} x_{ij}=1 \ \forall i\in A, \qquad \sum_{i\in A} x_{ij}=1 \ \forall j\in B.

$$
This corresponds to a lottery over integral perfect matchings via Birkhoff--von Neumann decomposition, and agents evaluate allocations by expected utility.

Utilities induced by $x$ are
$$

U_i(x)=\sum_{j\in B} u_{ij}x_{ij}\quad (i\in A), \qquad W_j(x)=\sum_{i\in A} w_{ji}x_{ij}\quad (j\in B).

$$

Justified envy-freeness (JEF) is a two-sided fairness notion. For $i,i'\in A$, agent $i$ has justified envy toward $i'$ under allocation $x$ if
$$

U_i(x) < \sum_{j\in B: \ w_{ji}\ge w_{ji'}} u_{ij} x_{i'j}.

$$
(The definition is symmetric for pairs $j,j'\in B$.) An allocation $x$ is JEF if it has no justified envy on either side.

Pareto-optimality (PO) in two-sided markets means there is no other feasible allocation $y$ such that $U_i(y)\ge U_i(x)$ for all $i\in A$, $W_j(y)\ge W_j(x)$ for all $j\in B$, and at least one of these inequalities is strict.

For $\alpha\ge 1$, an $\alpha$-approximately JEF allocation informally means justified envy is bounded within a multiplicative factor $\alpha$ (the paper asks for an $\alpha$-approximation analogue of JEF, without fixing a particular formalization beyond the constant-factor approximation goal).

### 2. Open Problem

**Question 1.1.** Design a polynomial-time algorithm that, given any bipartite two-sided cardinal-utility matching market $(A,B,u,w)$, outputs a feasible lottery/allocation $x$ that is Pareto-optimal and $\alpha$-approximately justified envy-free for some constant $\alpha\ge 1$ (independent of $n$).

Equivalently: determine whether there exists a constant $\alpha$ for which such an allocation can always be computed in time polynomial in $n$ and the input encoding size, and if so, give such an algorithm (including the achieved constant $\alpha$).

### 3. Known Results

The source paper (Tr{"o}bst--Vazirani, 2025) motivates the two-sided question by showing that exact EF+PO lotteries can fail to exist even for very small extensions beyond symmetric $\{0,1\}$ utilities, and proposes justified envy-freeness (JEF) as a stability-like replacement. It proves unconditional existence of JEF allocations that are weakly Pareto-optimal (no allocation strictly improves everyone), via a limiting argument based on Manjunath’s double-indexed-price (DIP) equilibrium and a subsequent polyhedral extreme-point argument to obtain rationality. However, weak PO is strictly weaker than the strong Pareto-optimality required in the open problem, and the paper leaves open whether one can always compute (or even guarantee existence of) a strongly PO allocation that is constant-factor approximately JEF.

Subsequent work on two-sided cardinal matching has so far not closed this gap. The most directly relevant follow-up ("Cardinal-Utility Matching Markets and Online Matching") reinforces the landscape: it highlights the existence of JEF+weak-PO allocations and provides a strong obstruction for a natural polynomial-time candidate, Nash bargaining, by exhibiting instances with $\Theta(n)$-factor justified envy. On the algorithmic side, "Time-efficient algorithms for Nash-bargaining-based matching market models" supplies fast polynomial-time methods for computing approximate Nash-bargaining outcomes on the Birkhoff polytope; these outcomes are Pareto-optimal but can be far from JEF, so the algorithms do not yield constant-$\alpha$ approximate JEF.

More broadly, recent convex-optimization-based fairness relaxations (e.g., proportional fairness / Nash welfare and harm-ratio criteria) show that one can compute Pareto-optimal outcomes with certain constant-factor envy-type guarantees in related divisible-goods models, but the guarantees either do not match the two-sided JEF definition (which depends on the $w$-threshold sets $\{j: w_{ji}\ge w_{ji'}\}$) or degrade with $n$. Overall, the existence of JEF+weak-PO suggests that JEF is structurally compatible with feasibility, but obtaining strong PO together with any constant-factor approximation to JEF in polynomial time remains open; promising directions include identifying a convex program whose KKT/dual structure directly enforces approximate JEF constraints, or proving impossibility (e.g., that any strongly PO allocation must incur $\Omega(n)$ justified envy in the worst case).

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #31 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4414541699_p0/partial_progress/31.pdf)

### 4. Source and Verification

- **Source paper:** Thorben Tröbst, Vijay V. Vazirani, [*Cardinal-Utility Matching Markets: The Quest for Envy-Freeness, Pareto-Optimality, and Efficient Computability*](https://doi.org/10.1287/moor.2024.0770), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 23, Section 4 (Conclusion)
- **Area:** fair matching
- **Keywords:** `two-sided matching`, `cardinal utilities`, `justified envy-freeness`, `pareto optimality`, `polynomial-time algorithms`, `approximation`
- **Upstream problem record:** [W4414541699_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4414541699_p0&n=31&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Thorben Tröbst, Vijay V. Vazirani, [*Cardinal-Utility Matching Markets: The Quest for Envy-Freeness, Pareto-Optimality, and Efficient Computability*](https://doi.org/10.1287/moor.2024.0770), Mathematics of Operations Research, 2025.
2. [*Cardinal-Utility Matching Markets and Online Matching*](https://arxiv.org/abs/2402.08851).
3. [*Time-efficient algorithms for Nash-bargaining-based matching market models*](https://doi.org/10.1007/978-3-032-08560-3_7).
4. [*Harm ratio: A novel and versatile fairness criterion*](https://doi.org/10.1145/3689904.3694701).
5. *Approximating competitive equilibrium by Nash welfare*.
6. *Tight Efficiency Bounds for the Probabilistic Serial Mechanism under Cardinal Preferences*.
