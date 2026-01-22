import React from "react";

import styles from "./AuthPage.module.css";

const Authpage = () => {
  return (
    <>
      
    <div className={styles.authpage}>
      <div className={styles.authcontainer}>
        <div className={styles.formslayer}>
          <form className={styles.formsignupform}>
            <h2>Create Account.</h2>
            <p>Start your journey to financial freedom.</p>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="University Email Address" />
            <input type="password" placeholder="Create Password" />

            <button>Get Started Free</button>
            <div className={styles.divider}>Or</div>

            <button type="button" className={styles.googleBtn}>
              Continue with Google
            </button>
          </form>

          {/* LOGIN */}
          {/* <form className={styles.formloginform}>
            <h2>Welcome Back, Scholar.</h2>
            <p>Sign in to track today’s coffee spend.</p>

            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            <button type="submit">Log In</button>

            <div className={styles.divider}>Or</div>

            <button type="button" className={styles.googleBtn}>
              Continue with Google
            </button>
          </form> */}

        </div>

        <div className={styles.overlaypanel}>
          <h2>New to UniWallet?</h2>
          <p>Join thousands of students managing their money smarter.</p>
          <button>Sign Up Here</button>
        </div>
      </div>
    </div>


    </>
  );
};

export default Authpage;
