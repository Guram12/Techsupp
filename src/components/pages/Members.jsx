import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "../styles/Members.css";
import "react-image-gallery/styles/css/image-gallery.css";
import person_guram from "../../assets/member_images/black_guram.png"
import person_guram_1 from "../../assets/member_images/black_guram_1.png"
import person_guram_2 from "../../assets/member_images/black_guram_2.png"

import matrix_background from "../../assets/Motion_media_files/compreset_matric.webm";

import TerminalTextAnimation from "../animations/TerminalTextAnimation";
import { CursorContext } from "../CursorContext/CursorContext";
import { motion } from "framer-motion";

const images = [
  { original: person_guram },
  { original: person_guram_1 },
  { original: person_guram_2 },

];

// es desqribsheni aucileblad unda emtxvevodes tanmimdevrobashi image cvladshi chasmul adamianebis agweras 
const person_description = [
  {description: "<span>გურამ შანიძე<br/>Full-stack web developer</span><br/>" },
  {description: "<span>ფისო, რომეო <br/>მეგრელი</span><br/>" },
  {description: "<span>ნინო რობაქიძე<br/>მონა</span><br/>" }

]

export default function  Members(){
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <TerminalTextAnimation  text={person_description[currentSlide].description}    />
      </div>
    </motion.div>
  );
};


