# Euclidean, Gram, and $\nu^{=}$ Graph Parameters

This file focuses on one open problem at the interface of graph theory, semidefinite geometry, and Euclidean representations. The central question is how the graph parameters $ed(G)$, $gd(G)$, and $\nu^{=}(G)$ compare, and whether known one-sided inequalities can be upgraded to equalities.

---

<a id="problem-1"></a>

## 1. Euclidean, Gram, and $\nu^{=}$ Graph Parameters

Contributors: Monique Laurent, Yinyu Ye, and Antonios Varvitsiotis

### 1. Problem Background
This problem concerns three graph parameters: the Euclidean dimension parameter $ed(G)$, the Gram dimension parameter $gd(G)$, and the positive semidefinite corank parameter $\nu^{=}(G)$. These parameters compare partial Euclidean-distance data, partial Gram data, and semidefinite corank data associated with a graph.

The two open questions ask whether the inequalities $ed(\nabla G)\le ed(G)+1$ and $gd(G)\le \nu^{=}(G)$ hold for all graphs $G$, where $\nabla G$ is obtained from $G$ by adding one new vertex adjacent to every vertex of $G$. Together with the known reverse inequalities and the identity $ed(\nabla G)=gd(G)$, positive answers would link the parameters by $ed(G)+1=gd(G)=\nu^{=}(G)$.

### 2. Definitions and Conventions
#### 2.1 Euclidean dimension parameter $ed(G)$

The graph parameter $ed(G)$ is the smallest integer $k\ge 1$ such that, for every family of vectors $p_1,\ldots,p_n$, there exists another family of vectors $q_1,\ldots,q_n\in\mathbb{R}^k$ satisfying $\|p_i-p_j\|=\|q_i-q_j\|$ for every $\{i,j\}\in E$.

**Source:** Belk--Connelly [1].

#### 2.2 Gram dimension parameter $gd(G)$

The parameter $gd(G)$ is the smallest integer $k\ge 1$ such that, for every family of vectors $p_1,\ldots,p_n$, there exists another family of vectors $q_1,\ldots,q_n\in\mathbb{R}^k$ satisfying $\|p_i\|=\|q_i\|$ for every $i\in[n]$, and $p_i^T p_j=q_i^T q_j$ for every $\{i,j\}\in E$.

**Source:** Laurent--Varvitsiotis [3].

#### 2.3 The graph parameter $\nu^{=}(G)$

Let $\mathcal{C}(G)$ denote the class of positive semidefinite matrices with zeros on the nonedges of $G$. The parameter $\nu^{=}(G)$ is the maximum corank of a matrix $M\in\mathcal{C}(G)$ satisfying the following condition: for every $X\in\mathcal{S}^n$, if $MX=0$, $X_{ii}=0$ for all $i\in V$, and $X_{ij}=0$ for all $\{i,j\}\in E$, then $X=0$.

**Source:** van der Holst [2].

### 3. Open Problems
**Question 1.1.** Let $\nabla G$ be the graph obtained by adding a new node adjacent to all nodes of $G$. Determine the validity of the inequality $ed(\nabla G) \le ed(G) + 1$ (1).

**Question 1.2.** Determine the validity of the inequality $gd(G) \le \nu^{=}(G)$ (2).

### 4. Known Results
#### 4.1 Reverse inequality for the suspension and Euclidean dimension

**Source:** Laurent--Varvitsiotis [3].

Let $G$ be any graph, and let $\nabla G$ be the graph obtained from $G$ by adding one new vertex adjacent to every vertex of $G$. Then $ed(\nabla G)\ge ed(G)+1$.

#### 4.2 Equality between Euclidean dimension of the suspension and Gram dimension

**Source:** Laurent--Varvitsiotis [3].

Let $G$ be any graph, and let $\nabla G$ be the graph obtained from $G$ by adding one new vertex adjacent to every vertex of $G$. Then $ed(\nabla G)=gd(G)$. Thus Question 1.1, namely $ed(\nabla G)\le ed(G)+1$, is equivalent to the equality $gd(G)=ed(G)+1$.

#### 4.3 Small-dimensional equivalence between $ed(G)$ and $gd(G)$

**Source:** Belk--Connelly [1] and Laurent--Varvitsiotis [3].

Let $G$ be any graph. For every $k\in\{1,2,3\}$, $ed(G)\le k$ if and only if $gd(G)\le k+1$. Consequently, if $G$ has no $K_5$ minor and no $K_{2,2,2}$ minor, then $ed(\nabla G)\le ed(G)+1$.

#### 4.4 Reverse inequality between Gram dimension and $\nu^{=}(G)$

**Source:** Laurent--Varvitsiotis [3].

Let $G$ be any graph. Then $gd(G)\ge \nu^{=}(G)$.

#### 4.5 Small-dimensional equivalence between $\nu^{=}(G)$ and $gd(G)$

**Source:** van der Holst [2] and Laurent--Varvitsiotis [3].

Let $G$ be any graph. For every $k\in\{1,2,3,4\}$, $\nu^{=}(G)\le k$ if and only if $gd(G)\le k$. Consequently, if $G$ has no $K_5$ minor and no $K_{2,2,2}$ minor, then $gd(G)\le \nu^{=}(G)$.

### 5. References
1. M. Belk and R. Connelly. Realizability of graphs. Disc. Comput. Geom. 37:125-137, 2007.
2. H. van der Holst. Two tree-width-like graph Invariants. Combinatorica 23(4): 633-651, 2003.
3. M. Laurent and A. Varvitsiotis. A new graph parameter related to bounded rank positive semidefinite matrix completions. Preprint, 2012. Available at arXiv:1204.0734.
