import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./AuthPage.module.css";
import signInImg from "../../assets/signin.png";
import logInImg from "../../assets/login.png";
import {
  logInWithEmail,
  loginWithGoogle,
  signUpWithEmail,
} from "../../Services/authService";
import { useNavigate } from "react-router-dom";

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);
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
      <div className={styles.authpage}>
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${styles.authcontainer} ${styles.login}`}>
                <LoginForm />
                <LogInBanner onChange={setIsLogin} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signin"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${styles.authcontainer} ${styles.signin}`}>
                <SignInBanner onChange={setIsLogin} />
                <SignInForm />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const SignInForm = ({ onSubmit, handleGoogle }) => {
  return (
    <>
      <div className={styles.formslayer}>
        <form className={styles.formsignupform} onSubmit={onSubmit}>
          <h2>Create Account.</h2>
          <p>Start your journey to financial freedom.</p>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Create Password" />
          <button>Get Started</button>
          <div className={styles.divider}>Or</div>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogle}
          >
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
};

const SignInBanner = ({ onChange }) => {
  return (
    <>
      <div className={styles.overlaypanel}>
        <img src={signInImg} alt="Sign In Hero" />
        <h2>Already Registered?</h2>
        <p>Welcome back! Log in to continue managing your money smarter.</p>
        <button onClick={() => onChange(true)}>Log In Here</button>
      </div>
    </>
  );
};

const LoginForm = ({ onSubmit, handleGoogle }) => {
  return (
    <>
      <div className={styles.formslayer}>
        <form className={styles.formloginform} onSubmit={onSubmit}>
          <h2>Welcome Back, Scholar.</h2>
          <p>Sign in to track today’s spend.</p>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <div className={styles.divider}>Or</div>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogle}
          >
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
};

const LogInBanner = ({ onChange }) => {
  return (
    <>
      <div className={styles.overlaypanel}>
        <img src={logInImg} alt="Log In Hero" />
        <h2>New to UniWallet?</h2>
        <p>Join thousands of students managing their money smarter.</p>
        <button onClick={() => onChange(false)}>Sign Up Here</button>
      </div>
    </>
  );
};
export default Authpage;
