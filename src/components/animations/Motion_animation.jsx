import React from 'react';
import "../styles/Motion_animation.css";
import testvideo_webm from "../../assets/Motion_media_files/matrix.webm"
import compresed_video from "../../assets/compreset_matric.mp4"

export default function Motion_animation({isDarkmodeOn}) {
  // Add any additional JavaScript or hooks here if necessary

  return (
    <div className='main_poster_video_container' >
      <header  className='poster_header' >
        <video
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          className='poster_video_tag'
        
        // poster="your_poster_image_url" // Uncomment and replace with your poster image URL
        >
          <source src={testvideo_webm} type="video/webm" />
          <source src={compresed_video} type="video/mp4" />
        </video>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 100" 
          preserveAspectRatio="xMidYMid slice"
          className = {`poster_first_svg ${!isDarkmodeOn? "poster_first_svg_dark" : "poster_first_svg_white" } `}
        >
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="white"  className='poster_rect' />
              <text className='poster_text' x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="38" fontFamily="'Biko', sans-serif">
                MOTION
              </text>
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" />
        </svg>
      </header>
    </div>
  );
}
