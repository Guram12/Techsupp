import Paralax from "../animations/Paralax"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ITPage.css"
import Footer from "../Header/Footer"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import internet_cabel from "../../assets/internet_cabel.webp"
import computer_service from "../../assets/computer-service.webp"
import computer_repair from "../../assets/laptop_repair.webp"

export default function ItPage({ isDarkmodeOn, handle_context_change }) {


  // const isMobile = window.innerWidth <= 500;  // Simple check for mobile devices
  // const initial = { x: isMobile ? '0vw' : '100vw' };

  const initial = { x: '100vw' };
  const animate = { x: 0 };

  const control_first = useAnimation()
  const control_second = useAnimation()
  const control_third = useAnimation()
  const control_price = useAnimation()


  // Setting up Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  // Lowered threshold for better mobile compatibility
  });


  useEffect(() => {
    if (inView) {
      control_first.start({ ...animate, transition: { duration: 1, delay: 0, type: 'spring', stiffness: 70, damping: 20 } });
      control_second.start({ ...animate, transition: { duration: 1, delay: 0.2, type: 'spring', stiffness: 70, damping: 20 } });
      control_third.start({ ...animate, transition: { duration: 1, delay: 0.4, type: 'spring', stiffness: 70, damping: 20 } });
      control_price.start({ ...animate, transition: { duration: 1, delay: 0.7, type: 'spring', stiffness: 70, damping: 20 } });
    }
  }, [control_first, control_second, control_third, control_price, inView]);



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

      <div className="it_container" >
        <div className="it_background_header_image" >
          <motion.div className="it_child_title_container"
            // initial={{ x: '100vw' }}
            // animate={{ x: 0, opacity: 1 }}
            initial={{ y: '100vh' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70, delay: 0.4 }}
          >
            <h1 className="it_title" >IT მომსახურება</h1>
            <p className="it_paragraph" >თქვენი ბიზნესის უწყვეტ მუშაობაში ჩვენი გამოცდილი გუნდი დაგეხმარებათ.
              დღევანდელ რეალობაში ყველა მსხვილი თუ მცირე ბიზნესი დამოკიდებულია ელექტრონულ
              მოწყობილობებზე, მათმა ხარვეზით მუშაობამ კი შეიძლება პროცესები ძალიან შეაფერხოს,
              შესაბამისად საჭიროა მათი მუდმივი კონტროლი. ჩვენი გუნდი დაგეხმარებათ სწრაფად და
              მარტივად მოაგვაროთ მსგავსი ტიპის პრობლემები.</p>
          </motion.div>
        </div>
      </div>

      <div className="it_paralax_container"  >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>IT service IT service</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>IT service IT service</Paralax>
        </section>
      </div>
      <div className="it_card_container" ref={ref} >
        {/* 1 card container  */}
        <motion.div
          className={`it_child_card_container ${isDarkmodeOn ? "it_card_dark" : "it_card_light"}`}
          initial={initial}
          animate={control_first}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}>
          <img src={computer_service} alt="it service image" className="it_image_dard" />

          <div className="it_card_text_button" >
            <p className={`it_catd_paragraph  ${isDarkmodeOn ? "it_catd_paragraph_dark" : "it_catd_paragraph_whit"}`} >
              კომპიუტერული სრული მომსახურება</p>
            <button
              onClick={() => handleButtonClick('კომპიუტერული სრული მომსახურება')}
              className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}>
              დაგვიკავშირდით
            </button>
          </div>

        </motion.div>

        {/* 2 card container  */}
        <motion.div
          className={`it_child_card_container ${isDarkmodeOn ? "it_card_dark" : "it_card_light"}`}
          initial={initial}
          animate={control_second}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}>
          <img src={internet_cabel} alt="it service image" className="it_image_dard" />

          <div className="it_card_text_button" >
            <p className={`it_catd_paragraph  ${isDarkmodeOn ? "it_catd_paragraph_dark" : "it_catd_paragraph_whit"}`} >
              ინტრნეტ კაბელების გაყვანა და ნებისმიერი მოწყობილობისთვის გაწერა</p>
            <button
              onClick={() => handleButtonClick('hardware და sofrware მომსახურება')}
              className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}>
              დაგვიკავშირდით
            </button>
          </div>

        </motion.div>

        {/* 3 card container  */}
        <motion.div
          className={`it_child_card_container ${isDarkmodeOn ? "it_card_dark" : "it_card_light"}`}
          initial={initial}
          animate={control_third}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <img src={computer_repair} alt="it service image" className="it_image_dard" />

          <div className="it_card_text_button" >
            <p className={`it_catd_paragraph  ${isDarkmodeOn ? "it_catd_paragraph_dark" : "it_catd_paragraph_whit"}`}>
              კომპიუტერების და ნებისმიერი ელექტრონული მოწყობილობის დიაგნოსტიკა შეკეთება</p>
            <button
              onClick={() => handleButtonClick('ელექტრონული მოწყობილობების დიაგნოსტიკა')}
              className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}>
              დაგვიკავშირდით
            </button>
          </div>

        </motion.div>
        <div className="it_price_container" >
          <motion.div className={`${!isDarkmodeOn ? "it_child_price_dark" : "it_child_price"}`}
            animate={control_price}
            initial={initial}>
            500 ლარიდან / თვეში</motion.div>
        </div>
      </div>

      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  )
}


