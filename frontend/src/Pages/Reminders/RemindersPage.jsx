import React, { useState } from "react";
import styles from "./RemindersPage.module.css";

const RemindersPage = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      merchant: "Spotify Premium",
      cost: "$11.99",
      due: "Due in 3 days",
      status: "upcoming",
      icon: "🎵",
    },
    {
      id: 2,
      merchant: "City Realty",
      cost: "$1,200.00",
      due: "Was due yesterday!",
      status: "overdue",
      icon: "🏠",
    },
    {
      id: 3,
      merchant: "Comcast Internet",
      cost: "$89.00",
      due: "Paid on Oct 12",
      status: "paid",
      icon: "📶",
    },
  ]);

  const markAsPaid = (id) => {
    setReminders((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "paid", paidOn: new Date() } : item,
      ),
    );
  };
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentBox}>
          <div className={styles.header}>
            <h2>Upcoming Bills</h2>
            <button className={styles.addBtn}>+ New Reminder</button>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timeLabel}>THIS WEEK</div>

            {reminders.map((item) => (
              <div key={item.id} className={styles.cardWrapper}>
                <div className={styles.timelineDot} />

                <div className={`${styles.card} ${styles[item.status]}`}>
                  <div className={styles.cardContent}>
                    <div className={styles.icon}>{item.icon}</div>

                    <div className={styles.details}>
                      <span className={styles.merchant}>
                        {item.merchant}
                        {item.status === "overdue" && (
                          <span className={styles.overdueTag}>OVERDUE</span>
                        )}
                      </span>
                      <span className={styles.subtext}>{item.due}</span>
                    </div>

                    <div className={styles.priceAction}>
                      {item.status !== "paid" ? (
                        <>
                          <span className={styles.amount}>{item.cost}</span>
                          <button
                            className={styles.payBtn}
                            onClick={() => markAsPaid(item.id)}
                          >
                            Mark Paid ✓
                          </button>
                        </>
                      ) : (
                        <span className={styles.amount}>{item.cost}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RemindersPage;
