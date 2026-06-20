# Convex Polynomial and Semialgebraic Optimization

This file collects open problems about the complexity of minimizing convex polynomials and related semialgebraic optimization problems. A key distinction is between promise optimization, where the input polynomial is promised to be convex, and the harder task of detecting convexity while optimizing.

---

<a id="problem-1"></a>

## 1. Promise Convex Polynomial Optimization

Contributors: Jiawang Nie

### 1. Problem Background

Let
$$
f\in\mathbb{Q}[x_1,\ldots,x_n]
$$
be a rational polynomial, and consider
$$
f^\star=\inf_{x\in K} f(x),
$$
where $K$ may be $\mathbb{R}^n$, a rational polyhedron
$$
K=\{x\in\mathbb{R}^n:Ax\le b\},
$$
or a more general semialgebraic set.

The complexity question depends strongly on the input model. If one is merely promised that $f$ is convex, approximate minimization may be much easier than the problem of first deciding whether an arbitrary polynomial is convex. Convexity detection for quartic polynomials is already NP-hard, and convexity over a box is strongly NP-hard even for cubic polynomials.

### 2. Open Problems

**Question 1.1. Exact versus approximate convex polynomial minimization.** Under the promise that $f$ is convex, what is the precise complexity of exact minimization, exact optimal-value comparison, and exact minimizer representation? In particular, given a rational convex polynomial $f$, decide whether
$$
f^\star\le 0.
$$
Does this exact decision problem admit polynomial-time certificates comparable to those for linear or quadratic programming, or are algebraic-degree and bit-complexity obstructions unavoidable?

**Question 1.2. Strongly polynomial complexity.** For rational convex polynomial minimization over $\mathbb{R}^n$ or over a rational polyhedron, is there a strongly polynomial algorithm in an appropriate arithmetic or bit-complexity model? If approximate minimization is weakly polynomial via ellipsoid-type methods, can the dependence on coefficient bit-length be removed?

**Question 1.3. Convex semialgebraic constraints.** Let
$$
K=\{x:g_i(x)\le 0,\ i=1,\ldots,m\}
$$
be a convex semialgebraic set, and let $f$ be a convex polynomial. What is the complexity of minimizing $f$ over $K$ when convexity of $K$ is promised? Does a Lasserre or sum-of-squares hierarchy yield finite convergence or polynomial-degree certificates under natural regularity assumptions?

**Question 1.4. Certificates for convex polynomial optimality.** Characterize when a rational convex polynomial has short verifiable optimality certificates. Are there broad classes where optimality can be certified by SOS-convexity, KKT certificates, or low-degree Positivstellensatz representations?

### 3. Related Known Facts

Convex quadratic minimization is polynomial-time solvable. In contrast, deciding whether a quartic polynomial is globally convex is NP-hard, and related convexity, strict convexity, strong convexity, quasiconvexity, and pseudoconvexity detection problems are strongly NP-hard in degree four or higher.

For promise convex polynomial minimization, recent work suggests that approximate minimization over polyhedra may be polynomial-time solvable by ellipsoid methods once suitable solution-radius bounds are available. This makes exact complexity, strongly polynomial complexity, and semialgebraic constraints more natural open directions than a blanket NP-hardness conjecture for the approximate promise version.

### 4. References

1. Amir Ali Ahmadi, Alex Olshevsky, Pablo A. Parrilo, and John N. Tsitsiklis. NP-hardness of deciding convexity of quartic polynomials and related problems.
2. Amir Ali Ahmadi and Georgina Hall. On the complexity of detecting convexity over a box.
3. Hesse's Redemption: Efficient Convex Polynomial Programming.
