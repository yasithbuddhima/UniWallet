const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const expenseRoutes = require("./routes/expense.routes");
const authMiddleware = require("./middleware/auth.middleware");
const reminderRoutes = require("./routes/reminder.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expense", authMiddleware, expenseRoutes);

app.use("/api/reminders", authMiddleware, reminderRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is working on port 5000" });
});

app.get("/api", authMiddleware, (req, res) => {
  res.json({
    message: "User is authenticated and Backend is working on port 5000",
  });
});

module.exports = app;
