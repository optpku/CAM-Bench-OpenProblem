# Determine whether Golden Parachutes arise with an impatient agent setting

This file contains the open problem on Determine whether Golden Parachutes arise with an impatient agent setting.

---

<a id="problem-1"></a>

## 1. Determine whether Golden Parachutes arise with an impatient agent setting

Source paper authors: Dylan Possamaï, Nizar Touzi

### 1. Problem Background

Consider Sannikov’s continuous-time principal–agent model with moral hazard over an endogenous retirement time.

1) Output and effort. The output process $X$ is observed and evolves under the agent’s effort process $\alpha=(\alpha_t)_{t\ge0}$ as
$$
dX_t=\alpha_t\,dt+\sigma\,dW_t,\qquad \sigma>0,
$$
where $W$ is a Brownian motion under the measure induced by $\alpha$. The effort $\alpha_t$ takes values in a compact set $A\subset[0,\infty)$ containing $0$. The agent incurs instantaneous cost $h(\alpha_t)$, where $h:[0,\infty)\to[0,\infty)$ is increasing, strictly convex, $C^1$, and $h(0)=0$. Denote $\beta:=h'(0)$.

2) Contract. A contract $C=(\tau,\pi,\xi)$ consists of a stopping time $\tau$ (retirement time), a nonnegative predictable payment rate $\pi_t$ paid up to $\tau$, and a nonnegative lump-sum payment $\xi$ at time $\tau$.

3) Preferences and discounting. The agent has discount rate $r>0$ and flow utility $u(\pi_t)$ from consumption, where $u:[0,\infty)\to[0,\infty)$ is increasing, strictly concave, $C^2$ on $(0,\infty)$, with $u(0)=0$ and Inada tail condition $\lim_{x\to\infty}u'(x)=0$. The principal is risk-neutral with discount rate $\rho>0$. Let $\delta:=r/\rho$.

4) Agent’s value for a contract $C$. For a given effort $\alpha$, the agent’s expected utility is
$$
J_A(C,\alpha)=\mathbb E\Big[e^{-r\tau}u(\xi)+\int_0^{\tau} r e^{-rs}\big(u(\pi_s)-h(\alpha_s)\big)\,ds\Big].
$$
The agent chooses $\alpha$ to maximize $J_A(C,\alpha)$, and the contract must satisfy a participation constraint $V_A(C)\ge u(R)$ for some reservation level $R\ge0$.

5) Principal’s value. Anticipating the agent’s optimal response, the principal chooses $C$ to maximize her discounted expected payoff.

6) “Golden Parachute” (as defined in the paper). A Golden Parachute exists if there is an optimal contract $(\tau^*,\pi^*,\xi^*)$ such that $\tau^*>0$ and $\mathbb P(\xi^*>0)>0$, i.e., the agent is retired at a strictly positive time and receives a positive post-retirement payment (lump-sum and/or equivalent lifetime stream).

7) Regime of interest. The paper distinguishes regimes by $\delta$. The open issue below concerns the case $\delta>1$, i.e., the agent is strictly more impatient than the principal.

### 2. Open Problem

**Question 1.1.** In the above model, focus on the regime $\delta=r/\rho>1$ (agent strictly more impatient than the principal). Let $V(y)$ denote the principal’s value when the agent’s continuation utility is held at level $y\ge0$, and let $F$ denote the (face-lifted) retirement reward function against which retirement is compared.

Determine whether the associated optimal stopping threshold $y_{\mathrm{gp}}\in[0,\infty]$ at which the principal retires the agent is finite or infinite, i.e. decide whether the stopping region $\{y: V(y)=F(y)\}$ takes the form $\{0\}\cup[y_{\mathrm{gp}},\infty)$ with $y_{\mathrm{gp}}<\infty$ (existence of a Golden Parachute), or whether in general $y_{\mathrm{gp}}=\infty$ (no Golden Parachute), in the regime $\delta>1$.

### 3. Known Results

In Possamaï–Touzi’s reformulation of Sannikov’s model with endogenous retirement, the principal’s second-best value as a function of the agent’s continuation utility $y$ solves an infinite-horizon 1D obstacle problem $\min\{V(y)-F(y),\;LV(y)\}=0$, where the obstacle $F$ is a face-lifted retirement reward capturing the principal’s ability (when discount rates differ) to postpone retirement while keeping the agent indifferent via a deterministic post-retirement consumption plan. The open issue is precisely whether, in the impatient-agent regime $\delta=r/\rho>1$, the stopping set $\{V=F\}$ has a finite upper boundary $[y_{\mathrm{gp}},\infty)$ (Golden Parachute) or whether the boundary is at infinity (no Golden Parachute). The source paper proves structural results (e.g., $\{V=F\}=\{0\}\cup[y_{\mathrm{gp}},\infty)$ under concavity assumptions) but explicitly leaves open whether $y_{\mathrm{gp}}<\infty$ can be guaranteed for $\delta>1$; their numerics suggest that $V$ may stay strictly above $F$ for all $y>0$ in some $\delta>1$ parameterizations.

Forward citations largely develop tools and adjacent models rather than resolving this free-boundary question. Lin–Ren–Touzi–Yang’s “Random horizon principal-agent problems” provides a general reduction of random-horizon principal–agent Stackelberg games to control/optimal stopping problems in the continuation-utility state, thereby supplying a rigorous pathway to derive the relevant HJB/obstacle equation in broad settings, but it does not analyze the $\delta>1$ boundary behavior. “Golden parachutes under the threat of accidents” extends the face-lifting/termination-reward analysis to models with jump accidents and derives explicit variational inequalities for the face-lifted reward under $\delta>1$, yet it still does not characterize the stopping region $\{v^{SB}=\bar F\}$ (hence does not decide finiteness of a retirement threshold). Several works in PPP or ambiguity extensions (e.g., “Optimal stopping contract for public private partnerships under moral hazard” and “Moral Hazard, Dynamic Incentives, and Ambiguous Perceptions”) similarly reduce to 1D variational inequalities/HJBI equations and often exhibit finite stopping thresholds in numerics or assume such a structure for verification, but they do not prove the finiteness/infinity dichotomy in the original Sannikov/Possamaï–Touzi $\delta>1$ regime.

Overall, based on the provided forward-citation set, there is no paper that proves $y_{\mathrm{gp}}<\infty$ or $y_{\mathrm{gp}}=\infty$ in general for $\delta>1$ in the Brownian drift-control model with face-lifted obstacle $F$. The problem therefore remains open. Promising directions suggested by the literature include: (i) exploiting the dual formulation in terms of $p=V'(y)$ (as in the source paper’s dual ODE heuristics for $\delta>1$) to obtain sharp asymptotics of $V-F$ as $y\to\infty$; (ii) establishing comparison/monotonicity properties that would force eventual contact with the obstacle or preclude it; and (iii) combining the general random-horizon reduction and viscosity/regularity techniques with parameter-restricted explicit examples to delineate regions of $\delta>1$ where contact must (or cannot) occur.

#### 3.1 Upstream solution and partial-progress records

- [Solution #73 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4226226337_p0/solutions/73.pdf)

### 4. Source and Verification

- **Source paper:** Dylan Possamaï, Nizar Touzi, [*Is There a Golden Parachute in Sannikov’s Principal–Agent Problem?*](https://doi.org/10.1287/moor.2022.0305), Mathematics of Operations Research, 2024.
- **Location in paper:** Page 9, Remark 3.5(iii) (end of Section 3.1, before Section 3.2).
- **Area:** principal agent optimal stopping
- **Keywords:** `continuous-time principal-agent`, `optimal stopping`, `viscosity solutions`, `dynamic contracting`, `discounting`, `golden parachute`
- **Upstream problem record:** [W4226226337_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4226226337_p0&n=73&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Dylan Possamaï, Nizar Touzi, [*Is There a Golden Parachute in Sannikov’s Principal–Agent Problem?*](https://doi.org/10.1287/moor.2022.0305), Mathematics of Operations Research, 2024.
2. [*Random horizon principal-agent problems*](https://doi.org/10.1137/20M1321620).
3. [*Golden parachutes under the threat of accidents*](https://doi.org/10.1111/mafi.12448).
4. [*Optimal stopping contract for public private partnerships under moral hazard*](https://arxiv.org/abs/1910.05538).
5. *Moral Hazard, Dynamic Incentives, and Ambiguous Perceptions*.
6. *Contracting with discretionary bonuses*.
7. *Contrat optimal pour les partenariats public-privé avec aléa moral: une approche de contrôle stochastique*.
