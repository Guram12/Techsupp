import Paralax from "../animations/Paralax"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import "../styles/ITPage.css"
import Footer from "../Header/Footer"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import it_card_image from "../../assets/it_card_image.jpg"


export default function ItPage({ isDarkmodeOn, handle_context_change }) {

  const initial = { x: '100vw' };
  const animate = { x: 0 };

  const control_first = useAnimation()
  const control_second = useAnimation()
  const control_third = useAnimation()
  const control_price = useAnimation()


  // Setting up Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Adjust this value based on when you want the animation to start
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
        <motion.div
          className="it_child_card_container"
          initial={initial}
          animate={control_first}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}>
          <img src={it_card_image} alt="it service image" className="it_image_dard" />
          <p className="it_catd_paragraph" >კომპიუტერული სრული მომსახურება</p>
          <button
            onClick={() => handleButtonClick('კომპიუტერული სრული მომსახურება')}
            className="view-details-btn" >
            დაგვიკავშირდით
          </button>
        </motion.div>
        <motion.div
          className="it_child_card_container"
          initial={initial}
          animate={control_second}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}>
          <img src={it_card_image} alt="it service image" className="it_image_dard" />
          <p className="it_catd_paragraph">ინტრნეტ კაბელების გაყვანა და ნებისმიერი მოწყობილობისთვის გაწერა</p>
          <button
            onClick={() => handleButtonClick('hardware და sofrware მომსახურება')}
            className="view-details-btn">
            დაგვიკავშირდით
          </button>
        </motion.div>
        <motion.div
          className="it_child_card_container"
          initial={initial}
          animate={control_third}
          whileHover={{
            y: -10,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <img src={it_card_image} alt="it service image" className="it_image_dard" />
          <p className="it_catd_paragraph">კომპიუტერების და ნებისმიერი ელექტრონული მოწყობილობის დიაგნოსტიკა შეკეთება</p>
          <button
            onClick={() => handleButtonClick('ელექტრონული მოწყობილობების დიაგნოსტიკა')}
            className="view-details-btn">
            დაგვიკავშირდით
          </button>
        </motion.div>
        <div className="it_price_container" >
          <motion.div className="it_child_price"
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


