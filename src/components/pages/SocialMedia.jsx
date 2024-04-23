import "../styles/SocialMedia.css";
import transition from "../Header/Transition";
import MediaAnimation from "../animations/MediaAnimation";
import Parallax from "../animations/Paralax";
import React, { useRef, useEffect } from 'react';
import ContinuousSlider from "../animations/TestSlider";
import { motion } from 'framer-motion'; // Import Framer Motion
import SocialMediaCards from "../animations/SocialMediaCards";
import Footer from "../Header/Footer";
import { useNavigate } from "react-router-dom";


function SocialMedia({ handle_context_change, isDarkmodeOn, tweenRef }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate(); // This hook is used to navigate programmatically


  const handleButtonClick = (message) => {
    handle_context_change(message);
    navigate('/contact');
  };


  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="media_animation_and_text_cont">
        <div className="media_animation_container">
          <MediaAnimation tweenRef={tweenRef} />
        </div>
        <div>
          <motion.div
            className="media_text_child_container"
            initial={{ x: '100vw' }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70 }}
            style={{
              color: `${isDarkmodeOn ? "black" : "white"}`,
              boxShadow: `${isDarkmodeOn ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" : ""}`
            }}
          >
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              ბიზნესის წარმატებისთვის თანამედროვე სამყაროში ერთერთი მნიშვნელოვანი რგოლი
              არის სოციალური მედია-მარკეტინგი.
            </p>

            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              ჩვენი გუნდი გთავაზობთ
              სოციალური მედიის (Facebook, Instagram, Linkedin) საშუალებით, გაზარდოთ
              თქვენი ბრენდის ცნობადობა და მოახდინოთ სწორი კომუნიკაცია მიზნობრივ აუდიტორიასთან.
            </p>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              თქვენი და თქვენი კონკურენტების საქმიანობის ანალიზის საფუძველზე, ჩვენ დავსახავთ სტრატეგიულ გეგმებს ბიზნესის წარმატებისთვის.
            </p>

          </motion.div>
        </div>

      </div>
      <div className="menu_paralax_container">
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5} tweenRef={tweenRef} >social media</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5} tweenRef={tweenRef} >social media</Parallax>
        </section>
      </div>

      <div className="example_post_images_container">
        <ContinuousSlider tweenRef={tweenRef} />
      </div>

      <div className="cards_title_container" >
        <h1
          onMouseEnter={() => tweenRef.current.play()}
          onMouseLeave={() => tweenRef.current.reverse()}
          style={{ color: `${isDarkmodeOn ? "black" : "white"}` }}  >პაკეტები</h1>
      </div>

      <div className="media_card_parent_container" >
        <SocialMediaCards isDarkmodeOn={isDarkmodeOn} tweenRef={tweenRef} />
      </div>

      <div className="media_contact_button" >
        <button
          onMouseEnter={() => tweenRef.current.play()}
          onMouseLeave={() => tweenRef.current.reverse()}
          onClick={() => handleButtonClick('სოციალური მედიის მართვა')}
          className={`${isDarkmodeOn ? "contact_us_button" : "contact_us_button_dark"}`}>
          დაგვიკავშირდით
        </button>
      </div>

      <div className="media_footer_container" >
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
}

export default transition(SocialMedia);



// ===1)   silver  1000 ლარი
// =>    
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 8 პოსტი
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// რეპორტინგი

// ===2)   gold  1300 ლარი 
// =>
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 10 პოსტი
// 10 სთორი
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// რეპორტინგი



// ===3)   platinium  1700 ლარი
// =>
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 15 პოსტი
// 20 სთორი
// instagram highlight
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// ბიუჯეტის გაწერა
// რეპორტინგი
