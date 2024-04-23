import React, { useState, useEffect } from 'react';
import "../styles/Techsupp_logo.css";


function AnimatedLogo({ isDarkmodeOn, tweenRef }) {

    return (
        <svg
            className={isDarkmodeOn ? "big_logo" : "big_logo_dark"}
            data-bbox="0.03 9.97 389.62 238.56"
            viewBox="0 0 389.67 254.4"
            xmlns="http://www.w3.org/2000/svg"
            data-type="ugc"
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
        >
            <g>
                <path className="path5" d="m.03 10.38 144-.37" fill="none" stroke={isDarkmodeOn ? "#000000" : "white"} strokeMiterlimit="10" strokeWidth="30" />
                <path className="path4" d="M42.58 70.01h59" fill="none" stroke={isDarkmodeOn ? "#000000" : "white"} strokeMiterlimit="10" strokeWidth="30" />
                <path className="path1" d="m164.47 248.53 85.93-118.56h62.18" fill="none" stroke={isDarkmodeOn ? "#000000" : "white"} strokeMiterlimit="10" strokeWidth="30" />
                <path className="path2" d="M125.21 194.83 222.99 65.2l130.37.13" fill="none" stroke={isDarkmodeOn ? "#000000" : "white"} strokeMiterlimit="10" strokeWidth="30" />
                <path className="path3" d="M91.14 146.68q52.4-68.34 104.81-136.71l193.7.37" fill="none" stroke={isDarkmodeOn ? "#000000" : "white"} strokeMiterlimit="10" strokeWidth="30" />
            </g>
        </svg>
    );
};

export default AnimatedLogo;
