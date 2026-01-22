const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const reminderRoutes = require("./routes/reminder.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/reminders", reminderRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working on port 5000" });
});

module.exports = app;
