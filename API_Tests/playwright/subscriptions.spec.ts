import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Subscriptions API Endpoints', () => {
  test('should get subscriptions', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/subscriptions`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.subscriptions)).toBeTruthy();
  });

  test('should update subscriptions', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.put(`${baseURL}/api/subscriptions`, {
      data: { subscriptions: ['newsletter'] }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Subscription updated');
    expect(Array.isArray(body.subscriptions)).toBeTruthy();
  });

  test('should unsubscribe', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.put(`${baseURL}/api/unsubscribe`, {
      data: { subscription: 'newsletter' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Unsubscribed');
    expect(body.subscription).toBe('newsletter');
  });
});
