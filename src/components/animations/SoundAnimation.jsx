import React from "react";
import "../styles/AoundAnimation.css"
import sound_line from "../../assets/sound_line.png"


export default function SoundAnimation({
  isSoundOff,
  toggleSound,
  tweenRef
}) {


  return (
    <div className="cont_dark_mode"
      onMouseEnter={() => tweenRef.current.play()}
      onMouseLeave={() => tweenRef.current.reverse()}
    >
      <label className="toggle toggle_white  toggle_black" htmlFor="switch_sound">
        <input id="switch_sound"
          className="input"
          type="checkbox"
          checked={isSoundOff}
          onChange={toggleSound}
        />
        <div className="icon icon--moon">
          <img src={sound_line} alt="sound stop line" className="sound_stop_line" />
        </div>

        <div className="icon icon--sun">
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </label>
    </div>
  );
};

