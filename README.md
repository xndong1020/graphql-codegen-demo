```
npm i @apollo/react-hooks graphql

npm i @graphql-codegen/cli @graphql-codegen/import-types-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo --save-dev

```

step 2: Create a `codegen.yml` at the root level of your project

```yaml
# Endpoint API, the following URL is a example
schema: http://localhost:7000/query
overwrite: true

# Format files
hooks:
  afterAllFileWrite:
    - prettier --write

generates:
  # Get schemas from server
  src/queries/autogenerate/schemas.tsx:
    documents: "src/queries/**/**.gql"
    plugins:
      - typescript
  # Create operations based on queries
  src/queries/autogenerate/operations.tsx:
    documents: "src/queries/**/**.gql"
    preset: import-types
    presetConfig:
      typesPath: ./schemas
    plugins:
      - typescript-operations
  # 1. Export GraphQL documents
  # 2. React interface
  src/queries/autogenerate/hooks.tsx:
    documents: "src/queries/**/**.gql"
    preset: import-types
    presetConfig:
      typesPath: ./operations
    plugins:
      - typescript-react-apollo
    config:
      # Optionals
      withHOC: false
      withComponent: false
      withHooks: true
```

Step 3: Add below npm scripts in package.json

```
    "buildTypes": "graphql-codegen --config codegen.yml",
    "buildTypes:watch": "npm run buildTypes -- --watch",
    "prettier": "prettier \"src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)\" --write"
```


Step 4: Add your graphql scripts under `queries` folder