import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../../schema/typeDefs';
import { resolvers } from '../../resolvers/eventResolvers';

describe('Event queries', () => {
  let testServer: ApolloServer;

  beforeAll(() => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });

  it('returns all events', async () => {
    const result = await testServer.executeOperation({
      query: `
        query {
          events {
            id
            type
            severity
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.events).toBeDefined();
    expect(Array.isArray(result.data?.events)).toBe(true);
  });
});