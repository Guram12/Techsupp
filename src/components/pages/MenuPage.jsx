import "../styles/MenuPage.css"
import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Parallax from "../animations/Paralax"
import QRcodeAnimation from "../animations/QRcode_animation"
import Footer from "../Header/Footer";
import transition from "../Header/Transition";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import qr_menu_1 from "../../assets/qr_menu_1.webp"
import qr_menu_2 from "../../assets/qr_menu_2.webp"
import qr_menu_3 from "../../assets/qr_menu_3.webp"
import qr_menu_4 from "../../assets/qr_menu_4.webp"




function MenuPage({ isDarkmodeOn, handle_context_change, tweenRef }) {

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
          <QRcodeAnimation tweenRef={tweenRef} isDarkmodeOn={isDarkmodeOn} />
      <div className="manu_images_container_down" >
        <motion.img
          initial={{ x: '-100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          src={qr_menu_1} alt="qr menu image" className="qr_image" />
        <motion.img
          initial={{ x: '-100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          src={qr_menu_2} alt="qr menu image" className="qr_image" />
        <motion.img
          initial={{ x: '100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          src={qr_menu_3} alt="qr menu image" className="qr_image" />
        <motion.img
          initial={{ x: '100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          src={qr_menu_4} alt="qr menu image" className="qr_image" />

      </div>
      <div style={{ marginTop: "50px", marginBottom: "50px" }} >
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5} tweenRef={tweenRef} >website creation</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5} tweenRef={tweenRef} >youur designe</Parallax>
        </section>
      </div>

      <div className="qr_info_container" ref={ref} >
        <motion.div
          className="qr_text_child_container"
          initial={{ x: '100vw' }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 70 }}
          style={{background: `${!isDarkmodeOn?  "black" : "white"}`, color: `${isDarkmodeOn?  "black" : "white"}`}}
        >
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
          >
            შეთავაზება სარესტორნო ქსელებისთვის. შექმენით ინტერაქციული, მრავალფუნქციური და გამორჩეული QR მენიუ.
            სერვისში შედის თქვენზე მორგებული დიზაინი, სპეციალური ვიზუალის მქონე QR კოდი, ინტერაქციული ფუნქციონალის
            შექმნა, მარტივი სამართავი პანელი, კერძების თქვენი სურვილისამებრ კატეგორიებად დაყოფა და QR კოდიდან  მაგიდის შეკვეთის მიღება.
          </p>
        </motion.div>
      </div>
      <div className="menu_contact_button" >
        <button
          onMouseEnter={() => tweenRef.current.play()}
          onMouseLeave={() => tweenRef.current.reverse()}
          onClick={() => handleButtonClick(' QR მენიუს დამზადება')}
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


export default transition(MenuPage);

// 500 ლარიდან 