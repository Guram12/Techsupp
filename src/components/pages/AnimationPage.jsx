
import React from "react"
import { useState, useEffect } from "react"
import VideoAnimation from "../animations/VideoAnimation"
import "../styles/AnimationPage.css"
import Parallax from "../animations/Paralax"
import Motion_animation from "../animations/Motion_animation"
import test_motion_video from "../../assets/Motion_media_files/test_motion_video.webm"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from "../Header/Footer"
import motion_background from "../../assets/Motion_media_files/motion_background.webm"
import transition from "../Header/Transition"

 function AnimationPage({ isDarkmodeOn }) {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animate = { x: 0 };

  const transition = {
    type: "spring",
    stiffness: 70,
    delay: 0.5,
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });

  const controls = useAnimation();
  const controls_1 = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start(animate, transition);
    } else {
      controls.start({ x: "100vw" });
    }
  }, [controls, inView]);

  React.useEffect(() => {
    if (inView1) {
      controls_1.start(animate, transition);
    }

  }, [controls_1, inView1])


  useEffect(()=> {
    console.log("darkmode props from animation page " , isDarkmodeOn)
  },[isDarkmodeOn])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="parent_div">
      <div className="motion_video_container_up">
        {/* video content should go here */}
        <Motion_animation isDarkmodeOn={isDarkmodeOn} />
      </div>
      <section className="motion_paralax_cont" >
        <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>
          motion designe
        </Parallax>
        <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>
          motion designe
        </Parallax>
      </section>

      <div className="motion_background_video_container" ref={ref}>
        {/* video conteineri  */}
        <motion.div
          className="motion_text_container"
          animate={controls}
          initial={{ x: "100vw" }}
          transition={{ type: "spring", stiffness: 70, delay: 1 }}
        >
          <div className="motion_child_blur_container">
            <p className="motion_paragraph">
              აქ დავწერთ თუ რას ვთავაზობთ მომხმარებელს მოტიონ დიზაინის სერვისში
              , და ქვემოთ დავწერთ დაახლოებიტ ფასებს{" "}
            </p>
          </div>
        </motion.div>

        <div className="motion_video_container">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source src={motion_background} type="video/webm" />
          </video>
        </div>
      </div>
      {!isMobileView && (
        <div className="motion_example_container" ref={ref1}>
          <motion.div
            className={`motion_example_child_container  ${
              !isDarkmodeOn
                ? "motion_example_child_container_dark"
                : "motion_example_child_container_light"
            }`}
            animate={controls_1}
            initial={{ x: "100vw" }}
            transition={{ type: "spring", stiffness: 70, delay: 0.5 }}
          >
            <p className="motion_example_text">ჩვენი დამზადებული ანიმაციები</p>
          </motion.div>
        </div>
      )}

      <div className="video_animation_container">
        <VideoAnimation />
      </div>

      <div className="animation_footer_container">
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
}


export default transition(AnimationPage)

