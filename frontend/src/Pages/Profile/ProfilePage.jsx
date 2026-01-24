import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import { useUser } from "../../context/UserContext";
import { motion, AnimatePresence } from "motion/react";
import { auth } from "../../utils/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [reminders, setReminders] = useState(false);
  const [emailSummary, setEmailSummary] = useState(true);
  const [expandedPersonal, setExpandedPersonal] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      try {
        await signOut(auth);
        navigate("/auth");
      } catch (error) {
        console.error("Sign out error:", error);
        alert("Error signing out: " + error.message);
      }
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      if (
        window.confirm(
          "This will permanently delete all your data. Type your email to confirm.",
        )
      ) {
        try {
          const currentUser = auth.currentUser;
          if (currentUser) {
            await deleteUser(currentUser);
            navigate("/auth");
          }
        } catch (error) {
          console.error("Delete account error:", error);
          alert("Error deleting account: " + error.message);
        }
      }
    }
  };

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.appContainer}>
        <div className={`${styles.card} ${styles.userProfile}`}>
          <h1 style={{ margin: 0 }}>{user?.displayName || "Your Name"}</h1>
          <div className={styles.statusBadge}>Level 3 Saver</div>
        </div>

        <div className={styles.card}>
          <div style={{ fontWeight: 700, fontSize: "17px" }}>
            The Caffeinated Scholar
          </div>
          <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.4" }}>
            You spend 35% of your budget on coffee. That's $45 more than
            average!
          </p>
          <button className={styles.btnPrimary}>Start Challenge</button>
        </div>
        <div className={styles.groupLabel}>GENERAL</div>
        <div className={`${styles.card} ${styles.listWrapper}`}>
          <div
            className={styles.listRow}
            onClick={() => setExpandedPersonal(!expandedPersonal)}
          >
            <div className={styles.rowContent}>
              <span className={styles.rowIcon}>👤</span>
              <span className={styles.rowTitle}>Personal Details</span>
            </div>
            <div className={styles.nextArrow}>›</div>
          </div>
          <AnimatePresence>
            {expandedPersonal && (
              <motion.div
                className={styles.expandedDiv}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  <strong>Email:</strong> {user?.email || "N/A"}
                </p>
                <p>
                  <strong>Created:</strong>{" "}
                  {user?.metadata?.creationTime || "N/A"}
                </p>
                <p>
                  <strong>Last Sign In:</strong>{" "}
                  {user?.metadata?.lastSignInTime || "N/A"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.groupLabel}>SETTINGS</div>
        <div className={`${styles.card} ${styles.listWrapper}`}>
          <div
            className={styles.listRow}
            onClick={() => setReminders(!reminders)}
          >
            <div className={styles.rowContent}>
              <span className={styles.rowIcon}>⏰</span>
              <span className={styles.rowTitle}>Daily Notifications</span>
            </div>
            <button
              className={styles.toggleSwitch}
              role="switch"
              aria-checked={reminders}
            >
              <span className={styles.circle}></span>
            </button>
          </div>

          <div
            className={styles.listRow}
            onClick={() => setEmailSummary(!emailSummary)}
          >
            <div className={styles.rowContent}>
              <span className={styles.rowIcon}>🌙</span>
              <span className={styles.rowTitle}>Email Summary</span>
            </div>
            <button
              className={styles.toggleSwitch}
              role="switch"
              aria-checked={emailSummary}
            >
              <span className={styles.circle}></span>
            </button>
          </div>
        </div>
        <div className={`${styles.groupLabel} ${styles.dangerText}`}>
          DANGER ZONE
        </div>
        <div className={`${styles.card} ${styles.listWrapper}`}>
          <div className={styles.listRow} onClick={handleDelete}>
            <div className={styles.rowContent}>
              <span className={`${styles.rowIcon} ${styles.dangerText}`}>
                ⚠️
              </span>
              <span className={`${styles.rowTitle} ${styles.dangerText}`}>
                Delete Data
              </span>
            </div>
            <div className={styles.nextArrow + " " + styles.dangerText}>›</div>
          </div>
          <div className={styles.listRow} onClick={handleLogout}>
            <div className={styles.rowContent}>
              <span className={`${styles.rowIcon} ${styles.dangerText}`}>
                🚪
              </span>
              <span className={`${styles.rowTitle} ${styles.dangerText}`}>
                Sign Out
              </span>
            </div>
            <div className={styles.nextArrow + " " + styles.dangerText}>›</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
