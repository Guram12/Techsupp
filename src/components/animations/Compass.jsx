import React, { useEffect, useState } from 'react';
import "../styles/Compas.css";
import north_black from "../../assets/north .png"
import north_white from "../../assets/north_white.png"
import logo_black from "../../assets/logo_techsupp_black.svg";
import logo_white from "../../assets/logo_techsupp_white.svg";

function Compass({ angle, rotateTo, isDarkmodeOn }) {

  const points = [
    { label: 'ვებსაიტი', angle: 0, rotate: 0 },
    { label: 'IT სერვისი', angle: 51.4, rotate: -51.4 },
    { label: 'ანალიტიკა', angle: 102.8, rotate: -102.8 },
    { label: 'რებრენდინგი', angle: 154.2 , rotate: -154.2 },
    { label: 'ანიმაცია', angle: 205.6, rotate: -205.6 },
    { label: 'QR მენიუ', angle: 257, rotate: -257 },
    { label: 'სოც. მედია', angle: 308, rotate: -308 }

  ];



  useEffect(() => {
    console.log(isDarkmodeOn, ">>>>>>>>")
  }, [isDarkmodeOn])

  return (
    <div className='compas_main_container' >

      <div className={`compass ${!isDarkmodeOn ? "compas_dark" : "compas_light"} `}  >
        {/* <div className="arrow" style={{ transform: `rotate(${angle}deg)` }}></div> */}
        <img src={isDarkmodeOn? north_black : north_white} alt="north arrow" className="arrow" style={{ transform: `rotate(${angle}deg)` }} />
        {points.map((point, index) => (
          <button
            className={`compass_button  ${!isDarkmodeOn ? "compass_button_dark" : "compass_button_light"} `}
            key={index}
            style={{
              transform: `rotate(${point.angle}deg)`
            }}
            onClick={() => rotateTo(point.angle, index + 1)}>
            <span
              className="compass_text"
              style={{
                transform: `rotate(${point.rotate}deg)`
              }}>
              {point.label}
            </span>
          </button>
        ))}
      </div>


    </div>
  );
};

export default Compass;
