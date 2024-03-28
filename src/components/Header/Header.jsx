import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import logo_black from "../../assets/logo_techsupp_black.svg"
import logo_white from "../../assets/logo_techsupp_white.svg"
import { Link } from "react-router-dom";



export default function Header({ isSoundOff, toggleSound }) {


  return (
    <header>
      <div className="logo_and_name" >
        <Link to="/" >
          <img src={logo_black} alt="company logo" style={{ width: "100px" }} />
        </Link>
        <h1>TechSupp</h1>
      </div>

      <div className="header_right">

        <div className="sound_container" onClick={toggleSound}  >
          {/* loader container */}
          <div className={`typing-indicator ${isSoundOff ? "" : "stop-animation"}`}>
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
            <span className="menu_texts_menu">MENU</span>
            <span className="menu_texts_close">CLOSE</span>
          </div>
          <div className="menu_dots">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

