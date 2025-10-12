# Use Cases



Feature | Actor | Use Case | Preconditions | Main Flow | Alternate Flows | Exception Flows
--------|--------|----------|---------------|-----------|-----------------|----------------
Enhanced KYC Verification | Compliance Officer | Automate KYC verification | User submits valid documents | 1. User uploads docs 2. System validates 3. User gets result | Manual review if validation fails | System error during validation
Advanced Trading Analytics | Expert Trader | Access advanced analytics | User has EXCELLENT role | 1. Login 2. Navigate to dashboard 3. View metrics | N/A | Access denied for lower roles
Automated Risk Management | System | Adjust leverage on volatility | User has open positions | 1. Monitor volatility 2. Evaluate positions 3. Adjust leverage | N/A | System notification failure


 
---

# Test Scenarios

ID | Test Scenario | Priority | Precondition | Test Steps | Expected Result | Status
---|--------------|----------|--------------|------------|-----------------|--------
TS1 | Verify KYC with valid documents | High | User has valid ID and proof of address | 1. Upload valid documents 2. Submit for verification | Instant verification success | Ready
TS2 | Verify KYC with invalid documents | Medium | User has expired documents | 1. Upload expired documents 2. Submit for verification | Error message and retry prompt | Ready
TS3 | Expert trader analytics access | High | User has EXCELLENT role | 1. Login as expert 2. Navigate to analytics | Advanced metrics visible | Ready
TS4 | Block analytics for lower roles | Medium | User has MEDIUM/LOW role | 1. Login as medium user 2. Try access analytics | Access denied message | Ready
TS5 | Auto leverage adjustment | High | User has open positions | 1. Trigger volatility spike 2. Wait for system evaluation | Leverage adjusted automatically | Ready
TS6 | Portfolio real-time updates | High | User has active trades | 1. Execute new trade 2. Check dashboard | P&L updates instantly | Ready
TS7 | Educational alerts for beginners | Medium | LOW role user setup | 1. Set price alert 2. Trigger price condition | Educational content shown | Ready
TS8 | Biometric login success | High | 2FA and biometrics enabled | 1. Initiate login 2. Use biometric 3. Complete 2FA | Successful login | Ready
TS9 | Social trading copy execution | High | Verified trader selected | 1. Select trade 2. Copy trade | Trade copied successfully | Ready
TS10 | Mobile trading compatibility | High | Supported mobile device | 1. Login mobile 2. Place trade | Trade executed successfully | Ready



# Test Results

ID | Test Scenario | Execution Date | Status | Defects | Notes | Environment
---|--------------|----------------|---------|---------|-------|-------------
TS1 | Verify KYC with valid documents | 2025-06-23 | PASS | None | Verification completed in 2.3 seconds | PROD
TS2 | Verify KYC with invalid documents | 2025-06-23 | PASS | None | Error message displayed correctly | PROD
TS3 | Expert trader analytics access | 2025-06-23 | PASS | None | All metrics loaded successfully | PROD
TS4 | Block analytics for lower roles | 2025-06-23 | PASS | None | Access denied with proper message | PROD
TS5 | Auto leverage adjustment | 2025-06-23 | FAIL | DEF-001 | Adjustment delayed by 5 seconds | PROD
TS6 | Portfolio real-time updates | 2025-06-23 | PASS | None | Updates within 500ms | PROD
TS7 | Educational alerts for beginners | 2025-06-23 | PASS | None | Content properly formatted | PROD
TS8 | Biometric login success | 2025-06-23 | BLOCKED | DEF-002 | Biometric sensor issues | PROD
TS9 | Social trading copy execution | 2025-06-23 | PASS | None | Trade copied within 1 second | PROD
TS10 | Mobile trading compatibility | 2025-06-23 | PARTIAL | DEF-003 | Charts load slow on iOS | PROD

---
# MCP Automation Prompts

## General Setup Prompt
```typescript
// Setup prompt for MCP server
Create a Playwright automation framework with:
- TypeScript configuration
- Page Object Model pattern
- Custom test fixtures for different user roles
- API helpers for test data setup
- Test reporting configuration
- Environment configuration for PROD/DEV
- Custom commands for common actions
- Utilities for document upload and biometric simulation
```

## Test Case Automation Prompts

### 1. KYC Verification Tests
```typescript
Create automated tests for KYC verification that:
- Handle document upload for both valid and invalid cases
- Simulate file uploads using Playwright's file input handling
- Verify system responses and messages
- Include timing assertions for verification process
- Check for proper error messages
Test data required:
- Valid document samples
- Invalid/expired document samples
```

### 2. Advanced Analytics Access Tests
```typescript
Create automated tests for analytics access that:
- Implement role-based login (EXCELLENT, MEDIUM, LOW)
- Verify analytics dashboard elements
- Check metric visibility based on user role
- Validate data loading and display
- Assert access restrictions
Test data required:
- Test accounts for each user role
- Sample analytics data
```

### 3. Risk Management Tests
```typescript
Create automated tests for risk management that:
- Simulate market volatility conditions
- Monitor leverage adjustments
- Verify system response times
- Check notification delivery
- Validate position updates
Test data required:
- Test trading positions
- Volatility threshold data
```

### 4. Portfolio Dashboard Tests
```typescript
Create automated tests for portfolio dashboard that:
- Verify real-time updates
- Check P&L calculations
- Validate position displays
- Test refresh mechanisms
- Monitor update timing
Test data required:
- Active trading positions
- Real-time market data
```

### 5. Smart Notifications Tests
```typescript
Create automated tests for notifications that:
- Set up price alerts
- Trigger alert conditions
- Verify educational content
- Check notification delivery
- Validate user preferences
Test data required:
- Price alert conditions
- Educational content samples
```

### 6. Biometric Security Tests
```typescript
Create automated tests for biometric authentication that:
- Mock biometric responses
- Test 2FA flows
- Verify fallback mechanisms
- Validate error handling
- Check security protocols
Test data required:
- Mock biometric data
- 2FA test credentials
```

### 7. Social Trading Tests
```typescript
Create automated tests for social trading that:
- Select verified traders
- Execute copy trades
- Verify trade replication
- Check permission systems
- Validate error scenarios
Test data required:
- Verified trader accounts
- Sample trading strategies
```

### 8. Mobile Compatibility Tests
```typescript
Create automated tests for mobile platform that:
- Test responsive layouts
- Verify chart rendering
- Check trade execution
- Validate device compatibility
- Monitor performance metrics
Test data required:
- Mobile device configurations
- Performance benchmarks
```

## Common Assertions Prompt
```typescript
Implement standard assertions for:
- Response times (SLA compliance)
- UI element presence and state
- Data accuracy and consistency
- Error message formatting
- Security protocol compliance
```

## Test Data Management Prompt
```typescript
Create test data handlers for:
- User account creation
- Document management
- Trading position setup
- Market data simulation
- Clean-up procedures
```

## Reporting Configuration Prompt
```typescript
Configure test reporting to include:
- Execution times
- Screenshot captures
- Video recordings
- Console logs
- API response logs
- Performance metrics
```

## Error Handling Prompt
```typescript
Implement error handling for:
- Network issues
- API failures
- UI element timeouts
- Data inconsistencies
- Authentication failures
```

## Environment Management Prompt
```typescript
Setup environment management for:
- Multiple test environments
- Configuration switching
- API endpoint management
- Test data isolation
- Clean-up procedures
```

---
import { test, expect, Page } from '@playwright/test';

// Base configuration and utilities
const BASE_URL = 'https://live-trader.markets.com/';
const TEST_USER = 'vamosfortest+81@gmail.com';
const TEST_PASSWORD = 'Test123!';

// Common setup
async function setupLoggedInPage(page: Page) {
  await page.goto(BASE_URL);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Email').fill(TEST_USER);
  await page.getByLabel('Password').fill(TEST_PASSWORD);
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Wait for dashboard to load
  await page.waitForSelector('[data-testid="dashboard"]');
}

// Test suites based on your prompts
test.describe('Trading Platform E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await setupLoggedInPage(page);
  });

  // 1. KYC Verification Tests
  test('KYC document verification workflow', async ({ page }) => {
    await test.step('Valid document upload', async () => {
      await page.goto('/kyc-verification');
      // Add document upload implementation
      // Add verification checks
    });
  });

  // 2. Advanced Analytics Access
  test('Access analytics dashboard', async ({ page }) => {
    await page.goto('/analytics');
    await expect(page.locator('[data-testid="analytics-metrics"]')).toBeVisible();
    await expect(page.locator('[data-testid="win-loss-ratio"]')).toBeVisible();
  });

  // 3. Risk Management Tests
  test('Leverage adjustment on volatility', async ({ page }) => {
    await page.goto('/risk-management');
    // Add volatility simulation
    // Check leverage adjustments
  });

  // 4. Portfolio Dashboard Tests
  test('Real-time portfolio updates', async ({ page }) => {
    await page.goto('/portfolio');
    // Verify real-time updates
    await expect(page.locator('[data-testid="portfolio-value"]')).toBeVisible();
  });

  // 5. Smart Notifications Tests
  test('Price alerts with educational content', async ({ page }) => {
    await page.goto('/notifications');
    // Set up price alert
    // Verify notification delivery
  });

  // 6. Biometric Security Tests
  test('2FA authentication flow', async ({ page }) => {
    await page.goto('/security');
    // Test 2FA setup and verification
  });

  // 7. Social Trading Tests
  test('Copy trading functionality', async ({ page }) => {
    await page.goto('/social-trading');
    // Select trader and copy trade
    // Verify trade execution
  });

  // 8. Mobile Compatibility Tests
  test('Mobile responsive testing', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/trading');
    // Check mobile-specific elements
  });
});

// Error handling wrapper
function withErrorHandling(testFn: Function) {
  return async (...args: any[]) => {
    try {
      await testFn(...args);
    } catch (error) {
      console.error(`Test failed: ${error.message}`);
      throw error;
    }
  };
}

// Configuration for test reporting
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    // Capture screenshot
    await page.screenshot({ path: `./screenshots/${testInfo.title}.png` });
  }
});