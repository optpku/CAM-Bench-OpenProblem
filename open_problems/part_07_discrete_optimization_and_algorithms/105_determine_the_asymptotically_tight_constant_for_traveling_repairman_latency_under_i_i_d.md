# Determine the asymptotically tight constant for traveling repairman latency under i.i.d. sampling

This file contains the open problem on Determine the asymptotically tight constant for traveling repairman latency under i.i.d. sampling.

---

<a id="problem-1"></a>

## 1. Determine the asymptotically tight constant for traveling repairman latency under i.i.d. sampling

Source paper authors: Moïse Blanchard, Alexandre Jacquillat, Patrick Jaillet

### 1. Problem Background

Let $K\subset \mathbb{R}^2$ be a compact set, and let $X_1,\dots,X_n$ be i.i.d. random points drawn from a distribution on $K$ whose absolutely continuous part has density $f$ (with respect to Lebesgue measure).

Given a realization $V=\{X_1,\dots,X_n\}$, a (repairman) tour is an ordering $x_1,\dots,x_n$ of the points, interpreted as the sequence in which they are visited, together with travel at unit speed along straight-line (Euclidean) segments.

For an ordering $x_1,\dots,x_n$, define the latency (waiting time) of the $i$-th visited point $x_i$ as
$$

\ell_i := \sum_{j=1}^{i-1} \|x_{j+1}-x_j\|,

$$
with the convention $\ell_1=0$. The traveling repairman problem (TRP), also called the minimum latency problem, minimizes the total latency
$$

L_{\mathrm{TRP}}(x_1,\dots,x_n) := \sum_{i=1}^n \ell_i
= \sum_{i=1}^{n-1} (n-i)\,\|x_{i+1}-x_i\|.

$$
Let $l_{\mathrm{TRP}}(X_1,\dots,X_n)$ denote the optimal value (minimum) of $L_{\mathrm{TRP}}$ over all orderings.

For comparison, the Euclidean traveling salesman problem (TSP) tour length on $V$, denoted $l_{\mathrm{TSP}}(X_1,\dots,X_n)$, is the minimum over cyclic tours of the total Euclidean length. Under i.i.d. sampling, the Beardwood–Halton–Hammersley (BHH) theorem implies
$$

\frac{l_{\mathrm{TSP}}(X_1,\dots,X_n)}{\sqrt{n}} \to \beta_{\mathrm{TSP}} \int_K \sqrt{f(x)}\,dx
\quad \text{a.s.}

$$
for a universal constant $\beta_{\mathrm{TSP}}$.

### 2. Open Problem

**Question 1.1.** Determine whether the constant $\beta_{\mathrm{TSP}}$ is the asymptotically tight constant governing the leading-order growth of the expected optimal TRP total latency.

Concretely, decide whether one has an asymptotic equivalence of the form
$$

\mathbb{E}\bigl[l_{\mathrm{TRP}}(X_1,\dots,X_n)\bigr] \sim \beta_{\mathrm{TSP}}\, n\sqrt{n}\, \iint_{K\times K} g_f(x,y)\,dx\,dy
\quad \text{as } n\to\infty,

$$
(or an equivalent characterization with leading constant $\beta_{\mathrm{TSP}}$), where $g_f$ is the distribution-dependent integrand used to express the TRP scaling in constant-factor bounds.

Equivalently, determine the exact leading universal constant in the $\Theta(n\sqrt{n})$ asymptotics for $\mathbb{E}[l_{\mathrm{TRP}}]$, and whether it matches the TSP constant $\beta_{\mathrm{TSP}}$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #85 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4385350470_p0/partial_progress/85.pdf)

### 4. Source and Verification

- **Source paper:** Moïse Blanchard, Alexandre Jacquillat, Patrick Jaillet, [*Probabilistic Bounds on the <i>k</i>-Traveling Salesman Problem and the Traveling Repairman Problem*](https://doi.org/10.1287/moor.2021.0286), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 29, Section 6 (Conclusion).
- **Area:** traveling repairman problem
- **Keywords:** `traveling repairman problem`, `minimum latency`, `Euclidean random optimization`, `asymptotic constant`, `Beardwood-Halton-Hammersley constant`, `probabilistic bounds`
- **Upstream problem record:** [W4385350470_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4385350470_p0&n=85&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Moïse Blanchard, Alexandre Jacquillat, Patrick Jaillet, [*Probabilistic Bounds on the <i>k</i>-Traveling Salesman Problem and the Traveling Repairman Problem*](https://doi.org/10.1287/moor.2021.0286), Mathematics of Operations Research, 2023.
