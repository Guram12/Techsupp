import React, { useState, useContext } from "react";
import "../styles/Header.css";
import logo_black from "../../assets/logo_techsupp_black.svg";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/right.png";
import { motion } from "framer-motion";
import DarkMode from "../animations/Dark-Mode";
import { CursorContext } from "../CursorContext/CursorContext";
import { transition1 } from "../../Transitions";



export default function Header({ 
  isSoundOff, 
  toggleSound,
  isDarkmodeOn,
  handle_darkmode_change,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuState, setMenuState] = useState([
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
  ]);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkHover = (index) => {
    setMenuState((prevMenuState) =>
      prevMenuState.map((item, i) =>
        i === index && !item.showDot
          ? { ...item, showArrow: true }
          : { ...item, showArrow: false }
      )
    );
  };

  const handleLinkClick = (index) => {
    setMenuState((prevMenuState) =>
      prevMenuState.map((item, i) =>
        i === index
          ? { ...item, showArrow: false, showDot: true }
          : { ...item, showDot: false }
      )
    );
  };

  return (
    <header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <motion.div
        // initial={{ opacity: 0, y: "-50%" }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler} // Corrected function name
        onMouseLeave={mouseLeaveHandler}
        className="logo_and_name"
      >
        <Link to="/">
          <img src={logo_black} alt="company logo" style={{ width: "100px" }} />
        </Link>
        <h1>TechSupp</h1>
      </motion.div>

      <motion.div
        transition={transition1}
        onMouseEnter={mouseEnterHandler} // Corrected function name
        onMouseLeave={mouseLeaveHandler}
        className="header_right"
      >
        <div className="sound_container" onClick={toggleSound}>
          <div
            className={`typing-indicator ${isSoundOff ? "" : "stop-animation"}  `}
          >
            <div className={`typing-circle ${isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"}`}></div>
            <div className={`typing-circle ${isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"}`}></div>
            <div className={`typing-circle ${isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"}`}></div>
            <div className={`typing-shadow ${isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"}`} ></div>
            <div className={`typing-shadow ${isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"}`}></div>
            <div className={`typing-shadow ${isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"}`}></div>
          </div>
        </div>
        <div className="dark_mode">
          <DarkMode 
            isDarkmodeOn={isDarkmodeOn}
            handle_darkmode_change={handle_darkmode_change}
          />
        </div>


        <div className="menu_button">
          <div className="menu_texts">
            <span
              className={`menu_texts_menu ${isOpen ? "rotate" : ""}`}
              onClick={toggleMenu}
            >
              {isOpen ? "CLOSE" : "MENU"}
            </span>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="menu"
            >
              <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[0].showDot ? "active" : ""
                  }`}
                  to="/link1"
                  onMouseEnter={() => handleLinkHover(0)}
                  onMouseLeave={() =>
                    setMenuState((prevMenuState) =>
                      prevMenuState.map((item) => ({
                        ...item,
                        showArrow: false,
                      }))
                    )
                  }
                  onClick={() => handleLinkClick(0)}
                >
                  სერვისები
                  <div>
                    {menuState[0].showArrow && !menuState[0].showDot && (
                      <img className="arrow_img" src={RightArrow} alt="" />
                    )}
                    {menuState[0].showDot && (
                      <div className="link_dott_menu">●</div>
                    )}
                  </div>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[1].showDot ? "active" : ""
                  }`}
                  to="/link2"
                  onMouseEnter={() => handleLinkHover(1)}
                  onMouseLeave={() =>
                    setMenuState((prevMenuState) =>
                      prevMenuState.map((item) => ({
                        ...item,
                        showArrow: false,
                      }))
                    )
                  }
                  onClick={() => handleLinkClick(1)}
                >
                  ჩვენს შესახებ
                  <div>
                    {menuState[1].showArrow && !menuState[1].showDot && (
                      <img className="arrow_img" src={RightArrow} alt="" />
                    )}
                    {menuState[1].showDot && " ●"}
                  </div>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[2].showDot ? "active" : ""
                  }`}
                  to="/link3"
                  onMouseEnter={() => handleLinkHover(2)}
                  onMouseLeave={() =>
                    setMenuState((prevMenuState) =>
                      prevMenuState.map((item) => ({
                        ...item,
                        showArrow: false,
                      }))
                    )
                  }
                  onClick={() => handleLinkClick(2)}
                >
                  წევრები
                  <div>
                    {menuState[2].showArrow && !menuState[2].showDot && (
                      <img className="arrow_img" src={RightArrow} alt="" />
                    )}
                    {menuState[2].showDot && " ●"}
                  </div>
                </Link>
              </div>
              <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[3].showDot ? "active" : ""
                  }`}
                  to="/link4"
                  onMouseEnter={() => handleLinkHover(3)}
                  onMouseLeave={() =>
                    setMenuState((prevMenuState) =>
                      prevMenuState.map((item) => ({
                        ...item,
                        showArrow: false,
                      }))
                    )
                  }
                  onClick={() => handleLinkClick(3)}
                >
                  კონტაქტები{" "}
                  <div>
                    {menuState[3].showArrow && !menuState[3].showDot && (
                      <img className="arrow_img" src={RightArrow} alt="" />
                    )}
                    {menuState[3].showDot && "●"}
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
          <div className="menu_dots">
            <div></div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
