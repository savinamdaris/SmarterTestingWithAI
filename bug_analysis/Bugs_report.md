# Bug Reports Summary

---

## 1. [Regression] KYC Verification fails for valid passport

**Description:**  
KYC verification fails when a user uploads a valid passport and proof of address.

**Steps to Reproduce:**  
1. Register a new user  
2. Upload a valid passport and proof of address  
3. Submit for KYC verification

**Actual Result:**  
KYC fails with 'Document not recognized' error.

**Expected Result:**  
KYC should pass for valid documents.

**Notes/Evidence/Logs:**  
Priority: 1  
Tags: KYC, Onboarding

---

## 2. [UI] Portfolio dashboard does not update after trade

**Description:**  
Portfolio dashboard does not reflect new trades in real-time for MEDIUM role users.

**Steps to Reproduce:**  
1. Login as MEDIUM role user  
2. Place a trade in forex  
3. Open portfolio dashboard

**Actual Result:**  
New position is not displayed.

**Expected Result:**  
Dashboard updates in real-time with new position.

**Notes/Evidence/Logs:**  
Priority: 2  
Tags: Dashboard, Portfolio

---

## 3. [Security] 2FA prompt missing on login

**Description:**  
EXCELLENT role users are not prompted for 2FA during login.

**Steps to Reproduce:**  
1. Login as EXCELLENT role user  
2. Enter correct credentials

**Actual Result:**  
User is logged in without 2FA prompt.

**Expected Result:**  
2FA prompt should appear after password entry.

**Notes/Evidence/Logs:**  
Priority: 1  
Tags: Security, 2FA

---

## 4. [Analytics] Advanced analytics not available for EXCELLENT user

**Description:**  
Advanced analytics metrics are not visible for EXCELLENT role users.

**Steps to Reproduce:**  
1. Login as EXCELLENT role user  
2. Navigate to analytics dashboard

**Actual Result:**  
Advanced metrics (win/loss, risk-adjusted returns) not visible.

**Expected Result:**  
All advanced analytics should be available for EXCELLENT users.

**Notes/Evidence/Logs:**  
Priority: 2  
Tags: Analytics, Role

---

## 5. [Notification] Price alert not sent to user

**Description:**  
Price alert notifications are not received by LOW role users.

**Steps to Reproduce:**  
1. Login as LOW role user  
2. Set a price alert for BTC/USD  
3. Wait for price to cross threshold

**Actual Result:**  
No notification received.

**Expected Result:**  
User receives price alert via selected channel.

**Notes/Evidence/Logs:**  
Priority: 2  
Tags: Notification, Alert

---

## 6. [Mobile] App crashes on order execution

**Description:**  
iOS app crashes when placing a market order for EUR/USD.

**Steps to Reproduce:**  
1. Login on iOS app  
2. Place a market order for EUR/USD

**Actual Result:**  
App crashes after order submission.

**Expected Result:**  
Order executes and confirmation is shown.

**Notes/Evidence/Logs:**  
Priority: 1  
Tags: Mobile, Trading

---

## 7. [Funds] Withdrawal fails for verified user

**Description:**  
Withdrawal requests fail for KYC-verified users.

**Steps to Reproduce:**  
1. Login as KYC-verified user  
2. Request withdrawal to bank account

**Actual Result:**  
Withdrawal request fails with generic error.

**Expected Result:**  
Withdrawal should succeed for verified users.

**Notes/Evidence/Logs:**  
Priority: 2  
Tags: Funds, Withdrawal

---

## 8. [Performance] Dashboard loads in >5 seconds during peak hours

**Description:**  
Portfolio dashboard takes over 5 seconds to load during peak trading hours.

**Steps to Reproduce:**  
1. Login during peak trading hours  
2. Navigate to portfolio dashboard

**Actual Result:**  
Dashboard takes over 5 seconds to load.

**Expected Result:**  
Dashboard loads in under 2 seconds as per SLA.

**Notes/Evidence/Logs:**  
Priority: 3  
Tags: Performance, Dashboard

---

## 9. [Compliance] User from restricted jurisdiction can register

**Description:**  
Registration is allowed for users from restricted countries.

**Steps to Reproduce:**  
1. Attempt registration from a restricted country (e.g., US)

**Actual Result:**  
Registration is allowed.

**Expected Result:**  
Registration should be blocked for restricted jurisdictions.

**Notes/Evidence/Logs:**  
Priority: 1  
Tags: Compliance, Registration

---

## 10. [Audit] Trade execution not logged in audit trail

**Description:**  
Trade executions are not recorded in the audit log.

**Steps to Reproduce:**  
1. Login as any user  
2. Place a trade  
3. Check audit logs

**Actual Result:**  
Trade execution not recorded in audit log.

**Expected Result:**  
All trades should be logged with timestamp and user details.

**Notes/Evidence/Logs:**  
Priority: 2  
Tags: Audit, Trading

---