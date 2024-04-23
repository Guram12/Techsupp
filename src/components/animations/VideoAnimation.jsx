import React, { useState, useEffect } from 'react';
import '../styles/VideoAnimation.css';
import splashvideo from '../../assets/Motion_media_files/splashvideo.webm';
import night_basement from "../../assets/Motion_media_files/night_basement.webm";
import techsupp_name_video from "../../assets/Motion_media_files/techsupp_name_video.mp4"
import bottle_animated_video from "../../assets/Motion_media_files/bottle_animated_video.mp4"

export default function VideoAnimation({ isDarkmodeOn, tweenRef }) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);


  const [add_z_index, setAdd_z_index] = useState(true);


  const handle_wrapper_click = () => {
    setAdd_z_index(!add_z_index)
    console.log("z indec ", add_z_index)

  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("sigane", isMobileView)

  }, [isMobileView])


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


  useEffect(() => {
    console.log("from videoanimation ---", isDarkmodeOn)
  }, [isDarkmodeOn])

  return (
    <div className='main_animation_page_container' onClick={(e) => e.stopPropagation()}   >
      {!isMobileView ?
        <div >
          {/* 1 video animation  */}
          {!isChecked2 && !isChecked3 && !isChecked4 && (
            <div
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="wrapper" style={{ zIndex: `${add_z_index ? "9999999999999" : "3"}` }}    >
              <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange(setIsChecked1)} />
              <div className="video">
                <video src={night_basement} loop muted autoPlay playsInline></video>
              </div>
              <div className="text" style={{ color: "red" }} >
                <span onClick={handle_wrapper_click} className={isDarkmodeOn ? "spannnn" : "spannnn_dark"} data-text="Night basement"></span>
              </div>
            </div>
          )}

          {/* 2 video animation  */}
          {!isChecked1 && !isChecked3 && !isChecked4 && (
            <div
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="wrapper" style={{ zIndex: `${add_z_index ? "99999999" : "3"}` }}    >
              <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange(setIsChecked2)} />
              <div className="video">
                <video src={splashvideo} loop muted autoPlay playsInline></video>
              </div>
              <div className="text">
                <span onClick={handle_wrapper_click} className={isDarkmodeOn ? "spannnn" : "spannnn_dark"} data-text="Techsupp animation"></span>
              </div>
            </div>
          )}

          {/* 3 video animation  */}
          {!isChecked2 && !isChecked1 && !isChecked4 && (
            <div
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="wrapper" style={{ zIndex: `${add_z_index ? "99999999" : "3"}` }}    >
              <input type="checkbox" checked={isChecked3} onChange={handleCheckboxChange(setIsChecked3)} />
              <div className="video">
                <video src={techsupp_name_video} loop muted autoPlay playsInline></video>
              </div>
              <div className="text">
                <span onClick={handle_wrapper_click} className={isDarkmodeOn ? "spannnn" : "spannnn_dark"} data-text="Techsupp animation"></span>
              </div>
            </div>
          )}

          {/* 4 video animation  */}
          {!isChecked2 && !isChecked1 && !isChecked3 && (
            <div
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="wrapper" style={{ zIndex: `${add_z_index ? "99999999" : "3"}` }}    >
              <input type="checkbox" checked={isChecked4} onChange={handleCheckboxChange(setIsChecked4)} />
              <div className="video">
                <video src={bottle_animated_video} loop muted autoPlay ></video>
              </div>
              <div className="text">
                <span onClick={handle_wrapper_click} className={isDarkmodeOn ? "spannnn" : "spannnn_dark"} data-text="Techsupp animation"></span>
              </div>
            </div>
          )}
        </div>
        :
        // aqedan iwyeba mobailis video conteinerebi  
        <div className='simple_animation_page_container'>

          {/* 1 video containeri  */}
          <div className="mobile_video_container">
            <h2>NIGHT BASEMENT</h2>
            <video className='mobile_video_tags' src={night_basement} loop muted autoPlay playsInline controls></video>
          </div>

          {/* 2 video containeri  */}
          <div className="mobile_video_container">
            <h2>TECHSUPP SPLASH ART</h2>
            <video className='mobile_video_tags' src={splashvideo} loop muted autoPlay playsInline controls></video>
          </div>

          {/* 3 video containeri  */}
          <div className="mobile_video_container">
            <h2>TECHSUPP</h2>
            <video className='mobile_video_tags' src={techsupp_name_video} loop muted autoPlay playsInline controls></video>
          </div>

          {/* 4 video containeri  */}
          <div className="mobile_video_container">
            <h2>APPLE JUICE</h2>
            <video className='mobile_video_tags' src={bottle_animated_video} loop muted autoPlay playsInline controls></video>
          </div>

        </div>
      }
    </div>
  );
};
