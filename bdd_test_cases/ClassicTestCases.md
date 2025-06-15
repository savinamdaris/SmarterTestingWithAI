## Classic Test Cases for User Stories Example

---

### Test Case ID: TC01

**Title:** Successful KYC verification with valid documents  
**Priority:** High  
**Objective:** Ensure system accepts and verifies valid government ID and proof of address  
**Preconditions:** User is registered and logged in  
**Test Data:** Valid government ID and proof of address from supported country

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User uploads valid government ID and proof of address | System accepts documents |
| 2  | System performs real-time validation | Documents are verified successfully |
| 3  | Validation passes | User is marked as KYC verified |

---

### Test Case ID: TC02

**Title:** KYC rejection for invalid or expired documents  
**Priority:** High  
**Objective:** Ensure system rejects invalid or expired documents and notifies user  
**Preconditions:** User is registered and logged in  
**Test Data:** Expired or unreadable government ID

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User uploads invalid/expired document | System rejects document |
| 2  | System notifies user | User receives rejection message and instructions |

---

### Test Case ID: TC03

**Title:** Access to advanced analytics for EXCELLENT role  
**Priority:** High  
**Objective:** Ensure only EXCELLENT role users can access advanced analytics  
**Preconditions:** User is logged in as EXCELLENT role  
**Test Data:** EXCELLENT role credentials

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User navigates to analytics dashboard | Dashboard loads |
| 2  | User views advanced metrics | Win/loss ratio, risk-adjusted returns, and portfolio correlation are displayed |

---

### Test Case ID: TC04

**Title:** Deny advanced analytics to lower roles  
**Priority:** Medium  
**Objective:** Ensure MEDIUM/LOW role users cannot access advanced analytics  
**Preconditions:** User is logged in as MEDIUM or LOW role  
**Test Data:** MEDIUM or LOW role credentials

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User attempts to access analytics dashboard | Access is denied with appropriate message |

---

### Test Case ID: TC05

**Title:** Automatic leverage adjustment after volatility spike  
**Priority:** High  
**Objective:** Ensure system adjusts leverage based on market volatility  
**Preconditions:** User has open positions, system is monitoring volatility  
**Test Data:** Simulated market volatility spike

| No | Step | Expected Result |
|----|------|----------------|
| 1  | Market volatility exceeds threshold | System evaluates user positions |
| 2  | Criteria for adjustment met | System adjusts leverage automatically |
| 3  | Adjustment occurs | User is notified of leverage change |

---

### Test Case ID: TC06

**Title:** Unified dashboard displays all asset classes  
**Priority:** High  
**Objective:** Ensure dashboard shows all positions and real-time P&L  
**Preconditions:** MEDIUM role user is logged in, has positions in multiple asset classes  
**Test Data:** User with positions in forex, stocks, commodities, crypto

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User opens portfolio dashboard | All positions are displayed |
| 2  | User executes a new trade | Dashboard updates with new position and P&L |

---

### Test Case ID: TC07

**Title:** Set and receive price alert with educational content  
**Priority:** High  
**Objective:** Ensure LOW role user can set alerts and receive educational notifications  
**Preconditions:** LOW role user is logged in  
**Test Data:** Price alert threshold

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User sets a price alert | Alert is saved |
| 2  | Price threshold is met | User receives notification with educational content |

---

### Test Case ID: TC08

**Title:** Create and deploy automated trading strategy  
**Priority:** High  
**Objective:** Ensure EXCELLENT role user can create, test, and deploy strategies  
**Preconditions:** EXCELLENT role user is logged in  
**Test Data:** Valid strategy using supported indicators

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User creates a valid strategy | Strategy is accepted |
| 2  | User deploys strategy | Strategy is active and monitored |

---

### Test Case ID: TC09

**Title:** Reject invalid trading strategy  
**Priority:** Medium  
**Objective:** Ensure system rejects invalid or conflicting strategies  
**Preconditions:** EXCELLENT role user is logged in  
**Test Data:** Invalid strategy configuration

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User creates an invalid strategy | System rejects strategy |
| 2  | User is notified | Error message is displayed |

---

### Test Case ID: TC10

**Title:** Biometric authentication and 2FA login  
**Priority:** High  
**Objective:** Ensure user can log in using biometrics and 2FA  
**Preconditions:** User has enabled biometrics and 2FA, supported device  
**Test Data:** Valid biometric and 2FA credentials

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User attempts login with biometrics | System authenticates biometrics |
| 2  | System prompts for 2FA | User enters 2FA code |
| 3  | Both checks pass | User is logged in |

---

### Test Case ID: TC11

**Title:** Copy trade from verified trader  
**Priority:** High  
**Objective:** Ensure LOW role user can copy trades from verified traders  
**Preconditions:** LOW role user is logged in, verified traders available  
**Test Data:** Verified trader, trade to copy

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User selects a verified trader | Trader details are displayed |
| 2  | User chooses to copy a trade | Trade is executed in user's account |

---

### Test Case ID: TC12

**Title:** Generate and download tax report  
**Priority:** High  
**Objective:** Ensure user can generate and download tax report for supported jurisdiction  
**Preconditions:** User has trading activity, supported jurisdiction  
**Test Data:** User with trades in supported jurisdiction

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User requests tax report | System generates report |
| 2  | Report is available | User downloads report with correct data |

---

### Test Case ID: TC13

**Title:** Optimized mobile trading experience  
**Priority:** High  
**Objective:** Ensure mobile interface provides advanced charting, quick order execution, and real-time data  
**Preconditions:** User is logged in on supported mobile device  
**Test Data:** Mobile device, trading account

| No | Step | Expected Result |
|----|------|----------------|
| 1  | User opens mobile trading app | Optimized interface loads |
| 2  | User accesses charting tools | Advanced charts are available |
| 3  | User places a trade | Order executes quickly with real-time data |

---