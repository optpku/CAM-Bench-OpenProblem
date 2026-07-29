# Achieve quota, population monotonicity, and ex-ante proportionality without varying house size

This file contains the open problem on Achieve quota, population monotonicity, and ex-ante proportionality without varying house size.

---

<a id="problem-1"></a>

## 1. Achieve quota, population monotonicity, and ex-ante proportionality without varying house size

Source paper authors: Javier Cembrano, José Correa, Ulrike Schmidt-Kraepelin, Alexandros Tsigonias-Dimitriadis, Víctor Verdugo

### 1. Problem Background

An apportionment instance is a pair $(p,H)$ with $p=(p_1,\dots,p_n)\in\mathbb{N}^n$ (state populations) and $H\in\mathbb{N}$ (house size). Let $P=\sum_{i=1}^n p_i$ and define the quota of state $i$ as $q_i=\frac{p_i}{P}H$.

An (integer) apportionment vector is $x=(x_1,\dots,x_n)\in\mathbb{N}_0^n$ with $\sum_{i=1}^n x_i=H$. A (possibly randomized) apportionment method outputs such a vector for each instance.

Quota compliance means that for every instance and every state $i$, the realized allocation satisfies $x_i\in\{\lfloor q_i\rfloor,\lceil q_i\rceil\}$.

Population monotonicity is the standard strong monotonicity requirement: when populations change so that the ratio $p_i/p_j$ weakly increases in favor of state $i$ (relative to state $j$), then it must not happen that $i$ loses a seat while $j$ gains a seat (formally, the method must avoid such pairwise monotonicity violations across any two instances $(p,H)$ and $(p',H')$).

A randomized method is ex-ante proportional if for every instance and every state $i$, the expectation equals quota: $\mathbb{E}[X_i]=q_i$, where $X$ is the random apportionment vector.

The paper constructs randomized methods that satisfy quota compliance, population monotonicity, and ex-ante proportionality by allowing the realized total number of seats $\sum_i X_i$ to deviate from $H$ (variable house size), while still meeting $H$ in expectation.

### 2. Open Problem

**Question 1.1.** Design (or characterize the existence of) a randomized apportionment method that, for every instance $(p,H)$, outputs an integer apportionment vector $X\in\mathbb{N}_0^n$ with $\sum_{i=1}^n X_i=H$ almost surely, and simultaneously satisfies:

1) Quota compliance: for all $i\in[n]$, $X_i\in\{\lfloor q_i\rfloor,\lceil q_i\rceil\}$ almost surely.

2) Population monotonicity (in the strong pairwise-ratio sense described above).

3) Ex-ante proportionality: for all $i\in[n]$, $\mathbb{E}[X_i]=q_i$.

Equivalently, determine whether such a method exists without allowing ex-post deviation from the house size $H$, and if it does, provide a construction/characterization.

### 3. Known Results

The source paper (Cembrano et al., 2024) isolates a central tension in apportionment: deterministic population-monotone rules are essentially divisor methods (Balinski--Young), but divisor methods can violate quota; randomization over stationary divisor methods still leaves worst-case expected quota deviation linear in $H$ (Proposition 4). The paper then shows that if one relaxes the fixed-house constraint ex post (allowing $\sum_i X_i\neq H$ but keeping $\mathbb E[\sum_i X_i]=H$), one can simultaneously achieve quota compliance, strong population monotonicity, and ex-ante proportionality via randomized fixed-divisor methods (Theorem 2), with deviation from $H$ controlled by concentration bounds.

The open problem asks whether the same triple of properties can be achieved while keeping $\sum_i X_i=H$ almost surely. The only forward-citing work provided here, "Online Proportional Apportionment", does not resolve the static question, but it establishes a sharp impossibility threshold in an online model: for $n\ge 4$, no randomized online method can simultaneously keep the per-step house size fixed, satisfy an ex-post quota-type guarantee at all times, and be ex-ante proportional at each step. Although online constraints are stronger than the one-shot setting and the paper does not incorporate the strong population-monotonicity axiom, its flow-based characterizations and impossibility constructions suggest that enforcing exact house size together with both ex-post quota and exact ex-ante proportionality may face fundamental obstructions beyond the variable-house approach.

At present, based on the supplied citation analysis, there is no known construction or impossibility theorem that settles the fixed-house, quota-compliant, population-monotone, ex-ante proportional randomized method in the classic one-shot model. Promising directions include adapting the network-flow/polyhedral characterizations used for house-monotone quota methods (as in the source paper’s Section 5) to incorporate population monotonicity constraints, or extracting static impossibility instances by compressing the online impossibility gadgets into two-instance comparisons that witness population-monotonicity violations.

#### 3.1 Upstream solution and partial-progress records

- [Solution #33 (PDF)](https://pranav-nuti.github.io/open-problems-in-or/data/llm_math_export/solution_progress/W4415178980_p0/solutions/33.pdf)

### 4. Source and Verification

- **Source paper:** Javier Cembrano, José Correa, Ulrike Schmidt-Kraepelin, Alexandros Tsigonias-Dimitriadis, Víctor Verdugo, [*New Combinatorial Insights for Monotone Apportionment*](https://doi.org/10.1287/moor.2024.0817), Mathematics of Operations Research, 2025.
- **Location in paper:** Section 6 (Discussion), page 23.
- **Area:** randomized apportionment
- **Keywords:** `apportionment`, `population monotonicity`, `quota compliance`, `randomized methods`, `ex-ante proportionality`, `house size constraint`
- **Upstream problem record:** [W4415178980_p0](https://pranav-nuti.github.io/open-problems-in-or/problem.html?id=W4415178980_p0&n=33&journal=Mathematics+of+Operations+Research)
- **Verification status:** Unverified. Generated from the paper text only and not independently verified as still open.

This entry was imported from the Open Problems in Operations Research collection. Its inclusion does not independently confirm that the problem is correctly stated or remains unresolved.

### 5. References

1. Javier Cembrano, José Correa, Ulrike Schmidt-Kraepelin, Alexandros Tsigonias-Dimitriadis, Víctor Verdugo, [*New Combinatorial Insights for Monotone Apportionment*](https://doi.org/10.1287/moor.2024.0817), Mathematics of Operations Research, 2025.
2. [*Online Proportional Apportionment*](https://doi.org/10.1137/1.9781611978971.174).
