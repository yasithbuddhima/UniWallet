import React, { useState } from "react";
import styles from "./AddReminder.module.css";

const ICONS = ["🎵", "🏠", "📶", "🛒", "🚗", "💡"];

const AddReminder = ({ isOpen, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    due: "",
    icon: "🎵",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.value || !formData.dueDate) return;
    if (onComplete) onComplete(formData);
    onClose();
  };

  if (!isOpen) return;

  return (
    <div className={styles.componentOverlay} onClick={onClose}>
      <div
        className={styles.formContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className={styles.title}>New Reminder</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Merchant / Name</label>
            <input
              type="text"
              placeholder="e.g. Spotify"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Amount</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.value}
                onChange={(e) =>
                  setFormData({ ...formData, value: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Choose Icon</label>
            <div className={styles.iconGrid}>
              {ICONS.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  className={`${styles.iconBtn} ${formData.icon === emoji ? styles.activeIcon : ""}`}
                  onClick={() => setFormData({ ...formData, icon: emoji })}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Create Reminder
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReminder;
