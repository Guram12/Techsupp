import VideoAnimation from "../animations/VideoAnimation"
import  "../styles/AnimationPage.css"
import Parallax from "../animations/Paralax"





export default function AnimationPage() {
  return (
    <div>
      <p>video animation content and about will go here</p>
      <div className="video_animation_container" >
        <VideoAnimation />
      </div>

      <section>
        <Parallax baseVelocity={-5}>website creation</Parallax>
        <Parallax baseVelocity={5}>youur designe</Parallax>
      </section>

    </div>
  )
}

