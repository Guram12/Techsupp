import React, { useState, useEffect, createContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { transition1 } from "../../Transitions";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../styles/CursorContext.css";




export const CursorContext = createContext();

const CursorProvider = ({ children  , isDarkmodeOn }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");
  const [isMemberPage, setIsMemberPage] = useState(false);
  const arrowControls = useAnimation();

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
      <motion.div
        className="cursor"
        style={{
          width: cursorSize + "px",
          height: cursorSize + "px",
          backgroundColor: isMemberPage ? "white" : // Make cursor black on member page
            cursorBG === "text" ? "#fff" :  (isDarkmodeOn ?  "black"  : "white" ),
          position: "fixed",
          top: `${cursorPos.y - halfCursorSize}px`,
          left: `${cursorPos.x - halfCursorSize}px`,
          zIndex: 9999,
          borderRadius: "50%",
          mixBlendMode: cursorBG === "text" && !isMemberPage ? "difference" : "normal",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
    </CursorContext.Provider>
  );
};

export default CursorProvider;
