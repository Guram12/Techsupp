import MembersAnimation from "../animations/MembersAnimation"
import computer from "../../assets/computer_processor_1.webp"
import matrix_background from '../../assets/matrix.webm'
import '../styles/Members.css'
import { Route, Routes, Link } from "react-router-dom";


export default function Members() {
  return (
    <div>
      <div className="video-background">
        {/* <MembersAnimation/> */}
        <video
          src={matrix_background}
          autoPlay
          loop
          muted
          playsInline
          className="fullscreen-video"
        ></video>
      </div>
      <div>
        <Link to="/">
          <button className="ui-btn"   >
            <span>
              უკან
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}