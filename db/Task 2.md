
## Task 2: MCP Server Setup

**Set up an MCP server for your project's database**

---

### 1. Install MySQL Server and start it

```zsh
brew update
brew install mysql
brew services start mysql
```

### 2. Create the Database and Import the Schema

**Log in to MySQL:**
```zsh
mysql -u root -p
```

**Create your database:**
```sql
CREATE DATABASE smarter_trading;
USE smarter_trading;
```

Copy all SQL statements from the DatabaseTableDefinition.md and paste them into the MySQL shell to create the tables.

**Create a Dedicated User:**
```sql
CREATE USER 'trader'@'localhost' IDENTIFIED BY 'my_password';
GRANT ALL PRIVILEGES ON smarter_trading.* TO 'trader'@'localhost';
FLUSH PRIVILEGES;
```

**Test the Connection**
Exit and reconnect as your new user:
```zsh
<mySql>exit;
```
```zsh
mysql -u trader -p smarter_trading
```

**Restart MySQL:**
```zsh
brew services restart mysql
```

We now have a MySQL (MCP) server running with our schema. We can connect using any MySQL client, run the queries, and manage the project’s database. 


---
**Configure secure read-only access to your test database** 

---

To configure secure read-only access to your test database (smarter_trading), follow these steps. This will allow a user to connect and run SELECT queries, but not modify data or schema:


---
## Configure Secure Read-Only Access to Your Test Database

To configure secure read-only access to your test database (`smarter_trading`), follow these steps. This will allow a user to connect and run SELECT queries, but not modify data or schema.

### 1. Log in as root or an admin user

```zsh
mysql -u root -p
```

---

### 2. Create a Read-Only User

Replace `readonly_user` and `readonly_password` with your desired username and a strong password.

```sql
CREATE USER 'readonly_user'@'localhost' IDENTIFIED BY 'readonly_password';
```

If you want to allow remote access (from a specific IP):

```sql
CREATE USER 'readonly_user'@'your.ip.address.here' IDENTIFIED BY 'readonly_password';
```

---

### 3. Grant Read-Only Privileges

```sql
GRANT SELECT ON smarter_trading.* TO 'readonly_user'@'localhost';
```

Or, for remote access:

```sql
GRANT SELECT ON smarter_trading.* TO 'readonly_user'@'your.ip.address.here';
```

---

### 4. Apply Privilege Changes

```sql
FLUSH PRIVILEGES;
```

---

### 5. Test the Read-Only User

Exit MySQL and reconnect as the new user:

```zsh
mysql -u readonly_user -p smarter_trading
```

Try running a SELECT query (should work):

```sql
SELECT * FROM users;
```

Try running an INSERT/UPDATE/DELETE (should fail with a permission error).

---

### 6. (Optional) Enforce SSL for Remote Connections

For extra security, require SSL for the user (if your MySQL server is configured for SSL):

```sql
ALTER USER 'readonly_user'@'your.ip.address.here' REQUIRE SSL;
```

---

**Summary:**  
We now have a secure, read-only user for your test database. 
This user can only run SELECT queries and cannot modify any data or schema. Adjust the host/IP

---
**Use the MCP server to perform schema inspection**

---

---
## Use the MCP Server to Perform Schema Inspection

You can inspect your MySQL (MCP) database schema using standard SQL commands. Here are some useful commands to explore your schema:

### 1. List All Databases

```sql
SHOW DATABASES;
```

---

### 2. Select Your Database

```sql
USE smarter_trading;
```

---

### 3. List All Tables

```sql
SHOW TABLES;
```

---

### 4. Describe Table Structure

Replace `table_name` with the name of the table you want to inspect (e.g., `users`):

```sql
DESCRIBE table_name;
```

or

```sql
SHOW COLUMNS FROM table_name;
```

---

### 5. Get Table Creation Statement

To see the full CREATE statement for a table:

```sql
SHOW CREATE TABLE table_name;
```

---

### 6. List All Columns in All Tables (Summary)

To get a summary of all columns in all tables:

```sql
SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE, COLUMN_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'smarter_trading'
ORDER BY TABLE_NAME, ORDINAL_POSITION;
```

---

### 7. List All Foreign Keys

```sql
SELECT TABLE_NAME, COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = 'smarter_trading' AND REFERENCED_TABLE_NAME IS NOT NULL;
```

---



---
**Generate a report of your database structure using MCP**

---
---
## Generate a Report of Your Database Structure Using MCP

Below is a sample report of the `smarter_trading` database structure, generated using standard MySQL (MCP) inspection commands.

---

### Database: `smarter_trading`

#### Tables

- users
- accounts
- kyc_documents
- transactions
- positions
- instruments
- audit_log
- notifications

---

#### Table Structures

##### users

| Column           | Type                                         | Null | Key | Extra          |
|------------------|----------------------------------------------|------|-----|----------------|
| user_id          | INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| full_name        | VARCHAR(100)                                 | NO   |     |                |
| email            | VARCHAR(100)                                 | NO   | UNI |                |
| password_hash    | VARCHAR(255)                                 | NO   |     |                |
| kyc_status       | ENUM('Pending','Verified','Rejected')        | NO   |     |                |
| dob              | DATE                                         | NO   |     |                |
| jurisdiction     | VARCHAR(50)                                  | NO   |     |                |
| account_type     | ENUM('Retail','Institutional')               | NO   |     |                |
| role             | ENUM('LOW','MEDIUM','EXCELLENT','ADMIN','COMPLIANCE') | NO |     |                |
| two_fa_enabled   | BOOLEAN                                      | YES  |     |                |
| registration_date| DATETIME                                     | NO   |     |                |
| last_login       | DATETIME                                     | YES  |     |                |
| national_id      | VARCHAR(50)                                  | YES  | UNI |                |
| status           | ENUM('Active','Suspended','Closed')          | YES  |     |                |

##### accounts

| Column             | Type                | Null | Key | Extra          |
|--------------------|---------------------|------|-----|----------------|
| account_id         | INT, AUTO_INCREMENT | NO   | PRI | auto_increment |
| user_id            | INT                 | NO   | MUL |                |
| currency           | VARCHAR(10)         | NO   |     |                |
| balance            | DECIMAL(18,2)       | NO   |     |                |
| available_margin   | DECIMAL(18,2)       | YES  |     |                |
| maintenance_margin | DECIMAL(5,2)        | YES  |     |                |

##### kyc_documents

| Column     | Type                                         | Null | Key | Extra          |
|------------|----------------------------------------------|------|-----|----------------|
| doc_id     | INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| user_id    | INT                                         | NO   | MUL |                |
| doc_type   | ENUM('Passport','Proof of Address','Selfie') | NO   |     |                |
| doc_path   | VARCHAR(255)                                 | NO   |     |                |
| status     | ENUM('Pending','Approved','Rejected')        | NO   |     |                |
| upload_date| DATETIME                                     | NO   |     |                |

##### transactions

| Column      | Type                                         | Null | Key | Extra          |
|-------------|----------------------------------------------|------|-----|----------------|
| txn_id      | INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| account_id  | INT                                         | NO   | MUL |                |
| txn_type    | ENUM('Deposit','Withdrawal','Margin Call')   | NO   |     |                |
| amount      | DECIMAL(18,2)                                | NO   |     |                |
| txn_date    | DATETIME                                     | NO   |     |                |
| description | VARCHAR(255)                                 | YES  |     |                |

##### positions

| Column      | Type                                         | Null | Key | Extra          |
|-------------|----------------------------------------------|------|-----|----------------|
| position_id | INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| account_id  | INT                                         | NO   | MUL |                |
| instrument_id| INT                                        | NO   | MUL |                |
| side        | ENUM('Buy','Sell')                           | NO   |     |                |
| lot_size    | DECIMAL(10,2)                                | NO   |     |                |
| open_price  | DECIMAL(18,5)                                | NO   |     |                |
| open_date   | DATETIME                                     | NO   |     |                |
| close_price | DECIMAL(18,5)                                | YES  |     |                |
| close_date  | DATETIME                                     | YES  |     |                |
| status      | ENUM('Open','Closed')                        | NO   |     |                |

##### instruments

| Column        | Type                                         | Null | Key | Extra          |
|---------------|----------------------------------------------|------|-----|----------------|
| instrument_id | INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| symbol        | VARCHAR(20)                                  | NO   |     |                |
| name          | VARCHAR(100)                                 | NO   |     |                |
| type          | ENUM('Forex','Commodity','Stock','Crypto','CFD','Fund') | NO | |              |
| market_status | ENUM('Open','Closed')                        | NO   |     |                |

##### audit_log

| Column     | Type                | Null | Key | Extra          |
|------------|---------------------|------|-----|----------------|
| log_id     | INT, AUTO_INCREMENT | NO   | PRI | auto_increment |
| user_id    | INT                 | YES  | MUL |                |
| action     | VARCHAR(100)        | NO   |     |                |
| details    | TEXT                | YES  |     |                |
| timestamp  | DATETIME            | NO   |     |                |

##### notifications

| Column         | Type                                         | Null | Key | Extra          |
|----------------|----------------------------------------------|------|-----|----------------|
| notification_id| INT, AUTO_INCREMENT                          | NO   | PRI | auto_increment |
| user_id        | INT                                         | NO   | MUL |                |
| type           | ENUM('Trade Execution','Margin Call','Withdrawal','Other') | NO | |           |
| message        | TEXT                                         | NO   |     |                |
| channel        | ENUM('Email','SMS','In-App')                 | NO   |     |                |
| sent_at        | DATETIME                                     | NO   |     |                |

---

#### Foreign Key Relationships

- `accounts.user_id` → `users.user_id`
- `kyc_documents.user_id` → `users.user_id`
- `transactions.account_id` → `accounts.account_id`
- `positions.account_id` → `accounts.account_id`
- `positions.instrument_id` → `instruments.instrument_id`
- `audit_log.user_id` → `users.user_id`
- `notifications.user_id` → `users.user_id`

---

#### Indexes and Constraints

- Primary keys on all tables (`*_id`)
- Unique constraints on `users.email`, `users.national_id`
- Foreign key constraints as listed above
- ENUM constraints for status, type, and other categorical fields
**Summary:**  
This report provides a full overview of your `smarter_trading` database schema, including tables, columns, data types, keys, and relationships. You can generate similar reports using the inspection queries provided earlier.