import React, { useState, useEffect } from 'react';
import "../styles/MediaAnimation.css";

function MediaAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const numIcons = 4; // Total number of icons

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % numIcons);
    }, 2000); // Change icon every 3000 ms or 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <ul className="media_ul">
        <li className={`media_li ${activeIndex === 0 ? 'active' : ''}`}>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-facebook" />
          </a>
        </li>
        <li className={`media_li ${activeIndex === 1 ? 'active' : ''}`}>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-twitter" />
          </a>
        </li>
        <li className={`media_li ${activeIndex === 2 ? 'active' : ''}`}>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-instagram" />
          </a>
        </li>
        <li className={`media_li ${activeIndex === 3 ? 'active' : ''}`}>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            <span className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MediaAnimation;
