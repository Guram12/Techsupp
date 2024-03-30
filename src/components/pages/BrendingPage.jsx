// import SplineAnimation from "../animations/Spline_animation"
// import Spline_logo from "../animations/Spline_logo_animation"

import BrendingAnimation from "../animations/BrendingAnimation"
import "../styles/BrendingPage.css"




export default function BrendingPage(){
  return(
    <div>
      {/* <SplineAnimation/> */}
      {/* <Spline_logo/> */}
      <div className="brending_animation_container" >
        <BrendingAnimation/>
      </div>
    </div>
  )
}

