const express = require("express");
const expenseRouter = express.Router();
const { getExpenses, addExpense } = require("../services/expense.service");

expenseRouter.get("/", async (req, res) => {
  try {
    const expenses = await getExpenses(req.user.id);
    res.status(201).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

expenseRouter.post("/add", async (req, res) => {
  try {
    const expense = await addExpense(req.user.id, req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// TODO: Implement methods to update and delete exspenses

module.exports = expenseRouter;
