# FUSCION Website (Next.js)

A static Next.js site (App Router + Tailwind) exported for GitHub Pages.

## Local development

```powershell
npm run dev
```

Open http://localhost:3000 to view.

## Build (static export)

```powershell
npm run build
```

This uses `next export` via `output: 'export'` and writes to `out/`.

## Deploy to GitHub Pages

Push to `main` in the repo `willg02/Fuscion`. The workflow `.github/workflows/deploy.yml` will:

- Install dependencies
- Build and export
- Publish `out/` to GitHub Pages

Preview URL: `https://willg02.github.io/Fuscion/`

If switching to a custom domain later, set the `BASE_PATH` and `ASSET_PREFIX` env vars to empty in the workflow.
