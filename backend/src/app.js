const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working on port 5000" });
});

module.exports = app;
