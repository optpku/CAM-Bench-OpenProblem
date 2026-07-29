# Uniqueness in law criteria for weak solutions of multidimensional Ito SDEs

This file contains the open problem on Uniqueness in law criteria for weak solutions of multidimensional Ito SDEs.

---

<a id="problem-1"></a>

## 1. Uniqueness in law criteria for weak solutions of multidimensional Ito SDEs

Source paper authors: Stefan Ankirchner, Nabil Kazi-Tani, Julian Wendt, Chao Zhou

### 1. Problem Background

Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\ge 0},\mathbb P)$ be a filtered probability space supporting a standard $d$-dimensional Brownian motion $W$. Consider the It\^o stochastic differential equation (SDE)
$$

 dX_t = b(t,X_t)\,dt + \sigma(t,X_t)\,dW_t,\qquad X_0=x\in\mathbb R^d,

$$
where $b:[0,T]\times\mathbb R^d\to\mathbb R^d$ and $\sigma:[0,T]\times\mathbb R^d\to\mathbb R^{d\times d}$ are Borel measurable coefficients. A \emph{weak solution} is a tuple $(\Omega',\mathcal F',(\mathcal F'_t)_{t\ge 0},\mathbb P',W',X')$ such that $W'$ is a Brownian motion and $X'$ is an adapted continuous process satisfying the SDE in the It\^o sense under $\mathbb P'$.

The SDE is said to have \emph{uniqueness in law} (also called \emph{weak uniqueness}) if for any two weak solutions with the same initial condition $x$, the laws of the solution processes $(X_t)_{t\in[0,T]}$ on path space coincide. One often assumes some form of (uniform) nondegeneracy/ellipticity of $\sigma$, e.g. $\sigma\sigma^\top\ge \lambda I$ for some $\lambda>0$, but coefficients may still be merely measurable or discontinuous.

In the attached paper, the finite-player game dynamics lead to an $n$-dimensional SDE of the form
$$

 dX_t = D(t,X_t)\,dW_t,

$$
with diagonal diffusion matrix $D(t,x)$ whose diagonal entries are bounded between two positive constants $\sigma_1<\sigma_2$ (uniform ellipticity), but can be discontinuous as functions of $x$ because they arise from feedback controls. The paper notes that, in dimensions greater than 2, general necessary-and-sufficient conditions for uniqueness in law of such weak solutions are not known.

### 2. Open Problem

**Question 1.1.** For dimensions $d>2$, characterize (with conditions that are simultaneously sufficient and necessary) when the It\^o SDE
$$

 dX_t = b(t,X_t)\,dt + \sigma(t,X_t)\,dW_t,\qquad X_0=x\in\mathbb R^d,

$$
admits uniqueness in law of weak solutions.

In particular, determine such a sharp characterization for the driftless, uniformly elliptic case
$$

 dX_t = \sigma(t,X_t)\,dW_t,

$$
including the case where $\sigma(t,\cdot)$ may be discontinuous (e.g. piecewise constant) and may be restricted to be diagonal-valued.

### 3. Known Results

The open problem highlighted in the source paper concerns sharp (simultaneously necessary and sufficient) criteria for uniqueness in law of weak solutions to multidimensional It\^o SDEs with merely measurable, potentially discontinuous coefficients, even under uniform ellipticity. In the game-motivated setting, the diffusion matrix is diagonal with entries in $[\sigma_1,\sigma_2]$ but discontinuous in the state due to feedback (rank/threshold-type) controls; the paper stresses that while weak existence follows from classical uniformly elliptic theory (e.g. Krylov), weak uniqueness can fail in dimensions $d>2$, and no general characterization is known.

Among the forward-citing items provided, the most relevant progress is confined to one-dimensional driftless threshold diffusions (oscillating Brownian motion type). "Mean-field ranking games with diffusion control" proves equilibrium existence/uniqueness and $O(n^{-1/2})$ approximate Nash equilibria in a 1D setting with piecewise constant diffusion, relying on established 1D pathwise uniqueness results (Nakao-type). The other citing works are either methodological (PDE well-posedness for smooth controlled diffusions) or expository background, and do not address the multidimensional weak uniqueness characterization.

Overall, based on the provided forward citations, the problem remains open: there is still no known necessary-and-sufficient criterion for weak uniqueness for general uniformly elliptic, merely measurable (possibly diagonal/piecewise constant) diffusion coefficients in dimensions $d>2$. Promising directions suggested by the source context include identifying structural subclasses (e.g. diagonal coefficients with special discontinuity geometry, or coefficients of bounded variation in each coordinate) where the martingale problem is well posed, and clarifying the boundary between well-posedness and counterexamples in higher dimensions.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #70 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W3217525437_p0/partial_progress/70.pdf)

### 4. Source and Verification

- **Source paper:** Stefan Ankirchner, Nabil Kazi-Tani, Julian Wendt, Chao Zhou, [*Large Ranking Games with Diffusion Control*](https://doi.org/10.1287/moor.2023.1373), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 3, Section 1 (Introduction), footnote 1.
- **Area:** stochastic differential equations
- **Keywords:** `weak solutions`, `uniqueness in law`, `uniform ellipticity`, `ito sdes`, `multidimensional diffusion`, `measurable coefficients`
- **Upstream problem record:** [W3217525437_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W3217525437_p0&n=70&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Stefan Ankirchner, Nabil Kazi-Tani, Julian Wendt, Chao Zhou, [*Large Ranking Games with Diffusion Control*](https://doi.org/10.1287/moor.2023.1373), Mathematics of Operations Research, 2023.
2. [*Mean-field ranking games with diffusion control*](https://doi.org/10.1007/s11579-024-00354-2).
3. *Diffusion control and games*.
4. *Large ranking games*.
