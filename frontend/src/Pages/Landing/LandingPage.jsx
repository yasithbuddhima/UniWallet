import React from "react";
import style from './LandingPage.module.css';

const LandingPage = () => {
  return <><div className={style.body} >
    
    <section className={style.navbar}>
      <h2 className={style.logo}>uniwallet</h2>
      <div className={style.button}>
        <button className={style.login}>Login</button>
        <button className={style.btn}>Create New Account</button>
      </div>
    </section>



    <section className={style.hero}>
      <div className={style.herotext}>
        <h1>Master Your Student Budget.<br/> Stop Stressing.</h1>
        <p>Track expenses, save smartly and manage money easily.</p>
        <button className={style.btngreen}>Get Started in 30 seconds</button><br/>
        <button className={style.btng2}>See how it works ↓</button>
        <p>⭐ 4.9/5 rating by 10k+ students.</p>
      </div>
      {/*<div className={style.heroimage}>
        <div className="phone">"C:\Users\DHANANJAYA\Pictures\Screenshots\Screenshot 2026-01-15 162531.png"</div>
      </div> */}
    </section>



    <section className={style.features}>
      <h2>Built for the campus lifestyle</h2>
      <div className={style.cards}>
        <div className={style.card}>
          <h3>3-Second Quick Add</h3>
          <p>Add expenses fast without stress.</p>
        </div>
        <div className={style.card}>
          <h3>Visual Insights</h3>
          <p>See where your money goes.</p>
        </div>
        <div className={style.card}>
          <h3>Bill Reminders</h3>
          <p>Never forget payments again.</p>
        </div>
      </div>
    </section>



    <section className={style.cta}>
      <h1>Ready to take control<br/> of your finances?</h1>
      <button className={style.btn2}>Create Your Free Uniwallet Account</button>
    </section>
    <section className={style.footer}>
      <p>© 2026 uniwallet. All rights reserved.</p>
    </section>
  </div>
  </>;
};

export default LandingPage;
