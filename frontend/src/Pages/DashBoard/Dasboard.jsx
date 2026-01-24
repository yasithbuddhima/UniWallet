import React from "react";
import styles from "./Dashboard.module.css";
import { useExpenses } from "../../context/ExpenseContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const { expenses, getTotalExpenseInMonth } = useExpenses();
  const displayedExpenses = expenses.slice(0, 5);

  const totalExpense = getTotalExpenseInMonth();
  // TODO: get this from User
  const budget = 20000;

  const percentage = Math.min((totalExpense / budget) * 100, 100);
  return (
    <div className={styles.dashboard}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <label>Total Expenses</label>
          <h2>Rs. {Number(totalExpense).toLocaleString("en-LK")}</h2>
          <p className={styles.negative}>This Month</p>
        </div>

        <div className={styles.card}>
          <label>
            {new Date().toLocaleString("default", { month: "long" })} Budget
          </label>
          <div className={styles.progress}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              style={{
                height: "20px",
                backgroundColor: percentage > 85 ? "#ff4d4d" : "#4CAF50",
              }}
            />
          </div>
          {totalExpense < budget ? (
            <p>
              {Number(budget - totalExpense).toLocaleString("en-LK")} left of{" "}
              {Number(budget).toLocaleString("en-LK")}
            </p>
          ) : (
            <p className={styles.negative}> Budget Limit Exeeded</p>
          )}
        </div>

        <div className={styles.card}>
          <label>Next Expense</label>
          <h3>Spotify</h3>
          <p className={styles.warning}>Due Tomorrow - $10.99</p>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.chart}>
          <h3>Spending This Month</h3>
          <div className={styles.placeholder}>📈 Graph</div>
        </div>
        <div className={styles.chart}>
          <h3>Category Breakdown</h3>
          <div className={styles.placeholder}>🟠 Chart</div>
        </div>
      </div>

      <div className={styles.transactions}>
        <div className={styles.txHeader}>
          <h3>Recent Transactions</h3>
          {displayedExpenses.length === 0 ? null : (
            <span onClick={() => navigate("/expenses")}>See All</span>
          )}
        </div>
        <div className={styles.txList}>
          {displayedExpenses.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No expenses found</p>
              <span>Add a new expense to start tracking your spending.</span>
            </div>
          ) : (
            displayedExpenses.map((tx) => (
              <div className={styles.tx} key={tx.id}>
                <div>
                  <p>
                    <strong>{tx.title}</strong>
                  </p>
                  <span>
                    {new Date(tx.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <span className={styles.negative}>
                  - Rs. {Number(tx.amount).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
