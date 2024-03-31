import SheetImageAnimation from "../animations/SheetImageAnimation"
import Paralax from "../animations/Paralax"



export default function AnaliticPage() {
  return (
    <div>
      <SheetImageAnimation />

      <section>
        <Paralax baseVelocity={-5}>website creation</Paralax>
        <Paralax baseVelocity={5}>youur designe</Paralax>
      </section>

    </div>
  )
}


