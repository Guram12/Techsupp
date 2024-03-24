import './App.css'
// import techsupp_video from './assets/Comp 1.webm'
import techsupp_video from './assets/splashvideo.webm'
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Link } from "react-router-dom";
import About from './components/About';
import MainPage from './components/MainPage';


function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);








  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4500); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (showSplashScreen) {
    return (
      <div className="splashscreen_container">
        <video
          src={techsupp_video}
          autoPlay
          loop
          muted
          playsInline
          className="splashscreen_video"
        >
        </video>
      </div>
    );
  }


  return (

    <div className='main_container' >
      <p>ფეიჯები აპპ კომპონენტისთვის, აქ მერე უნდა ჩავსვატ როუთები </p>
      <Link to='about/' >
        <button>about </button>
      </Link>
      <Link to='/' >
        <button>main page </button>
      </Link>
      <Routes>
        <Route
          path="about/"
          element={<About />}
        />
        <Route
          path="/"
          element={<MainPage  showSplashScreen={showSplashScreen}   />}
        />

      </Routes>

    </div>
  )
}

export default App
