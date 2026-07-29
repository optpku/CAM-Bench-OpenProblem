# Compute the exact competitive ratio for minimization fractional prophet inequalities without in-house production

This file contains the open problem on Compute the exact competitive ratio for minimization fractional prophet inequalities without in-house production.

---

<a id="problem-1"></a>

## 1. Compute the exact competitive ratio for minimization fractional prophet inequalities without in-house production

Source paper authors: Junjie Qin, Shai Vardi, Adam Wierman

### 1. Problem Background

Fix integers $n\ge 2$ and a real exponent $p>1$. Let $C_1,\dots,C_n$ be independent nonnegative random variables, where each $C_i$ has a distribution $D_i$ supported on a known interval $[\ell,u]$ with $0<\ell\le u<\infty$. A (causal) online procurement policy $\pi=(\pi_1,\dots,\pi_n)$ is a sequence of measurable functions $\pi_i:[\ell,u]^i\to[0,1]$. Given a realized cost vector $c=(c_1,\dots,c_n)$, the policy selects purchase quantities $x_i=\pi_i(c_1,\dots,c_i)$ satisfying the feasibility constraint $\sum_{i=1}^n x_i=1$ (interpreted as procuring one unit of a divisible commodity).

The incurred cost under monomial cost functions is
$$
\mathrm{ALG}_\pi(c,p):=\sum_{i=1}^n c_i x_i^p.
$$
The (offline) clairvoyant benchmark ("prophet") cost for realization $c$ is the optimal value
$$
\mathrm{OPT}(c,p):=\min_{x\in[0,1]^n}\ \sum_{i=1}^n c_i x_i^p\quad\text{s.t.}\quad \sum_{i=1}^n x_i=1.
$$
The competitive ratio for the family of all independent distributions supported on $[\ell,u]$ (and with no deterministic in-house option) is
$$
\mathrm{CR}(F,n):=\inf_{\pi}\ \sup_{(D_1,\dots,D_n)}\ \frac{\mathbb{E}[\mathrm{ALG}_\pi(C,p)]}{\mathbb{E}[\mathrm{OPT}(C,p)]},
$$
where the supremum ranges over all choices of independent $C_i\sim D_i$ supported on $[\ell,u]$, and expectations are with respect to $C=(C_1,\dots,C_n)$.

### 2. Open Problem

**Question 1.1.** Determine (in closed form, as a function of the parameters $p,n,\ell,u$) the value of
$$
\mathrm{CR}(F,n)=\inf_{\pi}\ \sup_{(D_1,\dots,D_n)}\ \frac{\mathbb{E}[\mathrm{ALG}_\pi(C,p)]}{\mathbb{E}[\mathrm{OPT}(C,p)]}
$$
for the minimization fractional prophet inequality described above in the setting without in-house production capabilities (i.e., when all $n$ costs $C_1,\dots,C_n$ are random and only constrained by support $[\ell,u]$).

### 3. Known Results

The open problem asks for a closed-form expression for the worst-case competitive ratio $\mathrm{CR}(F,n)$ in the minimization fractional prophet inequality for sequential procurement with convex monomial costs $\sum_i c_i x_i^p$ ($p>1$), feasibility $\sum_i x_i=1$, and independent costs supported on $[\ell,u]$, in the regime without an in-house deterministic option. The source paper establishes several anchor points: (i) for “well-behaved” distributions (invertible CDF with Lipschitz inverse) the ratio approaches 1 at rate $1+O(1/\log n)$ via a multi-threshold interval policy; (ii) with in-house production and only a lower support bound $[\ell,\infty)$, the exact ratio is $\bigl(1+(n-1)\ell^{-1/(p-1)}\bigr)^{p-1}$; and (iii) without in-house production, an exact formula is derived only for $n=p=2$: $\tfrac14(\sqrt{u/\ell}+\sqrt{\ell/u})+\tfrac12$. The paper also shows that, unlike the classical maximization prophet inequality, the worst case is not attained at $n=2$ and the ratio can be non-monotone in $n$, complicating attempts to generalize the $n=2$ analysis.

Among the forward citations provided, the only analyzed citing work studies a different minimization prophet model (single-choice stopping with i.i.d. observations) and focuses on asymptotics as $n\to\infty$, using extreme value theory to obtain closed-form asymptotic constants and to analyze multi-threshold versus single-threshold policies. Although this does not resolve the fractional procurement problem, it suggests that asymptotic characterizations (in $n$) may be tractable in restricted distributional regimes, and that multi-threshold structures can be optimal in minimization settings.

Overall, based on the available forward-citation evidence, the exact closed-form $\mathrm{CR}(F,n)$ for general $(p,n,\ell,u)$ without in-house production remains open beyond the special case $n=p=2$ and the asymptotic $\mathrm{CR}(F,n)\to 1$ result under regularity assumptions. Key gaps include identifying the worst-case independent distributions on $[\ell,u]$ for finite $n$ and understanding how the dynamic-program structure (e.g., the power-mean form of $\mathrm{OPT}$ and the induced recursion for optimal online policies) interacts with distributional extremizers when both numerator and denominator depend on the distributions.

#### 3.1 Upstream solution and partial-progress records

- [Partial progress #82 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4379646686_p0/partial_progress/82_for_80.pdf)
- [pipeline final 80](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4379646686_p0/partial_progress/pipeline_final_80.pdf)

### 4. Source and Verification

- **Source paper:** Junjie Qin, Shai Vardi, Adam Wierman, [*Minimization Fractional Prophet Inequalities for Sequential Procurement*](https://doi.org/10.1287/moor.2021.173), Mathematics of Operations Research, 2023.
- **Location in paper:** Page 6, Section 1.3 (Our results) and reiterated Page 18, Section 4.2 (More than two sellers)
- **Area:** prophet inequalities
- **Keywords:** `minimization prophet inequalities`, `sequential procurement`, `fractional allocations`, `competitive ratio`, `worst-case distributions`, `monomial cost functions`, `in-house production`
- **Upstream problem record:** [W4379646686_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4379646686_p0&n=80&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Junjie Qin, Shai Vardi, Adam Wierman, [*Minimization Fractional Prophet Inequalities for Sequential Procurement*](https://doi.org/10.1287/moor.2021.173), Mathematics of Operations Research, 2023.
2. [*Minimization iid prophet inequality via extreme value theory: A unified approach*](https://doi.org/10.1145/3736252.3742682).
