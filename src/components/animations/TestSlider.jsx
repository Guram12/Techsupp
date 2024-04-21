import React from 'react';
import "../styles/TestSlider.css"
import fb_post from "../../assets/posts/fb_post.png";
import x_post from "../../assets/posts/x_post.png"
import instagram_post from "../../assets/posts/instagram_post.png";
import linkedin_post from "../../assets/posts/linkedin_post.png";

function ContinuousSlider() {
  const images = [fb_post, x_post, instagram_post, linkedin_post];

  return (
    <div className="slider-container">
      <div className="slider-inner">
        {[...images, ...images].map((src, index) => (
          <div className="slider-slide" key={index}>
            <img src={src} alt={`Slide ${index}`}  className='post_images'  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinuousSlider;
