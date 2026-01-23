const express = require("express");
const expenseRouter = express.Router();
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../services/expense.service");

expenseRouter.get("/", async (req, res) => {
  try {
    const expenses = await getExpenses(req.user.uid);
    res.status(201).json(expenses || []);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting all expenses: `, error: error.message });
  }
});

expenseRouter.post("/add", async (req, res) => {
  try {
    const expense = await addExpense(req.user.uid, req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

expenseRouter.post("/update", async (req, res) => {
  try {
    const expense = await updateExpense(req.user.uid, req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Method to delete expenses
// req.body should be the expense id
expenseRouter.post("/delete", async (req, res) => {
  try {
    const success = await deleteExpense(req.user.uid, req.body);
    res.status(201).json(success);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = expenseRouter;
