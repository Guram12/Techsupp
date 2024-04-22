import React, { useState, useEffect, createContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { transition1 } from "../../Transitions";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../styles/CursorContext.css";

export const CursorContext = createContext();

const CursorProvider = ({ children, isDarkmodeOn }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");
  const [isMemberPage, setIsMemberPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to manage if the device is mobile
  const arrowControls = useAnimation();

  useEffect(() => {
    // Function to determine if the device is mobile
    const checkIfMobile = () => {
      const touchSupported =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
      const screenWidth = window.innerWidth;
      setIsMobile(touchSupported || screenWidth < 768); // Consider mobile if touch is supported or screen width is less than 768px
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTimeout(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }, 200);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isMemberPage) {
      // Animate the arrow
      arrowControls.start({
        x: [0, -5, 0, 5, 0], // Define keyframes for x-axis motion
        transition: {
          repeat: Infinity, // Repeat the animation infinitely
          duration: 1.5, // Duration for each loop
        },
      });
    } else {
      arrowControls.stop(); // Stop the animation if not on the member page
    }
  }, [isMemberPage, arrowControls]);

  const mouseEnterHandler = () => {
    // If on members page, cursor should always be black
    if (!isMemberPage) {
      setCursorBG("text");
    }
  };

  const mouseLeaveHandler = () => {
    // If on members page, cursor should always be black
    if (!isMemberPage) {
      setCursorBG("default");
    }
  };

  // Update cursor size logic as per requirement
  const cursorSize = isMemberPage ? 100 : cursorBG === "text" ? 70 : 32;
  const halfCursorSize = cursorSize / 2;

  return (
    <CursorContext.Provider
      value={{
        cursorBG,
        mouseEnterHandler,
        mouseLeaveHandler,
        setIsMemberPage,
      }}
    >
      {children}
      {!isMobile && (
        <motion.div
          className="cursor"
          style={{
            width: cursorSize + "px",
            height: cursorSize + "px",
            backgroundColor: isMemberPage
              ? "white"
              : cursorBG === "text"
              ? "#fff"
              : isDarkmodeOn
              ? "black"
              : "white",
            position: "fixed",
            top: `${cursorPos.y - halfCursorSize}px`,
            left: `${cursorPos.x - halfCursorSize}px`,
            zIndex: 9999,
            borderRadius: "50%",
            mixBlendMode:
              cursorBG === "text" && !isMemberPage ? "difference" : "normal",
            pointerEvents: "none",
          }}
          animate={{ scale: cursorBG === "text" && !isMemberPage ? 1.5 : 1 }}
          transition={transition1}
        >
          {isMemberPage && (
            <motion.div
              className="arrow"
              animate={arrowControls}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cursorPos.x < window.innerWidth / 2 ? (
                <FiArrowLeft size={54} />
              ) : (
                <FiArrowRight size={54} />
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
