import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addExpense, getAllExpenses } from "../Services/expenseService";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    auth.currentUser.getIdToken().then((token) => {
      getAllExpenses(token).then(setExpenses);
    });
  }, []);

  const create = async (expense) => {
    const token = await auth.currentUser.getIdToken();
    const saved = await addExpense(token, expense);
    setExpenses((prev) => [saved, ...prev]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, create }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
