import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./AuthPage.module.css";
import signInImg from "../../assets/signin.png";
import logInImg from "../../assets/login.png";

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);
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
