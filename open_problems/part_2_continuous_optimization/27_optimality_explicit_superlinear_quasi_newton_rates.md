# Optimality of Explicit Superlinear Rates for Classical Quasi-Newton Methods

This file contains the open problem on matching lower bounds for the explicit local superlinear rates of BFGS and DFP.

---

<a id="problem-1"></a>

## 1. Are the Known BFGS and DFP Superlinear Rates Sharp?

Contributors: Yang Liu

### 1. Problem Background

Classical local theory shows that BFGS and DFP converge superlinearly under suitable smoothness, strong-convexity, initialization, and step-acceptance assumptions. Recent nonasymptotic analyses make this statement explicit. For example, on strongly convex objectives with a Lipschitz Hessian near the minimizer, bounds of the schematic form
$$
\|x_k-x^\star\|
\le
C\left(\frac{C_0}{k}\right)^{k/2}
\|x_0-x^\star\|
$$
are available. More detailed results expose dimension and condition-number factors; representative bounds include
$$
\left(\frac{nL^2}{\mu^2k}\right)^{k/2}
\quad\text{for DFP},\qquad
\left(\frac{nL}{\mu k}\right)^{k/2}
\quad\text{for BFGS},
$$
under the assumptions and notation of the corresponding analyses.

These are upper bounds. They do not by themselves show that the exponent, dimension dependence, condition-number dependence, or onset of the superlinear phase is unavoidable for the classical algorithms.

### 2. Open Problems

**Question 1.1. Matching lower bounds.** For a clearly specified function class and the classical BFGS or DFP algorithm, construct lower-bound instances matching the best known explicit local superlinear upper bounds up to universal constants or lower-order factors.

A complete formulation should fix:

- the smoothness, strong-convexity, and Hessian-Lipschitz parameters;
- the dimension and admissible initialization neighborhood;
- the initialization of the Hessian approximation;
- whether unit steps, exact line search, or Armijo--Wolfe search is used; and
- the performance measure, such as distance, gradient norm, or objective error.

**Question 1.2. Sharp rate or proof artifact.** Is the characteristic $(1/k)^{k/2}$ behavior intrinsic to classical BFGS and DFP on these classes, or can the upper bound be improved? If it is not sharp, determine the correct worst-case local rate and the correct dependence on dimension and condition number.

**Question 1.3. Separation between BFGS and DFP.** Do the different parameter dependences in current BFGS and DFP upper bounds reflect a genuine worst-case separation, or only differences in analysis?

### 3. Desired Form of a Resolution

A lower bound should exhibit an explicit family of functions and initial states, or an interpolation/adversarial construction, for which the actual iterates attain the claimed slow behavior. An improved upper bound should apply to the unmodified classical method under the same function class and initialization model used for comparison.

### 4. Known Results

Jin and Mokhtari established a local nonasymptotic rate of order $(1/k)^{k/2}$ for BFGS and DFP under strong convexity and local Hessian regularity. Rodomanov and Nesterov independently derived explicit rates with dimension and condition-number dependence for classical methods in the convex Broyden class. No matching lower bound for these classical-algorithm rates is presently known in the formulation of this problem.

### 5. References

1. Q. Jin and A. Mokhtari, **Non-asymptotic Superlinear Convergence of Standard Quasi-Newton Methods**, *Mathematical Programming*, 200:425--473, 2023; arXiv:2003.13607.
2. A. Rodomanov and Y. Nesterov, **Rates of Superlinear Convergence for Classical Quasi-Newton Methods**, *Mathematical Programming*, 194:159--190, 2022; arXiv:2003.09174.
