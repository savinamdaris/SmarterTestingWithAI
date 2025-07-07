-- USERS
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    kyc_status ENUM('Pending', 'Verified', 'Rejected') NOT NULL,
    dob DATE NOT NULL,
    jurisdiction VARCHAR(50) NOT NULL,
    account_type ENUM('Retail', 'Institutional') NOT NULL,
    role ENUM('LOW', 'MEDIUM', 'EXCELLENT', 'ADMIN', 'COMPLIANCE') NOT NULL,
    two_fa_enabled BOOLEAN DEFAULT FALSE,
    registration_date DATETIME NOT NULL,
    last_login DATETIME,
    national_id VARCHAR(50) UNIQUE,
    status ENUM('Active', 'Suspended', 'Closed') DEFAULT 'Active'
);

-- ACCOUNTS
CREATE TABLE accounts (
    account_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    currency VARCHAR(10) NOT NULL,
    balance DECIMAL(18,2) NOT NULL,
    available_margin DECIMAL(18,2),
    maintenance_margin DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- KYC DOCUMENTS
CREATE TABLE kyc_documents (
    doc_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    doc_type ENUM('Passport', 'Proof of Address', 'Selfie') NOT NULL,
    doc_path VARCHAR(255) NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    upload_date DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- TRANSACTIONS
CREATE TABLE transactions (
    txn_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL,
    txn_type ENUM('Deposit', 'Withdrawal', 'Margin Call') NOT NULL,
    amount DECIMAL(18,2) NOT NULL,
    txn_date DATETIME NOT NULL,
    description VARCHAR(255),
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

-- POSITIONS
CREATE TABLE positions (
    position_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL,
    instrument_id INT NOT NULL,
    side ENUM('Buy', 'Sell') NOT NULL,
    lot_size DECIMAL(10,2) NOT NULL,
    open_price DECIMAL(18,5) NOT NULL,
    open_date DATETIME NOT NULL,
    close_price DECIMAL(18,5),
    close_date DATETIME,
    status ENUM('Open', 'Closed') NOT NULL,
    FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

-- INSTRUMENTS
CREATE TABLE instruments (
    instrument_id INT PRIMARY KEY AUTO_INCREMENT,
    symbol VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    type ENUM('Forex', 'Commodity', 'Stock', 'Crypto', 'CFD', 'Fund') NOT NULL,
    market_status ENUM('Open', 'Closed') NOT NULL
);

-- AUDIT LOG
CREATE TABLE audit_log (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- NOTIFICATIONS
CREATE TABLE notifications (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    type ENUM('Trade Execution', 'Margin Call', 'Withdrawal', 'Other') NOT NULL,
    message TEXT NOT NULL,
    channel ENUM('Email', 'SMS', 'In-App') NOT NULL,
    sent_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);