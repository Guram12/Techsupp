import React from "react";
import { motion } from "framer-motion";
import "./Transition.css";
import logo_white from "../../assets/logo_techsupp_white.svg";


const transition = (OgComponent) => {


  return (props) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="loaded_logo" >
          <img src={logo_white} alt="company_logo" className="company_logo_image_tag" />
        </div>

      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="loaded_logo" >
          <img src={logo_white} alt="company_logo" className="company_logo_image_tag" />
        </div>

      </motion.div>
    </>
  );
};

export default transition;
