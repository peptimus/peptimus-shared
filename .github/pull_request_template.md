## Summary

Describe what this PR changes in the shared packages and why.

## Type of Change

- [ ] Bug fix
- [ ] New export / utility
- [ ] Breaking change to shared API
- [ ] OpenAPI spec update
- [ ] Dependency update

## Packages Affected

List which packages are changed: `api-spec`, `api-client-react`, `api-zod`, `db`, `integrations`, etc.

## Breaking Changes

If this is a breaking change, describe what consuming packages need to update.

## Testing

Describe how you verified the shared packages still compile and work correctly.

## Checklist

- [ ] Code typechecks without errors
- [ ] Consumers (`peptimus`, `api-server`) still build after this change
- [ ] OpenAPI spec codegen re-run if spec changed (`pnpm --filter @workspace/api-spec run codegen`)

## Related Issues

Closes #
