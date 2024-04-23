import "../styles/MainPage.css";
import "../styles/card.css";
import "../styles/Compas.css";
import { useState, useEffect, useRef } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";
import MainPage_Footer from "../Header/MainPage_Footer";
import Compass from "../animations/Compass";
import transition from "../Header/Transition";
import { motion } from "framer-motion";




function mainPage({ showSplashScreen, isDarkmodeOn, tweenRef }) {
  const [angle, setAngle] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [key_1, setKey_1] = useState(false);
  const [key_2, setKey_2] = useState(true);
  const [key_3, setKey_3] = useState(1);


  useEffect(() => {
    setKey_1(!key_1)
    setKey_2(!key_2)
    setKey_3(key_3 + 1)
  }, [isDarkmodeOn])

  // const [arrow_angle, setArrow_angle] = useState(0);

  const rotateTo = (angle, tabId) => {
    setAngle(angle);
    setActiveTab(tabId);
  };

  // const handleTabClick = (id) => {
  //   setActiveTab(id);
  // };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // initial={{ x: '100vw' }}
  // animate={{ x: 0, opacity: 1 }}
  // transition={{ type: 'spring', stiffness: 70 }}

  return (
    <div className="mainpage_cont">
      <div className="mainpage_child_cont">
        <div className="slogan_container">
          <div className="sogan_child_container">
            <motion.div
              initial={{ y: '-100vw' }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 40 }}
              key={key_1}
            >
              <p
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                className={`slogan  ${!isDarkmodeOn ? "slogan_dark" : "slogan_light"} `} > თქვენი კომპასი ციფრულ ლაბირინთში</p>

            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          key={key_2}
        >
          <Compass
            angle={angle}
            rotateTo={rotateTo}
            isDarkmodeOn={isDarkmodeOn}
            tweenRef={tweenRef}
          />
        </motion.div>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          key={key_3}
        >
          <CardAnimation
            activeTab={activeTab}
            handleTabClick={setActiveTab}
            isDarkmodeOn={isDarkmodeOn}
            tweenRef={tweenRef}
          />

        </motion.div>

      </div>
      <div className="mainpage_main_footer_container">
        <MainPage_Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
}

export default transition(mainPage);
