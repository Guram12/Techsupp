import "../styles/Website_card_animation.css"
import React, { useEffect, useRef } from 'react';






export default function Website_card_animation() {
  const textRef = useRef(null);

  const decodeText = () => {
    const text = textRef.current;
    if (!text) return;

    let state = [];
    for (let i = 0; i < text.children.length; i++) {
      text.children[i].classList.remove('state-1', 'state-2', 'state-3');
      state.push(i);
    }

    let shuffled = shuffle(state);

    shuffled.forEach((index) => {
      const child = text.children[index];
      if (child.classList.contains('text-animation')) {
        const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        setTimeout(() => firstStages(child), state1Time);
      }
    });
  };

  const firstStages = (child) => {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    } else if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
      setTimeout(() => secondStages(child), 100);
    } else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
      setTimeout(() => secondStages(child), 100);
    }
  };

  const secondStages = (child) => {
    if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
      setTimeout(() => thirdStages(child), 100);
    } else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
    }
  };

  const thirdStages = (child) => {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
  }, []);



  return (
    <div className="all_svg_cont" >
      <div className="decode-text">
        <div className="text-animation">ა</div>
        <div className="text-animation">ი</div>
        <div className="text-animation">რ</div>
        <div className="text-animation">ჩ</div>
        <div className="text-animation">ი</div>
        <div className="text-animation">ე</div>
        <div className="text-animation">i</div>
        <div className="text-animation">z</div>
        <div className="text-animation">e</div>
        <div className="text-animation">d</div>
        <div className="space" />
        <div className="text-animation">d</div>
        <div className="text-animation">e</div>
        <div className="text-animation">c</div>
        <div className="text-animation">o</div>
        <div className="text-animation">d</div>
        <div className="text-animation">e</div>
        <div className="space" />
        <div className="text-animation">e</div>
        <div className="text-animation">f</div>
        <div className="text-animation">f</div>
        <div className="text-animation">e</div>
        <div className="text-animation">c</div>
        <div className="text-animation">t</div>
      </div>
      <a id="refresh" onclick="decodeText();">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </a>
    </div>
  )
}









