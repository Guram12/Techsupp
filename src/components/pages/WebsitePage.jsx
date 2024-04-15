import React from 'react';
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


  return (
    <div>
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
              ჩვენი გუნდი დაგეხმარებათ საიტის მაქსიმალურად მოკლე ვადაში შექმნაში.
              ამასთან, გთავაზობთ უმაღლესი ხარისხის მომსახურებას, როგორც სამუშაოს
              დასრულების ასევე მუშაობის პროცესში.  დედლაინის დადგენა პროექტის
              სირთულიდან გამომდინარე ხდება. თანხის გადახდა კი სამუშაოს დასრულების შემდეგ.
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
      <div className='card_wb_container'>
        <Website_cards />
      </div>
      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  )
}


export default transition(WebsitePage);