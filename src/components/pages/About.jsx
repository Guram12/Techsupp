import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Footer from "../Header/Footer";



export default function About({ isDarkmodeOn }) {
  return (
    <div className="abut_container">
      <div style={{ width: "100%", height: "600px" , backgroundColor: "black" , marginBottom: "300px"}} > </div>


      <div className="footer_containet" >
        <Footer />

      </div>
    </div>
  );
}












{/* <div className="vawe_container">
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  style={{ height: "100px", width: "100%" }}
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    ></path>
  </defs>
  <g className="parallax">
    <use
      xlinkHref="#gentle-wave"
      x="50"
      y="3"
      fill="rgba(255,255,255,0.7)"
    ></use>
    <use
      xlinkHref="#gentle-wave"
      x="50"
      y="0"
      fill="rgba(255,255,255,0.5)"
    ></use>
    <use
      xlinkHref="#gentle-wave"
      x="50"
      y="9"
      fill="rgba(255,255,255,0.3)"
    ></use>
    <use
      xlinkHref="#gentle-wave"
      x="60"
      y="6"
      fill={isDarkmodeOn ? "#black" : "#white"}
    ></use>
  </g>
</svg>
</div> */}