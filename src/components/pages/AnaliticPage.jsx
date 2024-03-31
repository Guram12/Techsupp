import SheetImageAnimation from "../animations/SheetImageAnimation"
import Paralax from "../animations/Paralax"



export default function AnaliticPage({isDarkmodeOn}) {
  return (
    <div>
      <SheetImageAnimation />

      <section>
        <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Paralax>
        <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Paralax>
      </section>

    </div>
  )
}


