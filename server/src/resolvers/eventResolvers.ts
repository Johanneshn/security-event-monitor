import { mockEvents } from '../data/mockEvents';

export const resolvers = {
  Query: {
    events: (_: any, args: { type?: string; severity?: string }) => {
      let results = mockEvents;
      if (args.type) results = results.filter(e => e.type === args.type);
      if (args.severity) results = results.filter(e => e.severity === args.severity);
      return results;
    }
  }
};