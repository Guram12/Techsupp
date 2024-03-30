import React, { useState , useRef } from 'react';
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

// Transform your image paths into the structure required by react-image-gallery
const images = [
  { original: guram_1 },
  { original: sheet },
  { original: guram_2 },
  { original: guram_3 },
  { original: guram_4 },
  { original: guram_5 },
  { original: guram_6 }
];

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGalleryClick = (event) => {
    const { clientX } = event;
    const { innerWidth } = window;

    if (clientX < innerWidth / 2) {
      // Go to the previous image
      console.log("clicked left")
      setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : images.length - 1);
    } else {
      console.log("clicked left")

      // Go to the next image
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }
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
      <div className='slider_container'>
        <ImageGallery
          items={images}
          startIndex={currentIndex}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          infinite={true}
          onSlide={index => setCurrentIndex(index)}
          lazyLoad={true}
        />
      </div>
      <div className='header_container'>
        <TerminalTextAnimation />
      </div>
    </div>
  );
}
