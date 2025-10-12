import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Social Networks API Endpoints', () => {
  test('should login with Google', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/customers/google`, {
      data: { token: 'google-token' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Google login successful');
    expect(body.token).toBe('google-token');
  });

  test('should login with Facebook', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/customers/facebook`, {
      data: { token: 'facebook-token' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Facebook login successful');
    expect(body.token).toBe('facebook-token');
  });

  test('should login with Apple', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/customers/apple`, {
      data: { token: 'apple-token' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Apple login successful');
    expect(body.token).toBe('apple-token');
  });
});
