const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host:process.env.DB_HOST,   // correct local IP or 127.0.0.1
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  port: process.env.DB_PORT,          // MUST be MySQL port, not 5000
  waitForConnections: true,
  connectionLimit: 10,
  ssl: {
    // If TiDB Cloud gave you a CA file, use it:
    ca: process.env.DB_SSL_CA
      ? fs.readFileSync(path.join(__dirname, process.env.DB_SSL_CA))
      : undefined,
    rejectUnauthorized: true
  },
  queueLimit: 0
});



module.exports = db;
