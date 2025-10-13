# API_Tests

This folder contains:
- `mocks/`: Local Express.js mock API server for endpoints from FunnelAPI-Markets v4.
- `playwright/`: Playwright BDD-style API tests against the mock server.

## Prerequisites
- Install dependencies for the mock server:
  ```sh
  npm install express
  ```
- Install Playwright for API tests:
  ```sh
  npm install -D @playwright/test
  ```

## How to use
1. Start the mock server:
   ```sh
   node API_Tests/mocks/server.js
   ```
2. Run Playwright tests:
   ```sh
   npx playwright test API_Tests/playwright
   ```

3. Run all API requests in the Postman collection using Newman:
  ```sh
  npm run api-test
  ```

Endpoints and test cases are based on the Postman collection example.
## Troubleshooting Tip
If you have issues starting the mock server (e.g., port already in use), you can check and kill processes using the port:

1. List processes using port 4000:
  ```sh
  lsof -i :4000
  ```
2. Kill the process (replace <PID> with the actual process ID):
  ```sh
  kill -9 <PID>
  ```
Then restart the server:
  ```sh
  node API_Tests/mocks/server.js
  ```
