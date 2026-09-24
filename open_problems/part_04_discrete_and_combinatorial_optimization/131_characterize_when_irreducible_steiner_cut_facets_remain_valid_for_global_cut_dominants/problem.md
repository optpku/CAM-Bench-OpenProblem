# Characterize when irreducible Steiner-cut facets remain valid for global cut dominants

This file contains the open problem on Characterize when irreducible Steiner-cut facets remain valid for global cut dominants.

---

<a id="problem-1"></a>

## 1. Characterize when irreducible Steiner-cut facets remain valid for global cut dominants

Source paper authors: Michele Conforti, Volker Kaibel

### 1. Problem Background

Let $G=(V,E)$ be a connected undirected graph and let $T\subseteq V$ be a terminal set with $|T|\ge 2$. For $S\subseteq V$, write $\delta(S)\subseteq E$ for the cut consisting of edges with one endpoint in $S$ and the other in $V\setminus S$. A $T$-Steiner cut is a cut $\delta(S)$ such that $T\cap S\neq\emptyset$ and $T\setminus S\neq\emptyset$.

Let $\chi(\delta(S))\in\{0,1\}^E$ denote the incidence vector of $\delta(S)$. The $T$-Steiner cut polytope is
$$
\mathrm{CUT}(G,T)=\mathrm{conv}\{\chi(\delta(S)) : \delta(S)\text{ is a }T\text{-Steiner cut}\}\subseteq \mathbb{R}^E.
$$
The $T$-Steiner cut dominant is the dominant (upper-closed hull)
$$
\mathrm{CUT}^+(G,T)=\mathrm{CUT}(G,T)+\mathbb{R}^E_{\ge 0} = \{y\in\mathbb{R}^E: \exists x\in \mathrm{CUT}(G,T)\text{ with }y\ge x\}.
$$
Similarly, the (global) cut dominant is $\mathrm{CUT}^+(G)=\mathrm{CUT}^+(G,V)$.

Consider a nontrivial valid inequality for $\mathrm{CUT}^+(G,T)$ of the form
$$
c\cdot x \ge \gamma,
$$
where $c\in\mathbb{R}^E_{\ge 0}$ and $\gamma>0$. Such an inequality is facet-defining for $\mathrm{CUT}^+(G,T)$ if the face $\{x\in \mathrm{CUT}^+(G,T): c\cdot x=\gamma\}$ has dimension $|E|-1$. The paper uses the notion of an irreducible facet inducing Steiner graph $(G,T)$, meaning (i) $G$ has no cut vertex, and (ii) no nonterminal node $v\in V\setminus T$ has degree 2. (Equivalently, such a facet is not obtainable from smaller facet-inducing instances by the paper’s subdivision and gluing operations.)

A key monotonicity relation is $\mathrm{CUT}^+(G,T)\subseteq \mathrm{CUT}^+(G)$ whenever $T\subseteq V$: any inequality valid for $\mathrm{CUT}^+(G)$ is automatically valid for $\mathrm{CUT}^+(G,T)$, but the converse may fail. The paper notes explicit examples where enlarging the terminal set (turning a nonterminal into a terminal) can destroy validity of a previously facet-defining Steiner-cut inequality.

### 2. Open Problem

**Question 1.1.** Determine whether the following statement is true or false.

For every connected graph $G=(V,E)$, every terminal set $T\subseteq V$ with $|T|\ge 2$, and every inequality $c\cdot x\ge \gamma$ that defines a facet of the Steiner cut dominant $\mathrm{CUT}^+(G,T)$ and is irreducible in the sense that $(G,T)$ is an irreducible facet inducing Steiner graph, the same inequality is valid for the global cut dominant $\mathrm{CUT}^+(G)=\mathrm{CUT}^+(G,V)$.

Equivalently: characterize whether every facet-defining inequality of $\mathrm{CUT}^+(G,T)$ coming from an irreducible facet-inducing pair $(G,T)$ remains valid (and hence facet-defining) after replacing $T$ by $V$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #115 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4393233856_p0/solutions/115.pdf)

### 4. Source and Verification

- **Source paper:** Michele Conforti, Volker Kaibel, [*Steiner Cut Dominants*](https://doi.org/10.1287/moor.2022.0280), Mathematics of Operations Research, 2024.
- **Location in paper:** Section 9 (Conclusion), paragraph titled 'Upwards validity', page 22 (of 24 in the provided text)
- **Area:** cut polyhedra
- **Keywords:** `cut dominants`, `Steiner cuts`, `polyhedral combinatorics`, `facet validity`, `terminal sets`, `graph minors`
- **Upstream problem record:** [W4393233856_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4393233856_p0&n=115&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Michele Conforti, Volker Kaibel, [*Steiner Cut Dominants*](https://doi.org/10.1287/moor.2022.0280), Mathematics of Operations Research, 2024.
