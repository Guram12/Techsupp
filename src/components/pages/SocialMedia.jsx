import "../styles/SocialMedia.css";
import transition from "../Header/Transition";
import MediaAnimation from "../animations/MediaAnimation";
import Parallax from "../animations/Paralax";
import React, { useRef, useEffect } from 'react';
import ContinuousSlider from "../animations/TestSlider";
import { motion } from 'framer-motion'; // Import Framer Motion





function SocialMedia({ handle_context_change, isDarkmodeOn }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="media_animation_and_text_cont">
        <div className="media_animation_container">
          <MediaAnimation />
        </div>
        <div>
            <motion.div
              className="media_text_child_container"
              initial={{ x: '100vw' }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 70 }}
            >
              <p>LLorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's stand
                ard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specim
                f Letraset sheets containing Lorem Ipsum passages, and more rec
                ently with desktop publishing software like Aldus PageMaker inc
                luding versions of Lorem Ipsum.</p>
            </motion.div>
          </div>

      </div>
      <div className="menu_paralax_container">
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>social media</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>social media</Parallax>
        </section>
      </div>

      <div className="example_post_images_container">
        <ContinuousSlider />

      </div>
    </div>
  );
}

export default transition(SocialMedia);
