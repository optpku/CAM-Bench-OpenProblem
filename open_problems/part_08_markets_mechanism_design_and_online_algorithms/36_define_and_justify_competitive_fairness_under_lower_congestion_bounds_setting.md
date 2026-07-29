# Define and justify competitive fairness under lower congestion bounds setting

This file contains the open problem on Define and justify competitive fairness under lower congestion bounds setting.

---

<a id="problem-1"></a>

## 1. Define and justify competitive fairness under lower congestion bounds setting

Source paper authors: Anna Bogomolnaia, Hervé Moulin

### 1. Problem Background

Let there be a finite set of posts (items) $A$ with $|A|=m$ and a finite set of agents $N$ with $|N|=n$. A (deterministic) assignment is a family $P=(S_a)_{a\in A}$ of pairwise disjoint subsets of $N$ whose union is $N$, where $S_a$ is the set of agents assigned to post $a$. Under anonymous congestion, the congestion at post $a$ in assignment $P$ is $s_a:=|S_a|$, and agent $i$'s realized allocation is the pair $(a,s_a)$ when $i\in S_a$. Each agent $i\in N$ has an ordinal preference relation $\preceq_i$ over all feasible allocations $A\times \{1,2,\dots,n\}$, assumed to be strictly decreasing in the congestion coordinate at each fixed post (i.e., for each $a$, $(a,s+1)\prec_i (a,s)$ for all $s$).

Now introduce post-specific congestion bounds: for each $a\in A$, a lower bound $\underline s_a\in\{0,1,\dots,n\}$ and an upper bound $\overline s_a\in\{0,1,\dots,n\}$ with $\underline s_a\le \overline s_a$. Feasible assignments are those with $\underline s_a\le s_a\le \overline s_a$ for all $a\in A$, and $\sum_{a\in A} s_a=n$. In a setting with bounds, a central fairness notion of the paper (without bounds) is a competitive assignment: an assignment $P$ with congestion profile $s$ is competitive if for every agent $i\in S_a$ and every post $x\in A$, agent $i$ weakly prefers $(a,s_a)$ to the hypothetical move $(x,\max\{s_x,1\})$ (interpreting an empty post as having a minimal effective congestion of 1).

With lower bounds $\underline s_a>0$, some posts must be populated even if all agents dislike them, creating tension with the usual interpretation of competitiveness (envy-freeness-like conditions using congestion as a price).

### 2. Open Problem

**Question 1.1.** Give a mathematically well-defined notion of \emph{competitiveness} (a competitive-fairness concept) for congested assignment problems with anonymous congestion and post-specific lower bounds $(\underline s_a)_{a\in A}$ and upper bounds $(\overline s_a)_{a\in A}$ on the congestion levels, and provide a principled justification that this notion appropriately accounts for forced population of posts when $\underline s_a>0$, i.e., when some posts must host at least $\underline s_a$ agents even if agents would prefer to avoid them.

In particular, specify how the competitive comparison $(a,s_a)$ versus $(x,\cdot)$ should be defined when feasibility requires $s_x\ge \underline s_x$ for all $x$, and address how to treat situations where a lower bound forces assignment to a unanimously disliked post.

### 3. Known Results

The forward-citation evidence provided contains only one citing work, which develops and analyzes the competitiveness concept for congested assignments without post-specific lower bounds. In that baseline model, competitiveness is defined by a no-envy/no-profitable-virtual-move condition comparing an agent’s realized allocation $(a,s_a)$ to $(x,\max\{s_x,1\})$, thereby assigning an effective congestion of 1 to empty posts. This device is central to ruling out degenerate envy-free outcomes where everyone piles onto a single post while leaving others empty.

However, once feasibility imposes lower bounds $\underline s_a>0$, the interpretation of $\max\{s_x,1\}$ breaks: posts cannot be left empty, and agents may be forced into unanimously disliked posts to meet $\underline s_a$. The citing paper explicitly flags this as an open question and does not propose a replacement competitive comparison or equilibrium-like condition that internalizes the mandatory minimum occupancies. Therefore, based on the provided forward-citation analysis, the problem of defining and justifying competitive fairness under lower congestion bounds remains open.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #6 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4410154284_p0/partial_progress/6.pdf)

### 4. Source and Verification

- **Source paper:** Anna Bogomolnaia, Hervé Moulin, [*Fair Congested Assignment*](https://doi.org/10.1287/moor.2024.0581), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 7 (Concluding comments), page 29 (paper pagination shown as 28 in the provided text dump), under the heading 'two open questions', item 1
- **Area:** congested assignment
- **Keywords:** `congested assignment`, `fairness`, `envy freeness`, `lower bounds`, `competitive equilibrium`, `congestion constraints`
- **Upstream problem record:** [W4410154284_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4410154284_p0&n=6&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Anna Bogomolnaia, Hervé Moulin, [*Fair Congested Assignment*](https://doi.org/10.1287/moor.2024.0581), Mathematics of Operations Research, 2025.
2. *Assignments for Congestion-Averse Agents: Seeking Competitive and Envy-Free Solutions*.
