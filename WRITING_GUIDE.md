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
    *   *Note: Tags are case-sensitive. "Meta" and "meta" will be treated as different tags. Tags in the sidebar show the count of entries for each tag in parentheses.*
*   **`subtitle`** (Optional): A secondary headline displayed in a serif italic font below the title.

## 3. Adding Images

The easiest way to add images is to place them in the `public/images/` folder.

1.  Place your image file (e.g., `neural-network.png`) into `public/images/`.
2.  Reference it in your Markdown like this:

    ```markdown
    ![Diagram of a neural network](/Open-Sozna-research/images/neural-network.png)
    ```

    *Note: The path must include your repository name (`/Open-Sozna-research/images/`) for GitHub Pages compatibility.*

## Site Structure

- **Homepage (`/`)**: A minimal landing page with your name, description, and a link to start reading.
- **Entries list (`/entries`)**: A page listing all research entries.
- **Individual entries (`/entries/[slug]`)**: Full entry pages with navigation.
- **Tag pages (`/tags/[tag]`)**: Filtered views of entries by tag.

The sidebar shows:
- Tag filters with entry counts (e.g., `consciousness (3)`)
- Recent entries (up to 5)
- A link to view all entries

## 4. Concept Dropdowns

You can embed reusable concept explanations in any entry using the `:::concept` directive. Use these when you hit a point where the reader needs background to follow your argument — don't force them, let them flow naturally.

### Syntax

```markdown
This relates to the idea of dynamical systems.

:::concept{name="dynamical-system"}
:::

Continuing with the main text...
```

**Important:** The syntax is exact — three colons, `concept`, the name in quotes, then three colons on a new line.

### How it works:
1. Create a concept file in `src/content/concepts/` (e.g., `manifold.md`)
2. Use frontmatter with a `title` field
3. Reference it in any entry with `:::concept{name="manifold"}`
4. The dropdown shows the concept title, expands to reveal the full explanation
5. Concepts support LaTeX math just like entries

### Example concept file (`src/content/concepts/manifold.md`):
```markdown
---
title: "Manifold"
---

[Write your explanation here — your voice, your understanding, wrong turns and all.]
```

Concepts are shared across entries — define once, reference anywhere.

## 5. Mathematics (LaTeX)

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

## 6. Code Blocks
Syntax highlighting is enabled by default. Use triple backticks with the language name.

```python
def consciousness(self):
    return self.qualia
```

## 7. Managing Tags

Tags are dynamic. You do not need to "create" a tag anywhere else.
*   Simply adding `tags: ["new-topic"]` to an entry will automatically:
    1.  Add "new-topic" to the sidebar filter list.
    2.  Create a dedicated page at `/tags/new-topic`.
    3.  Group all entries with this tag together.

## 8. Feedback & Reader Engagement

Every entry has a feedback form at the bottom (linked to Tally). Readers can:
- Report what's confusing
- Suggest what to write next
- Vote on which concept to explore

### Creating Custom Polls/Votes

To add a poll to an entry, create a new Tally form and embed it:

1. Go to **tally.so** and create a new form
2. Add questions (multiple choice, rating, text, etc.)
3. Get the form URL
4. Add a link in your entry:

```markdown
[Vote: What should I tackle next?](YOUR_TALLY_URL)
```

### Tally Form Types You Can Use

| Use Case | Question Type | Example |
|----------|--------------|---------|
| **Next topic vote** | Multiple choice | "What concept next: A, B, or C?" |
| **Clarity check** | Rating 1-5 | "How clear was this section?" |
| **Background check** | Multiple choice | "Your math level: None / Some / Advanced" |
| **Crowdsource solutions** | Text + Multiple choice | "What's the best approach to X?" |
| **Entry preferences** | Ranking | "Rank these topics by interest" |

**Note:** Tally doesn't auto-email you on submissions. Check your Tally dashboard regularly, or set up Zapier to send notifications to your email/Discord.

## 9. Previewing Locally

To see your changes as you write:

1.  Open your terminal in the project folder.
2.  Run: `npm run dev`
3.  Visit `http://localhost:4321`.

The site will live-reload whenever you save a file.