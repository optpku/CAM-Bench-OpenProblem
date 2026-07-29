# Achieve asymptotic three-quarters approximation for impartial selection in single-nomination graphs

This file contains the open problem on Achieve asymptotic three-quarters approximation for impartial selection in single-nomination graphs.

---

<a id="problem-1"></a>

## 1. Achieve asymptotic three-quarters approximation for impartial selection in single-nomination graphs

Source paper authors: Javier Cembrano, Felix Fischer, Max Klimm

### 1. Problem Background

Let $n\in\mathbb{N}$ and let $G=(V,E)$ be a directed graph with $|V|=n$, no self-loops, and exactly one outgoing edge per vertex (the single-nomination model): for every $v\in V$ there exists a unique $u\in V\setminus\{v\}$ with $(v,u)\in E$.

For a vertex $v\in V$, its indegree is $\delta^-(v,G)=|\{u\in V:(u,v)\in E\}|$. The maximum indegree is $\Delta(G)=\max_{v\in V}\delta^-(v,G)$.

A (possibly randomized) selection mechanism is a mapping $f$ that assigns to each such graph $G$ a probability distribution $f(G)\in[0,1]^V$ over vertices, with $\sum_{v\in V} f_v(G)=1$. The expected indegree selected by $f$ on $G$ is
$$

\mathbb{E}_{v\sim f(G)}[\delta^-(v,G)] = \sum_{v\in V} f_v(G)\,\delta^-(v,G).

$$

Impartiality means that a vertex cannot affect its own selection probability by changing its outgoing edge: for any two graphs $G=(V,E)$ and $G'=(V,E')$ on the same vertex set that differ only in the outgoing edge of a single vertex $v$ (equivalently, $E\setminus(\{v\}\times V)=E'\setminus(\{v\}\times V)$), it holds that $f_v(G)=f_v(G')$.

For $\alpha\le 1$, mechanism $f$ is $\alpha$-optimal (worst-case multiplicative guarantee) if for every graph $G$ with $\Delta(G)>0$,
$$

\frac{\mathbb{E}_{v\sim f(G)}[\delta^-(v,G)]}{\Delta(G)}\ge \alpha.

$$
Equivalently, the performance guarantee of $f$ is $\inf_{G:\Delta(G)>0} \mathbb{E}[\delta^-(v,G)]/\Delta(G)$.

### 2. Open Problem

**Question 1.1.** Determine whether there exists a sequence of impartial selection mechanisms $(f_n)_{n\in\mathbb{N}}$, where each $f_n$ is defined on all single-nomination directed graphs $G=(V,E)$ with $|V|=n$, such that the worst-case performance guarantees satisfy
$$

\liminf_{n\to\infty}\; \inf_{G:\,|V|=n,\,\Delta(G)>0}\; \frac{\mathbb{E}_{v\sim f_n(G)}[\delta^-(v,G)]}{\Delta(G)} \ge \frac{3}{4}.

$$
Equivalently: is asymptotic $3/4$-optimality achievable by impartial mechanisms in the single-nomination model (or can one prove a constant $<3/4$ upper bound) as $n\to\infty$?

### 3. Known Results

In the single-nomination model (each vertex has outdegree exactly 1), the source paper establishes the current baseline for worst-case multiplicative guarantees under impartiality. It gives a tight analysis of the permutation mechanism (Perm), proving it is exactly $2/3$-optimal for all $n$, via a refined adversarial/coupling argument controlling the distribution of indegrees-from-the-left and showing a weak negative-correlation property (Lemma 3.4). It then improves the best known lower bound by constructing a new impartial mechanism (Mix) that combines Perm with a strengthened plurality-with-runner-up variant (PRUGD), achieving $2105/3147\approx 0.6689$ for all $n$. On the impossibility side, it derives new finite-$n$ upper bounds for any impartial mechanism (Theorem 5.1), with worst-case minimum $76/105\approx 0.7238$ and asymptotic upper bound tending to $3/4$ as $n\to\infty$. These results leave open whether the asymptotic optimum equals $3/4$ or is bounded away from it.

The forward-citing works provided do not resolve the $3/4$ question in the original prediction-free model. Two closely related papers study a prediction-augmented plurality setting and identify $3/4$ as an upper bound on robustness even with predictions (Theorem 6.1(ii)), reinforcing $3/4$ as a natural barrier but not ruling out $3/4$-optimality without predictions. Other citations are either surveys or address different variants (deterministic/weighted/inexact $(n,k)$-selection), offering context and techniques but no improved multiplicative guarantee toward $3/4$ in the single-nomination 1-selection setting.

Overall, with the information available here, the problem remains open: the best known lower bound is $2105/3147\approx 0.6689$ (source paper), while the best known general upper bounds approach $3/4$ asymptotically but do not separate $3/4$ from below. Progress likely requires either a new impartial mechanism exploiting the functional-graph structure (cycles with in-trees) beyond permutation/runner-up ideas, or sharper impossibility constructions that convert the finite-$n$ linear-constraint method (2-cycle with directed paths) into an asymptotic bound strictly below $3/4$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #13 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411023035_p0/partial_progress/13.pdf)
- [pipeline final 13](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4411023035_p0/partial_progress/pipeline_final_13.pdf)

### 4. Source and Verification

- **Source paper:** Javier Cembrano, Felix Fischer, Max Klimm, [*Improved Bounds for Single-Nomination Impartial Selection*](https://doi.org/10.1287/moor.2024.0431), Mathematics of Operations Research, 2025.
- **Location in paper:** Page 14, Section 5 (end of the section introduction, immediately after stating Theorem 5.1 and Corollary 5.2).
- **Area:** impartial selection mechanisms
- **Keywords:** `impartial selection`, `single-nomination model`, `randomized mechanisms`, `approximation guarantee`, `asymptotic optimality`, `directed graphs`
- **Upstream problem record:** [W4411023035_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4411023035_p0&n=13&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Javier Cembrano, Felix Fischer, Max Klimm, [*Improved Bounds for Single-Nomination Impartial Selection*](https://doi.org/10.1287/moor.2024.0431), Mathematics of Operations Research, 2025.
2. *Impartial Selection with Predictions*.
3. *Impartial Mechanisms for Selection and Ranking*.
4. [*Deterministic impartial selection with weights*](https://doi.org/10.1145/3677177).
5. *Manipulation and peer mechanisms: A survey*.
