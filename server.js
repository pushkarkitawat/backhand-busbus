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
  
  // Start server
  const PORT = process.env.DB_PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
