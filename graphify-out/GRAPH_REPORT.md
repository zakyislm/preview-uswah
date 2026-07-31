# Graph Report - .  (2026-08-01)

## Corpus Check
- 68 files · ~324,206 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 64 nodes · 66 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Core Dependencies
- UI Pages & Ornaments
- Dev Dependencies
- Package Scripts
- Layout & Shared UI
- JS Compiler Config
- ESLint Config
- Next Config
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `Navbar()` - 3 edges
3. `Sparkle()` - 3 edges
4. `Clover()` - 3 edges
5. `StarMotif()` - 3 edges
6. `cn()` - 3 edges
7. `compilerOptions` - 2 edges
8. `clsx` - 2 edges
9. `next` - 2 edges
10. `react` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.jsx → src/lib/utils.js

## Import Cycles
- None detected.

## Communities (12 total, 4 thin omitted)

### Community 0 - "Core Dependencies"
Cohesion: 0.18
Nodes (11): clsx, next, dependencies, clsx, next, react, react-dom, tailwind-merge (+3 more)

### Community 1 - "UI Pages & Ornaments"
Cohesion: 0.33
Nodes (5): LdfCarousel(), Clover(), GeometricFret(), Sparkle(), StarMotif()

### Community 2 - "Dev Dependencies"
Cohesion: 0.22
Nodes (9): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tailwindcss (+1 more)

### Community 3 - "Package Scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 4 - "Layout & Shared UI"
Cohesion: 0.33
Nodes (4): metadata, Footer(), Navbar(), cn()

## Knowledge Gaps
- **21 isolated node(s):** `eslintConfig`, `paths`, `nextConfig`, `name`, `version` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Core Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `paths`, `nextConfig` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._