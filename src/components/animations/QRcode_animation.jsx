import React, { useState } from 'react';
import '../styles/QRcode_animation.css';

import qr_techsupp_black from "../../assets/TechSupp_qr_black.svg"

export default function QRcodeAnimation({tweenRef  , isDarkmodeOn}) {





  return (
    <div className='qr_parent_container'
      onMouseEnter={() => tweenRef.current.play()}
      onMouseLeave={() => tweenRef.current.reverse()}
    > 
    <div className={isDarkmodeOn? 'qr_techsupp_cont' : "qr_techsupp_cont_dark"} >
      <img src={ qr_techsupp_black}  alt="techsupp qr code"  className='techsupp_qr_code' />

    </div>
    </div>
  );
}
