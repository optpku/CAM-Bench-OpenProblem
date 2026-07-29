# Characterize DDPM low-dimensional adaptivity under Wasserstein or total variation metrics

This file contains the open problem on Characterize DDPM low-dimensional adaptivity under Wasserstein or total variation metrics.

---

<a id="problem-1"></a>

## 1. Characterize DDPM low-dimensional adaptivity under Wasserstein or total variation metrics

Source paper authors: Zhihan Huang, Yuting Wei, Yuxin Chen

### 1. Problem Background

Let $p_{\mathrm{data}}$ be a probability distribution on $\mathbb{R}^d$ with support $\mathcal{X}_{\mathrm{data}}\subseteq \mathbb{R}^d$. Consider the Ornstein--Uhlenbeck forward diffusion $(X_t)_{t\in[0,T]}$ defined by
$$

\mathrm{d}X_t = -X_t\,\mathrm{d}t + \sqrt{2}\,\mathrm{d}W_t,\qquad X_0\sim p_{\mathrm{data}},

$$
where $(W_t)$ is standard Brownian motion in $\mathbb{R}^d$. Let $q_t$ denote the law of $X_t$. The (Stein) score of $q_t$ is $s_t(x)=\nabla \log q_t(x)$.

The ideal reverse-time SDE associated with this forward process is
$$

\mathrm{d}Y_t = \bigl(Y_t + 2 s_{T-t}(Y_t)\bigr)\,\mathrm{d}t + \sqrt{2}\,\mathrm{d}B_t,\qquad Y_0\sim q_T,

$$
where $(B_t)$ is an independent standard Brownian motion, and in the ideal case $Y_{T-t}$ has the same law as $X_t$.

A denoising diffusion probabilistic model (DDPM) sampler operates in discrete time with a grid $0=t_0<t_1<\cdots<t_N<T$. Starting from $Y_{t_0}\sim \mathcal{N}(0,I_d)$, it iteratively updates $Y_{t_n}\mapsto Y_{t_{n+1}}$ using a particular combination of the current iterate, an estimate $\hat s_{T-t_n}$ of the score $s_{T-t_n}$, and fresh Gaussian noise (the precise coefficients are chosen so that this discrete-time procedure equals the time-discretization of a certain semi-linear reverse SDE).

Assume that $p_{\mathrm{data}}$ has an intrinsic dimension parameter $k$ in the sense that the Euclidean covering number of $\mathcal{X}_{\mathrm{data}}$ at a sufficiently small scale behaves like $\log N_{\mathrm{cover}}(\mathcal{X}_{\mathrm{data}},\|\cdot\|_2,\varepsilon_0)\lesssim k\log(1/\varepsilon_0)$. Let $p_{\mathrm{out}}$ denote the law of the DDPM output after $N$ steps (typically compared to $q_\delta$ for a small early-stopping time $\delta>0$).

Let $\mathrm{TV}(\cdot,\cdot)$ denote total variation distance and $W_2(\cdot,\cdot)$ denote the 2-Wasserstein distance on $\mathbb{R}^d$.

### 2. Open Problem

**Question 1.1.** Determine conditions under which the DDPM sampler, when targeting a distribution $p_{\mathrm{data}}$ of intrinsic dimension $k$, achieves convergence guarantees whose iteration complexity scales favorably with $k$ (rather than the ambient dimension $d$) when the distributional discrepancy between the DDPM output $p_{\mathrm{out}}$ and the target (e.g., $p_{\mathrm{data}}$ or a lightly noised version $q_\delta$) is measured in metrics other than KL divergence, such as total variation distance $\mathrm{TV}(q_\delta,p_{\mathrm{out}})$ or Wasserstein distance $W_2(q_\delta,p_{\mathrm{out}})$.

### 3. Known Results

In Huang--Wei--Chen (2026 revision of arXiv:2410.18784), DDPM is shown to be nearly optimally adaptive to intrinsic dimension $k$ when discrepancy is measured in KL: with a two-phase grid and early stopping $\delta$, one can achieve $\mathrm{KL}(q_\delta\|p_{\mathrm{out}})\lesssim \varepsilon^2$ using $N=\tilde O(k/\varepsilon^2)$ steps (Corollary 1). The paper explicitly leaves open whether analogous $k$-adaptive guarantees hold for stronger or different metrics such as total variation and Wasserstein distances.

The total-variation side has since been resolved in a sharp, intrinsic-dimension-adaptive way by "Low-dimensional adaptation of diffusion models: Convergence in total variation", which proves $\mathrm{TV}$ bounds of order $\tilde O(k/T)$ (plus score-error terms) for DDPM with the original Ho et al. coefficients, under the same type of metric-entropy/covering-number intrinsic dimension and bounded-support assumptions used to motivate $k$ in Huang--Wei--Chen. Closely related works develop complementary TV theories: Li--Yan's $O(d/T)$ theory gives a baseline $d$-dependent TV rate under minimal assumptions and shows how modified coefficients can yield $k$-dependent TV rates; probability-flow ODE analyses establish $\tilde O(k/T)$ TV convergence for DDIM-like samplers under similar intrinsic-dimension assumptions; and rectified-flow perspectives recover $\tilde O(k/N)$ TV control for DDPM-equivalent stochastic samplers via time change.

For Wasserstein metrics, the landscape is less complete for unconditional DDPM under the covering-number intrinsic dimension $k$. The strongest partial progress comes from end-to-end statistical/generalization analyses that bound $W_p$ (including $W_2$) with rates governed by intrinsic Wasserstein dimension notions, and from algorithmic results giving dimension-free $W_2$ (and sometimes TV) guarantees under compact-support-plus-Gaussian-convolution and Lipschitz score assumptions. There are also $W_2$ adaptivity results in guided diffusion (Doob matching) under a low-dimensional subspace model. A remaining gap is a direct, nonasymptotic $W_2(q_\delta,p_{\mathrm{out}})$ (or $W_2(p_{\mathrm{data}},p_{\mathrm{out}})$) bound for the vanilla DDPM discretization in the Huang--Wei--Chen OU/metric-entropy setting, with iteration complexity scaling as $\tilde O(k\,\mathrm{poly}(1/\varepsilon))$ and without imposing strong smoothness/log-concavity. Promising directions include combining the posterior-covariance/metric-entropy control ideas (used for KL and TV) with Wasserstein stability estimates for SDE discretizations, potentially via coupling/contractivity localized to the $k$-dimensional typical set, or by proving intrinsic-dimension versions of transportation inequalities that convert KL/TV control into $W_2$ under low-dimensional structure.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #48 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W7135205807_p0/partial_progress/48.pdf)

### 4. Source and Verification

- **Source paper:** Zhihan Huang, Yuting Wei, Yuxin Chen, [*Denoising Diffusion Probabilistic Models Are Optimally Adaptive to Unknown Low Dimensionality*](https://doi.org/10.1287/moor.2024.0769), Mathematics of Operations Research, 2026.
- **Location in paper:** Section 6 (Discussion), page 16.
- **Area:** diffusion model sampling
- **Keywords:** `diffusion models`, `DDPM`, `low-dimensional structure`, `Wasserstein distance`, `total variation distance`, `convergence rates`, `intrinsic dimension`
- **Upstream problem record:** [W7135205807_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W7135205807_p0&n=48&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Zhihan Huang, Yuting Wei, Yuxin Chen, [*Denoising Diffusion Probabilistic Models Are Optimally Adaptive to Unknown Low Dimensionality*](https://doi.org/10.1287/moor.2024.0769), Mathematics of Operations Research, 2026.
2. *Low-dimensional adaptation of diffusion models: Convergence in total variation*.
3. *Generalization Properties of Score-matching Diffusion Models for Intrinsically Low-dimensional Data*.
4. [*O (d/T) convergence theory for diffusion probabilistic models under minimal assumptions*](https://arxiv.org/abs/2409.18959).
5. *Adaptivity and convergence of probability flow ODEs in diffusion generative models*.
6. *High-accuracy and dimension-free sampling with diffusions*.
7. *Inference-Time Alignment for Diffusion Models via Variationally Stable Doob's Matching*.
8. *Low-Dimensional Adaptation of Rectified Flow: A New Perspective through the Lens of Diffusion and Stochastic Localization*.
