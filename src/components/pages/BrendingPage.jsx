// import SplineAnimation from "../animations/Spline_animation"
// import Spline_logo from "../animations/Spline_logo_animation"
import "../styles/BrendingPage.css"
import React, { useState, useEffect } from 'react';
import BrandingAnimation from "../animations/branding_animations/BrendingAnimation"
import BrandingAnimation_2 from "../animations/branding_animations/BrendingAnimation_2"
import BrandingAnimation_3 from "../animations/branding_animations/BrendingAnimation_3"
import BrandingAnimation_4 from "../animations/branding_animations/BrendingAnimation_4"
import BrandingAnimation_5 from "../animations/branding_animations/BrendingAnimation_5"
import BrandingAnimation_6 from "../animations/branding_animations/BrendingAnimation_6"
import Parallax from "../animations/Paralax";
import branding_logo from "../../assets/branding_logo.png"
import visit_card from "../../assets/branding_visit_card.png"
import ui_ux_logo from "../../assets/branding_UI-UX.png"
import Footer from "../Header/Footer";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import transition from "../Header/Transition";

 function  BrandingPage({ isDarkmodeOn }) {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const animations = [<BrandingAnimation />, <BrandingAnimation_2 />, <BrandingAnimation_3 />,
  <BrandingAnimation_4 />, <BrandingAnimation_5 />, <BrandingAnimation_6 />];

  useEffect(() => {
    // Set up a timer to cycle through animations every 2 seconds
    const timer = setInterval(() => {
      setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [animations.length]);

  const initial_price = { x: '-100vw' };
  const transition_price ={
    type: 'spring',
    stiffness: 70,
    delay: 0.5
  }

  const initial = { y: 100, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

  const transition = {
    duration: 1.5, // Duration in seconds, adjust this value as needed
    ease: "easeOut", // This defines the easing function. "easeOut" is commonly used for such animations
  };


  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });

  // Separate animation controls for each image
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();
  const controlsFourth = useAnimation();

  useEffect(() => {
    if (inView1) controlsFirst.start(animate, transition);
  }, [inView1, controlsFirst]);

  useEffect(() => {
    if (inView2) controlsSecond.start(animate, transition);
  }, [inView2, controlsSecond]);

  useEffect(() => {
    if (inView3) controlsThird.start(animate, transition);
  }, [inView3, controlsThird]);

  useEffect(() => {
    if (inView4) {
      controlsFourth.start({
        x: 0, // Bring the element back to its original horizontal position
        opacity: 1, // Ensure the element is fully opaque
        transition: transition_price, // Use your defined spring transition
      });
    }
  }, [inView4, controlsFourth]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      {/* <SplineAnimation/> */}
      {/* <Spline_logo/> */}
      <div className="branding_animation_container">
        <div className="each_animation" >
          {animations[currentAnimationIndex]}
        </div>
        <div className="brending_about_up" >
          <h1>ბრენდინგი/რებრენდინგი</h1>
          <p>ბიზნესის იმიჯის შესაქმნელად აუცილებელია გქონდეთ საკუთარი ლოგო და დიზაინი.
            ამ ყველაფერში კი ჩვენი გამოცდილი გუნდის წევრები დაგეხმარებიან. ისინი შექმნიან
            თქვენზე მორგებულ დიზაინს და მოარგებენ თქვენს საიტსა თუ სოციალურ მედიას.</p>
        </div>

      </div>
      <div>
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>Analitycs Analitycs</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>Google sheet </Parallax>
        </section>
      </div>
      <div className="all_brending_cards_container" >
        {/* pirveli konteineri  */}
        <div className="rebrending_down_card_container" ref={ref1} >
          <div className="rebranding_down_card" ></div>
          <motion.img src={branding_logo} alt="brending icon" className="rebranding_image_1"
            initial={initial}
            animate={controlsFirst} />
          <div className="rebranding_card_text" >
            <p className="rebranding_card_text_p" >ბიზნესისთვის ლოგოს შექმნა</p>
          </div>
        </div>
        {/* meore konteineri  */}
        <div className="rebrending_down_card_container_1" ref={ref2}>
          <div className="rebranding_card_text2" >
            <p className="rebranding_card_text_p2" >სავიზიტო ბარათების დიზაინი / ბრენდირება / რებრენდინგი</p>
          </div>
          <motion.img src={visit_card} alt="brending icon" className="rebranding_image_2"
            initial={initial}
            animate={controlsSecond}
          />
          <div className="rebranding_down_card2" ></div>
        </div>
        {/* pirveli konteineri  */}
        <div className="rebrending_down_card_container_3" ref={ref3} >
          <div className="rebranding_down_card_3" ></div>
          <motion.img src={ui_ux_logo} alt="brending icon" className="rebranding_image_3"
            initial={initial}
            animate={controlsThird}
          />
          <div className="rebranding_card_text_3" >
            <p className="rebranding_card_text_p_3" >UI/UX დიზაინის შექმნა თქვენი ბიზნესისთვის</p>
          </div>
        </div>
      </div>
        <div className="rebranding_price_container" ref={ref4}>
          <motion.div
            initial={initial_price}
            animate={controlsFourth}
            className="rebranding_price_child_cont"
          >
            <p >99 ლარიდან</p>
          </motion.div>
        </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
}


export default transition(BrandingPage)