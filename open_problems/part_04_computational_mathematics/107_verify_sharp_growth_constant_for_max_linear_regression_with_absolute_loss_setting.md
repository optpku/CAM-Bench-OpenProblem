# Verify sharp growth constant for max-linear regression with absolute loss setting

This file contains the open problem on Verify sharp growth constant for max-linear regression with absolute loss setting.

---

<a id="problem-1"></a>

## 1. Verify sharp growth constant for max-linear regression with absolute loss setting

Source paper authors: Vasileios Charisopoulos, Damek Davis

### 1. Problem Background

Let $a_1,\dots,a_m\in\mathbb{R}^d$ be given measurement vectors and let $\bar y\in\mathbb{R}^m$ be given observations. For an integer $r\ge 1$, define parameters $\beta=(\beta_1,\dots,\beta_r)$ with $\beta_j\in\mathbb{R}^d$. Define the max-linear predictor
$$

\hat y_i(\beta):=\max_{j\in\{1,\dots,r\}}\langle \beta_j,a_i\rangle,\qquad i=1,\dots,m.

$$
Consider the nonsmooth objective
$$

f(\beta):=\frac{1}{m}\sum_{i=1}^m \bigl|\bar y_i-\hat y_i(\beta)\bigr|.

$$
Let $f^*:=\inf_{\beta} f(\beta)$ and $X^*:=\operatorname{argmin} f$ denote the optimal value and set of minimizers (assumed nonempty). For $x$ in a Euclidean space, $\mathrm{dist}(x,X^*):=\inf_{z\in X^*}\|x-z\|$.

### 2. Open Problem

**Question 1.1.** Determine conditions (and/or prove in the intended statistical model) under which there exists $\mu>0$ and a neighborhood $U$ of a minimizer $\bar\beta\in X^*$ such that the sharp growth (error bound) inequality
$$

f(\beta)-f^*\ge \mu\,\mathrm{dist}(\beta,X^*)\qquad\text{for all }\beta\in U

$$
holds for the max-linear regression objective $f$ defined above.

### 3. Known Results

The open problem from Charisopoulos--Davis asks for verifiable conditions ensuring local sharp growth $f(\beta)-f^*\ge \mu\,\mathrm{dist}(\beta,X^*)$ for max-linear regression with absolute loss. In the source paper, sharp growth (Assumption (A1)) is the key regularity enabling linear convergence of Polyak-type subgradient steps and, when combined with (b)-regularity/semismoothness (Assumption (A2)), yields the superlinear improvement mechanism of PolyakBundle and the SuperPolyak scheme. The max-linear absolute-loss objective is semialgebraic and piecewise linear (hence semismooth/(b)-regular is plausible), but the missing ingredient is precisely (A1): a data/model-dependent error bound constant $\mu$ near $X^*$.

Forward-citing work largely develops algorithmic and variational-analytic frameworks that take growth/error bounds as assumptions rather than proving them for the max-linear regression model. Gebken's Goldstein-subdifferential analyses provide quantitative consequences of sharp ($p=1$) or higher-order growth combined with semismoothness-type properties, translating approximate criticality into distance-to-solution bounds; these results would become directly applicable once sharp growth is established for the regression objective. Trust-region and higher-order cutting-plane/bundle papers similarly show that sharp growth (or quadratic growth under nondegeneracy) implies strong local decrease properties and superlinear convergence of serious steps for finite max-type functions, again emphasizing the value of proving $\mu>0$ for the target model.

Overall, none of the analyzed forward citations appears to settle the model-specific sharp growth verification for max-linear regression with $\ell_1$ loss; the problem therefore remains open in the sense posed by the source paper. Promising directions suggested by the surrounding literature are to (i) exploit the piecewise-linear structure to reduce sharp growth to a polyhedral error bound (e.g., via metric subregularity of a KKT/normal-map system), and (ii) identify nondegeneracy conditions on the active max-indices and residual signs at $\bar\beta$ that rule out flat directions (ensuring a positive linear growth modulus).

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #87 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4385878155_p0/partial_progress/87.pdf)

### 4. Source and Verification

- **Source paper:** Vasileios Charisopoulos, Damek Davis, [*A Superlinearly Convergent Subgradient Method for Sharp Semismooth Problems*](https://doi.org/10.1287/moor.2023.1390), Mathematics of Operations Research, 2023.
- **Location in paper:** Section 5.2.2 (Max-linear regression and PolyakSGM), page 38
- **Area:** max linear regression
- **Keywords:** `nonsmooth optimization`, `sharp growth`, `error bounds`, `max-linear regression`, `semialgebraic functions`, `subgradient methods`
- **Upstream problem record:** [W4385878155_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4385878155_p0&n=87&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Vasileios Charisopoulos, Damek Davis, [*A Superlinearly Convergent Subgradient Method for Sharp Semismooth Problems*](https://doi.org/10.1287/moor.2023.1390), Mathematics of Operations Research, 2023.
2. *Analyzing the speed of convergence in nonsmooth optimization via the Goldstein subdifferential with application to descent methods*.
3. [*Analyzing the Speed of Convergence in Nonsmooth Optimization via the Goldstein subdifferential: B. Gebken*](https://doi.org/10.1007/s10957-025-02748-8).
4. *Enclosing minima in nonsmooth optimization via trust regions of higher-order cutting-plane models*.
5. *Superlinear convergence in nonsmooth optimization via higher-order cutting-plane models*.
6. *A Globalized Semismooth Newton Method for Prox-regular Optimization Problems*.
