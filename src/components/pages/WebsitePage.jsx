import Paralax from "../animations/Paralax"


export default function WebsitePage({
  isDarkmodeOn,
}) {
  return (
    <div>
      WebService page

      <div className="website_paralax_container" >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>website creation</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>youur designe</Paralax>
        </section>
      </div>
    </div>
  )
}

