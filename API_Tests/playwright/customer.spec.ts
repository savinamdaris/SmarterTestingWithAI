import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Customer API Endpoints', () => {
  test('should get customer configs', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/customer/configs`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.configs).toBeDefined();
  });

  test('should get customer info', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/customer/info`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.userId).toBeDefined();
    expect(body.kycStatus).toBeDefined();
  });

  test('should get account configs', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/customer/account-configs`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.accountId).toBeDefined();
    expect(body.currency).toBeDefined();
  });

  test('should get trading accounts', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/customer/trading-accounts`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.accounts)).toBeTruthy();
  });
});
