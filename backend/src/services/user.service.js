const { db, auth } = require("../config/firebaseAdmin");

const getUser = async (uid) => {
  try {
    return await auth.getUser(uid);
  } catch (error) {
    return error;
  }
};

const createUserProfile = async (user) => {
  const userRef = db.collection("users").doc(user.uid);

  const rsult = await userRef.set(
    {
      uid: user.uid,
      email: user.email,
      name: user.displayName ?? "",
      createdAt: new Date().toISOString(),
    },
    {
      merge: true,
    }
  );
  console.log(rsult);
};

const deleteUserCompletely = async (uid) => {
  try {
    const expensesRef = db.collection("users").doc(uid).collection("expenses");

    const snapshot = await expensesRef.get();

    const batch = db.batch();

    snapshot.forEach((doc) => batch.delete(doc.ref));

    await batch.commit();

    await db.collection("users").doc(uid).delete();
    await auth.deleteUser(uid);

    return { success: true };
  } catch (error) {
    return error;
  }
};

module.exports = { createUserProfile, getUser, deleteUserCompletely };
