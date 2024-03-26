import "./App.css";
import techsupp_video from "./assets/splashvideo.webm";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";
import WebsitePage from "./components/pages/WebsitePage";
import ItPage from "./components/pages/ItPage";
import MenuPage from "./components/pages/MenuPage";
import BrendingPage from "./components/pages/BrendingPage";
import AnimationPage from "./components/pages/AnimationPage";
import AnaliticPage from "./components/pages/AnaliticPage";



function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4500);

    return () => clearTimeout(timer);
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
        ></video>
      </div>
    );
  }

  return (
    <div className="main_container">
      <Header />
      <Link to="about/"><button>about </button></Link>
      <Link to="/"><button>main page </button></Link>
      <Routes>
        <Route path="about/" element={<About />} />
        <Route path="/" element={<MainPage showSplashScreen={showSplashScreen} />}/>
        <Route path="services/web-development" element={<WebsitePage />} />
        <Route path="services/it" element={<ItPage />} />
        <Route path="services/menu" element={<MenuPage />} />
        <Route path="services/brending" element={<BrendingPage />} />
        <Route path="services/animation" element={<AnimationPage />} />
        <Route path="services/analitycs" element={<AnaliticPage />} />
      </Routes>
    </div>
  );
}


export default App;
