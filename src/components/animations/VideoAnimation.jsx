import React, { useState } from 'react';
import '../styles/VideoAnimation.scss';
import splashvideo from '../../assets/splashvideo.webm';
import night_basement from "../../assets/night_basement.webm";

export default function VideoAnimation() {
  // Separate state for each video
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    // if (!isChecked1) setIsChecked2(false); 
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    // if (!isChecked2) setIsChecked1(false); 
  };

  return (
    <div>
      {!isChecked2 && (
        <div className="wrapper">
          <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />
          <div className="video">
            <video src={night_basement} loop muted autoPlay playsInline></video>
          </div>
          <div className="text">
            <span data-text="Night basement"></span>
          </div>
        </div>
      )}
      {!isChecked1 && (
        <div className="wrapper1">
          <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />
          <div className="video">
            <video src={splashvideo} loop muted autoPlay playsInline></video>
          </div>
          <div className="text">
            <span data-text="Techsupp animation"></span>
          </div>
        </div>
      )}
    </div>
  );
};
