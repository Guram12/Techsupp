import Parallax from "../animations/Paralax"
import QRcodeAnimation from "../animations/QRcode_animation"




export default function MenuPage({ isDarkmodeOn }) {
  return (
    <div>
      <p>Techsupp </p>
      <QRcodeAnimation />
      <div style={{marginTop: "150px"}} >
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Parallax>
        </section>
      </div>

    </div>
  )
}


