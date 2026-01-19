import React, { useState } from "react";
import styles from "./ExpensesPage.module.css";
import AddExpenseComponent from "../../Components/AddExpense/AddExpense";
import { useExpenses } from "../../context/ExpenseContext";

const ExpensePage = () => {
  const { expenses, create } = useExpenses();
  const [expensesCount, setExpensesCount] = useState(5);

  const [isAddExpense, setISAddExpense] = useState(false);

  const displayedExpenses = expenses.slice(0, expensesCount);

  const handleNewExpense = async (expense) => {
    create(expense);
    // TODO: Implement a toast
    //?
  };

  const loadMore = () => {
    setExpensesCount((prevCount) => prevCount + 5);
  };
  return (
    <>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <header className={styles.pageHeader}>
            <div className={styles.headerTop}>
              <h2>Expense History</h2>
              <button
                className={styles.addBtn}
                onClick={() => setISAddExpense(!isAddExpense)}
              >
                Add Expense
              </button>
            </div>

            <AddExpenseComponent
              isOpen={isAddExpense}
              onClose={() => setISAddExpense(false)}
              onAdd={handleNewExpense}
            />

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
              {expenses.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No expenses found</p>
                  <span>
                    Add a new expense to start tracking your spending.
                  </span>
                </div>
              ) : (
                displayedExpenses.map((tx) => (
                  <div
                    key={tx.id}
                    className={`${styles.expenseRow} , ${styles.gridRow}`}
                  >
                    {/* Date */}
                    <div className={styles.colDate}>{tx.date}</div>

                    {/* Name */}
                    <div className={styles.colName}>{tx.title}</div>

                    {/* Category Chip */}
                    <div className={styles.colCategory}>
                      <span className={styles.chip}>{tx.category}</span>
                    </div>

                    {/* Amount */}
                    <div className={styles.colAmount}>
                      - Rs. {Number(tx.amount).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            {expenses.length > expensesCount && (
              <div className={styles.loadMoreContainer}>
                <button className={styles.btnLoadMore} onClick={loadMore}>
                  Load More expenses
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default ExpensePage;
