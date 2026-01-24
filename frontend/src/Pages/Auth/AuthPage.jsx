import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./AuthPage.module.css";
import signInImg from "../../assets/signin.png";
import logInImg from "../../assets/login.png";
import {
  logInWithEmail,
  loginWithGoogle,
  signUpWithEmail,
} from "../../Services/authService";
import { useNavigate, useLocation } from "react-router-dom";

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsLogin(false);
    } else if (location.pathname === "/login") {
      setIsLogin(true);
    }
  }, [location.pathname]);

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const _email = e.target.mail.value;
    const _pwd = e.target.pwd.value;
    const _name = e.target.name.value;

    const result = await signUpWithEmail(_email, _pwd, _name);

    if (result.success) {
      console.log("Signed In Successfully");
      navigate("/dashboard");
    } else {
      let errorMessage = "Authentication failed";
      switch (result.error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email is already registered. Please log in instead.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        case "auth/weak-password":
          errorMessage = "Password must be at least 6 characters";
          break;
        default:
          errorMessage = result.error.message || "Authentication failed";
      }
      alert(errorMessage);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    const _email = e.target.mail.value;
    const _pwd = e.target.pwd.value;

    const result = await logInWithEmail(_email, _pwd);
    if (result.success) {
      console.log("Login Successfully");
      navigate("/dashboard");
    } else {
      let errorMessage = "Authentication failed";
      switch (result.error.code) {
        case "auth/user-not-found":
          errorMessage = "Email not found. Please sign up first.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address";
          break;
        default:
          errorMessage = result.error.message || "Authentication failed";
      }
      alert(errorMessage);
    }
  };

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      console.log("Login with Google Successfully");
      navigate("/dashboard");
    } else {
      let errorMessage = "Authentication failed";
      switch (result.error.code) {
        case "auth/popup-blocked":
          errorMessage =
            "Pop-up was blocked. Please allow pop-ups and try again.";
          break;
        case "auth/popup-closed-by-user":
          errorMessage = "Sign-in was cancelled";
          break;
        case "auth/account-exists-with-different-credential":
          errorMessage =
            "This email is already registered with a different method";
          break;
        case "auth/cancelled-popup-request":
          errorMessage = "Sign-in was cancelled";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection.";
          break;
        default:
          errorMessage = result.error.message || "Authentication failed";
      }
      alert(errorMessage);
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
                <LoginForm
                  handleGoogle={handleGoogleLogin}
                  onSubmit={handleEmailSignIn}
                />
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
                <SignInForm
                  handleGoogle={handleGoogleLogin}
                  onSubmit={handleEmailSignUp}
                />
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
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="mail"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="pwd"
            placeholder="Create Password"
            required
          />
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
          <input type="email" name="mail" placeholder="Email Address" />
          <input type="password" name="pwd" placeholder="Password" />
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
