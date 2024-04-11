import React, { useState, useContext, useEffect } from "react";
import "../styles/Header.css";
import logo_black from "../../assets/logo_techsupp_black.svg";
import logo_white from "../../assets/logo_techsupp_white.svg";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/right.png";
import { motion } from "framer-motion";
import DarkMode from "../animations/Dark-Mode";
import { CursorContext } from "../CursorContext/CursorContext";
import { transition1 } from "../../Transitions";
import Techsupp_name from "./Techsupp_name";
import { FiArrowRight } from "react-icons/fi";

export default function Header({
  isSoundOff,
  toggleSound,
  isDarkmodeOn,
  handle_darkmode_change,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuState, setMenuState] = useState([
    { showArrow: false, showDot: true },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
  ]);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      className={`header ${isScrolled ? "header-shadow" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler} // Corrected function name
        onMouseLeave={mouseLeaveHandler}
        className="logo_and_name"
      >
        <Link to="/">
          <img
            src={isDarkmodeOn ? logo_black : logo_white}
            alt="company logo"
            style={{ width: "100px" }}
            className="company_logo"
          />
        </Link>
        {/* <h1 className="techsupp_main_name" >TechSupp</h1> */}
        <Techsupp_name isDarkmodeOn={isDarkmodeOn} />
      </motion.div>

      <motion.div
        transition={transition1}
        onMouseEnter={mouseEnterHandler} // Corrected function name
        onMouseLeave={mouseLeaveHandler}
        className="header_right"
      >
        <div className="sound_container" onClick={toggleSound}>
          <div
            className={`typing-indicator ${isSoundOff ? "" : "stop-animation"}`}
          >
            <div
              className={`typing-circle ${
                isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"
              }`}
            ></div>
            <div
              className={`typing-circle ${
                isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"
              }`}
            ></div>
            <div
              className={`typing-circle ${
                isDarkmodeOn ? "typing-circle_white" : "typing-circle_black"
              }`}
            ></div>
            <div
              className={`typing-shadow ${
                isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"
              }`}
            ></div>
            <div
              className={`typing-shadow ${
                isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"
              }`}
            ></div>
            <div
              className={`typing-shadow ${
                isDarkmodeOn ? "typing-shadow_white" : "typing-shadow_black"
              }`}
            ></div>
          </div>
        </div>
        <div className="dark_mode">
          <DarkMode
            isDarkmodeOn={isDarkmodeOn}
            handle_darkmode_change={handle_darkmode_change}
          />
        </div>

        <div className="menu_button" onClick={toggleMenu}>
          <div className="menu_texts" onClick={toggleMenu}>
            <span className="menu_texts_menu " onClick={toggleMenu}>
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
                  to="/services"
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
                  to="/about"
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
              {/* <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[2].showDot ? "active" : ""
                  }`}
                  to="members/ "
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
              </div> */}
              <div className="flex">
                <Link
                  className={`menu_links ${
                    menuState[3].showDot ? "active" : ""
                  }`}
                  to="/contact"
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
          {/* const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; */}
          <div className="menu_arrow" onClick={toggleMenu}>
            {/* Arrow */}
            <img
              className={`menu_arrow_img ${
                isOpen ? "rotate-down" : "rotate_up"
              }`}
              src={RightArrow}
              alt="/"
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
