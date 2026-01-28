import styles from "./AppLogo.module.css";

const AppLogo = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src="/logo192.png" alt="logo" className={styles.logoImg} />
        <span>UniWallet</span>
      </div>
    </>
  );
};

export default AppLogo;
