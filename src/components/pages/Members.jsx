import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "../styles/Members.css";
import "react-image-gallery/styles/css/image-gallery.css";
import guram_1 from "../../assets/guram_1 copy.png";
import guram_2 from "../../assets/guram_1 copy2.png";
import guram_3 from "../../assets/guram_1 copy3.png";
import guram_4 from "../../assets/guram_1 copy4.png";
import guram_5 from "../../assets/guram_1 copy5.png";
import guram_6 from "../../assets/guram_1 copy6.png";
import matrix_background from "../../assets/Motion_media_files/matrix.webm";
import sheet from "../../assets/sheet_image.png";
import TerminalTextAnimation from "../animations/TerminalTextAnimation";
import { CursorContext } from "../CursorContext/CursorContext";
import { motion } from "framer-motion";

const images = [
  { original: guram_1 },
  { original: sheet },
  { original: guram_2 },
  { original: guram_3 },
  { original: guram_4 },
  { original: guram_5 },
  { original: guram_6 },
];

const Members = () => {
  const galleryRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const { mouseEnterHandler, mouseLeaveHandler, setIsMemberPage } =
    useContext(CursorContext);

  useEffect(() => {
    setIsMemberPage(true); // Set isMemberPage to true when component mounts
    return () => {
      setIsMemberPage(false); // Set isMemberPage to false when component unmounts
    };
  }, []);

  const handleMouseMove = (event) => {
    setCursorX(event.clientX);
  };

  const handleGalleryClick = () => {
    const { innerWidth } = window;
    if (cursorX < innerWidth / 2) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={handleMouseMove}
      onClick={handleGalleryClick}
    >
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
      <div className="slider_container">
        <ImageGallery
          ref={galleryRef}
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          infinite={true}
        />
      </div>
      <div className="header_container">
        <TerminalTextAnimation />
      </div>
    </motion.div>
  );
};

export default Members;
