import React, { useState , useEffect } from 'react';
import '../styles/VideoAnimation.scss';
import splashvideo from '../../assets/splashvideo.webm';
import night_basement from "../../assets/night_basement.webm";

export default function VideoAnimation() {
  // Separate state for each video
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = (event) => {
    event.stopPropagation(); // Prevent click from propagating
    setIsChecked1(!isChecked1);
    // if (!isChecked1) setIsChecked2(false); 
  };

  const handleCheckboxChange2 = (event) => {
    event.stopPropagation(); // Prevent click from propagating
    setIsChecked2(!isChecked2);
    // if (!isChecked2) setIsChecked1(false); 
  };


useEffect(() => {
  // Set up a global click listener
  const closeVideos = () => {
    setIsChecked1(false);
    setIsChecked2(false);
  };
  const maindiv = document.querySelector(".main_animation_page_container")
  maindiv.addEventListener('click', closeVideos);

  // Clean up the global click listener
  return () => {
    maindiv.removeEventListener('click', closeVideos);
  };
}, []);


  return (
    <div className='main_animation_page_container'  onClick={(e) => e.stopPropagation() }   >
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
