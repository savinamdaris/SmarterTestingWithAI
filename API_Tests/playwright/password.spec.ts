import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Password API Endpoints', () => {
  test('should change password', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/password/change`, {
      data: { oldPassword: 'old', newPassword: 'new' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Password changed');
  });

  test('should reset password', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/password/reset`, {
      data: { email: 'user@example.com' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.result).toBe('Password reset email sent');
  });

  test('should validate password', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post(`${baseURL}/api/password/validate`, {
      data: { password: 'testpass' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.valid).toBe(true);
  });
});
