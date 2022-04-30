module.exports = {
    schema: [
      {
        "https://cash-flow-hasura.herokuapp.com/v1/graphql": {
          headers: {
            "x-hasura-admin-secret": "myadminsecretkey",
          },
        },
      },
    ],
    documents: ["./src/**/*.tsx", "./src/**/*.ts","./src/**/*.gql"],
    overwrite: true,
    generates: {
      "./src/generated/graphql.tsx": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo",
          // 'typescript-apollo-client-helpers'
        ],
        config: {
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
        },
      },
      "./graphql.schema.json": {
        plugins: ["introspection"],
      },
    },
  };