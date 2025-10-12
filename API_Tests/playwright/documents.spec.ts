import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Documents API Endpoints', () => {
  test('should get document configs', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/documents/configs`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.required)).toBeTruthy();
  });

  test('should get document status', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/documents/status`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBeDefined();
  });

  test('should get document npi', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/documents/npi`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.npi).toBeDefined();
  });

  test('should upload document', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/documents/upload`, {
      data: { type: 'PROOF_OF_ID' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Document uploaded');
    expect(body.type).toBe('PROOF_OF_ID');
  });
});
