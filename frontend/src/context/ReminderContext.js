import { Children, createContext, React, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addExpense } from "../Services/expenseService";
import { onAuthStateChanged } from "firebase/auth";
import {
  addreminder,
  deleteReminder,
  getAllReminders,
  updateReminder,
} from "../Services/reminderService";

const ReminderContext = createContext();

export const ReminderProvider = ({ Children }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setReminders([]);
        return;
      }

      const token = await user.getIdToken();
      const data = await getAllReminders(token);
      setReminders(data);
    });

    return () => unsub();
  }, []);

  const create = async (reminder) => {
    const token = await auth.currentUser.getIdToken();
    const saved = await addreminder(token, reminder);
    setReminders((prev) => [saved, ...prev]);
  };

  const update = async (reminder) => {
    const token = await auth.currentUser.getIdToken();
    const newReminder = await updateReminder(token, reminder);
    setReminders((prev) => {
      prev.map((item) =>
        item.id === reminder.id ? { ...item, ...newReminder } : item,
      );
    });
  };

  const deleteIt = async (reminderId) => {
    const token = await auth.currentUser.getIdToken();
    await deleteReminder(token, reminderId);
    setReminders((prev) => prev.filter((item) => item.id !== reminderId));
  };

  return (
    <ReminderContext.Provider value={{ reminders, create, update, deleteIt }}>
      {Children}
    </ReminderContext.Provider>
  );
};
