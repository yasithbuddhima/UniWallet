import React from "react";
import style from "./LandingPage.module.css";
import { IoMdTrendingUp } from "react-icons/io";
import { BiCategory, BiSolidBellRing } from "react-icons/bi";
import { PiGithubLogo } from "react-icons/pi";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import hero from "./hero.png";
import AppLogo from "../../Components/AppLogo/AppLogo";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.body}>
        <header className={style.header}>
          <div className={style.navbar}>
            <div className={style.logo}>
              <AppLogo />
            </div>
            <div className={style.links}>
              <a href="#features">
                <button>Features</button>
              </a>
              <a href="#testimonials">
                <button>Testimonials</button>
              </a>
              <a href="#contact">
                <button>Contact</button>
              </a>
            </div>
            <div className={style.btn}>
              <button
                className={style.login}
                onClick={() => navigate("/login")}
              >
                LogIn
              </button>
              <button
                className={style.signup}
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>
            </div>
          </div>
        </header>
        {/*  */}
        <div className={style.hero}>
          <h1>Master Your Student Finances with</h1>
          <h1 className={style.colored}>UniWallet</h1>
          <p>
            Take control of your university life. UniWallet helps you track
            expenses,
            <br /> manage budgets, and build healthy financial habits, all in
            one simple app.
          </p>
          <button className={style.signup} onClick={() => navigate("/signup")}>
            Get Started for Free
          </button>
          <button className={style.more}>Learn More</button>
        </div>
        <div className={style.heroimg}>
          <img src={hero} alt="Hero Img"></img>
        </div>
        {/*  */}
        <FeaturesSection />
        {/*  */}
        <Testimonials />
        {/*  */}
        <Footer />

        {/*  */}
      </div>
    </>
  );
};

const FeaturesSection = () => {
  return (
    <>
      <section className={style.middle}>
        <h1 className={style.stitle}>Features</h1>
        <p className={style.sdescription}>
          UniWallet is packed with powerful features designed to make student
          finance management a breeze.
        </p>
        <div class={style.cardlayout}>
          <div class={style.card}>
            <div class={style.icon}>
              <IoMdTrendingUp color="#84cc16" size={50} />
            </div>

            <h1 className={style.cardtitle}>Expense Tracking</h1>
            <p className={style.cardDescription}>
              Effortlessly monitor your spending in real-time. Know where your
              money goes and stay on top of your budget.
            </p>
          </div>
          <div class={style.card}>
            <div class={style.icon}>
              <BiCategory color="#84cc16" size={50} />
            </div>

            <h1 className={style.cardtitle}>Category Management</h1>
            <p className={style.cardDescription}>
              Organize your expenses with predefined categories like food,
              transport, and entertainment for a clearer financial overview.
            </p>
          </div>
          <div class={style.card}>
            <div class={style.icon}>
              <BiSolidBellRing color="#84cc16" size={50} />
            </div>

            <h1 className={style.cardtitle}>Smart Reminders</h1>
            <p className={style.cardDescription}>
              Never miss a payment again. Set up reminders for upcoming bills
              and subscriptions, and we'll notify you in advance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  return (
    <>
      <section className={style.testimonials}>
        <h1 className={style.stitle}>Loved by Students</h1>
        <p className={style.sdescription}>
          See what fellow students are saying about how UniWallet transformed
          their financial lives.
        </p>
        <div class={style.cardlayout}>
          <div class={style.card}>
            <div className={style.quote}>
              "UniWallet has been a game-changer for me. I can finally see where
              all my money is going and stick to my budget. The reminder feature
              is a lifesaver for my tuition fees!"
            </div>
            <div className={style.profile}>
              <div className={style.propic}>
                <img src={avatar1} alt="avatar1" />
              </div>
              <div className={style.details}>
                <div className={style.name}>Dhananjaya Walpola</div>
                <div className={style.fac}>Computer Science Student</div>
              </div>
            </div>
          </div>
          <div class={style.card}>
            <div className={style.quote}>
              "As someone who's not great with numbers, UniWallet makes managing
              my finances incredibly simple. The interface is clean and easy to
              use. Highly recommend it to any student."
            </div>
            <div className={style.profile}>
              <div className={style.propic}>
                <img src={avatar3} alt="avatar3" />
              </div>
              <div className={style.details}>
                <div className={style.name}>Sanduni Dihansa</div>
                <div className={style.fac}>Business Administration Student</div>
              </div>
            </div>
          </div>
          <div class={style.card}>
            <div className={style.quote}>
              "I love how I can categorize my spending. It helped me realize I
              was spending way too much on coffee! UniWallet helped me save
              money for my study abroad trip."
            </div>
            <div className={style.profile}>
              <div className={style.propic}>
                <img src={avatar2} alt="avatar1" />
              </div>
              <div className={style.details}>
                <div className={style.name}>Thenura Sithum</div>
                <div className={style.fac}>Arts & Humanities Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <hr className={style.hr} />
      <div className={style.footer}>
        <div className={style.app}>
          <AppLogo />
          <div className={style.des}>Smart expense tracking for students.</div>
        </div>
        <div className={style.column}>
          <div className={style.title}>Company</div>
          <div className={style.items}>About Us</div>
          <div className={style.items}>Careers</div>
          <div className={style.items}>Contact</div>
        </div>
        <div className={style.column}>
          <div className={style.title}>Legal</div>
          <div className={style.items}>Terms of Service</div>
          <div className={style.items}>Privacy Policy</div>
        </div>
        <div className={style.column}>
          <div className={style.title}>Connect</div>
          <div className={style.items}>
            <PiGithubLogo />
            GitHub
          </div>
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style.footertxt}>
        © {new Date().getFullYear()} UniWallet. All rights reserved.
      </div>
    </>
  );
};

export default Landingpage;
