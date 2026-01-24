const express = require("express");
const reminderRouter = express.Router();
const {
  getReminders,
  addReminder,
  updateReminder,
  deleteReminder,
} = require("../services/reminder.service");

reminderRouter.get("/", async (req, res) => {
  try {
    const reminders = await getReminders(req.user.uid);
    res.status(201).json(reminders || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

reminderRouter.post("/add", async (req, res) => {
  try {
    const reminder = await addReminder(req.user.uid, req.body);
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

reminderRouter.post("/update", async (req, res) => {
  try {
    const reminder = await updateReminder(req.user.uid, req.body);
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

reminderRouter.post("/delete", async (req, res) => {
  try {
    const success = await deleteReminder(req.user.uid, req.body);
    res.status(201).json(success);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = reminderRouter;
