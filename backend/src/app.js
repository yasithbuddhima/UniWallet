const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const expenseRoutes = require("./routes/expense.routes");
const authMiddleware = require("./middleware/auth.middleware");
const reminderRoutes = require("./routes/reminder.routes");
const userRoutes = require("./routes/user.routes");
const {
  getWeeklyExpenseData,
  getDailyReminderData,
} = require("./services/report.service");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expense", authMiddleware, expenseRoutes);

app.use("/api/reminders", authMiddleware, reminderRoutes);

app.use("/api/user", authMiddleware, userRoutes);

app.get("/api/admin/weekly-expenses", async (req, res) => {
  if (req.headers["admin-secret"] !== process.env.ADMIN_SECRET)
    return res.sendStatus(401);
  const data = await getWeeklyExpenseData();
  res.json(data);
});

app.get("/api/admin/daily-reminders", async (req, res) => {
  if (req.headers["admin-secret"] !== process.env.ADMIN_SECRET)
    return res.sendStatus(401);
  const data = await getDailyReminderData();
  res.json(data);
});

app.get("/", (req, res) => {
  res.json({ message: "Backend is working on port 5000" });
});

app.get("/api", authMiddleware, (req, res) => {
  res.json({
    message: "User is authenticated and Backend is working on port 5000",
  });
});

module.exports = app;
