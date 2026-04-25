const express = require('express');
const cors = require('cors');
const app = express();
const dashboard = require('./routes/dashboard');
const booking = require('./routes/booking');
const login = require('./routes/login');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/dashboard', dashboard);
app.use('/api/booking', booking);
app.use('/api', login);
app.get('/bb', (req, res) => {
    res.send('Transport Admin Backend Runningbusbus 🚚');
  });
  console.log("=== ENV DEBUG ===");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
