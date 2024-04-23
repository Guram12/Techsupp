import "../styles/AnalitycPage.css"
import React from 'react';
import { useEffect, useState } from "react";
import Paralax from "../animations/Paralax"
import Google_sheet_animation from "../animations/Google_sheet_animation"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from "../Header/Footer";
import transition from "../Header/Transition";
import { useNavigate } from "react-router-dom";


function AnaliticPage({ isDarkmodeOn, handle_context_change, tweenRef }) {

  const initial = { x: '-100vw' };
  const animate = { x: 0 };



  // Framer Motion controls for animation
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();
  const controlsFourth = useAnimation();

  // Setting up Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value based on when you want the animation to start
  });

  useEffect(() => {
    if (inView) {
      controlsFirst.start(animate);
      controlsSecond.start({ ...animate, transition: { delay: 0.2 } }); // Adding delay
      controlsThird.start({ ...animate, transition: { delay: 0.4 } }); // Adding more delay
      controlsFourth.start({ ...animate, transition: { delay: 0.8 } }); // Adding more delay

    }
  }, [inView, controlsFirst, controlsSecond, controlsThird, controlsFourth]);



  const navigate = useNavigate(); // This hook is used to navigate programmatically

  const handleButtonClick = (message) => {
    handle_context_change(message);
    navigate('/contact');
  };



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="sheet_animation_cont" >
        <Google_sheet_animation isDarkmodeOn={isDarkmodeOn} tweenRef={tweenRef} />
      </div>
      <div>
      </div>
      <div className="sheet_paralax" >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5} tweenRef={tweenRef} >google sheet analitycs</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5} tweenRef={tweenRef} >google sheet analitycs</Paralax>
        </section>
      </div>
      <div className="analitycs_card_container" ref={ref} >
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsFirst}

        >
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >მარტივი ანალიტიკური ფაილები.</p>
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >150 ლარიდან</p>
        </motion.div>
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsSecond}
        >
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >აღწერის ფაილების ,მარტივი პოს-ტერმინალის აწყობა</p>
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >350 ლარიდან</p>
        </motion.div>
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsThird}
        >
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >თქვენთვის სასურველი კონტროლის მექანიზმების შექმნა</p>
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >ფასი მოთხოვნებიდან გამომდინარე</p>
        </motion.div>
      </div>
      <div className="analityc_contact_button" >
        <button
          onMouseEnter={() => tweenRef.current.play()}
          onMouseLeave={() => tweenRef.current.reverse()}
          onClick={() => handleButtonClick('ანალიტიკა')}
          className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}>
          დაგვიკავშირდით
        </button>
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>

    </div>
  )
}


export default transition(AnaliticPage);





// 1) 150 laridam
// agweris failebis,  martivi pos terminalis awyoba, 350 laridan

//  fasi , motxovnebidan gamomdinare gamomdinare

