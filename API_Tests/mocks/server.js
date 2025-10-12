const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Token endpoints
app.post('/api/token/obtain', (req, res) => {
  res.status(200).json({
    accessToken: 'mock-access-token',
    renewToken: 'mock-renew-token',
    message: 'Token obtained successfully.'
  });
});
app.post('/api/token/renew', (req, res) => {
  res.status(200).json({
    accessToken: 'renewed-access-token',
    renewToken: 'renewed-renew-token',
    message: 'Token renewed successfully.'
  });
});

// Configs endpoints
app.get('/api/configs/questionnaire', (req, res) => {
  res.status(200).json({
    company: req.query.company || 'SafecapLTD',
    country: req.query.country || 'UK',
    instrumentTypes: req.query.instrumentTypes || 'CFD',
    questions: ['Q1', 'Q2', 'Q3']
  });
});
app.get('/api/configs/country', (req, res) => {
  res.status(200).json({ countries: ['UK', 'BG', 'DE', 'FR'] });
});
app.get('/api/configs/companies', (req, res) => {
  res.status(200).json({ companies: ['SafecapLTD', 'StrongBow', 'FinaltoInternationalLimited'] });
});
app.get('/api/configs/forbidden-country', (req, res) => {
  res.status(200).json({ forbidden: ['RU', 'IR', 'KP'] });
});
app.get('/api/configs/grace-period', (req, res) => {
  res.status(200).json({ gracePeriod: 30 });
});

// Customer endpoints
app.get('/api/customer/configs', (req, res) => {
  res.status(200).json({ configs: { leverage: 30, margin: 0.3 } });
});
app.get('/api/customer/info', (req, res) => {
  res.status(200).json({ userId: '1001', name: 'Alice Johnson', kycStatus: 'Verified' });
});
app.get('/api/customer/account-configs', (req, res) => {
  res.status(200).json({ accountId: 'ACC-8247', currency: 'GBP', balance: 12500 });
});
app.get('/api/customer/trading-accounts', (req, res) => {
  res.status(200).json({ accounts: [{ id: 'TA-1', type: 'CFD' }] });
});

// Documents endpoints
app.get('/api/documents/configs', (req, res) => {
  res.status(200).json({ required: ['PROOF_OF_ID', 'PROOF_OF_RESIDENCE'] });
});
app.get('/api/documents/status', (req, res) => {
  res.status(200).json({ status: 'Pending' });
});
app.get('/api/documents/npi', (req, res) => {
  res.status(200).json({ npi: 'NPI-12345' });
});
app.post('/api/documents/upload', (req, res) => {
  res.status(200).json({ result: 'Document uploaded', type: req.body.type || 'PROOF_OF_ID' });
});

// Funds endpoints
app.get('/api/funds/credit-cards', (req, res) => {
  res.status(200).json({ cards: ['****1234', '****5678'] });
});
app.post('/api/funds/deposit', (req, res) => {
  res.status(200).json({ result: 'Deposit successful', amount: req.body.amount || 100 });
});
app.post('/api/funds/transfer', (req, res) => {
  res.status(200).json({ result: 'Transfer successful', from: req.body.from, to: req.body.to });
});

// Password endpoints
app.post('/api/password/change', (req, res) => {
  res.status(200).json({ result: 'Password changed' });
});
app.post('/api/password/reset', (req, res) => {
  res.status(200).json({ result: 'Password reset email sent' });
});
app.post('/api/password/validate', (req, res) => {
  res.status(200).json({ valid: true });
});

// Subscriptions endpoints
app.get('/api/subscriptions', (req, res) => {
  res.status(200).json({ subscriptions: ['newsletter', 'alerts'] });
});
app.put('/api/subscriptions', (req, res) => {
  res.status(200).json({ result: 'Subscription updated', subscriptions: req.body.subscriptions || [] });
});
app.put('/api/unsubscribe', (req, res) => {
  res.status(200).json({ result: 'Unsubscribed', subscription: req.body.subscription });
});

// Social networks endpoints
app.post('/api/customers/google', (req, res) => {
  res.status(200).json({ result: 'Google login successful', token: req.body.token });
});
app.post('/api/customers/facebook', (req, res) => {
  res.status(200).json({ result: 'Facebook login successful', token: req.body.token });
});
app.post('/api/customers/apple', (req, res) => {
  res.status(200).json({ result: 'Apple login successful', token: req.body.token });
});

app.listen(4000, () => {
  console.log('Test server running on http://localhost:4000');
});