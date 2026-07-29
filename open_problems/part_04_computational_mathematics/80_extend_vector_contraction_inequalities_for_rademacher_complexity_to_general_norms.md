# Extend vector-contraction inequalities for Rademacher complexity to general norms

This file contains the open problem on Extend vector-contraction inequalities for Rademacher complexity to general norms.

---

<a id="problem-1"></a>

## 1. Extend vector-contraction inequalities for Rademacher complexity to general norms

Source paper authors: Othman El Balghiti, Adam N. Elmachtoub, Paul Grigas, Ambuj Tewari

### 1. Problem Background

Let $\mathcal X$ be an input (feature) space and $\mathcal H$ be a class of vector-valued hypotheses $f:\mathcal X\to\mathbb R^d$. Fix an i.i.d. sample $x_1,\dots,x_n\in\mathcal X$. The (multivariate) empirical Rademacher complexity of $\mathcal H$ is
$$

\widehat{\mathfrak R}_n(\mathcal H):=\mathbb E_{\sigma}\Big[\sup_{f\in\mathcal H}\frac{1}{n}\sum_{i=1}^n \sigma_i^\top f(x_i)\Big],

$$
where $\sigma_1,\dots,\sigma_n\in\{\pm1\}^d$ have i.i.d. Rademacher coordinates and $\mathbb E_\sigma$ denotes expectation over these signs.

Let $\|\cdot\|$ be a norm on $\mathbb R^d$. Consider a real-valued function $\phi:\mathbb R^d\to\mathbb R$ that is $L$-Lipschitz with respect to $\|\cdot\|$, i.e.,
$$

|\phi(u)-\phi(v)|\le L\,\|u-v\|\quad\text{for all }u,v\in\mathbb R^d.

$$
Define the composed scalar class $\phi\circ\mathcal H:=\{x\mapsto \phi(f(x)):\ f\in\mathcal H\}$. Its empirical Rademacher complexity is
$$

\widehat{\mathfrak R}_n(\phi\circ\mathcal H):=\mathbb E_{\epsilon}\Big[\sup_{f\in\mathcal H}\frac{1}{n}\sum_{i=1}^n \epsilon_i\,\phi(f(x_i))\Big],

$$
where $\epsilon_1,\dots,\epsilon_n\in\{\pm1\}$ are i.i.d. Rademacher signs.

A vector-contraction inequality is a bound that controls $\widehat{\mathfrak R}_n(\phi\circ\mathcal H)$ in terms of $L$ and $\widehat{\mathfrak R}_n(\mathcal H)$ (or a closely related complexity), possibly with a constant depending on the choice of norm $\|\cdot\|$. Known general results (e.g., Maurer 2016) provide such inequalities in the case $\|\cdot\|=\|\cdot\|_2$, and some related results exist for $\|\cdot\|_\infty$, but general norms (including general $\ell_q$ norms) are not covered by the currently available contraction tools referenced by the paper.

### 2. Open Problem

**Question 1.1.** Develop a vector-contraction inequality for empirical Rademacher complexity for Lipschitz maps under a general norm $\|\cdot\|$ on $\mathbb R^d$: find conditions and an explicit bound of the form
$$

\widehat{\mathfrak R}_n(\phi\circ\mathcal H)\le C(\|\cdot\|)\,L\,\widehat{\mathfrak R}_n(\mathcal H)

$$
(or an analogous bound in terms of a suitable multivariate Rademacher complexity), where $\phi:\mathbb R^d\to\mathbb R$ is $L$-Lipschitz with respect to $\|\cdot\|$, $\mathcal H\subseteq\{f:\mathcal X\to\mathbb R^d\}$, and $C(\|\cdot\|)$ is an explicit constant or function of the norm, extending the known $\ell_2$-based vector-contraction inequality to general norms (including general $\ell_q$ norms).

### 3. Known Results

In the NeurIPS 2019 SPO generalization paper, the margin-based bounds for strongly convex feasible regions hinge on showing that the $\gamma$-margin SPO loss is Lipschitz in the dual norm $\|\cdot\|_*$ (Theorem 3), and then converting this Lipschitz property into a Rademacher complexity bound via Maurer’s vector-contraction inequality. The authors explicitly restrict the final contraction step to the $\ell_2$ setting (Theorem 4) because the most general available vector contraction tool they cite (Maurer 2016) is Euclidean; they note only partial analogues for $\ell_\infty$ and leave general norms (including $\ell_q$) open.

The forward-citing literature provided here does not resolve this contraction question. Instead, multiple subsequent predict-then-optimize and learning-to-optimize works (e.g., Integrated conditional estimation-optimization; Decision-focused learning with directional gradients; End-to-end learning to warm-start for real-time quadratic optimization; Risk bounds and calibration for a smart predict-then-optimize method) continue to formulate Lipschitzness and stability in $\ell_2$ precisely so that Maurer’s $\ell_2$ vector contraction can be applied. This pattern reinforces that a norm-dependent contraction inequality $\widehat{\mathfrak R}_n(\phi\circ\mathcal H)\le C(\|\cdot\|)L\,\widehat{\mathfrak R}_n(\mathcal H)$ would have immediate impact by allowing analyses to align with the natural geometry of the decision/parameter spaces.

On the tools side, work on uniform convexity/smoothness of norm balls (Local and global uniform convexity conditions) suggests a plausible route: in Banach-space language, contraction constants typically depend on type/cotype or uniform smoothness parameters of $(\mathbb R^d,\|\cdot\|)$ and its dual. However, none of the cited papers actually prove a Maurer-style vector contraction inequality for general norms or provide explicit constants for $\ell_q$ beyond the known special cases. Thus, based on the provided forward citations, the problem remains open; promising directions include leveraging Banach-space type/smoothness (especially for $\ell_q$, Schatten-$q$, and group norms) to obtain explicit $C(\|\cdot\|)$ and identifying the right multivariate complexity notion that matches $\|\cdot\|$ and $\|\cdot\|_*$.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #55 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W2947637889_p0/partial_progress/55.pdf)

### 4. Source and Verification

- **Source paper:** Othman El Balghiti, Adam N. Elmachtoub, Paul Grigas, Ambuj Tewari, [*Generalization Bounds in the Predict-Then-Optimize Framework*](https://doi.org/10.1287/moor.2022.1330), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 2, Introduction (discussion following margin-based bounds and contraction lemmas); reiterated on page 8, start of Section 4.2 (margin-based generalization bounds).
- **Area:** rademacher complexity
- **Keywords:** `rademacher complexity`, `vector contraction`, `lipschitz functions`, `general norms`, `ell_q norms`, `generalization bounds`
- **Upstream problem record:** [W2947637889_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W2947637889_p0&n=55&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Othman El Balghiti, Adam N. Elmachtoub, Paul Grigas, Ambuj Tewari, [*Generalization Bounds in the Predict-Then-Optimize Framework*](https://doi.org/10.1287/moor.2022.1330), Mathematics of Operations Research, 2023.
2. [*Integrated conditional estimation-optimization*](https://doi.org/10.1287/opre.2023.0427).
3. *Decision-focused learning with directional gradients*.
4. [*Local and global uniform convexity conditions*](https://doi.org/10.1007/978-3-032-03844-9_4).
5. *Risk bounds and calibration for a smart predict-then-optimize method*.
6. *End-to-end learning to warm-start for real-time quadratic optimization*.
7. *On learning latent models with multi-instance weak supervision*.
