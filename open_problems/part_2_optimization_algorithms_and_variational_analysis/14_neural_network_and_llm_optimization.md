# Neural Network and LLM Optimization

This file collects open questions about optimization landscapes and algorithm design for neural networks and large language models.

---

<a id="problem-1"></a>

## 1. Optimization Questions for Neural Networks and LLMs

Contributors: Ruoyu Sun

### 1. Problem Background

Modern neural network training is driven by large-scale nonconvex optimization. Empirically, gradient-based methods often reach useful solutions despite severe overparameterization, nonconvexity, stochasticity, and complicated architecture-dependent effects. The open questions below ask for mathematical explanations of this behavior and for optimization principles that can guide better algorithms for neural networks and LLMs.

### 2. Open Problems

**Question 1.1. Landscape of regularized deep networks.** For regularized neural networks with more than two layers, can one prove that there are no suboptimal local minima under natural assumptions on the data, architecture, and regularizer?

**Question 1.2. Convergence to global minima.** For mildly wide neural networks with at least two neurons, can one prove that gradient descent converges to a global minimizer under mild and checkable assumptions? What width, initialization, step-size, and data conditions are sufficient without making the model unrealistically overparameterized?

**Question 1.3. Adam, Muon, and SGD.** Can one characterize when adaptive or matrix-normalized methods such as Adam and Muon are faster than SGD? A satisfactory theory should identify structural properties of the loss, noise, curvature, or parameterization that predict the relative advantage of these methods.

**Question 1.4. Better algorithm design.** Can one design optimization algorithms for neural networks that reliably improve over Adam, Muon variants, and SGD, while retaining scalability and robustness in modern training regimes?

**Question 1.5. Better local minima in LLMs.** Can one design algorithms that converge to better local minima for large language models, in a way that is visible in downstream performance rather than only in training loss?

**Question 1.6. Self-improvement training.** Is there an optimization-based explanation for self-improvement training, including settings related to SePT? Can self-improvement be formalized as descent, implicit regularization, landscape reshaping, or a fixed-point/stability phenomenon?

**Question 1.7. Continual learning.** Can continual learning be formulated as an optimization problem whose landscape and algorithmic properties explain stability-plasticity tradeoffs, forgetting, and adaptation across tasks?

### 3. Desired Outcomes

Useful progress may take the form of a theorem for a realistic model class, a counterexample separating popular algorithms, a predictive criterion for optimizer choice, or a new algorithm with both theoretical support and convincing training evidence.
