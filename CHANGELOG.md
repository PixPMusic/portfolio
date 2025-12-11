# Changelog

All notable changes to this project will be documented in this file.

## [0.6.2] - 2025-12-10

### Fixes

- Adjusted PDF layout for better spacing.

## [0.6.1] - 2025-12-10

### Fixes

- Fixed prettier formatting issues after TailwindCSS v4 migration.

## [0.6.0] - 2025-12-10

### Breaking

- Migrated to **TailwindCSS v4** with CSS-first configuration (`@theme` directive).
  - Configuration moved from `tailwind.config.cjs` to `src/index.css`
  - Uses `@tailwindcss/vite` plugin (preferred for Vite-based frameworks like Astro)
  - Default border color is now `currentColor` (was `gray-200`)
  - Default ring width is now `1px` (was `3px`)
  - Browser support: Safari 16.4+, Chrome 111+, Firefox 128+
- Migrated to **Astro 5** with the new Content Layer API.
  - Content config moved from `src/content/config.ts` to `src/content.config.ts`
  - Collections now use `glob()` loaders instead of `type: 'content'`
- Minimum Node.js version is now **20** (was 18)

### Features

- Improved build performance with TailwindCSS v4's Oxide engine (Rust-based)
- Added `@tailwindcss/postcss` for unified CSS processing
- Vite 6 support via Astro 5

### Dependencies

- Updated `tailwindcss` from 3.4.18 to 4.1.17
- Updated `astro` from 4.16.19 to 5.16.4
- Updated `@astrojs/check` from 0.5.10 to 0.9.6
- Updated `@astrojs/node` from 8.3.4 to 9.5.1
- Updated `@astrojs/react` from 3.6.3 to 4.4.2
- Updated `@playform/document` from 0.0.6 to 0.1.6
- Updated `concurrently` from 8.2.2 to 9.2.1
- Updated `date-fns` from 3.6.0 to 4.1.0
- Updated `express` from 4.22.1 to 5.2.1
- Updated `iconify-icon` from 2.3.0 to 3.0.2
- Updated `immer` from 10.2.0 to 11.0.1
- Updated `marked` from 12.0.2 to 17.0.1
- Updated `prettier-plugin-astro` from 0.13.0 to 0.14.1
- Updated `prettier-plugin-tailwindcss` from 0.5.14 to 0.7.2
- Updated `puppeteer` from 22.15.0 to 24.32.1
- Updated `rollup-plugin-visualizer` from 5.14.0 to 6.0.5
- Updated `sharp` from 0.33.5 to 0.34.5
- Updated `type-fest` from 4.41.0 to 5.3.1
- Removed `@astrojs/tailwind` (replaced by `@tailwindcss/postcss`)
- Removed `vite` direct dependency (bundled with Astro 5)

## [0.5.1] - 2025-12-09

### Fixes

- Fixed PDF layout issues.

## [0.5.0] - 2025-12-09

### Breaking

- Migrated data layer to **Content Collections** for easier data management.

### Features

- Updated documentation and deployment workflows.
- Cleaned up remaining Node.js references for full **Bun** adoption.

## [0.4.0] - 2025-04-23

### Breaking

- Migrated framework to **Astro 4**.
- Switched package manager and runtime to **Bun**.

## [0.3.0] - 2023-08-25

### Breaking

- Bump astro-compress version to prevent failing install

## [0.2.1] - 2023-07-10

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/226))

## [0.2.0] - 2023-07-02

### Breaking

- Require Node.js 18.

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/225))

## [0.1.6] - 2023-05-08

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/220))

## [0.1.5] - 2023-05-01

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/219))

## [0.1.4] - 2023-04-05

### Workflow

- ci: use pull request URL instead of its API endpoint when generating changelog for dependency updates.

## [0.1.3] - 2023-03-27

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/214))

## [0.1.2] - 2023-03-24

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/212))

## [0.1.1] - 2023-03-20

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/213))

## [0.1.0] - 2023-03-13

### Features

- feat: improved target attribute in labelled values ([details](https://github.com/KonradSzwarc/devscard/pull/210))

## [0.0.6] - 2023-03-06

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/209))

## [0.0.5] - 2023-02-27

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/207))

## [0.0.4] - 2023-02-22

### Workflow

- ci: automatically update project version and changelog for Renovate's PRs

## [0.0.3] - 2023-02-21

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/202))

## [0.0.2] - 2023-02-16

### Dependencies

- chore(deps): update dependencies ([details](https://github.com/KonradSzwarc/devscard/pull/201))

## [0.0.1] - 2023-02-08

### Workflow

- ci: add `package.json` version and changelog check to PR workflow.
- ci: setup release workflow on the `main` branch.

### Docs

- docs: create changelog file.
- docs: add [contributing page](https://devscard.gitbook.io/docs/project-development/contributing).
