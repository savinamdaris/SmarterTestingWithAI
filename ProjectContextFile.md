
# Project Overview

## Purpose  
The purpose of this project is to enhance and optimize the trading experience offered by www.markets.com, a leading online trading platform. The goal is to provide users with a robust, secure, and intuitive interface for trading a variety of financial instruments, including forex, stocks, commodities, and cryptocurrencies.

## Domain  
Online multi-asset trading platform (Forex, Gold, Funds, CFDs, Crypto).

## Users  
Traders (classified as LOW, MEDIUM, EXCELLENT expertise), institutional investors, brokers, compliance officers, platform administrators, support agents, and third-party auditors.

---

# Technical Stack

- **Frontend:**  
  React.js, WebSockets, Highcharts, TradingView widgets.

- **Backend:**  
  Java, Spring Boot, RESTful APIs, JWT, Tomcat.

- **Database:**  
  MySQL.

- **Infrastructure:**  
  Bamboo (CI/CD), Bitbucket, Cloudflare, TLS/SSL certificates, scalable cloud environment.

- **Testing Tools:**  
  Selenide, Playwright, Postman.

---

# Key Features & Modules

## User Management  
Modules for registration, onboarding, and profile maintenance. Key functions include secure sign-up, KYC identity verification, profile editing, security settings, and management of user account tiers/access levels. Additional features include:

- Funds movement (deposits/withdrawals with transaction histories)  
- Notification systems (alerts, sequencing, user preferences)  
- Configurable user settings (language, themes, layouts, preferences)

## Authentication  
Ensures secure system access with login/logout mechanisms, password recovery, two-factor authentication (2FA), and session management. Security includes:

- Activity auditing  
- User access controls  
- Compliance and AML checks alignment

---

# Current Testing Approach

## Manual Testing  
Focus on critical user journeys, new features, UI/UX validation, and regression tests. Major workflows include onboarding, order placements, and funds transfer. Tests are executed across supported browsers/devices using tools:

- JIRA (test and bug tracking)  
- TestRail (test case management)  
- Postman (API testing)  
- BrowserStack (cross-browser/device coverage)

## Automation  
Covers regression suites, smoke tests, and repetitive scenarios including login, registration, trading workflows, and funds management. Automation runs on every build via CI/CD pipelines. Tools and frameworks include:

- Selenide (UI automation in Java)  
- Postman with JavaScript (API automation)  
- Playwright (new feature coverage)  
- TestNG or JUnit (test execution)  
- Allure (reporting)

## Performance  
Regular performance/load testing for critical services such as API endpoints, order execution, market data, and login. Benchmarks for response times and throughput under peak/typical loads. Tools include:

- JMeter  
- Gatling  
- Datadog (APM)

## Security  
Focus on authentication, authorization, data encryption, and protection against OWASP Top 10 vulnerabilities (XSS, SQL Injection, CSRF). Routine vulnerability scans, code reviews, and annual penetration testing by accredited vendors. Tools:

- OWASP ZAP (“Attack Mode”) for vulnerability scanning  
- Burp Suite for flow/session handling

---

# Pain Points & Known Issues

## Recurring Bugs  
- Fragile UI automation tests with Selenide and Playwright frequently break due to UI changes  
- Low API test coverage, especially for negative, edge, and boundary cases  
- Manual testing often reveals environment-related false positives/negatives

## Performance Bottlenecks  
- Lack of routine performance/load testing causes slowdowns at critical API endpoints (order execution, data retrieval, login), especially under peak loads

## Testing Gaps  
- Limited API test coverage for business-critical, negative, and boundary scenarios  
- Inconsistent security testing and lack of integration into daily QA workflows  
- No automated non-functional testingundefined
- Diversity gap: Lacking coverage across all supported browsers, devices, and OS versions.
## Process Issues:
- Manual regression cycles become long and resource-intensive due to new features and brittle automation.
- Insufficient number of QAs to maintain/expand automated test suites.
- Ambiguous requirements—user stories often lack clear acceptance criteria or sufficient description, leading to misinterpretation and rework.
- Instability and inconsistency in non-dedicated/shared test environments, causing unreliable test results.

---

# Business Rules & Constraints

## Critical User Journeys

- **User Onboarding & KYC:**  
  New users must complete registration including KYC (government-issued ID, proof of address, selfie) before depositing, trading, or withdrawing funds.

- **Account Security & Login:**  
  Secure registration and login with strong password enforcement and two-factor authentication (2FA). Sessions automatically logout after inactivity.

- **Trading:**  
  Users can place orders only when the market is open. Only products approved by user’s risk profile are tradable.

- **Funds Management:**  
  Only verified users may deposit or withdraw funds. Transaction histories and order activities are logged and auditable.

- **Notifications & Alerts:**  
  Real-time notifications for trade execution, margin calls, withdrawals, etc., sent via preferred channels (email, SMS, in-app).

---

# Compliance Requirements

- **KYC/AML:**  
  KYC verification mandatory prior to any trading, deposit, or withdrawal.

- **User Uniqueness:**  
  Unique email and government ID/passport per account enforced.

- **Age & Jurisdiction Restrictions:**  
  Registration restricted to legal-age users from allowed jurisdictions.

- **Data Retention:**  
  Personal data and transaction history retained for legally mandated time (e.g., 7 years), then securely destroyed unless extended legal retention required.

- **Auditability:**  
  All user data disclosures to regulators logged with precise timestamps.

- **Password & Security Policy:**  
  Strong passwords enforced; users auto-logged out after inactivity.

---

# Performance SLAs

- Main views must load in under 2 seconds.

- User actions (login, trade, balance checks) optimized for responsiveness, especially during peak times.

---

# Security Policies

- **Session Management:**  
  Automatic logout after inactivity; no indefinite sessions.

- **Authentication:**  
  Strong password policy with mandatory 2FA.

- **Data Security:**  
  All personal data exchanges and storage encrypted.

- **Vulnerability Safeguards:**  
  Protection against OWASP Top 10 vulnerabilities (XSS, SQL Injection, CSRF, etc.).

- **Disclosure Logging:**  
  All data access or disclosures to third parties logged with timestamps and rationale.

---

# Sample Data & User Roles

## Test Accounts

- **Alice Johnson (UserID: 1001):**  
  - KYC verified  
  - Retail account, Beginner (LOW role)  
  - UK jurisdiction  
  - 2FA enabled  
  - Limited to simple trades and restricted trade size  
  - Sample transactions: deposit, withdrawal, margin calls

- **Brian Green (UserID: 1012):**  
  - Intermediate (MEDIUM role)  
  - Higher limits  
  - Moderate trading volume  
  - Access to some advanced tools

- **Clara White (UserID: 1015):**  
  - Expert (EXCELLENT role)  
  - High-frequency and volume trading  
  - Access to advanced risk tools, analytics, and complex order types

---

# Data Sets

- **User Profiles:**  
  Unique ID, KYC docs/status, hashed complex password, DOB, residency/jurisdiction, account type, registration/login details, allowed products.

- **Account Data:**  
  Balances, margin level, transaction history (deposits, withdrawals, margin calls), account identifiers, currencies.

- **Trading Data:**  
  Open positions, order histories, instrument details (e.g., Symbol: XAU/USD, Gold CFD), market status.

- **Audit Log:**  
  Records of critical actions (logins, order activities, fund transfers) with timestamps for compliance.

- **Notifications:**  
  Types include margin call, trade execution, withdrawal, etc.
Type your prompt…


## Data Sets and Roles in TableView:
**Example Table 1** 

| Field               | Sample Value                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------|
| UserID              | 1001                                                                                         |
| Full Name           | Alice Johnson                                                                               |
| Email               | alice.johnson@email.com                                                                     |
| Password            | (complex/hashed)                                                                            |
| KYC Status          | Verified                                                                                     |
| Date of Birth       | 1993-09-12                                                                                  |
| Jurisdiction        | United Kingdom                                                                              |
| Account Type        | Retail                                                                                      |
| 2FA Status          | Enabled                                                                                    |
| Registration Date   | 2023-05-20                                                                                  |
| Last Login          | 2024-06-10T13:13:22Z                                                                        |
| National ID         | UK1234567A                                                                                   |
| AccountID           | ACC-8247                                                                                   |
| Currency            | GBP                                                                                        |
| Account Balance     | £12,500.00                                                                                 |
| Open Positions      | 1. EUR/USD Buy, 1.0 Lot, Open Price: 1.0850, Open Date: 2024-06-10<br>2. Gold CFD Sell, 0.5 Lot, Open Price: 2345.70, Open Date: 2024-06-11 |
| Available Margin    | £6,000.00                                                                                  |
| Maintenance Margin  | 30%                                                                                        |
| Transaction History | 1. Deposit £5,000 on 2024-06-01<br>2. Withdraw £2,000 on 2024-06-07<br>3. Margin Call on 2024-06-08 |
| InstrumentID        | INSTR-GLD                                                                                  |
| Symbol              | XAU/USD                                                                                   |
| Instrument Type     | Commodity (Gold CFD)                                                                        |
| Market Status       | Open (Mon–Fri, 01:00–23:59 UTC)                                                            |
| KYC Docs            | Passport, Proof of Address, Selfie                                                          |
| Risk Profile        | Moderate                                                                                   |
| Product Eligibility | Forex: Approved; CFDs: Not Approved                                                        |
| Audit Log           | Timestamped actions (logins, orders, withdrawals, etc.)                                   |
| Notification Types  | Trade Execution, Margin Call, Withdrawal Completed                                         |
| Notification Mediums| Email, SMS, In-App                                                                         |

---
**Example Table 2** 

| User Name / ID         | Role Level | Description                                                                                                         |
|------------------------|------------|---------------------------------------------------------------------------------------------------------------------|
| Alice Johnson (1001)   | LOW        | Beginner; limited trading history, basic KYC, small trade limits, can view and place simple trades only.           |
| Brian Green (1012)     | MEDIUM     | Intermediate; moderate trading volume, increased limits, access to some advanced tools and risk reports.            |
| Clara White (1015)     | EXCELLENT  | Expert; high trading frequency and volume, advanced KYC, full access to analytics, leverage, and complex order types. |
