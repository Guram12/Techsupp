import React, { useState } from 'react';
import "../styles/Compas.css";
import north_black from "../../assets/north .png"

import logo_black from "../../assets/logo_techsupp_black.svg";
import logo_white from "../../assets/logo_techsupp_white.svg";

const Compass = () => {
  const [angle, setAngle] = useState(0);

  const points = [
    { label: 'ვებსაიტი', angle: 0, rotate: 0 },
    { label: 'IT', angle: 60, rotate: -60 },
    { label: 'ანალიტიკა', angle: 120, rotate: -120 },
    { label: 'რებრენდინგი', angle: 180, rotate: -180 },
    { label: 'ანიმაცია', angle: 240, rotate: -240 },
    { label: 'QR', angle: 300, rotate: -300 }
  ];

  const rotateTo = (angle) => {
    setAngle(angle);
  };

  return (
    <div className='compas_main_container' >

      <div className="compass">
        {/* <div className="arrow" style={{ transform: `rotate(${angle}deg)` }}></div> */}
        <img src={north_black} alt="north arrow" className="arrow" style={{ transform: `rotate(${angle}deg)` }} />
        {points.map((point, index) => (
          <button
            className="compass_button"
            key={index}
            style={{
              transform: `rotate(${point.angle}deg)`
            }}
            onClick={() => rotateTo(point.angle)}>
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
