import React, { useState, useRef } from 'react';
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
  const galleryRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleGalleryClick = (event) => {
    const { clientX } = event;
    const { innerWidth } = window;

    if (clientX < innerWidth / 2) {
      goToPreviousSlide();
    } else {
      goToNextSlide();
    }
  };

  const goToNextSlide = () => {
    let nextSlideIndex = (currentSlide + 1) % images.length;
    galleryRef.current.slideToIndex(nextSlideIndex);
    setCurrentSlide(nextSlideIndex);
  };

  const goToPreviousSlide = () => {
    let prevSlideIndex = (currentSlide - 1 + images.length) % images.length;
    galleryRef.current.slideToIndex(prevSlideIndex);
    setCurrentSlide(prevSlideIndex);
  };

  return (
    <div  onClick={handleGalleryClick} >
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
          ref={galleryRef}
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          infinite={true}
        />
      </div>
      <div className='header_container'>
        <TerminalTextAnimation />
      </div>
    </div>
  );
}
