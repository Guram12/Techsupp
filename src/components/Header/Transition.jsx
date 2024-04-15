import React from "react";
import { motion } from "framer-motion";
import "./Transition.css";

const transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props}/>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }} // Corrected typo here
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }} // Corrected typo here
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
