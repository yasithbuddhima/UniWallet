import React, { useState } from "react";
import styles from "./AddExpense.module.css";

const AddExpenseComponent = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className={styles.componentOverlay} onClick={onClose}>
      <div
        className={styles.componentContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.componentHeader}>
          <h3>Add New Expense</h3>
          <button className={styles.closeIcon} onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.componentForm}>
          <div className={styles.inputGroup}>
            <label>Expense Name</label>
            <input
              type="text"
              placeholder="e.g. Lunch"
              required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Amount ($)</label>
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Date</label>
              <input
                type="date"
                defaultValue={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Category</label>
            <select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className={styles.componentActions}>
            <button
              type="button"
              className={styles.btnCancel}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.btnSubmit}>
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseComponent;
