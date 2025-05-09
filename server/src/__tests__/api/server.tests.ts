import request from 'supertest';
import { createServer } from '../../server'; 

describe('GraphQL API Endpoints', () => {
  let app: import('express').Application;
  
  beforeAll(async () => {
    // Create the Express app with Apollo server attached
    app = await createServer();
  });
  
  it('should return events when queried', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            events {
              id
              type
              severity
            }
          }
        `
      });
      
    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    expect(Array.isArray(response.body.data.events)).toBe(true);
  });
  
  it('should filter events by severity', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            events(severity: "HIGH") {
              id
              type
              severity
            }
          }
        `
      });
      
    expect(response.status).toBe(200);
    expect(response.body.errors).toBeUndefined();
    
    // Verify all returned events have HIGH severity
    response.body.data.events.forEach((event: { severity: string; }) => {
      expect(event.severity).toBe('HIGH');
    });
  });
});