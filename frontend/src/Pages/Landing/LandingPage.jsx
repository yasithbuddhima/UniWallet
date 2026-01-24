import React from "react";
import style from "./LandingPage.module.css";
import financialimage1 from "./financialimage1.png";
import financialimage2 from "./financialimage2.png";
import trustimage1 from "./trustimage1.png";
import trustimage2 from "./trustimage2.png";
import trustimage3 from "./trustimage3.png";
import trustimage4 from "./trustimage4.png";
import trustimage5 from "./trustimage5.png";
import trustimage6 from "./trustimage6.png";
import hero from "./hero.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.body}>
        <section className={style.navbar}>
          <h2 className={style.logo}>
            <img src="/logo192.png" alt="logo" className={style.logoimg} />
            uniwallet
          </h2>
          <div className={style.button}>
            <button className={style.login} onClick={() => navigate("/login")}>
              Login
            </button>
            <button className={style.btn} onClick={() => navigate("/signup")}>
              Create New Account
            </button>
          </div>
        </section>

        <section className={style.hero}>
          <div className={style.herotext}>
            <h1>
              Master Your Student Budget.
              <br /> Stop Stressing.
            </h1>
            <p>Track expenses, save smartly and manage money easily.</p>
            <button
              className={style.btngreen}
              onClick={() => navigate("/signup")}
            >
              Get Started Now
            </button>
          </div>
          <div className={style.heroimage}>
            <img src={hero} alt="phone" />
          </div>
        </section>

        <div className={style.trust}>
          <h2>Used by smart students at over 500 universities globally.</h2>
          <div className={style.trustimage}>
            <img src={trustimage1} alt="university logo1" />
            <img src={trustimage2} alt="university logo2" />
            <img src={trustimage3} alt="university logo3" />
            <img src={trustimage4} alt="university logo4" />
            <img src={trustimage5} alt="university logo5" />
            <img src={trustimage6} alt="university logo6" />
          </div>
        </div>

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

        <section className={style.financial1}>
          <div className={style.financialtext1}>
            <h3>Save for what matters.</h3>
            <p>
              Set goals for spring break, concerts or a new laptop. watch your
              savings grow.
            </p>
          </div>
          <div className={style.financialimage1}>
            <img src={financialimage1} alt="Save for goals" />
          </div>
        </section>

        <section className={style.financial2}>
          <div className={style.financialimage2}>
            <img src={financialimage2} alt="Financial health tracking" />
          </div>
          <div className={style.financialtext2}>
            <h3>Ditch the spreadsheet anxiety.</h3>
            <p>
              No complicated formulas. Just clear, simple views of your
              financial health.
            </p>
          </div>
        </section>

        <section className={style.cta}>
          <h1>Ready to take control of your finances?</h1>
          <p>Join thousands of students making smarter money moves today.</p>
          <button className={style.btn2} onClick={() => navigate("/signup")}>
            Create Your Free Uniwallet Account
          </button>
        </section>

        <section className={style.endnote}>
          <div className={style.endnotetext}>
            <h2>
              <img src="/logo.png" alt="logo" className={style.logoimg} />
              Uniwallet
            </h2>
            <p>Set goals for spring break, avoid smarter money today</p>
          </div>
          <div className={style.endnotetext}>
            <p>Product</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div className={style.endnotetext}>
            <p>Company</p>
            <p>About</p>
            <p>Careers</p>
          </div>
          <div className={style.endnotetext}>
            <p>Resources</p>
            <p>Student Blog</p>
            <p>Help Center</p>
          </div>
        </section>
        <section className={style.footer}>
          <p>© 2026 UniWallet. All rights reserved.</p>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
