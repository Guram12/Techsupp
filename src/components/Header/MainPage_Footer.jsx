import "../styles/MainPage_Footer.css"
import techsupp_logo_white from "../../assets/logo_techsupp_white.svg"
import { useEffect } from "react"

export default function MainPage_Footer({isDarkmodeOn}) {


  return (
    <footer className="main_footer_container" >
      <svg viewBox="0 0 120 28">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={1} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
       1 0 0 0 0  
       0 1 0 0 0  
       0 0 1 0 0  
       0 0 0 13 -9"
              result="goo"
            />
            <xfeblend in="SourceGraphic" in2="goo" />
          </filter>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" className="wave" style={{fill: `${!isDarkmodeOn? "grey" : "black"}`}} xlinkHref="#wave" x={0} y={-2} />
        <use id="wave2" className="wave" style={{fill: `${!isDarkmodeOn? "grey" : "black"}`}}  xlinkHref="#wave" x={0} y={0} />
        <g className="gooeff" filter="url(#goo)" fill="black" >
          <circle className="drop drop1" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}} cx={20} cy={2} r="8.8" />
          <circle className="drop drop2" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={25} cy="2.5" r="7.5" />
          <circle className="drop drop3" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={16} cy="2.8" r="9.2" />
          <circle className="drop drop4" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={18} cy={2} r="8.8" />
          <circle className="drop drop5" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={22} cy="2.5" r="7.5" />
          <circle className="drop drop6" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={26} cy="2.8" r="9.2" />
          <circle className="drop drop1" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={5} cy="4.4" r="8.8" />
          <circle className="drop drop2" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={5} cy="4.1" r="7.5" />
          <circle className="drop drop3" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={8} cy="3.8" r="9.2" />
          <circle className="drop drop4" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={3} cy="4.4" r="8.8" />
          <circle className="drop drop5" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={7} cy="4.1" r="7.5" />
          <circle className="drop drop6" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx={10} cy="4.3" r="9.2" />
          <circle className="drop drop1" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="1.2" cy="5.4" r="8.8" />
          <circle className="drop drop2" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="5.2" cy="5.1" r="7.5" />
          <circle className="drop drop3" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="10.2" cy="5.3" r="9.2" />
          <circle className="drop drop4" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="3.2" cy="5.4" r="8.8" />
          <circle className="drop drop5" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="14.2" cy="5.1" r="7.5" />
          <circle className="drop drop6" style={{fill: `${isDarkmodeOn? "black" : "#8d8d8d"}`}}   cx="17.2" cy="4.8" r="9.2" />
          <use id="wave1" className="wave" style={{fill: `${!isDarkmodeOn? "grey" : "black"}`}}  xlinkHref="#wave" x={0} y={1} />
        </g>
      </svg>
      <div style={{ color: "grey" }} className="text_container_in_footer" >
        <p>Powered by TechSupp</p>
        <img className="white_logo_in_footer" src={techsupp_logo_white} alt="" />
      </div>
    </footer>

  )
}