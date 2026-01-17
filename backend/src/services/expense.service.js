const { db } = require("../config/firebaseAdmin");

const getExpenses = async (uid) => {
  const snapshot = await db
    .collection("users")
    .doc(uid)
    .collection("expenses")
    .orderBy("date", "desc")
    .get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

const addExpense = async (uid, expense) => {
  const ref = await db
    .collection("users")
    .doc(uid)
    .collection("expenses")
    .add({
      ...expense,
      createdAt: new Date().toISOString(),
    });

  return {
    id: ref.id,
    ...expense,
  };
};

// TODO: Add method to delete expense and update expense

module.exports = { getExpenses, addExpense };
