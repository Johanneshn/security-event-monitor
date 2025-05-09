import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './resolvers/eventResolvers';

export async function createServer() {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  await server.start();
  server.applyMiddleware({ app });
  
  return app;
}

// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = 4000;
  createServer().then(app => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
  });
}