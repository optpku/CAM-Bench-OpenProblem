# Large-deviation bounds for stake-volume Markov chain in intermediate deviation regime

This file contains the open problem on Large-deviation bounds for stake-volume Markov chain in intermediate deviation regime.

---

<a id="problem-1"></a>

## 1. Large-deviation bounds for stake-volume Markov chain in intermediate deviation regime

Source paper authors: Wenpin Tang, David D. Yao

### 1. Problem Background

Consider the discrete-time, nondecreasing Markov chain $(N_t)_{t\ge 0}$ on $\{N,N+1,\dots\}$ defined by $N_0=N\in\mathbb{N}_+$ and the one-step transition
$$

N_{t+1}=\begin{cases}
N_t+1,&\text{with probability }N_t^{-\alpha},\\
N_t,&\text{with probability }1-N_t^{-\alpha},
\end{cases}
\qquad t\ge 0,

$$
where $\alpha>0$ is fixed. (Equivalently, the increment $\Delta_t:=N_{t+1}-N_t\in\{0,1\}$ is Bernoulli with parameter $N_t^{-\alpha}$ conditional on $N_t$.)

A deterministic growth scale for $N_t$ is $t^{1/(1+\alpha)}$, and the paper studies tail probabilities of the form $\mathbb{P}(N_t\le \lambda t^{1/(1+\alpha)})$ and $\mathbb{P}(N_t\ge \lambda t^{1/(1+\alpha)})$ as $t\to\infty$. It introduces the rate function
$$

f_\alpha(\lambda)=(1+\alpha)\lambda\log\lambda-(1+\alpha)\lambda+\lambda^{-\alpha},\qquad \lambda>0.

$$
This function has two positive roots $\lambda_-(\alpha)<\lambda_+(\alpha)$ and satisfies $f_\alpha(\lambda)>0$ for $\lambda\in(0,\lambda_-(\alpha))\cup(\lambda_+(\alpha),\infty)$. The paper proves exponential tail bounds with exponent proportional to $t^{1/(1+\alpha)}$ in those two outer regimes.

The chain also has a natural “threshold” constant $(1+\alpha)^{1/(1+\alpha)}$ coming from the deterministic fluid-limit scaling $N_t\approx ((1+\alpha)t)^{1/(1+\alpha)}$, so the intermediate regime $\lambda\in(\lambda_-(\alpha),\lambda_+(\alpha))$ contains this threshold.

### 2. Open Problem

**Question 1.1.** Prove large-deviation-type exponential bounds for $N_t$ on the intermediate scale $t^{1/(1+\alpha)}$ for deviation parameters $\lambda\in(\lambda_-(\alpha),\lambda_+(\alpha))$. Concretely, establish upper bounds of the form
$$

\mathbb{P}\bigl(N_t\le \lambda t^{1/(1+\alpha)}\bigr)\le \exp\bigl(-c_-(\lambda)\,t^{1/(1+\alpha)}\bigr),\qquad
\mathbb{P}\bigl(N_t\ge \lambda t^{1/(1+\alpha)}\bigr)\le \exp\bigl(-c_+(\lambda)\,t^{1/(1+\alpha)}\bigr)

$$
for appropriate strictly positive rate functions $c_-(\lambda),c_+(\lambda)$ throughout $\lambda\in(\lambda_-(\alpha),\lambda_+(\alpha))$, and in particular up to (or “right off”) the threshold $(1+\alpha)^{1/(1+\alpha)}$.

### 3. Known Results

No relevant Scholar-organic forward citations were available for this problem. The forward-citation review therefore cannot identify follow-up work that resolves or materially advances the problem.

#### 3.1 Upstream solution and partial-progress records

- [Solution #109 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4391601457_p0/solutions/109.pdf)

### 4. Source and Verification

- **Source paper:** Wenpin Tang, David D. Yao, [*Polynomial Voting Rules*](https://doi.org/10.1287/moor.2023.0080), Mathematics of Operations Research, 2024.
- **Location in paper:** Appendix, Section 5.1 (page 20).
- **Area:** large deviations
- **Keywords:** `large deviations`, `Markov chains`, `proof of stake`, `urn models`, `fluid limits`, `concentration inequalities`
- **Upstream problem record:** [W4391601457_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4391601457_p0&n=109&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Wenpin Tang, David D. Yao, [*Polynomial Voting Rules*](https://doi.org/10.1287/moor.2023.0080), Mathematics of Operations Research, 2024.
