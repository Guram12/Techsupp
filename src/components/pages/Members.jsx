import React, { useRef, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import '../styles/Members.css';
import 'react-image-gallery/styles/css/image-gallery.css'; 
import guram_profile from "../../assets/guram_1.png"
import guram_1 from "../../assets/guram_1 copy.png"
import guram_2 from "../../assets/guram_1 copy2.png"
import guram_3 from "../../assets/guram_1 copy3.png"
import guram_4 from "../../assets/guram_1 copy4.png"
import guram_5 from "../../assets/guram_1 copy5.png"
import guram_6 from "../../assets/guram_1 copy6.png"
import matrix_background from '../../assets/matrix.webm'
import sheet from "../../assets/sheet_image.png"
import TerminalTextAnimation from '../animations/TerminalTextAnimation';



const images = [
  guram_1, sheet, guram_2, guram_3, guram_4, guram_5, guram_6
];

export default function Members() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // 'left' or 'right'
  const [prevIndex, setPrevIndex] = useState(null); // Initialize to null or appropriate value


  const navigate = (direction) => {
    setDirection(direction === -1 ? 'left' : 'right');
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) {
        return images.length - 1; // Loop back to the last image
      } else if (newIndex >= images.length) {
        return 0; // Loop back to the first image
      }
      return newIndex;
    });
    setPrevIndex(currentIndex); // Set the previous index to the current one before updating
  };


  const handleGalleryClick = (e) => {
    console.log("clicked")
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    const navigateDirection = clickX < screenWidth / 2 ? -1 : 1; // -1 for left, 1 for right
    navigate(navigateDirection);
  };



  return (
    <div onClick={handleGalleryClick} >
      <div className="video-background">
        <video
          src={matrix_background}
          autoPlay
          loop
          muted
          playsInline
          className="fullscreen-video"
        ></video>
      </div>
      <div>
        <Link to="/">
          <button className="ui-btn">
            <span>უკან</span>
          </button>
        </Link>
      </div>
      <div className='slider_container'  >
        <img alt="Gallery"
          key={`${images[currentIndex]}-${direction}`}
          src={images[currentIndex]}
          className={`personal_image ${direction === 'left' ? 'slide-in-left' : 'slide-in-right'}`}
        />
      </div>
      <div className='header_container' >
        {/* <div className='for_center_name' >
        <p className="line-1 anim-typewriter">გურამ შანიდზე</p>
        </div> */}
        <TerminalTextAnimation/>
      </div>
    </div>
  );
}
