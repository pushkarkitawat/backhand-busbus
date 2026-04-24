const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/back", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ FIX HERE
const PORT = import.meta.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
