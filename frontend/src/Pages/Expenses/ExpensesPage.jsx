import React, { useState } from "react";
import styles from "./ExpensesPage.module.css";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <header className={styles.pageHeader}>
            <div className={styles.headerTop}>
              <h2>Expense History</h2>
              <button
                className={styles.addBtn}
                // TODO:  method to add expenses
                onClick={() => null}
              >
                Add Expense
              </button>
            </div>

            <div className={styles.filterRow}>
              <select className={styles.filterSelect}>
                <option>This Month</option>
                <option>Last Month</option>
                <option>All Time</option>
              </select>
              <select className={styles.filterSelect}>
                <option>All Categories</option>
                <option>Food</option>
                <option>Education</option>
                <option>Transport</option>
              </select>
            </div>
          </header>

          <section className={styles.dataContainer}>
            <div className={`${styles.tableHeader} , ${styles.gridRow}`}>
              <div className={styles.colDate}>DATE</div>
              <div className={styles.colName}>Name</div>
              <div className={styles.colCategory}>CATEGORY</div>
              <div className={styles.colAmount}>AMOUNT</div>
            </div>

            {/* Rows */}
            <div className={styles.expenseList}>
              {/* //TODO: Add expenses ( use State ) */}
              {/* {//TODO: Add Expty blocl if no expenses} */}
              {expenses.map((tx) => (
                <div
                  key={tx.id}
                  className={`${styles.expenseRow} , ${styles.gridRow}`}
                >
                  {/* Date */}
                  <div className={styles.colDate}>{tx.date}</div>

                  {/* Name */}
                  <div className={styles.colName}>{tx.Name}</div>

                  {/* Category Chip */}
                  <div className={styles.colCategory}>
                    <span className={styles.chip}>{tx.category}</span>
                  </div>

                  {/* Amount */}
                  <div className={styles.colAmount}>-${tx.amount}</div>
                </div>
              ))}
            </div>

            <div className={styles.loadMoreContainer}>
              {/* //TODO: Add load more function */}
              <button className={styles.btnLoadMore}>Load More expenses</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ExpensePage;
