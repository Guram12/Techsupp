import "../styles/Website_card_animation.css";
import React, { useEffect, useRef, useContext } from "react";
import rownd_arrow_black from "../../assets/recycle_black.png";
import rownd_arrow_white from "../../assets/recycle_white.png";
import { CursorContext } from "../CursorContext/CursorContext";
import { motion } from "framer-motion";

export default function Website_card_animation({ isDarkmodeOn }) {
  const textRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const decodeText = () => {
    const text = textRef.current;
    if (!text) return;

    let state = [];
    for (let i = 0; i < text.children.length; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3");
      state.push(i);
    }

    let shuffled = shuffle(state);

    shuffled.forEach((index) => {
      const child = text.children[index];
      if (child.classList.contains("text-animation")) {
        const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        setTimeout(() => firstStages(child), state1Time);
      }
    });
  };

  const firstStages = (child) => {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    } else if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
      setTimeout(() => secondStages(child), 100);
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
      setTimeout(() => secondStages(child), 100);
    }
  };

  const secondStages = (child) => {
    if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
      setTimeout(() => thirdStages(child), 100);
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
    }
  };

  const thirdStages = (child) => {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    decodeText();
    const intervalId = setInterval(decodeText, 10000);

    return () => clearInterval(intervalId);
  }, [isDarkmodeOn]);

  return (
    <motion.div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="all_svg_cont"
    >
      <div className="decode-text" ref={textRef}>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ა
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ი
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          რ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ჩ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ი
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ე
        </div>

        <div className="space" />
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          შ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ე
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ნ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ი
        </div>
        <div className="space" />
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ვ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ე
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ბ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ს
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ა
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ი
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ტ
        </div>
        <div
          className={`text-animation  ${
            isDarkmodeOn ? "animation_light_mode" : "animation_dark_mode"
          }`}
        >
          ი
        </div>
      </div>
      <button
        className={`refresh ${
          isDarkmodeOn ? "refresh_dark_mode" : "refresh_light_mode"
        } `}
        onClick={decodeText}
      >
        <img
          src={isDarkmodeOn ? rownd_arrow_black : rownd_arrow_white}
          alt="refresh arrow icon"
          className="refresh_icon_arrow"
        />
      </button>
    </motion.div>
  );
}
