import React, { useState, useEffect } from 'react';
import "../styles/Techsupp_logo.css"

const AnimatedLogo = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prevToggle => !prevToggle);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg style={{width: "500px" , height: "500px"}} className={toggle ? "toggle_1" : "toggle_2"} data-bbox="0.03 9.97 389.62 238.56" viewBox="0 0 389.67 254.4" xmlns="http://www.w3.org/2000/svg" data-type="ugc">
            <g>
                <path className="path1" d="m.03 10.38 144-.37" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="30" />
                <path className="path2" d="M42.58 70.01h59" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="30" />
                {/* Other paths remain unchanged */}
                <path d="m164.47 248.53 85.93-118.56h62.18" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="30" />
                <path d="M125.21 194.83 222.99 65.2l130.37.13" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="30" />
                <path d="M91.14 146.68q52.4-68.34 104.81-136.71l193.7.37" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="30" />
            </g>
        </svg>
    );
};

export default AnimatedLogo;
