## Task 3: Performance Testing Implementation

**Select 5 critical queries from the application**

---

### 1. Get a user's full portfolio summary (accounts, balances, open positions, KYC status)
```sql
SELECT
    u.user_id,
    u.full_name,
    u.kyc_status,
    a.account_id,
    a.currency,
    a.balance,
    COUNT(DISTINCT p.position_id) AS open_positions,
    GROUP_CONCAT(DISTINCT i.symbol) AS instruments
FROM users u
JOIN accounts a ON u.user_id = a.user_id
LEFT JOIN positions p ON a.account_id = p.account_id AND p.status = 'Open'
LEFT JOIN instruments i ON p.instrument_id = i.instrument_id
WHERE u.status = 'Active'
GROUP BY u.user_id, a.account_id;
```
### 2. List all transactions for a given account, most recent first

```sql
SELECT
    t.txn_id,
    t.txn_type,
    t.amount,
    t.txn_date,
    t.description
FROM transactions t
WHERE t.account_id = ?
ORDER BY t.txn_date DESC;
```

### 3. Find users with pending or rejected KYC documents
```sql
SELECT
    u.user_id,
    u.full_name,
    k.doc_type,
    k.status,
    k.upload_date
FROM users u
JOIN kyc_documents k ON u.user_id = k.user_id
WHERE k.status IN ('Pending', 'Rejected')
ORDER BY k.upload_date DESC;
```

### 4. Get all open positions for a specific instrument
```sql
SELECT
    p.position_id,
    p.account_id,
    u.full_name,
    p.side,
    p.lot_size,
    p.open_price,
    p.open_date
FROM positions p
JOIN accounts a ON p.account_id = a.account_id
JOIN users u ON a.user_id = u.user_id
WHERE p.status = 'Open'
  AND p.instrument_id = ?;
```
### 5. Audit log: List all actions for a user in the last 30 days
```sql
SELECT
    a.log_id,
    a.action,
    a.details,
    a.timestamp
FROM audit_log a
WHERE a.user_id = ?
  AND a.timestamp >= DATE_SUB(NOW(), INTERVAL 30 DAY)
ORDER BY a.timestamp DESC;

```



---
**Create performance test cases using AI-generated prompts**

---

---
## Create Performance Test Cases Using AI-Generated Prompts

Below are performance test cases for the 5 critical queries, designed using AI-generated prompts. These cases can be used with tools like JMeter, k6, or custom scripts to evaluate query performance under various conditions.

---

### Test Case 1: Portfolio Summary Query Under Load

**Prompt:**  
"Simulate 1000 concurrent users each requesting their full portfolio summary. Measure average, median, and 95th percentile response times. Identify any slowdowns or timeouts."

**Steps:**  
1. Prepare test data with at least 10,000 users and 50,000 accounts.
2. Use a load testing tool to send 1000 parallel requests for the portfolio summary query.
3. Record response times and error rates.
4. Analyze for bottlenecks (e.g., slow joins, locking).

**Expected Result:**  
- 95% of requests complete within 1 second.
- No timeouts or database errors.

---

### Test Case 2: Transaction History Query with High Frequency

**Prompt:**  
"Execute the transaction history query for 500 different accounts, each with 10,000 transactions, in rapid succession. Monitor for query degradation and database resource usage."

**Steps:**  
1. Populate the `transactions` table with at least 5 million records.
2. Run the query for 500 accounts in parallel.
3. Monitor CPU, memory, and disk I/O on the database server.
4. Track slow queries and any lock contention.

**Expected Result:**  
- Each query returns within 500 ms.
- No significant increase in server resource usage.

---

### Test Case 3: KYC Status Query for Compliance Audits

**Prompt:**  
"Run the KYC status query for all users, simulating a compliance audit. Repeat the query 100 times to simulate multiple auditors working simultaneously."

**Steps:**  
1. Ensure the `kyc_documents` table has a realistic distribution of statuses.
2. Execute the query 100 times in parallel.
3. Measure average and worst-case response times.

**Expected Result:**  
- All queries return within 300 ms.
- No deadlocks or slowdowns.

---

### Test Case 4: Open Positions Query for High-Volume Instruments

**Prompt:**  
"Test the open positions query for the 10 most-traded instruments, each with 10,000 open positions. Simulate 50 concurrent requests per instrument."

**Steps:**  
1. Populate the `positions` table with at least 100,000 open positions across 10 instruments.
2. Run 50 parallel queries per instrument.
3. Monitor for query latency and database locks.

**Expected Result:**  
- 99% of queries return within 400 ms.
- No lock waits or query failures.

---

### Test Case 5: Audit Log Query for Recent User Activity

**Prompt:**  
"Simulate 200 compliance officers querying the audit log for different users' last 30 days of activity. Each officer runs 10 queries in parallel."

**Steps:**  
1. Populate the `audit_log` table with at least 1 million records.
2. Simulate 200 users, each running 10 queries at once.
3. Track response times and any slow queries.

**Expected Result:**  
- All queries complete within 700 ms.
- No database errors or excessive resource usage.

---

**Note:**  
Adjust data volumes and concurrency levels to match your production environment for more accurate results. Use these test cases to establish baseline metrics

---

**Establish baseline performance metrics**

---

---
## Establish Baseline Performance Metrics

To ensure your database and critical queries meet performance expectations, establish baseline metrics before optimization or scaling. These baselines serve as reference points for future performance comparisons.

---

### Baseline Metrics to Capture

- **Query Response Time:**  
  - Average, median, and 95th percentile response times for each critical query.
- **Throughput:**  
  - Number of queries processed per second under normal and peak loads.
- **Resource Utilization:**  
  - CPU, memory, and disk I/O usage on the database server during test runs.
- **Error Rate:**  
  - Percentage of failed or timed-out queries.
- **Concurrency Handling:**  
  - Maximum number of concurrent users/queries supported before degradation.

---

### How to Measure

1. **Prepare Test Data:**  
   - Populate tables with realistic volumes (see performance test cases for suggested sizes).

2. **Use a Load Testing Tool:**  
   - Tools like JMeter, k6, or custom scripts can simulate concurrent users and measure response times.

3. **Run Each Critical Query:**  
   - Execute each query under varying loads (e.g., 1, 10, 100, 1000 concurrent users).
   - Record response times and system metrics.

4. **Collect and Analyze Results:**  
   - Calculate average, median, and 95th percentile response times.
   - Note any slow queries, errors, or resource bottlenecks.

---

### Example Baseline Table

| Query Description                | Avg Time (ms) | 95th %ile (ms) | Throughput (qps) | Error Rate (%) | Max Concurrency |
|----------------------------------|---------------|----------------|------------------|---------------|-----------------|
| Portfolio Summary                |      220      |      400       |       80         |      0        |      1000       |
| Transaction History              |      120      |      250       |      120         |      0        |      1000       |
| KYC Status                       |      90       |      180       |      150         |      0        |      1000       |
| Open Positions by Instrument     |      150      |      300       |      100         |      0        |      1000       |
| Audit Log (30 days)              |      180      |      350       |       90         |      0        |      1000       |

*Replace values with your actual test results.*

---

### Recommendations

- Run baseline tests during off-peak hours to avoid interference.
- Repeat tests after any schema, index, or infrastructure changes.
- Store baseline results for future comparison and trend analysis.

---

**Summary:**  
Baseline performance metrics provide a foundation for ongoing monitoring, troubleshooting, and optimization of your database and application

---

**Implement automated performance monitoring**

---

---
## Implement Automated Performance Monitoring

Automated performance monitoring ensures that your database and critical queries are continuously tracked for latency, errors, and resource usage. This enables early detection of issues and supports ongoing optimization.

---

### Recommended Tools

- **Database Monitoring:**  
  - MySQL Enterprise Monitor, Percona Monitoring and Management (PMM), or open-source tools like Prometheus with mysqld_exporter.
- **Query Performance:**  
  - MySQL Performance Schema, slow query log, or APM tools (e.g., New Relic, Datadog, AppDynamics).
- **System Metrics:**  
  - Grafana (for dashboards), Prometheus (for metrics collection), or native cloud monitoring (AWS CloudWatch, Azure Monitor).

---

### Steps to Implement

1. **Enable MySQL Slow Query Log**
   - Edit your MySQL config (`my.cnf`):
     ```
     [mysqld]
     slow_query_log = 1
     slow_query_log_file = /var/log/mysql/slow.log
     long_query_time = 0.5
     ```
   - Restart MySQL and monitor `/var/log/mysql/slow.log` for slow queries.

2. **Install and Configure Monitoring Tools**
   - Set up Prometheus with `mysqld_exporter` to collect MySQL metrics.
   - Use Grafana to visualize query times, throughput, and resource usage.
   - Optionally, deploy Percona Monitoring and Management (PMM) for a turnkey solution.

3. **Set Up Query and Resource Dashboards**
   - Create dashboards for:
     - Query response times (avg, p95, max)
     - Query throughput (QPS)
     - Error rates
     - CPU, memory, and disk I/O

4. **Configure Alerts**
   - Set thresholds for key metrics (e.g., response time > 1s, error rate > 1%).
   - Configure email, Slack, or PagerDuty alerts for threshold breaches.

5. **Automate Reporting**
   - Schedule daily/weekly reports on performance trends and anomalies.
   - Archive slow query logs and monitoring data for historical analysis.

---

### Example: Prometheus + Grafana Stack

- **Prometheus** scrapes metrics from `mysqld_exporter` and system exporters.
- **Grafana** visualizes metrics with custom dashboards.
- **Alertmanager** (optional) sends notifications on threshold breaches.

---

### Best Practices

- Monitor both query-level and system-level metrics.
- Regularly review slow query logs and optimize problematic queries.
- Test alerting to ensure timely notification of issues.
- Document your monitoring setup and update as your system evolves.

---

**Summary:**  
Automated performance monitoring provides real-time visibility into your database health and query performance, enabling proactive management

---

**Document performance benchmarks and thresholds**

---

---
## Document Performance Benchmarks and Thresholds

Establishing and documenting clear performance benchmarks and thresholds ensures your database and application queries meet business requirements and SLAs. These values should be reviewed and updated regularly as your system evolves.

---

### Performance Benchmarks

| Query Description                | Target Avg Time (ms) | Target 95th %ile (ms) | Target Throughput (qps) | Max Error Rate (%) |
|----------------------------------|----------------------|-----------------------|------------------------|--------------------|
| Portfolio Summary                |        ≤ 250         |         ≤ 500         |         ≥ 80           |        0           |
| Transaction History              |        ≤ 150         |         ≤ 300         |        ≥ 120           |        0           |
| KYC Status                       |        ≤ 100         |         ≤ 200         |        ≥ 150           |        0           |
| Open Positions by Instrument     |        ≤ 200         |         ≤ 400         |        ≥ 100           |        0           |
| Audit Log (30 days)              |        ≤ 200         |         ≤ 400         |         ≥ 90           |        0           |

*Benchmarks are based on initial baseline tests and business requirements. Adjust as needed for your environment.*

---

### Thresholds for Alerts

- **Query Response Time:**  
  - Alert if average response time exceeds target by 20% for any critical query.
  - Alert if 95th percentile exceeds threshold for more than 5 minutes.
- **Throughput:**  
  - Alert if throughput drops below 80% of target for more than 10 minutes.
- **Error Rate:**  
  - Alert on any non-zero error rate for critical queries.
- **Resource Utilization:**  
  - Alert if CPU usage > 80% or memory usage > 85% for more than 10 minutes.

---

### Example Alert Rules

- **Portfolio Summary Query:**  
  - Alert if avg > 300 ms or 95th %ile > 600 ms.
- **Transaction History Query:**  
  - Alert if avg > 180 ms or 95th %ile > 350 ms.
- **Any Query:**  
  - Alert if error rate > 0% or if query fails.

---

### Review and Update Policy

- Review benchmarks and thresholds quarterly or after major