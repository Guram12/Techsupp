import React, { useState } from "react";
import "../styles/Header.css";
import logo_black from "../../assets/logo_techsupp_black.svg";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/right.png";

export default function Header({ isSoundOff, toggleSound }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuState, setMenuState] = useState([
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
    { showArrow: false, showDot: false },
  ]);
  // menu toggle, menu-close
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
    <header>
      <div className="logo_and_name">
        <Link to="/">
          <img src={logo_black} alt="company logo" style={{ width: "100px" }} />
        </Link>
        <h1>TechSupp</h1>
      </div>

      <div className="header_right">
        <div className="sound_container" onClick={toggleSound}>
          <div
            className={`typing-indicator ${isSoundOff ? "" : "stop-animation"}`}
          >
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
            <div className="typing-shadow"></div>
            <div className="typing-shadow"></div>
            <div className="typing-shadow"></div>
          </div>
        </div>
        <div className="dark_mode">D</div>
        <div className="menu_button">
          <div className="menu_texts">
            <span
              className={`menu_texts_menu ${isOpen ? "rotate" : ""}`}
              onClick={toggleMenu}
            >
              {isOpen ? "CLOSE" : "MENU"}
            </span>
          </div>
          {/* Render your menu links here */}
          {isOpen && (
            <div className="menu">
              <div className="flex">
                <Link
                  className="menu_links"
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
                  className="menu_links"
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
                  className="menu_links"
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
                  className="menu_links"
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
            </div>
          )}
          <div className="menu_dots">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}
