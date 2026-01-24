import React, { useState } from "react";
import styles from "./RemindersPage.module.css";
import AddReminder from "../../Components/AddReminder";
import { useReminders } from "../../context/ReminderContext";

const RemindersPage = () => {
  const { reminders, create, update } = useReminders();
  const [isAddReminder, setIsAddReminder] = useState(false);

  const handleNewReminder = async (reminder) => {
    await create(reminder);
  };

  const markAsPaid = (reminder) => {
    update({ ...reminder, paidOn: new Date(), status: "paid" });
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentBox}>
          <div className={styles.header}>
            <h2>Upcoming Bills</h2>
            <button
              className={styles.addBtn}
              onClick={() => setIsAddReminder(true)}
            >
              + New Reminder
            </button>
          </div>

          <AddReminder
            isOpen={isAddReminder}
            onClose={() => setIsAddReminder(false)}
            onComplete={handleNewReminder}
          />

          <div className={styles.timeline}>
            <div className={styles.timeLabel}>THIS WEEK</div>
            {reminders.length === 0
              ? null
              : reminders.map((item) => (
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
                                onClick={() => markAsPaid(item)}
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
