import ITAnimation_1 from "../animations/ITAnimation_1"
import ITAnimation_2 from "../animations/ITAnimation_2"
import ITAnimation_3 from "../animations/ITAnimation_3"
import Paralax from "../animations/Paralax"
import "../styles/ITPage.css"




export default function ItPage({isDarkmodeOn}) {
  return (
    <div>

      <div className="it_container" >
        <div className="animation_cont" >
          <ITAnimation_1 />
        </div>
        <div className="animation_cont" >
          <ITAnimation_2 />
        </div>
        <div className="animation_cont" >
          <ITAnimation_3 />
        </div>
      </div>

      <div className="it_paralax_container"  >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>IT service IT service</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>IT service IT service</Paralax>
        </section>
      </div>
      <div>
        aq  chaiwereba informacia mocemuli servisebis Sesaxeb
      </div>
    </div>
  )
}


