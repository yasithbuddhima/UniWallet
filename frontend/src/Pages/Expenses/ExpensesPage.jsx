import React, { useState } from "react";
import styles from "./ExpensesPage.module.css";
import AddExpenseComponent from "../../Components/AddExpense/AddExpense";
import { useExpenses } from "../../context/ExpenseContext";

const ExpensePage = () => {
  const { expenses, create, deleteIt } = useExpenses();
  const [expensesCount, setExpensesCount] = useState(5);

  const [isAddExpense, setISAddExpense] = useState(false);
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const categorizedItems = getFilteredData(
    expenses,
    categoryFilter,
    timeFilter,
  );
  const displayedExpenses = categorizedItems.slice(0, expensesCount);

  const handleNewExpense = async (expense) => {
    create(expense);
    // TODO: Implement a toast
    //?
  };

  const handleDeleteExpense = (expenseId) => {
    deleteIt(expenseId);
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
              <select
                className={styles.filterSelect}
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
              >
                <option value="All Time">All Time</option>
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
              </select>
              <select
                className={styles.filterSelect}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All Categories">All Categories</option>
                <option value="Food">Food</option>
                <option value="Education">Education</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
          </header>

          <section className={styles.dataContainer}>
            <div className={`${styles.tableHeader} , ${styles.gridRow}`}>
              <div className={styles.colDate}>DATE</div>
              <div className={styles.colName}>Name</div>
              <div className={styles.colCategory}>CATEGORY</div>
              <div className={styles.colAmount}>AMOUNT</div>
              <div className={styles.colAction}>ACTION</div>
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

                    {/* Delete Button */}
                    <div className={styles.colAction}>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDeleteExpense(tx.id)}
                      >
                        &#128465;
                      </button>
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

const getFilteredData = (expenses, categoryFilter, timeFilter) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return expenses.filter((item) => {
    // --- Category Filter ---
    const matchesCategory =
      categoryFilter === "All Categories" || item.category === categoryFilter;

    // --- Time Filter ---
    let matchesTime = true;
    const itemDate = new Date(item.date);

    if (timeFilter === "This Month") {
      matchesTime =
        itemDate.getMonth() === currentMonth &&
        itemDate.getFullYear() === currentYear;
    } else if (timeFilter === "Last Month") {
      const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const yearOfLastMonth =
        currentMonth === 0 ? currentYear - 1 : currentYear;
      matchesTime =
        itemDate.getMonth() === lastMonth &&
        itemDate.getFullYear() === yearOfLastMonth;
    }

    return matchesCategory && matchesTime;
  });
};

export default ExpensePage;
