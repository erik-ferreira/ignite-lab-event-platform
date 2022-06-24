import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ryyda11pip01wb87cocqv2/master",
  cache: new InMemoryCache(),
});
