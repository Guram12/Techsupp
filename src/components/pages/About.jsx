import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Footer from "../Header/Footer";
import AboutAnimation from "../animations/About_animation";


export default function About({ isDarkmodeOn }) {
  return (
    <div className="abut_container">
      <div  >
        <AboutAnimation />
      </div>

      <div className="about_text_container" >
        <div className="about_text_child_container" >
          <h1 className="about_title" >ჩვენს შესახებ</h1>
          <p className="about_paragraph" >TechSupp-ი არის ქართული მრავალპროფილური სტარტაპი , რომელიც თქვენს ბიზნესს ახალ საფეხურზე აიყვანს,
            ჩვენი გუნდი დაგეხმარებათ, შექმნათ ახალი ვიზუალი თქვენი ბიზნესისთვის, განავითაროთ იგი, გაიმარტივოთ
            სამუშაო პროცესი და რაც მთავარია ყველანაირი წყვეტის გარეშე მიყვეთ საქმის კურსს. ჩვენი გუნდი იქნება
            თქვენი კომპასი ციფრულ ლაბირინთში.</p>
        </div>


      </div>
      <div style={{ height: "200px", marginTop: "100px" }} >

      </div>
      {/* 
      <div className="footer_containet" >
        <Footer isDarkmodeOn={isDarkmodeOn} />

      </div> */}
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