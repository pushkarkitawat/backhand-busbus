
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 AUTO GENERATED ROUTES


// 🔥 USE ROUTES


// default route
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
