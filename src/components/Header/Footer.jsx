import "../styles/Footer.css"
// import "../styles/Footer.scss"



export default function Footer() {
  // Generating bubbles with unique styles
  const bubbles = Array.from({ length: 128 }).map((_, index) => ({
    size: `${2 + Math.random() * 6}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 100}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }));

  return (
    <div className="body_footer" >

      <div className="main">
        <div className="footer">
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
      <div className="for_footer_filing" >

      </div>
    </div>
  );
};
