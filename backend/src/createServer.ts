const { GraphQLServer } = require("graphql-yoga");

const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const db = require("./db");

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    engine: {
      apiKey: "enter-api-key"
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: (req: any) => ({ ...req, db })
  });
}

module.exports = createServer;
