const { db } = require("../config/firebaseAdmin");

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

module.exports = createUserProfile;
