const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVISE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
