import React, { useState, useEffect, createContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../../Transitions";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTimeout(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  // Calculate cursor dimensions
  const cursorSize = cursorBG === "text" ? 70 : 32;
  const halfCursorSize = cursorSize / 2;

  return (
    <CursorContext.Provider
      value={{ cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
      <motion.div
        className="cursor"
        style={{
          width: cursorSize + "px",
          height: cursorSize + "px",
          backgroundColor: cursorBG === "text" ? "#fff" : "#0e1112",
          position: "fixed",
          top: `${cursorPos.y - halfCursorSize}px`, // Adjust for centering
          left: `${cursorPos.x - halfCursorSize}px`, // Adjust for centering
          zIndex: 9999,
          borderRadius: "50%",
          mixBlendMode: cursorBG === "text" ? "difference" : "normal",
          pointerEvents: "none",
        }}
        variants={{ scale: cursorBG === "text" ? 1.5 : 1 }}
        animate={{ scale: cursorBG === "text" ? 1.5 : 1 }}
        transition={transition1}
      ></motion.div>
    </CursorContext.Provider>
  );
};

export default CursorProvider;
