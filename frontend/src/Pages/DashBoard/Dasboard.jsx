import React from "react";
import styles from "./Dashboard.module.css";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>UniWallet</h1>
        <div>
          <h2>Hey, Alex!</h2>
          <p>Tuesday, April 24th</p>
        </div>
      </header>

      <div className={styles.cards}>
        <div className={styles.card}>
          <label>Total Expenses</label>
          <h2>$1,450.25</h2>
          <p className={styles.negative}>This Month</p>
        </div>

        <div className={styles.card}>
          <label>April Budget</label>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{width: "73%"}}></div>
          </div>
          <p>$550 left of $2,000</p>
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
          <a href="#">See All</a>
        </div>
        <div className={styles.txList}>
          <div className={styles.tx}>
            <div>
              <p><strong>Starbucks</strong></p>
              <span>Apr 23</span>
            </div>
            <span className={styles.negative}>-$6.20</span>
          </div>
          <div className={styles.tx}>
            <div>
              <p><strong>Transfer from Mom</strong></p>
              <span>Apr 22</span>
            </div>
            <span className={styles.positive}>+$50.00</span>
          </div>
          <div className={styles.tx}>
            <div>
              <p><strong>M20</strong></p>
              <span>Apr 20</span>
            </div>
            <span>-$24.50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
