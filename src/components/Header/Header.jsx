import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>TechSupp</h1>
      <div className="header_right">
        <div className="voice">V</div>
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
export default Header;
