# Azure DevOps QA Examples

---

## Prerequisite: Configure MCP Servers (Azure DevOps + Memory)

Add the following configuration to your project’s `.vscode/settings.json` file:

```json
{
    "mcp": {
        "servers": {
            "ado": {
                "type": "stdio",
                "command": "npx",
                "args": [
                    "-y",
                    "@azure-devops/mcp",
                    "${input:ado_org}"
                ]
            },
            "memory": {
                "command": "npx",
                "args": [
                    "-y",
                    "@modelcontextprotocol/server-memory"
                ]
            }
        },
        "inputs": [
            {
                "id": "ado_org",
                "type": "promptString",
                "description": "Azure DevOps organization name (e.g. 'contoso')"
            }
        ]
    }
}
```

---

## Task 1: User Story in Azure DevOps

**Title:**
As a user, I want to reset my password so that I can regain access if I forget it.

**Acceptance Criteria:**
- User can request a password reset via email
- Email contains a secure, time-limited reset link
- User can set a new password via the link
- Password complexity rules enforced
- Success and error messages are clear

---

## Simulate import with AI/MCP by this prompt:

```gherkin
Create a new Azure DevOps user story for password reset, including acceptance criteria and priority.
```

## Task 2: AI-Generated Refinement Questions

1. What is the expiration time for the reset link?
2. Are there limits on how often a user can request a reset?
3. Should the user be logged out of all sessions after a reset?
4. What password complexity rules apply?
5. How are failed reset attempts handled?
6. Is multi-factor authentication required for reset?
7. Should the reset link be single-use?
8. Are there audit log requirements for resets?
9. What error messages should be shown for invalid/expired links?
10. Should the user receive confirmation after a successful reset?

---

## Task 3: BDD Test Cases (Gherkin)

```gherkin
Feature: Password Reset

  @High
  Scenario: User requests password reset
    Given I am on the login page
    When I click "Forgot Password"
    And I enter my registered email
    Then I receive a password reset email

  @High
  Scenario: User resets password with valid link
    Given I have received a valid reset link
    When I open the link and enter a new password
    Then my password is updated
    And I can log in with the new password

  @Medium
  Scenario: User tries to use expired reset link
    Given I have an expired reset link
    When I try to reset my password
    Then I see an error message about link expiration
```

---

## Example 4: Azure DevOps Work Item (Test Case)

| Step | Action                                 | Expected Result                        |
|------|----------------------------------------|----------------------------------------|
| 1    | Go to login page                       | Login page is displayed                |
| 2    | Click "Forgot Password"                | Password reset form is shown           |
| 3    | Enter registered email and submit      | Confirmation message is displayed      |
| 4    | Check email for reset link             | Email with reset link is received      |
| 5    | Click reset link and enter new password| Password is updated, success message   |

---

## Example 5: AI-Powered Prompt for Azure DevOps MCP

> Generate test cases for user story #12345 (password reset), covering positive, negative, and edge scenarios. Link them to the user story and assign to the QA team.

---

## Task 4: Execute Tests and Capture Results

- Use the AI/MCP workflow to execute the generated test cases (manual or automated).
- For each test, record the outcome (PASS/FAIL), actual result, and any defects found.
- Example result table:

| Test Case                        | Expected Result                | Actual Result         | Status |
|----------------------------------|-------------------------------|----------------------|--------|
| User requests password reset     | Email sent                    | Email sent           | ✅     |
| User resets password with link   | Password updated              | Password updated     | ✅     |
| User uses expired reset link     | Error message shown           | Error message shown  | ✅     |
| User enters weak password        | Complexity error shown         | No error shown       | ❌     |

---

## Task 5: Analyze Patterns with Memory Server

- Use the Memory MCP server to store and analyze test execution data.
- Identify recurring issues, flaky tests, or common failure points.
- Example memory insights:
  - "Password complexity errors are often missed in edge cases."
  - "Reset link expiration is a frequent source of user confusion."
  - "Mobile browser tests for password reset are more likely to fail."
- Use these insights to refine future test cases and improve coverage.

---

## Task 6: Generate AI-Enhanced Reports

- Summarize test execution and analysis in a Markdown report.
- Include:
  - Test coverage summary
  - Key findings and patterns
  - Recommendations for improvement
  - Example:

```markdown
# AI-Enhanced QA Report: Password Reset Feature

## Test Coverage
- 4 scenarios tested (happy path, error, edge, security)

## Key Findings
- All core flows pass except weak password validation
- Expired link handling is robust
- Mobile browser coverage needs improvement

## Recommendations
- Strengthen password complexity checks
- Add more mobile-specific test cases
- Improve user messaging for reset failures
```

---

# Step-by-Step Implementation

## Step 1: User Story Analysis

**Sample User Story:**
As a shopper, I want to complete a checkout so that I can purchase items in my cart.

### 1. Clarifying Questions for the Product Owner
1. What payment methods should be supported (credit card, PayPal, etc.)?
2. Are guest checkouts allowed, or is registration required?
3. What are the shipping options and associated rules?
4. Should users be able to save multiple shipping addresses?
5. Are there any promo code or discount features?
6. What are the validation rules for billing and shipping information?
7. How should inventory shortages be handled during checkout?
8. What is the expected behavior for failed payments?
9. Are there any compliance or tax requirements for certain regions?
10. Should users receive order confirmation via email, SMS, or both?

### 2. Acceptance Criteria Validation
- User can review cart and proceed to checkout
- User can enter or select shipping and billing information
- User can select a payment method and complete payment
- System validates all required fields and payment details
- User receives confirmation of successful order
- Errors are displayed for invalid or missing information
- Inventory is updated after successful checkout

### 3. Risk Assessment (Based on Similar Past Features)
- Payment gateway integration failures
- Incomplete or incorrect order confirmation emails
- Edge cases with promo codes or discounts
- Inventory not updating correctly after checkout
- Mobile/responsive UI issues during checkout
- High cart abandonment rates due to complex flows

### 4. Recommended Test Strategy
- BDD scenarios for all checkout flows (happy path, errors, edge cases)
- Automated regression tests for payment, shipping, and order confirmation
- Manual exploratory testing for UI/UX and mobile
- Performance/load testing for peak shopping periods
- Security testing for payment and personal data handling
- Negative testing for invalid inputs and payment failures

---

