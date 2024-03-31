import Parallax from "../animations/Paralax"





export default function MenuPage({ isDarkmodeOn }) {
  return (
    <div>
      <p>Techsupp </p>

      <div>
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Parallax>
        </section>
      </div>

    </div>
  )
}


