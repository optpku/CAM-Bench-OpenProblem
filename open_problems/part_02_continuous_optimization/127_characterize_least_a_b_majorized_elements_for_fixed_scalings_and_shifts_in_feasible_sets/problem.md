# Characterize least (a,b)-majorized elements for fixed scalings and shifts in feasible sets

This file contains the open problem on Characterize least (a,b)-majorized elements for fixed scalings and shifts in feasible sets.

---

<a id="problem-1"></a>

## 1. Characterize least (a,b)-majorized elements for fixed scalings and shifts in feasible sets

Source paper authors: Martijn H. H. Schoot Uiterkamp

### 1. Problem Background

Let $n\in\mathbb{N}$ and index set $N:=\{1,\dots,n\}$. For $x\in\mathbb{R}^n$ and $S\subseteq N$, write $x(S):=\sum_{i\in S} x_i$. Fix a scaling vector $a\in\mathbb{R}^n_{>0}$ and a shift vector $b\in\mathbb{R}^n$.

For vectors $x,y\in\mathbb{R}^n$, define $(a,b)$-majorization by
$$

 x \prec_{(a,b)} y \quad\text{if}\quad x(N)=y(N)\ \text{and}\ \sum_{i\in N} a_i\,\phi\!\left(\frac{x_i+b_i}{a_i}\right)\le \sum_{i\in N} a_i\,\phi\!\left(\frac{y_i+b_i}{a_i}\right)\ \text{for all continuous convex }\phi:\mathbb{R}\to\mathbb{R}.

$$
Given a feasible set $C\subseteq \mathbb{R}^n$, a vector $x^*\in C$ is called a least $(a,b)$-majorized element of $C$ if $x^*\prec_{(a,b)} y$ for all $y\in C$. Equivalently, $x^*$ simultaneously minimizes the family of separable convex objectives
$$

 x\mapsto \sum_{i\in N} a_i\,\phi\!\left(\frac{x_i+b_i}{a_i}\right)

$$
over $C$, for every choice of continuous convex $\phi$.

A major theme in the paper is that if one requires existence of least $(a,b)$-majorized elements for all choices of $a\in\mathbb{R}^n_{>0}$ and $b\in\mathbb{R}^n$ within the class of compact convex sets, then the feasible sets are precisely base polyhedra of submodular functions (and analogous characterizations for weaker notions lead to other polyhedra). The paper explicitly notes a limitation: it treats the case of existence for every $a,b$, rather than for specific fixed $a,b$ (or subsets thereof).

### 2. Open Problem

**Question 1.1.** Given a feasible set $C\subseteq \mathbb{R}^n$ and fixed vectors $a\in\mathbb{R}^n_{>0}$ and $b\in\mathbb{R}^n$, characterize (in structural/combinatorial terms) when $C$ admits a least $(a,b)$-majorized element, i.e., when there exists $x^*\in C$ such that
$$

\sum_{i\in N} a_i\,\phi\!\left(\frac{x_i^*+b_i}{a_i}\right)\le \sum_{i\in N} a_i\,\phi\!\left(\frac{y_i+b_i}{a_i}\right)\quad\text{for all }y\in C\text{ and all continuous convex }\phi:\mathbb{R}\to\mathbb{R},

$$
(with the implicit requirement $x^*(N)=y(N)$ for all $y\in C$ whenever $(a,b)$-majorization is used).
In particular, investigate whether such a characterization exists in the special case $b=0$ (scaled objectives only).

### 3. Known Results

The 2023 paper by Schoot Uiterkamp characterizes, for compact convex feasible sets, when least $(a,b)$-majorized elements exist uniformly for all scalings $a>0$ and shifts $b$: this happens exactly for base polyhedra of submodular functions (and analogously for weaker majorization notions and other polyhedra). The open problem asks for an analogous characterization when $(a,b)$ is fixed (not universal), especially for the scaled-only case $b=0$. The source paper explicitly leaves this as a limitation and future direction.

Among the forward citations provided, the INFORMS Journal on Computing article on symmetric separable convex RAPs with disjoint-interval bounds gives partial progress in a different direction: it shows that a least-majorization-type “reduction property” (existence of a single solution optimal for all convex $\varphi$) can fail once the feasible region departs from the convex/base-polyhedron setting (here via nonconvex disjoint-interval constraints), while still providing structural monotonicity and exact algorithms for certain structured cases. This supports the view that any fixed-$(a,b)$ characterization will likely need to impose strong structural restrictions on $C$ (e.g., convexity plus exchange properties) and may bifurcate sharply between convex polymatroidal sets (where least elements are induced by quadratic minimization) and more general/nonconvex RAP feasible regions (where simultaneous optimality can fail).

At present, based on the limited forward-citation evidence supplied, there is no identified paper that resolves the fixed-$(a,b)$ characterization problem. Promising directions suggested by the source paper’s techniques include: (i) specializing the greedy/Edmonds-style arguments used for the universal quantification over $a,b$ to a single pair $(a,b)$, potentially yielding a characterization in terms of a single submodular function or a single chain of tight inequalities; and (ii) relating fixed-$a$ (with $b=0$) to weighted versions of discrete convexity/M-convexity and to parametric quadratic minimization over candidate polyhedra. Counterexamples from nonconvex RAP variants indicate that convexity (or hole-freeness plus discrete exchange) is likely essential for any clean structural characterization.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #110 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4391954556_p0/partial_progress/110.pdf)

### 4. Source and Verification

- **Source paper:** Martijn H. H. Schoot Uiterkamp, [*A Characterization of Simultaneous Optimization, Majorization, and (Bi-)Submodular Polyhedra*](https://doi.org/10.1287/moor.2023.0054), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 25, Section 7 (Conclusions and directions for future research), item 1 in the numbered list of future directions.
- **Area:** majorization and convex order
- **Keywords:** `majorization`, `separable convex optimization`, `submodular polyhedra`, `base polyhedra`, `resource allocation`, `structural characterization`
- **Upstream problem record:** [W4391954556_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4391954556_p0&n=110&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Martijn H. H. Schoot Uiterkamp, [*A Characterization of Simultaneous Optimization, Majorization, and (Bi-)Submodular Polyhedra*](https://doi.org/10.1287/moor.2023.0054), Mathematics of Operations Research, 2024.
2. [*Symmetric separable convex resource allocation problems with structured disjoint interval bound constraints*](https://doi.org/10.1287/ijoc.2023.0263).
