import "../styles/AnalitycPage.css"
import React from 'react';
import { useEffect, useState } from "react";
import Paralax from "../animations/Paralax"
import Google_sheet_animation from "../animations/Google_sheet_animation"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from "../Header/Footer";
import transition from "../Header/Transition";

function AnaliticPage({ isDarkmodeOn }) {

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



  return (
    <div>
      <div className="sheet_animation_cont" >
        <Google_sheet_animation isDarkmodeOn={isDarkmodeOn} />
      </div>
      <div>
        </div>
      <div className="sheet_paralax" >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>google sheet analitycs</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>google sheet analitycs</Paralax>
        </section>
      </div>
      <div className="analitycs_card_container" ref={ref} >
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsFirst}
        >
          <p>მარტივი ანალიტიკური ფაილები</p>
        </motion.div>
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsSecond}
        >
          <p>აღწერის ფაილების , პოს ტერმინალის აწყობა</p>
        </motion.div>
        <motion.div className="analityc_card_down"
          initial={initial}
          animate={controlsThird}
        >
          <p>თქვენთვის სასურველი კონტროლის მექანიზმების შექმნა</p>
        </motion.div>
        <motion.div className="analityc_price_down"
          initial={initial}
          animate={controlsFourth}
        >
          <p>700 ლარიდან / თვეში</p>
        </motion.div>
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>

    </div>
  )
}


export default transition(AnaliticPage);