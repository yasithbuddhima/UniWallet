import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addExpense, getAllExpenses } from "../Services/expenseService";
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

  return (
    <ExpenseContext.Provider value={{ expenses, create }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
