import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  addExpense,
  deleteExpense,
  getAllExpenses,
  updateExpense,
} from "../Services/expenseService";
import { onAuthStateChanged } from "firebase/auth";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setExpenses([]);
        return;
      }

      const token = await user.getIdToken();
      const data = await getAllExpenses(token);
      setExpenses(data);
    });

    return () => unsub();
  }, []);

  const create = async (expense) => {
    const token = await auth.currentUser.getIdToken();
    const saved = await addExpense(token, expense);
    setExpenses((prev) => [saved, ...prev]);
  };

  const update = async (expense) => {
    const token = await auth.currentUser.getIdToken();
    const newExpense = await updateExpense(token, expense);
    setExpenses((prev) => {
      prev.map((item) =>
        item.id === expense.id ? { ...item, ...newExpense } : item,
      );
    });
  };

  // delete is not allowed ???
  const deleteIt = async (expenseId) => {
    const token = await auth.currentUser.getIdToken();
    await deleteExpense(token, expenseId);
    setExpenses((prev) => prev.filter((item) => item.id !== expenseId));
  };

  const getTotalExpenseInMonth = () => {
    let total = 0;
    const currentMonth = new Date().getMonth();

    expenses.forEach((e) => {
      const expenseDate = new Date(e.date);
      if (currentMonth === expenseDate.getMonth()) {
        total += Number(e.amount);
      }
    });

    return total;
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, create, update, deleteIt, getTotalExpenseInMonth }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
