import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../Transitions";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../styles/CursorContext.css";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");
  const [isMemberPage, setIsMemberPage] = useState(false);

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

  const mouseEnterHandler = () => {
    setCursorBG(isMemberPage ? "blue" : "text");
  };

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

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
        className="cursor "
        style={{
          width: cursorSize + "px",
          height: cursorSize + "px",
          backgroundColor:
            cursorBG === "text"
              ? "#fff"
              : cursorBG === "blue"
              ? "white"
              : "black",
          position: "fixed",
          top: `${cursorPos.y - halfCursorSize}px`,
          left: `${cursorPos.x - halfCursorSize}px`,
          zIndex: 9999,
          borderRadius: "50%",
          mixBlendMode: cursorBG === "text" ? "difference" : "normal",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variants={{ scale: cursorBG === "text" ? 1.5 : 1 }}
        animate={{ scale: cursorBG === "text" ? 1.5 : 1 }}
        transition={transition1}
      >
        {/* Conditionally render the arrow icon */}
        {isMemberPage && (
          <div className="arrow">
            {cursorPos.x < window.innerWidth / 2 ? (
              <FiArrowLeft size={34} />
            ) : (
              <FiArrowRight size={34} />
            )}
          </div>
        )}
      </motion.div>
    </CursorContext.Provider>
  );
};

export default CursorProvider;
