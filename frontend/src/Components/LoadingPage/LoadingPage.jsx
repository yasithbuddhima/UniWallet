import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieFile from "../../assets/Revenue.lottie";
export const Loadingpage = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        {/* 1. The Background Layer (Blurred) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.3)", // Light transparent overlay
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: -1, // Keep it behind the content
          }}
        />

        {/* 2. The Content Layer (Sharp & Clear) */}
        <div
          style={{
            height: "400px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DotLottieReact
            src={lottieFile}
            loop
            autoplay
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};
