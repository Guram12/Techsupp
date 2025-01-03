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
import { useNavigate } from "react-router-dom";


function BrandingPage({ isDarkmodeOn, handle_context_change, tweenRef }) {
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
  const transition_price = {
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

  // ==============================================   logic for animating text in each card ==================================

  // ===================================>>>>>>   animate logo toext  and price
  const initialText = { x: '100vw', opacity: 0 };
  const animateText = { x: 0, opacity: 1 };
  const transitionText = {
    type: 'spring',
    stiffness: 40,
    delay: 0.1
  };

  const transition_logo_price = {
    type: 'spring',
    stiffness: 60,
    delay: 0.9
  };

  const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controlsText = useAnimation();

  useEffect(() => {
    if (inViewText) {
      controlsText.start(animateText, transitionText);
      controlsText.start(animateText, transition_logo_price);

    }
  }, [inViewText, controlsText]);

  // ===================================>>>>>>   animate logo toext 

  const initia_branding_lText = { x: '-100vw', opacity: 0 };
  const animate_brandingText = { x: 0, opacity: 1 };
  const transition_branding_Text = {
    type: 'spring',
    stiffness: 40,
    delay: 0.1
  };

  const transition_branding_price = {
    type: 'spring',
    stiffness: 60,
    delay: 0.9
  };


  const [ref_branding_Text, inView_branding_Text] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls_branding_Text = useAnimation();


  useEffect(() => {
    if (inView_branding_Text) {
      controls_branding_Text.start(animate_brandingText, transition_branding_Text);

    }
  }, [inView_branding_Text, controls_branding_Text]);

  // ===================================>>>>>>   animate ui/ux  text 

  const initia_ui_lText = { x: '100vw', opacity: 0 };
  const animate_ui_Text = { x: 0, opacity: 1 };
  const transition_ui_Text = {
    type: 'spring',
    stiffness: 40,
    delay: 0.1
  };

  const transition_ui_price = {
    type: 'spring',
    stiffness: 60,
    delay: 0.9
  };


  const [ref_ui_Text, inView_ui_Text] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls_ui_Text = useAnimation();


  useEffect(() => {
    if (inView_ui_Text) {
      controls_ui_Text.start(animate_ui_Text, transition_ui_Text);

    }
  }, [inView_ui_Text, controls_ui_Text]);



  // =========================================================================================================================


  const navigate = useNavigate(); // This hook is used to navigate programmatically

  const handleButtonClick = (message) => {
    handle_context_change(message);
    navigate('/contact');
    console.log("brending clicked ")
  };




  return (
    <div>
      {/* <SplineAnimation/> */}
      {/* <Spline_logo/> */}
      <div className="branding_animation_container">
        <div className="each_animation"
          onMouseEnter={() => tweenRef.current.play()}
          onMouseLeave={() => tweenRef.current.reverse()}
        >
          {animations[currentAnimationIndex]}
        </div>
        <div className={`${!isDarkmodeOn ? "brending_about_up_dark" : "brending_about_up"}`} >
          <h1
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
            className={`${!isDarkmodeOn ? "branding_h1_color_dark" : "branding_h1_color_white"}`} >ბრენდინგი/რებრენდინგი</h1>
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >ბიზნესის იმიჯის შესაქმნელად აუცილებელია გქონდეთ საკუთარი ლოგო და დიზაინი.
            ამ ყველაფერში კი ჩვენი გამოცდილი გუნდის წევრები დაგეხმარებიან. ისინი შექმნიან
            თქვენზე მორგებულ დიზაინს და მოარგებენ თქვენს საიტსა თუ სოციალურ მედიას.</p>
        </div>

      </div>
      <div>
        <section className="branding_paralax_container" >
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5} tweenRef={tweenRef} >Analitycs Analitycs</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5} tweenRef={tweenRef} >Google sheet </Parallax>
        </section>
      </div>
      <div className="all_brending_cards_container" >
        {/* pirveli konteineri  */}
        <div className="rebrending_down_card_container" ref={ref1} >
          <div className="rebranding_down_card" ></div>
          <motion.img src={branding_logo} alt="brending icon" className="rebranding_image_1"
            initial={initial}
            animate={controlsFirst} />
          <div className={`rebranding_card_text ${!isDarkmodeOn ? "branding_cards_dark" : "branding_cards_white"} `} ref={refText} >
            <motion.p className="rebranding_card_text_p"
              initial={initialText}
              animate={controlsText}
              transition={transitionText}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              ბიზნესისთვის ლოგოს შექმნა
            </motion.p>
            <motion.p
              initial={initialText}
              animate={controlsText}
              transition={transition_logo_price}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              150 ლარიდან
            </motion.p>
          </div>
        </div>
        {/* meore konteineri  */}
        <div className="rebrending_down_card_container_1" ref={ref2}>
          <div className={`rebranding_card_text2 ${!isDarkmodeOn ? "branding_cards_dark" : "branding_cards_white"}`} ref={ref_branding_Text} >
            <motion.p
              initial={initia_branding_lText}
              animate={controls_branding_Text}
              transition={transition_branding_Text}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="rebranding_card_text_p2" >სავიზიტო ბარათების დიზაინი / ბრენდინგი / რებრენდინგი
            </motion.p>
            <motion.p
              initial={initia_branding_lText}
              animate={controls_branding_Text}
              transition={transition_branding_price}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              400 ლარიდან
            </motion.p>
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
          <div className={`rebranding_card_text_3 ${!isDarkmodeOn ? "branding_cards_dark" : "branding_cards_white"}`} ref={ref_ui_Text} >
            <motion.p
              initial={initia_ui_lText}
              animate={controls_ui_Text}
              transition={transition_ui_Text}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="rebranding_card_text_p_3" >UI/UX დიზაინის შექმნა თქვენი ბიზნესისთვის
            </motion.p>
            <motion.p
              initial={initia_ui_lText}
              animate={controls_ui_Text}
              transition={transition_ui_price}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              800 ლარიდან
            </motion.p>
          </div>
        </div>
      </div>
      <div className="rebranding_price_container" ref={ref4}>
        <div
          className="rebranding_price_child_cont"
        >
          <button
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
            className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}
            onClick={() => handleButtonClick('ბრენდინგი / რებრენდინგი')}  >დაგვიკავშირდით</button>
        </div>
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
}


export default transition(BrandingPage)

