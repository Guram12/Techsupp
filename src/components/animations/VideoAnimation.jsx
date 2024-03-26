import React, { useState } from 'react';
import '../styles/VideoAnimation.scss'; 
import splashvideo from '../../assets/splashvideo.webm'
import night_basement from "../../assets/night_basement.webm"

export default function VideoAnimation(){
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    
    <div className="wrapper">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <div className="video">
        <video src={night_basement} loop muted autoPlay playsInline></video>
      </div>
      <div className="text">
        <span data-text="Watch the video"></span>
      </div>
    </div>
  );
};
