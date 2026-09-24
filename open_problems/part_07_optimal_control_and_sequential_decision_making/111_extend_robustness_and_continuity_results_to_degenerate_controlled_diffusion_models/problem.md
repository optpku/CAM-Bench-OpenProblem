# Extend robustness and continuity results to degenerate controlled diffusion models

This file contains the open problem on Extend robustness and continuity results to degenerate controlled diffusion models.

---

<a id="problem-1"></a>

## 1. Extend robustness and continuity results to degenerate controlled diffusion models

Source paper authors: Somnath Pradhan, Serdar Yüksel

### 1. Problem Background

Consider a controlled diffusion process
$$
dX_t = b(X_t,U_t)\,dt + \sigma(X_t)\,dW_t, \qquad X_0=x\in\mathbb{R}^d,
$$
where $W$ is a $d$-dimensional standard Wiener process, the action space $U$ is a compact metric space, and $U_t$ is an admissible (non-anticipative) control. The running cost is a bounded continuous function $c:\mathbb{R}^d\times U\to\mathbb{R}_+$. For each control policy $\pi$ (e.g., Markov or stationary Markov controls), one considers standard performance criteria such as:

1) Discounted cost for $\alpha>0$:
$$
J_\alpha^{\pi}(x;c)=\mathbb{E}^{\pi}_x\Big[\int_0^\infty e^{-\alpha t} c(X_t,U_t)\,dt\Big],\qquad V_\alpha(x)=\inf_{\pi} J_\alpha^{\pi}(x;c).
$$

2) Ergodic (long-run average) cost:
$$
\mathcal{E}_x(c,\pi)=\limsup_{T\to\infty}\frac{1}{T}\,\mathbb{E}^{\pi}_x\Big[\int_0^T c(X_t,U_t)\,dt\Big],\qquad \mathcal{E}^*(c)=\inf_x\inf_{\pi}\mathcal{E}_x(c,\pi).
$$

3) Finite-horizon cost for a horizon $T>0$ and terminal cost $H$:
$$
J_T^{\pi}(x;c)=\mathbb{E}^{\pi}_x\Big[\int_0^T c(X_t,U_t)\,dt + H(X_T)\Big],\qquad J_T^*(x;c)=\inf_{\pi}J_T^{\pi}(x;c).
$$

The paper studies an approximation setting in which a sequence of models $(b_n,\sigma_n,c_n)$ converges to $(b,\sigma,c)$ (in a sense ensuring pointwise convergence in the state and continuous convergence in control actions), with associated state processes
$$
dX_t^{(n)} = b_n(X_t^{(n)},U_t)\,dt + \sigma_n(X_t^{(n)})\,dW_t.

$$
For each model one has the corresponding optimal values $V_{\alpha}^{(n)}$, $\mathcal{E}^{*(n)}(c_n)$, $J_{T}^{*(n)}(x;c_n)$, and one may compare the performance of controls optimized for the approximate model when applied to the true model.

A key standing condition used throughout the paper is uniform nondegeneracy (uniform ellipticity) of the diffusion term: letting $a(x)=\tfrac12\sigma(x)\sigma(x)^\top$, one assumes that for each radius $R>0$ there exists $C_R>0$ such that
$$
z^\top a(x) z \ge C_R^{-1}\,|z|^2 \qquad \forall x\in B_R,\ \forall z\in\mathbb{R}^d,
$$
(and similarly for $a_n$). This nondegeneracy assumption enables strong regularity theory for the associated Hamilton--Jacobi--Bellman (HJB) equations and is central to the continuity/robustness proofs in the paper.

A diffusion is called degenerate if the corresponding covariance matrix $a(x)$ fails to be uniformly positive definite (e.g., is singular in some directions, at some states, or on sets of positive measure).

### 2. Open Problem

**Question 1.1.** Develop an analogue of the paper's continuity and robustness theory for controlled diffusion models when the limiting (true) diffusion is degenerate, i.e., when the uniform nondegeneracy/ellipticity condition on $a(x)=\tfrac12\sigma(x)\sigma(x)^\top$ is dropped and $a(x)$ may be singular.

Concretely: under a suitable convergence notion for approximating models $(b_n,\sigma_n,c_n)\to (b,\sigma,c)$, determine conditions under which (for one or more of the criteria discounted, ergodic, finite-horizon, or exit-time) the optimal values of the approximate models converge to the optimal value of the true (degenerate) model, and the performance loss from applying an optimal control of the approximate model to the true model vanishes in the limit.

### 3. Known Results

Pradhan--Y\"uksel (arXiv:2205.05894v2, 2023) develop a PDE-based continuity/robustness theory for controlled diffusions under discounted, ergodic (near-monotone or Lyapunov), finite-horizon, and exit-time criteria. A central technical pillar is local uniform ellipticity (Assumption (A3)), which yields Sobolev/Schauder regularity for HJB equations, compactness of value-function families in $W^{2,p}$, and It\^o--Krylov representations enabling both value convergence $V^n\to V$ and asymptotic optimality transfer when applying $n$-optimal controls to the limit model.

Forward-citing work to date provides partial progress but does not remove ellipticity. The regime-switching extension proves analogous continuity/robustness results for weakly coupled HJB systems, again under local uniform ellipticity, and thus mainly maps where ellipticity enters and what would need replacement in a degenerate setting. The rough-path robustness paper proves policy-wise continuity and near-optimality transfer for Lipschitz feedback controls under near-Brownian noise perturbations; while it still assumes uniform nondegeneracy to access classical HJB theory for the idealized model, its rough-path continuity arguments are largely independent of ellipticity and suggest a promising tool for establishing continuity of $J^\pi$ for fixed (regular) feedbacks even when $\sigma$ is degenerate.

Overall, the open problem remains to develop a full analogue of Pradhan--Y\"uksel robustness when the limiting diffusion is degenerate: one needs conditions ensuring existence/approximation of optimal controls and convergence of optimal values without relying on uniformly elliptic PDE regularity or strong Feller properties. Promising directions include (i) viscosity-solution stability for degenerate HJB equations combined with measurable selection/relaxed controls, (ii) hypoelliptic regularity under H\"ormander-type conditions when degeneracy is structured, and (iii) probabilistic/MDP discretization approaches (e.g., Wasserstein-regular kernel continuity) that bypass elliptic PDE estimates.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #92 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4387578519_p0/partial_progress/92.pdf)

### 4. Source and Verification

- **Source paper:** Somnath Pradhan, Serdar Yüksel, [*Robustness of Stochastic Optimal Control to Approximate Diffusion Models Under Several Cost Evaluation Criteria*](https://doi.org/10.1287/moor.2022.0134), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 31, Section 8 (Conclusion)
- **Area:** controlled diffusions
- **Keywords:** `controlled diffusions`, `robustness`, `model approximation`, `degenerate diffusion`, `HJB equations`, `elliptic regularity`
- **Upstream problem record:** [W4387578519_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4387578519_p0&n=92&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Somnath Pradhan, Serdar Yüksel, [*Robustness of Stochastic Optimal Control to Approximate Diffusion Models Under Several Cost Evaluation Criteria*](https://doi.org/10.1287/moor.2022.0134), Mathematics of Operations Research, 2023.
2. [*Robustness of optimal controlled diffusions with near-brownian noise via rough paths theory*](https://doi.org/10.1007/s00498-026-00439-x).
3. *Robustness of optimal control for controlled regime-switching diffusions with incorrect models*.
4. *Robustness to Model Approximation, Model Learning From Data, and Sample Complexity in Wasserstein Regular MDPs*.
