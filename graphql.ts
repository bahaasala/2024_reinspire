import { GraphQLClient } from "graphql-request";

const DATO_CMS_TOKEN = "47b0bb84fcd895777457c6f0dc717f";

const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    Authorization: `Bearer ${DATO_CMS_TOKEN}`,
  },
});

export default client;
