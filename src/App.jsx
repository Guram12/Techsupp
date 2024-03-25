import "./App.css";
import techsupp_video from "./assets/splashvideo.webm";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header/Header";

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
      {/* <p>ფეიჯები აპპ კომპონენტისთვის, აქ მერე უნდა ჩავსვატ როუთები </p> */}
      <Link to="about/">
        <button>about </button>
      </Link>
      <Link to="/">
        <button>main page </button>
      </Link>
      <Routes>
        <Route path="about/" element={<About />} />
        <Route
          path="/"
          element={<MainPage showSplashScreen={showSplashScreen} />}
        />
      </Routes>
    </div>
  );
}

export default App;
