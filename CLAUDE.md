# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Build production bundle
npm run lint      # Run Oxlint
npm run preview   # Preview production build locally
```

No test runner is configured.

## Architecture

Minimal React 19 + Vite SPA. JavaScript (JSX) only — no TypeScript.

- `index.html` → `src/main.jsx` — bootstraps React root
- `src/App.jsx` — sole application component (counter + layout)
- `src/index.css` — global styles, CSS variables, light/dark mode via `prefers-color-scheme`
- `src/App.css` — component-scoped styles

Linter is **Oxlint** (not ESLint); config in `.oxlintrc.json` with React and Oxc plugins enabled. Vite uses the Oxc-based `@vitejs/plugin-react` transform.
