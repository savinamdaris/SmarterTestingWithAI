## 1. High Bug Trend Modules

| Module/Component         | Bug Count | Critical Count (P1) | Automation Gap |
|-------------------------|-----------|---------------------|---------------|
| Dashboard (UI/Performance) | 2         | 0                   | High          |
| KYC/Onboarding             | 1         | 1                   | Medium        |
| Authentication/Security    | 1         | 1                   | Medium        |
| Analytics                  | 1         | 0                   | High          |
| Notification/Alerts        | 1         | 0                   | High          |
| Mobile Trading             | 1         | 1                   | High          |
| Funds/Withdrawal           | 1         | 0                   | Medium        |
| Compliance/Registration    | 1         | 1                   | Medium        |
| Audit/Trading              | 1         | 0                   | High          |

---

## 2. Bug Metrics Summary

- **Total bugs:** 10
- **Critical bugs (P1):** 4
- **Average resolution time:** [Data not available, recommend tracking in future sprints]

- **Severity distribution pie chart:**  
 ```mermaid
     pie
      title Bug Severity Distribution
      "P1 (Critical)" : 4
      "P2 (Major)"    : 5
      "P3 (Minor)"    : 1
```

- **Bugs by status bar chart:**  
  - Open: 10  
  - [Add Closed/Resolved as data becomes available]

---

## 3. Automation Candidates Table

| Bug Title                                         | Module/Feature         | Test Automation Candidate? | Suggested Test Type         |
|---------------------------------------------------|------------------------|----------------------------|-----------------------------|
| KYC Verification fails for valid passport         | KYC/Onboarding         | Yes                        | API/Integration, E2E        |
| Portfolio dashboard does not update after trade   | Dashboard              | Yes                        | UI, Real-time Data          |
| 2FA prompt missing on login                       | Authentication/Security| Yes                        | Security, Auth Flow         |
| Advanced analytics not available for EXCELLENT    | Analytics              | Yes                        | Role-based Access, UI       |
| Price alert not sent to user                      | Notification/Alerts    | Yes                        | Notification, E2E           |
| App crashes on order execution                    | Mobile Trading         | Yes                        | Mobile, Stress, E2E         |
| Withdrawal fails for verified user                | Funds/Withdrawal       | Yes                        | Funds, Transactional        |
| Dashboard loads in >5 seconds                     | Dashboard              | Yes                        | Performance, Load           |
| User from restricted jurisdiction can register    | Compliance/Registration| Yes                        | Registration, Compliance    |
| Trade execution not logged in audit trail         | Audit/Trading          | Yes                        | Audit, Data Integrity       |

---

## 4. Test Cases to Create

Generated from past bugs/incidents:

- KYC: Test valid/invalid document uploads, edge cases for document types, and error handling.
- Dashboard: Test real-time updates after trades, UI refresh, and data consistency.
- Authentication: Test 2FA prompt for all roles, negative scenarios for bypass.
- Analytics: Test role-based access, data visibility, and permissions.
- Notification: Test alert triggers, delivery to all channels, and user preferences.
- Mobile: Test order execution on all supported devices, crash recovery.
- Funds: Test withdrawal for all account statuses, error handling for failed transactions.
- Performance: Test dashboard load times under peak and normal conditions.
- Compliance: Test registration from all supported and restricted jurisdictions.
- Audit: Test logging for all trade executions, data retention, and audit trail completeness.

---

## 5. Risk-Based Prioritization Table

| Module/Component         | Risk Score (1–5) | Recommended Action                        |
|-------------------------|------------------|-------------------------------------------|
| Dashboard (UI/Performance) | 5                | Prioritize regression and performance automation |
| KYC/Onboarding             | 5                | Strengthen integration and negative tests |
| Authentication/Security    | 5                | Expand security and auth test coverage    |
| Analytics                  | 4                | Add role-based and data integrity tests   |
| Notification/Alerts        | 4                | Automate alert delivery and edge cases    |
| Mobile Trading             | 5                | Increase device coverage and crash tests  |
| Funds/Withdrawal           | 4                | Automate transactional and error flows    |
| Compliance/Registration    | 5                | Automate jurisdiction and compliance checks|
| Audit/Trading              | 4                | Automate audit trail and data integrity   |

---

## 6. Charts & Visuals

- **Bug Count by Module:**  
```mermaid
pie
    title Bug Count by Module
    "Dashboard" : 2
    "KYC" : 1
    "Auth" : 1
    "Analytics" : 1
    "Notification" : 1
    "Mobile" : 1
    "Funds" : 1
    "Compliance" : 1
    "Audit" : 1
```

- **Bug Split by Category:**  
```mermaid
pie
    title Bug Split by Category
    "FE (UI, Notification, Mobile, Dashboard)" : 4
    "BE (KYC, Analytics, Funds, Audit, Security, Compliance)" : 6
```

- **Bug Count by Priority & Status:**  
```mermaid
pie
    title Bug Count by Priority & Status
    "P1 (All Open)" : 4
    "P2 (All Open)" : 5
    "P3 (Open)" : 1
```

---

### AI-Driven Test Scope & Risk Insights

- **Test Scope Generation:**  
  All critical and high-frequency bugs are strong candidates for automated regression tests, especially for authentication, KYC, dashboard, and mobile trading flows.

- **Test Prioritization:**  
  Focus immediate automation and exploratory testing on Dashboard, KYC, Authentication, Mobile, and Compliance modules due to high risk and business impact.

- **Risk Scoring:**  
  Modules with repeated or critical bugs (risk score 5) should be prioritized for both manual and automated regression, with additional contract and integration tests.

---