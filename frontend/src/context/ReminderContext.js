import { createContext, React, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addreminder,
  deleteReminder,
  getAllReminders,
  updateReminder,
} from "../Services/reminderService";

const ReminderContext = createContext();

export const ReminderProvider = ({ children }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setReminders([]);
        return;
      }

      const token = await user.getIdToken();
      const data = await getAllReminders(token);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const processedData = data.map((reminder) => {
        const dueDate = new Date(reminder.dueDate);
        let status = "upcoming";

        if (reminder.paidOn) {
          status = "paid";
        } else if (dueDate < today) {
          status = "overdue";
        }

        return { ...reminder, status };
      });

      setReminders(processedData);
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
      return prev.map((item) =>
        item.id === reminder.id ? { ...item, ...newReminder } : item,
      );
    });
  };

  const deleteIt = async (reminderId) => {
    const token = await auth.currentUser.getIdToken();
    await deleteReminder(token, reminderId);
    setReminders((prev) => prev.filter((item) => item.id !== reminderId));
  };

  const getNextReminder = () => {
    const activeReminders = reminders
      .filter((r) => {
        if (r.paidOn) return false;
        return true;
      })
      .sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

    return activeReminders[0];
  };

  return (
    <ReminderContext.Provider
      value={{ reminders, create, update, deleteIt, getNextReminder }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminders = () => useContext(ReminderContext);
