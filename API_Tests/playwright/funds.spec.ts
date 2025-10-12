import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Funds API Endpoints', () => {
  test('should get credit cards', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/funds/credit-cards`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.cards)).toBeTruthy();
  });

  test('should deposit funds', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/funds/deposit`, {
      data: { amount: 100 }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Deposit successful');
    expect(body.amount).toBe(100);
  });

  test('should transfer funds', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/funds/transfer`, {
      data: { from: 'ACC-1', to: 'ACC-2', amount: 50 }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Transfer successful');
    expect(body.from).toBe('ACC-1');
    expect(body.to).toBe('ACC-2');
  });
});
