// import LineAnimation from "../LineAnimation";
import "../styles/MainPage.css"
import "../styles/card.scss"
import { useState } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";


export default function mainPage({ showSplashScreen }) {

  return (
    <div className="mainpage_cont" >
      <CubeAnimation/>
      <CardAnimation  />
    </div>
  );
}











// no it is not working as i want, is the implementation of js correct ? 
// I  am aiming to achieve. that  original JavaScript code is managing a stack of cards where non-active cards are positioned behind the active card and are slightly visible
