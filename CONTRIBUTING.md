# Contributing to Peptimus Shared

Thank you for your interest in contributing to the Peptimus shared packages. This document outlines the process for submitting changes to this repository.

## Getting Started

1. Fork the repository and clone your fork locally.
2. Install dependencies with `pnpm install`.
3. Build all packages with `pnpm build`.
4. Create a new branch from `main` for your change.

## Repository Structure

| Package | Path | Purpose |
|---|---|---|
| `@peptimus/types` | `packages/types/` | Shared TypeScript types and interfaces |
| `@peptimus/api-spec` | `packages/api-spec/` | OpenAPI specification and generated client |
| `@peptimus/zod-schemas` | `packages/zod-schemas/` | Zod validation schemas |
| `@peptimus/utils` | `packages/utils/` | Pure utility functions |
| `@peptimus/constants` | `packages/constants/` | Shared constants and enums |
| `@peptimus/hooks` | `packages/hooks/` | Shared TanStack Query hooks |

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/<short-description>` | `feat/add-bounty-types` |
| Bug fix | `fix/<short-description>` | `fix/peptide-schema-optional-field` |
| Docs | `docs/<short-description>` | `docs/types-jsdoc` |
| Chore | `chore/<short-description>` | `chore/upgrade-zod` |

## Development Guidelines

- All packages are written in **TypeScript** — strict mode is enforced.
- **No runtime dependencies** on Replit-specific packages.
- Zod schemas must match the OpenAPI specification exactly.
- Types should be exported from the package's `index.ts` barrel file.
- Breaking changes to shared types require updates to all consuming packages — document them clearly in the PR.
- Keep packages small and single-purpose — avoid bundling unrelated utilities.

## Adding a New Package

1. Create the directory under `packages/<package-name>/`.
2. Add `package.json`, `tsconfig.json`, and `src/index.ts`.
3. Register the package in the root `pnpm-workspace.yaml`.
4. Export types from the barrel file and document all exports with JSDoc.

## Pull Request Process

1. Ensure CI passes — the workflow runs `tsc --noEmit` across all packages.
2. Keep pull requests focused — one package or concern per PR where possible.
3. Fill out the pull request template completely.
4. Link any related issues using `Closes #<issue>`.
5. Request a review from `@peptimusdev`.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat(types): add BountyStatus enum
fix(zod-schemas): make peptide description optional
chore: upgrade zod to 4.x
docs(hooks): add JSDoc for usePeptide hook
```

## Reporting Issues

Use the issue templates available in the repository:
- **Bug Report** — for reproducible defects
- **Feature Request** — for new functionality proposals

## Code of Conduct

Be respectful and constructive. Contributions that are disrespectful toward maintainers or other contributors will not be accepted.

---

**Maintainer:** [peptimusdev](https://github.com/peptimusdev)
