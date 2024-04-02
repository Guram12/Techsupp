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
import testimage from "../../assets/web_icon.png"

export default function BrandingPage({ isDarkmodeOn }) {
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

  return (
    <div>
      {/* <SplineAnimation/> */}
      {/* <Spline_logo/> */}
      <div className="branding_animation_container">
        <div className="each_animation" >
          {animations[currentAnimationIndex]}
        </div>
        <div className="brending_about_up" >
          <h1>ბრენდინგი/რებრენდინგი</h1>
          <p>ბიზნესის იმიჯის შესაქმნელად აუცილებელია გქონდეთ საკუთარი ლოგო და დიზაინი.
            ამ ყველაფერში კი ჩვენი გამოცდილი გუნდის წევრები დაგეხმარებიან. ისინი შექმნიან
            თქვენზე მორგებულ დიზაინს და მოარგებენ თქვენს საიტსა თუ სოციალურ მედიას.</p>
        </div>

      </div>
      <div>
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>Analitycs Analitycs</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>Google sheet </Parallax>
        </section>
      </div>
      <div className="all_brending_cards_container" >
        {/* pirveli konteineri  */}
        <div className="rebrending_down_card_container" >
          <div className="rebranding_down_card" ></div>
          <img src={testimage} alt="brending icon" className="first_rebranding_image" />
          <div className="rebranding_card_text" >
            <p className="rebranding_card_text_p" >ბიზნესისთვის ლოგოს შექმნა</p>
          </div>
        </div>
        {/* meore konteineri  */}
        <div className="rebrending_down_card_container_1" >
          <div className="rebranding_card_text2" >
            <p className="rebranding_card_text_p2" >სავიზიტო ბარათების დიზაინი / ბრენდირება / რებრენდინგი</p>
          </div>
          <img src={testimage} alt="brending icon" className="second_rebranding_image" />
          <div className="rebranding_down_card2" ></div>
        </div>
        {/* pirveli konteineri  */}
        <div className="rebrending_down_card_container_3" >
          <div className="rebranding_down_card_3" ></div>
          <img src={testimage} alt="brending icon" className="first_rebranding_image_3" />
          <div className="rebranding_card_text_3" >
            <p className="rebranding_card_text_p_3" >UI/UX დიზაინის შექმნა თქვენი ბიზნესისთვის</p>
          </div>
        </div>

      </div>

    </div>
  );
}