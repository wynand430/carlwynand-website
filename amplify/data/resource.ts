import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  DeliveryDuration: a.enum(["UNDER_3_MONTHS", "THREE_TO_SIX_MONTHS", "NINE_TO_TWELVE_MONTHS", "NOT_URGENT"]),
  PotentialImpact: a.enum(["UNDER_1M", "ONE_TO_5M", "FIVE_TO_20", "TWENTY_TO_100M", "NOT_DEFINED"]),
  Inquiry: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      companyName: a.string().required(),
      departmentOrTitle: a.string(),
      deliveryDuration: a.ref("DeliveryDuration").required(),
      potentialImpact: a.ref("PotentialImpact").required(),
      projectDescription: a.string().required(),
      requestNda: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey().to(["create"])]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
