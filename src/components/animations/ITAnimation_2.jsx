import "../styles/ITAnimation_2.css"
import React, { useState, useEffect } from 'react';
import sheet_image from "../../assets/sheet_image.png"
// import black_background from "../../assets/black_background_image.png"
import white_background from "../../assets/white_background_image.png"
import extenden_image from "../../assets/extended_whiteTest4.png"

export default function ITAnimation_3() {
  const [curSlide, setCurSlide] = useState(1);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const initializeAnimation = () => {
      setAnimation(false);
    };

    const timeoutInitial = setTimeout(() => {
      // Your initial class add logic here, if needed
    }, 1500);

    const timeoutAnimation = setTimeout(initializeAnimation, 4500);

    return () => {
      clearTimeout(timeoutInitial);
      clearTimeout(timeoutAnimation);
    };
  }, []);


  const pagination = (slide, target) => {
    setAnimation(true);
    let nextSlide = target !== undefined ? target : slide + (slide < 2 ? 1 : -1);

    if (target !== undefined || (slide === 1 && !animation) || (slide < 2 && !animation)) {
      setCurSlide(nextSlide);
    }

    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  };

  const handlePageClick = (target) => {
    if (animation || target === curSlide) return;
    pagination(curSlide, target);
  };


  return (
        <div className="cont">
          <div className={`mouse ${animation ? "scrolling" : ""}`} />
          <div className={`app ${curSlide === 2 ? "active" : ""} ${!animation ? "initial" : ""}`}>
            <div className="app__bgimg">
              <div className="app__bgimg-image app__bgimg-image--1"></div>
              <div className="app__bgimg-image app__bgimg-image--2"></div>
            </div>
            <div className="app__img">
              <img
                onmousedown="return false"
                src={white_background}
                alt="city"
              />
            </div>
            <div className="app__text app__text--1">
              <div className="app__text-line app__text-line--4"  style={{fontSize: "16px"}} >კომპიუტერული სრული მომსახურება</div>
              <div className="app__text-line app__text-line--3">ut le</div>
              <div className="app__text-line app__text-line--2">non tincidunt </div>
            </div>
            <div className="app__text app__text--2">
              <div className="app__text-line app__text-line--4">habitant</div>
              {/* <div className="app__text-line app__text-line--3">ut eget</div>
              <div className="app__text-line app__text-line--2">Nam imperdiet</div> */}
              <div className="app__text-line app__text-line--1">
              </div>
            </div>
          </div>
          <div className="pages">
            <ul className="pages__list">
              <li onClick={() => handlePageClick(1)} className={`pages__item pages__item--1 ${curSlide === 1 ? "page__item-active" : ""}`} />
              <li onClick={() => handlePageClick(2)} className={`pages__item pages__item--2 ${curSlide === 2 ? "page__item-active" : ""}`} />
            </ul>
          </div>
        </div>
  )
}