const express = require("express");
const router = express.Router();

const admin = require("../config/firebaseAdmin");

router.post("/login", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) return res.status(401).json({ message: "Id token required" });

  try {
    const { uid, email } = await admin.auth().verifyIdToken(idToken);

    // TODO: Save user to firebase db

    res.json({ success: true, uid, email, token: idToken });
  } catch (error) {
    console.log(`Error logging a user: ${error}`);
    res.status(401).json({ message: "Invalid Id token" });
  }
});

router.post("/delete", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) return res.status(401).json({ message: "Id token Required" });

  try {
    const { uid, email } = await admin.auth().verifyIdToken(idToken);

    // TODO: Remove user from firebase database

    res.json({ success: true });
  } catch (error) {
    console.log(`Error Deleting a user ${error}`);
    res.status(401).json({ success: false, message: error });
  }
});

module.exports = router;
