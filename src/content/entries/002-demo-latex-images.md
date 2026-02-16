---
title: "Demo: LaTeX & Media"
date: 2026-02-17
tags: ["meta", "demo", "mathematics"]
subtitle: "A quick demonstration of how to use images and math in your entries."
---

This entry exists to demonstrate the capabilities of the research notebook. You can reference it when writing new entries.

## 1. Mathematics (LaTeX)

We use KaTeX for rendering mathematical notation. It's fast and supports most LaTeX commands.

### Inline Math

You can write math inline by wrapping it in single dollar signs `$`.

For example, the famous equation $E=mc^2$ relates energy and mass. Or perhaps something more complex like $e^{i\pi} + 1 = 0$.

### Block Math

For larger equations, use double dollar signs `$$` to center them on their own line.

The Gaussian integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

Maxwell's equations in differential form:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

## 2. Images

To add an image:
1.  Place the image file in the `public/images/` folder.
2.  Reference it using standard Markdown syntax: `![Alt Text](/images/filename.png)`.

*Example: A majestic cat demonstrating the `public/images/` workflow.*

![A very round cat](/images/fat-cat.jpg)

## 3. Code Blocks

Syntax highlighting is built-in.

```python
import numpy as np

def simulate_neuron(input_signal):
    """
    A simple simulation of a neuron firing.
    """
    threshold = 0.5
    if np.sum(input_signal) > threshold:
        return "FIRE"
    return "QUIET"
```

And that's it! Everything is designed to be as simple as writing in a notebook.