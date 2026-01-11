# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 
---

# antdviteallthreepkgs

A small demo/workspace that showcases multiple rich editors and grid components inside a Vite + React app. It contains example integrations for:

- Ant Design UI (`antd`)
- AG Grid (`ag-grid-react`)
- Handsontable (`@handsontable/react`)
- ReactGrid (`@silevis/reactgrid`)
- FortuneSheet (`@fortune-sheet/react`)
- Lexical and Tiptap rich text editors

This repo is useful as a reference for integrating several complex UI editors into a single React application bootstrapped with Vite.

## Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

## Quick start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Project structure (important files)

- `src/` — application source
	- `App.jsx` — app entry + main layout
	- `main.jsx` — React bootstrap
	- `components/` — example components and editor integrations
		- `AgGridExample.jsx`
		- `HandsontableExample.jsx`
		- `ReactGridExample.jsx`
		- `TiptapEditor.jsx`
		- `LexicalEditor.jsx`
		- `FortuneSheet/` — `FortuneSheetCustom.jsx`, `index.jsx`

## Notes about included libraries

- The project includes many heavy UI/editor libraries. If you only need a subset, remove unused dependencies from `package.json` to slim installs and builds.
- Some editors require global CSS; check the individual example files in `src/components/` for usage notes (e.g., `tiptap.css`, `lexical.css`).

## Adding a new editor example

1. Add a new component under `src/components/`.
2. Import any required CSS/assets in that component or `src/index.css`.
3. Register a route or add the component to `App.jsx` for local testing.

## Troubleshooting

- If you run into peer dependency warnings, try installing the peer package versions recommended by the editor packages.
- For editor rendering issues, inspect the browser console for missing CSS or DOM container sizing problems.

## Contributing

Contributions and PRs are welcome — prefer small, focused changes. Open an issue if you plan larger refactors.

## License

This repository has no license set. Add one if you intend to open-source it.

---

If you want, I can also:

- Add badges and a short demo GIF to `README.md`.
- Create per-example README files inside `src/components/`.
- Convert the project to TypeScript and enable type-aware ESLint rules.

Tell me which you'd like next.
