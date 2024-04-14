import "../styles/MainPage.css";
import "../styles/card.css";
import { useState, useEffect } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";
import MainPage_Footer from "../Header/MainPage_Footer";
import Compass from "../animations/Compass";
import "../styles/Compas.css";

export default function mainPage({ showSplashScreen }) {
  const [angle, setAngle] = useState(0);
  const [activeTab, setActiveTab] = useState(1); // This state tracks the active tab

  const rotateTo = (angle, tabId) => {
    setAngle(angle);
    setActiveTab(tabId); // Also set the active tab
  };

  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab state
  };

  return (
    <div className="mainpage_cont">
      <div className="mainpage_child_cont">
        <div className="pirveli">
          <Compass angle={angle} rotateTo={rotateTo} />
        </div>
        <div className="meore">
          <CardAnimation activeTab={activeTab} handleTabClick={setActiveTab} />
        </div>
      </div>
      <div className="mainpage_main_footer_container">
        <MainPage_Footer />
      </div>
    </div>
  );
}
