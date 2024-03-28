import "../styles/MainPage.css"
import "../styles/card.scss"
import { useState } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";
// import LineAnimation from "../animations/LineAnimation"




export default function mainPage({ showSplashScreen }) {

  return (
    <div className="mainpage_cont" >
      <CubeAnimation/>
      <CardAnimation  />
      {/* <LineAnimation/> */}
    </div>
  );
}

