import React, { useEffect } from 'react';
import "../styles/WebsitePage.css"
import Paralax from "../animations/Paralax"
import Website_card_animation from "../animations/Website_card_animation"
import { motion, useAnimation } from 'framer-motion';
import web_icon from "../../assets/web_icon.png"
import { useInView } from 'react-intersection-observer';
import Website_cards from '../animations/Website_cards';
import Footer from '../Header/Footer';
import transition from '../Header/Transition';


function WebsitePage({
  isDarkmodeOn,
}) {
  const control_card_selection = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Adjust this value based on when you want the animation to start
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (inView) {
      control_card_selection.start({
        y: 0,
        transition: { duration: 0.6, delay: 0, type: 'spring', stiffness: 70, damping: 20 }
      });
    }
  }, [inView, control_card_selection]);


  return (
    <div style={{ paddingTop: "50px" }} >
      <div className='website_page_title' >
        <Website_card_animation isDarkmodeOn={isDarkmodeOn} />
      </div>
      <div className="webservice_about_container"  >
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 70 }}
        >
          <div className="webservice_child_cont">
            <h1 className="webservice_header" > საიტის დამზადება</h1>
            <p className="webservice_header">
              ჩვენი გუნდი დაგეხმარებათ, დაამზადოთ სასურველი ვებსაიტი, უმოკლეს დროში.
              ამასთან, გთავაზობთ, უმაღლესი ხარისხის მომსახურებას, როგორც სამუშაოს
              დასრულების ასევე მუშაობის პროცესში.
              დედლაინის დადგენა პროექტის სირთულიდან გამომდინარე ხდება. თანხის გადახდა კი სამუშაოს დასრულების შემდეგ.
              გახდი ჩვენი პარტნიორი და მიიღე უმაღლესი ხარისხის მომსახურება ტექსაპის პროფესიონალებისგან.
            </p>
          </div>
        </motion.div>
        <motion.img
          alt="website logo"
          src={web_icon}
          className="sheet_logo"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 70,
            delay: 0.5
          }}
          style={{ zIndex: "22" }}
        />
      </div>
      <div className="website_paralax_container" >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Paralax>
        </section>
      </div>
      <div className='card_wb_container' >
        <div className={`child_website_allcards_title 
         ${isDarkmodeOn ? "child_website_allcards_paragraph_dark" : "child_website_allcards_paragraph_white"}`}
         ref={ref}
        >
          <motion.p className='child_website_allcards_paragraph'
            initial={{ y: '100vh' }}
            animate={control_card_selection}
          >გთხოვთ აირჩიოთ სასურველი ვებსაიტის ტიპი</motion.p>
        </div>
        <Website_cards isDarkmodeOn={isDarkmodeOn} />
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  )
}


export default transition(WebsitePage);

