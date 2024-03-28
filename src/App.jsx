import "./App.css";
import techsupp_video from "./assets/splashvideo.webm";
import { useState, useEffect, useRef } from "react";
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
import background_audio_second from "./assets/background_second.mp3"
import Members from "./components/pages/Members"

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isSoundOff, setIsSoundOff] = useState(false);
  const audioRef = useRef(null);

  const location = useLocation();


  useEffect(() => {
    const startAudio = () => {
      // Play audio
      audioRef.current.play().then(() => {
        setIsSoundOff(true); // Audio started playing
        document.removeEventListener('click', startAudio); // Remove the event listener
      }).catch((error) => {
        console.error("Playback failed:", error);
      });
    };

    // Add event listener to the document to start audio on first click
    document.addEventListener('click', startAudio);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('click', startAudio);
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
    <div className="main_container">
      {!(location.pathname === "/members") && (
        <>
          <Header isSoundOff={isSoundOff} toggleSound={toggleSound} />
          <Link to="about/"><button>about </button></Link>
          <Link to="/"><button>main page </button></Link>
          <Link to="/members"><button>members </button></Link>
        </>

      )}
      <audio ref={audioRef} src={background_audio_second} loop />

      <Routes>
        <Route path="about/" element={<About />} />
        <Route path="/" element={<MainPage showSplashScreen={showSplashScreen} />} />
        <Route path="services/web-development" element={<WebsitePage />} />
        <Route path="services/it" element={<ItPage />} />
        <Route path="services/menu" element={<MenuPage />} />
        <Route path="services/brending" element={<BrendingPage />} />
        <Route path="services/animation" element={<AnimationPage />} />
        <Route path="services/analitycs" element={<AnaliticPage />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  );
}


export default App;
