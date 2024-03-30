import React, { useState } from "react";
import "../styles/Header.css";
import logo_black from "../../assets/logo_techsupp_black.svg";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/right.png";

export default function Header({ isSoundOff, toggleSound }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          {/* loader container */}
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
              <div>
                <Link className="menu_links" to="/link1">
                  სერვისები
                  <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link>
                {/* <Link className="sec_menu_links" to="/link1">
                  სერვისები                   <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link> */}
              </div>
              <div>
                <Link className="menu_links" to="/link2">
                  ჩვენს შესახებ{" "}
                  <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link>
                {/* <Link className="sec_menu_links" to="/link2">
                  ჩვენს შესახებ                   <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link> */}
              </div>

              <div>
                <Link className="menu_links" to="/link3">
                  წევრები
                  <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link>
                {/* <Link className="sec_menu_links" to="/link3">
                  წევრები                   <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link> */}
              </div>
              <div>
                <Link className="menu_links" to="/link3">
                  კონტაქტები{" "}
                  <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link>
                {/* <Link className="sec_menu_links" to="/link3">
                  კონტაქტები                   <span>
                    <img src={RightArrow} alt="" />
                  </span>
                </Link> */}
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
