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

const updateExpense = async (uid, expense) => {
  const { id, ...newExpense } = expense;
  const ref = await db
    .collection("users")
    .doc(uid)
    .collection("expenses")
    .doc(id)
    .update(newExpense);

  return { id, ...newExpense };
};

const deleteExpense = async (uid, expenseId) => {
  await db
    .collection("users")
    .doc(uid)
    .collection("expenses")
    .doc(expenseId)
    .delete();

  return { success: true };
};

module.exports = { getExpenses, addExpense, updateExpense, deleteExpense };
