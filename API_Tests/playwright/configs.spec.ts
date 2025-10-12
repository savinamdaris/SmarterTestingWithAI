import { test, expect, request } from '@playwright/test';

const baseURL = 'http://localhost:4000';

test.describe('Configs API Endpoints', () => {
  test('should get questionnaire config', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/configs/questionnaire?company=SafecapLTD&country=UK&instrumentTypes=CFD`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.company).toBe('SafecapLTD');
    expect(body.country).toBe('UK');
    expect(body.instrumentTypes).toBe('CFD');
    expect(Array.isArray(body.questions)).toBeTruthy();
  });

  test('should get countries', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/configs/country`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.countries)).toBeTruthy();
  });

  test('should get companies', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/configs/companies`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.companies)).toBeTruthy();
  });

  test('should get forbidden countries', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/configs/forbidden-country`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.forbidden)).toBeTruthy();
  });

  test('should get grace period', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get(`${baseURL}/api/configs/grace-period`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.gracePeriod).toBeDefined();
  });
});
