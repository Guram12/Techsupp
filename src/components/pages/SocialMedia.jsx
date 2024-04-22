import "../styles/SocialMedia.css";
import transition from "../Header/Transition";
import MediaAnimation from "../animations/MediaAnimation";
import Parallax from "../animations/Paralax";
import React, { useRef, useEffect } from 'react';
import ContinuousSlider from "../animations/TestSlider";
import { motion } from 'framer-motion'; // Import Framer Motion





function SocialMedia({ handle_context_change, isDarkmodeOn }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="media_animation_and_text_cont">
        <div className="media_animation_container">
          <MediaAnimation />
        </div>
        <div>
          <motion.div
            className="media_text_child_container"
            initial={{ x: '100vw' }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 70 }}
          >
            <p>
              ბიზნესის წარმატებისთვის თანამედროვე სამყაროში ერთერთი მნიშვნელოვანი რგოლი
              არის სოციალური მედია-მარკეტინგი.
            </p>

            <p>
              ჩვენი გუნდი გთავაზობთ
              სოციალური მედიის (Facebook, Instagram, Linkedin) საშუალებით, გაზარდოთ
              თქვენი ბრენდის ცნობადობა და მოახდინოთ სწორი კომუნიკაცია მიზნობრივ აუდიტორიასთან.
            </p>
            <p>
              თქვენი და თქვენი კონკურენტების საქმიანობის ანალიზის საფუძველზე, ჩვენ დავსახავთ სტრატეგიულ გეგმებს ბიზნესის წარმატებისთვის.
            </p>


          </motion.div>
        </div>

      </div>
      <div className="menu_paralax_container">
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>social media</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>social media</Parallax>
        </section>
      </div>

      <div className="example_post_images_container">
        <ContinuousSlider />

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
