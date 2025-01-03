import React, { useEffect, useState } from "react";
import "../styles/Techsupp_name.css";
import { useNavigate } from "react-router-dom";

export default function Techsupp_name({ isDarkmodeOn , tweenRef}) {
  // Initial state where no divs are selected for animation
  const [animateStates, setAnimateStates] = useState(Array(8).fill(false));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStates = Array(8).fill(false); // Reset states
      const randomIndex = Math.floor(Math.random() * newStates.length); // Choose a random div
      newStates[randomIndex] = true; // Set only this div to be animated
      setAnimateStates(newStates);
    }, 2000); // Change every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const letters = ["T", "e", "c", "h", "S", "u", "p", "p"];


  const navigate = useNavigate()

  const handle_techsupp_name_container_click = () => {
    navigate("")
    console.log("clicked")
  }



  return (
    <div className="main11111" onClick={handle_techsupp_name_container_click}
    onMouseEnter={() => tweenRef.current.play()}
    onMouseLeave={() => tweenRef.current.reverse()}

    >
      <div
        className="content"
        style={{ color: `${!isDarkmodeOn ? "white" : "black"} ` }}
      >
        {letters.map((letter, index) => (
          <div className="content__container" key={index}>
            <ul
              className={`content__container__list ${animateStates[index] ? "animate" : ""
                }`}
            >
              <li className="content__container__list__item">{letter}</li>
              <li className="content__container__list__item">{letter}</li>
              <li className="content__container__list__item">{letter}</li>
              <li className="content__container__list__item">{letter}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
