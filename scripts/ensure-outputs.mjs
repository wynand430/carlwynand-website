import { existsSync, writeFileSync } from "node:fs";

if (existsSync("amplify_outputs.json")) {
  process.exit(0);
}

const stub = {
  version: "1",
  data: {
    aws_region: "us-east-1",
    url: "https://localhost.appsync-api.us-east-1.amazonaws.com/graphql",
    api_key: "da2-local-placeholder",
    default_authorization_type: "API_KEY",
    authorization_types: ["API_KEY"],
    model_introspection: {
      version: 1,
      models: {
        Inquiry: {
          name: "Inquiry",
          pluralName: "Inquiries",
          syncable: true,
          primaryKeyInfo: {
            isCustomPrimaryKey: false,
            primaryKeyFieldName: "id",
            sortKeyFieldNames: [],
          },
          attributes: [{ type: "model", properties: {} }],
          fields: {
            id: {
              name: "id",
              isArray: false,
              type: "ID",
              isRequired: true,
              attributes: [],
            },
            name: {
              name: "name",
              isArray: false,
              type: "String",
              isRequired: true,
              attributes: [],
            },
            email: {
              name: "email",
              isArray: false,
              type: "String",
              isRequired: true,
              attributes: [],
            },
            initiative: {
              name: "initiative",
              isArray: false,
              type: "String",
              isRequired: true,
              attributes: [],
            },
            createdAt: {
              name: "createdAt",
              isArray: false,
              type: "AWSDateTime",
              isRequired: false,
              attributes: [],
              isReadOnly: true,
            },
            updatedAt: {
              name: "updatedAt",
              isArray: false,
              type: "AWSDateTime",
              isRequired: false,
              attributes: [],
              isReadOnly: true,
            },
          },
        },
      },
      enums: {},
      nonModels: {},
    },
  },
};

writeFileSync("amplify_outputs.json", JSON.stringify(stub, null, 2));
console.log("Wrote a local amplify_outputs.json placeholder. Run npx ampx sandbox --once before deploying.");
