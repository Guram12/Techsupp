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




export default function BrandingPage() {
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
        <p>dfwefwe fwewef wfe wef wef wefw wfe wef wef wfw wef wfe wfe wef wf wf f wef we</p>
      </div>
    </div>
  );
}