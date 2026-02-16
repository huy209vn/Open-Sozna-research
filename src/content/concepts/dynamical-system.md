---
title: "Dynamical System"
---

A **dynamical system** is a system in which a function describes the time dependence of a point in a geometrical space.

## Formal Definition

Given a state space $X$ and a time set $T$ (typically $\mathbb{R}$ or $\mathbb{Z}$), a dynamical system is a map:

$$
\Phi: T \times X \to X
$$

satisfying:
- $\Phi(0, x) = x$ (identity)
- $\Phi(t + s, x) = \Phi(t, \Phi(s, x))$ (semigroup property)

## Types

| Type | Time | Space | Example |
|------|------|-------|---------|
| ODEs | Continuous | Continuous | $\dot{x} = f(x)$ |
| Maps | Discrete | Continuous | $x_{n+1} = f(x_n)$ |
| CA | Discrete | Discrete | Game of Life |

## Neural Applications

Neural networks can be viewed as dynamical systems where:
- **State**: Activities of all neurons
- **Dynamics**: Evolution according to connection weights and inputs
- **Attractors**: Stable patterns representing memories or decisions
