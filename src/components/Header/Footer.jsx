import "../styles/Footer.css"
// import "../styles/Footer.scss"
import React , { useState , useEffect } from "react";
import transition from "./Transition";

function Footer({isDarkmodeOn}) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


//   size: `${2 + Math.random() * 1}rem`,
//   distance: `${6 + Math.random() * 10}rem`,
//   position: `${-5 + Math.random() * 95}%`,
//   time: `${2 + Math.random() * 2}s`,
//   delay: `${-1 * (2 + Math.random() * 2)}s`,
// }));


  // Generating bubbles with unique styles
  const bubbles = Array.from({ length: 128 }).map((_, index) => ({
    size: `${2 + Math.random() * (!isMobileView ?   5 : 1 )}rem`,
    distance: `${6 + Math.random() * (!isMobileView ? 4 : 2)}rem`,
    position: `${-5 + Math.random() * (!isMobileView ? 100 : 98 )}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }));

  return (
    <div className="body_footer" >

      <div className="main">
        <div className={`footer  ${isDarkmodeOn? "footer_dark" : "footer_light" } `}  >
          <div className="bubbles">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  '--size': bubble.size,
                  '--distance': bubble.distance,
                  '--position': bubble.position,
                  '--time': bubble.time,
                  '--delay': bubble.delay,
                  marginBottom: "66px"
                }}
              ></div>
            ))}
          </div>
        </div>
        <svg style={{ position: 'fixed', top: '100vh' }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={`for_footer_filing ${!isDarkmodeOn ? "for_footer_filing_light" : "for_footer_filing_dark"  }     `} >

      </div>
    </div>
  );
};

export default transition(Footer)