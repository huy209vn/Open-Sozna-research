# Open Sozna Research

This is a public research series — live documents of a theory being developed in real time.
Built with Astro, deployed to GitHub Pages.

## Running Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Adding New Entries

1. Create a new Markdown file in `src/content/entries/`.
2. Use the format `XXX-title-slug.md` (e.g., `002-second-entry.md`).
3. Add the required frontmatter:

```markdown
---
title: "Title Here"
date: 2026-02-16
tags: ["tag1", "tag2"]
subtitle: "Optional subtitle here."
---
```

## Available Tags

Common tags used in this research:
- `meta`
- `consciousness`
- `ethics`
- `alignment`
- `mathematics`
- `computation`

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.
