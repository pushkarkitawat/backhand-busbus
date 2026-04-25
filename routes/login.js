const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log("data:", req.body);

    if (!name || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check user
    const [rows] = await db.query(
      "SELECT * FROM users WHERE name = ?",
      [name]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = rows[0];

    // ✅ Plain text password match
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Generate token
    const token = jwt.sign(
      { id: user.id, name: user.name },
      "bluebus_secret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login success",
      token,
      user: { id: user.id, name: user.name }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
