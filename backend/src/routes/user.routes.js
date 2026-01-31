const express = require("express");
const userRouter = express.Router();

const { auth } = require("../config/firebaseAdmin");
const { getUserBudget, updateUserBudget } = require("../services/user.service");

userRouter.get("/budget", async (req, res) => {
  try {
    const budget = await getUserBudget(req.user.uid);
    res.status(201).json({ budget });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/budget", async (req, res) => {
  try {
    const { budget } = req.body;
    await updateUserBudget(req.user.uid, budget);
    res.status(201).json({ message: "Budget updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = userRouter;
