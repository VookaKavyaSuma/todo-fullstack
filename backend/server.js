const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Connect to database
connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// Test query
connection.query("SHOW TABLES", (err, results) => {
  if (err) {
    console.error("❌ Error running query:", err.message);
    return;
  }
  console.log("📦 Tables in database:", results);
});

// Close connection (temporary – later you won’t close it immediately)
connection.end((err) => {
  if (err) {
    console.error("❌ Error closing connection:", err.message);
  } else {
    console.log("🔒 Database connection closed");
  }
});
