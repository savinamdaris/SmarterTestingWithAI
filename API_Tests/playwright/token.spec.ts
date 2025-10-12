import { test, expect, request } from '@playwright/test';

test.describe('API Token Endpoints', () => {
  const baseURL = 'http://localhost:4000';

  test('should obtain token successfully', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/token/obtain`, {
      data: { login: 'testuser', password: 'testpass' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.accessToken).toBeDefined();
    expect(body.renewToken).toBeDefined();
    expect(body.message).toContain('Token obtained');
  });

  test('should renew token successfully', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/token/renew`, {
      data: { renewToken: 'mock-renew-token' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.accessToken).toBeDefined();
    expect(body.renewToken).toBeDefined();
    expect(body.message).toContain('Token renewed');
  });
});
