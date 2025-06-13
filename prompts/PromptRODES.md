#  RODES (Role, Objective, Details, Examples, Scope)

## Prompt:

- **Role:** Senior QA Engineer specializing in Performance testing
- **Objective:** Analyze my Project [attach the Context Project File into the prompt] and identify load testing strategy for the Trading Web Platform
- **Details:** The platform can handle 1000 concurrent users, expecting 10x increase, but I need to find out if there is 10x increase how it will behave
- **Examples:** Focus on login, CFD search and payment processing on Buy and Sell CFDs
- **Scope:** Trading Web Platform only

## Output: 
### Load Testing Strategy for www.markets.com Trading Web Platform

### 1. Objective
- Evaluate the system's behavior, performance bottlenecks, and scalability when handling a **10x increase in concurrent users** (from 1,000 to 10,000).
- Focus on key critical user journeys for the Trading Web Platform: login, CFD search, and payment processing (Buy/Sell CFDs).
- Identify response time degradations, throughput limits, error rates, and resource utilization under peak loads.
- Ensure the platform meets SLAs and user experience expectations despite the scale increase.

### 2. Scope

**Functional Areas Under Test:**
- Secure User Login (including 2FA where possible).
- CFD Instrument Search and Market Data retrieval.
- Payment Processing module for Buy and Sell CFDs workflows.

**Users**
- Simulated traders across expertise levels (LOW, MEDIUM, EXCELLENT), ensuring realistic usage profiles.

**Load Levels**
- Gradual ramp-up from baseline (1,000 concurrent users) to high load (10,000 concurrent users).

**Infrastructure**
- Cloud-hosted backend APIs, Java Spring Boot services behind Tomcat, MySQL DB, and frontend React components accessed via WebSocket and REST.

### 3. Test Environment & Tools

**Environment Setup**
- Dedicated test/staging environment mirroring production as closely as possible.
- Scalable cloud environment to simulate users across geographical regions.

**Load Testing Tools**
- JMeter for simulating HTTP/REST API load (login, payment APIs).
- Gatling or k6 for advanced load scenarios, including concurrency with complex workflows.
- Datadog APM and other infrastructure monitoring for CPU, memory, network, DB query times.

**Data Preparation**
- Pre-provisioned test user accounts spanning LOW, MEDIUM, EXCELLENT roles.
- Seeded CFD instrument data with realistic market status and trading parameters.

### 4. Key Performance Metrics to Monitor

| Metric                            | Target SLA / Threshold                    |
|----------------------------------|-------------------------------------------|
| Login Operations                 | Response time < 2 seconds, 99% success rate |
| CFD Search Query                | Data load time < 2 sec for first meaningful paint |
| Payment Processing (Buy/Sell CFDs) | Transaction completion < 4 seconds under load |
| Error Rate                      | <1% failures/errors across all workflows  |
| Throughput                     | Sustained requests per second at 10,000 users |
| Resource Utilization            | CPU < 80%, Memory < 70% at peak            |
| DB Latency                     | Query response < 200ms on average           |
| WebSocket Stability            | No disconnections/reconnections within test duration|

### 5. Load Test Scenarios

**A. Login Flow**
Simulate 10,000 concurrent users performing:
- Step 1: Enter credentials (username/password).
- Step 2: Handle 2-Factor Authentication (simulate or mock if external).
- Step 3: Successful session creation with JWT token retrieval.

**Test focus:**
- Authentication endpoint performance.
- Session store/load behavior.
- Rate limiting or throttling mechanisms.
- Observe any latency spikes or failures.

**B. Peak Login Spike**
- Simulate a sudden spike of 3,000 users logging in within 5 minutes.
- Validate session creation, 2FA handling, JWT token issuance.
- Monitor rate limiting, account lockouts, and latency under sudden burst.

**C. Invalid Login Attempts Flood**
- Simulate a high volume of invalid login attempts (wrong passwords, locked accounts) by 5,000 users over 30 minutes.
- Validate security mechanisms like account lockout, captcha triggers, and alerting.
- Monitor system response to brute force attempts and prevention of denial-of-service impacts.

**D. Token Refresh Under Load**
- Simulate 10,000 users actively refreshing their JWT tokens concurrently.
- Check refresh endpoint performance and token expiry handling.
- Observe backend session and cache behavior under continuous token renewal pressure.

**2. CFD Instrument Search & Market Data**

**A. High Frequency Search Queries**
- Simulate 10,000 users performing random CFD keyword searches repeatedly over 1 hour.
- Measure backend query execution times and cache hit rates.
- Analyze impact on database and API throughput.

**B. Market Data Subscription with Mixed QoS Levels**
- Simulate simultaneous WebSocket connections from 10,000 users subscribing with different Quality of Service levels.
- Validate prioritization and bandwidth allocation for premium vs standard users.
- Monitor latency, jitter, and message drop rates.

**3. Payment Processing - Buy/Sell CFDs**

**A. Failed Payment Simulations**
- Simulate 1,000 users attempting payments with invalid details or insufficient funds.
- Validate error handling, rollback consistency, and user notifications.
- Monitor failed transaction logging and subsequent retry mechanisms.

**B. Payment Gateway Failover Test**
- Simulate payment gateway outages during peak load with 5,000 simultaneous transactions.
- Test system fallback, retry policies, and degradation behavior.
- Verify data consistency and report generation post-failover.