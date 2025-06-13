# RTF (Role, Task, Format)

## Prompt:

- **Role:** Senior QA Engineer specializing in Web testing
- **Task:** Analyze my Project [attach the Context Project File into the prompt] and identify 10 critical test scenarios for Web testing
- **Format:** Table with user roles, test type, priority, and expected validation

![Screenshot of the ChatGPT prompt](/screenshots/promt_for_RTF_model.png)

## Output: 
| #  | User Role           | Test Type         | Priority | Scenario Description                                                                 | Expected Validation                                                                  |
| -- | ------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 1  | Trader (LOW)        | Functional/UI     | High     | KYC-verification enforcement before trading or deposit                               | Unverified users should be blocked from trading/depositing; prompt KYC requirement.  |
| 2  | All Roles           | Security          | Critical | Session timeout after inactivity                                                     | User is logged out automatically after session inactivity threshold (e.g., 10 mins). |
| 3  | Trader (MEDIUM)     | Compatibility     | High     | Cross-browser trade placement and execution flow (Chrome, Firefox, Safari)           | Trade placement should behave consistently across major supported browsers.          |
| 4  | Trader (EXCELLENT)  | Functional/API    | High     | Order placement validation for complex orders via UI and API                         | Orders should succeed/fail based on real-time market and user eligibility.           |
| 5  | Platform Admin      | Role-based Access | Critical | Admin access restricted to dashboard/configuration pages                             | Unauthorized users should receive “Access Denied” when attempting admin endpoints.   |
| 6  | All Roles           | Usability/UX      | Medium   | Responsive layout and usability on different screen resolutions and mobile devices   | UI should not break; menus, charts, and modals should adapt to screen size.          |
| 7  | Trader (LOW/MEDIUM) | Performance       | High     | Trade execution response under peak loads                                            | Trades should complete in <2 seconds under simulated load (JMeter/Gatling).          |
| 8  | Compliance Officer  | Audit Trail       | Critical | Ensure all actions (orders, logins, fund movements) are timestamp-logged             | Every critical action should generate a corresponding entry in the audit log.        |
| 9  | Support Agent       | Notification Flow | Medium   | Verify notification delivery for withdrawals/margin calls via all preferred channels | Email/SMS/in-app alerts should be triggered and logged per user settings.            |
| 10 | Trader (ALL levels) | Negative Testing  | High     | Attempt invalid operations (e.g., trade outside market hours, exceed balance)        | System should block action and show appropriate error messages and no state change.  |
