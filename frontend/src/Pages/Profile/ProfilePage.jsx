import React, { useState } from "react";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [reminders, setReminders] = useState(false);
  const [emailSummary, setEmailSummary] = useState(true);

  const handleNav = (link) => alert("Navigating to: " + link);
  const handleLogout = () => alert("Are you sure?") && alert("Logged out!");
  const handleDelete = () => alert("Delete all data?") && alert("Deleted.");

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.appContainer}>
        <div className={`${styles.card} ${styles.userProfile}`}>
          <h1 style={{ margin: 0 }}>Alex Chen</h1>
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
          <button
            className={styles.btnPrimary}
            onClick={() => alert("Challenge started!")}
          >
            Start Challenge
          </button>
        </div>

        <div className={styles.groupLabel}>GENERAL</div>
        <div className={`${styles.card} ${styles.listWrapper}`}>
          <div className={styles.listRow} onClick={() => handleNav("profile")}>
            <div className={styles.rowContent}>
              <span className={styles.rowIcon}>👤</span>
              <span className={styles.rowTitle}>Personal Details</span>
            </div>
            <div className={styles.nextArrow}>›</div>
          </div>
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
