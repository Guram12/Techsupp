import React, { useState, useEffect } from 'react';
import '../styles/VideoAnimation.css';
import splashvideo from '../../assets/Motion_media_files/splashvideo.webm';
import night_basement from "../../assets/Motion_media_files/night_basement.webm";
import techsupp_name_video from "../../assets/Motion_media_files/techsupp_name_video.mp4"
import bottle_animated_video from "../../assets/Motion_media_files/bottle_animated_video.mp4"

export default function VideoAnimation() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);


  // const handleCheckboxChange1 = (event) => {
  //   event.stopPropagation(); 
  //   setIsChecked1(!isChecked1);
  // };

  // const handleCheckboxChange2 = (event) => {
  //   event.stopPropagation();
  //   setIsChecked2(!isChecked2);
  // };

  // const handleCheckboxChange3 = (event) => {
  //   event.stopPropagation(); 
  //   setIsChecked3(!isChecked3);
  // };


  useEffect(() => {
    // Set up a global click listener
    const closeVideos = () => {
      setIsChecked1(false);
      setIsChecked2(false);
      setIsChecked3(false);
      setIsChecked4(false)
      document.querySelector('body').style.overflow = 'auto'; // Enable scroll when closing videos
    };
    const maindiv = document.querySelector(".main_animation_page_container");
    maindiv.addEventListener('click', closeVideos);

    return () => {
      maindiv.removeEventListener('click', closeVideos);
    };
  }, []);

  const handleCheckboxChange = (checkedSetter) => (event) => {
    event.stopPropagation(); // Prevent click from propagating
    const newValue = event.target.checked; // Use the checked value directly
    console.log(newValue);
    checkedSetter(newValue); // Update the state with the new value
    // After state update, check if any checkbox is checked to determine scroll behavior
    toggleScroll();
  };


  // Function to toggle the website scroll
  const toggleScroll = () => {
    const body = document.querySelector('body');
    if (body.style.overflow !== 'hidden') {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  };

  return (
    <div className='main_animation_page_container' onClick={(e) => e.stopPropagation()}   >
      {/* 1 video animation  */}
      {!isChecked2 && !isChecked3 && !isChecked4 && (
        <div className="wrapper">
          <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange(setIsChecked1)} />
          <div className="video">
            <video src={night_basement} loop muted autoPlay playsInline></video>
          </div>
          <div className="text">
            <span data-text="Night basement"></span>
          </div>
        </div>
      )}
      {/* 2 video animation  */}
      {!isChecked1 && !isChecked3 && !isChecked4 && (
        <div className="wrapper">
          <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange(setIsChecked2)} />
          <div className="video">
            <video src={splashvideo} loop muted autoPlay playsInline></video>
          </div>
          <div className="text">
            <span data-text="Techsupp animation"></span>
          </div>
        </div>
      )}
      {/* 3 video animation  */}
      {!isChecked2 && !isChecked1 && !isChecked4 && (
        <div className="wrapper">
          <input type="checkbox" checked={isChecked3} onChange={handleCheckboxChange(setIsChecked3)} />
          <div className="video">
            <video src={techsupp_name_video} loop muted autoPlay playsInline></video>
          </div>
          <div className="text">
            <span data-text="Techsupp animation"></span>
          </div>
        </div>
      )}
      {/* 4 video animation  */}
      {!isChecked2 && !isChecked1 && !isChecked3  && (
        <div className="wrapper">
          <input type="checkbox" checked={isChecked4} onChange={handleCheckboxChange(setIsChecked4)} />
          <div className="video">
            <video src={bottle_animated_video} loop muted autoPlay ></video>
          </div>
          <div className="text">
            <span data-text="Techsupp animation"></span>
          </div>
        </div>
      )}
    </div>
  );
};
