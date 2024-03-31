import Paralax from "../animations/Paralax"
import Google_sheet_animation from "../animations/Google_sheet_animation"
import "../styles/AnalitycPage.css"

export default function AnaliticPage({ isDarkmodeOn }) {
  return (
    <div>
      <div className="sheet_animation_cont" >
        <Google_sheet_animation isDarkmodeOn={isDarkmodeOn} />
      </div>


      <div className="sheet_paralax" >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>google sheet analitycs</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>google sheet analitycs</Paralax>
        </section>
      </div>

    </div>
  )
}


