import "../styles/MainPage.css"
import "../styles/card.css"
import { useState } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";
import MainPage_Footer from "../Header/MainPage_Footer";



export default function mainPage({ showSplashScreen }) {

  return (
    <div className="mainpage_cont" >
      <div className="mainpage_child_cont">
        <CubeAnimation />
        <CardAnimation />
      </div>

      <div className="mainpage_main_footer_container" >
        <MainPage_Footer />
      </div>

    </div>
  );
}

