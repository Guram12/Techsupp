import React, { useState } from 'react';
import '../styles/QRcode_animation.css';

export default function QRcodeAnimation({tweenRef}) {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Toggle function to add or remove hover class
  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='qr_parent_container'
      onMouseEnter={() => tweenRef.current.play()}
      onMouseLeave={() => tweenRef.current.reverse()}
    >
      <div id="qrcode-container"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}>
        <div id="qrcode" className={isHovered ? '' : 'hover'}></div>
      </div>
    </div>
  );
}
