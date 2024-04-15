import "../styles/MainPage.css";
import "../styles/card.css";

import { useState, useEffect , useRef } from "react";
import CardAnimation from "../animations/CardAnimation";
import CubeAnimation from "../animations/CubeAnimation";
import MainPage_Footer from "../Header/MainPage_Footer";
import Compass from "../animations/Compass";

import "../styles/Compas.css"
import rotatable_compass from "../../assets/rotatable_arrow.png"
import transition from "../Header/Transition";

 const mainPage = ({ showSplashScreen }) => {
  const [angle, setAngle] = useState(0);
  const [activeTab, setActiveTab] = useState(1); 


  const [arrow_angle, setArrow_angle] = useState(0);


  const rotateTo = (angle, tabId) => {
    setAngle(angle);
    setActiveTab(tabId);

  };

  const handleTabClick = (id) => {
    setActiveTab(id); 
  }


//   const containerRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!containerRef.current) return;
  
//     const { left, top, width, height } = containerRef.current.getBoundingClientRect();
//     const center = {
//       x: left + width / 2,
//       y: top + height / 2,
//     };
    
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
  
//     const radians = Math.atan2(mouseY - center.y, mouseX - center.x);
//     const angle = radians * (180 / Math.PI) - 90; // Adjusted by subtracting 90 degrees
  
//     setArrow_angle(angle);
// };

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

return (
  <div className="mainpage_cont"  >  
  {/* ref={containerRef} onMouseMove={handleMouseMove} */}
      <div className="mainpage_child_cont">
        <div className="slogan_container" >
          <div className="sogan_child_container"  >
            <p className="slogan" >თქვენი კომპასი ციფრულ ლაბირინთში</p>
              {/* <img src={rotatable_compass} alt="compass"  className="movable_arrow"style={{ transform: `rotate(${arrow_angle}deg)`, width: "40px" }} /> */}
          </div>
        </div>
        <Compass angle={angle} rotateTo={rotateTo} />
        <CardAnimation activeTab={activeTab} handleTabClick={setActiveTab} />
      </div>
      <div className="mainpage_main_footer_container">
        <MainPage_Footer />
      </div>
    </div>
  );
}


export default  transition(mainPage);

