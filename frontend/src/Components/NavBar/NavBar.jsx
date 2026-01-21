import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import styles from "./NavBar.module.css";
import { userSignout } from "../../Services/authService";

const Navbar = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await userSignout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          {/* //TODO: Add Logo */}

          <span>UniWallet</span>
        </div>

        <div className={styles.links}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/expenses"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Expenses
          </NavLink>
          <NavLink
            to="/reminders"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Reminders
          </NavLink>
        </div>

        <div className={styles.userSection}>
          <NavLink to="/profile" className={styles.profileLink}>
            {/* //TODO: Add dummy profile pic */}
            <img
              src={user?.photoURL || null}
              alt="Profile"
              className={styles.avatar}
            />
          </NavLink>
          <button
            onClick={logout}
            className={styles.logoutBtn}
            title="Sign Out"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
