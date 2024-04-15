import "../styles/MenuPage.css"
import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Parallax from "../animations/Paralax"
import QRcodeAnimation from "../animations/QRcode_animation"
import Footer from "../Header/Footer";
import transition from "../Header/Transition";


 function MenuPage({ isDarkmodeOn }) {

  const animate = { x: 0 };

  const transition = {
    type: 'spring',
    stiffness: 70,
    delay: 0.5
  }

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start(animate, transition)
    }
  }, [inView, controls])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <QRcodeAnimation />
      <div style={{ marginTop: "150px" }} >
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Parallax>
        </section>
      </div>

      <div className="qr_info_container" ref={ref} >
        <motion.div
          className="qr_text_child_container"
          initial={{ x: '100vw' }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 70 }}
        >

          აქ იქნება ინფორმაცია ქრ კოდზე რა სერვისზე რეებს ვთავაზომთ მომხმარებლებს და ქვემოთ ალბათ ქარდებს დავსვავტ ან არა

        </motion.div>
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  )
}


export default transition(MenuPage);

