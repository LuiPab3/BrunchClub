# The Brunch Club – Frontend

Starter basado en React + Vite + TypeScript + TailwindCSS. Estructura pensada para calzar con el Figma y desplegar en GitHub Pages.

## Requisitos
- Node 18+
- PNPM/NPM/Yarn

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages
1. Crea un repositorio en GitHub (por ejemplo, `the-brunch-club`).
2. Ajusta el `base` en `vite.config.ts` a `'/the-brunch-club/'` **o** exporta la variable `VITE_GH_PAGES_BASE='/the-brunch-club/'` en el workflow.
3. Haz push del proyecto al repo.
4. Activa GitHub Pages desde **Settings → Pages → Source: GitHub Actions**.
5. El workflow en `.github/workflows/deploy.yml` construirá y publicará en `gh-pages` automáticamente.

## Estructura sugerida
- `src/pages` para cada pestaña del Figma
- `src/components` para bloques reutilizables (Navbar, Footer, Hero, etc.)
- `src/assets` para imágenes y fuentes
- `src/lib` para utilidades (API clients, hooks, etc.)

> Ajusta textos, imágenes y estilos según el Figma cuando lo compartas.
