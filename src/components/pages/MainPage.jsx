// import LineAnimation from "../LineAnimation";
import "../styles/MainPage.css"
import "../styles/card.scss"
import { useState } from "react";


export default function mainPage({ showSplashScreen }) {

  const [activeTab, setActiveTab] = useState(1); // This state tracks the active tab

  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab state
  };



  return (
    <div className="mainpage_cont" >
      <div className="service_animation_coontainer" >
        <div className="container">
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="page">
          <ul className="tabs-controls">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i} className="tabs-controls__item">
                <a
                  href="#!"
                  className={`tabs-controls__link ${activeTab === i + 1 ? 'tabs-controls__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(i + 1); // Correctly set the active tab based on the clicked tab
                  }}
                  data-id={i + 1}
                >
                  {`Tab ${String.fromCharCode(65 + i)}`}
                </a>
              </li>
            ))}
          </ul>
          <section className="cards-container">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className={`card ${activeTab === i + 1 ? 'card--current' : 'hidden'}`} // Use 'hidden' class for inactive cards
                id={`${i + 1}`}
              >
                <h1>{`${String.fromCharCode(65 + i)}. Lorem ipsum dolor sit amet`}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}