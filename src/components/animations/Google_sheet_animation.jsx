import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/Google_sheet_animation.css";
import sheet_image from "../../assets/sheet_image.png";
// import image_1 from "../../assets/sheet.png";
import image_1 from "../../assets/sheet_1.png";
import { CursorContext } from "../CursorContext/CursorContext";

export default function GoogleSheetAnimation({ isDarkmodeOn }) {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="sheet_container">
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        key={isDarkmodeOn}
        className="card_sheet"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
      >
        <img
          src={sheet_image}
          alt="sheet image"
          className={`sheet_image ${
            isDarkmodeOn ? "shadow_light" : "shadow_dark"
          }`}
        />
      </motion.div>
      <motion.img
        src={image_1}
        alt="Google logo"
        className="sheet_logo"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          delay: 0.5, // Delay of half a second before the logo starts animating
        }}
      />
    </div>
  );
}
