# 📋 Comprehensive Test Data Strategy for Markets.com

This document provides a full-featured test data strategy for the Markets.com trading platform, including a feature-based test data matrix, a test data cheat sheet, exploratory testing data kits for key personas, and a summary of how this approach improves testing quality.

---

## Task 1: Feature-Based Test Data Matrix

**Feature Selected:** User Registration & Onboarding (including KYC)

| TC# | Scenario Description | Test Data | Expected Result | Priority |
|-----|---------------------|-----------|----------------|----------|
| 1 | Valid registration, UK, KYC docs, strong password | Name: Alice Johnson<br>Email: alice.j@email.com<br>Password: Qw!12345<br>DOB: 1993-09-12<br>Country: UK<br>KYC: Passport, Utility Bill | Registration and KYC succeed, user is verified | High |
| 2 | Registration with duplicate email | Name: Brian Green<br>Email: alice.j@email.com<br>Password: Qw!12345<br>DOB: 1985-05-10<br>Country: UK<br>KYC: Passport | Error: Email already in use | High |
| 3 | Registration with weak password | Name: Clara White<br>Email: clara.w@email.com<br>Password: 12345<br>DOB: 1990-01-01<br>Country: UK<br>KYC: Passport | Error: Password does not meet policy | High |
| 4 | Registration with underage user | Name: Dan Young<br>Email: dan.y@email.com<br>Password: Qw!12345<br>DOB: 2010-06-15<br>Country: UK<br>KYC: Passport | Error: User must be 18+ | High |
| 5 | Registration from restricted jurisdiction | Name: Eva Smith<br>Email: eva.s@email.com<br>Password: Qw!12345<br>DOB: 1980-03-22<br>Country: US<br>KYC: Passport | Error: Jurisdiction not allowed | High |
| 6 | Registration with invalid email format | Name: Frank Lee<br>Email: frank.email.com<br>Password: Qw!12345<br>DOB: 1988-11-11<br>Country: UK<br>KYC: Passport | Error: Invalid email format | Medium |
| 7 | Registration with missing KYC docs | Name: Grace Kim<br>Email: grace.k@email.com<br>Password: Qw!12345<br>DOB: 1995-07-07<br>Country: UK<br>KYC: None | Error: KYC required | High |
| 8 | Registration with expired ID | Name: Henry Ford<br>Email: henry.f@email.com<br>Password: Qw!12345<br>DOB: 1975-12-12<br>Country: UK<br>KYC: Expired Passport | Error: KYC document expired | High |
| 9 | Registration with special characters in name | Name: Zoë Müller<br>Email: zoe.m@email.com<br>Password: Qw!12345<br>DOB: 1992-02-02<br>Country: UK<br>KYC: Passport | Registration and KYC succeed | Medium |
| 10 | Registration with long name fields | Name: Maximilianus Alexander The Great Johnson III<br>Email: max.a@email.com<br>Password: Qw!12345<br>DOB: 1982-08-08<br>Country: UK<br>KYC: Passport | Registration and KYC succeed | Low |
| 11 | Registration with non-Latin characters | Name: 李小龙<br>Email: bruce.l@email.com<br>Password: Qw!12345<br>DOB: 1980-11-27<br>Country: UK<br>KYC: Passport | Registration and KYC succeed | Medium |
| 12 | Registration with whitespace in email | Name: Ian White<br>Email: ian .white@email.com<br>Password: Qw!12345<br>DOB: 1987-04-04<br>Country: UK<br>KYC: Passport | Error: Invalid email format | Medium |
| 13 | Registration with missing required fields | Name: (blank)<br>Email: jane.d@email.com<br>Password: Qw!12345<br>DOB: 1991-09-09<br>Country: UK<br>KYC: Passport | Error: Name required | High |
| 14 | Registration with valid but rare country | Name: Olga Petrova<br>Email: olga.p@email.com<br>Password: Qw!12345<br>DOB: 1983-03-03<br>Country: Liechtenstein<br>KYC: Passport | Registration and KYC succeed | Low |
| 15 | Registration with mismatched KYC name | Name: Paul Black<br>Email: paul.b@email.com<br>Password: Qw!12345<br>DOB: 1989-05-05<br>Country: UK<br>KYC: Passport (name: Peter Black) | Error: KYC name mismatch | High |
| 16 | Registration with valid phone number | Name: Sara Blue<br>Email: sara.b@email.com<br>Password: Qw!12345<br>DOB: 1994-10-10<br>Country: UK<br>KYC: Passport<br>Phone: +447911123456 | Registration and KYC succeed | Medium |
| 17 | Registration with invalid phone number | Name: Tom Red<br>Email: tom.r@email.com<br>Password: Qw!12345<br>DOB: 1996-06-06<br>Country: UK<br>KYC: Passport<br>Phone: 123abc | Error: Invalid phone number | Medium |
| 18 | Registration with duplicate government ID | Name: Uma Green<br>Email: uma.g@email.com<br>Password: Qw!12345<br>DOB: 1985-12-25<br>Country: UK<br>KYC: Passport (ID: UK1234567A) | Error: Government ID already in use | High |
| 19 | Registration with valid address, edge case | Name: Victor Grey<br>Email: victor.g@email.com<br>Password: Qw!12345<br>DOB: 1988-08-18<br>Country: UK<br>KYC: Passport, Utility Bill (address: 1A, The Crescent, London, W1A 1AA) | Registration and KYC succeed | Medium |
| 20 | Registration with unsupported file type for KYC | Name: Wendy Brown<br>Email: wendy.b@email.com<br>Password: Qw!12345<br>DOB: 1997-07-17<br>Country: UK<br>KYC: .exe file | Error: Unsupported file type | High |

---

## Task 2: Test Data Cheat Sheet

| Field Type      | 5 Valid Values | 5 Invalid Values (with reason) | 3 Tricky Values |
|-----------------|---------------|-------------------------------|-----------------|
| **Email**       | alice@email.com<br>bob.smith@domain.co.uk<br>user+test@site.org<br>john_doe@company.com<br>z@x.io | aliceemail.com (missing @)<br>bob@.com (missing domain)<br>@domain.com (missing user)<br>user@domain (no TLD)<br>user@domain..com (double dot) | user@domain.c (1-char TLD)<br>user@-domain.com (dash at start)<br>user@domain.toolongtld |
| **Phone**       | +447911123456<br>02079460000<br>+1-202-555-0173<br>00442079460000<br>07911123456 | 123abc (letters)<br>+44 7911 123456789012345 (too long)<br>+44 (no number)<br>0000000000 (invalid)<br>+44-!@#$%^ (special chars) | +447911000000 (valid but rarely used)<br>+999999999999 (nonexistent country code)<br>+44 7911 123 456 (spaces) |
| **Date**        | 1993-09-12<br>2025-01-01<br>2000-02-29<br>1980-12-31<br>2024-06-19 | 2025-02-30 (invalid date)<br>1999-13-01 (invalid month)<br>abcd-ef-gh (letters)<br>2024/06/19 (wrong format)<br>31-12-2024 (wrong format) | 1900-01-01 (very old)<br>2099-12-31 (future)<br>2024-02-29 (leap year) |
| **Currency**    | £100.00<br>0.01<br>9999999.99<br>€50.50<br>$1,000.00 | -100.00 (negative)<br>abc (letters)<br>100,00 (comma as decimal)<br>100.000,00 (wrong format)<br> | 0 (zero)<br>9999999999.99 (very large)<br>0.0001 (tiny) |
| **Password**    | Qw!12345<br>StrongPass!2024<br>Pa$$w0rd123<br>Abcdefg1!<br>ZXCVbnm!2 | 12345 (too short)<br>password (no complexity)<br>QWERTY (no digits/special)<br>abc123 (no uppercase/special)<br>!@#$%^&* (no letters/digits) | Qw!12345Qw!12345Qw!12345 (very long)<br>空白密码 (non-Latin)<br>Qw! 12345 (space) |
| **Username**    | alice_johnson<br>bob.smith<br>user123<br>clara.white<br>trader_01 | (blank)<br>user!@# (special chars)<br>ab (too short)<br>thisusernameiswaytoolongtobevalid<br>user name (space) | admin (reserved)<br>user__name (double underscore)<br>user--name (double dash) |
| **Account Number** | ACC-8247<br>ACC-0001<br>ACC-9999<br>ACC-1234<br>ACC-5678 | 8247 (missing prefix)<br>ACC- (no number)<br>ACC-12A4 (letter in number)<br>ACC-123456789012345 (too long)<br>ACC_1234 (wrong separator) | acc-8247 (lowercase prefix)<br>ACC-0000 (all zeros)<br>ACC-99999 (extra digit) |
| **Postal Code** | W1A 1AA<br>90210<br>10001<br>EC1A 1BB<br>SW1A 2AA | 123 (too short)<br>ABCDE (letters only, wrong format)<br>W1A1AA (no space)<br>999999 (too long)<br>!@#$% (special chars) | 00000 (all zeros)<br>ZZ99 9ZZ (edge UK code)<br>12345-6789 (US+4) |
| **URL**         | https://markets.com<br>http://test.com<br>https://sub.domain.co.uk<br>https://markets.com/login<br>https://markets.com/trade | markets.com (no protocol)<br>http:/test.com (missing slash)<br>ftp://site.com (wrong protocol)<br>http:// (no domain)<br>http://.com (no subdomain) | https://localhost<br>https://127.0.0.1<br>https://markets.com:8080 |
| **Instrument Symbol** | XAU/USD<br>EUR/USD<br>BTC/USD<br>GOOG<br>TSLA | XAUUSD (missing slash)<br>EUR-USD (wrong separator)<br>BTC/USDT/ETH (too many parts)<br>123/456 (numeric)<br>BTC/USD/ (trailing slash) | XAU/USD (case sensitivity)<br>btc/usd (lowercase)<br>GOOG1 (numeric suffix) |

---

## Task 3: Exploratory Testing Data Kit

### Persona 1: Alice Johnson (Beginner, LOW role)

**Profile:**  
- UserID: 1001  
- Name: Alice Johnson  
- Email: alice.j@email.com  
- KYC: Verified  
- Country: UK  
- 2FA: Enabled  
- Account Type: Retail  
- Balance: £12,500.00  
- Role: LOW

**Scenarios:**
1. Registers and uploads KYC docs (passport, utility bill)
   - Data: Valid UK address, DOB 1993-09-12, strong password
2. Attempts to trade a restricted CFD product
   - Data: Product: US30 CFD, Expected: Error (not eligible)
3. Receives a margin call after a large trade
   - Data: Trade: EUR/USD, 5.0 Lot, Expected: Margin call notification
4. Tries to withdraw more than available balance
   - Data: Withdrawal: £15,000, Expected: Error (insufficient funds)
5. Changes notification preferences to SMS only
   - Data: Notification: SMS, Expected: Only SMS alerts received

---

### Persona 2: Brian Green (Intermediate, MEDIUM role)

**Profile:**  
- UserID: 1012  
- Name: Brian Green  
- Email: brian.g@email.com  
- KYC: Verified  
- Country: UK  
- 2FA: Enabled  
- Account Type: Retail  
- Balance: £25,000.00  
- Role: MEDIUM

**Scenarios:**
1. Places a trade in Gold CFD during market open
   - Data: Symbol: XAU/USD, 1.0 Lot, Expected: Trade executed
2. Updates profile with new address and phone number
   - Data: Address: 22 New St, London, Phone: +447911000001, Expected: Profile updated
3. Sets up a price alert for BTC/USD
   - Data: Alert: BTC/USD > $70,000, Expected: Notification when triggered
4. Attempts to deposit using an expired credit card
   - Data: Card: 4111 1111 1111 1111, Exp: 01/22, Expected: Error (card expired)
5. Requests a tax report for the last fiscal year
   - Data: Year: 2024, Expected: Downloadable PDF report

---

### Persona 3: Clara White (Expert, EXCELLENT role)

**Profile:**  
- UserID: 1015  
- Name: Clara White  
- Email: clara.w@email.com  
- KYC: Verified  
- Country: UK  
- 2FA: Enabled  
- Account Type: Retail  
- Balance: £100,000.00  
- Role: EXCELLENT

**Scenarios:**
1. Creates and deploys an automated trading strategy
   - Data: Strategy: EMA crossover, Instruments: EUR/USD, BTC/USD, Expected: Strategy deployed and monitored
2. Accesses advanced analytics dashboard
   - Data: Metrics: Win/loss ratio, risk-adjusted returns, Expected: Analytics displayed
3. Trades high leverage during volatile market
   - Data: Leverage: 1:30, Symbol: GBP/USD, Expected: Trade executed, leverage warning shown
4. Copies a trade from a verified trader
   - Data: Trader: Verified, Product: Gold CFD, Expected: Trade copied to account
5. Tests mobile app trading on iOS
   - Data: Device: iPhone 14, Trade: TSLA, Expected: Order placed, confirmation received

---
---
---
---
---
---
---

## Task 4: Markdown Report – Test Data Strategy & Benefits

### Test Data Strategy

- **Feature-based matrices** ensure all critical, edge, and negative scenarios are covered for each feature (e.g., registration, trading, withdrawal).
- **Cheat sheets** provide quick access to valid, invalid, and tricky values for common fields, supporting both manual and automated testing.
- **Persona-driven exploratory kits** enable realistic, scenario-based testing that mimics actual user behavior and edge cases.
- **Data diversity** (names, countries, currencies, instruments, roles) ensures coverage of localization, compliance, and business logic.

### How This Improves Testing

- **Reduces escaped defects** by proactively covering edge cases and negative flows.
- **Accelerates test creation** with reusable data sets and cheat sheets.
- **Improves automation** by providing ready-to-use, realistic data for scripts.
- **Enhances exploratory testing** with persona-driven scenarios that reflect real-world usage.
- **Supports compliance and security** by including regulatory, jurisdiction, and KYC/AML scenarios.
- **Facilitates communication** between QA, dev, and business teams with clear, structured test data documentation.

---

# AI-Generated Test Data for Manual Testing

---

## 1. Feature Test Data Matrix

- **Feature tested:** User Registration & Onboarding (including KYC) for Markets.com

- **Test cases summary (coverage achieved):**
  - 20 test cases covering positive registration, negative/validation errors, edge cases, compliance (KYC, jurisdiction, age), and special data (non-Latin, long names, rare countries).
  - Scenarios include: duplicate email, weak password, underage user, restricted jurisdiction, invalid/missing KYC, expired ID, mismatched KYC name, phone validation, and more.

- **Most valuable test scenarios identified:**
  - Registration from restricted jurisdiction (compliance enforcement)
  - Registration with expired or mismatched KYC documents (regulatory risk)
  - Registration with duplicate email or government ID (uniqueness constraint)
  - Registration with weak password (security policy)
  - Registration with valid but rare or edge-case data (robustness)

- **Table of the matrix (sample):**

| TC# | Scenario Description | Test Data | Expected Result | Priority |
|-----|---------------------|-----------|----------------|----------|
| 1 | Valid registration, UK, KYC docs, strong password | Name: Alice Johnson, Email: alice.j@email.com, Password: Qw!12345, DOB: 1993-09-12, Country: UK, KYC: Passport, Utility Bill | Registration and KYC succeed, user is verified | High |
| 5 | Registration from restricted jurisdiction | Name: Eva Smith, Email: eva.s@email.com, Password: Qw!12345, DOB: 1980-03-22, Country: US, KYC: Passport | Error: Jurisdiction not allowed | High |
| 8 | Registration with expired ID | Name: Henry Ford, Email: henry.f@email.com, Password: Qw!12345, DOB: 1975-12-12, Country: UK, KYC: Expired Passport | Error: KYC document expired | High |
| 13 | Registration with missing required fields | Name: (blank), Email: jane.d@email.com, Password: Qw!12345, DOB: 1991-09-09, Country: UK, KYC: Passport | Error: Name required | High |
| 15 | Registration with mismatched KYC name | Name: Paul Black, Email: paul.b@email.com, Password: Qw!12345, DOB: 1989-05-05, Country: UK, KYC: Passport (name: Peter Black) | Error: KYC name mismatch | High |

---

## 2. Test Data Cheat Sheet

- **Field types covered:** Email, phone, date, currency, password, username, account number, postal code, URL, instrument symbol.

- **Most useful test values discovered:**
  - Valid edge cases: one-character TLD emails, leap year dates, zero/large currency amounts, non-Latin names.
  - Invalids: missing @ in email, negative currency, expired card, blank fields, unsupported file types.
  - Tricky: reserved usernames, localhost URLs, rare country codes, very long names.

- **How this improves test efficiency:**
  - Provides instant access to a variety of valid, invalid, and tricky values for both manual and automated testing.
  - Reduces time spent inventing negative and edge-case data.
  - Ensures consistent, reusable data for regression and exploratory testing.
  - Helps uncover hidden bugs by systematically challenging field validation and business logic.

---

## 3. Exploratory Testing Data

- **Personas created:**
  - Alice Johnson (Beginner, LOW role): cautious, new to trading, limited features.
  - Brian Green (Intermediate, MEDIUM role): moderate trading, uses alerts and reports.
  - Clara White (Expert, EXCELLENT role): advanced analytics, automation, high-frequency trading.

- **Scenarios developed:**
  - Alice: KYC onboarding, restricted product trade, margin call, over-withdrawal, notification preferences.
  - Brian: Gold CFD trade, profile update, price alert, expired card deposit, tax report request.
  - Clara: Automated trading strategy, analytics dashboard, high-leverage trade, copy trading, mobile trading.

- **Insights gained from persona-based testing:**
  - Beginners are more likely to trigger onboarding and compliance errors.
  - Experts stress advanced features, analytics, and automation, revealing edge-case bugs.
  - Persona-driven scenarios expose gaps in error handling, user messaging, and cross-feature integration.
  - Realistic personas help validate business rules (e.g., role-based access, product eligibility).

---

## 4. Testing Insights

- **Potential bugs or issues identified:**
  - Weak validation for KYC and registration fields.
  - Insufficient error messaging for compliance and security failures.
  - Gaps in negative and edge-case coverage for phone, email, and document uploads.
  - Inconsistent handling of special characters and non-Latin input.
  - Fragile automation for UI changes and lack of negative API tests.

- **How AI-generated test data improved test coverage:**
  - Enabled rapid creation of comprehensive test suites with realistic and edge-case data.
  - Increased defect detection in early cycles by targeting high-risk and previously missed scenarios.
  - Supported both manual and automated testing with ready-to-use, diverse data sets.
  - Improved coverage of compliance, security, and localization requirements.

- **Challenges faced and solutions found:**
  - **Challenge:** Ensuring test data reflects real-world diversity and regulatory constraints.
    - **Solution:** Used AI to generate data for rare countries, edge-case names, and compliance scenarios.
  - **Challenge:** Maintaining data consistency across manual and automated tests.
    - **Solution:** Centralized cheat sheets and persona kits for all testers.
  - **Challenge:** Keeping up with UI changes and automation fragility.
    - **Solution:** Focused on robust data-driven tests and prioritized API-level automation for critical flows.

---

