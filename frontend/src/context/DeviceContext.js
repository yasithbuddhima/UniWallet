import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieFile from "../assets/register.lottie";
import AppLogo from "../Components/AppLogo/AppLogo";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {isMobile ? (
        <div style={styles.overlay}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.container}
          >
            <DotLottieReact
              src={lottieFile}
              loop
              autoplay
              style={{ height: "100%", width: "100%" }}
            />
            <h2 style={styles.title}>Desktop Experience Recommended</h2>
            <p style={styles.text}>
              Uni Wallet's advanced analytics and charts are best viewed on a
              laptop or desktop. Please switch devices to manage your wealth.
            </p>
            <div style={styles.brand}></div>
            <AppLogo />
          </motion.div>
        </div>
      ) : (
        children
      )}
    </DeviceContext.Provider>
  );
};

const styles = {
  overlay: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    textAlign: "center",
  },
  container: {
    maxWidth: "400px",
    color: "#f8fafc",
  },
  lottie: {
    height: 200,
  },
  title: { color: "#84cc16", marginBottom: "15px" },
  text: { color: "#94a3b8", lineHeight: "1.6" },
  brand: {
    marginTop: "30px",
    fontWeight: "bold",
    color: "#84cc16",
    fontFamily: "Lobster Two",
  },
};
export const useDevice = () => useContext(DeviceContext);
