const { db } = require("../config/firebaseAdmin");

const getReminders = async (uid) => {
  const snapshot = await db
    .collection("users")
    .doc(uid)
    .collection("reminders")
    .get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const addReminder = async (uid, reminder) => {
  const ref = await db
    .collection("users")
    .doc(uid)
    .collection("reminders")
    .add({
      ...reminder,
      createdAt: new Date().toISOString(),
    });

  return {
    id: ref.id,
    ...reminder,
  };
};

const updateReminder = async (uid, reminder) => {
  const { id, ...newReminder } = reminder;

  const ref = await db
    .collection("users")
    .doc(uid)
    .collection("reminders")
    .doc(id)
    .update(newReminder);

  return { id, ...newReminder };
};

const deleteReminder = async (uid, reminderId) => {
  await db
    .collection("users")
    .doc(uid)
    .collection("reminders")
    .doc(reminderId)
    .delete();

  return { success: true };
};

module.exports = { getReminders, addReminder, updateReminder, deleteReminder };
