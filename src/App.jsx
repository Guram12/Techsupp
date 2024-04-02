import "./App.css";
import techsupp_video from "./assets/splashvideo.webm";
import { useState, useEffect, useRef, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import WebsitePage from "./components/pages/WebsitePage";
import ItPage from "./components/pages/ItPage";
import MenuPage from "./components/pages/MenuPage";
import BrendingPage from "./components/pages/BrendingPage";
import AnimationPage from "./components/pages/AnimationPage";
import AnaliticPage from "./components/pages/AnaliticPage";
import background_audio_second from "./assets/background_second.mp3";
import Members from "./components/pages/Members";
import CursorProvider from "./components/CursorContext/CursorContext.jsx";

// import { motion } from "framer-motion";
// import { CursorContext } from "./components/CursorContext/CursorContext";



function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isSoundOff, setIsSoundOff] = useState(false);
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(true);
  const audioRef = useRef(null);


  // const { cursorVariants, cursorBG } = useContext(CursorContext);

  const handle_darkmode_change = (event) => {
    console.log("clicked dark mode");
    setIsDarkmodeOn(event.target.checked);
  };


  const location = useLocation();

  useEffect(() => {
    // Save the original background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Change background color based on the dark mode state
    document.body.style.backgroundColor = !isDarkmodeOn ? 'black' : 'white';

    // Reset to original background color on cleanup
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, [isDarkmodeOn]);





  useEffect(() => {
    const startAudio = () => {
      // Play audio
      audioRef.current
        .play()
        .then(() => {
          setIsSoundOff(true); // Audio started playing
          document.removeEventListener("click", startAudio); // Remove the event listener
        })
        .catch((error) => {
          console.error("Playback failed:", error);
        });
    };

    // Add event listener to the document to start audio on first click
    document.addEventListener("click", startAudio);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", startAudio);
    };
  }, []);

  const toggleSound = () => {
    if (isSoundOff) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
    // Update state to reflect the new state of playback
    setIsSoundOff(!isSoundOff);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplashScreen(false);
  //   }, 4500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplashScreen) {
  //   return (
  //     <div className="splashscreen_container">
  //       <video
  //         src={techsupp_video}
  //         autoPlay
  //         loop
  //         muted
  //         playsInline
  //         className="splashscreen_video"
  //       ></video>
  //     </div>
  //   );
  // }


  return (
    <CursorProvider isDarkmodeOn={isDarkmodeOn} >

      <div className={`main_container ${isDarkmodeOn ? "main_container_white" : "main_container_black"}`}>
        {!(location.pathname === "/members") && (
          <>
            <Header
              isSoundOff={isSoundOff}
              toggleSound={toggleSound}
              isDarkmodeOn={isDarkmodeOn}
              handle_darkmode_change={handle_darkmode_change}

            />
            <Link to="about/"><button>about </button></Link>
            <Link to="/"><button>main page </button></Link>
            <Link to="/members"><button>members </button></Link>
          </>

        )}
        <audio ref={audioRef} src={background_audio_second} loop muted />

        <Routes>
          <Route path="about/" element={<About isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="/" element={<MainPage showSplashScreen={showSplashScreen} />} />
          <Route path="services/web-development" element={<WebsitePage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="services/it" element={<ItPage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="services/menu" element={<MenuPage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="services/brending" element={<BrendingPage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="services/animation" element={<AnimationPage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="services/analitycs" element={<AnaliticPage isDarkmodeOn={isDarkmodeOn} />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        {/* Cursor */}
        {/* <motion.div
    variants={cursorVariants}
    animate={cursorBG}
    className="cursor"
  ></motion.div> */}
      </div>
    </CursorProvider>
  );
}

export default App;
