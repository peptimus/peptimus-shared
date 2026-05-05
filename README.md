# Peptimus Shared

[![CI](https://github.com/peptimus/peptimus-shared/actions/workflows/ci.yml/badge.svg)](https://github.com/peptimus/peptimus-shared/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-00f5ff?style=flat-square&labelColor=0a0f1c)](LICENSE)
[![Author](https://img.shields.io/badge/author-peptimusdev-8b5cf6?style=flat-square&labelColor=0a0f1c)](https://github.com/peptimusdev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white&labelColor=0a0f1c)](https://www.typescriptlang.org)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539?style=flat-square&logo=openapiinitiative&logoColor=white&labelColor=0a0f1c)](https://www.openapis.org)
[![Zod](https://img.shields.io/badge/Zod-v4-3E67B1?style=flat-square&labelColor=0a0f1c)](https://zod.dev)

Shared TypeScript packages for the Peptimus platform: API spec, client hooks, Zod schemas, database layer, and AI integrations.

**Author:** [peptimusdev](https://github.com/peptimusdev)

---

## Packages

| Package | Description |
|---|---|
| `@workspace/api-spec` | OpenAPI 3.0 specification for the Peptimus API |
| `@workspace/api-client-react` | Generated React Query hooks for all API endpoints |
| `@workspace/api-zod` | Generated Zod v4 schemas matching the API spec |
| `@workspace/db` | Drizzle ORM schema, migrations, and database client |
| `@workspace/integrations` | Integration utility types and helpers |
| `@workspace/integrations-openai-ai-server` | Server-side OpenAI integration |
| `@workspace/integrations-openai-ai-react` | React hooks for OpenAI streaming |

---

## Development

```bash
pnpm install
pnpm run typecheck:libs
```

```bash
pnpm --filter @workspace/api-spec run codegen
```

This regenerates `@workspace/api-client-react` and `@workspace/api-zod` from the OpenAPI spec. Run this after any changes to `api-spec`.

```bash
pnpm --filter @workspace/db run push
```

Pushes the Drizzle schema to the connected PostgreSQL database (development only).

---

**Built by [peptimusdev](https://github.com/peptimusdev)**
