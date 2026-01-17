import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { logEvent } from "firebase/analytics";
import { analytics, auth } from "../utils/firebase";

// Function to Sign Up with Email And Password
export async function signUpWithEmail(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = await userCredential.user;
    const idToken = await user.getIdToken();

    // TODO: Send id token to backend and verify
    // If success continue else throw an error

    localStorage.setItem("token", idToken);
    logEvent(analytics, "signUp", { method: "Email+Password" });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

// Method to Log in with Email and Password
export async function logInWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const idToken = await user.getIdToken();

    // TODO: Send id token to backend and verify
    // If success continue else throw an error

    localStorage.setItem("token", idToken);
    logEvent(analytics, "signIn", { method: "Email+Password" });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

// Method to continue with Google
export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();

    const userCredential = await signInWithPopup(auth, provider);

    const user = userCredential.user;
    const idToken = await user.getIdToken();

    // TODO: Send id token to backend and verify
    // If success continue else throw an error

    localStorage.setItem("token", idToken);
    logEvent(analytics, "LogIn", { method: "Google" });
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

// Method To SignOut/LogOut
export async function userSignout() {
  try {
    await signOut();
    localStorage.removeItem("token");
    logEvent(analytics, "SignOut");
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

// Method to delete User
export async function deleteUserAndSignOut() {
  try {
    await deleteUser(auth);
    localStorage.removeItem("token");
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}
