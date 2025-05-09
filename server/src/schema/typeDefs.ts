import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Event {
    id: ID!
    timestamp: String!
    type: String!
    severity: String!
    description: String!
    sourceIP: String!
  }

  type Query {
    events(type: String, severity: String): [Event!]!
  }
`;