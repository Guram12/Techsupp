import VideoAnimation from "../animations/VideoAnimation"
import "../styles/AnimationPage.css"
import Parallax from "../animations/Paralax"
import Motion_animation from "../animations/Motion_animation"




export default function AnimationPage({ isDarkmodeOn }) {
  return (
    <div>
      <div className="motion_video_container_up" >
        {/* video content should go here */}
        <Motion_animation isDarkmodeOn={isDarkmodeOn} />
      </div>


      <section>
        <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>motion designe</Parallax>
        <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>motion designe</Parallax>
      </section>
      <div className="video_animation_container" >
        <VideoAnimation />
      </div>


    </div>
  )
}

