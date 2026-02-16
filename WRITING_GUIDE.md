# Writing Guide for Open Sozna Research

This guide explains how to add new entries to your research notebook, including advanced features like images and LaTeX math.

## 1. Creating a New Entry

All entries live in `src/content/entries/`.

1.  **Create a file:** Create a new Markdown (`.md`) file in that folder.
2.  **Naming convention:** It is recommended to use a numbering system combined with a slug for organization, though the site sorts by date.
    *   Example: `002-consciousness-hard-problem.md`
    *   Example: `003-mathematical-framework.md`

## 2. Frontmatter (Required)

Every file **must** start with a "frontmatter" block enclosed by `---`.

```markdown
---
title: "The Hard Problem of Consciousness"
date: 2026-02-17
tags: ["consciousness", "philosophy"]
subtitle: "Why functionalism fails to explain qualia."
---
```

### Fields:

*   **`title`** (Required): The main headline of the entry.
*   **`date`** (Required): The date of publication in `YYYY-MM-DD` format. Used for sorting.
*   **`tags`** (Required): A list of tags. These automatically generate filter pages.
    *   Format: `["tag1", "tag2"]`
    *   *Note: Tags are case-sensitive. "Meta" and "meta" will be treated as different tags.*
*   **`subtitle`** (Optional): A secondary headline displayed in a serif italic font below the title.

## 3. Adding Images

The easiest way to add images is to place them in the `public/images/` folder.

1.  Place your image file (e.g., `neural-network.png`) into `public/images/`.
2.  Reference it in your Markdown like this:

    ```markdown
    ![Diagram of a neural network](/images/neural-network.png)
    ```

    *Note: Notice the path starts with `/images/`, not `public/images/`.*

## 4. Mathematics (LaTeX)

The site supports LaTeX math rendering via KaTeX.

### Inline Math
Wrap expressions in single dollar signs `$`.

*   **Input:** `Let $f(x) = x^2$ be the function.`
*   **Output:** Let $f(x) = x^2$ be the function.

### Block Math
Wrap equations in double dollar signs `$$` for a centered block.

*   **Input:**
    ```markdown
    $$
    \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
    $$
    ```

*   **Output:** (Renders a centered equation)

## 5. Code Blocks
Syntax highlighting is enabled by default. Use triple backticks with the language name.

```python
def consciousness(self):
    return self.qualia
```

## 6. Managing Tags

Tags are dynamic. You do not need to "create" a tag anywhere else.
*   Simply adding `tags: ["new-topic"]` to an entry will automatically:
    1.  Add "new-topic" to the sidebar filter list.
    2.  Create a dedicated page at `/tags/new-topic`.
    3.  Group all entries with this tag together.

## 7. Previewing Locally

To see your changes as you write:

1.  Open your terminal in the project folder.
2.  Run: `npm run dev`
3.  Visit `http://localhost:4321`.

The site will live-reload whenever you save a file.