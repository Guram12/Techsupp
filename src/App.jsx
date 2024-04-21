import "./App.css";
import techsupp_video from "./assets/Motion_media_files/splashvideo.webm";
import { useState, useEffect, useRef, useContext } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import WebsitePage from "./components/pages/WebsitePage";
import ItPage from "./components/pages/ItPage";
import MenuPage from "./components/pages/MenuPage";
import BrendingPage from "./components/pages/BrendingPage";
import AnimationPage from "./components/pages/AnimationPage";
import AnaliticPage from "./components/pages/AnaliticPage";
import background_audio_second from "./assets/valorant.mp3";
// import Members from "./components/pages/Members";
import CursorProvider from "./components/CursorContext/CursorContext.jsx";
import Contact from "./components/pages/Contact.jsx";
// import FacebookMSG from "./components/FacebookMSG.jsx";
import { AnimatePresence } from "framer-motion";
import SocialMedia from "./components/pages/SocialMedia.jsx";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isSoundOff, setIsSoundOff] = useState(false);
  const [isDarkmodeOn, setIsDarkmodeOn] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(null);

  // const { cursorVariants, cursorBG } = useContext(CursorContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const close_menu_on_outside_click = () => {
    setIsOpen(false);
  };

  const handle_darkmode_change = (event) => {
    setIsDarkmodeOn(event.target.checked);
  };

  const secondlocation = useLocation();

  const location = useLocation();

  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = !isDarkmodeOn ? "black" : "white";
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, [isDarkmodeOn]);

  // ================================= for setting contact  context massage =============================
  const [contactMessage, setContactMessage] = useState("");

  const handle_context_change = (event) => {
    setContactMessage(event);
  };

  // =====================================================================================================

  useEffect(() => {
    const startAudio = () => {
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
    <CursorProvider isDarkmodeOn={isDarkmodeOn}>
      <div
        className={`main_container ${
          isDarkmodeOn ? "main_container_white" : "main_container_black"
        }`}
      >
        {!(location.pathname === "/members") && (
          <>
            <Header
              isSoundOff={isSoundOff}
              toggleSound={toggleSound}
              isDarkmodeOn={isDarkmodeOn}
              handle_darkmode_change={handle_darkmode_change}
              toggleMenu={toggleMenu}
              isOpen={isOpen}
            />
          </>
        )}
        <audio ref={audioRef} src={background_audio_second} loop muted />
        <AnimatePresence mode="wait">
          <div onClick={close_menu_on_outside_click}>
            <Routes location={secondlocation} key={secondlocation.pathname}>
              <Route
                path="/*"
                element={<MainPage isDarkmodeOn={isDarkmodeOn} />}
              />
              <Route
                path="about/"
                element={<About isDarkmodeOn={isDarkmodeOn} />}
              />
              <Route
                path="contact/"
                element={
                  <Contact
                    isDarkmodeOn={isDarkmodeOn}
                    contactMessage={contactMessage}
                  />
                }
              />
              <Route
                path="/"
                index
                element={
                  <MainPage
                    showSplashScreen={showSplashScreen}
                    isDarkmodeOn={isDarkmodeOn}
                  />
                }
              />

              <Route
                path="services/web-development"
                element={
                  <WebsitePage
                    isDarkmodeOn={isDarkmodeOn}
                    handle_context_change={handle_context_change}
                  />
                }
              />
              <Route
                path="services/it"
                element={
                  <ItPage
                    isDarkmodeOn={isDarkmodeOn}
                    handle_context_change={handle_context_change}
                  />
                }
              />
              <Route
                path="services/menu"
                element={
                  <MenuPage
                    isDarkmodeOn={isDarkmodeOn}
                    handle_context_change={handle_context_change}
                  />
                }
              />
              <Route
                path="services/brending"
                element={
                  <BrendingPage
                    handle_context_change={handle_context_change}
                    isDarkmodeOn={isDarkmodeOn}
                  />
                }
              />
              <Route
                path="services/animation"
                element={
                  <AnimationPage
                    handle_context_change={handle_context_change}
                    isDarkmodeOn={isDarkmodeOn}
                  />
                }
              />
              <Route
                path="services/analitycs"
                element={
                  <AnaliticPage
                    handle_context_change={handle_context_change}
                    isDarkmodeOn={isDarkmodeOn}
                  />
                }
              />
              <Route
                path="services/socialmedia"
                element={
                  <SocialMedia
                    handle_context_change={handle_context_change}
                    isDarkmodeOn={isDarkmodeOn}
                  />
                }
              />
              {/* <Route path="/members" element={<Members />} /> */}
            </Routes>
          </div>
        </AnimatePresence>
      </div>

      <div className="facebook_container">{/* <FacebookMSG /> */}</div>
    </CursorProvider>
  );
}

export default App;
