import React from "react";
import {
  logInWithEmail,
  loginWithGoogle,
  signUpWithEmail,
} from "../../Services/authService";
import { useNavigate } from "react-router-dom";

const Authpage = () => {
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const _email = e.target.mail.value;
    const _pwd = e.target.pwd.value;

    const result = await signUpWithEmail(_email, _pwd);

    if (result.success) {
      // TODO: Remove this Line
      console.log("Signed In Successfully");
      // Redirect to Dashboard
      navigate("/dashboard");
    } else {
      switch (result.error.code) {
        case "auth/email-already-in-use":
          // TODO: Redirect to Log IN
          return null;

        case "auth/invalid-email":
          // TODO: Show Error Message on UI
          return { error: "Invalid email address" };

        case "auth/weak-password":
          // TODO: Show Error Message on UI
          return { error: "Password must be at least 6 characters" };

        default:
          // TODO: Show Error Message on UI
          return { error: "Authentication failed" };
      }
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    const _email = e.target.mail.value;
    const _pwd = e.target.pwd.value;

    const result = await logInWithEmail(_email, _pwd);
    if (result.success) {
      // TODO: Remove this Line
      console.log("Login Successfully");
      // Redirect to Dashboard
      navigate("/dashboard");
    } else {
      switch (result.error.code) {
        case "auth/user-not-found":
          // TODO: Redirect user to Sign up
          return null;
        case "auth/wrong-password":
          // TODO: Show Error Message on UI
          return null;

        case "auth/invalid-email":
          // TODO: Show Error Message on UI
          return { error: "Invalid email address" };

        default:
          // TODO: Show Error Message on UI
          return { error: "Authentication failed" };
      }
    }
  };

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      // TODO: Remove this Line
      console.log("Login with Google Successfully");
      // Redirect to Dashboard
      navigate("/dashboard");
    } else {
      switch (result.error.code) {
        case "auth/popup-blocked":
          // TODO: Show Error Message on UI
          return null;

        case "auth/popup-closed-by-user":
          // TODO: Show Error Message on UI
          return null;
        case "auth/account-exists-with-different-credential":
          // TODO: Show Error Message on UI
          return null;
        case "auth/cancelled-popup-request":
          // TODO: Show Error Message on UI
          return null;
        case "auth/network-request-failed":
          // TODO: Show Error Message on UI
          return null;

        default:
          // TODO: Show Error Message on UI
          return { error: "Authentication failed" };
      }
    }
  };
  return (
    <>
      <div>{/* //TODO: Implement the Login and SignIn Pages in here */}</div>
    </>
  );
};

export default Authpage;
