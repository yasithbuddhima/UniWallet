const { json } = require("express");
const { db } = require("../config/firebaseAdmin");

const admin = require("firebase-admin");

async function getWeeklyExpenseData() {
  console.log("Generating weekly expense report...");
  const usersSnapshot = await admin.firestore().collection("users").get();
  const reportData = [];

  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  for (const userDoc of usersSnapshot.docs) {
    const userData = userDoc.data();
    const expensesSnapshot = await userDoc.ref.collection("expenses").get();

    let weeklyTotal = 0;
    let monthlyTotal = 0;
    const categories = {};

    expensesSnapshot.forEach((doc) => {
      const exp = doc.data();
      // const expDate = exp.date.toDate();

      const rawDate = exp.date;
      let expDate;

      if (rawDate && typeof rawDate.toDate === "function") {
        expDate = rawDate.toDate();
      } else if (rawDate instanceof Date) {
        expDate = rawDate;
      } else {
        expDate = new Date(rawDate);
      }

      // DEBUG: Check if dates are being read correctly
      console.log(
        `User: ${userData.email} | Expense: ${exp.title} | Amount: ${exp.amount} | Date: ${expDate}`,
      );
      console.log(
        `Comparison -> OneWeekAgo: ${oneWeekAgo} | Is Match? ${expDate >= oneWeekAgo}`,
      );
      if (expDate >= startOfMonth) {
        monthlyTotal += Number(exp.amount);
      }

      if (expDate >= oneWeekAgo) {
        weeklyTotal += Number(exp.amount);

        categories[exp.category] =
          (categories[exp.category] || 0) + Number(exp.amount);
      }
    });

    const topCategory = Object.keys(categories).reduce(
      (a, b) => (categories[a] > categories[b] ? a : b),
      "None",
    );

    reportData.push({
      email: userData.email,
      name: userData.name || "User",
      weeklyTotal,
      monthlyTotal,
      topCategory,
      currency: "Rs.",
    });
  }
  return reportData;
}
async function getDailyReminderData() {
  console.log("Generating daily reminder report...");
  const usersSnapshot = await admin.firestore().collection("users").get();
  const reminderReport = [];
  const now = new Date();
  const startOfToday = new Date(now.setHours(0, 0, 0, 0));

  for (const userDoc of usersSnapshot.docs) {
    const userData = userDoc.data();
    const remindersSnapshot = await userDoc.ref.collection("reminders").get();

    if (!remindersSnapshot.empty) {
      const pendingReminders = [];

      remindersSnapshot.forEach((doc) => {
        const reminder = doc.data();

        // const dueDate = reminder.dueDate.toDate();

        const rawDate = reminder.dueDate;
        let expDate;

        if (rawDate && typeof rawDate.toDate === "function") {
          expDate = rawDate.toDate();
        } else if (rawDate instanceof Date) {
          expDate = rawDate;
        } else {
          expDate = new Date(rawDate);
        }

        const isNotPaid = !reminder.status || reminder.status !== "paid";

        if (
          isNotPaid &&
          expDate < new Date(startOfToday.getTime() + 86400000)
        ) {
          pendingReminders.push({
            name: reminder.name,
            value: reminder.value,
            dueDate: expDate.toLocaleDateString(),
            isOverdue: expDate < startOfToday,
          });
        }
      });

      if (pendingReminders.length > 0) {
        reminderReport.push({
          email: userData.email,
          name: userData.name || "User",
          reminders: pendingReminders,
        });
      }
    }
  }
  return reminderReport;
}

module.exports = { getWeeklyExpenseData, getDailyReminderData };
