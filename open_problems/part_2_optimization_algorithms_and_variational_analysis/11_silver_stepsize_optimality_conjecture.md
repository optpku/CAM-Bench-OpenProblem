# Silver Stepsize Optimality Conjecture

This file contains the open problem on Silver Stepsize Optimality Conjecture.

---

<a id="problem-1"></a>

## 1. Silver Stepsize Optimality Conjecture

Contributors: Junyu Zhang

### 1. Problem Background
The Silver Stepsize Optimality Conjecture concerns the power and limitation of gradient descent when the only design freedom is the scalar stepsize sequence.

For smooth convex minimization, scalar-stepsize gradient descent has the form $x_{t+1}=x_t-\frac{h_t}{L}\nabla f(x_t)$, where the sequence $h_t$ is fixed in advance. The method does not use momentum, memory variables, auxiliary sequences, or adaptivity to observed gradients.

The silver stepsize schedule is a special nonconstant scalar schedule based on the silver ratio $\rho=1+\sqrt{2}$. It contains occasional large steps, some exceeding the usual descent threshold. Altschuler and Parrilo showed that this schedule can improve the worst-case convergence rate of gradient descent on smooth convex functions from the classical $O(1/n)$ rate to $O(n^{-\log_2\rho})$, where $\log_2\rho\approx 1.27$. The open problem asks whether this exponent is the best possible among all fixed scalar stepsize schedules for gradient descent on smooth convex functions, and whether analogous optimality remains true for finite-horizon minimax schedules and for projected or proximal variants. The relevant comparison is that constant-stepsize gradient descent gives $O(1/n)$, silver stepsizes give $O(n^{-\log_2\rho})\approx O(n^{-1.27})$, and Nesterov acceleration gives $O(1/n^2)$ but uses momentum. Finite-step optimality is known for short horizons such as $n=1,2,3$, while the general optimality proof remains open.

### 2. Definitions and Conventions
#### 2.1 Smooth convex objective class

Let $\mathcal{F}_{L,D}$ denote the class of pairs $(f,x_0)$ where $f$ is convex and $L$-smooth, has at least one minimizer $x^\ast$, and the initial point satisfies $\|x_0-x^\ast\|\le D$ for at least one minimizer $x^\ast$.

**Source:** Altschuler--Parrilo [1,2].

#### 2.2 Scalar-stepsize gradient descent

The scalar-stepsize gradient descent iteration is $x_{t+1}=x_t-\alpha_t\nabla f(x_t),$ where the stepsize sequence is fixed in advance. In the dimensionless normalization used in the silver-stepsize literature, one often writes $x_{t+1}=x_t-\frac{h_t}{L}\nabla f(x_t).$ The schedule is scalar and does not introduce momentum, memory variables, auxiliary sequences, or adaptivity to the observed gradients.

**Source:** Altschuler--Parrilo [1,2].

#### 2.3 Silver ratio and silver stepsize schedule

Let $\rho=1+\sqrt{2}.$ For lengths $n=2^k-1$, the silver schedule has the recursive construction $h^{(2n+1)}=[h^{(n)},\ 1+\rho^{k-1},\ h^{(n)}]$, with base schedule $h^{(1)}=[\sqrt{2}].$ Equivalently, using the $2$-adic valuation $\nu_2(i)$, the schedule can be written as $h_t=1+\rho^{\nu_2(t+1)-1}.$

**Source:** Altschuler--Parrilo [1,2].

### 3. Open Problems
**Question 1.1. Silver stepsize optimality among scalar schedules.** For smooth convex minimization over $\mathcal{F}_{L,D}$, is the silver stepsize schedule asymptotically optimal among all fixed scalar stepsize schedules for gradient descent?

Equivalently, does no scalar stepsize schedule without momentum, memory variables, auxiliary sequences, or adaptivity guarantee a worst-case objective-error decay exponent strictly larger than $\log_2\rho$ in the rate $O(n^{-\log_2\rho})?$

**Question 1.2. General finite-horizon minimax optimality.** For arbitrary $n$, can one solve or characterize the minimax problem $\min_{h\in\mathbb{R}^n}\max_{(f,x_0)\in\mathcal{F}_{L,D}} f(x_n)-f(x^\ast)$?

In particular, is the silver schedule asymptotically optimal for this minimax problem as $n\to\infty$?

**Question 1.3. Projected and proximal variants.** In constrained or composite convex optimization settings where projected gradient descent or proximal gradient descent is the appropriate scalar-stepsize method, do silver stepsizes retain the same accelerated exponent, and are they optimal among scalar schedules in those settings?

### 4. Known Results
#### 4.1 Silver stepsize convergence for smooth convex optimization

**Source:** Jason M. Altschuler and Pablo A. Parrilo, *Acceleration by Stepsize Hedging: Silver Stepsize Schedule for Smooth Convex Optimization*, Mathematical Programming 213, 1105--1118, 2025, Theorem 1.1.

Let $n=2^k-1$ for some integer $k\ge 1$. Let $f:\mathbb{R}^d\to\mathbb{R}$ be an $M$-smooth convex function, let $x_0\in\mathbb{R}^d$, and let $x^\ast$ be a minimizer of $f$. Run gradient descent for $n$ steps with $x_{t+1}=x_t-\frac{\alpha_t}{M}\nabla f(x_t)$, using the silver stepsize schedule $\alpha_t=1+\rho^{\nu_2(t+1)-1}$, where $\rho=1+\sqrt{2}$ and $\nu_2(t+1)$ is the $2$-adic valuation of $t+1$. Then the final iterate satisfies $f(x_n)-f(x^\ast)\le r_k M\|x_0-x^\ast\|^2$, where $r_k=\frac{1}{1+\sqrt{4\rho^{2k}-3}}$. In particular, $r_k\le \frac{1}{2n^{\log_2\rho}}$. Consequently, to guarantee $f(x_n)-f(x^\ast)\le \epsilon$, it suffices to take $n$ at least a constant multiple of $(\frac{M\|x_0-x^\ast\|^2}{2\epsilon})^{\log_\rho 2}$ iterations.

#### 4.2 Silver stepsize convergence for proximal gradient descent

**Source:** Jinho Bok and Jason M. Altschuler, *Accelerating Proximal Gradient Descent via Silver Stepsizes*, Proceedings of Machine Learning Research 291:421--453, 2025, Theorem 1.1.

Let $n=2^k-1$ for some integer $k\ge 1$. Let $f$ be an $M$-smooth convex function, let $h$ be a convex function, and define $F=f+h$. Let $x_0$ be an initial point, and let $x^\ast$ be a minimizer of $F$. Run proximal gradient descent for $n$ steps with the silver stepsize schedule. Then the final iterate $x_n$ satisfies $F(x_n)-F(x^\ast)\le \frac{\rho}{4\sqrt{2}\,n^{\log_2\rho}}M\|x_0-x^\ast\|^2$. Consequently, to guarantee $F(x_n)-F(x^\ast)\le \epsilon$, it suffices to take $n$ at least a constant multiple of $(\frac{M\|x_0-x^\ast\|^2}{\epsilon})^{\log_\rho 2}$ iterations.

### 5. References
1. Jason M. Altschuler and Pablo A. Parrilo, *Acceleration by stepsize hedging: Silver Stepsize Schedule for smooth convex optimization*, Mathematical Programming 213, 1105-1118, 2025.
2. Jason M. Altschuler and Pablo A. Parrilo, *Acceleration by Stepsize Hedging: Multi-Step Descent and the Silver Stepsize Schedule*, Journal of the ACM 72(2), 2025.
3. Jinho Bok and Jason M. Altschuler, *Accelerating Proximal Gradient Descent via Silver Stepsizes*, Proceedings of Machine Learning Research 291:421-453, 2025.
