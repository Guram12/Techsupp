import React, { useState } from 'react';
import "../styles/Compas.css";

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
    <div>

      <div className="compass">
        <div className="arrow" style={{ transform: `rotate(${angle}deg)` }}></div>
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
